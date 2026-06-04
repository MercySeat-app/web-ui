import * as f from "react";
import N, { useState as Fe, forwardRef as Kr, createElement as sa, createContext as ja, useContext as jr, useCallback as ue, useRef as ht, useLayoutEffect as mc, useEffect as Kt, useMemo as Be, useId as hc, useReducer as Pp, useImperativeHandle as Rp, Fragment as jp } from "react";
import * as Zr from "react-dom";
import Tp from "react-dom";
function Ta(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fr = { exports: {} }, jn = {};
var Ri;
function Np() {
  if (Ri) return jn;
  Ri = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(r, o, a) {
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
  return jn.Fragment = n, jn.jsx = t, jn.jsxs = t, jn;
}
var Tn = {};
var ji;
function Ap() {
  return ji || (ji = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(k) {
      if (k == null) return null;
      if (typeof k == "function")
        return k.$$typeof === q ? null : k.displayName || k.name || null;
      if (typeof k == "string") return k;
      switch (k) {
        case v:
          return "Fragment";
        case b:
          return "Profiler";
        case w:
          return "StrictMode";
        case E:
          return "Suspense";
        case _:
          return "SuspenseList";
        case L:
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
          case y:
            var T = k.render;
            return k = k.displayName, k || (k = T.displayName || T.name || "", k = k !== "" ? "ForwardRef(" + k + ")" : "ForwardRef"), k;
          case P:
            return T = k.displayName || null, T !== null ? T : e(k.type) || "Memo";
          case A:
            T = k._payload, k = k._init;
            try {
              return e(k(T));
            } catch {
            }
        }
      return null;
    }
    function n(k) {
      return "" + k;
    }
    function t(k) {
      try {
        n(k);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var W = T.error, F = typeof Symbol == "function" && Symbol.toStringTag && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return W.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), n(k);
      }
    }
    function r(k) {
      if (k === v) return "<>";
      if (typeof k == "object" && k !== null && k.$$typeof === A)
        return "<...>";
      try {
        var T = e(k);
        return T ? "<" + T + ">" : "<...>";
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
        var T = Object.getOwnPropertyDescriptor(k, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return k.key !== void 0;
    }
    function s(k, T) {
      function W() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(k, "key", {
        get: W,
        configurable: !0
      });
    }
    function c() {
      var k = e(this.type);
      return Q[k] || (Q[k] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), k = this.props.ref, k !== void 0 ? k : null;
    }
    function l(k, T, W, F, K, Y) {
      var O = W.ref;
      return k = {
        $$typeof: x,
        type: k,
        key: T,
        props: W,
        _owner: F
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(k, "ref", {
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
        value: K
      }), Object.defineProperty(k, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    }
    function u(k, T, W, F, K, Y) {
      var O = T.children;
      if (O !== void 0)
        if (F)
          if (z(O)) {
            for (F = 0; F < O.length; F++)
              p(O[F]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(O);
      if (H.call(T, "key")) {
        O = e(k);
        var U = Object.keys(T).filter(function(B) {
          return B !== "key";
        });
        F = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", M[O + F] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          O,
          U,
          O
        ), M[O + F] = !0);
      }
      if (O = null, W !== void 0 && (t(W), O = "" + W), i(T) && (t(T.key), O = "" + T.key), "key" in T) {
        W = {};
        for (var J in T)
          J !== "key" && (W[J] = T[J]);
      } else W = T;
      return O && s(
        W,
        typeof k == "function" ? k.displayName || k.name || "Unknown" : k
      ), l(
        k,
        O,
        W,
        o(),
        K,
        Y
      );
    }
    function p(k) {
      m(k) ? k._store && (k._store.validated = 1) : typeof k == "object" && k !== null && k.$$typeof === A && (k._payload.status === "fulfilled" ? m(k._payload.value) && k._payload.value._store && (k._payload.value._store.validated = 1) : k._store && (k._store.validated = 1));
    }
    function m(k) {
      return typeof k == "object" && k !== null && k.$$typeof === x;
    }
    var g = N, x = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), S = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), q = Symbol.for("react.client.reference"), G = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, z = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(k) {
        return k();
      }
    };
    var $, Q = {}, D = g.react_stack_bottom_frame.bind(
      g,
      a
    )(), R = Z(r(a)), M = {};
    Tn.Fragment = v, Tn.jsx = function(k, T, W) {
      var F = 1e4 > G.recentlyCreatedOwnerStacks++;
      return u(
        k,
        T,
        W,
        !1,
        F ? Error("react-stack-top-frame") : D,
        F ? Z(r(k)) : R
      );
    }, Tn.jsxs = function(k, T, W) {
      var F = 1e4 > G.recentlyCreatedOwnerStacks++;
      return u(
        k,
        T,
        W,
        !0,
        F ? Error("react-stack-top-frame") : D,
        F ? Z(r(k)) : R
      );
    };
  })()), Tn;
}
var Ti;
function Ip() {
  return Ti || (Ti = 1, process.env.NODE_ENV === "production" ? fr.exports = Np() : fr.exports = Ap()), fr.exports;
}
var d = Ip();
function Fp(e, n) {
  const t = f.createContext(n), r = (a) => {
    const { children: i, ...s } = a, c = f.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ d.jsx(t.Provider, { value: c, children: i });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const i = f.useContext(t);
    if (i) return i;
    if (n !== void 0) return n;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function yt(e, n = []) {
  let t = [];
  function r(a, i) {
    const s = f.createContext(i), c = t.length;
    t = [...t, i];
    const l = (p) => {
      const { scope: m, children: g, ...x } = p, h = m?.[e]?.[c] || s, v = f.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ d.jsx(h.Provider, { value: v, children: g });
    };
    l.displayName = a + "Provider";
    function u(p, m) {
      const g = m?.[e]?.[c] || s, x = f.useContext(g);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [l, u];
  }
  const o = () => {
    const a = t.map((i) => f.createContext(i));
    return function(s) {
      const c = s?.[e] || a;
      return f.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [r, Lp(o, ...n)];
}
function Lp(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: c, scopeName: l }) => {
        const p = c(a)[`__scope${l}`];
        return { ...s, ...p };
      }, {});
      return f.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
function Ni(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function Xn(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const a = Ni(o, n);
      return !t && typeof a == "function" && (t = !0), a;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Ni(e[o], null);
        }
      };
  };
}
function pe(...e) {
  return f.useCallback(Xn(...e), e);
}
function X(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e?.(o), t === !1 || !o.defaultPrevented)
      return n?.(o);
  };
}
var We = globalThis?.document ? f.useLayoutEffect : () => {
}, Wp = f[" useId ".trim().toString()] || (() => {
}), zp = 0;
function Ge(e) {
  const [n, t] = f.useState(Wp());
  return We(() => {
    t((r) => r ?? String(zp++));
  }, [e]), e || (n ? `radix-${n}` : "");
}
var $p = f[" useInsertionEffect ".trim().toString()] || We;
function Tt({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, a, i] = Bp({
    defaultProp: n,
    onChange: t
  }), s = e !== void 0, c = s ? e : o;
  {
    const u = f.useRef(e !== void 0);
    f.useEffect(() => {
      const p = u.current;
      p !== s && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = s;
    }, [s, r]);
  }
  const l = f.useCallback(
    (u) => {
      if (s) {
        const p = Vp(u) ? u(e) : u;
        p !== e && i.current?.(p);
      } else
        a(u);
    },
    [s, e, a, i]
  );
  return [c, l];
}
function Bp({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = f.useState(e), o = f.useRef(t), a = f.useRef(n);
  return $p(() => {
    a.current = n;
  }, [n]), f.useEffect(() => {
    o.current !== t && (a.current?.(t), o.current = t);
  }, [t, o]), [t, r, a];
}
function Vp(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
  const n = /* @__PURE__ */ Hp(e), t = f.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = f.Children.toArray(a), c = s.find(Yp);
    if (c) {
      const l = c.props.children, u = s.map((p) => p === c ? f.Children.count(l) > 1 ? f.Children.only(null) : f.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ d.jsx(n, { ...i, ref: o, children: f.isValidElement(l) ? f.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ d.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Hp(e) {
  const n = f.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (f.isValidElement(o)) {
      const i = Gp(o), s = Up(a, o.props);
      return o.type !== f.Fragment && (s.ref = r ? Xn(r, i) : i), f.cloneElement(o, s);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var gc = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function vc(e) {
  const n = ({ children: t }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = gc, n;
}
function Yp(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === gc;
}
function Up(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], a = n[r];
    /^on[A-Z]/.test(r) ? o && a ? t[r] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...a } : r === "className" && (t[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Gp(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
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
], le = qp.reduce((e, n) => {
  const t = /* @__PURE__ */ Zt(`Primitive.${n}`), r = f.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, c = i ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function xc(e, n) {
  e && Zr.flushSync(() => e.dispatchEvent(n));
}
function rt(e) {
  const n = f.useRef(e);
  return f.useEffect(() => {
    n.current = e;
  }), f.useMemo(() => (...t) => n.current?.(...t), []);
}
function Kp(e, n = globalThis?.document) {
  const t = rt(e);
  f.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && t(o);
    };
    return n.addEventListener("keydown", r, { capture: !0 }), () => n.removeEventListener("keydown", r, { capture: !0 });
  }, [t, n]);
}
var Zp = "DismissableLayer", ca = "dismissableLayer.update", Xp = "dismissableLayer.pointerDownOutside", Jp = "dismissableLayer.focusOutside", Ai, bc = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), kn = f.forwardRef(
  (e, n) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...c
    } = e, l = f.useContext(bc), [u, p] = f.useState(null), m = u?.ownerDocument ?? globalThis?.document, [, g] = f.useState({}), x = pe(n, (_) => p(_)), h = Array.from(l.layers), [v] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(v), b = u ? h.indexOf(u) : -1, C = l.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= w, y = tf((_) => {
      const P = _.target, A = [...l.branches].some((L) => L.contains(P));
      !S || A || (o?.(_), i?.(_), _.defaultPrevented || s?.());
    }, m), E = nf((_) => {
      const P = _.target;
      [...l.branches].some((L) => L.contains(P)) || (a?.(_), i?.(_), _.defaultPrevented || s?.());
    }, m);
    return Kp((_) => {
      b === l.layers.size - 1 && (r?.(_), !_.defaultPrevented && s && (_.preventDefault(), s()));
    }, m), f.useEffect(() => {
      if (u)
        return t && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Ai = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Ii(), () => {
          t && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Ai);
        };
    }, [u, m, t, l]), f.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Ii());
    }, [u, l]), f.useEffect(() => {
      const _ = () => g({});
      return document.addEventListener(ca, _), () => document.removeEventListener(ca, _);
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
          y.onPointerDownCapture
        )
      }
    );
  }
);
kn.displayName = Zp;
var Qp = "DismissableLayerBranch", ef = f.forwardRef((e, n) => {
  const t = f.useContext(bc), r = f.useRef(null), o = pe(n, r);
  return f.useEffect(() => {
    const a = r.current;
    if (a)
      return t.branches.add(a), () => {
        t.branches.delete(a);
      };
  }, [t.branches]), /* @__PURE__ */ d.jsx(le.div, { ...e, ref: o });
});
ef.displayName = Qp;
function tf(e, n = globalThis?.document) {
  const t = rt(e), r = f.useRef(!1), o = f.useRef(() => {
  });
  return f.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          yc(
            Xp,
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
    }, i = window.setTimeout(() => {
      n.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), n.removeEventListener("pointerdown", a), n.removeEventListener("click", o.current);
    };
  }, [n, t]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function nf(e, n = globalThis?.document) {
  const t = rt(e), r = f.useRef(!1);
  return f.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && yc(Jp, t, { originalEvent: a }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", o), () => n.removeEventListener("focusin", o);
  }, [n, t]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ii() {
  const e = new CustomEvent(ca);
  document.dispatchEvent(e);
}
function yc(e, n, t, { discrete: r }) {
  const o = t.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  n && o.addEventListener(e, n, { once: !0 }), r ? xc(o, a) : o.dispatchEvent(a);
}
var Po = "focusScope.autoFocusOnMount", Ro = "focusScope.autoFocusOnUnmount", Fi = { bubbles: !1, cancelable: !0 }, rf = "FocusScope", Jn = f.forwardRef((e, n) => {
  const {
    loop: t = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, c] = f.useState(null), l = rt(o), u = rt(a), p = f.useRef(null), m = pe(n, (h) => c(h)), g = f.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  f.useEffect(() => {
    if (r) {
      let h = function(C) {
        if (g.paused || !s) return;
        const S = C.target;
        s.contains(S) ? p.current = S : jt(p.current, { select: !0 });
      }, v = function(C) {
        if (g.paused || !s) return;
        const S = C.relatedTarget;
        S !== null && (s.contains(S) || jt(p.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const y of C)
            y.removedNodes.length > 0 && jt(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", v);
      const b = new MutationObserver(w);
      return s && b.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", v), b.disconnect();
      };
    }
  }, [r, s, g.paused]), f.useEffect(() => {
    if (s) {
      Wi.add(g);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const w = new CustomEvent(Po, Fi);
        s.addEventListener(Po, l), s.dispatchEvent(w), w.defaultPrevented || (of(df(wc(s)), { select: !0 }), document.activeElement === h && jt(s));
      }
      return () => {
        s.removeEventListener(Po, l), setTimeout(() => {
          const w = new CustomEvent(Ro, Fi);
          s.addEventListener(Ro, u), s.dispatchEvent(w), w.defaultPrevented || jt(h ?? document.body, { select: !0 }), s.removeEventListener(Ro, u), Wi.remove(g);
        }, 0);
      };
    }
  }, [s, l, u, g]);
  const x = f.useCallback(
    (h) => {
      if (!t && !r || g.paused) return;
      const v = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (v && w) {
        const b = h.currentTarget, [C, S] = af(b);
        C && S ? !h.shiftKey && w === S ? (h.preventDefault(), t && jt(C, { select: !0 })) : h.shiftKey && w === C && (h.preventDefault(), t && jt(S, { select: !0 })) : w === b && h.preventDefault();
      }
    },
    [t, r, g.paused]
  );
  return /* @__PURE__ */ d.jsx(le.div, { tabIndex: -1, ...i, ref: m, onKeyDown: x });
});
Jn.displayName = rf;
function of(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const r of e)
    if (jt(r, { select: n }), document.activeElement !== t) return;
}
function af(e) {
  const n = wc(e), t = Li(n, e), r = Li(n.reverse(), e);
  return [t, r];
}
function wc(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function Li(e, n) {
  for (const t of e)
    if (!sf(t, { upTo: n })) return t;
}
function sf(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function cf(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function jt(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== t && cf(e) && n && e.select();
  }
}
var Wi = lf();
function lf() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && t?.pause(), e = zi(e, n), e.unshift(n);
    },
    remove(n) {
      e = zi(e, n), e[0]?.resume();
    }
  };
}
function zi(e, n) {
  const t = [...e], r = t.indexOf(n);
  return r !== -1 && t.splice(r, 1), t;
}
function df(e) {
  return e.filter((n) => n.tagName !== "A");
}
var uf = "Portal", Qn = f.forwardRef((e, n) => {
  const { container: t, ...r } = e, [o, a] = f.useState(!1);
  We(() => a(!0), []);
  const i = t || o && globalThis?.document?.body;
  return i ? Tp.createPortal(/* @__PURE__ */ d.jsx(le.div, { ...r, ref: n }), i) : null;
});
Qn.displayName = uf;
function pf(e, n) {
  return f.useReducer((t, r) => n[t][r] ?? t, e);
}
var it = (e) => {
  const { present: n, children: t } = e, r = ff(n), o = typeof t == "function" ? t({ present: r.isPresent }) : f.Children.only(t), a = pe(r.ref, mf(o));
  return typeof t == "function" || r.isPresent ? f.cloneElement(o, { ref: a }) : null;
};
it.displayName = "Presence";
function ff(e) {
  const [n, t] = f.useState(), r = f.useRef(null), o = f.useRef(e), a = f.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = pf(i, {
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
  return f.useEffect(() => {
    const l = mr(r.current);
    a.current = s === "mounted" ? l : "none";
  }, [s]), We(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const m = a.current, g = mr(l);
      e ? c("MOUNT") : g === "none" || l?.display === "none" ? c("UNMOUNT") : c(u && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), We(() => {
    if (n) {
      let l;
      const u = n.ownerDocument.defaultView ?? window, p = (g) => {
        const h = mr(r.current).includes(CSS.escape(g.animationName));
        if (g.target === n && h && (c("ANIMATION_END"), !o.current)) {
          const v = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = v);
          });
        }
      }, m = (g) => {
        g.target === n && (a.current = mr(r.current));
      };
      return n.addEventListener("animationstart", m), n.addEventListener("animationcancel", p), n.addEventListener("animationend", p), () => {
        u.clearTimeout(l), n.removeEventListener("animationstart", m), n.removeEventListener("animationcancel", p), n.removeEventListener("animationend", p);
      };
    } else
      c("ANIMATION_END");
  }, [n, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: f.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, t(l);
    }, [])
  };
}
function mr(e) {
  return e?.animationName || "none";
}
function mf(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var jo = 0;
function Xr() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? $i()), document.body.insertAdjacentElement("beforeend", e[1] ?? $i()), jo++, () => {
      jo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), jo--;
    };
  }, []);
}
function $i() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var la = function(e, n) {
  return la = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, la(e, n);
};
function hf(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  la(e, n);
  function t() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
var Ee = function() {
  return Ee = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
    }
    return n;
  }, Ee.apply(this, arguments);
};
function Cc(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
}
function nn(e, n, t, r) {
  function o(a) {
    return a instanceof t ? a : new t(function(i) {
      i(a);
    });
  }
  return new (t || (t = Promise))(function(a, i) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (p) {
        i(p);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (p) {
        i(p);
      }
    }
    function l(u) {
      u.done ? a(u.value) : o(u.value).then(s, c);
    }
    l((r = r.apply(e, n || [])).next());
  });
}
function gf(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, a; r < o; r++)
    (a || !(r in n)) && (a || (a = Array.prototype.slice.call(n, 0, r)), a[r] = n[r]);
  return e.concat(a || Array.prototype.slice.call(n));
}
var Dr = "right-scroll-bar-position", Or = "width-before-scroll-bar", vf = "with-scroll-bars-hidden", xf = "--removed-body-scroll-bar-size";
function To(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function bf(e, n) {
  var t = Fe(function() {
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
var yf = typeof window < "u" ? f.useLayoutEffect : f.useEffect, Bi = /* @__PURE__ */ new WeakMap();
function wf(e, n) {
  var t = bf(null, function(r) {
    return e.forEach(function(o) {
      return To(o, r);
    });
  });
  return yf(function() {
    var r = Bi.get(t);
    if (r) {
      var o = new Set(r), a = new Set(e), i = t.current;
      o.forEach(function(s) {
        a.has(s) || To(s, null);
      }), a.forEach(function(s) {
        o.has(s) || To(s, i);
      });
    }
    Bi.set(t, e);
  }, [e]), t;
}
function Cf(e) {
  return e;
}
function kf(e, n) {
  n === void 0 && (n = Cf);
  var t = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return t.length ? t[t.length - 1] : e;
    },
    useMedium: function(a) {
      var i = n(a, r);
      return t.push(i), function() {
        t = t.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; t.length; ) {
        var i = t;
        t = [], i.forEach(a);
      }
      t = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return t;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (t.length) {
        var s = t;
        t = [], s.forEach(a), i = t;
      }
      var c = function() {
        var u = i;
        i = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), t = {
        push: function(u) {
          i.push(u), l();
        },
        filter: function(u) {
          return i = i.filter(u), t;
        }
      };
    }
  };
  return o;
}
function Sf(e) {
  e === void 0 && (e = {});
  var n = kf(null);
  return n.options = Ee({ async: !0, ssr: !1 }, e), n;
}
var kc = function(e) {
  var n = e.sideCar, t = Cc(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = n.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return f.createElement(r, Ee({}, t));
};
kc.isSideCarExport = !0;
function Ef(e, n) {
  return e.useMedium(n), kc;
}
var Sc = Sf(), No = function() {
}, Jr = f.forwardRef(function(e, n) {
  var t = f.useRef(null), r = f.useState({
    onScrollCapture: No,
    onWheelCapture: No,
    onTouchMoveCapture: No
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, p = e.shards, m = e.sideCar, g = e.noRelative, x = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, C = e.gapMode, S = Cc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), y = m, E = wf([t, n]), _ = Ee(Ee({}, S), o);
  return f.createElement(
    f.Fragment,
    null,
    u && f.createElement(y, { sideCar: Sc, removeScrollBar: l, shards: p, noRelative: g, noIsolation: x, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: t, gapMode: C }),
    i ? f.cloneElement(f.Children.only(s), Ee(Ee({}, _), { ref: E })) : f.createElement(b, Ee({}, _, { className: c, ref: E }), s)
  );
});
Jr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Jr.classNames = {
  fullWidth: Or,
  zeroRight: Dr
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
  var n = _f();
  return n && e.setAttribute("nonce", n), e;
}
function Df(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function Of(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var Pf = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = Mf()) && (Df(n, t), Of(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, Rf = function() {
  var e = Pf();
  return function(n, t) {
    f.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, Ec = function() {
  var e = Rf(), n = function(t) {
    var r = t.styles, o = t.dynamic;
    return e(r, o), null;
  };
  return n;
}, jf = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ao = function(e) {
  return parseInt(e || "", 10) || 0;
}, Tf = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], r = n[e === "padding" ? "paddingTop" : "marginTop"], o = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ao(t), Ao(r), Ao(o)];
}, Nf = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return jf;
  var n = Tf(e), t = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, r - t + n[2] - n[0])
  };
}, Af = Ec(), mn = "data-scroll-locked", If = function(e, n, t, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(vf, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(mn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    n && "position: relative ".concat(r, ";"),
    t === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    t === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Dr, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Or, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Dr, " .").concat(Dr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Or, " .").concat(Or, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(mn, `] {
    `).concat(xf, ": ").concat(s, `px;
  }
`);
}, Vi = function() {
  var e = parseInt(document.body.getAttribute(mn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ff = function() {
  f.useEffect(function() {
    return document.body.setAttribute(mn, (Vi() + 1).toString()), function() {
      var e = Vi() - 1;
      e <= 0 ? document.body.removeAttribute(mn) : document.body.setAttribute(mn, e.toString());
    };
  }, []);
}, Lf = function(e) {
  var n = e.noRelative, t = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Ff();
  var a = f.useMemo(function() {
    return Nf(o);
  }, [o]);
  return f.createElement(Af, { styles: If(a, !n, o, t ? "" : "!important") });
}, da = !1;
if (typeof window < "u")
  try {
    var hr = Object.defineProperty({}, "passive", {
      get: function() {
        return da = !0, !0;
      }
    });
    window.addEventListener("test", hr, hr), window.removeEventListener("test", hr, hr);
  } catch {
    da = !1;
  }
var an = da ? { passive: !1 } : !1, Wf = function(e) {
  return e.tagName === "TEXTAREA";
}, _c = function(e, n) {
  if (!(e instanceof Element))
    return !1;
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !Wf(e) && t[n] === "visible")
  );
}, zf = function(e) {
  return _c(e, "overflowY");
}, $f = function(e) {
  return _c(e, "overflowX");
}, Hi = function(e, n) {
  var t = n.ownerDocument, r = n;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Mc(e, r);
    if (o) {
      var a = Dc(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== t.body);
  return !1;
}, Bf = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, r = e.clientHeight;
  return [
    n,
    t,
    r
  ];
}, Vf = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, r = e.clientWidth;
  return [
    n,
    t,
    r
  ];
}, Mc = function(e, n) {
  return e === "v" ? zf(n) : $f(n);
}, Dc = function(e, n) {
  return e === "v" ? Bf(n) : Vf(n);
}, Hf = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, Yf = function(e, n, t, r, o) {
  var a = Hf(e, window.getComputedStyle(n).direction), i = a * r, s = t.target, c = n.contains(s), l = !1, u = i > 0, p = 0, m = 0;
  do {
    if (!s)
      break;
    var g = Dc(e, s), x = g[0], h = g[1], v = g[2], w = h - v - a * x;
    (x || w) && Mc(e, s) && (p += w, m += x);
    var b = s.parentNode;
    s = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (n.contains(s) || n === s)
  );
  return (u && Math.abs(p) < 1 || !u && Math.abs(m) < 1) && (l = !0), l;
}, gr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Yi = function(e) {
  return [e.deltaX, e.deltaY];
}, Ui = function(e) {
  return e && "current" in e ? e.current : e;
}, Uf = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, Gf = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, qf = 0, sn = [];
function Kf(e) {
  var n = f.useRef([]), t = f.useRef([0, 0]), r = f.useRef(), o = f.useState(qf++)[0], a = f.useState(Ec)[0], i = f.useRef(e);
  f.useEffect(function() {
    i.current = e;
  }, [e]), f.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = gf([e.lockRef.current], (e.shards || []).map(Ui), !0).filter(Boolean);
      return h.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = f.useCallback(function(h, v) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = gr(h), b = t.current, C = "deltaX" in h ? h.deltaX : b[0] - w[0], S = "deltaY" in h ? h.deltaY : b[1] - w[1], y, E = h.target, _ = Math.abs(C) > Math.abs(S) ? "h" : "v";
    if ("touches" in h && _ === "h" && E.type === "range")
      return !1;
    var P = window.getSelection(), A = P && P.anchorNode, L = A ? A === E || A.contains(E) : !1;
    if (L)
      return !1;
    var q = Hi(_, E);
    if (!q)
      return !0;
    if (q ? y = _ : (y = _ === "v" ? "h" : "v", q = Hi(_, E)), !q)
      return !1;
    if (!r.current && "changedTouches" in h && (C || S) && (r.current = y), !y)
      return !0;
    var G = r.current || y;
    return Yf(G, v, h, G === "h" ? C : S);
  }, []), c = f.useCallback(function(h) {
    var v = h;
    if (!(!sn.length || sn[sn.length - 1] !== a)) {
      var w = "deltaY" in v ? Yi(v) : gr(v), b = n.current.filter(function(y) {
        return y.name === v.type && (y.target === v.target || v.target === y.shadowParent) && Uf(y.delta, w);
      })[0];
      if (b && b.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!b) {
        var C = (i.current.shards || []).map(Ui).filter(Boolean).filter(function(y) {
          return y.contains(v.target);
        }), S = C.length > 0 ? s(v, C[0]) : !i.current.noIsolation;
        S && v.cancelable && v.preventDefault();
      }
    }
  }, []), l = f.useCallback(function(h, v, w, b) {
    var C = { name: h, delta: v, target: w, should: b, shadowParent: Zf(w) };
    n.current.push(C), setTimeout(function() {
      n.current = n.current.filter(function(S) {
        return S !== C;
      });
    }, 1);
  }, []), u = f.useCallback(function(h) {
    t.current = gr(h), r.current = void 0;
  }, []), p = f.useCallback(function(h) {
    l(h.type, Yi(h), h.target, s(h, e.lockRef.current));
  }, []), m = f.useCallback(function(h) {
    l(h.type, gr(h), h.target, s(h, e.lockRef.current));
  }, []);
  f.useEffect(function() {
    return sn.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, an), document.addEventListener("touchmove", c, an), document.addEventListener("touchstart", u, an), function() {
      sn = sn.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, an), document.removeEventListener("touchmove", c, an), document.removeEventListener("touchstart", u, an);
    };
  }, []);
  var g = e.removeScrollBar, x = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    x ? f.createElement(a, { styles: Gf(o) }) : null,
    g ? f.createElement(Lf, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Zf(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
  return n;
}
const Xf = Ef(Sc, Kf);
var er = f.forwardRef(function(e, n) {
  return f.createElement(Jr, Ee({}, e, { ref: n, sideCar: Xf }));
});
er.classNames = Jr.classNames;
var Jf = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, cn = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), xr = {}, Io = 0, Oc = function(e) {
  return e && (e.host || Oc(e.parentNode));
}, Qf = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var r = Oc(t);
    return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, em = function(e, n, t, r) {
  var o = Qf(n, Array.isArray(e) ? e : [e]);
  xr[t] || (xr[t] = /* @__PURE__ */ new WeakMap());
  var a = xr[t], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(p) {
    !p || s.has(p) || (s.add(p), l(p.parentNode));
  };
  o.forEach(l);
  var u = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (s.has(m))
        u(m);
      else
        try {
          var g = m.getAttribute(r), x = g !== null && g !== "false", h = (cn.get(m) || 0) + 1, v = (a.get(m) || 0) + 1;
          cn.set(m, h), a.set(m, v), i.push(m), h === 1 && x && vr.set(m, !0), v === 1 && m.setAttribute(t, "true"), x || m.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return u(n), s.clear(), Io++, function() {
    i.forEach(function(p) {
      var m = cn.get(p) - 1, g = a.get(p) - 1;
      cn.set(p, m), a.set(p, g), m || (vr.has(p) || p.removeAttribute(r), vr.delete(p)), g || p.removeAttribute(t);
    }), Io--, Io || (cn = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), xr = {});
  };
}, Qr = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Jf(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), em(r, o, t, "aria-hidden")) : function() {
    return null;
  };
}, eo = "Dialog", [Pc, Rc] = yt(eo), [tm, st] = Pc(eo), Na = (e) => {
  const {
    __scopeDialog: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = f.useRef(null), c = f.useRef(null), [l, u] = Tt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: eo
  });
  return /* @__PURE__ */ d.jsx(
    tm,
    {
      scope: n,
      triggerRef: s,
      contentRef: c,
      contentId: Ge(),
      titleId: Ge(),
      descriptionId: Ge(),
      open: l,
      onOpenChange: u,
      onOpenToggle: f.useCallback(() => u((p) => !p), [u]),
      modal: i,
      children: t
    }
  );
};
Na.displayName = eo;
var jc = "DialogTrigger", Aa = f.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = st(jc, t), a = pe(n, o.triggerRef);
    return /* @__PURE__ */ d.jsx(
      le.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Va(o.open),
        ...r,
        ref: a,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Aa.displayName = jc;
var Ia = "DialogPortal", [nm, Tc] = Pc(Ia, {
  forceMount: void 0
}), Fa = (e) => {
  const { __scopeDialog: n, forceMount: t, children: r, container: o } = e, a = st(Ia, n);
  return /* @__PURE__ */ d.jsx(nm, { scope: n, forceMount: t, children: f.Children.map(r, (i) => /* @__PURE__ */ d.jsx(it, { present: t || a.open, children: /* @__PURE__ */ d.jsx(Qn, { asChild: !0, container: o, children: i }) })) });
};
Fa.displayName = Ia;
var Tr = "DialogOverlay", La = f.forwardRef(
  (e, n) => {
    const t = Tc(Tr, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, a = st(Tr, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ d.jsx(it, { present: r || a.open, children: /* @__PURE__ */ d.jsx(om, { ...o, ref: n }) }) : null;
  }
);
La.displayName = Tr;
var rm = /* @__PURE__ */ Zt("DialogOverlay.RemoveScroll"), om = f.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = st(Tr, t);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d.jsx(er, { as: rm, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d.jsx(
        le.div,
        {
          "data-state": Va(o.open),
          ...r,
          ref: n,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Xt = "DialogContent", Wa = f.forwardRef(
  (e, n) => {
    const t = Tc(Xt, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, a = st(Xt, e.__scopeDialog);
    return /* @__PURE__ */ d.jsx(it, { present: r || a.open, children: a.modal ? /* @__PURE__ */ d.jsx(am, { ...o, ref: n }) : /* @__PURE__ */ d.jsx(im, { ...o, ref: n }) });
  }
);
Wa.displayName = Xt;
var am = f.forwardRef(
  (e, n) => {
    const t = st(Xt, e.__scopeDialog), r = f.useRef(null), o = pe(n, t.contentRef, r);
    return f.useEffect(() => {
      const a = r.current;
      if (a) return Qr(a);
    }, []), /* @__PURE__ */ d.jsx(
      Nc,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), t.triggerRef.current?.focus();
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
), im = f.forwardRef(
  (e, n) => {
    const t = st(Xt, e.__scopeDialog), r = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Nc,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || t.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          t.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Nc = f.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = st(Xt, t), c = f.useRef(null), l = pe(n, c);
    return Xr(), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        Jn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ d.jsx(
            kn,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Va(s.open),
              ...i,
              ref: l,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(cm, { titleId: s.titleId }),
        /* @__PURE__ */ d.jsx(dm, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), za = "DialogTitle", $a = f.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = st(za, t);
    return /* @__PURE__ */ d.jsx(le.h2, { id: o.titleId, ...r, ref: n });
  }
);
$a.displayName = za;
var Ac = "DialogDescription", Ba = f.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = st(Ac, t);
    return /* @__PURE__ */ d.jsx(le.p, { id: o.descriptionId, ...r, ref: n });
  }
);
Ba.displayName = Ac;
var Ic = "DialogClose", tr = f.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = st(Ic, t);
    return /* @__PURE__ */ d.jsx(
      le.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
tr.displayName = Ic;
function Va(e) {
  return e ? "open" : "closed";
}
var Fc = "DialogTitleWarning", [sm, Lc] = Fp(Fc, {
  contentName: Xt,
  titleName: za,
  docsSlug: "dialog"
}), cm = ({ titleId: e }) => {
  const n = Lc(Fc), t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
  return f.useEffect(() => {
    e && (document.getElementById(e) || console.error(t));
  }, [t, e]), null;
}, lm = "DialogDescriptionWarning", dm = ({ contentRef: e, descriptionId: n }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Lc(lm).contentName}}.`;
  return f.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    n && o && (document.getElementById(n) || console.warn(r));
  }, [r, e, n]), null;
}, um = Na, pm = Aa, fm = Fa, mm = La, hm = Wa, gm = $a, vm = Ba, Wc = tr, zc = "AlertDialog", [xm] = yt(zc, [
  Rc
]), Dt = Rc(), $c = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = Dt(n);
  return /* @__PURE__ */ d.jsx(um, { ...r, ...t, modal: !0 });
};
$c.displayName = zc;
var bm = "AlertDialogTrigger", ym = f.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Dt(t);
    return /* @__PURE__ */ d.jsx(pm, { ...o, ...r, ref: n });
  }
);
ym.displayName = bm;
var wm = "AlertDialogPortal", Bc = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = Dt(n);
  return /* @__PURE__ */ d.jsx(fm, { ...r, ...t });
};
Bc.displayName = wm;
var Cm = "AlertDialogOverlay", Vc = f.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Dt(t);
    return /* @__PURE__ */ d.jsx(mm, { ...o, ...r, ref: n });
  }
);
Vc.displayName = Cm;
var hn = "AlertDialogContent", [km, Sm] = xm(hn), Em = /* @__PURE__ */ vc("AlertDialogContent"), Hc = f.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, children: r, ...o } = e, a = Dt(t), i = f.useRef(null), s = pe(n, i), c = f.useRef(null);
    return /* @__PURE__ */ d.jsx(
      sm,
      {
        contentName: hn,
        titleName: Yc,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ d.jsx(km, { scope: t, cancelRef: c, children: /* @__PURE__ */ d.jsxs(
          hm,
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
              /* @__PURE__ */ d.jsx(Em, { children: r }),
              /* @__PURE__ */ d.jsx(Mm, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
Hc.displayName = hn;
var Yc = "AlertDialogTitle", Uc = f.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Dt(t);
    return /* @__PURE__ */ d.jsx(gm, { ...o, ...r, ref: n });
  }
);
Uc.displayName = Yc;
var Gc = "AlertDialogDescription", qc = f.forwardRef((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = Dt(t);
  return /* @__PURE__ */ d.jsx(vm, { ...o, ...r, ref: n });
});
qc.displayName = Gc;
var _m = "AlertDialogAction", Kc = f.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Dt(t);
    return /* @__PURE__ */ d.jsx(Wc, { ...o, ...r, ref: n });
  }
);
Kc.displayName = _m;
var Zc = "AlertDialogCancel", Xc = f.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, { cancelRef: o } = Sm(Zc, t), a = Dt(t), i = pe(n, o);
    return /* @__PURE__ */ d.jsx(Wc, { ...a, ...r, ref: i });
  }
);
Xc.displayName = Zc;
var Mm = ({ contentRef: e }) => {
  const n = `\`${hn}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${hn}\` by passing a \`${Gc}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${hn}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return f.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(n);
  }, [n, e]), null;
}, Dm = $c, Om = Bc, Pm = Vc, Rm = Hc, ak = Kc, ik = Xc, jm = Uc, Gi = qc, Tm = Symbol.for("react.lazy"), Nr = f[" use ".trim().toString()];
function Nm(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Jc(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Tm && "_payload" in e && Nm(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Qc(e) {
  const n = /* @__PURE__ */ Am(e), t = f.forwardRef((r, o) => {
    let { children: a, ...i } = r;
    Jc(a) && typeof Nr == "function" && (a = Nr(a._payload));
    const s = f.Children.toArray(a), c = s.find(Fm);
    if (c) {
      const l = c.props.children, u = s.map((p) => p === c ? f.Children.count(l) > 1 ? f.Children.only(null) : f.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ d.jsx(n, { ...i, ref: o, children: f.isValidElement(l) ? f.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ d.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
var to = /* @__PURE__ */ Qc("Slot");
// @__NO_SIDE_EFFECTS__
function Am(e) {
  const n = f.forwardRef((t, r) => {
    let { children: o, ...a } = t;
    if (Jc(o) && typeof Nr == "function" && (o = Nr(o._payload)), f.isValidElement(o)) {
      const i = Wm(o), s = Lm(a, o.props);
      return o.type !== f.Fragment && (s.ref = r ? Xn(r, i) : i), f.cloneElement(o, s);
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Im = Symbol("radix.slottable");
function Fm(e) {
  return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Im;
}
function Lm(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], a = n[r];
    /^on[A-Z]/.test(r) ? o && a ? t[r] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...a } : r === "className" && (t[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Wm(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var zm = [
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
], $m = zm.reduce((e, n) => {
  const t = /* @__PURE__ */ Qc(`Primitive.${n}`), r = f.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, c = i ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), Bm = Object.freeze({
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
}), Vm = "VisuallyHidden", el = f.forwardRef(
  (e, n) => /* @__PURE__ */ d.jsx(
    $m.span,
    {
      ...e,
      ref: n,
      style: { ...Bm, ...e.style }
    }
  )
);
el.displayName = Vm;
var Hm = el;
function tl(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = tl(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function nl() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = tl(e)) && (r && (r += " "), r += n);
  return r;
}
const Ym = (e, n) => {
  const t = new Array(e.length + n.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e[r];
  for (let r = 0; r < n.length; r++)
    t[e.length + r] = n[r];
  return t;
}, Um = (e, n) => ({
  classGroupId: e,
  validator: n
}), rl = (e = /* @__PURE__ */ new Map(), n = null, t) => ({
  nextPart: e,
  validators: n,
  classGroupId: t
}), Ar = "-", qi = [], Gm = "arbitrary..", qm = (e) => {
  const n = Zm(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return Km(i);
      const s = i.split(Ar), c = s[0] === "" && s.length > 1 ? 1 : 0;
      return ol(s, c, n);
    },
    getConflictingClassGroupIds: (i, s) => {
      if (s) {
        const c = r[i], l = t[i];
        return c ? l ? Ym(l, c) : c : l || qi;
      }
      return t[i] || qi;
    }
  };
}, ol = (e, n, t) => {
  if (e.length - n === 0)
    return t.classGroupId;
  const o = e[n], a = t.nextPart.get(o);
  if (a) {
    const l = ol(e, n + 1, a);
    if (l) return l;
  }
  const i = t.validators;
  if (i === null)
    return;
  const s = n === 0 ? e.join(Ar) : e.slice(n).join(Ar), c = i.length;
  for (let l = 0; l < c; l++) {
    const u = i[l];
    if (u.validator(s))
      return u.classGroupId;
  }
}, Km = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), t = n.indexOf(":"), r = n.slice(0, t);
  return r ? Gm + r : void 0;
})(), Zm = (e) => {
  const {
    theme: n,
    classGroups: t
  } = e;
  return Xm(t, n);
}, Xm = (e, n) => {
  const t = rl();
  for (const r in e) {
    const o = e[r];
    Ha(o, t, r, n);
  }
  return t;
}, Ha = (e, n, t, r) => {
  const o = e.length;
  for (let a = 0; a < o; a++) {
    const i = e[a];
    Jm(i, n, t, r);
  }
}, Jm = (e, n, t, r) => {
  if (typeof e == "string") {
    Qm(e, n, t);
    return;
  }
  if (typeof e == "function") {
    eh(e, n, t, r);
    return;
  }
  th(e, n, t, r);
}, Qm = (e, n, t) => {
  const r = e === "" ? n : al(n, e);
  r.classGroupId = t;
}, eh = (e, n, t, r) => {
  if (nh(e)) {
    Ha(e(r), n, t, r);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(Um(t, e));
}, th = (e, n, t, r) => {
  const o = Object.entries(e), a = o.length;
  for (let i = 0; i < a; i++) {
    const [s, c] = o[i];
    Ha(c, al(n, s), t, r);
  }
}, al = (e, n) => {
  let t = e;
  const r = n.split(Ar), o = r.length;
  for (let a = 0; a < o; a++) {
    const i = r[a];
    let s = t.nextPart.get(i);
    s || (s = rl(), t.nextPart.set(i, s)), t = s;
  }
  return t;
}, nh = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, rh = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (a, i) => {
    t[a] = i, n++, n > e && (n = 0, r = t, t = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(a) {
      let i = t[a];
      if (i !== void 0)
        return i;
      if ((i = r[a]) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      a in t ? t[a] = i : o(a, i);
    }
  };
}, ua = "!", Ki = ":", oh = [], Zi = (e, n, t, r, o) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: t,
  maybePostfixModifierPosition: r,
  isExternal: o
}), ah = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: t
  } = e;
  let r = (o) => {
    const a = [];
    let i = 0, s = 0, c = 0, l;
    const u = o.length;
    for (let h = 0; h < u; h++) {
      const v = o[h];
      if (i === 0 && s === 0) {
        if (v === Ki) {
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
    const p = a.length === 0 ? o : o.slice(c);
    let m = p, g = !1;
    p.endsWith(ua) ? (m = p.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(ua) && (m = p.slice(1), g = !0)
    );
    const x = l && l > c ? l - c : void 0;
    return Zi(a, g, m, x);
  };
  if (n) {
    const o = n + Ki, a = r;
    r = (i) => i.startsWith(o) ? a(i.slice(o.length)) : Zi(oh, !1, i, void 0, !0);
  }
  if (t) {
    const o = r;
    r = (a) => t({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, ih = (e) => {
  const n = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((t, r) => {
    n.set(t, 1e6 + r);
  }), (t) => {
    const r = [];
    let o = [];
    for (let a = 0; a < t.length; a++) {
      const i = t[a], s = i[0] === "[", c = n.has(i);
      s || c ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(i)) : o.push(i);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, sh = (e) => ({
  cache: rh(e.cacheSize),
  parseClassName: ah(e),
  sortModifiers: ih(e),
  ...qm(e)
}), ch = /\s+/, lh = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = n, i = [], s = e.trim().split(ch);
  let c = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const u = s[l], {
      isExternal: p,
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: h
    } = t(u);
    if (p) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let v = !!h, w = r(v ? x.substring(0, h) : x);
    if (!w) {
      if (!v) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (w = r(x), !w) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      v = !1;
    }
    const b = m.length === 0 ? "" : m.length === 1 ? m[0] : a(m).join(":"), C = g ? b + ua : b, S = C + w;
    if (i.indexOf(S) > -1)
      continue;
    i.push(S);
    const y = o(w, v);
    for (let E = 0; E < y.length; ++E) {
      const _ = y[E];
      i.push(C + _);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
}, dh = (...e) => {
  let n = 0, t, r, o = "";
  for (; n < e.length; )
    (t = e[n++]) && (r = il(t)) && (o && (o += " "), o += r);
  return o;
}, il = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = il(e[r])) && (t && (t += " "), t += n);
  return t;
}, uh = (e, ...n) => {
  let t, r, o, a;
  const i = (c) => {
    const l = n.reduce((u, p) => p(u), e());
    return t = sh(l), r = t.cache.get, o = t.cache.set, a = s, s(c);
  }, s = (c) => {
    const l = r(c);
    if (l)
      return l;
    const u = lh(c, t);
    return o(c, u), u;
  };
  return a = i, (...c) => a(dh(...c));
}, ph = [], Te = (e) => {
  const n = (t) => t[e] || ph;
  return n.isThemeGetter = !0, n;
}, sl = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, cl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fh = /^\d+\/\d+$/, mh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, vh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ln = (e) => fh.test(e), ce = (e) => !!e && !Number.isNaN(Number(e)), Pt = (e) => !!e && Number.isInteger(Number(e)), Fo = (e) => e.endsWith("%") && ce(e.slice(0, -1)), kt = (e) => mh.test(e), bh = () => !0, yh = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hh.test(e) && !gh.test(e)
), ll = () => !1, wh = (e) => vh.test(e), Ch = (e) => xh.test(e), kh = (e) => !ee(e) && !te(e), Sh = (e) => Sn(e, pl, ll), ee = (e) => sl.test(e), Ht = (e) => Sn(e, fl, yh), Lo = (e) => Sn(e, Oh, ce), Xi = (e) => Sn(e, dl, ll), Eh = (e) => Sn(e, ul, Ch), br = (e) => Sn(e, ml, wh), te = (e) => cl.test(e), Nn = (e) => En(e, fl), _h = (e) => En(e, Ph), Ji = (e) => En(e, dl), Mh = (e) => En(e, pl), Dh = (e) => En(e, ul), yr = (e) => En(e, ml, !0), Sn = (e, n, t) => {
  const r = sl.exec(e);
  return r ? r[1] ? n(r[1]) : t(r[2]) : !1;
}, En = (e, n, t = !1) => {
  const r = cl.exec(e);
  return r ? r[1] ? n(r[1]) : t : !1;
}, dl = (e) => e === "position" || e === "percentage", ul = (e) => e === "image" || e === "url", pl = (e) => e === "length" || e === "size" || e === "bg-size", fl = (e) => e === "length", Oh = (e) => e === "number", Ph = (e) => e === "family-name", ml = (e) => e === "shadow", Rh = () => {
  const e = Te("color"), n = Te("font"), t = Te("text"), r = Te("font-weight"), o = Te("tracking"), a = Te("leading"), i = Te("breakpoint"), s = Te("container"), c = Te("spacing"), l = Te("radius"), u = Te("shadow"), p = Te("inset-shadow"), m = Te("text-shadow"), g = Te("drop-shadow"), x = Te("blur"), h = Te("perspective"), v = Te("aspect"), w = Te("ease"), b = Te("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], y = () => [...S(), te, ee], E = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", "contain", "none"], P = () => [te, ee, c], A = () => [ln, "full", "auto", ...P()], L = () => [Pt, "none", "subgrid", te, ee], q = () => ["auto", {
    span: ["full", Pt, te, ee]
  }, Pt, te, ee], G = () => [Pt, "auto", te, ee], H = () => ["auto", "min", "max", "fr", te, ee], z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...P()], Q = () => [ln, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], D = () => [e, te, ee], R = () => [...S(), Ji, Xi, {
    position: [te, ee]
  }], M = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], k = () => ["auto", "cover", "contain", Mh, Sh, {
    size: [te, ee]
  }], T = () => [Fo, Nn, Ht], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    te,
    ee
  ], F = () => ["", ce, Nn, Ht], K = () => ["solid", "dashed", "dotted", "double"], Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => [ce, Fo, Ji, Xi], U = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    te,
    ee
  ], J = () => ["none", ce, te, ee], B = () => ["none", ce, te, ee], ae = () => [ce, te, ee], I = () => [ln, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [kt],
      breakpoint: [kt],
      color: [bh],
      container: [kt],
      "drop-shadow": [kt],
      ease: ["in", "out", "in-out"],
      font: [kh],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [kt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [kt],
      shadow: [kt],
      spacing: ["px", ce],
      text: [kt],
      "text-shadow": [kt],
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
        aspect: ["auto", "square", ln, ee, te, v]
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
        columns: [ce, ee, te, s]
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
        object: y()
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
        inset: A()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": A()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": A()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: A()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: A()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: A()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: A()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: A()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: A()
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
        z: [Pt, "auto", te, ee]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ln, "full", "auto", s, ...P()]
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
        flex: [ce, ln, "auto", "initial", "none", ee]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ce, te, ee]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ce, te, ee]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Pt, "first", "last", "none", te, ee]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": L()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: q()
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
        "grid-rows": L()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: q()
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
        justify: [...z(), "normal"]
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
        content: ["normal", ...z()]
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
        "place-content": z()
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
        m: $()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: $()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: $()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: $()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: $()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: $()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: $()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: $()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: $()
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
        size: Q()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...Q()]
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
          ...Q()
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
          ...Q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Q()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, Nn, Ht]
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
        font: [r, te, Lo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Fo, ee]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_h, ee, n]
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
        tracking: [o, te, ee]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ce, "none", te, Lo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...P()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", te, ee]
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
        list: ["disc", "decimal", "none", te, ee]
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
        placeholder: D()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: D()
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
        decoration: [ce, "from-font", "auto", te, Ht]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: D()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ce, "auto", te, ee]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", te, ee]
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
        content: ["none", te, ee]
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
        bg: R()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: M()
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
          }, Pt, te, ee],
          radial: ["", te, ee],
          conic: [Pt, te, ee]
        }, Dh, Eh]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: D()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: T()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: T()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: T()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: D()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: D()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: W()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": W()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": W()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": W()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": W()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": W()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": W()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": W()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": W()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": W()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": W()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": W()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": W()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": W()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": W()
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
        border: D()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": D()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": D()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": D()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": D()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": D()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": D()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": D()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": D()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: D()
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
        "outline-offset": [ce, te, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ce, Nn, Ht]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: D()
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
          u,
          yr,
          br
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: D()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, yr, br]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": D()
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
        ring: D()
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
        "ring-offset": D()
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
        "inset-ring": D()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, yr, br]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": D()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ce, te, ee]
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
        "mask-linear-from": O()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": O()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": D()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": O()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": O()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": D()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": O()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": O()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": D()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": O()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": O()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": D()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": O()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": O()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": D()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": O()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": O()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": D()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": O()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": O()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": D()
      }],
      "mask-image-radial": [{
        "mask-radial": [te, ee]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": O()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": O()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": D()
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
        "mask-conic-from": O()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": O()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": D()
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
        mask: R()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: M()
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
        mask: ["none", te, ee]
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
          te,
          ee
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
        brightness: [ce, te, ee]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ce, te, ee]
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
          yr,
          br
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": D()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ce, te, ee]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ce, te, ee]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ce, te, ee]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ce, te, ee]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ce, te, ee]
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
          te,
          ee
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
        "backdrop-brightness": [ce, te, ee]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ce, te, ee]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ce, te, ee]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ce, te, ee]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ce, te, ee]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ce, te, ee]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ce, te, ee]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ce, te, ee]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", te, ee]
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
        duration: [ce, "initial", te, ee]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, te, ee]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ce, te, ee]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, te, ee]
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
        perspective: [h, te, ee]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": y()
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
        transform: [te, ee, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: y()
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
        accent: D()
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
        caret: D()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", te, ee]
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
        "will-change": ["auto", "scroll", "contents", "transform", te, ee]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ce, Nn, Ht, Lo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...D()]
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
}, jh = /* @__PURE__ */ uh(Rh);
function j(...e) {
  return jh(nl(e));
}
function sk({
  open: e,
  onOpenChange: n,
  header: t,
  content: r,
  actions: o,
  className: a
}) {
  return /* @__PURE__ */ d.jsx(Dm, { open: e, onOpenChange: n, children: /* @__PURE__ */ d.jsxs(Om, { children: [
    /* @__PURE__ */ d.jsx(Pm, { className: "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
    /* @__PURE__ */ d.jsxs(
      Rm,
      {
        className: j(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
          a
        ),
        children: [
          /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col space-y-2", children: [
            /* @__PURE__ */ d.jsx(jm, { className: "text-lg font-semibold text-gray-900", children: t }),
            typeof r == "string" ? /* @__PURE__ */ d.jsx(Gi, { className: "text-sm text-gray-600", children: r }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              /* @__PURE__ */ d.jsx(Gi, { asChild: !0, children: /* @__PURE__ */ d.jsx(Hm, { children: /* @__PURE__ */ d.jsx("span", { children: "Confirmation dialog content" }) }) }),
              /* @__PURE__ */ d.jsx("div", { className: "text-sm text-gray-600", children: r })
            ] })
          ] }),
          /* @__PURE__ */ d.jsx("div", { className: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0", children: o })
        ]
      }
    )
  ] }) });
}
const Qi = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, es = nl, no = (e, n) => (t) => {
  var r;
  if (n?.variants == null) return es(e, t?.class, t?.className);
  const { variants: o, defaultVariants: a } = n, i = Object.keys(o).map((l) => {
    const u = t?.[l], p = a?.[l];
    if (u === null) return null;
    const m = Qi(u) || Qi(p);
    return o[l][m];
  }), s = t && Object.entries(t).reduce((l, u) => {
    let [p, m] = u;
    return m === void 0 || (l[p] = m), l;
  }, {}), c = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: p, className: m, ...g } = u;
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
      p,
      m
    ] : l;
  }, []);
  return es(e, i, c, t?.class, t?.className);
}, Th = no(
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
function ck({
  className: e,
  variant: n,
  size: t,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      "data-slot": "badge",
      role: "status",
      className: j(Th({ variant: n, size: t, className: e })),
      ...r
    }
  );
}
const Nh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ah = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), ts = (e) => {
  const n = Ah(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, hl = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), Ih = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
var Fh = {
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
const Lh = Kr(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, c) => sa(
    "svg",
    {
      ref: c,
      ...Fh,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: hl("lucide", o),
      ...!a && !Ih(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...i.map(([l, u]) => sa(l, u)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
const Ze = (e, n) => {
  const t = Kr(
    ({ className: r, ...o }, a) => sa(Lh, {
      ref: a,
      iconNode: n,
      className: hl(
        `lucide-${Nh(ts(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return t.displayName = ts(e), t;
};
const Wh = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], zh = Ze("calendar", Wh);
const $h = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], nr = Ze("check", $h);
const Bh = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ya = Ze("chevron-down", Bh);
const Vh = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ro = Ze("chevron-right", Vh);
const Hh = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], gl = Ze("chevron-left", Hh);
const Yh = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Uh = Ze("chevron-up", Yh);
const Gh = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], qh = Ze("clock", Gh);
const Kh = [
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
], Zh = Ze("eye-off", Kh);
const Xh = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Jh = Ze("eye", Xh);
const Qh = [["path", { d: "M5 12h14", key: "1ays0h" }]], eg = Ze("minus", Qh);
const tg = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], ng = Ze("trash-2", tg);
const rg = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], vl = Ze("upload", rg);
const og = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ua = Ze("x", og);
function lk({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      "data-slot": "breadcrumb",
      className: j("w-full", e),
      ...n
    }
  );
}
function dk({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: j("flex items-center justify-start gap-2", e),
      ...n
    }
  );
}
function uk({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: j("flex justify-start items-center gap-x-1", e),
      ...n
    }
  );
}
function pk({
  asChild: e,
  className: n,
  ...t
}) {
  const r = e ? to : "a";
  return /* @__PURE__ */ d.jsx(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: j(
        "flex w-fit font-manrope text-sm font-normal leading-4.5 text-gray-200 hover:text-gray-600 hover:underline transition-all",
        n
      ),
      ...t
    }
  );
}
function fk({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      "aria-current": "page",
      className: j(
        "font-manrope text-sm font-semibold text-blue-hepatica-600 leading-4",
        e
      ),
      ...n
    }
  );
}
function mk() {
  return /* @__PURE__ */ d.jsx(
    ro,
    {
      "data-slot": "breadcrumb-separator",
      "aria-hidden": "true",
      className: "size-4 text-gray-300 shrink-0"
    }
  );
}
const pa = no(
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
function oo({
  className: e,
  variant: n,
  size: t,
  asChild: r = !1,
  ...o
}) {
  const a = r ? to : "button";
  return /* @__PURE__ */ d.jsx(
    a,
    {
      "data-slot": "button",
      className: j(pa({ variant: n, size: t, className: e })),
      ...o
    }
  );
}
function ag(e, n, t = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: t
  }).format(n).split(/\s/g).slice(2).join(" ");
}
const ig = {}, Wn = {};
function qt(e, n) {
  try {
    const r = (ig[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(n).split("GMT")[1];
    return r in Wn ? Wn[r] : ns(r, r.split(":"));
  } catch {
    if (e in Wn) return Wn[e];
    const t = e?.match(sg);
    return t ? ns(e, t.slice(1)) : NaN;
  }
}
const sg = /([+-]\d\d):?(\d\d)?/;
function ns(e, n) {
  const t = +(n[0] || 0), r = +(n[1] || 0), o = +(n[2] || 0) / 60;
  return Wn[e] = t * 60 + r > 0 ? t * 60 + r + o : t * 60 - r - o;
}
class gt extends Date {
  //#region static
  constructor(...n) {
    super(), n.length > 1 && typeof n[n.length - 1] == "string" && (this.timeZone = n.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(qt(this.timeZone, this)) ? this.setTime(NaN) : n.length ? typeof n[0] == "number" && (n.length === 1 || n.length === 2 && typeof n[1] != "number") ? this.setTime(n[0]) : typeof n[0] == "string" ? this.setTime(+new Date(n[0])) : n[0] instanceof Date ? this.setTime(+n[0]) : (this.setTime(+new Date(...n)), xl(this), fa(this)) : this.setTime(Date.now());
  }
  static tz(n, ...t) {
    return t.length ? new gt(...t, n) : new gt(Date.now(), n);
  }
  //#endregion
  //#region time zone
  withTimeZone(n) {
    return new gt(+this, n);
  }
  getTimezoneOffset() {
    const n = -qt(this.timeZone, this);
    return n > 0 ? Math.floor(n) : Math.ceil(n);
  }
  //#endregion
  //#region time
  setTime(n) {
    return Date.prototype.setTime.apply(this, arguments), fa(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](n) {
    return new gt(+new Date(n), this.timeZone);
  }
  //#endregion
}
const rs = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!rs.test(e)) return;
  const n = e.replace(rs, "$1UTC");
  gt.prototype[n] && (e.startsWith("get") ? gt.prototype[e] = function() {
    return this.internal[n]();
  } : (gt.prototype[e] = function() {
    return Date.prototype[n].apply(this.internal, arguments), cg(this), +this;
  }, gt.prototype[n] = function() {
    return Date.prototype[n].apply(this, arguments), fa(this), +this;
  }));
});
function fa(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-qt(e.timeZone, e) * 60));
}
function cg(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), xl(e);
}
function xl(e) {
  const n = qt(e.timeZone, e), t = n > 0 ? Math.floor(n) : Math.ceil(n), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), i = o - a, s = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  i && s && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + i);
  const c = o - t;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const l = /* @__PURE__ */ new Date(+e);
  l.setUTCSeconds(0);
  const u = o > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, p = Math.round(-(qt(e.timeZone, e) * 60)) % 60;
  (p || u) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + p), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + p + u));
  const m = qt(e.timeZone, e), g = m > 0 ? Math.floor(m) : Math.ceil(m), h = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - g, v = g !== t, w = h - c;
  if (v && w) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + w);
    const b = qt(e.timeZone, e), C = b > 0 ? Math.floor(b) : Math.ceil(b), S = g - C;
    S && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + S), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S));
  }
}
class Le extends gt {
  //#region static
  static tz(n, ...t) {
    return t.length ? new Le(...t, n) : new Le(Date.now(), n);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [n, t, r] = this.tzComponents(), o = `${n}${t}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [n, t, r, o] = this.internal.toUTCString().split(" ");
    return `${n?.slice(0, -1)} ${r} ${t} ${o}`;
  }
  toTimeString() {
    const n = this.internal.toUTCString().split(" ")[4], [t, r, o] = this.tzComponents();
    return `${n} GMT${t}${r}${o} (${ag(this.timeZone, this)})`;
  }
  toLocaleString(n, t) {
    return Date.prototype.toLocaleString.call(this, n, {
      ...t,
      timeZone: t?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(n, t) {
    return Date.prototype.toLocaleDateString.call(this, n, {
      ...t,
      timeZone: t?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(n, t) {
    return Date.prototype.toLocaleTimeString.call(this, n, {
      ...t,
      timeZone: t?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const n = this.getTimezoneOffset(), t = n > 0 ? "-" : "+", r = String(Math.floor(Math.abs(n) / 60)).padStart(2, "0"), o = String(Math.abs(n) % 60).padStart(2, "0");
    return [t, r, o];
  }
  //#endregion
  withTimeZone(n) {
    return new Le(+this, n);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](n) {
    return new Le(+new Date(n), this.timeZone);
  }
  //#endregion
}
const bl = 6048e5, lg = 864e5, os = Symbol.for("constructDateFrom");
function je(e, n) {
  return typeof e == "function" ? e(n) : e && typeof e == "object" && os in e ? e[os](n) : e instanceof Date ? new e.constructor(n) : new Date(n);
}
function ke(e, n) {
  return je(n || e, e);
}
function yl(e, n, t) {
  const r = ke(e, t?.in);
  return isNaN(n) ? je(e, NaN) : (n && r.setDate(r.getDate() + n), r);
}
function wl(e, n, t) {
  const r = ke(e, t?.in);
  if (isNaN(n)) return je(e, NaN);
  if (!n)
    return r;
  const o = r.getDate(), a = je(e, r.getTime());
  a.setMonth(r.getMonth() + n + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let dg = {};
function rr() {
  return dg;
}
function vn(e, n) {
  const t = rr(), r = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? t.weekStartsOn ?? t.locale?.options?.weekStartsOn ?? 0, o = ke(e, n?.in), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function Vn(e, n) {
  return vn(e, { ...n, weekStartsOn: 1 });
}
function Cl(e, n) {
  const t = ke(e, n?.in), r = t.getFullYear(), o = je(t, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Vn(o), i = je(t, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = Vn(i);
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= s.getTime() ? r : r - 1;
}
function as(e) {
  const n = ke(e), t = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return t.setUTCFullYear(n.getFullYear()), +e - +t;
}
function _n(e, ...n) {
  const t = je.bind(
    null,
    n.find((r) => typeof r == "object")
  );
  return n.map(t);
}
function Hn(e, n) {
  const t = ke(e, n?.in);
  return t.setHours(0, 0, 0, 0), t;
}
function Ga(e, n, t) {
  const [r, o] = _n(
    t?.in,
    e,
    n
  ), a = Hn(r), i = Hn(o), s = +a - as(a), c = +i - as(i);
  return Math.round((s - c) / lg);
}
function ug(e, n) {
  const t = Cl(e, n), r = je(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), Vn(r);
}
function pg(e, n, t) {
  return yl(e, n * 7, t);
}
function fg(e, n, t) {
  return wl(e, n * 12, t);
}
function mg(e, n) {
  let t, r = n?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = je.bind(null, o));
    const a = ke(o, r);
    (!t || t < a || isNaN(+a)) && (t = a);
  }), je(r, t || NaN);
}
function hg(e, n) {
  let t, r = n?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = je.bind(null, o));
    const a = ke(o, r);
    (!t || t > a || isNaN(+a)) && (t = a);
  }), je(r, t || NaN);
}
function gg(e, n, t) {
  const [r, o] = _n(
    t?.in,
    e,
    n
  );
  return +Hn(r) == +Hn(o);
}
function kl(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function vg(e) {
  return !(!kl(e) && typeof e != "number" || isNaN(+ke(e)));
}
function Sl(e, n, t) {
  const [r, o] = _n(
    t?.in,
    e,
    n
  ), a = r.getFullYear() - o.getFullYear(), i = r.getMonth() - o.getMonth();
  return a * 12 + i;
}
function xg(e, n) {
  const t = ke(e, n?.in), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function El(e, n) {
  const [t, r] = _n(e, n.start, n.end);
  return { start: t, end: r };
}
function bg(e, n) {
  const { start: t, end: r } = El(n?.in, e);
  let o = +t > +r;
  const a = o ? +t : +r, i = o ? r : t;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let s = 1;
  const c = [];
  for (; +i <= a; )
    c.push(je(t, i)), i.setMonth(i.getMonth() + s);
  return o ? c.reverse() : c;
}
function yg(e, n) {
  const t = ke(e, n?.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function wg(e, n) {
  const t = ke(e, n?.in), r = t.getFullYear();
  return t.setFullYear(r + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function _l(e, n) {
  const t = ke(e, n?.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Cg(e, n) {
  const { start: t, end: r } = El(n?.in, e);
  let o = +t > +r;
  const a = o ? +t : +r, i = o ? r : t;
  i.setHours(0, 0, 0, 0), i.setMonth(0, 1);
  let s = 1;
  const c = [];
  for (; +i <= a; )
    c.push(je(t, i)), i.setFullYear(i.getFullYear() + s);
  return o ? c.reverse() : c;
}
function Ml(e, n) {
  const t = rr(), r = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? t.weekStartsOn ?? t.locale?.options?.weekStartsOn ?? 0, o = ke(e, n?.in), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function kg(e, n) {
  return Ml(e, { ...n, weekStartsOn: 1 });
}
const Sg = {
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
}, Eg = (e, n, t) => {
  let r;
  const o = Sg[e];
  return typeof o == "string" ? r = o : n === 1 ? r = o.one : r = o.other.replace("{{count}}", n.toString()), t?.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Wo(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const _g = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Mg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Dg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Og = {
  date: Wo({
    formats: _g,
    defaultWidth: "full"
  }),
  time: Wo({
    formats: Mg,
    defaultWidth: "full"
  }),
  dateTime: Wo({
    formats: Dg,
    defaultWidth: "full"
  })
}, Pg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Rg = (e, n, t, r) => Pg[e];
function An(e) {
  return (n, t) => {
    const r = t?.context ? String(t.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = t?.width ? String(t.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = t?.width ? String(t.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(n) : n;
    return o[a];
  };
}
const jg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Tg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ng = {
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
}, Ag = {
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
}, Ig = {
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
}, Fg = {
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
}, Lg = (e, n) => {
  const t = Number(e), r = t % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, Wg = {
  ordinalNumber: Lg,
  era: An({
    values: jg,
    defaultWidth: "wide"
  }),
  quarter: An({
    values: Tg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: An({
    values: Ng,
    defaultWidth: "wide"
  }),
  day: An({
    values: Ag,
    defaultWidth: "wide"
  }),
  dayPeriod: An({
    values: Ig,
    defaultWidth: "wide",
    formattingValues: Fg,
    defaultFormattingWidth: "wide"
  })
};
function In(e) {
  return (n, t = {}) => {
    const r = t.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = n.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? $g(s, (p) => p.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      zg(s, (p) => p.test(i))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(l)
    ) : l;
    const u = n.slice(i.length);
    return { value: l, rest: u };
  };
}
function zg(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function $g(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Bg(e) {
  return (n, t = {}) => {
    const r = n.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = n.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const s = n.slice(o.length);
    return { value: i, rest: s };
  };
}
const Vg = /^(\d+)(th|st|nd|rd)?/i, Hg = /\d+/i, Yg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ug = {
  any: [/^b/i, /^(a|c)/i]
}, Gg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, qg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Kg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Zg = {
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
}, Xg = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Jg = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Qg = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ev = {
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
}, tv = {
  ordinalNumber: Bg({
    matchPattern: Vg,
    parsePattern: Hg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: In({
    matchPatterns: Yg,
    defaultMatchWidth: "wide",
    parsePatterns: Ug,
    defaultParseWidth: "any"
  }),
  quarter: In({
    matchPatterns: Gg,
    defaultMatchWidth: "wide",
    parsePatterns: qg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: In({
    matchPatterns: Kg,
    defaultMatchWidth: "wide",
    parsePatterns: Zg,
    defaultParseWidth: "any"
  }),
  day: In({
    matchPatterns: Xg,
    defaultMatchWidth: "wide",
    parsePatterns: Jg,
    defaultParseWidth: "any"
  }),
  dayPeriod: In({
    matchPatterns: Qg,
    defaultMatchWidth: "any",
    parsePatterns: ev,
    defaultParseWidth: "any"
  })
}, pn = {
  code: "en-US",
  formatDistance: Eg,
  formatLong: Og,
  formatRelative: Rg,
  localize: Wg,
  match: tv,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function nv(e, n) {
  const t = ke(e, n?.in);
  return Ga(t, _l(t)) + 1;
}
function qa(e, n) {
  const t = ke(e, n?.in), r = +Vn(t) - +ug(t);
  return Math.round(r / bl) + 1;
}
function Dl(e, n) {
  const t = ke(e, n?.in), r = t.getFullYear(), o = rr(), a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, i = je(n?.in || e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = vn(i, n), c = je(n?.in || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = vn(c, n);
  return +t >= +s ? r + 1 : +t >= +l ? r : r - 1;
}
function rv(e, n) {
  const t = rr(), r = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? t.firstWeekContainsDate ?? t.locale?.options?.firstWeekContainsDate ?? 1, o = Dl(e, n), a = je(n?.in || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), vn(a, n);
}
function Ka(e, n) {
  const t = ke(e, n?.in), r = +vn(t, n) - +rv(t, n);
  return Math.round(r / bl) + 1;
}
function we(e, n) {
  const t = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(n, "0");
  return t + r;
}
const Rt = {
  // Year
  y(e, n) {
    const t = e.getFullYear(), r = t > 0 ? t : 1 - t;
    return we(n === "yy" ? r % 100 : r, n.length);
  },
  // Month
  M(e, n) {
    const t = e.getMonth();
    return n === "M" ? String(t + 1) : we(t + 1, 2);
  },
  // Day of the month
  d(e, n) {
    return we(e.getDate(), n.length);
  },
  // AM or PM
  a(e, n) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, n) {
    return we(e.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(e, n) {
    return we(e.getHours(), n.length);
  },
  // Minute
  m(e, n) {
    return we(e.getMinutes(), n.length);
  },
  // Second
  s(e, n) {
    return we(e.getSeconds(), n.length);
  },
  // Fraction of second
  S(e, n) {
    const t = n.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, t - 3)
    );
    return we(o, n.length);
  }
}, dn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, is = {
  // Era
  G: function(e, n, t) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return t.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return t.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return t.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, n, t) {
    if (n === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return t.ordinalNumber(o, { unit: "year" });
    }
    return Rt.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, r) {
    const o = Dl(e, r), a = o > 0 ? o : 1 - o;
    if (n === "YY") {
      const i = a % 100;
      return we(i, 2);
    }
    return n === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : we(a, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = Cl(e);
    return we(t, n.length);
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
  u: function(e, n) {
    const t = e.getFullYear();
    return we(t, n.length);
  },
  // Quarter
  Q: function(e, n, t) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return we(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return t.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return t.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, n, t) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return we(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return t.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return t.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, n, t) {
    const r = e.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return Rt.M(e, n);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return t.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return t.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return t.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return t.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, n, t) {
    const r = e.getMonth();
    switch (n) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return we(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return t.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return t.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return t.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return t.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, n, t, r) {
    const o = Ka(e, r);
    return n === "wo" ? t.ordinalNumber(o, { unit: "week" }) : we(o, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const r = qa(e);
    return n === "Io" ? t.ordinalNumber(r, { unit: "week" }) : we(r, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : Rt.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const r = nv(e);
    return n === "Do" ? t.ordinalNumber(r, { unit: "dayOfYear" }) : we(r, n.length);
  },
  // Day of week
  E: function(e, n, t) {
    const r = e.getDay();
    switch (n) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, n, t, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return we(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return t.ordinalNumber(a, { unit: "day" });
      case "eee":
        return t.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return t.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return t.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return t.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, n, t, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return we(a, n.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return t.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return t.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return t.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return t.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return t.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, n, t) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (n) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return we(o, n.length);
      // 2nd
      case "io":
        return t.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, n, t) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return t.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, n, t) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = dn.noon : r === 0 ? o = dn.midnight : o = r / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return t.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, n, t) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = dn.evening : r >= 12 ? o = dn.afternoon : r >= 4 ? o = dn.morning : o = dn.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, n, t) {
    if (n === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), t.ordinalNumber(r, { unit: "hour" });
    }
    return Rt.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : Rt.H(e, n);
  },
  // Hour [0-11]
  K: function(e, n, t) {
    const r = e.getHours() % 12;
    return n === "Ko" ? t.ordinalNumber(r, { unit: "hour" }) : we(r, n.length);
  },
  // Hour [1-24]
  k: function(e, n, t) {
    let r = e.getHours();
    return r === 0 && (r = 24), n === "ko" ? t.ordinalNumber(r, { unit: "hour" }) : we(r, n.length);
  },
  // Minute
  m: function(e, n, t) {
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Rt.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : Rt.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return Rt.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (n) {
      // Hours and optional minutes
      case "X":
        return cs(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Ut(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Ut(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      // Hours and optional minutes
      case "x":
        return cs(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Ut(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Ut(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ss(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Ut(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ss(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Ut(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, n, t) {
    const r = Math.trunc(+e / 1e3);
    return we(r, n.length);
  },
  // Milliseconds timestamp
  T: function(e, n, t) {
    return we(+e, n.length);
  }
};
function ss(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? t + String(o) : t + String(o) + n + we(a, 2);
}
function cs(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + we(Math.abs(e) / 60, 2) : Ut(e, n);
}
function Ut(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = we(Math.trunc(r / 60), 2), a = we(r % 60, 2);
  return t + o + n + a;
}
const ls = (e, n) => {
  switch (e) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, Ol = (e, n) => {
  switch (e) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, ov = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], r = t[1], o = t[2];
  if (!o)
    return ls(e, n);
  let a;
  switch (r) {
    case "P":
      a = n.dateTime({ width: "short" });
      break;
    case "PP":
      a = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = n.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", ls(r, n)).replace("{{time}}", Ol(o, n));
}, av = {
  p: Ol,
  P: ov
}, iv = /^D+$/, sv = /^Y+$/, cv = ["D", "DD", "YY", "YYYY"];
function lv(e) {
  return iv.test(e);
}
function dv(e) {
  return sv.test(e);
}
function uv(e, n, t) {
  const r = pv(e, n, t);
  if (console.warn(r), cv.includes(e)) throw new RangeError(r);
}
function pv(e, n, t) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const fv = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, mv = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, hv = /^'([^]*?)'?$/, gv = /''/g, vv = /[a-zA-Z]/;
function fn(e, n, t) {
  const r = rr(), o = t?.locale ?? r.locale ?? pn, a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = ke(e, t?.in);
  if (!vg(s))
    throw new RangeError("Invalid time value");
  let c = n.match(mv).map((u) => {
    const p = u[0];
    if (p === "p" || p === "P") {
      const m = av[p];
      return m(u, o.formatLong);
    }
    return u;
  }).join("").match(fv).map((u) => {
    if (u === "''")
      return { isToken: !1, value: "'" };
    const p = u[0];
    if (p === "'")
      return { isToken: !1, value: xv(u) };
    if (is[p])
      return { isToken: !0, value: u };
    if (p.match(vv))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + p + "`"
      );
    return { isToken: !1, value: u };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return c.map((u) => {
    if (!u.isToken) return u.value;
    const p = u.value;
    (!t?.useAdditionalWeekYearTokens && dv(p) || !t?.useAdditionalDayOfYearTokens && lv(p)) && uv(p, n, String(e));
    const m = is[p[0]];
    return m(s, p, o.localize, l);
  }).join("");
}
function xv(e) {
  const n = e.match(hv);
  return n ? n[1].replace(gv, "'") : e;
}
function bv(e, n) {
  const t = ke(e, n?.in), r = t.getFullYear(), o = t.getMonth(), a = je(t, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function yv(e, n) {
  return ke(e, n?.in).getMonth();
}
function wv(e, n) {
  return ke(e, n?.in).getFullYear();
}
function Cv(e, n) {
  return +ke(e) > +ke(n);
}
function kv(e, n) {
  return +ke(e) < +ke(n);
}
function Sv(e, n, t) {
  const [r, o] = _n(
    t?.in,
    e,
    n
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Ev(e, n, t) {
  const [r, o] = _n(
    t?.in,
    e,
    n
  );
  return r.getFullYear() === o.getFullYear();
}
function _v(e, n, t) {
  const r = ke(e, t?.in), o = r.getFullYear(), a = r.getDate(), i = je(e, 0);
  i.setFullYear(o, n, 15), i.setHours(0, 0, 0, 0);
  const s = bv(i);
  return r.setMonth(n, Math.min(a, s)), r;
}
function Mv(e, n, t) {
  const r = ke(e, t?.in);
  return isNaN(+r) ? je(e, NaN) : (r.setFullYear(n), r);
}
const ds = 5, Dv = 4;
function Ov(e, n) {
  const t = n.startOfMonth(e), r = t.getDay() > 0 ? t.getDay() : 7, o = n.addDays(e, -r + 1), a = n.addDays(o, ds * 7 - 1);
  return n.getMonth(e) === n.getMonth(a) ? ds : Dv;
}
function Pl(e, n) {
  const t = n.startOfMonth(e), r = t.getDay();
  return r === 1 ? t : r === 0 ? n.addDays(t, -6) : n.addDays(t, -1 * (r - 1));
}
function Pv(e, n) {
  const t = Pl(e, n), r = Ov(e, n);
  return n.addDays(t, r * 7 - 1);
}
const Rl = {
  ...pn,
  labels: {
    labelDayButton: (e, n, t, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, s) => fn(i, s, { locale: pn, ...t });
      let a = o(e, "PPPP");
      return n.today && (a = `Today, ${a}`), n.selected && (a = `${a}, selected`), a;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (e) => `Week ${e}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (e, n, t) => {
      let r;
      return t && typeof t.format == "function" ? r = t.format.bind(t) : r = (o, a) => fn(o, a, { locale: pn, ...n }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, n, t, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, s) => fn(i, s, { locale: pn, ...t });
      let a = o(e, "PPPP");
      return n?.today && (a = `Today, ${a}`), a;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, n, t) => {
      let r;
      return t && typeof t.format == "function" ? r = t.format.bind(t) : r = (o, a) => fn(o, a, { locale: pn, ...n }), r(e, "cccc");
    }
  }
};
class Ke {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(n, t) {
    this.today = () => {
      if (this.overrides?.today)
        return this.overrides.today();
      if (this.options.timeZone)
        return Le.tz(this.options.timeZone);
      const r = this.options.Date ?? Date;
      return new r();
    }, this.newDate = (r, o, a) => this.overrides?.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new Le(r, o, a, this.options.timeZone) : new Date(r, o, a), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : yl(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : wl(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : pg(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : fg(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Ga(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Sl(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : bg(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Cg(r), a = new Set(o.map((s) => this.getYear(s)));
      if (a.size === o.length)
        return o;
      const i = [];
      return a.forEach((s) => {
        i.push(new Date(s, 0, 1));
      }), i;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Pv(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : kg(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : xg(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : Ml(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : wg(r), this.format = (r, o, a) => {
      const i = this.overrides?.format ? this.overrides.format(r, o, this.options) : fn(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : qa(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : yv(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : wv(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : Ka(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : Cv(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : kv(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : kl(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : gg(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : Sv(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : Ev(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : mg(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : hg(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : _v(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : Mv(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Pl(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : Hn(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Vn(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : yg(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : vn(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : _l(r), this.options = { locale: Rl, ...n }, this.overrides = t;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: n = "latn" } = this.options, t = new Intl.NumberFormat("en-US", {
      numberingSystem: n
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = t.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(n) {
    const t = this.getDigitMap();
    return n.replace(/\d/g, (r) => t[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(n) {
    return this.replaceDigits(n.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const n = this.options.locale?.code;
    return n && Ke.yearFirstLocales.has(n) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(n) {
    const { locale: t, timeZone: r, numerals: o } = this.options, a = t?.code;
    if (a && Ke.yearFirstLocales.has(a))
      try {
        return new Intl.DateTimeFormat(a, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(n);
      } catch {
      }
    const i = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(n, i);
  }
}
Ke.yearFirstLocales = /* @__PURE__ */ new Set([
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
const wt = new Ke();
class jl {
  constructor(n, t, r = wt) {
    this.date = n, this.displayMonth = t, this.outside = !!(t && !r.isSameMonth(n, t)), this.dateLib = r, this.isoDate = r.format(n, "yyyy-MM-dd"), this.displayMonthId = r.format(t, "yyyy-MM"), this.dateMonthId = r.format(n, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(n) {
    return this.dateLib.isSameDay(n.date, this.date) && this.dateLib.isSameMonth(n.displayMonth, this.displayMonth);
  }
}
class Rv {
  constructor(n, t) {
    this.date = n, this.weeks = t;
  }
}
class jv {
  constructor(n, t) {
    this.days = t, this.weekNumber = n;
  }
}
function Tv(e) {
  return N.createElement("span", { ...e });
}
function Nv(e) {
  const { size: n = 24, orientation: t = "left", className: r } = e;
  return N.createElement(
    "svg",
    { className: r, width: n, height: n, viewBox: "0 0 24 24" },
    t === "up" && N.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
    t === "down" && N.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
    t === "left" && N.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
    t === "right" && N.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
  );
}
function Av(e) {
  const { day: n, modifiers: t, ...r } = e;
  return N.createElement("td", { ...r });
}
function Iv(e) {
  const { day: n, modifiers: t, ...r } = e, o = N.useRef(null);
  return N.useEffect(() => {
    t.focused && o.current?.focus();
  }, [t.focused]), N.createElement("button", { ref: o, ...r });
}
var oe;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(oe || (oe = {}));
var Oe;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(Oe || (Oe = {}));
var nt;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(nt || (nt = {}));
var Ye;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ye || (Ye = {}));
const Tl = ja(void 0);
function ao() {
  const e = jr(Tl);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function Fv(e) {
  const { options: n, className: t, ...r } = e, { classNames: o, components: a } = ao(), i = [o[oe.Dropdown], t].join(" "), s = n?.find(({ value: c }) => c === r.value);
  return N.createElement(
    "span",
    { "data-disabled": r.disabled, className: o[oe.DropdownRoot] },
    N.createElement(a.Select, { className: i, ...r }, n?.map(({ value: c, label: l, disabled: u }) => N.createElement(a.Option, { key: c, value: c, disabled: u }, l))),
    N.createElement(
      "span",
      { className: o[oe.CaptionLabel], "aria-hidden": !0 },
      s?.label,
      N.createElement(a.Chevron, { orientation: "down", size: 18, className: o[oe.Chevron] })
    )
  );
}
function Lv(e) {
  return N.createElement("div", { ...e });
}
function Wv(e) {
  return N.createElement("div", { ...e });
}
function zv(e) {
  const { calendarMonth: n, displayIndex: t, ...r } = e;
  return N.createElement("div", { ...r }, e.children);
}
function $v(e) {
  const { calendarMonth: n, displayIndex: t, ...r } = e;
  return N.createElement("div", { ...r });
}
function Bv(e) {
  return N.createElement("table", { ...e });
}
function Vv(e) {
  return N.createElement("div", { ...e });
}
function Hv(e) {
  const { components: n } = ao();
  return N.createElement(n.Dropdown, { ...e });
}
function Yv(e) {
  const { onPreviousClick: n, onNextClick: t, previousMonth: r, nextMonth: o, ...a } = e, { components: i, classNames: s, labels: { labelPrevious: c, labelNext: l } } = ao(), u = ue((m) => {
    o && t?.(m);
  }, [o, t]), p = ue((m) => {
    r && n?.(m);
  }, [r, n]);
  return N.createElement(
    "nav",
    { ...a },
    N.createElement(
      i.PreviousMonthButton,
      { type: "button", className: s[oe.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: p },
      N.createElement(i.Chevron, { disabled: r ? void 0 : !0, className: s[oe.Chevron], orientation: "left" })
    ),
    N.createElement(
      i.NextMonthButton,
      { type: "button", className: s[oe.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: u },
      N.createElement(i.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: s[oe.Chevron] })
    )
  );
}
function Uv(e) {
  return N.createElement("button", { ...e });
}
function Gv(e) {
  return N.createElement("option", { ...e });
}
function qv(e) {
  return N.createElement("button", { ...e });
}
function Kv(e) {
  const { rootRef: n, ...t } = e;
  return N.createElement("div", { ...t, ref: n });
}
function Zv(e) {
  return N.createElement("select", { ...e });
}
function Xv(e) {
  const { week: n, ...t } = e;
  return N.createElement("tr", { ...t });
}
function Jv(e) {
  return N.createElement("th", { ...e });
}
function Qv(e) {
  return N.createElement(
    "thead",
    { "aria-hidden": !0 },
    N.createElement("tr", { ...e })
  );
}
function ex(e) {
  const { week: n, ...t } = e;
  return N.createElement("th", { ...t });
}
function tx(e) {
  return N.createElement("th", { ...e });
}
function nx(e) {
  return N.createElement("tbody", { ...e });
}
function rx(e) {
  const { components: n } = ao();
  return N.createElement(n.Dropdown, { ...e });
}
const ox = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CaptionLabel: Tv,
  Chevron: Nv,
  Day: Av,
  DayButton: Iv,
  Dropdown: Fv,
  DropdownNav: Lv,
  Footer: Wv,
  Month: zv,
  MonthCaption: $v,
  MonthGrid: Bv,
  Months: Vv,
  MonthsDropdown: Hv,
  Nav: Yv,
  NextMonthButton: Uv,
  Option: Gv,
  PreviousMonthButton: qv,
  Root: Kv,
  Select: Zv,
  Week: Xv,
  WeekNumber: ex,
  WeekNumberHeader: tx,
  Weekday: Jv,
  Weekdays: Qv,
  Weeks: nx,
  YearsDropdown: rx
}, Symbol.toStringTag, { value: "Module" }));
function St(e, n, t = !1, r = wt) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: i, isSameDay: s } = r;
  return o && a ? (i(a, o) < 0 && ([o, a] = [a, o]), i(n, o) >= (t ? 1 : 0) && i(a, n) >= (t ? 1 : 0)) : !t && a ? s(a, n) : !t && o ? s(o, n) : !1;
}
function Za(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function io(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Xa(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Ja(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Nl(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Al(e, n) {
  return Array.isArray(e) && e.every(n.isDate);
}
function Et(e, n, t = wt) {
  const r = Array.isArray(n) ? n : [n], { isSameDay: o, differenceInCalendarDays: a, isAfter: i } = t;
  return r.some((s) => {
    if (typeof s == "boolean")
      return s;
    if (t.isDate(s))
      return o(e, s);
    if (Al(s, t))
      return s.some((c) => o(e, c));
    if (io(s))
      return St(s, e, !1, t);
    if (Nl(s))
      return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(e.getDay()) : s.dayOfWeek === e.getDay();
    if (Za(s)) {
      const c = a(s.before, e), l = a(s.after, e), u = c > 0, p = l < 0;
      return i(s.before, s.after) ? p && u : u || p;
    }
    return Xa(s) ? a(e, s.after) > 0 : Ja(s) ? a(s.before, e) > 0 : typeof s == "function" ? s(e) : !1;
  });
}
function ax(e, n, t, r, o) {
  const { disabled: a, hidden: i, modifiers: s, showOutsideDays: c, broadcastCalendar: l, today: u = o.today() } = n, { isSameDay: p, isSameMonth: m, startOfMonth: g, isBefore: x, endOfMonth: h, isAfter: v } = o, w = t && g(t), b = r && h(r), C = {
    [Oe.focused]: [],
    [Oe.outside]: [],
    [Oe.disabled]: [],
    [Oe.hidden]: [],
    [Oe.today]: []
  }, S = {};
  for (const y of e) {
    const { date: E, displayMonth: _ } = y, P = !!(_ && !m(E, _)), A = !!(w && x(E, w)), L = !!(b && v(E, b)), q = !!(a && Et(E, a, o)), G = !!(i && Et(E, i, o)) || A || L || // Broadcast calendar will show outside days as default
    !l && !c && P || l && c === !1 && P, H = p(E, u);
    P && C.outside.push(y), q && C.disabled.push(y), G && C.hidden.push(y), H && C.today.push(y), s && Object.keys(s).forEach((z) => {
      const Z = s?.[z];
      Z && Et(E, Z, o) && (S[z] ? S[z].push(y) : S[z] = [y]);
    });
  }
  return (y) => {
    const E = {
      [Oe.focused]: !1,
      [Oe.disabled]: !1,
      [Oe.hidden]: !1,
      [Oe.outside]: !1,
      [Oe.today]: !1
    }, _ = {};
    for (const P in C) {
      const A = C[P];
      E[P] = A.some((L) => L === y);
    }
    for (const P in S)
      _[P] = S[P].some((A) => A === y);
    return {
      ...E,
      // custom modifiers should override all the previous ones
      ..._
    };
  };
}
function ix(e, n, t = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (t[a] ? o.push(t[a]) : n[Oe[a]] ? o.push(n[Oe[a]]) : n[nt[a]] && o.push(n[nt[a]]), o), [n[oe.Day]]);
}
function sx(e) {
  return {
    ...ox,
    ...e
  };
}
function cx(e) {
  const n = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([t, r]) => {
    t.startsWith("data-") && (n[t] = r);
  }), n;
}
function Qa() {
  const e = {};
  for (const n in oe)
    e[oe[n]] = `rdp-${oe[n]}`;
  for (const n in Oe)
    e[Oe[n]] = `rdp-${Oe[n]}`;
  for (const n in nt)
    e[nt[n]] = `rdp-${nt[n]}`;
  for (const n in Ye)
    e[Ye[n]] = `rdp-${Ye[n]}`;
  return e;
}
function lx(e, n, t) {
  return (t ?? new Ke(n)).formatMonthYear(e);
}
function dx(e, n, t) {
  return (t ?? new Ke(n)).format(e, "d");
}
function ux(e, n = wt) {
  return n.format(e, "LLLL");
}
function px(e, n, t) {
  return (t ?? new Ke(n)).format(e, "cccccc");
}
function fx(e, n = wt) {
  return e < 10 ? n.formatNumber(`0${e.toLocaleString()}`) : n.formatNumber(`${e.toLocaleString()}`);
}
function mx() {
  return "";
}
function hx(e, n = wt) {
  return n.format(e, "yyyy");
}
const gx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: lx,
  formatDay: dx,
  formatMonthDropdown: ux,
  formatWeekNumber: fx,
  formatWeekNumberHeader: mx,
  formatWeekdayName: px,
  formatYearDropdown: hx
}, Symbol.toStringTag, { value: "Module" }));
function vx(e) {
  return {
    ...gx,
    ...e
  };
}
function Il(e, n, t, r) {
  let o = (r ?? new Ke(t)).format(e, "PPPP");
  return n.today && (o = `Today, ${o}`), n.selected && (o = `${o}, selected`), o;
}
function Fl(e, n, t) {
  return (t ?? new Ke(n)).formatMonthYear(e);
}
function Ll(e, n, t, r) {
  let o = (r ?? new Ke(t)).format(e, "PPPP");
  return n?.today && (o = `Today, ${o}`), o;
}
function Wl(e) {
  return "Choose the Month";
}
function zl() {
  return "";
}
const xx = "Go to the Next Month";
function $l(e, n) {
  return xx;
}
function Bl(e) {
  return "Go to the Previous Month";
}
function Vl(e, n, t) {
  return (t ?? new Ke(n)).format(e, "cccc");
}
function Hl(e, n) {
  return `Week ${e}`;
}
function Yl(e) {
  return "Week Number";
}
function Ul(e) {
  return "Choose the Year";
}
const bx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelDayButton: Il,
  labelGrid: Fl,
  labelGridcell: Ll,
  labelMonthDropdown: Wl,
  labelNav: zl,
  labelNext: $l,
  labelPrevious: Bl,
  labelWeekNumber: Hl,
  labelWeekNumberHeader: Yl,
  labelWeekday: Vl,
  labelYearDropdown: Ul
}, Symbol.toStringTag, { value: "Module" })), et = (e, n, t) => n || (t ? typeof t == "function" ? t : (...r) => t : e);
function yx(e, n) {
  const t = n.locale?.labels ?? {};
  return {
    ...bx,
    ...e ?? {},
    labelDayButton: et(Il, e?.labelDayButton, t.labelDayButton),
    labelMonthDropdown: et(Wl, e?.labelMonthDropdown, t.labelMonthDropdown),
    labelNext: et($l, e?.labelNext, t.labelNext),
    labelPrevious: et(Bl, e?.labelPrevious, t.labelPrevious),
    labelWeekNumber: et(Hl, e?.labelWeekNumber, t.labelWeekNumber),
    labelYearDropdown: et(Ul, e?.labelYearDropdown, t.labelYearDropdown),
    labelGrid: et(Fl, e?.labelGrid, t.labelGrid),
    labelGridcell: et(Ll, e?.labelGridcell, t.labelGridcell),
    labelNav: et(zl, e?.labelNav, t.labelNav),
    labelWeekNumberHeader: et(Yl, e?.labelWeekNumberHeader, t.labelWeekNumberHeader),
    labelWeekday: et(Vl, e?.labelWeekday, t.labelWeekday)
  };
}
function wx(e, n, t, r, o) {
  const { startOfMonth: a, startOfYear: i, endOfYear: s, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: i(e),
    end: s(e)
  }).map((m) => {
    const g = r.formatMonthDropdown(m, o), x = l(m), h = n && m < a(n) || t && m > a(t) || !1;
    return { value: x, label: g, disabled: h };
  });
}
function Cx(e, n = {}, t = {}) {
  let r = { ...n?.[oe.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...t?.[o]
    };
  }), r;
}
function kx(e, n, t, r) {
  const o = r ?? e.today(), a = t ? e.startOfBroadcastWeek(o, e) : n ? e.startOfISOWeek(o) : e.startOfWeek(o), i = [];
  for (let s = 0; s < 7; s++) {
    const c = e.addDays(a, s);
    i.push(c);
  }
  return i;
}
function Sx(e, n, t, r, o = !1) {
  if (!e || !n)
    return;
  const { startOfYear: a, endOfYear: i, eachYearOfInterval: s, getYear: c } = r, l = a(e), u = i(n), p = s({ start: l, end: u });
  return o && p.reverse(), p.map((m) => {
    const g = t.formatYearDropdown(m, r);
    return {
      value: c(m),
      label: g,
      disabled: !1
    };
  });
}
function Ex(e, n = {}) {
  const { weekStartsOn: t, locale: r } = n, o = t ?? r?.options?.weekStartsOn ?? 0, a = (s) => {
    const c = typeof s == "number" || typeof s == "string" ? new Date(s) : s;
    return new Le(c.getFullYear(), c.getMonth(), c.getDate(), 12, 0, 0, e);
  }, i = (s) => {
    const c = a(s);
    return new Date(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => a(Le.tz(e)),
    newDate: (s, c, l) => new Le(s, c, l, 12, 0, 0, e),
    startOfDay: (s) => a(s),
    startOfWeek: (s, c) => {
      const l = a(s), u = c?.weekStartsOn ?? o, p = (l.getDay() - u + 7) % 7;
      return l.setDate(l.getDate() - p), l;
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
      const c = a(s.start), l = a(s.end), u = [], p = new Le(c.getFullYear(), c.getMonth(), 1, 12, 0, 0, e), m = l.getFullYear() * 12 + l.getMonth();
      for (; p.getFullYear() * 12 + p.getMonth() <= m; )
        u.push(new Le(p, e)), p.setMonth(p.getMonth() + 1, 1);
      return u;
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
      const c = a(s.start), l = a(s.end), u = [], p = new Le(c.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; p.getFullYear() <= l.getFullYear(); )
        u.push(new Le(p, e)), p.setFullYear(p.getFullYear() + 1, 0, 1);
      return u;
    },
    getWeek: (s, c) => {
      const l = i(s);
      return Ka(l, {
        weekStartsOn: c?.weekStartsOn ?? o,
        firstWeekContainsDate: c?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (s) => {
      const c = i(s);
      return qa(c);
    },
    differenceInCalendarDays: (s, c) => {
      const l = i(s), u = i(c);
      return Ga(l, u);
    },
    differenceInCalendarMonths: (s, c) => {
      const l = i(s), u = i(c);
      return Sl(l, u);
    }
  };
}
const or = (e) => e instanceof HTMLElement ? e : null, zo = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], _x = (e) => or(e.querySelector("[data-animated-month]")), $o = (e) => or(e.querySelector("[data-animated-caption]")), Bo = (e) => or(e.querySelector("[data-animated-weeks]")), Mx = (e) => or(e.querySelector("[data-animated-nav]")), Dx = (e) => or(e.querySelector("[data-animated-weekdays]"));
function Ox(e, n, { classNames: t, months: r, focused: o, dateLib: a }) {
  const i = ht(null), s = ht(r), c = ht(!1);
  mc(() => {
    const l = s.current;
    if (s.current = r, !n || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const u = a.isSameMonth(r[0].date, l[0].date), p = a.isAfter(r[0].date, l[0].date), m = p ? t[Ye.caption_after_enter] : t[Ye.caption_before_enter], g = p ? t[Ye.weeks_after_enter] : t[Ye.weeks_before_enter], x = i.current, h = e.current.cloneNode(!0);
    if (h instanceof HTMLElement ? (zo(h).forEach((C) => {
      if (!(C instanceof HTMLElement))
        return;
      const S = _x(C);
      S && C.contains(S) && C.removeChild(S);
      const y = $o(C);
      y && y.classList.remove(m);
      const E = Bo(C);
      E && E.classList.remove(g);
    }), i.current = h) : i.current = null, c.current || u || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const v = x instanceof HTMLElement ? zo(x) : [], w = zo(e.current);
    if (w?.every((b) => b instanceof HTMLElement) && v?.every((b) => b instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const b = Mx(e.current);
      b && (b.style.zIndex = "1"), w.forEach((C, S) => {
        const y = v[S];
        if (!y)
          return;
        C.style.position = "relative", C.style.overflow = "hidden";
        const E = $o(C);
        E && E.classList.add(m);
        const _ = Bo(C);
        _ && _.classList.add(g);
        const P = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), E && E.classList.remove(m), _ && _.classList.remove(g), C.style.position = "", C.style.overflow = "", C.contains(y) && C.removeChild(y);
        };
        y.style.pointerEvents = "none", y.style.position = "absolute", y.style.overflow = "hidden", y.setAttribute("aria-hidden", "true");
        const A = Dx(y);
        A && (A.style.opacity = "0");
        const L = $o(y);
        L && (L.classList.add(p ? t[Ye.caption_before_exit] : t[Ye.caption_after_exit]), L.addEventListener("animationend", P));
        const q = Bo(y);
        q && q.classList.add(p ? t[Ye.weeks_before_exit] : t[Ye.weeks_after_exit]), C.insertBefore(y, C.firstChild);
      });
    }
  });
}
function Px(e, n, t, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: i, fixedWeeks: s, broadcastCalendar: c } = t ?? {}, { addDays: l, differenceInCalendarDays: u, differenceInCalendarMonths: p, endOfBroadcastWeek: m, endOfISOWeek: g, endOfMonth: x, endOfWeek: h, isAfter: v, startOfBroadcastWeek: w, startOfISOWeek: b, startOfWeek: C } = r, S = c ? w(o, r) : i ? b(o) : C(o), y = c ? m(a) : i ? g(x(a)) : h(x(a)), E = n && (c ? m(n) : i ? g(n) : h(n)), _ = E && v(y, E) ? E : y, P = u(_, S), A = p(a, o) + 1, L = [];
  for (let H = 0; H <= P; H++) {
    const z = l(S, H);
    L.push(z);
  }
  const G = (c ? 35 : 42) * A;
  if (s && L.length < G) {
    const H = G - L.length;
    for (let z = 0; z < H; z++) {
      const Z = l(L[L.length - 1], 1);
      L.push(Z);
    }
  }
  return L;
}
function Rx(e) {
  const n = [];
  return e.reduce((t, r) => {
    const o = r.weeks.reduce((a, i) => a.concat(i.days.slice()), n.slice());
    return t.concat(o.slice());
  }, n.slice());
}
function jx(e, n, t, r) {
  const { numberOfMonths: o = 1 } = t, a = [];
  for (let i = 0; i < o; i++) {
    const s = r.addMonths(e, i);
    if (n && s > n)
      break;
    a.push(s);
  }
  return a;
}
function us(e, n, t, r) {
  const { month: o, defaultMonth: a, today: i = r.today(), numberOfMonths: s = 1 } = e;
  let c = o || a || i;
  const { differenceInCalendarMonths: l, addMonths: u, startOfMonth: p } = r;
  if (t && l(t, c) < s - 1) {
    const m = -1 * (s - 1);
    c = u(t, m);
  }
  return n && l(c, n) < 0 && (c = n), p(c);
}
function Tx(e, n, t, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: i, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: u, startOfBroadcastWeek: p, startOfISOWeek: m, startOfWeek: g } = r, x = e.reduce((h, v) => {
    const w = t.broadcastCalendar ? p(v, r) : t.ISOWeek ? m(v) : g(v), b = t.broadcastCalendar ? a(v) : t.ISOWeek ? i(s(v)) : c(s(v)), C = n.filter((_) => _ >= w && _ <= b), S = t.broadcastCalendar ? 35 : 42;
    if (t.fixedWeeks && C.length < S) {
      const _ = n.filter((P) => {
        const A = S - C.length;
        return P > b && P <= o(b, A);
      });
      C.push(..._);
    }
    const y = C.reduce((_, P) => {
      const A = t.ISOWeek ? l(P) : u(P), L = _.find((G) => G.weekNumber === A), q = new jl(P, v, r);
      return L ? L.days.push(q) : _.push(new jv(A, [q])), _;
    }, []), E = new Rv(v, y);
    return h.push(E), h;
  }, []);
  return t.reverseMonths ? x.reverse() : x;
}
function Nx(e, n) {
  let { startMonth: t, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: i, endOfMonth: s, addYears: c, endOfYear: l, today: u } = n, p = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return t ? t = i(t) : !t && p && (t = o(c(e.today ?? u(), -100))), r ? r = s(r) : !r && p && (r = l(e.today ?? u())), [
    t && a(t),
    r && a(r)
  ];
}
function Ax(e, n, t, r) {
  if (t.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = t, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: c } = r, l = o ? a : 1, u = i(e);
  if (!n)
    return s(u, l);
  if (!(c(n, e) < a))
    return s(u, l);
}
function Ix(e, n, t, r) {
  if (t.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = t, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: c } = r, l = o ? a ?? 1 : 1, u = i(e);
  if (!n)
    return s(u, -l);
  if (!(c(u, n) <= 0))
    return s(u, -l);
}
function Fx(e) {
  const n = [];
  return e.reduce((t, r) => t.concat(r.weeks.slice()), n.slice());
}
function so(e, n) {
  const [t, r] = Fe(e);
  return [n === void 0 ? t : n, r];
}
function Lx(e, n) {
  const [t, r] = Nx(e, n), { startOfMonth: o, endOfMonth: a } = n, i = us(e, t, r, n), [s, c] = so(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  Kt(() => {
    const S = us(e, t, r, n);
    c(S);
  }, [e.timeZone]);
  const { months: l, weeks: u, days: p, previousMonth: m, nextMonth: g } = Be(() => {
    const S = jx(s, r, { numberOfMonths: e.numberOfMonths }, n), y = Px(S, e.endMonth ? a(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, n), E = Tx(S, y, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, n), _ = Fx(E), P = Rx(E), A = Ix(s, t, e, n), L = Ax(s, r, e, n);
    return {
      months: E,
      weeks: _,
      days: P,
      previousMonth: A,
      nextMonth: L
    };
  }, [
    n,
    s.getTime(),
    r?.getTime(),
    t?.getTime(),
    e.disableNavigation,
    e.broadcastCalendar,
    e.endMonth?.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: x, onMonthChange: h } = e, v = (S) => u.some((y) => y.days.some((E) => E.isEqualTo(S))), w = (S) => {
    if (x)
      return;
    let y = o(S);
    t && y < o(t) && (y = o(t)), r && y > o(r) && (y = o(r)), c(y), h?.(y);
  };
  return {
    months: l,
    weeks: u,
    days: p,
    navStart: t,
    navEnd: r,
    previousMonth: m,
    nextMonth: g,
    goToMonth: w,
    goToDay: (S) => {
      v(S) || w(S.date);
    }
  };
}
var mt;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(mt || (mt = {}));
function ps(e) {
  return !e[Oe.disabled] && !e[Oe.hidden] && !e[Oe.outside];
}
function Wx(e, n, t, r) {
  let o, a = -1;
  for (const i of e) {
    const s = n(i);
    ps(s) && (s[Oe.focused] && a < mt.FocusedModifier ? (o = i, a = mt.FocusedModifier) : r?.isEqualTo(i) && a < mt.LastFocused ? (o = i, a = mt.LastFocused) : t(i.date) && a < mt.Selected ? (o = i, a = mt.Selected) : s[Oe.today] && a < mt.Today && (o = i, a = mt.Today));
  }
  return o || (o = e.find((i) => ps(n(i)))), o;
}
function zx(e, n, t, r, o, a, i) {
  const { ISOWeek: s, broadcastCalendar: c } = a, { addDays: l, addMonths: u, addWeeks: p, addYears: m, endOfBroadcastWeek: g, endOfISOWeek: x, endOfWeek: h, max: v, min: w, startOfBroadcastWeek: b, startOfISOWeek: C, startOfWeek: S } = i;
  let E = {
    day: l,
    week: p,
    month: u,
    year: m,
    startOfWeek: (_) => c ? b(_, i) : s ? C(_) : S(_),
    endOfWeek: (_) => c ? g(_) : s ? x(_) : h(_)
  }[e](t, n === "after" ? 1 : -1);
  return n === "before" && r ? E = v([r, E]) : n === "after" && o && (E = w([o, E])), E;
}
function Gl(e, n, t, r, o, a, i, s = 0) {
  if (s > 365)
    return;
  const c = zx(e, n, t.date, r, o, a, i), l = !!(a.disabled && Et(c, a.disabled, i)), u = !!(a.hidden && Et(c, a.hidden, i)), p = c, m = new jl(c, p, i);
  return !l && !u ? m : Gl(e, n, m, r, o, a, i, s + 1);
}
function $x(e, n, t, r, o) {
  const { autoFocus: a } = e, [i, s] = Fe(), c = Wx(n.days, t, r || (() => !1), i), [l, u] = Fe(a ? c : void 0);
  return {
    isFocusTarget: (h) => !!c?.isEqualTo(h),
    setFocused: u,
    focused: l,
    blur: () => {
      s(l), u(void 0);
    },
    moveFocus: (h, v) => {
      if (!l)
        return;
      const w = Gl(h, v, l, n.navStart, n.navEnd, e, o);
      w && (e.disableNavigation && !n.days.some((C) => C.isEqualTo(w)) || (n.goToDay(w), u(w)));
    }
  };
}
function Bx(e, n) {
  const { selected: t, required: r, onSelect: o } = e, [a, i] = so(t, o ? t : void 0), s = o ? t : a, { isSameDay: c } = n, l = (g) => s?.some((x) => c(x, g)) ?? !1, { min: u, max: p } = e;
  return {
    selected: s,
    select: (g, x, h) => {
      let v = [...s ?? []];
      if (l(g)) {
        if (s?.length === u || r && s?.length === 1)
          return;
        v = s?.filter((w) => !c(w, g));
      } else
        s?.length === p ? v = [g] : v = [...v, g];
      return o || i(v), o?.(v, g, x, h), v;
    },
    isSelected: l
  };
}
function Vx(e, n, t = 0, r = 0, o = !1, a = wt) {
  const { from: i, to: s } = n || {}, { isSameDay: c, isAfter: l, isBefore: u } = a;
  let p;
  if (!i && !s)
    p = { from: e, to: t > 0 ? void 0 : e };
  else if (i && !s)
    c(i, e) ? t === 0 ? p = { from: i, to: e } : o ? p = { from: i, to: void 0 } : p = void 0 : u(e, i) ? p = { from: e, to: i } : p = { from: i, to: e };
  else if (i && s)
    if (c(i, e) && c(s, e))
      o ? p = { from: i, to: s } : p = void 0;
    else if (c(i, e))
      p = { from: i, to: t > 0 ? void 0 : e };
    else if (c(s, e))
      p = { from: e, to: t > 0 ? void 0 : e };
    else if (u(e, i))
      p = { from: e, to: s };
    else if (l(e, i))
      p = { from: i, to: e };
    else if (l(e, s))
      p = { from: i, to: e };
    else
      throw new Error("Invalid range");
  if (p?.from && p?.to) {
    const m = a.differenceInCalendarDays(p.to, p.from);
    r > 0 && m > r ? p = { from: e, to: void 0 } : t > 1 && m < t && (p = { from: e, to: void 0 });
  }
  return p;
}
function Hx(e, n, t = wt) {
  const r = Array.isArray(n) ? n : [n];
  let o = e.from;
  const a = t.differenceInCalendarDays(e.to, e.from), i = Math.min(a, 6);
  for (let s = 0; s <= i; s++) {
    if (r.includes(o.getDay()))
      return !0;
    o = t.addDays(o, 1);
  }
  return !1;
}
function fs(e, n, t = wt) {
  return St(e, n.from, !1, t) || St(e, n.to, !1, t) || St(n, e.from, !1, t) || St(n, e.to, !1, t);
}
function Yx(e, n, t = wt) {
  const r = Array.isArray(n) ? n : [n];
  if (r.filter((s) => typeof s != "function").some((s) => typeof s == "boolean" ? s : t.isDate(s) ? St(e, s, !1, t) : Al(s, t) ? s.some((c) => St(e, c, !1, t)) : io(s) ? s.from && s.to ? fs(e, { from: s.from, to: s.to }, t) : !1 : Nl(s) ? Hx(e, s.dayOfWeek, t) : Za(s) ? t.isAfter(s.before, s.after) ? fs(e, {
    from: t.addDays(s.after, 1),
    to: t.addDays(s.before, -1)
  }, t) : Et(e.from, s, t) || Et(e.to, s, t) : Xa(s) || Ja(s) ? Et(e.from, s, t) || Et(e.to, s, t) : !1))
    return !0;
  const i = r.filter((s) => typeof s == "function");
  if (i.length) {
    let s = e.from;
    const c = t.differenceInCalendarDays(e.to, e.from);
    for (let l = 0; l <= c; l++) {
      if (i.some((u) => u(s)))
        return !0;
      s = t.addDays(s, 1);
    }
  }
  return !1;
}
function Ux(e, n) {
  const { disabled: t, excludeDisabled: r, resetOnSelect: o, selected: a, required: i, onSelect: s } = e, [c, l] = so(a, s ? a : void 0), u = s ? a : c;
  return {
    selected: u,
    select: (g, x, h) => {
      const { min: v, max: w } = e;
      let b;
      if (g) {
        const C = u?.from, S = u?.to, y = !!C && !!S, E = !!C && !!S && n.isSameDay(C, S) && n.isSameDay(g, C);
        o && (y || !u?.from) ? !i && E ? b = void 0 : b = { from: g, to: void 0 } : b = Vx(g, u, v, w, i, n);
      }
      return r && t && b?.from && b.to && Yx({ from: b.from, to: b.to }, t, n) && (b.from = g, b.to = void 0), s || l(b), s?.(b, g, x, h), b;
    },
    isSelected: (g) => u && St(u, g, !1, n)
  };
}
function Gx(e, n) {
  const { selected: t, required: r, onSelect: o } = e, [a, i] = so(t, o ? t : void 0), s = o ? t : a, { isSameDay: c } = n;
  return {
    selected: s,
    select: (p, m, g) => {
      let x = p;
      return !r && s && s && c(p, s) && (x = void 0), o || i(x), o?.(x, p, m, g), x;
    },
    isSelected: (p) => s ? c(s, p) : !1
  };
}
function qx(e, n) {
  const t = Gx(e, n), r = Bx(e, n), o = Ux(e, n);
  switch (e.mode) {
    case "single":
      return t;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function Je(e, n) {
  return e instanceof Le && e.timeZone === n ? e : new Le(e, n);
}
function un(e, n, t) {
  return Je(e, n);
}
function ms(e, n, t) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? un(e, n) : Array.isArray(e) ? e.map((r) => r instanceof Date ? un(r, n) : r) : io(e) ? {
    ...e,
    from: e.from ? Je(e.from, n) : e.from,
    to: e.to ? Je(e.to, n) : e.to
  } : Za(e) ? {
    before: un(e.before, n),
    after: un(e.after, n)
  } : Xa(e) ? {
    after: un(e.after, n)
  } : Ja(e) ? {
    before: un(e.before, n)
  } : e;
}
function Vo(e, n, t) {
  return e && (Array.isArray(e) ? e.map((r) => ms(r, n)) : ms(e, n));
}
function Kx(e) {
  let n = e;
  const t = n.timeZone;
  if (t && (n = {
    ...e,
    timeZone: t
  }, n.today && (n.today = Je(n.today, t)), n.month && (n.month = Je(n.month, t)), n.defaultMonth && (n.defaultMonth = Je(n.defaultMonth, t)), n.startMonth && (n.startMonth = Je(n.startMonth, t)), n.endMonth && (n.endMonth = Je(n.endMonth, t)), n.mode === "single" && n.selected ? n.selected = Je(n.selected, t) : n.mode === "multiple" && n.selected ? n.selected = n.selected?.map((se) => Je(se, t)) : n.mode === "range" && n.selected && (n.selected = {
    from: n.selected.from ? Je(n.selected.from, t) : n.selected.from,
    to: n.selected.to ? Je(n.selected.to, t) : n.selected.to
  }), n.disabled !== void 0 && (n.disabled = Vo(n.disabled, t)), n.hidden !== void 0 && (n.hidden = Vo(n.hidden, t)), n.modifiers)) {
    const se = {};
    Object.keys(n.modifiers).forEach((fe) => {
      se[fe] = Vo(n.modifiers?.[fe], t);
    }), n.modifiers = se;
  }
  const { components: r, formatters: o, labels: a, dateLib: i, locale: s, classNames: c } = Be(() => {
    const se = { ...Rl, ...n.locale }, fe = n.broadcastCalendar ? 1 : n.weekStartsOn, de = n.noonSafe && n.timeZone ? Ex(n.timeZone, {
      weekStartsOn: fe,
      locale: se
    }) : void 0, Pe = n.dateLib && de ? { ...de, ...n.dateLib } : n.dateLib ?? de, ge = new Ke({
      locale: se,
      weekStartsOn: fe,
      firstWeekContainsDate: n.firstWeekContainsDate,
      useAdditionalWeekYearTokens: n.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: n.useAdditionalDayOfYearTokens,
      timeZone: n.timeZone,
      numerals: n.numerals
    }, Pe);
    return {
      dateLib: ge,
      components: sx(n.components),
      formatters: vx(n.formatters),
      labels: yx(n.labels, ge.options),
      locale: se,
      classNames: { ...Qa(), ...n.classNames }
    };
  }, [
    n.locale,
    n.broadcastCalendar,
    n.weekStartsOn,
    n.firstWeekContainsDate,
    n.useAdditionalWeekYearTokens,
    n.useAdditionalDayOfYearTokens,
    n.timeZone,
    n.numerals,
    n.dateLib,
    n.noonSafe,
    n.components,
    n.formatters,
    n.labels,
    n.classNames
  ]);
  n.today || (n = { ...n, today: i.today() });
  const { captionLayout: l, mode: u, navLayout: p, numberOfMonths: m = 1, onDayBlur: g, onDayClick: x, onDayFocus: h, onDayKeyDown: v, onDayMouseEnter: w, onDayMouseLeave: b, onNextClick: C, onPrevClick: S, showWeekNumber: y, styles: E } = n, { formatCaption: _, formatDay: P, formatMonthDropdown: A, formatWeekNumber: L, formatWeekNumberHeader: q, formatWeekdayName: G, formatYearDropdown: H } = o, z = Lx(n, i), { days: Z, months: $, navStart: Q, navEnd: D, previousMonth: R, nextMonth: M, goToMonth: k } = z, T = ax(Z, n, Q, D, i), { isSelected: W, select: F, selected: K } = qx(n, i) ?? {}, { blur: Y, focused: O, isFocusTarget: U, moveFocus: J, setFocused: B } = $x(n, z, T, W ?? (() => !1), i), { labelDayButton: ae, labelGridcell: I, labelGrid: ve, labelMonthDropdown: ne, labelNav: ie, labelPrevious: Me, labelNext: _e, labelWeekday: Ne, labelWeekNumber: xe, labelWeekNumberHeader: Re, labelYearDropdown: Ot } = a, $e = Be(() => kx(i, n.ISOWeek, n.broadcastCalendar, n.today), [i, n.ISOWeek, n.broadcastCalendar, n.today]), Xe = u !== void 0 || x !== void 0, V = ue(() => {
    R && (k(R), S?.(R));
  }, [R, k, S]), re = ue(() => {
    M && (k(M), C?.(M));
  }, [k, M, C]), he = ue((se, fe) => (de) => {
    de.preventDefault(), de.stopPropagation(), B(se), !fe.disabled && (F?.(se.date, fe, de), x?.(se.date, fe, de));
  }, [F, x, B]), Ce = ue((se, fe) => (de) => {
    B(se), h?.(se.date, fe, de);
  }, [h, B]), Ae = ue((se, fe) => (de) => {
    Y(), g?.(se.date, fe, de);
  }, [Y, g]), ct = ue((se, fe) => (de) => {
    const Pe = {
      ArrowLeft: [
        de.shiftKey ? "month" : "day",
        n.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        de.shiftKey ? "month" : "day",
        n.dir === "rtl" ? "before" : "after"
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
  }, [J, v, n.dir]), lt = ue((se, fe) => (de) => {
    w?.(se.date, fe, de);
  }, [w]), $t = ue((se, fe) => (de) => {
    b?.(se.date, fe, de);
  }, [b]), Bt = ue((se, fe) => (de) => {
    const Pe = Number(de.target.value), ge = i.setMonth(i.startOfMonth(se), Pe);
    k(i.addMonths(ge, -fe));
  }, [i, k]), He = ue((se, fe) => (de) => {
    const Pe = Number(de.target.value), ge = i.setYear(i.startOfMonth(se), Pe);
    k(i.addMonths(ge, -fe));
  }, [i, k]), { className: dt, style: Vt } = Be(() => ({
    className: [c[oe.Root], n.className].filter(Boolean).join(" "),
    style: { ...E?.[oe.Root], ...n.style }
  }), [c, n.className, n.style, E]), Pn = cx(n), on = ht(null);
  Ox(on, !!n.animate, {
    classNames: c,
    months: $,
    focused: O,
    dateLib: i
  });
  const Rn = {
    dayPickerProps: n,
    selected: K,
    select: F,
    isSelected: W,
    months: $,
    nextMonth: M,
    previousMonth: R,
    goToMonth: k,
    getModifiers: T,
    components: r,
    classNames: c,
    styles: E,
    labels: a,
    formatters: o
  };
  return N.createElement(
    Tl.Provider,
    { value: Rn },
    N.createElement(
      r.Root,
      { rootRef: n.animate ? on : void 0, className: dt, style: Vt, dir: n.dir, id: n.id, lang: n.lang ?? s.code, nonce: n.nonce, title: n.title, role: n.role, "aria-label": n["aria-label"], "aria-labelledby": n["aria-labelledby"], ...Pn },
      N.createElement(
        r.Months,
        { className: c[oe.Months], style: E?.[oe.Months] },
        !n.hideNavigation && !p && N.createElement(r.Nav, { "data-animated-nav": n.animate ? "true" : void 0, className: c[oe.Nav], style: E?.[oe.Nav], "aria-label": ie(), onPreviousClick: V, onNextClick: re, previousMonth: R, nextMonth: M }),
        $.map((se, fe) => {
          const de = n.reverseMonths ? $.length - 1 - fe : fe;
          return N.createElement(
            r.Month,
            {
              "data-animated-month": n.animate ? "true" : void 0,
              className: c[oe.Month],
              style: E?.[oe.Month],
              // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
              key: fe,
              displayIndex: fe,
              calendarMonth: se
            },
            p === "around" && !n.hideNavigation && fe === 0 && N.createElement(
              r.PreviousMonthButton,
              { type: "button", className: c[oe.PreviousMonthButton], tabIndex: R ? void 0 : -1, "aria-disabled": R ? void 0 : !0, "aria-label": Me(R), onClick: V, "data-animated-button": n.animate ? "true" : void 0 },
              N.createElement(r.Chevron, { disabled: R ? void 0 : !0, className: c[oe.Chevron], orientation: n.dir === "rtl" ? "right" : "left" })
            ),
            N.createElement(r.MonthCaption, { "data-animated-caption": n.animate ? "true" : void 0, className: c[oe.MonthCaption], style: E?.[oe.MonthCaption], calendarMonth: se, displayIndex: fe }, l?.startsWith("dropdown") ? N.createElement(
              r.DropdownNav,
              { className: c[oe.Dropdowns], style: E?.[oe.Dropdowns] },
              (() => {
                const Pe = l === "dropdown" || l === "dropdown-months" ? N.createElement(r.MonthsDropdown, { key: "month", className: c[oe.MonthsDropdown], "aria-label": ne(), disabled: !!n.disableNavigation, onChange: Bt(se.date, de), options: wx(se.date, Q, D, o, i), style: E?.[oe.Dropdown], value: i.getMonth(se.date) }) : N.createElement("span", { key: "month" }, A(se.date, i)), ge = l === "dropdown" || l === "dropdown-years" ? N.createElement(r.YearsDropdown, { key: "year", className: c[oe.YearsDropdown], "aria-label": Ot(i.options), disabled: !!n.disableNavigation, onChange: He(se.date, de), options: Sx(Q, D, o, i, !!n.reverseYears), style: E?.[oe.Dropdown], value: i.getYear(se.date) }) : N.createElement("span", { key: "year" }, H(se.date, i));
                return i.getMonthYearOrder() === "year-first" ? [ge, Pe] : [Pe, ge];
              })(),
              N.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            ) : N.createElement(r.CaptionLabel, { className: c[oe.CaptionLabel], role: "status", "aria-live": "polite" }, _(se.date, i.options, i))),
            p === "around" && !n.hideNavigation && fe === m - 1 && N.createElement(
              r.NextMonthButton,
              { type: "button", className: c[oe.NextMonthButton], tabIndex: M ? void 0 : -1, "aria-disabled": M ? void 0 : !0, "aria-label": _e(M), onClick: re, "data-animated-button": n.animate ? "true" : void 0 },
              N.createElement(r.Chevron, { disabled: M ? void 0 : !0, className: c[oe.Chevron], orientation: n.dir === "rtl" ? "left" : "right" })
            ),
            fe === m - 1 && p === "after" && !n.hideNavigation && N.createElement(r.Nav, { "data-animated-nav": n.animate ? "true" : void 0, className: c[oe.Nav], style: E?.[oe.Nav], "aria-label": ie(), onPreviousClick: V, onNextClick: re, previousMonth: R, nextMonth: M }),
            N.createElement(
              r.MonthGrid,
              { role: "grid", "aria-multiselectable": u === "multiple" || u === "range", "aria-label": ve(se.date, i.options, i) || void 0, className: c[oe.MonthGrid], style: E?.[oe.MonthGrid] },
              !n.hideWeekdays && N.createElement(
                r.Weekdays,
                { "data-animated-weekdays": n.animate ? "true" : void 0, className: c[oe.Weekdays], style: E?.[oe.Weekdays] },
                y && N.createElement(r.WeekNumberHeader, { "aria-label": Re(i.options), className: c[oe.WeekNumberHeader], style: E?.[oe.WeekNumberHeader], scope: "col" }, q()),
                $e.map((Pe) => N.createElement(r.Weekday, { "aria-label": Ne(Pe, i.options, i), className: c[oe.Weekday], key: String(Pe), style: E?.[oe.Weekday], scope: "col" }, G(Pe, i.options, i)))
              ),
              N.createElement(r.Weeks, { "data-animated-weeks": n.animate ? "true" : void 0, className: c[oe.Weeks], style: E?.[oe.Weeks] }, se.weeks.map((Pe) => N.createElement(
                r.Week,
                { className: c[oe.Week], key: Pe.weekNumber, style: E?.[oe.Week], week: Pe },
                y && N.createElement(r.WeekNumber, { week: Pe, style: E?.[oe.WeekNumber], "aria-label": xe(Pe.weekNumber, {
                  locale: s
                }), className: c[oe.WeekNumber], scope: "row", role: "rowheader" }, L(Pe.weekNumber, i)),
                Pe.days.map((ge) => {
                  const { date: ut } = ge, me = T(ge);
                  if (me[Oe.focused] = !me.hidden && !!O?.isEqualTo(ge), me[nt.selected] = W?.(ut) || me.selected, io(K)) {
                    const { from: Do, to: Oo } = K;
                    me[nt.range_start] = !!(Do && Oo && i.isSameDay(ut, Do)), me[nt.range_end] = !!(Do && Oo && i.isSameDay(ut, Oo)), me[nt.range_middle] = St(K, ut, !0, i);
                  }
                  const Mp = Cx(me, E, n.modifiersStyles), Dp = ix(me, c, n.modifiersClassNames), Op = !Xe && !me.hidden ? I(ut, me, i.options, i) : void 0;
                  return N.createElement(r.Day, { key: `${ge.isoDate}_${ge.displayMonthId}`, day: ge, modifiers: me, className: Dp.join(" "), style: Mp, role: "gridcell", "aria-selected": me.selected || void 0, "aria-label": Op, "data-day": ge.isoDate, "data-month": ge.outside ? ge.dateMonthId : void 0, "data-selected": me.selected || void 0, "data-disabled": me.disabled || void 0, "data-hidden": me.hidden || void 0, "data-outside": ge.outside || void 0, "data-focused": me.focused || void 0, "data-today": me.today || void 0 }, !me.hidden && Xe ? N.createElement(r.DayButton, { className: c[oe.DayButton], style: E?.[oe.DayButton], type: "button", day: ge, modifiers: me, disabled: !me.focused && me.disabled || void 0, "aria-disabled": me.focused && me.disabled || void 0, tabIndex: U(ge) ? 0 : -1, "aria-label": ae(ut, me, i.options, i), onClick: he(ge, me), onBlur: Ae(ge, me), onFocus: Ce(ge, me), onKeyDown: ct(ge, me), onMouseEnter: lt(ge, me), onMouseLeave: $t(ge, me) }, P(ut, i.options, i)) : !me.hidden && P(ge.date, i.options, i));
                })
              )))
            )
          );
        })
      ),
      n.footer && N.createElement(r.Footer, { className: c[oe.Footer], style: E?.[oe.Footer], role: "status", "aria-live": "polite" }, n.footer)
    )
  );
}
function Zx({
  className: e,
  classNames: n,
  showOutsideDays: t = !0,
  captionLayout: r = "label",
  buttonVariant: o = "gray-ghost",
  locale: a,
  formatters: i,
  components: s,
  ...c
}) {
  const l = Qa();
  return /* @__PURE__ */ d.jsx(
    Kx,
    {
      showOutsideDays: t,
      className: j(
        "group/calendar bg-background p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: r,
      locale: a,
      formatters: {
        formatMonthDropdown: (u) => u.toLocaleString(a?.code, { month: "short" }),
        ...i
      },
      classNames: {
        root: j("w-fit", l.root),
        months: j("relative flex flex-col gap-4 md:flex-row", l.months),
        month: j("flex w-full flex-col gap-4", l.month),
        nav: j(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          l.nav
        ),
        button_previous: j(
          pa({ variant: o }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          l.button_previous
        ),
        button_next: j(
          pa({ variant: o }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          l.button_next
        ),
        month_caption: j(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          l.month_caption
        ),
        dropdowns: j(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          l.dropdowns
        ),
        dropdown_root: j(
          "cn-calendar-dropdown-root relative rounded-(--cell-radius)",
          l.dropdown_root
        ),
        dropdown: j("absolute inset-0 bg-popover opacity-0", l.dropdown),
        caption_label: j(
          "font-medium select-none",
          r === "label" ? "cn-calendar-caption text-sm" : "cn-calendar-caption-label flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          l.caption_label
        ),
        month_grid: j("w-full border-collapse", l.month_grid),
        weekdays: j("flex", l.weekdays),
        weekday: j(
          "flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none",
          l.weekday
        ),
        week: j("mt-2 flex w-full", l.week),
        week_number_header: j("w-(--cell-size) select-none", l.week_number_header),
        week_number: j(
          "text-[0.8rem] text-muted-foreground select-none",
          l.week_number
        ),
        day: j(
          "group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)",
          c.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          l.day
        ),
        range_start: j(
          "relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-muted",
          l.range_start
        ),
        range_middle: j("rounded-none", l.range_middle),
        range_end: j(
          "relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-muted",
          l.range_end
        ),
        today: j(
          "rounded-(--cell-radius) bg-muted text-foreground data-[selected=true]:rounded-none",
          l.today
        ),
        outside: j(
          "text-muted-foreground aria-selected:text-muted-foreground",
          l.outside
        ),
        disabled: j("text-muted-foreground opacity-50", l.disabled),
        hidden: j("invisible", l.hidden),
        ...n
      },
      components: {
        Root: ({ className: u, rootRef: p, ...m }) => /* @__PURE__ */ d.jsx("div", { "data-slot": "calendar", ref: p, className: j(u), ...m }),
        Chevron: ({ className: u, orientation: p, ...m }) => p === "left" ? /* @__PURE__ */ d.jsx(gl, { className: j("cn-rtl-flip size-4", u), ...m }) : p === "right" ? /* @__PURE__ */ d.jsx(ro, { className: j("cn-rtl-flip size-4", u), ...m }) : /* @__PURE__ */ d.jsx(Ya, { className: j("size-4", u), ...m }),
        DayButton: ({ ...u }) => /* @__PURE__ */ d.jsx(Xx, { locale: a, ...u }),
        WeekNumber: ({ children: u, ...p }) => /* @__PURE__ */ d.jsx("td", { ...p, children: /* @__PURE__ */ d.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: u }) }),
        ...s
      },
      ...c
    }
  );
}
function Xx({
  className: e,
  day: n,
  modifiers: t,
  locale: r,
  ...o
}) {
  const a = Qa(), i = ht(null);
  return Kt(() => {
    t.focused && i.current?.focus();
  }, [t.focused]), /* @__PURE__ */ d.jsx(
    oo,
    {
      ref: i,
      variant: "gray-ghost",
      size: "sm",
      "data-day": n.date.toLocaleDateString(r?.code),
      "data-selected-single": t.selected && !t.range_start && !t.range_end && !t.range_middle,
      "data-range-start": t.range_start,
      "data-range-end": t.range_end,
      "data-range-middle": t.range_middle,
      className: j(
        "relative isolate z-10 flex size-7 aspect-square w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-foreground [&>span]:text-xs [&>span]:opacity-70",
        a.day,
        e
      ),
      ...o
    }
  );
}
function hk({
  className: e,
  checked: n,
  disabled: t = !1,
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
      className: j(
        "inline-flex size-9.5 items-center justify-center rounded-full",
        "bg-transparent transition-colors duration-200",
        "hover:bg-blue-hepatica-100 focus-within:bg-gray-100",
        {
          "cursor-not-allowed": t
        }
      ),
      children: [
        /* @__PURE__ */ d.jsx(
          "div",
          {
            "data-slot": "checkbox-box",
            "aria-hidden": "true",
            className: j(
              "size-4 rounded-xs transition-all duration-200 flex items-center justify-center",
              {
                "border-2 border-gray-600": !n && !t,
                "bg-blue-hepatica-600": n && !t,
                "border-2 border-gray-200": !n && t,
                "bg-gray-200": n && t
              },
              e
            ),
            children: /* @__PURE__ */ d.jsx(
              nr,
              {
                className: j("size-3 text-transparent", {
                  "text-white": n
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
            checked: n,
            disabled: t,
            onChange: (c) => a?.(c.target.checked),
            ...i
          }
        )
      ]
    }
  );
}
const Jx = ["top", "right", "bottom", "left"], Nt = Math.min, Ue = Math.max, Ir = Math.round, wr = Math.floor, xt = (e) => ({
  x: e,
  y: e
}), Qx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, eb = {
  start: "end",
  end: "start"
};
function ma(e, n, t) {
  return Ue(e, Nt(n, t));
}
function _t(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function Mn(e) {
  return e.split("-")[1];
}
function ei(e) {
  return e === "x" ? "y" : "x";
}
function ti(e) {
  return e === "y" ? "height" : "width";
}
const tb = /* @__PURE__ */ new Set(["top", "bottom"]);
function vt(e) {
  return tb.has(Mt(e)) ? "y" : "x";
}
function ni(e) {
  return ei(vt(e));
}
function nb(e, n, t) {
  t === void 0 && (t = !1);
  const r = Mn(e), o = ni(e), a = ti(o);
  let i = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[a] > n.floating[a] && (i = Fr(i)), [i, Fr(i)];
}
function rb(e) {
  const n = Fr(e);
  return [ha(e), n, ha(n)];
}
function ha(e) {
  return e.replace(/start|end/g, (n) => eb[n]);
}
const hs = ["left", "right"], gs = ["right", "left"], ob = ["top", "bottom"], ab = ["bottom", "top"];
function ib(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? gs : hs : n ? hs : gs;
    case "left":
    case "right":
      return n ? ob : ab;
    default:
      return [];
  }
}
function sb(e, n, t, r) {
  const o = Mn(e);
  let a = ib(Mt(e), t === "start", r);
  return o && (a = a.map((i) => i + "-" + o), n && (a = a.concat(a.map(ha)))), a;
}
function Fr(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Qx[n]);
}
function cb(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ql(e) {
  return typeof e != "number" ? cb(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Lr(e) {
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
function vs(e, n, t) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = vt(n), i = ni(n), s = ti(i), c = Mt(n), l = a === "y", u = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
  let g;
  switch (c) {
    case "top":
      g = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Mn(n)) {
    case "start":
      g[i] -= m * (t && l ? -1 : 1);
      break;
    case "end":
      g[i] += m * (t && l ? -1 : 1);
      break;
  }
  return g;
}
const lb = async (e, n, t) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = t, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(n));
  let l = await i.getElementRects({
    reference: e,
    floating: n,
    strategy: o
  }), {
    x: u,
    y: p
  } = vs(l, r, c), m = r, g = {}, x = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: v,
      fn: w
    } = s[h], {
      x: b,
      y: C,
      data: S,
      reset: y
    } = await w({
      x: u,
      y: p,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: g,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: n
      }
    });
    u = b ?? u, p = C ?? p, g = {
      ...g,
      [v]: {
        ...g[v],
        ...S
      }
    }, y && x <= 50 && (x++, typeof y == "object" && (y.placement && (m = y.placement), y.rects && (l = y.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: n,
      strategy: o
    }) : y.rects), {
      x: u,
      y: p
    } = vs(l, m, c)), h = -1);
  }
  return {
    x: u,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: g
  };
};
async function Yn(e, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = _t(n, e), x = ql(g), v = s[m ? p === "floating" ? "reference" : "floating" : p], w = Lr(await a.getClippingRect({
    element: (t = await (a.isElement == null ? void 0 : a.isElement(v))) == null || t ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = p === "floating" ? {
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
  }, y = Lr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: C,
    strategy: c
  }) : b);
  return {
    top: (w.top - y.top + x.top) / S.y,
    bottom: (y.bottom - w.bottom + x.bottom) / S.y,
    left: (w.left - y.left + x.left) / S.x,
    right: (y.right - w.right + x.right) / S.x
  };
}
const db = (e) => ({
  name: "arrow",
  options: e,
  async fn(n) {
    const {
      x: t,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: c
    } = n, {
      element: l,
      padding: u = 0
    } = _t(e, n) || {};
    if (l == null)
      return {};
    const p = ql(u), m = {
      x: t,
      y: r
    }, g = ni(o), x = ti(g), h = await i.getDimensions(l), v = g === "y", w = v ? "top" : "left", b = v ? "bottom" : "right", C = v ? "clientHeight" : "clientWidth", S = a.reference[x] + a.reference[g] - m[g] - a.floating[x], y = m[g] - a.reference[g], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let _ = E ? E[C] : 0;
    (!_ || !await (i.isElement == null ? void 0 : i.isElement(E))) && (_ = s.floating[C] || a.floating[x]);
    const P = S / 2 - y / 2, A = _ / 2 - h[x] / 2 - 1, L = Nt(p[w], A), q = Nt(p[b], A), G = L, H = _ - h[x] - q, z = _ / 2 - h[x] / 2 + P, Z = ma(G, z, H), $ = !c.arrow && Mn(o) != null && z !== Z && a.reference[x] / 2 - (z < G ? L : q) - h[x] / 2 < 0, Q = $ ? z < G ? z - G : z - H : 0;
    return {
      [g]: m[g] + Q,
      data: {
        [g]: Z,
        centerOffset: z - Z - Q,
        ...$ && {
          alignmentOffset: Q
        }
      },
      reset: $
    };
  }
}), ub = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(n) {
      var t, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: l
      } = n, {
        mainAxis: u = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: h = !0,
        ...v
      } = _t(e, n);
      if ((t = a.arrow) != null && t.alignmentOffset)
        return {};
      const w = Mt(o), b = vt(s), C = Mt(s) === s, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), y = m || (C || !h ? [Fr(s)] : rb(s)), E = x !== "none";
      !m && E && y.push(...sb(s, h, x, S));
      const _ = [s, ...y], P = await Yn(n, v), A = [];
      let L = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && A.push(P[w]), p) {
        const z = nb(o, i, S);
        A.push(P[z[0]], P[z[1]]);
      }
      if (L = [...L, {
        placement: o,
        overflows: A
      }], !A.every((z) => z <= 0)) {
        var q, G;
        const z = (((q = a.flip) == null ? void 0 : q.index) || 0) + 1, Z = _[z];
        if (Z && (!(p === "alignment" ? b !== vt(Z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        L.every((D) => vt(D.placement) === b ? D.overflows[0] > 0 : !0)))
          return {
            data: {
              index: z,
              overflows: L
            },
            reset: {
              placement: Z
            }
          };
        let $ = (G = L.filter((Q) => Q.overflows[0] <= 0).sort((Q, D) => Q.overflows[1] - D.overflows[1])[0]) == null ? void 0 : G.placement;
        if (!$)
          switch (g) {
            case "bestFit": {
              var H;
              const Q = (H = L.filter((D) => {
                if (E) {
                  const R = vt(D.placement);
                  return R === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  R === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((R) => R > 0).reduce((R, M) => R + M, 0)]).sort((D, R) => D[1] - R[1])[0]) == null ? void 0 : H[0];
              Q && ($ = Q);
              break;
            }
            case "initialPlacement":
              $ = s;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
function xs(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function bs(e) {
  return Jx.some((n) => e[n] >= 0);
}
const pb = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(n) {
      const {
        rects: t
      } = n, {
        strategy: r = "referenceHidden",
        ...o
      } = _t(e, n);
      switch (r) {
        case "referenceHidden": {
          const a = await Yn(n, {
            ...o,
            elementContext: "reference"
          }), i = xs(a, t.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: bs(i)
            }
          };
        }
        case "escaped": {
          const a = await Yn(n, {
            ...o,
            altBoundary: !0
          }), i = xs(a, t.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: bs(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Kl = /* @__PURE__ */ new Set(["left", "top"]);
async function fb(e, n) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Mt(t), s = Mn(t), c = vt(t) === "y", l = Kl.has(i) ? -1 : 1, u = a && c ? -1 : 1, p = _t(n, e);
  let {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: x
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof x == "number" && (g = s === "end" ? x * -1 : x), c ? {
    x: g * u,
    y: m * l
  } : {
    x: m * l,
    y: g * u
  };
}
const mb = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      var t, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = n, c = await fb(n, e);
      return i === ((t = s.offset) == null ? void 0 : t.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, hb = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(n) {
      const {
        x: t,
        y: r,
        placement: o
      } = n, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (v) => {
            let {
              x: w,
              y: b
            } = v;
            return {
              x: w,
              y: b
            };
          }
        },
        ...c
      } = _t(e, n), l = {
        x: t,
        y: r
      }, u = await Yn(n, c), p = vt(Mt(o)), m = ei(p);
      let g = l[m], x = l[p];
      if (a) {
        const v = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = g + u[v], C = g - u[w];
        g = ma(b, g, C);
      }
      if (i) {
        const v = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = x + u[v], C = x - u[w];
        x = ma(b, x, C);
      }
      const h = s.fn({
        ...n,
        [m]: g,
        [p]: x
      });
      return {
        ...h,
        data: {
          x: h.x - t,
          y: h.y - r,
          enabled: {
            [m]: a,
            [p]: i
          }
        }
      };
    }
  };
}, gb = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(n) {
      const {
        x: t,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = n, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = _t(e, n), u = {
        x: t,
        y: r
      }, p = vt(o), m = ei(p);
      let g = u[m], x = u[p];
      const h = _t(s, n), v = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const C = m === "y" ? "height" : "width", S = a.reference[m] - a.floating[C] + v.mainAxis, y = a.reference[m] + a.reference[C] - v.mainAxis;
        g < S ? g = S : g > y && (g = y);
      }
      if (l) {
        var w, b;
        const C = m === "y" ? "width" : "height", S = Kl.has(Mt(o)), y = a.reference[p] - a.floating[C] + (S && ((w = i.offset) == null ? void 0 : w[p]) || 0) + (S ? 0 : v.crossAxis), E = a.reference[p] + a.reference[C] + (S ? 0 : ((b = i.offset) == null ? void 0 : b[p]) || 0) - (S ? v.crossAxis : 0);
        x < y ? x = y : x > E && (x = E);
      }
      return {
        [m]: g,
        [p]: x
      };
    }
  };
}, vb = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(n) {
      var t, r;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = n, {
        apply: c = () => {
        },
        ...l
      } = _t(e, n), u = await Yn(n, l), p = Mt(o), m = Mn(o), g = vt(o) === "y", {
        width: x,
        height: h
      } = a.floating;
      let v, w;
      p === "top" || p === "bottom" ? (v = p, w = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = p, v = m === "end" ? "top" : "bottom");
      const b = h - u.top - u.bottom, C = x - u.left - u.right, S = Nt(h - u[v], b), y = Nt(x - u[w], C), E = !n.middlewareData.shift;
      let _ = S, P = y;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (P = C), (r = n.middlewareData.shift) != null && r.enabled.y && (_ = b), E && !m) {
        const L = Ue(u.left, 0), q = Ue(u.right, 0), G = Ue(u.top, 0), H = Ue(u.bottom, 0);
        g ? P = x - 2 * (L !== 0 || q !== 0 ? L + q : Ue(u.left, u.right)) : _ = h - 2 * (G !== 0 || H !== 0 ? G + H : Ue(u.top, u.bottom));
      }
      await c({
        ...n,
        availableWidth: P,
        availableHeight: _
      });
      const A = await i.getDimensions(s.floating);
      return x !== A.width || h !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function co() {
  return typeof window < "u";
}
function Dn(e) {
  return Zl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function qe(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Ct(e) {
  var n;
  return (n = (Zl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function Zl(e) {
  return co() ? e instanceof Node || e instanceof qe(e).Node : !1;
}
function ot(e) {
  return co() ? e instanceof Element || e instanceof qe(e).Element : !1;
}
function bt(e) {
  return co() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1;
}
function ys(e) {
  return !co() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot;
}
const xb = /* @__PURE__ */ new Set(["inline", "contents"]);
function ar(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: r,
    display: o
  } = at(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !xb.has(o);
}
const bb = /* @__PURE__ */ new Set(["table", "td", "th"]);
function yb(e) {
  return bb.has(Dn(e));
}
const wb = [":popover-open", ":modal"];
function lo(e) {
  return wb.some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
const Cb = ["transform", "translate", "scale", "rotate", "perspective"], kb = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Sb = ["paint", "layout", "strict", "content"];
function ri(e) {
  const n = oi(), t = ot(e) ? at(e) : e;
  return Cb.some((r) => t[r] ? t[r] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || kb.some((r) => (t.willChange || "").includes(r)) || Sb.some((r) => (t.contain || "").includes(r));
}
function Eb(e) {
  let n = At(e);
  for (; bt(n) && !xn(n); ) {
    if (ri(n))
      return n;
    if (lo(n))
      return null;
    n = At(n);
  }
  return null;
}
function oi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const _b = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function xn(e) {
  return _b.has(Dn(e));
}
function at(e) {
  return qe(e).getComputedStyle(e);
}
function uo(e) {
  return ot(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function At(e) {
  if (Dn(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ys(e) && e.host || // Fallback.
    Ct(e)
  );
  return ys(n) ? n.host : n;
}
function Xl(e) {
  const n = At(e);
  return xn(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : bt(n) && ar(n) ? n : Xl(n);
}
function Un(e, n, t) {
  var r;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const o = Xl(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = qe(o);
  if (a) {
    const s = ga(i);
    return n.concat(i, i.visualViewport || [], ar(o) ? o : [], s && t ? Un(s) : []);
  }
  return n.concat(o, Un(o, [], t));
}
function ga(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Jl(e) {
  const n = at(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const o = bt(e), a = o ? e.offsetWidth : t, i = o ? e.offsetHeight : r, s = Ir(t) !== a || Ir(r) !== i;
  return s && (t = a, r = i), {
    width: t,
    height: r,
    $: s
  };
}
function ai(e) {
  return ot(e) ? e : e.contextElement;
}
function gn(e) {
  const n = ai(e);
  if (!bt(n))
    return xt(1);
  const t = n.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Jl(n);
  let i = (a ? Ir(t.width) : t.width) / r, s = (a ? Ir(t.height) : t.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Mb = /* @__PURE__ */ xt(0);
function Ql(e) {
  const n = qe(e);
  return !oi() || !n.visualViewport ? Mb : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Db(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== qe(e) ? !1 : n;
}
function Jt(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), a = ai(e);
  let i = xt(1);
  n && (r ? ot(r) && (i = gn(r)) : i = gn(e));
  const s = Db(a, t, r) ? Ql(a) : xt(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, u = o.width / i.x, p = o.height / i.y;
  if (a) {
    const m = qe(a), g = r && ot(r) ? qe(r) : r;
    let x = m, h = ga(x);
    for (; h && r && g !== x; ) {
      const v = gn(h), w = h.getBoundingClientRect(), b = at(h), C = w.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, S = w.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, p *= v.y, c += C, l += S, x = qe(h), h = ga(x);
    }
  }
  return Lr({
    width: u,
    height: p,
    x: c,
    y: l
  });
}
function po(e, n) {
  const t = uo(e).scrollLeft;
  return n ? n.left + t : Jt(Ct(e)).left + t;
}
function ed(e, n) {
  const t = e.getBoundingClientRect(), r = t.left + n.scrollLeft - po(e, t), o = t.top + n.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Ob(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = Ct(r), s = n ? lo(n.floating) : !1;
  if (r === i || s && a)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = xt(1);
  const u = xt(0), p = bt(r);
  if ((p || !p && !a) && ((Dn(r) !== "body" || ar(i)) && (c = uo(r)), bt(r))) {
    const g = Jt(r);
    l = gn(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const m = i && !p && !a ? ed(i, c) : xt(0);
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x + m.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y + m.y
  };
}
function Pb(e) {
  return Array.from(e.getClientRects());
}
function Rb(e) {
  const n = Ct(e), t = uo(e), r = e.ownerDocument.body, o = Ue(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), a = Ue(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -t.scrollLeft + po(e);
  const s = -t.scrollTop;
  return at(r).direction === "rtl" && (i += Ue(n.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
const ws = 25;
function jb(e, n) {
  const t = qe(e), r = Ct(e), o = t.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const u = oi();
    (!u || u && n === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  const l = po(r);
  if (l <= 0) {
    const u = r.ownerDocument, p = u.body, m = getComputedStyle(p), g = u.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, x = Math.abs(r.clientWidth - p.clientWidth - g);
    x <= ws && (a -= x);
  } else l <= ws && (a += l);
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
const Tb = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Nb(e, n) {
  const t = Jt(e, !0, n === "fixed"), r = t.top + e.clientTop, o = t.left + e.clientLeft, a = bt(e) ? gn(e) : xt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Cs(e, n, t) {
  let r;
  if (n === "viewport")
    r = jb(e, t);
  else if (n === "document")
    r = Rb(Ct(e));
  else if (ot(n))
    r = Nb(n, t);
  else {
    const o = Ql(e);
    r = {
      x: n.x - o.x,
      y: n.y - o.y,
      width: n.width,
      height: n.height
    };
  }
  return Lr(r);
}
function td(e, n) {
  const t = At(e);
  return t === n || !ot(t) || xn(t) ? !1 : at(t).position === "fixed" || td(t, n);
}
function Ab(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let r = Un(e, [], !1).filter((s) => ot(s) && Dn(s) !== "body"), o = null;
  const a = at(e).position === "fixed";
  let i = a ? At(e) : e;
  for (; ot(i) && !xn(i); ) {
    const s = at(i), c = ri(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && Tb.has(o.position) || ar(i) && !c && td(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = At(i);
  }
  return n.set(e, r), r;
}
function Ib(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...t === "clippingAncestors" ? lo(n) ? [] : Ab(n, this._c) : [].concat(t), r], s = i[0], c = i.reduce((l, u) => {
    const p = Cs(n, u, o);
    return l.top = Ue(p.top, l.top), l.right = Nt(p.right, l.right), l.bottom = Nt(p.bottom, l.bottom), l.left = Ue(p.left, l.left), l;
  }, Cs(n, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Fb(e) {
  const {
    width: n,
    height: t
  } = Jl(e);
  return {
    width: n,
    height: t
  };
}
function Lb(e, n, t) {
  const r = bt(n), o = Ct(n), a = t === "fixed", i = Jt(e, !0, a, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = xt(0);
  function l() {
    c.x = po(o);
  }
  if (r || !r && !a)
    if ((Dn(n) !== "body" || ar(o)) && (s = uo(n)), r) {
      const g = Jt(n, !0, a, n);
      c.x = g.x + n.clientLeft, c.y = g.y + n.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? ed(o, s) : xt(0), p = i.left + s.scrollLeft - c.x - u.x, m = i.top + s.scrollTop - c.y - u.y;
  return {
    x: p,
    y: m,
    width: i.width,
    height: i.height
  };
}
function Ho(e) {
  return at(e).position === "static";
}
function ks(e, n) {
  if (!bt(e) || at(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Ct(e) === t && (t = t.ownerDocument.body), t;
}
function nd(e, n) {
  const t = qe(e);
  if (lo(e))
    return t;
  if (!bt(e)) {
    let o = At(e);
    for (; o && !xn(o); ) {
      if (ot(o) && !Ho(o))
        return o;
      o = At(o);
    }
    return t;
  }
  let r = ks(e, n);
  for (; r && yb(r) && Ho(r); )
    r = ks(r, n);
  return r && xn(r) && Ho(r) && !ri(r) ? t : r || Eb(e) || t;
}
const Wb = async function(e) {
  const n = this.getOffsetParent || nd, t = this.getDimensions, r = await t(e.floating);
  return {
    reference: Lb(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function zb(e) {
  return at(e).direction === "rtl";
}
const $b = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ob,
  getDocumentElement: Ct,
  getClippingRect: Ib,
  getOffsetParent: nd,
  getElementRects: Wb,
  getClientRects: Pb,
  getDimensions: Fb,
  getScale: gn,
  isElement: ot,
  isRTL: zb
};
function rd(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function Bb(e, n) {
  let t = null, r;
  const o = Ct(e);
  function a() {
    var s;
    clearTimeout(r), (s = t) == null || s.disconnect(), t = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: p,
      width: m,
      height: g
    } = l;
    if (s || n(), !m || !g)
      return;
    const x = wr(p), h = wr(o.clientWidth - (u + m)), v = wr(o.clientHeight - (p + g)), w = wr(u), C = {
      rootMargin: -x + "px " + -h + "px " + -v + "px " + -w + "px",
      threshold: Ue(0, Nt(1, c)) || 1
    };
    let S = !0;
    function y(E) {
      const _ = E[0].intersectionRatio;
      if (_ !== c) {
        if (!S)
          return i();
        _ ? i(!1, _) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      _ === 1 && !rd(l, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      t = new IntersectionObserver(y, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(y, C);
    }
    t.observe(e);
  }
  return i(!0), a;
}
function Vb(e, n, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = ai(e), u = o || a ? [...l ? Un(l) : [], ...Un(n)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", t, {
      passive: !0
    }), a && w.addEventListener("resize", t);
  });
  const p = l && s ? Bb(l, t) : null;
  let m = -1, g = null;
  i && (g = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === l && g && (g.unobserve(n), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var C;
      (C = g) == null || C.observe(n);
    })), t();
  }), l && !c && g.observe(l), g.observe(n));
  let x, h = c ? Jt(e) : null;
  c && v();
  function v() {
    const w = Jt(e);
    h && !rd(h, w) && t(), h = w, x = requestAnimationFrame(v);
  }
  return t(), () => {
    var w;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", t), a && b.removeEventListener("resize", t);
    }), p?.(), (w = g) == null || w.disconnect(), g = null, c && cancelAnimationFrame(x);
  };
}
const Hb = mb, Yb = hb, Ub = ub, Gb = vb, qb = pb, Ss = db, Kb = gb, Zb = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: $b,
    ...t
  }, a = {
    ...o.platform,
    _c: r
  };
  return lb(e, n, {
    ...o,
    platform: a
  });
};
var Xb = typeof document < "u", Jb = function() {
}, Pr = Xb ? mc : Jb;
function Wr(e, n) {
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
        if (!Wr(e[r], n[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), t = o.length, t !== Object.keys(n).length)
      return !1;
    for (r = t; r-- !== 0; )
      if (!{}.hasOwnProperty.call(n, o[r]))
        return !1;
    for (r = t; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Wr(e[a], n[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function od(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Es(e, n) {
  const t = od(e);
  return Math.round(n * t) / t;
}
function Yo(e) {
  const n = f.useRef(e);
  return Pr(() => {
    n.current = e;
  }), n;
}
function Qb(e) {
  e === void 0 && (e = {});
  const {
    placement: n = "bottom",
    strategy: t = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, p] = f.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [m, g] = f.useState(r);
  Wr(m, r) || g(r);
  const [x, h] = f.useState(null), [v, w] = f.useState(null), b = f.useCallback((D) => {
    D !== E.current && (E.current = D, h(D));
  }, []), C = f.useCallback((D) => {
    D !== _.current && (_.current = D, w(D));
  }, []), S = a || x, y = i || v, E = f.useRef(null), _ = f.useRef(null), P = f.useRef(u), A = c != null, L = Yo(c), q = Yo(o), G = Yo(l), H = f.useCallback(() => {
    if (!E.current || !_.current)
      return;
    const D = {
      placement: n,
      strategy: t,
      middleware: m
    };
    q.current && (D.platform = q.current), Zb(E.current, _.current, D).then((R) => {
      const M = {
        ...R,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: G.current !== !1
      };
      z.current && !Wr(P.current, M) && (P.current = M, Zr.flushSync(() => {
        p(M);
      }));
    });
  }, [m, n, t, q, G]);
  Pr(() => {
    l === !1 && P.current.isPositioned && (P.current.isPositioned = !1, p((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [l]);
  const z = f.useRef(!1);
  Pr(() => (z.current = !0, () => {
    z.current = !1;
  }), []), Pr(() => {
    if (S && (E.current = S), y && (_.current = y), S && y) {
      if (L.current)
        return L.current(S, y, H);
      H();
    }
  }, [S, y, H, L, A]);
  const Z = f.useMemo(() => ({
    reference: E,
    floating: _,
    setReference: b,
    setFloating: C
  }), [b, C]), $ = f.useMemo(() => ({
    reference: S,
    floating: y
  }), [S, y]), Q = f.useMemo(() => {
    const D = {
      position: t,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return D;
    const R = Es($.floating, u.x), M = Es($.floating, u.y);
    return s ? {
      ...D,
      transform: "translate(" + R + "px, " + M + "px)",
      ...od($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: R,
      top: M
    };
  }, [t, s, $.floating, u.x, u.y]);
  return f.useMemo(() => ({
    ...u,
    update: H,
    refs: Z,
    elements: $,
    floatingStyles: Q
  }), [u, H, Z, $, Q]);
}
const ey = (e) => {
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
      return r && n(r) ? r.current != null ? Ss({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? Ss({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
}, ty = (e, n) => ({
  ...Hb(e),
  options: [e, n]
}), ny = (e, n) => ({
  ...Yb(e),
  options: [e, n]
}), ry = (e, n) => ({
  ...Kb(e),
  options: [e, n]
}), oy = (e, n) => ({
  ...Ub(e),
  options: [e, n]
}), ay = (e, n) => ({
  ...Gb(e),
  options: [e, n]
}), iy = (e, n) => ({
  ...qb(e),
  options: [e, n]
}), sy = (e, n) => ({
  ...ey(e),
  options: [e, n]
});
var cy = "Arrow", ad = f.forwardRef((e, n) => {
  const { children: t, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ d.jsx(
    le.svg,
    {
      ...a,
      ref: n,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? t : /* @__PURE__ */ d.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ad.displayName = cy;
var ly = ad;
function dy(e) {
  const [n, t] = f.useState(void 0);
  return We(() => {
    if (e) {
      t({ width: e.offsetWidth, height: e.offsetHeight });
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
        t({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      t(void 0);
  }, [e]), n;
}
var ii = "Popper", [id, It] = yt(ii), [uy, sd] = id(ii), cd = (e) => {
  const { __scopePopper: n, children: t } = e, [r, o] = f.useState(null);
  return /* @__PURE__ */ d.jsx(uy, { scope: n, anchor: r, onAnchorChange: o, children: t });
};
cd.displayName = ii;
var ld = "PopperAnchor", dd = f.forwardRef(
  (e, n) => {
    const { __scopePopper: t, virtualRef: r, ...o } = e, a = sd(ld, t), i = f.useRef(null), s = pe(n, i), c = f.useRef(null);
    return f.useEffect(() => {
      const l = c.current;
      c.current = r?.current || i.current, l !== c.current && a.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ d.jsx(le.div, { ...o, ref: s });
  }
);
dd.displayName = ld;
var si = "PopperContent", [py, fy] = id(si), ud = f.forwardRef(
  (e, n) => {
    const {
      __scopePopper: t,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: x,
      ...h
    } = e, v = sd(si, t), [w, b] = f.useState(null), C = pe(n, (O) => b(O)), [S, y] = f.useState(null), E = dy(S), _ = E?.width ?? 0, P = E?.height ?? 0, A = r + (a !== "center" ? "-" + a : ""), L = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, q = Array.isArray(l) ? l : [l], G = q.length > 0, H = {
      padding: L,
      boundary: q.filter(hy),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: G
    }, { refs: z, floatingStyles: Z, placement: $, isPositioned: Q, middlewareData: D } = Qb({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: A,
      whileElementsMounted: (...O) => Vb(...O, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        ty({ mainAxis: o + P, alignmentAxis: i }),
        c && ny({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? ry() : void 0,
          ...H
        }),
        c && oy({ ...H }),
        ay({
          ...H,
          apply: ({ elements: O, rects: U, availableWidth: J, availableHeight: B }) => {
            const { width: ae, height: I } = U.reference, ve = O.floating.style;
            ve.setProperty("--radix-popper-available-width", `${J}px`), ve.setProperty("--radix-popper-available-height", `${B}px`), ve.setProperty("--radix-popper-anchor-width", `${ae}px`), ve.setProperty("--radix-popper-anchor-height", `${I}px`);
          }
        }),
        S && sy({ element: S, padding: s }),
        gy({ arrowWidth: _, arrowHeight: P }),
        m && iy({ strategy: "referenceHidden", ...H })
      ]
    }), [R, M] = md($), k = rt(x);
    We(() => {
      Q && k?.();
    }, [Q, k]);
    const T = D.arrow?.x, W = D.arrow?.y, F = D.arrow?.centerOffset !== 0, [K, Y] = f.useState();
    return We(() => {
      w && Y(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Z,
          transform: Q ? Z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: K,
          "--radix-popper-transform-origin": [
            D.transformOrigin?.x,
            D.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...D.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d.jsx(
          py,
          {
            scope: t,
            placedSide: R,
            onArrowChange: y,
            arrowX: T,
            arrowY: W,
            shouldHideArrow: F,
            children: /* @__PURE__ */ d.jsx(
              le.div,
              {
                "data-side": R,
                "data-align": M,
                ...h,
                ref: C,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Q ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ud.displayName = si;
var pd = "PopperArrow", my = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, fd = f.forwardRef(function(n, t) {
  const { __scopePopper: r, ...o } = n, a = fy(pd, r), i = my[a.placedSide];
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
          ly,
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
fd.displayName = pd;
function hy(e) {
  return e !== null;
}
var gy = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    const { placement: t, rects: r, middlewareData: o } = n, i = o.arrow?.centerOffset !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, u] = md(t), p = { start: "0%", center: "50%", end: "100%" }[u], m = (o.arrow?.x ?? 0) + s / 2, g = (o.arrow?.y ?? 0) + c / 2;
    let x = "", h = "";
    return l === "bottom" ? (x = i ? p : `${m}px`, h = `${-c}px`) : l === "top" ? (x = i ? p : `${m}px`, h = `${r.floating.height + c}px`) : l === "right" ? (x = `${-c}px`, h = i ? p : `${g}px`) : l === "left" && (x = `${r.floating.width + c}px`, h = i ? p : `${g}px`), { data: { x, y: h } };
  }
});
function md(e) {
  const [n, t = "center"] = e.split("-");
  return [n, t];
}
var ir = cd, sr = dd, fo = ud, mo = fd, ho = "Popover", [hd] = yt(ho, [
  It
]), cr = It(), [vy, Ft] = hd(ho), gd = (e) => {
  const {
    __scopePopover: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = cr(n), c = f.useRef(null), [l, u] = f.useState(!1), [p, m] = Tt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: ho
  });
  return /* @__PURE__ */ d.jsx(ir, { ...s, children: /* @__PURE__ */ d.jsx(
    vy,
    {
      scope: n,
      contentId: Ge(),
      triggerRef: c,
      open: p,
      onOpenChange: m,
      onOpenToggle: f.useCallback(() => m((g) => !g), [m]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: f.useCallback(() => u(!0), []),
      onCustomAnchorRemove: f.useCallback(() => u(!1), []),
      modal: i,
      children: t
    }
  ) });
};
gd.displayName = ho;
var vd = "PopoverAnchor", xd = f.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = Ft(vd, t), a = cr(t), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return f.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ d.jsx(sr, { ...a, ...r, ref: n });
  }
);
xd.displayName = vd;
var bd = "PopoverTrigger", yd = f.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = Ft(bd, t), a = cr(t), i = pe(n, o.triggerRef), s = /* @__PURE__ */ d.jsx(
      le.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ed(o.open),
        ...r,
        ref: i,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ d.jsx(sr, { asChild: !0, ...a, children: s });
  }
);
yd.displayName = bd;
var ci = "PopoverPortal", [xy, by] = hd(ci, {
  forceMount: void 0
}), wd = (e) => {
  const { __scopePopover: n, forceMount: t, children: r, container: o } = e, a = Ft(ci, n);
  return /* @__PURE__ */ d.jsx(xy, { scope: n, forceMount: t, children: /* @__PURE__ */ d.jsx(it, { present: t || a.open, children: /* @__PURE__ */ d.jsx(Qn, { asChild: !0, container: o, children: r }) }) });
};
wd.displayName = ci;
var bn = "PopoverContent", Cd = f.forwardRef(
  (e, n) => {
    const t = by(bn, e.__scopePopover), { forceMount: r = t.forceMount, ...o } = e, a = Ft(bn, e.__scopePopover);
    return /* @__PURE__ */ d.jsx(it, { present: r || a.open, children: a.modal ? /* @__PURE__ */ d.jsx(wy, { ...o, ref: n }) : /* @__PURE__ */ d.jsx(Cy, { ...o, ref: n }) });
  }
);
Cd.displayName = bn;
var yy = /* @__PURE__ */ Zt("PopoverContent.RemoveScroll"), wy = f.forwardRef(
  (e, n) => {
    const t = Ft(bn, e.__scopePopover), r = f.useRef(null), o = pe(n, r), a = f.useRef(!1);
    return f.useEffect(() => {
      const i = r.current;
      if (i) return Qr(i);
    }, []), /* @__PURE__ */ d.jsx(er, { as: yy, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
      kd,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), a.current || t.triggerRef.current?.focus();
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
), Cy = f.forwardRef(
  (e, n) => {
    const t = Ft(bn, e.__scopePopover), r = f.useRef(!1), o = f.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      kd,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || t.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          t.triggerRef.current?.contains(i) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), kd = f.forwardRef(
  (e, n) => {
    const {
      __scopePopover: t,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      onFocusOutside: l,
      onInteractOutside: u,
      ...p
    } = e, m = Ft(bn, t), g = cr(t);
    return Xr(), /* @__PURE__ */ d.jsx(
      Jn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ d.jsx(
          kn,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: u,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ d.jsx(
              fo,
              {
                "data-state": Ed(m.open),
                role: "dialog",
                id: m.contentId,
                ...g,
                ...p,
                ref: n,
                style: {
                  ...p.style,
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
), Sd = "PopoverClose", ky = f.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = Ft(Sd, t);
    return /* @__PURE__ */ d.jsx(
      le.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ky.displayName = Sd;
var Sy = "PopoverArrow", Ey = f.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = cr(t);
    return /* @__PURE__ */ d.jsx(mo, { ...o, ...r, ref: n });
  }
);
Ey.displayName = Sy;
function Ed(e) {
  return e ? "open" : "closed";
}
var _y = gd, My = xd, Dy = yd, Oy = wd, Py = Cd;
function Ry({ ...e }) {
  return /* @__PURE__ */ d.jsx(_y, { "data-slot": "popover", ...e });
}
function jy({ ...e }) {
  return /* @__PURE__ */ d.jsx(Dy, { "data-slot": "popover-trigger", ...e });
}
function Ty({
  className: e,
  align: n = "center",
  sideOffset: t = 4,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(Oy, { children: /* @__PURE__ */ d.jsx(
    Py,
    {
      "data-slot": "popover-content",
      align: n,
      sideOffset: t,
      className: j(
        "z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-2xl bg-white p-4 text-popover-foreground shadow-dropdown outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...r
    }
  ) });
}
function gk({ ...e }) {
  return /* @__PURE__ */ d.jsx(My, { "data-slot": "popover-anchor", ...e });
}
function vk({
  value: e,
  onChange: n,
  placeholder: t = "",
  dateFormat: r = "PPP",
  className: o = "",
  disabled: a,
  id: i,
  name: s,
  "aria-invalid": c,
  "aria-label": l,
  "aria-labelledby": u,
  "aria-describedby": p
}) {
  const [m, g] = Fe(!1);
  return /* @__PURE__ */ d.jsxs(Ry, { open: m, onOpenChange: g, children: [
    /* @__PURE__ */ d.jsx(jy, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
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
        "aria-labelledby": u,
        "aria-describedby": p,
        className: j(
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
          /* @__PURE__ */ d.jsx(zh, { className: "size-4 shrink-0", "aria-hidden": !0 }),
          e ? /* @__PURE__ */ d.jsx("span", { children: fn(e, r) }) : /* @__PURE__ */ d.jsx("span", { className: "text-muted-foreground", children: t })
        ]
      }
    ) }),
    /* @__PURE__ */ d.jsx(Ty, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ d.jsx(
      Zx,
      {
        mode: "single",
        selected: e,
        defaultMonth: e,
        onSelect: (x) => {
          n(x), g(!1);
        }
      }
    ) })
  ] });
}
function xk({ ...e }) {
  return /* @__PURE__ */ d.jsx(Na, { "data-slot": "dialog", ...e });
}
function bk({ ...e }) {
  return /* @__PURE__ */ d.jsx(Aa, { "data-slot": "dialog-trigger", ...e });
}
function Ny({ ...e }) {
  return /* @__PURE__ */ d.jsx(Fa, { "data-slot": "dialog-portal", ...e });
}
function yk({ ...e }) {
  return /* @__PURE__ */ d.jsx(tr, { "data-slot": "dialog-close", ...e });
}
function Ay({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    La,
    {
      "data-slot": "dialog-overlay",
      className: j(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/50 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50",
        e
      ),
      ...n
    }
  );
}
function wk({
  className: e,
  children: n,
  showCloseButton: t = !0,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(Ny, { children: [
    /* @__PURE__ */ d.jsx(Ay, {}),
    /* @__PURE__ */ d.jsxs(
      Wa,
      {
        "data-slot": "dialog-content",
        className: j(
          "bg-white data-open:animate-in data-closed:animate-out",
          "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95",
          "data-open:zoom-in-95 grid max-w-[calc(100%-2rem)]",
          "gap-4 rounded-2xl text-sm duration-100 sm:max-w-sm shadow-dialog",
          "fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none",
          e
        ),
        ...r,
        children: [
          n,
          t && /* @__PURE__ */ d.jsx(tr, { "data-slot": "dialog-close", asChild: !0, children: /* @__PURE__ */ d.jsxs(
            oo,
            {
              variant: "gray-ghost",
              className: "absolute top-6 right-8 size-10 flex items-center justify-center",
              size: "sm",
              children: [
                /* @__PURE__ */ d.jsx(Ua, {}),
                /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function Ck({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: j(
        "min-h-22 px-8 justify-center gap-2 flex flex-col border-b border-b-gray-25",
        e
      ),
      ...n
    }
  );
}
function kk({
  className: e,
  showCloseButton: n = !1,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: j("px-8 pb-8 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ d.jsx(tr, { asChild: !0, children: /* @__PURE__ */ d.jsx(oo, { variant: "gray-outline", size: "sm", children: "Close" }) })
      ]
    }
  );
}
function Sk({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    $a,
    {
      "data-slot": "dialog-title",
      className: j("font-manrope text-base leading-5 font-semibold text-gray-900", e),
      ...n
    }
  );
}
function Ek({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    Ba,
    {
      "data-slot": "dialog-description",
      className: j(
        "text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3",
        e
      ),
      ...n
    }
  );
}
function li(e) {
  const n = e + "CollectionProvider", [t, r] = yt(n), [o, a] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (h) => {
    const { scope: v, children: w } = h, b = N.useRef(null), C = N.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(o, { scope: v, itemMap: C, collectionRef: b, children: w });
  };
  i.displayName = n;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ Zt(s), l = N.forwardRef(
    (h, v) => {
      const { scope: w, children: b } = h, C = a(s, w), S = pe(v, C.collectionRef);
      return /* @__PURE__ */ d.jsx(c, { ref: S, children: b });
    }
  );
  l.displayName = s;
  const u = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ Zt(u), g = N.forwardRef(
    (h, v) => {
      const { scope: w, children: b, ...C } = h, S = N.useRef(null), y = pe(v, S), E = a(u, w);
      return N.useEffect(() => (E.itemMap.set(S, { ref: S, ...C }), () => void E.itemMap.delete(S))), /* @__PURE__ */ d.jsx(m, { [p]: "", ref: y, children: b });
    }
  );
  g.displayName = u;
  function x(h) {
    const v = a(e + "CollectionConsumer", h);
    return N.useCallback(() => {
      const b = v.collectionRef.current;
      if (!b) return [];
      const C = Array.from(b.querySelectorAll(`[${p}]`));
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
var Iy = f.createContext(void 0);
function di(e) {
  const n = f.useContext(Iy);
  return e || n || "ltr";
}
var Uo = "rovingFocusGroup.onEntryFocus", Fy = { bubbles: !1, cancelable: !0 }, lr = "RovingFocusGroup", [va, _d, Ly] = li(lr), [Wy, Md] = yt(
  lr,
  [Ly]
), [zy, $y] = Wy(lr), Dd = f.forwardRef(
  (e, n) => /* @__PURE__ */ d.jsx(va.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(va.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(By, { ...e, ref: n }) }) })
);
Dd.displayName = lr;
var By = f.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: t,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: u = !1,
    ...p
  } = e, m = f.useRef(null), g = pe(n, m), x = di(a), [h, v] = Tt({
    prop: i,
    defaultProp: s ?? null,
    onChange: c,
    caller: lr
  }), [w, b] = f.useState(!1), C = rt(l), S = _d(t), y = f.useRef(!1), [E, _] = f.useState(0);
  return f.useEffect(() => {
    const P = m.current;
    if (P)
      return P.addEventListener(Uo, C), () => P.removeEventListener(Uo, C);
  }, [C]), /* @__PURE__ */ d.jsx(
    zy,
    {
      scope: t,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: h,
      onItemFocus: f.useCallback(
        (P) => v(P),
        [v]
      ),
      onItemShiftTab: f.useCallback(() => b(!0), []),
      onFocusableItemAdd: f.useCallback(
        () => _((P) => P + 1),
        []
      ),
      onFocusableItemRemove: f.useCallback(
        () => _((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        le.div,
        {
          tabIndex: w || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...p,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            y.current = !0;
          }),
          onFocus: X(e.onFocus, (P) => {
            const A = !y.current;
            if (P.target === P.currentTarget && A && !w) {
              const L = new CustomEvent(Uo, Fy);
              if (P.currentTarget.dispatchEvent(L), !L.defaultPrevented) {
                const q = S().filter(($) => $.focusable), G = q.find(($) => $.active), H = q.find(($) => $.id === h), Z = [G, H, ...q].filter(
                  Boolean
                ).map(($) => $.ref.current);
                Rd(Z, u);
              }
            }
            y.current = !1;
          }),
          onBlur: X(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Od = "RovingFocusGroupItem", Pd = f.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, c = Ge(), l = a || c, u = $y(Od, t), p = u.currentTabStopId === l, m = _d(t), { onFocusableItemAdd: g, onFocusableItemRemove: x, currentTabStopId: h } = u;
    return f.useEffect(() => {
      if (r)
        return g(), () => x();
    }, [r, g, x]), /* @__PURE__ */ d.jsx(
      va.ItemSlot,
      {
        scope: t,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ d.jsx(
          le.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": u.orientation,
            ...s,
            ref: n,
            onMouseDown: X(e.onMouseDown, (v) => {
              r ? u.onItemFocus(l) : v.preventDefault();
            }),
            onFocus: X(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: X(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const w = Yy(v, u.orientation, u.dir);
              if (w !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let C = m().filter((S) => S.focusable).map((S) => S.ref.current);
                if (w === "last") C.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && C.reverse();
                  const S = C.indexOf(v.currentTarget);
                  C = u.loop ? Uy(C, S + 1) : C.slice(S + 1);
                }
                setTimeout(() => Rd(C));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: p, hasTabStop: h != null }) : i
          }
        )
      }
    );
  }
);
Pd.displayName = Od;
var Vy = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Hy(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Yy(e, n, t) {
  const r = Hy(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Vy[r];
}
function Rd(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function Uy(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var Gy = Dd, qy = Pd, xa = ["Enter", " "], Ky = ["ArrowDown", "PageUp", "Home"], jd = ["ArrowUp", "PageDown", "End"], Zy = [...Ky, ...jd], Xy = {
  ltr: [...xa, "ArrowRight"],
  rtl: [...xa, "ArrowLeft"]
}, Jy = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, dr = "Menu", [Gn, Qy, e0] = li(dr), [rn, Td] = yt(dr, [
  e0,
  It,
  Md
]), ur = It(), Nd = Md(), [Ad, Lt] = rn(dr), [t0, pr] = rn(dr), Id = (e) => {
  const { __scopeMenu: n, open: t = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = ur(n), [c, l] = f.useState(null), u = f.useRef(!1), p = rt(a), m = di(o);
  return f.useEffect(() => {
    const g = () => {
      u.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => u.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d.jsx(ir, { ...s, children: /* @__PURE__ */ d.jsx(
    Ad,
    {
      scope: n,
      open: t,
      onOpenChange: p,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ d.jsx(
        t0,
        {
          scope: n,
          onClose: f.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: u,
          dir: m,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
Id.displayName = dr;
var n0 = "MenuAnchor", ui = f.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = ur(t);
    return /* @__PURE__ */ d.jsx(sr, { ...o, ...r, ref: n });
  }
);
ui.displayName = n0;
var pi = "MenuPortal", [r0, Fd] = rn(pi, {
  forceMount: void 0
}), Ld = (e) => {
  const { __scopeMenu: n, forceMount: t, children: r, container: o } = e, a = Lt(pi, n);
  return /* @__PURE__ */ d.jsx(r0, { scope: n, forceMount: t, children: /* @__PURE__ */ d.jsx(it, { present: t || a.open, children: /* @__PURE__ */ d.jsx(Qn, { asChild: !0, container: o, children: r }) }) });
};
Ld.displayName = pi;
var Qe = "MenuContent", [o0, fi] = rn(Qe), Wd = f.forwardRef(
  (e, n) => {
    const t = Fd(Qe, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, a = Lt(Qe, e.__scopeMenu), i = pr(Qe, e.__scopeMenu);
    return /* @__PURE__ */ d.jsx(Gn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(it, { present: r || a.open, children: /* @__PURE__ */ d.jsx(Gn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ d.jsx(a0, { ...o, ref: n }) : /* @__PURE__ */ d.jsx(i0, { ...o, ref: n }) }) }) });
  }
), a0 = f.forwardRef(
  (e, n) => {
    const t = Lt(Qe, e.__scopeMenu), r = f.useRef(null), o = pe(n, r);
    return f.useEffect(() => {
      const a = r.current;
      if (a) return Qr(a);
    }, []), /* @__PURE__ */ d.jsx(
      mi,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: t.open,
        disableOutsideScroll: !0,
        onFocusOutside: X(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => t.onOpenChange(!1)
      }
    );
  }
), i0 = f.forwardRef((e, n) => {
  const t = Lt(Qe, e.__scopeMenu);
  return /* @__PURE__ */ d.jsx(
    mi,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), s0 = /* @__PURE__ */ Zt("MenuContent.ScrollLock"), mi = f.forwardRef(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: l,
      onPointerDownOutside: u,
      onFocusOutside: p,
      onInteractOutside: m,
      onDismiss: g,
      disableOutsideScroll: x,
      ...h
    } = e, v = Lt(Qe, t), w = pr(Qe, t), b = ur(t), C = Nd(t), S = Qy(t), [y, E] = f.useState(null), _ = f.useRef(null), P = pe(n, _, v.onContentChange), A = f.useRef(0), L = f.useRef(""), q = f.useRef(0), G = f.useRef(null), H = f.useRef("right"), z = f.useRef(0), Z = x ? er : f.Fragment, $ = x ? { as: s0, allowPinchZoom: !0 } : void 0, Q = (R) => {
      const M = L.current + R, k = S().filter((O) => !O.disabled), T = document.activeElement, W = k.find((O) => O.ref.current === T)?.textValue, F = k.map((O) => O.textValue), K = b0(F, M, W), Y = k.find((O) => O.textValue === K)?.ref.current;
      (function O(U) {
        L.current = U, window.clearTimeout(A.current), U !== "" && (A.current = window.setTimeout(() => O(""), 1e3));
      })(M), Y && setTimeout(() => Y.focus());
    };
    f.useEffect(() => () => window.clearTimeout(A.current), []), Xr();
    const D = f.useCallback((R) => H.current === G.current?.side && w0(R, G.current?.area), []);
    return /* @__PURE__ */ d.jsx(
      o0,
      {
        scope: t,
        searchRef: L,
        onItemEnter: f.useCallback(
          (R) => {
            D(R) && R.preventDefault();
          },
          [D]
        ),
        onItemLeave: f.useCallback(
          (R) => {
            D(R) || (_.current?.focus(), E(null));
          },
          [D]
        ),
        onTriggerLeave: f.useCallback(
          (R) => {
            D(R) && R.preventDefault();
          },
          [D]
        ),
        pointerGraceTimerRef: q,
        onPointerGraceIntentChange: f.useCallback((R) => {
          G.current = R;
        }, []),
        children: /* @__PURE__ */ d.jsx(Z, { ...$, children: /* @__PURE__ */ d.jsx(
          Jn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: X(a, (R) => {
              R.preventDefault(), _.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ d.jsx(
              kn,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: p,
                onInteractOutside: m,
                onDismiss: g,
                children: /* @__PURE__ */ d.jsx(
                  Gy,
                  {
                    asChild: !0,
                    ...C,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: y,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: X(c, (R) => {
                      w.isUsingKeyboardRef.current || R.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d.jsx(
                      fo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": nu(v.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...h,
                        ref: P,
                        style: { outline: "none", ...h.style },
                        onKeyDown: X(h.onKeyDown, (R) => {
                          const k = R.target.closest("[data-radix-menu-content]") === R.currentTarget, T = R.ctrlKey || R.altKey || R.metaKey, W = R.key.length === 1;
                          k && (R.key === "Tab" && R.preventDefault(), !T && W && Q(R.key));
                          const F = _.current;
                          if (R.target !== F || !Zy.includes(R.key)) return;
                          R.preventDefault();
                          const Y = S().filter((O) => !O.disabled).map((O) => O.ref.current);
                          jd.includes(R.key) && Y.reverse(), v0(Y);
                        }),
                        onBlur: X(e.onBlur, (R) => {
                          R.currentTarget.contains(R.target) || (window.clearTimeout(A.current), L.current = "");
                        }),
                        onPointerMove: X(
                          e.onPointerMove,
                          qn((R) => {
                            const M = R.target, k = z.current !== R.clientX;
                            if (R.currentTarget.contains(M) && k) {
                              const T = R.clientX > z.current ? "right" : "left";
                              H.current = T, z.current = R.clientX;
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
Wd.displayName = Qe;
var c0 = "MenuGroup", hi = f.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ d.jsx(le.div, { role: "group", ...r, ref: n });
  }
);
hi.displayName = c0;
var l0 = "MenuLabel", zd = f.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ d.jsx(le.div, { ...r, ref: n });
  }
);
zd.displayName = l0;
var zr = "MenuItem", _s = "menu.itemSelect", go = f.forwardRef(
  (e, n) => {
    const { disabled: t = !1, onSelect: r, ...o } = e, a = f.useRef(null), i = pr(zr, e.__scopeMenu), s = fi(zr, e.__scopeMenu), c = pe(n, a), l = f.useRef(!1), u = () => {
      const p = a.current;
      if (!t && p) {
        const m = new CustomEvent(_s, { bubbles: !0, cancelable: !0 });
        p.addEventListener(_s, (g) => r?.(g), { once: !0 }), xc(p, m), m.defaultPrevented ? l.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ d.jsx(
      $d,
      {
        ...o,
        ref: c,
        disabled: t,
        onClick: X(e.onClick, u),
        onPointerDown: (p) => {
          e.onPointerDown?.(p), l.current = !0;
        },
        onPointerUp: X(e.onPointerUp, (p) => {
          l.current || p.currentTarget?.click();
        }),
        onKeyDown: X(e.onKeyDown, (p) => {
          const m = s.searchRef.current !== "";
          t || m && p.key === " " || xa.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
go.displayName = zr;
var $d = f.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, disabled: r = !1, textValue: o, ...a } = e, i = fi(zr, t), s = Nd(t), c = f.useRef(null), l = pe(n, c), [u, p] = f.useState(!1), [m, g] = f.useState("");
    return f.useEffect(() => {
      const x = c.current;
      x && g((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ d.jsx(
      Gn.ItemSlot,
      {
        scope: t,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ d.jsx(qy, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ d.jsx(
          le.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: l,
            onPointerMove: X(
              e.onPointerMove,
              qn((x) => {
                r ? i.onItemLeave(x) : (i.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: X(
              e.onPointerLeave,
              qn((x) => i.onItemLeave(x))
            ),
            onFocus: X(e.onFocus, () => p(!0)),
            onBlur: X(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), d0 = "MenuCheckboxItem", Bd = f.forwardRef(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(Gd, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ d.jsx(
      go,
      {
        role: "menuitemcheckbox",
        "aria-checked": $r(t) ? "mixed" : t,
        ...o,
        ref: n,
        "data-state": xi(t),
        onSelect: X(
          o.onSelect,
          () => r?.($r(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Bd.displayName = d0;
var Vd = "MenuRadioGroup", [u0, p0] = rn(
  Vd,
  { value: void 0, onValueChange: () => {
  } }
), Hd = f.forwardRef(
  (e, n) => {
    const { value: t, onValueChange: r, ...o } = e, a = rt(r);
    return /* @__PURE__ */ d.jsx(u0, { scope: e.__scopeMenu, value: t, onValueChange: a, children: /* @__PURE__ */ d.jsx(hi, { ...o, ref: n }) });
  }
);
Hd.displayName = Vd;
var Yd = "MenuRadioItem", Ud = f.forwardRef(
  (e, n) => {
    const { value: t, ...r } = e, o = p0(Yd, e.__scopeMenu), a = t === o.value;
    return /* @__PURE__ */ d.jsx(Gd, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ d.jsx(
      go,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: n,
        "data-state": xi(a),
        onSelect: X(
          r.onSelect,
          () => o.onValueChange?.(t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ud.displayName = Yd;
var gi = "MenuItemIndicator", [Gd, f0] = rn(
  gi,
  { checked: !1 }
), qd = f.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, forceMount: r, ...o } = e, a = f0(gi, t);
    return /* @__PURE__ */ d.jsx(
      it,
      {
        present: r || $r(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          le.span,
          {
            ...o,
            ref: n,
            "data-state": xi(a.checked)
          }
        )
      }
    );
  }
);
qd.displayName = gi;
var m0 = "MenuSeparator", Kd = f.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ d.jsx(
      le.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: n
      }
    );
  }
);
Kd.displayName = m0;
var h0 = "MenuArrow", Zd = f.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = ur(t);
    return /* @__PURE__ */ d.jsx(mo, { ...o, ...r, ref: n });
  }
);
Zd.displayName = h0;
var vi = "MenuSub", [g0, Xd] = rn(vi), Jd = (e) => {
  const { __scopeMenu: n, children: t, open: r = !1, onOpenChange: o } = e, a = Lt(vi, n), i = ur(n), [s, c] = f.useState(null), [l, u] = f.useState(null), p = rt(o);
  return f.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ d.jsx(ir, { ...i, children: /* @__PURE__ */ d.jsx(
    Ad,
    {
      scope: n,
      open: r,
      onOpenChange: p,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ d.jsx(
        g0,
        {
          scope: n,
          contentId: Ge(),
          triggerId: Ge(),
          trigger: s,
          onTriggerChange: c,
          children: t
        }
      )
    }
  ) });
};
Jd.displayName = vi;
var zn = "MenuSubTrigger", Qd = f.forwardRef(
  (e, n) => {
    const t = Lt(zn, e.__scopeMenu), r = pr(zn, e.__scopeMenu), o = Xd(zn, e.__scopeMenu), a = fi(zn, e.__scopeMenu), i = f.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a, l = { __scopeMenu: e.__scopeMenu }, u = f.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return f.useEffect(() => u, [u]), f.useEffect(() => {
      const p = s.current;
      return () => {
        window.clearTimeout(p), c(null);
      };
    }, [s, c]), /* @__PURE__ */ d.jsx(ui, { asChild: !0, ...l, children: /* @__PURE__ */ d.jsx(
      $d,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": o.contentId,
        "data-state": nu(t.open),
        ...e,
        ref: Xn(n, o.onTriggerChange),
        onClick: (p) => {
          e.onClick?.(p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: X(
          e.onPointerMove,
          qn((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !t.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              t.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: X(
          e.onPointerLeave,
          qn((p) => {
            u();
            const m = t.content?.getBoundingClientRect();
            if (m) {
              const g = t.content?.dataset.side, x = g === "right", h = x ? -5 : 5, v = m[x ? "left" : "right"], w = m[x ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + h, y: p.clientY },
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
              if (a.onTriggerLeave(p), p.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: X(e.onKeyDown, (p) => {
          const m = a.searchRef.current !== "";
          e.disabled || m && p.key === " " || Xy[r.dir].includes(p.key) && (t.onOpenChange(!0), t.content?.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
Qd.displayName = zn;
var eu = "MenuSubContent", tu = f.forwardRef(
  (e, n) => {
    const t = Fd(Qe, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, a = Lt(Qe, e.__scopeMenu), i = pr(Qe, e.__scopeMenu), s = Xd(eu, e.__scopeMenu), c = f.useRef(null), l = pe(n, c);
    return /* @__PURE__ */ d.jsx(Gn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(it, { present: r || a.open, children: /* @__PURE__ */ d.jsx(Gn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(
      mi,
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
        onOpenAutoFocus: (u) => {
          i.isUsingKeyboardRef.current && c.current?.focus(), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: X(e.onFocusOutside, (u) => {
          u.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: X(e.onEscapeKeyDown, (u) => {
          i.onClose(), u.preventDefault();
        }),
        onKeyDown: X(e.onKeyDown, (u) => {
          const p = u.currentTarget.contains(u.target), m = Jy[i.dir].includes(u.key);
          p && m && (a.onOpenChange(!1), s.trigger?.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
tu.displayName = eu;
function nu(e) {
  return e ? "open" : "closed";
}
function $r(e) {
  return e === "indeterminate";
}
function xi(e) {
  return $r(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function v0(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function x0(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
function b0(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((l) => l === n[0]) ? n[0] : n, a = t ? e.indexOf(t) : -1;
  let i = x0(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== t));
  const c = i.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== t ? c : void 0;
}
function y0(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let a = 0, i = n.length - 1; a < n.length; i = a++) {
    const s = n[a], c = n[i], l = s.x, u = s.y, p = c.x, m = c.y;
    u > r != m > r && t < (p - l) * (r - u) / (m - u) + l && (o = !o);
  }
  return o;
}
function w0(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return y0(t, n);
}
function qn(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var C0 = Id, k0 = ui, S0 = Ld, E0 = Wd, _0 = hi, M0 = zd, D0 = go, O0 = Bd, P0 = Hd, R0 = Ud, j0 = qd, T0 = Kd, N0 = Zd, A0 = Jd, I0 = Qd, F0 = tu, vo = "DropdownMenu", [L0] = yt(
  vo,
  [Td]
), ze = Td(), [W0, ru] = L0(vo), bi = (e) => {
  const {
    __scopeDropdownMenu: n,
    children: t,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, c = ze(n), l = f.useRef(null), [u, p] = Tt({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: vo
  });
  return /* @__PURE__ */ d.jsx(
    W0,
    {
      scope: n,
      triggerId: Ge(),
      triggerRef: l,
      contentId: Ge(),
      open: u,
      onOpenChange: p,
      onOpenToggle: f.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: /* @__PURE__ */ d.jsx(C0, { ...c, open: u, onOpenChange: p, dir: r, modal: s, children: t })
    }
  );
};
bi.displayName = vo;
var ou = "DropdownMenuTrigger", yi = f.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, disabled: r = !1, ...o } = e, a = ru(ou, t), i = ze(t);
    return /* @__PURE__ */ d.jsx(k0, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
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
        ref: Xn(n, a.triggerRef),
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
yi.displayName = ou;
var z0 = "DropdownMenuPortal", xo = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = ze(n);
  return /* @__PURE__ */ d.jsx(S0, { ...r, ...t });
};
xo.displayName = z0;
var au = "DropdownMenuContent", wi = f.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = ru(au, t), a = ze(t), i = f.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      E0,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: n,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (s) => {
          i.current || o.triggerRef.current?.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: X(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
          (!o.modal || u) && (i.current = !0);
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
wi.displayName = au;
var $0 = "DropdownMenuGroup", iu = f.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = ze(t);
    return /* @__PURE__ */ d.jsx(_0, { ...o, ...r, ref: n });
  }
);
iu.displayName = $0;
var B0 = "DropdownMenuLabel", su = f.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = ze(t);
    return /* @__PURE__ */ d.jsx(M0, { ...o, ...r, ref: n });
  }
);
su.displayName = B0;
var V0 = "DropdownMenuItem", Ci = f.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = ze(t);
    return /* @__PURE__ */ d.jsx(D0, { ...o, ...r, ref: n });
  }
);
Ci.displayName = V0;
var H0 = "DropdownMenuCheckboxItem", cu = f.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ze(t);
  return /* @__PURE__ */ d.jsx(O0, { ...o, ...r, ref: n });
});
cu.displayName = H0;
var Y0 = "DropdownMenuRadioGroup", lu = f.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ze(t);
  return /* @__PURE__ */ d.jsx(P0, { ...o, ...r, ref: n });
});
lu.displayName = Y0;
var U0 = "DropdownMenuRadioItem", du = f.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ze(t);
  return /* @__PURE__ */ d.jsx(R0, { ...o, ...r, ref: n });
});
du.displayName = U0;
var G0 = "DropdownMenuItemIndicator", ki = f.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ze(t);
  return /* @__PURE__ */ d.jsx(j0, { ...o, ...r, ref: n });
});
ki.displayName = G0;
var q0 = "DropdownMenuSeparator", uu = f.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ze(t);
  return /* @__PURE__ */ d.jsx(T0, { ...o, ...r, ref: n });
});
uu.displayName = q0;
var K0 = "DropdownMenuArrow", Z0 = f.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = ze(t);
    return /* @__PURE__ */ d.jsx(N0, { ...o, ...r, ref: n });
  }
);
Z0.displayName = K0;
var X0 = (e) => {
  const { __scopeDropdownMenu: n, children: t, open: r, onOpenChange: o, defaultOpen: a } = e, i = ze(n), [s, c] = Tt({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ d.jsx(A0, { ...i, open: s, onOpenChange: c, children: t });
}, J0 = "DropdownMenuSubTrigger", pu = f.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ze(t);
  return /* @__PURE__ */ d.jsx(I0, { ...o, ...r, ref: n });
});
pu.displayName = J0;
var Q0 = "DropdownMenuSubContent", fu = f.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = ze(t);
  return /* @__PURE__ */ d.jsx(
    F0,
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
fu.displayName = Q0;
var ew = bi, tw = yi, nw = xo, rw = wi, ow = Ci;
function _k({ ...e }) {
  return /* @__PURE__ */ d.jsx(bi, { "data-slot": "dropdown-menu", ...e });
}
function Mk({ ...e }) {
  return /* @__PURE__ */ d.jsx(xo, { "data-slot": "dropdown-menu-portal", ...e });
}
function Dk({ ...e }) {
  return /* @__PURE__ */ d.jsx(yi, { "data-slot": "dropdown-menu-trigger", ...e });
}
function Ok({
  className: e,
  align: n = "start",
  sideOffset: t = 4,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(xo, { children: /* @__PURE__ */ d.jsx(
    wi,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      align: n,
      className: j(
        "z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-2xl bg-white p-1 text-popover-foreground shadow-dropdown duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...r
    }
  ) });
}
function Pk({ ...e }) {
  return /* @__PURE__ */ d.jsx(iu, { "data-slot": "dropdown-menu-group", ...e });
}
function Rk({
  className: e,
  inset: n,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    Ci,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": n,
      "data-variant": t,
      className: j(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        e
      ),
      ...r
    }
  );
}
function jk({
  className: e,
  children: n,
  checked: t,
  inset: r,
  ...o
}) {
  return /* @__PURE__ */ d.jsxs(
    cu,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      "data-inset": r,
      className: j(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: t,
      ...o,
      children: [
        /* @__PURE__ */ d.jsx(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-checkbox-item-indicator",
            children: /* @__PURE__ */ d.jsx(ki, { children: /* @__PURE__ */ d.jsx(nr, {}) })
          }
        ),
        n
      ]
    }
  );
}
function Tk({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(lu, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function Nk({
  className: e,
  children: n,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    du,
    {
      "data-slot": "dropdown-menu-radio-item",
      "data-inset": t,
      className: j(
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
            children: /* @__PURE__ */ d.jsx(ki, { children: /* @__PURE__ */ d.jsx(nr, {}) })
          }
        ),
        n
      ]
    }
  );
}
function Ak({
  className: e,
  inset: n,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    su,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": n,
      className: j(
        "px-7 py-4 text-base leading-5 font-manrope font-semibold text-gray-900 data-inset:pl-7",
        e
      ),
      ...t
    }
  );
}
function Ik({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    uu,
    {
      "data-slot": "dropdown-menu-separator",
      className: j("-mx-1 my-1 h-px bg-gray-50", e),
      ...n
    }
  );
}
function Fk({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: j(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        e
      ),
      ...n
    }
  );
}
function Lk({ ...e }) {
  return /* @__PURE__ */ d.jsx(X0, { "data-slot": "dropdown-menu-sub", ...e });
}
function Wk({
  className: e,
  inset: n,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    pu,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": n,
      className: j(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ d.jsx(ro, { className: "cn-rtl-flip ml-auto" })
      ]
    }
  );
}
function zk({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    fu,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: j(
        "z-50 min-w-24 origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...n
    }
  );
}
var aw = (e) => e.type === "checkbox", $n = (e) => e instanceof Date, Si = (e) => e == null;
const mu = (e) => typeof e == "object";
var Qt = (e) => !Si(e) && !Array.isArray(e) && mu(e) && !$n(e), iw = (e) => Qt(e) && e.target ? aw(e.target) ? e.target.checked : e.target.value : e, sw = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, cw = (e, n) => e.has(sw(n)), lw = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return Qt(n) && n.hasOwnProperty("isPrototypeOf");
}, dw = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function hu(e) {
  let n;
  const t = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    n = new Date(e);
  else if (!(dw && (e instanceof Blob || r)) && (t || Qt(e)))
    if (n = t ? [] : Object.create(Object.getPrototypeOf(e)), !t && !lw(e))
      n = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (n[o] = hu(e[o]));
  else
    return e;
  return n;
}
var gu = (e) => /^\w*$/.test(e), ba = (e) => e === void 0, uw = (e) => Array.isArray(e) ? e.filter(Boolean) : [], vu = (e) => uw(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ve = (e, n, t) => {
  if (!n || !Qt(e))
    return t;
  const r = (gu(n) ? [n] : vu(n)).reduce((o, a) => Si(o) ? o : o[a], e);
  return ba(r) || r === e ? ba(e[n]) ? t : e[n] : r;
}, Go = (e) => typeof e == "boolean", Ms = (e, n, t) => {
  let r = -1;
  const o = gu(n) ? [n] : vu(n), a = o.length, i = a - 1;
  for (; ++r < a; ) {
    const s = o[r];
    let c = t;
    if (r !== i) {
      const l = e[s];
      c = Qt(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = c, e = e[s];
  }
};
const Ds = {
  BLUR: "blur",
  CHANGE: "change"
}, Os = {
  all: "all"
}, Ei = N.createContext(null);
Ei.displayName = "HookFormContext";
const bo = () => N.useContext(Ei), pw = (e) => {
  const { children: n, ...t } = e;
  return N.createElement(Ei.Provider, { value: t }, n);
};
var fw = (e, n, t, r = !0) => {
  const o = {
    defaultValues: n._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const i = a;
        return n._proxyFormState[i] !== Os.all && (n._proxyFormState[i] = !r || Os.all), t && (t[i] = !0), e[i];
      }
    });
  return o;
};
const xu = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
function bu(e) {
  const n = bo(), { control: t = n.control, disabled: r, name: o, exact: a } = e || {}, [i, s] = N.useState(t._formState), c = N.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return xu(() => t._subscribe({
    name: o,
    formState: c.current,
    exact: a,
    callback: (l) => {
      !r && s({
        ...t._formState,
        ...l
      });
    }
  }), [o, r, a]), N.useEffect(() => {
    c.current.isValid && t._setValid(!0);
  }, [t]), N.useMemo(() => fw(i, t, c.current, !1), [i, t]);
}
var mw = (e) => typeof e == "string", Ps = (e, n, t, r, o) => mw(e) ? Ve(t, e, o) : Array.isArray(e) ? e.map((a) => Ve(t, a)) : t, Rs = (e) => Si(e) || !mu(e);
function Rr(e, n, t = /* @__PURE__ */ new WeakSet()) {
  if (Rs(e) || Rs(n))
    return Object.is(e, n);
  if ($n(e) && $n(n))
    return e.getTime() === n.getTime();
  const r = Object.keys(e), o = Object.keys(n);
  if (r.length !== o.length)
    return !1;
  if (t.has(e) || t.has(n))
    return !0;
  t.add(e), t.add(n);
  for (const a of r) {
    const i = e[a];
    if (!o.includes(a))
      return !1;
    if (a !== "ref") {
      const s = n[a];
      if ($n(i) && $n(s) || Qt(i) && Qt(s) || Array.isArray(i) && Array.isArray(s) ? !Rr(i, s, t) : !Object.is(i, s))
        return !1;
    }
  }
  return !0;
}
function hw(e) {
  const n = bo(), { control: t = n.control, name: r, defaultValue: o, disabled: a, exact: i, compute: s } = e || {}, c = N.useRef(o), l = N.useRef(s), u = N.useRef(void 0), p = N.useRef(t), m = N.useRef(r);
  l.current = s;
  const [g, x] = N.useState(() => {
    const S = t._getWatch(r, c.current);
    return l.current ? l.current(S) : S;
  }), h = N.useCallback((S) => {
    const y = Ps(r, t._names, S || t._formValues, !1, c.current);
    return l.current ? l.current(y) : y;
  }, [t._formValues, t._names, r]), v = N.useCallback((S) => {
    if (!a) {
      const y = Ps(r, t._names, S || t._formValues, !1, c.current);
      if (l.current) {
        const E = l.current(y);
        Rr(E, u.current) || (x(E), u.current = E);
      } else
        x(y);
    }
  }, [t._formValues, t._names, a, r]);
  xu(() => ((p.current !== t || !Rr(m.current, r)) && (p.current = t, m.current = r, v()), t._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: i,
    callback: (S) => {
      v(S.values);
    }
  })), [t, i, r, v]), N.useEffect(() => t._removeUnmounted());
  const w = p.current !== t, b = m.current, C = N.useMemo(() => {
    if (a)
      return null;
    const S = !w && !Rr(b, r);
    return w || S ? h() : null;
  }, [a, w, r, b, h]);
  return C !== null ? C : g;
}
function gw(e) {
  const n = bo(), { name: t, disabled: r, control: o = n.control, shouldUnregister: a, defaultValue: i, exact: s = !0 } = e, c = cw(o._names.array, t), l = N.useMemo(() => Ve(o._formValues, t, Ve(o._defaultValues, t, i)), [o, t, i]), u = hw({
    control: o,
    name: t,
    defaultValue: l,
    exact: s
  }), p = bu({
    control: o,
    name: t,
    exact: s
  }), m = N.useRef(e), g = N.useRef(void 0), x = N.useRef(o.register(t, {
    ...e.rules,
    value: u,
    ...Go(e.disabled) ? { disabled: e.disabled } : {}
  }));
  m.current = e;
  const h = N.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Ve(p.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Ve(p.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Ve(p.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Ve(p.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => Ve(p.errors, t)
    }
  }), [p, t]), v = N.useCallback((S) => x.current.onChange({
    target: {
      value: iw(S),
      name: t
    },
    type: Ds.CHANGE
  }), [t]), w = N.useCallback(() => x.current.onBlur({
    target: {
      value: Ve(o._formValues, t),
      name: t
    },
    type: Ds.BLUR
  }), [t, o._formValues]), b = N.useCallback((S) => {
    const y = Ve(o._fields, t);
    y && S && (y._f.ref = {
      focus: () => S.focus && S.focus(),
      select: () => S.select && S.select(),
      setCustomValidity: (E) => S.setCustomValidity(E),
      reportValidity: () => S.reportValidity()
    });
  }, [o._fields, t]), C = N.useMemo(() => ({
    name: t,
    value: u,
    ...Go(r) || p.disabled ? { disabled: p.disabled || r } : {},
    onChange: v,
    onBlur: w,
    ref: b
  }), [t, r, p.disabled, v, w, b, u]);
  return N.useEffect(() => {
    const S = o._options.shouldUnregister || a, y = g.current;
    y && y !== t && !c && o.unregister(y), o.register(t, {
      ...m.current.rules,
      ...Go(m.current.disabled) ? { disabled: m.current.disabled } : {}
    });
    const E = (_, P) => {
      const A = Ve(o._fields, _);
      A && A._f && (A._f.mount = P);
    };
    if (E(t, !0), S) {
      const _ = hu(Ve(o._options.defaultValues, t, m.current.defaultValue));
      Ms(o._defaultValues, t, _), ba(Ve(o._formValues, t)) && Ms(o._formValues, t, _);
    }
    return !c && o.register(t), g.current = t, () => {
      (c ? S && !o._state.action : S) ? o.unregister(t) : E(t, !1);
    };
  }, [t, o, c, a]), N.useEffect(() => {
    o._setDisabledField({
      disabled: r,
      name: t
    });
  }, [r, t, o]), N.useMemo(() => ({
    field: C,
    formState: p,
    fieldState: h
  }), [C, p, h]);
}
const vw = (e) => e.render(gw(e)), yu = Kr(
  ({ className: e, children: n, required: t, ...r }, o) => /* @__PURE__ */ d.jsxs(
    "label",
    {
      ref: o,
      "data-slot": "label",
      className: j("font-manrope font-medium text-sm text-gray-700", e),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx("span", { children: n }),
        t ? /* @__PURE__ */ d.jsx("span", { className: "text-base font-normal text-bright-red-600 ml-1 leading-[22px]", children: "*" }) : null
      ]
    }
  )
);
yu.displayName = "Label";
const $k = pw, wu = ja({}), Bk = ({
  ...e
}) => /* @__PURE__ */ d.jsx(wu.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d.jsx(vw, { ...e }) }), yo = () => {
  const e = jr(wu), n = jr(Cu), { getFieldState: t } = bo(), r = bu({ name: e.name }), o = t(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = n;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, Cu = ja({});
function Vk({ className: e, ...n }) {
  const t = hc();
  return /* @__PURE__ */ d.jsx(Cu.Provider, { value: { id: t }, children: /* @__PURE__ */ d.jsx("div", { "data-slot": "form-item", className: j("grid gap-2", e), ...n }) });
}
function Hk({ className: e, ...n }) {
  const { error: t, formItemId: r } = yo();
  return /* @__PURE__ */ d.jsx(
    yu,
    {
      "data-slot": "form-label",
      "data-error": !!t,
      className: e,
      htmlFor: r,
      ...n
    }
  );
}
function Yk({ ...e }) {
  const { error: n, formItemId: t, formDescriptionId: r, formMessageId: o } = yo();
  return /* @__PURE__ */ d.jsx(
    to,
    {
      "data-slot": "form-control",
      id: t,
      "aria-describedby": n ? `${r} ${o}` : `${r}`,
      "aria-invalid": !!n,
      ...e
    }
  );
}
function Uk({ className: e, ...n }) {
  const { formDescriptionId: t } = yo();
  return /* @__PURE__ */ d.jsx(
    "p",
    {
      "data-slot": "form-description",
      id: t,
      className: j("text-muted-foreground text-sm", e),
      ...n
    }
  );
}
function Gk({ className: e, ...n }) {
  const { error: t, formMessageId: r } = yo(), o = t ? String(t?.message ?? "") : n.children;
  return o ? /* @__PURE__ */ d.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: j("text-bright-red-600 text-sm", e),
      ...n,
      children: o
    }
  ) : null;
}
function Ie(e, n = {}) {
  const t = typeof e == "number" ? `${e}` : e ?? "24", r = typeof n["aria-label"] == "string";
  return {
    width: t,
    height: t,
    role: r ? "img" : "presentation",
    "aria-hidden": r ? void 0 : !0,
    ...n
  };
}
function xw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: j("inline-block", n), ...r, children: [
    /* @__PURE__ */ d.jsx("circle", { cx: "12.6457", cy: "4.35422", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ d.jsx("circle", { cx: "10.0876", cy: "9.80881", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ d.jsx("circle", { cx: "3.35422", cy: "11.0876", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ d.jsx("circle", { cx: "5.46091", cy: "5.63328", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ d.jsx("path", { d: "M5.19745 6.83691L3.91846 10.0344", stroke: "currentColor" }),
    /* @__PURE__ */ d.jsx("path", { d: "M12.232 5.55786L10.3135 8.75533", stroke: "currentColor" }),
    /* @__PURE__ */ d.jsx("path", { d: "M6.47645 6.83691L9.03442 8.7554", stroke: "currentColor" })
  ] });
}
function bw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", className: j("inline-block", n), ...r, children: [
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
function yw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: j("inline-block", n),
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
function ww({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: j("inline-block", n),
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
function Cw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: j("inline-block", n), ...r, children: /* @__PURE__ */ d.jsx(
    "path",
    {
      d: "M10.6517 3.73292C10.3353 3.1997 9.64138 3.1997 9.32503 3.73292L6.86562 7.83985C6.68193 8.13482 6.36558 8.29365 6.04922 8.21424L2.62035 7.46546C2.03866 7.34067 1.54882 7.93061 1.69169 8.56594L3.3449 15.6112C3.43675 15.9856 3.72249 16.2466 4.06946 16.2693C4.06946 16.2693 5.34508 16.6663 9.99856 16.6663C14.652 16.6663 15.9277 16.2693 15.9277 16.2693C16.1828 16.2012 16.5604 15.9743 16.6522 15.6112L18.3054 8.56594C18.4585 7.93061 17.9584 7.34067 17.3768 7.46546L13.9479 8.21424C13.6315 8.28231 13.305 8.13482 13.1315 7.83985L10.6517 3.73292Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeMiterlimit: "10"
    }
  ) });
}
function kw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: j("inline-block", n),
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
function Sw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: j("inline-block", n),
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
function Ew({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: j("inline-block", n),
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
function _w({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: j("inline-block", n), ...r, children: [
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
function Mw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: j("inline-block", n), ...r, children: [
    /* @__PURE__ */ d.jsx("circle", { cx: "8", cy: "8", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ d.jsx("circle", { cx: "8", cy: "8", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ d.jsx("circle", { cx: "8", cy: "8", r: "5.5", stroke: "currentColor" })
  ] });
}
function Dw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: j("inline-block", n), ...r, children: /* @__PURE__ */ d.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM7.50001 5.41667C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H7.50001V5.41667ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function Ow({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: j("inline-block", n), ...r, children: /* @__PURE__ */ d.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667H7.50001C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function Pw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: j("inline-block", n),
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
function Rw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: j("inline-block", n),
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
function jw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: j("inline-block", n),
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
function Tw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: j("inline-block", n),
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
function Nw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: j("inline-block", n),
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
function Aw({ size: e, className: n, ...t }) {
  const r = Ie(e, t);
  return /* @__PURE__ */ d.jsx("svg", { viewBox: "0 0 48 48", fill: "none", className: j("inline-block", n), ...r, children: /* @__PURE__ */ d.jsx(
    "path",
    {
      d: "M30 16V32H10V16H30ZM32 12H8C6.9 12 6 12.9 6 14V34C6 35.1 6.9 36 8 36H32C33.1 36 34 35.1 34 34V27L42 35V13L34 21V14C34 12.9 33.1 12 32 12Z",
      fill: "currentColor"
    }
  ) });
}
const Iw = {
  analytics: xw,
  announcement: bw,
  church: yw,
  class: ww,
  crown: Cw,
  event: kw,
  gift: Sw,
  home: Ew,
  list: _w,
  livestream: Mw,
  "lock-closed": Dw,
  "lock-open": Ow,
  ministry: Pw,
  podcast: Rw,
  series: jw,
  sermon: Tw,
  subscription: Nw,
  video: Aw
};
function qk({ name: e, ...n }) {
  const t = Iw[e];
  return /* @__PURE__ */ d.jsx(t, { ...n });
}
var Cr = { exports: {} }, kr = { exports: {} }, be = {};
var js;
function Fw() {
  if (js) return be;
  js = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function C(y) {
    if (typeof y == "object" && y !== null) {
      var E = y.$$typeof;
      switch (E) {
        case n:
          switch (y = y.type, y) {
            case c:
            case l:
            case r:
            case a:
            case o:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case u:
                case x:
                case g:
                case i:
                  return y;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  function S(y) {
    return C(y) === l;
  }
  return be.AsyncMode = c, be.ConcurrentMode = l, be.ContextConsumer = s, be.ContextProvider = i, be.Element = n, be.ForwardRef = u, be.Fragment = r, be.Lazy = x, be.Memo = g, be.Portal = t, be.Profiler = a, be.StrictMode = o, be.Suspense = p, be.isAsyncMode = function(y) {
    return S(y) || C(y) === c;
  }, be.isConcurrentMode = S, be.isContextConsumer = function(y) {
    return C(y) === s;
  }, be.isContextProvider = function(y) {
    return C(y) === i;
  }, be.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === n;
  }, be.isForwardRef = function(y) {
    return C(y) === u;
  }, be.isFragment = function(y) {
    return C(y) === r;
  }, be.isLazy = function(y) {
    return C(y) === x;
  }, be.isMemo = function(y) {
    return C(y) === g;
  }, be.isPortal = function(y) {
    return C(y) === t;
  }, be.isProfiler = function(y) {
    return C(y) === a;
  }, be.isStrictMode = function(y) {
    return C(y) === o;
  }, be.isSuspense = function(y) {
    return C(y) === p;
  }, be.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === l || y === a || y === o || y === p || y === m || typeof y == "object" && y !== null && (y.$$typeof === x || y.$$typeof === g || y.$$typeof === i || y.$$typeof === s || y.$$typeof === u || y.$$typeof === v || y.$$typeof === w || y.$$typeof === b || y.$$typeof === h);
  }, be.typeOf = C, be;
}
var ye = {};
var Ts;
function Lw() {
  return Ts || (Ts = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function C(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === r || I === l || I === a || I === o || I === p || I === m || typeof I == "object" && I !== null && (I.$$typeof === x || I.$$typeof === g || I.$$typeof === i || I.$$typeof === s || I.$$typeof === u || I.$$typeof === v || I.$$typeof === w || I.$$typeof === b || I.$$typeof === h);
    }
    function S(I) {
      if (typeof I == "object" && I !== null) {
        var ve = I.$$typeof;
        switch (ve) {
          case n:
            var ne = I.type;
            switch (ne) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case p:
                return ne;
              default:
                var ie = ne && ne.$$typeof;
                switch (ie) {
                  case s:
                  case u:
                  case x:
                  case g:
                  case i:
                    return ie;
                  default:
                    return ve;
                }
            }
          case t:
            return ve;
        }
      }
    }
    var y = c, E = l, _ = s, P = i, A = n, L = u, q = r, G = x, H = g, z = t, Z = a, $ = o, Q = p, D = !1;
    function R(I) {
      return D || (D = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(I) || S(I) === c;
    }
    function M(I) {
      return S(I) === l;
    }
    function k(I) {
      return S(I) === s;
    }
    function T(I) {
      return S(I) === i;
    }
    function W(I) {
      return typeof I == "object" && I !== null && I.$$typeof === n;
    }
    function F(I) {
      return S(I) === u;
    }
    function K(I) {
      return S(I) === r;
    }
    function Y(I) {
      return S(I) === x;
    }
    function O(I) {
      return S(I) === g;
    }
    function U(I) {
      return S(I) === t;
    }
    function J(I) {
      return S(I) === a;
    }
    function B(I) {
      return S(I) === o;
    }
    function ae(I) {
      return S(I) === p;
    }
    ye.AsyncMode = y, ye.ConcurrentMode = E, ye.ContextConsumer = _, ye.ContextProvider = P, ye.Element = A, ye.ForwardRef = L, ye.Fragment = q, ye.Lazy = G, ye.Memo = H, ye.Portal = z, ye.Profiler = Z, ye.StrictMode = $, ye.Suspense = Q, ye.isAsyncMode = R, ye.isConcurrentMode = M, ye.isContextConsumer = k, ye.isContextProvider = T, ye.isElement = W, ye.isForwardRef = F, ye.isFragment = K, ye.isLazy = Y, ye.isMemo = O, ye.isPortal = U, ye.isProfiler = J, ye.isStrictMode = B, ye.isSuspense = ae, ye.isValidElementType = C, ye.typeOf = S;
  })()), ye;
}
var Ns;
function ku() {
  return Ns || (Ns = 1, process.env.NODE_ENV === "production" ? kr.exports = Fw() : kr.exports = Lw()), kr.exports;
}
var qo, As;
function Ww() {
  if (As) return qo;
  As = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
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
      var c = Object.getOwnPropertyNames(i).map(function(u) {
        return i[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        l[u] = u;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return qo = o() ? Object.assign : function(a, i) {
    for (var s, c = r(a), l, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var p in s)
        n.call(s, p) && (c[p] = s[p]);
      if (e) {
        l = e(s);
        for (var m = 0; m < l.length; m++)
          t.call(s, l[m]) && (c[l[m]] = s[l[m]]);
      }
    }
    return c;
  }, qo;
}
var Ko, Is;
function _i() {
  if (Is) return Ko;
  Is = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ko = e, Ko;
}
var Zo, Fs;
function Su() {
  return Fs || (Fs = 1, Zo = Function.call.bind(Object.prototype.hasOwnProperty)), Zo;
}
var Xo, Ls;
function zw() {
  if (Ls) return Xo;
  Ls = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ _i(), t = {}, r = /* @__PURE__ */ Su();
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
      for (var u in a)
        if (r(a, u)) {
          var p;
          try {
            if (typeof a[u] != "function") {
              var m = Error(
                (c || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = a[u](i, u, c, s, null, n);
          } catch (x) {
            p = x;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var g = l ? l() : "";
            e(
              "Failed " + s + " type: " + p.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Xo = o, Xo;
}
var Jo, Ws;
function $w() {
  if (Ws) return Jo;
  Ws = 1;
  var e = ku(), n = Ww(), t = /* @__PURE__ */ _i(), r = /* @__PURE__ */ Su(), o = /* @__PURE__ */ zw(), a = function() {
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
  return Jo = function(s, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function p(M) {
      var k = M && (l && M[l] || M[u]);
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
      any: b(),
      arrayOf: C,
      element: S(),
      elementType: y(),
      instanceOf: E,
      node: L(),
      objectOf: P,
      oneOf: _,
      oneOfType: A,
      shape: G,
      exact: H
    };
    function x(M, k) {
      return M === k ? M !== 0 || 1 / M === 1 / k : M !== M && k !== k;
    }
    function h(M, k) {
      this.message = M, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function v(M) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, T = 0;
      function W(K, Y, O, U, J, B, ae) {
        if (U = U || m, B = B || O, ae !== t) {
          if (c) {
            var I = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw I.name = "Invariant Violation", I;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = U + ":" + O;
            !k[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            T < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + B + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[ve] = !0, T++);
          }
        }
        return Y[O] == null ? K ? Y[O] === null ? new h("The " + J + " `" + B + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new h("The " + J + " `" + B + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : M(Y, O, U, J, B);
      }
      var F = W.bind(null, !1);
      return F.isRequired = W.bind(null, !0), F;
    }
    function w(M) {
      function k(T, W, F, K, Y, O) {
        var U = T[W], J = $(U);
        if (J !== M) {
          var B = Q(U);
          return new h(
            "Invalid " + K + " `" + Y + "` of type " + ("`" + B + "` supplied to `" + F + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return v(k);
    }
    function b() {
      return v(i);
    }
    function C(M) {
      function k(T, W, F, K, Y) {
        if (typeof M != "function")
          return new h("Property `" + Y + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var O = T[W];
        if (!Array.isArray(O)) {
          var U = $(O);
          return new h("Invalid " + K + " `" + Y + "` of type " + ("`" + U + "` supplied to `" + F + "`, expected an array."));
        }
        for (var J = 0; J < O.length; J++) {
          var B = M(O, J, F, K, Y + "[" + J + "]", t);
          if (B instanceof Error)
            return B;
        }
        return null;
      }
      return v(k);
    }
    function S() {
      function M(k, T, W, F, K) {
        var Y = k[T];
        if (!s(Y)) {
          var O = $(Y);
          return new h("Invalid " + F + " `" + K + "` of type " + ("`" + O + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(M);
    }
    function y() {
      function M(k, T, W, F, K) {
        var Y = k[T];
        if (!e.isValidElementType(Y)) {
          var O = $(Y);
          return new h("Invalid " + F + " `" + K + "` of type " + ("`" + O + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(M);
    }
    function E(M) {
      function k(T, W, F, K, Y) {
        if (!(T[W] instanceof M)) {
          var O = M.name || m, U = R(T[W]);
          return new h("Invalid " + K + " `" + Y + "` of type " + ("`" + U + "` supplied to `" + F + "`, expected ") + ("instance of `" + O + "`."));
        }
        return null;
      }
      return v(k);
    }
    function _(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function k(T, W, F, K, Y) {
        for (var O = T[W], U = 0; U < M.length; U++)
          if (x(O, M[U]))
            return null;
        var J = JSON.stringify(M, function(ae, I) {
          var ve = Q(I);
          return ve === "symbol" ? String(I) : I;
        });
        return new h("Invalid " + K + " `" + Y + "` of value `" + String(O) + "` " + ("supplied to `" + F + "`, expected one of " + J + "."));
      }
      return v(k);
    }
    function P(M) {
      function k(T, W, F, K, Y) {
        if (typeof M != "function")
          return new h("Property `" + Y + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var O = T[W], U = $(O);
        if (U !== "object")
          return new h("Invalid " + K + " `" + Y + "` of type " + ("`" + U + "` supplied to `" + F + "`, expected an object."));
        for (var J in O)
          if (r(O, J)) {
            var B = M(O, J, F, K, Y + "." + J, t);
            if (B instanceof Error)
              return B;
          }
        return null;
      }
      return v(k);
    }
    function A(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var k = 0; k < M.length; k++) {
        var T = M[k];
        if (typeof T != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + D(T) + " at index " + k + "."
          ), i;
      }
      function W(F, K, Y, O, U) {
        for (var J = [], B = 0; B < M.length; B++) {
          var ae = M[B], I = ae(F, K, Y, O, U, t);
          if (I == null)
            return null;
          I.data && r(I.data, "expectedType") && J.push(I.data.expectedType);
        }
        var ve = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new h("Invalid " + O + " `" + U + "` supplied to " + ("`" + Y + "`" + ve + "."));
      }
      return v(W);
    }
    function L() {
      function M(k, T, W, F, K) {
        return z(k[T]) ? null : new h("Invalid " + F + " `" + K + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return v(M);
    }
    function q(M, k, T, W, F) {
      return new h(
        (M || "React class") + ": " + k + " type `" + T + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function G(M) {
      function k(T, W, F, K, Y) {
        var O = T[W], U = $(O);
        if (U !== "object")
          return new h("Invalid " + K + " `" + Y + "` of type `" + U + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var J in M) {
          var B = M[J];
          if (typeof B != "function")
            return q(F, K, Y, J, Q(B));
          var ae = B(O, J, F, K, Y + "." + J, t);
          if (ae)
            return ae;
        }
        return null;
      }
      return v(k);
    }
    function H(M) {
      function k(T, W, F, K, Y) {
        var O = T[W], U = $(O);
        if (U !== "object")
          return new h("Invalid " + K + " `" + Y + "` of type `" + U + "` " + ("supplied to `" + F + "`, expected `object`."));
        var J = n({}, T[W], M);
        for (var B in J) {
          var ae = M[B];
          if (r(M, B) && typeof ae != "function")
            return q(F, K, Y, B, Q(ae));
          if (!ae)
            return new h(
              "Invalid " + K + " `" + Y + "` key `" + B + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(T[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var I = ae(O, B, F, K, Y + "." + B, t);
          if (I)
            return I;
        }
        return null;
      }
      return v(k);
    }
    function z(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(z);
          if (M === null || s(M))
            return !0;
          var k = p(M);
          if (k) {
            var T = k.call(M), W;
            if (k !== M.entries) {
              for (; !(W = T.next()).done; )
                if (!z(W.value))
                  return !1;
            } else
              for (; !(W = T.next()).done; ) {
                var F = W.value;
                if (F && !z(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Z(M, k) {
      return M === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function $(M) {
      var k = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : Z(k, M) ? "symbol" : k;
    }
    function Q(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var k = $(M);
      if (k === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function D(M) {
      var k = Q(M);
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
    function R(M) {
      return !M.constructor || !M.constructor.name ? m : M.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, Jo;
}
var Qo, zs;
function Bw() {
  if (zs) return Qo;
  zs = 1;
  var e = /* @__PURE__ */ _i();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, Qo = function() {
    function r(i, s, c, l, u, p) {
      if (p !== e) {
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
      checkPropTypes: t,
      resetWarningCache: n
    };
    return a.PropTypes = a, a;
  }, Qo;
}
var $s;
function Vw() {
  if ($s) return Cr.exports;
  if ($s = 1, process.env.NODE_ENV !== "production") {
    var e = ku(), n = !0;
    Cr.exports = /* @__PURE__ */ $w()(e.isElement, n);
  } else
    Cr.exports = /* @__PURE__ */ Bw()();
  return Cr.exports;
}
var Hw = /* @__PURE__ */ Vw();
const Se = /* @__PURE__ */ Ta(Hw), Yw = /* @__PURE__ */ new Map([
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
function yn(e, n, t) {
  const r = Uw(e), { webkitRelativePath: o } = e, a = typeof n == "string" ? n : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && Bs(r, "path", a), Bs(r, "relativePath", a), r;
}
function Uw(e) {
  const { name: n } = e;
  if (n && n.lastIndexOf(".") !== -1 && !e.type) {
    const r = n.split(".").pop().toLowerCase(), o = Yw.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Bs(e, n, t) {
  Object.defineProperty(e, n, {
    value: t,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const Gw = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function qw(e) {
  return nn(this, void 0, void 0, function* () {
    return Br(e) && Kw(e.dataTransfer) ? Qw(e.dataTransfer, e.type) : Zw(e) ? Xw(e) : Array.isArray(e) && e.every((n) => "getFile" in n && typeof n.getFile == "function") ? Jw(e) : [];
  });
}
function Kw(e) {
  return Br(e);
}
function Zw(e) {
  return Br(e) && Br(e.target);
}
function Br(e) {
  return typeof e == "object" && e !== null;
}
function Xw(e) {
  return ya(e.target.files).map((n) => yn(n));
}
function Jw(e) {
  return nn(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((t) => t.getFile()))).map((t) => yn(t));
  });
}
function Qw(e, n) {
  return nn(this, void 0, void 0, function* () {
    if (e.items) {
      const t = ya(e.items).filter((o) => o.kind === "file");
      if (n !== "drop")
        return t;
      const r = yield Promise.all(t.map(e1));
      return Vs(Eu(r));
    }
    return Vs(ya(e.files).map((t) => yn(t)));
  });
}
function Vs(e) {
  return e.filter((n) => Gw.indexOf(n.name) === -1);
}
function ya(e) {
  if (e === null)
    return [];
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    n.push(r);
  }
  return n;
}
function e1(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Hs(e);
  const n = e.webkitGetAsEntry();
  return n && n.isDirectory ? _u(n) : Hs(e, n);
}
function Eu(e) {
  return e.reduce((n, t) => [
    ...n,
    ...Array.isArray(t) ? Eu(t) : [t]
  ], []);
}
function Hs(e, n) {
  return nn(this, void 0, void 0, function* () {
    var t;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const a = yield e.getAsFileSystemHandle();
      if (a === null)
        throw new Error(`${e} is not a File`);
      if (a !== void 0) {
        const i = yield a.getFile();
        return i.handle = a, yn(i);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return yn(r, (t = n?.fullPath) !== null && t !== void 0 ? t : void 0);
  });
}
function t1(e) {
  return nn(this, void 0, void 0, function* () {
    return e.isDirectory ? _u(e) : n1(e);
  });
}
function _u(e) {
  const n = e.createReader();
  return new Promise((t, r) => {
    const o = [];
    function a() {
      n.readEntries((i) => nn(this, void 0, void 0, function* () {
        if (i.length) {
          const s = Promise.all(i.map(t1));
          o.push(s), a();
        } else
          try {
            const s = yield Promise.all(o);
            t(s);
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
function n1(e) {
  return nn(this, void 0, void 0, function* () {
    return new Promise((n, t) => {
      e.file((r) => {
        const o = yn(r, e.fullPath);
        n(o);
      }, (r) => {
        t(r);
      });
    });
  });
}
var Sr = {}, Ys;
function r1() {
  return Ys || (Ys = 1, Sr.__esModule = !0, Sr.default = function(e, n) {
    if (e && n) {
      var t = Array.isArray(n) ? n : n.split(",");
      if (t.length === 0)
        return !0;
      var r = e.name || "", o = (e.type || "").toLowerCase(), a = o.replace(/\/.*$/, "");
      return t.some(function(i) {
        var s = i.trim().toLowerCase();
        return s.charAt(0) === "." ? r.toLowerCase().endsWith(s) : s.endsWith("/*") ? a === s.replace(/\/.*$/, "") : o === s;
      });
    }
    return !0;
  }), Sr;
}
var o1 = r1();
const ea = /* @__PURE__ */ Ta(o1);
function Us(e) {
  return s1(e) || i1(e) || Du(e) || a1();
}
function a1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function s1(e) {
  if (Array.isArray(e)) return wa(e);
}
function Gs(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function qs(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Gs(Object(t), !0).forEach(function(r) {
      Mu(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Gs(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Mu(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Kn(e, n) {
  return d1(e) || l1(e, n) || Du(e, n) || c1();
}
function c1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Du(e, n) {
  if (e) {
    if (typeof e == "string") return wa(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return wa(e, n);
  }
}
function wa(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function l1(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], o = !0, a = !1, i, s;
    try {
      for (t = t.call(e); !(o = (i = t.next()).done) && (r.push(i.value), !(n && r.length === n)); o = !0)
        ;
    } catch (c) {
      a = !0, s = c;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw s;
      }
    }
    return r;
  }
}
function d1(e) {
  if (Array.isArray(e)) return e;
}
var u1 = typeof ea == "function" ? ea : ea.default, p1 = "file-invalid-type", f1 = "file-too-large", m1 = "file-too-small", h1 = "too-many-files", g1 = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = n.split(","), r = t.length > 1 ? "one of ".concat(t.join(", ")) : t[0];
  return {
    code: p1,
    message: "File type must be ".concat(r)
  };
}, Ks = function(n) {
  return {
    code: f1,
    message: "File is larger than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, Zs = function(n) {
  return {
    code: m1,
    message: "File is smaller than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, v1 = {
  code: h1,
  message: "Too many files"
};
function Ou(e, n) {
  var t = e.type === "application/x-moz-file" || u1(e, n);
  return [t, t ? null : g1(n)];
}
function Pu(e, n, t) {
  if (Gt(e.size))
    if (Gt(n) && Gt(t)) {
      if (e.size > t) return [!1, Ks(t)];
      if (e.size < n) return [!1, Zs(n)];
    } else {
      if (Gt(n) && e.size < n) return [!1, Zs(n)];
      if (Gt(t) && e.size > t) return [!1, Ks(t)];
    }
  return [!0, null];
}
function Gt(e) {
  return e != null;
}
function x1(e) {
  var n = e.files, t = e.accept, r = e.minSize, o = e.maxSize, a = e.multiple, i = e.maxFiles, s = e.validator;
  return !a && n.length > 1 || a && i >= 1 && n.length > i ? !1 : n.every(function(c) {
    var l = Ou(c, t), u = Kn(l, 1), p = u[0], m = Pu(c, r, o), g = Kn(m, 1), x = g[0], h = s ? s(c) : null;
    return p && x && !h;
  });
}
function Vr(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function Er(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(n) {
    return n === "Files" || n === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Xs(e) {
  e.preventDefault();
}
function b1(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function y1(e) {
  return e.indexOf("Edge/") !== -1;
}
function w1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return b1(e) || y1(e);
}
function pt() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return function(r) {
    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
      a[i - 1] = arguments[i];
    return n.some(function(s) {
      return !Vr(r) && s && s.apply(void 0, [r].concat(a)), Vr(r);
    });
  };
}
function C1() {
  return "showOpenFilePicker" in window;
}
function k1(e) {
  if (Gt(e)) {
    var n = Object.entries(e).filter(function(t) {
      var r = Kn(t, 2), o = r[0], a = r[1], i = !0;
      return Ru(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), i = !1), (!Array.isArray(a) || !a.every(ju)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), i = !1), i;
    }).reduce(function(t, r) {
      var o = Kn(r, 2), a = o[0], i = o[1];
      return qs(qs({}, t), {}, Mu({}, a, i));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: n
    }];
  }
  return e;
}
function S1(e) {
  if (Gt(e))
    return Object.entries(e).reduce(function(n, t) {
      var r = Kn(t, 2), o = r[0], a = r[1];
      return [].concat(Us(n), [o], Us(a));
    }, []).filter(function(n) {
      return Ru(n) || ju(n);
    }).join(",");
}
function E1(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function _1(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Ru(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function ju(e) {
  return /^.*\.[\w]+$/.test(e);
}
var M1 = ["children"], D1 = ["open"], O1 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], P1 = ["refKey", "onChange", "onClick"];
function R1(e) {
  return N1(e) || T1(e) || Tu(e) || j1();
}
function j1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function T1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function N1(e) {
  if (Array.isArray(e)) return Ca(e);
}
function ta(e, n) {
  return F1(e) || I1(e, n) || Tu(e, n) || A1();
}
function A1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tu(e, n) {
  if (e) {
    if (typeof e == "string") return Ca(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ca(e, n);
  }
}
function Ca(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function I1(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], o = !0, a = !1, i, s;
    try {
      for (t = t.call(e); !(o = (i = t.next()).done) && (r.push(i.value), !(n && r.length === n)); o = !0)
        ;
    } catch (c) {
      a = !0, s = c;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw s;
      }
    }
    return r;
  }
}
function F1(e) {
  if (Array.isArray(e)) return e;
}
function Js(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function De(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Js(Object(t), !0).forEach(function(r) {
      ka(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Js(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function ka(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Hr(e, n) {
  if (e == null) return {};
  var t = L1(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function L1(e, n) {
  if (e == null) return {};
  var t = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var Mi = /* @__PURE__ */ Kr(function(e, n) {
  var t = e.children, r = Hr(e, M1), o = Di(r), a = o.open, i = Hr(o, D1);
  return Rp(n, function() {
    return {
      open: a
    };
  }, [a]), /* @__PURE__ */ N.createElement(jp, null, t(De(De({}, i), {}, {
    open: a
  })));
});
Mi.displayName = "Dropzone";
var Nu = {
  disabled: !1,
  getFilesFromEvent: qw,
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
Mi.defaultProps = Nu;
Mi.propTypes = {
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
var Sa = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Di() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = De(De({}, Nu), e), t = n.accept, r = n.disabled, o = n.getFilesFromEvent, a = n.maxSize, i = n.minSize, s = n.multiple, c = n.maxFiles, l = n.onDragEnter, u = n.onDragLeave, p = n.onDragOver, m = n.onDrop, g = n.onDropAccepted, x = n.onDropRejected, h = n.onFileDialogCancel, v = n.onFileDialogOpen, w = n.useFsAccessApi, b = n.autoFocus, C = n.preventDropOnDocument, S = n.noClick, y = n.noKeyboard, E = n.noDrag, _ = n.noDragEventsBubbling, P = n.onError, A = n.validator, L = Be(function() {
    return S1(t);
  }, [t]), q = Be(function() {
    return k1(t);
  }, [t]), G = Be(function() {
    return typeof v == "function" ? v : Qs;
  }, [v]), H = Be(function() {
    return typeof h == "function" ? h : Qs;
  }, [h]), z = ht(null), Z = ht(null), $ = Pp(W1, Sa), Q = ta($, 2), D = Q[0], R = Q[1], M = D.isFocused, k = D.isFileDialogActive, T = ht(typeof window < "u" && window.isSecureContext && w && C1()), W = function() {
    !T.current && k && setTimeout(function() {
      if (Z.current) {
        var re = Z.current.files;
        re.length || (R({
          type: "closeDialog"
        }), H());
      }
    }, 300);
  };
  Kt(function() {
    return window.addEventListener("focus", W, !1), function() {
      window.removeEventListener("focus", W, !1);
    };
  }, [Z, k, H, T]);
  var F = ht([]), K = function(re) {
    z.current && z.current.contains(re.target) || (re.preventDefault(), F.current = []);
  };
  Kt(function() {
    return C && (document.addEventListener("dragover", Xs, !1), document.addEventListener("drop", K, !1)), function() {
      C && (document.removeEventListener("dragover", Xs), document.removeEventListener("drop", K));
    };
  }, [z, C]), Kt(function() {
    return !r && b && z.current && z.current.focus(), function() {
    };
  }, [z, b, r]);
  var Y = ue(function(V) {
    P ? P(V) : console.error(V);
  }, [P]), O = ue(function(V) {
    V.preventDefault(), V.persist(), Re(V), F.current = [].concat(R1(F.current), [V.target]), Er(V) && Promise.resolve(o(V)).then(function(re) {
      if (!(Vr(V) && !_)) {
        var he = re.length, Ce = he > 0 && x1({
          files: re,
          accept: L,
          minSize: i,
          maxSize: a,
          multiple: s,
          maxFiles: c,
          validator: A
        }), Ae = he > 0 && !Ce;
        R({
          isDragAccept: Ce,
          isDragReject: Ae,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), l && l(V);
      }
    }).catch(function(re) {
      return Y(re);
    });
  }, [o, l, Y, _, L, i, a, s, c, A]), U = ue(function(V) {
    V.preventDefault(), V.persist(), Re(V);
    var re = Er(V);
    if (re && V.dataTransfer)
      try {
        V.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return re && p && p(V), !1;
  }, [p, _]), J = ue(function(V) {
    V.preventDefault(), V.persist(), Re(V);
    var re = F.current.filter(function(Ce) {
      return z.current && z.current.contains(Ce);
    }), he = re.indexOf(V.target);
    he !== -1 && re.splice(he, 1), F.current = re, !(re.length > 0) && (R({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), Er(V) && u && u(V));
  }, [z, u, _]), B = ue(function(V, re) {
    var he = [], Ce = [];
    V.forEach(function(Ae) {
      var ct = Ou(Ae, L), lt = ta(ct, 2), $t = lt[0], Bt = lt[1], He = Pu(Ae, i, a), dt = ta(He, 2), Vt = dt[0], Pn = dt[1], on = A ? A(Ae) : null;
      if ($t && Vt && !on)
        he.push(Ae);
      else {
        var Rn = [Bt, Pn];
        on && (Rn = Rn.concat(on)), Ce.push({
          file: Ae,
          errors: Rn.filter(function(se) {
            return se;
          })
        });
      }
    }), (!s && he.length > 1 || s && c >= 1 && he.length > c) && (he.forEach(function(Ae) {
      Ce.push({
        file: Ae,
        errors: [v1]
      });
    }), he.splice(0)), R({
      acceptedFiles: he,
      fileRejections: Ce,
      isDragReject: Ce.length > 0,
      type: "setFiles"
    }), m && m(he, Ce, re), Ce.length > 0 && x && x(Ce, re), he.length > 0 && g && g(he, re);
  }, [R, s, L, i, a, c, m, g, x, A]), ae = ue(function(V) {
    V.preventDefault(), V.persist(), Re(V), F.current = [], Er(V) && Promise.resolve(o(V)).then(function(re) {
      Vr(V) && !_ || B(re, V);
    }).catch(function(re) {
      return Y(re);
    }), R({
      type: "reset"
    });
  }, [o, B, Y, _]), I = ue(function() {
    if (T.current) {
      R({
        type: "openDialog"
      }), G();
      var V = {
        multiple: s,
        types: q
      };
      window.showOpenFilePicker(V).then(function(re) {
        return o(re);
      }).then(function(re) {
        B(re, null), R({
          type: "closeDialog"
        });
      }).catch(function(re) {
        E1(re) ? (H(re), R({
          type: "closeDialog"
        })) : _1(re) ? (T.current = !1, Z.current ? (Z.current.value = null, Z.current.click()) : Y(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : Y(re);
      });
      return;
    }
    Z.current && (R({
      type: "openDialog"
    }), G(), Z.current.value = null, Z.current.click());
  }, [R, G, H, w, B, Y, q, s]), ve = ue(function(V) {
    !z.current || !z.current.isEqualNode(V.target) || (V.key === " " || V.key === "Enter" || V.keyCode === 32 || V.keyCode === 13) && (V.preventDefault(), I());
  }, [z, I]), ne = ue(function() {
    R({
      type: "focus"
    });
  }, []), ie = ue(function() {
    R({
      type: "blur"
    });
  }, []), Me = ue(function() {
    S || (w1() ? setTimeout(I, 0) : I());
  }, [S, I]), _e = function(re) {
    return r ? null : re;
  }, Ne = function(re) {
    return y ? null : _e(re);
  }, xe = function(re) {
    return E ? null : _e(re);
  }, Re = function(re) {
    _ && re.stopPropagation();
  }, Ot = Be(function() {
    return function() {
      var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, re = V.refKey, he = re === void 0 ? "ref" : re, Ce = V.role, Ae = V.onKeyDown, ct = V.onFocus, lt = V.onBlur, $t = V.onClick, Bt = V.onDragEnter, He = V.onDragOver, dt = V.onDragLeave, Vt = V.onDrop, Pn = Hr(V, O1);
      return De(De(ka({
        onKeyDown: Ne(pt(Ae, ve)),
        onFocus: Ne(pt(ct, ne)),
        onBlur: Ne(pt(lt, ie)),
        onClick: _e(pt($t, Me)),
        onDragEnter: xe(pt(Bt, O)),
        onDragOver: xe(pt(He, U)),
        onDragLeave: xe(pt(dt, J)),
        onDrop: xe(pt(Vt, ae)),
        role: typeof Ce == "string" && Ce !== "" ? Ce : "presentation"
      }, he, z), !r && !y ? {
        tabIndex: 0
      } : {}), Pn);
    };
  }, [z, ve, ne, ie, Me, O, U, J, ae, y, E, r]), $e = ue(function(V) {
    V.stopPropagation();
  }, []), Xe = Be(function() {
    return function() {
      var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, re = V.refKey, he = re === void 0 ? "ref" : re, Ce = V.onChange, Ae = V.onClick, ct = Hr(V, P1), lt = ka({
        accept: L,
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
        onClick: _e(pt(Ae, $e)),
        tabIndex: -1
      }, he, Z);
      return De(De({}, lt), ct);
    };
  }, [Z, t, s, ae, r]);
  return De(De({}, D), {}, {
    isFocused: M && !r,
    getRootProps: Ot,
    getInputProps: Xe,
    rootRef: z,
    inputRef: Z,
    open: _e(I)
  });
}
function W1(e, n) {
  switch (n.type) {
    case "focus":
      return De(De({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return De(De({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return De(De({}, Sa), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return De(De({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return De(De({}, e), {}, {
        isDragActive: n.isDragActive,
        isDragAccept: n.isDragAccept,
        isDragReject: n.isDragReject
      });
    case "setFiles":
      return De(De({}, e), {}, {
        acceptedFiles: n.acceptedFiles,
        fileRejections: n.fileRejections,
        isDragReject: n.isDragReject
      });
    case "reset":
      return De({}, Sa);
    default:
      return e;
  }
}
function Qs() {
}
const z1 = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2024C0%2010.7452%2010.7452%200%2024%200C37.2548%200%2048%2010.7452%2048%2024C48%2037.2548%2037.2548%2048%2024%2048C10.7452%2048%200%2037.2548%200%2024Z'%20fill='%23EFF1F5'/%3e%3cpath%20d='M31%2017V31H17V17H31ZM31%2015H17C15.9%2015%2015%2015.9%2015%2017V31C15%2032.1%2015.9%2033%2017%2033H31C32.1%2033%2033%2032.1%2033%2031V17C33%2015.9%2032.1%2015%2031%2015ZM26.14%2023.86L23.14%2027.73L21%2025.14L18%2029H30L26.14%2023.86Z'%20fill='%233F465B'/%3e%3c/svg%3e";
var na, ec;
function $1() {
  if (ec) return na;
  ec = 1;
  var e = !1, n, t, r, o, a, i, s, c, l, u, p, m, g, x, h;
  function v() {
    if (!e) {
      e = !0;
      var b = navigator.userAgent, C = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(b), S = /(Mac OS X)|(Windows)|(Linux)/.exec(b);
      if (m = /\b(iPhone|iP[ao]d)/.exec(b), g = /\b(iP[ao]d)/.exec(b), u = /Android/i.exec(b), x = /FBAN\/\w+;/i.exec(b), h = /Mobile/i.exec(b), p = !!/Win64/.exec(b), C) {
        n = C[1] ? parseFloat(C[1]) : C[5] ? parseFloat(C[5]) : NaN, n && document && document.documentMode && (n = document.documentMode);
        var y = /(?:Trident\/(\d+.\d+))/.exec(b);
        i = y ? parseFloat(y[1]) + 4 : n, t = C[2] ? parseFloat(C[2]) : NaN, r = C[3] ? parseFloat(C[3]) : NaN, o = C[4] ? parseFloat(C[4]) : NaN, o ? (C = /(?:Chrome\/(\d+\.\d+))/.exec(b), a = C && C[1] ? parseFloat(C[1]) : NaN) : a = NaN;
      } else
        n = t = r = a = o = NaN;
      if (S) {
        if (S[1]) {
          var E = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(b);
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
      return v() || n;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return v() || i > n;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return w.ie() && p;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return v() || t;
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
      return v() || m || g || u || h;
    },
    nativeApp: function() {
      return v() || x;
    },
    android: function() {
      return v() || u;
    },
    ipad: function() {
      return v() || g;
    }
  };
  return na = w, na;
}
var ra, tc;
function B1() {
  if (tc) return ra;
  tc = 1;
  var e = !!(typeof window < "u" && window.document && window.document.createElement), n = {
    canUseDOM: e,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
    canUseViewport: e && !!window.screen,
    isInWorker: !e
    // For now, this is true - might change in the future.
  };
  return ra = n, ra;
}
var oa, nc;
function V1() {
  if (nc) return oa;
  nc = 1;
  var e = B1(), n;
  e.canUseDOM && (n = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature("", "") !== !0);
  function t(r, o) {
    if (!e.canUseDOM || o && !("addEventListener" in document))
      return !1;
    var a = "on" + r, i = a in document;
    if (!i) {
      var s = document.createElement("div");
      s.setAttribute(a, "return;"), i = typeof s[a] == "function";
    }
    return !i && n && r === "wheel" && (i = document.implementation.hasFeature("Events.wheel", "3.0")), i;
  }
  return oa = t, oa;
}
var aa, rc;
function H1() {
  if (rc) return aa;
  rc = 1;
  var e = $1(), n = V1(), t = 10, r = 40, o = 800;
  function a(i) {
    var s = 0, c = 0, l = 0, u = 0;
    return "detail" in i && (c = i.detail), "wheelDelta" in i && (c = -i.wheelDelta / 120), "wheelDeltaY" in i && (c = -i.wheelDeltaY / 120), "wheelDeltaX" in i && (s = -i.wheelDeltaX / 120), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (s = c, c = 0), l = s * t, u = c * t, "deltaY" in i && (u = i.deltaY), "deltaX" in i && (l = i.deltaX), (l || u) && i.deltaMode && (i.deltaMode == 1 ? (l *= r, u *= r) : (l *= o, u *= o)), l && !s && (s = l < 1 ? -1 : 1), u && !c && (c = u < 1 ? -1 : 1), {
      spinX: s,
      spinY: c,
      pixelX: l,
      pixelY: u
    };
  }
  return a.getEventType = function() {
    return e.firefox() ? "DOMMouseScroll" : n("wheel") ? "wheel" : "mousewheel";
  }, aa = a, aa;
}
var ia, oc;
function Y1() {
  return oc || (oc = 1, ia = H1()), ia;
}
var U1 = Y1();
const G1 = /* @__PURE__ */ Ta(U1);
function q1(e, n, t, r, o, a) {
  a === void 0 && (a = 0);
  var i = wn(e, n, a), s = i.width, c = i.height, l = Math.min(s, t), u = Math.min(c, r);
  return l > u * o ? {
    width: u * o,
    height: u
  } : {
    width: l,
    height: l / o
  };
}
function K1(e) {
  return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight;
}
function Fn(e, n, t, r, o) {
  o === void 0 && (o = 0);
  var a = wn(n.width, n.height, o), i = a.width, s = a.height;
  return {
    x: ac(e.x, i, t.width, r),
    y: ac(e.y, s, t.height, r)
  };
}
function ac(e, n, t, r) {
  var o = n * r / 2 - t / 2;
  return wo(e, -o, o);
}
function ic(e, n) {
  return Math.sqrt(Math.pow(e.y - n.y, 2) + Math.pow(e.x - n.x, 2));
}
function sc(e, n) {
  return Math.atan2(n.y - e.y, n.x - e.x) * 180 / Math.PI;
}
function Z1(e, n, t, r, o, a, i) {
  a === void 0 && (a = 0), i === void 0 && (i = !0);
  var s = i ? X1 : J1, c = wn(n.width, n.height, a), l = wn(n.naturalWidth, n.naturalHeight, a), u = {
    x: s(100, ((c.width - t.width / o) / 2 - e.x / o) / c.width * 100),
    y: s(100, ((c.height - t.height / o) / 2 - e.y / o) / c.height * 100),
    width: s(100, t.width / c.width * 100 / o),
    height: s(100, t.height / c.height * 100 / o)
  }, p = Math.round(s(l.width, u.width * l.width / 100)), m = Math.round(s(l.height, u.height * l.height / 100)), g = l.width >= l.height * r, x = g ? {
    width: Math.round(m * r),
    height: m
  } : {
    width: p,
    height: Math.round(p / r)
  }, h = Ee(Ee({}, x), {
    x: Math.round(s(l.width - x.width, u.x * l.width / 100)),
    y: Math.round(s(l.height - x.height, u.y * l.height / 100))
  });
  return {
    croppedAreaPercentages: u,
    croppedAreaPixels: h
  };
}
function X1(e, n) {
  return Math.min(e, Math.max(0, n));
}
function J1(e, n) {
  return n;
}
function Q1(e, n, t, r, o, a) {
  var i = wn(n.width, n.height, t), s = wo(r.width / i.width * (100 / e.width), o, a), c = {
    x: s * i.width / 2 - r.width / 2 - i.width * s * (e.x / 100),
    y: s * i.height / 2 - r.height / 2 - i.height * s * (e.y / 100)
  };
  return {
    crop: c,
    zoom: s
  };
}
function e2(e, n, t) {
  var r = K1(n);
  return t.height > t.width ? t.height / (e.height * r) : t.width / (e.width * r);
}
function t2(e, n, t, r, o, a) {
  t === void 0 && (t = 0);
  var i = wn(n.naturalWidth, n.naturalHeight, t), s = wo(e2(e, n, r), o, a), c = r.height > r.width ? r.height / e.height : r.width / e.width, l = {
    x: ((i.width - e.width) / 2 - e.x) * c,
    y: ((i.height - e.height) / 2 - e.y) * c
  };
  return {
    crop: l,
    zoom: s
  };
}
function cc(e, n) {
  return {
    x: (n.x + e.x) / 2,
    y: (n.y + e.y) / 2
  };
}
function n2(e) {
  return e * Math.PI / 180;
}
function wn(e, n, t) {
  var r = n2(t);
  return {
    width: Math.abs(Math.cos(r) * e) + Math.abs(Math.sin(r) * n),
    height: Math.abs(Math.sin(r) * e) + Math.abs(Math.cos(r) * n)
  };
}
function wo(e, n, t) {
  return Math.min(Math.max(e, n), t);
}
function _r() {
  for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return e.filter(function(t) {
    return typeof t == "string" && t.length > 0;
  }).join(" ").trim();
}
var r2 = `.reactEasyCrop_Container {
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
`, o2 = 1, a2 = 3, i2 = 1, s2 = (
  /** @class */
  (function(e) {
    hf(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.cropperRef = f.createRef(), t.imageRef = f.createRef(), t.videoRef = f.createRef(), t.containerPosition = {
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
          var o = Q1(t.props.initialCroppedAreaPercentages, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), a = o.crop, i = o.zoom;
          t.props.onCropChange(a), t.props.onZoomChange && t.props.onZoomChange(i);
        } else if (t.props.initialCroppedAreaPixels) {
          var s = t2(t.props.initialCroppedAreaPixels, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), a = s.crop, i = s.zoom;
          t.props.onCropChange(a), t.props.onZoomChange && t.props.onZoomChange(i);
        }
      }, t.computeSizes = function() {
        var r, o, a, i, s, c, l = t.imageRef.current || t.videoRef.current;
        if (l && t.containerRef) {
          t.containerRect = t.containerRef.getBoundingClientRect(), t.saveContainerPosition();
          var u = t.containerRect.width / t.containerRect.height, p = ((r = t.imageRef.current) === null || r === void 0 ? void 0 : r.naturalWidth) || ((o = t.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, m = ((a = t.imageRef.current) === null || a === void 0 ? void 0 : a.naturalHeight) || ((i = t.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, g = l.offsetWidth < p || l.offsetHeight < m, x = p / m, h = void 0;
          if (g)
            switch (t.state.mediaObjectFit) {
              default:
              case "contain":
                h = u > x ? {
                  width: t.containerRect.height * x,
                  height: t.containerRect.height
                } : {
                  width: t.containerRect.width,
                  height: t.containerRect.width / x
                };
                break;
              case "horizontal-cover":
                h = {
                  width: t.containerRect.width,
                  height: t.containerRect.width / x
                };
                break;
              case "vertical-cover":
                h = {
                  width: t.containerRect.height * x,
                  height: t.containerRect.height
                };
                break;
            }
          else
            h = {
              width: l.offsetWidth,
              height: l.offsetHeight
            };
          t.mediaSize = Ee(Ee({}, h), {
            naturalWidth: p,
            naturalHeight: m
          }), t.props.setMediaSize && t.props.setMediaSize(t.mediaSize);
          var v = t.props.cropSize ? t.props.cropSize : q1(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
          return (((s = t.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== v.height || ((c = t.state.cropSize) === null || c === void 0 ? void 0 : c.width) !== v.width) && t.props.onCropSizeChange && t.props.onCropSizeChange(v), t.setState({
            cropSize: v
          }, t.recomputeCropPosition), t.props.setCropSize && t.props.setCropSize(v), v;
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
          var o = n.getMousePoint(r), a = t.gestureZoomStart - 1 + r.scale;
          if (t.setNewZoom(a, o, {
            shouldUpdatePosition: !0
          }), t.props.onRotationChange) {
            var i = t.gestureRotationStart + r.rotation;
            t.props.onRotationChange(i);
          }
        }
      }, t.onGestureEnd = function(r) {
        t.cleanEvents();
      }, t.onDragStart = function(r) {
        var o, a, i = r.x, s = r.y;
        t.dragStartPosition = {
          x: i,
          y: s
        }, t.dragStartCrop = Ee({}, t.props.crop), (a = (o = t.props).onInteractionStart) === null || a === void 0 || a.call(o);
      }, t.onDrag = function(r) {
        var o = r.x, a = r.y;
        t.currentWindow && (t.rafDragTimeout && t.currentWindow.cancelAnimationFrame(t.rafDragTimeout), t.rafDragTimeout = t.currentWindow.requestAnimationFrame(function() {
          if (t.state.cropSize && !(o === void 0 || a === void 0)) {
            var i = o - t.dragStartPosition.x, s = a - t.dragStartPosition.y, c = {
              x: t.dragStartCrop.x + i,
              y: t.dragStartCrop.y + s
            }, l = t.props.restrictPosition ? Fn(c, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : c;
            t.props.onCropChange(l);
          }
        }));
      }, t.onDragStopped = function() {
        var r, o;
        t.isTouching = !1, t.cleanEvents(), t.emitCropData(), (o = (r = t.props).onInteractionEnd) === null || o === void 0 || o.call(r);
      }, t.onWheel = function(r) {
        if (t.currentWindow && !(t.props.onWheelRequest && !t.props.onWheelRequest(r))) {
          r.preventDefault();
          var o = n.getMousePoint(r), a = G1(r).pixelY, i = t.props.zoom - a * t.props.zoomSpeed / 200;
          t.setNewZoom(i, o, {
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
        var a = r.x, i = r.y;
        if (!t.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: t.containerRect.width / 2 - (a - o.x),
          y: t.containerRect.height / 2 - (i - o.y)
        };
      }, t.getPointOnMedia = function(r) {
        var o = r.x, a = r.y, i = t.props, s = i.crop, c = i.zoom;
        return {
          x: (o + s.x) / c,
          y: (a + s.y) / c
        };
      }, t.setNewZoom = function(r, o, a) {
        var i = a === void 0 ? {} : a, s = i.shouldUpdatePosition, c = s === void 0 ? !0 : s;
        if (!(!t.state.cropSize || !t.props.onZoomChange)) {
          var l = wo(r, t.props.minZoom, t.props.maxZoom);
          if (c) {
            var u = t.getPointOnContainer(o, t.containerPosition), p = t.getPointOnMedia(u), m = {
              x: p.x * l - u.x,
              y: p.y * l - u.y
            }, g = t.props.restrictPosition ? Fn(m, t.mediaSize, t.state.cropSize, l, t.props.rotation) : m;
            t.props.onCropChange(g);
          }
          t.props.onZoomChange(l);
        }
      }, t.getCropData = function() {
        if (!t.state.cropSize)
          return null;
        var r = t.props.restrictPosition ? Fn(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
        return Z1(r, t.mediaSize, t.state.cropSize, t.getAspect(), t.props.zoom, t.props.rotation, t.props.restrictPosition);
      }, t.emitCropData = function() {
        var r = t.getCropData();
        if (r) {
          var o = r.croppedAreaPercentages, a = r.croppedAreaPixels;
          t.props.onCropComplete && t.props.onCropComplete(o, a), t.props.onCropAreaChange && t.props.onCropAreaChange(o, a);
        }
      }, t.emitCropAreaChange = function() {
        var r = t.getCropData();
        if (r) {
          var o = r.croppedAreaPercentages, a = r.croppedAreaPixels;
          t.props.onCropAreaChange && t.props.onCropAreaChange(o, a);
        }
      }, t.recomputeCropPosition = function() {
        var r, o;
        if (t.state.cropSize) {
          var a = t.props.crop;
          if (t.isInitialized && (!((r = t.previousCropSize) === null || r === void 0) && r.width) && (!((o = t.previousCropSize) === null || o === void 0) && o.height)) {
            var i = Math.abs(t.previousCropSize.width - t.state.cropSize.width) > 1e-6 || Math.abs(t.previousCropSize.height - t.state.cropSize.height) > 1e-6;
            if (i) {
              var s = t.state.cropSize.width / t.previousCropSize.width, c = t.state.cropSize.height / t.previousCropSize.height;
              a = {
                x: t.props.crop.x * s,
                y: t.props.crop.y * c
              };
            }
          }
          var l = t.props.restrictPosition ? Fn(a, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : a;
          t.previousCropSize = t.state.cropSize, t.props.onCropChange(l), t.emitCropData();
        }
      }, t.onKeyDown = function(r) {
        var o, a, i = t.props, s = i.crop, c = i.onCropChange, l = i.keyboardStep, u = i.zoom, p = i.rotation, m = l;
        if (t.state.cropSize) {
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
          t.props.restrictPosition && (g = Fn(g, t.mediaSize, t.state.cropSize, u, p)), r.repeat || (a = (o = t.props).onInteractionStart) === null || a === void 0 || a.call(o), c(g);
        }
      }, t.onKeyUp = function(r) {
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
        t.emitCropData(), (a = (o = t.props).onInteractionEnd) === null || a === void 0 || a.call(o);
      }, t;
    }
    return n.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = r2, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, n.prototype.componentWillUnmount = function() {
      var t, r;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((r = this.styleRef.parentNode) === null || r === void 0 || r.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, n.prototype.componentDidUpdate = function(t) {
      var r, o, a, i, s, c, l, u, p;
      t.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : t.aspect !== this.props.aspect ? this.computeSizes() : t.objectFit !== this.props.objectFit ? this.computeSizes() : t.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((r = t.cropSize) === null || r === void 0 ? void 0 : r.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((a = t.cropSize) === null || a === void 0 ? void 0 : a.width) !== ((i = this.props.cropSize) === null || i === void 0 ? void 0 : i.width) ? this.computeSizes() : (((s = t.crop) === null || s === void 0 ? void 0 : s.x) !== ((c = this.props.crop) === null || c === void 0 ? void 0 : c.x) || ((l = t.crop) === null || l === void 0 ? void 0 : l.y) !== ((u = this.props.crop) === null || u === void 0 ? void 0 : u.y)) && this.emitCropAreaChange(), t.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), t.video !== this.props.video && ((p = this.videoRef.current) === null || p === void 0 || p.load());
      var m = this.getObjectFit();
      m !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: m
      }, this.computeSizes);
    }, n.prototype.getAspect = function() {
      var t = this.props, r = t.cropSize, o = t.aspect;
      return r ? r.width / r.height : o;
    }, n.prototype.getObjectFit = function() {
      var t, r, o, a;
      if (this.props.objectFit === "cover") {
        var i = this.imageRef.current || this.videoRef.current;
        if (i && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var s = this.containerRect.width / this.containerRect.height, c = ((t = this.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((r = this.videoRef.current) === null || r === void 0 ? void 0 : r.videoWidth) || 0, l = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((a = this.videoRef.current) === null || a === void 0 ? void 0 : a.videoHeight) || 0, u = c / l;
          return u < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, n.prototype.onPinchStart = function(t) {
      var r = n.getTouchPoint(t.touches[0]), o = n.getTouchPoint(t.touches[1]);
      this.lastPinchDistance = ic(r, o), this.lastPinchRotation = sc(r, o), this.onDragStart(cc(r, o));
    }, n.prototype.onPinchMove = function(t) {
      var r = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = n.getTouchPoint(t.touches[0]), a = n.getTouchPoint(t.touches[1]), i = cc(o, a);
        this.onDrag(i), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = ic(o, a), c = r.props.zoom * (s / r.lastPinchDistance);
          r.setNewZoom(c, i, {
            shouldUpdatePosition: !1
          }), r.lastPinchDistance = s;
          var l = sc(o, a), u = r.props.rotation + (l - r.lastPinchRotation);
          r.props.onRotationChange && r.props.onRotationChange(u), r.lastPinchRotation = l;
        });
      }
    }, n.prototype.render = function() {
      var t = this, r, o = this.props, a = o.image, i = o.video, s = o.mediaProps, c = o.cropperProps, l = o.transform, u = o.crop, p = u.x, m = u.y, g = o.rotation, x = o.zoom, h = o.cropShape, v = o.showGrid, w = o.roundCropAreaPixels, b = o.style, C = b.containerStyle, S = b.cropAreaStyle, y = b.mediaStyle, E = o.classes, _ = E.containerClassName, P = E.cropAreaClassName, A = E.mediaClassName, L = (r = this.state.mediaObjectFit) !== null && r !== void 0 ? r : this.getObjectFit();
      return f.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(G) {
          return t.containerRef = G;
        },
        "data-testid": "container",
        style: C,
        className: _r("reactEasyCrop_Container", _)
      }, a ? f.createElement("img", Ee({
        alt: "",
        className: _r("reactEasyCrop_Image", L === "contain" && "reactEasyCrop_Contain", L === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", L === "vertical-cover" && "reactEasyCrop_Cover_Vertical", A)
      }, s, {
        src: a,
        ref: this.imageRef,
        style: Ee(Ee({}, y), {
          transform: l || "translate(".concat(p, "px, ").concat(m, "px) rotate(").concat(g, "deg) scale(").concat(x, ")")
        }),
        onLoad: this.onMediaLoad
      })) : i && f.createElement("video", Ee({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: _r("reactEasyCrop_Video", L === "contain" && "reactEasyCrop_Contain", L === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", L === "vertical-cover" && "reactEasyCrop_Cover_Vertical", A)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: Ee(Ee({}, y), {
          transform: l || "translate(".concat(p, "px, ").concat(m, "px) rotate(").concat(g, "deg) scale(").concat(x, ")")
        }),
        controls: !1
      }), (Array.isArray(i) ? i : [{
        src: i
      }]).map(function(q) {
        return f.createElement("source", Ee({
          key: q.src
        }, q));
      })), this.state.cropSize && f.createElement("div", Ee({
        ref: this.cropperRef,
        style: Ee(Ee({}, S), {
          width: w ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: w ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: _r("reactEasyCrop_CropArea", h === "round" && "reactEasyCrop_CropAreaRound", v && "reactEasyCrop_CropAreaGrid", P)
      }, c)));
    }, n.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: a2,
      minZoom: o2,
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
      keyboardStep: i2
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
  })(f.Component)
);
function c2({
  imageUrl: e,
  aspect: n,
  rounded: t,
  crop: r,
  zoom: o,
  onCropChange: a,
  onZoomChange: i,
  onCropComplete: s,
  onClose: c,
  onConfirm: l
}) {
  const u = ue(
    (p, m) => s(m),
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
              children: /* @__PURE__ */ d.jsx(Ua, { className: "size-5 text-gray-700" })
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "flex-1 overflow-auto px-4 py-4 sm:px-6 sm:py-6", children: [
          /* @__PURE__ */ d.jsx("div", { className: "relative w-full overflow-hidden rounded-lg bg-gray-900", children: /* @__PURE__ */ d.jsx("div", { className: "relative h-[60dvh] sm:h-[420px] w-full", children: /* @__PURE__ */ d.jsx(
            s2,
            {
              image: e,
              crop: r,
              zoom: o,
              aspect: n,
              cropShape: t ? "round" : "rect",
              onCropChange: a,
              onCropComplete: u,
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
                onChange: (p) => i(parseFloat(p.target.value)),
                className: "w-full cursor-pointer",
                "aria-label": "Zoom"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "sticky bottom-0 z-10 border-t border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4", children: /* @__PURE__ */ d.jsx("div", { className: "flex flex-col-reverse sm:flex-row gap-2 sm:justify-end", children: /* @__PURE__ */ d.jsx(
          oo,
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
function l2(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = `image/${r === "jpg" ? "jpeg" : r}`;
    n[o] ??= [], n[o].push(`.${r}`);
  }
  return n;
}
function d2(e) {
  return new Promise((n, t) => {
    const r = new Image();
    r.addEventListener("load", () => n(r)), r.addEventListener("error", (o) => t(o)), r.setAttribute("crossOrigin", "anonymous"), r.src = e;
  });
}
async function u2(e, n, t) {
  const r = await d2(e), o = document.createElement("canvas"), a = o.getContext("2d");
  if (!a) throw new Error("Could not get canvas context");
  o.width = Math.max(1, Math.round(n.width)), o.height = Math.max(1, Math.round(n.height)), a.drawImage(
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
  const i = await new Promise((s, c) => {
    o.toBlob(
      (l) => l ? s(l) : c(new Error("Canvas is empty")),
      t.fileType || "image/png",
      0.92
    );
  });
  return new File([i], t.fileName, { type: t.fileType || i.type });
}
function Kk({
  value: e,
  onChange: n,
  aspectRatio: t,
  extensions: r,
  rounded: o = !1,
  maxSize: a = 5 * 1024 * 1024,
  minWidth: i,
  minHeight: s,
  maxWidth: c,
  maxHeight: l,
  placeholder: u = "Accepted files jpg, png and webp",
  className: p
}) {
  const [m, g] = Fe(null), [x, h] = Fe([]), [v, w] = Fe(!1), [b, C] = Fe(null), [S, y] = Fe({ x: 0, y: 0 }), [E, _] = Fe(1), [P, A] = Fe(null), L = Be(() => l2(r), [r]);
  Kt(() => {
    if (!e) {
      m && URL.revokeObjectURL(m), g(null);
      return;
    }
    const k = URL.createObjectURL(e);
    return m && URL.revokeObjectURL(m), g(k), () => {
      URL.revokeObjectURL(k);
    };
  }, [e]);
  const q = ue(
    async (k) => {
      const T = k[0];
      if (!T) return;
      if (h([]), [i, s, c, l].some(
        (K) => typeof K == "number"
      ))
        try {
          const K = await new Promise(
            (O, U) => {
              const J = URL.createObjectURL(T), B = new Image();
              B.onload = () => {
                const ae = B.naturalWidth || B.width, I = B.naturalHeight || B.height;
                URL.revokeObjectURL(J), O({ width: ae, height: I });
              }, B.onerror = () => {
                URL.revokeObjectURL(J), U(new Error("Unable to read image dimensions"));
              }, B.src = J;
            }
          ), Y = [];
          if (typeof i == "number" && K.width < i && Y.push(
            `Image width is too small. Minimum width is ${i}px.`
          ), typeof s == "number" && K.height < s && Y.push(
            `Image height is too small. Minimum height is ${s}px.`
          ), typeof c == "number" && K.width > c && Y.push(
            `Image width is too large. Maximum width is ${c}px.`
          ), typeof l == "number" && K.height > l && Y.push(
            `Image height is too large. Maximum height is ${l}px.`
          ), Y.length > 0) {
            h(Y);
            return;
          }
        } catch {
          h(["Unable to read image dimensions. Please try another image."]);
          return;
        }
      const F = URL.createObjectURL(T);
      C(F), w(!0), y({ x: 0, y: 0 }), _(1), A(null);
    },
    [l, c, s, i]
  ), { getRootProps: G, getInputProps: H, isDragActive: z, fileRejections: Z } = Di({
    onDrop: q,
    accept: L,
    maxSize: a,
    multiple: !1
  }), $ = [
    ...Z.flatMap(
      (k) => k.errors.map((T) => T.code === "file-too-large" ? `File is too large. Max size is ${(a / 1048576).toFixed(0)}MB` : T.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${r.join(", ")}` : T.message)
    ),
    ...x
  ], Q = ue(() => {
    w(!1), b && URL.revokeObjectURL(b), C(null);
  }, [b]), D = ue(async () => {
    if (!(!b || !P))
      try {
        const k = await u2(b, P, {
          fileName: e?.name ?? "image.png",
          fileType: e?.type ?? "image/png"
        });
        n(k), w(!1), URL.revokeObjectURL(b), C(null);
      } catch (k) {
        console.error("Error cropping image:", k);
      }
  }, [P, n, b, e?.name, e?.type]), R = ue(() => {
    m && URL.revokeObjectURL(m), g(null), n(null);
  }, [n, m]), M = o ? { aspectRatio: "1 / 1" } : { aspectRatio: `${t}` };
  return /* @__PURE__ */ d.jsxs("div", { className: j("w-full space-y-2", p), children: [
    m ? /* @__PURE__ */ d.jsxs("div", { className: "relative w-fit max-h-44", children: [
      /* @__PURE__ */ d.jsx(
        "div",
        {
          className: j(
            "h-44 overflow-hidden border border-gray-50 bg-white shadow-lg",
            o ? "rounded-full" : "rounded-lg"
          ),
          style: M,
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
          onClick: R,
          "aria-label": "Remove image",
          className: j(
            "absolute right-1 top-1 inline-flex items-center justify-center",
            "size-10 rounded-full bg-gray-600 text-white border border-white",
            "hover:bg-gray-700 transition-colors"
          ),
          children: /* @__PURE__ */ d.jsx(Ua, { className: "size-4" })
        }
      )
    ] }) : /* @__PURE__ */ d.jsxs(
      "div",
      {
        ...G(),
        className: j(
          "relative flex w-full items-center justify-center",
          "rounded-[0.625rem] border border-gray-50 bg-white",
          "min-h-44",
          "cursor-pointer transition-colors",
          z && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ d.jsx("input", { ...H() }),
          /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col items-center justify-center px-4 text-center gap-y-3", children: [
            /* @__PURE__ */ d.jsx("img", { src: z1, alt: "" }),
            /* @__PURE__ */ d.jsx("p", { className: "text-sm font-manrope font-medium text-gray-700", children: "Click to upload or drag and drop" }),
            !!u && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-gray-500", children: u })
          ] })
        ]
      }
    ),
    $.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "space-y-1", children: $.map((k, T) => /* @__PURE__ */ d.jsx("p", { className: "text-sm text-bright-red-600", children: k }, T)) }),
    v && b && /* @__PURE__ */ d.jsx(
      c2,
      {
        imageUrl: b,
        aspect: t,
        rounded: o,
        crop: S,
        zoom: E,
        onCropChange: y,
        onZoomChange: _,
        onCropComplete: (k) => A(k),
        onClose: Q,
        onConfirm: D
      }
    )
  ] });
}
function p2({ className: e, type: n, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "input",
    {
      type: n,
      "data-slot": "input",
      className: j(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "border border-gray-200 h-10 w-full min-w-0 rounded-sm bg-transparent px-3 text-base font-manrope transition-[color,box-shadow]",
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
function Zk({
  className: e,
  visible: n,
  onVisibilityChange: t,
  ...r
}) {
  const [o, a] = Fe(!1), i = n !== void 0, s = i ? n : o, c = ue(() => {
    i ? t?.(!s) : a((l) => !l);
  }, [i, s, t]);
  return /* @__PURE__ */ d.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ d.jsx(
      p2,
      {
        ...r,
        "data-slot": "input",
        className: j(e, "pr-10"),
        type: s ? "text" : "password"
      }
    ),
    /* @__PURE__ */ d.jsxs(
      "button",
      {
        type: "button",
        className: "absolute right-0 top-0 size-10 flex items-center justify-center",
        onClick: c,
        children: [
          !s && /* @__PURE__ */ d.jsx(Zh, { className: "size-4 text-gray-300" }),
          s && /* @__PURE__ */ d.jsx(Jh, { className: "size-4 text-gray-300" })
        ]
      }
    )
  ] });
}
var f2 = Object.defineProperty, m2 = Object.defineProperties, h2 = Object.getOwnPropertyDescriptors, Yr = Object.getOwnPropertySymbols, Au = Object.prototype.hasOwnProperty, Iu = Object.prototype.propertyIsEnumerable, lc = (e, n, t) => n in e ? f2(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, g2 = (e, n) => {
  for (var t in n || (n = {})) Au.call(n, t) && lc(e, t, n[t]);
  if (Yr) for (var t of Yr(n)) Iu.call(n, t) && lc(e, t, n[t]);
  return e;
}, v2 = (e, n) => m2(e, h2(n)), x2 = (e, n) => {
  var t = {};
  for (var r in e) Au.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && Yr) for (var r of Yr(e)) n.indexOf(r) < 0 && Iu.call(e, r) && (t[r] = e[r]);
  return t;
};
function b2(e) {
  let n = setTimeout(e, 0), t = setTimeout(e, 10), r = setTimeout(e, 50);
  return [n, t, r];
}
function y2(e) {
  let n = f.useRef();
  return f.useEffect(() => {
    n.current = e;
  }), n.current;
}
var w2 = 18, Fu = 40, C2 = `${Fu}px`, k2 = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function S2({ containerRef: e, inputRef: n, pushPasswordManagerStrategy: t, isFocused: r }) {
  let [o, a] = f.useState(!1), [i, s] = f.useState(!1), [c, l] = f.useState(!1), u = f.useMemo(() => t === "none" ? !1 : (t === "increase-width" || t === "experimental-no-flickering") && o && i, [o, i, t]), p = f.useCallback(() => {
    let m = e.current, g = n.current;
    if (!m || !g || c || t === "none") return;
    let x = m, h = x.getBoundingClientRect().left + x.offsetWidth, v = x.getBoundingClientRect().top + x.offsetHeight / 2, w = h - w2, b = v;
    document.querySelectorAll(k2).length === 0 && document.elementFromPoint(w, b) === m || (a(!0), l(!0));
  }, [e, n, c, t]);
  return f.useEffect(() => {
    let m = e.current;
    if (!m || t === "none") return;
    function g() {
      let h = window.innerWidth - m.getBoundingClientRect().right;
      s(h >= Fu);
    }
    g();
    let x = setInterval(g, 1e3);
    return () => {
      clearInterval(x);
    };
  }, [e, t]), f.useEffect(() => {
    let m = r || document.activeElement === n.current;
    if (t === "none" || !m) return;
    let g = setTimeout(p, 0), x = setTimeout(p, 2e3), h = setTimeout(p, 5e3), v = setTimeout(() => {
      l(!0);
    }, 6e3);
    return () => {
      clearTimeout(g), clearTimeout(x), clearTimeout(h), clearTimeout(v);
    };
  }, [n, r, t, p]), { hasPWMBadge: o, willPushPWMBadge: u, PWM_BADGE_SPACE_WIDTH: C2 };
}
var Lu = f.createContext({}), Wu = f.forwardRef((e, n) => {
  var t = e, { value: r, onChange: o, maxLength: a, textAlign: i = "left", pattern: s, placeholder: c, inputMode: l = "numeric", onComplete: u, pushPasswordManagerStrategy: p = "increase-width", pasteTransformer: m, containerClassName: g, noScriptCSSFallback: x = E2, render: h, children: v } = t, w = x2(t, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), b, C, S, y, E;
  let [_, P] = f.useState(typeof w.defaultValue == "string" ? w.defaultValue : ""), A = r ?? _, L = y2(A), q = f.useCallback((ne) => {
    o?.(ne), P(ne);
  }, [o]), G = f.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), H = f.useRef(null), z = f.useRef(null), Z = f.useRef({ value: A, onChange: q, isIOS: typeof window < "u" && ((C = (b = window?.CSS) == null ? void 0 : b.supports) == null ? void 0 : C.call(b, "-webkit-touch-callout", "none")) }), $ = f.useRef({ prev: [(S = H.current) == null ? void 0 : S.selectionStart, (y = H.current) == null ? void 0 : y.selectionEnd, (E = H.current) == null ? void 0 : E.selectionDirection] });
  f.useImperativeHandle(n, () => H.current, []), f.useEffect(() => {
    let ne = H.current, ie = z.current;
    if (!ne || !ie) return;
    Z.current.value !== ne.value && Z.current.onChange(ne.value), $.current.prev = [ne.selectionStart, ne.selectionEnd, ne.selectionDirection];
    function Me() {
      if (document.activeElement !== ne) {
        T(null), F(null);
        return;
      }
      let xe = ne.selectionStart, Re = ne.selectionEnd, Ot = ne.selectionDirection, $e = ne.maxLength, Xe = ne.value, V = $.current.prev, re = -1, he = -1, Ce;
      if (Xe.length !== 0 && xe !== null && Re !== null) {
        let $t = xe === Re, Bt = xe === Xe.length && Xe.length < $e;
        if ($t && !Bt) {
          let He = xe;
          if (He === 0) re = 0, he = 1, Ce = "forward";
          else if (He === $e) re = He - 1, he = He, Ce = "backward";
          else if ($e > 1 && Xe.length > 1) {
            let dt = 0;
            if (V[0] !== null && V[1] !== null) {
              Ce = He < V[1] ? "backward" : "forward";
              let Vt = V[0] === V[1] && V[0] < $e;
              Ce === "backward" && !Vt && (dt = -1);
            }
            re = dt + He, he = dt + He + 1;
          }
        }
        re !== -1 && he !== -1 && re !== he && H.current.setSelectionRange(re, he, Ce);
      }
      let Ae = re !== -1 ? re : xe, ct = he !== -1 ? he : Re, lt = Ce ?? Ot;
      T(Ae), F(ct), $.current.prev = [Ae, ct, lt];
    }
    if (document.addEventListener("selectionchange", Me, { capture: !0 }), Me(), document.activeElement === ne && M(!0), !document.getElementById("input-otp-style")) {
      let xe = document.createElement("style");
      if (xe.id = "input-otp-style", document.head.appendChild(xe), xe.sheet) {
        let Re = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        Ln(xe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), Ln(xe.sheet, `[data-input-otp]:autofill { ${Re} }`), Ln(xe.sheet, `[data-input-otp]:-webkit-autofill { ${Re} }`), Ln(xe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Ln(xe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
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
  let [Q, D] = f.useState(!1), [R, M] = f.useState(!1), [k, T] = f.useState(null), [W, F] = f.useState(null);
  f.useEffect(() => {
    b2(() => {
      var ne, ie, Me, _e;
      (ne = H.current) == null || ne.dispatchEvent(new Event("input"));
      let Ne = (ie = H.current) == null ? void 0 : ie.selectionStart, xe = (Me = H.current) == null ? void 0 : Me.selectionEnd, Re = (_e = H.current) == null ? void 0 : _e.selectionDirection;
      Ne !== null && xe !== null && (T(Ne), F(xe), $.current.prev = [Ne, xe, Re]);
    });
  }, [A, R]), f.useEffect(() => {
    L !== void 0 && A !== L && L.length < a && A.length === a && u?.(A);
  }, [a, u, L, A]);
  let K = S2({ containerRef: z, inputRef: H, pushPasswordManagerStrategy: p, isFocused: R }), Y = f.useCallback((ne) => {
    let ie = ne.currentTarget.value.slice(0, a);
    if (ie.length > 0 && G && !G.test(ie)) {
      ne.preventDefault();
      return;
    }
    typeof L == "string" && ie.length < L.length && document.dispatchEvent(new Event("selectionchange")), q(ie);
  }, [a, q, L, G]), O = f.useCallback(() => {
    var ne;
    if (H.current) {
      let ie = Math.min(H.current.value.length, a - 1), Me = H.current.value.length;
      (ne = H.current) == null || ne.setSelectionRange(ie, Me), T(ie), F(Me);
    }
    M(!0);
  }, [a]), U = f.useCallback((ne) => {
    var ie, Me;
    let _e = H.current;
    if (!m && (!Z.current.isIOS || !ne.clipboardData || !_e)) return;
    let Ne = ne.clipboardData.getData("text/plain"), xe = m ? m(Ne) : Ne;
    ne.preventDefault();
    let Re = (ie = H.current) == null ? void 0 : ie.selectionStart, Ot = (Me = H.current) == null ? void 0 : Me.selectionEnd, $e = (Re !== Ot ? A.slice(0, Re) + xe + A.slice(Ot) : A.slice(0, Re) + xe + A.slice(Re)).slice(0, a);
    if ($e.length > 0 && G && !G.test($e)) return;
    _e.value = $e, q($e);
    let Xe = Math.min($e.length, a - 1), V = $e.length;
    _e.setSelectionRange(Xe, V), T(Xe), F(V);
  }, [a, q, G, A]), J = f.useMemo(() => ({ position: "relative", cursor: w.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [w.disabled]), B = f.useMemo(() => ({ position: "absolute", inset: 0, width: K.willPushPWMBadge ? `calc(100% + ${K.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: K.willPushPWMBadge ? `inset(0 ${K.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [K.PWM_BADGE_SPACE_WIDTH, K.willPushPWMBadge, i]), ae = f.useMemo(() => f.createElement("input", v2(g2({ autoComplete: w.autoComplete || "one-time-code" }, w), { "data-input-otp": !0, "data-input-otp-placeholder-shown": A.length === 0 || void 0, "data-input-otp-mss": k, "data-input-otp-mse": W, inputMode: l, pattern: G?.source, "aria-placeholder": c, style: B, maxLength: a, value: A, ref: H, onPaste: (ne) => {
    var ie;
    U(ne), (ie = w.onPaste) == null || ie.call(w, ne);
  }, onChange: Y, onMouseOver: (ne) => {
    var ie;
    D(!0), (ie = w.onMouseOver) == null || ie.call(w, ne);
  }, onMouseLeave: (ne) => {
    var ie;
    D(!1), (ie = w.onMouseLeave) == null || ie.call(w, ne);
  }, onFocus: (ne) => {
    var ie;
    O(), (ie = w.onFocus) == null || ie.call(w, ne);
  }, onBlur: (ne) => {
    var ie;
    M(!1), (ie = w.onBlur) == null || ie.call(w, ne);
  } })), [Y, O, U, l, B, a, W, k, w, G?.source, A]), I = f.useMemo(() => ({ slots: Array.from({ length: a }).map((ne, ie) => {
    var Me;
    let _e = R && k !== null && W !== null && (k === W && ie === k || ie >= k && ie < W), Ne = A[ie] !== void 0 ? A[ie] : null, xe = A[0] !== void 0 ? null : (Me = c?.[ie]) != null ? Me : null;
    return { char: Ne, placeholderChar: xe, isActive: _e, hasFakeCaret: _e && Ne === null };
  }), isFocused: R, isHovering: !w.disabled && Q }), [R, Q, a, W, k, w.disabled, A]), ve = f.useMemo(() => h ? h(I) : f.createElement(Lu.Provider, { value: I }, v), [v, I, h]);
  return f.createElement(f.Fragment, null, x !== null && f.createElement("noscript", null, f.createElement("style", null, x)), f.createElement("div", { ref: z, "data-input-otp-container": !0, style: J, className: g }, ve, f.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, ae)));
});
Wu.displayName = "Input";
function Ln(e, n) {
  try {
    e.insertRule(n);
  } catch {
    console.error("input-otp could not insert CSS rule:", n);
  }
}
var E2 = `
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
function Xk({ className: e, containerClassName: n, ...t }) {
  return /* @__PURE__ */ d.jsx(
    Wu,
    {
      "data-slot": "input-otp",
      containerClassName: j("flex items-center gap-2 has-disabled:opacity-50", n),
      className: j("disabled:cursor-not-allowed", e),
      ...t
    }
  );
}
function Jk({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: j("flex items-center gap-2", e),
      ...n
    }
  );
}
function Qk({
  index: e,
  className: n,
  ...t
}) {
  const r = jr(Lu), { char: o, hasFakeCaret: a, isActive: i } = r?.slots[e] ?? {};
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": i,
      className: j(
        "data-[active=true]:bg-white data-[active=true]:shadow-button data-[active=true]:ring-0",
        "data-[active=true]:border-blue-hepatica-600 data-[active=true]:aria-invalid:border-bright-red-600",
        "border border-gray-200 relative flex size-10 items-center justify-center",
        " rounded-sm text-base font-manrope bg-transparent transition-all outline-none",
        "data-[active=true]:z-10",
        n
      ),
      ...t,
      children: [
        o,
        a && /* @__PURE__ */ d.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ d.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function eS({ ...e }) {
  return /* @__PURE__ */ d.jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ d.jsx(eg, {}) });
}
function zu({ size: e = 48, className: n, ...t }) {
  const r = typeof e == "number" ? `${e}` : e, o = typeof t["aria-label"] == "string";
  return /* @__PURE__ */ d.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 47 48",
      width: r,
      height: r,
      className: j("inline-block", n),
      "aria-hidden": o ? void 0 : !0,
      role: o ? "img" : "presentation",
      ...t,
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
function tS({ size: e = 32, className: n, ...t }) {
  return /* @__PURE__ */ d.jsxs("div", { className: j("inline-flex items-center gap-2", n), ...t, children: [
    /* @__PURE__ */ d.jsx(zu, { size: e }),
    /* @__PURE__ */ d.jsx("span", { className: "font-manrope text-base font-normal leading-none text-white", children: "MercySeat" })
  ] });
}
function _2(e) {
  return new Promise((n, t) => {
    const r = URL.createObjectURL(e), o = document.createElement(
      e.type.startsWith("video/") ? "video" : "audio"
    );
    o.preload = "metadata", o.src = r, o.onloadedmetadata = () => {
      const a = o.duration;
      URL.revokeObjectURL(r), n(a);
    }, o.onerror = () => {
      URL.revokeObjectURL(r), t(new Error("Failed to load media metadata"));
    };
  });
}
function M2(e) {
  return ["mp4", "webm", "ogg", "mov", "m4v"].includes(e) ? `video/${e === "mov" ? "quicktime" : e}` : ["mp3", "wav", "ogg", "aac", "flac", "m4a"].includes(e) ? `audio/${e === "mp3" ? "mpeg" : e === "m4a" ? "mp4" : e}` : null;
}
function D2(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = M2(r);
    o && (n[o] ??= [], n[o].push(`.${r}`));
  }
  return n;
}
function O2({ extensions: e, placeholder: n, onDropFile: t }) {
  const r = Be(() => D2(e), [e]), o = ue(
    async (u) => {
      const p = u[0] || null;
      if (p && !(!p.type.startsWith("video/") && !p.type.startsWith("audio/")))
        try {
          const m = await _2(p);
          t({
            file: p,
            meta: {
              duration: m,
              type: p.type.startsWith("video/") ? "video" : "audio",
              extension: p.name.split(".").pop() || "",
              previewUrl: URL.createObjectURL(p)
            }
          });
        } catch (m) {
          console.error("Failed to read media duration", m);
        }
    },
    [t]
  ), { getRootProps: a, getInputProps: i, isDragActive: s, fileRejections: c } = Di({
    onDrop: o,
    accept: r,
    maxFiles: 1
  }), l = c.flatMap(
    (u) => u.errors.map((p) => p.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${e.join(", ")}` : p.message)
  );
  return /* @__PURE__ */ d.jsxs("div", { className: "space-y-2 w-full", children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        ...a(),
        className: j(
          "relative flex flex-col items-center justify-center w-full min-h-38.5 border border-gray-50 rounded-[0.625rem] cursor-pointer transition-colors bg-white",
          s && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ d.jsx("input", { ...i() }),
          /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ d.jsx("div", { className: "size-12 flex items-center justify-center rounded-full bg-gray-25 mb-4", children: /* @__PURE__ */ d.jsx(vl, { className: "size-6 text-blue-hepatica-600" }) }),
            /* @__PURE__ */ d.jsx("p", { className: "mb-2 text-sm text-gray-700 font-medium", children: "Click to upload or drag and drop" }),
            !!n && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-gray-500 text-center", children: n })
          ] })
        ]
      }
    ),
    l.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "space-y-1", children: l.map((u, p) => /* @__PURE__ */ d.jsx("p", { className: "text-sm text-bright-red-600", children: u }, p)) })
  ] });
}
function P2({ file: e, onChange: n }) {
  const t = ue(() => {
    n(null);
  }, [n]), r = e.type.startsWith("video/") ? "Video" : "Audio";
  return /* @__PURE__ */ d.jsxs("div", { className: "w-full p-4 flex justify-between items-center bg-white border border-gray-50 rounded-lg", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ d.jsx("div", { className: "size-10 bg-gray-25 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ d.jsx(vl, { className: "size-6 text-blue-hepatica-600" }) }),
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
        onClick: t,
        className: "size-10 flex items-center justify-center rounded-lg bg-white hover:bg-bright-red-100 transition-colors duration-200",
        children: /* @__PURE__ */ d.jsx(ng, { className: "size-4 text-bright-red-600" })
      }
    )
  ] });
}
function nS({
  accepts: e,
  onChange: n,
  value: t,
  placeholder: r = ""
}) {
  return t ? /* @__PURE__ */ d.jsx(P2, { file: t, onChange: n }) : /* @__PURE__ */ d.jsx(
    O2,
    {
      extensions: e,
      onDropFile: n,
      placeholder: r
    }
  );
}
function rS({ active: e, children: n, collapsed: t, disabled: r = !1 }) {
  return /* @__PURE__ */ d.jsx(
    to,
    {
      className: j(
        "flex w-full h-10 items-center justify-start gap-x-3 px-3 text-sm font-manrope font-semibold text-white bg-transparent [&>svg:size-4] hover:bg-blue-hepatica-600 rounded-lg transition-all duration-200",
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
function dc(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
function R2(e) {
  const n = f.useRef({ value: e, previous: e });
  return f.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
var $u = Object.freeze({
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
}), j2 = "VisuallyHidden", Bu = f.forwardRef(
  (e, n) => /* @__PURE__ */ d.jsx(
    le.span,
    {
      ...e,
      ref: n,
      style: { ...$u, ...e.style }
    }
  )
);
Bu.displayName = j2;
var T2 = Bu, N2 = [" ", "Enter", "ArrowUp", "ArrowDown"], A2 = [" ", "Enter"], en = "Select", [Co, ko, I2] = li(en), [On] = yt(en, [
  I2,
  It
]), So = It(), [F2, Wt] = On(en), [L2, W2] = On(en), Vu = (e) => {
  const {
    __scopeSelect: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: c,
    dir: l,
    name: u,
    autoComplete: p,
    disabled: m,
    required: g,
    form: x
  } = e, h = So(n), [v, w] = f.useState(null), [b, C] = f.useState(null), [S, y] = f.useState(!1), E = di(l), [_, P] = Tt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: en
  }), [A, L] = Tt({
    prop: i,
    defaultProp: s,
    onChange: c,
    caller: en
  }), q = f.useRef(null), G = v ? x || !!v.closest("form") : !0, [H, z] = f.useState(/* @__PURE__ */ new Set()), Z = Array.from(H).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ d.jsx(ir, { ...h, children: /* @__PURE__ */ d.jsxs(
    F2,
    {
      required: g,
      scope: n,
      trigger: v,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: C,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: y,
      contentId: Ge(),
      value: A,
      onValueChange: L,
      open: _,
      onOpenChange: P,
      dir: E,
      triggerPointerDownPosRef: q,
      disabled: m,
      children: [
        /* @__PURE__ */ d.jsx(Co.Provider, { scope: n, children: /* @__PURE__ */ d.jsx(
          L2,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: f.useCallback(($) => {
              z((Q) => new Set(Q).add($));
            }, []),
            onNativeOptionRemove: f.useCallback(($) => {
              z((Q) => {
                const D = new Set(Q);
                return D.delete($), D;
              });
            }, []),
            children: t
          }
        ) }),
        G ? /* @__PURE__ */ d.jsxs(
          mp,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: u,
            autoComplete: p,
            value: A,
            onChange: ($) => L($.target.value),
            disabled: m,
            form: x,
            children: [
              A === void 0 ? /* @__PURE__ */ d.jsx("option", { value: "" }) : null,
              Array.from(H)
            ]
          },
          Z
        ) : null
      ]
    }
  ) });
};
Vu.displayName = en;
var Hu = "SelectTrigger", Yu = f.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, disabled: r = !1, ...o } = e, a = So(t), i = Wt(Hu, t), s = i.disabled || r, c = pe(n, i.onTriggerChange), l = ko(t), u = f.useRef("touch"), [p, m, g] = gp((h) => {
      const v = l().filter((C) => !C.disabled), w = v.find((C) => C.value === i.value), b = vp(v, h, w);
      b !== void 0 && i.onValueChange(b.value);
    }), x = (h) => {
      s || (i.onOpenChange(!0), g()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ d.jsx(sr, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
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
        "data-placeholder": hp(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: X(o.onClick, (h) => {
          h.currentTarget.focus(), u.current !== "mouse" && x(h);
        }),
        onPointerDown: X(o.onPointerDown, (h) => {
          u.current = h.pointerType;
          const v = h.target;
          v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (x(h), h.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (h) => {
          const v = p.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(v && h.key === " ") && N2.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
Yu.displayName = Hu;
var Uu = "SelectValue", Gu = f.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, children: a, placeholder: i = "", ...s } = e, c = Wt(Uu, t), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, p = pe(n, c.onValueNodeChange);
    return We(() => {
      l(u);
    }, [l, u]), /* @__PURE__ */ d.jsx(
      le.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: hp(c.value) ? /* @__PURE__ */ d.jsx(d.Fragment, { children: i }) : a
      }
    );
  }
);
Gu.displayName = Uu;
var z2 = "SelectIcon", qu = f.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, children: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(le.span, { "aria-hidden": !0, ...o, ref: n, children: r || "▼" });
  }
);
qu.displayName = z2;
var $2 = "SelectPortal", Ku = (e) => /* @__PURE__ */ d.jsx(Qn, { asChild: !0, ...e });
Ku.displayName = $2;
var tn = "SelectContent", Zu = f.forwardRef(
  (e, n) => {
    const t = Wt(tn, e.__scopeSelect), [r, o] = f.useState();
    if (We(() => {
      o(new DocumentFragment());
    }, []), !t.open) {
      const a = r;
      return a ? Zr.createPortal(
        /* @__PURE__ */ d.jsx(Xu, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx(Co.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ d.jsx(Ju, { ...e, ref: n });
  }
);
Zu.displayName = tn;
var tt = 10, [Xu, zt] = On(tn), B2 = "SelectContentImpl", V2 = /* @__PURE__ */ Zt("SelectContent.RemoveScroll"), Ju = f.forwardRef(
  (e, n) => {
    const {
      __scopeSelect: t,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: v,
      //
      ...w
    } = e, b = Wt(tn, t), [C, S] = f.useState(null), [y, E] = f.useState(null), _ = pe(n, (O) => S(O)), [P, A] = f.useState(null), [L, q] = f.useState(
      null
    ), G = ko(t), [H, z] = f.useState(!1), Z = f.useRef(!1);
    f.useEffect(() => {
      if (C) return Qr(C);
    }, [C]), Xr();
    const $ = f.useCallback(
      (O) => {
        const [U, ...J] = G().map((I) => I.ref.current), [B] = J.slice(-1), ae = document.activeElement;
        for (const I of O)
          if (I === ae || (I?.scrollIntoView({ block: "nearest" }), I === U && y && (y.scrollTop = 0), I === B && y && (y.scrollTop = y.scrollHeight), I?.focus(), document.activeElement !== ae)) return;
      },
      [G, y]
    ), Q = f.useCallback(
      () => $([P, C]),
      [$, P, C]
    );
    f.useEffect(() => {
      H && Q();
    }, [H, Q]);
    const { onOpenChange: D, triggerPointerDownPosRef: R } = b;
    f.useEffect(() => {
      if (C) {
        let O = { x: 0, y: 0 };
        const U = (B) => {
          O = {
            x: Math.abs(Math.round(B.pageX) - (R.current?.x ?? 0)),
            y: Math.abs(Math.round(B.pageY) - (R.current?.y ?? 0))
          };
        }, J = (B) => {
          O.x <= 10 && O.y <= 10 ? B.preventDefault() : C.contains(B.target) || D(!1), document.removeEventListener("pointermove", U), R.current = null;
        };
        return R.current !== null && (document.addEventListener("pointermove", U), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", U), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [C, D, R]), f.useEffect(() => {
      const O = () => D(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [D]);
    const [M, k] = gp((O) => {
      const U = G().filter((ae) => !ae.disabled), J = U.find((ae) => ae.ref.current === document.activeElement), B = vp(U, O, J);
      B && setTimeout(() => B.ref.current.focus());
    }), T = f.useCallback(
      (O, U, J) => {
        const B = !Z.current && !J;
        (b.value !== void 0 && b.value === U || B) && (A(O), B && (Z.current = !0));
      },
      [b.value]
    ), W = f.useCallback(() => C?.focus(), [C]), F = f.useCallback(
      (O, U, J) => {
        const B = !Z.current && !J;
        (b.value !== void 0 && b.value === U || B) && q(O);
      },
      [b.value]
    ), K = r === "popper" ? Ea : Qu, Y = K === Ea ? {
      side: s,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ d.jsx(
      Xu,
      {
        scope: t,
        content: C,
        viewport: y,
        onViewportChange: E,
        itemRefCallback: T,
        selectedItem: P,
        onItemLeave: W,
        itemTextRefCallback: F,
        focusSelectedItem: Q,
        selectedItemText: L,
        position: r,
        isPositioned: H,
        searchRef: M,
        children: /* @__PURE__ */ d.jsx(er, { as: V2, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          Jn,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: X(o, (O) => {
              b.trigger?.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              kn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  K,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...w,
                    ...Y,
                    onPlaced: () => z(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: X(w.onKeyDown, (O) => {
                      const U = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !U && O.key.length === 1 && k(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let B = G().filter((ae) => !ae.disabled).map((ae) => ae.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (B = B.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const ae = O.target, I = B.indexOf(ae);
                          B = B.slice(I + 1);
                        }
                        setTimeout(() => $(B)), O.preventDefault();
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
Ju.displayName = B2;
var H2 = "SelectItemAlignedPosition", Qu = f.forwardRef((e, n) => {
  const { __scopeSelect: t, onPlaced: r, ...o } = e, a = Wt(tn, t), i = zt(tn, t), [s, c] = f.useState(null), [l, u] = f.useState(null), p = pe(n, (_) => u(_)), m = ko(t), g = f.useRef(!1), x = f.useRef(!0), { viewport: h, selectedItem: v, selectedItemText: w, focusSelectedItem: b } = i, C = f.useCallback(() => {
    if (a.trigger && a.valueNode && s && l && h && v && w) {
      const _ = a.trigger.getBoundingClientRect(), P = l.getBoundingClientRect(), A = a.valueNode.getBoundingClientRect(), L = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ae = L.left - P.left, I = A.left - ae, ve = _.left - I, ne = _.width + ve, ie = Math.max(ne, P.width), Me = window.innerWidth - tt, _e = dc(I, [
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
        const ae = P.right - L.right, I = window.innerWidth - A.right - ae, ve = window.innerWidth - _.right - I, ne = _.width + ve, ie = Math.max(ne, P.width), Me = window.innerWidth - tt, _e = dc(I, [
          tt,
          Math.max(tt, Me - ie)
        ]);
        s.style.minWidth = ne + "px", s.style.right = _e + "px";
      }
      const q = m(), G = window.innerHeight - tt * 2, H = h.scrollHeight, z = window.getComputedStyle(l), Z = parseInt(z.borderTopWidth, 10), $ = parseInt(z.paddingTop, 10), Q = parseInt(z.borderBottomWidth, 10), D = parseInt(z.paddingBottom, 10), R = Z + $ + H + D + Q, M = Math.min(v.offsetHeight * 5, R), k = window.getComputedStyle(h), T = parseInt(k.paddingTop, 10), W = parseInt(k.paddingBottom, 10), F = _.top + _.height / 2 - tt, K = G - F, Y = v.offsetHeight / 2, O = v.offsetTop + Y, U = Z + $ + O, J = R - U;
      if (U <= F) {
        const ae = q.length > 0 && v === q[q.length - 1].ref.current;
        s.style.bottom = "0px";
        const I = l.clientHeight - h.offsetTop - h.offsetHeight, ve = Math.max(
          K,
          Y + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ae ? W : 0) + I + Q
        ), ne = U + ve;
        s.style.height = ne + "px";
      } else {
        const ae = q.length > 0 && v === q[0].ref.current;
        s.style.top = "0px";
        const ve = Math.max(
          F,
          Z + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ae ? T : 0) + Y
        ) + J;
        s.style.height = ve + "px", h.scrollTop = U - F + h.offsetTop;
      }
      s.style.margin = `${tt}px 0`, s.style.minHeight = M + "px", s.style.maxHeight = G + "px", r?.(), requestAnimationFrame(() => g.current = !0);
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
  We(() => C(), [C]);
  const [S, y] = f.useState();
  We(() => {
    l && y(window.getComputedStyle(l).zIndex);
  }, [l]);
  const E = f.useCallback(
    (_) => {
      _ && x.current === !0 && (C(), b?.(), x.current = !1);
    },
    [C, b]
  );
  return /* @__PURE__ */ d.jsx(
    U2,
    {
      scope: t,
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
              ref: p,
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
Qu.displayName = H2;
var Y2 = "SelectPopperPosition", Ea = f.forwardRef((e, n) => {
  const {
    __scopeSelect: t,
    align: r = "start",
    collisionPadding: o = tt,
    ...a
  } = e, i = So(t);
  return /* @__PURE__ */ d.jsx(
    fo,
    {
      ...i,
      ...a,
      ref: n,
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
Ea.displayName = Y2;
var [U2, Oi] = On(tn, {}), _a = "SelectViewport", ep = f.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, nonce: r, ...o } = e, a = zt(_a, t), i = Oi(_a, t), s = pe(n, a.onViewportChange), c = f.useRef(0);
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
      /* @__PURE__ */ d.jsx(Co.Slot, { scope: t, children: /* @__PURE__ */ d.jsx(
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
            const u = l.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = i;
            if (m?.current && p) {
              const g = Math.abs(c.current - u.scrollTop);
              if (g > 0) {
                const x = window.innerHeight - tt * 2, h = parseFloat(p.style.minHeight), v = parseFloat(p.style.height), w = Math.max(h, v);
                if (w < x) {
                  const b = w + g, C = Math.min(x, b), S = b - C;
                  p.style.height = C + "px", p.style.bottom === "0px" && (u.scrollTop = S > 0 ? S : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = u.scrollTop;
          })
        }
      ) })
    ] });
  }
);
ep.displayName = _a;
var tp = "SelectGroup", [G2, q2] = On(tp), np = f.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = Ge();
    return /* @__PURE__ */ d.jsx(G2, { scope: t, id: o, children: /* @__PURE__ */ d.jsx(le.div, { role: "group", "aria-labelledby": o, ...r, ref: n }) });
  }
);
np.displayName = tp;
var rp = "SelectLabel", op = f.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = q2(rp, t);
    return /* @__PURE__ */ d.jsx(le.div, { id: o.id, ...r, ref: n });
  }
);
op.displayName = rp;
var Ur = "SelectItem", [K2, ap] = On(Ur), ip = f.forwardRef(
  (e, n) => {
    const {
      __scopeSelect: t,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = Wt(Ur, t), c = zt(Ur, t), l = s.value === r, [u, p] = f.useState(a ?? ""), [m, g] = f.useState(!1), x = pe(
      n,
      (b) => c.itemRefCallback?.(b, r, o)
    ), h = Ge(), v = f.useRef("touch"), w = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d.jsx(
      K2,
      {
        scope: t,
        value: r,
        disabled: o,
        textId: h,
        isSelected: l,
        onItemTextChange: f.useCallback((b) => {
          p((C) => C || (b?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d.jsx(
          Co.ItemSlot,
          {
            scope: t,
            value: r,
            disabled: o,
            textValue: u,
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
                onPointerDown: X(i.onPointerDown, (b) => {
                  v.current = b.pointerType;
                }),
                onPointerMove: X(i.onPointerMove, (b) => {
                  v.current = b.pointerType, o ? c.onItemLeave?.() : v.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(i.onPointerLeave, (b) => {
                  b.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: X(i.onKeyDown, (b) => {
                  c.searchRef?.current !== "" && b.key === " " || (A2.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
ip.displayName = Ur;
var Bn = "SelectItemText", sp = f.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, ...a } = e, i = Wt(Bn, t), s = zt(Bn, t), c = ap(Bn, t), l = W2(Bn, t), [u, p] = f.useState(null), m = pe(
      n,
      (w) => p(w),
      c.onItemTextChange,
      (w) => s.itemTextRefCallback?.(w, c.value, c.disabled)
    ), g = u?.textContent, x = f.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: v } = l;
    return We(() => (h(x), () => v(x)), [h, v, x]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(le.span, { id: c.textId, ...a, ref: m }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Zr.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
sp.displayName = Bn;
var cp = "SelectItemIndicator", lp = f.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return ap(cp, t).isSelected ? /* @__PURE__ */ d.jsx(le.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }
);
lp.displayName = cp;
var Ma = "SelectScrollUpButton", dp = f.forwardRef((e, n) => {
  const t = zt(Ma, e.__scopeSelect), r = Oi(Ma, e.__scopeSelect), [o, a] = f.useState(!1), i = pe(n, r.onScrollButtonChange);
  return We(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = t.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    pp,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = t;
        s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
dp.displayName = Ma;
var Da = "SelectScrollDownButton", up = f.forwardRef((e, n) => {
  const t = zt(Da, e.__scopeSelect), r = Oi(Da, e.__scopeSelect), [o, a] = f.useState(!1), i = pe(n, r.onScrollButtonChange);
  return We(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const l = c.scrollHeight - c.clientHeight, u = Math.ceil(c.scrollTop) < l;
        a(u);
      };
      const c = t.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    pp,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: c } = t;
        s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
up.displayName = Da;
var pp = f.forwardRef((e, n) => {
  const { __scopeSelect: t, onAutoScroll: r, ...o } = e, a = zt("SelectScrollButton", t), i = f.useRef(null), s = ko(t), c = f.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return f.useEffect(() => () => c(), [c]), We(() => {
    s().find((u) => u.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ d.jsx(
    le.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: n,
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
}), Z2 = "SelectSeparator", fp = f.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return /* @__PURE__ */ d.jsx(le.div, { "aria-hidden": !0, ...r, ref: n });
  }
);
fp.displayName = Z2;
var Oa = "SelectArrow", X2 = f.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = So(t), a = Wt(Oa, t), i = zt(Oa, t);
    return a.open && i.position === "popper" ? /* @__PURE__ */ d.jsx(mo, { ...o, ...r, ref: n }) : null;
  }
);
X2.displayName = Oa;
var J2 = "SelectBubbleInput", mp = f.forwardRef(
  ({ __scopeSelect: e, value: n, ...t }, r) => {
    const o = f.useRef(null), a = pe(r, o), i = R2(n);
    return f.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== n && u) {
        const p = new Event("change", { bubbles: !0 });
        u.call(s, n), s.dispatchEvent(p);
      }
    }, [i, n]), /* @__PURE__ */ d.jsx(
      le.select,
      {
        ...t,
        style: { ...$u, ...t.style },
        ref: a,
        defaultValue: n
      }
    );
  }
);
mp.displayName = J2;
function hp(e) {
  return e === "" || e === void 0;
}
function gp(e) {
  const n = rt(e), t = f.useRef(""), r = f.useRef(0), o = f.useCallback(
    (i) => {
      const s = t.current + i;
      n(s), (function c(l) {
        t.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(s);
    },
    [n]
  ), a = f.useCallback(() => {
    t.current = "", window.clearTimeout(r.current);
  }, []);
  return f.useEffect(() => () => window.clearTimeout(r.current), []), [t, o, a];
}
function vp(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((l) => l === n[0]) ? n[0] : n, a = t ? e.indexOf(t) : -1;
  let i = Q2(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((l) => l !== t));
  const c = i.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== t ? c : void 0;
}
function Q2(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var eC = Vu, tC = Yu, nC = Gu, rC = qu, oC = Ku, aC = Zu, iC = ep, sC = np, cC = op, lC = ip, dC = sp, uC = lp, pC = dp, fC = up, mC = fp;
function hC({ ...e }) {
  return /* @__PURE__ */ d.jsx(eC, { "data-slot": "select", ...e });
}
function oS({ ...e }) {
  return /* @__PURE__ */ d.jsx(sC, { "data-slot": "select-group", ...e });
}
function gC({ ...e }) {
  return /* @__PURE__ */ d.jsx(nC, { "data-slot": "select-value", ...e });
}
function vC({
  className: e,
  size: n = "default",
  variant: t = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ d.jsxs(
    tC,
    {
      "data-slot": "select-trigger",
      "data-size": n,
      className: j(
        "flex w-full items-center justify-between gap-2 font-manrope bg-white whitespace-nowrap data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
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
        /* @__PURE__ */ d.jsx(rC, { asChild: !0, children: /* @__PURE__ */ d.jsx(
          Ya,
          {
            className: j({
              "size-6 text-gray-300": t === "default",
              "size-4 text-gray-600": t === "ghost"
            })
          }
        ) })
      ]
    }
  );
}
function xC({
  className: e,
  children: n,
  position: t = "popper",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ d.jsx(oC, { children: /* @__PURE__ */ d.jsxs(
    aC,
    {
      "data-slot": "select-content",
      className: j(
        "bg-white font-manrope text-gray-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height)  origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-gray-25 shadow-md",
        t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: t,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ d.jsx(yC, {}),
        /* @__PURE__ */ d.jsx(
          iC,
          {
            className: j(
              "p-1",
              t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: n
          }
        ),
        /* @__PURE__ */ d.jsx(wC, {})
      ]
    }
  ) });
}
function aS({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    cC,
    {
      "data-slot": "select-label",
      className: j("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...n
    }
  );
}
function bC({
  className: e,
  children: n,
  ...t
}) {
  return /* @__PURE__ */ d.jsxs(
    lC,
    {
      "data-slot": "select-item",
      className: j(
        "focus:bg-gray-25 focus:text-blue-hepatica-600 [&_svg:not([class*='text-'])]:text-gray-300 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...t,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(uC, { children: /* @__PURE__ */ d.jsx(nr, { className: "size-4" }) }) }),
        /* @__PURE__ */ d.jsx(dC, { children: n })
      ]
    }
  );
}
function iS({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    mC,
    {
      "data-slot": "select-separator",
      className: j("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...n
    }
  );
}
function yC({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    pC,
    {
      "data-slot": "select-scroll-up-button",
      className: j("flex cursor-default items-center justify-center py-1", e),
      ...n,
      children: /* @__PURE__ */ d.jsx(Uh, { className: "size-4" })
    }
  );
}
function wC({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    fC,
    {
      "data-slot": "select-scroll-down-button",
      className: j("flex cursor-default items-center justify-center py-1", e),
      ...n,
      children: /* @__PURE__ */ d.jsx(Ya, { className: "size-4" })
    }
  );
}
function sS({
  page: e,
  pageSize: n,
  totalItems: t,
  pageSizeOptions: r = [5, 10, 25, 50],
  onPageChange: o,
  onPageSizeChange: a,
  disabled: i = !1,
  className: s,
  ...c
}) {
  const l = Math.max(1, Math.ceil(t / Math.max(n, 1))), u = Math.min(Math.max(e, 1), l), p = t === 0 ? 0 : (u - 1) * n + 1, m = t === 0 ? 0 : Math.min(t, u * n), g = !i && u > 1, x = !i && u < l, h = () => {
    g && o(u - 1);
  }, v = () => {
    x && o(u + 1);
  }, w = (b) => {
    Number.isNaN(Number(b)) || a?.(Number(b));
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-slot": "pagination",
      className: j(
        "flex w-full items-center justify-end gap-4 py-3 text-sm text-gray-700",
        "border-t border-gray-50",
        s
      ),
      ...c,
      children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ d.jsx("span", { className: "font-manrope text-xs text-gray-700", children: "Rows per page:" }),
          /* @__PURE__ */ d.jsx("div", { className: "w-16", children: /* @__PURE__ */ d.jsxs(
            hC,
            {
              disabled: i || !a,
              defaultValue: `${n}`,
              onValueChange: w,
              "data-testid": "pagination--items-per-page",
              children: [
                /* @__PURE__ */ d.jsx(vC, { variant: "ghost", disabled: i, children: /* @__PURE__ */ d.jsx(gC, { placeholder: "Theme" }) }),
                /* @__PURE__ */ d.jsx(xC, { children: r.map((b) => /* @__PURE__ */ d.jsx(bC, { value: `${b}`, children: b }, b)) })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ d.jsx("p", { "data-slot": "pagination-range", className: "text-xs text-gray-600 whitespace-nowrap", children: t === 0 ? "0 of 0" : `${p} – ${m} of ${t}` }),
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
                children: /* @__PURE__ */ d.jsx(gl, { className: "size-4" })
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
                children: /* @__PURE__ */ d.jsx(ro, { className: "size-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function cS({
  checked: e,
  children: n,
  name: t,
  onChange: r,
  value: o,
  disabled: a = !1
}) {
  const i = `${t}-${o}`;
  return /* @__PURE__ */ d.jsxs(
    "label",
    {
      htmlFor: i,
      className: j(
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
              name: t,
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
              className: j(
                "pointer-events-none size-4 border border-gray-700 rounded-full flex items-center justify-center",
                {
                  "border-2 border-blue-hepatica-600": e
                }
              ),
              children: /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: j("size-2 rounded-full bg-transparent", {
                    "bg-blue-hepatica-600": e
                  })
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "", children: n })
      ]
    }
  );
}
const CC = no("bg-white rounded-2xl overflow-hidden flex flex-col w-full", {
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
function lS({
  title: e,
  children: n,
  footer: t,
  elevation: r = "elevation-0",
  className: o,
  ...a
}) {
  return /* @__PURE__ */ d.jsxs("section", { ...a, className: j(CC({ elevation: r, className: o })), children: [
    !!e && /* @__PURE__ */ d.jsx("header", { className: "h-15 flex items-center px-8 border-b border-b-gray-25", children: /* @__PURE__ */ d.jsx("h3", { className: "font-manrope font-semibold text-base text-gray-900 leading-5", children: e }) }),
    /* @__PURE__ */ d.jsx("div", { className: "flex flex-col p-4 md:p-8!", children: n }),
    !!t && /* @__PURE__ */ d.jsx("footer", { className: "px-4 md:px-8! py-4 md:py-6! border-t border-t-gray-25", children: t })
  ] });
}
function dS({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "shimmer",
      "aria-hidden": "true",
      className: j(
        "relative overflow-hidden rounded-md",
        "bg-linear-to-r from-gray-50 via-gray-50/25 to-gray-50",
        "bg-size-[200%_100%] animate-[shimmer_2.5s_ease-in-out_infinite]",
        "h-4 w-full",
        e
      ),
      ...n
    }
  );
}
var xp = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, uc = N.createContext && /* @__PURE__ */ N.createContext(xp), kC = ["attr", "size", "title"];
function SC(e, n) {
  if (e == null) return {};
  var t = EC(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function EC(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function Gr() {
  return Gr = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Gr.apply(this, arguments);
}
function pc(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function qr(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? pc(Object(t), !0).forEach(function(r) {
      _C(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pc(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _C(e, n, t) {
  return n = MC(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function MC(e) {
  var n = DC(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function DC(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function bp(e) {
  return e && e.map((n, t) => /* @__PURE__ */ N.createElement(n.tag, qr({
    key: t
  }, n.attr), bp(n.child)));
}
function OC(e) {
  return (n) => /* @__PURE__ */ N.createElement(PC, Gr({
    attr: qr({}, e.attr)
  }, n), bp(e.child));
}
function PC(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: a
    } = e, i = SC(e, kC), s = o || t.size || "1em", c;
    return t.className && (c = t.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ N.createElement("svg", Gr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, i, {
      className: c,
      style: qr(qr({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ N.createElement("title", null, a), e.children);
  };
  return uc !== void 0 ? /* @__PURE__ */ N.createElement(uc.Consumer, null, (t) => n(t)) : n(xp);
}
function RC(e) {
  return OC({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM22.0104 8.81412L20.5962 7.3999L16 11.9961L20.5962 16.5923L22.0104 15.1781L18.8284 11.9961L22.0104 8.81412Z" }, child: [] }] })(e);
}
const jC = new URL("data:image/svg+xml,%3csvg%20width='247'%20height='980'%20viewBox='0%200%20247%20980'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9467_2027)'%3e%3crect%20width='247'%20height='983'%20fill='black'/%3e%3cg%20opacity='0.3'%20filter='url(%23filter0_f_9467_2027)'%3e%3cellipse%20cx='-129.135'%20cy='1014.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20-129.135%201014.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.3'%20filter='url(%23filter1_f_9467_2027)'%3e%3cellipse%20cx='450.01'%20cy='1514.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20450.01%201514.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter2_f_9467_2027)'%3e%3cellipse%20cx='119.407'%20cy='-84.3658'%20rx='364.442'%20ry='193.158'%20fill='%230B495D'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter3_f_9467_2027)'%3e%3cellipse%20cx='399.478'%20cy='-0.360779'%20rx='364.442'%20ry='193.158'%20transform='rotate(30%20399.478%20-0.360779)'%20fill='%23BF3535'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter4_f_9467_2027)'%3e%3cellipse%20cx='-312.773'%20cy='835'%20rx='434.874'%20ry='485.827'%20transform='rotate(-136.998%20-312.773%20835)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter5_f_9467_2027)'%3e%3cellipse%20cx='336.608'%20cy='1039.65'%20rx='553.734'%20ry='293.484'%20transform='rotate(7.13051%20336.608%201039.65)'%20fill='%23660000'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_9467_2027'%20x='-691.145'%20y='128.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_9467_2027'%20x='-112'%20y='628.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_9467_2027'%20x='-453.839'%20y='-486.327'%20width='1146.49'%20height='803.922'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_9467_2027'%20x='-139.475'%20y='-456.526'%20width='1077.91'%20height='912.33'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_9467_2027'%20x='-1172.05'%20y='-27.8358'%20width='1718.56'%20height='1725.67'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_9467_2027'%20x='-531.326'%20y='423.111'%20width='1735.87'%20height='1233.08'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='158.628'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cclipPath%20id='clip0_9467_2027'%3e%3crect%20width='247'%20height='983'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", import.meta.url).href;
function uS({ children: e }) {
  const [n, t] = Fe(!1), r = ue(() => t((a) => !a), []), o = ue(() => t(!1), []);
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      "button",
      {
        type: "button",
        onClick: r,
        className: j(
          "fixed left-4 top-4 z-40 inline-flex size-12 items-center justify-center",
          "rounded-lg bg-black",
          "lg:hidden"
          // hide the button when viewport >= 912px
        ),
        "aria-label": n ? "Close sidebar" : "Open sidebar",
        children: /* @__PURE__ */ d.jsx(RC, { className: "size-6 text-white" })
      }
    ),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        className: j(
          "fixed inset-0 z-30 bg-black/40 transition-opacity sidebar:hidden lg:hidden",
          n ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: o
      }
    ),
    /* @__PURE__ */ d.jsxs(
      "aside",
      {
        className: j(
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
          /* @__PURE__ */ d.jsx(
            "img",
            {
              src: jC,
              alt: "",
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
            }
          ),
          /* @__PURE__ */ d.jsxs("div", { className: "w-66.75 grid grid-rows-[112px_1fr]", children: [
            /* @__PURE__ */ d.jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col items-center gap-y-2", children: [
              /* @__PURE__ */ d.jsx(zu, { className: "size-10.5" }),
              /* @__PURE__ */ d.jsx("h1", { className: "font-manrope font-nromal text-base text-white tracking-[0.04em]", children: "MercySeat" })
            ] }) }),
            /* @__PURE__ */ d.jsx("div", { className: "overflow-hidden w-66.75", children: e })
          ] })
        ]
      }
    )
  ] });
}
function TC({
  index: e,
  label: n,
  current: t,
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
        "data-current": t,
        disabled: o,
        "aria-current": t ? "step" : void 0,
        onClick: () => {
          t || o || a();
        },
        className: j(
          "w-8 h-8 rounded-full flex justify-center items-center",
          "border border-gray-50 bg-gray-25",
          {
            "bg-blue-hepatica-600 text-white border-none hover:bg-blue-hepatica-700": t || r,
            "cursor-not-allowed": o
          }
        ),
        children: r && !t ? /* @__PURE__ */ d.jsx(nr, { className: "size-4 text-white", "aria-hidden": "true" }) : /* @__PURE__ */ d.jsx(
          "span",
          {
            className: j("font-semibold text-sm text-gray-300", {
              "text-white": t
            }),
            children: e + 1
          }
        )
      }
    ),
    /* @__PURE__ */ d.jsx(
      "span",
      {
        className: j(
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
function pS({
  steps: e,
  currentId: n,
  onStepChange: t,
  className: r
}) {
  const o = e.findIndex((a) => a.id === n);
  return /* @__PURE__ */ d.jsx(
    "nav",
    {
      "aria-label": "Steps",
      "data-slot": "steps",
      className: j("w-full", r),
      children: /* @__PURE__ */ d.jsxs("ol", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ d.jsx("span", { className: "absolute border-b border-b-gray-50 top-1/2 left-0 right-0" }),
        e.map((a, i) => {
          const s = o !== -1 && i < o;
          return /* @__PURE__ */ d.jsx(
            TC,
            {
              current: a.id === n,
              completed: s,
              disabled: a.disabled,
              index: i,
              label: a.label,
              onClick: () => t(a.id)
            },
            a.id
          );
        })
      ] })
    }
  );
}
function fS({ children: e, items: n, className: t, align: r = "end", side: o = "bottom" }) {
  return /* @__PURE__ */ d.jsxs(ew, { children: [
    /* @__PURE__ */ d.jsx(tw, { asChild: !0, children: e }),
    /* @__PURE__ */ d.jsx(nw, { children: /* @__PURE__ */ d.jsx(
      rw,
      {
        className: j(
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
        children: n.map((a, i) => /* @__PURE__ */ d.jsxs(
          ow,
          {
            className: j(
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
function mS({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ d.jsx(
    "table",
    {
      "data-slot": "table",
      className: j("w-full caption-bottom text-sm", e),
      ...n
    }
  ) });
}
function hS({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: j("border-b-2 border-b-gray-50", e),
      ...n
    }
  );
}
function gS({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: j("[&_tr:last-child]:border-0", e),
      ...n
    }
  );
}
function vS({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: j(
        "bg-white border-t border-t-gray-50 font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...n
    }
  );
}
function xS({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: j(
        "hover:bg-blue-hepatica-100 data-[state=selected]:bg-blue-hepatica-100 border-b border-b-gray-50 transition-colors",
        e
      ),
      ...n
    }
  );
}
function bS({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: j(
        "font-manrope text-sm text-gray-900 tracking-[0.02em] h-12 px-4 text-left align-middle font-semibold whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function yS({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: j(
        "px-4 py-2 font-manrope align-middle whitespace-nowrap text-sm tracking-[0.02em] text-gray-700 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function wS({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "caption",
    {
      "data-slot": "table-caption",
      className: j("text-muted-foreground mt-4 text-sm", e),
      ...n
    }
  );
}
function CS({ className: e, ...n }) {
  return /* @__PURE__ */ d.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: j(
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
const NC = /^\s*(\d{1,2}):(\d{2})\s*$/, AC = /^\s*(\d{1,2}):(\d{2})\s*(AM|PM)\s*$/i;
function ft(e) {
  const n = NC.exec(e);
  if (!n) return null;
  const t = Number(n[1]), r = Number(n[2]);
  return t < 0 || t > 23 || r < 0 || r > 59 ? null : { hours: t, minutes: r };
}
function IC(e) {
  const n = AC.exec(e);
  if (!n) return null;
  let t = Number(n[1]);
  const r = Number(n[2]);
  return t < 1 || t > 12 || r < 0 || r > 59 ? null : (n[3].toUpperCase() === "AM" ? t = t === 12 ? 0 : t : t = t === 12 ? 12 : t + 12, { hours: t, minutes: r });
}
function FC(e) {
  return ft(e) ?? IC(e);
}
function fc({ hours: e, minutes: n }) {
  return `${String(e).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function Mr({ hours: e, minutes: n }) {
  const t = e >= 12 ? "PM" : "AM", r = e % 12 === 0 ? 12 : e % 12;
  return `${String(r).padStart(2, "0")}:${String(n).padStart(2, "0")} ${t}`;
}
function Yt(e) {
  return e.hours * 60 + e.minutes;
}
function LC(e) {
  let n = "", t = -1, r = "", o = !1, a = !1;
  for (const s of e.toUpperCase()) {
    if (s >= "0" && s <= "9") {
      if (o) continue;
      n.length < 4 && (n += s);
      continue;
    }
    if (s === ":") {
      t === -1 && n.length > 0 && n.length < 4 && (t = n.length);
      continue;
    }
    if (s === "A" || s === "P") {
      r || (r = s), o = !0, a = !1;
      continue;
    }
    if (s === "M") {
      (r === "A" || r === "P") && (r += "M"), o = !0, a = !1;
      continue;
    }
    s === " " && n.length > 0 && !r && (a = !0);
  }
  let i = "";
  if (n.length > 0) {
    const s = t !== -1 ? t : n.length > 2 ? 2 : -1;
    i = s === -1 ? n : `${n.slice(0, s)}:${n.slice(s)}`;
  }
  return r ? i ? `${i} ${r}` : r : a ? `${i} ` : i;
}
function kS({
  value: e,
  onChange: n,
  minTime: t,
  maxTime: r,
  options: o,
  placeholder: a = "",
  className: i,
  disabled: s,
  id: c,
  name: l,
  "aria-invalid": u,
  "aria-label": p,
  "aria-labelledby": m,
  "aria-describedby": g
}) {
  const [x, h] = Fe(null), [v, w] = Fe(!1), [b, C] = Fe(-1), S = ht(null), E = `timepicker-listbox-${hc()}`, _ = !!o && o.length > 0, P = Be(() => {
    if (x !== null) return x;
    if (!e) return "";
    const D = ft(e);
    return D ? Mr(D) : "";
  }, [x, e]), A = Be(() => {
    if (!e) return !1;
    const D = ft(e);
    if (!D) return !1;
    const R = Yt(D);
    if (t) {
      const M = ft(t);
      if (M && R < Yt(M)) return !0;
    }
    if (r) {
      const M = ft(r);
      if (M && R > Yt(M)) return !0;
    }
    return !1;
  }, [e, t, r]), L = Be(() => {
    if (!_) return [];
    const D = t ? ft(t) : null, R = r ? ft(r) : null, M = P.toUpperCase().trim();
    return o.filter((k) => {
      const T = ft(k);
      return !T || D && Yt(T) < Yt(D) || R && Yt(T) > Yt(R) ? !1 : M ? Mr(T).startsWith(M) || k.startsWith(M) : !0;
    });
  }, [_, o, P, t, r]);
  function q(D) {
    const R = LC(D.target.value);
    if (h(R), C(-1), _ && w(!0), R.trim() === "") {
      n("");
      return;
    }
    const M = FC(R);
    M && n(fc(M));
  }
  function G() {
    _ && w(!0);
  }
  function H() {
    h(null), w(!1), C(-1);
  }
  function z(D) {
    const R = ft(D);
    h(Mr(R)), n(fc(R)), w(!1), C(-1), S.current?.focus();
  }
  function Z(D) {
    if (_) {
      if (!v) {
        D.key === "ArrowDown" && (w(!0), C(0), D.preventDefault());
        return;
      }
      D.key === "ArrowDown" ? (C((R) => L.length === 0 ? -1 : (R + 1) % L.length), D.preventDefault()) : D.key === "ArrowUp" ? (C(
        (R) => L.length === 0 ? -1 : R <= 0 ? L.length - 1 : R - 1
      ), D.preventDefault()) : D.key === "Enter" ? b >= 0 && b < L.length && (z(L[b]), D.preventDefault()) : D.key === "Escape" && (w(!1), C(-1));
    }
  }
  Kt(() => {
    if (b < 0) return;
    document.querySelector(
      `[data-timepicker-option][data-listbox-id="${E}"][data-index="${b}"]`
    )?.scrollIntoView?.({ block: "nearest" });
  }, [b, E]);
  const $ = u !== void 0 ? u : A || void 0, Q = b >= 0 && b < L.length ? `${E}-${b}` : void 0;
  return /* @__PURE__ */ d.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ d.jsx(
      qh,
      {
        "aria-hidden": !0,
        className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-300"
      }
    ),
    /* @__PURE__ */ d.jsx(
      "input",
      {
        ref: S,
        id: c,
        name: l,
        type: "text",
        inputMode: "text",
        autoComplete: "off",
        spellCheck: !1,
        "data-slot": "timepicker-input",
        "data-empty": !e,
        role: _ ? "combobox" : void 0,
        "aria-autocomplete": _ ? "list" : void 0,
        "aria-controls": _ ? E : void 0,
        "aria-expanded": _ ? v : void 0,
        "aria-activedescendant": Q,
        "aria-invalid": $,
        "aria-label": p,
        "aria-labelledby": m,
        "aria-describedby": g,
        disabled: s,
        placeholder: a,
        value: P,
        onChange: q,
        onFocus: G,
        onBlur: H,
        onKeyDown: Z,
        className: j(
          "border border-gray-200 h-10 w-full min-w-0 rounded-sm bg-transparent pl-9 pr-3 text-base font-manrope transition-[color,box-shadow]",
          "outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "hover:border-blue-hepatica-700 focus-visible:border-2 focus-visible:border-blue-hepatica-600",
          "focus-visible:shadow-button focus-visible:ring-0 focus-visible:bg-blue-hepatica-50",
          "aria-invalid:border-bright-red-600 aria-invalid:focus-visible:border-bright-red-600",
          i
        )
      }
    ),
    _ && v && L.length > 0 && /* @__PURE__ */ d.jsx(
      "ul",
      {
        id: E,
        role: "listbox",
        "data-slot": "timepicker-listbox",
        className: "absolute left-0 right-0 z-50 mt-1 max-h-60 overflow-y-auto rounded-sm border border-gray-200 bg-white py-1 shadow-dropdown",
        children: L.map((D, R) => {
          const M = Mr(ft(D)), k = R === b;
          return /* @__PURE__ */ d.jsx(
            "li",
            {
              id: `${E}-${R}`,
              role: "option",
              "aria-selected": k,
              "data-timepicker-option": !0,
              "data-listbox-id": E,
              "data-index": R,
              "data-active": k,
              onMouseDown: (T) => {
                T.preventDefault(), z(D);
              },
              onMouseEnter: () => C(R),
              className: j(
                "cursor-pointer px-3 py-1.5 text-sm hover:bg-blue-hepatica-50",
                k && "bg-blue-hepatica-50"
              ),
              children: M
            },
            D
          );
        })
      }
    )
  ] });
}
var [Eo] = yt("Tooltip", [
  It
]), _o = It(), yp = "TooltipProvider", WC = 700, Pa = "tooltip.open", [zC, Pi] = Eo(yp), wp = (e) => {
  const {
    __scopeTooltip: n,
    delayDuration: t = WC,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = f.useRef(!0), s = f.useRef(!1), c = f.useRef(0);
  return f.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ d.jsx(
    zC,
    {
      scope: n,
      isOpenDelayedRef: i,
      delayDuration: t,
      onOpen: f.useCallback(() => {
        window.clearTimeout(c.current), i.current = !1;
      }, []),
      onClose: f.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: f.useCallback((l) => {
        s.current = l;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
wp.displayName = yp;
var Zn = "Tooltip", [$C, Mo] = Eo(Zn), Cp = (e) => {
  const {
    __scopeTooltip: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, c = Pi(Zn, e.__scopeTooltip), l = _o(n), [u, p] = f.useState(null), m = Ge(), g = f.useRef(0), x = i ?? c.disableHoverableContent, h = s ?? c.delayDuration, v = f.useRef(!1), [w, b] = Tt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (_) => {
      _ ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Pa))) : c.onClose(), a?.(_);
    },
    caller: Zn
  }), C = f.useMemo(() => w ? v.current ? "delayed-open" : "instant-open" : "closed", [w]), S = f.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, v.current = !1, b(!0);
  }, [b]), y = f.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, b(!1);
  }, [b]), E = f.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      v.current = !0, b(!0), g.current = 0;
    }, h);
  }, [h, b]);
  return f.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ d.jsx(ir, { ...l, children: /* @__PURE__ */ d.jsx(
    $C,
    {
      scope: n,
      contentId: m,
      open: w,
      stateAttribute: C,
      trigger: u,
      onTriggerChange: p,
      onTriggerEnter: f.useCallback(() => {
        c.isOpenDelayedRef.current ? E() : S();
      }, [c.isOpenDelayedRef, E, S]),
      onTriggerLeave: f.useCallback(() => {
        x ? y() : (window.clearTimeout(g.current), g.current = 0);
      }, [y, x]),
      onOpen: S,
      onClose: y,
      disableHoverableContent: x,
      children: t
    }
  ) });
};
Cp.displayName = Zn;
var Ra = "TooltipTrigger", kp = f.forwardRef(
  (e, n) => {
    const { __scopeTooltip: t, ...r } = e, o = Mo(Ra, t), a = Pi(Ra, t), i = _o(t), s = f.useRef(null), c = pe(n, s, o.onTriggerChange), l = f.useRef(!1), u = f.useRef(!1), p = f.useCallback(() => l.current = !1, []);
    return f.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ d.jsx(sr, { asChild: !0, ...i, children: /* @__PURE__ */ d.jsx(
      le.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: X(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: X(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: X(e.onPointerDown, () => {
          o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", p, { once: !0 });
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
kp.displayName = Ra;
var BC = "TooltipPortal", [SS, VC] = Eo(BC, {
  forceMount: void 0
}), Cn = "TooltipContent", Sp = f.forwardRef(
  (e, n) => {
    const t = VC(Cn, e.__scopeTooltip), { forceMount: r = t.forceMount, side: o = "top", ...a } = e, i = Mo(Cn, e.__scopeTooltip);
    return /* @__PURE__ */ d.jsx(it, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ d.jsx(Ep, { side: o, ...a, ref: n }) : /* @__PURE__ */ d.jsx(HC, { side: o, ...a, ref: n }) });
  }
), HC = f.forwardRef((e, n) => {
  const t = Mo(Cn, e.__scopeTooltip), r = Pi(Cn, e.__scopeTooltip), o = f.useRef(null), a = pe(n, o), [i, s] = f.useState(null), { trigger: c, onClose: l } = t, u = o.current, { onPointerInTransitChange: p } = r, m = f.useCallback(() => {
    s(null), p(!1);
  }, [p]), g = f.useCallback(
    (x, h) => {
      const v = x.currentTarget, w = { x: x.clientX, y: x.clientY }, b = KC(w, v.getBoundingClientRect()), C = ZC(w, b), S = XC(h.getBoundingClientRect()), y = QC([...C, ...S]);
      s(y), p(!0);
    },
    [p]
  );
  return f.useEffect(() => () => m(), [m]), f.useEffect(() => {
    if (c && u) {
      const x = (v) => g(v, u), h = (v) => g(v, c);
      return c.addEventListener("pointerleave", x), u.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", x), u.removeEventListener("pointerleave", h);
      };
    }
  }, [c, u, g, m]), f.useEffect(() => {
    if (i) {
      const x = (h) => {
        const v = h.target, w = { x: h.clientX, y: h.clientY }, b = c?.contains(v) || u?.contains(v), C = !JC(w, i);
        b ? m() : C && (m(), l());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [c, u, i, l, m]), /* @__PURE__ */ d.jsx(Ep, { ...e, ref: a });
}), [YC, UC] = Eo(Zn, { isInside: !1 }), GC = /* @__PURE__ */ vc("TooltipContent"), Ep = f.forwardRef(
  (e, n) => {
    const {
      __scopeTooltip: t,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, c = Mo(Cn, t), l = _o(t), { onClose: u } = c;
    return f.useEffect(() => (document.addEventListener(Pa, u), () => document.removeEventListener(Pa, u)), [u]), f.useEffect(() => {
      if (c.trigger) {
        const p = (m) => {
          m.target?.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ d.jsx(
      kn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ d.jsxs(
          fo,
          {
            "data-state": c.stateAttribute,
            ...l,
            ...s,
            ref: n,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ d.jsx(GC, { children: r }),
              /* @__PURE__ */ d.jsx(YC, { scope: t, isInside: !0, children: /* @__PURE__ */ d.jsx(T2, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Sp.displayName = Cn;
var _p = "TooltipArrow", qC = f.forwardRef(
  (e, n) => {
    const { __scopeTooltip: t, ...r } = e, o = _o(t);
    return UC(
      _p,
      t
    ).isInside ? null : /* @__PURE__ */ d.jsx(mo, { ...o, ...r, ref: n });
  }
);
qC.displayName = _p;
function KC(e, n) {
  const t = Math.abs(n.top - e.y), r = Math.abs(n.bottom - e.y), o = Math.abs(n.right - e.x), a = Math.abs(n.left - e.x);
  switch (Math.min(t, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case t:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ZC(e, n, t = 5) {
  const r = [];
  switch (n) {
    case "top":
      r.push(
        { x: e.x - t, y: e.y + t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x + t, y: e.y - t }
      );
      break;
    case "left":
      r.push(
        { x: e.x + t, y: e.y - t },
        { x: e.x + t, y: e.y + t }
      );
      break;
    case "right":
      r.push(
        { x: e.x - t, y: e.y - t },
        { x: e.x - t, y: e.y + t }
      );
      break;
  }
  return r;
}
function XC(e) {
  const { top: n, right: t, bottom: r, left: o } = e;
  return [
    { x: o, y: n },
    { x: t, y: n },
    { x: t, y: r },
    { x: o, y: r }
  ];
}
function JC(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let a = 0, i = n.length - 1; a < n.length; i = a++) {
    const s = n[a], c = n[i], l = s.x, u = s.y, p = c.x, m = c.y;
    u > r != m > r && t < (p - l) * (r - u) / (m - u) + l && (o = !o);
  }
  return o;
}
function QC(e) {
  const n = e.slice();
  return n.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), ek(n);
}
function ek(e) {
  if (e.length <= 1) return e.slice();
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  n.pop();
  const t = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  return t.pop(), n.length === 1 && t.length === 1 && n[0].x === t[0].x && n[0].y === t[0].y ? n : n.concat(t);
}
function ES({
  delayDuration: e = 0,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    wp,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...n
    }
  );
}
function _S({ ...e }) {
  return /* @__PURE__ */ d.jsx(Cp, { "data-slot": "tooltip", ...e });
}
function MS({ ...e }) {
  return /* @__PURE__ */ d.jsx(kp, { "data-slot": "tooltip-trigger", ...e });
}
function DS({
  className: e,
  sideOffset: n = 6,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Sp,
    {
      "data-slot": "tooltip-content",
      sideOffset: n,
      className: j(
        "bg-gray-25 text-gray-700 z-50 overflow-hidden rounded-sm px-3 py-1.5 text-xs font-medium tracking-[0.02em]",
        "animate-in fade-in-0 zoom-in-95",
        "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...t
    }
  );
}
const tk = no("font-manrope text-gray-900", {
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
}), nk = {
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
function OS(e) {
  const { as: n, variant: t, className: r, children: o, ...a } = e, i = t ?? "body-md", s = n ?? nk[i];
  return /* @__PURE__ */ d.jsx(
    s,
    {
      className: j(tk({ variant: i }), r),
      ...a,
      children: o
    }
  );
}
export {
  sk as AlertDialog,
  xw as AnalyticsIcon,
  bw as AnnouncementIcon,
  ck as Badge,
  lk as Breadcrumb,
  uk as BreadcrumbItem,
  pk as BreadcrumbLink,
  dk as BreadcrumbList,
  fk as BreadcrumbPage,
  mk as BreadcrumbSeparator,
  oo as Button,
  Zx as Calendar,
  Xx as CalendarDayButton,
  hk as Checkbox,
  yw as ChurchIcon,
  ww as ClassIcon,
  Cw as CrownIcon,
  vk as DatePicker,
  xk as Dialog,
  ak as DialogAction,
  ik as DialogCancel,
  yk as DialogClose,
  wk as DialogContent,
  Ek as DialogDescription,
  kk as DialogFooter,
  Ck as DialogHeader,
  Ay as DialogOverlay,
  Ny as DialogPortal,
  Sk as DialogTitle,
  bk as DialogTrigger,
  _k as DropdownMenu,
  jk as DropdownMenuCheckboxItem,
  Ok as DropdownMenuContent,
  Pk as DropdownMenuGroup,
  Rk as DropdownMenuItem,
  Ak as DropdownMenuLabel,
  Mk as DropdownMenuPortal,
  Tk as DropdownMenuRadioGroup,
  Nk as DropdownMenuRadioItem,
  Ik as DropdownMenuSeparator,
  Fk as DropdownMenuShortcut,
  Lk as DropdownMenuSub,
  zk as DropdownMenuSubContent,
  Wk as DropdownMenuSubTrigger,
  Dk as DropdownMenuTrigger,
  kw as EventIcon,
  $k as Form,
  Yk as FormControl,
  Uk as FormDescription,
  Bk as FormField,
  Vk as FormItem,
  Hk as FormLabel,
  Gk as FormMessage,
  Sw as GiftIcon,
  Ew as HomeIcon,
  qk as Icon,
  Kk as ImageUploader,
  p2 as Input,
  Xk as InputOTP,
  Jk as InputOTPGroup,
  eS as InputOTPSeparator,
  Qk as InputOTPSlot,
  yu as Label,
  _w as ListIcon,
  Mw as LivestreamIcon,
  Dw as LockClosedIcon,
  Ow as LockOpenIcon,
  zu as Logo,
  tS as LogoLockup,
  nS as MediaUploader,
  rS as MenuItem,
  Pw as MinistryIcon,
  sS as Pagination,
  Zk as PasswordInput,
  Rw as PodcastIcon,
  Ry as Popover,
  gk as PopoverAnchor,
  Ty as PopoverContent,
  jy as PopoverTrigger,
  cS as RadioButton,
  lS as Section,
  hC as Select,
  xC as SelectContent,
  oS as SelectGroup,
  bC as SelectItem,
  aS as SelectLabel,
  wC as SelectScrollDownButton,
  yC as SelectScrollUpButton,
  iS as SelectSeparator,
  vC as SelectTrigger,
  gC as SelectValue,
  jw as SeriesIcon,
  Tw as SermonIcon,
  dS as Shimmer,
  uS as Sidebar,
  pS as Stepper,
  Nw as SubscriptionIcon,
  fS as SuspendedMenu,
  mS as Table,
  gS as TableBody,
  wS as TableCaption,
  yS as TableCell,
  vS as TableFooter,
  bS as TableHead,
  hS as TableHeader,
  xS as TableRow,
  CS as Textarea,
  kS as TimePicker,
  _S as Tooltip,
  DS as TooltipContent,
  ES as TooltipProvider,
  MS as TooltipTrigger,
  OS as Typography,
  Aw as VideoIcon,
  Th as badgeVariants,
  pa as buttonVariants,
  tk as typographyVariants,
  yo as useFormField
};
