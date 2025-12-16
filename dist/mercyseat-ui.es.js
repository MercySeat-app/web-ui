import * as d from "react";
import ie, { forwardRef as Vn, useContext as $r, createContext as ca, useId as Tl, createElement as Wr, useState as Ge, useCallback as ye, useLayoutEffect as Ml, useMemo as dt, useRef as an, useReducer as Dl, useEffect as wn, useImperativeHandle as Il, Fragment as Nl } from "react";
import * as Bn from "react-dom";
import Ll from "react-dom";
function co(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sn = { exports: {} }, $t = {};
var zo;
function Fl() {
  if (zo) return $t;
  zo = 1;
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
var $o;
function zl() {
  return $o || ($o = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === Z ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case g:
          return "Fragment";
        case C:
          return "Profiler";
        case y:
          return "StrictMode";
        case I:
          return "Suspense";
        case A:
          return "SuspenseList";
        case W:
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
          case N:
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
      if (typeof b == "object" && b !== null && b.$$typeof === N)
        return "<...>";
      try {
        var O = e(b);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var b = G.A;
      return b === null ? null : b.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(b) {
      if (H.call(b, "key")) {
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
      return X[b] || (X[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function l(b, O, D, T, K, U) {
      var _ = D.ref;
      return b = {
        $$typeof: x,
        type: b,
        key: O,
        props: D,
        _owner: T
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(b, "ref", {
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
        value: K
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function p(b, O, D, T, K, U) {
      var _ = O.children;
      if (_ !== void 0)
        if (T)
          if (B(_)) {
            for (T = 0; T < _.length; T++)
              f(_[T]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(_);
      if (H.call(O, "key")) {
        _ = e(b);
        var $ = Object.keys(O).filter(function(V) {
          return V !== "key";
        });
        T = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", k[_ + T] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          _,
          $,
          _
        ), k[_ + T] = !0);
      }
      if (_ = null, D !== void 0 && (t(D), _ = "" + D), a(O) && (t(O.key), _ = "" + O.key), "key" in O) {
        D = {};
        for (var J in O)
          J !== "key" && (D[J] = O[J]);
      } else D = O;
      return _ && s(
        D,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), l(
        b,
        _,
        D,
        o(),
        K,
        U
      );
    }
    function f(b) {
      v(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === N && (b._payload.status === "fulfilled" ? v(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function v(b) {
      return typeof b == "object" && b !== null && b.$$typeof === x;
    }
    var h = ie, x = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), E = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), G = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, B = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var L, X = {}, R = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), M = z(r(i)), k = {};
    Wt.Fragment = g, Wt.jsx = function(b, O, D) {
      var T = 1e4 > G.recentlyCreatedOwnerStacks++;
      return p(
        b,
        O,
        D,
        !1,
        T ? Error("react-stack-top-frame") : R,
        T ? z(r(b)) : M
      );
    }, Wt.jsxs = function(b, O, D) {
      var T = 1e4 > G.recentlyCreatedOwnerStacks++;
      return p(
        b,
        O,
        D,
        !0,
        T ? Error("react-stack-top-frame") : R,
        T ? z(r(b)) : M
      );
    };
  })()), Wt;
}
var Wo;
function $l() {
  return Wo || (Wo = 1, process.env.NODE_ENV === "production" ? sn.exports = Fl() : sn.exports = zl()), sn.exports;
}
var u = $l();
function la(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = la(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function da() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = la(e)) && (r && (r += " "), r += n);
  return r;
}
const Vo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Bo = da, Hn = (e, n) => (t) => {
  var r;
  if (n?.variants == null) return Bo(e, t?.class, t?.className);
  const { variants: o, defaultVariants: i } = n, a = Object.keys(o).map((l) => {
    const p = t?.[l], f = i?.[l];
    if (p === null) return null;
    const v = Vo(p) || Vo(f);
    return o[l][v];
  }), s = t && Object.entries(t).reduce((l, p) => {
    let [f, v] = p;
    return v === void 0 || (l[f] = v), l;
  }, {}), c = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, p) => {
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
      ...l,
      f,
      v
    ] : l;
  }, []);
  return Bo(e, a, c, t?.class, t?.className);
}, Wl = (e, n) => {
  const t = new Array(e.length + n.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e[r];
  for (let r = 0; r < n.length; r++)
    t[e.length + r] = n[r];
  return t;
}, Vl = (e, n) => ({
  classGroupId: e,
  validator: n
}), ua = (e = /* @__PURE__ */ new Map(), n = null, t) => ({
  nextPart: e,
  validators: n,
  classGroupId: t
}), kn = "-", Ho = [], Bl = "arbitrary..", Hl = (e) => {
  const n = Gl(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return Ul(a);
      const s = a.split(kn), c = s[0] === "" && s.length > 1 ? 1 : 0;
      return pa(s, c, n);
    },
    getConflictingClassGroupIds: (a, s) => {
      if (s) {
        const c = r[a], l = t[a];
        return c ? l ? Wl(l, c) : c : l || Ho;
      }
      return t[a] || Ho;
    }
  };
}, pa = (e, n, t) => {
  if (e.length - n === 0)
    return t.classGroupId;
  const o = e[n], i = t.nextPart.get(o);
  if (i) {
    const l = pa(e, n + 1, i);
    if (l) return l;
  }
  const a = t.validators;
  if (a === null)
    return;
  const s = n === 0 ? e.join(kn) : e.slice(n).join(kn), c = a.length;
  for (let l = 0; l < c; l++) {
    const p = a[l];
    if (p.validator(s))
      return p.classGroupId;
  }
}, Ul = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), t = n.indexOf(":"), r = n.slice(0, t);
  return r ? Bl + r : void 0;
})(), Gl = (e) => {
  const {
    theme: n,
    classGroups: t
  } = e;
  return ql(t, n);
}, ql = (e, n) => {
  const t = ua();
  for (const r in e) {
    const o = e[r];
    lo(o, t, r, n);
  }
  return t;
}, lo = (e, n, t, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const a = e[i];
    Yl(a, n, t, r);
  }
}, Yl = (e, n, t, r) => {
  if (typeof e == "string") {
    Kl(e, n, t);
    return;
  }
  if (typeof e == "function") {
    Zl(e, n, t, r);
    return;
  }
  Xl(e, n, t, r);
}, Kl = (e, n, t) => {
  const r = e === "" ? n : fa(n, e);
  r.classGroupId = t;
}, Zl = (e, n, t, r) => {
  if (Jl(e)) {
    lo(e(r), n, t, r);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(Vl(t, e));
}, Xl = (e, n, t, r) => {
  const o = Object.entries(e), i = o.length;
  for (let a = 0; a < i; a++) {
    const [s, c] = o[a];
    lo(c, fa(n, s), t, r);
  }
}, fa = (e, n) => {
  let t = e;
  const r = n.split(kn), o = r.length;
  for (let i = 0; i < o; i++) {
    const a = r[i];
    let s = t.nextPart.get(a);
    s || (s = ua(), t.nextPart.set(a, s)), t = s;
  }
  return t;
}, Jl = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Ql = (e) => {
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
}, Vr = "!", Uo = ":", ed = [], Go = (e, n, t, r, o) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: t,
  maybePostfixModifierPosition: r,
  isExternal: o
}), td = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: t
  } = e;
  let r = (o) => {
    const i = [];
    let a = 0, s = 0, c = 0, l;
    const p = o.length;
    for (let m = 0; m < p; m++) {
      const g = o[m];
      if (a === 0 && s === 0) {
        if (g === Uo) {
          i.push(o.slice(c, m)), c = m + 1;
          continue;
        }
        if (g === "/") {
          l = m;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? s++ : g === ")" && s--;
    }
    const f = i.length === 0 ? o : o.slice(c);
    let v = f, h = !1;
    f.endsWith(Vr) ? (v = f.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(Vr) && (v = f.slice(1), h = !0)
    );
    const x = l && l > c ? l - c : void 0;
    return Go(i, h, v, x);
  };
  if (n) {
    const o = n + Uo, i = r;
    r = (a) => a.startsWith(o) ? i(a.slice(o.length)) : Go(ed, !1, a, void 0, !0);
  }
  if (t) {
    const o = r;
    r = (i) => t({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, nd = (e) => {
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
}, rd = (e) => ({
  cache: Ql(e.cacheSize),
  parseClassName: td(e),
  sortModifiers: nd(e),
  ...Hl(e)
}), od = /\s+/, id = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = n, a = [], s = e.trim().split(od);
  let c = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const p = s[l], {
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
    const C = v.length === 0 ? "" : v.length === 1 ? v[0] : i(v).join(":"), S = h ? C + Vr : C, E = S + y;
    if (a.indexOf(E) > -1)
      continue;
    a.push(E);
    const w = o(y, g);
    for (let I = 0; I < w.length; ++I) {
      const A = w[I];
      a.push(S + A);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
}, ad = (...e) => {
  let n = 0, t, r, o = "";
  for (; n < e.length; )
    (t = e[n++]) && (r = ma(t)) && (o && (o += " "), o += r);
  return o;
}, ma = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = ma(e[r])) && (t && (t += " "), t += n);
  return t;
}, sd = (e, ...n) => {
  let t, r, o, i;
  const a = (c) => {
    const l = n.reduce((p, f) => f(p), e());
    return t = rd(l), r = t.cache.get, o = t.cache.set, i = s, s(c);
  }, s = (c) => {
    const l = r(c);
    if (l)
      return l;
    const p = id(c, t);
    return o(c, p), p;
  };
  return i = a, (...c) => i(ad(...c));
}, cd = [], we = (e) => {
  const n = (t) => t[e] || cd;
  return n.isThemeGetter = !0, n;
}, va = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ha = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ld = /^\d+\/\d+$/, dd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ud = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, pd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, fd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, md = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, wt = (e) => ld.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), tt = (e) => !!e && Number.isInteger(Number(e)), mr = (e) => e.endsWith("%") && ae(e.slice(0, -1)), Ue = (e) => dd.test(e), vd = () => !0, hd = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ud.test(e) && !pd.test(e)
), ga = () => !1, gd = (e) => fd.test(e), xd = (e) => md.test(e), bd = (e) => !q(e) && !Y(e), yd = (e) => Tt(e, ya, ga), q = (e) => va.test(e), lt = (e) => Tt(e, wa, hd), vr = (e) => Tt(e, _d, ae), qo = (e) => Tt(e, xa, ga), wd = (e) => Tt(e, ba, xd), cn = (e) => Tt(e, Ca, gd), Y = (e) => ha.test(e), Vt = (e) => Mt(e, wa), Cd = (e) => Mt(e, kd), Yo = (e) => Mt(e, xa), Sd = (e) => Mt(e, ya), Ed = (e) => Mt(e, ba), ln = (e) => Mt(e, Ca, !0), Tt = (e, n, t) => {
  const r = va.exec(e);
  return r ? r[1] ? n(r[1]) : t(r[2]) : !1;
}, Mt = (e, n, t = !1) => {
  const r = ha.exec(e);
  return r ? r[1] ? n(r[1]) : t : !1;
}, xa = (e) => e === "position" || e === "percentage", ba = (e) => e === "image" || e === "url", ya = (e) => e === "length" || e === "size" || e === "bg-size", wa = (e) => e === "length", _d = (e) => e === "number", kd = (e) => e === "family-name", Ca = (e) => e === "shadow", Rd = () => {
  const e = we("color"), n = we("font"), t = we("text"), r = we("font-weight"), o = we("tracking"), i = we("leading"), a = we("breakpoint"), s = we("container"), c = we("spacing"), l = we("radius"), p = we("shadow"), f = we("inset-shadow"), v = we("text-shadow"), h = we("drop-shadow"), x = we("blur"), m = we("perspective"), g = we("aspect"), y = we("ease"), C = we("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], w = () => [...E(), Y, q], I = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], P = () => [Y, q, c], N = () => [wt, "full", "auto", ...P()], W = () => [tt, "none", "subgrid", Y, q], Z = () => ["auto", {
    span: ["full", tt, Y, q]
  }, tt, Y, q], G = () => [tt, "auto", Y, q], H = () => ["auto", "min", "max", "fr", Y, q], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...P()], X = () => [wt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], R = () => [e, Y, q], M = () => [...E(), Yo, qo, {
    position: [Y, q]
  }], k = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], b = () => ["auto", "cover", "contain", Sd, yd, {
    size: [Y, q]
  }], O = () => [mr, Vt, lt], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    Y,
    q
  ], T = () => ["", ae, Vt, lt], K = () => ["solid", "dashed", "dotted", "double"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _ = () => [ae, mr, Yo, qo], $ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    Y,
    q
  ], J = () => ["none", ae, Y, q], V = () => ["none", ae, Y, q], re = () => [ae, Y, q], j = () => [wt, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ue],
      breakpoint: [Ue],
      color: [vd],
      container: [Ue],
      "drop-shadow": [Ue],
      ease: ["in", "out", "in-out"],
      font: [bd],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ue],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ue],
      shadow: [Ue],
      spacing: ["px", ae],
      text: [Ue],
      "text-shadow": [Ue],
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
        aspect: ["auto", "square", wt, q, Y, g]
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
        columns: [ae, q, Y, s]
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
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
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
        inset: N()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": N()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": N()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: N()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: N()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: N()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: N()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: N()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: N()
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
        z: [tt, "auto", Y, q]
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
        flex: [ae, wt, "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, Y, q]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, Y, q]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [tt, "first", "last", "none", Y, q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": W()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Z()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": W()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Z()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
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
        "auto-cols": H()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": H()
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
        justify: [...B(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...B()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": B()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...z()]
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
        size: X()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...X()]
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
          ...X()
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
          ...X()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...X()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...X()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...X()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, Vt, lt]
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
        font: [r, Y, vr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", mr, q]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Cd, q, n]
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
        tracking: [o, Y, q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ae, "none", Y, vr]
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
        "list-image": ["none", Y, q]
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
        list: ["disc", "decimal", "none", Y, q]
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", Y, lt]
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
        "underline-offset": [ae, "auto", Y, q]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y, q]
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
        content: ["none", Y, q]
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
        bg: k()
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
          }, tt, Y, q],
          radial: ["", Y, q],
          conic: [tt, Y, q]
        }, Ed, wd]
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
        border: [...K(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...K(), "hidden", "none"]
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
        outline: [...K(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, Y, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, Vt, lt]
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
        "ring-offset": [ae, lt]
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
        opacity: [ae, Y, q]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...U(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": U()
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
        "mask-linear-from": _()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": _()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": R()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": _()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": _()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": R()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": _()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": _()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": R()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": _()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": _()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": R()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": _()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": _()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": R()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": _()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": _()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": R()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": _()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": _()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": R()
      }],
      "mask-image-radial": [{
        "mask-radial": [Y, q]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": _()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": _()
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
        "mask-conic-from": _()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": _()
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
        mask: k()
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
        mask: ["none", Y, q]
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
          Y,
          q
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: $()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, Y, q]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, Y, q]
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
        grayscale: ["", ae, Y, q]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, Y, q]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, Y, q]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, Y, q]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, Y, q]
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
          Y,
          q
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": $()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, Y, q]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, Y, q]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, Y, q]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, Y, q]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, Y, q]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, Y, q]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, Y, q]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, Y, q]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Y, q]
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
        duration: [ae, "initial", Y, q]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, Y, q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ae, Y, q]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, Y, q]
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
        perspective: [m, Y, q]
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
        rotate: J()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": J()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": J()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": J()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: V()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": V()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": V()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": V()
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
        transform: [Y, q, "", "none", "gpu", "cpu"]
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
        translate: j()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": j()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": j()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": j()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y, q]
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
        "will-change": ["auto", "scroll", "contents", "transform", Y, q]
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
        stroke: [ae, Vt, lt, vr]
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
}, Pd = /* @__PURE__ */ sd(Rd);
function ne(...e) {
  return Pd(da(e));
}
const Ad = Hn(
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
        "success-filled": "bg-turquoise-green hover:bg-turquoise-green-800 focus-visible:bg-turquoise-green-900 text-white disabled:bg-turquoise-green-200",
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
function kb({
  className: e,
  variant: n,
  size: t,
  ...r
}) {
  return /* @__PURE__ */ u.jsx(
    "span",
    {
      "data-slot": "badge",
      role: "status",
      className: ne(Ad({ variant: n, size: t, className: e })),
      ...r
    }
  );
}
function Ko(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function en(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const i = Ko(o, n);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Ko(e[o], null);
        }
      };
  };
}
function ue(...e) {
  return d.useCallback(en(...e), e);
}
var jd = Symbol.for("react.lazy"), Rn = d[" use ".trim().toString()];
function Od(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Sa(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === jd && "_payload" in e && Od(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Ea(e) {
  const n = /* @__PURE__ */ Td(e), t = d.forwardRef((r, o) => {
    let { children: i, ...a } = r;
    Sa(i) && typeof Rn == "function" && (i = Rn(i._payload));
    const s = d.Children.toArray(i), c = s.find(Dd);
    if (c) {
      const l = c.props.children, p = s.map((f) => f === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ u.jsx(n, { ...a, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, p) : null });
    }
    return /* @__PURE__ */ u.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
var uo = /* @__PURE__ */ Ea("Slot");
// @__NO_SIDE_EFFECTS__
function Td(e) {
  const n = d.forwardRef((t, r) => {
    let { children: o, ...i } = t;
    if (Sa(o) && typeof Rn == "function" && (o = Rn(o._payload)), d.isValidElement(o)) {
      const a = Nd(o), s = Id(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? en(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Md = Symbol("radix.slottable");
function Dd(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Md;
}
function Id(e, n) {
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
function Nd(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
const Ld = Hn(
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
function Fd({
  className: e,
  variant: n,
  size: t,
  asChild: r = !1,
  ...o
}) {
  const i = r ? uo : "button";
  return /* @__PURE__ */ u.jsx(
    i,
    {
      "data-slot": "button",
      className: ne(Ld({ variant: n, size: t, className: e })),
      ...o
    }
  );
}
var zd = (e) => e.type === "checkbox", Ut = (e) => e instanceof Date, po = (e) => e == null;
const _a = (e) => typeof e == "object";
var pt = (e) => !po(e) && !Array.isArray(e) && _a(e) && !Ut(e), $d = (e) => pt(e) && e.target ? zd(e.target) ? e.target.checked : e.target.value : e, Wd = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Vd = (e, n) => e.has(Wd(n)), Bd = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return pt(n) && n.hasOwnProperty("isPrototypeOf");
}, Hd = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ka(e) {
  let n;
  const t = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    n = new Date(e);
  else if (!(Hd && (e instanceof Blob || r)) && (t || pt(e)))
    if (n = t ? [] : Object.create(Object.getPrototypeOf(e)), !t && !Bd(e))
      n = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (n[o] = ka(e[o]));
  else
    return e;
  return n;
}
var Ra = (e) => /^\w*$/.test(e), Br = (e) => e === void 0, Ud = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Pa = (e) => Ud(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Re = (e, n, t) => {
  if (!n || !pt(e))
    return t;
  const r = (Ra(n) ? [n] : Pa(n)).reduce((o, i) => po(o) ? o : o[i], e);
  return Br(r) || r === e ? Br(e[n]) ? t : e[n] : r;
}, hr = (e) => typeof e == "boolean", Zo = (e, n, t) => {
  let r = -1;
  const o = Ra(n) ? [n] : Pa(n), i = o.length, a = i - 1;
  for (; ++r < i; ) {
    const s = o[r];
    let c = t;
    if (r !== a) {
      const l = e[s];
      c = pt(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = c, e = e[s];
  }
};
const Xo = {
  BLUR: "blur",
  CHANGE: "change"
}, Jo = {
  all: "all"
}, fo = ie.createContext(null);
fo.displayName = "HookFormContext";
const Un = () => ie.useContext(fo), Gd = (e) => {
  const { children: n, ...t } = e;
  return ie.createElement(fo.Provider, { value: t }, n);
};
var qd = (e, n, t, r = !0) => {
  const o = {
    defaultValues: n._defaultValues
  };
  for (const i in e)
    Object.defineProperty(o, i, {
      get: () => {
        const a = i;
        return n._proxyFormState[a] !== Jo.all && (n._proxyFormState[a] = !r || Jo.all), t && (t[a] = !0), e[a];
      }
    });
  return o;
};
const Aa = typeof window < "u" ? ie.useLayoutEffect : ie.useEffect;
function ja(e) {
  const n = Un(), { control: t = n.control, disabled: r, name: o, exact: i } = e || {}, [a, s] = ie.useState(t._formState), c = ie.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Aa(() => t._subscribe({
    name: o,
    formState: c.current,
    exact: i,
    callback: (l) => {
      !r && s({
        ...t._formState,
        ...l
      });
    }
  }), [o, r, i]), ie.useEffect(() => {
    c.current.isValid && t._setValid(!0);
  }, [t]), ie.useMemo(() => qd(a, t, c.current, !1), [a, t]);
}
var Yd = (e) => typeof e == "string", Qo = (e, n, t, r, o) => Yd(e) ? Re(t, e, o) : Array.isArray(e) ? e.map((i) => Re(t, i)) : t, ei = (e) => po(e) || !_a(e);
function Cn(e, n, t = /* @__PURE__ */ new WeakSet()) {
  if (ei(e) || ei(n))
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
function Kd(e) {
  const n = Un(), { control: t = n.control, name: r, defaultValue: o, disabled: i, exact: a, compute: s } = e || {}, c = ie.useRef(o), l = ie.useRef(s), p = ie.useRef(void 0), f = ie.useRef(t), v = ie.useRef(r);
  l.current = s;
  const [h, x] = ie.useState(() => {
    const E = t._getWatch(r, c.current);
    return l.current ? l.current(E) : E;
  }), m = ie.useCallback((E) => {
    const w = Qo(r, t._names, E || t._formValues, !1, c.current);
    return l.current ? l.current(w) : w;
  }, [t._formValues, t._names, r]), g = ie.useCallback((E) => {
    if (!i) {
      const w = Qo(r, t._names, E || t._formValues, !1, c.current);
      if (l.current) {
        const I = l.current(w);
        Cn(I, p.current) || (x(I), p.current = I);
      } else
        x(w);
    }
  }, [t._formValues, t._names, i, r]);
  Aa(() => ((f.current !== t || !Cn(v.current, r)) && (f.current = t, v.current = r, g()), t._subscribe({
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
function Zd(e) {
  const n = Un(), { name: t, disabled: r, control: o = n.control, shouldUnregister: i, defaultValue: a, exact: s = !0 } = e, c = Vd(o._names.array, t), l = ie.useMemo(() => Re(o._formValues, t, Re(o._defaultValues, t, a)), [o, t, a]), p = Kd({
    control: o,
    name: t,
    defaultValue: l,
    exact: s
  }), f = ja({
    control: o,
    name: t,
    exact: s
  }), v = ie.useRef(e), h = ie.useRef(void 0), x = ie.useRef(o.register(t, {
    ...e.rules,
    value: p,
    ...hr(e.disabled) ? { disabled: e.disabled } : {}
  }));
  v.current = e;
  const m = ie.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Re(f.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Re(f.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Re(f.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Re(f.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => Re(f.errors, t)
    }
  }), [f, t]), g = ie.useCallback((E) => x.current.onChange({
    target: {
      value: $d(E),
      name: t
    },
    type: Xo.CHANGE
  }), [t]), y = ie.useCallback(() => x.current.onBlur({
    target: {
      value: Re(o._formValues, t),
      name: t
    },
    type: Xo.BLUR
  }), [t, o._formValues]), C = ie.useCallback((E) => {
    const w = Re(o._fields, t);
    w && E && (w._f.ref = {
      focus: () => E.focus && E.focus(),
      select: () => E.select && E.select(),
      setCustomValidity: (I) => E.setCustomValidity(I),
      reportValidity: () => E.reportValidity()
    });
  }, [o._fields, t]), S = ie.useMemo(() => ({
    name: t,
    value: p,
    ...hr(r) || f.disabled ? { disabled: f.disabled || r } : {},
    onChange: g,
    onBlur: y,
    ref: C
  }), [t, r, f.disabled, g, y, C, p]);
  return ie.useEffect(() => {
    const E = o._options.shouldUnregister || i, w = h.current;
    w && w !== t && !c && o.unregister(w), o.register(t, {
      ...v.current.rules,
      ...hr(v.current.disabled) ? { disabled: v.current.disabled } : {}
    });
    const I = (A, P) => {
      const N = Re(o._fields, A);
      N && N._f && (N._f.mount = P);
    };
    if (I(t, !0), E) {
      const A = ka(Re(o._options.defaultValues, t, v.current.defaultValue));
      Zo(o._defaultValues, t, A), Br(Re(o._formValues, t)) && Zo(o._formValues, t, A);
    }
    return !c && o.register(t), h.current = t, () => {
      (c ? E && !o._state.action : E) ? o.unregister(t) : I(t, !1);
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
const Xd = (e) => e.render(Zd(e)), Oa = Vn(
  ({ className: e, children: n, required: t, ...r }, o) => /* @__PURE__ */ u.jsxs(
    "label",
    {
      ref: o,
      "data-slot": "label",
      className: ne("font-sans font-medium text-sm text-gray-700", e),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx("span", { children: n }),
        t ? /* @__PURE__ */ u.jsx("span", { className: "text-base font-normal text-bright-red-600 ml-1 leading-[22px]", children: "*" }) : null
      ]
    }
  )
);
Oa.displayName = "Label";
const Rb = Gd, Ta = ca(
  {}
), Pb = ({
  ...e
}) => /* @__PURE__ */ u.jsx(Ta.Provider, { value: { name: e.name }, children: /* @__PURE__ */ u.jsx(Xd, { ...e }) }), Gn = () => {
  const e = $r(Ta), n = $r(Ma), { getFieldState: t } = Un(), r = ja({ name: e.name }), o = t(e.name, r);
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
}, Ma = ca(
  {}
);
function Ab({ className: e, ...n }) {
  const t = Tl();
  return /* @__PURE__ */ u.jsx(Ma.Provider, { value: { id: t }, children: /* @__PURE__ */ u.jsx(
    "div",
    {
      "data-slot": "form-item",
      className: ne("grid gap-2", e),
      ...n
    }
  ) });
}
function jb({
  className: e,
  ...n
}) {
  const { error: t, formItemId: r } = Gn();
  return /* @__PURE__ */ u.jsx(
    Oa,
    {
      "data-slot": "form-label",
      "data-error": !!t,
      className: e,
      htmlFor: r,
      ...n
    }
  );
}
function Ob({ ...e }) {
  const { error: n, formItemId: t, formDescriptionId: r, formMessageId: o } = Gn();
  return /* @__PURE__ */ u.jsx(
    uo,
    {
      "data-slot": "form-control",
      id: t,
      "aria-describedby": n ? `${r} ${o}` : `${r}`,
      "aria-invalid": !!n,
      ...e
    }
  );
}
function Tb({ className: e, ...n }) {
  const { formDescriptionId: t } = Gn();
  return /* @__PURE__ */ u.jsx(
    "p",
    {
      "data-slot": "form-description",
      id: t,
      className: ne("text-muted-foreground text-sm", e),
      ...n
    }
  );
}
function Mb({ className: e, ...n }) {
  const { error: t, formMessageId: r } = Gn(), o = t ? String(t?.message ?? "") : n.children;
  return o ? /* @__PURE__ */ u.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: ne("text-destructive text-sm", e),
      ...n,
      children: o
    }
  ) : null;
}
function Ne(e, n = {}) {
  const t = typeof e == "number" ? `${e}` : e ?? "24", r = typeof n["aria-label"] == "string";
  return {
    width: t,
    height: t,
    role: r ? "img" : "presentation",
    "aria-hidden": r ? void 0 : !0,
    ...n
  };
}
function Jd({ size: e, className: n, ...t }) {
  const r = Ne(e, t);
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: ne("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M11.1111 6.52632C13.8146 6.59229 16.4568 5.7579 18.5778 4.16842C18.7098 4.07459 18.8669 4.01745 19.0313 4.0034C19.1957 3.98936 19.361 4.01896 19.5086 4.0889C19.6563 4.15884 19.7805 4.26635 19.8672 4.39938C19.954 4.53242 20 4.68572 20 4.84211V14.9474C20 15.1038 19.954 15.2571 19.8672 15.3901C19.7805 15.5231 19.6563 15.6306 19.5086 15.7006C19.361 15.7705 19.1957 15.8001 19.0313 15.7861C18.8669 15.772 18.7098 15.7149 18.5778 15.621C16.4568 14.0316 13.8146 13.1972 11.1111 13.2632H5.77778C5.30628 13.2632 4.8541 13.0857 4.5207 12.7699C4.1873 12.454 4 12.0256 4 11.5789V8.21052C4 7.76384 4.1873 7.33546 4.5207 7.01961C4.8541 6.70376 5.30628 6.52632 5.77778 6.52632H11.1111Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M6.66675 13.2632C6.66675 15.4496 7.41531 17.5771 8.80008 19.3263C9.08298 19.6837 9.50413 19.9199 9.97089 19.9831C10.4376 20.0462 10.9118 19.9312 11.289 19.6632C11.6662 19.3951 11.9155 18.9962 11.9822 18.554C12.0489 18.1118 11.9274 17.6626 11.6445 17.3053C10.7213 16.1391 10.2223 14.7208 10.2223 13.2632",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
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
function Qd({ size: e, className: n, ...t }) {
  const r = Ne(e, t);
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: ne("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M5.76123 9.17699V22H18.239V9.17699C18.239 8.35073 17.8982 7.56104 17.2971 6.99422L14.0582 3.94042C12.9025 2.85078 11.0978 2.85078 9.9421 3.94042L6.7032 6.99422C6.10202 7.56104 5.76123 8.35073 5.76123 9.17699Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M20.3964 12.2174L18.239 10.9483V22H19.8754C20.98 22 21.8754 21.1046 21.8754 20V14.8032C21.8754 13.7401 21.3128 12.7564 20.3964 12.2174Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M3.6038 12.2174L5.76123 10.9483V22H4.12486C3.02029 22 2.12486 21.1046 2.12486 20V14.8032C2.12486 13.7401 2.68748 12.7564 3.6038 12.2174Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M12.0002 7.28268V12",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M13.9609 9.15826H10.0393",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
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
function eu({ size: e, className: n, ...t }) {
  const r = Ne(e, t);
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: ne("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
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
function tu({ size: e, className: n, ...t }) {
  const r = Ne(e, t);
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: ne("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M16 2V6",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M8 2V6",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
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
function nu({ size: e, className: n, ...t }) {
  const r = Ne(e, t);
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: ne("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M20 12V22H4V12",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M22 7H2V12H22V7Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M12 22V7",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
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
function ru({ size: e, className: n, ...t }) {
  const r = Ne(e, t);
  return /* @__PURE__ */ u.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: ne("inline-block", n),
      ...r,
      children: /* @__PURE__ */ u.jsx(
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
function ou({ size: e, className: n, ...t }) {
  const r = Ne(e, t);
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: ne("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M4 20C4 18.8954 4.89543 18 6 18H20V22H6C4.89543 22 4 21.1046 4 20V20Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M4 4C4 2.89543 4.89543 2 6 2H20V22H6C4.89543 22 4 21.1046 4 20V4Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ u.jsx("path", { d: "M12 6.16666L12 14.5", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ u.jsx("path", { d: "M9 9.08334L15 9.08334", stroke: "currentColor", strokeWidth: "1.5" })
      ]
    }
  );
}
function iu({ size: e, className: n, ...t }) {
  const r = Ne(e, t);
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: ne("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
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
function au({ size: e, className: n, ...t }) {
  const r = Ne(e, t);
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: ne("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M21.791 9.85414C21.6806 9.41327 21.4559 9.00933 21.1395 8.68312C20.823 8.3569 20.4261 8.11997 19.9888 7.99625C18.3911 7.60609 11.9999 7.60609 11.9999 7.60609C11.9999 7.60609 5.60879 7.60609 4.011 8.03341C3.5737 8.15713 3.17679 8.39406 2.86036 8.72028C2.54394 9.04649 2.3192 9.45043 2.20885 9.8913C1.91643 11.5128 1.7734 13.1577 1.78154 14.8054C1.77111 16.4655 1.91416 18.1229 2.20885 19.7567C2.3305 20.1839 2.56028 20.5724 2.87597 20.8849C3.19166 21.1973 3.58259 21.423 4.011 21.5402C5.60879 21.9676 11.9999 21.9676 11.9999 21.9676C11.9999 21.9676 18.3911 21.9676 19.9888 21.5402C20.4261 21.4165 20.823 21.1796 21.1395 20.8534C21.4559 20.5272 21.6806 20.1232 21.791 19.6824C22.0811 18.073 22.2242 16.4407 22.2183 14.8054C22.2287 13.1453 22.0857 11.4879 21.791 9.85414Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M3.09961 8.09392V6.89661C3.19992 6.49584 3.40422 6.12864 3.69186 5.8321C3.97951 5.53556 4.34032 5.32017 4.73784 5.20771C6.1903 4.81926 12.0001 4.81926 12.0001 4.81926C12.0001 4.81926 17.8099 4.81926 19.2624 5.17393C19.6599 5.2864 20.0207 5.50178 20.3084 5.79832C20.596 6.09486 20.8003 6.46206 20.9006 6.86283V8.09392",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M3.9895 5.40155V3.90205C4.07978 3.54135 4.26365 3.21088 4.52253 2.94399C4.78141 2.6771 5.10614 2.48326 5.46391 2.38204C6.77112 2.03243 12 2.03243 12 2.03243C12 2.03243 17.2288 2.03243 18.536 2.35163C18.8938 2.45286 19.2185 2.6467 19.4774 2.91359C19.7363 3.18048 19.9201 3.51095 20.0104 3.87165V5.40155",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
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
function su({ size: e, className: n, ...t }) {
  const r = Ne(e, t);
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: ne("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M14.022 10.9211L12.4757 4.09878C12.232 3.02346 13.0494 2 14.152 2C14.8038 2 15.3995 2.36863 15.6903 2.95192L21.2123 14.0276C21.7141 15.0341 21.769 16.2053 21.3635 17.2544L20.518 19.442C19.9222 20.9836 18.4397 22 16.787 22H16C13.7909 22 12 20.2091 12 18V12.9603C12 11.8341 12.913 10.9211 14.0392 10.9211C15.1654 10.9211 16.0784 11.8341 16.0784 12.9603V17.0633",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
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
function cu({ size: e, className: n, ...t }) {
  const r = Ne(e, t);
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: ne("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M3 10H21",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M19.2 6H4.8C3.80589 6 3 6.76751 3 7.71429V16.2857C3 17.2325 3.80589 18 4.8 18H19.2C20.1941 18 21 17.2325 21 16.2857V7.71429C21 6.76751 20.1941 6 19.2 6Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ u.jsx(
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
const lu = {
  announcement: Jd,
  church: Qd,
  class: eu,
  event: tu,
  gift: nu,
  home: ru,
  ministry: ou,
  podcast: iu,
  series: au,
  sermon: su,
  subscription: cu
};
function Db({ name: e, ...n }) {
  const t = lu[e];
  return /* @__PURE__ */ u.jsx(t, { ...n });
}
function du({ className: e, type: n, ...t }) {
  return /* @__PURE__ */ u.jsx(
    "input",
    {
      type: n,
      "data-slot": "input",
      className: ne(
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
const uu = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), pu = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), ti = (e) => {
  const n = pu(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Da = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), fu = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
var mu = {
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
const vu = Vn(
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
      ...mu,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: Da("lucide", o),
      ...!i && !fu(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([l, p]) => Wr(l, p)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const Ze = (e, n) => {
  const t = Vn(
    ({ className: r, ...o }, i) => Wr(vu, {
      ref: i,
      iconNode: n,
      className: Da(
        `lucide-${uu(ti(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return t.displayName = ti(e), t;
};
const hu = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], gu = Ze("check", hu);
const xu = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ia = Ze("chevron-down", xu);
const bu = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], yu = Ze("chevron-right", bu);
const wu = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Cu = Ze("chevron-left", wu);
const Su = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Eu = Ze("chevron-up", Su);
const _u = [
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
], ku = Ze("eye-off", _u);
const Ru = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Pu = Ze("eye", Ru);
const Au = [["path", { d: "M5 12h14", key: "1ays0h" }]], ju = Ze("minus", Au);
const Ou = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Na = Ze("x", Ou);
function Ib({
  className: e,
  ...n
}) {
  const [t, r] = Ge(!1), o = ye(() => {
    r((i) => !i);
  }, []);
  return /* @__PURE__ */ u.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ u.jsx(
      du,
      {
        ...n,
        "data-slot": "input",
        className: ne(e, "pr-10"),
        type: t ? "text" : "password"
      }
    ),
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        type: "button",
        className: "absolute right-0 top-0 size-10 flex items-center justify-center",
        onClick: o,
        children: [
          t && /* @__PURE__ */ u.jsx(ku, { className: "size-4 text-gray-300" }),
          !t && /* @__PURE__ */ u.jsx(Pu, { className: "size-4 text-gray-300" })
        ]
      }
    )
  ] });
}
var Tu = Object.defineProperty, Mu = Object.defineProperties, Du = Object.getOwnPropertyDescriptors, Pn = Object.getOwnPropertySymbols, La = Object.prototype.hasOwnProperty, Fa = Object.prototype.propertyIsEnumerable, ni = (e, n, t) => n in e ? Tu(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Iu = (e, n) => {
  for (var t in n || (n = {})) La.call(n, t) && ni(e, t, n[t]);
  if (Pn) for (var t of Pn(n)) Fa.call(n, t) && ni(e, t, n[t]);
  return e;
}, Nu = (e, n) => Mu(e, Du(n)), Lu = (e, n) => {
  var t = {};
  for (var r in e) La.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && Pn) for (var r of Pn(e)) n.indexOf(r) < 0 && Fa.call(e, r) && (t[r] = e[r]);
  return t;
};
function Fu(e) {
  let n = setTimeout(e, 0), t = setTimeout(e, 10), r = setTimeout(e, 50);
  return [n, t, r];
}
function zu(e) {
  let n = d.useRef();
  return d.useEffect(() => {
    n.current = e;
  }), n.current;
}
var $u = 18, za = 40, Wu = `${za}px`, Vu = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function Bu({ containerRef: e, inputRef: n, pushPasswordManagerStrategy: t, isFocused: r }) {
  let [o, i] = d.useState(!1), [a, s] = d.useState(!1), [c, l] = d.useState(!1), p = d.useMemo(() => t === "none" ? !1 : (t === "increase-width" || t === "experimental-no-flickering") && o && a, [o, a, t]), f = d.useCallback(() => {
    let v = e.current, h = n.current;
    if (!v || !h || c || t === "none") return;
    let x = v, m = x.getBoundingClientRect().left + x.offsetWidth, g = x.getBoundingClientRect().top + x.offsetHeight / 2, y = m - $u, C = g;
    document.querySelectorAll(Vu).length === 0 && document.elementFromPoint(y, C) === v || (i(!0), l(!0));
  }, [e, n, c, t]);
  return d.useEffect(() => {
    let v = e.current;
    if (!v || t === "none") return;
    function h() {
      let m = window.innerWidth - v.getBoundingClientRect().right;
      s(m >= za);
    }
    h();
    let x = setInterval(h, 1e3);
    return () => {
      clearInterval(x);
    };
  }, [e, t]), d.useEffect(() => {
    let v = r || document.activeElement === n.current;
    if (t === "none" || !v) return;
    let h = setTimeout(f, 0), x = setTimeout(f, 2e3), m = setTimeout(f, 5e3), g = setTimeout(() => {
      l(!0);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(x), clearTimeout(m), clearTimeout(g);
    };
  }, [n, r, t, f]), { hasPWMBadge: o, willPushPWMBadge: p, PWM_BADGE_SPACE_WIDTH: Wu };
}
var $a = d.createContext({}), Wa = d.forwardRef((e, n) => {
  var t = e, { value: r, onChange: o, maxLength: i, textAlign: a = "left", pattern: s, placeholder: c, inputMode: l = "numeric", onComplete: p, pushPasswordManagerStrategy: f = "increase-width", pasteTransformer: v, containerClassName: h, noScriptCSSFallback: x = Hu, render: m, children: g } = t, y = Lu(t, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), C, S, E, w, I;
  let [A, P] = d.useState(typeof y.defaultValue == "string" ? y.defaultValue : ""), N = r ?? A, W = zu(N), Z = d.useCallback((Q) => {
    o?.(Q), P(Q);
  }, [o]), G = d.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), H = d.useRef(null), B = d.useRef(null), z = d.useRef({ value: N, onChange: Z, isIOS: typeof window < "u" && ((S = (C = window?.CSS) == null ? void 0 : C.supports) == null ? void 0 : S.call(C, "-webkit-touch-callout", "none")) }), L = d.useRef({ prev: [(E = H.current) == null ? void 0 : E.selectionStart, (w = H.current) == null ? void 0 : w.selectionEnd, (I = H.current) == null ? void 0 : I.selectionDirection] });
  d.useImperativeHandle(n, () => H.current, []), d.useEffect(() => {
    let Q = H.current, oe = B.current;
    if (!Q || !oe) return;
    z.current.value !== Q.value && z.current.onChange(Q.value), L.current.prev = [Q.selectionStart, Q.selectionEnd, Q.selectionDirection];
    function be() {
      if (document.activeElement !== Q) {
        O(null), T(null);
        return;
      }
      let fe = Q.selectionStart, Ce = Q.selectionEnd, yt = Q.selectionDirection, Pe = Q.maxLength, He = Q.value, F = L.current.prev, ee = -1, de = -1, ve;
      if (He.length !== 0 && fe !== null && Ce !== null) {
        let Lt = fe === Ce, Ft = fe === He.length && He.length < Pe;
        if (Lt && !Ft) {
          let Te = fe;
          if (Te === 0) ee = 0, de = 1, ve = "forward";
          else if (Te === Pe) ee = Te - 1, de = Te, ve = "backward";
          else if (Pe > 1 && He.length > 1) {
            let et = 0;
            if (F[0] !== null && F[1] !== null) {
              ve = Te < F[1] ? "backward" : "forward";
              let zt = F[0] === F[1] && F[0] < Pe;
              ve === "backward" && !zt && (et = -1);
            }
            ee = et + Te, de = et + Te + 1;
          }
        }
        ee !== -1 && de !== -1 && ee !== de && H.current.setSelectionRange(ee, de, ve);
      }
      let Ee = ee !== -1 ? ee : fe, Je = de !== -1 ? de : Ce, Qe = ve ?? yt;
      O(Ee), T(Je), L.current.prev = [Ee, Je, Qe];
    }
    if (document.addEventListener("selectionchange", be, { capture: !0 }), be(), document.activeElement === Q && k(!0), !document.getElementById("input-otp-style")) {
      let fe = document.createElement("style");
      if (fe.id = "input-otp-style", document.head.appendChild(fe), fe.sheet) {
        let Ce = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        Bt(fe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), Bt(fe.sheet, `[data-input-otp]:autofill { ${Ce} }`), Bt(fe.sheet, `[data-input-otp]:-webkit-autofill { ${Ce} }`), Bt(fe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Bt(fe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let ge = () => {
      oe && oe.style.setProperty("--root-height", `${Q.clientHeight}px`);
    };
    ge();
    let Se = new ResizeObserver(ge);
    return Se.observe(Q), () => {
      document.removeEventListener("selectionchange", be, { capture: !0 }), Se.disconnect();
    };
  }, []);
  let [X, R] = d.useState(!1), [M, k] = d.useState(!1), [b, O] = d.useState(null), [D, T] = d.useState(null);
  d.useEffect(() => {
    Fu(() => {
      var Q, oe, be, ge;
      (Q = H.current) == null || Q.dispatchEvent(new Event("input"));
      let Se = (oe = H.current) == null ? void 0 : oe.selectionStart, fe = (be = H.current) == null ? void 0 : be.selectionEnd, Ce = (ge = H.current) == null ? void 0 : ge.selectionDirection;
      Se !== null && fe !== null && (O(Se), T(fe), L.current.prev = [Se, fe, Ce]);
    });
  }, [N, M]), d.useEffect(() => {
    W !== void 0 && N !== W && W.length < i && N.length === i && p?.(N);
  }, [i, p, W, N]);
  let K = Bu({ containerRef: B, inputRef: H, pushPasswordManagerStrategy: f, isFocused: M }), U = d.useCallback((Q) => {
    let oe = Q.currentTarget.value.slice(0, i);
    if (oe.length > 0 && G && !G.test(oe)) {
      Q.preventDefault();
      return;
    }
    typeof W == "string" && oe.length < W.length && document.dispatchEvent(new Event("selectionchange")), Z(oe);
  }, [i, Z, W, G]), _ = d.useCallback(() => {
    var Q;
    if (H.current) {
      let oe = Math.min(H.current.value.length, i - 1), be = H.current.value.length;
      (Q = H.current) == null || Q.setSelectionRange(oe, be), O(oe), T(be);
    }
    k(!0);
  }, [i]), $ = d.useCallback((Q) => {
    var oe, be;
    let ge = H.current;
    if (!v && (!z.current.isIOS || !Q.clipboardData || !ge)) return;
    let Se = Q.clipboardData.getData("text/plain"), fe = v ? v(Se) : Se;
    Q.preventDefault();
    let Ce = (oe = H.current) == null ? void 0 : oe.selectionStart, yt = (be = H.current) == null ? void 0 : be.selectionEnd, Pe = (Ce !== yt ? N.slice(0, Ce) + fe + N.slice(yt) : N.slice(0, Ce) + fe + N.slice(Ce)).slice(0, i);
    if (Pe.length > 0 && G && !G.test(Pe)) return;
    ge.value = Pe, Z(Pe);
    let He = Math.min(Pe.length, i - 1), F = Pe.length;
    ge.setSelectionRange(He, F), O(He), T(F);
  }, [i, Z, G, N]), J = d.useMemo(() => ({ position: "relative", cursor: y.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [y.disabled]), V = d.useMemo(() => ({ position: "absolute", inset: 0, width: K.willPushPWMBadge ? `calc(100% + ${K.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: K.willPushPWMBadge ? `inset(0 ${K.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: a, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [K.PWM_BADGE_SPACE_WIDTH, K.willPushPWMBadge, a]), re = d.useMemo(() => d.createElement("input", Nu(Iu({ autoComplete: y.autoComplete || "one-time-code" }, y), { "data-input-otp": !0, "data-input-otp-placeholder-shown": N.length === 0 || void 0, "data-input-otp-mss": b, "data-input-otp-mse": D, inputMode: l, pattern: G?.source, "aria-placeholder": c, style: V, maxLength: i, value: N, ref: H, onPaste: (Q) => {
    var oe;
    $(Q), (oe = y.onPaste) == null || oe.call(y, Q);
  }, onChange: U, onMouseOver: (Q) => {
    var oe;
    R(!0), (oe = y.onMouseOver) == null || oe.call(y, Q);
  }, onMouseLeave: (Q) => {
    var oe;
    R(!1), (oe = y.onMouseLeave) == null || oe.call(y, Q);
  }, onFocus: (Q) => {
    var oe;
    _(), (oe = y.onFocus) == null || oe.call(y, Q);
  }, onBlur: (Q) => {
    var oe;
    k(!1), (oe = y.onBlur) == null || oe.call(y, Q);
  } })), [U, _, $, l, V, i, D, b, y, G?.source, N]), j = d.useMemo(() => ({ slots: Array.from({ length: i }).map((Q, oe) => {
    var be;
    let ge = M && b !== null && D !== null && (b === D && oe === b || oe >= b && oe < D), Se = N[oe] !== void 0 ? N[oe] : null, fe = N[0] !== void 0 ? null : (be = c?.[oe]) != null ? be : null;
    return { char: Se, placeholderChar: fe, isActive: ge, hasFakeCaret: ge && Se === null };
  }), isFocused: M, isHovering: !y.disabled && X }), [M, X, i, D, b, y.disabled, N]), pe = d.useMemo(() => m ? m(j) : d.createElement($a.Provider, { value: j }, g), [g, j, m]);
  return d.createElement(d.Fragment, null, x !== null && d.createElement("noscript", null, d.createElement("style", null, x)), d.createElement("div", { ref: B, "data-input-otp-container": !0, style: J, className: h }, pe, d.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, re)));
});
Wa.displayName = "Input";
function Bt(e, n) {
  try {
    e.insertRule(n);
  } catch {
    console.error("input-otp could not insert CSS rule:", n);
  }
}
var Hu = `
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
function Nb({
  className: e,
  containerClassName: n,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(
    Wa,
    {
      "data-slot": "input-otp",
      containerClassName: ne(
        "flex items-center gap-2 has-disabled:opacity-50",
        n
      ),
      className: ne("disabled:cursor-not-allowed", e),
      ...t
    }
  );
}
function Lb({ className: e, ...n }) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: ne("flex items-center gap-2", e),
      ...n
    }
  );
}
function Fb({
  index: e,
  className: n,
  ...t
}) {
  const r = $r($a), { char: o, hasFakeCaret: i, isActive: a } = r?.slots[e] ?? {};
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": a,
      className: ne(
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
        i && /* @__PURE__ */ u.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ u.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function zb({ ...e }) {
  return /* @__PURE__ */ u.jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ u.jsx(ju, {}) });
}
function Uu({ size: e = 48, className: n, ...t }) {
  const r = typeof e == "number" ? `${e}` : e, o = typeof t["aria-label"] == "string";
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 47 48",
      width: r,
      height: r,
      className: ne("inline-block", n),
      "aria-hidden": o ? void 0 : !0,
      role: o ? "img" : "presentation",
      ...t,
      children: [
        /* @__PURE__ */ u.jsx(
          "path",
          {
            d: "M19.2133 35.3017C18.2492 38.5617 18.6978 42.077 20.4506 44.9899L20.4943 45.0635L13.8785 40.431L20.4869 30.9956L19.2133 35.3017ZM20.7073 24.9743C21.9138 25.819 22.2068 27.482 21.3622 28.6884L13.3829 40.0841L11.1984 38.5544L20.7073 24.9743ZM20.7056 18.0024C22.241 19.0776 22.6141 21.1938 21.5391 22.7293L10.7017 38.2067L9.50708 37.3701C8.96698 36.992 8.46813 36.5767 8.00954 36.1319L20.7056 18.0024ZM20.7058 9.75901C22.5703 11.0646 23.0234 13.635 21.718 15.4996L7.57802 35.6923C6.53641 34.5734 5.73826 33.2869 5.19379 31.9112L20.7058 9.75901ZM20.7043 0.246588C22.8979 1.78253 23.4309 4.80619 21.8951 6.99983L4.93983 31.2132C3.80636 27.7434 4.24748 23.8057 6.47085 20.5729L20.7043 0.246588Z",
            fill: "#BF3535"
          }
        ),
        /* @__PURE__ */ u.jsx(
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
function Gu({
  size: e = 32,
  className: n,
  ...t
}) {
  return /* @__PURE__ */ u.jsxs("div", { className: ne("inline-flex items-center gap-2", n), ...t, children: [
    /* @__PURE__ */ u.jsx(Uu, { size: e }),
    /* @__PURE__ */ u.jsx("span", { className: "font-sans text-base font-normal leading-none text-white", children: "MercySeat" })
  ] });
}
function $b({
  active: e,
  children: n,
  collapsed: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ u.jsx(
    uo,
    {
      className: ne(
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
function ri(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
function te(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e?.(o), t === !1 || !o.defaultPrevented)
      return n?.(o);
  };
}
function qu(e, n) {
  const t = d.createContext(n), r = (i) => {
    const { children: a, ...s } = i, c = d.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ u.jsx(t.Provider, { value: c, children: a });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const a = d.useContext(t);
    if (a) return a;
    if (n !== void 0) return n;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function it(e, n = []) {
  let t = [];
  function r(i, a) {
    const s = d.createContext(a), c = t.length;
    t = [...t, a];
    const l = (f) => {
      const { scope: v, children: h, ...x } = f, m = v?.[e]?.[c] || s, g = d.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ u.jsx(m.Provider, { value: g, children: h });
    };
    l.displayName = i + "Provider";
    function p(f, v) {
      const h = v?.[e]?.[c] || s, x = d.useContext(h);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [l, p];
  }
  const o = () => {
    const i = t.map((a) => d.createContext(a));
    return function(s) {
      const c = s?.[e] || i;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [r, Yu(o, ...n)];
}
function Yu(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((s, { useScope: c, scopeName: l }) => {
        const f = c(i)[`__scope${l}`];
        return { ...s, ...f };
      }, {});
      return d.useMemo(() => ({ [`__scope${n.scopeName}`]: a }), [a]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  const n = /* @__PURE__ */ Ku(e), t = d.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = d.Children.toArray(i), c = s.find(Xu);
    if (c) {
      const l = c.props.children, p = s.map((f) => f === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ u.jsx(n, { ...a, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, p) : null });
    }
    return /* @__PURE__ */ u.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Ku(e) {
  const n = d.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (d.isValidElement(o)) {
      const a = Qu(o), s = Ju(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? en(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Va = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Zu(e) {
  const n = ({ children: t }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = Va, n;
}
function Xu(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Va;
}
function Ju(e, n) {
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
function Qu(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function mo(e) {
  const n = e + "CollectionProvider", [t, r] = it(n), [o, i] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (m) => {
    const { scope: g, children: y } = m, C = ie.useRef(null), S = ie.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(o, { scope: g, itemMap: S, collectionRef: C, children: y });
  };
  a.displayName = n;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ Pt(s), l = ie.forwardRef(
    (m, g) => {
      const { scope: y, children: C } = m, S = i(s, y), E = ue(g, S.collectionRef);
      return /* @__PURE__ */ u.jsx(c, { ref: E, children: C });
    }
  );
  l.displayName = s;
  const p = e + "CollectionItemSlot", f = "data-radix-collection-item", v = /* @__PURE__ */ Pt(p), h = ie.forwardRef(
    (m, g) => {
      const { scope: y, children: C, ...S } = m, E = ie.useRef(null), w = ue(g, E), I = i(p, y);
      return ie.useEffect(() => (I.itemMap.set(E, { ref: E, ...S }), () => void I.itemMap.delete(E))), /* @__PURE__ */ u.jsx(v, { [f]: "", ref: w, children: C });
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
        (I, A) => S.indexOf(I.ref.current) - S.indexOf(A.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: h },
    x,
    r
  ];
}
var ep = d.createContext(void 0);
function vo(e) {
  const n = d.useContext(ep);
  return e || n || "ltr";
}
var tp = [
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
], se = tp.reduce((e, n) => {
  const t = /* @__PURE__ */ Pt(`Primitive.${n}`), r = d.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, c = a ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(c, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function Ba(e, n) {
  e && Bn.flushSync(() => e.dispatchEvent(n));
}
function We(e) {
  const n = d.useRef(e);
  return d.useEffect(() => {
    n.current = e;
  }), d.useMemo(() => (...t) => n.current?.(...t), []);
}
function np(e, n = globalThis?.document) {
  const t = We(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && t(o);
    };
    return n.addEventListener("keydown", r, { capture: !0 }), () => n.removeEventListener("keydown", r, { capture: !0 });
  }, [t, n]);
}
var rp = "DismissableLayer", Hr = "dismissableLayer.update", op = "dismissableLayer.pointerDownOutside", ip = "dismissableLayer.focusOutside", oi, Ha = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), qn = d.forwardRef(
  (e, n) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...c
    } = e, l = d.useContext(Ha), [p, f] = d.useState(null), v = p?.ownerDocument ?? globalThis?.document, [, h] = d.useState({}), x = ue(n, (A) => f(A)), m = Array.from(l.layers), [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(g), C = p ? m.indexOf(p) : -1, S = l.layersWithOutsidePointerEventsDisabled.size > 0, E = C >= y, w = cp((A) => {
      const P = A.target, N = [...l.branches].some((W) => W.contains(P));
      !E || N || (o?.(A), a?.(A), A.defaultPrevented || s?.());
    }, v), I = lp((A) => {
      const P = A.target;
      [...l.branches].some((W) => W.contains(P)) || (i?.(A), a?.(A), A.defaultPrevented || s?.());
    }, v);
    return np((A) => {
      C === l.layers.size - 1 && (r?.(A), !A.defaultPrevented && s && (A.preventDefault(), s()));
    }, v), d.useEffect(() => {
      if (p)
        return t && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (oi = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(p)), l.layers.add(p), ii(), () => {
          t && l.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = oi);
        };
    }, [p, v, t, l]), d.useEffect(() => () => {
      p && (l.layers.delete(p), l.layersWithOutsidePointerEventsDisabled.delete(p), ii());
    }, [p, l]), d.useEffect(() => {
      const A = () => h({});
      return document.addEventListener(Hr, A), () => document.removeEventListener(Hr, A);
    }, []), /* @__PURE__ */ u.jsx(
      se.div,
      {
        ...c,
        ref: x,
        style: {
          pointerEvents: S ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: te(e.onFocusCapture, I.onFocusCapture),
        onBlurCapture: te(e.onBlurCapture, I.onBlurCapture),
        onPointerDownCapture: te(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
qn.displayName = rp;
var ap = "DismissableLayerBranch", sp = d.forwardRef((e, n) => {
  const t = d.useContext(Ha), r = d.useRef(null), o = ue(n, r);
  return d.useEffect(() => {
    const i = r.current;
    if (i)
      return t.branches.add(i), () => {
        t.branches.delete(i);
      };
  }, [t.branches]), /* @__PURE__ */ u.jsx(se.div, { ...e, ref: o });
});
sp.displayName = ap;
function cp(e, n = globalThis?.document) {
  const t = We(e), r = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          Ua(
            op,
            t,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: s };
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
function lp(e, n = globalThis?.document) {
  const t = We(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Ua(ip, t, { originalEvent: i }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", o), () => n.removeEventListener("focusin", o);
  }, [n, t]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ii() {
  const e = new CustomEvent(Hr);
  document.dispatchEvent(e);
}
function Ua(e, n, t, { discrete: r }) {
  const o = t.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  n && o.addEventListener(e, n, { once: !0 }), r ? Ba(o, i) : o.dispatchEvent(i);
}
var gr = 0;
function ho() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ai()), document.body.insertAdjacentElement("beforeend", e[1] ?? ai()), gr++, () => {
      gr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), gr--;
    };
  }, []);
}
function ai() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var xr = "focusScope.autoFocusOnMount", br = "focusScope.autoFocusOnUnmount", si = { bubbles: !1, cancelable: !0 }, dp = "FocusScope", Yn = d.forwardRef((e, n) => {
  const {
    loop: t = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, c] = d.useState(null), l = We(o), p = We(i), f = d.useRef(null), v = ue(n, (m) => c(m)), h = d.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  d.useEffect(() => {
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
  }, [r, s, h.paused]), d.useEffect(() => {
    if (s) {
      li.add(h);
      const m = document.activeElement;
      if (!s.contains(m)) {
        const y = new CustomEvent(xr, si);
        s.addEventListener(xr, l), s.dispatchEvent(y), y.defaultPrevented || (up(hp(Ga(s)), { select: !0 }), document.activeElement === m && nt(s));
      }
      return () => {
        s.removeEventListener(xr, l), setTimeout(() => {
          const y = new CustomEvent(br, si);
          s.addEventListener(br, p), s.dispatchEvent(y), y.defaultPrevented || nt(m ?? document.body, { select: !0 }), s.removeEventListener(br, p), li.remove(h);
        }, 0);
      };
    }
  }, [s, l, p, h]);
  const x = d.useCallback(
    (m) => {
      if (!t && !r || h.paused) return;
      const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, y = document.activeElement;
      if (g && y) {
        const C = m.currentTarget, [S, E] = pp(C);
        S && E ? !m.shiftKey && y === E ? (m.preventDefault(), t && nt(S, { select: !0 })) : m.shiftKey && y === S && (m.preventDefault(), t && nt(E, { select: !0 })) : y === C && m.preventDefault();
      }
    },
    [t, r, h.paused]
  );
  return /* @__PURE__ */ u.jsx(se.div, { tabIndex: -1, ...a, ref: v, onKeyDown: x });
});
Yn.displayName = dp;
function up(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const r of e)
    if (nt(r, { select: n }), document.activeElement !== t) return;
}
function pp(e) {
  const n = Ga(e), t = ci(n, e), r = ci(n.reverse(), e);
  return [t, r];
}
function Ga(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function ci(e, n) {
  for (const t of e)
    if (!fp(t, { upTo: n })) return t;
}
function fp(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function mp(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function nt(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== t && mp(e) && n && e.select();
  }
}
var li = vp();
function vp() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && t?.pause(), e = di(e, n), e.unshift(n);
    },
    remove(n) {
      e = di(e, n), e[0]?.resume();
    }
  };
}
function di(e, n) {
  const t = [...e], r = t.indexOf(n);
  return r !== -1 && t.splice(r, 1), t;
}
function hp(e) {
  return e.filter((n) => n.tagName !== "A");
}
var _e = globalThis?.document ? d.useLayoutEffect : () => {
}, gp = d[" useId ".trim().toString()] || (() => {
}), xp = 0;
function qe(e) {
  const [n, t] = d.useState(gp());
  return _e(() => {
    t((r) => r ?? String(xp++));
  }, [e]), e || (n ? `radix-${n}` : "");
}
const bp = ["top", "right", "bottom", "left"], rt = Math.min, Ae = Math.max, An = Math.round, dn = Math.floor, $e = (e) => ({
  x: e,
  y: e
}), yp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, wp = {
  start: "end",
  end: "start"
};
function Ur(e, n, t) {
  return Ae(e, rt(n, t));
}
function Ye(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Ke(e) {
  return e.split("-")[0];
}
function Dt(e) {
  return e.split("-")[1];
}
function go(e) {
  return e === "x" ? "y" : "x";
}
function xo(e) {
  return e === "y" ? "height" : "width";
}
const Cp = /* @__PURE__ */ new Set(["top", "bottom"]);
function ze(e) {
  return Cp.has(Ke(e)) ? "y" : "x";
}
function bo(e) {
  return go(ze(e));
}
function Sp(e, n, t) {
  t === void 0 && (t = !1);
  const r = Dt(e), o = bo(e), i = xo(o);
  let a = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[i] > n.floating[i] && (a = jn(a)), [a, jn(a)];
}
function Ep(e) {
  const n = jn(e);
  return [Gr(e), n, Gr(n)];
}
function Gr(e) {
  return e.replace(/start|end/g, (n) => wp[n]);
}
const ui = ["left", "right"], pi = ["right", "left"], _p = ["top", "bottom"], kp = ["bottom", "top"];
function Rp(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? pi : ui : n ? ui : pi;
    case "left":
    case "right":
      return n ? _p : kp;
    default:
      return [];
  }
}
function Pp(e, n, t, r) {
  const o = Dt(e);
  let i = Rp(Ke(e), t === "start", r);
  return o && (i = i.map((a) => a + "-" + o), n && (i = i.concat(i.map(Gr)))), i;
}
function jn(e) {
  return e.replace(/left|right|bottom|top/g, (n) => yp[n]);
}
function Ap(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function qa(e) {
  return typeof e != "number" ? Ap(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function On(e) {
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
function fi(e, n, t) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = ze(n), a = bo(n), s = xo(a), c = Ke(n), l = i === "y", p = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
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
      h[a] -= v * (t && l ? -1 : 1);
      break;
    case "end":
      h[a] += v * (t && l ? -1 : 1);
      break;
  }
  return h;
}
const jp = async (e, n, t) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = t, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let l = await a.getElementRects({
    reference: e,
    floating: n,
    strategy: o
  }), {
    x: p,
    y: f
  } = fi(l, r, c), v = r, h = {}, x = 0;
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
      rects: l,
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
    }, w && x <= 50 && (x++, typeof w == "object" && (w.placement && (v = w.placement), w.rects && (l = w.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: n,
      strategy: o
    }) : w.rects), {
      x: p,
      y: f
    } = fi(l, v, c)), m = -1);
  }
  return {
    x: p,
    y: f,
    placement: v,
    strategy: o,
    middlewareData: h
  };
};
async function Yt(e, n) {
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
    boundary: l = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: f = "floating",
    altBoundary: v = !1,
    padding: h = 0
  } = Ye(n, e), x = qa(h), g = s[v ? f === "floating" ? "reference" : "floating" : f], y = On(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(g))) == null || t ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: l,
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
  }, w = On(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Op = (e) => ({
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
      element: l,
      padding: p = 0
    } = Ye(e, n) || {};
    if (l == null)
      return {};
    const f = qa(p), v = {
      x: t,
      y: r
    }, h = bo(o), x = xo(h), m = await a.getDimensions(l), g = h === "y", y = g ? "top" : "left", C = g ? "bottom" : "right", S = g ? "clientHeight" : "clientWidth", E = i.reference[x] + i.reference[h] - v[h] - i.floating[x], w = v[h] - i.reference[h], I = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let A = I ? I[S] : 0;
    (!A || !await (a.isElement == null ? void 0 : a.isElement(I))) && (A = s.floating[S] || i.floating[x]);
    const P = E / 2 - w / 2, N = A / 2 - m[x] / 2 - 1, W = rt(f[y], N), Z = rt(f[C], N), G = W, H = A - m[x] - Z, B = A / 2 - m[x] / 2 + P, z = Ur(G, B, H), L = !c.arrow && Dt(o) != null && B !== z && i.reference[x] / 2 - (B < G ? W : Z) - m[x] / 2 < 0, X = L ? B < G ? B - G : B - H : 0;
    return {
      [h]: v[h] + X,
      data: {
        [h]: z,
        centerOffset: B - z - X,
        ...L && {
          alignmentOffset: X
        }
      },
      reset: L
    };
  }
}), Tp = function(e) {
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
        elements: l
      } = n, {
        mainAxis: p = !0,
        crossAxis: f = !0,
        fallbackPlacements: v,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: m = !0,
        ...g
      } = Ye(e, n);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const y = Ke(o), C = ze(s), S = Ke(s) === s, E = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), w = v || (S || !m ? [jn(s)] : Ep(s)), I = x !== "none";
      !v && I && w.push(...Pp(s, m, x, E));
      const A = [s, ...w], P = await Yt(n, g), N = [];
      let W = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (p && N.push(P[y]), f) {
        const B = Sp(o, a, E);
        N.push(P[B[0]], P[B[1]]);
      }
      if (W = [...W, {
        placement: o,
        overflows: N
      }], !N.every((B) => B <= 0)) {
        var Z, G;
        const B = (((Z = i.flip) == null ? void 0 : Z.index) || 0) + 1, z = A[B];
        if (z && (!(f === "alignment" ? C !== ze(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        W.every((R) => ze(R.placement) === C ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: W
            },
            reset: {
              placement: z
            }
          };
        let L = (G = W.filter((X) => X.overflows[0] <= 0).sort((X, R) => X.overflows[1] - R.overflows[1])[0]) == null ? void 0 : G.placement;
        if (!L)
          switch (h) {
            case "bestFit": {
              var H;
              const X = (H = W.filter((R) => {
                if (I) {
                  const M = ze(R.placement);
                  return M === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((M) => M > 0).reduce((M, k) => M + k, 0)]).sort((R, M) => R[1] - M[1])[0]) == null ? void 0 : H[0];
              X && (L = X);
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
function mi(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function vi(e) {
  return bp.some((n) => e[n] >= 0);
}
const Mp = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(n) {
      const {
        rects: t
      } = n, {
        strategy: r = "referenceHidden",
        ...o
      } = Ye(e, n);
      switch (r) {
        case "referenceHidden": {
          const i = await Yt(n, {
            ...o,
            elementContext: "reference"
          }), a = mi(i, t.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: vi(a)
            }
          };
        }
        case "escaped": {
          const i = await Yt(n, {
            ...o,
            altBoundary: !0
          }), a = mi(i, t.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: vi(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ya = /* @__PURE__ */ new Set(["left", "top"]);
async function Dp(e, n) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Ke(t), s = Dt(t), c = ze(t) === "y", l = Ya.has(a) ? -1 : 1, p = i && c ? -1 : 1, f = Ye(n, e);
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
    y: v * l
  } : {
    x: v * l,
    y: h * p
  };
}
const Ip = function(e) {
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
      } = n, c = await Dp(n, e);
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
}, Np = function(e) {
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
      } = Ye(e, n), l = {
        x: t,
        y: r
      }, p = await Yt(n, c), f = ze(Ke(o)), v = go(f);
      let h = l[v], x = l[f];
      if (i) {
        const g = v === "y" ? "top" : "left", y = v === "y" ? "bottom" : "right", C = h + p[g], S = h - p[y];
        h = Ur(C, h, S);
      }
      if (a) {
        const g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", C = x + p[g], S = x - p[y];
        x = Ur(C, x, S);
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
}, Lp = function(e) {
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
        crossAxis: l = !0
      } = Ye(e, n), p = {
        x: t,
        y: r
      }, f = ze(o), v = go(f);
      let h = p[v], x = p[f];
      const m = Ye(s, n), g = typeof m == "number" ? {
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
      if (l) {
        var y, C;
        const S = v === "y" ? "width" : "height", E = Ya.has(Ke(o)), w = i.reference[f] - i.floating[S] + (E && ((y = a.offset) == null ? void 0 : y[f]) || 0) + (E ? 0 : g.crossAxis), I = i.reference[f] + i.reference[S] + (E ? 0 : ((C = a.offset) == null ? void 0 : C[f]) || 0) - (E ? g.crossAxis : 0);
        x < w ? x = w : x > I && (x = I);
      }
      return {
        [v]: h,
        [f]: x
      };
    }
  };
}, Fp = function(e) {
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
        ...l
      } = Ye(e, n), p = await Yt(n, l), f = Ke(o), v = Dt(o), h = ze(o) === "y", {
        width: x,
        height: m
      } = i.floating;
      let g, y;
      f === "top" || f === "bottom" ? (g = f, y = v === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = f, g = v === "end" ? "top" : "bottom");
      const C = m - p.top - p.bottom, S = x - p.left - p.right, E = rt(m - p[g], C), w = rt(x - p[y], S), I = !n.middlewareData.shift;
      let A = E, P = w;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (P = S), (r = n.middlewareData.shift) != null && r.enabled.y && (A = C), I && !v) {
        const W = Ae(p.left, 0), Z = Ae(p.right, 0), G = Ae(p.top, 0), H = Ae(p.bottom, 0);
        h ? P = x - 2 * (W !== 0 || Z !== 0 ? W + Z : Ae(p.left, p.right)) : A = m - 2 * (G !== 0 || H !== 0 ? G + H : Ae(p.top, p.bottom));
      }
      await c({
        ...n,
        availableWidth: P,
        availableHeight: A
      });
      const N = await a.getDimensions(s.floating);
      return x !== N.width || m !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Kn() {
  return typeof window < "u";
}
function It(e) {
  return Ka(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function je(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Be(e) {
  var n;
  return (n = (Ka(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function Ka(e) {
  return Kn() ? e instanceof Node || e instanceof je(e).Node : !1;
}
function De(e) {
  return Kn() ? e instanceof Element || e instanceof je(e).Element : !1;
}
function Ve(e) {
  return Kn() ? e instanceof HTMLElement || e instanceof je(e).HTMLElement : !1;
}
function hi(e) {
  return !Kn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof je(e).ShadowRoot;
}
const zp = /* @__PURE__ */ new Set(["inline", "contents"]);
function tn(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: r,
    display: o
  } = Ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !zp.has(o);
}
const $p = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Wp(e) {
  return $p.has(It(e));
}
const Vp = [":popover-open", ":modal"];
function Zn(e) {
  return Vp.some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
const Bp = ["transform", "translate", "scale", "rotate", "perspective"], Hp = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Up = ["paint", "layout", "strict", "content"];
function yo(e) {
  const n = wo(), t = De(e) ? Ie(e) : e;
  return Bp.some((r) => t[r] ? t[r] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || Hp.some((r) => (t.willChange || "").includes(r)) || Up.some((r) => (t.contain || "").includes(r));
}
function Gp(e) {
  let n = ot(e);
  for (; Ve(n) && !At(n); ) {
    if (yo(n))
      return n;
    if (Zn(n))
      return null;
    n = ot(n);
  }
  return null;
}
function wo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const qp = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function At(e) {
  return qp.has(It(e));
}
function Ie(e) {
  return je(e).getComputedStyle(e);
}
function Xn(e) {
  return De(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ot(e) {
  if (It(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    hi(e) && e.host || // Fallback.
    Be(e)
  );
  return hi(n) ? n.host : n;
}
function Za(e) {
  const n = ot(e);
  return At(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ve(n) && tn(n) ? n : Za(n);
}
function Kt(e, n, t) {
  var r;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const o = Za(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = je(o);
  if (i) {
    const s = qr(a);
    return n.concat(a, a.visualViewport || [], tn(o) ? o : [], s && t ? Kt(s) : []);
  }
  return n.concat(o, Kt(o, [], t));
}
function qr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Xa(e) {
  const n = Ie(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const o = Ve(e), i = o ? e.offsetWidth : t, a = o ? e.offsetHeight : r, s = An(t) !== i || An(r) !== a;
  return s && (t = i, r = a), {
    width: t,
    height: r,
    $: s
  };
}
function Co(e) {
  return De(e) ? e : e.contextElement;
}
function _t(e) {
  const n = Co(e);
  if (!Ve(n))
    return $e(1);
  const t = n.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Xa(n);
  let a = (i ? An(t.width) : t.width) / r, s = (i ? An(t.height) : t.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Yp = /* @__PURE__ */ $e(0);
function Ja(e) {
  const n = je(e);
  return !wo() || !n.visualViewport ? Yp : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Kp(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== je(e) ? !1 : n;
}
function ft(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), i = Co(e);
  let a = $e(1);
  n && (r ? De(r) && (a = _t(r)) : a = _t(e));
  const s = Kp(i, t, r) ? Ja(i) : $e(0);
  let c = (o.left + s.x) / a.x, l = (o.top + s.y) / a.y, p = o.width / a.x, f = o.height / a.y;
  if (i) {
    const v = je(i), h = r && De(r) ? je(r) : r;
    let x = v, m = qr(x);
    for (; m && r && h !== x; ) {
      const g = _t(m), y = m.getBoundingClientRect(), C = Ie(m), S = y.left + (m.clientLeft + parseFloat(C.paddingLeft)) * g.x, E = y.top + (m.clientTop + parseFloat(C.paddingTop)) * g.y;
      c *= g.x, l *= g.y, p *= g.x, f *= g.y, c += S, l += E, x = je(m), m = qr(x);
    }
  }
  return On({
    width: p,
    height: f,
    x: c,
    y: l
  });
}
function Jn(e, n) {
  const t = Xn(e).scrollLeft;
  return n ? n.left + t : ft(Be(e)).left + t;
}
function Qa(e, n) {
  const t = e.getBoundingClientRect(), r = t.left + n.scrollLeft - Jn(e, t), o = t.top + n.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Zp(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Be(r), s = n ? Zn(n.floating) : !1;
  if (r === a || s && i)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = $e(1);
  const p = $e(0), f = Ve(r);
  if ((f || !f && !i) && ((It(r) !== "body" || tn(a)) && (c = Xn(r)), Ve(r))) {
    const h = ft(r);
    l = _t(r), p.x = h.x + r.clientLeft, p.y = h.y + r.clientTop;
  }
  const v = a && !f && !i ? Qa(a, c) : $e(0);
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + p.x + v.x,
    y: t.y * l.y - c.scrollTop * l.y + p.y + v.y
  };
}
function Xp(e) {
  return Array.from(e.getClientRects());
}
function Jp(e) {
  const n = Be(e), t = Xn(e), r = e.ownerDocument.body, o = Ae(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), i = Ae(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -t.scrollLeft + Jn(e);
  const s = -t.scrollTop;
  return Ie(r).direction === "rtl" && (a += Ae(n.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
const gi = 25;
function Qp(e, n) {
  const t = je(e), r = Be(e), o = t.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const p = wo();
    (!p || p && n === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  const l = Jn(r);
  if (l <= 0) {
    const p = r.ownerDocument, f = p.body, v = getComputedStyle(f), h = p.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0, x = Math.abs(r.clientWidth - f.clientWidth - h);
    x <= gi && (i -= x);
  } else l <= gi && (i += l);
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
const ef = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function tf(e, n) {
  const t = ft(e, !0, n === "fixed"), r = t.top + e.clientTop, o = t.left + e.clientLeft, i = Ve(e) ? _t(e) : $e(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function xi(e, n, t) {
  let r;
  if (n === "viewport")
    r = Qp(e, t);
  else if (n === "document")
    r = Jp(Be(e));
  else if (De(n))
    r = tf(n, t);
  else {
    const o = Ja(e);
    r = {
      x: n.x - o.x,
      y: n.y - o.y,
      width: n.width,
      height: n.height
    };
  }
  return On(r);
}
function es(e, n) {
  const t = ot(e);
  return t === n || !De(t) || At(t) ? !1 : Ie(t).position === "fixed" || es(t, n);
}
function nf(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let r = Kt(e, [], !1).filter((s) => De(s) && It(s) !== "body"), o = null;
  const i = Ie(e).position === "fixed";
  let a = i ? ot(e) : e;
  for (; De(a) && !At(a); ) {
    const s = Ie(a), c = yo(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && ef.has(o.position) || tn(a) && !c && es(e, a)) ? r = r.filter((p) => p !== a) : o = s, a = ot(a);
  }
  return n.set(e, r), r;
}
function rf(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...t === "clippingAncestors" ? Zn(n) ? [] : nf(n, this._c) : [].concat(t), r], s = a[0], c = a.reduce((l, p) => {
    const f = xi(n, p, o);
    return l.top = Ae(f.top, l.top), l.right = rt(f.right, l.right), l.bottom = rt(f.bottom, l.bottom), l.left = Ae(f.left, l.left), l;
  }, xi(n, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function of(e) {
  const {
    width: n,
    height: t
  } = Xa(e);
  return {
    width: n,
    height: t
  };
}
function af(e, n, t) {
  const r = Ve(n), o = Be(n), i = t === "fixed", a = ft(e, !0, i, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = $e(0);
  function l() {
    c.x = Jn(o);
  }
  if (r || !r && !i)
    if ((It(n) !== "body" || tn(o)) && (s = Xn(n)), r) {
      const h = ft(n, !0, i, n);
      c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
    } else o && l();
  i && !r && o && l();
  const p = o && !r && !i ? Qa(o, s) : $e(0), f = a.left + s.scrollLeft - c.x - p.x, v = a.top + s.scrollTop - c.y - p.y;
  return {
    x: f,
    y: v,
    width: a.width,
    height: a.height
  };
}
function yr(e) {
  return Ie(e).position === "static";
}
function bi(e, n) {
  if (!Ve(e) || Ie(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Be(e) === t && (t = t.ownerDocument.body), t;
}
function ts(e, n) {
  const t = je(e);
  if (Zn(e))
    return t;
  if (!Ve(e)) {
    let o = ot(e);
    for (; o && !At(o); ) {
      if (De(o) && !yr(o))
        return o;
      o = ot(o);
    }
    return t;
  }
  let r = bi(e, n);
  for (; r && Wp(r) && yr(r); )
    r = bi(r, n);
  return r && At(r) && yr(r) && !yo(r) ? t : r || Gp(e) || t;
}
const sf = async function(e) {
  const n = this.getOffsetParent || ts, t = this.getDimensions, r = await t(e.floating);
  return {
    reference: af(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function cf(e) {
  return Ie(e).direction === "rtl";
}
const lf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Zp,
  getDocumentElement: Be,
  getClippingRect: rf,
  getOffsetParent: ts,
  getElementRects: sf,
  getClientRects: Xp,
  getDimensions: of,
  getScale: _t,
  isElement: De,
  isRTL: cf
};
function ns(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function df(e, n) {
  let t = null, r;
  const o = Be(e);
  function i() {
    var s;
    clearTimeout(r), (s = t) == null || s.disconnect(), t = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const l = e.getBoundingClientRect(), {
      left: p,
      top: f,
      width: v,
      height: h
    } = l;
    if (s || n(), !v || !h)
      return;
    const x = dn(f), m = dn(o.clientWidth - (p + v)), g = dn(o.clientHeight - (f + h)), y = dn(p), S = {
      rootMargin: -x + "px " + -m + "px " + -g + "px " + -y + "px",
      threshold: Ae(0, rt(1, c)) || 1
    };
    let E = !0;
    function w(I) {
      const A = I[0].intersectionRatio;
      if (A !== c) {
        if (!E)
          return a();
        A ? a(!1, A) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !ns(l, e.getBoundingClientRect()) && a(), E = !1;
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
function uf(e, n, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Co(e), p = o || i ? [...l ? Kt(l) : [], ...Kt(n)] : [];
  p.forEach((y) => {
    o && y.addEventListener("scroll", t, {
      passive: !0
    }), i && y.addEventListener("resize", t);
  });
  const f = l && s ? df(l, t) : null;
  let v = -1, h = null;
  a && (h = new ResizeObserver((y) => {
    let [C] = y;
    C && C.target === l && h && (h.unobserve(n), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var S;
      (S = h) == null || S.observe(n);
    })), t();
  }), l && !c && h.observe(l), h.observe(n));
  let x, m = c ? ft(e) : null;
  c && g();
  function g() {
    const y = ft(e);
    m && !ns(m, y) && t(), m = y, x = requestAnimationFrame(g);
  }
  return t(), () => {
    var y;
    p.forEach((C) => {
      o && C.removeEventListener("scroll", t), i && C.removeEventListener("resize", t);
    }), f?.(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(x);
  };
}
const pf = Ip, ff = Np, mf = Tp, vf = Fp, hf = Mp, yi = Op, gf = Lp, xf = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: lf,
    ...t
  }, i = {
    ...o.platform,
    _c: r
  };
  return jp(e, n, {
    ...o,
    platform: i
  });
};
var bf = typeof document < "u", yf = function() {
}, Sn = bf ? Ml : yf;
function Tn(e, n) {
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
        if (!Tn(e[r], n[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Tn(e[i], n[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function rs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wi(e, n) {
  const t = rs(e);
  return Math.round(n * t) / t;
}
function wr(e) {
  const n = d.useRef(e);
  return Sn(() => {
    n.current = e;
  }), n;
}
function wf(e) {
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
    open: l
  } = e, [p, f] = d.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [v, h] = d.useState(r);
  Tn(v, r) || h(r);
  const [x, m] = d.useState(null), [g, y] = d.useState(null), C = d.useCallback((R) => {
    R !== I.current && (I.current = R, m(R));
  }, []), S = d.useCallback((R) => {
    R !== A.current && (A.current = R, y(R));
  }, []), E = i || x, w = a || g, I = d.useRef(null), A = d.useRef(null), P = d.useRef(p), N = c != null, W = wr(c), Z = wr(o), G = wr(l), H = d.useCallback(() => {
    if (!I.current || !A.current)
      return;
    const R = {
      placement: n,
      strategy: t,
      middleware: v
    };
    Z.current && (R.platform = Z.current), xf(I.current, A.current, R).then((M) => {
      const k = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: G.current !== !1
      };
      B.current && !Tn(P.current, k) && (P.current = k, Bn.flushSync(() => {
        f(k);
      }));
    });
  }, [v, n, t, Z, G]);
  Sn(() => {
    l === !1 && P.current.isPositioned && (P.current.isPositioned = !1, f((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [l]);
  const B = d.useRef(!1);
  Sn(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Sn(() => {
    if (E && (I.current = E), w && (A.current = w), E && w) {
      if (W.current)
        return W.current(E, w, H);
      H();
    }
  }, [E, w, H, W, N]);
  const z = d.useMemo(() => ({
    reference: I,
    floating: A,
    setReference: C,
    setFloating: S
  }), [C, S]), L = d.useMemo(() => ({
    reference: E,
    floating: w
  }), [E, w]), X = d.useMemo(() => {
    const R = {
      position: t,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return R;
    const M = wi(L.floating, p.x), k = wi(L.floating, p.y);
    return s ? {
      ...R,
      transform: "translate(" + M + "px, " + k + "px)",
      ...rs(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: M,
      top: k
    };
  }, [t, s, L.floating, p.x, p.y]);
  return d.useMemo(() => ({
    ...p,
    update: H,
    refs: z,
    elements: L,
    floatingStyles: X
  }), [p, H, z, L, X]);
}
const Cf = (e) => {
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
      return r && n(r) ? r.current != null ? yi({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? yi({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
}, Sf = (e, n) => ({
  ...pf(e),
  options: [e, n]
}), Ef = (e, n) => ({
  ...ff(e),
  options: [e, n]
}), _f = (e, n) => ({
  ...gf(e),
  options: [e, n]
}), kf = (e, n) => ({
  ...mf(e),
  options: [e, n]
}), Rf = (e, n) => ({
  ...vf(e),
  options: [e, n]
}), Pf = (e, n) => ({
  ...hf(e),
  options: [e, n]
}), Af = (e, n) => ({
  ...Cf(e),
  options: [e, n]
});
var jf = "Arrow", os = d.forwardRef((e, n) => {
  const { children: t, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ u.jsx(
    se.svg,
    {
      ...i,
      ref: n,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? t : /* @__PURE__ */ u.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
os.displayName = jf;
var Of = os;
function Tf(e) {
  const [n, t] = d.useState(void 0);
  return _e(() => {
    if (e) {
      t({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, s;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          a = l.inlineSize, s = l.blockSize;
        } else
          a = e.offsetWidth, s = e.offsetHeight;
        t({ width: a, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      t(void 0);
  }, [e]), n;
}
var So = "Popper", [is, Qn] = it(So), [Mf, as] = is(So), ss = (e) => {
  const { __scopePopper: n, children: t } = e, [r, o] = d.useState(null);
  return /* @__PURE__ */ u.jsx(Mf, { scope: n, anchor: r, onAnchorChange: o, children: t });
};
ss.displayName = So;
var cs = "PopperAnchor", ls = d.forwardRef(
  (e, n) => {
    const { __scopePopper: t, virtualRef: r, ...o } = e, i = as(cs, t), a = d.useRef(null), s = ue(n, a), c = d.useRef(null);
    return d.useEffect(() => {
      const l = c.current;
      c.current = r?.current || a.current, l !== c.current && i.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ u.jsx(se.div, { ...o, ref: s });
  }
);
ls.displayName = cs;
var Eo = "PopperContent", [Df, If] = is(Eo), ds = d.forwardRef(
  (e, n) => {
    const {
      __scopePopper: t,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: p = 0,
      sticky: f = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: x,
      ...m
    } = e, g = as(Eo, t), [y, C] = d.useState(null), S = ue(n, (_) => C(_)), [E, w] = d.useState(null), I = Tf(E), A = I?.width ?? 0, P = I?.height ?? 0, N = r + (i !== "center" ? "-" + i : ""), W = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, Z = Array.isArray(l) ? l : [l], G = Z.length > 0, H = {
      padding: W,
      boundary: Z.filter(Lf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: G
    }, { refs: B, floatingStyles: z, placement: L, isPositioned: X, middlewareData: R } = wf({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (..._) => uf(..._, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Sf({ mainAxis: o + P, alignmentAxis: a }),
        c && Ef({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? _f() : void 0,
          ...H
        }),
        c && kf({ ...H }),
        Rf({
          ...H,
          apply: ({ elements: _, rects: $, availableWidth: J, availableHeight: V }) => {
            const { width: re, height: j } = $.reference, pe = _.floating.style;
            pe.setProperty("--radix-popper-available-width", `${J}px`), pe.setProperty("--radix-popper-available-height", `${V}px`), pe.setProperty("--radix-popper-anchor-width", `${re}px`), pe.setProperty("--radix-popper-anchor-height", `${j}px`);
          }
        }),
        E && Af({ element: E, padding: s }),
        Ff({ arrowWidth: A, arrowHeight: P }),
        v && Pf({ strategy: "referenceHidden", ...H })
      ]
    }), [M, k] = fs(L), b = We(x);
    _e(() => {
      X && b?.();
    }, [X, b]);
    const O = R.arrow?.x, D = R.arrow?.y, T = R.arrow?.centerOffset !== 0, [K, U] = d.useState();
    return _e(() => {
      y && U(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: X ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: K,
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
        children: /* @__PURE__ */ u.jsx(
          Df,
          {
            scope: t,
            placedSide: M,
            onArrowChange: w,
            arrowX: O,
            arrowY: D,
            shouldHideArrow: T,
            children: /* @__PURE__ */ u.jsx(
              se.div,
              {
                "data-side": M,
                "data-align": k,
                ...m,
                ref: S,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: X ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ds.displayName = Eo;
var us = "PopperArrow", Nf = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ps = d.forwardRef(function(n, t) {
  const { __scopePopper: r, ...o } = n, i = If(us, r), a = Nf[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ u.jsx(
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
        children: /* @__PURE__ */ u.jsx(
          Of,
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
ps.displayName = us;
function Lf(e) {
  return e !== null;
}
var Ff = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    const { placement: t, rects: r, middlewareData: o } = n, a = o.arrow?.centerOffset !== 0, s = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, p] = fs(t), f = { start: "0%", center: "50%", end: "100%" }[p], v = (o.arrow?.x ?? 0) + s / 2, h = (o.arrow?.y ?? 0) + c / 2;
    let x = "", m = "";
    return l === "bottom" ? (x = a ? f : `${v}px`, m = `${-c}px`) : l === "top" ? (x = a ? f : `${v}px`, m = `${r.floating.height + c}px`) : l === "right" ? (x = `${-c}px`, m = a ? f : `${h}px`) : l === "left" && (x = `${r.floating.width + c}px`, m = a ? f : `${h}px`), { data: { x, y: m } };
  }
});
function fs(e) {
  const [n, t = "center"] = e.split("-");
  return [n, t];
}
var ms = ss, vs = ls, hs = ds, gs = ps, zf = "Portal", er = d.forwardRef((e, n) => {
  const { container: t, ...r } = e, [o, i] = d.useState(!1);
  _e(() => i(!0), []);
  const a = t || o && globalThis?.document?.body;
  return a ? Ll.createPortal(/* @__PURE__ */ u.jsx(se.div, { ...r, ref: n }), a) : null;
});
er.displayName = zf;
var $f = d[" useInsertionEffect ".trim().toString()] || _e;
function Zt({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, i, a] = Wf({
    defaultProp: n,
    onChange: t
  }), s = e !== void 0, c = s ? e : o;
  {
    const p = d.useRef(e !== void 0);
    d.useEffect(() => {
      const f = p.current;
      f !== s && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), p.current = s;
    }, [s, r]);
  }
  const l = d.useCallback(
    (p) => {
      if (s) {
        const f = Vf(p) ? p(e) : p;
        f !== e && a.current?.(f);
      } else
        i(p);
    },
    [s, e, i, a]
  );
  return [c, l];
}
function Wf({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = d.useState(e), o = d.useRef(t), i = d.useRef(n);
  return $f(() => {
    i.current = n;
  }, [n]), d.useEffect(() => {
    o.current !== t && (i.current?.(t), o.current = t);
  }, [t, o]), [t, r, i];
}
function Vf(e) {
  return typeof e == "function";
}
function Bf(e) {
  const n = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
var xs = Object.freeze({
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
}), Hf = "VisuallyHidden", Uf = d.forwardRef(
  (e, n) => /* @__PURE__ */ u.jsx(
    se.span,
    {
      ...e,
      ref: n,
      style: { ...xs, ...e.style }
    }
  )
);
Uf.displayName = Hf;
var Gf = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, Ct = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), pn = {}, Cr = 0, bs = function(e) {
  return e && (e.host || bs(e.parentNode));
}, qf = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var r = bs(t);
    return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, Yf = function(e, n, t, r) {
  var o = qf(n, Array.isArray(e) ? e : [e]);
  pn[t] || (pn[t] = /* @__PURE__ */ new WeakMap());
  var i = pn[t], a = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || s.has(f) || (s.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var p = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(v) {
      if (s.has(v))
        p(v);
      else
        try {
          var h = v.getAttribute(r), x = h !== null && h !== "false", m = (Ct.get(v) || 0) + 1, g = (i.get(v) || 0) + 1;
          Ct.set(v, m), i.set(v, g), a.push(v), m === 1 && x && un.set(v, !0), g === 1 && v.setAttribute(t, "true"), x || v.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", v, y);
        }
    });
  };
  return p(n), s.clear(), Cr++, function() {
    a.forEach(function(f) {
      var v = Ct.get(f) - 1, h = i.get(f) - 1;
      Ct.set(f, v), i.set(f, h), v || (un.has(f) || f.removeAttribute(r), un.delete(f)), h || f.removeAttribute(t);
    }), Cr--, Cr || (Ct = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), pn = {});
  };
}, _o = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Gf(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Yf(r, o, t, "aria-hidden")) : function() {
    return null;
  };
}, Yr = function(e, n) {
  return Yr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, Yr(e, n);
};
function Kf(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Yr(e, n);
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
function ys(e, n) {
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
        l(r.next(p));
      } catch (f) {
        a(f);
      }
    }
    function c(p) {
      try {
        l(r.throw(p));
      } catch (f) {
        a(f);
      }
    }
    function l(p) {
      p.done ? i(p.value) : o(p.value).then(s, c);
    }
    l((r = r.apply(e, n || [])).next());
  });
}
function Zf(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
var En = "right-scroll-bar-position", _n = "width-before-scroll-bar", Xf = "with-scroll-bars-hidden", Jf = "--removed-body-scroll-bar-size";
function Sr(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function Qf(e, n) {
  var t = Ge(function() {
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
var em = typeof window < "u" ? d.useLayoutEffect : d.useEffect, Ci = /* @__PURE__ */ new WeakMap();
function tm(e, n) {
  var t = Qf(null, function(r) {
    return e.forEach(function(o) {
      return Sr(o, r);
    });
  });
  return em(function() {
    var r = Ci.get(t);
    if (r) {
      var o = new Set(r), i = new Set(e), a = t.current;
      o.forEach(function(s) {
        i.has(s) || Sr(s, null);
      }), i.forEach(function(s) {
        o.has(s) || Sr(s, a);
      });
    }
    Ci.set(t, e);
  }, [e]), t;
}
function nm(e) {
  return e;
}
function rm(e, n) {
  n === void 0 && (n = nm);
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
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), t = {
        push: function(p) {
          a.push(p), l();
        },
        filter: function(p) {
          return a = a.filter(p), t;
        }
      };
    }
  };
  return o;
}
function om(e) {
  e === void 0 && (e = {});
  var n = rm(null);
  return n.options = he({ async: !0, ssr: !1 }, e), n;
}
var ws = function(e) {
  var n = e.sideCar, t = ys(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = n.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return d.createElement(r, he({}, t));
};
ws.isSideCarExport = !0;
function im(e, n) {
  return e.useMedium(n), ws;
}
var Cs = om(), Er = function() {
}, tr = d.forwardRef(function(e, n) {
  var t = d.useRef(null), r = d.useState({
    onScrollCapture: Er,
    onWheelCapture: Er,
    onTouchMoveCapture: Er
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, p = e.enabled, f = e.shards, v = e.sideCar, h = e.noRelative, x = e.noIsolation, m = e.inert, g = e.allowPinchZoom, y = e.as, C = y === void 0 ? "div" : y, S = e.gapMode, E = ys(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = v, I = tm([t, n]), A = he(he({}, E), o);
  return d.createElement(
    d.Fragment,
    null,
    p && d.createElement(w, { sideCar: Cs, removeScrollBar: l, shards: f, noRelative: h, noIsolation: x, inert: m, setCallbacks: i, allowPinchZoom: !!g, lockRef: t, gapMode: S }),
    a ? d.cloneElement(d.Children.only(s), he(he({}, A), { ref: I })) : d.createElement(C, he({}, A, { className: c, ref: I }), s)
  );
});
tr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
tr.classNames = {
  fullWidth: _n,
  zeroRight: En
};
var am = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function sm() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = am();
  return n && e.setAttribute("nonce", n), e;
}
function cm(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function lm(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var dm = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = sm()) && (cm(n, t), lm(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, um = function() {
  var e = dm();
  return function(n, t) {
    d.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, Ss = function() {
  var e = um(), n = function(t) {
    var r = t.styles, o = t.dynamic;
    return e(r, o), null;
  };
  return n;
}, pm = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, _r = function(e) {
  return parseInt(e || "", 10) || 0;
}, fm = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], r = n[e === "padding" ? "paddingTop" : "marginTop"], o = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [_r(t), _r(r), _r(o)];
}, mm = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return pm;
  var n = fm(e), t = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, r - t + n[2] - n[0])
  };
}, vm = Ss(), kt = "data-scroll-locked", hm = function(e, n, t, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(Xf, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(kt, `] {
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
  
  .`).concat(_n, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(En, " .").concat(En, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(_n, " .").concat(_n, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(kt, `] {
    `).concat(Jf, ": ").concat(s, `px;
  }
`);
}, Si = function() {
  var e = parseInt(document.body.getAttribute(kt) || "0", 10);
  return isFinite(e) ? e : 0;
}, gm = function() {
  d.useEffect(function() {
    return document.body.setAttribute(kt, (Si() + 1).toString()), function() {
      var e = Si() - 1;
      e <= 0 ? document.body.removeAttribute(kt) : document.body.setAttribute(kt, e.toString());
    };
  }, []);
}, xm = function(e) {
  var n = e.noRelative, t = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  gm();
  var i = d.useMemo(function() {
    return mm(o);
  }, [o]);
  return d.createElement(vm, { styles: hm(i, !n, o, t ? "" : "!important") });
}, Kr = !1;
if (typeof window < "u")
  try {
    var fn = Object.defineProperty({}, "passive", {
      get: function() {
        return Kr = !0, !0;
      }
    });
    window.addEventListener("test", fn, fn), window.removeEventListener("test", fn, fn);
  } catch {
    Kr = !1;
  }
var St = Kr ? { passive: !1 } : !1, bm = function(e) {
  return e.tagName === "TEXTAREA";
}, Es = function(e, n) {
  if (!(e instanceof Element))
    return !1;
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !bm(e) && t[n] === "visible")
  );
}, ym = function(e) {
  return Es(e, "overflowY");
}, wm = function(e) {
  return Es(e, "overflowX");
}, Ei = function(e, n) {
  var t = n.ownerDocument, r = n;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = _s(e, r);
    if (o) {
      var i = ks(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== t.body);
  return !1;
}, Cm = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, r = e.clientHeight;
  return [
    n,
    t,
    r
  ];
}, Sm = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, r = e.clientWidth;
  return [
    n,
    t,
    r
  ];
}, _s = function(e, n) {
  return e === "v" ? ym(n) : wm(n);
}, ks = function(e, n) {
  return e === "v" ? Cm(n) : Sm(n);
}, Em = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, _m = function(e, n, t, r, o) {
  var i = Em(e, window.getComputedStyle(n).direction), a = i * r, s = t.target, c = n.contains(s), l = !1, p = a > 0, f = 0, v = 0;
  do {
    if (!s)
      break;
    var h = ks(e, s), x = h[0], m = h[1], g = h[2], y = m - g - i * x;
    (x || y) && _s(e, s) && (f += y, v += x);
    var C = s.parentNode;
    s = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (n.contains(s) || n === s)
  );
  return (p && Math.abs(f) < 1 || !p && Math.abs(v) < 1) && (l = !0), l;
}, mn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, _i = function(e) {
  return [e.deltaX, e.deltaY];
}, ki = function(e) {
  return e && "current" in e ? e.current : e;
}, km = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, Rm = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Pm = 0, Et = [];
function Am(e) {
  var n = d.useRef([]), t = d.useRef([0, 0]), r = d.useRef(), o = d.useState(Pm++)[0], i = d.useState(Ss)[0], a = d.useRef(e);
  d.useEffect(function() {
    a.current = e;
  }, [e]), d.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Zf([e.lockRef.current], (e.shards || []).map(ki), !0).filter(Boolean);
      return m.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = d.useCallback(function(m, g) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = mn(m), C = t.current, S = "deltaX" in m ? m.deltaX : C[0] - y[0], E = "deltaY" in m ? m.deltaY : C[1] - y[1], w, I = m.target, A = Math.abs(S) > Math.abs(E) ? "h" : "v";
    if ("touches" in m && A === "h" && I.type === "range")
      return !1;
    var P = window.getSelection(), N = P && P.anchorNode, W = N ? N === I || N.contains(I) : !1;
    if (W)
      return !1;
    var Z = Ei(A, I);
    if (!Z)
      return !0;
    if (Z ? w = A : (w = A === "v" ? "h" : "v", Z = Ei(A, I)), !Z)
      return !1;
    if (!r.current && "changedTouches" in m && (S || E) && (r.current = w), !w)
      return !0;
    var G = r.current || w;
    return _m(G, g, m, G === "h" ? S : E);
  }, []), c = d.useCallback(function(m) {
    var g = m;
    if (!(!Et.length || Et[Et.length - 1] !== i)) {
      var y = "deltaY" in g ? _i(g) : mn(g), C = n.current.filter(function(w) {
        return w.name === g.type && (w.target === g.target || g.target === w.shadowParent) && km(w.delta, y);
      })[0];
      if (C && C.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!C) {
        var S = (a.current.shards || []).map(ki).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), E = S.length > 0 ? s(g, S[0]) : !a.current.noIsolation;
        E && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = d.useCallback(function(m, g, y, C) {
    var S = { name: m, delta: g, target: y, should: C, shadowParent: jm(y) };
    n.current.push(S), setTimeout(function() {
      n.current = n.current.filter(function(E) {
        return E !== S;
      });
    }, 1);
  }, []), p = d.useCallback(function(m) {
    t.current = mn(m), r.current = void 0;
  }, []), f = d.useCallback(function(m) {
    l(m.type, _i(m), m.target, s(m, e.lockRef.current));
  }, []), v = d.useCallback(function(m) {
    l(m.type, mn(m), m.target, s(m, e.lockRef.current));
  }, []);
  d.useEffect(function() {
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
  return d.createElement(
    d.Fragment,
    null,
    x ? d.createElement(i, { styles: Rm(o) }) : null,
    h ? d.createElement(xm, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function jm(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
  return n;
}
const Om = im(Cs, Am);
var nr = d.forwardRef(function(e, n) {
  return d.createElement(tr, he({}, e, { ref: n, sideCar: Om }));
});
nr.classNames = tr.classNames;
var Tm = [" ", "Enter", "ArrowUp", "ArrowDown"], Mm = [" ", "Enter"], mt = "Select", [rr, or, Dm] = mo(mt), [Nt] = it(mt, [
  Dm,
  Qn
]), ir = Qn(), [Im, at] = Nt(mt), [Nm, Lm] = Nt(mt), Rs = (e) => {
  const {
    __scopeSelect: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: a,
    defaultValue: s,
    onValueChange: c,
    dir: l,
    name: p,
    autoComplete: f,
    disabled: v,
    required: h,
    form: x
  } = e, m = ir(n), [g, y] = d.useState(null), [C, S] = d.useState(null), [E, w] = d.useState(!1), I = vo(l), [A, P] = Zt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: mt
  }), [N, W] = Zt({
    prop: a,
    defaultProp: s,
    onChange: c,
    caller: mt
  }), Z = d.useRef(null), G = g ? x || !!g.closest("form") : !0, [H, B] = d.useState(/* @__PURE__ */ new Set()), z = Array.from(H).map((L) => L.props.value).join(";");
  return /* @__PURE__ */ u.jsx(ms, { ...m, children: /* @__PURE__ */ u.jsxs(
    Im,
    {
      required: h,
      scope: n,
      trigger: g,
      onTriggerChange: y,
      valueNode: C,
      onValueNodeChange: S,
      valueNodeHasChildren: E,
      onValueNodeHasChildrenChange: w,
      contentId: qe(),
      value: N,
      onValueChange: W,
      open: A,
      onOpenChange: P,
      dir: I,
      triggerPointerDownPosRef: Z,
      disabled: v,
      children: [
        /* @__PURE__ */ u.jsx(rr.Provider, { scope: n, children: /* @__PURE__ */ u.jsx(
          Nm,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: d.useCallback((L) => {
              B((X) => new Set(X).add(L));
            }, []),
            onNativeOptionRemove: d.useCallback((L) => {
              B((X) => {
                const R = new Set(X);
                return R.delete(L), R;
              });
            }, []),
            children: t
          }
        ) }),
        G ? /* @__PURE__ */ u.jsxs(
          Js,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: p,
            autoComplete: f,
            value: N,
            onChange: (L) => W(L.target.value),
            disabled: v,
            form: x,
            children: [
              N === void 0 ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
              Array.from(H)
            ]
          },
          z
        ) : null
      ]
    }
  ) });
};
Rs.displayName = mt;
var Ps = "SelectTrigger", As = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, disabled: r = !1, ...o } = e, i = ir(t), a = at(Ps, t), s = a.disabled || r, c = ue(n, a.onTriggerChange), l = or(t), p = d.useRef("touch"), [f, v, h] = ec((m) => {
      const g = l().filter((S) => !S.disabled), y = g.find((S) => S.value === a.value), C = tc(g, m, y);
      C !== void 0 && a.onValueChange(C.value);
    }), x = (m) => {
      s || (a.onOpenChange(!0), h()), m && (a.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ u.jsx(vs, { asChild: !0, ...i, children: /* @__PURE__ */ u.jsx(
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
        "data-placeholder": Qs(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: te(o.onClick, (m) => {
          m.currentTarget.focus(), p.current !== "mouse" && x(m);
        }),
        onPointerDown: te(o.onPointerDown, (m) => {
          p.current = m.pointerType;
          const g = m.target;
          g.hasPointerCapture(m.pointerId) && g.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (x(m), m.preventDefault());
        }),
        onKeyDown: te(o.onKeyDown, (m) => {
          const g = f.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && v(m.key), !(g && m.key === " ") && Tm.includes(m.key) && (x(), m.preventDefault());
        })
      }
    ) });
  }
);
As.displayName = Ps;
var js = "SelectValue", Os = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, children: i, placeholder: a = "", ...s } = e, c = at(js, t), { onValueNodeHasChildrenChange: l } = c, p = i !== void 0, f = ue(n, c.onValueNodeChange);
    return _e(() => {
      l(p);
    }, [l, p]), /* @__PURE__ */ u.jsx(
      se.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: Qs(c.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: a }) : i
      }
    );
  }
);
Os.displayName = js;
var Fm = "SelectIcon", Ts = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, children: r, ...o } = e;
    return /* @__PURE__ */ u.jsx(se.span, { "aria-hidden": !0, ...o, ref: n, children: r || "▼" });
  }
);
Ts.displayName = Fm;
var zm = "SelectPortal", Ms = (e) => /* @__PURE__ */ u.jsx(er, { asChild: !0, ...e });
Ms.displayName = zm;
var vt = "SelectContent", Ds = d.forwardRef(
  (e, n) => {
    const t = at(vt, e.__scopeSelect), [r, o] = d.useState();
    if (_e(() => {
      o(new DocumentFragment());
    }, []), !t.open) {
      const i = r;
      return i ? Bn.createPortal(
        /* @__PURE__ */ u.jsx(Is, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx(rr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(Ns, { ...e, ref: n });
  }
);
Ds.displayName = vt;
var Me = 10, [Is, st] = Nt(vt), $m = "SelectContentImpl", Wm = /* @__PURE__ */ Pt("SelectContent.RemoveScroll"), Ns = d.forwardRef(
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
      align: l,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: v,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: m,
      avoidCollisions: g,
      //
      ...y
    } = e, C = at(vt, t), [S, E] = d.useState(null), [w, I] = d.useState(null), A = ue(n, (_) => E(_)), [P, N] = d.useState(null), [W, Z] = d.useState(
      null
    ), G = or(t), [H, B] = d.useState(!1), z = d.useRef(!1);
    d.useEffect(() => {
      if (S) return _o(S);
    }, [S]), ho();
    const L = d.useCallback(
      (_) => {
        const [$, ...J] = G().map((j) => j.ref.current), [V] = J.slice(-1), re = document.activeElement;
        for (const j of _)
          if (j === re || (j?.scrollIntoView({ block: "nearest" }), j === $ && w && (w.scrollTop = 0), j === V && w && (w.scrollTop = w.scrollHeight), j?.focus(), document.activeElement !== re)) return;
      },
      [G, w]
    ), X = d.useCallback(
      () => L([P, S]),
      [L, P, S]
    );
    d.useEffect(() => {
      H && X();
    }, [H, X]);
    const { onOpenChange: R, triggerPointerDownPosRef: M } = C;
    d.useEffect(() => {
      if (S) {
        let _ = { x: 0, y: 0 };
        const $ = (V) => {
          _ = {
            x: Math.abs(Math.round(V.pageX) - (M.current?.x ?? 0)),
            y: Math.abs(Math.round(V.pageY) - (M.current?.y ?? 0))
          };
        }, J = (V) => {
          _.x <= 10 && _.y <= 10 ? V.preventDefault() : S.contains(V.target) || R(!1), document.removeEventListener("pointermove", $), M.current = null;
        };
        return M.current !== null && (document.addEventListener("pointermove", $), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", $), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [S, R, M]), d.useEffect(() => {
      const _ = () => R(!1);
      return window.addEventListener("blur", _), window.addEventListener("resize", _), () => {
        window.removeEventListener("blur", _), window.removeEventListener("resize", _);
      };
    }, [R]);
    const [k, b] = ec((_) => {
      const $ = G().filter((re) => !re.disabled), J = $.find((re) => re.ref.current === document.activeElement), V = tc($, _, J);
      V && setTimeout(() => V.ref.current.focus());
    }), O = d.useCallback(
      (_, $, J) => {
        const V = !z.current && !J;
        (C.value !== void 0 && C.value === $ || V) && (N(_), V && (z.current = !0));
      },
      [C.value]
    ), D = d.useCallback(() => S?.focus(), [S]), T = d.useCallback(
      (_, $, J) => {
        const V = !z.current && !J;
        (C.value !== void 0 && C.value === $ || V) && Z(_);
      },
      [C.value]
    ), K = r === "popper" ? Zr : Ls, U = K === Zr ? {
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: v,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: m,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ u.jsx(
      Is,
      {
        scope: t,
        content: S,
        viewport: w,
        onViewportChange: I,
        itemRefCallback: O,
        selectedItem: P,
        onItemLeave: D,
        itemTextRefCallback: T,
        focusSelectedItem: X,
        selectedItemText: W,
        position: r,
        isPositioned: H,
        searchRef: k,
        children: /* @__PURE__ */ u.jsx(nr, { as: Wm, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          Yn,
          {
            asChild: !0,
            trapped: C.open,
            onMountAutoFocus: (_) => {
              _.preventDefault();
            },
            onUnmountAutoFocus: te(o, (_) => {
              C.trigger?.focus({ preventScroll: !0 }), _.preventDefault();
            }),
            children: /* @__PURE__ */ u.jsx(
              qn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (_) => _.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ u.jsx(
                  K,
                  {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: (_) => _.preventDefault(),
                    ...y,
                    ...U,
                    onPlaced: () => B(!0),
                    ref: A,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: te(y.onKeyDown, (_) => {
                      const $ = _.ctrlKey || _.altKey || _.metaKey;
                      if (_.key === "Tab" && _.preventDefault(), !$ && _.key.length === 1 && b(_.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(_.key)) {
                        let V = G().filter((re) => !re.disabled).map((re) => re.ref.current);
                        if (["ArrowUp", "End"].includes(_.key) && (V = V.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(_.key)) {
                          const re = _.target, j = V.indexOf(re);
                          V = V.slice(j + 1);
                        }
                        setTimeout(() => L(V)), _.preventDefault();
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
Ns.displayName = $m;
var Vm = "SelectItemAlignedPosition", Ls = d.forwardRef((e, n) => {
  const { __scopeSelect: t, onPlaced: r, ...o } = e, i = at(vt, t), a = st(vt, t), [s, c] = d.useState(null), [l, p] = d.useState(null), f = ue(n, (A) => p(A)), v = or(t), h = d.useRef(!1), x = d.useRef(!0), { viewport: m, selectedItem: g, selectedItemText: y, focusSelectedItem: C } = a, S = d.useCallback(() => {
    if (i.trigger && i.valueNode && s && l && m && g && y) {
      const A = i.trigger.getBoundingClientRect(), P = l.getBoundingClientRect(), N = i.valueNode.getBoundingClientRect(), W = y.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const re = W.left - P.left, j = N.left - re, pe = A.left - j, Q = A.width + pe, oe = Math.max(Q, P.width), be = window.innerWidth - Me, ge = ri(j, [
          Me,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Me, be - oe)
        ]);
        s.style.minWidth = Q + "px", s.style.left = ge + "px";
      } else {
        const re = P.right - W.right, j = window.innerWidth - N.right - re, pe = window.innerWidth - A.right - j, Q = A.width + pe, oe = Math.max(Q, P.width), be = window.innerWidth - Me, ge = ri(j, [
          Me,
          Math.max(Me, be - oe)
        ]);
        s.style.minWidth = Q + "px", s.style.right = ge + "px";
      }
      const Z = v(), G = window.innerHeight - Me * 2, H = m.scrollHeight, B = window.getComputedStyle(l), z = parseInt(B.borderTopWidth, 10), L = parseInt(B.paddingTop, 10), X = parseInt(B.borderBottomWidth, 10), R = parseInt(B.paddingBottom, 10), M = z + L + H + R + X, k = Math.min(g.offsetHeight * 5, M), b = window.getComputedStyle(m), O = parseInt(b.paddingTop, 10), D = parseInt(b.paddingBottom, 10), T = A.top + A.height / 2 - Me, K = G - T, U = g.offsetHeight / 2, _ = g.offsetTop + U, $ = z + L + _, J = M - $;
      if ($ <= T) {
        const re = Z.length > 0 && g === Z[Z.length - 1].ref.current;
        s.style.bottom = "0px";
        const j = l.clientHeight - m.offsetTop - m.offsetHeight, pe = Math.max(
          K,
          U + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? D : 0) + j + X
        ), Q = $ + pe;
        s.style.height = Q + "px";
      } else {
        const re = Z.length > 0 && g === Z[0].ref.current;
        s.style.top = "0px";
        const pe = Math.max(
          T,
          z + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? O : 0) + U
        ) + J;
        s.style.height = pe + "px", m.scrollTop = $ - T + m.offsetTop;
      }
      s.style.margin = `${Me}px 0`, s.style.minHeight = k + "px", s.style.maxHeight = G + "px", r?.(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    v,
    i.trigger,
    i.valueNode,
    s,
    l,
    m,
    g,
    y,
    i.dir,
    r
  ]);
  _e(() => S(), [S]);
  const [E, w] = d.useState();
  _e(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [l]);
  const I = d.useCallback(
    (A) => {
      A && x.current === !0 && (S(), C?.(), x.current = !1);
    },
    [S, C]
  );
  return /* @__PURE__ */ u.jsx(
    Hm,
    {
      scope: t,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: I,
      children: /* @__PURE__ */ u.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
          },
          children: /* @__PURE__ */ u.jsx(
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
Ls.displayName = Vm;
var Bm = "SelectPopperPosition", Zr = d.forwardRef((e, n) => {
  const {
    __scopeSelect: t,
    align: r = "start",
    collisionPadding: o = Me,
    ...i
  } = e, a = ir(t);
  return /* @__PURE__ */ u.jsx(
    hs,
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
Zr.displayName = Bm;
var [Hm, ko] = Nt(vt, {}), Xr = "SelectViewport", Fs = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, nonce: r, ...o } = e, i = st(Xr, t), a = ko(Xr, t), s = ue(n, i.onViewportChange), c = d.useRef(0);
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ u.jsx(rr.Slot, { scope: t, children: /* @__PURE__ */ u.jsx(
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
          onScroll: te(o.onScroll, (l) => {
            const p = l.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: v } = a;
            if (v?.current && f) {
              const h = Math.abs(c.current - p.scrollTop);
              if (h > 0) {
                const x = window.innerHeight - Me * 2, m = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), y = Math.max(m, g);
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
Fs.displayName = Xr;
var zs = "SelectGroup", [Um, Gm] = Nt(zs), $s = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = qe();
    return /* @__PURE__ */ u.jsx(Um, { scope: t, id: o, children: /* @__PURE__ */ u.jsx(se.div, { role: "group", "aria-labelledby": o, ...r, ref: n }) });
  }
);
$s.displayName = zs;
var Ws = "SelectLabel", Vs = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = Gm(Ws, t);
    return /* @__PURE__ */ u.jsx(se.div, { id: o.id, ...r, ref: n });
  }
);
Vs.displayName = Ws;
var Mn = "SelectItem", [qm, Bs] = Nt(Mn), Hs = d.forwardRef(
  (e, n) => {
    const {
      __scopeSelect: t,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, s = at(Mn, t), c = st(Mn, t), l = s.value === r, [p, f] = d.useState(i ?? ""), [v, h] = d.useState(!1), x = ue(
      n,
      (C) => c.itemRefCallback?.(C, r, o)
    ), m = qe(), g = d.useRef("touch"), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u.jsx(
      qm,
      {
        scope: t,
        value: r,
        disabled: o,
        textId: m,
        isSelected: l,
        onItemTextChange: d.useCallback((C) => {
          f((S) => S || (C?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u.jsx(
          rr.ItemSlot,
          {
            scope: t,
            value: r,
            disabled: o,
            textValue: p,
            children: /* @__PURE__ */ u.jsx(
              se.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": v ? "" : void 0,
                "aria-selected": l && v,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: x,
                onFocus: te(a.onFocus, () => h(!0)),
                onBlur: te(a.onBlur, () => h(!1)),
                onClick: te(a.onClick, () => {
                  g.current !== "mouse" && y();
                }),
                onPointerUp: te(a.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: te(a.onPointerDown, (C) => {
                  g.current = C.pointerType;
                }),
                onPointerMove: te(a.onPointerMove, (C) => {
                  g.current = C.pointerType, o ? c.onItemLeave?.() : g.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: te(a.onPointerLeave, (C) => {
                  C.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: te(a.onKeyDown, (C) => {
                  c.searchRef?.current !== "" && C.key === " " || (Mm.includes(C.key) && y(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Hs.displayName = Mn;
var Gt = "SelectItemText", Us = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, ...i } = e, a = at(Gt, t), s = st(Gt, t), c = Bs(Gt, t), l = Lm(Gt, t), [p, f] = d.useState(null), v = ue(
      n,
      (y) => f(y),
      c.onItemTextChange,
      (y) => s.itemTextRefCallback?.(y, c.value, c.disabled)
    ), h = p?.textContent, x = d.useMemo(
      () => /* @__PURE__ */ u.jsx("option", { value: c.value, disabled: c.disabled, children: h }, c.value),
      [c.disabled, c.value, h]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: g } = l;
    return _e(() => (m(x), () => g(x)), [m, g, x]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(se.span, { id: c.textId, ...i, ref: v }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Bn.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
Us.displayName = Gt;
var Gs = "SelectItemIndicator", qs = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return Bs(Gs, t).isSelected ? /* @__PURE__ */ u.jsx(se.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }
);
qs.displayName = Gs;
var Jr = "SelectScrollUpButton", Ys = d.forwardRef((e, n) => {
  const t = st(Jr, e.__scopeSelect), r = ko(Jr, e.__scopeSelect), [o, i] = d.useState(!1), a = ue(n, r.onScrollButtonChange);
  return _e(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const l = c.scrollTop > 0;
        i(l);
      };
      const c = t.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    Zs,
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
Ys.displayName = Jr;
var Qr = "SelectScrollDownButton", Ks = d.forwardRef((e, n) => {
  const t = st(Qr, e.__scopeSelect), r = ko(Qr, e.__scopeSelect), [o, i] = d.useState(!1), a = ue(n, r.onScrollButtonChange);
  return _e(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const l = c.scrollHeight - c.clientHeight, p = Math.ceil(c.scrollTop) < l;
        i(p);
      };
      const c = t.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    Zs,
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
Ks.displayName = Qr;
var Zs = d.forwardRef((e, n) => {
  const { __scopeSelect: t, onAutoScroll: r, ...o } = e, i = st("SelectScrollButton", t), a = d.useRef(null), s = or(t), c = d.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return d.useEffect(() => () => c(), [c]), _e(() => {
    s().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ u.jsx(
    se.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: n,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: te(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: te(o.onPointerMove, () => {
        i.onItemLeave?.(), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: te(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), Ym = "SelectSeparator", Xs = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return /* @__PURE__ */ u.jsx(se.div, { "aria-hidden": !0, ...r, ref: n });
  }
);
Xs.displayName = Ym;
var eo = "SelectArrow", Km = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = ir(t), i = at(eo, t), a = st(eo, t);
    return i.open && a.position === "popper" ? /* @__PURE__ */ u.jsx(gs, { ...o, ...r, ref: n }) : null;
  }
);
Km.displayName = eo;
var Zm = "SelectBubbleInput", Js = d.forwardRef(
  ({ __scopeSelect: e, value: n, ...t }, r) => {
    const o = d.useRef(null), i = ue(r, o), a = Bf(n);
    return d.useEffect(() => {
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
    }, [a, n]), /* @__PURE__ */ u.jsx(
      se.select,
      {
        ...t,
        style: { ...xs, ...t.style },
        ref: i,
        defaultValue: n
      }
    );
  }
);
Js.displayName = Zm;
function Qs(e) {
  return e === "" || e === void 0;
}
function ec(e) {
  const n = We(e), t = d.useRef(""), r = d.useRef(0), o = d.useCallback(
    (a) => {
      const s = t.current + a;
      n(s), (function c(l) {
        t.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(s);
    },
    [n]
  ), i = d.useCallback(() => {
    t.current = "", window.clearTimeout(r.current);
  }, []);
  return d.useEffect(() => () => window.clearTimeout(r.current), []), [t, o, i];
}
function tc(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((l) => l === n[0]) ? n[0] : n, i = t ? e.indexOf(t) : -1;
  let a = Xm(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((l) => l !== t));
  const c = a.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== t ? c : void 0;
}
function Xm(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var Jm = Rs, Qm = As, ev = Os, tv = Ts, nv = Ms, rv = Ds, ov = Fs, iv = $s, av = Vs, sv = Hs, cv = Us, lv = qs, dv = Ys, uv = Ks, pv = Xs;
function fv({ ...e }) {
  return /* @__PURE__ */ u.jsx(Jm, { "data-slot": "select", ...e });
}
function Wb({
  ...e
}) {
  return /* @__PURE__ */ u.jsx(iv, { "data-slot": "select-group", ...e });
}
function mv({
  ...e
}) {
  return /* @__PURE__ */ u.jsx(ev, { "data-slot": "select-value", ...e });
}
function vv({
  className: e,
  size: n = "default",
  variant: t = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ u.jsxs(
    Qm,
    {
      "data-slot": "select-trigger",
      "data-size": n,
      className: ne(
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
        /* @__PURE__ */ u.jsx(tv, { asChild: !0, children: /* @__PURE__ */ u.jsx(
          Ia,
          {
            className: ne({
              "size-6 text-gray-300": t === "default",
              "size-4 text-gray-600": t === "ghost"
            })
          }
        ) })
      ]
    }
  );
}
function hv({
  className: e,
  children: n,
  position: t = "popper",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ u.jsx(nv, { children: /* @__PURE__ */ u.jsxs(
    rv,
    {
      "data-slot": "select-content",
      className: ne(
        "bg-white font-sans text-gray-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height)  origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-gray-25 shadow-md",
        t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: t,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ u.jsx(xv, {}),
        /* @__PURE__ */ u.jsx(
          ov,
          {
            className: ne(
              "p-1",
              t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: n
          }
        ),
        /* @__PURE__ */ u.jsx(bv, {})
      ]
    }
  ) });
}
function Vb({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    av,
    {
      "data-slot": "select-label",
      className: ne("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...n
    }
  );
}
function gv({
  className: e,
  children: n,
  ...t
}) {
  return /* @__PURE__ */ u.jsxs(
    sv,
    {
      "data-slot": "select-item",
      className: ne(
        "focus:bg-gray-25 focus:text-blue-hepatica-600 [&_svg:not([class*='text-'])]:text-gray-300 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...t,
      children: [
        /* @__PURE__ */ u.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(lv, { children: /* @__PURE__ */ u.jsx(gu, { className: "size-4" }) }) }),
        /* @__PURE__ */ u.jsx(cv, { children: n })
      ]
    }
  );
}
function Bb({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    pv,
    {
      "data-slot": "select-separator",
      className: ne("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...n
    }
  );
}
function xv({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    dv,
    {
      "data-slot": "select-scroll-up-button",
      className: ne(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...n,
      children: /* @__PURE__ */ u.jsx(Eu, { className: "size-4" })
    }
  );
}
function bv({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    uv,
    {
      "data-slot": "select-scroll-down-button",
      className: ne(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...n,
      children: /* @__PURE__ */ u.jsx(Ia, { className: "size-4" })
    }
  );
}
function Hb({
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
  const l = Math.max(1, Math.ceil(t / Math.max(n, 1))), p = Math.min(Math.max(e, 1), l), f = t === 0 ? 0 : (p - 1) * n + 1, v = t === 0 ? 0 : Math.min(t, p * n), h = !a && p > 1, x = !a && p < l, m = () => {
    h && o(p - 1);
  }, g = () => {
    x && o(p + 1);
  }, y = (C) => {
    Number.isNaN(Number(C)) || i?.(Number(C));
  };
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      "data-slot": "pagination",
      className: ne(
        "flex w-full items-center justify-end gap-4 py-3 text-sm text-gray-700",
        "border-t border-gray-50",
        s
      ),
      ...c,
      children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ u.jsx("span", { className: "font-sans text-xs text-gray-700", children: "Rows per page:" }),
          /* @__PURE__ */ u.jsx("div", { className: "w-16", children: /* @__PURE__ */ u.jsxs(
            fv,
            {
              disabled: a || !i,
              defaultValue: `${n}`,
              onValueChange: y,
              "data-testid": "pagination--items-per-page",
              children: [
                /* @__PURE__ */ u.jsx(vv, { variant: "ghost", disabled: a, children: /* @__PURE__ */ u.jsx(mv, { placeholder: "Theme" }) }),
                /* @__PURE__ */ u.jsx(hv, { children: r.map((C) => /* @__PURE__ */ u.jsx(gv, { value: `${C}`, children: C }, C)) })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ u.jsx(
            "p",
            {
              "data-slot": "pagination-range",
              className: "text-xs text-gray-600 whitespace-nowrap",
              children: t === 0 ? "0 of 0" : `${f} – ${v} of ${t}`
            }
          ),
          /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-x-1", children: [
            /* @__PURE__ */ u.jsx(
              "button",
              {
                "data-slot": "pagination-prev",
                type: "button",
                onClick: m,
                disabled: !h,
                "aria-label": "Previous page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ u.jsx(Cu, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ u.jsx(
              "button",
              {
                "data-slot": "pagination-next",
                type: "button",
                onClick: g,
                disabled: !x,
                "aria-label": "Next page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ u.jsx(yu, { className: "size-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const yv = Hn(
  "bg-white rounded-2xl overflow-hidden flex flex-col w-full",
  {
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
  }
);
function Ub({
  title: e,
  children: n,
  footer: t,
  elevation: r = "elevation-0",
  className: o,
  ...i
}) {
  return /* @__PURE__ */ u.jsxs(
    "section",
    {
      ...i,
      className: ne(yv({ elevation: r, className: o })),
      children: [
        !!e && /* @__PURE__ */ u.jsx("header", { className: "h-15 flex items-center px-8 border-b border-b-gray-25", children: /* @__PURE__ */ u.jsx("h3", { className: "font-sans font-semibold text-base text-gray-900 leading-5", children: e }) }),
        /* @__PURE__ */ u.jsx("div", { className: "flex flex-col p-4 md:p-8", children: n }),
        !!t && /* @__PURE__ */ u.jsx("footer", { className: "px-4 md:px-8 py-4 md:py-6 border-t border-t-gray-25", children: t })
      ]
    }
  );
}
var nc = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ri = ie.createContext && /* @__PURE__ */ ie.createContext(nc), wv = ["attr", "size", "title"];
function Cv(e, n) {
  if (e == null) return {};
  var t = Sv(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Sv(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function Dn() {
  return Dn = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Dn.apply(this, arguments);
}
function Pi(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function In(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Pi(Object(t), !0).forEach(function(r) {
      Ev(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Pi(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Ev(e, n, t) {
  return n = _v(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function _v(e) {
  var n = kv(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function kv(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function rc(e) {
  return e && e.map((n, t) => /* @__PURE__ */ ie.createElement(n.tag, In({
    key: t
  }, n.attr), rc(n.child)));
}
function Rv(e) {
  return (n) => /* @__PURE__ */ ie.createElement(Pv, Dn({
    attr: In({}, e.attr)
  }, n), rc(e.child));
}
function Pv(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, a = Cv(e, wv), s = o || t.size || "1em", c;
    return t.className && (c = t.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ ie.createElement("svg", Dn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, a, {
      className: c,
      style: In(In({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ ie.createElement("title", null, i), e.children);
  };
  return Ri !== void 0 ? /* @__PURE__ */ ie.createElement(Ri.Consumer, null, (t) => n(t)) : n(nc);
}
function Av(e) {
  return Rv({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM22.0104 8.81412L20.5962 7.3999L16 11.9961L20.5962 16.5923L22.0104 15.1781L18.8284 11.9961L22.0104 8.81412Z" }, child: [] }] })(e);
}
const jv = new URL("data:image/svg+xml,%3csvg%20width='247'%20height='980'%20viewBox='0%200%20247%20980'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9467_2027)'%3e%3crect%20width='247'%20height='983'%20fill='black'/%3e%3cg%20opacity='0.3'%20filter='url(%23filter0_f_9467_2027)'%3e%3cellipse%20cx='-129.135'%20cy='1014.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20-129.135%201014.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.3'%20filter='url(%23filter1_f_9467_2027)'%3e%3cellipse%20cx='450.01'%20cy='1514.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20450.01%201514.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter2_f_9467_2027)'%3e%3cellipse%20cx='119.407'%20cy='-84.3658'%20rx='364.442'%20ry='193.158'%20fill='%230B495D'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter3_f_9467_2027)'%3e%3cellipse%20cx='399.478'%20cy='-0.360779'%20rx='364.442'%20ry='193.158'%20transform='rotate(30%20399.478%20-0.360779)'%20fill='%23BF3535'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter4_f_9467_2027)'%3e%3cellipse%20cx='-312.773'%20cy='835'%20rx='434.874'%20ry='485.827'%20transform='rotate(-136.998%20-312.773%20835)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter5_f_9467_2027)'%3e%3cellipse%20cx='336.608'%20cy='1039.65'%20rx='553.734'%20ry='293.484'%20transform='rotate(7.13051%20336.608%201039.65)'%20fill='%23660000'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_9467_2027'%20x='-691.145'%20y='128.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_9467_2027'%20x='-112'%20y='628.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_9467_2027'%20x='-453.839'%20y='-486.327'%20width='1146.49'%20height='803.922'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_9467_2027'%20x='-139.475'%20y='-456.526'%20width='1077.91'%20height='912.33'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_9467_2027'%20x='-1172.05'%20y='-27.8358'%20width='1718.56'%20height='1725.67'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_9467_2027'%20x='-531.326'%20y='423.111'%20width='1735.87'%20height='1233.08'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='158.628'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cclipPath%20id='clip0_9467_2027'%3e%3crect%20width='247'%20height='983'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", import.meta.url).href;
function Gb({ children: e }) {
  const [n, t] = Ge(!1), r = ye(() => t((i) => !i), []), o = ye(() => t(!1), []);
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx(
      "button",
      {
        type: "button",
        onClick: r,
        className: ne(
          "fixed left-4 top-4 z-40 inline-flex size-12 items-center justify-center",
          "rounded-lg bg-black",
          "lg:hidden"
          // hide the button when viewport >= 912px
        ),
        "aria-label": n ? "Close sidebar" : "Open sidebar",
        children: /* @__PURE__ */ u.jsx(Av, { className: "size-6 text-white" })
      }
    ),
    /* @__PURE__ */ u.jsx(
      "div",
      {
        className: ne(
          "fixed inset-0 z-30 bg-black/40 transition-opacity sidebar:hidden",
          n ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: o
      }
    ),
    /* @__PURE__ */ u.jsxs(
      "aside",
      {
        className: ne(
          "relative",
          "fixed inset-y-0 left-0 z-40 w-[247px]",
          "bg-no-repeat bg-cover bg-top",
          "transition-transform duration-200 ease-out",
          n ? "translate-x-0" : "-translate-x-full",
          // desktop (>= 912px): always visible, static, no transform
          "lg:static lg:translate-x-0 lg:shadow-none",
          "lg:flex lg:flex-col px-6 overflow-hidden"
        ),
        children: [
          /* @__PURE__ */ u.jsx(
            "img",
            {
              src: jv,
              alt: "",
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
            }
          ),
          /* @__PURE__ */ u.jsxs("div", { className: "w-full flex flex-1 flex-col", children: [
            /* @__PURE__ */ u.jsx("div", { className: "flex justify-center pt-7 pb-12 border-b border-b border-b-white/15 mb-6", children: /* @__PURE__ */ u.jsx("div", { className: "w-[8.75rem] flex items-center gap-x-1", children: /* @__PURE__ */ u.jsx(Gu, { size: 32 }) }) }),
            /* @__PURE__ */ u.jsx("div", { className: "flex flex-1", children: e })
          ] })
        ]
      }
    )
  ] });
}
function qb({ className: e, ...n }) {
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ u.jsx(
        "table",
        {
          "data-slot": "table",
          className: ne("w-full caption-bottom text-sm", e),
          ...n
        }
      )
    }
  );
}
function Yb({ className: e, ...n }) {
  return /* @__PURE__ */ u.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: ne("border-b-2 border-b-gray-50", e),
      ...n
    }
  );
}
function Kb({ className: e, ...n }) {
  return /* @__PURE__ */ u.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: ne("[&_tr:last-child]:border-0", e),
      ...n
    }
  );
}
function Zb({ className: e, ...n }) {
  return /* @__PURE__ */ u.jsx(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: ne(
        "bg-white border-t border-t-gray-50 font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...n
    }
  );
}
function Xb({ className: e, ...n }) {
  return /* @__PURE__ */ u.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: ne(
        "hover:bg-blue-hepatica-100 data-[state=selected]:bg-blue-hepatica-100 border-b border-b-gray-50 transition-colors",
        e
      ),
      ...n
    }
  );
}
function Jb({ className: e, ...n }) {
  return /* @__PURE__ */ u.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: ne(
        "font-sans text-sm text-gray-900 tracking-[0.02em] h-12 px-4 text-left align-middle font-semibold whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function Qb({ className: e, ...n }) {
  return /* @__PURE__ */ u.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: ne(
        "px-4 py-2 font-sans align-middle whitespace-nowrap text-sm tracking-[0.02em] text-gray-700 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function e0({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ u.jsx(
    "caption",
    {
      "data-slot": "table-caption",
      className: ne("text-muted-foreground mt-4 text-sm", e),
      ...n
    }
  );
}
function t0({ className: e, ...n }) {
  return /* @__PURE__ */ u.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: ne(
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
const Ov = Hn("font-sans text-gray-900", {
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
}), Tv = {
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
function n0(e) {
  const { as: n, variant: t, className: r, children: o, ...i } = e, a = t ?? "body-md", s = n ?? Tv[a];
  return /* @__PURE__ */ u.jsx(
    s,
    {
      className: ne(
        Ov({ variant: a }),
        r
      ),
      ...i,
      children: o
    }
  );
}
var vn = { exports: {} }, hn = { exports: {} }, ce = {};
var Ai;
function Mv() {
  if (Ai) return ce;
  Ai = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function S(w) {
    if (typeof w == "object" && w !== null) {
      var I = w.$$typeof;
      switch (I) {
        case n:
          switch (w = w.type, w) {
            case c:
            case l:
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
                  return I;
              }
          }
        case t:
          return I;
      }
    }
  }
  function E(w) {
    return S(w) === l;
  }
  return ce.AsyncMode = c, ce.ConcurrentMode = l, ce.ContextConsumer = s, ce.ContextProvider = a, ce.Element = n, ce.ForwardRef = p, ce.Fragment = r, ce.Lazy = x, ce.Memo = h, ce.Portal = t, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = f, ce.isAsyncMode = function(w) {
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
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === i || w === o || w === f || w === v || typeof w == "object" && w !== null && (w.$$typeof === x || w.$$typeof === h || w.$$typeof === a || w.$$typeof === s || w.$$typeof === p || w.$$typeof === g || w.$$typeof === y || w.$$typeof === C || w.$$typeof === m);
  }, ce.typeOf = S, ce;
}
var le = {};
var ji;
function Dv() {
  return ji || (ji = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function S(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === r || j === l || j === i || j === o || j === f || j === v || typeof j == "object" && j !== null && (j.$$typeof === x || j.$$typeof === h || j.$$typeof === a || j.$$typeof === s || j.$$typeof === p || j.$$typeof === g || j.$$typeof === y || j.$$typeof === C || j.$$typeof === m);
    }
    function E(j) {
      if (typeof j == "object" && j !== null) {
        var pe = j.$$typeof;
        switch (pe) {
          case n:
            var Q = j.type;
            switch (Q) {
              case c:
              case l:
              case r:
              case i:
              case o:
              case f:
                return Q;
              default:
                var oe = Q && Q.$$typeof;
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
    var w = c, I = l, A = s, P = a, N = n, W = p, Z = r, G = x, H = h, B = t, z = i, L = o, X = f, R = !1;
    function M(j) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(j) || E(j) === c;
    }
    function k(j) {
      return E(j) === l;
    }
    function b(j) {
      return E(j) === s;
    }
    function O(j) {
      return E(j) === a;
    }
    function D(j) {
      return typeof j == "object" && j !== null && j.$$typeof === n;
    }
    function T(j) {
      return E(j) === p;
    }
    function K(j) {
      return E(j) === r;
    }
    function U(j) {
      return E(j) === x;
    }
    function _(j) {
      return E(j) === h;
    }
    function $(j) {
      return E(j) === t;
    }
    function J(j) {
      return E(j) === i;
    }
    function V(j) {
      return E(j) === o;
    }
    function re(j) {
      return E(j) === f;
    }
    le.AsyncMode = w, le.ConcurrentMode = I, le.ContextConsumer = A, le.ContextProvider = P, le.Element = N, le.ForwardRef = W, le.Fragment = Z, le.Lazy = G, le.Memo = H, le.Portal = B, le.Profiler = z, le.StrictMode = L, le.Suspense = X, le.isAsyncMode = M, le.isConcurrentMode = k, le.isContextConsumer = b, le.isContextProvider = O, le.isElement = D, le.isForwardRef = T, le.isFragment = K, le.isLazy = U, le.isMemo = _, le.isPortal = $, le.isProfiler = J, le.isStrictMode = V, le.isSuspense = re, le.isValidElementType = S, le.typeOf = E;
  })()), le;
}
var Oi;
function oc() {
  return Oi || (Oi = 1, process.env.NODE_ENV === "production" ? hn.exports = Mv() : hn.exports = Dv()), hn.exports;
}
var kr, Ti;
function Iv() {
  if (Ti) return kr;
  Ti = 1;
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
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        l[p] = p;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return kr = o() ? Object.assign : function(i, a) {
    for (var s, c = r(i), l, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var f in s)
        n.call(s, f) && (c[f] = s[f]);
      if (e) {
        l = e(s);
        for (var v = 0; v < l.length; v++)
          t.call(s, l[v]) && (c[l[v]] = s[l[v]]);
      }
    }
    return c;
  }, kr;
}
var Rr, Mi;
function Ro() {
  if (Mi) return Rr;
  Mi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Rr = e, Rr;
}
var Pr, Di;
function ic() {
  return Di || (Di = 1, Pr = Function.call.bind(Object.prototype.hasOwnProperty)), Pr;
}
var Ar, Ii;
function Nv() {
  if (Ii) return Ar;
  Ii = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ Ro(), t = {}, r = /* @__PURE__ */ ic();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, c, l) {
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
            var h = l ? l() : "";
            e(
              "Failed " + s + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Ar = o, Ar;
}
var jr, Ni;
function Lv() {
  if (Ni) return jr;
  Ni = 1;
  var e = oc(), n = Iv(), t = /* @__PURE__ */ Ro(), r = /* @__PURE__ */ ic(), o = /* @__PURE__ */ Nv(), i = function() {
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
  return jr = function(s, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function f(k) {
      var b = k && (l && k[l] || k[p]);
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
      instanceOf: I,
      node: W(),
      objectOf: P,
      oneOf: A,
      oneOfType: N,
      shape: G,
      exact: H
    };
    function x(k, b) {
      return k === b ? k !== 0 || 1 / k === 1 / b : k !== k && b !== b;
    }
    function m(k, b) {
      this.message = k, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function g(k) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, O = 0;
      function D(K, U, _, $, J, V, re) {
        if ($ = $ || v, V = V || _, re !== t) {
          if (c) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = $ + ":" + _;
            !b[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            O < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[pe] = !0, O++);
          }
        }
        return U[_] == null ? K ? U[_] === null ? new m("The " + J + " `" + V + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new m("The " + J + " `" + V + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : k(U, _, $, J, V);
      }
      var T = D.bind(null, !1);
      return T.isRequired = D.bind(null, !0), T;
    }
    function y(k) {
      function b(O, D, T, K, U, _) {
        var $ = O[D], J = L($);
        if (J !== k) {
          var V = X($);
          return new m(
            "Invalid " + K + " `" + U + "` of type " + ("`" + V + "` supplied to `" + T + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return g(b);
    }
    function C() {
      return g(a);
    }
    function S(k) {
      function b(O, D, T, K, U) {
        if (typeof k != "function")
          return new m("Property `" + U + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var _ = O[D];
        if (!Array.isArray(_)) {
          var $ = L(_);
          return new m("Invalid " + K + " `" + U + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected an array."));
        }
        for (var J = 0; J < _.length; J++) {
          var V = k(_, J, T, K, U + "[" + J + "]", t);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return g(b);
    }
    function E() {
      function k(b, O, D, T, K) {
        var U = b[O];
        if (!s(U)) {
          var _ = L(U);
          return new m("Invalid " + T + " `" + K + "` of type " + ("`" + _ + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(k);
    }
    function w() {
      function k(b, O, D, T, K) {
        var U = b[O];
        if (!e.isValidElementType(U)) {
          var _ = L(U);
          return new m("Invalid " + T + " `" + K + "` of type " + ("`" + _ + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(k);
    }
    function I(k) {
      function b(O, D, T, K, U) {
        if (!(O[D] instanceof k)) {
          var _ = k.name || v, $ = M(O[D]);
          return new m("Invalid " + K + " `" + U + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return g(b);
    }
    function A(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function b(O, D, T, K, U) {
        for (var _ = O[D], $ = 0; $ < k.length; $++)
          if (x(_, k[$]))
            return null;
        var J = JSON.stringify(k, function(re, j) {
          var pe = X(j);
          return pe === "symbol" ? String(j) : j;
        });
        return new m("Invalid " + K + " `" + U + "` of value `" + String(_) + "` " + ("supplied to `" + T + "`, expected one of " + J + "."));
      }
      return g(b);
    }
    function P(k) {
      function b(O, D, T, K, U) {
        if (typeof k != "function")
          return new m("Property `" + U + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var _ = O[D], $ = L(_);
        if ($ !== "object")
          return new m("Invalid " + K + " `" + U + "` of type " + ("`" + $ + "` supplied to `" + T + "`, expected an object."));
        for (var J in _)
          if (r(_, J)) {
            var V = k(_, J, T, K, U + "." + J, t);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return g(b);
    }
    function N(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var b = 0; b < k.length; b++) {
        var O = k[b];
        if (typeof O != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + R(O) + " at index " + b + "."
          ), a;
      }
      function D(T, K, U, _, $) {
        for (var J = [], V = 0; V < k.length; V++) {
          var re = k[V], j = re(T, K, U, _, $, t);
          if (j == null)
            return null;
          j.data && r(j.data, "expectedType") && J.push(j.data.expectedType);
        }
        var pe = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new m("Invalid " + _ + " `" + $ + "` supplied to " + ("`" + U + "`" + pe + "."));
      }
      return g(D);
    }
    function W() {
      function k(b, O, D, T, K) {
        return B(b[O]) ? null : new m("Invalid " + T + " `" + K + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return g(k);
    }
    function Z(k, b, O, D, T) {
      return new m(
        (k || "React class") + ": " + b + " type `" + O + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function G(k) {
      function b(O, D, T, K, U) {
        var _ = O[D], $ = L(_);
        if ($ !== "object")
          return new m("Invalid " + K + " `" + U + "` of type `" + $ + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var J in k) {
          var V = k[J];
          if (typeof V != "function")
            return Z(T, K, U, J, X(V));
          var re = V(_, J, T, K, U + "." + J, t);
          if (re)
            return re;
        }
        return null;
      }
      return g(b);
    }
    function H(k) {
      function b(O, D, T, K, U) {
        var _ = O[D], $ = L(_);
        if ($ !== "object")
          return new m("Invalid " + K + " `" + U + "` of type `" + $ + "` " + ("supplied to `" + T + "`, expected `object`."));
        var J = n({}, O[D], k);
        for (var V in J) {
          var re = k[V];
          if (r(k, V) && typeof re != "function")
            return Z(T, K, U, V, X(re));
          if (!re)
            return new m(
              "Invalid " + K + " `" + U + "` key `" + V + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(O[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var j = re(_, V, T, K, U + "." + V, t);
          if (j)
            return j;
        }
        return null;
      }
      return g(b);
    }
    function B(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(B);
          if (k === null || s(k))
            return !0;
          var b = f(k);
          if (b) {
            var O = b.call(k), D;
            if (b !== k.entries) {
              for (; !(D = O.next()).done; )
                if (!B(D.value))
                  return !1;
            } else
              for (; !(D = O.next()).done; ) {
                var T = D.value;
                if (T && !B(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(k, b) {
      return k === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function L(k) {
      var b = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : z(b, k) ? "symbol" : b;
    }
    function X(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var b = L(k);
      if (b === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function R(k) {
      var b = X(k);
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
    function M(k) {
      return !k.constructor || !k.constructor.name ? v : k.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, jr;
}
var Or, Li;
function Fv() {
  if (Li) return Or;
  Li = 1;
  var e = /* @__PURE__ */ Ro();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, Or = function() {
    function r(a, s, c, l, p, f) {
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
  }, Or;
}
var Fi;
function zv() {
  if (Fi) return vn.exports;
  if (Fi = 1, process.env.NODE_ENV !== "production") {
    var e = oc(), n = !0;
    vn.exports = /* @__PURE__ */ Lv()(e.isElement, n);
  } else
    vn.exports = /* @__PURE__ */ Fv()();
  return vn.exports;
}
var $v = /* @__PURE__ */ zv();
const me = /* @__PURE__ */ co($v), Wv = /* @__PURE__ */ new Map([
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
function jt(e, n, t) {
  const r = Vv(e), { webkitRelativePath: o } = e, i = typeof n == "string" ? n : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && zi(r, "path", i), zi(r, "relativePath", i), r;
}
function Vv(e) {
  const { name: n } = e;
  if (n && n.lastIndexOf(".") !== -1 && !e.type) {
    const r = n.split(".").pop().toLowerCase(), o = Wv.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function zi(e, n, t) {
  Object.defineProperty(e, n, {
    value: t,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const Bv = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function Hv(e) {
  return gt(this, void 0, void 0, function* () {
    return Nn(e) && Uv(e.dataTransfer) ? Kv(e.dataTransfer, e.type) : Gv(e) ? qv(e) : Array.isArray(e) && e.every((n) => "getFile" in n && typeof n.getFile == "function") ? Yv(e) : [];
  });
}
function Uv(e) {
  return Nn(e);
}
function Gv(e) {
  return Nn(e) && Nn(e.target);
}
function Nn(e) {
  return typeof e == "object" && e !== null;
}
function qv(e) {
  return to(e.target.files).map((n) => jt(n));
}
function Yv(e) {
  return gt(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((t) => t.getFile()))).map((t) => jt(t));
  });
}
function Kv(e, n) {
  return gt(this, void 0, void 0, function* () {
    if (e.items) {
      const t = to(e.items).filter((o) => o.kind === "file");
      if (n !== "drop")
        return t;
      const r = yield Promise.all(t.map(Zv));
      return $i(ac(r));
    }
    return $i(to(e.files).map((t) => jt(t)));
  });
}
function $i(e) {
  return e.filter((n) => Bv.indexOf(n.name) === -1);
}
function to(e) {
  if (e === null)
    return [];
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    n.push(r);
  }
  return n;
}
function Zv(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Wi(e);
  const n = e.webkitGetAsEntry();
  return n && n.isDirectory ? sc(n) : Wi(e, n);
}
function ac(e) {
  return e.reduce((n, t) => [
    ...n,
    ...Array.isArray(t) ? ac(t) : [t]
  ], []);
}
function Wi(e, n) {
  return gt(this, void 0, void 0, function* () {
    var t;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const i = yield e.getAsFileSystemHandle();
      if (i === null)
        throw new Error(`${e} is not a File`);
      if (i !== void 0) {
        const a = yield i.getFile();
        return a.handle = i, jt(a);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return jt(r, (t = n?.fullPath) !== null && t !== void 0 ? t : void 0);
  });
}
function Xv(e) {
  return gt(this, void 0, void 0, function* () {
    return e.isDirectory ? sc(e) : Jv(e);
  });
}
function sc(e) {
  const n = e.createReader();
  return new Promise((t, r) => {
    const o = [];
    function i() {
      n.readEntries((a) => gt(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(Xv));
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
function Jv(e) {
  return gt(this, void 0, void 0, function* () {
    return new Promise((n, t) => {
      e.file((r) => {
        const o = jt(r, e.fullPath);
        n(o);
      }, (r) => {
        t(r);
      });
    });
  });
}
var gn = {}, Vi;
function Qv() {
  return Vi || (Vi = 1, gn.__esModule = !0, gn.default = function(e, n) {
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
  }), gn;
}
var eh = Qv();
const Tr = /* @__PURE__ */ co(eh);
function Bi(e) {
  return rh(e) || nh(e) || lc(e) || th();
}
function th() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nh(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function rh(e) {
  if (Array.isArray(e)) return no(e);
}
function Hi(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ui(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Hi(Object(t), !0).forEach(function(r) {
      cc(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Hi(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function cc(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Xt(e, n) {
  return ah(e) || ih(e, n) || lc(e, n) || oh();
}
function oh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lc(e, n) {
  if (e) {
    if (typeof e == "string") return no(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return no(e, n);
  }
}
function no(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function ih(e, n) {
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
function ah(e) {
  if (Array.isArray(e)) return e;
}
var sh = typeof Tr == "function" ? Tr : Tr.default, ch = "file-invalid-type", lh = "file-too-large", dh = "file-too-small", uh = "too-many-files", ph = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = n.split(","), r = t.length > 1 ? "one of ".concat(t.join(", ")) : t[0];
  return {
    code: ch,
    message: "File type must be ".concat(r)
  };
}, Gi = function(n) {
  return {
    code: lh,
    message: "File is larger than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, qi = function(n) {
  return {
    code: dh,
    message: "File is smaller than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, fh = {
  code: uh,
  message: "Too many files"
};
function dc(e, n) {
  var t = e.type === "application/x-moz-file" || sh(e, n);
  return [t, t ? null : ph(n)];
}
function uc(e, n, t) {
  if (ut(e.size))
    if (ut(n) && ut(t)) {
      if (e.size > t) return [!1, Gi(t)];
      if (e.size < n) return [!1, qi(n)];
    } else {
      if (ut(n) && e.size < n) return [!1, qi(n)];
      if (ut(t) && e.size > t) return [!1, Gi(t)];
    }
  return [!0, null];
}
function ut(e) {
  return e != null;
}
function mh(e) {
  var n = e.files, t = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && n.length > 1 || i && a >= 1 && n.length > a ? !1 : n.every(function(c) {
    var l = dc(c, t), p = Xt(l, 1), f = p[0], v = uc(c, r, o), h = Xt(v, 1), x = h[0], m = s ? s(c) : null;
    return f && x && !m;
  });
}
function Ln(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function xn(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(n) {
    return n === "Files" || n === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Yi(e) {
  e.preventDefault();
}
function vh(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function hh(e) {
  return e.indexOf("Edge/") !== -1;
}
function gh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return vh(e) || hh(e);
}
function Fe() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return n.some(function(s) {
      return !Ln(r) && s && s.apply(void 0, [r].concat(i)), Ln(r);
    });
  };
}
function xh() {
  return "showOpenFilePicker" in window;
}
function bh(e) {
  if (ut(e)) {
    var n = Object.entries(e).filter(function(t) {
      var r = Xt(t, 2), o = r[0], i = r[1], a = !0;
      return pc(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(fc)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(t, r) {
      var o = Xt(r, 2), i = o[0], a = o[1];
      return Ui(Ui({}, t), {}, cc({}, i, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: n
    }];
  }
  return e;
}
function yh(e) {
  if (ut(e))
    return Object.entries(e).reduce(function(n, t) {
      var r = Xt(t, 2), o = r[0], i = r[1];
      return [].concat(Bi(n), [o], Bi(i));
    }, []).filter(function(n) {
      return pc(n) || fc(n);
    }).join(",");
}
function wh(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Ch(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function pc(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function fc(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Sh = ["children"], Eh = ["open"], _h = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], kh = ["refKey", "onChange", "onClick"];
function Rh(e) {
  return jh(e) || Ah(e) || mc(e) || Ph();
}
function Ph() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ah(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jh(e) {
  if (Array.isArray(e)) return ro(e);
}
function Mr(e, n) {
  return Mh(e) || Th(e, n) || mc(e, n) || Oh();
}
function Oh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mc(e, n) {
  if (e) {
    if (typeof e == "string") return ro(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ro(e, n);
  }
}
function ro(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Th(e, n) {
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
function Mh(e) {
  if (Array.isArray(e)) return e;
}
function Ki(e, n) {
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
    n % 2 ? Ki(Object(t), !0).forEach(function(r) {
      oo(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ki(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function oo(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Fn(e, n) {
  if (e == null) return {};
  var t = Dh(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Dh(e, n) {
  if (e == null) return {};
  var t = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var Po = /* @__PURE__ */ Vn(function(e, n) {
  var t = e.children, r = Fn(e, Sh), o = hc(r), i = o.open, a = Fn(o, Eh);
  return Il(n, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ ie.createElement(Nl, null, t(xe(xe({}, a), {}, {
    open: i
  })));
});
Po.displayName = "Dropzone";
var vc = {
  disabled: !1,
  getFilesFromEvent: Hv,
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
Po.defaultProps = vc;
Po.propTypes = {
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
var io = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function hc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = xe(xe({}, vc), e), t = n.accept, r = n.disabled, o = n.getFilesFromEvent, i = n.maxSize, a = n.minSize, s = n.multiple, c = n.maxFiles, l = n.onDragEnter, p = n.onDragLeave, f = n.onDragOver, v = n.onDrop, h = n.onDropAccepted, x = n.onDropRejected, m = n.onFileDialogCancel, g = n.onFileDialogOpen, y = n.useFsAccessApi, C = n.autoFocus, S = n.preventDropOnDocument, E = n.noClick, w = n.noKeyboard, I = n.noDrag, A = n.noDragEventsBubbling, P = n.onError, N = n.validator, W = dt(function() {
    return yh(t);
  }, [t]), Z = dt(function() {
    return bh(t);
  }, [t]), G = dt(function() {
    return typeof g == "function" ? g : Zi;
  }, [g]), H = dt(function() {
    return typeof m == "function" ? m : Zi;
  }, [m]), B = an(null), z = an(null), L = Dl(Ih, io), X = Mr(L, 2), R = X[0], M = X[1], k = R.isFocused, b = R.isFileDialogActive, O = an(typeof window < "u" && window.isSecureContext && y && xh()), D = function() {
    !O.current && b && setTimeout(function() {
      if (z.current) {
        var ee = z.current.files;
        ee.length || (M({
          type: "closeDialog"
        }), H());
      }
    }, 300);
  };
  wn(function() {
    return window.addEventListener("focus", D, !1), function() {
      window.removeEventListener("focus", D, !1);
    };
  }, [z, b, H, O]);
  var T = an([]), K = function(ee) {
    B.current && B.current.contains(ee.target) || (ee.preventDefault(), T.current = []);
  };
  wn(function() {
    return S && (document.addEventListener("dragover", Yi, !1), document.addEventListener("drop", K, !1)), function() {
      S && (document.removeEventListener("dragover", Yi), document.removeEventListener("drop", K));
    };
  }, [B, S]), wn(function() {
    return !r && C && B.current && B.current.focus(), function() {
    };
  }, [B, C, r]);
  var U = ye(function(F) {
    P ? P(F) : console.error(F);
  }, [P]), _ = ye(function(F) {
    F.preventDefault(), F.persist(), Ce(F), T.current = [].concat(Rh(T.current), [F.target]), xn(F) && Promise.resolve(o(F)).then(function(ee) {
      if (!(Ln(F) && !A)) {
        var de = ee.length, ve = de > 0 && mh({
          files: ee,
          accept: W,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: N
        }), Ee = de > 0 && !ve;
        M({
          isDragAccept: ve,
          isDragReject: Ee,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), l && l(F);
      }
    }).catch(function(ee) {
      return U(ee);
    });
  }, [o, l, U, A, W, a, i, s, c, N]), $ = ye(function(F) {
    F.preventDefault(), F.persist(), Ce(F);
    var ee = xn(F);
    if (ee && F.dataTransfer)
      try {
        F.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return ee && f && f(F), !1;
  }, [f, A]), J = ye(function(F) {
    F.preventDefault(), F.persist(), Ce(F);
    var ee = T.current.filter(function(ve) {
      return B.current && B.current.contains(ve);
    }), de = ee.indexOf(F.target);
    de !== -1 && ee.splice(de, 1), T.current = ee, !(ee.length > 0) && (M({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), xn(F) && p && p(F));
  }, [B, p, A]), V = ye(function(F, ee) {
    var de = [], ve = [];
    F.forEach(function(Ee) {
      var Je = dc(Ee, W), Qe = Mr(Je, 2), Lt = Qe[0], Ft = Qe[1], Te = uc(Ee, a, i), et = Mr(Te, 2), zt = et[0], ur = et[1], pr = N ? N(Ee) : null;
      if (Lt && zt && !pr)
        de.push(Ee);
      else {
        var fr = [Ft, ur];
        pr && (fr = fr.concat(pr)), ve.push({
          file: Ee,
          errors: fr.filter(function(Ol) {
            return Ol;
          })
        });
      }
    }), (!s && de.length > 1 || s && c >= 1 && de.length > c) && (de.forEach(function(Ee) {
      ve.push({
        file: Ee,
        errors: [fh]
      });
    }), de.splice(0)), M({
      acceptedFiles: de,
      fileRejections: ve,
      isDragReject: ve.length > 0,
      type: "setFiles"
    }), v && v(de, ve, ee), ve.length > 0 && x && x(ve, ee), de.length > 0 && h && h(de, ee);
  }, [M, s, W, a, i, c, v, h, x, N]), re = ye(function(F) {
    F.preventDefault(), F.persist(), Ce(F), T.current = [], xn(F) && Promise.resolve(o(F)).then(function(ee) {
      Ln(F) && !A || V(ee, F);
    }).catch(function(ee) {
      return U(ee);
    }), M({
      type: "reset"
    });
  }, [o, V, U, A]), j = ye(function() {
    if (O.current) {
      M({
        type: "openDialog"
      }), G();
      var F = {
        multiple: s,
        types: Z
      };
      window.showOpenFilePicker(F).then(function(ee) {
        return o(ee);
      }).then(function(ee) {
        V(ee, null), M({
          type: "closeDialog"
        });
      }).catch(function(ee) {
        wh(ee) ? (H(ee), M({
          type: "closeDialog"
        })) : Ch(ee) ? (O.current = !1, z.current ? (z.current.value = null, z.current.click()) : U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : U(ee);
      });
      return;
    }
    z.current && (M({
      type: "openDialog"
    }), G(), z.current.value = null, z.current.click());
  }, [M, G, H, y, V, U, Z, s]), pe = ye(function(F) {
    !B.current || !B.current.isEqualNode(F.target) || (F.key === " " || F.key === "Enter" || F.keyCode === 32 || F.keyCode === 13) && (F.preventDefault(), j());
  }, [B, j]), Q = ye(function() {
    M({
      type: "focus"
    });
  }, []), oe = ye(function() {
    M({
      type: "blur"
    });
  }, []), be = ye(function() {
    E || (gh() ? setTimeout(j, 0) : j());
  }, [E, j]), ge = function(ee) {
    return r ? null : ee;
  }, Se = function(ee) {
    return w ? null : ge(ee);
  }, fe = function(ee) {
    return I ? null : ge(ee);
  }, Ce = function(ee) {
    A && ee.stopPropagation();
  }, yt = dt(function() {
    return function() {
      var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ee = F.refKey, de = ee === void 0 ? "ref" : ee, ve = F.role, Ee = F.onKeyDown, Je = F.onFocus, Qe = F.onBlur, Lt = F.onClick, Ft = F.onDragEnter, Te = F.onDragOver, et = F.onDragLeave, zt = F.onDrop, ur = Fn(F, _h);
      return xe(xe(oo({
        onKeyDown: Se(Fe(Ee, pe)),
        onFocus: Se(Fe(Je, Q)),
        onBlur: Se(Fe(Qe, oe)),
        onClick: ge(Fe(Lt, be)),
        onDragEnter: fe(Fe(Ft, _)),
        onDragOver: fe(Fe(Te, $)),
        onDragLeave: fe(Fe(et, J)),
        onDrop: fe(Fe(zt, re)),
        role: typeof ve == "string" && ve !== "" ? ve : "presentation"
      }, de, B), !r && !w ? {
        tabIndex: 0
      } : {}), ur);
    };
  }, [B, pe, Q, oe, be, _, $, J, re, w, I, r]), Pe = ye(function(F) {
    F.stopPropagation();
  }, []), He = dt(function() {
    return function() {
      var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ee = F.refKey, de = ee === void 0 ? "ref" : ee, ve = F.onChange, Ee = F.onClick, Je = Fn(F, kh), Qe = oo({
        accept: W,
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
        onChange: ge(Fe(ve, re)),
        onClick: ge(Fe(Ee, Pe)),
        tabIndex: -1
      }, de, z);
      return xe(xe({}, Qe), Je);
    };
  }, [z, t, s, re, r]);
  return xe(xe({}, R), {}, {
    isFocused: k && !r,
    getRootProps: yt,
    getInputProps: He,
    rootRef: B,
    inputRef: z,
    open: ge(j)
  });
}
function Ih(e, n) {
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
      return xe(xe({}, io), {}, {
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
      return xe({}, io);
    default:
      return e;
  }
}
function Zi() {
}
const Nh = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2024C0%2010.7452%2010.7452%200%2024%200C37.2548%200%2048%2010.7452%2048%2024C48%2037.2548%2037.2548%2048%2024%2048C10.7452%2048%200%2037.2548%200%2024Z'%20fill='%23EFF1F5'/%3e%3cpath%20d='M31%2017V31H17V17H31ZM31%2015H17C15.9%2015%2015%2015.9%2015%2017V31C15%2032.1%2015.9%2033%2017%2033H31C32.1%2033%2033%2032.1%2033%2031V17C33%2015.9%2032.1%2015%2031%2015ZM26.14%2023.86L23.14%2027.73L21%2025.14L18%2029H30L26.14%2023.86Z'%20fill='%233F465B'/%3e%3c/svg%3e";
var Dr, Xi;
function Lh() {
  if (Xi) return Dr;
  Xi = 1;
  var e = !1, n, t, r, o, i, a, s, c, l, p, f, v, h, x, m;
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
          var I = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(C);
          s = I ? parseFloat(I[1].replace("_", ".")) : !0;
        } else
          s = !1;
        c = !!E[2], l = !!E[3];
      } else
        s = c = l = !1;
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
      return g() || l;
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
  return Dr = y, Dr;
}
var Ir, Ji;
function Fh() {
  if (Ji) return Ir;
  Ji = 1;
  var e = !!(typeof window < "u" && window.document && window.document.createElement), n = {
    canUseDOM: e,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
    canUseViewport: e && !!window.screen,
    isInWorker: !e
    // For now, this is true - might change in the future.
  };
  return Ir = n, Ir;
}
var Nr, Qi;
function zh() {
  if (Qi) return Nr;
  Qi = 1;
  var e = Fh(), n;
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
  return Nr = t, Nr;
}
var Lr, ea;
function $h() {
  if (ea) return Lr;
  ea = 1;
  var e = Lh(), n = zh(), t = 10, r = 40, o = 800;
  function i(a) {
    var s = 0, c = 0, l = 0, p = 0;
    return "detail" in a && (c = a.detail), "wheelDelta" in a && (c = -a.wheelDelta / 120), "wheelDeltaY" in a && (c = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (s = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (s = c, c = 0), l = s * t, p = c * t, "deltaY" in a && (p = a.deltaY), "deltaX" in a && (l = a.deltaX), (l || p) && a.deltaMode && (a.deltaMode == 1 ? (l *= r, p *= r) : (l *= o, p *= o)), l && !s && (s = l < 1 ? -1 : 1), p && !c && (c = p < 1 ? -1 : 1), {
      spinX: s,
      spinY: c,
      pixelX: l,
      pixelY: p
    };
  }
  return i.getEventType = function() {
    return e.firefox() ? "DOMMouseScroll" : n("wheel") ? "wheel" : "mousewheel";
  }, Lr = i, Lr;
}
var Fr, ta;
function Wh() {
  return ta || (ta = 1, Fr = $h()), Fr;
}
var Vh = Wh();
const Bh = /* @__PURE__ */ co(Vh);
function Hh(e, n, t, r, o, i) {
  i === void 0 && (i = 0);
  var a = Ot(e, n, i), s = a.width, c = a.height, l = Math.min(s, t), p = Math.min(c, r);
  return l > p * o ? {
    width: p * o,
    height: p
  } : {
    width: l,
    height: l / o
  };
}
function Uh(e) {
  return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight;
}
function Ht(e, n, t, r, o) {
  o === void 0 && (o = 0);
  var i = Ot(n.width, n.height, o), a = i.width, s = i.height;
  return {
    x: na(e.x, a, t.width, r),
    y: na(e.y, s, t.height, r)
  };
}
function na(e, n, t, r) {
  var o = n * r / 2 - t / 2;
  return ar(e, -o, o);
}
function ra(e, n) {
  return Math.sqrt(Math.pow(e.y - n.y, 2) + Math.pow(e.x - n.x, 2));
}
function oa(e, n) {
  return Math.atan2(n.y - e.y, n.x - e.x) * 180 / Math.PI;
}
function Gh(e, n, t, r, o, i, a) {
  i === void 0 && (i = 0), a === void 0 && (a = !0);
  var s = a ? qh : Yh, c = Ot(n.width, n.height, i), l = Ot(n.naturalWidth, n.naturalHeight, i), p = {
    x: s(100, ((c.width - t.width / o) / 2 - e.x / o) / c.width * 100),
    y: s(100, ((c.height - t.height / o) / 2 - e.y / o) / c.height * 100),
    width: s(100, t.width / c.width * 100 / o),
    height: s(100, t.height / c.height * 100 / o)
  }, f = Math.round(s(l.width, p.width * l.width / 100)), v = Math.round(s(l.height, p.height * l.height / 100)), h = l.width >= l.height * r, x = h ? {
    width: Math.round(v * r),
    height: v
  } : {
    width: f,
    height: Math.round(f / r)
  }, m = he(he({}, x), {
    x: Math.round(s(l.width - x.width, p.x * l.width / 100)),
    y: Math.round(s(l.height - x.height, p.y * l.height / 100))
  });
  return {
    croppedAreaPercentages: p,
    croppedAreaPixels: m
  };
}
function qh(e, n) {
  return Math.min(e, Math.max(0, n));
}
function Yh(e, n) {
  return n;
}
function Kh(e, n, t, r, o, i) {
  var a = Ot(n.width, n.height, t), s = ar(r.width / a.width * (100 / e.width), o, i), c = {
    x: s * a.width / 2 - r.width / 2 - a.width * s * (e.x / 100),
    y: s * a.height / 2 - r.height / 2 - a.height * s * (e.y / 100)
  };
  return {
    crop: c,
    zoom: s
  };
}
function Zh(e, n, t) {
  var r = Uh(n);
  return t.height > t.width ? t.height / (e.height * r) : t.width / (e.width * r);
}
function Xh(e, n, t, r, o, i) {
  t === void 0 && (t = 0);
  var a = Ot(n.naturalWidth, n.naturalHeight, t), s = ar(Zh(e, n, r), o, i), c = r.height > r.width ? r.height / e.height : r.width / e.width, l = {
    x: ((a.width - e.width) / 2 - e.x) * c,
    y: ((a.height - e.height) / 2 - e.y) * c
  };
  return {
    crop: l,
    zoom: s
  };
}
function ia(e, n) {
  return {
    x: (n.x + e.x) / 2,
    y: (n.y + e.y) / 2
  };
}
function Jh(e) {
  return e * Math.PI / 180;
}
function Ot(e, n, t) {
  var r = Jh(t);
  return {
    width: Math.abs(Math.cos(r) * e) + Math.abs(Math.sin(r) * n),
    height: Math.abs(Math.sin(r) * e) + Math.abs(Math.cos(r) * n)
  };
}
function ar(e, n, t) {
  return Math.min(Math.max(e, n), t);
}
function bn() {
  for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return e.filter(function(t) {
    return typeof t == "string" && t.length > 0;
  }).join(" ").trim();
}
var Qh = `.reactEasyCrop_Container {
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
`, eg = 1, tg = 3, ng = 1, rg = (
  /** @class */
  (function(e) {
    Kf(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.cropperRef = d.createRef(), t.imageRef = d.createRef(), t.videoRef = d.createRef(), t.containerPosition = {
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
          var o = Kh(t.props.initialCroppedAreaPercentages, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), i = o.crop, a = o.zoom;
          t.props.onCropChange(i), t.props.onZoomChange && t.props.onZoomChange(a);
        } else if (t.props.initialCroppedAreaPixels) {
          var s = Xh(t.props.initialCroppedAreaPixels, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), i = s.crop, a = s.zoom;
          t.props.onCropChange(i), t.props.onZoomChange && t.props.onZoomChange(a);
        }
      }, t.computeSizes = function() {
        var r, o, i, a, s, c, l = t.imageRef.current || t.videoRef.current;
        if (l && t.containerRef) {
          t.containerRect = t.containerRef.getBoundingClientRect(), t.saveContainerPosition();
          var p = t.containerRect.width / t.containerRect.height, f = ((r = t.imageRef.current) === null || r === void 0 ? void 0 : r.naturalWidth) || ((o = t.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, v = ((i = t.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((a = t.videoRef.current) === null || a === void 0 ? void 0 : a.videoHeight) || 0, h = l.offsetWidth < f || l.offsetHeight < v, x = f / v, m = void 0;
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
              width: l.offsetWidth,
              height: l.offsetHeight
            };
          t.mediaSize = he(he({}, m), {
            naturalWidth: f,
            naturalHeight: v
          }), t.props.setMediaSize && t.props.setMediaSize(t.mediaSize);
          var g = t.props.cropSize ? t.props.cropSize : Hh(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
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
            }, l = t.props.restrictPosition ? Ht(c, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : c;
            t.props.onCropChange(l);
          }
        }));
      }, t.onDragStopped = function() {
        var r, o;
        t.isTouching = !1, t.cleanEvents(), t.emitCropData(), (o = (r = t.props).onInteractionEnd) === null || o === void 0 || o.call(r);
      }, t.onWheel = function(r) {
        if (t.currentWindow && !(t.props.onWheelRequest && !t.props.onWheelRequest(r))) {
          r.preventDefault();
          var o = n.getMousePoint(r), i = Bh(r).pixelY, a = t.props.zoom - i * t.props.zoomSpeed / 200;
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
          var l = ar(r, t.props.minZoom, t.props.maxZoom);
          if (c) {
            var p = t.getPointOnContainer(o, t.containerPosition), f = t.getPointOnMedia(p), v = {
              x: f.x * l - p.x,
              y: f.y * l - p.y
            }, h = t.props.restrictPosition ? Ht(v, t.mediaSize, t.state.cropSize, l, t.props.rotation) : v;
            t.props.onCropChange(h);
          }
          t.props.onZoomChange(l);
        }
      }, t.getCropData = function() {
        if (!t.state.cropSize)
          return null;
        var r = t.props.restrictPosition ? Ht(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
        return Gh(r, t.mediaSize, t.state.cropSize, t.getAspect(), t.props.zoom, t.props.rotation, t.props.restrictPosition);
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
          var l = t.props.restrictPosition ? Ht(i, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : i;
          t.previousCropSize = t.state.cropSize, t.props.onCropChange(l), t.emitCropData();
        }
      }, t.onKeyDown = function(r) {
        var o, i, a = t.props, s = a.crop, c = a.onCropChange, l = a.keyboardStep, p = a.zoom, f = a.rotation, v = l;
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
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Qh, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, n.prototype.componentWillUnmount = function() {
      var t, r;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((r = this.styleRef.parentNode) === null || r === void 0 || r.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, n.prototype.componentDidUpdate = function(t) {
      var r, o, i, a, s, c, l, p, f;
      t.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : t.aspect !== this.props.aspect ? this.computeSizes() : t.objectFit !== this.props.objectFit ? this.computeSizes() : t.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((r = t.cropSize) === null || r === void 0 ? void 0 : r.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((i = t.cropSize) === null || i === void 0 ? void 0 : i.width) !== ((a = this.props.cropSize) === null || a === void 0 ? void 0 : a.width) ? this.computeSizes() : (((s = t.crop) === null || s === void 0 ? void 0 : s.x) !== ((c = this.props.crop) === null || c === void 0 ? void 0 : c.x) || ((l = t.crop) === null || l === void 0 ? void 0 : l.y) !== ((p = this.props.crop) === null || p === void 0 ? void 0 : p.y)) && this.emitCropAreaChange(), t.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
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
          var s = this.containerRect.width / this.containerRect.height, c = ((t = this.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((r = this.videoRef.current) === null || r === void 0 ? void 0 : r.videoWidth) || 0, l = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, p = c / l;
          return p < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, n.prototype.onPinchStart = function(t) {
      var r = n.getTouchPoint(t.touches[0]), o = n.getTouchPoint(t.touches[1]);
      this.lastPinchDistance = ra(r, o), this.lastPinchRotation = oa(r, o), this.onDragStart(ia(r, o));
    }, n.prototype.onPinchMove = function(t) {
      var r = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = n.getTouchPoint(t.touches[0]), i = n.getTouchPoint(t.touches[1]), a = ia(o, i);
        this.onDrag(a), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = ra(o, i), c = r.props.zoom * (s / r.lastPinchDistance);
          r.setNewZoom(c, a, {
            shouldUpdatePosition: !1
          }), r.lastPinchDistance = s;
          var l = oa(o, i), p = r.props.rotation + (l - r.lastPinchRotation);
          r.props.onRotationChange && r.props.onRotationChange(p), r.lastPinchRotation = l;
        });
      }
    }, n.prototype.render = function() {
      var t = this, r, o = this.props, i = o.image, a = o.video, s = o.mediaProps, c = o.cropperProps, l = o.transform, p = o.crop, f = p.x, v = p.y, h = o.rotation, x = o.zoom, m = o.cropShape, g = o.showGrid, y = o.roundCropAreaPixels, C = o.style, S = C.containerStyle, E = C.cropAreaStyle, w = C.mediaStyle, I = o.classes, A = I.containerClassName, P = I.cropAreaClassName, N = I.mediaClassName, W = (r = this.state.mediaObjectFit) !== null && r !== void 0 ? r : this.getObjectFit();
      return d.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(G) {
          return t.containerRef = G;
        },
        "data-testid": "container",
        style: S,
        className: bn("reactEasyCrop_Container", A)
      }, i ? d.createElement("img", he({
        alt: "",
        className: bn("reactEasyCrop_Image", W === "contain" && "reactEasyCrop_Contain", W === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", W === "vertical-cover" && "reactEasyCrop_Cover_Vertical", N)
      }, s, {
        src: i,
        ref: this.imageRef,
        style: he(he({}, w), {
          transform: l || "translate(".concat(f, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(x, ")")
        }),
        onLoad: this.onMediaLoad
      })) : a && d.createElement("video", he({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: bn("reactEasyCrop_Video", W === "contain" && "reactEasyCrop_Contain", W === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", W === "vertical-cover" && "reactEasyCrop_Cover_Vertical", N)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: he(he({}, w), {
          transform: l || "translate(".concat(f, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(x, ")")
        }),
        controls: !1
      }), (Array.isArray(a) ? a : [{
        src: a
      }]).map(function(Z) {
        return d.createElement("source", he({
          key: Z.src
        }, Z));
      })), this.state.cropSize && d.createElement("div", he({
        ref: this.cropperRef,
        style: he(he({}, E), {
          width: y ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: y ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: bn("reactEasyCrop_CropArea", m === "round" && "reactEasyCrop_CropAreaRound", g && "reactEasyCrop_CropAreaGrid", P)
      }, c)));
    }, n.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: tg,
      minZoom: eg,
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
      keyboardStep: ng
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
  })(d.Component)
);
function og({
  imageUrl: e,
  aspect: n,
  rounded: t,
  crop: r,
  zoom: o,
  onCropChange: i,
  onZoomChange: a,
  onCropComplete: s,
  onClose: c,
  onConfirm: l
}) {
  const p = ye(
    (f, v) => s(v),
    [s]
  );
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 sm:p-6",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Crop image",
      children: /* @__PURE__ */ u.jsxs("div", { className: "w-full sm:max-w-2xl bg-white sm:rounded-lg max-h-[95dvh] sm:max-h-[90vh] overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4", children: [
          /* @__PURE__ */ u.jsx("h2", { className: "text-base sm:text-lg font-semibold text-gray-900", children: "Crop image" }),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              onClick: c,
              className: "inline-flex size-10 items-center justify-center rounded-md hover:bg-gray-25 transition-colors",
              "aria-label": "Close crop modal",
              children: /* @__PURE__ */ u.jsx(Na, { className: "size-5 text-gray-700" })
            }
          )
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex-1 overflow-auto px-4 py-4 sm:px-6 sm:py-6", children: [
          /* @__PURE__ */ u.jsx("div", { className: "relative w-full overflow-hidden rounded-lg bg-gray-900", children: /* @__PURE__ */ u.jsx("div", { className: "relative h-[60dvh] sm:h-[420px] w-full", children: /* @__PURE__ */ u.jsx(
            rg,
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
          /* @__PURE__ */ u.jsxs("div", { className: "mt-4 space-y-2", children: [
            /* @__PURE__ */ u.jsxs("label", { className: "text-sm font-medium text-gray-700", children: [
              "Zoom: ",
              o.toFixed(1),
              "x"
            ] }),
            /* @__PURE__ */ u.jsx(
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
        /* @__PURE__ */ u.jsx("div", { className: "sticky bottom-0 z-10 border-t border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4", children: /* @__PURE__ */ u.jsx("div", { className: "flex flex-col-reverse sm:flex-row gap-2 sm:justify-end", children: /* @__PURE__ */ u.jsx(
          Fd,
          {
            type: "button",
            variant: "blue-hepatica-solid",
            onClick: l,
            className: "w-full sm:w-auto",
            children: "Crop"
          }
        ) }) })
      ] })
    }
  );
}
function ig(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = `image/${r === "jpg" ? "jpeg" : r}`;
    n[o] ??= [], n[o].push(`.${r}`);
  }
  return n;
}
function ag(e) {
  return new Promise((n, t) => {
    const r = new Image();
    r.addEventListener("load", () => n(r)), r.addEventListener("error", (o) => t(o)), r.setAttribute("crossOrigin", "anonymous"), r.src = e;
  });
}
async function sg(e, n, t) {
  const r = await ag(e), o = document.createElement("canvas"), i = o.getContext("2d");
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
      (l) => l ? s(l) : c(new Error("Canvas is empty")),
      t.fileType || "image/png",
      0.92
    );
  });
  return new File([a], t.fileName, { type: t.fileType || a.type });
}
function r0({
  value: e,
  onChange: n,
  aspectRatio: t,
  extensions: r,
  rounded: o = !1,
  maxSize: i = 5 * 1024 * 1024,
  placeholder: a = "Accepted files jpg, png and webp",
  className: s
}) {
  const [c, l] = Ge(null), [p, f] = Ge(!1), [v, h] = Ge(null), [x, m] = Ge({ x: 0, y: 0 }), [g, y] = Ge(1), [C, S] = Ge(null), E = dt(() => ig(r), [r]);
  wn(() => {
    if (!e) {
      c && URL.revokeObjectURL(c), l(null);
      return;
    }
    const z = URL.createObjectURL(e);
    return c && URL.revokeObjectURL(c), l(z), () => {
      URL.revokeObjectURL(z);
    };
  }, [e]);
  const w = ye((z) => {
    const L = z[0];
    if (!L) return;
    const X = URL.createObjectURL(L);
    h(X), f(!0), m({ x: 0, y: 0 }), y(1), S(null);
  }, []), { getRootProps: I, getInputProps: A, isDragActive: P, fileRejections: N } = hc({
    onDrop: w,
    accept: E,
    maxSize: i,
    multiple: !1
  }), W = N.flatMap(
    (z) => z.errors.map((L) => L.code === "file-too-large" ? `File is too large. Max size is ${(i / 1048576).toFixed(
      0
    )}MB` : L.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${r.join(", ")}` : L.message)
  ), Z = ye(() => {
    f(!1), v && URL.revokeObjectURL(v), h(null);
  }, [v]), G = ye(async () => {
    if (!(!v || !C))
      try {
        const z = await sg(v, C, {
          fileName: e?.name ?? "image.png",
          fileType: e?.type ?? "image/png"
        });
        n(z), f(!1), URL.revokeObjectURL(v), h(null);
      } catch (z) {
        console.error("Error cropping image:", z);
      }
  }, [C, n, v, e?.name, e?.type]), H = ye(() => {
    c && URL.revokeObjectURL(c), l(null), n(null);
  }, [n, c]), B = o ? { aspectRatio: "1 / 1" } : { aspectRatio: `${t}` };
  return /* @__PURE__ */ u.jsxs("div", { className: ne("w-full space-y-2", s), children: [
    c ? /* @__PURE__ */ u.jsxs("div", { className: "relative w-full", children: [
      /* @__PURE__ */ u.jsx(
        "div",
        {
          className: ne(
            "w-full overflow-hidden border border-gray-50 bg-white shadow-lg",
            o ? "rounded-full" : "rounded-lg"
          ),
          style: B,
          children: /* @__PURE__ */ u.jsx(
            "img",
            {
              src: c,
              alt: "Preview",
              className: "h-full w-full object-cover",
              style: { maxHeight: "11rem" }
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          onClick: H,
          "aria-label": "Remove image",
          className: ne(
            "absolute right-1 top-1 inline-flex items-center justify-center",
            "size-10 rounded-full bg-gray-600 text-white border border-white",
            "hover:bg-gray-700 transition-colors"
          ),
          children: /* @__PURE__ */ u.jsx(Na, { className: "size-4" })
        }
      )
    ] }) : /* @__PURE__ */ u.jsxs(
      "div",
      {
        ...I(),
        className: ne(
          "relative flex w-full items-center justify-center",
          "rounded-[0.625rem] border border-gray-50 bg-white",
          "min-h-[11rem]",
          "cursor-pointer transition-colors",
          P && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ u.jsx("input", { ...A() }),
          /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-center justify-center px-4 text-center gap-y-3", children: [
            /* @__PURE__ */ u.jsx("img", { src: Nh, alt: "" }),
            /* @__PURE__ */ u.jsx("p", { className: "text-sm font-sans font-medium text-gray-700", children: "Click to upload or drag and drop" }),
            !!a && /* @__PURE__ */ u.jsx("p", { className: "text-xs text-gray-500", children: a })
          ] })
        ]
      }
    ),
    W.length > 0 && /* @__PURE__ */ u.jsx("div", { className: "space-y-1", children: W.map((z, L) => /* @__PURE__ */ u.jsx("p", { className: "text-sm text-bright-red-600", children: z }, L)) }),
    p && v && /* @__PURE__ */ u.jsx(
      og,
      {
        imageUrl: v,
        aspect: t,
        rounded: o,
        crop: x,
        zoom: g,
        onCropChange: m,
        onZoomChange: y,
        onCropComplete: (z) => S(z),
        onClose: Z,
        onConfirm: G
      }
    )
  ] });
}
function cg(e, n) {
  return d.useReducer((t, r) => n[t][r] ?? t, e);
}
var ct = (e) => {
  const { present: n, children: t } = e, r = lg(n), o = typeof t == "function" ? t({ present: r.isPresent }) : d.Children.only(t), i = ue(r.ref, dg(o));
  return typeof t == "function" || r.isPresent ? d.cloneElement(o, { ref: i }) : null;
};
ct.displayName = "Presence";
function lg(e) {
  const [n, t] = d.useState(), r = d.useRef(null), o = d.useRef(e), i = d.useRef("none"), a = e ? "mounted" : "unmounted", [s, c] = cg(a, {
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
  return d.useEffect(() => {
    const l = yn(r.current);
    i.current = s === "mounted" ? l : "none";
  }, [s]), _e(() => {
    const l = r.current, p = o.current;
    if (p !== e) {
      const v = i.current, h = yn(l);
      e ? c("MOUNT") : h === "none" || l?.display === "none" ? c("UNMOUNT") : c(p && v !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), _e(() => {
    if (n) {
      let l;
      const p = n.ownerDocument.defaultView ?? window, f = (h) => {
        const m = yn(r.current).includes(CSS.escape(h.animationName));
        if (h.target === n && m && (c("ANIMATION_END"), !o.current)) {
          const g = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", l = p.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = g);
          });
        }
      }, v = (h) => {
        h.target === n && (i.current = yn(r.current));
      };
      return n.addEventListener("animationstart", v), n.addEventListener("animationcancel", f), n.addEventListener("animationend", f), () => {
        p.clearTimeout(l), n.removeEventListener("animationstart", v), n.removeEventListener("animationcancel", f), n.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [n, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: d.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, t(l);
    }, [])
  };
}
function yn(e) {
  return e?.animationName || "none";
}
function dg(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var zr = "rovingFocusGroup.onEntryFocus", ug = { bubbles: !1, cancelable: !0 }, nn = "RovingFocusGroup", [ao, gc, pg] = mo(nn), [fg, xc] = it(
  nn,
  [pg]
), [mg, vg] = fg(nn), bc = d.forwardRef(
  (e, n) => /* @__PURE__ */ u.jsx(ao.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(ao.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(hg, { ...e, ref: n }) }) })
);
bc.displayName = nn;
var hg = d.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: t,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: p = !1,
    ...f
  } = e, v = d.useRef(null), h = ue(n, v), x = vo(i), [m, g] = Zt({
    prop: a,
    defaultProp: s ?? null,
    onChange: c,
    caller: nn
  }), [y, C] = d.useState(!1), S = We(l), E = gc(t), w = d.useRef(!1), [I, A] = d.useState(0);
  return d.useEffect(() => {
    const P = v.current;
    if (P)
      return P.addEventListener(zr, S), () => P.removeEventListener(zr, S);
  }, [S]), /* @__PURE__ */ u.jsx(
    mg,
    {
      scope: t,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: m,
      onItemFocus: d.useCallback(
        (P) => g(P),
        [g]
      ),
      onItemShiftTab: d.useCallback(() => C(!0), []),
      onFocusableItemAdd: d.useCallback(
        () => A((P) => P + 1),
        []
      ),
      onFocusableItemRemove: d.useCallback(
        () => A((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ u.jsx(
        se.div,
        {
          tabIndex: y || I === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: te(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: te(e.onFocus, (P) => {
            const N = !w.current;
            if (P.target === P.currentTarget && N && !y) {
              const W = new CustomEvent(zr, ug);
              if (P.currentTarget.dispatchEvent(W), !W.defaultPrevented) {
                const Z = E().filter((L) => L.focusable), G = Z.find((L) => L.active), H = Z.find((L) => L.id === m), z = [G, H, ...Z].filter(
                  Boolean
                ).map((L) => L.ref.current);
                Cc(z, p);
              }
            }
            w.current = !1;
          }),
          onBlur: te(e.onBlur, () => C(!1))
        }
      )
    }
  );
}), yc = "RovingFocusGroupItem", wc = d.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: a,
      ...s
    } = e, c = qe(), l = i || c, p = vg(yc, t), f = p.currentTabStopId === l, v = gc(t), { onFocusableItemAdd: h, onFocusableItemRemove: x, currentTabStopId: m } = p;
    return d.useEffect(() => {
      if (r)
        return h(), () => x();
    }, [r, h, x]), /* @__PURE__ */ u.jsx(
      ao.ItemSlot,
      {
        scope: t,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ u.jsx(
          se.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": p.orientation,
            ...s,
            ref: n,
            onMouseDown: te(e.onMouseDown, (g) => {
              r ? p.onItemFocus(l) : g.preventDefault();
            }),
            onFocus: te(e.onFocus, () => p.onItemFocus(l)),
            onKeyDown: te(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = bg(g, p.orientation, p.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let S = v().filter((E) => E.focusable).map((E) => E.ref.current);
                if (y === "last") S.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && S.reverse();
                  const E = S.indexOf(g.currentTarget);
                  S = p.loop ? yg(S, E + 1) : S.slice(E + 1);
                }
                setTimeout(() => Cc(S));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: m != null }) : a
          }
        )
      }
    );
  }
);
wc.displayName = yc;
var gg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function xg(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function bg(e, n, t) {
  const r = xg(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return gg[r];
}
function Cc(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function yg(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var wg = bc, Cg = wc, so = ["Enter", " "], Sg = ["ArrowDown", "PageUp", "Home"], Sc = ["ArrowUp", "PageDown", "End"], Eg = [...Sg, ...Sc], _g = {
  ltr: [...so, "ArrowRight"],
  rtl: [...so, "ArrowLeft"]
}, kg = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, rn = "Menu", [Jt, Rg, Pg] = mo(rn), [xt, Ec] = it(rn, [
  Pg,
  Qn,
  xc
]), sr = Qn(), _c = xc(), [Ag, bt] = xt(rn), [jg, on] = xt(rn), kc = (e) => {
  const { __scopeMenu: n, open: t = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, s = sr(n), [c, l] = d.useState(null), p = d.useRef(!1), f = We(i), v = vo(o);
  return d.useEffect(() => {
    const h = () => {
      p.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => p.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ u.jsx(ms, { ...s, children: /* @__PURE__ */ u.jsx(
    Ag,
    {
      scope: n,
      open: t,
      onOpenChange: f,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ u.jsx(
        jg,
        {
          scope: n,
          onClose: d.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: p,
          dir: v,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
kc.displayName = rn;
var Og = "MenuAnchor", Ao = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = sr(t);
    return /* @__PURE__ */ u.jsx(vs, { ...o, ...r, ref: n });
  }
);
Ao.displayName = Og;
var jo = "MenuPortal", [Tg, Rc] = xt(jo, {
  forceMount: void 0
}), Pc = (e) => {
  const { __scopeMenu: n, forceMount: t, children: r, container: o } = e, i = bt(jo, n);
  return /* @__PURE__ */ u.jsx(Tg, { scope: n, forceMount: t, children: /* @__PURE__ */ u.jsx(ct, { present: t || i.open, children: /* @__PURE__ */ u.jsx(er, { asChild: !0, container: o, children: r }) }) });
};
Pc.displayName = jo;
var Oe = "MenuContent", [Mg, Oo] = xt(Oe), Ac = d.forwardRef(
  (e, n) => {
    const t = Rc(Oe, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, i = bt(Oe, e.__scopeMenu), a = on(Oe, e.__scopeMenu);
    return /* @__PURE__ */ u.jsx(Jt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(ct, { present: r || i.open, children: /* @__PURE__ */ u.jsx(Jt.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ u.jsx(Dg, { ...o, ref: n }) : /* @__PURE__ */ u.jsx(Ig, { ...o, ref: n }) }) }) });
  }
), Dg = d.forwardRef(
  (e, n) => {
    const t = bt(Oe, e.__scopeMenu), r = d.useRef(null), o = ue(n, r);
    return d.useEffect(() => {
      const i = r.current;
      if (i) return _o(i);
    }, []), /* @__PURE__ */ u.jsx(
      To,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: t.open,
        disableOutsideScroll: !0,
        onFocusOutside: te(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => t.onOpenChange(!1)
      }
    );
  }
), Ig = d.forwardRef((e, n) => {
  const t = bt(Oe, e.__scopeMenu);
  return /* @__PURE__ */ u.jsx(
    To,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), Ng = /* @__PURE__ */ Pt("MenuContent.ScrollLock"), To = d.forwardRef(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: l,
      onPointerDownOutside: p,
      onFocusOutside: f,
      onInteractOutside: v,
      onDismiss: h,
      disableOutsideScroll: x,
      ...m
    } = e, g = bt(Oe, t), y = on(Oe, t), C = sr(t), S = _c(t), E = Rg(t), [w, I] = d.useState(null), A = d.useRef(null), P = ue(n, A, g.onContentChange), N = d.useRef(0), W = d.useRef(""), Z = d.useRef(0), G = d.useRef(null), H = d.useRef("right"), B = d.useRef(0), z = x ? nr : d.Fragment, L = x ? { as: Ng, allowPinchZoom: !0 } : void 0, X = (M) => {
      const k = W.current + M, b = E().filter((_) => !_.disabled), O = document.activeElement, D = b.find((_) => _.ref.current === O)?.textValue, T = b.map((_) => _.textValue), K = Yg(T, k, D), U = b.find((_) => _.textValue === K)?.ref.current;
      (function _($) {
        W.current = $, window.clearTimeout(N.current), $ !== "" && (N.current = window.setTimeout(() => _(""), 1e3));
      })(k), U && setTimeout(() => U.focus());
    };
    d.useEffect(() => () => window.clearTimeout(N.current), []), ho();
    const R = d.useCallback((M) => H.current === G.current?.side && Zg(M, G.current?.area), []);
    return /* @__PURE__ */ u.jsx(
      Mg,
      {
        scope: t,
        searchRef: W,
        onItemEnter: d.useCallback(
          (M) => {
            R(M) && M.preventDefault();
          },
          [R]
        ),
        onItemLeave: d.useCallback(
          (M) => {
            R(M) || (A.current?.focus(), I(null));
          },
          [R]
        ),
        onTriggerLeave: d.useCallback(
          (M) => {
            R(M) && M.preventDefault();
          },
          [R]
        ),
        pointerGraceTimerRef: Z,
        onPointerGraceIntentChange: d.useCallback((M) => {
          G.current = M;
        }, []),
        children: /* @__PURE__ */ u.jsx(z, { ...L, children: /* @__PURE__ */ u.jsx(
          Yn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: te(i, (M) => {
              M.preventDefault(), A.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ u.jsx(
              qn,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: v,
                onDismiss: h,
                children: /* @__PURE__ */ u.jsx(
                  wg,
                  {
                    asChild: !0,
                    ...S,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: w,
                    onCurrentTabStopIdChange: I,
                    onEntryFocus: te(c, (M) => {
                      y.isUsingKeyboardRef.current || M.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ u.jsx(
                      hs,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Uc(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...C,
                        ...m,
                        ref: P,
                        style: { outline: "none", ...m.style },
                        onKeyDown: te(m.onKeyDown, (M) => {
                          const b = M.target.closest("[data-radix-menu-content]") === M.currentTarget, O = M.ctrlKey || M.altKey || M.metaKey, D = M.key.length === 1;
                          b && (M.key === "Tab" && M.preventDefault(), !O && D && X(M.key));
                          const T = A.current;
                          if (M.target !== T || !Eg.includes(M.key)) return;
                          M.preventDefault();
                          const U = E().filter((_) => !_.disabled).map((_) => _.ref.current);
                          Sc.includes(M.key) && U.reverse(), Gg(U);
                        }),
                        onBlur: te(e.onBlur, (M) => {
                          M.currentTarget.contains(M.target) || (window.clearTimeout(N.current), W.current = "");
                        }),
                        onPointerMove: te(
                          e.onPointerMove,
                          Qt((M) => {
                            const k = M.target, b = B.current !== M.clientX;
                            if (M.currentTarget.contains(k) && b) {
                              const O = M.clientX > B.current ? "right" : "left";
                              H.current = O, B.current = M.clientX;
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
Ac.displayName = Oe;
var Lg = "MenuGroup", Mo = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ u.jsx(se.div, { role: "group", ...r, ref: n });
  }
);
Mo.displayName = Lg;
var Fg = "MenuLabel", jc = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ u.jsx(se.div, { ...r, ref: n });
  }
);
jc.displayName = Fg;
var zn = "MenuItem", aa = "menu.itemSelect", cr = d.forwardRef(
  (e, n) => {
    const { disabled: t = !1, onSelect: r, ...o } = e, i = d.useRef(null), a = on(zn, e.__scopeMenu), s = Oo(zn, e.__scopeMenu), c = ue(n, i), l = d.useRef(!1), p = () => {
      const f = i.current;
      if (!t && f) {
        const v = new CustomEvent(aa, { bubbles: !0, cancelable: !0 });
        f.addEventListener(aa, (h) => r?.(h), { once: !0 }), Ba(f, v), v.defaultPrevented ? l.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ u.jsx(
      Oc,
      {
        ...o,
        ref: c,
        disabled: t,
        onClick: te(e.onClick, p),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), l.current = !0;
        },
        onPointerUp: te(e.onPointerUp, (f) => {
          l.current || f.currentTarget?.click();
        }),
        onKeyDown: te(e.onKeyDown, (f) => {
          const v = s.searchRef.current !== "";
          t || v && f.key === " " || so.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
cr.displayName = zn;
var Oc = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, disabled: r = !1, textValue: o, ...i } = e, a = Oo(zn, t), s = _c(t), c = d.useRef(null), l = ue(n, c), [p, f] = d.useState(!1), [v, h] = d.useState("");
    return d.useEffect(() => {
      const x = c.current;
      x && h((x.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ u.jsx(
      Jt.ItemSlot,
      {
        scope: t,
        disabled: r,
        textValue: o ?? v,
        children: /* @__PURE__ */ u.jsx(Cg, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ u.jsx(
          se.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: l,
            onPointerMove: te(
              e.onPointerMove,
              Qt((x) => {
                r ? a.onItemLeave(x) : (a.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: te(
              e.onPointerLeave,
              Qt((x) => a.onItemLeave(x))
            ),
            onFocus: te(e.onFocus, () => f(!0)),
            onBlur: te(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), zg = "MenuCheckboxItem", Tc = d.forwardRef(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ u.jsx(Lc, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ u.jsx(
      cr,
      {
        role: "menuitemcheckbox",
        "aria-checked": $n(t) ? "mixed" : t,
        ...o,
        ref: n,
        "data-state": Io(t),
        onSelect: te(
          o.onSelect,
          () => r?.($n(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Tc.displayName = zg;
var Mc = "MenuRadioGroup", [$g, Wg] = xt(
  Mc,
  { value: void 0, onValueChange: () => {
  } }
), Dc = d.forwardRef(
  (e, n) => {
    const { value: t, onValueChange: r, ...o } = e, i = We(r);
    return /* @__PURE__ */ u.jsx($g, { scope: e.__scopeMenu, value: t, onValueChange: i, children: /* @__PURE__ */ u.jsx(Mo, { ...o, ref: n }) });
  }
);
Dc.displayName = Mc;
var Ic = "MenuRadioItem", Nc = d.forwardRef(
  (e, n) => {
    const { value: t, ...r } = e, o = Wg(Ic, e.__scopeMenu), i = t === o.value;
    return /* @__PURE__ */ u.jsx(Lc, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ u.jsx(
      cr,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: n,
        "data-state": Io(i),
        onSelect: te(
          r.onSelect,
          () => o.onValueChange?.(t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Nc.displayName = Ic;
var Do = "MenuItemIndicator", [Lc, Vg] = xt(
  Do,
  { checked: !1 }
), Fc = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, forceMount: r, ...o } = e, i = Vg(Do, t);
    return /* @__PURE__ */ u.jsx(
      ct,
      {
        present: r || $n(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ u.jsx(
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
Fc.displayName = Do;
var Bg = "MenuSeparator", zc = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ u.jsx(
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
zc.displayName = Bg;
var Hg = "MenuArrow", $c = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = sr(t);
    return /* @__PURE__ */ u.jsx(gs, { ...o, ...r, ref: n });
  }
);
$c.displayName = Hg;
var Ug = "MenuSub", [o0, Wc] = xt(Ug), qt = "MenuSubTrigger", Vc = d.forwardRef(
  (e, n) => {
    const t = bt(qt, e.__scopeMenu), r = on(qt, e.__scopeMenu), o = Wc(qt, e.__scopeMenu), i = Oo(qt, e.__scopeMenu), a = d.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = i, l = { __scopeMenu: e.__scopeMenu }, p = d.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return d.useEffect(() => p, [p]), d.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [s, c]), /* @__PURE__ */ u.jsx(Ao, { asChild: !0, ...l, children: /* @__PURE__ */ u.jsx(
      Oc,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": o.contentId,
        "data-state": Uc(t.open),
        ...e,
        ref: en(n, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: te(
          e.onPointerMove,
          Qt((f) => {
            i.onItemEnter(f), !f.defaultPrevented && !e.disabled && !t.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              t.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: te(
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
        onKeyDown: te(e.onKeyDown, (f) => {
          const v = i.searchRef.current !== "";
          e.disabled || v && f.key === " " || _g[r.dir].includes(f.key) && (t.onOpenChange(!0), t.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Vc.displayName = qt;
var Bc = "MenuSubContent", Hc = d.forwardRef(
  (e, n) => {
    const t = Rc(Oe, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, i = bt(Oe, e.__scopeMenu), a = on(Oe, e.__scopeMenu), s = Wc(Bc, e.__scopeMenu), c = d.useRef(null), l = ue(n, c);
    return /* @__PURE__ */ u.jsx(Jt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(ct, { present: r || i.open, children: /* @__PURE__ */ u.jsx(Jt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(
      To,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: l,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (p) => {
          a.isUsingKeyboardRef.current && c.current?.focus(), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: te(e.onFocusOutside, (p) => {
          p.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: te(e.onEscapeKeyDown, (p) => {
          a.onClose(), p.preventDefault();
        }),
        onKeyDown: te(e.onKeyDown, (p) => {
          const f = p.currentTarget.contains(p.target), v = kg[a.dir].includes(p.key);
          f && v && (i.onOpenChange(!1), s.trigger?.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
Hc.displayName = Bc;
function Uc(e) {
  return e ? "open" : "closed";
}
function $n(e) {
  return e === "indeterminate";
}
function Io(e) {
  return $n(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Gg(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function qg(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
function Yg(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((l) => l === n[0]) ? n[0] : n, i = t ? e.indexOf(t) : -1;
  let a = qg(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((l) => l !== t));
  const c = a.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== t ? c : void 0;
}
function Kg(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
    const s = n[i], c = n[a], l = s.x, p = s.y, f = c.x, v = c.y;
    p > r != v > r && t < (f - l) * (r - p) / (v - p) + l && (o = !o);
  }
  return o;
}
function Zg(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return Kg(t, n);
}
function Qt(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var Xg = kc, Jg = Ao, Qg = Pc, ex = Ac, tx = Mo, nx = jc, rx = cr, ox = Tc, ix = Dc, ax = Nc, sx = Fc, cx = zc, lx = $c, dx = Vc, ux = Hc, lr = "DropdownMenu", [px] = it(
  lr,
  [Ec]
), ke = Ec(), [fx, Gc] = px(lr), qc = (e) => {
  const {
    __scopeDropdownMenu: n,
    children: t,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, c = ke(n), l = d.useRef(null), [p, f] = Zt({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: lr
  });
  return /* @__PURE__ */ u.jsx(
    fx,
    {
      scope: n,
      triggerId: qe(),
      triggerRef: l,
      contentId: qe(),
      open: p,
      onOpenChange: f,
      onOpenToggle: d.useCallback(() => f((v) => !v), [f]),
      modal: s,
      children: /* @__PURE__ */ u.jsx(Xg, { ...c, open: p, onOpenChange: f, dir: r, modal: s, children: t })
    }
  );
};
qc.displayName = lr;
var Yc = "DropdownMenuTrigger", Kc = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, disabled: r = !1, ...o } = e, i = Gc(Yc, t), a = ke(t);
    return /* @__PURE__ */ u.jsx(Jg, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
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
        onPointerDown: te(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(), i.open || s.preventDefault());
        }),
        onKeyDown: te(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && i.onOpenToggle(), s.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Kc.displayName = Yc;
var mx = "DropdownMenuPortal", Zc = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = ke(n);
  return /* @__PURE__ */ u.jsx(Qg, { ...r, ...t });
};
Zc.displayName = mx;
var Xc = "DropdownMenuContent", Jc = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Gc(Xc, t), i = ke(t), a = d.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      ex,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: n,
        onCloseAutoFocus: te(e.onCloseAutoFocus, (s) => {
          a.current || o.triggerRef.current?.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: te(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, p = c.button === 2 || l;
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
Jc.displayName = Xc;
var vx = "DropdownMenuGroup", hx = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = ke(t);
    return /* @__PURE__ */ u.jsx(tx, { ...o, ...r, ref: n });
  }
);
hx.displayName = vx;
var gx = "DropdownMenuLabel", xx = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = ke(t);
    return /* @__PURE__ */ u.jsx(nx, { ...o, ...r, ref: n });
  }
);
xx.displayName = gx;
var bx = "DropdownMenuItem", Qc = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = ke(t);
    return /* @__PURE__ */ u.jsx(rx, { ...o, ...r, ref: n });
  }
);
Qc.displayName = bx;
var yx = "DropdownMenuCheckboxItem", wx = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ke(t);
  return /* @__PURE__ */ u.jsx(ox, { ...o, ...r, ref: n });
});
wx.displayName = yx;
var Cx = "DropdownMenuRadioGroup", Sx = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ke(t);
  return /* @__PURE__ */ u.jsx(ix, { ...o, ...r, ref: n });
});
Sx.displayName = Cx;
var Ex = "DropdownMenuRadioItem", _x = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ke(t);
  return /* @__PURE__ */ u.jsx(ax, { ...o, ...r, ref: n });
});
_x.displayName = Ex;
var kx = "DropdownMenuItemIndicator", Rx = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ke(t);
  return /* @__PURE__ */ u.jsx(sx, { ...o, ...r, ref: n });
});
Rx.displayName = kx;
var Px = "DropdownMenuSeparator", Ax = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ke(t);
  return /* @__PURE__ */ u.jsx(cx, { ...o, ...r, ref: n });
});
Ax.displayName = Px;
var jx = "DropdownMenuArrow", Ox = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = ke(t);
    return /* @__PURE__ */ u.jsx(lx, { ...o, ...r, ref: n });
  }
);
Ox.displayName = jx;
var Tx = "DropdownMenuSubTrigger", Mx = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ke(t);
  return /* @__PURE__ */ u.jsx(dx, { ...o, ...r, ref: n });
});
Mx.displayName = Tx;
var Dx = "DropdownMenuSubContent", Ix = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ke(t);
  return /* @__PURE__ */ u.jsx(
    ux,
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
Ix.displayName = Dx;
var Nx = qc, Lx = Kc, Fx = Zc, zx = Jc, $x = Qc;
function i0({ children: e, items: n, className: t, align: r = "end", side: o = "bottom" }) {
  return /* @__PURE__ */ u.jsxs(Nx, { children: [
    /* @__PURE__ */ u.jsx(Lx, { asChild: !0, children: e }),
    /* @__PURE__ */ u.jsx(Fx, { children: /* @__PURE__ */ u.jsx(
      zx,
      {
        className: ne(
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
        children: n.map((i, a) => /* @__PURE__ */ u.jsxs(
          $x,
          {
            className: ne(
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
              i.icon && /* @__PURE__ */ u.jsx("span", { className: "shrink-0 w-4 h-4 flex items-center justify-center", children: i.icon }),
              /* @__PURE__ */ u.jsx("span", { children: i.label })
            ]
          },
          a
        ))
      }
    ) })
  ] });
}
var dr = "Dialog", [el, tl] = it(dr), [Wx, Le] = el(dr), nl = (e) => {
  const {
    __scopeDialog: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = d.useRef(null), c = d.useRef(null), [l, p] = Zt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: dr
  });
  return /* @__PURE__ */ u.jsx(
    Wx,
    {
      scope: n,
      triggerRef: s,
      contentRef: c,
      contentId: qe(),
      titleId: qe(),
      descriptionId: qe(),
      open: l,
      onOpenChange: p,
      onOpenToggle: d.useCallback(() => p((f) => !f), [p]),
      modal: a,
      children: t
    }
  );
};
nl.displayName = dr;
var rl = "DialogTrigger", ol = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(rl, t), i = ue(n, o.triggerRef);
    return /* @__PURE__ */ u.jsx(
      se.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Fo(o.open),
        ...r,
        ref: i,
        onClick: te(e.onClick, o.onOpenToggle)
      }
    );
  }
);
ol.displayName = rl;
var No = "DialogPortal", [Vx, il] = el(No, {
  forceMount: void 0
}), al = (e) => {
  const { __scopeDialog: n, forceMount: t, children: r, container: o } = e, i = Le(No, n);
  return /* @__PURE__ */ u.jsx(Vx, { scope: n, forceMount: t, children: d.Children.map(r, (a) => /* @__PURE__ */ u.jsx(ct, { present: t || i.open, children: /* @__PURE__ */ u.jsx(er, { asChild: !0, container: o, children: a }) })) });
};
al.displayName = No;
var Wn = "DialogOverlay", sl = d.forwardRef(
  (e, n) => {
    const t = il(Wn, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, i = Le(Wn, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ u.jsx(ct, { present: r || i.open, children: /* @__PURE__ */ u.jsx(Hx, { ...o, ref: n }) }) : null;
  }
);
sl.displayName = Wn;
var Bx = /* @__PURE__ */ Pt("DialogOverlay.RemoveScroll"), Hx = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(Wn, t);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(nr, { as: Bx, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ u.jsx(
        se.div,
        {
          "data-state": Fo(o.open),
          ...r,
          ref: n,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), ht = "DialogContent", cl = d.forwardRef(
  (e, n) => {
    const t = il(ht, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, i = Le(ht, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(ct, { present: r || i.open, children: i.modal ? /* @__PURE__ */ u.jsx(Ux, { ...o, ref: n }) : /* @__PURE__ */ u.jsx(Gx, { ...o, ref: n }) });
  }
);
cl.displayName = ht;
var Ux = d.forwardRef(
  (e, n) => {
    const t = Le(ht, e.__scopeDialog), r = d.useRef(null), o = ue(n, t.contentRef, r);
    return d.useEffect(() => {
      const i = r.current;
      if (i) return _o(i);
    }, []), /* @__PURE__ */ u.jsx(
      ll,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: te(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), t.triggerRef.current?.focus();
        }),
        onPointerDownOutside: te(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && i.preventDefault();
        }),
        onFocusOutside: te(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), Gx = d.forwardRef(
  (e, n) => {
    const t = Le(ht, e.__scopeDialog), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      ll,
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
), ll = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = Le(ht, t), c = d.useRef(null), l = ue(n, c);
    return ho(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        Yn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ u.jsx(
            qn,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Fo(s.open),
              ...a,
              ref: l,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(Yx, { titleId: s.titleId }),
        /* @__PURE__ */ u.jsx(Zx, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Lo = "DialogTitle", dl = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(Lo, t);
    return /* @__PURE__ */ u.jsx(se.h2, { id: o.titleId, ...r, ref: n });
  }
);
dl.displayName = Lo;
var ul = "DialogDescription", pl = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(ul, t);
    return /* @__PURE__ */ u.jsx(se.p, { id: o.descriptionId, ...r, ref: n });
  }
);
pl.displayName = ul;
var fl = "DialogClose", ml = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(fl, t);
    return /* @__PURE__ */ u.jsx(
      se.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: te(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ml.displayName = fl;
function Fo(e) {
  return e ? "open" : "closed";
}
var vl = "DialogTitleWarning", [qx, hl] = qu(vl, {
  contentName: ht,
  titleName: Lo,
  docsSlug: "dialog"
}), Yx = ({ titleId: e }) => {
  const n = hl(vl), t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
  return d.useEffect(() => {
    e && (document.getElementById(e) || console.error(t));
  }, [t, e]), null;
}, Kx = "DialogDescriptionWarning", Zx = ({ contentRef: e, descriptionId: n }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${hl(Kx).contentName}}.`;
  return d.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    n && o && (document.getElementById(n) || console.warn(r));
  }, [r, e, n]), null;
}, Xx = nl, Jx = ol, Qx = al, eb = sl, tb = cl, nb = dl, rb = pl, gl = ml, xl = "AlertDialog", [ob] = it(xl, [
  tl
]), Xe = tl(), bl = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = Xe(n);
  return /* @__PURE__ */ u.jsx(Xx, { ...r, ...t, modal: !0 });
};
bl.displayName = xl;
var ib = "AlertDialogTrigger", ab = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
    return /* @__PURE__ */ u.jsx(Jx, { ...o, ...r, ref: n });
  }
);
ab.displayName = ib;
var sb = "AlertDialogPortal", yl = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = Xe(n);
  return /* @__PURE__ */ u.jsx(Qx, { ...r, ...t });
};
yl.displayName = sb;
var cb = "AlertDialogOverlay", wl = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
    return /* @__PURE__ */ u.jsx(eb, { ...o, ...r, ref: n });
  }
);
wl.displayName = cb;
var Rt = "AlertDialogContent", [lb, db] = ob(Rt), ub = /* @__PURE__ */ Zu("AlertDialogContent"), Cl = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, children: r, ...o } = e, i = Xe(t), a = d.useRef(null), s = ue(n, a), c = d.useRef(null);
    return /* @__PURE__ */ u.jsx(
      qx,
      {
        contentName: Rt,
        titleName: Sl,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ u.jsx(lb, { scope: t, cancelRef: c, children: /* @__PURE__ */ u.jsxs(
          tb,
          {
            role: "alertdialog",
            ...i,
            ...o,
            ref: s,
            onOpenAutoFocus: te(o.onOpenAutoFocus, (l) => {
              l.preventDefault(), c.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (l) => l.preventDefault(),
            onInteractOutside: (l) => l.preventDefault(),
            children: [
              /* @__PURE__ */ u.jsx(ub, { children: r }),
              /* @__PURE__ */ u.jsx(fb, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
Cl.displayName = Rt;
var Sl = "AlertDialogTitle", El = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
    return /* @__PURE__ */ u.jsx(nb, { ...o, ...r, ref: n });
  }
);
El.displayName = Sl;
var _l = "AlertDialogDescription", kl = d.forwardRef((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
  return /* @__PURE__ */ u.jsx(rb, { ...o, ...r, ref: n });
});
kl.displayName = _l;
var pb = "AlertDialogAction", Rl = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
    return /* @__PURE__ */ u.jsx(gl, { ...o, ...r, ref: n });
  }
);
Rl.displayName = pb;
var Pl = "AlertDialogCancel", Al = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, { cancelRef: o } = db(Pl, t), i = Xe(t), a = ue(n, o);
    return /* @__PURE__ */ u.jsx(gl, { ...i, ...r, ref: a });
  }
);
Al.displayName = Pl;
var fb = ({ contentRef: e }) => {
  const n = `\`${Rt}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Rt}\` by passing a \`${_l}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Rt}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return d.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(n);
  }, [n, e]), null;
}, mb = bl, vb = yl, hb = wl, gb = Cl, a0 = Rl, s0 = Al, xb = El, sa = kl, bb = [
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
], yb = bb.reduce((e, n) => {
  const t = /* @__PURE__ */ Ea(`Primitive.${n}`), r = d.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, c = a ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(c, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), wb = Object.freeze({
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
}), Cb = "VisuallyHidden", jl = d.forwardRef(
  (e, n) => /* @__PURE__ */ u.jsx(
    yb.span,
    {
      ...e,
      ref: n,
      style: { ...wb, ...e.style }
    }
  )
);
jl.displayName = Cb;
var Sb = jl;
function c0({
  open: e,
  onOpenChange: n,
  header: t,
  content: r,
  actions: o,
  className: i
}) {
  return /* @__PURE__ */ u.jsx(mb, { open: e, onOpenChange: n, children: /* @__PURE__ */ u.jsxs(vb, { children: [
    /* @__PURE__ */ u.jsx(hb, { className: "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
    /* @__PURE__ */ u.jsxs(
      gb,
      {
        className: ne(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
          i
        ),
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col space-y-2", children: [
            /* @__PURE__ */ u.jsx(xb, { className: "text-lg font-semibold text-gray-900", children: t }),
            typeof r == "string" ? /* @__PURE__ */ u.jsx(sa, { className: "text-sm text-gray-600", children: r }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(sa, { asChild: !0, children: /* @__PURE__ */ u.jsx(Sb, { children: /* @__PURE__ */ u.jsx("span", { children: "Confirmation dialog content" }) }) }),
              /* @__PURE__ */ u.jsx("div", { className: "text-sm text-gray-600", children: r })
            ] })
          ] }),
          /* @__PURE__ */ u.jsx("div", { className: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0", children: o })
        ]
      }
    )
  ] }) });
}
export {
  c0 as AlertDialog,
  Jd as AnnouncementIcon,
  kb as Badge,
  Fd as Button,
  Qd as ChurchIcon,
  eu as ClassIcon,
  a0 as DialogAction,
  s0 as DialogCancel,
  tu as EventIcon,
  Rb as Form,
  Ob as FormControl,
  Tb as FormDescription,
  Pb as FormField,
  Ab as FormItem,
  jb as FormLabel,
  Mb as FormMessage,
  nu as GiftIcon,
  ru as HomeIcon,
  Db as Icon,
  r0 as ImageUploader,
  du as Input,
  Nb as InputOTP,
  Lb as InputOTPGroup,
  zb as InputOTPSeparator,
  Fb as InputOTPSlot,
  Oa as Label,
  Uu as Logo,
  Gu as LogoLockup,
  $b as MenuItem,
  ou as MinistryIcon,
  Hb as Pagination,
  Ib as PasswordInput,
  iu as PodcastIcon,
  Ub as Section,
  fv as Select,
  hv as SelectContent,
  Wb as SelectGroup,
  gv as SelectItem,
  Vb as SelectLabel,
  bv as SelectScrollDownButton,
  xv as SelectScrollUpButton,
  Bb as SelectSeparator,
  vv as SelectTrigger,
  mv as SelectValue,
  au as SeriesIcon,
  su as SermonIcon,
  Gb as Sidebar,
  cu as SubscriptionIcon,
  i0 as SuspendedMenu,
  qb as Table,
  Kb as TableBody,
  e0 as TableCaption,
  Qb as TableCell,
  Zb as TableFooter,
  Jb as TableHead,
  Yb as TableHeader,
  Xb as TableRow,
  t0 as Textarea,
  n0 as Typography,
  Ad as badgeVariants,
  Ld as buttonVariants,
  Ov as typographyVariants,
  Gn as useFormField
};
