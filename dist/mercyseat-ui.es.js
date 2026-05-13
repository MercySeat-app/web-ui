import * as u from "react";
import T, { useState as Be, forwardRef as Yr, createElement as ra, createContext as Oa, useContext as Or, useCallback as ue, useRef as kt, useLayoutEffect as dc, useEffect as un, useMemo as Je, useId as Mp, useReducer as Op, useImperativeHandle as Dp, Fragment as Pp } from "react";
import * as Ur from "react-dom";
import Rp from "react-dom";
function Da(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dr = { exports: {} }, Pn = {};
var Mi;
function jp() {
  if (Mi) return Pn;
  Mi = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, o, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      a = {};
      for (var s in o)
        s !== "key" && (a[s] = o[s]);
    } else a = o;
    return o = a.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return Pn.Fragment = t, Pn.jsx = n, Pn.jsxs = n, Pn;
}
var Rn = {};
var Oi;
function Tp() {
  return Oi || (Oi = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(k) {
      if (k == null) return null;
      if (typeof k == "function")
        return k.$$typeof === K ? null : k.displayName || k.name || null;
      if (typeof k == "string") return k;
      switch (k) {
        case v:
          return "Fragment";
        case y:
          return "Profiler";
        case w:
          return "StrictMode";
        case E:
          return "Suspense";
        case _:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof k == "object")
        switch (typeof k.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), k.$$typeof) {
          case h:
            return "Portal";
          case S:
            return k.displayName || "Context";
          case C:
            return (k._context.displayName || "Context") + ".Consumer";
          case b:
            var j = k.render;
            return k = k.displayName, k || (k = j.displayName || j.name || "", k = k !== "" ? "ForwardRef(" + k + ")" : "ForwardRef"), k;
          case O:
            return j = k.displayName || null, j !== null ? j : e(k.type) || "Memo";
          case N:
            j = k._payload, k = k._init;
            try {
              return e(k(j));
            } catch {
            }
        }
      return null;
    }
    function t(k) {
      return "" + k;
    }
    function n(k) {
      try {
        t(k);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var L = j.error, F = typeof Symbol == "function" && Symbol.toStringTag && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return L.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), t(k);
      }
    }
    function r(k) {
      if (k === v) return "<>";
      if (typeof k == "object" && k !== null && k.$$typeof === N)
        return "<...>";
      try {
        var j = e(k);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var k = G.A;
      return k === null ? null : k.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(k) {
      if (H.call(k, "key")) {
        var j = Object.getOwnPropertyDescriptor(k, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return k.key !== void 0;
    }
    function s(k, j) {
      function L() {
        B || (B = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(k, "key", {
        get: L,
        configurable: !0
      });
    }
    function c() {
      var k = e(this.type);
      return te[k] || (te[k] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), k = this.props.ref, k !== void 0 ? k : null;
    }
    function l(k, j, L, F, q, Y) {
      var M = L.ref;
      return k = {
        $$typeof: x,
        type: k,
        key: j,
        props: L,
        _owner: F
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(k, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(k, "ref", { enumerable: !1, value: null }), k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(k, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(k, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.defineProperty(k, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    }
    function p(k, j, L, F, q, Y) {
      var M = j.children;
      if (M !== void 0)
        if (F)
          if ($(M)) {
            for (F = 0; F < M.length; F++)
              f(M[F]);
            Object.freeze && Object.freeze(M);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(M);
      if (H.call(j, "key")) {
        M = e(k);
        var U = Object.keys(j).filter(function(z) {
          return z !== "key";
        });
        F = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", D[M + F] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          M,
          U,
          M
        ), D[M + F] = !0);
      }
      if (M = null, L !== void 0 && (n(L), M = "" + L), i(j) && (n(j.key), M = "" + j.key), "key" in j) {
        L = {};
        for (var J in j)
          J !== "key" && (L[J] = j[J]);
      } else L = j;
      return M && s(
        L,
        typeof k == "function" ? k.displayName || k.name || "Unknown" : k
      ), l(
        k,
        M,
        L,
        o(),
        q,
        Y
      );
    }
    function f(k) {
      m(k) ? k._store && (k._store.validated = 1) : typeof k == "object" && k !== null && k.$$typeof === N && (k._payload.status === "fulfilled" ? m(k._payload.value) && k._payload.value._store && (k._payload.value._store.validated = 1) : k._store && (k._store.validated = 1));
    }
    function m(k) {
      return typeof k == "object" && k !== null && k.$$typeof === x;
    }
    var g = T, x = /* @__PURE__ */ Symbol.for("react.transitional.element"), h = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), y = /* @__PURE__ */ Symbol.for("react.profiler"), C = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.suspense_list"), O = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), W = /* @__PURE__ */ Symbol.for("react.activity"), K = /* @__PURE__ */ Symbol.for("react.client.reference"), G = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, $ = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(k) {
        return k();
      }
    };
    var B, te = {}, R = g.react_stack_bottom_frame.bind(
      g,
      a
    )(), A = Z(r(a)), D = {};
    Rn.Fragment = v, Rn.jsx = function(k, j, L) {
      var F = 1e4 > G.recentlyCreatedOwnerStacks++;
      return p(
        k,
        j,
        L,
        !1,
        F ? Error("react-stack-top-frame") : R,
        F ? Z(r(k)) : A
      );
    }, Rn.jsxs = function(k, j, L) {
      var F = 1e4 > G.recentlyCreatedOwnerStacks++;
      return p(
        k,
        j,
        L,
        !0,
        F ? Error("react-stack-top-frame") : R,
        F ? Z(r(k)) : A
      );
    };
  })()), Rn;
}
var Di;
function Np() {
  return Di || (Di = 1, process.env.NODE_ENV === "production" ? dr.exports = jp() : dr.exports = Tp()), dr.exports;
}
var d = Np();
function Ap(e, t) {
  const n = u.createContext(t), r = (a) => {
    const { children: i, ...s } = a, c = u.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ d.jsx(n.Provider, { value: c, children: i });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const i = u.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function xt(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = u.createContext(i), c = n.length;
    n = [...n, i];
    const l = (f) => {
      const { scope: m, children: g, ...x } = f, h = m?.[e]?.[c] || s, v = u.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ d.jsx(h.Provider, { value: v, children: g });
    };
    l.displayName = a + "Provider";
    function p(f, m) {
      const g = m?.[e]?.[c] || s, x = u.useContext(g);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [l, p];
  }
  const o = () => {
    const a = n.map((i) => u.createContext(i));
    return function(s) {
      const c = s?.[e] || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [r, Ip(o, ...t)];
}
function Ip(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: c, scopeName: l }) => {
        const f = c(a)[`__scope${l}`];
        return { ...s, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Pi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function bt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Pi(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Pi(e[o], null);
        }
      };
  };
}
function pe(...e) {
  return u.useCallback(bt(...e), e);
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var Le = globalThis?.document ? u.useLayoutEffect : () => {
}, Fp = u[" useId ".trim().toString()] || (() => {
}), Lp = 0;
function Ue(e) {
  const [t, n] = u.useState(Fp());
  return Le(() => {
    n((r) => r ?? String(Lp++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Wp = u[" useInsertionEffect ".trim().toString()] || Le;
function Tt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, i] = zp({
    defaultProp: t,
    onChange: n
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
  const l = u.useCallback(
    (p) => {
      if (s) {
        const f = $p(p) ? p(e) : p;
        f !== e && i.current?.(f);
      } else
        a(p);
    },
    [s, e, a, i]
  );
  return [c, l];
}
function zp({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return Wp(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    o.current !== n && (a.current?.(n), o.current = n);
  }, [n, o]), [n, r, a];
}
function $p(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function Bp(e) {
  const t = /* @__PURE__ */ Vp(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), c = s.find(Yp);
    if (c) {
      const l = c.props.children, p = s.map((f) => f === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, p) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Vp(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = Gp(o), s = Up(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? bt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Hp = /* @__PURE__ */ Symbol("radix.slottable");
function Yp(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Hp;
}
function Up(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Gp(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var qp = [
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
], le = qp.reduce((e, t) => {
  const n = /* @__PURE__ */ Bp(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, c = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function uc(e, t) {
  e && Ur.flushSync(() => e.dispatchEvent(t));
}
function rt(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => t.current?.(...n), []);
}
function Kp(e, t = globalThis?.document) {
  const n = rt(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Zp = "DismissableLayer", oa = "dismissableLayer.update", Xp = "dismissableLayer.pointerDownOutside", Jp = "dismissableLayer.focusOutside", Ri, pc = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), wn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...c
    } = e, l = u.useContext(pc), [p, f] = u.useState(null), m = p?.ownerDocument ?? globalThis?.document, [, g] = u.useState({}), x = pe(t, (_) => f(_)), h = Array.from(l.layers), [v] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(v), y = p ? h.indexOf(p) : -1, C = l.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= w, b = tf((_) => {
      const O = _.target, N = [...l.branches].some((W) => W.contains(O));
      !S || N || (o?.(_), i?.(_), _.defaultPrevented || s?.());
    }, m), E = nf((_) => {
      const O = _.target;
      [...l.branches].some((W) => W.contains(O)) || (a?.(_), i?.(_), _.defaultPrevented || s?.());
    }, m);
    return Kp((_) => {
      y === l.layers.size - 1 && (r?.(_), !_.defaultPrevented && s && (_.preventDefault(), s()));
    }, m), u.useEffect(() => {
      if (p)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Ri = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(p)), l.layers.add(p), ji(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Ri);
        };
    }, [p, m, n, l]), u.useEffect(() => () => {
      p && (l.layers.delete(p), l.layersWithOutsidePointerEventsDisabled.delete(p), ji());
    }, [p, l]), u.useEffect(() => {
      const _ = () => g({});
      return document.addEventListener(oa, _), () => document.removeEventListener(oa, _);
    }, []), /* @__PURE__ */ d.jsx(
      le.div,
      {
        ...c,
        ref: x,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: X(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: X(
          e.onPointerDownCapture,
          b.onPointerDownCapture
        )
      }
    );
  }
);
wn.displayName = Zp;
var Qp = "DismissableLayerBranch", ef = u.forwardRef((e, t) => {
  const n = u.useContext(pc), r = u.useRef(null), o = pe(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ d.jsx(le.div, { ...e, ref: o });
});
ef.displayName = Qp;
function tf(e, t = globalThis?.document) {
  const n = rt(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          fc(
            Xp,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function nf(e, t = globalThis?.document) {
  const n = rt(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && fc(Jp, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ji() {
  const e = new CustomEvent(oa);
  document.dispatchEvent(e);
}
function fc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? uc(o, a) : o.dispatchEvent(a);
}
var _o = "focusScope.autoFocusOnMount", Mo = "focusScope.autoFocusOnUnmount", Ti = { bubbles: !1, cancelable: !0 }, rf = "FocusScope", Kn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, c] = u.useState(null), l = rt(o), p = rt(a), f = u.useRef(null), m = pe(t, (h) => c(h)), g = u.useRef({
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
      let h = function(C) {
        if (g.paused || !s) return;
        const S = C.target;
        s.contains(S) ? f.current = S : jt(f.current, { select: !0 });
      }, v = function(C) {
        if (g.paused || !s) return;
        const S = C.relatedTarget;
        S !== null && (s.contains(S) || jt(f.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const b of C)
            b.removedNodes.length > 0 && jt(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", v);
      const y = new MutationObserver(w);
      return s && y.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", v), y.disconnect();
      };
    }
  }, [r, s, g.paused]), u.useEffect(() => {
    if (s) {
      Ai.add(g);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const w = new CustomEvent(_o, Ti);
        s.addEventListener(_o, l), s.dispatchEvent(w), w.defaultPrevented || (of(df(mc(s)), { select: !0 }), document.activeElement === h && jt(s));
      }
      return () => {
        s.removeEventListener(_o, l), setTimeout(() => {
          const w = new CustomEvent(Mo, Ti);
          s.addEventListener(Mo, p), s.dispatchEvent(w), w.defaultPrevented || jt(h ?? document.body, { select: !0 }), s.removeEventListener(Mo, p), Ai.remove(g);
        }, 0);
      };
    }
  }, [s, l, p, g]);
  const x = u.useCallback(
    (h) => {
      if (!n && !r || g.paused) return;
      const v = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (v && w) {
        const y = h.currentTarget, [C, S] = af(y);
        C && S ? !h.shiftKey && w === S ? (h.preventDefault(), n && jt(C, { select: !0 })) : h.shiftKey && w === C && (h.preventDefault(), n && jt(S, { select: !0 })) : w === y && h.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ d.jsx(le.div, { tabIndex: -1, ...i, ref: m, onKeyDown: x });
});
Kn.displayName = rf;
function of(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (jt(r, { select: t }), document.activeElement !== n) return;
}
function af(e) {
  const t = mc(e), n = Ni(t, e), r = Ni(t.reverse(), e);
  return [n, r];
}
function mc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ni(e, t) {
  for (const n of e)
    if (!sf(n, { upTo: t })) return n;
}
function sf(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function cf(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function jt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && cf(e) && t && e.select();
  }
}
var Ai = lf();
function lf() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Ii(e, t), e.unshift(t);
    },
    remove(t) {
      e = Ii(e, t), e[0]?.resume();
    }
  };
}
function Ii(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function df(e) {
  return e.filter((t) => t.tagName !== "A");
}
var uf = "Portal", Zn = u.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  Le(() => a(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? Rp.createPortal(/* @__PURE__ */ d.jsx(le.div, { ...r, ref: t }), i) : null;
});
Zn.displayName = uf;
function pf(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var it = (e) => {
  const { present: t, children: n } = e, r = ff(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = pe(r.ref, mf(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
it.displayName = "Presence";
function ff(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = pf(i, {
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
    const l = ur(r.current);
    a.current = s === "mounted" ? l : "none";
  }, [s]), Le(() => {
    const l = r.current, p = o.current;
    if (p !== e) {
      const m = a.current, g = ur(l);
      e ? c("MOUNT") : g === "none" || l?.display === "none" ? c("UNMOUNT") : c(p && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Le(() => {
    if (t) {
      let l;
      const p = t.ownerDocument.defaultView ?? window, f = (g) => {
        const h = ur(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, m = (g) => {
        g.target === t && (a.current = ur(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        p.clearTimeout(l), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: u.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function ur(e) {
  return e?.animationName || "none";
}
function mf(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Oo = 0;
function Gr() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Fi()), document.body.insertAdjacentElement("beforeend", e[1] ?? Fi()), Oo++, () => {
      Oo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Oo--;
    };
  }, []);
}
function Fi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var aa = function(e, t) {
  return aa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
  }, aa(e, t);
};
function hf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  aa(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var Ee = function() {
  return Ee = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ee.apply(this, arguments);
};
function hc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Qt(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(i) {
      i(a);
    });
  }
  return new (n || (n = Promise))(function(a, i) {
    function s(p) {
      try {
        l(r.next(p));
      } catch (f) {
        i(f);
      }
    }
    function c(p) {
      try {
        l(r.throw(p));
      } catch (f) {
        i(f);
      }
    }
    function l(p) {
      p.done ? a(p.value) : o(p.value).then(s, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}
function gf(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Sr = "right-scroll-bar-position", Er = "width-before-scroll-bar", vf = "with-scroll-bars-hidden", xf = "--removed-body-scroll-bar-size";
function Do(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function bf(e, t) {
  var n = Be(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var yf = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Li = /* @__PURE__ */ new WeakMap();
function wf(e, t) {
  var n = bf(null, function(r) {
    return e.forEach(function(o) {
      return Do(o, r);
    });
  });
  return yf(function() {
    var r = Li.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), i = n.current;
      o.forEach(function(s) {
        a.has(s) || Do(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Do(s, i);
      });
    }
    Li.set(n, e);
  }, [e]), n;
}
function Cf(e) {
  return e;
}
function kf(e, t) {
  t === void 0 && (t = Cf);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var c = function() {
        var p = i;
        i = [], p.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(p) {
          i.push(p), l();
        },
        filter: function(p) {
          return i = i.filter(p), n;
        }
      };
    }
  };
  return o;
}
function Sf(e) {
  e === void 0 && (e = {});
  var t = kf(null);
  return t.options = Ee({ async: !0, ssr: !1 }, e), t;
}
var gc = function(e) {
  var t = e.sideCar, n = hc(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, Ee({}, n));
};
gc.isSideCarExport = !0;
function Ef(e, t) {
  return e.useMedium(t), gc;
}
var vc = Sf(), Po = function() {
}, qr = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Po,
    onWheelCapture: Po,
    onTouchMoveCapture: Po
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, p = e.enabled, f = e.shards, m = e.sideCar, g = e.noRelative, x = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, y = w === void 0 ? "div" : w, C = e.gapMode, S = hc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), b = m, E = wf([n, t]), _ = Ee(Ee({}, S), o);
  return u.createElement(
    u.Fragment,
    null,
    p && u.createElement(b, { sideCar: vc, removeScrollBar: l, shards: f, noRelative: g, noIsolation: x, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n, gapMode: C }),
    i ? u.cloneElement(u.Children.only(s), Ee(Ee({}, _), { ref: E })) : u.createElement(y, Ee({}, _, { className: c, ref: E }), s)
  );
});
qr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
qr.classNames = {
  fullWidth: Er,
  zeroRight: Sr
};
var _f = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Mf() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = _f();
  return t && e.setAttribute("nonce", t), e;
}
function Of(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Df(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Pf = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Mf()) && (Of(t, n), Df(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Rf = function() {
  var e = Pf();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, xc = function() {
  var e = Rf(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, jf = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ro = function(e) {
  return parseInt(e || "", 10) || 0;
}, Tf = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ro(n), Ro(r), Ro(o)];
}, Nf = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return jf;
  var t = Tf(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Af = xc(), pn = "data-scroll-locked", If = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(vf, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(pn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Sr, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Er, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Sr, " .").concat(Sr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Er, " .").concat(Er, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(pn, `] {
    `).concat(xf, ": ").concat(s, `px;
  }
`);
}, Wi = function() {
  var e = parseInt(document.body.getAttribute(pn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ff = function() {
  u.useEffect(function() {
    return document.body.setAttribute(pn, (Wi() + 1).toString()), function() {
      var e = Wi() - 1;
      e <= 0 ? document.body.removeAttribute(pn) : document.body.setAttribute(pn, e.toString());
    };
  }, []);
}, Lf = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Ff();
  var a = u.useMemo(function() {
    return Nf(o);
  }, [o]);
  return u.createElement(Af, { styles: If(a, !t, o, n ? "" : "!important") });
}, ia = !1;
if (typeof window < "u")
  try {
    var pr = Object.defineProperty({}, "passive", {
      get: function() {
        return ia = !0, !0;
      }
    });
    window.addEventListener("test", pr, pr), window.removeEventListener("test", pr, pr);
  } catch {
    ia = !1;
  }
var nn = ia ? { passive: !1 } : !1, Wf = function(e) {
  return e.tagName === "TEXTAREA";
}, bc = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Wf(e) && n[t] === "visible")
  );
}, zf = function(e) {
  return bc(e, "overflowY");
}, $f = function(e) {
  return bc(e, "overflowX");
}, zi = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = yc(e, r);
    if (o) {
      var a = wc(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Bf = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Vf = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, yc = function(e, t) {
  return e === "v" ? zf(t) : $f(t);
}, wc = function(e, t) {
  return e === "v" ? Bf(t) : Vf(t);
}, Hf = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Yf = function(e, t, n, r, o) {
  var a = Hf(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, c = t.contains(s), l = !1, p = i > 0, f = 0, m = 0;
  do {
    if (!s)
      break;
    var g = wc(e, s), x = g[0], h = g[1], v = g[2], w = h - v - a * x;
    (x || w) && yc(e, s) && (f += w, m += x);
    var y = s.parentNode;
    s = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (p && Math.abs(f) < 1 || !p && Math.abs(m) < 1) && (l = !0), l;
}, fr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, $i = function(e) {
  return [e.deltaX, e.deltaY];
}, Bi = function(e) {
  return e && "current" in e ? e.current : e;
}, Uf = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Gf = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, qf = 0, rn = [];
function Kf(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(qf++)[0], a = u.useState(xc)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = gf([e.lockRef.current], (e.shards || []).map(Bi), !0).filter(Boolean);
      return h.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = u.useCallback(function(h, v) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = fr(h), y = n.current, C = "deltaX" in h ? h.deltaX : y[0] - w[0], S = "deltaY" in h ? h.deltaY : y[1] - w[1], b, E = h.target, _ = Math.abs(C) > Math.abs(S) ? "h" : "v";
    if ("touches" in h && _ === "h" && E.type === "range")
      return !1;
    var O = window.getSelection(), N = O && O.anchorNode, W = N ? N === E || N.contains(E) : !1;
    if (W)
      return !1;
    var K = zi(_, E);
    if (!K)
      return !0;
    if (K ? b = _ : (b = _ === "v" ? "h" : "v", K = zi(_, E)), !K)
      return !1;
    if (!r.current && "changedTouches" in h && (C || S) && (r.current = b), !b)
      return !0;
    var G = r.current || b;
    return Yf(G, v, h, G === "h" ? C : S);
  }, []), c = u.useCallback(function(h) {
    var v = h;
    if (!(!rn.length || rn[rn.length - 1] !== a)) {
      var w = "deltaY" in v ? $i(v) : fr(v), y = t.current.filter(function(b) {
        return b.name === v.type && (b.target === v.target || v.target === b.shadowParent) && Uf(b.delta, w);
      })[0];
      if (y && y.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!y) {
        var C = (i.current.shards || []).map(Bi).filter(Boolean).filter(function(b) {
          return b.contains(v.target);
        }), S = C.length > 0 ? s(v, C[0]) : !i.current.noIsolation;
        S && v.cancelable && v.preventDefault();
      }
    }
  }, []), l = u.useCallback(function(h, v, w, y) {
    var C = { name: h, delta: v, target: w, should: y, shadowParent: Zf(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== C;
      });
    }, 1);
  }, []), p = u.useCallback(function(h) {
    n.current = fr(h), r.current = void 0;
  }, []), f = u.useCallback(function(h) {
    l(h.type, $i(h), h.target, s(h, e.lockRef.current));
  }, []), m = u.useCallback(function(h) {
    l(h.type, fr(h), h.target, s(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return rn.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, nn), document.addEventListener("touchmove", c, nn), document.addEventListener("touchstart", p, nn), function() {
      rn = rn.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, nn), document.removeEventListener("touchmove", c, nn), document.removeEventListener("touchstart", p, nn);
    };
  }, []);
  var g = e.removeScrollBar, x = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(a, { styles: Gf(o) }) : null,
    g ? u.createElement(Lf, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Zf(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Xf = Ef(vc, Kf);
var Xn = u.forwardRef(function(e, t) {
  return u.createElement(qr, Ee({}, e, { ref: t, sideCar: Xf }));
});
Xn.classNames = qr.classNames;
var Jf = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, on = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), hr = {}, jo = 0, Cc = function(e) {
  return e && (e.host || Cc(e.parentNode));
}, Qf = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Cc(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, em = function(e, t, n, r) {
  var o = Qf(t, Array.isArray(e) ? e : [e]);
  hr[n] || (hr[n] = /* @__PURE__ */ new WeakMap());
  var a = hr[n], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || s.has(f) || (s.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var p = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (s.has(m))
        p(m);
      else
        try {
          var g = m.getAttribute(r), x = g !== null && g !== "false", h = (on.get(m) || 0) + 1, v = (a.get(m) || 0) + 1;
          on.set(m, h), a.set(m, v), i.push(m), h === 1 && x && mr.set(m, !0), v === 1 && m.setAttribute(n, "true"), x || m.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return p(t), s.clear(), jo++, function() {
    i.forEach(function(f) {
      var m = on.get(f) - 1, g = a.get(f) - 1;
      on.set(f, m), a.set(f, g), m || (mr.has(f) || f.removeAttribute(r), mr.delete(f)), g || f.removeAttribute(n);
    }), jo--, jo || (on = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), hr = {});
  };
}, Kr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Jf(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), em(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
// @__NO_SIDE_EFFECTS__
function tm(e) {
  const t = /* @__PURE__ */ nm(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), c = s.find(om);
    if (c) {
      const l = c.props.children, p = s.map((f) => f === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, p) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function nm(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = im(o), s = am(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? bt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var rm = /* @__PURE__ */ Symbol("radix.slottable");
function om(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === rm;
}
function am(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function im(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Zr = "Dialog", [kc, Sc] = xt(Zr), [sm, st] = kc(Zr), Pa = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = u.useRef(null), c = u.useRef(null), [l, p] = Tt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Zr
  });
  return /* @__PURE__ */ d.jsx(
    sm,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: Ue(),
      titleId: Ue(),
      descriptionId: Ue(),
      open: l,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((f) => !f), [p]),
      modal: i,
      children: n
    }
  );
};
Pa.displayName = Zr;
var Ec = "DialogTrigger", Ra = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = st(Ec, n), a = pe(t, o.triggerRef);
    return /* @__PURE__ */ d.jsx(
      le.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Wa(o.open),
        ...r,
        ref: a,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Ra.displayName = Ec;
var ja = "DialogPortal", [cm, _c] = kc(ja, {
  forceMount: void 0
}), Ta = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = st(ja, t);
  return /* @__PURE__ */ d.jsx(cm, { scope: t, forceMount: n, children: u.Children.map(r, (i) => /* @__PURE__ */ d.jsx(it, { present: n || a.open, children: /* @__PURE__ */ d.jsx(Zn, { asChild: !0, container: o, children: i }) })) });
};
Ta.displayName = ja;
var Dr = "DialogOverlay", Na = u.forwardRef(
  (e, t) => {
    const n = _c(Dr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = st(Dr, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ d.jsx(it, { present: r || a.open, children: /* @__PURE__ */ d.jsx(dm, { ...o, ref: t }) }) : null;
  }
);
Na.displayName = Dr;
var lm = /* @__PURE__ */ tm("DialogOverlay.RemoveScroll"), dm = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = st(Dr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d.jsx(Xn, { as: lm, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d.jsx(
        le.div,
        {
          "data-state": Wa(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), qt = "DialogContent", Aa = u.forwardRef(
  (e, t) => {
    const n = _c(qt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = st(qt, e.__scopeDialog);
    return /* @__PURE__ */ d.jsx(it, { present: r || a.open, children: a.modal ? /* @__PURE__ */ d.jsx(um, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(pm, { ...o, ref: t }) });
  }
);
Aa.displayName = qt;
var um = u.forwardRef(
  (e, t) => {
    const n = st(qt, e.__scopeDialog), r = u.useRef(null), o = pe(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Kr(a);
    }, []), /* @__PURE__ */ d.jsx(
      Mc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: X(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: X(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), pm = u.forwardRef(
  (e, t) => {
    const n = st(qt, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Mc,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || n.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          n.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Mc = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = st(qt, n), c = u.useRef(null), l = pe(t, c);
    return Gr(), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        Kn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ d.jsx(
            wn,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Wa(s.open),
              ...i,
              ref: l,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(mm, { titleId: s.titleId }),
        /* @__PURE__ */ d.jsx(gm, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Ia = "DialogTitle", Fa = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = st(Ia, n);
    return /* @__PURE__ */ d.jsx(le.h2, { id: o.titleId, ...r, ref: t });
  }
);
Fa.displayName = Ia;
var Oc = "DialogDescription", La = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = st(Oc, n);
    return /* @__PURE__ */ d.jsx(le.p, { id: o.descriptionId, ...r, ref: t });
  }
);
La.displayName = Oc;
var Dc = "DialogClose", Jn = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = st(Dc, n);
    return /* @__PURE__ */ d.jsx(
      le.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Jn.displayName = Dc;
function Wa(e) {
  return e ? "open" : "closed";
}
var Pc = "DialogTitleWarning", [fm, Rc] = Ap(Pc, {
  contentName: qt,
  titleName: Ia,
  docsSlug: "dialog"
}), mm = ({ titleId: e }) => {
  const t = Rc(Pc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, hm = "DialogDescriptionWarning", gm = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Rc(hm).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, vm = Pa, xm = Ra, bm = Ta, ym = Na, wm = Aa, Cm = Fa, km = La, jc = Jn, Sm = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Em(e) {
  const t = ({ children: n }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Sm, t;
}
var Tc = "AlertDialog", [_m] = xt(Tc, [
  Sc
]), Ot = Sc(), Nc = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Ot(t);
  return /* @__PURE__ */ d.jsx(vm, { ...r, ...n, modal: !0 });
};
Nc.displayName = Tc;
var Mm = "AlertDialogTrigger", Om = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Ot(n);
    return /* @__PURE__ */ d.jsx(xm, { ...o, ...r, ref: t });
  }
);
Om.displayName = Mm;
var Dm = "AlertDialogPortal", Ac = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Ot(t);
  return /* @__PURE__ */ d.jsx(bm, { ...r, ...n });
};
Ac.displayName = Dm;
var Pm = "AlertDialogOverlay", Ic = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Ot(n);
    return /* @__PURE__ */ d.jsx(ym, { ...o, ...r, ref: t });
  }
);
Ic.displayName = Pm;
var fn = "AlertDialogContent", [Rm, jm] = _m(fn), Tm = /* @__PURE__ */ Em("AlertDialogContent"), Fc = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, a = Ot(n), i = u.useRef(null), s = pe(t, i), c = u.useRef(null);
    return /* @__PURE__ */ d.jsx(
      fm,
      {
        contentName: fn,
        titleName: Lc,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ d.jsx(Rm, { scope: n, cancelRef: c, children: /* @__PURE__ */ d.jsxs(
          wm,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: X(o.onOpenAutoFocus, (l) => {
              l.preventDefault(), c.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (l) => l.preventDefault(),
            onInteractOutside: (l) => l.preventDefault(),
            children: [
              /* @__PURE__ */ d.jsx(Tm, { children: r }),
              /* @__PURE__ */ d.jsx(Am, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
Fc.displayName = fn;
var Lc = "AlertDialogTitle", Wc = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Ot(n);
    return /* @__PURE__ */ d.jsx(Cm, { ...o, ...r, ref: t });
  }
);
Wc.displayName = Lc;
var zc = "AlertDialogDescription", $c = u.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Ot(n);
  return /* @__PURE__ */ d.jsx(km, { ...o, ...r, ref: t });
});
$c.displayName = zc;
var Nm = "AlertDialogAction", Bc = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = Ot(n);
    return /* @__PURE__ */ d.jsx(jc, { ...o, ...r, ref: t });
  }
);
Bc.displayName = Nm;
var Vc = "AlertDialogCancel", Hc = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = jm(Vc, n), a = Ot(n), i = pe(t, o);
    return /* @__PURE__ */ d.jsx(jc, { ...a, ...r, ref: i });
  }
);
Hc.displayName = Vc;
var Am = ({ contentRef: e }) => {
  const t = `\`${fn}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${fn}\` by passing a \`${zc}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${fn}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return u.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, Im = Nc, Fm = Ac, Lm = Ic, Wm = Fc, Ak = Bc, Ik = Hc, zm = Wc, Vi = $c, $m = /* @__PURE__ */ Symbol.for("react.lazy"), Pr = u[" use ".trim().toString()];
function Bm(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Yc(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === $m && "_payload" in e && Bm(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Uc(e) {
  const t = /* @__PURE__ */ Vm(e), n = u.forwardRef((r, o) => {
    let { children: a, ...i } = r;
    Yc(a) && typeof Pr == "function" && (a = Pr(a._payload));
    const s = u.Children.toArray(a), c = s.find(Ym);
    if (c) {
      const l = c.props.children, p = s.map((f) => f === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, p) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Xr = /* @__PURE__ */ Uc("Slot");
// @__NO_SIDE_EFFECTS__
function Vm(e) {
  const t = u.forwardRef((n, r) => {
    let { children: o, ...a } = n;
    if (Yc(o) && typeof Pr == "function" && (o = Pr(o._payload)), u.isValidElement(o)) {
      const i = Gm(o), s = Um(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? bt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Hm = /* @__PURE__ */ Symbol("radix.slottable");
function Ym(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Hm;
}
function Um(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Gm(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var qm = [
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
], Km = qm.reduce((e, t) => {
  const n = /* @__PURE__ */ Uc(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, c = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), Zm = Object.freeze({
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
}), Xm = "VisuallyHidden", Gc = u.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    Km.span,
    {
      ...e,
      ref: t,
      style: { ...Zm, ...e.style }
    }
  )
);
Gc.displayName = Xm;
var Jm = Gc;
function qc(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = qc(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Kc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = qc(e)) && (r && (r += " "), r += t);
  return r;
}
const Qm = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, eh = (e, t) => ({
  classGroupId: e,
  validator: t
}), Zc = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Rr = "-", Hi = [], th = "arbitrary..", nh = (e) => {
  const t = oh(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return rh(i);
      const s = i.split(Rr), c = s[0] === "" && s.length > 1 ? 1 : 0;
      return Xc(s, c, t);
    },
    getConflictingClassGroupIds: (i, s) => {
      if (s) {
        const c = r[i], l = n[i];
        return c ? l ? Qm(l, c) : c : l || Hi;
      }
      return n[i] || Hi;
    }
  };
}, Xc = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], a = n.nextPart.get(o);
  if (a) {
    const l = Xc(e, t + 1, a);
    if (l) return l;
  }
  const i = n.validators;
  if (i === null)
    return;
  const s = t === 0 ? e.join(Rr) : e.slice(t).join(Rr), c = i.length;
  for (let l = 0; l < c; l++) {
    const p = i[l];
    if (p.validator(s))
      return p.classGroupId;
  }
}, rh = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? th + r : void 0;
})(), oh = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return ah(n, t);
}, ah = (e, t) => {
  const n = Zc();
  for (const r in e) {
    const o = e[r];
    za(o, n, r, t);
  }
  return n;
}, za = (e, t, n, r) => {
  const o = e.length;
  for (let a = 0; a < o; a++) {
    const i = e[a];
    ih(i, t, n, r);
  }
}, ih = (e, t, n, r) => {
  if (typeof e == "string") {
    sh(e, t, n);
    return;
  }
  if (typeof e == "function") {
    ch(e, t, n, r);
    return;
  }
  lh(e, t, n, r);
}, sh = (e, t, n) => {
  const r = e === "" ? t : Jc(t, e);
  r.classGroupId = n;
}, ch = (e, t, n, r) => {
  if (dh(e)) {
    za(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(eh(n, e));
}, lh = (e, t, n, r) => {
  const o = Object.entries(e), a = o.length;
  for (let i = 0; i < a; i++) {
    const [s, c] = o[i];
    za(c, Jc(t, s), n, r);
  }
}, Jc = (e, t) => {
  let n = e;
  const r = t.split(Rr), o = r.length;
  for (let a = 0; a < o; a++) {
    const i = r[a];
    let s = n.nextPart.get(i);
    s || (s = Zc(), n.nextPart.set(i, s)), n = s;
  }
  return n;
}, dh = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, uh = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (a, i) => {
    n[a] = i, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(a) {
      let i = n[a];
      if (i !== void 0)
        return i;
      if ((i = r[a]) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      a in n ? n[a] = i : o(a, i);
    }
  };
}, sa = "!", Yi = ":", ph = [], Ui = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), fh = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const a = [];
    let i = 0, s = 0, c = 0, l;
    const p = o.length;
    for (let h = 0; h < p; h++) {
      const v = o[h];
      if (i === 0 && s === 0) {
        if (v === Yi) {
          a.push(o.slice(c, h)), c = h + 1;
          continue;
        }
        if (v === "/") {
          l = h;
          continue;
        }
      }
      v === "[" ? i++ : v === "]" ? i-- : v === "(" ? s++ : v === ")" && s--;
    }
    const f = a.length === 0 ? o : o.slice(c);
    let m = f, g = !1;
    f.endsWith(sa) ? (m = f.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(sa) && (m = f.slice(1), g = !0)
    );
    const x = l && l > c ? l - c : void 0;
    return Ui(a, g, m, x);
  };
  if (t) {
    const o = t + Yi, a = r;
    r = (i) => i.startsWith(o) ? a(i.slice(o.length)) : Ui(ph, !1, i, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (a) => n({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, mh = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let a = 0; a < n.length; a++) {
      const i = n[a], s = i[0] === "[", c = t.has(i);
      s || c ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(i)) : o.push(i);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, hh = (e) => ({
  cache: uh(e.cacheSize),
  parseClassName: fh(e),
  sortModifiers: mh(e),
  ...nh(e)
}), gh = /\s+/, vh = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(gh);
  let c = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const p = s[l], {
      isExternal: f,
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: h
    } = n(p);
    if (f) {
      c = p + (c.length > 0 ? " " + c : c);
      continue;
    }
    let v = !!h, w = r(v ? x.substring(0, h) : x);
    if (!w) {
      if (!v) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (w = r(x), !w) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      v = !1;
    }
    const y = m.length === 0 ? "" : m.length === 1 ? m[0] : a(m).join(":"), C = g ? y + sa : y, S = C + w;
    if (i.indexOf(S) > -1)
      continue;
    i.push(S);
    const b = o(w, v);
    for (let E = 0; E < b.length; ++E) {
      const _ = b[E];
      i.push(C + _);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
}, xh = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Qc(n)) && (o && (o += " "), o += r);
  return o;
}, Qc = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Qc(e[r])) && (n && (n += " "), n += t);
  return n;
}, bh = (e, ...t) => {
  let n, r, o, a;
  const i = (c) => {
    const l = t.reduce((p, f) => f(p), e());
    return n = hh(l), r = n.cache.get, o = n.cache.set, a = s, s(c);
  }, s = (c) => {
    const l = r(c);
    if (l)
      return l;
    const p = vh(c, n);
    return o(c, p), p;
  };
  return a = i, (...c) => a(xh(...c));
}, yh = [], Te = (e) => {
  const t = (n) => n[e] || yh;
  return t.isThemeGetter = !0, t;
}, el = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, tl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, wh = /^\d+\/\d+$/, Ch = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Sh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Eh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, _h = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, an = (e) => wh.test(e), ce = (e) => !!e && !Number.isNaN(Number(e)), Pt = (e) => !!e && Number.isInteger(Number(e)), To = (e) => e.endsWith("%") && ce(e.slice(0, -1)), Ct = (e) => Ch.test(e), Mh = () => !0, Oh = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  kh.test(e) && !Sh.test(e)
), nl = () => !1, Dh = (e) => Eh.test(e), Ph = (e) => _h.test(e), Rh = (e) => !Q(e) && !ee(e), jh = (e) => Cn(e, al, nl), Q = (e) => el.test(e), Ht = (e) => Cn(e, il, Oh), No = (e) => Cn(e, Fh, ce), Gi = (e) => Cn(e, rl, nl), Th = (e) => Cn(e, ol, Ph), gr = (e) => Cn(e, sl, Dh), ee = (e) => tl.test(e), jn = (e) => kn(e, il), Nh = (e) => kn(e, Lh), qi = (e) => kn(e, rl), Ah = (e) => kn(e, al), Ih = (e) => kn(e, ol), vr = (e) => kn(e, sl, !0), Cn = (e, t, n) => {
  const r = el.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, kn = (e, t, n = !1) => {
  const r = tl.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, rl = (e) => e === "position" || e === "percentage", ol = (e) => e === "image" || e === "url", al = (e) => e === "length" || e === "size" || e === "bg-size", il = (e) => e === "length", Fh = (e) => e === "number", Lh = (e) => e === "family-name", sl = (e) => e === "shadow", Wh = () => {
  const e = Te("color"), t = Te("font"), n = Te("text"), r = Te("font-weight"), o = Te("tracking"), a = Te("leading"), i = Te("breakpoint"), s = Te("container"), c = Te("spacing"), l = Te("radius"), p = Te("shadow"), f = Te("inset-shadow"), m = Te("text-shadow"), g = Te("drop-shadow"), x = Te("blur"), h = Te("perspective"), v = Te("aspect"), w = Te("ease"), y = Te("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], b = () => [...S(), ee, Q], E = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", "contain", "none"], O = () => [ee, Q, c], N = () => [an, "full", "auto", ...O()], W = () => [Pt, "none", "subgrid", ee, Q], K = () => ["auto", {
    span: ["full", Pt, ee, Q]
  }, Pt, ee, Q], G = () => [Pt, "auto", ee, Q], H = () => ["auto", "min", "max", "fr", ee, Q], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], B = () => ["auto", ...O()], te = () => [an, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], R = () => [e, ee, Q], A = () => [...S(), qi, Gi, {
    position: [ee, Q]
  }], D = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], k = () => ["auto", "cover", "contain", Ah, jh, {
    size: [ee, Q]
  }], j = () => [To, jn, Ht], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    ee,
    Q
  ], F = () => ["", ce, jn, Ht], q = () => ["solid", "dashed", "dotted", "double"], Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], M = () => [ce, To, qi, Gi], U = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    ee,
    Q
  ], J = () => ["none", ce, ee, Q], z = () => ["none", ce, ee, Q], ae = () => [ce, ee, Q], I = () => [an, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ct],
      breakpoint: [Ct],
      color: [Mh],
      container: [Ct],
      "drop-shadow": [Ct],
      ease: ["in", "out", "in-out"],
      font: [Rh],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ct],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ct],
      shadow: [Ct],
      spacing: ["px", ce],
      text: [Ct],
      "text-shadow": [Ct],
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
        aspect: ["auto", "square", an, Q, ee, v]
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
        columns: [ce, Q, ee, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": C()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": C()
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
        object: b()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
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
        z: [Pt, "auto", ee, Q]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [an, "full", "auto", s, ...O()]
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
        flex: [ce, an, "auto", "initial", "none", Q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ce, ee, Q]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ce, ee, Q]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Pt, "first", "last", "none", ee, Q]
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
        col: K()
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
        row: K()
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
        gap: O()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": O()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": O()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...$(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...$()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": $()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Z()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: O()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: O()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: O()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: O()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: O()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: O()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: O()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: O()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: O()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: B()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": O()
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
        "space-y": O()
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
        size: te()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...te()]
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
          ...te()
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
            screen: [i]
          },
          ...te()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...te()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...te()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...te()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, jn, Ht]
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
        font: [r, ee, No]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", To, Q]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Nh, Q, t]
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
        tracking: [o, ee, Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ce, "none", ee, No]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...O()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ee, Q]
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
        list: ["disc", "decimal", "none", ee, Q]
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
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ce, "from-font", "auto", ee, Ht]
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
        "underline-offset": [ce, "auto", ee, Q]
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
        indent: O()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ee, Q]
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
        content: ["none", ee, Q]
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
        bg: A()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: D()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: k()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Pt, ee, Q],
          radial: ["", ee, Q],
          conic: [Pt, ee, Q]
        }, Ih, Th]
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
        from: j()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: j()
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
        rounded: L()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": L()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": L()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": L()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": L()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": L()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": L()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": L()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": L()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": L()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": L()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": L()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": L()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": L()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": L()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: F()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": F()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": F()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": F()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": F()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": F()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": F()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": F()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": F()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": F()
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
        "divide-y": F()
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
        border: [...q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...q(), "hidden", "none"]
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
        outline: [...q(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ce, ee, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ce, jn, Ht]
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
          vr,
          gr
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
        "inset-shadow": ["none", f, vr, gr]
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
        ring: F()
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
        "ring-offset": [ce, Ht]
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
        "inset-ring": F()
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
        "text-shadow": ["none", m, vr, gr]
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
        opacity: [ce, ee, Q]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Y(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Y()
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
        "mask-linear": [ce]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": M()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": R()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": M()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": R()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": M()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": R()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": M()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": R()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": M()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": R()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": M()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": R()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": M()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": R()
      }],
      "mask-image-radial": [{
        "mask-radial": [ee, Q]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": M()
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
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ce]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": M()
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
        mask: A()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: D()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: k()
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
        mask: ["none", ee, Q]
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
          ee,
          Q
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: U()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ce, ee, Q]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ce, ee, Q]
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
          g,
          vr,
          gr
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
        grayscale: ["", ce, ee, Q]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ce, ee, Q]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ce, ee, Q]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ce, ee, Q]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ce, ee, Q]
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
          ee,
          Q
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": U()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ce, ee, Q]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ce, ee, Q]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ce, ee, Q]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ce, ee, Q]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ce, ee, Q]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ce, ee, Q]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ce, ee, Q]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ce, ee, Q]
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
        "border-spacing": O()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": O()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": O()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ee, Q]
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
        duration: [ce, "initial", ee, Q]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, ee, Q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ce, ee, Q]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, ee, Q]
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
        perspective: [h, ee, Q]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": b()
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
        scale: z()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": z()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": z()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": z()
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
        skew: ae()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ae()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ae()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ee, Q, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: b()
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
        translate: I()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": I()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": I()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": I()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ee, Q]
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
        "scroll-m": O()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": O()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": O()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": O()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": O()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": O()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": O()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": O()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": O()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": O()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": O()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": O()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": O()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": O()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": O()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": O()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": O()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": O()
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
        "will-change": ["auto", "scroll", "contents", "transform", ee, Q]
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
        stroke: [ce, jn, Ht, No]
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
}, zh = /* @__PURE__ */ bh(Wh);
function P(...e) {
  return zh(Kc(e));
}
function Fk({
  open: e,
  onOpenChange: t,
  header: n,
  content: r,
  actions: o,
  className: a
}) {
  return /* @__PURE__ */ d.jsx(Im, { open: e, onOpenChange: t, children: /* @__PURE__ */ d.jsxs(Fm, { children: [
    /* @__PURE__ */ d.jsx(Lm, { className: "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
    /* @__PURE__ */ d.jsxs(
      Wm,
      {
        className: P(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
          a
        ),
        children: [
          /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col space-y-2", children: [
            /* @__PURE__ */ d.jsx(zm, { className: "text-lg font-semibold text-gray-900", children: n }),
            typeof r == "string" ? /* @__PURE__ */ d.jsx(Vi, { className: "text-sm text-gray-600", children: r }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              /* @__PURE__ */ d.jsx(Vi, { asChild: !0, children: /* @__PURE__ */ d.jsx(Jm, { children: /* @__PURE__ */ d.jsx("span", { children: "Confirmation dialog content" }) }) }),
              /* @__PURE__ */ d.jsx("div", { className: "text-sm text-gray-600", children: r })
            ] })
          ] }),
          /* @__PURE__ */ d.jsx("div", { className: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0", children: o })
        ]
      }
    )
  ] }) });
}
const Ki = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Zi = Kc, Jr = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Zi(e, n?.class, n?.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((l) => {
    const p = n?.[l], f = a?.[l];
    if (p === null) return null;
    const m = Ki(p) || Ki(f);
    return o[l][m];
  }), s = n && Object.entries(n).reduce((l, p) => {
    let [f, m] = p;
    return m === void 0 || (l[f] = m), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, p) => {
    let { class: f, className: m, ...g } = p;
    return Object.entries(g).every((x) => {
      let [h, v] = x;
      return Array.isArray(v) ? v.includes({
        ...a,
        ...s
      }[h]) : {
        ...a,
        ...s
      }[h] === v;
    }) ? [
      ...l,
      f,
      m
    ] : l;
  }, []);
  return Zi(e, i, c, n?.class, n?.className);
}, $h = Jr(
  "inline-flex items-center justify-center px-2.5 font-manrope text-xs font-normal gap-2 whitespace-nowrap transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
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
        "success-filled": "bg-turquoise-green-700 hover:bg-turquoise-green-800 focus-visible:bg-turquoise-green-900 text-white disabled:bg-turquoise-green-200",
        "success-outline": "border border-turquoise-green-700 text-turquoise-green-700 bg-transparent hover:bg-turquoise-green-100 hover:border-turquoise-green-800 hover:text-turquoise-green-800 focus-visible:bg-turquoise-green-200 hover:border-turquoise-green-800 hover:text-turquoise-green-800 disabled:text-turquoise-green-100 disabled:border-turquoise-green-100",
        "media-filled": "bg-purple-rain-600 hover:bg-purple-rain-800 focus-visible:bg-purple-rain-900 text-white disabled:bg-purple-rain-200",
        "media-outline": "border border-purple-rain-700 text-purple-rain-700 bg-transparent hover:bg-purple-rain-100 hover:border-purple-rain-800 hover:text-purple-rain-800 focus-visible:bg-purple-rain-200 hover:border-purple-rain-800 hover:text-purple-rain-800 disabled:text-purple-rain-100 disabled:border-purple-rain-100"
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
function Lk({
  className: e,
  variant: t,
  size: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      "data-slot": "badge",
      role: "status",
      className: P($h({ variant: t, size: n, className: e })),
      ...r
    }
  );
}
const Bh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vh = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Xi = (e) => {
  const t = Vh(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, cl = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Hh = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var Yh = {
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
const Uh = Yr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, c) => ra(
    "svg",
    {
      ref: c,
      ...Yh,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: cl("lucide", o),
      ...!a && !Hh(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...i.map(([l, p]) => ra(l, p)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
const Ke = (e, t) => {
  const n = Yr(
    ({ className: r, ...o }, a) => ra(Uh, {
      ref: a,
      iconNode: t,
      className: cl(
        `lucide-${Bh(Xi(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Xi(e), n;
};
const Gh = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], qh = Ke("calendar", Gh);
const Kh = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Qn = Ke("check", Kh);
const Zh = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], $a = Ke("chevron-down", Zh);
const Xh = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Qr = Ke("chevron-right", Xh);
const Jh = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ll = Ke("chevron-left", Jh);
const Qh = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], eg = Ke("chevron-up", Qh);
const tg = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], ng = Ke("clock", tg);
const rg = [
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
], og = Ke("eye-off", rg);
const ag = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ig = Ke("eye", ag);
const sg = [["path", { d: "M5 12h14", key: "1ays0h" }]], cg = Ke("minus", sg);
const lg = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], dg = Ke("trash-2", lg);
const ug = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], dl = Ke("upload", ug);
const pg = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ba = Ke("x", pg);
function Wk({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      "data-slot": "breadcrumb",
      className: P("w-full", e),
      ...t
    }
  );
}
function zk({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: P("flex items-center justify-start gap-2", e),
      ...t
    }
  );
}
function $k({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: P("flex justify-start items-center gap-x-1", e),
      ...t
    }
  );
}
function Bk({
  asChild: e,
  className: t,
  ...n
}) {
  const r = e ? Xr : "a";
  return /* @__PURE__ */ d.jsx(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: P(
        "flex w-fit font-manrope text-sm font-normal leading-4.5 text-gray-200 hover:text-gray-600 hover:underline transition-all",
        t
      ),
      ...n
    }
  );
}
function Vk({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      "aria-current": "page",
      className: P(
        "font-manrope text-sm font-semibold text-blue-hepatica-600 leading-4",
        e
      ),
      ...t
    }
  );
}
function Hk() {
  return /* @__PURE__ */ d.jsx(
    Qr,
    {
      "data-slot": "breadcrumb-separator",
      "aria-hidden": "true",
      className: "size-4 text-gray-300 shrink-0"
    }
  );
}
const ca = Jr(
  "inline-flex w-fit items-center justify-center px-4 font-manrope font-semibold gap-2 whitespace-nowrap transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus:shadow-button",
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
function eo({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  ...o
}) {
  const a = r ? Xr : "button";
  return /* @__PURE__ */ d.jsx(
    a,
    {
      "data-slot": "button",
      className: P(ca({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
function fg(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const mg = {}, Fn = {};
function Gt(e, t) {
  try {
    const r = (mg[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in Fn ? Fn[r] : Ji(r, r.split(":"));
  } catch {
    if (e in Fn) return Fn[e];
    const n = e?.match(hg);
    return n ? Ji(e, n.slice(1)) : NaN;
  }
}
const hg = /([+-]\d\d):?(\d\d)?/;
function Ji(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Fn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class mt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Gt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), ul(this), la(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new mt(...n, t) : new mt(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new mt(+this, t);
  }
  getTimezoneOffset() {
    const t = -Gt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), la(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new mt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Qi = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Qi.test(e)) return;
  const t = e.replace(Qi, "$1UTC");
  mt.prototype[t] && (e.startsWith("get") ? mt.prototype[e] = function() {
    return this.internal[t]();
  } : (mt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), gg(this), +this;
  }, mt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), la(this), +this;
  }));
});
function la(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Gt(e.timeZone, e) * 60));
}
function gg(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), ul(e);
}
function ul(e) {
  const t = Gt(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), i = o - a, s = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  i && s && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + i);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const l = /* @__PURE__ */ new Date(+e);
  l.setUTCSeconds(0);
  const p = o > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, f = Math.round(-(Gt(e.timeZone, e) * 60)) % 60;
  (f || p) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + f), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + f + p));
  const m = Gt(e.timeZone, e), g = m > 0 ? Math.floor(m) : Math.ceil(m), h = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - g, v = g !== n, w = h - c;
  if (v && w) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + w);
    const y = Gt(e.timeZone, e), C = y > 0 ? Math.floor(y) : Math.ceil(y), S = g - C;
    S && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + S), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S));
  }
}
class Fe extends mt {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Fe(...n, t) : new Fe(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), o = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, o] = this.internal.toUTCString().split(" ");
    return `${t?.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${fg(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(t) {
    return new Fe(+this, t);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new Fe(+new Date(t), this.timeZone);
  }
  //#endregion
}
const pl = 6048e5, vg = 864e5, es = /* @__PURE__ */ Symbol.for("constructDateFrom");
function je(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && es in e ? e[es](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ke(e, t) {
  return je(t || e, e);
}
function fl(e, t, n) {
  const r = ke(e, n?.in);
  return isNaN(t) ? je(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function ml(e, t, n) {
  const r = ke(e, n?.in);
  if (isNaN(t)) return je(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = je(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let xg = {};
function er() {
  return xg;
}
function hn(e, t) {
  const n = er(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ke(e, t?.in), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function $n(e, t) {
  return hn(e, { ...t, weekStartsOn: 1 });
}
function hl(e, t) {
  const n = ke(e, t?.in), r = n.getFullYear(), o = je(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = $n(o), i = je(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = $n(i);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function ts(e) {
  const t = ke(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Sn(e, ...t) {
  const n = je.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Bn(e, t) {
  const n = ke(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Va(e, t, n) {
  const [r, o] = Sn(
    n?.in,
    e,
    t
  ), a = Bn(r), i = Bn(o), s = +a - ts(a), c = +i - ts(i);
  return Math.round((s - c) / vg);
}
function bg(e, t) {
  const n = hl(e, t), r = je(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), $n(r);
}
function yg(e, t, n) {
  return fl(e, t * 7, n);
}
function wg(e, t, n) {
  return ml(e, t * 12, n);
}
function Cg(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = je.bind(null, o));
    const a = ke(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), je(r, n || NaN);
}
function kg(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = je.bind(null, o));
    const a = ke(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), je(r, n || NaN);
}
function Sg(e, t, n) {
  const [r, o] = Sn(
    n?.in,
    e,
    t
  );
  return +Bn(r) == +Bn(o);
}
function gl(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Eg(e) {
  return !(!gl(e) && typeof e != "number" || isNaN(+ke(e)));
}
function vl(e, t, n) {
  const [r, o] = Sn(
    n?.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), i = r.getMonth() - o.getMonth();
  return a * 12 + i;
}
function _g(e, t) {
  const n = ke(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function xl(e, t) {
  const [n, r] = Sn(e, t.start, t.end);
  return { start: n, end: r };
}
function Mg(e, t) {
  const { start: n, end: r } = xl(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let s = 1;
  const c = [];
  for (; +i <= a; )
    c.push(je(n, i)), i.setMonth(i.getMonth() + s);
  return o ? c.reverse() : c;
}
function Og(e, t) {
  const n = ke(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Dg(e, t) {
  const n = ke(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function bl(e, t) {
  const n = ke(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Pg(e, t) {
  const { start: n, end: r } = xl(t?.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setMonth(0, 1);
  let s = 1;
  const c = [];
  for (; +i <= a; )
    c.push(je(n, i)), i.setFullYear(i.getFullYear() + s);
  return o ? c.reverse() : c;
}
function yl(e, t) {
  const n = er(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ke(e, t?.in), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function Rg(e, t) {
  return yl(e, { ...t, weekStartsOn: 1 });
}
const jg = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Tg = (e, t, n) => {
  let r;
  const o = jg[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ao(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Ng = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ag = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ig = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Fg = {
  date: Ao({
    formats: Ng,
    defaultWidth: "full"
  }),
  time: Ao({
    formats: Ag,
    defaultWidth: "full"
  }),
  dateTime: Ao({
    formats: Ig,
    defaultWidth: "full"
  })
}, Lg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Wg = (e, t, n, r) => Lg[e];
function Tn(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n?.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n?.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const zg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, $g = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Bg = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Vg = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Hg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Yg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Ug = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Gg = {
  ordinalNumber: Ug,
  era: Tn({
    values: zg,
    defaultWidth: "wide"
  }),
  quarter: Tn({
    values: $g,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Tn({
    values: Bg,
    defaultWidth: "wide"
  }),
  day: Tn({
    values: Vg,
    defaultWidth: "wide"
  }),
  dayPeriod: Tn({
    values: Hg,
    defaultWidth: "wide",
    formattingValues: Yg,
    defaultFormattingWidth: "wide"
  })
};
function Nn(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Kg(s, (f) => f.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      qg(s, (f) => f.test(i))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const p = t.slice(i.length);
    return { value: l, rest: p };
  };
}
function qg(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Kg(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Zg(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const Xg = /^(\d+)(th|st|nd|rd)?/i, Jg = /\d+/i, Qg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ev = {
  any: [/^b/i, /^(a|c)/i]
}, tv = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, nv = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, rv = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ov = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, av = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, iv = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, sv = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, cv = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, lv = {
  ordinalNumber: Zg({
    matchPattern: Xg,
    parsePattern: Jg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Nn({
    matchPatterns: Qg,
    defaultMatchWidth: "wide",
    parsePatterns: ev,
    defaultParseWidth: "any"
  }),
  quarter: Nn({
    matchPatterns: tv,
    defaultMatchWidth: "wide",
    parsePatterns: nv,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Nn({
    matchPatterns: rv,
    defaultMatchWidth: "wide",
    parsePatterns: ov,
    defaultParseWidth: "any"
  }),
  day: Nn({
    matchPatterns: av,
    defaultMatchWidth: "wide",
    parsePatterns: iv,
    defaultParseWidth: "any"
  }),
  dayPeriod: Nn({
    matchPatterns: sv,
    defaultMatchWidth: "any",
    parsePatterns: cv,
    defaultParseWidth: "any"
  })
}, ln = {
  code: "en-US",
  formatDistance: Tg,
  formatLong: Fg,
  formatRelative: Wg,
  localize: Gg,
  match: lv,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function dv(e, t) {
  const n = ke(e, t?.in);
  return Va(n, bl(n)) + 1;
}
function Ha(e, t) {
  const n = ke(e, t?.in), r = +$n(n) - +bg(n);
  return Math.round(r / pl) + 1;
}
function wl(e, t) {
  const n = ke(e, t?.in), r = n.getFullYear(), o = er(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, i = je(t?.in || e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = hn(i, t), c = je(t?.in || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = hn(c, t);
  return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
function uv(e, t) {
  const n = er(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = wl(e, t), a = je(t?.in || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), hn(a, t);
}
function Ya(e, t) {
  const n = ke(e, t?.in), r = +hn(n, t) - +uv(n, t);
  return Math.round(r / pl) + 1;
}
function we(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Rt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return we(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : we(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return we(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return we(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return we(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return we(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return we(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return we(o, t.length);
  }
}, sn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ns = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Rt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = wl(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return we(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : we(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = hl(e);
    return we(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return we(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return we(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return we(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Rt.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return we(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = Ya(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : we(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ha(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : we(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Rt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = dv(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : we(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return we(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return we(a, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return we(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = sn.noon : r === 0 ? o = sn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = sn.evening : r >= 12 ? o = sn.afternoon : r >= 4 ? o = sn.morning : o = sn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Rt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Rt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : we(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : we(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Rt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Rt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Rt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return os(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Yt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Yt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return os(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Yt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Yt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + rs(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Yt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + rs(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Yt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return we(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return we(+e, t.length);
  }
};
function rs(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + we(a, 2);
}
function os(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + we(Math.abs(e) / 60, 2) : Yt(e, t);
}
function Yt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = we(Math.trunc(r / 60), 2), a = we(r % 60, 2);
  return n + o + t + a;
}
const as = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Cl = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, pv = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return as(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", as(r, t)).replace("{{time}}", Cl(o, t));
}, fv = {
  p: Cl,
  P: pv
}, mv = /^D+$/, hv = /^Y+$/, gv = ["D", "DD", "YY", "YYYY"];
function vv(e) {
  return mv.test(e);
}
function xv(e) {
  return hv.test(e);
}
function bv(e, t, n) {
  const r = yv(e, t, n);
  if (console.warn(r), gv.includes(e)) throw new RangeError(r);
}
function yv(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const wv = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Cv = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, kv = /^'([^]*?)'?$/, Sv = /''/g, Ev = /[a-zA-Z]/;
function dn(e, t, n) {
  const r = er(), o = n?.locale ?? r.locale ?? ln, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = ke(e, n?.in);
  if (!Eg(s))
    throw new RangeError("Invalid time value");
  let c = t.match(Cv).map((p) => {
    const f = p[0];
    if (f === "p" || f === "P") {
      const m = fv[f];
      return m(p, o.formatLong);
    }
    return p;
  }).join("").match(wv).map((p) => {
    if (p === "''")
      return { isToken: !1, value: "'" };
    const f = p[0];
    if (f === "'")
      return { isToken: !1, value: _v(p) };
    if (ns[f])
      return { isToken: !0, value: p };
    if (f.match(Ev))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: p };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return c.map((p) => {
    if (!p.isToken) return p.value;
    const f = p.value;
    (!n?.useAdditionalWeekYearTokens && xv(f) || !n?.useAdditionalDayOfYearTokens && vv(f)) && bv(f, t, String(e));
    const m = ns[f[0]];
    return m(s, f, o.localize, l);
  }).join("");
}
function _v(e) {
  const t = e.match(kv);
  return t ? t[1].replace(Sv, "'") : e;
}
function Mv(e, t) {
  const n = ke(e, t?.in), r = n.getFullYear(), o = n.getMonth(), a = je(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Ov(e, t) {
  return ke(e, t?.in).getMonth();
}
function Dv(e, t) {
  return ke(e, t?.in).getFullYear();
}
function Pv(e, t) {
  return +ke(e) > +ke(t);
}
function Rv(e, t) {
  return +ke(e) < +ke(t);
}
function jv(e, t, n) {
  const [r, o] = Sn(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Tv(e, t, n) {
  const [r, o] = Sn(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function Nv(e, t, n) {
  const r = ke(e, n?.in), o = r.getFullYear(), a = r.getDate(), i = je(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const s = Mv(i);
  return r.setMonth(t, Math.min(a, s)), r;
}
function Av(e, t, n) {
  const r = ke(e, n?.in);
  return isNaN(+r) ? je(e, NaN) : (r.setFullYear(t), r);
}
const is = 5, Iv = 4;
function Fv(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, is * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? is : Iv;
}
function kl(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function Lv(e, t) {
  const n = kl(e, t), r = Fv(e, t);
  return t.addDays(n, r * 7 - 1);
}
const Sl = {
  ...ln,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, s) => dn(i, s, { locale: ln, ...n });
      let a = o(e, "PPPP");
      return t.today && (a = `Today, ${a}`), t.selected && (a = `${a}, selected`), a;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (e) => `Week ${e}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => dn(o, a, { locale: ln, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, s) => dn(i, s, { locale: ln, ...n });
      let a = o(e, "PPPP");
      return t?.today && (a = `Today, ${a}`), a;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => dn(o, a, { locale: ln, ...t }), r(e, "cccc");
    }
  }
};
class qe {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.today = () => {
      if (this.overrides?.today)
        return this.overrides.today();
      if (this.options.timeZone)
        return Fe.tz(this.options.timeZone);
      const r = this.options.Date ?? Date;
      return new r();
    }, this.newDate = (r, o, a) => this.overrides?.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new Fe(r, o, a, this.options.timeZone) : new Date(r, o, a), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : fl(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : ml(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : yg(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : wg(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Va(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : vl(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Mg(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Pg(r), a = new Set(o.map((s) => this.getYear(s)));
      if (a.size === o.length)
        return o;
      const i = [];
      return a.forEach((s) => {
        i.push(new Date(s, 0, 1));
      }), i;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Lv(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Rg(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : _g(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : yl(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : Dg(r), this.format = (r, o, a) => {
      const i = this.overrides?.format ? this.overrides.format(r, o, this.options) : dn(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : Ha(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : Ov(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : Dv(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : Ya(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : Pv(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : Rv(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : gl(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : Sg(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : jv(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : Tv(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : Cg(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : kg(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : Nv(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : Av(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : kl(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : Bn(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : $n(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : Og(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : hn(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : bl(r), this.options = { locale: Sl, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = n.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const t = this.options.locale?.code;
    return t && qe.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n?.code;
    if (a && qe.yearFirstLocales.has(a))
      try {
        return new Intl.DateTimeFormat(a, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const i = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, i);
  }
}
qe.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const yt = new qe();
class El {
  constructor(t, n, r = yt) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r, this.isoDate = r.format(t, "yyyy-MM-dd"), this.displayMonthId = r.format(n, "yyyy-MM"), this.dateMonthId = r.format(t, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class Wv {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class zv {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function $v(e) {
  return T.createElement("span", { ...e });
}
function Bv(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return T.createElement(
    "svg",
    { className: r, width: t, height: t, viewBox: "0 0 24 24" },
    n === "up" && T.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
    n === "down" && T.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
    n === "left" && T.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
    n === "right" && T.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
  );
}
function Vv(e) {
  const { day: t, modifiers: n, ...r } = e;
  return T.createElement("td", { ...r });
}
function Hv(e) {
  const { day: t, modifiers: n, ...r } = e, o = T.useRef(null);
  return T.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), T.createElement("button", { ref: o, ...r });
}
var oe;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(oe || (oe = {}));
var De;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(De || (De = {}));
var nt;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(nt || (nt = {}));
var He;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(He || (He = {}));
const _l = Oa(void 0);
function to() {
  const e = Or(_l);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function Yv(e) {
  const { options: t, className: n, ...r } = e, { classNames: o, components: a } = to(), i = [o[oe.Dropdown], n].join(" "), s = t?.find(({ value: c }) => c === r.value);
  return T.createElement(
    "span",
    { "data-disabled": r.disabled, className: o[oe.DropdownRoot] },
    T.createElement(a.Select, { className: i, ...r }, t?.map(({ value: c, label: l, disabled: p }) => T.createElement(a.Option, { key: c, value: c, disabled: p }, l))),
    T.createElement(
      "span",
      { className: o[oe.CaptionLabel], "aria-hidden": !0 },
      s?.label,
      T.createElement(a.Chevron, { orientation: "down", size: 18, className: o[oe.Chevron] })
    )
  );
}
function Uv(e) {
  return T.createElement("div", { ...e });
}
function Gv(e) {
  return T.createElement("div", { ...e });
}
function qv(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return T.createElement("div", { ...r }, e.children);
}
function Kv(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return T.createElement("div", { ...r });
}
function Zv(e) {
  return T.createElement("table", { ...e });
}
function Xv(e) {
  return T.createElement("div", { ...e });
}
function Jv(e) {
  const { components: t } = to();
  return T.createElement(t.Dropdown, { ...e });
}
function Qv(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: i, classNames: s, labels: { labelPrevious: c, labelNext: l } } = to(), p = ue((m) => {
    o && n?.(m);
  }, [o, n]), f = ue((m) => {
    r && t?.(m);
  }, [r, t]);
  return T.createElement(
    "nav",
    { ...a },
    T.createElement(
      i.PreviousMonthButton,
      { type: "button", className: s[oe.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: f },
      T.createElement(i.Chevron, { disabled: r ? void 0 : !0, className: s[oe.Chevron], orientation: "left" })
    ),
    T.createElement(
      i.NextMonthButton,
      { type: "button", className: s[oe.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: p },
      T.createElement(i.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: s[oe.Chevron] })
    )
  );
}
function ex(e) {
  return T.createElement("button", { ...e });
}
function tx(e) {
  return T.createElement("option", { ...e });
}
function nx(e) {
  return T.createElement("button", { ...e });
}
function rx(e) {
  const { rootRef: t, ...n } = e;
  return T.createElement("div", { ...n, ref: t });
}
function ox(e) {
  return T.createElement("select", { ...e });
}
function ax(e) {
  const { week: t, ...n } = e;
  return T.createElement("tr", { ...n });
}
function ix(e) {
  return T.createElement("th", { ...e });
}
function sx(e) {
  return T.createElement(
    "thead",
    { "aria-hidden": !0 },
    T.createElement("tr", { ...e })
  );
}
function cx(e) {
  const { week: t, ...n } = e;
  return T.createElement("th", { ...n });
}
function lx(e) {
  return T.createElement("th", { ...e });
}
function dx(e) {
  return T.createElement("tbody", { ...e });
}
function ux(e) {
  const { components: t } = to();
  return T.createElement(t.Dropdown, { ...e });
}
const px = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CaptionLabel: $v,
  Chevron: Bv,
  Day: Vv,
  DayButton: Hv,
  Dropdown: Yv,
  DropdownNav: Uv,
  Footer: Gv,
  Month: qv,
  MonthCaption: Kv,
  MonthGrid: Zv,
  Months: Xv,
  MonthsDropdown: Jv,
  Nav: Qv,
  NextMonthButton: ex,
  Option: tx,
  PreviousMonthButton: nx,
  Root: rx,
  Select: ox,
  Week: ax,
  WeekNumber: cx,
  WeekNumberHeader: lx,
  Weekday: ix,
  Weekdays: sx,
  Weeks: dx,
  YearsDropdown: ux
}, Symbol.toStringTag, { value: "Module" }));
function St(e, t, n = !1, r = yt) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: i, isSameDay: s } = r;
  return o && a ? (i(a, o) < 0 && ([o, a] = [a, o]), i(t, o) >= (n ? 1 : 0) && i(a, t) >= (n ? 1 : 0)) : !n && a ? s(a, t) : !n && o ? s(o, t) : !1;
}
function Ua(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function no(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Ga(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function qa(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Ml(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Ol(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Et(e, t, n = yt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: i } = n;
  return r.some((s) => {
    if (typeof s == "boolean")
      return s;
    if (n.isDate(s))
      return o(e, s);
    if (Ol(s, n))
      return s.some((c) => o(e, c));
    if (no(s))
      return St(s, e, !1, n);
    if (Ml(s))
      return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(e.getDay()) : s.dayOfWeek === e.getDay();
    if (Ua(s)) {
      const c = a(s.before, e), l = a(s.after, e), p = c > 0, f = l < 0;
      return i(s.before, s.after) ? f && p : p || f;
    }
    return Ga(s) ? a(e, s.after) > 0 : qa(s) ? a(s.before, e) > 0 : typeof s == "function" ? s(e) : !1;
  });
}
function fx(e, t, n, r, o) {
  const { disabled: a, hidden: i, modifiers: s, showOutsideDays: c, broadcastCalendar: l, today: p = o.today() } = t, { isSameDay: f, isSameMonth: m, startOfMonth: g, isBefore: x, endOfMonth: h, isAfter: v } = o, w = n && g(n), y = r && h(r), C = {
    [De.focused]: [],
    [De.outside]: [],
    [De.disabled]: [],
    [De.hidden]: [],
    [De.today]: []
  }, S = {};
  for (const b of e) {
    const { date: E, displayMonth: _ } = b, O = !!(_ && !m(E, _)), N = !!(w && x(E, w)), W = !!(y && v(E, y)), K = !!(a && Et(E, a, o)), G = !!(i && Et(E, i, o)) || N || W || // Broadcast calendar will show outside days as default
    !l && !c && O || l && c === !1 && O, H = f(E, p);
    O && C.outside.push(b), K && C.disabled.push(b), G && C.hidden.push(b), H && C.today.push(b), s && Object.keys(s).forEach(($) => {
      const Z = s?.[$];
      Z && Et(E, Z, o) && (S[$] ? S[$].push(b) : S[$] = [b]);
    });
  }
  return (b) => {
    const E = {
      [De.focused]: !1,
      [De.disabled]: !1,
      [De.hidden]: !1,
      [De.outside]: !1,
      [De.today]: !1
    }, _ = {};
    for (const O in C) {
      const N = C[O];
      E[O] = N.some((W) => W === b);
    }
    for (const O in S)
      _[O] = S[O].some((N) => N === b);
    return {
      ...E,
      // custom modifiers should override all the previous ones
      ..._
    };
  };
}
function mx(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[De[a]] ? o.push(t[De[a]]) : t[nt[a]] && o.push(t[nt[a]]), o), [t[oe.Day]]);
}
function hx(e) {
  return {
    ...px,
    ...e
  };
}
function gx(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function Ka() {
  const e = {};
  for (const t in oe)
    e[oe[t]] = `rdp-${oe[t]}`;
  for (const t in De)
    e[De[t]] = `rdp-${De[t]}`;
  for (const t in nt)
    e[nt[t]] = `rdp-${nt[t]}`;
  for (const t in He)
    e[He[t]] = `rdp-${He[t]}`;
  return e;
}
function vx(e, t, n) {
  return (n ?? new qe(t)).formatMonthYear(e);
}
function xx(e, t, n) {
  return (n ?? new qe(t)).format(e, "d");
}
function bx(e, t = yt) {
  return t.format(e, "LLLL");
}
function yx(e, t, n) {
  return (n ?? new qe(t)).format(e, "cccccc");
}
function wx(e, t = yt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function Cx() {
  return "";
}
function kx(e, t = yt) {
  return t.format(e, "yyyy");
}
const Sx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: vx,
  formatDay: xx,
  formatMonthDropdown: bx,
  formatWeekNumber: wx,
  formatWeekNumberHeader: Cx,
  formatWeekdayName: yx,
  formatYearDropdown: kx
}, Symbol.toStringTag, { value: "Module" }));
function Ex(e) {
  return {
    ...Sx,
    ...e
  };
}
function Dl(e, t, n, r) {
  let o = (r ?? new qe(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
function Pl(e, t, n) {
  return (n ?? new qe(t)).formatMonthYear(e);
}
function Rl(e, t, n, r) {
  let o = (r ?? new qe(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function jl(e) {
  return "Choose the Month";
}
function Tl() {
  return "";
}
const _x = "Go to the Next Month";
function Nl(e, t) {
  return _x;
}
function Al(e) {
  return "Go to the Previous Month";
}
function Il(e, t, n) {
  return (n ?? new qe(t)).format(e, "cccc");
}
function Fl(e, t) {
  return `Week ${e}`;
}
function Ll(e) {
  return "Week Number";
}
function Wl(e) {
  return "Choose the Year";
}
const Mx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelDayButton: Dl,
  labelGrid: Pl,
  labelGridcell: Rl,
  labelMonthDropdown: jl,
  labelNav: Tl,
  labelNext: Nl,
  labelPrevious: Al,
  labelWeekNumber: Fl,
  labelWeekNumberHeader: Ll,
  labelWeekday: Il,
  labelYearDropdown: Wl
}, Symbol.toStringTag, { value: "Module" })), et = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function Ox(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...Mx,
    ...e ?? {},
    labelDayButton: et(Dl, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: et(jl, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: et(Nl, e?.labelNext, n.labelNext),
    labelPrevious: et(Al, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: et(Fl, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: et(Wl, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: et(Pl, e?.labelGrid, n.labelGrid),
    labelGridcell: et(Rl, e?.labelGridcell, n.labelGridcell),
    labelNav: et(Tl, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: et(Ll, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: et(Il, e?.labelWeekday, n.labelWeekday)
  };
}
function Dx(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: i, endOfYear: s, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: i(e),
    end: s(e)
  }).map((m) => {
    const g = r.formatMonthDropdown(m, o), x = l(m), h = t && m < a(t) || n && m > a(n) || !1;
    return { value: x, label: g, disabled: h };
  });
}
function Px(e, t = {}, n = {}) {
  let r = { ...t?.[oe.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function Rx(e, t, n, r) {
  const o = r ?? e.today(), a = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), i = [];
  for (let s = 0; s < 7; s++) {
    const c = e.addDays(a, s);
    i.push(c);
  }
  return i;
}
function jx(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: i, eachYearOfInterval: s, getYear: c } = r, l = a(e), p = i(t), f = s({ start: l, end: p });
  return o && f.reverse(), f.map((m) => {
    const g = n.formatYearDropdown(m, r);
    return {
      value: c(m),
      label: g,
      disabled: !1
    };
  });
}
function Tx(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, o = n ?? r?.options?.weekStartsOn ?? 0, a = (s) => {
    const c = typeof s == "number" || typeof s == "string" ? new Date(s) : s;
    return new Fe(c.getFullYear(), c.getMonth(), c.getDate(), 12, 0, 0, e);
  }, i = (s) => {
    const c = a(s);
    return new Date(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => a(Fe.tz(e)),
    newDate: (s, c, l) => new Fe(s, c, l, 12, 0, 0, e),
    startOfDay: (s) => a(s),
    startOfWeek: (s, c) => {
      const l = a(s), p = c?.weekStartsOn ?? o, f = (l.getDay() - p + 7) % 7;
      return l.setDate(l.getDate() - f), l;
    },
    startOfISOWeek: (s) => {
      const c = a(s), l = (c.getDay() - 1 + 7) % 7;
      return c.setDate(c.getDate() - l), c;
    },
    startOfMonth: (s) => {
      const c = a(s);
      return c.setDate(1), c;
    },
    startOfYear: (s) => {
      const c = a(s);
      return c.setMonth(0, 1), c;
    },
    endOfWeek: (s, c) => {
      const l = a(s), m = (((c?.weekStartsOn ?? o) + 6) % 7 - l.getDay() + 7) % 7;
      return l.setDate(l.getDate() + m), l;
    },
    endOfISOWeek: (s) => {
      const c = a(s), l = (7 - c.getDay()) % 7;
      return c.setDate(c.getDate() + l), c;
    },
    endOfMonth: (s) => {
      const c = a(s);
      return c.setMonth(c.getMonth() + 1, 0), c;
    },
    endOfYear: (s) => {
      const c = a(s);
      return c.setMonth(11, 31), c;
    },
    eachMonthOfInterval: (s) => {
      const c = a(s.start), l = a(s.end), p = [], f = new Fe(c.getFullYear(), c.getMonth(), 1, 12, 0, 0, e), m = l.getFullYear() * 12 + l.getMonth();
      for (; f.getFullYear() * 12 + f.getMonth() <= m; )
        p.push(new Fe(f, e)), f.setMonth(f.getMonth() + 1, 1);
      return p;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (s, c) => {
      const l = a(s);
      return l.setDate(l.getDate() + c), l;
    },
    addWeeks: (s, c) => {
      const l = a(s);
      return l.setDate(l.getDate() + c * 7), l;
    },
    addMonths: (s, c) => {
      const l = a(s);
      return l.setMonth(l.getMonth() + c), l;
    },
    addYears: (s, c) => {
      const l = a(s);
      return l.setFullYear(l.getFullYear() + c), l;
    },
    eachYearOfInterval: (s) => {
      const c = a(s.start), l = a(s.end), p = [], f = new Fe(c.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; f.getFullYear() <= l.getFullYear(); )
        p.push(new Fe(f, e)), f.setFullYear(f.getFullYear() + 1, 0, 1);
      return p;
    },
    getWeek: (s, c) => {
      const l = i(s);
      return Ya(l, {
        weekStartsOn: c?.weekStartsOn ?? o,
        firstWeekContainsDate: c?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (s) => {
      const c = i(s);
      return Ha(c);
    },
    differenceInCalendarDays: (s, c) => {
      const l = i(s), p = i(c);
      return Va(l, p);
    },
    differenceInCalendarMonths: (s, c) => {
      const l = i(s), p = i(c);
      return vl(l, p);
    }
  };
}
const tr = (e) => e instanceof HTMLElement ? e : null, Io = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], Nx = (e) => tr(e.querySelector("[data-animated-month]")), Fo = (e) => tr(e.querySelector("[data-animated-caption]")), Lo = (e) => tr(e.querySelector("[data-animated-weeks]")), Ax = (e) => tr(e.querySelector("[data-animated-nav]")), Ix = (e) => tr(e.querySelector("[data-animated-weekdays]"));
function Fx(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const i = kt(null), s = kt(r), c = kt(!1);
  dc(() => {
    const l = s.current;
    if (s.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const p = a.isSameMonth(r[0].date, l[0].date), f = a.isAfter(r[0].date, l[0].date), m = f ? n[He.caption_after_enter] : n[He.caption_before_enter], g = f ? n[He.weeks_after_enter] : n[He.weeks_before_enter], x = i.current, h = e.current.cloneNode(!0);
    if (h instanceof HTMLElement ? (Io(h).forEach((C) => {
      if (!(C instanceof HTMLElement))
        return;
      const S = Nx(C);
      S && C.contains(S) && C.removeChild(S);
      const b = Fo(C);
      b && b.classList.remove(m);
      const E = Lo(C);
      E && E.classList.remove(g);
    }), i.current = h) : i.current = null, c.current || p || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const v = x instanceof HTMLElement ? Io(x) : [], w = Io(e.current);
    if (w?.every((y) => y instanceof HTMLElement) && v?.every((y) => y instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const y = Ax(e.current);
      y && (y.style.zIndex = "1"), w.forEach((C, S) => {
        const b = v[S];
        if (!b)
          return;
        C.style.position = "relative", C.style.overflow = "hidden";
        const E = Fo(C);
        E && E.classList.add(m);
        const _ = Lo(C);
        _ && _.classList.add(g);
        const O = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), y && (y.style.zIndex = ""), E && E.classList.remove(m), _ && _.classList.remove(g), C.style.position = "", C.style.overflow = "", C.contains(b) && C.removeChild(b);
        };
        b.style.pointerEvents = "none", b.style.position = "absolute", b.style.overflow = "hidden", b.setAttribute("aria-hidden", "true");
        const N = Ix(b);
        N && (N.style.opacity = "0");
        const W = Fo(b);
        W && (W.classList.add(f ? n[He.caption_before_exit] : n[He.caption_after_exit]), W.addEventListener("animationend", O));
        const K = Lo(b);
        K && K.classList.add(f ? n[He.weeks_before_exit] : n[He.weeks_after_exit]), C.insertBefore(b, C.firstChild);
      });
    }
  });
}
function Lx(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: i, fixedWeeks: s, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: p, differenceInCalendarMonths: f, endOfBroadcastWeek: m, endOfISOWeek: g, endOfMonth: x, endOfWeek: h, isAfter: v, startOfBroadcastWeek: w, startOfISOWeek: y, startOfWeek: C } = r, S = c ? w(o, r) : i ? y(o) : C(o), b = c ? m(a) : i ? g(x(a)) : h(x(a)), E = t && (c ? m(t) : i ? g(t) : h(t)), _ = E && v(b, E) ? E : b, O = p(_, S), N = f(a, o) + 1, W = [];
  for (let H = 0; H <= O; H++) {
    const $ = l(S, H);
    W.push($);
  }
  const G = (c ? 35 : 42) * N;
  if (s && W.length < G) {
    const H = G - W.length;
    for (let $ = 0; $ < H; $++) {
      const Z = l(W[W.length - 1], 1);
      W.push(Z);
    }
  }
  return W;
}
function Wx(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, i) => a.concat(i.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function zx(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let i = 0; i < o; i++) {
    const s = r.addMonths(e, i);
    if (t && s > t)
      break;
    a.push(s);
  }
  return a;
}
function ss(e, t, n, r) {
  const { month: o, defaultMonth: a, today: i = r.today(), numberOfMonths: s = 1 } = e;
  let c = o || a || i;
  const { differenceInCalendarMonths: l, addMonths: p, startOfMonth: f } = r;
  if (n && l(n, c) < s - 1) {
    const m = -1 * (s - 1);
    c = p(n, m);
  }
  return t && l(c, t) < 0 && (c = t), f(c);
}
function $x(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: i, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: p, startOfBroadcastWeek: f, startOfISOWeek: m, startOfWeek: g } = r, x = e.reduce((h, v) => {
    const w = n.broadcastCalendar ? f(v, r) : n.ISOWeek ? m(v) : g(v), y = n.broadcastCalendar ? a(v) : n.ISOWeek ? i(s(v)) : c(s(v)), C = t.filter((_) => _ >= w && _ <= y), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && C.length < S) {
      const _ = t.filter((O) => {
        const N = S - C.length;
        return O > y && O <= o(y, N);
      });
      C.push(..._);
    }
    const b = C.reduce((_, O) => {
      const N = n.ISOWeek ? l(O) : p(O), W = _.find((G) => G.weekNumber === N), K = new El(O, v, r);
      return W ? W.days.push(K) : _.push(new zv(N, [K])), _;
    }, []), E = new Wv(v, b);
    return h.push(E), h;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function Bx(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: i, endOfMonth: s, addYears: c, endOfYear: l, today: p } = t, f = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = i(n) : !n && f && (n = o(c(e.today ?? p(), -100))), r ? r = s(r) : !r && f && (r = l(e.today ?? p())), [
    n && a(n),
    r && a(r)
  ];
}
function Vx(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: c } = r, l = o ? a : 1, p = i(e);
  if (!t)
    return s(p, l);
  if (!(c(t, e) < a))
    return s(p, l);
}
function Hx(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: c } = r, l = o ? a ?? 1 : 1, p = i(e);
  if (!t)
    return s(p, -l);
  if (!(c(p, t) <= 0))
    return s(p, -l);
}
function Yx(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function ro(e, t) {
  const [n, r] = Be(e);
  return [t === void 0 ? n : t, r];
}
function Ux(e, t) {
  const [n, r] = Bx(e, t), { startOfMonth: o, endOfMonth: a } = t, i = ss(e, n, r, t), [s, c] = ro(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  un(() => {
    const S = ss(e, n, r, t);
    c(S);
  }, [e.timeZone]);
  const { months: l, weeks: p, days: f, previousMonth: m, nextMonth: g } = Je(() => {
    const S = zx(s, r, { numberOfMonths: e.numberOfMonths }, t), b = Lx(S, e.endMonth ? a(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), E = $x(S, b, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), _ = Yx(E), O = Wx(E), N = Hx(s, n, e, t), W = Vx(s, r, e, t);
    return {
      months: E,
      weeks: _,
      days: O,
      previousMonth: N,
      nextMonth: W
    };
  }, [
    t,
    s.getTime(),
    r?.getTime(),
    n?.getTime(),
    e.disableNavigation,
    e.broadcastCalendar,
    e.endMonth?.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: x, onMonthChange: h } = e, v = (S) => p.some((b) => b.days.some((E) => E.isEqualTo(S))), w = (S) => {
    if (x)
      return;
    let b = o(S);
    n && b < o(n) && (b = o(n)), r && b > o(r) && (b = o(r)), c(b), h?.(b);
  };
  return {
    months: l,
    weeks: p,
    days: f,
    navStart: n,
    navEnd: r,
    previousMonth: m,
    nextMonth: g,
    goToMonth: w,
    goToDay: (S) => {
      v(S) || w(S.date);
    }
  };
}
var ft;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(ft || (ft = {}));
function cs(e) {
  return !e[De.disabled] && !e[De.hidden] && !e[De.outside];
}
function Gx(e, t, n, r) {
  let o, a = -1;
  for (const i of e) {
    const s = t(i);
    cs(s) && (s[De.focused] && a < ft.FocusedModifier ? (o = i, a = ft.FocusedModifier) : r?.isEqualTo(i) && a < ft.LastFocused ? (o = i, a = ft.LastFocused) : n(i.date) && a < ft.Selected ? (o = i, a = ft.Selected) : s[De.today] && a < ft.Today && (o = i, a = ft.Today));
  }
  return o || (o = e.find((i) => cs(t(i)))), o;
}
function qx(e, t, n, r, o, a, i) {
  const { ISOWeek: s, broadcastCalendar: c } = a, { addDays: l, addMonths: p, addWeeks: f, addYears: m, endOfBroadcastWeek: g, endOfISOWeek: x, endOfWeek: h, max: v, min: w, startOfBroadcastWeek: y, startOfISOWeek: C, startOfWeek: S } = i;
  let E = {
    day: l,
    week: f,
    month: p,
    year: m,
    startOfWeek: (_) => c ? y(_, i) : s ? C(_) : S(_),
    endOfWeek: (_) => c ? g(_) : s ? x(_) : h(_)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? E = v([r, E]) : t === "after" && o && (E = w([o, E])), E;
}
function zl(e, t, n, r, o, a, i, s = 0) {
  if (s > 365)
    return;
  const c = qx(e, t, n.date, r, o, a, i), l = !!(a.disabled && Et(c, a.disabled, i)), p = !!(a.hidden && Et(c, a.hidden, i)), f = c, m = new El(c, f, i);
  return !l && !p ? m : zl(e, t, m, r, o, a, i, s + 1);
}
function Kx(e, t, n, r, o) {
  const { autoFocus: a } = e, [i, s] = Be(), c = Gx(t.days, n, r || (() => !1), i), [l, p] = Be(a ? c : void 0);
  return {
    isFocusTarget: (h) => !!c?.isEqualTo(h),
    setFocused: p,
    focused: l,
    blur: () => {
      s(l), p(void 0);
    },
    moveFocus: (h, v) => {
      if (!l)
        return;
      const w = zl(h, v, l, t.navStart, t.navEnd, e, o);
      w && (e.disableNavigation && !t.days.some((C) => C.isEqualTo(w)) || (t.goToDay(w), p(w)));
    }
  };
}
function Zx(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, i] = ro(n, o ? n : void 0), s = o ? n : a, { isSameDay: c } = t, l = (g) => s?.some((x) => c(x, g)) ?? !1, { min: p, max: f } = e;
  return {
    selected: s,
    select: (g, x, h) => {
      let v = [...s ?? []];
      if (l(g)) {
        if (s?.length === p || r && s?.length === 1)
          return;
        v = s?.filter((w) => !c(w, g));
      } else
        s?.length === f ? v = [g] : v = [...v, g];
      return o || i(v), o?.(v, g, x, h), v;
    },
    isSelected: l
  };
}
function Xx(e, t, n = 0, r = 0, o = !1, a = yt) {
  const { from: i, to: s } = t || {}, { isSameDay: c, isAfter: l, isBefore: p } = a;
  let f;
  if (!i && !s)
    f = { from: e, to: n > 0 ? void 0 : e };
  else if (i && !s)
    c(i, e) ? n === 0 ? f = { from: i, to: e } : o ? f = { from: i, to: void 0 } : f = void 0 : p(e, i) ? f = { from: e, to: i } : f = { from: i, to: e };
  else if (i && s)
    if (c(i, e) && c(s, e))
      o ? f = { from: i, to: s } : f = void 0;
    else if (c(i, e))
      f = { from: i, to: n > 0 ? void 0 : e };
    else if (c(s, e))
      f = { from: e, to: n > 0 ? void 0 : e };
    else if (p(e, i))
      f = { from: e, to: s };
    else if (l(e, i))
      f = { from: i, to: e };
    else if (l(e, s))
      f = { from: i, to: e };
    else
      throw new Error("Invalid range");
  if (f?.from && f?.to) {
    const m = a.differenceInCalendarDays(f.to, f.from);
    r > 0 && m > r ? f = { from: e, to: void 0 } : n > 1 && m < n && (f = { from: e, to: void 0 });
  }
  return f;
}
function Jx(e, t, n = yt) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const a = n.differenceInCalendarDays(e.to, e.from), i = Math.min(a, 6);
  for (let s = 0; s <= i; s++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function ls(e, t, n = yt) {
  return St(e, t.from, !1, n) || St(e, t.to, !1, n) || St(t, e.from, !1, n) || St(t, e.to, !1, n);
}
function Qx(e, t, n = yt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((s) => typeof s != "function").some((s) => typeof s == "boolean" ? s : n.isDate(s) ? St(e, s, !1, n) : Ol(s, n) ? s.some((c) => St(e, c, !1, n)) : no(s) ? s.from && s.to ? ls(e, { from: s.from, to: s.to }, n) : !1 : Ml(s) ? Jx(e, s.dayOfWeek, n) : Ua(s) ? n.isAfter(s.before, s.after) ? ls(e, {
    from: n.addDays(s.after, 1),
    to: n.addDays(s.before, -1)
  }, n) : Et(e.from, s, n) || Et(e.to, s, n) : Ga(s) || qa(s) ? Et(e.from, s, n) || Et(e.to, s, n) : !1))
    return !0;
  const i = r.filter((s) => typeof s == "function");
  if (i.length) {
    let s = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let l = 0; l <= c; l++) {
      if (i.some((p) => p(s)))
        return !0;
      s = n.addDays(s, 1);
    }
  }
  return !1;
}
function eb(e, t) {
  const { disabled: n, excludeDisabled: r, resetOnSelect: o, selected: a, required: i, onSelect: s } = e, [c, l] = ro(a, s ? a : void 0), p = s ? a : c;
  return {
    selected: p,
    select: (g, x, h) => {
      const { min: v, max: w } = e;
      let y;
      if (g) {
        const C = p?.from, S = p?.to, b = !!C && !!S, E = !!C && !!S && t.isSameDay(C, S) && t.isSameDay(g, C);
        o && (b || !p?.from) ? !i && E ? y = void 0 : y = { from: g, to: void 0 } : y = Xx(g, p, v, w, i, t);
      }
      return r && n && y?.from && y.to && Qx({ from: y.from, to: y.to }, n, t) && (y.from = g, y.to = void 0), s || l(y), s?.(y, g, x, h), y;
    },
    isSelected: (g) => p && St(p, g, !1, t)
  };
}
function tb(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, i] = ro(n, o ? n : void 0), s = o ? n : a, { isSameDay: c } = t;
  return {
    selected: s,
    select: (f, m, g) => {
      let x = f;
      return !r && s && s && c(f, s) && (x = void 0), o || i(x), o?.(x, f, m, g), x;
    },
    isSelected: (f) => s ? c(s, f) : !1
  };
}
function nb(e, t) {
  const n = tb(e, t), r = Zx(e, t), o = eb(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function Xe(e, t) {
  return e instanceof Fe && e.timeZone === t ? e : new Fe(e, t);
}
function cn(e, t, n) {
  return Xe(e, t);
}
function ds(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? cn(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? cn(r, t) : r) : no(e) ? {
    ...e,
    from: e.from ? Xe(e.from, t) : e.from,
    to: e.to ? Xe(e.to, t) : e.to
  } : Ua(e) ? {
    before: cn(e.before, t),
    after: cn(e.after, t)
  } : Ga(e) ? {
    after: cn(e.after, t)
  } : qa(e) ? {
    before: cn(e.before, t)
  } : e;
}
function Wo(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => ds(r, t)) : ds(e, t));
}
function rb(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = Xe(t.today, n)), t.month && (t.month = Xe(t.month, n)), t.defaultMonth && (t.defaultMonth = Xe(t.defaultMonth, n)), t.startMonth && (t.startMonth = Xe(t.startMonth, n)), t.endMonth && (t.endMonth = Xe(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = Xe(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((se) => Xe(se, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? Xe(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? Xe(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = Wo(t.disabled, n)), t.hidden !== void 0 && (t.hidden = Wo(t.hidden, n)), t.modifiers)) {
    const se = {};
    Object.keys(t.modifiers).forEach((fe) => {
      se[fe] = Wo(t.modifiers?.[fe], n);
    }), t.modifiers = se;
  }
  const { components: r, formatters: o, labels: a, dateLib: i, locale: s, classNames: c } = Je(() => {
    const se = { ...Sl, ...t.locale }, fe = t.broadcastCalendar ? 1 : t.weekStartsOn, de = t.noonSafe && t.timeZone ? Tx(t.timeZone, {
      weekStartsOn: fe,
      locale: se
    }) : void 0, Pe = t.dateLib && de ? { ...de, ...t.dateLib } : t.dateLib ?? de, ge = new qe({
      locale: se,
      weekStartsOn: fe,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, Pe);
    return {
      dateLib: ge,
      components: hx(t.components),
      formatters: Ex(t.formatters),
      labels: Ox(t.labels, ge.options),
      locale: se,
      classNames: { ...Ka(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.noonSafe,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]);
  t.today || (t = { ...t, today: i.today() });
  const { captionLayout: l, mode: p, navLayout: f, numberOfMonths: m = 1, onDayBlur: g, onDayClick: x, onDayFocus: h, onDayKeyDown: v, onDayMouseEnter: w, onDayMouseLeave: y, onNextClick: C, onPrevClick: S, showWeekNumber: b, styles: E } = t, { formatCaption: _, formatDay: O, formatMonthDropdown: N, formatWeekNumber: W, formatWeekNumberHeader: K, formatWeekdayName: G, formatYearDropdown: H } = o, $ = Ux(t, i), { days: Z, months: B, navStart: te, navEnd: R, previousMonth: A, nextMonth: D, goToMonth: k } = $, j = fx(Z, t, te, R, i), { isSelected: L, select: F, selected: q } = nb(t, i) ?? {}, { blur: Y, focused: M, isFocusTarget: U, moveFocus: J, setFocused: z } = Kx(t, $, j, L ?? (() => !1), i), { labelDayButton: ae, labelGridcell: I, labelGrid: ve, labelMonthDropdown: ne, labelNav: ie, labelPrevious: Me, labelNext: _e, labelWeekday: Ne, labelWeekNumber: xe, labelWeekNumberHeader: Re, labelYearDropdown: Dt } = a, ze = Je(() => Rx(i, t.ISOWeek, t.broadcastCalendar, t.today), [i, t.ISOWeek, t.broadcastCalendar, t.today]), Ze = p !== void 0 || x !== void 0, V = ue(() => {
    A && (k(A), S?.(A));
  }, [A, k, S]), re = ue(() => {
    D && (k(D), C?.(D));
  }, [k, D, C]), he = ue((se, fe) => (de) => {
    de.preventDefault(), de.stopPropagation(), z(se), !fe.disabled && (F?.(se.date, fe, de), x?.(se.date, fe, de));
  }, [F, x, z]), Ce = ue((se, fe) => (de) => {
    z(se), h?.(se.date, fe, de);
  }, [h, z]), Ae = ue((se, fe) => (de) => {
    Y(), g?.(se.date, fe, de);
  }, [Y, g]), ct = ue((se, fe) => (de) => {
    const Pe = {
      ArrowLeft: [
        de.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        de.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [de.shiftKey ? "year" : "week", "after"],
      ArrowUp: [de.shiftKey ? "year" : "week", "before"],
      PageUp: [de.shiftKey ? "year" : "month", "before"],
      PageDown: [de.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (Pe[de.key]) {
      de.preventDefault(), de.stopPropagation();
      const [ge, ut] = Pe[de.key];
      J(ge, ut);
    }
    v?.(se.date, fe, de);
  }, [J, v, t.dir]), lt = ue((se, fe) => (de) => {
    w?.(se.date, fe, de);
  }, [w]), $t = ue((se, fe) => (de) => {
    y?.(se.date, fe, de);
  }, [y]), Bt = ue((se, fe) => (de) => {
    const Pe = Number(de.target.value), ge = i.setMonth(i.startOfMonth(se), Pe);
    k(i.addMonths(ge, -fe));
  }, [i, k]), Ve = ue((se, fe) => (de) => {
    const Pe = Number(de.target.value), ge = i.setYear(i.startOfMonth(se), Pe);
    k(i.addMonths(ge, -fe));
  }, [i, k]), { className: dt, style: Vt } = Je(() => ({
    className: [c[oe.Root], t.className].filter(Boolean).join(" "),
    style: { ...E?.[oe.Root], ...t.style }
  }), [c, t.className, t.style, E]), On = gx(t), tn = kt(null);
  Fx(tn, !!t.animate, {
    classNames: c,
    months: B,
    focused: M,
    dateLib: i
  });
  const Dn = {
    dayPickerProps: t,
    selected: q,
    select: F,
    isSelected: L,
    months: B,
    nextMonth: D,
    previousMonth: A,
    goToMonth: k,
    getModifiers: j,
    components: r,
    classNames: c,
    styles: E,
    labels: a,
    formatters: o
  };
  return T.createElement(
    _l.Provider,
    { value: Dn },
    T.createElement(
      r.Root,
      { rootRef: t.animate ? tn : void 0, className: dt, style: Vt, dir: t.dir, id: t.id, lang: t.lang ?? s.code, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...On },
      T.createElement(
        r.Months,
        { className: c[oe.Months], style: E?.[oe.Months] },
        !t.hideNavigation && !f && T.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[oe.Nav], style: E?.[oe.Nav], "aria-label": ie(), onPreviousClick: V, onNextClick: re, previousMonth: A, nextMonth: D }),
        B.map((se, fe) => {
          const de = t.reverseMonths ? B.length - 1 - fe : fe;
          return T.createElement(
            r.Month,
            {
              "data-animated-month": t.animate ? "true" : void 0,
              className: c[oe.Month],
              style: E?.[oe.Month],
              // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
              key: fe,
              displayIndex: fe,
              calendarMonth: se
            },
            f === "around" && !t.hideNavigation && fe === 0 && T.createElement(
              r.PreviousMonthButton,
              { type: "button", className: c[oe.PreviousMonthButton], tabIndex: A ? void 0 : -1, "aria-disabled": A ? void 0 : !0, "aria-label": Me(A), onClick: V, "data-animated-button": t.animate ? "true" : void 0 },
              T.createElement(r.Chevron, { disabled: A ? void 0 : !0, className: c[oe.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
            ),
            T.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: c[oe.MonthCaption], style: E?.[oe.MonthCaption], calendarMonth: se, displayIndex: fe }, l?.startsWith("dropdown") ? T.createElement(
              r.DropdownNav,
              { className: c[oe.Dropdowns], style: E?.[oe.Dropdowns] },
              (() => {
                const Pe = l === "dropdown" || l === "dropdown-months" ? T.createElement(r.MonthsDropdown, { key: "month", className: c[oe.MonthsDropdown], "aria-label": ne(), disabled: !!t.disableNavigation, onChange: Bt(se.date, de), options: Dx(se.date, te, R, o, i), style: E?.[oe.Dropdown], value: i.getMonth(se.date) }) : T.createElement("span", { key: "month" }, N(se.date, i)), ge = l === "dropdown" || l === "dropdown-years" ? T.createElement(r.YearsDropdown, { key: "year", className: c[oe.YearsDropdown], "aria-label": Dt(i.options), disabled: !!t.disableNavigation, onChange: Ve(se.date, de), options: jx(te, R, o, i, !!t.reverseYears), style: E?.[oe.Dropdown], value: i.getYear(se.date) }) : T.createElement("span", { key: "year" }, H(se.date, i));
                return i.getMonthYearOrder() === "year-first" ? [ge, Pe] : [Pe, ge];
              })(),
              T.createElement("span", { role: "status", "aria-live": "polite", style: {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap",
                wordWrap: "normal"
              } }, _(se.date, i.options, i))
            ) : T.createElement(r.CaptionLabel, { className: c[oe.CaptionLabel], role: "status", "aria-live": "polite" }, _(se.date, i.options, i))),
            f === "around" && !t.hideNavigation && fe === m - 1 && T.createElement(
              r.NextMonthButton,
              { type: "button", className: c[oe.NextMonthButton], tabIndex: D ? void 0 : -1, "aria-disabled": D ? void 0 : !0, "aria-label": _e(D), onClick: re, "data-animated-button": t.animate ? "true" : void 0 },
              T.createElement(r.Chevron, { disabled: D ? void 0 : !0, className: c[oe.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
            ),
            fe === m - 1 && f === "after" && !t.hideNavigation && T.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[oe.Nav], style: E?.[oe.Nav], "aria-label": ie(), onPreviousClick: V, onNextClick: re, previousMonth: A, nextMonth: D }),
            T.createElement(
              r.MonthGrid,
              { role: "grid", "aria-multiselectable": p === "multiple" || p === "range", "aria-label": ve(se.date, i.options, i) || void 0, className: c[oe.MonthGrid], style: E?.[oe.MonthGrid] },
              !t.hideWeekdays && T.createElement(
                r.Weekdays,
                { "data-animated-weekdays": t.animate ? "true" : void 0, className: c[oe.Weekdays], style: E?.[oe.Weekdays] },
                b && T.createElement(r.WeekNumberHeader, { "aria-label": Re(i.options), className: c[oe.WeekNumberHeader], style: E?.[oe.WeekNumberHeader], scope: "col" }, K()),
                ze.map((Pe) => T.createElement(r.Weekday, { "aria-label": Ne(Pe, i.options, i), className: c[oe.Weekday], key: String(Pe), style: E?.[oe.Weekday], scope: "col" }, G(Pe, i.options, i)))
              ),
              T.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: c[oe.Weeks], style: E?.[oe.Weeks] }, se.weeks.map((Pe) => T.createElement(
                r.Week,
                { className: c[oe.Week], key: Pe.weekNumber, style: E?.[oe.Week], week: Pe },
                b && T.createElement(r.WeekNumber, { week: Pe, style: E?.[oe.WeekNumber], "aria-label": xe(Pe.weekNumber, {
                  locale: s
                }), className: c[oe.WeekNumber], scope: "row", role: "rowheader" }, W(Pe.weekNumber, i)),
                Pe.days.map((ge) => {
                  const { date: ut } = ge, me = j(ge);
                  if (me[De.focused] = !me.hidden && !!M?.isEqualTo(ge), me[nt.selected] = L?.(ut) || me.selected, no(q)) {
                    const { from: So, to: Eo } = q;
                    me[nt.range_start] = !!(So && Eo && i.isSameDay(ut, So)), me[nt.range_end] = !!(So && Eo && i.isSameDay(ut, Eo)), me[nt.range_middle] = St(q, ut, !0, i);
                  }
                  const Sp = Px(me, E, t.modifiersStyles), Ep = mx(me, c, t.modifiersClassNames), _p = !Ze && !me.hidden ? I(ut, me, i.options, i) : void 0;
                  return T.createElement(r.Day, { key: `${ge.isoDate}_${ge.displayMonthId}`, day: ge, modifiers: me, className: Ep.join(" "), style: Sp, role: "gridcell", "aria-selected": me.selected || void 0, "aria-label": _p, "data-day": ge.isoDate, "data-month": ge.outside ? ge.dateMonthId : void 0, "data-selected": me.selected || void 0, "data-disabled": me.disabled || void 0, "data-hidden": me.hidden || void 0, "data-outside": ge.outside || void 0, "data-focused": me.focused || void 0, "data-today": me.today || void 0 }, !me.hidden && Ze ? T.createElement(r.DayButton, { className: c[oe.DayButton], style: E?.[oe.DayButton], type: "button", day: ge, modifiers: me, disabled: !me.focused && me.disabled || void 0, "aria-disabled": me.focused && me.disabled || void 0, tabIndex: U(ge) ? 0 : -1, "aria-label": ae(ut, me, i.options, i), onClick: he(ge, me), onBlur: Ae(ge, me), onFocus: Ce(ge, me), onKeyDown: ct(ge, me), onMouseEnter: lt(ge, me), onMouseLeave: $t(ge, me) }, O(ut, i.options, i)) : !me.hidden && O(ge.date, i.options, i));
                })
              )))
            )
          );
        })
      ),
      t.footer && T.createElement(r.Footer, { className: c[oe.Footer], style: E?.[oe.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function ob({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: r = "label",
  buttonVariant: o = "gray-ghost",
  locale: a,
  formatters: i,
  components: s,
  ...c
}) {
  const l = Ka();
  return /* @__PURE__ */ d.jsx(
    rb,
    {
      showOutsideDays: n,
      className: P(
        "group/calendar bg-background p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: r,
      locale: a,
      formatters: {
        formatMonthDropdown: (p) => p.toLocaleString(a?.code, { month: "short" }),
        ...i
      },
      classNames: {
        root: P("w-fit", l.root),
        months: P("relative flex flex-col gap-4 md:flex-row", l.months),
        month: P("flex w-full flex-col gap-4", l.month),
        nav: P(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          l.nav
        ),
        button_previous: P(
          ca({ variant: o }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          l.button_previous
        ),
        button_next: P(
          ca({ variant: o }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          l.button_next
        ),
        month_caption: P(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          l.month_caption
        ),
        dropdowns: P(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          l.dropdowns
        ),
        dropdown_root: P(
          "cn-calendar-dropdown-root relative rounded-(--cell-radius)",
          l.dropdown_root
        ),
        dropdown: P("absolute inset-0 bg-popover opacity-0", l.dropdown),
        caption_label: P(
          "font-medium select-none",
          r === "label" ? "cn-calendar-caption text-sm" : "cn-calendar-caption-label flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          l.caption_label
        ),
        month_grid: P("w-full border-collapse", l.month_grid),
        weekdays: P("flex", l.weekdays),
        weekday: P(
          "flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none",
          l.weekday
        ),
        week: P("mt-2 flex w-full", l.week),
        week_number_header: P("w-(--cell-size) select-none", l.week_number_header),
        week_number: P(
          "text-[0.8rem] text-muted-foreground select-none",
          l.week_number
        ),
        day: P(
          "group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)",
          c.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          l.day
        ),
        range_start: P(
          "relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-muted",
          l.range_start
        ),
        range_middle: P("rounded-none", l.range_middle),
        range_end: P(
          "relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-muted",
          l.range_end
        ),
        today: P(
          "rounded-(--cell-radius) bg-muted text-foreground data-[selected=true]:rounded-none",
          l.today
        ),
        outside: P(
          "text-muted-foreground aria-selected:text-muted-foreground",
          l.outside
        ),
        disabled: P("text-muted-foreground opacity-50", l.disabled),
        hidden: P("invisible", l.hidden),
        ...t
      },
      components: {
        Root: ({ className: p, rootRef: f, ...m }) => /* @__PURE__ */ d.jsx("div", { "data-slot": "calendar", ref: f, className: P(p), ...m }),
        Chevron: ({ className: p, orientation: f, ...m }) => f === "left" ? /* @__PURE__ */ d.jsx(ll, { className: P("cn-rtl-flip size-4", p), ...m }) : f === "right" ? /* @__PURE__ */ d.jsx(Qr, { className: P("cn-rtl-flip size-4", p), ...m }) : /* @__PURE__ */ d.jsx($a, { className: P("size-4", p), ...m }),
        DayButton: ({ ...p }) => /* @__PURE__ */ d.jsx(ab, { locale: a, ...p }),
        WeekNumber: ({ children: p, ...f }) => /* @__PURE__ */ d.jsx("td", { ...f, children: /* @__PURE__ */ d.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: p }) }),
        ...s
      },
      ...c
    }
  );
}
function ab({
  className: e,
  day: t,
  modifiers: n,
  locale: r,
  ...o
}) {
  const a = Ka(), i = kt(null);
  return un(() => {
    n.focused && i.current?.focus();
  }, [n.focused]), /* @__PURE__ */ d.jsx(
    eo,
    {
      ref: i,
      variant: "gray-ghost",
      size: "sm",
      "data-day": t.date.toLocaleDateString(r?.code),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: P(
        "relative isolate z-10 flex size-7 aspect-square w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-foreground [&>span]:text-xs [&>span]:opacity-70",
        a.day,
        e
      ),
      ...o
    }
  );
}
function Yk({
  className: e,
  checked: t,
  disabled: n = !1,
  name: r,
  value: o,
  onChange: a,
  ...i
}) {
  const s = `${r ?? "checkbox"}-${String(o ?? "value")}`;
  return /* @__PURE__ */ d.jsxs(
    "label",
    {
      htmlFor: s,
      "data-slot": "checkbox-label",
      className: P(
        "inline-flex size-9.5 items-center justify-center rounded-full",
        "bg-transparent transition-colors duration-200",
        "hover:bg-blue-hepatica-100 focus-within:bg-gray-100",
        {
          "cursor-not-allowed": n
        }
      ),
      children: [
        /* @__PURE__ */ d.jsx(
          "div",
          {
            "data-slot": "checkbox-box",
            "aria-hidden": "true",
            className: P(
              "size-4 rounded-xs transition-all duration-200 flex items-center justify-center",
              {
                "border-2 border-gray-600": !t && !n,
                "bg-blue-hepatica-600": t && !n,
                "border-2 border-gray-200": !t && n,
                "bg-gray-200": t && n
              },
              e
            ),
            children: /* @__PURE__ */ d.jsx(
              Qn,
              {
                className: P("size-3 text-transparent", {
                  "text-white": t
                })
              }
            )
          }
        ),
        /* @__PURE__ */ d.jsx(
          "input",
          {
            id: s,
            type: "checkbox",
            "data-slot": "checkbox",
            className: "sr-only",
            name: r,
            value: o,
            checked: t,
            disabled: n,
            onChange: (c) => a?.(c.target.checked),
            ...i
          }
        )
      ]
    }
  );
}
const ib = ["top", "right", "bottom", "left"], Nt = Math.min, Ye = Math.max, jr = Math.round, xr = Math.floor, gt = (e) => ({
  x: e,
  y: e
}), sb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, cb = {
  start: "end",
  end: "start"
};
function da(e, t, n) {
  return Ye(e, Nt(t, n));
}
function _t(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function En(e) {
  return e.split("-")[1];
}
function Za(e) {
  return e === "x" ? "y" : "x";
}
function Xa(e) {
  return e === "y" ? "height" : "width";
}
const lb = /* @__PURE__ */ new Set(["top", "bottom"]);
function ht(e) {
  return lb.has(Mt(e)) ? "y" : "x";
}
function Ja(e) {
  return Za(ht(e));
}
function db(e, t, n) {
  n === void 0 && (n = !1);
  const r = En(e), o = Ja(e), a = Xa(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Tr(i)), [i, Tr(i)];
}
function ub(e) {
  const t = Tr(e);
  return [ua(e), t, ua(t)];
}
function ua(e) {
  return e.replace(/start|end/g, (t) => cb[t]);
}
const us = ["left", "right"], ps = ["right", "left"], pb = ["top", "bottom"], fb = ["bottom", "top"];
function mb(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ps : us : t ? us : ps;
    case "left":
    case "right":
      return t ? pb : fb;
    default:
      return [];
  }
}
function hb(e, t, n, r) {
  const o = En(e);
  let a = mb(Mt(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(ua)))), a;
}
function Tr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => sb[t]);
}
function gb(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function $l(e) {
  return typeof e != "number" ? gb(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Nr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function fs(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ht(t), i = Ja(t), s = Xa(i), c = Mt(t), l = a === "y", p = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
  let g;
  switch (c) {
    case "top":
      g = {
        x: p,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (En(t)) {
    case "start":
      g[i] -= m * (n && l ? -1 : 1);
      break;
    case "end":
      g[i] += m * (n && l ? -1 : 1);
      break;
  }
  return g;
}
const vb = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: p,
    y: f
  } = fs(l, r, c), m = r, g = {}, x = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: v,
      fn: w
    } = s[h], {
      x: y,
      y: C,
      data: S,
      reset: b
    } = await w({
      x: p,
      y: f,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: g,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = y ?? p, f = C ?? f, g = {
      ...g,
      [v]: {
        ...g[v],
        ...S
      }
    }, b && x <= 50 && (x++, typeof b == "object" && (b.placement && (m = b.placement), b.rects && (l = b.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : b.rects), {
      x: p,
      y: f
    } = fs(l, m, c)), h = -1);
  }
  return {
    x: p,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: g
  };
};
async function Vn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = _t(t, e), x = $l(g), v = s[m ? f === "floating" ? "reference" : "floating" : f], w = Nr(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(v))) == null || n ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: p,
    strategy: c
  })), y = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), S = await (a.isElement == null ? void 0 : a.isElement(C)) ? await (a.getScale == null ? void 0 : a.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = Nr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: C,
    strategy: c
  }) : y);
  return {
    top: (w.top - b.top + x.top) / S.y,
    bottom: (b.bottom - w.bottom + x.bottom) / S.y,
    left: (w.left - b.left + x.left) / S.x,
    right: (b.right - w.right + x.right) / S.x
  };
}
const xb = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: c
    } = t, {
      element: l,
      padding: p = 0
    } = _t(e, t) || {};
    if (l == null)
      return {};
    const f = $l(p), m = {
      x: n,
      y: r
    }, g = Ja(o), x = Xa(g), h = await i.getDimensions(l), v = g === "y", w = v ? "top" : "left", y = v ? "bottom" : "right", C = v ? "clientHeight" : "clientWidth", S = a.reference[x] + a.reference[g] - m[g] - a.floating[x], b = m[g] - a.reference[g], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let _ = E ? E[C] : 0;
    (!_ || !await (i.isElement == null ? void 0 : i.isElement(E))) && (_ = s.floating[C] || a.floating[x]);
    const O = S / 2 - b / 2, N = _ / 2 - h[x] / 2 - 1, W = Nt(f[w], N), K = Nt(f[y], N), G = W, H = _ - h[x] - K, $ = _ / 2 - h[x] / 2 + O, Z = da(G, $, H), B = !c.arrow && En(o) != null && $ !== Z && a.reference[x] / 2 - ($ < G ? W : K) - h[x] / 2 < 0, te = B ? $ < G ? $ - G : $ - H : 0;
    return {
      [g]: m[g] + te,
      data: {
        [g]: Z,
        centerOffset: $ - Z - te,
        ...B && {
          alignmentOffset: te
        }
      },
      reset: B
    };
  }
}), bb = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: l
      } = t, {
        mainAxis: p = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: h = !0,
        ...v
      } = _t(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = Mt(o), y = ht(s), C = Mt(s) === s, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), b = m || (C || !h ? [Tr(s)] : ub(s)), E = x !== "none";
      !m && E && b.push(...hb(s, h, x, S));
      const _ = [s, ...b], O = await Vn(t, v), N = [];
      let W = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (p && N.push(O[w]), f) {
        const $ = db(o, i, S);
        N.push(O[$[0]], O[$[1]]);
      }
      if (W = [...W, {
        placement: o,
        overflows: N
      }], !N.every(($) => $ <= 0)) {
        var K, G;
        const $ = (((K = a.flip) == null ? void 0 : K.index) || 0) + 1, Z = _[$];
        if (Z && (!(f === "alignment" ? y !== ht(Z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        W.every((R) => ht(R.placement) === y ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: W
            },
            reset: {
              placement: Z
            }
          };
        let B = (G = W.filter((te) => te.overflows[0] <= 0).sort((te, R) => te.overflows[1] - R.overflows[1])[0]) == null ? void 0 : G.placement;
        if (!B)
          switch (g) {
            case "bestFit": {
              var H;
              const te = (H = W.filter((R) => {
                if (E) {
                  const A = ht(R.placement);
                  return A === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((A) => A > 0).reduce((A, D) => A + D, 0)]).sort((R, A) => R[1] - A[1])[0]) == null ? void 0 : H[0];
              te && (B = te);
              break;
            }
            case "initialPlacement":
              B = s;
              break;
          }
        if (o !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function ms(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function hs(e) {
  return ib.some((t) => e[t] >= 0);
}
const yb = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = _t(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Vn(t, {
            ...o,
            elementContext: "reference"
          }), i = ms(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: hs(i)
            }
          };
        }
        case "escaped": {
          const a = await Vn(t, {
            ...o,
            altBoundary: !0
          }), i = ms(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: hs(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Bl = /* @__PURE__ */ new Set(["left", "top"]);
async function wb(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Mt(n), s = En(n), c = ht(n) === "y", l = Bl.has(i) ? -1 : 1, p = a && c ? -1 : 1, f = _t(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
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
  return s && typeof x == "number" && (g = s === "end" ? x * -1 : x), c ? {
    x: g * p,
    y: m * l
  } : {
    x: m * l,
    y: g * p
  };
}
const Cb = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, c = await wb(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, kb = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (v) => {
            let {
              x: w,
              y
            } = v;
            return {
              x: w,
              y
            };
          }
        },
        ...c
      } = _t(e, t), l = {
        x: n,
        y: r
      }, p = await Vn(t, c), f = ht(Mt(o)), m = Za(f);
      let g = l[m], x = l[f];
      if (a) {
        const v = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", y = g + p[v], C = g - p[w];
        g = da(y, g, C);
      }
      if (i) {
        const v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", y = x + p[v], C = x - p[w];
        x = da(y, x, C);
      }
      const h = s.fn({
        ...t,
        [m]: g,
        [f]: x
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [m]: a,
            [f]: i
          }
        }
      };
    }
  };
}, Sb = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = _t(e, t), p = {
        x: n,
        y: r
      }, f = ht(o), m = Za(f);
      let g = p[m], x = p[f];
      const h = _t(s, t), v = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const C = m === "y" ? "height" : "width", S = a.reference[m] - a.floating[C] + v.mainAxis, b = a.reference[m] + a.reference[C] - v.mainAxis;
        g < S ? g = S : g > b && (g = b);
      }
      if (l) {
        var w, y;
        const C = m === "y" ? "width" : "height", S = Bl.has(Mt(o)), b = a.reference[f] - a.floating[C] + (S && ((w = i.offset) == null ? void 0 : w[f]) || 0) + (S ? 0 : v.crossAxis), E = a.reference[f] + a.reference[C] + (S ? 0 : ((y = i.offset) == null ? void 0 : y[f]) || 0) - (S ? v.crossAxis : 0);
        x < b ? x = b : x > E && (x = E);
      }
      return {
        [m]: g,
        [f]: x
      };
    }
  };
}, Eb = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: c = () => {
        },
        ...l
      } = _t(e, t), p = await Vn(t, l), f = Mt(o), m = En(o), g = ht(o) === "y", {
        width: x,
        height: h
      } = a.floating;
      let v, w;
      f === "top" || f === "bottom" ? (v = f, w = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = f, v = m === "end" ? "top" : "bottom");
      const y = h - p.top - p.bottom, C = x - p.left - p.right, S = Nt(h - p[v], y), b = Nt(x - p[w], C), E = !t.middlewareData.shift;
      let _ = S, O = b;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = C), (r = t.middlewareData.shift) != null && r.enabled.y && (_ = y), E && !m) {
        const W = Ye(p.left, 0), K = Ye(p.right, 0), G = Ye(p.top, 0), H = Ye(p.bottom, 0);
        g ? O = x - 2 * (W !== 0 || K !== 0 ? W + K : Ye(p.left, p.right)) : _ = h - 2 * (G !== 0 || H !== 0 ? G + H : Ye(p.top, p.bottom));
      }
      await c({
        ...t,
        availableWidth: O,
        availableHeight: _
      });
      const N = await i.getDimensions(s.floating);
      return x !== N.width || h !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function oo() {
  return typeof window < "u";
}
function _n(e) {
  return Vl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ge(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function wt(e) {
  var t;
  return (t = (Vl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vl(e) {
  return oo() ? e instanceof Node || e instanceof Ge(e).Node : !1;
}
function ot(e) {
  return oo() ? e instanceof Element || e instanceof Ge(e).Element : !1;
}
function vt(e) {
  return oo() ? e instanceof HTMLElement || e instanceof Ge(e).HTMLElement : !1;
}
function gs(e) {
  return !oo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ge(e).ShadowRoot;
}
const _b = /* @__PURE__ */ new Set(["inline", "contents"]);
function nr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = at(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !_b.has(o);
}
const Mb = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ob(e) {
  return Mb.has(_n(e));
}
const Db = [":popover-open", ":modal"];
function ao(e) {
  return Db.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Pb = ["transform", "translate", "scale", "rotate", "perspective"], Rb = ["transform", "translate", "scale", "rotate", "perspective", "filter"], jb = ["paint", "layout", "strict", "content"];
function Qa(e) {
  const t = ei(), n = ot(e) ? at(e) : e;
  return Pb.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Rb.some((r) => (n.willChange || "").includes(r)) || jb.some((r) => (n.contain || "").includes(r));
}
function Tb(e) {
  let t = At(e);
  for (; vt(t) && !gn(t); ) {
    if (Qa(t))
      return t;
    if (ao(t))
      return null;
    t = At(t);
  }
  return null;
}
function ei() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Nb = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function gn(e) {
  return Nb.has(_n(e));
}
function at(e) {
  return Ge(e).getComputedStyle(e);
}
function io(e) {
  return ot(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function At(e) {
  if (_n(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    gs(e) && e.host || // Fallback.
    wt(e)
  );
  return gs(t) ? t.host : t;
}
function Hl(e) {
  const t = At(e);
  return gn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vt(t) && nr(t) ? t : Hl(t);
}
function Hn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Hl(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Ge(o);
  if (a) {
    const s = pa(i);
    return t.concat(i, i.visualViewport || [], nr(o) ? o : [], s && n ? Hn(s) : []);
  }
  return t.concat(o, Hn(o, [], n));
}
function pa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Yl(e) {
  const t = at(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = vt(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = jr(n) !== a || jr(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function ti(e) {
  return ot(e) ? e : e.contextElement;
}
function mn(e) {
  const t = ti(e);
  if (!vt(t))
    return gt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Yl(t);
  let i = (a ? jr(n.width) : n.width) / r, s = (a ? jr(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Ab = /* @__PURE__ */ gt(0);
function Ul(e) {
  const t = Ge(e);
  return !ei() || !t.visualViewport ? Ab : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ib(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ge(e) ? !1 : t;
}
function Kt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = ti(e);
  let i = gt(1);
  t && (r ? ot(r) && (i = mn(r)) : i = mn(e));
  const s = Ib(a, n, r) ? Ul(a) : gt(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, p = o.width / i.x, f = o.height / i.y;
  if (a) {
    const m = Ge(a), g = r && ot(r) ? Ge(r) : r;
    let x = m, h = pa(x);
    for (; h && r && g !== x; ) {
      const v = mn(h), w = h.getBoundingClientRect(), y = at(h), C = w.left + (h.clientLeft + parseFloat(y.paddingLeft)) * v.x, S = w.top + (h.clientTop + parseFloat(y.paddingTop)) * v.y;
      c *= v.x, l *= v.y, p *= v.x, f *= v.y, c += C, l += S, x = Ge(h), h = pa(x);
    }
  }
  return Nr({
    width: p,
    height: f,
    x: c,
    y: l
  });
}
function so(e, t) {
  const n = io(e).scrollLeft;
  return t ? t.left + n : Kt(wt(e)).left + n;
}
function Gl(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - so(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Fb(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = wt(r), s = t ? ao(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = gt(1);
  const p = gt(0), f = vt(r);
  if ((f || !f && !a) && ((_n(r) !== "body" || nr(i)) && (c = io(r)), vt(r))) {
    const g = Kt(r);
    l = mn(r), p.x = g.x + r.clientLeft, p.y = g.y + r.clientTop;
  }
  const m = i && !f && !a ? Gl(i, c) : gt(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + p.x + m.x,
    y: n.y * l.y - c.scrollTop * l.y + p.y + m.y
  };
}
function Lb(e) {
  return Array.from(e.getClientRects());
}
function Wb(e) {
  const t = wt(e), n = io(e), r = e.ownerDocument.body, o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + so(e);
  const s = -n.scrollTop;
  return at(r).direction === "rtl" && (i += Ye(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
const vs = 25;
function zb(e, t) {
  const n = Ge(e), r = wt(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const p = ei();
    (!p || p && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  const l = so(r);
  if (l <= 0) {
    const p = r.ownerDocument, f = p.body, m = getComputedStyle(f), g = p.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, x = Math.abs(r.clientWidth - f.clientWidth - g);
    x <= vs && (a -= x);
  } else l <= vs && (a += l);
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
const $b = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Bb(e, t) {
  const n = Kt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = vt(e) ? mn(e) : gt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function xs(e, t, n) {
  let r;
  if (t === "viewport")
    r = zb(e, n);
  else if (t === "document")
    r = Wb(wt(e));
  else if (ot(t))
    r = Bb(t, n);
  else {
    const o = Ul(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Nr(r);
}
function ql(e, t) {
  const n = At(e);
  return n === t || !ot(n) || gn(n) ? !1 : at(n).position === "fixed" || ql(n, t);
}
function Vb(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Hn(e, [], !1).filter((s) => ot(s) && _n(s) !== "body"), o = null;
  const a = at(e).position === "fixed";
  let i = a ? At(e) : e;
  for (; ot(i) && !gn(i); ) {
    const s = at(i), c = Qa(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && $b.has(o.position) || nr(i) && !c && ql(e, i)) ? r = r.filter((p) => p !== i) : o = s, i = At(i);
  }
  return t.set(e, r), r;
}
function Hb(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ao(t) ? [] : Vb(t, this._c) : [].concat(n), r], s = i[0], c = i.reduce((l, p) => {
    const f = xs(t, p, o);
    return l.top = Ye(f.top, l.top), l.right = Nt(f.right, l.right), l.bottom = Nt(f.bottom, l.bottom), l.left = Ye(f.left, l.left), l;
  }, xs(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Yb(e) {
  const {
    width: t,
    height: n
  } = Yl(e);
  return {
    width: t,
    height: n
  };
}
function Ub(e, t, n) {
  const r = vt(t), o = wt(t), a = n === "fixed", i = Kt(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = gt(0);
  function l() {
    c.x = so(o);
  }
  if (r || !r && !a)
    if ((_n(t) !== "body" || nr(o)) && (s = io(t)), r) {
      const g = Kt(t, !0, a, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const p = o && !r && !a ? Gl(o, s) : gt(0), f = i.left + s.scrollLeft - c.x - p.x, m = i.top + s.scrollTop - c.y - p.y;
  return {
    x: f,
    y: m,
    width: i.width,
    height: i.height
  };
}
function zo(e) {
  return at(e).position === "static";
}
function bs(e, t) {
  if (!vt(e) || at(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return wt(e) === n && (n = n.ownerDocument.body), n;
}
function Kl(e, t) {
  const n = Ge(e);
  if (ao(e))
    return n;
  if (!vt(e)) {
    let o = At(e);
    for (; o && !gn(o); ) {
      if (ot(o) && !zo(o))
        return o;
      o = At(o);
    }
    return n;
  }
  let r = bs(e, t);
  for (; r && Ob(r) && zo(r); )
    r = bs(r, t);
  return r && gn(r) && zo(r) && !Qa(r) ? n : r || Tb(e) || n;
}
const Gb = async function(e) {
  const t = this.getOffsetParent || Kl, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Ub(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function qb(e) {
  return at(e).direction === "rtl";
}
const Kb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Fb,
  getDocumentElement: wt,
  getClippingRect: Hb,
  getOffsetParent: Kl,
  getElementRects: Gb,
  getClientRects: Lb,
  getDimensions: Yb,
  getScale: mn,
  isElement: ot,
  isRTL: qb
};
function Zl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Zb(e, t) {
  let n = null, r;
  const o = wt(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: p,
      top: f,
      width: m,
      height: g
    } = l;
    if (s || t(), !m || !g)
      return;
    const x = xr(f), h = xr(o.clientWidth - (p + m)), v = xr(o.clientHeight - (f + g)), w = xr(p), C = {
      rootMargin: -x + "px " + -h + "px " + -v + "px " + -w + "px",
      threshold: Ye(0, Nt(1, c)) || 1
    };
    let S = !0;
    function b(E) {
      const _ = E[0].intersectionRatio;
      if (_ !== c) {
        if (!S)
          return i();
        _ ? i(!1, _) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      _ === 1 && !Zl(l, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      n = new IntersectionObserver(b, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(b, C);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function Xb(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = ti(e), p = o || a ? [...l ? Hn(l) : [], ...Hn(t)] : [];
  p.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const f = l && s ? Zb(l, n) : null;
  let m = -1, g = null;
  i && (g = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === l && g && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var C;
      (C = g) == null || C.observe(t);
    })), n();
  }), l && !c && g.observe(l), g.observe(t));
  let x, h = c ? Kt(e) : null;
  c && v();
  function v() {
    const w = Kt(e);
    h && !Zl(h, w) && n(), h = w, x = requestAnimationFrame(v);
  }
  return n(), () => {
    var w;
    p.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), f?.(), (w = g) == null || w.disconnect(), g = null, c && cancelAnimationFrame(x);
  };
}
const Jb = Cb, Qb = kb, ey = bb, ty = Eb, ny = yb, ys = xb, ry = Sb, oy = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Kb,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return vb(e, t, {
    ...o,
    platform: a
  });
};
var ay = typeof document < "u", iy = function() {
}, _r = ay ? dc : iy;
function Ar(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ar(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Ar(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Xl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ws(e, t) {
  const n = Xl(e);
  return Math.round(t * n) / n;
}
function $o(e) {
  const t = u.useRef(e);
  return _r(() => {
    t.current = e;
  }), t;
}
function sy(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = e, [p, f] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, g] = u.useState(r);
  Ar(m, r) || g(r);
  const [x, h] = u.useState(null), [v, w] = u.useState(null), y = u.useCallback((R) => {
    R !== E.current && (E.current = R, h(R));
  }, []), C = u.useCallback((R) => {
    R !== _.current && (_.current = R, w(R));
  }, []), S = a || x, b = i || v, E = u.useRef(null), _ = u.useRef(null), O = u.useRef(p), N = c != null, W = $o(c), K = $o(o), G = $o(l), H = u.useCallback(() => {
    if (!E.current || !_.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: m
    };
    K.current && (R.platform = K.current), oy(E.current, _.current, R).then((A) => {
      const D = {
        ...A,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: G.current !== !1
      };
      $.current && !Ar(O.current, D) && (O.current = D, Ur.flushSync(() => {
        f(D);
      }));
    });
  }, [m, t, n, K, G]);
  _r(() => {
    l === !1 && O.current.isPositioned && (O.current.isPositioned = !1, f((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [l]);
  const $ = u.useRef(!1);
  _r(() => ($.current = !0, () => {
    $.current = !1;
  }), []), _r(() => {
    if (S && (E.current = S), b && (_.current = b), S && b) {
      if (W.current)
        return W.current(S, b, H);
      H();
    }
  }, [S, b, H, W, N]);
  const Z = u.useMemo(() => ({
    reference: E,
    floating: _,
    setReference: y,
    setFloating: C
  }), [y, C]), B = u.useMemo(() => ({
    reference: S,
    floating: b
  }), [S, b]), te = u.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return R;
    const A = ws(B.floating, p.x), D = ws(B.floating, p.y);
    return s ? {
      ...R,
      transform: "translate(" + A + "px, " + D + "px)",
      ...Xl(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: A,
      top: D
    };
  }, [n, s, B.floating, p.x, p.y]);
  return u.useMemo(() => ({
    ...p,
    update: H,
    refs: Z,
    elements: B,
    floatingStyles: te
  }), [p, H, Z, B, te]);
}
const cy = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? ys({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ys({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, ly = (e, t) => ({
  ...Jb(e),
  options: [e, t]
}), dy = (e, t) => ({
  ...Qb(e),
  options: [e, t]
}), uy = (e, t) => ({
  ...ry(e),
  options: [e, t]
}), py = (e, t) => ({
  ...ey(e),
  options: [e, t]
}), fy = (e, t) => ({
  ...ty(e),
  options: [e, t]
}), my = (e, t) => ({
  ...ny(e),
  options: [e, t]
}), hy = (e, t) => ({
  ...cy(e),
  options: [e, t]
});
var gy = "Arrow", Jl = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ d.jsx(
    le.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ d.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Jl.displayName = gy;
var vy = Jl;
function xy(e) {
  const [t, n] = u.useState(void 0);
  return Le(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          i = l.inlineSize, s = l.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var ni = "Popper", [Ql, It] = xt(ni), [by, ed] = Ql(ni), td = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ d.jsx(by, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
td.displayName = ni;
var nd = "PopperAnchor", rd = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = ed(nd, n), i = u.useRef(null), s = pe(t, i), c = u.useRef(null);
    return u.useEffect(() => {
      const l = c.current;
      c.current = r?.current || i.current, l !== c.current && a.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ d.jsx(le.div, { ...o, ref: s });
  }
);
rd.displayName = nd;
var ri = "PopperContent", [yy, wy] = Ql(ri), od = u.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: p = 0,
      sticky: f = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: x,
      ...h
    } = e, v = ed(ri, n), [w, y] = u.useState(null), C = pe(t, (M) => y(M)), [S, b] = u.useState(null), E = xy(S), _ = E?.width ?? 0, O = E?.height ?? 0, N = r + (a !== "center" ? "-" + a : ""), W = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, K = Array.isArray(l) ? l : [l], G = K.length > 0, H = {
      padding: W,
      boundary: K.filter(ky),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: G
    }, { refs: $, floatingStyles: Z, placement: B, isPositioned: te, middlewareData: R } = sy({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (...M) => Xb(...M, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        ly({ mainAxis: o + O, alignmentAxis: i }),
        c && dy({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? uy() : void 0,
          ...H
        }),
        c && py({ ...H }),
        fy({
          ...H,
          apply: ({ elements: M, rects: U, availableWidth: J, availableHeight: z }) => {
            const { width: ae, height: I } = U.reference, ve = M.floating.style;
            ve.setProperty("--radix-popper-available-width", `${J}px`), ve.setProperty("--radix-popper-available-height", `${z}px`), ve.setProperty("--radix-popper-anchor-width", `${ae}px`), ve.setProperty("--radix-popper-anchor-height", `${I}px`);
          }
        }),
        S && hy({ element: S, padding: s }),
        Sy({ arrowWidth: _, arrowHeight: O }),
        m && my({ strategy: "referenceHidden", ...H })
      ]
    }), [A, D] = sd(B), k = rt(x);
    Le(() => {
      te && k?.();
    }, [te, k]);
    const j = R.arrow?.x, L = R.arrow?.y, F = R.arrow?.centerOffset !== 0, [q, Y] = u.useState();
    return Le(() => {
      w && Y(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Z,
          transform: te ? Z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: q,
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
        children: /* @__PURE__ */ d.jsx(
          yy,
          {
            scope: n,
            placedSide: A,
            onArrowChange: b,
            arrowX: j,
            arrowY: L,
            shouldHideArrow: F,
            children: /* @__PURE__ */ d.jsx(
              le.div,
              {
                "data-side": A,
                "data-align": D,
                ...h,
                ref: C,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: te ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
od.displayName = ri;
var ad = "PopperArrow", Cy = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, id = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = wy(ad, r), i = Cy[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ d.jsx(
          vy,
          {
            ...o,
            ref: n,
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
id.displayName = ad;
function ky(e) {
  return e !== null;
}
var Sy = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, p] = sd(n), f = { start: "0%", center: "50%", end: "100%" }[p], m = (o.arrow?.x ?? 0) + s / 2, g = (o.arrow?.y ?? 0) + c / 2;
    let x = "", h = "";
    return l === "bottom" ? (x = i ? f : `${m}px`, h = `${-c}px`) : l === "top" ? (x = i ? f : `${m}px`, h = `${r.floating.height + c}px`) : l === "right" ? (x = `${-c}px`, h = i ? f : `${g}px`) : l === "left" && (x = `${r.floating.width + c}px`, h = i ? f : `${g}px`), { data: { x, y: h } };
  }
});
function sd(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var rr = td, or = rd, co = od, lo = id;
// @__NO_SIDE_EFFECTS__
function Ey(e) {
  const t = /* @__PURE__ */ _y(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), c = s.find(Oy);
    if (c) {
      const l = c.props.children, p = s.map((f) => f === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, p) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function _y(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = Py(o), s = Dy(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? bt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var My = /* @__PURE__ */ Symbol("radix.slottable");
function Oy(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === My;
}
function Dy(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Py(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var uo = "Popover", [cd] = xt(uo, [
  It
]), ar = It(), [Ry, Ft] = cd(uo), ld = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = ar(t), c = u.useRef(null), [l, p] = u.useState(!1), [f, m] = Tt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: uo
  });
  return /* @__PURE__ */ d.jsx(rr, { ...s, children: /* @__PURE__ */ d.jsx(
    Ry,
    {
      scope: t,
      contentId: Ue(),
      triggerRef: c,
      open: f,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((g) => !g), [m]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: u.useCallback(() => p(!0), []),
      onCustomAnchorRemove: u.useCallback(() => p(!1), []),
      modal: i,
      children: n
    }
  ) });
};
ld.displayName = uo;
var dd = "PopoverAnchor", ud = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ft(dd, n), a = ar(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return u.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ d.jsx(or, { ...a, ...r, ref: t });
  }
);
ud.displayName = dd;
var pd = "PopoverTrigger", fd = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ft(pd, n), a = ar(n), i = pe(t, o.triggerRef), s = /* @__PURE__ */ d.jsx(
      le.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": xd(o.open),
        ...r,
        ref: i,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ d.jsx(or, { asChild: !0, ...a, children: s });
  }
);
fd.displayName = pd;
var oi = "PopoverPortal", [jy, Ty] = cd(oi, {
  forceMount: void 0
}), md = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Ft(oi, t);
  return /* @__PURE__ */ d.jsx(jy, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(it, { present: n || a.open, children: /* @__PURE__ */ d.jsx(Zn, { asChild: !0, container: o, children: r }) }) });
};
md.displayName = oi;
var vn = "PopoverContent", hd = u.forwardRef(
  (e, t) => {
    const n = Ty(vn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Ft(vn, e.__scopePopover);
    return /* @__PURE__ */ d.jsx(it, { present: r || a.open, children: a.modal ? /* @__PURE__ */ d.jsx(Ay, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(Iy, { ...o, ref: t }) });
  }
);
hd.displayName = vn;
var Ny = /* @__PURE__ */ Ey("PopoverContent.RemoveScroll"), Ay = u.forwardRef(
  (e, t) => {
    const n = Ft(vn, e.__scopePopover), r = u.useRef(null), o = pe(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const i = r.current;
      if (i) return Kr(i);
    }, []), /* @__PURE__ */ d.jsx(Xn, { as: Ny, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
      gd,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), a.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: X(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || c;
            a.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: X(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Iy = u.forwardRef(
  (e, t) => {
    const n = Ft(vn, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      gd,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || n.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          n.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), gd = u.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      onFocusOutside: l,
      onInteractOutside: p,
      ...f
    } = e, m = Ft(vn, n), g = ar(n);
    return Gr(), /* @__PURE__ */ d.jsx(
      Kn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ d.jsx(
          wn,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: p,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ d.jsx(
              co,
              {
                "data-state": xd(m.open),
                role: "dialog",
                id: m.contentId,
                ...g,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), vd = "PopoverClose", Fy = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ft(vd, n);
    return /* @__PURE__ */ d.jsx(
      le.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Fy.displayName = vd;
var Ly = "PopoverArrow", Wy = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ar(n);
    return /* @__PURE__ */ d.jsx(lo, { ...o, ...r, ref: t });
  }
);
Wy.displayName = Ly;
function xd(e) {
  return e ? "open" : "closed";
}
var bd = ld, zy = ud, yd = fd, wd = md, Cd = hd;
function $y({ ...e }) {
  return /* @__PURE__ */ d.jsx(bd, { "data-slot": "popover", ...e });
}
function By({ ...e }) {
  return /* @__PURE__ */ d.jsx(yd, { "data-slot": "popover-trigger", ...e });
}
function Vy({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(wd, { children: /* @__PURE__ */ d.jsx(
    Cd,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: P(
        "z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-2xl bg-white p-4 text-popover-foreground shadow-dropdown outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...r
    }
  ) });
}
function Uk({ ...e }) {
  return /* @__PURE__ */ d.jsx(zy, { "data-slot": "popover-anchor", ...e });
}
function Gk({
  value: e,
  onChange: t,
  placeholder: n = "",
  dateFormat: r = "PPP",
  className: o = "",
  disabled: a,
  id: i,
  name: s,
  "aria-invalid": c,
  "aria-label": l,
  "aria-labelledby": p,
  "aria-describedby": f
}) {
  const [m, g] = Be(!1);
  return /* @__PURE__ */ d.jsxs($y, { open: m, onOpenChange: g, children: [
    /* @__PURE__ */ d.jsx(By, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
      "button",
      {
        type: "button",
        "data-slot": "datepicker-trigger",
        "data-empty": !e,
        id: i,
        name: s,
        disabled: a,
        "aria-invalid": c,
        "aria-label": l,
        "aria-labelledby": p,
        "aria-describedby": f,
        className: P(
          "flex w-full h-10 min-w-0 items-center gap-2 border border-gray-200 rounded-sm bg-transparent",
          "px-3 text-base font-manrope outline-none disabled:pointer-events-none",
          "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "hover:border-blue-hepatica-700 focus-visible:border-2",
          "focus-visible:shadow-button focus-visible:ring-0 focus-visible:bg-blue-hepatica-50",
          "focus-visible:border-blue-hepatica-600 data-[empty=true]:text-muted-foreground",
          "aria-invalid:border-bright-red-600 aria-invalid:focus-visible:border-bright-red-600",
          o
        ),
        children: [
          /* @__PURE__ */ d.jsx(qh, { className: "size-4 shrink-0", "aria-hidden": !0 }),
          e ? /* @__PURE__ */ d.jsx("span", { children: dn(e, r) }) : /* @__PURE__ */ d.jsx("span", { className: "text-muted-foreground", children: n })
        ]
      }
    ) }),
    /* @__PURE__ */ d.jsx(Vy, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ d.jsx(
      ob,
      {
        mode: "single",
        selected: e,
        defaultMonth: e,
        onSelect: (x) => {
          t(x), g(!1);
        }
      }
    ) })
  ] });
}
function qk({ ...e }) {
  return /* @__PURE__ */ d.jsx(Pa, { "data-slot": "dialog", ...e });
}
function Kk({ ...e }) {
  return /* @__PURE__ */ d.jsx(Ra, { "data-slot": "dialog-trigger", ...e });
}
function Hy({ ...e }) {
  return /* @__PURE__ */ d.jsx(Ta, { "data-slot": "dialog-portal", ...e });
}
function Zk({ ...e }) {
  return /* @__PURE__ */ d.jsx(Jn, { "data-slot": "dialog-close", ...e });
}
function Yy({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Na,
    {
      "data-slot": "dialog-overlay",
      className: P(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/50 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50",
        e
      ),
      ...t
    }
  );
}
function Xk({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(Hy, { children: [
    /* @__PURE__ */ d.jsx(Yy, {}),
    /* @__PURE__ */ d.jsxs(
      Aa,
      {
        "data-slot": "dialog-content",
        className: P(
          "bg-white data-open:animate-in data-closed:animate-out",
          "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95",
          "data-open:zoom-in-95 grid max-w-[calc(100%-2rem)]",
          "gap-4 rounded-2xl text-sm duration-100 sm:max-w-sm shadow-dialog",
          "fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none",
          e
        ),
        ...r,
        children: [
          t,
          n && /* @__PURE__ */ d.jsx(Jn, { "data-slot": "dialog-close", asChild: !0, children: /* @__PURE__ */ d.jsxs(
            eo,
            {
              variant: "gray-ghost",
              className: "absolute top-6 right-8 size-10 flex items-center justify-center",
              size: "sm",
              children: [
                /* @__PURE__ */ d.jsx(Ba, {}),
                /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function Jk({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: P(
        "min-h-22 px-8 justify-center gap-2 flex flex-col border-b border-b-gray-25",
        e
      ),
      ...t
    }
  );
}
function Qk({
  className: e,
  showCloseButton: t = !1,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: P("px-8 pb-8 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...r,
      children: [
        n,
        t && /* @__PURE__ */ d.jsx(Jn, { asChild: !0, children: /* @__PURE__ */ d.jsx(eo, { variant: "gray-outline", size: "sm", children: "Close" }) })
      ]
    }
  );
}
function eS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Fa,
    {
      "data-slot": "dialog-title",
      className: P("font-manrope text-base leading-5 font-semibold text-gray-900", e),
      ...t
    }
  );
}
function tS({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    La,
    {
      "data-slot": "dialog-description",
      className: P(
        "text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3",
        e
      ),
      ...t
    }
  );
}
// @__NO_SIDE_EFFECTS__
function Cs(e) {
  const t = /* @__PURE__ */ Uy(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), c = s.find(qy);
    if (c) {
      const l = c.props.children, p = s.map((f) => f === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, p) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Uy(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = Zy(o), s = Ky(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? bt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Gy = /* @__PURE__ */ Symbol("radix.slottable");
function qy(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Gy;
}
function Ky(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Zy(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ai(e) {
  const t = e + "CollectionProvider", [n, r] = xt(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (h) => {
    const { scope: v, children: w } = h, y = T.useRef(null), C = T.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(o, { scope: v, itemMap: C, collectionRef: y, children: w });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ Cs(s), l = T.forwardRef(
    (h, v) => {
      const { scope: w, children: y } = h, C = a(s, w), S = pe(v, C.collectionRef);
      return /* @__PURE__ */ d.jsx(c, { ref: S, children: y });
    }
  );
  l.displayName = s;
  const p = e + "CollectionItemSlot", f = "data-radix-collection-item", m = /* @__PURE__ */ Cs(p), g = T.forwardRef(
    (h, v) => {
      const { scope: w, children: y, ...C } = h, S = T.useRef(null), b = pe(v, S), E = a(p, w);
      return T.useEffect(() => (E.itemMap.set(S, { ref: S, ...C }), () => {
        E.itemMap.delete(S);
      })), /* @__PURE__ */ d.jsx(m, { [f]: "", ref: b, children: y });
    }
  );
  g.displayName = p;
  function x(h) {
    const v = a(e + "CollectionConsumer", h);
    return T.useCallback(() => {
      const y = v.collectionRef.current;
      if (!y) return [];
      const C = Array.from(y.querySelectorAll(`[${f}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, _) => C.indexOf(E.ref.current) - C.indexOf(_.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: i, Slot: l, ItemSlot: g },
    x,
    r
  ];
}
var Xy = u.createContext(void 0);
function ii(e) {
  const t = u.useContext(Xy);
  return e || t || "ltr";
}
var Bo = "rovingFocusGroup.onEntryFocus", Jy = { bubbles: !1, cancelable: !0 }, ir = "RovingFocusGroup", [fa, kd, Qy] = ai(ir), [e0, Sd] = xt(
  ir,
  [Qy]
), [t0, n0] = e0(ir), Ed = u.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(fa.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(fa.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(r0, { ...e, ref: t }) }) })
);
Ed.displayName = ir;
var r0 = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: p = !1,
    ...f
  } = e, m = u.useRef(null), g = pe(t, m), x = ii(a), [h, v] = Tt({
    prop: i,
    defaultProp: s ?? null,
    onChange: c,
    caller: ir
  }), [w, y] = u.useState(!1), C = rt(l), S = kd(n), b = u.useRef(!1), [E, _] = u.useState(0);
  return u.useEffect(() => {
    const O = m.current;
    if (O)
      return O.addEventListener(Bo, C), () => O.removeEventListener(Bo, C);
  }, [C]), /* @__PURE__ */ d.jsx(
    t0,
    {
      scope: n,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: h,
      onItemFocus: u.useCallback(
        (O) => v(O),
        [v]
      ),
      onItemShiftTab: u.useCallback(() => y(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => _((O) => O + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => _((O) => O - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        le.div,
        {
          tabIndex: w || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            b.current = !0;
          }),
          onFocus: X(e.onFocus, (O) => {
            const N = !b.current;
            if (O.target === O.currentTarget && N && !w) {
              const W = new CustomEvent(Bo, Jy);
              if (O.currentTarget.dispatchEvent(W), !W.defaultPrevented) {
                const K = S().filter((B) => B.focusable), G = K.find((B) => B.active), H = K.find((B) => B.id === h), Z = [G, H, ...K].filter(
                  Boolean
                ).map((B) => B.ref.current);
                Od(Z, p);
              }
            }
            b.current = !1;
          }),
          onBlur: X(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), _d = "RovingFocusGroupItem", Md = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, c = Ue(), l = a || c, p = n0(_d, n), f = p.currentTabStopId === l, m = kd(n), { onFocusableItemAdd: g, onFocusableItemRemove: x, currentTabStopId: h } = p;
    return u.useEffect(() => {
      if (r)
        return g(), () => x();
    }, [r, g, x]), /* @__PURE__ */ d.jsx(
      fa.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ d.jsx(
          le.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": p.orientation,
            ...s,
            ref: t,
            onMouseDown: X(e.onMouseDown, (v) => {
              r ? p.onItemFocus(l) : v.preventDefault();
            }),
            onFocus: X(e.onFocus, () => p.onItemFocus(l)),
            onKeyDown: X(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const w = i0(v, p.orientation, p.dir);
              if (w !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let C = m().filter((S) => S.focusable).map((S) => S.ref.current);
                if (w === "last") C.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && C.reverse();
                  const S = C.indexOf(v.currentTarget);
                  C = p.loop ? s0(C, S + 1) : C.slice(S + 1);
                }
                setTimeout(() => Od(C));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: f, hasTabStop: h != null }) : i
          }
        )
      }
    );
  }
);
Md.displayName = _d;
var o0 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function a0(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function i0(e, t, n) {
  const r = a0(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return o0[r];
}
function Od(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function s0(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var c0 = Ed, l0 = Md;
// @__NO_SIDE_EFFECTS__
function d0(e) {
  const t = /* @__PURE__ */ u0(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), c = s.find(f0);
    if (c) {
      const l = c.props.children, p = s.map((f) => f === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, p) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function u0(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = h0(o), s = m0(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? bt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var p0 = /* @__PURE__ */ Symbol("radix.slottable");
function f0(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === p0;
}
function m0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function h0(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ma = ["Enter", " "], g0 = ["ArrowDown", "PageUp", "Home"], Dd = ["ArrowUp", "PageDown", "End"], v0 = [...g0, ...Dd], x0 = {
  ltr: [...ma, "ArrowRight"],
  rtl: [...ma, "ArrowLeft"]
}, b0 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, sr = "Menu", [Yn, y0, w0] = ai(sr), [en, Pd] = xt(sr, [
  w0,
  It,
  Sd
]), cr = It(), Rd = Sd(), [jd, Lt] = en(sr), [C0, lr] = en(sr), Td = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = cr(t), [c, l] = u.useState(null), p = u.useRef(!1), f = rt(a), m = ii(o);
  return u.useEffect(() => {
    const g = () => {
      p.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => p.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d.jsx(rr, { ...s, children: /* @__PURE__ */ d.jsx(
    jd,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ d.jsx(
        C0,
        {
          scope: t,
          onClose: u.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: p,
          dir: m,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
Td.displayName = sr;
var k0 = "MenuAnchor", si = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = cr(n);
    return /* @__PURE__ */ d.jsx(or, { ...o, ...r, ref: t });
  }
);
si.displayName = k0;
var ci = "MenuPortal", [S0, Nd] = en(ci, {
  forceMount: void 0
}), Ad = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Lt(ci, t);
  return /* @__PURE__ */ d.jsx(S0, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(it, { present: n || a.open, children: /* @__PURE__ */ d.jsx(Zn, { asChild: !0, container: o, children: r }) }) });
};
Ad.displayName = ci;
var Qe = "MenuContent", [E0, li] = en(Qe), Id = u.forwardRef(
  (e, t) => {
    const n = Nd(Qe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Lt(Qe, e.__scopeMenu), i = lr(Qe, e.__scopeMenu);
    return /* @__PURE__ */ d.jsx(Yn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(it, { present: r || a.open, children: /* @__PURE__ */ d.jsx(Yn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ d.jsx(_0, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(M0, { ...o, ref: t }) }) }) });
  }
), _0 = u.forwardRef(
  (e, t) => {
    const n = Lt(Qe, e.__scopeMenu), r = u.useRef(null), o = pe(t, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Kr(a);
    }, []), /* @__PURE__ */ d.jsx(
      di,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: X(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), M0 = u.forwardRef((e, t) => {
  const n = Lt(Qe, e.__scopeMenu);
  return /* @__PURE__ */ d.jsx(
    di,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), O0 = /* @__PURE__ */ d0("MenuContent.ScrollLock"), di = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: l,
      onPointerDownOutside: p,
      onFocusOutside: f,
      onInteractOutside: m,
      onDismiss: g,
      disableOutsideScroll: x,
      ...h
    } = e, v = Lt(Qe, n), w = lr(Qe, n), y = cr(n), C = Rd(n), S = y0(n), [b, E] = u.useState(null), _ = u.useRef(null), O = pe(t, _, v.onContentChange), N = u.useRef(0), W = u.useRef(""), K = u.useRef(0), G = u.useRef(null), H = u.useRef("right"), $ = u.useRef(0), Z = x ? Xn : u.Fragment, B = x ? { as: O0, allowPinchZoom: !0 } : void 0, te = (A) => {
      const D = W.current + A, k = S().filter((M) => !M.disabled), j = document.activeElement, L = k.find((M) => M.ref.current === j)?.textValue, F = k.map((M) => M.textValue), q = z0(F, D, L), Y = k.find((M) => M.textValue === q)?.ref.current;
      (function M(U) {
        W.current = U, window.clearTimeout(N.current), U !== "" && (N.current = window.setTimeout(() => M(""), 1e3));
      })(D), Y && setTimeout(() => Y.focus());
    };
    u.useEffect(() => () => window.clearTimeout(N.current), []), Gr();
    const R = u.useCallback((A) => H.current === G.current?.side && B0(A, G.current?.area), []);
    return /* @__PURE__ */ d.jsx(
      E0,
      {
        scope: n,
        searchRef: W,
        onItemEnter: u.useCallback(
          (A) => {
            R(A) && A.preventDefault();
          },
          [R]
        ),
        onItemLeave: u.useCallback(
          (A) => {
            R(A) || (_.current?.focus(), E(null));
          },
          [R]
        ),
        onTriggerLeave: u.useCallback(
          (A) => {
            R(A) && A.preventDefault();
          },
          [R]
        ),
        pointerGraceTimerRef: K,
        onPointerGraceIntentChange: u.useCallback((A) => {
          G.current = A;
        }, []),
        children: /* @__PURE__ */ d.jsx(Z, { ...B, children: /* @__PURE__ */ d.jsx(
          Kn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: X(a, (A) => {
              A.preventDefault(), _.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ d.jsx(
              wn,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: m,
                onDismiss: g,
                children: /* @__PURE__ */ d.jsx(
                  c0,
                  {
                    asChild: !0,
                    ...C,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: b,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: X(c, (A) => {
                      w.isUsingKeyboardRef.current || A.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d.jsx(
                      co,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Qd(v.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...y,
                        ...h,
                        ref: O,
                        style: { outline: "none", ...h.style },
                        onKeyDown: X(h.onKeyDown, (A) => {
                          const k = A.target.closest("[data-radix-menu-content]") === A.currentTarget, j = A.ctrlKey || A.altKey || A.metaKey, L = A.key.length === 1;
                          k && (A.key === "Tab" && A.preventDefault(), !j && L && te(A.key));
                          const F = _.current;
                          if (A.target !== F || !v0.includes(A.key)) return;
                          A.preventDefault();
                          const Y = S().filter((M) => !M.disabled).map((M) => M.ref.current);
                          Dd.includes(A.key) && Y.reverse(), L0(Y);
                        }),
                        onBlur: X(e.onBlur, (A) => {
                          A.currentTarget.contains(A.target) || (window.clearTimeout(N.current), W.current = "");
                        }),
                        onPointerMove: X(
                          e.onPointerMove,
                          Un((A) => {
                            const D = A.target, k = $.current !== A.clientX;
                            if (A.currentTarget.contains(D) && k) {
                              const j = A.clientX > $.current ? "right" : "left";
                              H.current = j, $.current = A.clientX;
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
Id.displayName = Qe;
var D0 = "MenuGroup", ui = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(le.div, { role: "group", ...r, ref: t });
  }
);
ui.displayName = D0;
var P0 = "MenuLabel", Fd = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(le.div, { ...r, ref: t });
  }
);
Fd.displayName = P0;
var Ir = "MenuItem", ks = "menu.itemSelect", po = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = u.useRef(null), i = lr(Ir, e.__scopeMenu), s = li(Ir, e.__scopeMenu), c = pe(t, a), l = u.useRef(!1), p = () => {
      const f = a.current;
      if (!n && f) {
        const m = new CustomEvent(ks, { bubbles: !0, cancelable: !0 });
        f.addEventListener(ks, (g) => r?.(g), { once: !0 }), uc(f, m), m.defaultPrevented ? l.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ d.jsx(
      Ld,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: X(e.onClick, p),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), l.current = !0;
        },
        onPointerUp: X(e.onPointerUp, (f) => {
          l.current || f.currentTarget?.click();
        }),
        onKeyDown: X(e.onKeyDown, (f) => {
          const m = s.searchRef.current !== "";
          n || m && f.key === " " || ma.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
po.displayName = Ir;
var Ld = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, i = li(Ir, n), s = Rd(n), c = u.useRef(null), l = pe(t, c), [p, f] = u.useState(!1), [m, g] = u.useState("");
    return u.useEffect(() => {
      const x = c.current;
      x && g((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ d.jsx(
      Yn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ d.jsx(l0, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ d.jsx(
          le.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: l,
            onPointerMove: X(
              e.onPointerMove,
              Un((x) => {
                r ? i.onItemLeave(x) : (i.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: X(
              e.onPointerLeave,
              Un((x) => i.onItemLeave(x))
            ),
            onFocus: X(e.onFocus, () => f(!0)),
            onBlur: X(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), R0 = "MenuCheckboxItem", Wd = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(Hd, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ d.jsx(
      po,
      {
        role: "menuitemcheckbox",
        "aria-checked": Fr(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": mi(n),
        onSelect: X(
          o.onSelect,
          () => r?.(Fr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Wd.displayName = R0;
var zd = "MenuRadioGroup", [j0, T0] = en(
  zd,
  { value: void 0, onValueChange: () => {
  } }
), $d = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = rt(r);
    return /* @__PURE__ */ d.jsx(j0, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ d.jsx(ui, { ...o, ref: t }) });
  }
);
$d.displayName = zd;
var Bd = "MenuRadioItem", Vd = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = T0(Bd, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ d.jsx(Hd, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ d.jsx(
      po,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": mi(a),
        onSelect: X(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Vd.displayName = Bd;
var pi = "MenuItemIndicator", [Hd, N0] = en(
  pi,
  { checked: !1 }
), Yd = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = N0(pi, n);
    return /* @__PURE__ */ d.jsx(
      it,
      {
        present: r || Fr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          le.span,
          {
            ...o,
            ref: t,
            "data-state": mi(a.checked)
          }
        )
      }
    );
  }
);
Yd.displayName = pi;
var A0 = "MenuSeparator", Ud = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(
      le.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Ud.displayName = A0;
var I0 = "MenuArrow", Gd = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = cr(n);
    return /* @__PURE__ */ d.jsx(lo, { ...o, ...r, ref: t });
  }
);
Gd.displayName = I0;
var fi = "MenuSub", [F0, qd] = en(fi), Kd = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Lt(fi, t), i = cr(t), [s, c] = u.useState(null), [l, p] = u.useState(null), f = rt(o);
  return u.useEffect(() => (a.open === !1 && f(!1), () => f(!1)), [a.open, f]), /* @__PURE__ */ d.jsx(rr, { ...i, children: /* @__PURE__ */ d.jsx(
    jd,
    {
      scope: t,
      open: r,
      onOpenChange: f,
      content: l,
      onContentChange: p,
      children: /* @__PURE__ */ d.jsx(
        F0,
        {
          scope: t,
          contentId: Ue(),
          triggerId: Ue(),
          trigger: s,
          onTriggerChange: c,
          children: n
        }
      )
    }
  ) });
};
Kd.displayName = fi;
var Ln = "MenuSubTrigger", Zd = u.forwardRef(
  (e, t) => {
    const n = Lt(Ln, e.__scopeMenu), r = lr(Ln, e.__scopeMenu), o = qd(Ln, e.__scopeMenu), a = li(Ln, e.__scopeMenu), i = u.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, p = u.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return u.useEffect(() => p, [p]), u.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [s, c]), /* @__PURE__ */ d.jsx(si, { asChild: !0, ...l, children: /* @__PURE__ */ d.jsx(
      Ld,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Qd(n.open),
        ...e,
        ref: bt(t, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: X(
          e.onPointerMove,
          Un((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: X(
          e.onPointerLeave,
          Un((f) => {
            p();
            const m = n.content?.getBoundingClientRect();
            if (m) {
              const g = n.content?.dataset.side, x = g === "right", h = x ? -5 : 5, v = m[x ? "left" : "right"], w = m[x ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + h, y: f.clientY },
                  { x: v, y: m.top },
                  { x: w, y: m.top },
                  { x: w, y: m.bottom },
                  { x: v, y: m.bottom }
                ],
                side: g
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(f), f.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: X(e.onKeyDown, (f) => {
          const m = a.searchRef.current !== "";
          e.disabled || m && f.key === " " || x0[r.dir].includes(f.key) && (n.onOpenChange(!0), n.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Zd.displayName = Ln;
var Xd = "MenuSubContent", Jd = u.forwardRef(
  (e, t) => {
    const n = Nd(Qe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Lt(Qe, e.__scopeMenu), i = lr(Qe, e.__scopeMenu), s = qd(Xd, e.__scopeMenu), c = u.useRef(null), l = pe(t, c);
    return /* @__PURE__ */ d.jsx(Yn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(it, { present: r || a.open, children: /* @__PURE__ */ d.jsx(Yn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(
      di,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: l,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (p) => {
          i.isUsingKeyboardRef.current && c.current?.focus(), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: X(e.onFocusOutside, (p) => {
          p.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: X(e.onEscapeKeyDown, (p) => {
          i.onClose(), p.preventDefault();
        }),
        onKeyDown: X(e.onKeyDown, (p) => {
          const f = p.currentTarget.contains(p.target), m = b0[i.dir].includes(p.key);
          f && m && (a.onOpenChange(!1), s.trigger?.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
Jd.displayName = Xd;
function Qd(e) {
  return e ? "open" : "closed";
}
function Fr(e) {
  return e === "indeterminate";
}
function mi(e) {
  return Fr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function L0(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function W0(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function z0(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = W0(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== n));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function $0(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], l = s.x, p = s.y, f = c.x, m = c.y;
    p > r != m > r && n < (f - l) * (r - p) / (m - p) + l && (o = !o);
  }
  return o;
}
function B0(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return $0(n, t);
}
function Un(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var V0 = Td, H0 = si, Y0 = Ad, U0 = Id, G0 = ui, q0 = Fd, K0 = po, Z0 = Wd, X0 = $d, J0 = Vd, Q0 = Yd, ew = Ud, tw = Gd, nw = Kd, rw = Zd, ow = Jd, fo = "DropdownMenu", [aw] = xt(
  fo,
  [Pd]
), We = Pd(), [iw, eu] = aw(fo), hi = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, c = We(t), l = u.useRef(null), [p, f] = Tt({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: fo
  });
  return /* @__PURE__ */ d.jsx(
    iw,
    {
      scope: t,
      triggerId: Ue(),
      triggerRef: l,
      contentId: Ue(),
      open: p,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: /* @__PURE__ */ d.jsx(V0, { ...c, open: p, onOpenChange: f, dir: r, modal: s, children: n })
    }
  );
};
hi.displayName = fo;
var tu = "DropdownMenuTrigger", gi = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = eu(tu, n), i = We(n);
    return /* @__PURE__ */ d.jsx(H0, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
      le.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: bt(t, a.triggerRef),
        onPointerDown: X(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: X(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
gi.displayName = tu;
var sw = "DropdownMenuPortal", mo = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = We(t);
  return /* @__PURE__ */ d.jsx(Y0, { ...r, ...n });
};
mo.displayName = sw;
var nu = "DropdownMenuContent", vi = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = eu(nu, n), a = We(n), i = u.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      U0,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (s) => {
          i.current || o.triggerRef.current?.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: X(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, p = c.button === 2 || l;
          (!o.modal || p) && (i.current = !0);
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
vi.displayName = nu;
var cw = "DropdownMenuGroup", ru = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = We(n);
    return /* @__PURE__ */ d.jsx(G0, { ...o, ...r, ref: t });
  }
);
ru.displayName = cw;
var lw = "DropdownMenuLabel", ou = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = We(n);
    return /* @__PURE__ */ d.jsx(q0, { ...o, ...r, ref: t });
  }
);
ou.displayName = lw;
var dw = "DropdownMenuItem", xi = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = We(n);
    return /* @__PURE__ */ d.jsx(K0, { ...o, ...r, ref: t });
  }
);
xi.displayName = dw;
var uw = "DropdownMenuCheckboxItem", au = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = We(n);
  return /* @__PURE__ */ d.jsx(Z0, { ...o, ...r, ref: t });
});
au.displayName = uw;
var pw = "DropdownMenuRadioGroup", iu = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = We(n);
  return /* @__PURE__ */ d.jsx(X0, { ...o, ...r, ref: t });
});
iu.displayName = pw;
var fw = "DropdownMenuRadioItem", su = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = We(n);
  return /* @__PURE__ */ d.jsx(J0, { ...o, ...r, ref: t });
});
su.displayName = fw;
var mw = "DropdownMenuItemIndicator", bi = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = We(n);
  return /* @__PURE__ */ d.jsx(Q0, { ...o, ...r, ref: t });
});
bi.displayName = mw;
var hw = "DropdownMenuSeparator", cu = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = We(n);
  return /* @__PURE__ */ d.jsx(ew, { ...o, ...r, ref: t });
});
cu.displayName = hw;
var gw = "DropdownMenuArrow", vw = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = We(n);
    return /* @__PURE__ */ d.jsx(tw, { ...o, ...r, ref: t });
  }
);
vw.displayName = gw;
var xw = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = We(t), [s, c] = Tt({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ d.jsx(nw, { ...i, open: s, onOpenChange: c, children: n });
}, bw = "DropdownMenuSubTrigger", lu = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = We(n);
  return /* @__PURE__ */ d.jsx(rw, { ...o, ...r, ref: t });
});
lu.displayName = bw;
var yw = "DropdownMenuSubContent", du = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = We(n);
  return /* @__PURE__ */ d.jsx(
    ow,
    {
      ...o,
      ...r,
      ref: t,
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
du.displayName = yw;
var ww = hi, Cw = gi, kw = mo, Sw = vi, Ew = xi;
function nS({ ...e }) {
  return /* @__PURE__ */ d.jsx(hi, { "data-slot": "dropdown-menu", ...e });
}
function rS({ ...e }) {
  return /* @__PURE__ */ d.jsx(mo, { "data-slot": "dropdown-menu-portal", ...e });
}
function oS({ ...e }) {
  return /* @__PURE__ */ d.jsx(gi, { "data-slot": "dropdown-menu-trigger", ...e });
}
function aS({
  className: e,
  align: t = "start",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(mo, { children: /* @__PURE__ */ d.jsx(
    vi,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: n,
      align: t,
      className: P(
        "z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-2xl bg-white p-1 text-popover-foreground shadow-dropdown duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...r
    }
  ) });
}
function iS({ ...e }) {
  return /* @__PURE__ */ d.jsx(ru, { "data-slot": "dropdown-menu-group", ...e });
}
function sS({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    xi,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: P(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        e
      ),
      ...r
    }
  );
}
function cS({
  className: e,
  children: t,
  checked: n,
  inset: r,
  ...o
}) {
  return /* @__PURE__ */ d.jsxs(
    au,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      "data-inset": r,
      className: P(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...o,
      children: [
        /* @__PURE__ */ d.jsx(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-checkbox-item-indicator",
            children: /* @__PURE__ */ d.jsx(bi, { children: /* @__PURE__ */ d.jsx(Qn, {}) })
          }
        ),
        t
      ]
    }
  );
}
function lS({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(iu, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function dS({
  className: e,
  children: t,
  inset: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    su,
    {
      "data-slot": "dropdown-menu-radio-item",
      "data-inset": n,
      className: P(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-radio-item-indicator",
            children: /* @__PURE__ */ d.jsx(bi, { children: /* @__PURE__ */ d.jsx(Qn, {}) })
          }
        ),
        t
      ]
    }
  );
}
function uS({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    ou,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: P(
        "px-7 py-4 text-base leading-5 font-manrope font-semibold text-gray-900 data-inset:pl-7",
        e
      ),
      ...n
    }
  );
}
function pS({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    cu,
    {
      "data-slot": "dropdown-menu-separator",
      className: P("-mx-1 my-1 h-px bg-gray-50", e),
      ...t
    }
  );
}
function fS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: P(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        e
      ),
      ...t
    }
  );
}
function mS({ ...e }) {
  return /* @__PURE__ */ d.jsx(xw, { "data-slot": "dropdown-menu-sub", ...e });
}
function hS({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    lu,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: P(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ d.jsx(Qr, { className: "cn-rtl-flip ml-auto" })
      ]
    }
  );
}
function gS({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    du,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: P(
        "z-50 min-w-24 origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...t
    }
  );
}
var _w = (e) => e.type === "checkbox", Wn = (e) => e instanceof Date, yi = (e) => e == null;
const uu = (e) => typeof e == "object";
var Zt = (e) => !yi(e) && !Array.isArray(e) && uu(e) && !Wn(e), Mw = (e) => Zt(e) && e.target ? _w(e.target) ? e.target.checked : e.target.value : e, Ow = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Dw = (e, t) => e.has(Ow(t)), Pw = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Zt(t) && t.hasOwnProperty("isPrototypeOf");
}, Rw = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function pu(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (!(Rw && (e instanceof Blob || r)) && (n || Zt(e)))
    if (t = n ? [] : Object.create(Object.getPrototypeOf(e)), !n && !Pw(e))
      t = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (t[o] = pu(e[o]));
  else
    return e;
  return t;
}
var fu = (e) => /^\w*$/.test(e), ha = (e) => e === void 0, jw = (e) => Array.isArray(e) ? e.filter(Boolean) : [], mu = (e) => jw(e.replace(/["|']|\]/g, "").split(/\.|\[/)), $e = (e, t, n) => {
  if (!t || !Zt(e))
    return n;
  const r = (fu(t) ? [t] : mu(t)).reduce((o, a) => yi(o) ? o : o[a], e);
  return ha(r) || r === e ? ha(e[t]) ? n : e[t] : r;
}, Vo = (e) => typeof e == "boolean", Ss = (e, t, n) => {
  let r = -1;
  const o = fu(t) ? [t] : mu(t), a = o.length, i = a - 1;
  for (; ++r < a; ) {
    const s = o[r];
    let c = n;
    if (r !== i) {
      const l = e[s];
      c = Zt(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = c, e = e[s];
  }
};
const Es = {
  BLUR: "blur",
  CHANGE: "change"
}, _s = {
  all: "all"
}, wi = T.createContext(null);
wi.displayName = "HookFormContext";
const ho = () => T.useContext(wi), Tw = (e) => {
  const { children: t, ...n } = e;
  return T.createElement(wi.Provider, { value: n }, t);
};
var Nw = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const i = a;
        return t._proxyFormState[i] !== _s.all && (t._proxyFormState[i] = !r || _s.all), n && (n[i] = !0), e[i];
      }
    });
  return o;
};
const hu = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function gu(e) {
  const t = ho(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [i, s] = T.useState(n._formState), c = T.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return hu(() => n._subscribe({
    name: o,
    formState: c.current,
    exact: a,
    callback: (l) => {
      !r && s({
        ...n._formState,
        ...l
      });
    }
  }), [o, r, a]), T.useEffect(() => {
    c.current.isValid && n._setValid(!0);
  }, [n]), T.useMemo(() => Nw(i, n, c.current, !1), [i, n]);
}
var Aw = (e) => typeof e == "string", Ms = (e, t, n, r, o) => Aw(e) ? $e(n, e, o) : Array.isArray(e) ? e.map((a) => $e(n, a)) : n, Os = (e) => yi(e) || !uu(e);
function Mr(e, t, n = /* @__PURE__ */ new WeakSet()) {
  if (Os(e) || Os(t))
    return Object.is(e, t);
  if (Wn(e) && Wn(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length)
    return !1;
  if (n.has(e) || n.has(t))
    return !0;
  n.add(e), n.add(t);
  for (const a of r) {
    const i = e[a];
    if (!o.includes(a))
      return !1;
    if (a !== "ref") {
      const s = t[a];
      if (Wn(i) && Wn(s) || Zt(i) && Zt(s) || Array.isArray(i) && Array.isArray(s) ? !Mr(i, s, n) : !Object.is(i, s))
        return !1;
    }
  }
  return !0;
}
function Iw(e) {
  const t = ho(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: i, compute: s } = e || {}, c = T.useRef(o), l = T.useRef(s), p = T.useRef(void 0), f = T.useRef(n), m = T.useRef(r);
  l.current = s;
  const [g, x] = T.useState(() => {
    const S = n._getWatch(r, c.current);
    return l.current ? l.current(S) : S;
  }), h = T.useCallback((S) => {
    const b = Ms(r, n._names, S || n._formValues, !1, c.current);
    return l.current ? l.current(b) : b;
  }, [n._formValues, n._names, r]), v = T.useCallback((S) => {
    if (!a) {
      const b = Ms(r, n._names, S || n._formValues, !1, c.current);
      if (l.current) {
        const E = l.current(b);
        Mr(E, p.current) || (x(E), p.current = E);
      } else
        x(b);
    }
  }, [n._formValues, n._names, a, r]);
  hu(() => ((f.current !== n || !Mr(m.current, r)) && (f.current = n, m.current = r, v()), n._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: i,
    callback: (S) => {
      v(S.values);
    }
  })), [n, i, r, v]), T.useEffect(() => n._removeUnmounted());
  const w = f.current !== n, y = m.current, C = T.useMemo(() => {
    if (a)
      return null;
    const S = !w && !Mr(y, r);
    return w || S ? h() : null;
  }, [a, w, r, y, h]);
  return C !== null ? C : g;
}
function Fw(e) {
  const t = ho(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a, defaultValue: i, exact: s = !0 } = e, c = Dw(o._names.array, n), l = T.useMemo(() => $e(o._formValues, n, $e(o._defaultValues, n, i)), [o, n, i]), p = Iw({
    control: o,
    name: n,
    defaultValue: l,
    exact: s
  }), f = gu({
    control: o,
    name: n,
    exact: s
  }), m = T.useRef(e), g = T.useRef(void 0), x = T.useRef(o.register(n, {
    ...e.rules,
    value: p,
    ...Vo(e.disabled) ? { disabled: e.disabled } : {}
  }));
  m.current = e;
  const h = T.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!$e(f.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!$e(f.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!$e(f.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!$e(f.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => $e(f.errors, n)
    }
  }), [f, n]), v = T.useCallback((S) => x.current.onChange({
    target: {
      value: Mw(S),
      name: n
    },
    type: Es.CHANGE
  }), [n]), w = T.useCallback(() => x.current.onBlur({
    target: {
      value: $e(o._formValues, n),
      name: n
    },
    type: Es.BLUR
  }), [n, o._formValues]), y = T.useCallback((S) => {
    const b = $e(o._fields, n);
    b && S && (b._f.ref = {
      focus: () => S.focus && S.focus(),
      select: () => S.select && S.select(),
      setCustomValidity: (E) => S.setCustomValidity(E),
      reportValidity: () => S.reportValidity()
    });
  }, [o._fields, n]), C = T.useMemo(() => ({
    name: n,
    value: p,
    ...Vo(r) || f.disabled ? { disabled: f.disabled || r } : {},
    onChange: v,
    onBlur: w,
    ref: y
  }), [n, r, f.disabled, v, w, y, p]);
  return T.useEffect(() => {
    const S = o._options.shouldUnregister || a, b = g.current;
    b && b !== n && !c && o.unregister(b), o.register(n, {
      ...m.current.rules,
      ...Vo(m.current.disabled) ? { disabled: m.current.disabled } : {}
    });
    const E = (_, O) => {
      const N = $e(o._fields, _);
      N && N._f && (N._f.mount = O);
    };
    if (E(n, !0), S) {
      const _ = pu($e(o._options.defaultValues, n, m.current.defaultValue));
      Ss(o._defaultValues, n, _), ha($e(o._formValues, n)) && Ss(o._formValues, n, _);
    }
    return !c && o.register(n), g.current = n, () => {
      (c ? S && !o._state.action : S) ? o.unregister(n) : E(n, !1);
    };
  }, [n, o, c, a]), T.useEffect(() => {
    o._setDisabledField({
      disabled: r,
      name: n
    });
  }, [r, n, o]), T.useMemo(() => ({
    field: C,
    formState: f,
    fieldState: h
  }), [C, f, h]);
}
const Lw = (e) => e.render(Fw(e)), vu = Yr(
  ({ className: e, children: t, required: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
    "label",
    {
      ref: o,
      "data-slot": "label",
      className: P("font-manrope font-medium text-sm text-gray-700", e),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx("span", { children: t }),
        n ? /* @__PURE__ */ d.jsx("span", { className: "text-base font-normal text-bright-red-600 ml-1 leading-[22px]", children: "*" }) : null
      ]
    }
  )
);
vu.displayName = "Label";
const vS = Tw, xu = Oa({}), xS = ({
  ...e
}) => /* @__PURE__ */ d.jsx(xu.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d.jsx(Lw, { ...e }) }), go = () => {
  const e = Or(xu), t = Or(bu), { getFieldState: n } = ho(), r = gu({ name: e.name }), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, bu = Oa({});
function bS({ className: e, ...t }) {
  const n = Mp();
  return /* @__PURE__ */ d.jsx(bu.Provider, { value: { id: n }, children: /* @__PURE__ */ d.jsx("div", { "data-slot": "form-item", className: P("grid gap-2", e), ...t }) });
}
function yS({ className: e, ...t }) {
  const { error: n, formItemId: r } = go();
  return /* @__PURE__ */ d.jsx(
    vu,
    {
      "data-slot": "form-label",
      "data-error": !!n,
      className: e,
      htmlFor: r,
      ...t
    }
  );
}
function wS({ ...e }) {
  const { error: t, formItemId: n, formDescriptionId: r, formMessageId: o } = go();
  return /* @__PURE__ */ d.jsx(
    Xr,
    {
      "data-slot": "form-control",
      id: n,
      "aria-describedby": t ? `${r} ${o}` : `${r}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function CS({ className: e, ...t }) {
  const { formDescriptionId: n } = go();
  return /* @__PURE__ */ d.jsx(
    "p",
    {
      "data-slot": "form-description",
      id: n,
      className: P("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function kS({ className: e, ...t }) {
  const { error: n, formMessageId: r } = go(), o = n ? String(n?.message ?? "") : t.children;
  return o ? /* @__PURE__ */ d.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: P("text-bright-red-600 text-sm", e),
      ...t,
      children: o
    }
  ) : null;
}
function Ie(e, t = {}) {
  const n = typeof e == "number" ? `${e}` : e ?? "24", r = typeof t["aria-label"] == "string";
  return {
    width: n,
    height: n,
    role: r ? "img" : "presentation",
    "aria-hidden": r ? void 0 : !0,
    ...t
  };
}
function Ww({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: P("inline-block", t), ...r, children: [
    /* @__PURE__ */ d.jsx("circle", { cx: "12.6457", cy: "4.35422", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ d.jsx("circle", { cx: "10.0876", cy: "9.80881", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ d.jsx("circle", { cx: "3.35422", cy: "11.0876", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ d.jsx("circle", { cx: "5.46091", cy: "5.63328", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ d.jsx("path", { d: "M5.19745 6.83691L3.91846 10.0344", stroke: "currentColor" }),
    /* @__PURE__ */ d.jsx("path", { d: "M12.232 5.55786L10.3135 8.75533", stroke: "currentColor" }),
    /* @__PURE__ */ d.jsx("path", { d: "M6.47645 6.83691L9.03442 8.7554", stroke: "currentColor" })
  ] });
}
function zw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", className: P("inline-block", t), ...r, children: [
    /* @__PURE__ */ d.jsx(
      "path",
      {
        d: "M11.1111 6.52632C13.8146 6.59229 16.4568 5.7579 18.5778 4.16842C18.7098 4.07459 18.8669 4.01745 19.0313 4.0034C19.1957 3.98936 19.361 4.01896 19.5086 4.0889C19.6563 4.15884 19.7805 4.26635 19.8672 4.39938C19.954 4.53242 20 4.68572 20 4.84211V14.9474C20 15.1038 19.954 15.2571 19.8672 15.3901C19.7805 15.5231 19.6563 15.6306 19.5086 15.7006C19.361 15.7705 19.1957 15.8001 19.0313 15.7861C18.8669 15.772 18.7098 15.7149 18.5778 15.621C16.4568 14.0316 13.8146 13.1972 11.1111 13.2632H5.77778C5.30628 13.2632 4.8541 13.0857 4.5207 12.7699C4.1873 12.454 4 12.0256 4 11.5789V8.21052C4 7.76384 4.1873 7.33546 4.5207 7.01961C4.8541 6.70376 5.30628 6.52632 5.77778 6.52632H11.1111Z",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ d.jsx(
      "path",
      {
        d: "M6.66675 13.2632C6.66675 15.4496 7.41531 17.5771 8.80008 19.3263C9.08298 19.6837 9.50413 19.9199 9.97089 19.9831C10.4376 20.0462 10.9118 19.9312 11.289 19.6632C11.6662 19.3951 11.9155 18.9962 11.9822 18.554C12.0489 18.1118 11.9274 17.6626 11.6445 17.3053C10.7213 16.1391 10.2223 14.7208 10.2223 13.2632",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ d.jsx(
      "path",
      {
        d: "M8.44458 6.52631V13.2632",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] });
}
function $w({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: P("inline-block", t),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M5.76123 9.17699V22H18.239V9.17699C18.239 8.35073 17.8982 7.56104 17.2971 6.99422L14.0582 3.94042C12.9025 2.85078 11.0978 2.85078 9.9421 3.94042L6.7032 6.99422C6.10202 7.56104 5.76123 8.35073 5.76123 9.17699Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M20.3964 12.2174L18.239 10.9483V22H19.8754C20.98 22 21.8754 21.1046 21.8754 20V14.8032C21.8754 13.7401 21.3128 12.7564 20.3964 12.2174Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M3.6038 12.2174L5.76123 10.9483V22H4.12486C3.02029 22 2.12486 21.1046 2.12486 20V14.8032C2.12486 13.7401 2.68748 12.7564 3.6038 12.2174Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M12.0002 7.28268V12",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M13.9609 9.15826H10.0393",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
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
function Bw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: P("inline-block", t),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
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
function Vw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: P("inline-block", t), ...r, children: /* @__PURE__ */ d.jsx(
    "path",
    {
      d: "M10.6517 3.73292C10.3353 3.1997 9.64138 3.1997 9.32503 3.73292L6.86562 7.83985C6.68193 8.13482 6.36558 8.29365 6.04922 8.21424L2.62035 7.46546C2.03866 7.34067 1.54882 7.93061 1.69169 8.56594L3.3449 15.6112C3.43675 15.9856 3.72249 16.2466 4.06946 16.2693C4.06946 16.2693 5.34508 16.6663 9.99856 16.6663C14.652 16.6663 15.9277 16.2693 15.9277 16.2693C16.1828 16.2012 16.5604 15.9743 16.6522 15.6112L18.3054 8.56594C18.4585 7.93061 17.9584 7.34067 17.3768 7.46546L13.9479 8.21424C13.6315 8.28231 13.305 8.13482 13.1315 7.83985L10.6517 3.73292Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeMiterlimit: "10"
    }
  ) });
}
function Hw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: P("inline-block", t),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M16 2V6",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M8 2V6",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
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
function Yw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: P("inline-block", t),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M20 12V22H4V12",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M22 7H2V12H22V7Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M12 22V7",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
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
function Uw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: P("inline-block", t),
      ...r,
      children: /* @__PURE__ */ d.jsx(
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
function Gw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: P("inline-block", t), ...r, children: [
    /* @__PURE__ */ d.jsx(
      "path",
      {
        d: "M5.33325 4H13.9999",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ d.jsx(
      "path",
      {
        d: "M5.33325 8H13.9999",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ d.jsx(
      "path",
      {
        d: "M5.33325 12H13.9999",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ d.jsx("path", { d: "M2 4H2.00667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ d.jsx("path", { d: "M2 8H2.00667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ d.jsx("path", { d: "M2 12H2.00667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function qw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: P("inline-block", t), ...r, children: [
    /* @__PURE__ */ d.jsx("circle", { cx: "8", cy: "8", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ d.jsx("circle", { cx: "8", cy: "8", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ d.jsx("circle", { cx: "8", cy: "8", r: "5.5", stroke: "currentColor" })
  ] });
}
function Kw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: P("inline-block", t), ...r, children: /* @__PURE__ */ d.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM7.50001 5.41667C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H7.50001V5.41667ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function Zw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: P("inline-block", t), ...r, children: /* @__PURE__ */ d.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667H7.50001C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function Xw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: P("inline-block", t),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M4 20C4 18.8954 4.89543 18 6 18H20V22H6C4.89543 22 4 21.1046 4 20V20Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M4 4C4 2.89543 4.89543 2 6 2H20V22H6C4.89543 22 4 21.1046 4 20V4Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ d.jsx("path", { d: "M12 6.16666L12 14.5", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ d.jsx("path", { d: "M9 9.08334L15 9.08334", stroke: "currentColor", strokeWidth: "1.5" })
      ]
    }
  );
}
function Jw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: P("inline-block", t),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
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
function Qw({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: P("inline-block", t),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M21.791 9.85414C21.6806 9.41327 21.4559 9.00933 21.1395 8.68312C20.823 8.3569 20.4261 8.11997 19.9888 7.99625C18.3911 7.60609 11.9999 7.60609 11.9999 7.60609C11.9999 7.60609 5.60879 7.60609 4.011 8.03341C3.5737 8.15713 3.17679 8.39406 2.86036 8.72028C2.54394 9.04649 2.3192 9.45043 2.20885 9.8913C1.91643 11.5128 1.7734 13.1577 1.78154 14.8054C1.77111 16.4655 1.91416 18.1229 2.20885 19.7567C2.3305 20.1839 2.56028 20.5724 2.87597 20.8849C3.19166 21.1973 3.58259 21.423 4.011 21.5402C5.60879 21.9676 11.9999 21.9676 11.9999 21.9676C11.9999 21.9676 18.3911 21.9676 19.9888 21.5402C20.4261 21.4165 20.823 21.1796 21.1395 20.8534C21.4559 20.5272 21.6806 20.1232 21.791 19.6824C22.0811 18.073 22.2242 16.4407 22.2183 14.8054C22.2287 13.1453 22.0857 11.4879 21.791 9.85414Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M3.09961 8.09392V6.89661C3.19992 6.49584 3.40422 6.12864 3.69186 5.8321C3.97951 5.53556 4.34032 5.32017 4.73784 5.20771C6.1903 4.81926 12.0001 4.81926 12.0001 4.81926C12.0001 4.81926 17.8099 4.81926 19.2624 5.17393C19.6599 5.2864 20.0207 5.50178 20.3084 5.79832C20.596 6.09486 20.8003 6.46206 20.9006 6.86283V8.09392",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M3.9895 5.40155V3.90205C4.07978 3.54135 4.26365 3.21088 4.52253 2.94399C4.78141 2.6771 5.10614 2.48326 5.46391 2.38204C6.77112 2.03243 12 2.03243 12 2.03243C12 2.03243 17.2288 2.03243 18.536 2.35163C18.8938 2.45286 19.2185 2.6467 19.4774 2.91359C19.7363 3.18048 19.9201 3.51095 20.0104 3.87165V5.40155",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
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
function e1({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: P("inline-block", t),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M14.022 10.9211L12.4757 4.09878C12.232 3.02346 13.0494 2 14.152 2C14.8038 2 15.3995 2.36863 15.6903 2.95192L21.2123 14.0276C21.7141 15.0341 21.769 16.2053 21.3635 17.2544L20.518 19.442C19.9222 20.9836 18.4397 22 16.787 22H16C13.7909 22 12 20.2091 12 18V12.9603C12 11.8341 12.913 10.9211 14.0392 10.9211C15.1654 10.9211 16.0784 11.8341 16.0784 12.9603V17.0633",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
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
function t1({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: P("inline-block", t),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M3 10H21",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M19.2 6H4.8C3.80589 6 3 6.76751 3 7.71429V16.2857C3 17.2325 3.80589 18 4.8 18H19.2C20.1941 18 21 17.2325 21 16.2857V7.71429C21 6.76751 20.1941 6 19.2 6Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ d.jsx(
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
function n1({ size: e, className: t, ...n }) {
  const r = Ie(e, n);
  return /* @__PURE__ */ d.jsx("svg", { viewBox: "0 0 48 48", fill: "none", className: P("inline-block", t), ...r, children: /* @__PURE__ */ d.jsx(
    "path",
    {
      d: "M30 16V32H10V16H30ZM32 12H8C6.9 12 6 12.9 6 14V34C6 35.1 6.9 36 8 36H32C33.1 36 34 35.1 34 34V27L42 35V13L34 21V14C34 12.9 33.1 12 32 12Z",
      fill: "currentColor"
    }
  ) });
}
const r1 = {
  analytics: Ww,
  announcement: zw,
  church: $w,
  class: Bw,
  crown: Vw,
  event: Hw,
  gift: Yw,
  home: Uw,
  list: Gw,
  livestream: qw,
  "lock-closed": Kw,
  "lock-open": Zw,
  ministry: Xw,
  podcast: Jw,
  series: Qw,
  sermon: e1,
  subscription: t1,
  video: n1
};
function SS({ name: e, ...t }) {
  const n = r1[e];
  return /* @__PURE__ */ d.jsx(n, { ...t });
}
var br = { exports: {} }, yr = { exports: {} }, be = {};
var Ds;
function o1() {
  if (Ds) return be;
  Ds = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, a = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, l = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, m = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, g = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, h = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, v = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, w = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, y = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function C(b) {
    if (typeof b == "object" && b !== null) {
      var E = b.$$typeof;
      switch (E) {
        case t:
          switch (b = b.type, b) {
            case c:
            case l:
            case r:
            case a:
            case o:
            case f:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case p:
                case x:
                case g:
                case i:
                  return b;
                default:
                  return E;
              }
          }
        case n:
          return E;
      }
    }
  }
  function S(b) {
    return C(b) === l;
  }
  return be.AsyncMode = c, be.ConcurrentMode = l, be.ContextConsumer = s, be.ContextProvider = i, be.Element = t, be.ForwardRef = p, be.Fragment = r, be.Lazy = x, be.Memo = g, be.Portal = n, be.Profiler = a, be.StrictMode = o, be.Suspense = f, be.isAsyncMode = function(b) {
    return S(b) || C(b) === c;
  }, be.isConcurrentMode = S, be.isContextConsumer = function(b) {
    return C(b) === s;
  }, be.isContextProvider = function(b) {
    return C(b) === i;
  }, be.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, be.isForwardRef = function(b) {
    return C(b) === p;
  }, be.isFragment = function(b) {
    return C(b) === r;
  }, be.isLazy = function(b) {
    return C(b) === x;
  }, be.isMemo = function(b) {
    return C(b) === g;
  }, be.isPortal = function(b) {
    return C(b) === n;
  }, be.isProfiler = function(b) {
    return C(b) === a;
  }, be.isStrictMode = function(b) {
    return C(b) === o;
  }, be.isSuspense = function(b) {
    return C(b) === f;
  }, be.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === l || b === a || b === o || b === f || b === m || typeof b == "object" && b !== null && (b.$$typeof === x || b.$$typeof === g || b.$$typeof === i || b.$$typeof === s || b.$$typeof === p || b.$$typeof === v || b.$$typeof === w || b.$$typeof === y || b.$$typeof === h);
  }, be.typeOf = C, be;
}
var ye = {};
var Ps;
function a1() {
  return Ps || (Ps = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, n = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, a = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, l = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, m = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, g = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, h = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, v = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, w = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, y = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function C(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === r || I === l || I === a || I === o || I === f || I === m || typeof I == "object" && I !== null && (I.$$typeof === x || I.$$typeof === g || I.$$typeof === i || I.$$typeof === s || I.$$typeof === p || I.$$typeof === v || I.$$typeof === w || I.$$typeof === y || I.$$typeof === h);
    }
    function S(I) {
      if (typeof I == "object" && I !== null) {
        var ve = I.$$typeof;
        switch (ve) {
          case t:
            var ne = I.type;
            switch (ne) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case f:
                return ne;
              default:
                var ie = ne && ne.$$typeof;
                switch (ie) {
                  case s:
                  case p:
                  case x:
                  case g:
                  case i:
                    return ie;
                  default:
                    return ve;
                }
            }
          case n:
            return ve;
        }
      }
    }
    var b = c, E = l, _ = s, O = i, N = t, W = p, K = r, G = x, H = g, $ = n, Z = a, B = o, te = f, R = !1;
    function A(I) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(I) || S(I) === c;
    }
    function D(I) {
      return S(I) === l;
    }
    function k(I) {
      return S(I) === s;
    }
    function j(I) {
      return S(I) === i;
    }
    function L(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function F(I) {
      return S(I) === p;
    }
    function q(I) {
      return S(I) === r;
    }
    function Y(I) {
      return S(I) === x;
    }
    function M(I) {
      return S(I) === g;
    }
    function U(I) {
      return S(I) === n;
    }
    function J(I) {
      return S(I) === a;
    }
    function z(I) {
      return S(I) === o;
    }
    function ae(I) {
      return S(I) === f;
    }
    ye.AsyncMode = b, ye.ConcurrentMode = E, ye.ContextConsumer = _, ye.ContextProvider = O, ye.Element = N, ye.ForwardRef = W, ye.Fragment = K, ye.Lazy = G, ye.Memo = H, ye.Portal = $, ye.Profiler = Z, ye.StrictMode = B, ye.Suspense = te, ye.isAsyncMode = A, ye.isConcurrentMode = D, ye.isContextConsumer = k, ye.isContextProvider = j, ye.isElement = L, ye.isForwardRef = F, ye.isFragment = q, ye.isLazy = Y, ye.isMemo = M, ye.isPortal = U, ye.isProfiler = J, ye.isStrictMode = z, ye.isSuspense = ae, ye.isValidElementType = C, ye.typeOf = S;
  })()), ye;
}
var Rs;
function yu() {
  return Rs || (Rs = 1, process.env.NODE_ENV === "production" ? yr.exports = o1() : yr.exports = a1()), yr.exports;
}
var Ho, js;
function i1() {
  if (js) return Ho;
  js = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var i = {}, s = 0; s < 10; s++)
        i["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(i).map(function(p) {
        return i[p];
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
  return Ho = o() ? Object.assign : function(a, i) {
    for (var s, c = r(a), l, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var f in s)
        t.call(s, f) && (c[f] = s[f]);
      if (e) {
        l = e(s);
        for (var m = 0; m < l.length; m++)
          n.call(s, l[m]) && (c[l[m]] = s[l[m]]);
      }
    }
    return c;
  }, Ho;
}
var Yo, Ts;
function Ci() {
  if (Ts) return Yo;
  Ts = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Yo = e, Yo;
}
var Uo, Ns;
function wu() {
  return Ns || (Ns = 1, Uo = Function.call.bind(Object.prototype.hasOwnProperty)), Uo;
}
var Go, As;
function s1() {
  if (As) return Go;
  As = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ci(), n = {}, r = /* @__PURE__ */ wu();
    e = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, s, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (r(a, p)) {
          var f;
          try {
            if (typeof a[p] != "function") {
              var m = Error(
                (c || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            f = a[p](i, p, c, s, null, t);
          } catch (x) {
            f = x;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var g = l ? l() : "";
            e(
              "Failed " + s + " type: " + f.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Go = o, Go;
}
var qo, Is;
function c1() {
  if (Is) return qo;
  Is = 1;
  var e = yu(), t = i1(), n = /* @__PURE__ */ Ci(), r = /* @__PURE__ */ wu(), o = /* @__PURE__ */ s1(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return qo = function(s, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function f(D) {
      var k = D && (l && D[l] || D[p]);
      if (typeof k == "function")
        return k;
    }
    var m = "<<anonymous>>", g = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: y(),
      arrayOf: C,
      element: S(),
      elementType: b(),
      instanceOf: E,
      node: W(),
      objectOf: O,
      oneOf: _,
      oneOfType: N,
      shape: G,
      exact: H
    };
    function x(D, k) {
      return D === k ? D !== 0 || 1 / D === 1 / k : D !== D && k !== k;
    }
    function h(D, k) {
      this.message = D, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function v(D) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, j = 0;
      function L(q, Y, M, U, J, z, ae) {
        if (U = U || m, z = z || M, ae !== n) {
          if (c) {
            var I = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw I.name = "Invariant Violation", I;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = U + ":" + M;
            !k[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[ve] = !0, j++);
          }
        }
        return Y[M] == null ? q ? Y[M] === null ? new h("The " + J + " `" + z + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new h("The " + J + " `" + z + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : D(Y, M, U, J, z);
      }
      var F = L.bind(null, !1);
      return F.isRequired = L.bind(null, !0), F;
    }
    function w(D) {
      function k(j, L, F, q, Y, M) {
        var U = j[L], J = B(U);
        if (J !== D) {
          var z = te(U);
          return new h(
            "Invalid " + q + " `" + Y + "` of type " + ("`" + z + "` supplied to `" + F + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return v(k);
    }
    function y() {
      return v(i);
    }
    function C(D) {
      function k(j, L, F, q, Y) {
        if (typeof D != "function")
          return new h("Property `" + Y + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var M = j[L];
        if (!Array.isArray(M)) {
          var U = B(M);
          return new h("Invalid " + q + " `" + Y + "` of type " + ("`" + U + "` supplied to `" + F + "`, expected an array."));
        }
        for (var J = 0; J < M.length; J++) {
          var z = D(M, J, F, q, Y + "[" + J + "]", n);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return v(k);
    }
    function S() {
      function D(k, j, L, F, q) {
        var Y = k[j];
        if (!s(Y)) {
          var M = B(Y);
          return new h("Invalid " + F + " `" + q + "` of type " + ("`" + M + "` supplied to `" + L + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(D);
    }
    function b() {
      function D(k, j, L, F, q) {
        var Y = k[j];
        if (!e.isValidElementType(Y)) {
          var M = B(Y);
          return new h("Invalid " + F + " `" + q + "` of type " + ("`" + M + "` supplied to `" + L + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(D);
    }
    function E(D) {
      function k(j, L, F, q, Y) {
        if (!(j[L] instanceof D)) {
          var M = D.name || m, U = A(j[L]);
          return new h("Invalid " + q + " `" + Y + "` of type " + ("`" + U + "` supplied to `" + F + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return v(k);
    }
    function _(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function k(j, L, F, q, Y) {
        for (var M = j[L], U = 0; U < D.length; U++)
          if (x(M, D[U]))
            return null;
        var J = JSON.stringify(D, function(ae, I) {
          var ve = te(I);
          return ve === "symbol" ? String(I) : I;
        });
        return new h("Invalid " + q + " `" + Y + "` of value `" + String(M) + "` " + ("supplied to `" + F + "`, expected one of " + J + "."));
      }
      return v(k);
    }
    function O(D) {
      function k(j, L, F, q, Y) {
        if (typeof D != "function")
          return new h("Property `" + Y + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var M = j[L], U = B(M);
        if (U !== "object")
          return new h("Invalid " + q + " `" + Y + "` of type " + ("`" + U + "` supplied to `" + F + "`, expected an object."));
        for (var J in M)
          if (r(M, J)) {
            var z = D(M, J, F, q, Y + "." + J, n);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return v(k);
    }
    function N(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var k = 0; k < D.length; k++) {
        var j = D[k];
        if (typeof j != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + R(j) + " at index " + k + "."
          ), i;
      }
      function L(F, q, Y, M, U) {
        for (var J = [], z = 0; z < D.length; z++) {
          var ae = D[z], I = ae(F, q, Y, M, U, n);
          if (I == null)
            return null;
          I.data && r(I.data, "expectedType") && J.push(I.data.expectedType);
        }
        var ve = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new h("Invalid " + M + " `" + U + "` supplied to " + ("`" + Y + "`" + ve + "."));
      }
      return v(L);
    }
    function W() {
      function D(k, j, L, F, q) {
        return $(k[j]) ? null : new h("Invalid " + F + " `" + q + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
      }
      return v(D);
    }
    function K(D, k, j, L, F) {
      return new h(
        (D || "React class") + ": " + k + " type `" + j + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function G(D) {
      function k(j, L, F, q, Y) {
        var M = j[L], U = B(M);
        if (U !== "object")
          return new h("Invalid " + q + " `" + Y + "` of type `" + U + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var J in D) {
          var z = D[J];
          if (typeof z != "function")
            return K(F, q, Y, J, te(z));
          var ae = z(M, J, F, q, Y + "." + J, n);
          if (ae)
            return ae;
        }
        return null;
      }
      return v(k);
    }
    function H(D) {
      function k(j, L, F, q, Y) {
        var M = j[L], U = B(M);
        if (U !== "object")
          return new h("Invalid " + q + " `" + Y + "` of type `" + U + "` " + ("supplied to `" + F + "`, expected `object`."));
        var J = t({}, j[L], D);
        for (var z in J) {
          var ae = D[z];
          if (r(D, z) && typeof ae != "function")
            return K(F, q, Y, z, te(ae));
          if (!ae)
            return new h(
              "Invalid " + q + " `" + Y + "` key `" + z + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(j[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var I = ae(M, z, F, q, Y + "." + z, n);
          if (I)
            return I;
        }
        return null;
      }
      return v(k);
    }
    function $(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D))
            return D.every($);
          if (D === null || s(D))
            return !0;
          var k = f(D);
          if (k) {
            var j = k.call(D), L;
            if (k !== D.entries) {
              for (; !(L = j.next()).done; )
                if (!$(L.value))
                  return !1;
            } else
              for (; !(L = j.next()).done; ) {
                var F = L.value;
                if (F && !$(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Z(D, k) {
      return D === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function B(D) {
      var k = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : Z(k, D) ? "symbol" : k;
    }
    function te(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var k = B(D);
      if (k === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function R(D) {
      var k = te(D);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function A(D) {
      return !D.constructor || !D.constructor.name ? m : D.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, qo;
}
var Ko, Fs;
function l1() {
  if (Fs) return Ko;
  Fs = 1;
  var e = /* @__PURE__ */ Ci();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ko = function() {
    function r(i, s, c, l, p, f) {
      if (f !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var a = {
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
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Ko;
}
var Ls;
function d1() {
  if (Ls) return br.exports;
  if (Ls = 1, process.env.NODE_ENV !== "production") {
    var e = yu(), t = !0;
    br.exports = /* @__PURE__ */ c1()(e.isElement, t);
  } else
    br.exports = /* @__PURE__ */ l1()();
  return br.exports;
}
var u1 = /* @__PURE__ */ d1();
const Se = /* @__PURE__ */ Da(u1), p1 = /* @__PURE__ */ new Map([
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
function xn(e, t, n) {
  const r = f1(e), { webkitRelativePath: o } = e, a = typeof t == "string" ? t : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && Ws(r, "path", a), Ws(r, "relativePath", a), r;
}
function f1(e) {
  const { name: t } = e;
  if (t && t.lastIndexOf(".") !== -1 && !e.type) {
    const r = t.split(".").pop().toLowerCase(), o = p1.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Ws(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const m1 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function h1(e) {
  return Qt(this, void 0, void 0, function* () {
    return Lr(e) && g1(e.dataTransfer) ? y1(e.dataTransfer, e.type) : v1(e) ? x1(e) : Array.isArray(e) && e.every((t) => "getFile" in t && typeof t.getFile == "function") ? b1(e) : [];
  });
}
function g1(e) {
  return Lr(e);
}
function v1(e) {
  return Lr(e) && Lr(e.target);
}
function Lr(e) {
  return typeof e == "object" && e !== null;
}
function x1(e) {
  return ga(e.target.files).map((t) => xn(t));
}
function b1(e) {
  return Qt(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((n) => n.getFile()))).map((n) => xn(n));
  });
}
function y1(e, t) {
  return Qt(this, void 0, void 0, function* () {
    if (e.items) {
      const n = ga(e.items).filter((o) => o.kind === "file");
      if (t !== "drop")
        return n;
      const r = yield Promise.all(n.map(w1));
      return zs(Cu(r));
    }
    return zs(ga(e.files).map((n) => xn(n)));
  });
}
function zs(e) {
  return e.filter((t) => m1.indexOf(t.name) === -1);
}
function ga(e) {
  if (e === null)
    return [];
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(r);
  }
  return t;
}
function w1(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return $s(e);
  const t = e.webkitGetAsEntry();
  return t && t.isDirectory ? ku(t) : $s(e, t);
}
function Cu(e) {
  return e.reduce((t, n) => [
    ...t,
    ...Array.isArray(n) ? Cu(n) : [n]
  ], []);
}
function $s(e, t) {
  return Qt(this, void 0, void 0, function* () {
    var n;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const a = yield e.getAsFileSystemHandle();
      if (a === null)
        throw new Error(`${e} is not a File`);
      if (a !== void 0) {
        const i = yield a.getFile();
        return i.handle = a, xn(i);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return xn(r, (n = t?.fullPath) !== null && n !== void 0 ? n : void 0);
  });
}
function C1(e) {
  return Qt(this, void 0, void 0, function* () {
    return e.isDirectory ? ku(e) : k1(e);
  });
}
function ku(e) {
  const t = e.createReader();
  return new Promise((n, r) => {
    const o = [];
    function a() {
      t.readEntries((i) => Qt(this, void 0, void 0, function* () {
        if (i.length) {
          const s = Promise.all(i.map(C1));
          o.push(s), a();
        } else
          try {
            const s = yield Promise.all(o);
            n(s);
          } catch (s) {
            r(s);
          }
      }), (i) => {
        r(i);
      });
    }
    a();
  });
}
function k1(e) {
  return Qt(this, void 0, void 0, function* () {
    return new Promise((t, n) => {
      e.file((r) => {
        const o = xn(r, e.fullPath);
        t(o);
      }, (r) => {
        n(r);
      });
    });
  });
}
var wr = {}, Bs;
function S1() {
  return Bs || (Bs = 1, wr.__esModule = !0, wr.default = function(e, t) {
    if (e && t) {
      var n = Array.isArray(t) ? t : t.split(",");
      if (n.length === 0)
        return !0;
      var r = e.name || "", o = (e.type || "").toLowerCase(), a = o.replace(/\/.*$/, "");
      return n.some(function(i) {
        var s = i.trim().toLowerCase();
        return s.charAt(0) === "." ? r.toLowerCase().endsWith(s) : s.endsWith("/*") ? a === s.replace(/\/.*$/, "") : o === s;
      });
    }
    return !0;
  }), wr;
}
var E1 = S1();
const Zo = /* @__PURE__ */ Da(E1);
function Vs(e) {
  return O1(e) || M1(e) || Eu(e) || _1();
}
function _1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function O1(e) {
  if (Array.isArray(e)) return va(e);
}
function Hs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ys(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hs(Object(n), !0).forEach(function(r) {
      Su(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Su(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Gn(e, t) {
  return R1(e) || P1(e, t) || Eu(e, t) || D1();
}
function D1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eu(e, t) {
  if (e) {
    if (typeof e == "string") return va(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return va(e, t);
  }
}
function va(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function P1(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, a = !1, i, s;
    try {
      for (n = n.call(e); !(o = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t)); o = !0)
        ;
    } catch (c) {
      a = !0, s = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (a) throw s;
      }
    }
    return r;
  }
}
function R1(e) {
  if (Array.isArray(e)) return e;
}
var j1 = typeof Zo == "function" ? Zo : Zo.default, T1 = "file-invalid-type", N1 = "file-too-large", A1 = "file-too-small", I1 = "too-many-files", F1 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split(","), r = n.length > 1 ? "one of ".concat(n.join(", ")) : n[0];
  return {
    code: T1,
    message: "File type must be ".concat(r)
  };
}, Us = function(t) {
  return {
    code: N1,
    message: "File is larger than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, Gs = function(t) {
  return {
    code: A1,
    message: "File is smaller than ".concat(t, " ").concat(t === 1 ? "byte" : "bytes")
  };
}, L1 = {
  code: I1,
  message: "Too many files"
};
function _u(e, t) {
  var n = e.type === "application/x-moz-file" || j1(e, t);
  return [n, n ? null : F1(t)];
}
function Mu(e, t, n) {
  if (Ut(e.size))
    if (Ut(t) && Ut(n)) {
      if (e.size > n) return [!1, Us(n)];
      if (e.size < t) return [!1, Gs(t)];
    } else {
      if (Ut(t) && e.size < t) return [!1, Gs(t)];
      if (Ut(n) && e.size > n) return [!1, Us(n)];
    }
  return [!0, null];
}
function Ut(e) {
  return e != null;
}
function W1(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, a = e.multiple, i = e.maxFiles, s = e.validator;
  return !a && t.length > 1 || a && i >= 1 && t.length > i ? !1 : t.every(function(c) {
    var l = _u(c, n), p = Gn(l, 1), f = p[0], m = Mu(c, r, o), g = Gn(m, 1), x = g[0], h = s ? s(c) : null;
    return f && x && !h;
  });
}
function Wr(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function Cr(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function qs(e) {
  e.preventDefault();
}
function z1(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function $1(e) {
  return e.indexOf("Edge/") !== -1;
}
function B1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return z1(e) || $1(e);
}
function pt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
      a[i - 1] = arguments[i];
    return t.some(function(s) {
      return !Wr(r) && s && s.apply(void 0, [r].concat(a)), Wr(r);
    });
  };
}
function V1() {
  return "showOpenFilePicker" in window;
}
function H1(e) {
  if (Ut(e)) {
    var t = Object.entries(e).filter(function(n) {
      var r = Gn(n, 2), o = r[0], a = r[1], i = !0;
      return Ou(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), i = !1), (!Array.isArray(a) || !a.every(Du)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), i = !1), i;
    }).reduce(function(n, r) {
      var o = Gn(r, 2), a = o[0], i = o[1];
      return Ys(Ys({}, n), {}, Su({}, a, i));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: t
    }];
  }
  return e;
}
function Y1(e) {
  if (Ut(e))
    return Object.entries(e).reduce(function(t, n) {
      var r = Gn(n, 2), o = r[0], a = r[1];
      return [].concat(Vs(t), [o], Vs(a));
    }, []).filter(function(t) {
      return Ou(t) || Du(t);
    }).join(",");
}
function U1(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function G1(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Ou(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Du(e) {
  return /^.*\.[\w]+$/.test(e);
}
var q1 = ["children"], K1 = ["open"], Z1 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], X1 = ["refKey", "onChange", "onClick"];
function J1(e) {
  return t2(e) || e2(e) || Pu(e) || Q1();
}
function Q1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function e2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function t2(e) {
  if (Array.isArray(e)) return xa(e);
}
function Xo(e, t) {
  return o2(e) || r2(e, t) || Pu(e, t) || n2();
}
function n2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pu(e, t) {
  if (e) {
    if (typeof e == "string") return xa(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xa(e, t);
  }
}
function xa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function r2(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, a = !1, i, s;
    try {
      for (n = n.call(e); !(o = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t)); o = !0)
        ;
    } catch (c) {
      a = !0, s = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (a) throw s;
      }
    }
    return r;
  }
}
function o2(e) {
  if (Array.isArray(e)) return e;
}
function Ks(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ks(Object(n), !0).forEach(function(r) {
      ba(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ks(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ba(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function zr(e, t) {
  if (e == null) return {};
  var n = a2(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function a2(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ki = /* @__PURE__ */ Yr(function(e, t) {
  var n = e.children, r = zr(e, q1), o = Si(r), a = o.open, i = zr(o, K1);
  return Dp(t, function() {
    return {
      open: a
    };
  }, [a]), /* @__PURE__ */ T.createElement(Pp, null, n(Oe(Oe({}, i), {}, {
    open: a
  })));
});
ki.displayName = "Dropzone";
var Ru = {
  disabled: !1,
  getFilesFromEvent: h1,
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
ki.defaultProps = Ru;
ki.propTypes = {
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
  children: Se.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: Se.objectOf(Se.arrayOf(Se.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: Se.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: Se.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: Se.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: Se.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: Se.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: Se.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: Se.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: Se.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: Se.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: Se.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: Se.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: Se.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: Se.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: Se.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: Se.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: Se.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: Se.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: Se.func,
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
  onDrop: Se.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: Se.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: Se.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: Se.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: Se.func
};
var ya = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Si() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Oe(Oe({}, Ru), e), n = t.accept, r = t.disabled, o = t.getFilesFromEvent, a = t.maxSize, i = t.minSize, s = t.multiple, c = t.maxFiles, l = t.onDragEnter, p = t.onDragLeave, f = t.onDragOver, m = t.onDrop, g = t.onDropAccepted, x = t.onDropRejected, h = t.onFileDialogCancel, v = t.onFileDialogOpen, w = t.useFsAccessApi, y = t.autoFocus, C = t.preventDropOnDocument, S = t.noClick, b = t.noKeyboard, E = t.noDrag, _ = t.noDragEventsBubbling, O = t.onError, N = t.validator, W = Je(function() {
    return Y1(n);
  }, [n]), K = Je(function() {
    return H1(n);
  }, [n]), G = Je(function() {
    return typeof v == "function" ? v : Zs;
  }, [v]), H = Je(function() {
    return typeof h == "function" ? h : Zs;
  }, [h]), $ = kt(null), Z = kt(null), B = Op(i2, ya), te = Xo(B, 2), R = te[0], A = te[1], D = R.isFocused, k = R.isFileDialogActive, j = kt(typeof window < "u" && window.isSecureContext && w && V1()), L = function() {
    !j.current && k && setTimeout(function() {
      if (Z.current) {
        var re = Z.current.files;
        re.length || (A({
          type: "closeDialog"
        }), H());
      }
    }, 300);
  };
  un(function() {
    return window.addEventListener("focus", L, !1), function() {
      window.removeEventListener("focus", L, !1);
    };
  }, [Z, k, H, j]);
  var F = kt([]), q = function(re) {
    $.current && $.current.contains(re.target) || (re.preventDefault(), F.current = []);
  };
  un(function() {
    return C && (document.addEventListener("dragover", qs, !1), document.addEventListener("drop", q, !1)), function() {
      C && (document.removeEventListener("dragover", qs), document.removeEventListener("drop", q));
    };
  }, [$, C]), un(function() {
    return !r && y && $.current && $.current.focus(), function() {
    };
  }, [$, y, r]);
  var Y = ue(function(V) {
    O ? O(V) : console.error(V);
  }, [O]), M = ue(function(V) {
    V.preventDefault(), V.persist(), Re(V), F.current = [].concat(J1(F.current), [V.target]), Cr(V) && Promise.resolve(o(V)).then(function(re) {
      if (!(Wr(V) && !_)) {
        var he = re.length, Ce = he > 0 && W1({
          files: re,
          accept: W,
          minSize: i,
          maxSize: a,
          multiple: s,
          maxFiles: c,
          validator: N
        }), Ae = he > 0 && !Ce;
        A({
          isDragAccept: Ce,
          isDragReject: Ae,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), l && l(V);
      }
    }).catch(function(re) {
      return Y(re);
    });
  }, [o, l, Y, _, W, i, a, s, c, N]), U = ue(function(V) {
    V.preventDefault(), V.persist(), Re(V);
    var re = Cr(V);
    if (re && V.dataTransfer)
      try {
        V.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return re && f && f(V), !1;
  }, [f, _]), J = ue(function(V) {
    V.preventDefault(), V.persist(), Re(V);
    var re = F.current.filter(function(Ce) {
      return $.current && $.current.contains(Ce);
    }), he = re.indexOf(V.target);
    he !== -1 && re.splice(he, 1), F.current = re, !(re.length > 0) && (A({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), Cr(V) && p && p(V));
  }, [$, p, _]), z = ue(function(V, re) {
    var he = [], Ce = [];
    V.forEach(function(Ae) {
      var ct = _u(Ae, W), lt = Xo(ct, 2), $t = lt[0], Bt = lt[1], Ve = Mu(Ae, i, a), dt = Xo(Ve, 2), Vt = dt[0], On = dt[1], tn = N ? N(Ae) : null;
      if ($t && Vt && !tn)
        he.push(Ae);
      else {
        var Dn = [Bt, On];
        tn && (Dn = Dn.concat(tn)), Ce.push({
          file: Ae,
          errors: Dn.filter(function(se) {
            return se;
          })
        });
      }
    }), (!s && he.length > 1 || s && c >= 1 && he.length > c) && (he.forEach(function(Ae) {
      Ce.push({
        file: Ae,
        errors: [L1]
      });
    }), he.splice(0)), A({
      acceptedFiles: he,
      fileRejections: Ce,
      isDragReject: Ce.length > 0,
      type: "setFiles"
    }), m && m(he, Ce, re), Ce.length > 0 && x && x(Ce, re), he.length > 0 && g && g(he, re);
  }, [A, s, W, i, a, c, m, g, x, N]), ae = ue(function(V) {
    V.preventDefault(), V.persist(), Re(V), F.current = [], Cr(V) && Promise.resolve(o(V)).then(function(re) {
      Wr(V) && !_ || z(re, V);
    }).catch(function(re) {
      return Y(re);
    }), A({
      type: "reset"
    });
  }, [o, z, Y, _]), I = ue(function() {
    if (j.current) {
      A({
        type: "openDialog"
      }), G();
      var V = {
        multiple: s,
        types: K
      };
      window.showOpenFilePicker(V).then(function(re) {
        return o(re);
      }).then(function(re) {
        z(re, null), A({
          type: "closeDialog"
        });
      }).catch(function(re) {
        U1(re) ? (H(re), A({
          type: "closeDialog"
        })) : G1(re) ? (j.current = !1, Z.current ? (Z.current.value = null, Z.current.click()) : Y(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : Y(re);
      });
      return;
    }
    Z.current && (A({
      type: "openDialog"
    }), G(), Z.current.value = null, Z.current.click());
  }, [A, G, H, w, z, Y, K, s]), ve = ue(function(V) {
    !$.current || !$.current.isEqualNode(V.target) || (V.key === " " || V.key === "Enter" || V.keyCode === 32 || V.keyCode === 13) && (V.preventDefault(), I());
  }, [$, I]), ne = ue(function() {
    A({
      type: "focus"
    });
  }, []), ie = ue(function() {
    A({
      type: "blur"
    });
  }, []), Me = ue(function() {
    S || (B1() ? setTimeout(I, 0) : I());
  }, [S, I]), _e = function(re) {
    return r ? null : re;
  }, Ne = function(re) {
    return b ? null : _e(re);
  }, xe = function(re) {
    return E ? null : _e(re);
  }, Re = function(re) {
    _ && re.stopPropagation();
  }, Dt = Je(function() {
    return function() {
      var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, re = V.refKey, he = re === void 0 ? "ref" : re, Ce = V.role, Ae = V.onKeyDown, ct = V.onFocus, lt = V.onBlur, $t = V.onClick, Bt = V.onDragEnter, Ve = V.onDragOver, dt = V.onDragLeave, Vt = V.onDrop, On = zr(V, Z1);
      return Oe(Oe(ba({
        onKeyDown: Ne(pt(Ae, ve)),
        onFocus: Ne(pt(ct, ne)),
        onBlur: Ne(pt(lt, ie)),
        onClick: _e(pt($t, Me)),
        onDragEnter: xe(pt(Bt, M)),
        onDragOver: xe(pt(Ve, U)),
        onDragLeave: xe(pt(dt, J)),
        onDrop: xe(pt(Vt, ae)),
        role: typeof Ce == "string" && Ce !== "" ? Ce : "presentation"
      }, he, $), !r && !b ? {
        tabIndex: 0
      } : {}), On);
    };
  }, [$, ve, ne, ie, Me, M, U, J, ae, b, E, r]), ze = ue(function(V) {
    V.stopPropagation();
  }, []), Ze = Je(function() {
    return function() {
      var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, re = V.refKey, he = re === void 0 ? "ref" : re, Ce = V.onChange, Ae = V.onClick, ct = zr(V, X1), lt = ba({
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
        onChange: _e(pt(Ce, ae)),
        onClick: _e(pt(Ae, ze)),
        tabIndex: -1
      }, he, Z);
      return Oe(Oe({}, lt), ct);
    };
  }, [Z, n, s, ae, r]);
  return Oe(Oe({}, R), {}, {
    isFocused: D && !r,
    getRootProps: Dt,
    getInputProps: Ze,
    rootRef: $,
    inputRef: Z,
    open: _e(I)
  });
}
function i2(e, t) {
  switch (t.type) {
    case "focus":
      return Oe(Oe({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return Oe(Oe({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return Oe(Oe({}, ya), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return Oe(Oe({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return Oe(Oe({}, e), {}, {
        isDragActive: t.isDragActive,
        isDragAccept: t.isDragAccept,
        isDragReject: t.isDragReject
      });
    case "setFiles":
      return Oe(Oe({}, e), {}, {
        acceptedFiles: t.acceptedFiles,
        fileRejections: t.fileRejections,
        isDragReject: t.isDragReject
      });
    case "reset":
      return Oe({}, ya);
    default:
      return e;
  }
}
function Zs() {
}
const s2 = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2024C0%2010.7452%2010.7452%200%2024%200C37.2548%200%2048%2010.7452%2048%2024C48%2037.2548%2037.2548%2048%2024%2048C10.7452%2048%200%2037.2548%200%2024Z'%20fill='%23EFF1F5'/%3e%3cpath%20d='M31%2017V31H17V17H31ZM31%2015H17C15.9%2015%2015%2015.9%2015%2017V31C15%2032.1%2015.9%2033%2017%2033H31C32.1%2033%2033%2032.1%2033%2031V17C33%2015.9%2032.1%2015%2031%2015ZM26.14%2023.86L23.14%2027.73L21%2025.14L18%2029H30L26.14%2023.86Z'%20fill='%233F465B'/%3e%3c/svg%3e";
var Jo, Xs;
function c2() {
  if (Xs) return Jo;
  Xs = 1;
  var e = !1, t, n, r, o, a, i, s, c, l, p, f, m, g, x, h;
  function v() {
    if (!e) {
      e = !0;
      var y = navigator.userAgent, C = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(y), S = /(Mac OS X)|(Windows)|(Linux)/.exec(y);
      if (m = /\b(iPhone|iP[ao]d)/.exec(y), g = /\b(iP[ao]d)/.exec(y), p = /Android/i.exec(y), x = /FBAN\/\w+;/i.exec(y), h = /Mobile/i.exec(y), f = !!/Win64/.exec(y), C) {
        t = C[1] ? parseFloat(C[1]) : C[5] ? parseFloat(C[5]) : NaN, t && document && document.documentMode && (t = document.documentMode);
        var b = /(?:Trident\/(\d+.\d+))/.exec(y);
        i = b ? parseFloat(b[1]) + 4 : t, n = C[2] ? parseFloat(C[2]) : NaN, r = C[3] ? parseFloat(C[3]) : NaN, o = C[4] ? parseFloat(C[4]) : NaN, o ? (C = /(?:Chrome\/(\d+\.\d+))/.exec(y), a = C && C[1] ? parseFloat(C[1]) : NaN) : a = NaN;
      } else
        t = n = r = a = o = NaN;
      if (S) {
        if (S[1]) {
          var E = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(y);
          s = E ? parseFloat(E[1].replace("_", ".")) : !0;
        } else
          s = !1;
        c = !!S[2], l = !!S[3];
      } else
        s = c = l = !1;
    }
  }
  var w = {
    /**
     *  Check if the UA is Internet Explorer.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    ie: function() {
      return v() || t;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return v() || i > t;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return w.ie() && f;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return v() || n;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return v() || r;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return v() || o;
    },
    /**
     *  For Push
     *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
     */
    safari: function() {
      return w.webkit();
    },
    /**
     *  Check if the UA is a Chrome browser.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    chrome: function() {
      return v() || a;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return v() || c;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return v() || s;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return v() || l;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return v() || m;
    },
    mobile: function() {
      return v() || m || g || p || h;
    },
    nativeApp: function() {
      return v() || x;
    },
    android: function() {
      return v() || p;
    },
    ipad: function() {
      return v() || g;
    }
  };
  return Jo = w, Jo;
}
var Qo, Js;
function l2() {
  if (Js) return Qo;
  Js = 1;
  var e = !!(typeof window < "u" && window.document && window.document.createElement), t = {
    canUseDOM: e,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
    canUseViewport: e && !!window.screen,
    isInWorker: !e
    // For now, this is true - might change in the future.
  };
  return Qo = t, Qo;
}
var ea, Qs;
function d2() {
  if (Qs) return ea;
  Qs = 1;
  var e = l2(), t;
  e.canUseDOM && (t = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature("", "") !== !0);
  function n(r, o) {
    if (!e.canUseDOM || o && !("addEventListener" in document))
      return !1;
    var a = "on" + r, i = a in document;
    if (!i) {
      var s = document.createElement("div");
      s.setAttribute(a, "return;"), i = typeof s[a] == "function";
    }
    return !i && t && r === "wheel" && (i = document.implementation.hasFeature("Events.wheel", "3.0")), i;
  }
  return ea = n, ea;
}
var ta, ec;
function u2() {
  if (ec) return ta;
  ec = 1;
  var e = c2(), t = d2(), n = 10, r = 40, o = 800;
  function a(i) {
    var s = 0, c = 0, l = 0, p = 0;
    return "detail" in i && (c = i.detail), "wheelDelta" in i && (c = -i.wheelDelta / 120), "wheelDeltaY" in i && (c = -i.wheelDeltaY / 120), "wheelDeltaX" in i && (s = -i.wheelDeltaX / 120), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (s = c, c = 0), l = s * n, p = c * n, "deltaY" in i && (p = i.deltaY), "deltaX" in i && (l = i.deltaX), (l || p) && i.deltaMode && (i.deltaMode == 1 ? (l *= r, p *= r) : (l *= o, p *= o)), l && !s && (s = l < 1 ? -1 : 1), p && !c && (c = p < 1 ? -1 : 1), {
      spinX: s,
      spinY: c,
      pixelX: l,
      pixelY: p
    };
  }
  return a.getEventType = function() {
    return e.firefox() ? "DOMMouseScroll" : t("wheel") ? "wheel" : "mousewheel";
  }, ta = a, ta;
}
var na, tc;
function p2() {
  return tc || (tc = 1, na = u2()), na;
}
var f2 = p2();
const m2 = /* @__PURE__ */ Da(f2);
function h2(e, t, n, r, o, a) {
  a === void 0 && (a = 0);
  var i = bn(e, t, a), s = i.width, c = i.height, l = Math.min(s, n), p = Math.min(c, r);
  return l > p * o ? {
    width: p * o,
    height: p
  } : {
    width: l,
    height: l / o
  };
}
function g2(e) {
  return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight;
}
function An(e, t, n, r, o) {
  o === void 0 && (o = 0);
  var a = bn(t.width, t.height, o), i = a.width, s = a.height;
  return {
    x: nc(e.x, i, n.width, r),
    y: nc(e.y, s, n.height, r)
  };
}
function nc(e, t, n, r) {
  var o = t * r / 2 - n / 2;
  return vo(e, -o, o);
}
function rc(e, t) {
  return Math.sqrt(Math.pow(e.y - t.y, 2) + Math.pow(e.x - t.x, 2));
}
function oc(e, t) {
  return Math.atan2(t.y - e.y, t.x - e.x) * 180 / Math.PI;
}
function v2(e, t, n, r, o, a, i) {
  a === void 0 && (a = 0), i === void 0 && (i = !0);
  var s = i ? x2 : b2, c = bn(t.width, t.height, a), l = bn(t.naturalWidth, t.naturalHeight, a), p = {
    x: s(100, ((c.width - n.width / o) / 2 - e.x / o) / c.width * 100),
    y: s(100, ((c.height - n.height / o) / 2 - e.y / o) / c.height * 100),
    width: s(100, n.width / c.width * 100 / o),
    height: s(100, n.height / c.height * 100 / o)
  }, f = Math.round(s(l.width, p.width * l.width / 100)), m = Math.round(s(l.height, p.height * l.height / 100)), g = l.width >= l.height * r, x = g ? {
    width: Math.round(m * r),
    height: m
  } : {
    width: f,
    height: Math.round(f / r)
  }, h = Ee(Ee({}, x), {
    x: Math.round(s(l.width - x.width, p.x * l.width / 100)),
    y: Math.round(s(l.height - x.height, p.y * l.height / 100))
  });
  return {
    croppedAreaPercentages: p,
    croppedAreaPixels: h
  };
}
function x2(e, t) {
  return Math.min(e, Math.max(0, t));
}
function b2(e, t) {
  return t;
}
function y2(e, t, n, r, o, a) {
  var i = bn(t.width, t.height, n), s = vo(r.width / i.width * (100 / e.width), o, a), c = {
    x: s * i.width / 2 - r.width / 2 - i.width * s * (e.x / 100),
    y: s * i.height / 2 - r.height / 2 - i.height * s * (e.y / 100)
  };
  return {
    crop: c,
    zoom: s
  };
}
function w2(e, t, n) {
  var r = g2(t);
  return n.height > n.width ? n.height / (e.height * r) : n.width / (e.width * r);
}
function C2(e, t, n, r, o, a) {
  n === void 0 && (n = 0);
  var i = bn(t.naturalWidth, t.naturalHeight, n), s = vo(w2(e, t, r), o, a), c = r.height > r.width ? r.height / e.height : r.width / e.width, l = {
    x: ((i.width - e.width) / 2 - e.x) * c,
    y: ((i.height - e.height) / 2 - e.y) * c
  };
  return {
    crop: l,
    zoom: s
  };
}
function ac(e, t) {
  return {
    x: (t.x + e.x) / 2,
    y: (t.y + e.y) / 2
  };
}
function k2(e) {
  return e * Math.PI / 180;
}
function bn(e, t, n) {
  var r = k2(n);
  return {
    width: Math.abs(Math.cos(r) * e) + Math.abs(Math.sin(r) * t),
    height: Math.abs(Math.sin(r) * e) + Math.abs(Math.cos(r) * t)
  };
}
function vo(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function kr() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return e.filter(function(n) {
    return typeof n == "string" && n.length > 0;
  }).join(" ").trim();
}
var S2 = `.reactEasyCrop_Container {
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
`, E2 = 1, _2 = 3, M2 = 1, O2 = (
  /** @class */
  (function(e) {
    hf(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.cropperRef = u.createRef(), n.imageRef = u.createRef(), n.videoRef = u.createRef(), n.containerPosition = {
        x: 0,
        y: 0
      }, n.containerRef = null, n.styleRef = null, n.containerRect = null, n.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }, n.dragStartPosition = {
        x: 0,
        y: 0
      }, n.dragStartCrop = {
        x: 0,
        y: 0
      }, n.gestureZoomStart = 0, n.gestureRotationStart = 0, n.isTouching = !1, n.lastPinchDistance = 0, n.lastPinchRotation = 0, n.rafDragTimeout = null, n.rafPinchTimeout = null, n.wheelTimer = null, n.currentDoc = typeof document < "u" ? document : null, n.currentWindow = typeof window < "u" ? window : null, n.resizeObserver = null, n.previousCropSize = null, n.isInitialized = !1, n.state = {
        cropSize: null,
        hasWheelJustStarted: !1,
        mediaObjectFit: void 0
      }, n.initResizeObserver = function() {
        if (!(typeof window.ResizeObserver > "u" || !n.containerRef)) {
          var r = !0;
          n.resizeObserver = new window.ResizeObserver(function(o) {
            if (r) {
              r = !1;
              return;
            }
            n.computeSizes();
          }), n.resizeObserver.observe(n.containerRef);
        }
      }, n.preventZoomSafari = function(r) {
        return r.preventDefault();
      }, n.cleanEvents = function() {
        n.currentDoc && (n.currentDoc.removeEventListener("mousemove", n.onMouseMove), n.currentDoc.removeEventListener("mouseup", n.onDragStopped), n.currentDoc.removeEventListener("touchmove", n.onTouchMove), n.currentDoc.removeEventListener("touchend", n.onDragStopped), n.currentDoc.removeEventListener("gesturechange", n.onGestureChange), n.currentDoc.removeEventListener("gestureend", n.onGestureEnd), n.currentDoc.removeEventListener("scroll", n.onScroll));
      }, n.clearScrollEvent = function() {
        n.containerRef && n.containerRef.removeEventListener("wheel", n.onWheel), n.wheelTimer && clearTimeout(n.wheelTimer);
      }, n.onMediaLoad = function() {
        var r = n.computeSizes();
        r && (n.previousCropSize = r, n.emitCropData(), n.setInitialCrop(r), n.isInitialized = !0), n.props.onMediaLoaded && n.props.onMediaLoaded(n.mediaSize);
      }, n.setInitialCrop = function(r) {
        if (n.props.initialCroppedAreaPercentages) {
          var o = y2(n.props.initialCroppedAreaPercentages, n.mediaSize, n.props.rotation, r, n.props.minZoom, n.props.maxZoom), a = o.crop, i = o.zoom;
          n.props.onCropChange(a), n.props.onZoomChange && n.props.onZoomChange(i);
        } else if (n.props.initialCroppedAreaPixels) {
          var s = C2(n.props.initialCroppedAreaPixels, n.mediaSize, n.props.rotation, r, n.props.minZoom, n.props.maxZoom), a = s.crop, i = s.zoom;
          n.props.onCropChange(a), n.props.onZoomChange && n.props.onZoomChange(i);
        }
      }, n.computeSizes = function() {
        var r, o, a, i, s, c, l = n.imageRef.current || n.videoRef.current;
        if (l && n.containerRef) {
          n.containerRect = n.containerRef.getBoundingClientRect(), n.saveContainerPosition();
          var p = n.containerRect.width / n.containerRect.height, f = ((r = n.imageRef.current) === null || r === void 0 ? void 0 : r.naturalWidth) || ((o = n.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, m = ((a = n.imageRef.current) === null || a === void 0 ? void 0 : a.naturalHeight) || ((i = n.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, g = l.offsetWidth < f || l.offsetHeight < m, x = f / m, h = void 0;
          if (g)
            switch (n.state.mediaObjectFit) {
              default:
              case "contain":
                h = p > x ? {
                  width: n.containerRect.height * x,
                  height: n.containerRect.height
                } : {
                  width: n.containerRect.width,
                  height: n.containerRect.width / x
                };
                break;
              case "horizontal-cover":
                h = {
                  width: n.containerRect.width,
                  height: n.containerRect.width / x
                };
                break;
              case "vertical-cover":
                h = {
                  width: n.containerRect.height * x,
                  height: n.containerRect.height
                };
                break;
            }
          else
            h = {
              width: l.offsetWidth,
              height: l.offsetHeight
            };
          n.mediaSize = Ee(Ee({}, h), {
            naturalWidth: f,
            naturalHeight: m
          }), n.props.setMediaSize && n.props.setMediaSize(n.mediaSize);
          var v = n.props.cropSize ? n.props.cropSize : h2(n.mediaSize.width, n.mediaSize.height, n.containerRect.width, n.containerRect.height, n.props.aspect, n.props.rotation);
          return (((s = n.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== v.height || ((c = n.state.cropSize) === null || c === void 0 ? void 0 : c.width) !== v.width) && n.props.onCropSizeChange && n.props.onCropSizeChange(v), n.setState({
            cropSize: v
          }, n.recomputeCropPosition), n.props.setCropSize && n.props.setCropSize(v), v;
        }
      }, n.saveContainerPosition = function() {
        if (n.containerRef) {
          var r = n.containerRef.getBoundingClientRect();
          n.containerPosition = {
            x: r.left,
            y: r.top
          };
        }
      }, n.onMouseDown = function(r) {
        n.currentDoc && (r.preventDefault(), n.currentDoc.addEventListener("mousemove", n.onMouseMove), n.currentDoc.addEventListener("mouseup", n.onDragStopped), n.saveContainerPosition(), n.onDragStart(t.getMousePoint(r)));
      }, n.onMouseMove = function(r) {
        return n.onDrag(t.getMousePoint(r));
      }, n.onScroll = function(r) {
        n.currentDoc && (r.preventDefault(), n.saveContainerPosition());
      }, n.onTouchStart = function(r) {
        n.currentDoc && (n.isTouching = !0, !(n.props.onTouchRequest && !n.props.onTouchRequest(r)) && (n.currentDoc.addEventListener("touchmove", n.onTouchMove, {
          passive: !1
        }), n.currentDoc.addEventListener("touchend", n.onDragStopped), n.saveContainerPosition(), r.touches.length === 2 ? n.onPinchStart(r) : r.touches.length === 1 && n.onDragStart(t.getTouchPoint(r.touches[0]))));
      }, n.onTouchMove = function(r) {
        r.preventDefault(), r.touches.length === 2 ? n.onPinchMove(r) : r.touches.length === 1 && n.onDrag(t.getTouchPoint(r.touches[0]));
      }, n.onGestureStart = function(r) {
        n.currentDoc && (r.preventDefault(), n.currentDoc.addEventListener("gesturechange", n.onGestureChange), n.currentDoc.addEventListener("gestureend", n.onGestureEnd), n.gestureZoomStart = n.props.zoom, n.gestureRotationStart = n.props.rotation);
      }, n.onGestureChange = function(r) {
        if (r.preventDefault(), !n.isTouching) {
          var o = t.getMousePoint(r), a = n.gestureZoomStart - 1 + r.scale;
          if (n.setNewZoom(a, o, {
            shouldUpdatePosition: !0
          }), n.props.onRotationChange) {
            var i = n.gestureRotationStart + r.rotation;
            n.props.onRotationChange(i);
          }
        }
      }, n.onGestureEnd = function(r) {
        n.cleanEvents();
      }, n.onDragStart = function(r) {
        var o, a, i = r.x, s = r.y;
        n.dragStartPosition = {
          x: i,
          y: s
        }, n.dragStartCrop = Ee({}, n.props.crop), (a = (o = n.props).onInteractionStart) === null || a === void 0 || a.call(o);
      }, n.onDrag = function(r) {
        var o = r.x, a = r.y;
        n.currentWindow && (n.rafDragTimeout && n.currentWindow.cancelAnimationFrame(n.rafDragTimeout), n.rafDragTimeout = n.currentWindow.requestAnimationFrame(function() {
          if (n.state.cropSize && !(o === void 0 || a === void 0)) {
            var i = o - n.dragStartPosition.x, s = a - n.dragStartPosition.y, c = {
              x: n.dragStartCrop.x + i,
              y: n.dragStartCrop.y + s
            }, l = n.props.restrictPosition ? An(c, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : c;
            n.props.onCropChange(l);
          }
        }));
      }, n.onDragStopped = function() {
        var r, o;
        n.isTouching = !1, n.cleanEvents(), n.emitCropData(), (o = (r = n.props).onInteractionEnd) === null || o === void 0 || o.call(r);
      }, n.onWheel = function(r) {
        if (n.currentWindow && !(n.props.onWheelRequest && !n.props.onWheelRequest(r))) {
          r.preventDefault();
          var o = t.getMousePoint(r), a = m2(r).pixelY, i = n.props.zoom - a * n.props.zoomSpeed / 200;
          n.setNewZoom(i, o, {
            shouldUpdatePosition: !0
          }), n.state.hasWheelJustStarted || n.setState({
            hasWheelJustStarted: !0
          }, function() {
            var s, c;
            return (c = (s = n.props).onInteractionStart) === null || c === void 0 ? void 0 : c.call(s);
          }), n.wheelTimer && clearTimeout(n.wheelTimer), n.wheelTimer = n.currentWindow.setTimeout(function() {
            return n.setState({
              hasWheelJustStarted: !1
            }, function() {
              var s, c;
              return (c = (s = n.props).onInteractionEnd) === null || c === void 0 ? void 0 : c.call(s);
            });
          }, 250);
        }
      }, n.getPointOnContainer = function(r, o) {
        var a = r.x, i = r.y;
        if (!n.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: n.containerRect.width / 2 - (a - o.x),
          y: n.containerRect.height / 2 - (i - o.y)
        };
      }, n.getPointOnMedia = function(r) {
        var o = r.x, a = r.y, i = n.props, s = i.crop, c = i.zoom;
        return {
          x: (o + s.x) / c,
          y: (a + s.y) / c
        };
      }, n.setNewZoom = function(r, o, a) {
        var i = a === void 0 ? {} : a, s = i.shouldUpdatePosition, c = s === void 0 ? !0 : s;
        if (!(!n.state.cropSize || !n.props.onZoomChange)) {
          var l = vo(r, n.props.minZoom, n.props.maxZoom);
          if (c) {
            var p = n.getPointOnContainer(o, n.containerPosition), f = n.getPointOnMedia(p), m = {
              x: f.x * l - p.x,
              y: f.y * l - p.y
            }, g = n.props.restrictPosition ? An(m, n.mediaSize, n.state.cropSize, l, n.props.rotation) : m;
            n.props.onCropChange(g);
          }
          n.props.onZoomChange(l);
        }
      }, n.getCropData = function() {
        if (!n.state.cropSize)
          return null;
        var r = n.props.restrictPosition ? An(n.props.crop, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : n.props.crop;
        return v2(r, n.mediaSize, n.state.cropSize, n.getAspect(), n.props.zoom, n.props.rotation, n.props.restrictPosition);
      }, n.emitCropData = function() {
        var r = n.getCropData();
        if (r) {
          var o = r.croppedAreaPercentages, a = r.croppedAreaPixels;
          n.props.onCropComplete && n.props.onCropComplete(o, a), n.props.onCropAreaChange && n.props.onCropAreaChange(o, a);
        }
      }, n.emitCropAreaChange = function() {
        var r = n.getCropData();
        if (r) {
          var o = r.croppedAreaPercentages, a = r.croppedAreaPixels;
          n.props.onCropAreaChange && n.props.onCropAreaChange(o, a);
        }
      }, n.recomputeCropPosition = function() {
        var r, o;
        if (n.state.cropSize) {
          var a = n.props.crop;
          if (n.isInitialized && (!((r = n.previousCropSize) === null || r === void 0) && r.width) && (!((o = n.previousCropSize) === null || o === void 0) && o.height)) {
            var i = Math.abs(n.previousCropSize.width - n.state.cropSize.width) > 1e-6 || Math.abs(n.previousCropSize.height - n.state.cropSize.height) > 1e-6;
            if (i) {
              var s = n.state.cropSize.width / n.previousCropSize.width, c = n.state.cropSize.height / n.previousCropSize.height;
              a = {
                x: n.props.crop.x * s,
                y: n.props.crop.y * c
              };
            }
          }
          var l = n.props.restrictPosition ? An(a, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : a;
          n.previousCropSize = n.state.cropSize, n.props.onCropChange(l), n.emitCropData();
        }
      }, n.onKeyDown = function(r) {
        var o, a, i = n.props, s = i.crop, c = i.onCropChange, l = i.keyboardStep, p = i.zoom, f = i.rotation, m = l;
        if (n.state.cropSize) {
          r.shiftKey && (m *= 0.2);
          var g = Ee({}, s);
          switch (r.key) {
            case "ArrowUp":
              g.y -= m, r.preventDefault();
              break;
            case "ArrowDown":
              g.y += m, r.preventDefault();
              break;
            case "ArrowLeft":
              g.x -= m, r.preventDefault();
              break;
            case "ArrowRight":
              g.x += m, r.preventDefault();
              break;
            default:
              return;
          }
          n.props.restrictPosition && (g = An(g, n.mediaSize, n.state.cropSize, p, f)), r.repeat || (a = (o = n.props).onInteractionStart) === null || a === void 0 || a.call(o), c(g);
        }
      }, n.onKeyUp = function(r) {
        var o, a;
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
        n.emitCropData(), (a = (o = n.props).onInteractionEnd) === null || a === void 0 || a.call(o);
      }, n;
    }
    return t.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = S2, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, t.prototype.componentWillUnmount = function() {
      var n, r;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (n = this.resizeObserver) === null || n === void 0 || n.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((r = this.styleRef.parentNode) === null || r === void 0 || r.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, t.prototype.componentDidUpdate = function(n) {
      var r, o, a, i, s, c, l, p, f;
      n.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : n.aspect !== this.props.aspect ? this.computeSizes() : n.objectFit !== this.props.objectFit ? this.computeSizes() : n.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((r = n.cropSize) === null || r === void 0 ? void 0 : r.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((a = n.cropSize) === null || a === void 0 ? void 0 : a.width) !== ((i = this.props.cropSize) === null || i === void 0 ? void 0 : i.width) ? this.computeSizes() : (((s = n.crop) === null || s === void 0 ? void 0 : s.x) !== ((c = this.props.crop) === null || c === void 0 ? void 0 : c.x) || ((l = n.crop) === null || l === void 0 ? void 0 : l.y) !== ((p = this.props.crop) === null || p === void 0 ? void 0 : p.y)) && this.emitCropAreaChange(), n.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), n.video !== this.props.video && ((f = this.videoRef.current) === null || f === void 0 || f.load());
      var m = this.getObjectFit();
      m !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: m
      }, this.computeSizes);
    }, t.prototype.getAspect = function() {
      var n = this.props, r = n.cropSize, o = n.aspect;
      return r ? r.width / r.height : o;
    }, t.prototype.getObjectFit = function() {
      var n, r, o, a;
      if (this.props.objectFit === "cover") {
        var i = this.imageRef.current || this.videoRef.current;
        if (i && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var s = this.containerRect.width / this.containerRect.height, c = ((n = this.imageRef.current) === null || n === void 0 ? void 0 : n.naturalWidth) || ((r = this.videoRef.current) === null || r === void 0 ? void 0 : r.videoWidth) || 0, l = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((a = this.videoRef.current) === null || a === void 0 ? void 0 : a.videoHeight) || 0, p = c / l;
          return p < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, t.prototype.onPinchStart = function(n) {
      var r = t.getTouchPoint(n.touches[0]), o = t.getTouchPoint(n.touches[1]);
      this.lastPinchDistance = rc(r, o), this.lastPinchRotation = oc(r, o), this.onDragStart(ac(r, o));
    }, t.prototype.onPinchMove = function(n) {
      var r = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = t.getTouchPoint(n.touches[0]), a = t.getTouchPoint(n.touches[1]), i = ac(o, a);
        this.onDrag(i), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = rc(o, a), c = r.props.zoom * (s / r.lastPinchDistance);
          r.setNewZoom(c, i, {
            shouldUpdatePosition: !1
          }), r.lastPinchDistance = s;
          var l = oc(o, a), p = r.props.rotation + (l - r.lastPinchRotation);
          r.props.onRotationChange && r.props.onRotationChange(p), r.lastPinchRotation = l;
        });
      }
    }, t.prototype.render = function() {
      var n = this, r, o = this.props, a = o.image, i = o.video, s = o.mediaProps, c = o.cropperProps, l = o.transform, p = o.crop, f = p.x, m = p.y, g = o.rotation, x = o.zoom, h = o.cropShape, v = o.showGrid, w = o.roundCropAreaPixels, y = o.style, C = y.containerStyle, S = y.cropAreaStyle, b = y.mediaStyle, E = o.classes, _ = E.containerClassName, O = E.cropAreaClassName, N = E.mediaClassName, W = (r = this.state.mediaObjectFit) !== null && r !== void 0 ? r : this.getObjectFit();
      return u.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(G) {
          return n.containerRef = G;
        },
        "data-testid": "container",
        style: C,
        className: kr("reactEasyCrop_Container", _)
      }, a ? u.createElement("img", Ee({
        alt: "",
        className: kr("reactEasyCrop_Image", W === "contain" && "reactEasyCrop_Contain", W === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", W === "vertical-cover" && "reactEasyCrop_Cover_Vertical", N)
      }, s, {
        src: a,
        ref: this.imageRef,
        style: Ee(Ee({}, b), {
          transform: l || "translate(".concat(f, "px, ").concat(m, "px) rotate(").concat(g, "deg) scale(").concat(x, ")")
        }),
        onLoad: this.onMediaLoad
      })) : i && u.createElement("video", Ee({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: kr("reactEasyCrop_Video", W === "contain" && "reactEasyCrop_Contain", W === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", W === "vertical-cover" && "reactEasyCrop_Cover_Vertical", N)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: Ee(Ee({}, b), {
          transform: l || "translate(".concat(f, "px, ").concat(m, "px) rotate(").concat(g, "deg) scale(").concat(x, ")")
        }),
        controls: !1
      }), (Array.isArray(i) ? i : [{
        src: i
      }]).map(function(K) {
        return u.createElement("source", Ee({
          key: K.src
        }, K));
      })), this.state.cropSize && u.createElement("div", Ee({
        ref: this.cropperRef,
        style: Ee(Ee({}, S), {
          width: w ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: w ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: kr("reactEasyCrop_CropArea", h === "round" && "reactEasyCrop_CropAreaRound", v && "reactEasyCrop_CropAreaGrid", O)
      }, c)));
    }, t.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: _2,
      minZoom: E2,
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
      keyboardStep: M2
    }, t.getMousePoint = function(n) {
      return {
        x: Number(n.clientX),
        y: Number(n.clientY)
      };
    }, t.getTouchPoint = function(n) {
      return {
        x: Number(n.clientX),
        y: Number(n.clientY)
      };
    }, t;
  })(u.Component)
);
function D2({
  imageUrl: e,
  aspect: t,
  rounded: n,
  crop: r,
  zoom: o,
  onCropChange: a,
  onZoomChange: i,
  onCropComplete: s,
  onClose: c,
  onConfirm: l
}) {
  const p = ue(
    (f, m) => s(m),
    [s]
  );
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 sm:p-6",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Crop image",
      children: /* @__PURE__ */ d.jsxs("div", { className: "w-full sm:max-w-2xl bg-white sm:rounded-lg max-h-[95dvh] sm:max-h-[90vh] overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4", children: [
          /* @__PURE__ */ d.jsx("h2", { className: "text-base sm:text-lg font-semibold text-gray-900", children: "Crop image" }),
          /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              onClick: c,
              className: "inline-flex size-10 items-center justify-center rounded-md hover:bg-gray-25 transition-colors",
              "aria-label": "Close crop modal",
              children: /* @__PURE__ */ d.jsx(Ba, { className: "size-5 text-gray-700" })
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "flex-1 overflow-auto px-4 py-4 sm:px-6 sm:py-6", children: [
          /* @__PURE__ */ d.jsx("div", { className: "relative w-full overflow-hidden rounded-lg bg-gray-900", children: /* @__PURE__ */ d.jsx("div", { className: "relative h-[60dvh] sm:h-[420px] w-full", children: /* @__PURE__ */ d.jsx(
            O2,
            {
              image: e,
              crop: r,
              zoom: o,
              aspect: t,
              cropShape: n ? "round" : "rect",
              onCropChange: a,
              onCropComplete: p,
              onZoomChange: i
            }
          ) }) }),
          /* @__PURE__ */ d.jsxs("div", { className: "mt-4 space-y-2", children: [
            /* @__PURE__ */ d.jsxs("label", { className: "text-sm font-medium text-gray-700", children: [
              "Zoom: ",
              o.toFixed(1),
              "x"
            ] }),
            /* @__PURE__ */ d.jsx(
              "input",
              {
                type: "range",
                min: 1,
                max: 3,
                step: 0.1,
                value: o,
                onChange: (f) => i(parseFloat(f.target.value)),
                className: "w-full cursor-pointer",
                "aria-label": "Zoom"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "sticky bottom-0 z-10 border-t border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4", children: /* @__PURE__ */ d.jsx("div", { className: "flex flex-col-reverse sm:flex-row gap-2 sm:justify-end", children: /* @__PURE__ */ d.jsx(
          eo,
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
function P2(e) {
  const t = {};
  for (const n of e) {
    const r = n.toLowerCase().replace(/^\./, ""), o = `image/${r === "jpg" ? "jpeg" : r}`;
    t[o] ??= [], t[o].push(`.${r}`);
  }
  return t;
}
function R2(e) {
  return new Promise((t, n) => {
    const r = new Image();
    r.addEventListener("load", () => t(r)), r.addEventListener("error", (o) => n(o)), r.setAttribute("crossOrigin", "anonymous"), r.src = e;
  });
}
async function j2(e, t, n) {
  const r = await R2(e), o = document.createElement("canvas"), a = o.getContext("2d");
  if (!a) throw new Error("Could not get canvas context");
  o.width = Math.max(1, Math.round(t.width)), o.height = Math.max(1, Math.round(t.height)), a.drawImage(
    r,
    t.x,
    t.y,
    t.width,
    t.height,
    0,
    0,
    o.width,
    o.height
  );
  const i = await new Promise((s, c) => {
    o.toBlob(
      (l) => l ? s(l) : c(new Error("Canvas is empty")),
      n.fileType || "image/png",
      0.92
    );
  });
  return new File([i], n.fileName, { type: n.fileType || i.type });
}
function ES({
  value: e,
  onChange: t,
  aspectRatio: n,
  extensions: r,
  rounded: o = !1,
  maxSize: a = 5 * 1024 * 1024,
  minWidth: i,
  minHeight: s,
  maxWidth: c,
  maxHeight: l,
  placeholder: p = "Accepted files jpg, png and webp",
  className: f
}) {
  const [m, g] = Be(null), [x, h] = Be([]), [v, w] = Be(!1), [y, C] = Be(null), [S, b] = Be({ x: 0, y: 0 }), [E, _] = Be(1), [O, N] = Be(null), W = Je(() => P2(r), [r]);
  un(() => {
    if (!e) {
      m && URL.revokeObjectURL(m), g(null);
      return;
    }
    const k = URL.createObjectURL(e);
    return m && URL.revokeObjectURL(m), g(k), () => {
      URL.revokeObjectURL(k);
    };
  }, [e]);
  const K = ue(
    async (k) => {
      const j = k[0];
      if (!j) return;
      if (h([]), [i, s, c, l].some(
        (q) => typeof q == "number"
      ))
        try {
          const q = await new Promise(
            (M, U) => {
              const J = URL.createObjectURL(j), z = new Image();
              z.onload = () => {
                const ae = z.naturalWidth || z.width, I = z.naturalHeight || z.height;
                URL.revokeObjectURL(J), M({ width: ae, height: I });
              }, z.onerror = () => {
                URL.revokeObjectURL(J), U(new Error("Unable to read image dimensions"));
              }, z.src = J;
            }
          ), Y = [];
          if (typeof i == "number" && q.width < i && Y.push(
            `Image width is too small. Minimum width is ${i}px.`
          ), typeof s == "number" && q.height < s && Y.push(
            `Image height is too small. Minimum height is ${s}px.`
          ), typeof c == "number" && q.width > c && Y.push(
            `Image width is too large. Maximum width is ${c}px.`
          ), typeof l == "number" && q.height > l && Y.push(
            `Image height is too large. Maximum height is ${l}px.`
          ), Y.length > 0) {
            h(Y);
            return;
          }
        } catch {
          h(["Unable to read image dimensions. Please try another image."]);
          return;
        }
      const F = URL.createObjectURL(j);
      C(F), w(!0), b({ x: 0, y: 0 }), _(1), N(null);
    },
    [l, c, s, i]
  ), { getRootProps: G, getInputProps: H, isDragActive: $, fileRejections: Z } = Si({
    onDrop: K,
    accept: W,
    maxSize: a,
    multiple: !1
  }), B = [
    ...Z.flatMap(
      (k) => k.errors.map((j) => j.code === "file-too-large" ? `File is too large. Max size is ${(a / 1048576).toFixed(0)}MB` : j.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${r.join(", ")}` : j.message)
    ),
    ...x
  ], te = ue(() => {
    w(!1), y && URL.revokeObjectURL(y), C(null);
  }, [y]), R = ue(async () => {
    if (!(!y || !O))
      try {
        const k = await j2(y, O, {
          fileName: e?.name ?? "image.png",
          fileType: e?.type ?? "image/png"
        });
        t(k), w(!1), URL.revokeObjectURL(y), C(null);
      } catch (k) {
        console.error("Error cropping image:", k);
      }
  }, [O, t, y, e?.name, e?.type]), A = ue(() => {
    m && URL.revokeObjectURL(m), g(null), t(null);
  }, [t, m]), D = o ? { aspectRatio: "1 / 1" } : { aspectRatio: `${n}` };
  return /* @__PURE__ */ d.jsxs("div", { className: P("w-full space-y-2", f), children: [
    m ? /* @__PURE__ */ d.jsxs("div", { className: "relative w-fit max-h-44", children: [
      /* @__PURE__ */ d.jsx(
        "div",
        {
          className: P(
            "h-44 overflow-hidden border border-gray-50 bg-white shadow-lg",
            o ? "rounded-full" : "rounded-lg"
          ),
          style: D,
          children: /* @__PURE__ */ d.jsx(
            "img",
            {
              src: m,
              alt: "Preview",
              className: "object-contain",
              style: { maxHeight: "11rem" }
            }
          )
        }
      ),
      /* @__PURE__ */ d.jsx(
        "button",
        {
          type: "button",
          onClick: A,
          "aria-label": "Remove image",
          className: P(
            "absolute right-1 top-1 inline-flex items-center justify-center",
            "size-10 rounded-full bg-gray-600 text-white border border-white",
            "hover:bg-gray-700 transition-colors"
          ),
          children: /* @__PURE__ */ d.jsx(Ba, { className: "size-4" })
        }
      )
    ] }) : /* @__PURE__ */ d.jsxs(
      "div",
      {
        ...G(),
        className: P(
          "relative flex w-full items-center justify-center",
          "rounded-[0.625rem] border border-gray-50 bg-white",
          "min-h-44",
          "cursor-pointer transition-colors",
          $ && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ d.jsx("input", { ...H() }),
          /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col items-center justify-center px-4 text-center gap-y-3", children: [
            /* @__PURE__ */ d.jsx("img", { src: s2, alt: "" }),
            /* @__PURE__ */ d.jsx("p", { className: "text-sm font-manrope font-medium text-gray-700", children: "Click to upload or drag and drop" }),
            !!p && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-gray-500", children: p })
          ] })
        ]
      }
    ),
    B.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "space-y-1", children: B.map((k, j) => /* @__PURE__ */ d.jsx("p", { className: "text-sm text-bright-red-600", children: k }, j)) }),
    v && y && /* @__PURE__ */ d.jsx(
      D2,
      {
        imageUrl: y,
        aspect: n,
        rounded: o,
        crop: S,
        zoom: E,
        onCropChange: b,
        onZoomChange: _,
        onCropComplete: (k) => N(k),
        onClose: te,
        onConfirm: R
      }
    )
  ] });
}
function T2({ className: e, type: t, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: P(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "border border-gray-200 h-10 w-full min-w-0 rounded-sm bg-transparent px-3 text-base font-manrope transition-[color,box-shadow]",
        "outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "hover:border-blue-hepatica-700 focus-visible:border-2 focus-visible:border-blue-hepatica-600",
        "focus-visible:shadow-button focus-visible:ring-0 focus-visible:bg-blue-hepatica-50",
        "aria-invalid:border-bright-red-600 aria-invalid:focus-visible:border-bright-red-600",
        e
      ),
      ...n
    }
  );
}
function _S({
  className: e,
  ...t
}) {
  const [n, r] = Be(!1), o = ue(() => {
    r((a) => !a);
  }, []);
  return /* @__PURE__ */ d.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ d.jsx(
      T2,
      {
        ...t,
        "data-slot": "input",
        className: P(e, "pr-10"),
        type: n ? "text" : "password"
      }
    ),
    /* @__PURE__ */ d.jsxs(
      "button",
      {
        type: "button",
        className: "absolute right-0 top-0 size-10 flex items-center justify-center",
        onClick: o,
        children: [
          n && /* @__PURE__ */ d.jsx(og, { className: "size-4 text-gray-300" }),
          !n && /* @__PURE__ */ d.jsx(ig, { className: "size-4 text-gray-300" })
        ]
      }
    )
  ] });
}
var N2 = Object.defineProperty, A2 = Object.defineProperties, I2 = Object.getOwnPropertyDescriptors, $r = Object.getOwnPropertySymbols, ju = Object.prototype.hasOwnProperty, Tu = Object.prototype.propertyIsEnumerable, ic = (e, t, n) => t in e ? N2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, F2 = (e, t) => {
  for (var n in t || (t = {})) ju.call(t, n) && ic(e, n, t[n]);
  if ($r) for (var n of $r(t)) Tu.call(t, n) && ic(e, n, t[n]);
  return e;
}, L2 = (e, t) => A2(e, I2(t)), W2 = (e, t) => {
  var n = {};
  for (var r in e) ju.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && $r) for (var r of $r(e)) t.indexOf(r) < 0 && Tu.call(e, r) && (n[r] = e[r]);
  return n;
};
function z2(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function $2(e) {
  let t = u.useRef();
  return u.useEffect(() => {
    t.current = e;
  }), t.current;
}
var B2 = 18, Nu = 40, V2 = `${Nu}px`, H2 = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function Y2({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let [o, a] = u.useState(!1), [i, s] = u.useState(!1), [c, l] = u.useState(!1), p = u.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && o && i, [o, i, n]), f = u.useCallback(() => {
    let m = e.current, g = t.current;
    if (!m || !g || c || n === "none") return;
    let x = m, h = x.getBoundingClientRect().left + x.offsetWidth, v = x.getBoundingClientRect().top + x.offsetHeight / 2, w = h - B2, y = v;
    document.querySelectorAll(H2).length === 0 && document.elementFromPoint(w, y) === m || (a(!0), l(!0));
  }, [e, t, c, n]);
  return u.useEffect(() => {
    let m = e.current;
    if (!m || n === "none") return;
    function g() {
      let h = window.innerWidth - m.getBoundingClientRect().right;
      s(h >= Nu);
    }
    g();
    let x = setInterval(g, 1e3);
    return () => {
      clearInterval(x);
    };
  }, [e, n]), u.useEffect(() => {
    let m = r || document.activeElement === t.current;
    if (n === "none" || !m) return;
    let g = setTimeout(f, 0), x = setTimeout(f, 2e3), h = setTimeout(f, 5e3), v = setTimeout(() => {
      l(!0);
    }, 6e3);
    return () => {
      clearTimeout(g), clearTimeout(x), clearTimeout(h), clearTimeout(v);
    };
  }, [t, r, n, f]), { hasPWMBadge: o, willPushPWMBadge: p, PWM_BADGE_SPACE_WIDTH: V2 };
}
var Au = u.createContext({}), Iu = u.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: i = "left", pattern: s, placeholder: c, inputMode: l = "numeric", onComplete: p, pushPasswordManagerStrategy: f = "increase-width", pasteTransformer: m, containerClassName: g, noScriptCSSFallback: x = U2, render: h, children: v } = n, w = W2(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), y, C, S, b, E;
  let [_, O] = u.useState(typeof w.defaultValue == "string" ? w.defaultValue : ""), N = r ?? _, W = $2(N), K = u.useCallback((ne) => {
    o?.(ne), O(ne);
  }, [o]), G = u.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), H = u.useRef(null), $ = u.useRef(null), Z = u.useRef({ value: N, onChange: K, isIOS: typeof window < "u" && ((C = (y = window?.CSS) == null ? void 0 : y.supports) == null ? void 0 : C.call(y, "-webkit-touch-callout", "none")) }), B = u.useRef({ prev: [(S = H.current) == null ? void 0 : S.selectionStart, (b = H.current) == null ? void 0 : b.selectionEnd, (E = H.current) == null ? void 0 : E.selectionDirection] });
  u.useImperativeHandle(t, () => H.current, []), u.useEffect(() => {
    let ne = H.current, ie = $.current;
    if (!ne || !ie) return;
    Z.current.value !== ne.value && Z.current.onChange(ne.value), B.current.prev = [ne.selectionStart, ne.selectionEnd, ne.selectionDirection];
    function Me() {
      if (document.activeElement !== ne) {
        j(null), F(null);
        return;
      }
      let xe = ne.selectionStart, Re = ne.selectionEnd, Dt = ne.selectionDirection, ze = ne.maxLength, Ze = ne.value, V = B.current.prev, re = -1, he = -1, Ce;
      if (Ze.length !== 0 && xe !== null && Re !== null) {
        let $t = xe === Re, Bt = xe === Ze.length && Ze.length < ze;
        if ($t && !Bt) {
          let Ve = xe;
          if (Ve === 0) re = 0, he = 1, Ce = "forward";
          else if (Ve === ze) re = Ve - 1, he = Ve, Ce = "backward";
          else if (ze > 1 && Ze.length > 1) {
            let dt = 0;
            if (V[0] !== null && V[1] !== null) {
              Ce = Ve < V[1] ? "backward" : "forward";
              let Vt = V[0] === V[1] && V[0] < ze;
              Ce === "backward" && !Vt && (dt = -1);
            }
            re = dt + Ve, he = dt + Ve + 1;
          }
        }
        re !== -1 && he !== -1 && re !== he && H.current.setSelectionRange(re, he, Ce);
      }
      let Ae = re !== -1 ? re : xe, ct = he !== -1 ? he : Re, lt = Ce ?? Dt;
      j(Ae), F(ct), B.current.prev = [Ae, ct, lt];
    }
    if (document.addEventListener("selectionchange", Me, { capture: !0 }), Me(), document.activeElement === ne && D(!0), !document.getElementById("input-otp-style")) {
      let xe = document.createElement("style");
      if (xe.id = "input-otp-style", document.head.appendChild(xe), xe.sheet) {
        let Re = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        In(xe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), In(xe.sheet, `[data-input-otp]:autofill { ${Re} }`), In(xe.sheet, `[data-input-otp]:-webkit-autofill { ${Re} }`), In(xe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), In(xe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let _e = () => {
      ie && ie.style.setProperty("--root-height", `${ne.clientHeight}px`);
    };
    _e();
    let Ne = new ResizeObserver(_e);
    return Ne.observe(ne), () => {
      document.removeEventListener("selectionchange", Me, { capture: !0 }), Ne.disconnect();
    };
  }, []);
  let [te, R] = u.useState(!1), [A, D] = u.useState(!1), [k, j] = u.useState(null), [L, F] = u.useState(null);
  u.useEffect(() => {
    z2(() => {
      var ne, ie, Me, _e;
      (ne = H.current) == null || ne.dispatchEvent(new Event("input"));
      let Ne = (ie = H.current) == null ? void 0 : ie.selectionStart, xe = (Me = H.current) == null ? void 0 : Me.selectionEnd, Re = (_e = H.current) == null ? void 0 : _e.selectionDirection;
      Ne !== null && xe !== null && (j(Ne), F(xe), B.current.prev = [Ne, xe, Re]);
    });
  }, [N, A]), u.useEffect(() => {
    W !== void 0 && N !== W && W.length < a && N.length === a && p?.(N);
  }, [a, p, W, N]);
  let q = Y2({ containerRef: $, inputRef: H, pushPasswordManagerStrategy: f, isFocused: A }), Y = u.useCallback((ne) => {
    let ie = ne.currentTarget.value.slice(0, a);
    if (ie.length > 0 && G && !G.test(ie)) {
      ne.preventDefault();
      return;
    }
    typeof W == "string" && ie.length < W.length && document.dispatchEvent(new Event("selectionchange")), K(ie);
  }, [a, K, W, G]), M = u.useCallback(() => {
    var ne;
    if (H.current) {
      let ie = Math.min(H.current.value.length, a - 1), Me = H.current.value.length;
      (ne = H.current) == null || ne.setSelectionRange(ie, Me), j(ie), F(Me);
    }
    D(!0);
  }, [a]), U = u.useCallback((ne) => {
    var ie, Me;
    let _e = H.current;
    if (!m && (!Z.current.isIOS || !ne.clipboardData || !_e)) return;
    let Ne = ne.clipboardData.getData("text/plain"), xe = m ? m(Ne) : Ne;
    ne.preventDefault();
    let Re = (ie = H.current) == null ? void 0 : ie.selectionStart, Dt = (Me = H.current) == null ? void 0 : Me.selectionEnd, ze = (Re !== Dt ? N.slice(0, Re) + xe + N.slice(Dt) : N.slice(0, Re) + xe + N.slice(Re)).slice(0, a);
    if (ze.length > 0 && G && !G.test(ze)) return;
    _e.value = ze, K(ze);
    let Ze = Math.min(ze.length, a - 1), V = ze.length;
    _e.setSelectionRange(Ze, V), j(Ze), F(V);
  }, [a, K, G, N]), J = u.useMemo(() => ({ position: "relative", cursor: w.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [w.disabled]), z = u.useMemo(() => ({ position: "absolute", inset: 0, width: q.willPushPWMBadge ? `calc(100% + ${q.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: q.willPushPWMBadge ? `inset(0 ${q.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [q.PWM_BADGE_SPACE_WIDTH, q.willPushPWMBadge, i]), ae = u.useMemo(() => u.createElement("input", L2(F2({ autoComplete: w.autoComplete || "one-time-code" }, w), { "data-input-otp": !0, "data-input-otp-placeholder-shown": N.length === 0 || void 0, "data-input-otp-mss": k, "data-input-otp-mse": L, inputMode: l, pattern: G?.source, "aria-placeholder": c, style: z, maxLength: a, value: N, ref: H, onPaste: (ne) => {
    var ie;
    U(ne), (ie = w.onPaste) == null || ie.call(w, ne);
  }, onChange: Y, onMouseOver: (ne) => {
    var ie;
    R(!0), (ie = w.onMouseOver) == null || ie.call(w, ne);
  }, onMouseLeave: (ne) => {
    var ie;
    R(!1), (ie = w.onMouseLeave) == null || ie.call(w, ne);
  }, onFocus: (ne) => {
    var ie;
    M(), (ie = w.onFocus) == null || ie.call(w, ne);
  }, onBlur: (ne) => {
    var ie;
    D(!1), (ie = w.onBlur) == null || ie.call(w, ne);
  } })), [Y, M, U, l, z, a, L, k, w, G?.source, N]), I = u.useMemo(() => ({ slots: Array.from({ length: a }).map((ne, ie) => {
    var Me;
    let _e = A && k !== null && L !== null && (k === L && ie === k || ie >= k && ie < L), Ne = N[ie] !== void 0 ? N[ie] : null, xe = N[0] !== void 0 ? null : (Me = c?.[ie]) != null ? Me : null;
    return { char: Ne, placeholderChar: xe, isActive: _e, hasFakeCaret: _e && Ne === null };
  }), isFocused: A, isHovering: !w.disabled && te }), [A, te, a, L, k, w.disabled, N]), ve = u.useMemo(() => h ? h(I) : u.createElement(Au.Provider, { value: I }, v), [v, I, h]);
  return u.createElement(u.Fragment, null, x !== null && u.createElement("noscript", null, u.createElement("style", null, x)), u.createElement("div", { ref: $, "data-input-otp-container": !0, style: J, className: g }, ve, u.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, ae)));
});
Iu.displayName = "Input";
function In(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var U2 = `
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
function MS({ className: e, containerClassName: t, ...n }) {
  return /* @__PURE__ */ d.jsx(
    Iu,
    {
      "data-slot": "input-otp",
      containerClassName: P("flex items-center gap-2 has-disabled:opacity-50", t),
      className: P("disabled:cursor-not-allowed", e),
      ...n
    }
  );
}
function OS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: P("flex items-center gap-2", e),
      ...t
    }
  );
}
function DS({
  index: e,
  className: t,
  ...n
}) {
  const r = Or(Au), { char: o, hasFakeCaret: a, isActive: i } = r?.slots[e] ?? {};
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": i,
      className: P(
        "data-[active=true]:bg-white data-[active=true]:shadow-button data-[active=true]:ring-0",
        "data-[active=true]:border-blue-hepatica-600 data-[active=true]:aria-invalid:border-bright-red-600",
        "border border-gray-200 relative flex size-10 items-center justify-center",
        " rounded-sm text-base font-manrope bg-transparent transition-all outline-none",
        "data-[active=true]:z-10",
        t
      ),
      ...n,
      children: [
        o,
        a && /* @__PURE__ */ d.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ d.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function PS({ ...e }) {
  return /* @__PURE__ */ d.jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ d.jsx(cg, {}) });
}
function Fu({ size: e = 48, className: t, ...n }) {
  const r = typeof e == "number" ? `${e}` : e, o = typeof n["aria-label"] == "string";
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 47 48",
      width: r,
      height: r,
      className: P("inline-block", t),
      "aria-hidden": o ? void 0 : !0,
      role: o ? "img" : "presentation",
      ...n,
      children: [
        /* @__PURE__ */ d.jsx(
          "path",
          {
            d: "M19.2133 35.3017C18.2492 38.5617 18.6978 42.077 20.4506 44.9899L20.4943 45.0635L13.8785 40.431L20.4869 30.9956L19.2133 35.3017ZM20.7073 24.9743C21.9138 25.819 22.2068 27.482 21.3622 28.6884L13.3829 40.0841L11.1984 38.5544L20.7073 24.9743ZM20.7056 18.0024C22.241 19.0776 22.6141 21.1938 21.5391 22.7293L10.7017 38.2067L9.50708 37.3701C8.96698 36.992 8.46813 36.5767 8.00954 36.1319L20.7056 18.0024ZM20.7058 9.75901C22.5703 11.0646 23.0234 13.635 21.718 15.4996L7.57802 35.6923C6.53641 34.5734 5.73826 33.2869 5.19379 31.9112L20.7058 9.75901ZM20.7043 0.246588C22.8979 1.78253 23.4309 4.80619 21.8951 6.99983L4.93983 31.2132C3.80636 27.7434 4.24748 23.8057 6.47085 20.5729L20.7043 0.246588Z",
            fill: "#BF3535"
          }
        ),
        /* @__PURE__ */ d.jsx(
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
function RS({ size: e = 32, className: t, ...n }) {
  return /* @__PURE__ */ d.jsxs("div", { className: P("inline-flex items-center gap-2", t), ...n, children: [
    /* @__PURE__ */ d.jsx(Fu, { size: e }),
    /* @__PURE__ */ d.jsx("span", { className: "font-manrope text-base font-normal leading-none text-white", children: "MercySeat" })
  ] });
}
function G2(e) {
  return new Promise((t, n) => {
    const r = URL.createObjectURL(e), o = document.createElement(
      e.type.startsWith("video/") ? "video" : "audio"
    );
    o.preload = "metadata", o.src = r, o.onloadedmetadata = () => {
      const a = o.duration;
      URL.revokeObjectURL(r), t(a);
    }, o.onerror = () => {
      URL.revokeObjectURL(r), n(new Error("Failed to load media metadata"));
    };
  });
}
function q2(e) {
  return ["mp4", "webm", "ogg", "mov", "m4v"].includes(e) ? `video/${e === "mov" ? "quicktime" : e}` : ["mp3", "wav", "ogg", "aac", "flac", "m4a"].includes(e) ? `audio/${e === "mp3" ? "mpeg" : e === "m4a" ? "mp4" : e}` : null;
}
function K2(e) {
  const t = {};
  for (const n of e) {
    const r = n.toLowerCase().replace(/^\./, ""), o = q2(r);
    o && (t[o] ??= [], t[o].push(`.${r}`));
  }
  return t;
}
function Z2({ extensions: e, placeholder: t, onDropFile: n }) {
  const r = Je(() => K2(e), [e]), o = ue(
    async (p) => {
      const f = p[0] || null;
      if (f && !(!f.type.startsWith("video/") && !f.type.startsWith("audio/")))
        try {
          const m = await G2(f);
          n({
            file: f,
            meta: {
              duration: m,
              type: f.type.startsWith("video/") ? "video" : "audio",
              extension: f.name.split(".").pop() || "",
              previewUrl: URL.createObjectURL(f)
            }
          });
        } catch (m) {
          console.error("Failed to read media duration", m);
        }
    },
    [n]
  ), { getRootProps: a, getInputProps: i, isDragActive: s, fileRejections: c } = Si({
    onDrop: o,
    accept: r,
    maxFiles: 1
  }), l = c.flatMap(
    (p) => p.errors.map((f) => f.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${e.join(", ")}` : f.message)
  );
  return /* @__PURE__ */ d.jsxs("div", { className: "space-y-2 w-full", children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        ...a(),
        className: P(
          "relative flex flex-col items-center justify-center w-full min-h-38.5 border border-gray-50 rounded-[0.625rem] cursor-pointer transition-colors bg-white",
          s && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ d.jsx("input", { ...i() }),
          /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ d.jsx("div", { className: "size-12 flex items-center justify-center rounded-full bg-gray-25 mb-4", children: /* @__PURE__ */ d.jsx(dl, { className: "size-6 text-blue-hepatica-600" }) }),
            /* @__PURE__ */ d.jsx("p", { className: "mb-2 text-sm text-gray-700 font-medium", children: "Click to upload or drag and drop" }),
            !!t && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-gray-500 text-center", children: t })
          ] })
        ]
      }
    ),
    l.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "space-y-1", children: l.map((p, f) => /* @__PURE__ */ d.jsx("p", { className: "text-sm text-bright-red-600", children: p }, f)) })
  ] });
}
function X2({ file: e, onChange: t }) {
  const n = ue(() => {
    t(null);
  }, [t]), r = e.type.startsWith("video/") ? "Video" : "Audio";
  return /* @__PURE__ */ d.jsxs("div", { className: "w-full p-4 flex justify-between items-center bg-white border border-gray-50 rounded-lg", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ d.jsx("div", { className: "size-10 bg-gray-25 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ d.jsx(dl, { className: "size-6 text-blue-hepatica-600" }) }),
      /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ d.jsx("h3", { className: "text-sm leading-4.5 font-medium text-gray-700 tracking-[0.02em]", children: e.name }),
        /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-normal leading-4 text-gray-100 tracking-[0.02em]", children: [
          r,
          " file uploaded"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ d.jsx(
      "button",
      {
        type: "button",
        onClick: n,
        className: "size-10 flex items-center justify-center rounded-lg bg-white hover:bg-bright-red-100 transition-colors duration-200",
        children: /* @__PURE__ */ d.jsx(dg, { className: "size-4 text-bright-red-600" })
      }
    )
  ] });
}
function jS({
  accepts: e,
  onChange: t,
  value: n,
  placeholder: r = ""
}) {
  return n ? /* @__PURE__ */ d.jsx(X2, { file: n, onChange: t }) : /* @__PURE__ */ d.jsx(
    Z2,
    {
      extensions: e,
      onDropFile: t,
      placeholder: r
    }
  );
}
function TS({ active: e, children: t, collapsed: n, disabled: r = !1 }) {
  return /* @__PURE__ */ d.jsx(
    Xr,
    {
      className: P(
        "flex w-full h-10 items-center justify-start gap-x-3 px-3 text-sm font-manrope font-semibold text-white bg-transparent [&>svg:size-4] hover:bg-blue-hepatica-600 rounded-lg transition-all duration-200",
        {
          "[&>span]:hidden w-10": n,
          "bg-blue-hepatica-800": e,
          "disabled:text-gray-600 disabled:pointer-events-none": r
        }
      ),
      children: t
    }
  );
}
function sc(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
// @__NO_SIDE_EFFECTS__
function J2(e) {
  const t = /* @__PURE__ */ Q2(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), c = s.find(tC);
    if (c) {
      const l = c.props.children, p = s.map((f) => f === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, p) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Q2(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = rC(o), s = nC(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? bt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var eC = /* @__PURE__ */ Symbol("radix.slottable");
function tC(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === eC;
}
function nC(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function rC(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function oC(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Lu = Object.freeze({
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
}), aC = "VisuallyHidden", iC = u.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    le.span,
    {
      ...e,
      ref: t,
      style: { ...Lu, ...e.style }
    }
  )
);
iC.displayName = aC;
var sC = [" ", "Enter", "ArrowUp", "ArrowDown"], cC = [" ", "Enter"], Xt = "Select", [xo, bo, lC] = ai(Xt), [Mn] = xt(Xt, [
  lC,
  It
]), yo = It(), [dC, Wt] = Mn(Xt), [uC, pC] = Mn(Xt), Wu = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: c,
    dir: l,
    name: p,
    autoComplete: f,
    disabled: m,
    required: g,
    form: x
  } = e, h = yo(t), [v, w] = u.useState(null), [y, C] = u.useState(null), [S, b] = u.useState(!1), E = ii(l), [_, O] = Tt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Xt
  }), [N, W] = Tt({
    prop: i,
    defaultProp: s,
    onChange: c,
    caller: Xt
  }), K = u.useRef(null), G = v ? x || !!v.closest("form") : !0, [H, $] = u.useState(/* @__PURE__ */ new Set()), Z = Array.from(H).map((B) => B.props.value).join(";");
  return /* @__PURE__ */ d.jsx(rr, { ...h, children: /* @__PURE__ */ d.jsxs(
    dC,
    {
      required: g,
      scope: t,
      trigger: v,
      onTriggerChange: w,
      valueNode: y,
      onValueNodeChange: C,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: b,
      contentId: Ue(),
      value: N,
      onValueChange: W,
      open: _,
      onOpenChange: O,
      dir: E,
      triggerPointerDownPosRef: K,
      disabled: m,
      children: [
        /* @__PURE__ */ d.jsx(xo.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
          uC,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((B) => {
              $((te) => new Set(te).add(B));
            }, []),
            onNativeOptionRemove: u.useCallback((B) => {
              $((te) => {
                const R = new Set(te);
                return R.delete(B), R;
              });
            }, []),
            children: n
          }
        ) }),
        G ? /* @__PURE__ */ d.jsxs(
          dp,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: p,
            autoComplete: f,
            value: N,
            onChange: (B) => W(B.target.value),
            disabled: m,
            form: x,
            children: [
              N === void 0 ? /* @__PURE__ */ d.jsx("option", { value: "" }) : null,
              Array.from(H)
            ]
          },
          Z
        ) : null
      ]
    }
  ) });
};
Wu.displayName = Xt;
var zu = "SelectTrigger", $u = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = yo(n), i = Wt(zu, n), s = i.disabled || r, c = pe(t, i.onTriggerChange), l = bo(n), p = u.useRef("touch"), [f, m, g] = pp((h) => {
      const v = l().filter((C) => !C.disabled), w = v.find((C) => C.value === i.value), y = fp(v, h, w);
      y !== void 0 && i.onValueChange(y.value);
    }), x = (h) => {
      s || (i.onOpenChange(!0), g()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ d.jsx(or, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
      le.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": up(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: X(o.onClick, (h) => {
          h.currentTarget.focus(), p.current !== "mouse" && x(h);
        }),
        onPointerDown: X(o.onPointerDown, (h) => {
          p.current = h.pointerType;
          const v = h.target;
          v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (x(h), h.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (h) => {
          const v = f.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(v && h.key === " ") && sC.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
$u.displayName = zu;
var Bu = "SelectValue", Vu = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i = "", ...s } = e, c = Wt(Bu, n), { onValueNodeHasChildrenChange: l } = c, p = a !== void 0, f = pe(t, c.onValueNodeChange);
    return Le(() => {
      l(p);
    }, [l, p]), /* @__PURE__ */ d.jsx(
      le.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: up(c.value) ? /* @__PURE__ */ d.jsx(d.Fragment, { children: i }) : a
      }
    );
  }
);
Vu.displayName = Bu;
var fC = "SelectIcon", Hu = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(le.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Hu.displayName = fC;
var mC = "SelectPortal", Yu = (e) => /* @__PURE__ */ d.jsx(Zn, { asChild: !0, ...e });
Yu.displayName = mC;
var Jt = "SelectContent", Uu = u.forwardRef(
  (e, t) => {
    const n = Wt(Jt, e.__scopeSelect), [r, o] = u.useState();
    if (Le(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Ur.createPortal(
        /* @__PURE__ */ d.jsx(Gu, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx(xo.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ d.jsx(qu, { ...e, ref: t });
  }
);
Uu.displayName = Jt;
var tt = 10, [Gu, zt] = Mn(Jt), hC = "SelectContentImpl", gC = /* @__PURE__ */ J2("SelectContent.RemoveScroll"), qu = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: v,
      //
      ...w
    } = e, y = Wt(Jt, n), [C, S] = u.useState(null), [b, E] = u.useState(null), _ = pe(t, (M) => S(M)), [O, N] = u.useState(null), [W, K] = u.useState(
      null
    ), G = bo(n), [H, $] = u.useState(!1), Z = u.useRef(!1);
    u.useEffect(() => {
      if (C) return Kr(C);
    }, [C]), Gr();
    const B = u.useCallback(
      (M) => {
        const [U, ...J] = G().map((I) => I.ref.current), [z] = J.slice(-1), ae = document.activeElement;
        for (const I of M)
          if (I === ae || (I?.scrollIntoView({ block: "nearest" }), I === U && b && (b.scrollTop = 0), I === z && b && (b.scrollTop = b.scrollHeight), I?.focus(), document.activeElement !== ae)) return;
      },
      [G, b]
    ), te = u.useCallback(
      () => B([O, C]),
      [B, O, C]
    );
    u.useEffect(() => {
      H && te();
    }, [H, te]);
    const { onOpenChange: R, triggerPointerDownPosRef: A } = y;
    u.useEffect(() => {
      if (C) {
        let M = { x: 0, y: 0 };
        const U = (z) => {
          M = {
            x: Math.abs(Math.round(z.pageX) - (A.current?.x ?? 0)),
            y: Math.abs(Math.round(z.pageY) - (A.current?.y ?? 0))
          };
        }, J = (z) => {
          M.x <= 10 && M.y <= 10 ? z.preventDefault() : C.contains(z.target) || R(!1), document.removeEventListener("pointermove", U), A.current = null;
        };
        return A.current !== null && (document.addEventListener("pointermove", U), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", U), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [C, R, A]), u.useEffect(() => {
      const M = () => R(!1);
      return window.addEventListener("blur", M), window.addEventListener("resize", M), () => {
        window.removeEventListener("blur", M), window.removeEventListener("resize", M);
      };
    }, [R]);
    const [D, k] = pp((M) => {
      const U = G().filter((ae) => !ae.disabled), J = U.find((ae) => ae.ref.current === document.activeElement), z = fp(U, M, J);
      z && setTimeout(() => z.ref.current.focus());
    }), j = u.useCallback(
      (M, U, J) => {
        const z = !Z.current && !J;
        (y.value !== void 0 && y.value === U || z) && (N(M), z && (Z.current = !0));
      },
      [y.value]
    ), L = u.useCallback(() => C?.focus(), [C]), F = u.useCallback(
      (M, U, J) => {
        const z = !Z.current && !J;
        (y.value !== void 0 && y.value === U || z) && K(M);
      },
      [y.value]
    ), q = r === "popper" ? wa : Ku, Y = q === wa ? {
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ d.jsx(
      Gu,
      {
        scope: n,
        content: C,
        viewport: b,
        onViewportChange: E,
        itemRefCallback: j,
        selectedItem: O,
        onItemLeave: L,
        itemTextRefCallback: F,
        focusSelectedItem: te,
        selectedItemText: W,
        position: r,
        isPositioned: H,
        searchRef: D,
        children: /* @__PURE__ */ d.jsx(Xn, { as: gC, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          Kn,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (M) => {
              M.preventDefault();
            },
            onUnmountAutoFocus: X(o, (M) => {
              y.trigger?.focus({ preventScroll: !0 }), M.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              wn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (M) => M.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  q,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (M) => M.preventDefault(),
                    ...w,
                    ...Y,
                    onPlaced: () => $(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: X(w.onKeyDown, (M) => {
                      const U = M.ctrlKey || M.altKey || M.metaKey;
                      if (M.key === "Tab" && M.preventDefault(), !U && M.key.length === 1 && k(M.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(M.key)) {
                        let z = G().filter((ae) => !ae.disabled).map((ae) => ae.ref.current);
                        if (["ArrowUp", "End"].includes(M.key) && (z = z.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(M.key)) {
                          const ae = M.target, I = z.indexOf(ae);
                          z = z.slice(I + 1);
                        }
                        setTimeout(() => B(z)), M.preventDefault();
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
qu.displayName = hC;
var vC = "SelectItemAlignedPosition", Ku = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Wt(Jt, n), i = zt(Jt, n), [s, c] = u.useState(null), [l, p] = u.useState(null), f = pe(t, (_) => p(_)), m = bo(n), g = u.useRef(!1), x = u.useRef(!0), { viewport: h, selectedItem: v, selectedItemText: w, focusSelectedItem: y } = i, C = u.useCallback(() => {
    if (a.trigger && a.valueNode && s && l && h && v && w) {
      const _ = a.trigger.getBoundingClientRect(), O = l.getBoundingClientRect(), N = a.valueNode.getBoundingClientRect(), W = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ae = W.left - O.left, I = N.left - ae, ve = _.left - I, ne = _.width + ve, ie = Math.max(ne, O.width), Me = window.innerWidth - tt, _e = sc(I, [
          tt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(tt, Me - ie)
        ]);
        s.style.minWidth = ne + "px", s.style.left = _e + "px";
      } else {
        const ae = O.right - W.right, I = window.innerWidth - N.right - ae, ve = window.innerWidth - _.right - I, ne = _.width + ve, ie = Math.max(ne, O.width), Me = window.innerWidth - tt, _e = sc(I, [
          tt,
          Math.max(tt, Me - ie)
        ]);
        s.style.minWidth = ne + "px", s.style.right = _e + "px";
      }
      const K = m(), G = window.innerHeight - tt * 2, H = h.scrollHeight, $ = window.getComputedStyle(l), Z = parseInt($.borderTopWidth, 10), B = parseInt($.paddingTop, 10), te = parseInt($.borderBottomWidth, 10), R = parseInt($.paddingBottom, 10), A = Z + B + H + R + te, D = Math.min(v.offsetHeight * 5, A), k = window.getComputedStyle(h), j = parseInt(k.paddingTop, 10), L = parseInt(k.paddingBottom, 10), F = _.top + _.height / 2 - tt, q = G - F, Y = v.offsetHeight / 2, M = v.offsetTop + Y, U = Z + B + M, J = A - U;
      if (U <= F) {
        const ae = K.length > 0 && v === K[K.length - 1].ref.current;
        s.style.bottom = "0px";
        const I = l.clientHeight - h.offsetTop - h.offsetHeight, ve = Math.max(
          q,
          Y + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ae ? L : 0) + I + te
        ), ne = U + ve;
        s.style.height = ne + "px";
      } else {
        const ae = K.length > 0 && v === K[0].ref.current;
        s.style.top = "0px";
        const ve = Math.max(
          F,
          Z + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ae ? j : 0) + Y
        ) + J;
        s.style.height = ve + "px", h.scrollTop = U - F + h.offsetTop;
      }
      s.style.margin = `${tt}px 0`, s.style.minHeight = D + "px", s.style.maxHeight = G + "px", r?.(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    s,
    l,
    h,
    v,
    w,
    a.dir,
    r
  ]);
  Le(() => C(), [C]);
  const [S, b] = u.useState();
  Le(() => {
    l && b(window.getComputedStyle(l).zIndex);
  }, [l]);
  const E = u.useCallback(
    (_) => {
      _ && x.current === !0 && (C(), y?.(), x.current = !1);
    },
    [C, y]
  );
  return /* @__PURE__ */ d.jsx(
    bC,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: E,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ d.jsx(
            le.div,
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
Ku.displayName = vC;
var xC = "SelectPopperPosition", wa = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = tt,
    ...a
  } = e, i = yo(n);
  return /* @__PURE__ */ d.jsx(
    co,
    {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
wa.displayName = xC;
var [bC, Ei] = Mn(Jt, {}), Ca = "SelectViewport", Zu = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = zt(Ca, n), i = Ei(Ca, n), s = pe(t, a.onViewportChange), c = u.useRef(0);
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ d.jsx(xo.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(
        le.div,
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
          onScroll: X(o.onScroll, (l) => {
            const p = l.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: m } = i;
            if (m?.current && f) {
              const g = Math.abs(c.current - p.scrollTop);
              if (g > 0) {
                const x = window.innerHeight - tt * 2, h = parseFloat(f.style.minHeight), v = parseFloat(f.style.height), w = Math.max(h, v);
                if (w < x) {
                  const y = w + g, C = Math.min(x, y), S = y - C;
                  f.style.height = C + "px", f.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, f.style.justifyContent = "flex-end");
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
Zu.displayName = Ca;
var Xu = "SelectGroup", [yC, wC] = Mn(Xu), Ju = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ue();
    return /* @__PURE__ */ d.jsx(yC, { scope: n, id: o, children: /* @__PURE__ */ d.jsx(le.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Ju.displayName = Xu;
var Qu = "SelectLabel", ep = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = wC(Qu, n);
    return /* @__PURE__ */ d.jsx(le.div, { id: o.id, ...r, ref: t });
  }
);
ep.displayName = Qu;
var Br = "SelectItem", [CC, tp] = Mn(Br), np = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = Wt(Br, n), c = zt(Br, n), l = s.value === r, [p, f] = u.useState(a ?? ""), [m, g] = u.useState(!1), x = pe(
      t,
      (y) => c.itemRefCallback?.(y, r, o)
    ), h = Ue(), v = u.useRef("touch"), w = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d.jsx(
      CC,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: h,
        isSelected: l,
        onItemTextChange: u.useCallback((y) => {
          f((C) => C || (y?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d.jsx(
          xo.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: p,
            children: /* @__PURE__ */ d.jsx(
              le.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": l && m,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: x,
                onFocus: X(i.onFocus, () => g(!0)),
                onBlur: X(i.onBlur, () => g(!1)),
                onClick: X(i.onClick, () => {
                  v.current !== "mouse" && w();
                }),
                onPointerUp: X(i.onPointerUp, () => {
                  v.current === "mouse" && w();
                }),
                onPointerDown: X(i.onPointerDown, (y) => {
                  v.current = y.pointerType;
                }),
                onPointerMove: X(i.onPointerMove, (y) => {
                  v.current = y.pointerType, o ? c.onItemLeave?.() : v.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(i.onPointerLeave, (y) => {
                  y.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: X(i.onKeyDown, (y) => {
                  c.searchRef?.current !== "" && y.key === " " || (cC.includes(y.key) && w(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
np.displayName = Br;
var zn = "SelectItemText", rp = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, i = Wt(zn, n), s = zt(zn, n), c = tp(zn, n), l = pC(zn, n), [p, f] = u.useState(null), m = pe(
      t,
      (w) => f(w),
      c.onItemTextChange,
      (w) => s.itemTextRefCallback?.(w, c.value, c.disabled)
    ), g = p?.textContent, x = u.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: v } = l;
    return Le(() => (h(x), () => v(x)), [h, v, x]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(le.span, { id: c.textId, ...a, ref: m }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Ur.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
rp.displayName = zn;
var op = "SelectItemIndicator", ap = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return tp(op, n).isSelected ? /* @__PURE__ */ d.jsx(le.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
ap.displayName = op;
var ka = "SelectScrollUpButton", ip = u.forwardRef((e, t) => {
  const n = zt(ka, e.__scopeSelect), r = Ei(ka, e.__scopeSelect), [o, a] = u.useState(!1), i = pe(t, r.onScrollButtonChange);
  return Le(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = n.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    cp,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = n;
        s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
ip.displayName = ka;
var Sa = "SelectScrollDownButton", sp = u.forwardRef((e, t) => {
  const n = zt(Sa, e.__scopeSelect), r = Ei(Sa, e.__scopeSelect), [o, a] = u.useState(!1), i = pe(t, r.onScrollButtonChange);
  return Le(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const l = c.scrollHeight - c.clientHeight, p = Math.ceil(c.scrollTop) < l;
        a(p);
      };
      const c = n.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    cp,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = n;
        s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
sp.displayName = Sa;
var cp = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = zt("SelectScrollButton", n), i = u.useRef(null), s = bo(n), c = u.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return u.useEffect(() => () => c(), [c]), Le(() => {
    s().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ d.jsx(
    le.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: X(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: X(o.onPointerMove, () => {
        a.onItemLeave?.(), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: X(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), kC = "SelectSeparator", lp = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(le.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
lp.displayName = kC;
var Ea = "SelectArrow", SC = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = yo(n), a = Wt(Ea, n), i = zt(Ea, n);
    return a.open && i.position === "popper" ? /* @__PURE__ */ d.jsx(lo, { ...o, ...r, ref: t }) : null;
  }
);
SC.displayName = Ea;
var EC = "SelectBubbleInput", dp = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = pe(r, o), i = oC(t);
    return u.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const c = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== t && p) {
        const f = new Event("change", { bubbles: !0 });
        p.call(s, t), s.dispatchEvent(f);
      }
    }, [i, t]), /* @__PURE__ */ d.jsx(
      le.select,
      {
        ...n,
        style: { ...Lu, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
dp.displayName = EC;
function up(e) {
  return e === "" || e === void 0;
}
function pp(e) {
  const t = rt(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (i) => {
      const s = n.current + i;
      t(s), (function c(l) {
        n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(s);
    },
    [t]
  ), a = u.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function fp(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = _C(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== n));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function _C(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var MC = Wu, OC = $u, DC = Vu, PC = Hu, RC = Yu, jC = Uu, TC = Zu, NC = Ju, AC = ep, IC = np, FC = rp, LC = ap, WC = ip, zC = sp, $C = lp;
function BC({ ...e }) {
  return /* @__PURE__ */ d.jsx(MC, { "data-slot": "select", ...e });
}
function NS({ ...e }) {
  return /* @__PURE__ */ d.jsx(NC, { "data-slot": "select-group", ...e });
}
function VC({ ...e }) {
  return /* @__PURE__ */ d.jsx(DC, { "data-slot": "select-value", ...e });
}
function HC({
  className: e,
  size: t = "default",
  variant: n = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ d.jsxs(
    OC,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: P(
        "flex w-full items-center justify-between gap-2 font-manrope bg-white whitespace-nowrap data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        {
          "border border-gray-50 h-10 rounded-sm text-base px-3 py-2 hover:border-blue-hepatica-700 focus-visible:border-2 focus-visible:border-blue-hepatica-600 focus-visible:shadow-button aria-invalid:border-bright-red-600 aria-invalid:focus-visible:border-bright-red-600": n === "default",
          "border-none h-6 text-xs px-2 text-gray-700": n === "ghost"
        },
        "",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ d.jsx(PC, { asChild: !0, children: /* @__PURE__ */ d.jsx(
          $a,
          {
            className: P({
              "size-6 text-gray-300": n === "default",
              "size-4 text-gray-600": n === "ghost"
            })
          }
        ) })
      ]
    }
  );
}
function YC({
  className: e,
  children: t,
  position: n = "popper",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ d.jsx(RC, { children: /* @__PURE__ */ d.jsxs(
    jC,
    {
      "data-slot": "select-content",
      className: P(
        "bg-white font-manrope text-gray-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height)  origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-gray-25 shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ d.jsx(GC, {}),
        /* @__PURE__ */ d.jsx(
          TC,
          {
            className: P(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ d.jsx(qC, {})
      ]
    }
  ) });
}
function AS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    AC,
    {
      "data-slot": "select-label",
      className: P("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function UC({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(
    IC,
    {
      "data-slot": "select-item",
      className: P(
        "focus:bg-gray-25 focus:text-blue-hepatica-600 [&_svg:not([class*='text-'])]:text-gray-300 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(LC, { children: /* @__PURE__ */ d.jsx(Qn, { className: "size-4" }) }) }),
        /* @__PURE__ */ d.jsx(FC, { children: t })
      ]
    }
  );
}
function IS({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    $C,
    {
      "data-slot": "select-separator",
      className: P("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function GC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    WC,
    {
      "data-slot": "select-scroll-up-button",
      className: P("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ d.jsx(eg, { className: "size-4" })
    }
  );
}
function qC({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    zC,
    {
      "data-slot": "select-scroll-down-button",
      className: P("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ d.jsx($a, { className: "size-4" })
    }
  );
}
function FS({
  page: e,
  pageSize: t,
  totalItems: n,
  pageSizeOptions: r = [5, 10, 25, 50],
  onPageChange: o,
  onPageSizeChange: a,
  disabled: i = !1,
  className: s,
  ...c
}) {
  const l = Math.max(1, Math.ceil(n / Math.max(t, 1))), p = Math.min(Math.max(e, 1), l), f = n === 0 ? 0 : (p - 1) * t + 1, m = n === 0 ? 0 : Math.min(n, p * t), g = !i && p > 1, x = !i && p < l, h = () => {
    g && o(p - 1);
  }, v = () => {
    x && o(p + 1);
  }, w = (y) => {
    Number.isNaN(Number(y)) || a?.(Number(y));
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-slot": "pagination",
      className: P(
        "flex w-full items-center justify-end gap-4 py-3 text-sm text-gray-700",
        "border-t border-gray-50",
        s
      ),
      ...c,
      children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ d.jsx("span", { className: "font-manrope text-xs text-gray-700", children: "Rows per page:" }),
          /* @__PURE__ */ d.jsx("div", { className: "w-16", children: /* @__PURE__ */ d.jsxs(
            BC,
            {
              disabled: i || !a,
              defaultValue: `${t}`,
              onValueChange: w,
              "data-testid": "pagination--items-per-page",
              children: [
                /* @__PURE__ */ d.jsx(HC, { variant: "ghost", disabled: i, children: /* @__PURE__ */ d.jsx(VC, { placeholder: "Theme" }) }),
                /* @__PURE__ */ d.jsx(YC, { children: r.map((y) => /* @__PURE__ */ d.jsx(UC, { value: `${y}`, children: y }, y)) })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ d.jsx("p", { "data-slot": "pagination-range", className: "text-xs text-gray-600 whitespace-nowrap", children: n === 0 ? "0 of 0" : `${f} – ${m} of ${n}` }),
          /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-x-1", children: [
            /* @__PURE__ */ d.jsx(
              "button",
              {
                "data-slot": "pagination-prev",
                type: "button",
                onClick: h,
                disabled: !g,
                "aria-label": "Previous page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ d.jsx(ll, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ d.jsx(
              "button",
              {
                "data-slot": "pagination-next",
                type: "button",
                onClick: v,
                disabled: !x,
                "aria-label": "Next page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ d.jsx(Qr, { className: "size-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function LS({
  checked: e,
  children: t,
  name: n,
  onChange: r,
  value: o,
  disabled: a = !1
}) {
  const i = `${n}-${o}`;
  return /* @__PURE__ */ d.jsxs(
    "label",
    {
      htmlFor: i,
      className: P(
        "group w-full p-4 gap-1 flex items-start justify-start rounded-lg border border-gray-50 bg-white transition-colors",
        "focus-within:ring-2 focus-within:ring-blue-hepatica-300",
        {
          "border-2 border-blue-hepatica-600 bg-blue-hepatica-100": e,
          "opacity-60 cursor-not-allowed": a
        }
      ),
      children: [
        /* @__PURE__ */ d.jsxs("div", { className: "size-10 flex justify-center items-center", children: [
          /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "radio",
              id: i,
              name: n,
              value: o,
              checked: e,
              onChange: () => r(o),
              className: "sr-only",
              disabled: a
            }
          ),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: P(
                "pointer-events-none size-4 border border-gray-700 rounded-full flex items-center justify-center",
                {
                  "border-2 border-blue-hepatica-600": e
                }
              ),
              children: /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: P("size-2 rounded-full bg-transparent", {
                    "bg-blue-hepatica-600": e
                  })
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "", children: t })
      ]
    }
  );
}
const KC = Jr("bg-white rounded-2xl overflow-hidden flex flex-col w-full", {
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
function WS({
  title: e,
  children: t,
  footer: n,
  elevation: r = "elevation-0",
  className: o,
  ...a
}) {
  return /* @__PURE__ */ d.jsxs("section", { ...a, className: P(KC({ elevation: r, className: o })), children: [
    !!e && /* @__PURE__ */ d.jsx("header", { className: "h-15 flex items-center px-8 border-b border-b-gray-25", children: /* @__PURE__ */ d.jsx("h3", { className: "font-manrope font-semibold text-base text-gray-900 leading-5", children: e }) }),
    /* @__PURE__ */ d.jsx("div", { className: "flex flex-col p-4 md:p-8!", children: t }),
    !!n && /* @__PURE__ */ d.jsx("footer", { className: "px-4 md:px-8! py-4 md:py-6! border-t border-t-gray-25", children: n })
  ] });
}
function zS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "shimmer",
      "aria-hidden": "true",
      className: P(
        "relative overflow-hidden rounded-md",
        "bg-linear-to-r from-gray-50 via-gray-50/25 to-gray-50",
        "bg-size-[200%_100%] animate-[shimmer_2.5s_ease-in-out_infinite]",
        "h-4 w-full",
        e
      ),
      ...t
    }
  );
}
var mp = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, cc = T.createContext && /* @__PURE__ */ T.createContext(mp), ZC = ["attr", "size", "title"];
function XC(e, t) {
  if (e == null) return {};
  var n = JC(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function JC(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Vr() {
  return Vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vr.apply(this, arguments);
}
function lc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lc(Object(n), !0).forEach(function(r) {
      QC(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function QC(e, t, n) {
  return t = ek(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ek(e) {
  var t = tk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tk(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hp(e) {
  return e && e.map((t, n) => /* @__PURE__ */ T.createElement(t.tag, Hr({
    key: n
  }, t.attr), hp(t.child)));
}
function nk(e) {
  return (t) => /* @__PURE__ */ T.createElement(rk, Vr({
    attr: Hr({}, e.attr)
  }, t), hp(e.child));
}
function rk(e) {
  var t = (n) => {
    var {
      attr: r,
      size: o,
      title: a
    } = e, i = XC(e, ZC), s = o || n.size || "1em", c;
    return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ T.createElement("svg", Vr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, i, {
      className: c,
      style: Hr(Hr({
        color: e.color || n.color
      }, n.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ T.createElement("title", null, a), e.children);
  };
  return cc !== void 0 ? /* @__PURE__ */ T.createElement(cc.Consumer, null, (n) => t(n)) : t(mp);
}
function ok(e) {
  return nk({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM22.0104 8.81412L20.5962 7.3999L16 11.9961L20.5962 16.5923L22.0104 15.1781L18.8284 11.9961L22.0104 8.81412Z" }, child: [] }] })(e);
}
const ak = new URL("data:image/svg+xml,%3csvg%20width='247'%20height='980'%20viewBox='0%200%20247%20980'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9467_2027)'%3e%3crect%20width='247'%20height='983'%20fill='black'/%3e%3cg%20opacity='0.3'%20filter='url(%23filter0_f_9467_2027)'%3e%3cellipse%20cx='-129.135'%20cy='1014.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20-129.135%201014.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.3'%20filter='url(%23filter1_f_9467_2027)'%3e%3cellipse%20cx='450.01'%20cy='1514.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20450.01%201514.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter2_f_9467_2027)'%3e%3cellipse%20cx='119.407'%20cy='-84.3658'%20rx='364.442'%20ry='193.158'%20fill='%230B495D'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter3_f_9467_2027)'%3e%3cellipse%20cx='399.478'%20cy='-0.360779'%20rx='364.442'%20ry='193.158'%20transform='rotate(30%20399.478%20-0.360779)'%20fill='%23BF3535'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter4_f_9467_2027)'%3e%3cellipse%20cx='-312.773'%20cy='835'%20rx='434.874'%20ry='485.827'%20transform='rotate(-136.998%20-312.773%20835)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter5_f_9467_2027)'%3e%3cellipse%20cx='336.608'%20cy='1039.65'%20rx='553.734'%20ry='293.484'%20transform='rotate(7.13051%20336.608%201039.65)'%20fill='%23660000'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_9467_2027'%20x='-691.145'%20y='128.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_9467_2027'%20x='-112'%20y='628.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_9467_2027'%20x='-453.839'%20y='-486.327'%20width='1146.49'%20height='803.922'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_9467_2027'%20x='-139.475'%20y='-456.526'%20width='1077.91'%20height='912.33'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_9467_2027'%20x='-1172.05'%20y='-27.8358'%20width='1718.56'%20height='1725.67'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_9467_2027'%20x='-531.326'%20y='423.111'%20width='1735.87'%20height='1233.08'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='158.628'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cclipPath%20id='clip0_9467_2027'%3e%3crect%20width='247'%20height='983'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", import.meta.url).href;
function $S({ children: e }) {
  const [t, n] = Be(!1), r = ue(() => n((a) => !a), []), o = ue(() => n(!1), []);
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      "button",
      {
        type: "button",
        onClick: r,
        className: P(
          "fixed left-4 top-4 z-40 inline-flex size-12 items-center justify-center",
          "rounded-lg bg-black",
          "lg:hidden"
          // hide the button when viewport >= 912px
        ),
        "aria-label": t ? "Close sidebar" : "Open sidebar",
        children: /* @__PURE__ */ d.jsx(ok, { className: "size-6 text-white" })
      }
    ),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        className: P(
          "fixed inset-0 z-30 bg-black/40 transition-opacity sidebar:hidden lg:hidden",
          t ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: o
      }
    ),
    /* @__PURE__ */ d.jsxs(
      "aside",
      {
        className: P(
          "relative",
          "fixed inset-y-0 left-0 z-40 w-[315px]",
          "bg-no-repeat bg-cover bg-top",
          "transition-transform duration-200 ease-out",
          t ? "translate-x-0" : "-translate-x-full",
          // desktop (>= 912px): always visible, static, no transform
          "lg:relative! lg:translate-x-0 lg:shadow-none",
          "lg:flex lg:flex-col px-6 overflow-hidden"
        ),
        children: [
          /* @__PURE__ */ d.jsx(
            "img",
            {
              src: ak,
              alt: "",
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
            }
          ),
          /* @__PURE__ */ d.jsxs("div", { className: "w-66.75 grid grid-rows-[112px_1fr]", children: [
            /* @__PURE__ */ d.jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col items-center gap-y-2", children: [
              /* @__PURE__ */ d.jsx(Fu, { className: "size-10.5" }),
              /* @__PURE__ */ d.jsx("h1", { className: "font-manrope font-nromal text-base text-white tracking-[0.04em]", children: "MercySeat" })
            ] }) }),
            /* @__PURE__ */ d.jsx("div", { className: "overflow-hidden w-66.75", children: e })
          ] })
        ]
      }
    )
  ] });
}
function ik({
  index: e,
  label: t,
  current: n,
  completed: r,
  disabled: o = !1,
  onClick: a
}) {
  return /* @__PURE__ */ d.jsxs("li", { className: "flex flex-col justify-start items-center gap-4 w-fit px-4 bg-gray-25 relative", children: [
    /* @__PURE__ */ d.jsx(
      "button",
      {
        type: "button",
        "data-slot": "step",
        "data-current": n,
        disabled: o,
        "aria-current": n ? "step" : void 0,
        onClick: () => {
          n || o || a();
        },
        className: P(
          "w-8 h-8 rounded-full flex justify-center items-center",
          "border border-gray-50 bg-gray-25",
          {
            "bg-blue-hepatica-600 text-white border-none hover:bg-blue-hepatica-700": n || r,
            "cursor-not-allowed": o
          }
        ),
        children: r && !n ? /* @__PURE__ */ d.jsx(Qn, { className: "size-4 text-white", "aria-hidden": "true" }) : /* @__PURE__ */ d.jsx(
          "span",
          {
            className: P("font-semibold text-sm text-gray-300", {
              "text-white": n
            }),
            children: e + 1
          }
        )
      }
    ),
    /* @__PURE__ */ d.jsx(
      "span",
      {
        className: P(
          "whitespace-nowrap text-sm font-semibold leading-4 text-gray-300 text-center",
          {
            "text-gray-900": n
          }
        ),
        children: t
      }
    )
  ] });
}
function BS({
  steps: e,
  currentId: t,
  onStepChange: n,
  className: r
}) {
  const o = e.findIndex((a) => a.id === t);
  return /* @__PURE__ */ d.jsx(
    "nav",
    {
      "aria-label": "Steps",
      "data-slot": "steps",
      className: P("w-full", r),
      children: /* @__PURE__ */ d.jsxs("ol", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ d.jsx("span", { className: "absolute border-b border-b-gray-50 top-1/2 left-0 right-0" }),
        e.map((a, i) => {
          const s = o !== -1 && i < o;
          return /* @__PURE__ */ d.jsx(
            ik,
            {
              current: a.id === t,
              completed: s,
              disabled: a.disabled,
              index: i,
              label: a.label,
              onClick: () => n(a.id)
            },
            a.id
          );
        })
      ] })
    }
  );
}
function VS({ children: e, items: t, className: n, align: r = "end", side: o = "bottom" }) {
  return /* @__PURE__ */ d.jsxs(ww, { children: [
    /* @__PURE__ */ d.jsx(Cw, { asChild: !0, children: e }),
    /* @__PURE__ */ d.jsx(kw, { children: /* @__PURE__ */ d.jsx(
      Sw,
      {
        className: P(
          "min-w-[180px] rounded-md bg-white border border-gray-100 shadow-md p-1 z-50",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          n
        ),
        align: r,
        side: o,
        sideOffset: 4,
        children: t.map((a, i) => /* @__PURE__ */ d.jsxs(
          Ew,
          {
            className: P(
              "relative flex items-center gap-2 px-3 py-2 text-sm rounded-sm outline-none cursor-pointer",
              "focus:bg-gray-25 data-disabled:pointer-events-none data-disabled:opacity-50",
              "transition-colors",
              a.variant === "destructive" ? "text-bright-red-600 focus:text-bright-red-700" : "text-gray-700 focus:text-gray-900"
            ),
            disabled: a.disabled,
            onSelect: () => {
              a.onClick && !a.disabled && a.onClick();
            },
            children: [
              a.icon && /* @__PURE__ */ d.jsx("span", { className: "shrink-0 w-4 h-4 flex items-center justify-center", children: a.icon }),
              /* @__PURE__ */ d.jsx("span", { children: a.label })
            ]
          },
          i
        ))
      }
    ) })
  ] });
}
function HS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ d.jsx(
    "table",
    {
      "data-slot": "table",
      className: P("w-full caption-bottom text-sm", e),
      ...t
    }
  ) });
}
function YS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: P("border-b-2 border-b-gray-50", e),
      ...t
    }
  );
}
function US({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: P("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function GS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: P(
        "bg-white border-t border-t-gray-50 font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...t
    }
  );
}
function qS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: P(
        "hover:bg-blue-hepatica-100 data-[state=selected]:bg-blue-hepatica-100 border-b border-b-gray-50 transition-colors",
        e
      ),
      ...t
    }
  );
}
function KS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: P(
        "font-manrope text-sm text-gray-900 tracking-[0.02em] h-12 px-4 text-left align-middle font-semibold whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function ZS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: P(
        "px-4 py-2 font-manrope align-middle whitespace-nowrap text-sm tracking-[0.02em] text-gray-700 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function XS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "caption",
    {
      "data-slot": "table-caption",
      className: P("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function JS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: P(
        "bg-transparent border-gray-200 placeholder:text-muted-foreground focus-visible:border-2",
        "focus-visible:ring-0 focus-visible:border-blue-hepatica-600 hover:border-blue-hepatica-700",
        "focus-visible:shadow-button focus-visible:bg-blue-hepatica-50",
        "aria-invalid:ring-0 aria-invalid:border-bright-red-600 flex field-sizing-content",
        "min-h-16 w-full rounded-sm border px-3 py-2 text-base shadow-xs transition-[color,box-shadow]",
        "outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ...t
    }
  );
}
var sk = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ck(e) {
  const t = ({ children: n }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = sk, t;
}
var lk = Object.freeze({
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
}), dk = "VisuallyHidden", gp = u.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    le.span,
    {
      ...e,
      ref: t,
      style: { ...lk, ...e.style }
    }
  )
);
gp.displayName = dk;
var uk = gp, [wo] = xt("Tooltip", [
  It
]), Co = It(), vp = "TooltipProvider", pk = 700, _a = "tooltip.open", [fk, _i] = wo(vp), xp = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = pk,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = u.useRef(!0), s = u.useRef(!1), c = u.useRef(0);
  return u.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ d.jsx(
    fk,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: n,
      onOpen: u.useCallback(() => {
        window.clearTimeout(c.current), i.current = !1;
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: u.useCallback((l) => {
        s.current = l;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
xp.displayName = vp;
var qn = "Tooltip", [mk, ko] = wo(qn), bp = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = _i(qn, e.__scopeTooltip), l = Co(t), [p, f] = u.useState(null), m = Ue(), g = u.useRef(0), x = i ?? c.disableHoverableContent, h = s ?? c.delayDuration, v = u.useRef(!1), [w, y] = Tt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (_) => {
      _ ? (c.onOpen(), document.dispatchEvent(new CustomEvent(_a))) : c.onClose(), a?.(_);
    },
    caller: qn
  }), C = u.useMemo(() => w ? v.current ? "delayed-open" : "instant-open" : "closed", [w]), S = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, v.current = !1, y(!0);
  }, [y]), b = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, y(!1);
  }, [y]), E = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      v.current = !0, y(!0), g.current = 0;
    }, h);
  }, [h, y]);
  return u.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ d.jsx(rr, { ...l, children: /* @__PURE__ */ d.jsx(
    mk,
    {
      scope: t,
      contentId: m,
      open: w,
      stateAttribute: C,
      trigger: p,
      onTriggerChange: f,
      onTriggerEnter: u.useCallback(() => {
        c.isOpenDelayedRef.current ? E() : S();
      }, [c.isOpenDelayedRef, E, S]),
      onTriggerLeave: u.useCallback(() => {
        x ? b() : (window.clearTimeout(g.current), g.current = 0);
      }, [b, x]),
      onOpen: S,
      onClose: b,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
bp.displayName = qn;
var Ma = "TooltipTrigger", yp = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ko(Ma, n), a = _i(Ma, n), i = Co(n), s = u.useRef(null), c = pe(t, s, o.onTriggerChange), l = u.useRef(!1), p = u.useRef(!1), f = u.useCallback(() => l.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ d.jsx(or, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
      le.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: X(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !p.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: X(e.onPointerLeave, () => {
          o.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: X(e.onPointerDown, () => {
          o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: X(e.onFocus, () => {
          l.current || o.onOpen();
        }),
        onBlur: X(e.onBlur, o.onClose),
        onClick: X(e.onClick, o.onClose)
      }
    ) });
  }
);
yp.displayName = Ma;
var hk = "TooltipPortal", [QS, gk] = wo(hk, {
  forceMount: void 0
}), yn = "TooltipContent", wp = u.forwardRef(
  (e, t) => {
    const n = gk(yn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, i = ko(yn, e.__scopeTooltip);
    return /* @__PURE__ */ d.jsx(it, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ d.jsx(Cp, { side: o, ...a, ref: t }) : /* @__PURE__ */ d.jsx(vk, { side: o, ...a, ref: t }) });
  }
), vk = u.forwardRef((e, t) => {
  const n = ko(yn, e.__scopeTooltip), r = _i(yn, e.__scopeTooltip), o = u.useRef(null), a = pe(t, o), [i, s] = u.useState(null), { trigger: c, onClose: l } = n, p = o.current, { onPointerInTransitChange: f } = r, m = u.useCallback(() => {
    s(null), f(!1);
  }, [f]), g = u.useCallback(
    (x, h) => {
      const v = x.currentTarget, w = { x: x.clientX, y: x.clientY }, y = Ck(w, v.getBoundingClientRect()), C = kk(w, y), S = Sk(h.getBoundingClientRect()), b = _k([...C, ...S]);
      s(b), f(!0);
    },
    [f]
  );
  return u.useEffect(() => () => m(), [m]), u.useEffect(() => {
    if (c && p) {
      const x = (v) => g(v, p), h = (v) => g(v, c);
      return c.addEventListener("pointerleave", x), p.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", x), p.removeEventListener("pointerleave", h);
      };
    }
  }, [c, p, g, m]), u.useEffect(() => {
    if (i) {
      const x = (h) => {
        const v = h.target, w = { x: h.clientX, y: h.clientY }, y = c?.contains(v) || p?.contains(v), C = !Ek(w, i);
        y ? m() : C && (m(), l());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [c, p, i, l, m]), /* @__PURE__ */ d.jsx(Cp, { ...e, ref: a });
}), [xk, bk] = wo(qn, { isInside: !1 }), yk = /* @__PURE__ */ ck("TooltipContent"), Cp = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = ko(yn, n), l = Co(n), { onClose: p } = c;
    return u.useEffect(() => (document.addEventListener(_a, p), () => document.removeEventListener(_a, p)), [p]), u.useEffect(() => {
      if (c.trigger) {
        const f = (m) => {
          m.target?.contains(c.trigger) && p();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [c.trigger, p]), /* @__PURE__ */ d.jsx(
      wn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ d.jsxs(
          co,
          {
            "data-state": c.stateAttribute,
            ...l,
            ...s,
            ref: t,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ d.jsx(yk, { children: r }),
              /* @__PURE__ */ d.jsx(xk, { scope: n, isInside: !0, children: /* @__PURE__ */ d.jsx(uk, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
wp.displayName = yn;
var kp = "TooltipArrow", wk = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Co(n);
    return bk(
      kp,
      n
    ).isInside ? null : /* @__PURE__ */ d.jsx(lo, { ...o, ...r, ref: t });
  }
);
wk.displayName = kp;
function Ck(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function kk(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function Sk(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function Ek(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], c = t[i], l = s.x, p = s.y, f = c.x, m = c.y;
    p > r != m > r && n < (f - l) * (r - p) / (m - p) + l && (o = !o);
  }
  return o;
}
function _k(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Mk(t);
}
function Mk(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
function eE({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    xp,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function tE({ ...e }) {
  return /* @__PURE__ */ d.jsx(bp, { "data-slot": "tooltip", ...e });
}
function nE({ ...e }) {
  return /* @__PURE__ */ d.jsx(yp, { "data-slot": "tooltip-trigger", ...e });
}
function rE({
  className: e,
  sideOffset: t = 6,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    wp,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: P(
        "bg-gray-25 text-gray-700 z-50 overflow-hidden rounded-sm px-3 py-1.5 text-xs font-medium tracking-[0.02em]",
        "animate-in fade-in-0 zoom-in-95",
        "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n
    }
  );
}
const Ok = Jr("font-manrope text-gray-900", {
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
}), Dk = {
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
function oE(e) {
  const { as: t, variant: n, className: r, children: o, ...a } = e, i = n ?? "body-md", s = t ?? Dk[i];
  return /* @__PURE__ */ d.jsx(
    s,
    {
      className: P(Ok({ variant: i }), r),
      ...a,
      children: o
    }
  );
}
const Pk = Array.from({ length: 96 }, (e, t) => {
  const n = t * 15, r = Math.floor(n / 60), o = n % 60, a = `${String(r).padStart(2, "0")}:${String(o).padStart(2, "0")}`, i = r < 12 ? "AM" : "PM", c = `${r === 0 ? 12 : r > 12 ? r - 12 : r}:${String(o).padStart(2, "0")} ${i}`;
  return { value: a, label: c };
});
function Rk(e) {
  if (!e) return "";
  const [t, n] = e.split(":"), r = Number(t), o = Number(n), a = r < 12 ? "AM" : "PM";
  return `${r === 0 ? 12 : r > 12 ? r - 12 : r}:${String(o).padStart(2, "0")} ${a}`;
}
function jk(e) {
  if (!e) return "";
  const [t, n] = e.split(":"), r = Number(t) * 60 + Number(n), o = Math.round(r / 15) * 15, a = Math.min(o, 1425), i = Math.floor(a / 60), s = a % 60;
  return `${String(i).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function aE({
  value: e,
  onChange: t,
  "data-testid": n
}) {
  const [r, o] = u.useState(!1), a = u.useRef(null), i = Rk(e), s = jk(e);
  return u.useEffect(() => {
    r && a.current && a.current.scrollIntoView?.({ block: "center" });
  }, [r]), /* @__PURE__ */ d.jsxs(bd, { open: r, onOpenChange: o, children: [
    /* @__PURE__ */ d.jsx(yd, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
      "button",
      {
        type: "button",
        "data-testid": n,
        className: "flex h-10 w-full items-center gap-2 rounded-md border border-gray-200 bg-white px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        children: [
          /* @__PURE__ */ d.jsx(ng, { className: "size-4 shrink-0 text-gray-400" }),
          /* @__PURE__ */ d.jsx("span", { className: P(i ? "text-gray-900" : "text-gray-400"), children: i || "Select a time" })
        ]
      }
    ) }),
    /* @__PURE__ */ d.jsx(wd, { children: /* @__PURE__ */ d.jsx(
      Cd,
      {
        align: "start",
        sideOffset: 4,
        className: P(
          "z-50 max-h-56 w-[var(--radix-popover-trigger-width)]",
          "overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        ),
        children: Pk.map((c) => {
          const l = c.value === s && !!e;
          return /* @__PURE__ */ d.jsx(
            "button",
            {
              ref: l ? a : void 0,
              type: "button",
              onClick: () => {
                t(c.value), o(!1);
              },
              className: P(
                "flex w-full items-center px-4 py-2 text-sm transition-colors",
                l ? "bg-blue-50 font-semibold text-blue-600" : "text-gray-700 hover:bg-gray-50"
              ),
              children: c.label
            },
            c.value
          );
        })
      }
    ) })
  ] });
}
export {
  Fk as AlertDialog,
  Ww as AnalyticsIcon,
  zw as AnnouncementIcon,
  Lk as Badge,
  Wk as Breadcrumb,
  $k as BreadcrumbItem,
  Bk as BreadcrumbLink,
  zk as BreadcrumbList,
  Vk as BreadcrumbPage,
  Hk as BreadcrumbSeparator,
  eo as Button,
  ob as Calendar,
  ab as CalendarDayButton,
  Yk as Checkbox,
  $w as ChurchIcon,
  Bw as ClassIcon,
  Vw as CrownIcon,
  Gk as DatePicker,
  qk as Dialog,
  Ak as DialogAction,
  Ik as DialogCancel,
  Zk as DialogClose,
  Xk as DialogContent,
  tS as DialogDescription,
  Qk as DialogFooter,
  Jk as DialogHeader,
  Yy as DialogOverlay,
  Hy as DialogPortal,
  eS as DialogTitle,
  Kk as DialogTrigger,
  nS as DropdownMenu,
  cS as DropdownMenuCheckboxItem,
  aS as DropdownMenuContent,
  iS as DropdownMenuGroup,
  sS as DropdownMenuItem,
  uS as DropdownMenuLabel,
  rS as DropdownMenuPortal,
  lS as DropdownMenuRadioGroup,
  dS as DropdownMenuRadioItem,
  pS as DropdownMenuSeparator,
  fS as DropdownMenuShortcut,
  mS as DropdownMenuSub,
  gS as DropdownMenuSubContent,
  hS as DropdownMenuSubTrigger,
  oS as DropdownMenuTrigger,
  Hw as EventIcon,
  vS as Form,
  wS as FormControl,
  CS as FormDescription,
  xS as FormField,
  bS as FormItem,
  yS as FormLabel,
  kS as FormMessage,
  Yw as GiftIcon,
  Uw as HomeIcon,
  SS as Icon,
  ES as ImageUploader,
  T2 as Input,
  MS as InputOTP,
  OS as InputOTPGroup,
  PS as InputOTPSeparator,
  DS as InputOTPSlot,
  vu as Label,
  Gw as ListIcon,
  qw as LivestreamIcon,
  Kw as LockClosedIcon,
  Zw as LockOpenIcon,
  Fu as Logo,
  RS as LogoLockup,
  jS as MediaUploader,
  TS as MenuItem,
  Xw as MinistryIcon,
  FS as Pagination,
  _S as PasswordInput,
  Jw as PodcastIcon,
  $y as Popover,
  Uk as PopoverAnchor,
  Vy as PopoverContent,
  By as PopoverTrigger,
  LS as RadioButton,
  WS as Section,
  BC as Select,
  YC as SelectContent,
  NS as SelectGroup,
  UC as SelectItem,
  AS as SelectLabel,
  qC as SelectScrollDownButton,
  GC as SelectScrollUpButton,
  IS as SelectSeparator,
  HC as SelectTrigger,
  VC as SelectValue,
  Qw as SeriesIcon,
  e1 as SermonIcon,
  zS as Shimmer,
  $S as Sidebar,
  BS as Stepper,
  t1 as SubscriptionIcon,
  VS as SuspendedMenu,
  HS as Table,
  US as TableBody,
  XS as TableCaption,
  ZS as TableCell,
  GS as TableFooter,
  KS as TableHead,
  YS as TableHeader,
  qS as TableRow,
  JS as Textarea,
  aE as TimePicker,
  tE as Tooltip,
  rE as TooltipContent,
  eE as TooltipProvider,
  nE as TooltipTrigger,
  oE as Typography,
  n1 as VideoIcon,
  $h as badgeVariants,
  ca as buttonVariants,
  Ok as typographyVariants,
  go as useFormField
};
