import * as u from "react";
import ae, { useState as Te, forwardRef as hr, createElement as wo, useLayoutEffect as ed, useContext as Co, createContext as fs, useId as td, useMemo as ut, useRef as Nt, useReducer as nd, useEffect as dn, useCallback as ye, useImperativeHandle as rd, Fragment as od } from "react";
import * as gr from "react-dom";
import ad from "react-dom";
function Uo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var An = { exports: {} }, en = {};
var Ia;
function id() {
  if (Ia) return en;
  Ia = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
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
  return en.Fragment = n, en.jsx = t, en.jsxs = t, en;
}
var tn = {};
var La;
function sd() {
  return La || (La = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(y) {
      if (y == null) return null;
      if (typeof y == "function")
        return y.$$typeof === J ? null : y.displayName || y.name || null;
      if (typeof y == "string") return y;
      switch (y) {
        case v:
          return "Fragment";
        case b:
          return "Profiler";
        case w:
          return "StrictMode";
        case D:
          return "Suspense";
        case j:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof y == "object")
        switch (typeof y.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), y.$$typeof) {
          case h:
            return "Portal";
          case E:
            return y.displayName || "Context";
          case S:
            return (y._context.displayName || "Context") + ".Consumer";
          case C:
            var O = y.render;
            return y = y.displayName, y || (y = O.displayName || O.name || "", y = y !== "" ? "ForwardRef(" + y + ")" : "ForwardRef"), y;
          case R:
            return O = y.displayName || null, O !== null ? O : e(y.type) || "Memo";
          case L:
            O = y._payload, y = y._init;
            try {
              return e(y(O));
            } catch {
            }
        }
      return null;
    }
    function n(y) {
      return "" + y;
    }
    function t(y) {
      try {
        n(y);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var I = O.error, T = typeof Symbol == "function" && Symbol.toStringTag && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return I.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), n(y);
      }
    }
    function r(y) {
      if (y === v) return "<>";
      if (typeof y == "object" && y !== null && y.$$typeof === L)
        return "<...>";
      try {
        var O = e(y);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var y = q.A;
      return y === null ? null : y.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(y) {
      if (U.call(y, "key")) {
        var O = Object.getOwnPropertyDescriptor(y, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return y.key !== void 0;
    }
    function s(y, O) {
      function I() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(y, "key", {
        get: I,
        configurable: !0
      });
    }
    function l() {
      var y = e(this.type);
      return ee[y] || (ee[y] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), y = this.props.ref, y !== void 0 ? y : null;
    }
    function d(y, O, I, T, G, W) {
      var k = I.ref;
      return y = {
        $$typeof: x,
        type: y,
        key: O,
        props: I,
        _owner: T
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(y, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(y, "ref", { enumerable: !1, value: null }), y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(y, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(y, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.defineProperty(y, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    }
    function p(y, O, I, T, G, W) {
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
        k = e(y);
        var V = Object.keys(O).filter(function(F) {
          return F !== "key";
        });
        T = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", _[k + T] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          k,
          V,
          k
        ), _[k + T] = !0);
      }
      if (k = null, I !== void 0 && (t(I), k = "" + I), i(O) && (t(O.key), k = "" + O.key), "key" in O) {
        I = {};
        for (var X in O)
          X !== "key" && (I[X] = O[X]);
      } else I = O;
      return k && s(
        I,
        typeof y == "function" ? y.displayName || y.name || "Unknown" : y
      ), d(
        y,
        k,
        I,
        o(),
        G,
        W
      );
    }
    function f(y) {
      m(y) ? y._store && (y._store.validated = 1) : typeof y == "object" && y !== null && y.$$typeof === L && (y._payload.status === "fulfilled" ? m(y._payload.value) && y._payload.value._store && (y._payload.value._store.validated = 1) : y._store && (y._store.validated = 1));
    }
    function m(y) {
      return typeof y == "object" && y !== null && y.$$typeof === x;
    }
    var g = ae, x = /* @__PURE__ */ Symbol.for("react.transitional.element"), h = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), S = /* @__PURE__ */ Symbol.for("react.consumer"), E = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.suspense_list"), R = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), J = /* @__PURE__ */ Symbol.for("react.client.reference"), q = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, H = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(y) {
        return y();
      }
    };
    var $, ee = {}, P = g.react_stack_bottom_frame.bind(
      g,
      a
    )(), N = Q(r(a)), _ = {};
    tn.Fragment = v, tn.jsx = function(y, O, I) {
      var T = 1e4 > q.recentlyCreatedOwnerStacks++;
      return p(
        y,
        O,
        I,
        !1,
        T ? Error("react-stack-top-frame") : P,
        T ? Q(r(y)) : N
      );
    }, tn.jsxs = function(y, O, I) {
      var T = 1e4 > q.recentlyCreatedOwnerStacks++;
      return p(
        y,
        O,
        I,
        !0,
        T ? Error("react-stack-top-frame") : P,
        T ? Q(r(y)) : N
      );
    };
  })()), tn;
}
var Fa;
function cd() {
  return Fa || (Fa = 1, process.env.NODE_ENV === "production" ? An.exports = id() : An.exports = sd()), An.exports;
}
var c = cd();
function ld(e, n) {
  const t = u.createContext(n), r = (a) => {
    const { children: i, ...s } = a, l = u.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ c.jsx(t.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const i = u.useContext(t);
    if (i) return i;
    if (n !== void 0) return n;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Ze(e, n = []) {
  let t = [];
  function r(a, i) {
    const s = u.createContext(i), l = t.length;
    t = [...t, i];
    const d = (f) => {
      const { scope: m, children: g, ...x } = f, h = m?.[e]?.[l] || s, v = u.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ c.jsx(h.Provider, { value: v, children: g });
    };
    d.displayName = a + "Provider";
    function p(f, m) {
      const g = m?.[e]?.[l] || s, x = u.useContext(g);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [d, p];
  }
  const o = () => {
    const a = t.map((i) => u.createContext(i));
    return function(s) {
      const l = s?.[e] || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, ud(o, ...n)];
}
function ud(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: d }) => {
        const f = l(a)[`__scope${d}`];
        return { ...s, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
function za(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function Xe(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const a = za(o, n);
      return !t && typeof a == "function" && (t = !0), a;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : za(e[o], null);
        }
      };
  };
}
function ce(...e) {
  return u.useCallback(Xe(...e), e);
}
function Y(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e?.(o), t === !1 || !o.defaultPrevented)
      return n?.(o);
  };
}
var Re = globalThis?.document ? u.useLayoutEffect : () => {
}, dd = u[" useId ".trim().toString()] || (() => {
}), pd = 0;
function De(e) {
  const [n, t] = u.useState(dd());
  return Re(() => {
    t((r) => r ?? String(pd++));
  }, [e]), e || (n ? `radix-${n}` : "");
}
var fd = u[" useInsertionEffect ".trim().toString()] || Re;
function dt({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, a, i] = md({
    defaultProp: n,
    onChange: t
  }), s = e !== void 0, l = s ? e : o;
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
        const f = hd(p) ? p(e) : p;
        f !== e && i.current?.(f);
      } else
        a(p);
    },
    [s, e, a, i]
  );
  return [l, d];
}
function md({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = u.useState(e), o = u.useRef(t), a = u.useRef(n);
  return fd(() => {
    a.current = n;
  }, [n]), u.useEffect(() => {
    o.current !== t && (a.current?.(t), o.current = t);
  }, [t, o]), [t, r, a];
}
function hd(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function gd(e) {
  const n = /* @__PURE__ */ vd(e), t = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(bd);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function vd(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (u.isValidElement(o)) {
      const i = wd(o), s = yd(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? Xe(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var xd = /* @__PURE__ */ Symbol("radix.slottable");
function bd(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xd;
}
function yd(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], a = n[r];
    /^on[A-Z]/.test(r) ? o && a ? t[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...a } : r === "className" && (t[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function wd(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Cd = [
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
], se = Cd.reduce((e, n) => {
  const t = /* @__PURE__ */ gd(`Primitive.${n}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? t : n;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function ms(e, n) {
  e && gr.flushSync(() => e.dispatchEvent(n));
}
function We(e) {
  const n = u.useRef(e);
  return u.useEffect(() => {
    n.current = e;
  }), u.useMemo(() => (...t) => n.current?.(...t), []);
}
function Sd(e, n = globalThis?.document) {
  const t = We(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && t(o);
    };
    return n.addEventListener("keydown", r, { capture: !0 }), () => n.removeEventListener("keydown", r, { capture: !0 });
  }, [t, n]);
}
var Ed = "DismissableLayer", So = "dismissableLayer.update", kd = "dismissableLayer.pointerDownOutside", _d = "dismissableLayer.focusOutside", $a, hs = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ut = u.forwardRef(
  (e, n) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, d = u.useContext(hs), [p, f] = u.useState(null), m = p?.ownerDocument ?? globalThis?.document, [, g] = u.useState({}), x = ce(n, (j) => f(j)), h = Array.from(d.layers), [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(v), b = p ? h.indexOf(p) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, E = b >= w, C = jd((j) => {
      const R = j.target, L = [...d.branches].some((B) => B.contains(R));
      !E || L || (o?.(j), i?.(j), j.defaultPrevented || s?.());
    }, m), D = Od((j) => {
      const R = j.target;
      [...d.branches].some((B) => B.contains(R)) || (a?.(j), i?.(j), j.defaultPrevented || s?.());
    }, m);
    return Sd((j) => {
      b === d.layers.size - 1 && (r?.(j), !j.defaultPrevented && s && (j.preventDefault(), s()));
    }, m), u.useEffect(() => {
      if (p)
        return t && (d.layersWithOutsidePointerEventsDisabled.size === 0 && ($a = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), Wa(), () => {
          t && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = $a);
        };
    }, [p, m, t, d]), u.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), Wa());
    }, [p, d]), u.useEffect(() => {
      const j = () => g({});
      return document.addEventListener(So, j), () => document.removeEventListener(So, j);
    }, []), /* @__PURE__ */ c.jsx(
      se.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: S ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Y(e.onFocusCapture, D.onFocusCapture),
        onBlurCapture: Y(e.onBlurCapture, D.onBlurCapture),
        onPointerDownCapture: Y(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Ut.displayName = Ed;
var Pd = "DismissableLayerBranch", Rd = u.forwardRef((e, n) => {
  const t = u.useContext(hs), r = u.useRef(null), o = ce(n, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return t.branches.add(a), () => {
        t.branches.delete(a);
      };
  }, [t.branches]), /* @__PURE__ */ c.jsx(se.div, { ...e, ref: o });
});
Rd.displayName = Pd;
function jd(e, n = globalThis?.document) {
  const t = We(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          gs(
            kd,
            t,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: s };
        s.pointerType === "touch" ? (n.removeEventListener("click", o.current), o.current = l, n.addEventListener("click", o.current, { once: !0 })) : l();
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
function Od(e, n = globalThis?.document) {
  const t = We(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && gs(_d, t, { originalEvent: a }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", o), () => n.removeEventListener("focusin", o);
  }, [n, t]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Wa() {
  const e = new CustomEvent(So);
  document.dispatchEvent(e);
}
function gs(e, n, t, { discrete: r }) {
  const o = t.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  n && o.addEventListener(e, n, { once: !0 }), r ? ms(o, a) : o.dispatchEvent(a);
}
var Yr = "focusScope.autoFocusOnMount", qr = "focusScope.autoFocusOnUnmount", Va = { bubbles: !1, cancelable: !0 }, Md = "FocusScope", bn = u.forwardRef((e, n) => {
  const {
    loop: t = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, l] = u.useState(null), d = We(o), p = We(a), f = u.useRef(null), m = ce(n, (h) => l(h)), g = u.useRef({
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
      let h = function(S) {
        if (g.paused || !s) return;
        const E = S.target;
        s.contains(E) ? f.current = E : lt(f.current, { select: !0 });
      }, v = function(S) {
        if (g.paused || !s) return;
        const E = S.relatedTarget;
        E !== null && (s.contains(E) || lt(f.current, { select: !0 }));
      }, w = function(S) {
        if (document.activeElement === document.body)
          for (const C of S)
            C.removedNodes.length > 0 && lt(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", v);
      const b = new MutationObserver(w);
      return s && b.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", v), b.disconnect();
      };
    }
  }, [r, s, g.paused]), u.useEffect(() => {
    if (s) {
      Ha.add(g);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const w = new CustomEvent(Yr, Va);
        s.addEventListener(Yr, d), s.dispatchEvent(w), w.defaultPrevented || (Td(Ld(vs(s)), { select: !0 }), document.activeElement === h && lt(s));
      }
      return () => {
        s.removeEventListener(Yr, d), setTimeout(() => {
          const w = new CustomEvent(qr, Va);
          s.addEventListener(qr, p), s.dispatchEvent(w), w.defaultPrevented || lt(h ?? document.body, { select: !0 }), s.removeEventListener(qr, p), Ha.remove(g);
        }, 0);
      };
    }
  }, [s, d, p, g]);
  const x = u.useCallback(
    (h) => {
      if (!t && !r || g.paused) return;
      const v = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (v && w) {
        const b = h.currentTarget, [S, E] = Ad(b);
        S && E ? !h.shiftKey && w === E ? (h.preventDefault(), t && lt(S, { select: !0 })) : h.shiftKey && w === S && (h.preventDefault(), t && lt(E, { select: !0 })) : w === b && h.preventDefault();
      }
    },
    [t, r, g.paused]
  );
  return /* @__PURE__ */ c.jsx(se.div, { tabIndex: -1, ...i, ref: m, onKeyDown: x });
});
bn.displayName = Md;
function Td(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const r of e)
    if (lt(r, { select: n }), document.activeElement !== t) return;
}
function Ad(e) {
  const n = vs(e), t = Ba(n, e), r = Ba(n.reverse(), e);
  return [t, r];
}
function vs(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function Ba(e, n) {
  for (const t of e)
    if (!Dd(t, { upTo: n })) return t;
}
function Dd(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Nd(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function lt(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== t && Nd(e) && n && e.select();
  }
}
var Ha = Id();
function Id() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && t?.pause(), e = Ua(e, n), e.unshift(n);
    },
    remove(n) {
      e = Ua(e, n), e[0]?.resume();
    }
  };
}
function Ua(e, n) {
  const t = [...e], r = t.indexOf(n);
  return r !== -1 && t.splice(r, 1), t;
}
function Ld(e) {
  return e.filter((n) => n.tagName !== "A");
}
var Fd = "Portal", yn = u.forwardRef((e, n) => {
  const { container: t, ...r } = e, [o, a] = u.useState(!1);
  Re(() => a(!0), []);
  const i = t || o && globalThis?.document?.body;
  return i ? ad.createPortal(/* @__PURE__ */ c.jsx(se.div, { ...r, ref: n }), i) : null;
});
yn.displayName = Fd;
function zd(e, n) {
  return u.useReducer((t, r) => n[t][r] ?? t, e);
}
var He = (e) => {
  const { present: n, children: t } = e, r = $d(n), o = typeof t == "function" ? t({ present: r.isPresent }) : u.Children.only(t), a = ce(r.ref, Wd(o));
  return typeof t == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
He.displayName = "Presence";
function $d(e) {
  const [n, t] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = zd(i, {
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
    const d = Dn(r.current);
    a.current = s === "mounted" ? d : "none";
  }, [s]), Re(() => {
    const d = r.current, p = o.current;
    if (p !== e) {
      const m = a.current, g = Dn(d);
      e ? l("MOUNT") : g === "none" || d?.display === "none" ? l("UNMOUNT") : l(p && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Re(() => {
    if (n) {
      let d;
      const p = n.ownerDocument.defaultView ?? window, f = (g) => {
        const h = Dn(r.current).includes(CSS.escape(g.animationName));
        if (g.target === n && h && (l("ANIMATION_END"), !o.current)) {
          const v = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", d = p.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = v);
          });
        }
      }, m = (g) => {
        g.target === n && (a.current = Dn(r.current));
      };
      return n.addEventListener("animationstart", m), n.addEventListener("animationcancel", f), n.addEventListener("animationend", f), () => {
        p.clearTimeout(d), n.removeEventListener("animationstart", m), n.removeEventListener("animationcancel", f), n.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [n, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: u.useCallback((d) => {
      r.current = d ? getComputedStyle(d) : null, t(d);
    }, [])
  };
}
function Dn(e) {
  return e?.animationName || "none";
}
function Wd(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Kr = 0;
function vr() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ga()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ga()), Kr++, () => {
      Kr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Kr--;
    };
  }, []);
}
function Ga() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Eo = function(e, n) {
  return Eo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, Eo(e, n);
};
function Vd(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Eo(e, n);
  function t() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
var ve = function() {
  return ve = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
    }
    return n;
  }, ve.apply(this, arguments);
};
function xs(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
}
function Pt(e, n, t, r) {
  function o(a) {
    return a instanceof t ? a : new t(function(i) {
      i(a);
    });
  }
  return new (t || (t = Promise))(function(a, i) {
    function s(p) {
      try {
        d(r.next(p));
      } catch (f) {
        i(f);
      }
    }
    function l(p) {
      try {
        d(r.throw(p));
      } catch (f) {
        i(f);
      }
    }
    function d(p) {
      p.done ? a(p.value) : o(p.value).then(s, l);
    }
    d((r = r.apply(e, n || [])).next());
  });
}
function Bd(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, a; r < o; r++)
    (a || !(r in n)) && (a || (a = Array.prototype.slice.call(n, 0, r)), a[r] = n[r]);
  return e.concat(a || Array.prototype.slice.call(n));
}
var qn = "right-scroll-bar-position", Kn = "width-before-scroll-bar", Hd = "with-scroll-bars-hidden", Ud = "--removed-body-scroll-bar-size";
function Zr(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function Gd(e, n) {
  var t = Te(function() {
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
var Yd = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Ya = /* @__PURE__ */ new WeakMap();
function qd(e, n) {
  var t = Gd(null, function(r) {
    return e.forEach(function(o) {
      return Zr(o, r);
    });
  });
  return Yd(function() {
    var r = Ya.get(t);
    if (r) {
      var o = new Set(r), a = new Set(e), i = t.current;
      o.forEach(function(s) {
        a.has(s) || Zr(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Zr(s, i);
      });
    }
    Ya.set(t, e);
  }, [e]), t;
}
function Kd(e) {
  return e;
}
function Zd(e, n) {
  n === void 0 && (n = Kd);
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
      var l = function() {
        var p = i;
        i = [], p.forEach(a);
      }, d = function() {
        return Promise.resolve().then(l);
      };
      d(), t = {
        push: function(p) {
          i.push(p), d();
        },
        filter: function(p) {
          return i = i.filter(p), t;
        }
      };
    }
  };
  return o;
}
function Xd(e) {
  e === void 0 && (e = {});
  var n = Zd(null);
  return n.options = ve({ async: !0, ssr: !1 }, e), n;
}
var bs = function(e) {
  var n = e.sideCar, t = xs(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = n.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, ve({}, t));
};
bs.isSideCarExport = !0;
function Jd(e, n) {
  return e.useMedium(n), bs;
}
var ys = Xd(), Xr = function() {
}, xr = u.forwardRef(function(e, n) {
  var t = u.useRef(null), r = u.useState({
    onScrollCapture: Xr,
    onWheelCapture: Xr,
    onTouchMoveCapture: Xr
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, d = e.removeScrollBar, p = e.enabled, f = e.shards, m = e.sideCar, g = e.noRelative, x = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, S = e.gapMode, E = xs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = m, D = qd([t, n]), j = ve(ve({}, E), o);
  return u.createElement(
    u.Fragment,
    null,
    p && u.createElement(C, { sideCar: ys, removeScrollBar: d, shards: f, noRelative: g, noIsolation: x, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: t, gapMode: S }),
    i ? u.cloneElement(u.Children.only(s), ve(ve({}, j), { ref: D })) : u.createElement(b, ve({}, j, { className: l, ref: D }), s)
  );
});
xr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
xr.classNames = {
  fullWidth: Kn,
  zeroRight: qn
};
var Qd = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ep() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = Qd();
  return n && e.setAttribute("nonce", n), e;
}
function tp(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function np(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var rp = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = ep()) && (tp(n, t), np(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, op = function() {
  var e = rp();
  return function(n, t) {
    u.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, ws = function() {
  var e = op(), n = function(t) {
    var r = t.styles, o = t.dynamic;
    return e(r, o), null;
  };
  return n;
}, ap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Jr = function(e) {
  return parseInt(e || "", 10) || 0;
}, ip = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], r = n[e === "padding" ? "paddingTop" : "marginTop"], o = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [Jr(t), Jr(r), Jr(o)];
}, sp = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ap;
  var n = ip(e), t = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, r - t + n[2] - n[0])
  };
}, cp = ws(), It = "data-scroll-locked", lp = function(e, n, t, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(Hd, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(It, `] {
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
  
  .`).concat(qn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Kn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(qn, " .").concat(qn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Kn, " .").concat(Kn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(It, `] {
    `).concat(Ud, ": ").concat(s, `px;
  }
`);
}, qa = function() {
  var e = parseInt(document.body.getAttribute(It) || "0", 10);
  return isFinite(e) ? e : 0;
}, up = function() {
  u.useEffect(function() {
    return document.body.setAttribute(It, (qa() + 1).toString()), function() {
      var e = qa() - 1;
      e <= 0 ? document.body.removeAttribute(It) : document.body.setAttribute(It, e.toString());
    };
  }, []);
}, dp = function(e) {
  var n = e.noRelative, t = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  up();
  var a = u.useMemo(function() {
    return sp(o);
  }, [o]);
  return u.createElement(cp, { styles: lp(a, !n, o, t ? "" : "!important") });
}, ko = !1;
if (typeof window < "u")
  try {
    var Nn = Object.defineProperty({}, "passive", {
      get: function() {
        return ko = !0, !0;
      }
    });
    window.addEventListener("test", Nn, Nn), window.removeEventListener("test", Nn, Nn);
  } catch {
    ko = !1;
  }
var Ot = ko ? { passive: !1 } : !1, pp = function(e) {
  return e.tagName === "TEXTAREA";
}, Cs = function(e, n) {
  if (!(e instanceof Element))
    return !1;
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !pp(e) && t[n] === "visible")
  );
}, fp = function(e) {
  return Cs(e, "overflowY");
}, mp = function(e) {
  return Cs(e, "overflowX");
}, Ka = function(e, n) {
  var t = n.ownerDocument, r = n;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ss(e, r);
    if (o) {
      var a = Es(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== t.body);
  return !1;
}, hp = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, r = e.clientHeight;
  return [
    n,
    t,
    r
  ];
}, gp = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, r = e.clientWidth;
  return [
    n,
    t,
    r
  ];
}, Ss = function(e, n) {
  return e === "v" ? fp(n) : mp(n);
}, Es = function(e, n) {
  return e === "v" ? hp(n) : gp(n);
}, vp = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, xp = function(e, n, t, r, o) {
  var a = vp(e, window.getComputedStyle(n).direction), i = a * r, s = t.target, l = n.contains(s), d = !1, p = i > 0, f = 0, m = 0;
  do {
    if (!s)
      break;
    var g = Es(e, s), x = g[0], h = g[1], v = g[2], w = h - v - a * x;
    (x || w) && Ss(e, s) && (f += w, m += x);
    var b = s.parentNode;
    s = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (n.contains(s) || n === s)
  );
  return (p && Math.abs(f) < 1 || !p && Math.abs(m) < 1) && (d = !0), d;
}, In = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Za = function(e) {
  return [e.deltaX, e.deltaY];
}, Xa = function(e) {
  return e && "current" in e ? e.current : e;
}, bp = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, yp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, wp = 0, Mt = [];
function Cp(e) {
  var n = u.useRef([]), t = u.useRef([0, 0]), r = u.useRef(), o = u.useState(wp++)[0], a = u.useState(ws)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Bd([e.lockRef.current], (e.shards || []).map(Xa), !0).filter(Boolean);
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
    var w = In(h), b = t.current, S = "deltaX" in h ? h.deltaX : b[0] - w[0], E = "deltaY" in h ? h.deltaY : b[1] - w[1], C, D = h.target, j = Math.abs(S) > Math.abs(E) ? "h" : "v";
    if ("touches" in h && j === "h" && D.type === "range")
      return !1;
    var R = window.getSelection(), L = R && R.anchorNode, B = L ? L === D || L.contains(D) : !1;
    if (B)
      return !1;
    var J = Ka(j, D);
    if (!J)
      return !0;
    if (J ? C = j : (C = j === "v" ? "h" : "v", J = Ka(j, D)), !J)
      return !1;
    if (!r.current && "changedTouches" in h && (S || E) && (r.current = C), !C)
      return !0;
    var q = r.current || C;
    return xp(q, v, h, q === "h" ? S : E);
  }, []), l = u.useCallback(function(h) {
    var v = h;
    if (!(!Mt.length || Mt[Mt.length - 1] !== a)) {
      var w = "deltaY" in v ? Za(v) : In(v), b = n.current.filter(function(C) {
        return C.name === v.type && (C.target === v.target || v.target === C.shadowParent) && bp(C.delta, w);
      })[0];
      if (b && b.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!b) {
        var S = (i.current.shards || []).map(Xa).filter(Boolean).filter(function(C) {
          return C.contains(v.target);
        }), E = S.length > 0 ? s(v, S[0]) : !i.current.noIsolation;
        E && v.cancelable && v.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(h, v, w, b) {
    var S = { name: h, delta: v, target: w, should: b, shadowParent: Sp(w) };
    n.current.push(S), setTimeout(function() {
      n.current = n.current.filter(function(E) {
        return E !== S;
      });
    }, 1);
  }, []), p = u.useCallback(function(h) {
    t.current = In(h), r.current = void 0;
  }, []), f = u.useCallback(function(h) {
    d(h.type, Za(h), h.target, s(h, e.lockRef.current));
  }, []), m = u.useCallback(function(h) {
    d(h.type, In(h), h.target, s(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Mt.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, Ot), document.addEventListener("touchmove", l, Ot), document.addEventListener("touchstart", p, Ot), function() {
      Mt = Mt.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, Ot), document.removeEventListener("touchmove", l, Ot), document.removeEventListener("touchstart", p, Ot);
    };
  }, []);
  var g = e.removeScrollBar, x = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(a, { styles: yp(o) }) : null,
    g ? u.createElement(dp, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Sp(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
  return n;
}
const Ep = Jd(ys, Cp);
var wn = u.forwardRef(function(e, n) {
  return u.createElement(xr, ve({}, e, { ref: n, sideCar: Ep }));
});
wn.classNames = xr.classNames;
var kp = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, Tt = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), Fn = {}, Qr = 0, ks = function(e) {
  return e && (e.host || ks(e.parentNode));
}, _p = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var r = ks(t);
    return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, Pp = function(e, n, t, r) {
  var o = _p(n, Array.isArray(e) ? e : [e]);
  Fn[t] || (Fn[t] = /* @__PURE__ */ new WeakMap());
  var a = Fn[t], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), d = function(f) {
    !f || s.has(f) || (s.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var p = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (s.has(m))
        p(m);
      else
        try {
          var g = m.getAttribute(r), x = g !== null && g !== "false", h = (Tt.get(m) || 0) + 1, v = (a.get(m) || 0) + 1;
          Tt.set(m, h), a.set(m, v), i.push(m), h === 1 && x && Ln.set(m, !0), v === 1 && m.setAttribute(t, "true"), x || m.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return p(n), s.clear(), Qr++, function() {
    i.forEach(function(f) {
      var m = Tt.get(f) - 1, g = a.get(f) - 1;
      Tt.set(f, m), a.set(f, g), m || (Ln.has(f) || f.removeAttribute(r), Ln.delete(f)), g || f.removeAttribute(t);
    }), Qr--, Qr || (Tt = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), Fn = {});
  };
}, br = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = kp(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Pp(r, o, t, "aria-hidden")) : function() {
    return null;
  };
};
// @__NO_SIDE_EFFECTS__
function Rp(e) {
  const n = /* @__PURE__ */ jp(e), t = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(Mp);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function jp(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (u.isValidElement(o)) {
      const i = Ap(o), s = Tp(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? Xe(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Op = /* @__PURE__ */ Symbol("radix.slottable");
function Mp(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Op;
}
function Tp(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], a = n[r];
    /^on[A-Z]/.test(r) ? o && a ? t[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...a } : r === "className" && (t[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Ap(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var yr = "Dialog", [_s, Ps] = Ze(yr), [Dp, Ue] = _s(yr), Go = (e) => {
  const {
    __scopeDialog: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = u.useRef(null), l = u.useRef(null), [d, p] = dt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: yr
  });
  return /* @__PURE__ */ c.jsx(
    Dp,
    {
      scope: n,
      triggerRef: s,
      contentRef: l,
      contentId: De(),
      titleId: De(),
      descriptionId: De(),
      open: d,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((f) => !f), [p]),
      modal: i,
      children: t
    }
  );
};
Go.displayName = yr;
var Rs = "DialogTrigger", Yo = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Ue(Rs, t), a = ce(n, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      se.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ta(o.open),
        ...r,
        ref: a,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Yo.displayName = Rs;
var qo = "DialogPortal", [Np, js] = _s(qo, {
  forceMount: void 0
}), Ko = (e) => {
  const { __scopeDialog: n, forceMount: t, children: r, container: o } = e, a = Ue(qo, n);
  return /* @__PURE__ */ c.jsx(Np, { scope: n, forceMount: t, children: u.Children.map(r, (i) => /* @__PURE__ */ c.jsx(He, { present: t || a.open, children: /* @__PURE__ */ c.jsx(yn, { asChild: !0, container: o, children: i }) })) });
};
Ko.displayName = qo;
var Jn = "DialogOverlay", Zo = u.forwardRef(
  (e, n) => {
    const t = js(Jn, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, a = Ue(Jn, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx(He, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Lp, { ...o, ref: n }) }) : null;
  }
);
Zo.displayName = Jn;
var Ip = /* @__PURE__ */ Rp("DialogOverlay.RemoveScroll"), Lp = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Ue(Jn, t);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(wn, { as: Ip, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        se.div,
        {
          "data-state": ta(o.open),
          ...r,
          ref: n,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Ct = "DialogContent", Xo = u.forwardRef(
  (e, n) => {
    const t = js(Ct, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, a = Ue(Ct, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(He, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(Fp, { ...o, ref: n }) : /* @__PURE__ */ c.jsx(zp, { ...o, ref: n }) });
  }
);
Xo.displayName = Ct;
var Fp = u.forwardRef(
  (e, n) => {
    const t = Ue(Ct, e.__scopeDialog), r = u.useRef(null), o = ce(n, t.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return br(a);
    }, []), /* @__PURE__ */ c.jsx(
      Os,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Y(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), t.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Y(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: Y(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), zp = u.forwardRef(
  (e, n) => {
    const t = Ue(Ct, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Os,
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
), Os = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = Ue(Ct, t), l = u.useRef(null), d = ce(n, l);
    return vr(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        bn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ c.jsx(
            Ut,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": ta(s.open),
              ...i,
              ref: d,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(Wp, { titleId: s.titleId }),
        /* @__PURE__ */ c.jsx(Bp, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Jo = "DialogTitle", Qo = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Ue(Jo, t);
    return /* @__PURE__ */ c.jsx(se.h2, { id: o.titleId, ...r, ref: n });
  }
);
Qo.displayName = Jo;
var Ms = "DialogDescription", ea = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Ue(Ms, t);
    return /* @__PURE__ */ c.jsx(se.p, { id: o.descriptionId, ...r, ref: n });
  }
);
ea.displayName = Ms;
var Ts = "DialogClose", Cn = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Ue(Ts, t);
    return /* @__PURE__ */ c.jsx(
      se.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Cn.displayName = Ts;
function ta(e) {
  return e ? "open" : "closed";
}
var As = "DialogTitleWarning", [$p, Ds] = ld(As, {
  contentName: Ct,
  titleName: Jo,
  docsSlug: "dialog"
}), Wp = ({ titleId: e }) => {
  const n = Ds(As), t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(t));
  }, [t, e]), null;
}, Vp = "DialogDescriptionWarning", Bp = ({ contentRef: e, descriptionId: n }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ds(Vp).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    n && o && (document.getElementById(n) || console.warn(r));
  }, [r, e, n]), null;
}, Hp = Go, Up = Yo, Gp = Ko, Yp = Zo, qp = Xo, Kp = Qo, Zp = ea, Ns = Cn, Xp = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Jp(e) {
  const n = ({ children: t }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = Xp, n;
}
var Is = "AlertDialog", [Qp] = Ze(Is, [
  Ps
]), rt = Ps(), Ls = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = rt(n);
  return /* @__PURE__ */ c.jsx(Hp, { ...r, ...t, modal: !0 });
};
Ls.displayName = Is;
var ef = "AlertDialogTrigger", tf = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = rt(t);
    return /* @__PURE__ */ c.jsx(Up, { ...o, ...r, ref: n });
  }
);
tf.displayName = ef;
var nf = "AlertDialogPortal", Fs = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = rt(n);
  return /* @__PURE__ */ c.jsx(Gp, { ...r, ...t });
};
Fs.displayName = nf;
var rf = "AlertDialogOverlay", zs = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = rt(t);
    return /* @__PURE__ */ c.jsx(Yp, { ...o, ...r, ref: n });
  }
);
zs.displayName = rf;
var Lt = "AlertDialogContent", [of, af] = Qp(Lt), sf = /* @__PURE__ */ Jp("AlertDialogContent"), $s = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, children: r, ...o } = e, a = rt(t), i = u.useRef(null), s = ce(n, i), l = u.useRef(null);
    return /* @__PURE__ */ c.jsx(
      $p,
      {
        contentName: Lt,
        titleName: Ws,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ c.jsx(of, { scope: t, cancelRef: l, children: /* @__PURE__ */ c.jsxs(
          qp,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: Y(o.onOpenAutoFocus, (d) => {
              d.preventDefault(), l.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (d) => d.preventDefault(),
            onInteractOutside: (d) => d.preventDefault(),
            children: [
              /* @__PURE__ */ c.jsx(sf, { children: r }),
              /* @__PURE__ */ c.jsx(lf, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
$s.displayName = Lt;
var Ws = "AlertDialogTitle", Vs = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = rt(t);
    return /* @__PURE__ */ c.jsx(Kp, { ...o, ...r, ref: n });
  }
);
Vs.displayName = Ws;
var Bs = "AlertDialogDescription", Hs = u.forwardRef((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = rt(t);
  return /* @__PURE__ */ c.jsx(Zp, { ...o, ...r, ref: n });
});
Hs.displayName = Bs;
var cf = "AlertDialogAction", Us = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = rt(t);
    return /* @__PURE__ */ c.jsx(Ns, { ...o, ...r, ref: n });
  }
);
Us.displayName = cf;
var Gs = "AlertDialogCancel", Ys = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, { cancelRef: o } = af(Gs, t), a = rt(t), i = ce(n, o);
    return /* @__PURE__ */ c.jsx(Ns, { ...a, ...r, ref: i });
  }
);
Ys.displayName = Gs;
var lf = ({ contentRef: e }) => {
  const n = `\`${Lt}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Lt}\` by passing a \`${Bs}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Lt}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return u.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(n);
  }, [n, e]), null;
}, uf = Ls, df = Fs, pf = zs, ff = $s, A1 = Us, D1 = Ys, mf = Vs, Ja = Hs, hf = /* @__PURE__ */ Symbol.for("react.lazy"), Qn = u[" use ".trim().toString()];
function gf(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function qs(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === hf && "_payload" in e && gf(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  const n = /* @__PURE__ */ vf(e), t = u.forwardRef((r, o) => {
    let { children: a, ...i } = r;
    qs(a) && typeof Qn == "function" && (a = Qn(a._payload));
    const s = u.Children.toArray(a), l = s.find(bf);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
var wr = /* @__PURE__ */ Ks("Slot");
// @__NO_SIDE_EFFECTS__
function vf(e) {
  const n = u.forwardRef((t, r) => {
    let { children: o, ...a } = t;
    if (qs(o) && typeof Qn == "function" && (o = Qn(o._payload)), u.isValidElement(o)) {
      const i = wf(o), s = yf(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? Xe(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var xf = /* @__PURE__ */ Symbol("radix.slottable");
function bf(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xf;
}
function yf(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], a = n[r];
    /^on[A-Z]/.test(r) ? o && a ? t[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...a } : r === "className" && (t[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function wf(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Cf = [
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
], Sf = Cf.reduce((e, n) => {
  const t = /* @__PURE__ */ Ks(`Primitive.${n}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? t : n;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), Ef = Object.freeze({
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
}), kf = "VisuallyHidden", Zs = u.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(
    Sf.span,
    {
      ...e,
      ref: n,
      style: { ...Ef, ...e.style }
    }
  )
);
Zs.displayName = kf;
var _f = Zs;
function Xs(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = Xs(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Js() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = Xs(e)) && (r && (r += " "), r += n);
  return r;
}
const Pf = (e, n) => {
  const t = new Array(e.length + n.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e[r];
  for (let r = 0; r < n.length; r++)
    t[e.length + r] = n[r];
  return t;
}, Rf = (e, n) => ({
  classGroupId: e,
  validator: n
}), Qs = (e = /* @__PURE__ */ new Map(), n = null, t) => ({
  nextPart: e,
  validators: n,
  classGroupId: t
}), er = "-", Qa = [], jf = "arbitrary..", Of = (e) => {
  const n = Tf(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return Mf(i);
      const s = i.split(er), l = s[0] === "" && s.length > 1 ? 1 : 0;
      return ec(s, l, n);
    },
    getConflictingClassGroupIds: (i, s) => {
      if (s) {
        const l = r[i], d = t[i];
        return l ? d ? Pf(d, l) : l : d || Qa;
      }
      return t[i] || Qa;
    }
  };
}, ec = (e, n, t) => {
  if (e.length - n === 0)
    return t.classGroupId;
  const o = e[n], a = t.nextPart.get(o);
  if (a) {
    const d = ec(e, n + 1, a);
    if (d) return d;
  }
  const i = t.validators;
  if (i === null)
    return;
  const s = n === 0 ? e.join(er) : e.slice(n).join(er), l = i.length;
  for (let d = 0; d < l; d++) {
    const p = i[d];
    if (p.validator(s))
      return p.classGroupId;
  }
}, Mf = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), t = n.indexOf(":"), r = n.slice(0, t);
  return r ? jf + r : void 0;
})(), Tf = (e) => {
  const {
    theme: n,
    classGroups: t
  } = e;
  return Af(t, n);
}, Af = (e, n) => {
  const t = Qs();
  for (const r in e) {
    const o = e[r];
    na(o, t, r, n);
  }
  return t;
}, na = (e, n, t, r) => {
  const o = e.length;
  for (let a = 0; a < o; a++) {
    const i = e[a];
    Df(i, n, t, r);
  }
}, Df = (e, n, t, r) => {
  if (typeof e == "string") {
    Nf(e, n, t);
    return;
  }
  if (typeof e == "function") {
    If(e, n, t, r);
    return;
  }
  Lf(e, n, t, r);
}, Nf = (e, n, t) => {
  const r = e === "" ? n : tc(n, e);
  r.classGroupId = t;
}, If = (e, n, t, r) => {
  if (Ff(e)) {
    na(e(r), n, t, r);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(Rf(t, e));
}, Lf = (e, n, t, r) => {
  const o = Object.entries(e), a = o.length;
  for (let i = 0; i < a; i++) {
    const [s, l] = o[i];
    na(l, tc(n, s), t, r);
  }
}, tc = (e, n) => {
  let t = e;
  const r = n.split(er), o = r.length;
  for (let a = 0; a < o; a++) {
    const i = r[a];
    let s = t.nextPart.get(i);
    s || (s = Qs(), t.nextPart.set(i, s)), t = s;
  }
  return t;
}, Ff = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, zf = (e) => {
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
}, _o = "!", ei = ":", $f = [], ti = (e, n, t, r, o) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: t,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Wf = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: t
  } = e;
  let r = (o) => {
    const a = [];
    let i = 0, s = 0, l = 0, d;
    const p = o.length;
    for (let h = 0; h < p; h++) {
      const v = o[h];
      if (i === 0 && s === 0) {
        if (v === ei) {
          a.push(o.slice(l, h)), l = h + 1;
          continue;
        }
        if (v === "/") {
          d = h;
          continue;
        }
      }
      v === "[" ? i++ : v === "]" ? i-- : v === "(" ? s++ : v === ")" && s--;
    }
    const f = a.length === 0 ? o : o.slice(l);
    let m = f, g = !1;
    f.endsWith(_o) ? (m = f.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(_o) && (m = f.slice(1), g = !0)
    );
    const x = d && d > l ? d - l : void 0;
    return ti(a, g, m, x);
  };
  if (n) {
    const o = n + ei, a = r;
    r = (i) => i.startsWith(o) ? a(i.slice(o.length)) : ti($f, !1, i, void 0, !0);
  }
  if (t) {
    const o = r;
    r = (a) => t({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, Vf = (e) => {
  const n = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((t, r) => {
    n.set(t, 1e6 + r);
  }), (t) => {
    const r = [];
    let o = [];
    for (let a = 0; a < t.length; a++) {
      const i = t[a], s = i[0] === "[", l = n.has(i);
      s || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(i)) : o.push(i);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, Bf = (e) => ({
  cache: zf(e.cacheSize),
  parseClassName: Wf(e),
  sortModifiers: Vf(e),
  ...Of(e)
}), Hf = /\s+/, Uf = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = n, i = [], s = e.trim().split(Hf);
  let l = "";
  for (let d = s.length - 1; d >= 0; d -= 1) {
    const p = s[d], {
      isExternal: f,
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: h
    } = t(p);
    if (f) {
      l = p + (l.length > 0 ? " " + l : l);
      continue;
    }
    let v = !!h, w = r(v ? x.substring(0, h) : x);
    if (!w) {
      if (!v) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = r(x), !w) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      v = !1;
    }
    const b = m.length === 0 ? "" : m.length === 1 ? m[0] : a(m).join(":"), S = g ? b + _o : b, E = S + w;
    if (i.indexOf(E) > -1)
      continue;
    i.push(E);
    const C = o(w, v);
    for (let D = 0; D < C.length; ++D) {
      const j = C[D];
      i.push(S + j);
    }
    l = p + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Gf = (...e) => {
  let n = 0, t, r, o = "";
  for (; n < e.length; )
    (t = e[n++]) && (r = nc(t)) && (o && (o += " "), o += r);
  return o;
}, nc = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = nc(e[r])) && (t && (t += " "), t += n);
  return t;
}, Yf = (e, ...n) => {
  let t, r, o, a;
  const i = (l) => {
    const d = n.reduce((p, f) => f(p), e());
    return t = Bf(d), r = t.cache.get, o = t.cache.set, a = s, s(l);
  }, s = (l) => {
    const d = r(l);
    if (d)
      return d;
    const p = Uf(l, t);
    return o(l, p), p;
  };
  return a = i, (...l) => a(Gf(...l));
}, qf = [], Ce = (e) => {
  const n = (t) => t[e] || qf;
  return n.isThemeGetter = !0, n;
}, rc = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, oc = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Kf = /^\d+\/\d+$/, Zf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Jf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Qf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, em = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, At = (e) => Kf.test(e), ie = (e) => !!e && !Number.isNaN(Number(e)), st = (e) => !!e && Number.isInteger(Number(e)), eo = (e) => e.endsWith("%") && ie(e.slice(0, -1)), et = (e) => Zf.test(e), tm = () => !0, nm = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Xf.test(e) && !Jf.test(e)
), ac = () => !1, rm = (e) => Qf.test(e), om = (e) => em.test(e), am = (e) => !K(e) && !Z(e), im = (e) => Gt(e, cc, ac), K = (e) => rc.test(e), bt = (e) => Gt(e, lc, nm), to = (e) => Gt(e, dm, ie), ni = (e) => Gt(e, ic, ac), sm = (e) => Gt(e, sc, om), zn = (e) => Gt(e, uc, rm), Z = (e) => oc.test(e), nn = (e) => Yt(e, lc), cm = (e) => Yt(e, pm), ri = (e) => Yt(e, ic), lm = (e) => Yt(e, cc), um = (e) => Yt(e, sc), $n = (e) => Yt(e, uc, !0), Gt = (e, n, t) => {
  const r = rc.exec(e);
  return r ? r[1] ? n(r[1]) : t(r[2]) : !1;
}, Yt = (e, n, t = !1) => {
  const r = oc.exec(e);
  return r ? r[1] ? n(r[1]) : t : !1;
}, ic = (e) => e === "position" || e === "percentage", sc = (e) => e === "image" || e === "url", cc = (e) => e === "length" || e === "size" || e === "bg-size", lc = (e) => e === "length", dm = (e) => e === "number", pm = (e) => e === "family-name", uc = (e) => e === "shadow", fm = () => {
  const e = Ce("color"), n = Ce("font"), t = Ce("text"), r = Ce("font-weight"), o = Ce("tracking"), a = Ce("leading"), i = Ce("breakpoint"), s = Ce("container"), l = Ce("spacing"), d = Ce("radius"), p = Ce("shadow"), f = Ce("inset-shadow"), m = Ce("text-shadow"), g = Ce("drop-shadow"), x = Ce("blur"), h = Ce("perspective"), v = Ce("aspect"), w = Ce("ease"), b = Ce("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], C = () => [...E(), Z, K], D = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], R = () => [Z, K, l], L = () => [At, "full", "auto", ...R()], B = () => [st, "none", "subgrid", Z, K], J = () => ["auto", {
    span: ["full", st, Z, K]
  }, st, Z, K], q = () => [st, "auto", Z, K], U = () => ["auto", "min", "max", "fr", Z, K], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...R()], ee = () => [At, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...R()], P = () => [e, Z, K], N = () => [...E(), ri, ni, {
    position: [Z, K]
  }], _ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], y = () => ["auto", "cover", "contain", lm, im, {
    size: [Z, K]
  }], O = () => [eo, nn, bt], I = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    Z,
    K
  ], T = () => ["", ie, nn, bt], G = () => ["solid", "dashed", "dotted", "double"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => [ie, eo, ri, ni], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    Z,
    K
  ], X = () => ["none", ie, Z, K], F = () => ["none", ie, Z, K], re = () => [ie, Z, K], M = () => [At, "full", ...R()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [et],
      breakpoint: [et],
      color: [tm],
      container: [et],
      "drop-shadow": [et],
      ease: ["in", "out", "in-out"],
      font: [am],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [et],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [et],
      shadow: [et],
      spacing: ["px", ie],
      text: [et],
      "text-shadow": [et],
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
        aspect: ["auto", "square", At, K, Z, v]
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
        columns: [ie, K, Z, s]
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
        object: C()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
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
        inset: L()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: L()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
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
        z: [st, "auto", Z, K]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [At, "full", "auto", s, ...R()]
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
        flex: [ie, At, "auto", "initial", "none", K]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ie, Z, K]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ie, Z, K]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [st, "first", "last", "none", Z, K]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": B()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: J()
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
        "grid-rows": B()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: J()
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
        gap: R()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": R()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": R()
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
        "justify-items": [...Q(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Q()]
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
        items: [...Q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Q(), {
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
        "place-items": [...Q(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Q()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: R()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: R()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: R()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: R()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: R()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: R()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: R()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: R()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: R()
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
        "space-x": R()
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
        "space-y": R()
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
        size: ee()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...ee()]
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
          ...ee()
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
          ...ee()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...ee()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...ee()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...ee()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, nn, bt]
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
        font: [r, Z, to]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", eo, K]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [cm, K, n]
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
        tracking: [o, Z, K]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ie, "none", Z, to]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...R()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Z, K]
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
        list: ["disc", "decimal", "none", Z, K]
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
        placeholder: P()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: P()
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
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ie, "from-font", "auto", Z, bt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: P()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ie, "auto", Z, K]
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
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z, K]
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
        content: ["none", Z, K]
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
        bg: N()
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
        bg: y()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, st, Z, K],
          radial: ["", Z, K],
          conic: [st, Z, K]
        }, um, sm]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: P()
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
        from: P()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: P()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: P()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: I()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": I()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": I()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": I()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": I()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": I()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": I()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": I()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": I()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": I()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": I()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": I()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": I()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": I()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": I()
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
        border: [...G(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...G(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: P()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": P()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": P()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": P()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": P()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": P()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": P()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": P()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": P()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: P()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...G(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ie, Z, K]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ie, nn, bt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: P()
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
          $n,
          zn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: P()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, $n, zn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": P()
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
        ring: P()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ie, bt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": P()
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
        "inset-ring": P()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, $n, zn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": P()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ie, Z, K]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...W(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
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
        "mask-linear": [ie]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": k()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": P()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": P()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": k()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": P()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": P()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": k()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": P()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": P()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": k()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": P()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": P()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": k()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": P()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": P()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": k()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": P()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": P()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": k()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": P()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": P()
      }],
      "mask-image-radial": [{
        "mask-radial": [Z, K]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": k()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": k()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": P()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": P()
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
        "mask-conic": [ie]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": k()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": k()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": P()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": P()
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
        mask: N()
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
        mask: y()
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
        mask: ["none", Z, K]
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
          Z,
          K
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: V()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ie, Z, K]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ie, Z, K]
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
          $n,
          zn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": P()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ie, Z, K]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ie, Z, K]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ie, Z, K]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ie, Z, K]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ie, Z, K]
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
          Z,
          K
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": V()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ie, Z, K]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ie, Z, K]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ie, Z, K]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ie, Z, K]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ie, Z, K]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ie, Z, K]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ie, Z, K]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ie, Z, K]
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
        "border-spacing": R()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": R()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": R()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Z, K]
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
        duration: [ie, "initial", Z, K]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, Z, K]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ie, Z, K]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, Z, K]
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
        perspective: [h, Z, K]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": C()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: X()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": X()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": X()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": X()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: F()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": F()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": F()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": F()
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
        transform: [Z, K, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: C()
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
        translate: M()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": M()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": M()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": M()
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
        accent: P()
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
        caret: P()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Z, K]
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
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
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
        "will-change": ["auto", "scroll", "contents", "transform", Z, K]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...P()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ie, nn, bt, to]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...P()]
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
}, mm = /* @__PURE__ */ Yf(fm);
function A(...e) {
  return mm(Js(e));
}
function N1({
  open: e,
  onOpenChange: n,
  header: t,
  content: r,
  actions: o,
  className: a
}) {
  return /* @__PURE__ */ c.jsx(uf, { open: e, onOpenChange: n, children: /* @__PURE__ */ c.jsxs(df, { children: [
    /* @__PURE__ */ c.jsx(pf, { className: "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
    /* @__PURE__ */ c.jsxs(
      ff,
      {
        className: A(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
          a
        ),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col space-y-2", children: [
            /* @__PURE__ */ c.jsx(mf, { className: "text-lg font-semibold text-gray-900", children: t }),
            typeof r == "string" ? /* @__PURE__ */ c.jsx(Ja, { className: "text-sm text-gray-600", children: r }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsx(Ja, { asChild: !0, children: /* @__PURE__ */ c.jsx(_f, { children: /* @__PURE__ */ c.jsx("span", { children: "Confirmation dialog content" }) }) }),
              /* @__PURE__ */ c.jsx("div", { className: "text-sm text-gray-600", children: r })
            ] })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0", children: o })
        ]
      }
    )
  ] }) });
}
const oi = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ai = Js, Cr = (e, n) => (t) => {
  var r;
  if (n?.variants == null) return ai(e, t?.class, t?.className);
  const { variants: o, defaultVariants: a } = n, i = Object.keys(o).map((d) => {
    const p = t?.[d], f = a?.[d];
    if (p === null) return null;
    const m = oi(p) || oi(f);
    return o[d][m];
  }), s = t && Object.entries(t).reduce((d, p) => {
    let [f, m] = p;
    return m === void 0 || (d[f] = m), d;
  }, {}), l = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, p) => {
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
      ...d,
      f,
      m
    ] : d;
  }, []);
  return ai(e, i, l, t?.class, t?.className);
}, hm = Cr(
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
function I1({
  className: e,
  variant: n,
  size: t,
  ...r
}) {
  return /* @__PURE__ */ c.jsx(
    "span",
    {
      "data-slot": "badge",
      role: "status",
      className: A(hm({ variant: n, size: t, className: e })),
      ...r
    }
  );
}
const gm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vm = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), ii = (e) => {
  const n = vm(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, dc = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), xm = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
var bm = {
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
const ym = hr(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, l) => wo(
    "svg",
    {
      ref: l,
      ...bm,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: dc("lucide", o),
      ...!a && !xm(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...i.map(([d, p]) => wo(d, p)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
const Le = (e, n) => {
  const t = hr(
    ({ className: r, ...o }, a) => wo(ym, {
      ref: a,
      iconNode: n,
      className: dc(
        `lucide-${gm(ii(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return t.displayName = ii(e), t;
};
const wm = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Cm = Le("calendar", wm);
const Sm = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Sn = Le("check", Sm);
const Em = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], pc = Le("chevron-down", Em);
const km = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Sr = Le("chevron-right", km);
const _m = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], fc = Le("chevron-left", _m);
const Pm = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Rm = Le("chevron-up", Pm);
const jm = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Om = Le("clock", jm);
const Mm = [
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
], Tm = Le("eye-off", Mm);
const Am = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Dm = Le("eye", Am);
const Nm = [["path", { d: "M5 12h14", key: "1ays0h" }]], Im = Le("minus", Nm);
const Lm = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Fm = Le("trash-2", Lm);
const zm = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], mc = Le("upload", zm);
const $m = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ra = Le("x", $m);
function L1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      "data-slot": "breadcrumb",
      className: A("w-full", e),
      ...n
    }
  );
}
function F1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: A("flex items-center justify-start gap-2", e),
      ...n
    }
  );
}
function z1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: A("flex justify-start items-center gap-x-1", e),
      ...n
    }
  );
}
function $1({
  asChild: e,
  className: n,
  ...t
}) {
  const r = e ? wr : "a";
  return /* @__PURE__ */ c.jsx(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: A(
        "flex w-fit font-manrope text-sm font-normal leading-4.5 text-gray-200 hover:text-gray-600 hover:underline transition-all",
        n
      ),
      ...t
    }
  );
}
function W1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      "aria-current": "page",
      className: A(
        "font-manrope text-sm font-semibold text-blue-hepatica-600 leading-4",
        e
      ),
      ...n
    }
  );
}
function V1() {
  return /* @__PURE__ */ c.jsx(
    Sr,
    {
      "data-slot": "breadcrumb-separator",
      "aria-hidden": "true",
      className: "size-4 text-gray-300 shrink-0"
    }
  );
}
const Wm = Cr(
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
function oa({
  className: e,
  variant: n,
  size: t,
  asChild: r = !1,
  ...o
}) {
  const a = r ? wr : "button";
  return /* @__PURE__ */ c.jsx(
    a,
    {
      "data-slot": "button",
      className: A(Wm({ variant: n, size: t, className: e })),
      ...o
    }
  );
}
function B1({
  className: e,
  checked: n,
  disabled: t = !1,
  name: r,
  value: o,
  onChange: a,
  ...i
}) {
  const s = `${r ?? "checkbox"}-${String(o ?? "value")}`;
  return /* @__PURE__ */ c.jsxs(
    "label",
    {
      htmlFor: s,
      "data-slot": "checkbox-label",
      className: A(
        "inline-flex size-9.5 items-center justify-center rounded-full",
        "bg-transparent transition-colors duration-200",
        "hover:bg-blue-hepatica-100 focus-within:bg-gray-100",
        {
          "cursor-not-allowed": t
        }
      ),
      children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            "data-slot": "checkbox-box",
            "aria-hidden": "true",
            className: A(
              "size-4 rounded-xs transition-all duration-200 flex items-center justify-center",
              {
                "border-2 border-gray-600": !n && !t,
                "bg-blue-hepatica-600": n && !t,
                "border-2 border-gray-200": !n && t,
                "bg-gray-200": n && t
              },
              e
            ),
            children: /* @__PURE__ */ c.jsx(
              Sn,
              {
                className: A("size-3 text-transparent", {
                  "text-white": n
                })
              }
            )
          }
        ),
        /* @__PURE__ */ c.jsx(
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
            onChange: (l) => a?.(l.target.checked),
            ...i
          }
        )
      ]
    }
  );
}
function H1({ ...e }) {
  return /* @__PURE__ */ c.jsx(Go, { "data-slot": "dialog", ...e });
}
function U1({ ...e }) {
  return /* @__PURE__ */ c.jsx(Yo, { "data-slot": "dialog-trigger", ...e });
}
function Vm({ ...e }) {
  return /* @__PURE__ */ c.jsx(Ko, { "data-slot": "dialog-portal", ...e });
}
function G1({ ...e }) {
  return /* @__PURE__ */ c.jsx(Cn, { "data-slot": "dialog-close", ...e });
}
function Bm({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    Zo,
    {
      "data-slot": "dialog-overlay",
      className: A(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/50 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50",
        e
      ),
      ...n
    }
  );
}
function Y1({
  className: e,
  children: n,
  showCloseButton: t = !0,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(Vm, { children: [
    /* @__PURE__ */ c.jsx(Bm, {}),
    /* @__PURE__ */ c.jsxs(
      Xo,
      {
        "data-slot": "dialog-content",
        className: A(
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
          t && /* @__PURE__ */ c.jsx(Cn, { "data-slot": "dialog-close", asChild: !0, children: /* @__PURE__ */ c.jsxs(
            oa,
            {
              variant: "gray-ghost",
              className: "absolute top-6 right-8 size-10 flex items-center justify-center",
              size: "sm",
              children: [
                /* @__PURE__ */ c.jsx(ra, {}),
                /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function q1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: A(
        "min-h-22 px-8 justify-center gap-2 flex flex-col border-b border-b-gray-25",
        e
      ),
      ...n
    }
  );
}
function K1({
  className: e,
  showCloseButton: n = !1,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: A("px-8 pb-8 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ c.jsx(Cn, { asChild: !0, children: /* @__PURE__ */ c.jsx(oa, { variant: "gray-outline", size: "sm", children: "Close" }) })
      ]
    }
  );
}
function Z1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    Qo,
    {
      "data-slot": "dialog-title",
      className: A("font-manrope text-base leading-5 font-semibold text-gray-900", e),
      ...n
    }
  );
}
function X1({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    ea,
    {
      "data-slot": "dialog-description",
      className: A(
        "text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3",
        e
      ),
      ...n
    }
  );
}
// @__NO_SIDE_EFFECTS__
function si(e) {
  const n = /* @__PURE__ */ Hm(e), t = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(Gm);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Hm(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (u.isValidElement(o)) {
      const i = qm(o), s = Ym(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? Xe(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Um = /* @__PURE__ */ Symbol("radix.slottable");
function Gm(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Um;
}
function Ym(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], a = n[r];
    /^on[A-Z]/.test(r) ? o && a ? t[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...a } : r === "className" && (t[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function qm(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function aa(e) {
  const n = e + "CollectionProvider", [t, r] = Ze(n), [o, a] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (h) => {
    const { scope: v, children: w } = h, b = ae.useRef(null), S = ae.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: v, itemMap: S, collectionRef: b, children: w });
  };
  i.displayName = n;
  const s = e + "CollectionSlot", l = /* @__PURE__ */ si(s), d = ae.forwardRef(
    (h, v) => {
      const { scope: w, children: b } = h, S = a(s, w), E = ce(v, S.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: E, children: b });
    }
  );
  d.displayName = s;
  const p = e + "CollectionItemSlot", f = "data-radix-collection-item", m = /* @__PURE__ */ si(p), g = ae.forwardRef(
    (h, v) => {
      const { scope: w, children: b, ...S } = h, E = ae.useRef(null), C = ce(v, E), D = a(p, w);
      return ae.useEffect(() => (D.itemMap.set(E, { ref: E, ...S }), () => {
        D.itemMap.delete(E);
      })), /* @__PURE__ */ c.jsx(m, { [f]: "", ref: C, children: b });
    }
  );
  g.displayName = p;
  function x(h) {
    const v = a(e + "CollectionConsumer", h);
    return ae.useCallback(() => {
      const b = v.collectionRef.current;
      if (!b) return [];
      const S = Array.from(b.querySelectorAll(`[${f}]`));
      return Array.from(v.itemMap.values()).sort(
        (D, j) => S.indexOf(D.ref.current) - S.indexOf(j.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: i, Slot: d, ItemSlot: g },
    x,
    r
  ];
}
var Km = u.createContext(void 0);
function ia(e) {
  const n = u.useContext(Km);
  return e || n || "ltr";
}
const Zm = ["top", "right", "bottom", "left"], pt = Math.min, Ae = Math.max, tr = Math.round, Wn = Math.floor, qe = (e) => ({
  x: e,
  y: e
}), Xm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Jm = {
  start: "end",
  end: "start"
};
function Po(e, n, t) {
  return Ae(e, pt(n, t));
}
function tt(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function nt(e) {
  return e.split("-")[0];
}
function qt(e) {
  return e.split("-")[1];
}
function sa(e) {
  return e === "x" ? "y" : "x";
}
function ca(e) {
  return e === "y" ? "height" : "width";
}
const Qm = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ye(e) {
  return Qm.has(nt(e)) ? "y" : "x";
}
function la(e) {
  return sa(Ye(e));
}
function eh(e, n, t) {
  t === void 0 && (t = !1);
  const r = qt(e), o = la(e), a = ca(o);
  let i = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[a] > n.floating[a] && (i = nr(i)), [i, nr(i)];
}
function th(e) {
  const n = nr(e);
  return [Ro(e), n, Ro(n)];
}
function Ro(e) {
  return e.replace(/start|end/g, (n) => Jm[n]);
}
const ci = ["left", "right"], li = ["right", "left"], nh = ["top", "bottom"], rh = ["bottom", "top"];
function oh(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? li : ci : n ? ci : li;
    case "left":
    case "right":
      return n ? nh : rh;
    default:
      return [];
  }
}
function ah(e, n, t, r) {
  const o = qt(e);
  let a = oh(nt(e), t === "start", r);
  return o && (a = a.map((i) => i + "-" + o), n && (a = a.concat(a.map(Ro)))), a;
}
function nr(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Xm[n]);
}
function ih(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function hc(e) {
  return typeof e != "number" ? ih(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function rr(e) {
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
function ui(e, n, t) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Ye(n), i = la(n), s = ca(i), l = nt(n), d = a === "y", p = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
  let g;
  switch (l) {
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
  switch (qt(n)) {
    case "start":
      g[i] -= m * (t && d ? -1 : 1);
      break;
    case "end":
      g[i] += m * (t && d ? -1 : 1);
      break;
  }
  return g;
}
const sh = async (e, n, t) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = t, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(n));
  let d = await i.getElementRects({
    reference: e,
    floating: n,
    strategy: o
  }), {
    x: p,
    y: f
  } = ui(d, r, l), m = r, g = {}, x = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: v,
      fn: w
    } = s[h], {
      x: b,
      y: S,
      data: E,
      reset: C
    } = await w({
      x: p,
      y: f,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: g,
      rects: d,
      platform: i,
      elements: {
        reference: e,
        floating: n
      }
    });
    p = b ?? p, f = S ?? f, g = {
      ...g,
      [v]: {
        ...g[v],
        ...E
      }
    }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (d = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: n,
      strategy: o
    }) : C.rects), {
      x: p,
      y: f
    } = ui(d, m, l)), h = -1);
  }
  return {
    x: p,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: g
  };
};
async function pn(e, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = tt(n, e), x = hc(g), v = s[m ? f === "floating" ? "reference" : "floating" : f], w = rr(await a.getClippingRect({
    element: (t = await (a.isElement == null ? void 0 : a.isElement(v))) == null || t ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: p,
    strategy: l
  })), b = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), E = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = rr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: S,
    strategy: l
  }) : b);
  return {
    top: (w.top - C.top + x.top) / E.y,
    bottom: (C.bottom - w.bottom + x.bottom) / E.y,
    left: (w.left - C.left + x.left) / E.x,
    right: (C.right - w.right + x.right) / E.x
  };
}
const ch = (e) => ({
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
      middlewareData: l
    } = n, {
      element: d,
      padding: p = 0
    } = tt(e, n) || {};
    if (d == null)
      return {};
    const f = hc(p), m = {
      x: t,
      y: r
    }, g = la(o), x = ca(g), h = await i.getDimensions(d), v = g === "y", w = v ? "top" : "left", b = v ? "bottom" : "right", S = v ? "clientHeight" : "clientWidth", E = a.reference[x] + a.reference[g] - m[g] - a.floating[x], C = m[g] - a.reference[g], D = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let j = D ? D[S] : 0;
    (!j || !await (i.isElement == null ? void 0 : i.isElement(D))) && (j = s.floating[S] || a.floating[x]);
    const R = E / 2 - C / 2, L = j / 2 - h[x] / 2 - 1, B = pt(f[w], L), J = pt(f[b], L), q = B, U = j - h[x] - J, H = j / 2 - h[x] / 2 + R, Q = Po(q, H, U), $ = !l.arrow && qt(o) != null && H !== Q && a.reference[x] / 2 - (H < q ? B : J) - h[x] / 2 < 0, ee = $ ? H < q ? H - q : H - U : 0;
    return {
      [g]: m[g] + ee,
      data: {
        [g]: Q,
        centerOffset: H - Q - ee,
        ...$ && {
          alignmentOffset: ee
        }
      },
      reset: $
    };
  }
}), lh = function(e) {
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
        platform: l,
        elements: d
      } = n, {
        mainAxis: p = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: h = !0,
        ...v
      } = tt(e, n);
      if ((t = a.arrow) != null && t.alignmentOffset)
        return {};
      const w = nt(o), b = Ye(s), S = nt(s) === s, E = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = m || (S || !h ? [nr(s)] : th(s)), D = x !== "none";
      !m && D && C.push(...ah(s, h, x, E));
      const j = [s, ...C], R = await pn(n, v), L = [];
      let B = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (p && L.push(R[w]), f) {
        const H = eh(o, i, E);
        L.push(R[H[0]], R[H[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: L
      }], !L.every((H) => H <= 0)) {
        var J, q;
        const H = (((J = a.flip) == null ? void 0 : J.index) || 0) + 1, Q = j[H];
        if (Q && (!(f === "alignment" ? b !== Ye(Q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((P) => Ye(P.placement) === b ? P.overflows[0] > 0 : !0)))
          return {
            data: {
              index: H,
              overflows: B
            },
            reset: {
              placement: Q
            }
          };
        let $ = (q = B.filter((ee) => ee.overflows[0] <= 0).sort((ee, P) => ee.overflows[1] - P.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!$)
          switch (g) {
            case "bestFit": {
              var U;
              const ee = (U = B.filter((P) => {
                if (D) {
                  const N = Ye(P.placement);
                  return N === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  N === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((N) => N > 0).reduce((N, _) => N + _, 0)]).sort((P, N) => P[1] - N[1])[0]) == null ? void 0 : U[0];
              ee && ($ = ee);
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
function di(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function pi(e) {
  return Zm.some((n) => e[n] >= 0);
}
const uh = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(n) {
      const {
        rects: t
      } = n, {
        strategy: r = "referenceHidden",
        ...o
      } = tt(e, n);
      switch (r) {
        case "referenceHidden": {
          const a = await pn(n, {
            ...o,
            elementContext: "reference"
          }), i = di(a, t.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: pi(i)
            }
          };
        }
        case "escaped": {
          const a = await pn(n, {
            ...o,
            altBoundary: !0
          }), i = di(a, t.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: pi(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, gc = /* @__PURE__ */ new Set(["left", "top"]);
async function dh(e, n) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = nt(t), s = qt(t), l = Ye(t) === "y", d = gc.has(i) ? -1 : 1, p = a && l ? -1 : 1, f = tt(n, e);
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
  return s && typeof x == "number" && (g = s === "end" ? x * -1 : x), l ? {
    x: g * p,
    y: m * d
  } : {
    x: m * d,
    y: g * p
  };
}
const ph = function(e) {
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
      } = n, l = await dh(n, e);
      return i === ((t = s.offset) == null ? void 0 : t.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, fh = function(e) {
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
        ...l
      } = tt(e, n), d = {
        x: t,
        y: r
      }, p = await pn(n, l), f = Ye(nt(o)), m = sa(f);
      let g = d[m], x = d[f];
      if (a) {
        const v = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = g + p[v], S = g - p[w];
        g = Po(b, g, S);
      }
      if (i) {
        const v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", b = x + p[v], S = x - p[w];
        x = Po(b, x, S);
      }
      const h = s.fn({
        ...n,
        [m]: g,
        [f]: x
      });
      return {
        ...h,
        data: {
          x: h.x - t,
          y: h.y - r,
          enabled: {
            [m]: a,
            [f]: i
          }
        }
      };
    }
  };
}, mh = function(e) {
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
        mainAxis: l = !0,
        crossAxis: d = !0
      } = tt(e, n), p = {
        x: t,
        y: r
      }, f = Ye(o), m = sa(f);
      let g = p[m], x = p[f];
      const h = tt(s, n), v = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const S = m === "y" ? "height" : "width", E = a.reference[m] - a.floating[S] + v.mainAxis, C = a.reference[m] + a.reference[S] - v.mainAxis;
        g < E ? g = E : g > C && (g = C);
      }
      if (d) {
        var w, b;
        const S = m === "y" ? "width" : "height", E = gc.has(nt(o)), C = a.reference[f] - a.floating[S] + (E && ((w = i.offset) == null ? void 0 : w[f]) || 0) + (E ? 0 : v.crossAxis), D = a.reference[f] + a.reference[S] + (E ? 0 : ((b = i.offset) == null ? void 0 : b[f]) || 0) - (E ? v.crossAxis : 0);
        x < C ? x = C : x > D && (x = D);
      }
      return {
        [m]: g,
        [f]: x
      };
    }
  };
}, hh = function(e) {
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
        apply: l = () => {
        },
        ...d
      } = tt(e, n), p = await pn(n, d), f = nt(o), m = qt(o), g = Ye(o) === "y", {
        width: x,
        height: h
      } = a.floating;
      let v, w;
      f === "top" || f === "bottom" ? (v = f, w = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = f, v = m === "end" ? "top" : "bottom");
      const b = h - p.top - p.bottom, S = x - p.left - p.right, E = pt(h - p[v], b), C = pt(x - p[w], S), D = !n.middlewareData.shift;
      let j = E, R = C;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (R = S), (r = n.middlewareData.shift) != null && r.enabled.y && (j = b), D && !m) {
        const B = Ae(p.left, 0), J = Ae(p.right, 0), q = Ae(p.top, 0), U = Ae(p.bottom, 0);
        g ? R = x - 2 * (B !== 0 || J !== 0 ? B + J : Ae(p.left, p.right)) : j = h - 2 * (q !== 0 || U !== 0 ? q + U : Ae(p.top, p.bottom));
      }
      await l({
        ...n,
        availableWidth: R,
        availableHeight: j
      });
      const L = await i.getDimensions(s.floating);
      return x !== L.width || h !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Er() {
  return typeof window < "u";
}
function Kt(e) {
  return vc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ne(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Je(e) {
  var n;
  return (n = (vc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function vc(e) {
  return Er() ? e instanceof Node || e instanceof Ne(e).Node : !1;
}
function Ve(e) {
  return Er() ? e instanceof Element || e instanceof Ne(e).Element : !1;
}
function Ke(e) {
  return Er() ? e instanceof HTMLElement || e instanceof Ne(e).HTMLElement : !1;
}
function fi(e) {
  return !Er() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ne(e).ShadowRoot;
}
const gh = /* @__PURE__ */ new Set(["inline", "contents"]);
function En(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: r,
    display: o
  } = Be(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !gh.has(o);
}
const vh = /* @__PURE__ */ new Set(["table", "td", "th"]);
function xh(e) {
  return vh.has(Kt(e));
}
const bh = [":popover-open", ":modal"];
function kr(e) {
  return bh.some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
const yh = ["transform", "translate", "scale", "rotate", "perspective"], wh = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ch = ["paint", "layout", "strict", "content"];
function ua(e) {
  const n = da(), t = Ve(e) ? Be(e) : e;
  return yh.some((r) => t[r] ? t[r] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || wh.some((r) => (t.willChange || "").includes(r)) || Ch.some((r) => (t.contain || "").includes(r));
}
function Sh(e) {
  let n = ft(e);
  for (; Ke(n) && !zt(n); ) {
    if (ua(n))
      return n;
    if (kr(n))
      return null;
    n = ft(n);
  }
  return null;
}
function da() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Eh = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function zt(e) {
  return Eh.has(Kt(e));
}
function Be(e) {
  return Ne(e).getComputedStyle(e);
}
function _r(e) {
  return Ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ft(e) {
  if (Kt(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    fi(e) && e.host || // Fallback.
    Je(e)
  );
  return fi(n) ? n.host : n;
}
function xc(e) {
  const n = ft(e);
  return zt(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ke(n) && En(n) ? n : xc(n);
}
function fn(e, n, t) {
  var r;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const o = xc(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Ne(o);
  if (a) {
    const s = jo(i);
    return n.concat(i, i.visualViewport || [], En(o) ? o : [], s && t ? fn(s) : []);
  }
  return n.concat(o, fn(o, [], t));
}
function jo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bc(e) {
  const n = Be(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const o = Ke(e), a = o ? e.offsetWidth : t, i = o ? e.offsetHeight : r, s = tr(t) !== a || tr(r) !== i;
  return s && (t = a, r = i), {
    width: t,
    height: r,
    $: s
  };
}
function pa(e) {
  return Ve(e) ? e : e.contextElement;
}
function Ft(e) {
  const n = pa(e);
  if (!Ke(n))
    return qe(1);
  const t = n.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = bc(n);
  let i = (a ? tr(t.width) : t.width) / r, s = (a ? tr(t.height) : t.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const kh = /* @__PURE__ */ qe(0);
function yc(e) {
  const n = Ne(e);
  return !da() || !n.visualViewport ? kh : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function _h(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Ne(e) ? !1 : n;
}
function St(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), a = pa(e);
  let i = qe(1);
  n && (r ? Ve(r) && (i = Ft(r)) : i = Ft(e));
  const s = _h(a, t, r) ? yc(a) : qe(0);
  let l = (o.left + s.x) / i.x, d = (o.top + s.y) / i.y, p = o.width / i.x, f = o.height / i.y;
  if (a) {
    const m = Ne(a), g = r && Ve(r) ? Ne(r) : r;
    let x = m, h = jo(x);
    for (; h && r && g !== x; ) {
      const v = Ft(h), w = h.getBoundingClientRect(), b = Be(h), S = w.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, E = w.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      l *= v.x, d *= v.y, p *= v.x, f *= v.y, l += S, d += E, x = Ne(h), h = jo(x);
    }
  }
  return rr({
    width: p,
    height: f,
    x: l,
    y: d
  });
}
function Pr(e, n) {
  const t = _r(e).scrollLeft;
  return n ? n.left + t : St(Je(e)).left + t;
}
function wc(e, n) {
  const t = e.getBoundingClientRect(), r = t.left + n.scrollLeft - Pr(e, t), o = t.top + n.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Ph(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = Je(r), s = n ? kr(n.floating) : !1;
  if (r === i || s && a)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = qe(1);
  const p = qe(0), f = Ke(r);
  if ((f || !f && !a) && ((Kt(r) !== "body" || En(i)) && (l = _r(r)), Ke(r))) {
    const g = St(r);
    d = Ft(r), p.x = g.x + r.clientLeft, p.y = g.y + r.clientTop;
  }
  const m = i && !f && !a ? wc(i, l) : qe(0);
  return {
    width: t.width * d.x,
    height: t.height * d.y,
    x: t.x * d.x - l.scrollLeft * d.x + p.x + m.x,
    y: t.y * d.y - l.scrollTop * d.y + p.y + m.y
  };
}
function Rh(e) {
  return Array.from(e.getClientRects());
}
function jh(e) {
  const n = Je(e), t = _r(e), r = e.ownerDocument.body, o = Ae(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), a = Ae(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -t.scrollLeft + Pr(e);
  const s = -t.scrollTop;
  return Be(r).direction === "rtl" && (i += Ae(n.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
const mi = 25;
function Oh(e, n) {
  const t = Ne(e), r = Je(e), o = t.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const p = da();
    (!p || p && n === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  const d = Pr(r);
  if (d <= 0) {
    const p = r.ownerDocument, f = p.body, m = getComputedStyle(f), g = p.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, x = Math.abs(r.clientWidth - f.clientWidth - g);
    x <= mi && (a -= x);
  } else d <= mi && (a += d);
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
const Mh = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Th(e, n) {
  const t = St(e, !0, n === "fixed"), r = t.top + e.clientTop, o = t.left + e.clientLeft, a = Ke(e) ? Ft(e) : qe(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, d = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: d
  };
}
function hi(e, n, t) {
  let r;
  if (n === "viewport")
    r = Oh(e, t);
  else if (n === "document")
    r = jh(Je(e));
  else if (Ve(n))
    r = Th(n, t);
  else {
    const o = yc(e);
    r = {
      x: n.x - o.x,
      y: n.y - o.y,
      width: n.width,
      height: n.height
    };
  }
  return rr(r);
}
function Cc(e, n) {
  const t = ft(e);
  return t === n || !Ve(t) || zt(t) ? !1 : Be(t).position === "fixed" || Cc(t, n);
}
function Ah(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let r = fn(e, [], !1).filter((s) => Ve(s) && Kt(s) !== "body"), o = null;
  const a = Be(e).position === "fixed";
  let i = a ? ft(e) : e;
  for (; Ve(i) && !zt(i); ) {
    const s = Be(i), l = ua(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && !!o && Mh.has(o.position) || En(i) && !l && Cc(e, i)) ? r = r.filter((p) => p !== i) : o = s, i = ft(i);
  }
  return n.set(e, r), r;
}
function Dh(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...t === "clippingAncestors" ? kr(n) ? [] : Ah(n, this._c) : [].concat(t), r], s = i[0], l = i.reduce((d, p) => {
    const f = hi(n, p, o);
    return d.top = Ae(f.top, d.top), d.right = pt(f.right, d.right), d.bottom = pt(f.bottom, d.bottom), d.left = Ae(f.left, d.left), d;
  }, hi(n, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Nh(e) {
  const {
    width: n,
    height: t
  } = bc(e);
  return {
    width: n,
    height: t
  };
}
function Ih(e, n, t) {
  const r = Ke(n), o = Je(n), a = t === "fixed", i = St(e, !0, a, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = qe(0);
  function d() {
    l.x = Pr(o);
  }
  if (r || !r && !a)
    if ((Kt(n) !== "body" || En(o)) && (s = _r(n)), r) {
      const g = St(n, !0, a, n);
      l.x = g.x + n.clientLeft, l.y = g.y + n.clientTop;
    } else o && d();
  a && !r && o && d();
  const p = o && !r && !a ? wc(o, s) : qe(0), f = i.left + s.scrollLeft - l.x - p.x, m = i.top + s.scrollTop - l.y - p.y;
  return {
    x: f,
    y: m,
    width: i.width,
    height: i.height
  };
}
function no(e) {
  return Be(e).position === "static";
}
function gi(e, n) {
  if (!Ke(e) || Be(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Je(e) === t && (t = t.ownerDocument.body), t;
}
function Sc(e, n) {
  const t = Ne(e);
  if (kr(e))
    return t;
  if (!Ke(e)) {
    let o = ft(e);
    for (; o && !zt(o); ) {
      if (Ve(o) && !no(o))
        return o;
      o = ft(o);
    }
    return t;
  }
  let r = gi(e, n);
  for (; r && xh(r) && no(r); )
    r = gi(r, n);
  return r && zt(r) && no(r) && !ua(r) ? t : r || Sh(e) || t;
}
const Lh = async function(e) {
  const n = this.getOffsetParent || Sc, t = this.getDimensions, r = await t(e.floating);
  return {
    reference: Ih(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Fh(e) {
  return Be(e).direction === "rtl";
}
const zh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ph,
  getDocumentElement: Je,
  getClippingRect: Dh,
  getOffsetParent: Sc,
  getElementRects: Lh,
  getClientRects: Rh,
  getDimensions: Nh,
  getScale: Ft,
  isElement: Ve,
  isRTL: Fh
};
function Ec(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function $h(e, n) {
  let t = null, r;
  const o = Je(e);
  function a() {
    var s;
    clearTimeout(r), (s = t) == null || s.disconnect(), t = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const d = e.getBoundingClientRect(), {
      left: p,
      top: f,
      width: m,
      height: g
    } = d;
    if (s || n(), !m || !g)
      return;
    const x = Wn(f), h = Wn(o.clientWidth - (p + m)), v = Wn(o.clientHeight - (f + g)), w = Wn(p), S = {
      rootMargin: -x + "px " + -h + "px " + -v + "px " + -w + "px",
      threshold: Ae(0, pt(1, l)) || 1
    };
    let E = !0;
    function C(D) {
      const j = D[0].intersectionRatio;
      if (j !== l) {
        if (!E)
          return i();
        j ? i(!1, j) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      j === 1 && !Ec(d, e.getBoundingClientRect()) && i(), E = !1;
    }
    try {
      t = new IntersectionObserver(C, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(C, S);
    }
    t.observe(e);
  }
  return i(!0), a;
}
function Wh(e, n, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = pa(e), p = o || a ? [...d ? fn(d) : [], ...fn(n)] : [];
  p.forEach((w) => {
    o && w.addEventListener("scroll", t, {
      passive: !0
    }), a && w.addEventListener("resize", t);
  });
  const f = d && s ? $h(d, t) : null;
  let m = -1, g = null;
  i && (g = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === d && g && (g.unobserve(n), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var S;
      (S = g) == null || S.observe(n);
    })), t();
  }), d && !l && g.observe(d), g.observe(n));
  let x, h = l ? St(e) : null;
  l && v();
  function v() {
    const w = St(e);
    h && !Ec(h, w) && t(), h = w, x = requestAnimationFrame(v);
  }
  return t(), () => {
    var w;
    p.forEach((b) => {
      o && b.removeEventListener("scroll", t), a && b.removeEventListener("resize", t);
    }), f?.(), (w = g) == null || w.disconnect(), g = null, l && cancelAnimationFrame(x);
  };
}
const Vh = ph, Bh = fh, Hh = lh, Uh = hh, Gh = uh, vi = ch, Yh = mh, qh = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: zh,
    ...t
  }, a = {
    ...o.platform,
    _c: r
  };
  return sh(e, n, {
    ...o,
    platform: a
  });
};
var Kh = typeof document < "u", Zh = function() {
}, Zn = Kh ? ed : Zh;
function or(e, n) {
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
        if (!or(e[r], n[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !or(e[a], n[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function kc(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xi(e, n) {
  const t = kc(e);
  return Math.round(n * t) / t;
}
function ro(e) {
  const n = u.useRef(e);
  return Zn(() => {
    n.current = e;
  }), n;
}
function Xh(e) {
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
    whileElementsMounted: l,
    open: d
  } = e, [p, f] = u.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [m, g] = u.useState(r);
  or(m, r) || g(r);
  const [x, h] = u.useState(null), [v, w] = u.useState(null), b = u.useCallback((P) => {
    P !== D.current && (D.current = P, h(P));
  }, []), S = u.useCallback((P) => {
    P !== j.current && (j.current = P, w(P));
  }, []), E = a || x, C = i || v, D = u.useRef(null), j = u.useRef(null), R = u.useRef(p), L = l != null, B = ro(l), J = ro(o), q = ro(d), U = u.useCallback(() => {
    if (!D.current || !j.current)
      return;
    const P = {
      placement: n,
      strategy: t,
      middleware: m
    };
    J.current && (P.platform = J.current), qh(D.current, j.current, P).then((N) => {
      const _ = {
        ...N,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: q.current !== !1
      };
      H.current && !or(R.current, _) && (R.current = _, gr.flushSync(() => {
        f(_);
      }));
    });
  }, [m, n, t, J, q]);
  Zn(() => {
    d === !1 && R.current.isPositioned && (R.current.isPositioned = !1, f((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [d]);
  const H = u.useRef(!1);
  Zn(() => (H.current = !0, () => {
    H.current = !1;
  }), []), Zn(() => {
    if (E && (D.current = E), C && (j.current = C), E && C) {
      if (B.current)
        return B.current(E, C, U);
      U();
    }
  }, [E, C, U, B, L]);
  const Q = u.useMemo(() => ({
    reference: D,
    floating: j,
    setReference: b,
    setFloating: S
  }), [b, S]), $ = u.useMemo(() => ({
    reference: E,
    floating: C
  }), [E, C]), ee = u.useMemo(() => {
    const P = {
      position: t,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return P;
    const N = xi($.floating, p.x), _ = xi($.floating, p.y);
    return s ? {
      ...P,
      transform: "translate(" + N + "px, " + _ + "px)",
      ...kc($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: N,
      top: _
    };
  }, [t, s, $.floating, p.x, p.y]);
  return u.useMemo(() => ({
    ...p,
    update: U,
    refs: Q,
    elements: $,
    floatingStyles: ee
  }), [p, U, Q, $, ee]);
}
const Jh = (e) => {
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
      return r && n(r) ? r.current != null ? vi({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? vi({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
}, Qh = (e, n) => ({
  ...Vh(e),
  options: [e, n]
}), eg = (e, n) => ({
  ...Bh(e),
  options: [e, n]
}), tg = (e, n) => ({
  ...Yh(e),
  options: [e, n]
}), ng = (e, n) => ({
  ...Hh(e),
  options: [e, n]
}), rg = (e, n) => ({
  ...Uh(e),
  options: [e, n]
}), og = (e, n) => ({
  ...Gh(e),
  options: [e, n]
}), ag = (e, n) => ({
  ...Jh(e),
  options: [e, n]
});
var ig = "Arrow", _c = u.forwardRef((e, n) => {
  const { children: t, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ c.jsx(
    se.svg,
    {
      ...a,
      ref: n,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? t : /* @__PURE__ */ c.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
_c.displayName = ig;
var sg = _c;
function cg(e) {
  const [n, t] = u.useState(void 0);
  return Re(() => {
    if (e) {
      t({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, d = Array.isArray(l) ? l[0] : l;
          i = d.inlineSize, s = d.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        t({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      t(void 0);
  }, [e]), n;
}
var fa = "Popper", [Pc, mt] = Ze(fa), [lg, Rc] = Pc(fa), jc = (e) => {
  const { __scopePopper: n, children: t } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ c.jsx(lg, { scope: n, anchor: r, onAnchorChange: o, children: t });
};
jc.displayName = fa;
var Oc = "PopperAnchor", Mc = u.forwardRef(
  (e, n) => {
    const { __scopePopper: t, virtualRef: r, ...o } = e, a = Rc(Oc, t), i = u.useRef(null), s = ce(n, i), l = u.useRef(null);
    return u.useEffect(() => {
      const d = l.current;
      l.current = r?.current || i.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(se.div, { ...o, ref: s });
  }
);
Mc.displayName = Oc;
var ma = "PopperContent", [ug, dg] = Pc(ma), Tc = u.forwardRef(
  (e, n) => {
    const {
      __scopePopper: t,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: d = [],
      collisionPadding: p = 0,
      sticky: f = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: x,
      ...h
    } = e, v = Rc(ma, t), [w, b] = u.useState(null), S = ce(n, (k) => b(k)), [E, C] = u.useState(null), D = cg(E), j = D?.width ?? 0, R = D?.height ?? 0, L = r + (a !== "center" ? "-" + a : ""), B = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, J = Array.isArray(d) ? d : [d], q = J.length > 0, U = {
      padding: B,
      boundary: J.filter(fg),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: H, floatingStyles: Q, placement: $, isPositioned: ee, middlewareData: P } = Xh({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: L,
      whileElementsMounted: (...k) => Wh(...k, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        Qh({ mainAxis: o + R, alignmentAxis: i }),
        l && eg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? tg() : void 0,
          ...U
        }),
        l && ng({ ...U }),
        rg({
          ...U,
          apply: ({ elements: k, rects: V, availableWidth: X, availableHeight: F }) => {
            const { width: re, height: M } = V.reference, fe = k.floating.style;
            fe.setProperty("--radix-popper-available-width", `${X}px`), fe.setProperty("--radix-popper-available-height", `${F}px`), fe.setProperty("--radix-popper-anchor-width", `${re}px`), fe.setProperty("--radix-popper-anchor-height", `${M}px`);
          }
        }),
        E && ag({ element: E, padding: s }),
        mg({ arrowWidth: j, arrowHeight: R }),
        m && og({ strategy: "referenceHidden", ...U })
      ]
    }), [N, _] = Nc($), y = We(x);
    Re(() => {
      ee && y?.();
    }, [ee, y]);
    const O = P.arrow?.x, I = P.arrow?.y, T = P.arrow?.centerOffset !== 0, [G, W] = u.useState();
    return Re(() => {
      w && W(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: H.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: ee ? Q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: G,
          "--radix-popper-transform-origin": [
            P.transformOrigin?.x,
            P.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...P.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ c.jsx(
          ug,
          {
            scope: t,
            placedSide: N,
            onArrowChange: C,
            arrowX: O,
            arrowY: I,
            shouldHideArrow: T,
            children: /* @__PURE__ */ c.jsx(
              se.div,
              {
                "data-side": N,
                "data-align": _,
                ...h,
                ref: S,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: ee ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Tc.displayName = ma;
var Ac = "PopperArrow", pg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Dc = u.forwardRef(function(n, t) {
  const { __scopePopper: r, ...o } = n, a = dg(Ac, r), i = pg[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ c.jsx(
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
        children: /* @__PURE__ */ c.jsx(
          sg,
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
Dc.displayName = Ac;
function fg(e) {
  return e !== null;
}
var mg = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    const { placement: t, rects: r, middlewareData: o } = n, i = o.arrow?.centerOffset !== 0, s = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [d, p] = Nc(t), f = { start: "0%", center: "50%", end: "100%" }[p], m = (o.arrow?.x ?? 0) + s / 2, g = (o.arrow?.y ?? 0) + l / 2;
    let x = "", h = "";
    return d === "bottom" ? (x = i ? f : `${m}px`, h = `${-l}px`) : d === "top" ? (x = i ? f : `${m}px`, h = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, h = i ? f : `${g}px`) : d === "left" && (x = `${r.floating.width + l}px`, h = i ? f : `${g}px`), { data: { x, y: h } };
  }
});
function Nc(e) {
  const [n, t = "center"] = e.split("-");
  return [n, t];
}
var kn = jc, _n = Mc, Rr = Tc, jr = Dc, oo = "rovingFocusGroup.onEntryFocus", hg = { bubbles: !1, cancelable: !0 }, Pn = "RovingFocusGroup", [Oo, Ic, gg] = aa(Pn), [vg, Lc] = Ze(
  Pn,
  [gg]
), [xg, bg] = vg(Pn), Fc = u.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(Oo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Oo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(yg, { ...e, ref: n }) }) })
);
Fc.displayName = Pn;
var yg = u.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: t,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: d,
    preventScrollOnEntryFocus: p = !1,
    ...f
  } = e, m = u.useRef(null), g = ce(n, m), x = ia(a), [h, v] = dt({
    prop: i,
    defaultProp: s ?? null,
    onChange: l,
    caller: Pn
  }), [w, b] = u.useState(!1), S = We(d), E = Ic(t), C = u.useRef(!1), [D, j] = u.useState(0);
  return u.useEffect(() => {
    const R = m.current;
    if (R)
      return R.addEventListener(oo, S), () => R.removeEventListener(oo, S);
  }, [S]), /* @__PURE__ */ c.jsx(
    xg,
    {
      scope: t,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: h,
      onItemFocus: u.useCallback(
        (R) => v(R),
        [v]
      ),
      onItemShiftTab: u.useCallback(() => b(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => j((R) => R + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => j((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ c.jsx(
        se.div,
        {
          tabIndex: w || D === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: Y(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: Y(e.onFocus, (R) => {
            const L = !C.current;
            if (R.target === R.currentTarget && L && !w) {
              const B = new CustomEvent(oo, hg);
              if (R.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const J = E().filter(($) => $.focusable), q = J.find(($) => $.active), U = J.find(($) => $.id === h), Q = [q, U, ...J].filter(
                  Boolean
                ).map(($) => $.ref.current);
                Wc(Q, p);
              }
            }
            C.current = !1;
          }),
          onBlur: Y(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), zc = "RovingFocusGroupItem", $c = u.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, l = De(), d = a || l, p = bg(zc, t), f = p.currentTabStopId === d, m = Ic(t), { onFocusableItemAdd: g, onFocusableItemRemove: x, currentTabStopId: h } = p;
    return u.useEffect(() => {
      if (r)
        return g(), () => x();
    }, [r, g, x]), /* @__PURE__ */ c.jsx(
      Oo.ItemSlot,
      {
        scope: t,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ c.jsx(
          se.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": p.orientation,
            ...s,
            ref: n,
            onMouseDown: Y(e.onMouseDown, (v) => {
              r ? p.onItemFocus(d) : v.preventDefault();
            }),
            onFocus: Y(e.onFocus, () => p.onItemFocus(d)),
            onKeyDown: Y(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const w = Sg(v, p.orientation, p.dir);
              if (w !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let S = m().filter((E) => E.focusable).map((E) => E.ref.current);
                if (w === "last") S.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && S.reverse();
                  const E = S.indexOf(v.currentTarget);
                  S = p.loop ? Eg(S, E + 1) : S.slice(E + 1);
                }
                setTimeout(() => Wc(S));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: f, hasTabStop: h != null }) : i
          }
        )
      }
    );
  }
);
$c.displayName = zc;
var wg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Cg(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Sg(e, n, t) {
  const r = Cg(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return wg[r];
}
function Wc(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function Eg(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var kg = Fc, _g = $c;
// @__NO_SIDE_EFFECTS__
function Pg(e) {
  const n = /* @__PURE__ */ Rg(e), t = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(Og);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Rg(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (u.isValidElement(o)) {
      const i = Tg(o), s = Mg(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? Xe(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var jg = /* @__PURE__ */ Symbol("radix.slottable");
function Og(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === jg;
}
function Mg(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], a = n[r];
    /^on[A-Z]/.test(r) ? o && a ? t[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...a } : r === "className" && (t[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Tg(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Mo = ["Enter", " "], Ag = ["ArrowDown", "PageUp", "Home"], Vc = ["ArrowUp", "PageDown", "End"], Dg = [...Ag, ...Vc], Ng = {
  ltr: [...Mo, "ArrowRight"],
  rtl: [...Mo, "ArrowLeft"]
}, Ig = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Rn = "Menu", [mn, Lg, Fg] = aa(Rn), [Rt, Bc] = Ze(Rn, [
  Fg,
  mt,
  Lc
]), jn = mt(), Hc = Lc(), [Uc, ht] = Rt(Rn), [zg, On] = Rt(Rn), Gc = (e) => {
  const { __scopeMenu: n, open: t = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = jn(n), [l, d] = u.useState(null), p = u.useRef(!1), f = We(a), m = ia(o);
  return u.useEffect(() => {
    const g = () => {
      p.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => p.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(kn, { ...s, children: /* @__PURE__ */ c.jsx(
    Uc,
    {
      scope: n,
      open: t,
      onOpenChange: f,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        zg,
        {
          scope: n,
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
Gc.displayName = Rn;
var $g = "MenuAnchor", ha = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = jn(t);
    return /* @__PURE__ */ c.jsx(_n, { ...o, ...r, ref: n });
  }
);
ha.displayName = $g;
var ga = "MenuPortal", [Wg, Yc] = Rt(ga, {
  forceMount: void 0
}), qc = (e) => {
  const { __scopeMenu: n, forceMount: t, children: r, container: o } = e, a = ht(ga, n);
  return /* @__PURE__ */ c.jsx(Wg, { scope: n, forceMount: t, children: /* @__PURE__ */ c.jsx(He, { present: t || a.open, children: /* @__PURE__ */ c.jsx(yn, { asChild: !0, container: o, children: r }) }) });
};
qc.displayName = ga;
var Fe = "MenuContent", [Vg, va] = Rt(Fe), Kc = u.forwardRef(
  (e, n) => {
    const t = Yc(Fe, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, a = ht(Fe, e.__scopeMenu), i = On(Fe, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(mn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(He, { present: r || a.open, children: /* @__PURE__ */ c.jsx(mn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ c.jsx(Bg, { ...o, ref: n }) : /* @__PURE__ */ c.jsx(Hg, { ...o, ref: n }) }) }) });
  }
), Bg = u.forwardRef(
  (e, n) => {
    const t = ht(Fe, e.__scopeMenu), r = u.useRef(null), o = ce(n, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return br(a);
    }, []), /* @__PURE__ */ c.jsx(
      xa,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: t.open,
        disableOutsideScroll: !0,
        onFocusOutside: Y(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => t.onOpenChange(!1)
      }
    );
  }
), Hg = u.forwardRef((e, n) => {
  const t = ht(Fe, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    xa,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), Ug = /* @__PURE__ */ Pg("MenuContent.ScrollLock"), xa = u.forwardRef(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: l,
      onEscapeKeyDown: d,
      onPointerDownOutside: p,
      onFocusOutside: f,
      onInteractOutside: m,
      onDismiss: g,
      disableOutsideScroll: x,
      ...h
    } = e, v = ht(Fe, t), w = On(Fe, t), b = jn(t), S = Hc(t), E = Lg(t), [C, D] = u.useState(null), j = u.useRef(null), R = ce(n, j, v.onContentChange), L = u.useRef(0), B = u.useRef(""), J = u.useRef(0), q = u.useRef(null), U = u.useRef("right"), H = u.useRef(0), Q = x ? wn : u.Fragment, $ = x ? { as: Ug, allowPinchZoom: !0 } : void 0, ee = (N) => {
      const _ = B.current + N, y = E().filter((k) => !k.disabled), O = document.activeElement, I = y.find((k) => k.ref.current === O)?.textValue, T = y.map((k) => k.textValue), G = rv(T, _, I), W = y.find((k) => k.textValue === G)?.ref.current;
      (function k(V) {
        B.current = V, window.clearTimeout(L.current), V !== "" && (L.current = window.setTimeout(() => k(""), 1e3));
      })(_), W && setTimeout(() => W.focus());
    };
    u.useEffect(() => () => window.clearTimeout(L.current), []), vr();
    const P = u.useCallback((N) => U.current === q.current?.side && av(N, q.current?.area), []);
    return /* @__PURE__ */ c.jsx(
      Vg,
      {
        scope: t,
        searchRef: B,
        onItemEnter: u.useCallback(
          (N) => {
            P(N) && N.preventDefault();
          },
          [P]
        ),
        onItemLeave: u.useCallback(
          (N) => {
            P(N) || (j.current?.focus(), D(null));
          },
          [P]
        ),
        onTriggerLeave: u.useCallback(
          (N) => {
            P(N) && N.preventDefault();
          },
          [P]
        ),
        pointerGraceTimerRef: J,
        onPointerGraceIntentChange: u.useCallback((N) => {
          q.current = N;
        }, []),
        children: /* @__PURE__ */ c.jsx(Q, { ...$, children: /* @__PURE__ */ c.jsx(
          bn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: Y(a, (N) => {
              N.preventDefault(), j.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ c.jsx(
              Ut,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: d,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: m,
                onDismiss: g,
                children: /* @__PURE__ */ c.jsx(
                  kg,
                  {
                    asChild: !0,
                    ...S,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: D,
                    onEntryFocus: Y(l, (N) => {
                      w.isUsingKeyboardRef.current || N.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      Rr,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": pl(v.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...h,
                        ref: R,
                        style: { outline: "none", ...h.style },
                        onKeyDown: Y(h.onKeyDown, (N) => {
                          const y = N.target.closest("[data-radix-menu-content]") === N.currentTarget, O = N.ctrlKey || N.altKey || N.metaKey, I = N.key.length === 1;
                          y && (N.key === "Tab" && N.preventDefault(), !O && I && ee(N.key));
                          const T = j.current;
                          if (N.target !== T || !Dg.includes(N.key)) return;
                          N.preventDefault();
                          const W = E().filter((k) => !k.disabled).map((k) => k.ref.current);
                          Vc.includes(N.key) && W.reverse(), tv(W);
                        }),
                        onBlur: Y(e.onBlur, (N) => {
                          N.currentTarget.contains(N.target) || (window.clearTimeout(L.current), B.current = "");
                        }),
                        onPointerMove: Y(
                          e.onPointerMove,
                          hn((N) => {
                            const _ = N.target, y = H.current !== N.clientX;
                            if (N.currentTarget.contains(_) && y) {
                              const O = N.clientX > H.current ? "right" : "left";
                              U.current = O, H.current = N.clientX;
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
Kc.displayName = Fe;
var Gg = "MenuGroup", ba = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(se.div, { role: "group", ...r, ref: n });
  }
);
ba.displayName = Gg;
var Yg = "MenuLabel", Zc = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(se.div, { ...r, ref: n });
  }
);
Zc.displayName = Yg;
var ar = "MenuItem", bi = "menu.itemSelect", Or = u.forwardRef(
  (e, n) => {
    const { disabled: t = !1, onSelect: r, ...o } = e, a = u.useRef(null), i = On(ar, e.__scopeMenu), s = va(ar, e.__scopeMenu), l = ce(n, a), d = u.useRef(!1), p = () => {
      const f = a.current;
      if (!t && f) {
        const m = new CustomEvent(bi, { bubbles: !0, cancelable: !0 });
        f.addEventListener(bi, (g) => r?.(g), { once: !0 }), ms(f, m), m.defaultPrevented ? d.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Xc,
      {
        ...o,
        ref: l,
        disabled: t,
        onClick: Y(e.onClick, p),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), d.current = !0;
        },
        onPointerUp: Y(e.onPointerUp, (f) => {
          d.current || f.currentTarget?.click();
        }),
        onKeyDown: Y(e.onKeyDown, (f) => {
          const m = s.searchRef.current !== "";
          t || m && f.key === " " || Mo.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
Or.displayName = ar;
var Xc = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, disabled: r = !1, textValue: o, ...a } = e, i = va(ar, t), s = Hc(t), l = u.useRef(null), d = ce(n, l), [p, f] = u.useState(!1), [m, g] = u.useState("");
    return u.useEffect(() => {
      const x = l.current;
      x && g((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      mn.ItemSlot,
      {
        scope: t,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ c.jsx(_g, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ c.jsx(
          se.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: Y(
              e.onPointerMove,
              hn((x) => {
                r ? i.onItemLeave(x) : (i.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Y(
              e.onPointerLeave,
              hn((x) => i.onItemLeave(x))
            ),
            onFocus: Y(e.onFocus, () => f(!0)),
            onBlur: Y(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), qg = "MenuCheckboxItem", Jc = u.forwardRef(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(rl, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ c.jsx(
      Or,
      {
        role: "menuitemcheckbox",
        "aria-checked": ir(t) ? "mixed" : t,
        ...o,
        ref: n,
        "data-state": Ca(t),
        onSelect: Y(
          o.onSelect,
          () => r?.(ir(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Jc.displayName = qg;
var Qc = "MenuRadioGroup", [Kg, Zg] = Rt(
  Qc,
  { value: void 0, onValueChange: () => {
  } }
), el = u.forwardRef(
  (e, n) => {
    const { value: t, onValueChange: r, ...o } = e, a = We(r);
    return /* @__PURE__ */ c.jsx(Kg, { scope: e.__scopeMenu, value: t, onValueChange: a, children: /* @__PURE__ */ c.jsx(ba, { ...o, ref: n }) });
  }
);
el.displayName = Qc;
var tl = "MenuRadioItem", nl = u.forwardRef(
  (e, n) => {
    const { value: t, ...r } = e, o = Zg(tl, e.__scopeMenu), a = t === o.value;
    return /* @__PURE__ */ c.jsx(rl, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      Or,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: n,
        "data-state": Ca(a),
        onSelect: Y(
          r.onSelect,
          () => o.onValueChange?.(t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
nl.displayName = tl;
var ya = "MenuItemIndicator", [rl, Xg] = Rt(
  ya,
  { checked: !1 }
), ol = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, forceMount: r, ...o } = e, a = Xg(ya, t);
    return /* @__PURE__ */ c.jsx(
      He,
      {
        present: r || ir(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          se.span,
          {
            ...o,
            ref: n,
            "data-state": Ca(a.checked)
          }
        )
      }
    );
  }
);
ol.displayName = ya;
var Jg = "MenuSeparator", al = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(
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
al.displayName = Jg;
var Qg = "MenuArrow", il = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = jn(t);
    return /* @__PURE__ */ c.jsx(jr, { ...o, ...r, ref: n });
  }
);
il.displayName = Qg;
var wa = "MenuSub", [ev, sl] = Rt(wa), cl = (e) => {
  const { __scopeMenu: n, children: t, open: r = !1, onOpenChange: o } = e, a = ht(wa, n), i = jn(n), [s, l] = u.useState(null), [d, p] = u.useState(null), f = We(o);
  return u.useEffect(() => (a.open === !1 && f(!1), () => f(!1)), [a.open, f]), /* @__PURE__ */ c.jsx(kn, { ...i, children: /* @__PURE__ */ c.jsx(
    Uc,
    {
      scope: n,
      open: r,
      onOpenChange: f,
      content: d,
      onContentChange: p,
      children: /* @__PURE__ */ c.jsx(
        ev,
        {
          scope: n,
          contentId: De(),
          triggerId: De(),
          trigger: s,
          onTriggerChange: l,
          children: t
        }
      )
    }
  ) });
};
cl.displayName = wa;
var cn = "MenuSubTrigger", ll = u.forwardRef(
  (e, n) => {
    const t = ht(cn, e.__scopeMenu), r = On(cn, e.__scopeMenu), o = sl(cn, e.__scopeMenu), a = va(cn, e.__scopeMenu), i = u.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, p = u.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return u.useEffect(() => p, [p]), u.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [s, l]), /* @__PURE__ */ c.jsx(ha, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      Xc,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": o.contentId,
        "data-state": pl(t.open),
        ...e,
        ref: Xe(n, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: Y(
          e.onPointerMove,
          hn((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !t.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              t.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: Y(
          e.onPointerLeave,
          hn((f) => {
            p();
            const m = t.content?.getBoundingClientRect();
            if (m) {
              const g = t.content?.dataset.side, x = g === "right", h = x ? -5 : 5, v = m[x ? "left" : "right"], w = m[x ? "right" : "left"];
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
        onKeyDown: Y(e.onKeyDown, (f) => {
          const m = a.searchRef.current !== "";
          e.disabled || m && f.key === " " || Ng[r.dir].includes(f.key) && (t.onOpenChange(!0), t.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
ll.displayName = cn;
var ul = "MenuSubContent", dl = u.forwardRef(
  (e, n) => {
    const t = Yc(Fe, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, a = ht(Fe, e.__scopeMenu), i = On(Fe, e.__scopeMenu), s = sl(ul, e.__scopeMenu), l = u.useRef(null), d = ce(n, l);
    return /* @__PURE__ */ c.jsx(mn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(He, { present: r || a.open, children: /* @__PURE__ */ c.jsx(mn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      xa,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: d,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (p) => {
          i.isUsingKeyboardRef.current && l.current?.focus(), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: Y(e.onFocusOutside, (p) => {
          p.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: Y(e.onEscapeKeyDown, (p) => {
          i.onClose(), p.preventDefault();
        }),
        onKeyDown: Y(e.onKeyDown, (p) => {
          const f = p.currentTarget.contains(p.target), m = Ig[i.dir].includes(p.key);
          f && m && (a.onOpenChange(!1), s.trigger?.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
dl.displayName = ul;
function pl(e) {
  return e ? "open" : "closed";
}
function ir(e) {
  return e === "indeterminate";
}
function Ca(e) {
  return ir(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function tv(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function nv(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
function rv(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((d) => d === n[0]) ? n[0] : n, a = t ? e.indexOf(t) : -1;
  let i = nv(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((d) => d !== t));
  const l = i.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== t ? l : void 0;
}
function ov(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let a = 0, i = n.length - 1; a < n.length; i = a++) {
    const s = n[a], l = n[i], d = s.x, p = s.y, f = l.x, m = l.y;
    p > r != m > r && t < (f - d) * (r - p) / (m - p) + d && (o = !o);
  }
  return o;
}
function av(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return ov(t, n);
}
function hn(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var iv = Gc, sv = ha, cv = qc, lv = Kc, uv = ba, dv = Zc, pv = Or, fv = Jc, mv = el, hv = nl, gv = ol, vv = al, xv = il, bv = cl, yv = ll, wv = dl, Mr = "DropdownMenu", [Cv] = Ze(
  Mr,
  [Bc]
), je = Bc(), [Sv, fl] = Cv(Mr), Sa = (e) => {
  const {
    __scopeDropdownMenu: n,
    children: t,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, l = je(n), d = u.useRef(null), [p, f] = dt({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: Mr
  });
  return /* @__PURE__ */ c.jsx(
    Sv,
    {
      scope: n,
      triggerId: De(),
      triggerRef: d,
      contentId: De(),
      open: p,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: /* @__PURE__ */ c.jsx(iv, { ...l, open: p, onOpenChange: f, dir: r, modal: s, children: t })
    }
  );
};
Sa.displayName = Mr;
var ml = "DropdownMenuTrigger", Ea = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, disabled: r = !1, ...o } = e, a = fl(ml, t), i = je(t);
    return /* @__PURE__ */ c.jsx(sv, { asChild: !0, ...i, children: /* @__PURE__ */ c.jsx(
      se.button,
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
        ref: Xe(n, a.triggerRef),
        onPointerDown: Y(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: Y(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Ea.displayName = ml;
var Ev = "DropdownMenuPortal", Tr = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = je(n);
  return /* @__PURE__ */ c.jsx(cv, { ...r, ...t });
};
Tr.displayName = Ev;
var hl = "DropdownMenuContent", ka = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = fl(hl, t), a = je(t), i = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      lv,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: n,
        onCloseAutoFocus: Y(e.onCloseAutoFocus, (s) => {
          i.current || o.triggerRef.current?.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: Y(e.onInteractOutside, (s) => {
          const l = s.detail.originalEvent, d = l.button === 0 && l.ctrlKey === !0, p = l.button === 2 || d;
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
ka.displayName = hl;
var kv = "DropdownMenuGroup", gl = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
    return /* @__PURE__ */ c.jsx(uv, { ...o, ...r, ref: n });
  }
);
gl.displayName = kv;
var _v = "DropdownMenuLabel", vl = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
    return /* @__PURE__ */ c.jsx(dv, { ...o, ...r, ref: n });
  }
);
vl.displayName = _v;
var Pv = "DropdownMenuItem", _a = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
    return /* @__PURE__ */ c.jsx(pv, { ...o, ...r, ref: n });
  }
);
_a.displayName = Pv;
var Rv = "DropdownMenuCheckboxItem", xl = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(fv, { ...o, ...r, ref: n });
});
xl.displayName = Rv;
var jv = "DropdownMenuRadioGroup", bl = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(mv, { ...o, ...r, ref: n });
});
bl.displayName = jv;
var Ov = "DropdownMenuRadioItem", yl = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(hv, { ...o, ...r, ref: n });
});
yl.displayName = Ov;
var Mv = "DropdownMenuItemIndicator", Pa = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(gv, { ...o, ...r, ref: n });
});
Pa.displayName = Mv;
var Tv = "DropdownMenuSeparator", wl = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(vv, { ...o, ...r, ref: n });
});
wl.displayName = Tv;
var Av = "DropdownMenuArrow", Dv = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
    return /* @__PURE__ */ c.jsx(xv, { ...o, ...r, ref: n });
  }
);
Dv.displayName = Av;
var Nv = (e) => {
  const { __scopeDropdownMenu: n, children: t, open: r, onOpenChange: o, defaultOpen: a } = e, i = je(n), [s, l] = dt({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ c.jsx(bv, { ...i, open: s, onOpenChange: l, children: t });
}, Iv = "DropdownMenuSubTrigger", Cl = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(yv, { ...o, ...r, ref: n });
});
Cl.displayName = Iv;
var Lv = "DropdownMenuSubContent", Sl = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(
    wv,
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
Sl.displayName = Lv;
var Fv = Sa, zv = Ea, $v = Tr, Wv = ka, Vv = _a;
function J1({ ...e }) {
  return /* @__PURE__ */ c.jsx(Sa, { "data-slot": "dropdown-menu", ...e });
}
function Q1({ ...e }) {
  return /* @__PURE__ */ c.jsx(Tr, { "data-slot": "dropdown-menu-portal", ...e });
}
function e2({ ...e }) {
  return /* @__PURE__ */ c.jsx(Ea, { "data-slot": "dropdown-menu-trigger", ...e });
}
function t2({
  className: e,
  align: n = "start",
  sideOffset: t = 4,
  ...r
}) {
  return /* @__PURE__ */ c.jsx(Tr, { children: /* @__PURE__ */ c.jsx(
    ka,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      align: n,
      className: A(
        "z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-2xl bg-white p-1 text-popover-foreground shadow-dropdown duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...r
    }
  ) });
}
function n2({ ...e }) {
  return /* @__PURE__ */ c.jsx(gl, { "data-slot": "dropdown-menu-group", ...e });
}
function r2({
  className: e,
  inset: n,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ c.jsx(
    _a,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": n,
      "data-variant": t,
      className: A(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        e
      ),
      ...r
    }
  );
}
function o2({
  className: e,
  children: n,
  checked: t,
  inset: r,
  ...o
}) {
  return /* @__PURE__ */ c.jsxs(
    xl,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      "data-inset": r,
      className: A(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: t,
      ...o,
      children: [
        /* @__PURE__ */ c.jsx(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-checkbox-item-indicator",
            children: /* @__PURE__ */ c.jsx(Pa, { children: /* @__PURE__ */ c.jsx(Sn, {}) })
          }
        ),
        n
      ]
    }
  );
}
function a2({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(bl, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function i2({
  className: e,
  children: n,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(
    yl,
    {
      "data-slot": "dropdown-menu-radio-item",
      "data-inset": t,
      className: A(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-radio-item-indicator",
            children: /* @__PURE__ */ c.jsx(Pa, { children: /* @__PURE__ */ c.jsx(Sn, {}) })
          }
        ),
        n
      ]
    }
  );
}
function s2({
  className: e,
  inset: n,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    vl,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": n,
      className: A(
        "px-7 py-4 text-base leading-5 font-manrope font-semibold text-gray-900 data-inset:pl-7",
        e
      ),
      ...t
    }
  );
}
function c2({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    wl,
    {
      "data-slot": "dropdown-menu-separator",
      className: A("-mx-1 my-1 h-px bg-gray-50", e),
      ...n
    }
  );
}
function l2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: A(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        e
      ),
      ...n
    }
  );
}
function u2({ ...e }) {
  return /* @__PURE__ */ c.jsx(Nv, { "data-slot": "dropdown-menu-sub", ...e });
}
function d2({
  className: e,
  inset: n,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(
    Cl,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": n,
      className: A(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ c.jsx(Sr, { className: "cn-rtl-flip ml-auto" })
      ]
    }
  );
}
function p2({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    Sl,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: A(
        "z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...n
    }
  );
}
var Bv = (e) => e.type === "checkbox", ln = (e) => e instanceof Date, Ra = (e) => e == null;
const El = (e) => typeof e == "object";
var Et = (e) => !Ra(e) && !Array.isArray(e) && El(e) && !ln(e), Hv = (e) => Et(e) && e.target ? Bv(e.target) ? e.target.checked : e.target.value : e, Uv = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Gv = (e, n) => e.has(Uv(n)), Yv = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return Et(n) && n.hasOwnProperty("isPrototypeOf");
}, qv = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function kl(e) {
  let n;
  const t = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    n = new Date(e);
  else if (!(qv && (e instanceof Blob || r)) && (t || Et(e)))
    if (n = t ? [] : Object.create(Object.getPrototypeOf(e)), !t && !Yv(e))
      n = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (n[o] = kl(e[o]));
  else
    return e;
  return n;
}
var _l = (e) => /^\w*$/.test(e), To = (e) => e === void 0, Kv = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Pl = (e) => Kv(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Oe = (e, n, t) => {
  if (!n || !Et(e))
    return t;
  const r = (_l(n) ? [n] : Pl(n)).reduce((o, a) => Ra(o) ? o : o[a], e);
  return To(r) || r === e ? To(e[n]) ? t : e[n] : r;
}, ao = (e) => typeof e == "boolean", yi = (e, n, t) => {
  let r = -1;
  const o = _l(n) ? [n] : Pl(n), a = o.length, i = a - 1;
  for (; ++r < a; ) {
    const s = o[r];
    let l = t;
    if (r !== i) {
      const d = e[s];
      l = Et(d) || Array.isArray(d) ? d : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = l, e = e[s];
  }
};
const wi = {
  BLUR: "blur",
  CHANGE: "change"
}, Ci = {
  all: "all"
}, ja = ae.createContext(null);
ja.displayName = "HookFormContext";
const Ar = () => ae.useContext(ja), Zv = (e) => {
  const { children: n, ...t } = e;
  return ae.createElement(ja.Provider, { value: t }, n);
};
var Xv = (e, n, t, r = !0) => {
  const o = {
    defaultValues: n._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const i = a;
        return n._proxyFormState[i] !== Ci.all && (n._proxyFormState[i] = !r || Ci.all), t && (t[i] = !0), e[i];
      }
    });
  return o;
};
const Rl = typeof window < "u" ? ae.useLayoutEffect : ae.useEffect;
function jl(e) {
  const n = Ar(), { control: t = n.control, disabled: r, name: o, exact: a } = e || {}, [i, s] = ae.useState(t._formState), l = ae.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Rl(() => t._subscribe({
    name: o,
    formState: l.current,
    exact: a,
    callback: (d) => {
      !r && s({
        ...t._formState,
        ...d
      });
    }
  }), [o, r, a]), ae.useEffect(() => {
    l.current.isValid && t._setValid(!0);
  }, [t]), ae.useMemo(() => Xv(i, t, l.current, !1), [i, t]);
}
var Jv = (e) => typeof e == "string", Si = (e, n, t, r, o) => Jv(e) ? Oe(t, e, o) : Array.isArray(e) ? e.map((a) => Oe(t, a)) : t, Ei = (e) => Ra(e) || !El(e);
function Xn(e, n, t = /* @__PURE__ */ new WeakSet()) {
  if (Ei(e) || Ei(n))
    return Object.is(e, n);
  if (ln(e) && ln(n))
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
      if (ln(i) && ln(s) || Et(i) && Et(s) || Array.isArray(i) && Array.isArray(s) ? !Xn(i, s, t) : !Object.is(i, s))
        return !1;
    }
  }
  return !0;
}
function Qv(e) {
  const n = Ar(), { control: t = n.control, name: r, defaultValue: o, disabled: a, exact: i, compute: s } = e || {}, l = ae.useRef(o), d = ae.useRef(s), p = ae.useRef(void 0), f = ae.useRef(t), m = ae.useRef(r);
  d.current = s;
  const [g, x] = ae.useState(() => {
    const E = t._getWatch(r, l.current);
    return d.current ? d.current(E) : E;
  }), h = ae.useCallback((E) => {
    const C = Si(r, t._names, E || t._formValues, !1, l.current);
    return d.current ? d.current(C) : C;
  }, [t._formValues, t._names, r]), v = ae.useCallback((E) => {
    if (!a) {
      const C = Si(r, t._names, E || t._formValues, !1, l.current);
      if (d.current) {
        const D = d.current(C);
        Xn(D, p.current) || (x(D), p.current = D);
      } else
        x(C);
    }
  }, [t._formValues, t._names, a, r]);
  Rl(() => ((f.current !== t || !Xn(m.current, r)) && (f.current = t, m.current = r, v()), t._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: i,
    callback: (E) => {
      v(E.values);
    }
  })), [t, i, r, v]), ae.useEffect(() => t._removeUnmounted());
  const w = f.current !== t, b = m.current, S = ae.useMemo(() => {
    if (a)
      return null;
    const E = !w && !Xn(b, r);
    return w || E ? h() : null;
  }, [a, w, r, b, h]);
  return S !== null ? S : g;
}
function ex(e) {
  const n = Ar(), { name: t, disabled: r, control: o = n.control, shouldUnregister: a, defaultValue: i, exact: s = !0 } = e, l = Gv(o._names.array, t), d = ae.useMemo(() => Oe(o._formValues, t, Oe(o._defaultValues, t, i)), [o, t, i]), p = Qv({
    control: o,
    name: t,
    defaultValue: d,
    exact: s
  }), f = jl({
    control: o,
    name: t,
    exact: s
  }), m = ae.useRef(e), g = ae.useRef(void 0), x = ae.useRef(o.register(t, {
    ...e.rules,
    value: p,
    ...ao(e.disabled) ? { disabled: e.disabled } : {}
  }));
  m.current = e;
  const h = ae.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Oe(f.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Oe(f.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Oe(f.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Oe(f.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => Oe(f.errors, t)
    }
  }), [f, t]), v = ae.useCallback((E) => x.current.onChange({
    target: {
      value: Hv(E),
      name: t
    },
    type: wi.CHANGE
  }), [t]), w = ae.useCallback(() => x.current.onBlur({
    target: {
      value: Oe(o._formValues, t),
      name: t
    },
    type: wi.BLUR
  }), [t, o._formValues]), b = ae.useCallback((E) => {
    const C = Oe(o._fields, t);
    C && E && (C._f.ref = {
      focus: () => E.focus && E.focus(),
      select: () => E.select && E.select(),
      setCustomValidity: (D) => E.setCustomValidity(D),
      reportValidity: () => E.reportValidity()
    });
  }, [o._fields, t]), S = ae.useMemo(() => ({
    name: t,
    value: p,
    ...ao(r) || f.disabled ? { disabled: f.disabled || r } : {},
    onChange: v,
    onBlur: w,
    ref: b
  }), [t, r, f.disabled, v, w, b, p]);
  return ae.useEffect(() => {
    const E = o._options.shouldUnregister || a, C = g.current;
    C && C !== t && !l && o.unregister(C), o.register(t, {
      ...m.current.rules,
      ...ao(m.current.disabled) ? { disabled: m.current.disabled } : {}
    });
    const D = (j, R) => {
      const L = Oe(o._fields, j);
      L && L._f && (L._f.mount = R);
    };
    if (D(t, !0), E) {
      const j = kl(Oe(o._options.defaultValues, t, m.current.defaultValue));
      yi(o._defaultValues, t, j), To(Oe(o._formValues, t)) && yi(o._formValues, t, j);
    }
    return !l && o.register(t), g.current = t, () => {
      (l ? E && !o._state.action : E) ? o.unregister(t) : D(t, !1);
    };
  }, [t, o, l, a]), ae.useEffect(() => {
    o._setDisabledField({
      disabled: r,
      name: t
    });
  }, [r, t, o]), ae.useMemo(() => ({
    field: S,
    formState: f,
    fieldState: h
  }), [S, f, h]);
}
const tx = (e) => e.render(ex(e)), Ol = hr(
  ({ className: e, children: n, required: t, ...r }, o) => /* @__PURE__ */ c.jsxs(
    "label",
    {
      ref: o,
      "data-slot": "label",
      className: A("font-manrope font-medium text-sm text-gray-700", e),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx("span", { children: n }),
        t ? /* @__PURE__ */ c.jsx("span", { className: "text-base font-normal text-bright-red-600 ml-1 leading-[22px]", children: "*" }) : null
      ]
    }
  )
);
Ol.displayName = "Label";
const f2 = Zv, Ml = fs({}), m2 = ({
  ...e
}) => /* @__PURE__ */ c.jsx(Ml.Provider, { value: { name: e.name }, children: /* @__PURE__ */ c.jsx(tx, { ...e }) }), Dr = () => {
  const e = Co(Ml), n = Co(Tl), { getFieldState: t } = Ar(), r = jl({ name: e.name }), o = t(e.name, r);
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
}, Tl = fs({});
function h2({ className: e, ...n }) {
  const t = td();
  return /* @__PURE__ */ c.jsx(Tl.Provider, { value: { id: t }, children: /* @__PURE__ */ c.jsx("div", { "data-slot": "form-item", className: A("grid gap-2", e), ...n }) });
}
function g2({ className: e, ...n }) {
  const { error: t, formItemId: r } = Dr();
  return /* @__PURE__ */ c.jsx(
    Ol,
    {
      "data-slot": "form-label",
      "data-error": !!t,
      className: e,
      htmlFor: r,
      ...n
    }
  );
}
function v2({ ...e }) {
  const { error: n, formItemId: t, formDescriptionId: r, formMessageId: o } = Dr();
  return /* @__PURE__ */ c.jsx(
    wr,
    {
      "data-slot": "form-control",
      id: t,
      "aria-describedby": n ? `${r} ${o}` : `${r}`,
      "aria-invalid": !!n,
      ...e
    }
  );
}
function x2({ className: e, ...n }) {
  const { formDescriptionId: t } = Dr();
  return /* @__PURE__ */ c.jsx(
    "p",
    {
      "data-slot": "form-description",
      id: t,
      className: A("text-muted-foreground text-sm", e),
      ...n
    }
  );
}
function b2({ className: e, ...n }) {
  const { error: t, formMessageId: r } = Dr(), o = t ? String(t?.message ?? "") : n.children;
  return o ? /* @__PURE__ */ c.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: A("text-bright-red-600 text-sm", e),
      ...n,
      children: o
    }
  ) : null;
}
function Ee(e, n = {}) {
  const t = typeof e == "number" ? `${e}` : e ?? "24", r = typeof n["aria-label"] == "string";
  return {
    width: t,
    height: t,
    role: r ? "img" : "presentation",
    "aria-hidden": r ? void 0 : !0,
    ...n
  };
}
function nx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: A("inline-block", n), ...r, children: [
    /* @__PURE__ */ c.jsx("circle", { cx: "12.6457", cy: "4.35422", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "10.0876", cy: "9.80881", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "3.35422", cy: "11.0876", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "5.46091", cy: "5.63328", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("path", { d: "M5.19745 6.83691L3.91846 10.0344", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("path", { d: "M12.232 5.55786L10.3135 8.75533", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("path", { d: "M6.47645 6.83691L9.03442 8.7554", stroke: "currentColor" })
  ] });
}
function rx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", className: A("inline-block", n), ...r, children: [
    /* @__PURE__ */ c.jsx(
      "path",
      {
        d: "M11.1111 6.52632C13.8146 6.59229 16.4568 5.7579 18.5778 4.16842C18.7098 4.07459 18.8669 4.01745 19.0313 4.0034C19.1957 3.98936 19.361 4.01896 19.5086 4.0889C19.6563 4.15884 19.7805 4.26635 19.8672 4.39938C19.954 4.53242 20 4.68572 20 4.84211V14.9474C20 15.1038 19.954 15.2571 19.8672 15.3901C19.7805 15.5231 19.6563 15.6306 19.5086 15.7006C19.361 15.7705 19.1957 15.8001 19.0313 15.7861C18.8669 15.772 18.7098 15.7149 18.5778 15.621C16.4568 14.0316 13.8146 13.1972 11.1111 13.2632H5.77778C5.30628 13.2632 4.8541 13.0857 4.5207 12.7699C4.1873 12.454 4 12.0256 4 11.5789V8.21052C4 7.76384 4.1873 7.33546 4.5207 7.01961C4.8541 6.70376 5.30628 6.52632 5.77778 6.52632H11.1111Z",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "path",
      {
        d: "M6.66675 13.2632C6.66675 15.4496 7.41531 17.5771 8.80008 19.3263C9.08298 19.6837 9.50413 19.9199 9.97089 19.9831C10.4376 20.0462 10.9118 19.9312 11.289 19.6632C11.6662 19.3951 11.9155 18.9962 11.9822 18.554C12.0489 18.1118 11.9274 17.6626 11.6445 17.3053C10.7213 16.1391 10.2223 14.7208 10.2223 13.2632",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ c.jsx(
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
function ox({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: A("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M5.76123 9.17699V22H18.239V9.17699C18.239 8.35073 17.8982 7.56104 17.2971 6.99422L14.0582 3.94042C12.9025 2.85078 11.0978 2.85078 9.9421 3.94042L6.7032 6.99422C6.10202 7.56104 5.76123 8.35073 5.76123 9.17699Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M20.3964 12.2174L18.239 10.9483V22H19.8754C20.98 22 21.8754 21.1046 21.8754 20V14.8032C21.8754 13.7401 21.3128 12.7564 20.3964 12.2174Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M3.6038 12.2174L5.76123 10.9483V22H4.12486C3.02029 22 2.12486 21.1046 2.12486 20V14.8032C2.12486 13.7401 2.68748 12.7564 3.6038 12.2174Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M12.0002 7.28268V12",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M13.9609 9.15826H10.0393",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
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
function ax({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: A("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
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
function ix({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: A("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M10.6517 3.73292C10.3353 3.1997 9.64138 3.1997 9.32503 3.73292L6.86562 7.83985C6.68193 8.13482 6.36558 8.29365 6.04922 8.21424L2.62035 7.46546C2.03866 7.34067 1.54882 7.93061 1.69169 8.56594L3.3449 15.6112C3.43675 15.9856 3.72249 16.2466 4.06946 16.2693C4.06946 16.2693 5.34508 16.6663 9.99856 16.6663C14.652 16.6663 15.9277 16.2693 15.9277 16.2693C16.1828 16.2012 16.5604 15.9743 16.6522 15.6112L18.3054 8.56594C18.4585 7.93061 17.9584 7.34067 17.3768 7.46546L13.9479 8.21424C13.6315 8.28231 13.305 8.13482 13.1315 7.83985L10.6517 3.73292Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeMiterlimit: "10"
    }
  ) });
}
function sx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: A("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M16 2V6",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M8 2V6",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
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
function cx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: A("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M20 12V22H4V12",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M22 7H2V12H22V7Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M12 22V7",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
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
function lx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: A("inline-block", n),
      ...r,
      children: /* @__PURE__ */ c.jsx(
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
function ux({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: A("inline-block", n), ...r, children: [
    /* @__PURE__ */ c.jsx(
      "path",
      {
        d: "M5.33325 4H13.9999",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "path",
      {
        d: "M5.33325 8H13.9999",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "path",
      {
        d: "M5.33325 12H13.9999",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ c.jsx("path", { d: "M2 4H2.00667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ c.jsx("path", { d: "M2 8H2.00667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ c.jsx("path", { d: "M2 12H2.00667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function dx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: A("inline-block", n), ...r, children: [
    /* @__PURE__ */ c.jsx("circle", { cx: "8", cy: "8", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "8", cy: "8", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "8", cy: "8", r: "5.5", stroke: "currentColor" })
  ] });
}
function px({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: A("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM7.50001 5.41667C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H7.50001V5.41667ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function fx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: A("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667H7.50001C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function mx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: A("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M4 20C4 18.8954 4.89543 18 6 18H20V22H6C4.89543 22 4 21.1046 4 20V20Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M4 4C4 2.89543 4.89543 2 6 2H20V22H6C4.89543 22 4 21.1046 4 20V4Z",
            stroke: "currentColor",
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ c.jsx("path", { d: "M12 6.16666L12 14.5", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ c.jsx("path", { d: "M9 9.08334L15 9.08334", stroke: "currentColor", strokeWidth: "1.5" })
      ]
    }
  );
}
function hx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: A("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
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
function gx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: A("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M21.791 9.85414C21.6806 9.41327 21.4559 9.00933 21.1395 8.68312C20.823 8.3569 20.4261 8.11997 19.9888 7.99625C18.3911 7.60609 11.9999 7.60609 11.9999 7.60609C11.9999 7.60609 5.60879 7.60609 4.011 8.03341C3.5737 8.15713 3.17679 8.39406 2.86036 8.72028C2.54394 9.04649 2.3192 9.45043 2.20885 9.8913C1.91643 11.5128 1.7734 13.1577 1.78154 14.8054C1.77111 16.4655 1.91416 18.1229 2.20885 19.7567C2.3305 20.1839 2.56028 20.5724 2.87597 20.8849C3.19166 21.1973 3.58259 21.423 4.011 21.5402C5.60879 21.9676 11.9999 21.9676 11.9999 21.9676C11.9999 21.9676 18.3911 21.9676 19.9888 21.5402C20.4261 21.4165 20.823 21.1796 21.1395 20.8534C21.4559 20.5272 21.6806 20.1232 21.791 19.6824C22.0811 18.073 22.2242 16.4407 22.2183 14.8054C22.2287 13.1453 22.0857 11.4879 21.791 9.85414Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M3.09961 8.09392V6.89661C3.19992 6.49584 3.40422 6.12864 3.69186 5.8321C3.97951 5.53556 4.34032 5.32017 4.73784 5.20771C6.1903 4.81926 12.0001 4.81926 12.0001 4.81926C12.0001 4.81926 17.8099 4.81926 19.2624 5.17393C19.6599 5.2864 20.0207 5.50178 20.3084 5.79832C20.596 6.09486 20.8003 6.46206 20.9006 6.86283V8.09392",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M3.9895 5.40155V3.90205C4.07978 3.54135 4.26365 3.21088 4.52253 2.94399C4.78141 2.6771 5.10614 2.48326 5.46391 2.38204C6.77112 2.03243 12 2.03243 12 2.03243C12 2.03243 17.2288 2.03243 18.536 2.35163C18.8938 2.45286 19.2185 2.6467 19.4774 2.91359C19.7363 3.18048 19.9201 3.51095 20.0104 3.87165V5.40155",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
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
function vx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: A("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M14.022 10.9211L12.4757 4.09878C12.232 3.02346 13.0494 2 14.152 2C14.8038 2 15.3995 2.36863 15.6903 2.95192L21.2123 14.0276C21.7141 15.0341 21.769 16.2053 21.3635 17.2544L20.518 19.442C19.9222 20.9836 18.4397 22 16.787 22H16C13.7909 22 12 20.2091 12 18V12.9603C12 11.8341 12.913 10.9211 14.0392 10.9211C15.1654 10.9211 16.0784 11.8341 16.0784 12.9603V17.0633",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
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
function xx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: A("inline-block", n),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M3 10H21",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M19.2 6H4.8C3.80589 6 3 6.76751 3 7.71429V16.2857C3 17.2325 3.80589 18 4.8 18H19.2C20.1941 18 21 17.2325 21 16.2857V7.71429C21 6.76751 20.1941 6 19.2 6Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ c.jsx(
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
function bx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 48 48", fill: "none", className: A("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M30 16V32H10V16H30ZM32 12H8C6.9 12 6 12.9 6 14V34C6 35.1 6.9 36 8 36H32C33.1 36 34 35.1 34 34V27L42 35V13L34 21V14C34 12.9 33.1 12 32 12Z",
      fill: "currentColor"
    }
  ) });
}
const yx = {
  analytics: nx,
  announcement: rx,
  church: ox,
  class: ax,
  crown: ix,
  event: sx,
  gift: cx,
  home: lx,
  list: ux,
  livestream: dx,
  "lock-closed": px,
  "lock-open": fx,
  ministry: mx,
  podcast: hx,
  series: gx,
  sermon: vx,
  subscription: xx,
  video: bx
};
function y2({ name: e, ...n }) {
  const t = yx[e];
  return /* @__PURE__ */ c.jsx(t, { ...n });
}
var Vn = { exports: {} }, Bn = { exports: {} }, le = {};
var ki;
function wx() {
  if (ki) return le;
  ki = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, t = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, a = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, l = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, m = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, g = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, h = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, v = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, w = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, b = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function S(C) {
    if (typeof C == "object" && C !== null) {
      var D = C.$$typeof;
      switch (D) {
        case n:
          switch (C = C.type, C) {
            case l:
            case d:
            case r:
            case a:
            case o:
            case f:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case s:
                case p:
                case x:
                case g:
                case i:
                  return C;
                default:
                  return D;
              }
          }
        case t:
          return D;
      }
    }
  }
  function E(C) {
    return S(C) === d;
  }
  return le.AsyncMode = l, le.ConcurrentMode = d, le.ContextConsumer = s, le.ContextProvider = i, le.Element = n, le.ForwardRef = p, le.Fragment = r, le.Lazy = x, le.Memo = g, le.Portal = t, le.Profiler = a, le.StrictMode = o, le.Suspense = f, le.isAsyncMode = function(C) {
    return E(C) || S(C) === l;
  }, le.isConcurrentMode = E, le.isContextConsumer = function(C) {
    return S(C) === s;
  }, le.isContextProvider = function(C) {
    return S(C) === i;
  }, le.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === n;
  }, le.isForwardRef = function(C) {
    return S(C) === p;
  }, le.isFragment = function(C) {
    return S(C) === r;
  }, le.isLazy = function(C) {
    return S(C) === x;
  }, le.isMemo = function(C) {
    return S(C) === g;
  }, le.isPortal = function(C) {
    return S(C) === t;
  }, le.isProfiler = function(C) {
    return S(C) === a;
  }, le.isStrictMode = function(C) {
    return S(C) === o;
  }, le.isSuspense = function(C) {
    return S(C) === f;
  }, le.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === r || C === d || C === a || C === o || C === f || C === m || typeof C == "object" && C !== null && (C.$$typeof === x || C.$$typeof === g || C.$$typeof === i || C.$$typeof === s || C.$$typeof === p || C.$$typeof === v || C.$$typeof === w || C.$$typeof === b || C.$$typeof === h);
  }, le.typeOf = S, le;
}
var ue = {};
var _i;
function Cx() {
  return _i || (_i = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, t = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, a = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, l = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, m = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, g = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, h = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, v = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, w = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, b = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === d || M === a || M === o || M === f || M === m || typeof M == "object" && M !== null && (M.$$typeof === x || M.$$typeof === g || M.$$typeof === i || M.$$typeof === s || M.$$typeof === p || M.$$typeof === v || M.$$typeof === w || M.$$typeof === b || M.$$typeof === h);
    }
    function E(M) {
      if (typeof M == "object" && M !== null) {
        var fe = M.$$typeof;
        switch (fe) {
          case n:
            var te = M.type;
            switch (te) {
              case l:
              case d:
              case r:
              case a:
              case o:
              case f:
                return te;
              default:
                var oe = te && te.$$typeof;
                switch (oe) {
                  case s:
                  case p:
                  case x:
                  case g:
                  case i:
                    return oe;
                  default:
                    return fe;
                }
            }
          case t:
            return fe;
        }
      }
    }
    var C = l, D = d, j = s, R = i, L = n, B = p, J = r, q = x, U = g, H = t, Q = a, $ = o, ee = f, P = !1;
    function N(M) {
      return P || (P = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(M) || E(M) === l;
    }
    function _(M) {
      return E(M) === d;
    }
    function y(M) {
      return E(M) === s;
    }
    function O(M) {
      return E(M) === i;
    }
    function I(M) {
      return typeof M == "object" && M !== null && M.$$typeof === n;
    }
    function T(M) {
      return E(M) === p;
    }
    function G(M) {
      return E(M) === r;
    }
    function W(M) {
      return E(M) === x;
    }
    function k(M) {
      return E(M) === g;
    }
    function V(M) {
      return E(M) === t;
    }
    function X(M) {
      return E(M) === a;
    }
    function F(M) {
      return E(M) === o;
    }
    function re(M) {
      return E(M) === f;
    }
    ue.AsyncMode = C, ue.ConcurrentMode = D, ue.ContextConsumer = j, ue.ContextProvider = R, ue.Element = L, ue.ForwardRef = B, ue.Fragment = J, ue.Lazy = q, ue.Memo = U, ue.Portal = H, ue.Profiler = Q, ue.StrictMode = $, ue.Suspense = ee, ue.isAsyncMode = N, ue.isConcurrentMode = _, ue.isContextConsumer = y, ue.isContextProvider = O, ue.isElement = I, ue.isForwardRef = T, ue.isFragment = G, ue.isLazy = W, ue.isMemo = k, ue.isPortal = V, ue.isProfiler = X, ue.isStrictMode = F, ue.isSuspense = re, ue.isValidElementType = S, ue.typeOf = E;
  })()), ue;
}
var Pi;
function Al() {
  return Pi || (Pi = 1, process.env.NODE_ENV === "production" ? Bn.exports = wx() : Bn.exports = Cx()), Bn.exports;
}
var io, Ri;
function Sx() {
  if (Ri) return io;
  Ri = 1;
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
      var l = Object.getOwnPropertyNames(i).map(function(p) {
        return i[p];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return io = o() ? Object.assign : function(a, i) {
    for (var s, l = r(a), d, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var f in s)
        n.call(s, f) && (l[f] = s[f]);
      if (e) {
        d = e(s);
        for (var m = 0; m < d.length; m++)
          t.call(s, d[m]) && (l[d[m]] = s[d[m]]);
      }
    }
    return l;
  }, io;
}
var so, ji;
function Oa() {
  if (ji) return so;
  ji = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return so = e, so;
}
var co, Oi;
function Dl() {
  return Oi || (Oi = 1, co = Function.call.bind(Object.prototype.hasOwnProperty)), co;
}
var lo, Mi;
function Ex() {
  if (Mi) return lo;
  Mi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ Oa(), t = {}, r = /* @__PURE__ */ Dl();
    e = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, s, l, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (r(a, p)) {
          var f;
          try {
            if (typeof a[p] != "function") {
              var m = Error(
                (l || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            f = a[p](i, p, l, s, null, n);
          } catch (x) {
            f = x;
          }
          if (f && !(f instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in t)) {
            t[f.message] = !0;
            var g = d ? d() : "";
            e(
              "Failed " + s + " type: " + f.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, lo = o, lo;
}
var uo, Ti;
function kx() {
  if (Ti) return uo;
  Ti = 1;
  var e = Al(), n = Sx(), t = /* @__PURE__ */ Oa(), r = /* @__PURE__ */ Dl(), o = /* @__PURE__ */ Ex(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return uo = function(s, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function f(_) {
      var y = _ && (d && _[d] || _[p]);
      if (typeof y == "function")
        return y;
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
      arrayOf: S,
      element: E(),
      elementType: C(),
      instanceOf: D,
      node: B(),
      objectOf: R,
      oneOf: j,
      oneOfType: L,
      shape: q,
      exact: U
    };
    function x(_, y) {
      return _ === y ? _ !== 0 || 1 / _ === 1 / y : _ !== _ && y !== y;
    }
    function h(_, y) {
      this.message = _, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function v(_) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, O = 0;
      function I(G, W, k, V, X, F, re) {
        if (V = V || m, F = F || k, re !== t) {
          if (l) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = V + ":" + k;
            !y[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            O < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[fe] = !0, O++);
          }
        }
        return W[k] == null ? G ? W[k] === null ? new h("The " + X + " `" + F + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new h("The " + X + " `" + F + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : _(W, k, V, X, F);
      }
      var T = I.bind(null, !1);
      return T.isRequired = I.bind(null, !0), T;
    }
    function w(_) {
      function y(O, I, T, G, W, k) {
        var V = O[I], X = $(V);
        if (X !== _) {
          var F = ee(V);
          return new h(
            "Invalid " + G + " `" + W + "` of type " + ("`" + F + "` supplied to `" + T + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return v(y);
    }
    function b() {
      return v(i);
    }
    function S(_) {
      function y(O, I, T, G, W) {
        if (typeof _ != "function")
          return new h("Property `" + W + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var k = O[I];
        if (!Array.isArray(k)) {
          var V = $(k);
          return new h("Invalid " + G + " `" + W + "` of type " + ("`" + V + "` supplied to `" + T + "`, expected an array."));
        }
        for (var X = 0; X < k.length; X++) {
          var F = _(k, X, T, G, W + "[" + X + "]", t);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return v(y);
    }
    function E() {
      function _(y, O, I, T, G) {
        var W = y[O];
        if (!s(W)) {
          var k = $(W);
          return new h("Invalid " + T + " `" + G + "` of type " + ("`" + k + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(_);
    }
    function C() {
      function _(y, O, I, T, G) {
        var W = y[O];
        if (!e.isValidElementType(W)) {
          var k = $(W);
          return new h("Invalid " + T + " `" + G + "` of type " + ("`" + k + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(_);
    }
    function D(_) {
      function y(O, I, T, G, W) {
        if (!(O[I] instanceof _)) {
          var k = _.name || m, V = N(O[I]);
          return new h("Invalid " + G + " `" + W + "` of type " + ("`" + V + "` supplied to `" + T + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return v(y);
    }
    function j(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function y(O, I, T, G, W) {
        for (var k = O[I], V = 0; V < _.length; V++)
          if (x(k, _[V]))
            return null;
        var X = JSON.stringify(_, function(re, M) {
          var fe = ee(M);
          return fe === "symbol" ? String(M) : M;
        });
        return new h("Invalid " + G + " `" + W + "` of value `" + String(k) + "` " + ("supplied to `" + T + "`, expected one of " + X + "."));
      }
      return v(y);
    }
    function R(_) {
      function y(O, I, T, G, W) {
        if (typeof _ != "function")
          return new h("Property `" + W + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var k = O[I], V = $(k);
        if (V !== "object")
          return new h("Invalid " + G + " `" + W + "` of type " + ("`" + V + "` supplied to `" + T + "`, expected an object."));
        for (var X in k)
          if (r(k, X)) {
            var F = _(k, X, T, G, W + "." + X, t);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return v(y);
    }
    function L(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var y = 0; y < _.length; y++) {
        var O = _[y];
        if (typeof O != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + P(O) + " at index " + y + "."
          ), i;
      }
      function I(T, G, W, k, V) {
        for (var X = [], F = 0; F < _.length; F++) {
          var re = _[F], M = re(T, G, W, k, V, t);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && X.push(M.data.expectedType);
        }
        var fe = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new h("Invalid " + k + " `" + V + "` supplied to " + ("`" + W + "`" + fe + "."));
      }
      return v(I);
    }
    function B() {
      function _(y, O, I, T, G) {
        return H(y[O]) ? null : new h("Invalid " + T + " `" + G + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return v(_);
    }
    function J(_, y, O, I, T) {
      return new h(
        (_ || "React class") + ": " + y + " type `" + O + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function q(_) {
      function y(O, I, T, G, W) {
        var k = O[I], V = $(k);
        if (V !== "object")
          return new h("Invalid " + G + " `" + W + "` of type `" + V + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var X in _) {
          var F = _[X];
          if (typeof F != "function")
            return J(T, G, W, X, ee(F));
          var re = F(k, X, T, G, W + "." + X, t);
          if (re)
            return re;
        }
        return null;
      }
      return v(y);
    }
    function U(_) {
      function y(O, I, T, G, W) {
        var k = O[I], V = $(k);
        if (V !== "object")
          return new h("Invalid " + G + " `" + W + "` of type `" + V + "` " + ("supplied to `" + T + "`, expected `object`."));
        var X = n({}, O[I], _);
        for (var F in X) {
          var re = _[F];
          if (r(_, F) && typeof re != "function")
            return J(T, G, W, F, ee(re));
          if (!re)
            return new h(
              "Invalid " + G + " `" + W + "` key `" + F + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(O[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var M = re(k, F, T, G, W + "." + F, t);
          if (M)
            return M;
        }
        return null;
      }
      return v(y);
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
          var y = f(_);
          if (y) {
            var O = y.call(_), I;
            if (y !== _.entries) {
              for (; !(I = O.next()).done; )
                if (!H(I.value))
                  return !1;
            } else
              for (; !(I = O.next()).done; ) {
                var T = I.value;
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
    function Q(_, y) {
      return _ === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function $(_) {
      var y = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : Q(y, _) ? "symbol" : y;
    }
    function ee(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var y = $(_);
      if (y === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function P(_) {
      var y = ee(_);
      switch (y) {
        case "array":
        case "object":
          return "an " + y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + y;
        default:
          return y;
      }
    }
    function N(_) {
      return !_.constructor || !_.constructor.name ? m : _.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, uo;
}
var po, Ai;
function _x() {
  if (Ai) return po;
  Ai = 1;
  var e = /* @__PURE__ */ Oa();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, po = function() {
    function r(i, s, l, d, p, f) {
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
      checkPropTypes: t,
      resetWarningCache: n
    };
    return a.PropTypes = a, a;
  }, po;
}
var Di;
function Px() {
  if (Di) return Vn.exports;
  if (Di = 1, process.env.NODE_ENV !== "production") {
    var e = Al(), n = !0;
    Vn.exports = /* @__PURE__ */ kx()(e.isElement, n);
  } else
    Vn.exports = /* @__PURE__ */ _x()();
  return Vn.exports;
}
var Rx = /* @__PURE__ */ Px();
const he = /* @__PURE__ */ Uo(Rx), jx = /* @__PURE__ */ new Map([
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
function $t(e, n, t) {
  const r = Ox(e), { webkitRelativePath: o } = e, a = typeof n == "string" ? n : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && Ni(r, "path", a), Ni(r, "relativePath", a), r;
}
function Ox(e) {
  const { name: n } = e;
  if (n && n.lastIndexOf(".") !== -1 && !e.type) {
    const r = n.split(".").pop().toLowerCase(), o = jx.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Ni(e, n, t) {
  Object.defineProperty(e, n, {
    value: t,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const Mx = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function Tx(e) {
  return Pt(this, void 0, void 0, function* () {
    return sr(e) && Ax(e.dataTransfer) ? Lx(e.dataTransfer, e.type) : Dx(e) ? Nx(e) : Array.isArray(e) && e.every((n) => "getFile" in n && typeof n.getFile == "function") ? Ix(e) : [];
  });
}
function Ax(e) {
  return sr(e);
}
function Dx(e) {
  return sr(e) && sr(e.target);
}
function sr(e) {
  return typeof e == "object" && e !== null;
}
function Nx(e) {
  return Ao(e.target.files).map((n) => $t(n));
}
function Ix(e) {
  return Pt(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((t) => t.getFile()))).map((t) => $t(t));
  });
}
function Lx(e, n) {
  return Pt(this, void 0, void 0, function* () {
    if (e.items) {
      const t = Ao(e.items).filter((o) => o.kind === "file");
      if (n !== "drop")
        return t;
      const r = yield Promise.all(t.map(Fx));
      return Ii(Nl(r));
    }
    return Ii(Ao(e.files).map((t) => $t(t)));
  });
}
function Ii(e) {
  return e.filter((n) => Mx.indexOf(n.name) === -1);
}
function Ao(e) {
  if (e === null)
    return [];
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    n.push(r);
  }
  return n;
}
function Fx(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Li(e);
  const n = e.webkitGetAsEntry();
  return n && n.isDirectory ? Il(n) : Li(e, n);
}
function Nl(e) {
  return e.reduce((n, t) => [
    ...n,
    ...Array.isArray(t) ? Nl(t) : [t]
  ], []);
}
function Li(e, n) {
  return Pt(this, void 0, void 0, function* () {
    var t;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const a = yield e.getAsFileSystemHandle();
      if (a === null)
        throw new Error(`${e} is not a File`);
      if (a !== void 0) {
        const i = yield a.getFile();
        return i.handle = a, $t(i);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return $t(r, (t = n?.fullPath) !== null && t !== void 0 ? t : void 0);
  });
}
function zx(e) {
  return Pt(this, void 0, void 0, function* () {
    return e.isDirectory ? Il(e) : $x(e);
  });
}
function Il(e) {
  const n = e.createReader();
  return new Promise((t, r) => {
    const o = [];
    function a() {
      n.readEntries((i) => Pt(this, void 0, void 0, function* () {
        if (i.length) {
          const s = Promise.all(i.map(zx));
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
function $x(e) {
  return Pt(this, void 0, void 0, function* () {
    return new Promise((n, t) => {
      e.file((r) => {
        const o = $t(r, e.fullPath);
        n(o);
      }, (r) => {
        t(r);
      });
    });
  });
}
var Hn = {}, Fi;
function Wx() {
  return Fi || (Fi = 1, Hn.__esModule = !0, Hn.default = function(e, n) {
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
  }), Hn;
}
var Vx = Wx();
const fo = /* @__PURE__ */ Uo(Vx);
function zi(e) {
  return Ux(e) || Hx(e) || Fl(e) || Bx();
}
function Bx() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hx(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ux(e) {
  if (Array.isArray(e)) return Do(e);
}
function $i(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Wi(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? $i(Object(t), !0).forEach(function(r) {
      Ll(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $i(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Ll(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function gn(e, n) {
  return qx(e) || Yx(e, n) || Fl(e, n) || Gx();
}
function Gx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fl(e, n) {
  if (e) {
    if (typeof e == "string") return Do(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Do(e, n);
  }
}
function Do(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Yx(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], o = !0, a = !1, i, s;
    try {
      for (t = t.call(e); !(o = (i = t.next()).done) && (r.push(i.value), !(n && r.length === n)); o = !0)
        ;
    } catch (l) {
      a = !0, s = l;
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
function qx(e) {
  if (Array.isArray(e)) return e;
}
var Kx = typeof fo == "function" ? fo : fo.default, Zx = "file-invalid-type", Xx = "file-too-large", Jx = "file-too-small", Qx = "too-many-files", eb = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = n.split(","), r = t.length > 1 ? "one of ".concat(t.join(", ")) : t[0];
  return {
    code: Zx,
    message: "File type must be ".concat(r)
  };
}, Vi = function(n) {
  return {
    code: Xx,
    message: "File is larger than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, Bi = function(n) {
  return {
    code: Jx,
    message: "File is smaller than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, tb = {
  code: Qx,
  message: "Too many files"
};
function zl(e, n) {
  var t = e.type === "application/x-moz-file" || Kx(e, n);
  return [t, t ? null : eb(n)];
}
function $l(e, n, t) {
  if (wt(e.size))
    if (wt(n) && wt(t)) {
      if (e.size > t) return [!1, Vi(t)];
      if (e.size < n) return [!1, Bi(n)];
    } else {
      if (wt(n) && e.size < n) return [!1, Bi(n)];
      if (wt(t) && e.size > t) return [!1, Vi(t)];
    }
  return [!0, null];
}
function wt(e) {
  return e != null;
}
function nb(e) {
  var n = e.files, t = e.accept, r = e.minSize, o = e.maxSize, a = e.multiple, i = e.maxFiles, s = e.validator;
  return !a && n.length > 1 || a && i >= 1 && n.length > i ? !1 : n.every(function(l) {
    var d = zl(l, t), p = gn(d, 1), f = p[0], m = $l(l, r, o), g = gn(m, 1), x = g[0], h = s ? s(l) : null;
    return f && x && !h;
  });
}
function cr(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function Un(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(n) {
    return n === "Files" || n === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Hi(e) {
  e.preventDefault();
}
function rb(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function ob(e) {
  return e.indexOf("Edge/") !== -1;
}
function ab() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return rb(e) || ob(e);
}
function Ge() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return function(r) {
    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
      a[i - 1] = arguments[i];
    return n.some(function(s) {
      return !cr(r) && s && s.apply(void 0, [r].concat(a)), cr(r);
    });
  };
}
function ib() {
  return "showOpenFilePicker" in window;
}
function sb(e) {
  if (wt(e)) {
    var n = Object.entries(e).filter(function(t) {
      var r = gn(t, 2), o = r[0], a = r[1], i = !0;
      return Wl(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), i = !1), (!Array.isArray(a) || !a.every(Vl)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), i = !1), i;
    }).reduce(function(t, r) {
      var o = gn(r, 2), a = o[0], i = o[1];
      return Wi(Wi({}, t), {}, Ll({}, a, i));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: n
    }];
  }
  return e;
}
function cb(e) {
  if (wt(e))
    return Object.entries(e).reduce(function(n, t) {
      var r = gn(t, 2), o = r[0], a = r[1];
      return [].concat(zi(n), [o], zi(a));
    }, []).filter(function(n) {
      return Wl(n) || Vl(n);
    }).join(",");
}
function lb(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function ub(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Wl(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Vl(e) {
  return /^.*\.[\w]+$/.test(e);
}
var db = ["children"], pb = ["open"], fb = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], mb = ["refKey", "onChange", "onClick"];
function hb(e) {
  return xb(e) || vb(e) || Bl(e) || gb();
}
function gb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vb(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function xb(e) {
  if (Array.isArray(e)) return No(e);
}
function mo(e, n) {
  return wb(e) || yb(e, n) || Bl(e, n) || bb();
}
function bb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bl(e, n) {
  if (e) {
    if (typeof e == "string") return No(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return No(e, n);
  }
}
function No(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function yb(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], o = !0, a = !1, i, s;
    try {
      for (t = t.call(e); !(o = (i = t.next()).done) && (r.push(i.value), !(n && r.length === n)); o = !0)
        ;
    } catch (l) {
      a = !0, s = l;
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
function wb(e) {
  if (Array.isArray(e)) return e;
}
function Ui(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function be(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ui(Object(t), !0).forEach(function(r) {
      Io(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ui(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Io(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function lr(e, n) {
  if (e == null) return {};
  var t = Cb(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Cb(e, n) {
  if (e == null) return {};
  var t = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var Ma = /* @__PURE__ */ hr(function(e, n) {
  var t = e.children, r = lr(e, db), o = Ta(r), a = o.open, i = lr(o, pb);
  return rd(n, function() {
    return {
      open: a
    };
  }, [a]), /* @__PURE__ */ ae.createElement(od, null, t(be(be({}, i), {}, {
    open: a
  })));
});
Ma.displayName = "Dropzone";
var Hl = {
  disabled: !1,
  getFilesFromEvent: Tx,
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
Ma.defaultProps = Hl;
Ma.propTypes = {
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
  children: he.func,
  /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */
  accept: he.objectOf(he.arrayOf(he.string)),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: he.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: he.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: he.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: he.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: he.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: he.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: he.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: he.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: he.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: he.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: he.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: he.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: he.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: he.bool,
  /**
   * Set to true to focus the root element on render
   */
  autoFocus: he.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: he.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: he.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: he.func,
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
  onDrop: he.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: he.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: he.func,
  /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */
  onError: he.func,
  /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */
  validator: he.func
};
var Lo = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Ta() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = be(be({}, Hl), e), t = n.accept, r = n.disabled, o = n.getFilesFromEvent, a = n.maxSize, i = n.minSize, s = n.multiple, l = n.maxFiles, d = n.onDragEnter, p = n.onDragLeave, f = n.onDragOver, m = n.onDrop, g = n.onDropAccepted, x = n.onDropRejected, h = n.onFileDialogCancel, v = n.onFileDialogOpen, w = n.useFsAccessApi, b = n.autoFocus, S = n.preventDropOnDocument, E = n.noClick, C = n.noKeyboard, D = n.noDrag, j = n.noDragEventsBubbling, R = n.onError, L = n.validator, B = ut(function() {
    return cb(t);
  }, [t]), J = ut(function() {
    return sb(t);
  }, [t]), q = ut(function() {
    return typeof v == "function" ? v : Gi;
  }, [v]), U = ut(function() {
    return typeof h == "function" ? h : Gi;
  }, [h]), H = Nt(null), Q = Nt(null), $ = nd(Sb, Lo), ee = mo($, 2), P = ee[0], N = ee[1], _ = P.isFocused, y = P.isFileDialogActive, O = Nt(typeof window < "u" && window.isSecureContext && w && ib()), I = function() {
    !O.current && y && setTimeout(function() {
      if (Q.current) {
        var ne = Q.current.files;
        ne.length || (N({
          type: "closeDialog"
        }), U());
      }
    }, 300);
  };
  dn(function() {
    return window.addEventListener("focus", I, !1), function() {
      window.removeEventListener("focus", I, !1);
    };
  }, [Q, y, U, O]);
  var T = Nt([]), G = function(ne) {
    H.current && H.current.contains(ne.target) || (ne.preventDefault(), T.current = []);
  };
  dn(function() {
    return S && (document.addEventListener("dragover", Hi, !1), document.addEventListener("drop", G, !1)), function() {
      S && (document.removeEventListener("dragover", Hi), document.removeEventListener("drop", G));
    };
  }, [H, S]), dn(function() {
    return !r && b && H.current && H.current.focus(), function() {
    };
  }, [H, b, r]);
  var W = ye(function(z) {
    R ? R(z) : console.error(z);
  }, [R]), k = ye(function(z) {
    z.preventDefault(), z.persist(), Se(z), T.current = [].concat(hb(T.current), [z.target]), Un(z) && Promise.resolve(o(z)).then(function(ne) {
      if (!(cr(z) && !j)) {
        var de = ne.length, ge = de > 0 && nb({
          files: ne,
          accept: B,
          minSize: i,
          maxSize: a,
          multiple: s,
          maxFiles: l,
          validator: L
        }), Pe = de > 0 && !ge;
        N({
          isDragAccept: ge,
          isDragReject: Pe,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), d && d(z);
      }
    }).catch(function(ne) {
      return W(ne);
    });
  }, [o, d, W, j, B, i, a, s, l, L]), V = ye(function(z) {
    z.preventDefault(), z.persist(), Se(z);
    var ne = Un(z);
    if (ne && z.dataTransfer)
      try {
        z.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return ne && f && f(z), !1;
  }, [f, j]), X = ye(function(z) {
    z.preventDefault(), z.persist(), Se(z);
    var ne = T.current.filter(function(ge) {
      return H.current && H.current.contains(ge);
    }), de = ne.indexOf(z.target);
    de !== -1 && ne.splice(de, 1), T.current = ne, !(ne.length > 0) && (N({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), Un(z) && p && p(z));
  }, [H, p, j]), F = ye(function(z, ne) {
    var de = [], ge = [];
    z.forEach(function(Pe) {
      var ot = zl(Pe, B), at = mo(ot, 2), Xt = at[0], Jt = at[1], ze = $l(Pe, i, a), it = mo(ze, 2), Qt = it[0], Hr = it[1], Ur = L ? L(Pe) : null;
      if (Xt && Qt && !Ur)
        de.push(Pe);
      else {
        var Gr = [Jt, Hr];
        Ur && (Gr = Gr.concat(Ur)), ge.push({
          file: Pe,
          errors: Gr.filter(function(Qu) {
            return Qu;
          })
        });
      }
    }), (!s && de.length > 1 || s && l >= 1 && de.length > l) && (de.forEach(function(Pe) {
      ge.push({
        file: Pe,
        errors: [tb]
      });
    }), de.splice(0)), N({
      acceptedFiles: de,
      fileRejections: ge,
      isDragReject: ge.length > 0,
      type: "setFiles"
    }), m && m(de, ge, ne), ge.length > 0 && x && x(ge, ne), de.length > 0 && g && g(de, ne);
  }, [N, s, B, i, a, l, m, g, x, L]), re = ye(function(z) {
    z.preventDefault(), z.persist(), Se(z), T.current = [], Un(z) && Promise.resolve(o(z)).then(function(ne) {
      cr(z) && !j || F(ne, z);
    }).catch(function(ne) {
      return W(ne);
    }), N({
      type: "reset"
    });
  }, [o, F, W, j]), M = ye(function() {
    if (O.current) {
      N({
        type: "openDialog"
      }), q();
      var z = {
        multiple: s,
        types: J
      };
      window.showOpenFilePicker(z).then(function(ne) {
        return o(ne);
      }).then(function(ne) {
        F(ne, null), N({
          type: "closeDialog"
        });
      }).catch(function(ne) {
        lb(ne) ? (U(ne), N({
          type: "closeDialog"
        })) : ub(ne) ? (O.current = !1, Q.current ? (Q.current.value = null, Q.current.click()) : W(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : W(ne);
      });
      return;
    }
    Q.current && (N({
      type: "openDialog"
    }), q(), Q.current.value = null, Q.current.click());
  }, [N, q, U, w, F, W, J, s]), fe = ye(function(z) {
    !H.current || !H.current.isEqualNode(z.target) || (z.key === " " || z.key === "Enter" || z.keyCode === 32 || z.keyCode === 13) && (z.preventDefault(), M());
  }, [H, M]), te = ye(function() {
    N({
      type: "focus"
    });
  }, []), oe = ye(function() {
    N({
      type: "blur"
    });
  }, []), we = ye(function() {
    E || (ab() ? setTimeout(M, 0) : M());
  }, [E, M]), xe = function(ne) {
    return r ? null : ne;
  }, _e = function(ne) {
    return C ? null : xe(ne);
  }, me = function(ne) {
    return D ? null : xe(ne);
  }, Se = function(ne) {
    j && ne.stopPropagation();
  }, jt = ut(function() {
    return function() {
      var z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ne = z.refKey, de = ne === void 0 ? "ref" : ne, ge = z.role, Pe = z.onKeyDown, ot = z.onFocus, at = z.onBlur, Xt = z.onClick, Jt = z.onDragEnter, ze = z.onDragOver, it = z.onDragLeave, Qt = z.onDrop, Hr = lr(z, fb);
      return be(be(Io({
        onKeyDown: _e(Ge(Pe, fe)),
        onFocus: _e(Ge(ot, te)),
        onBlur: _e(Ge(at, oe)),
        onClick: xe(Ge(Xt, we)),
        onDragEnter: me(Ge(Jt, k)),
        onDragOver: me(Ge(ze, V)),
        onDragLeave: me(Ge(it, X)),
        onDrop: me(Ge(Qt, re)),
        role: typeof ge == "string" && ge !== "" ? ge : "presentation"
      }, de, H), !r && !C ? {
        tabIndex: 0
      } : {}), Hr);
    };
  }, [H, fe, te, oe, we, k, V, X, re, C, D, r]), Me = ye(function(z) {
    z.stopPropagation();
  }, []), Qe = ut(function() {
    return function() {
      var z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ne = z.refKey, de = ne === void 0 ? "ref" : ne, ge = z.onChange, Pe = z.onClick, ot = lr(z, mb), at = Io({
        accept: B,
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
        onChange: xe(Ge(ge, re)),
        onClick: xe(Ge(Pe, Me)),
        tabIndex: -1
      }, de, Q);
      return be(be({}, at), ot);
    };
  }, [Q, t, s, re, r]);
  return be(be({}, P), {}, {
    isFocused: _ && !r,
    getRootProps: jt,
    getInputProps: Qe,
    rootRef: H,
    inputRef: Q,
    open: xe(M)
  });
}
function Sb(e, n) {
  switch (n.type) {
    case "focus":
      return be(be({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return be(be({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return be(be({}, Lo), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return be(be({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return be(be({}, e), {}, {
        isDragActive: n.isDragActive,
        isDragAccept: n.isDragAccept,
        isDragReject: n.isDragReject
      });
    case "setFiles":
      return be(be({}, e), {}, {
        acceptedFiles: n.acceptedFiles,
        fileRejections: n.fileRejections,
        isDragReject: n.isDragReject
      });
    case "reset":
      return be({}, Lo);
    default:
      return e;
  }
}
function Gi() {
}
const Eb = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2024C0%2010.7452%2010.7452%200%2024%200C37.2548%200%2048%2010.7452%2048%2024C48%2037.2548%2037.2548%2048%2024%2048C10.7452%2048%200%2037.2548%200%2024Z'%20fill='%23EFF1F5'/%3e%3cpath%20d='M31%2017V31H17V17H31ZM31%2015H17C15.9%2015%2015%2015.9%2015%2017V31C15%2032.1%2015.9%2033%2017%2033H31C32.1%2033%2033%2032.1%2033%2031V17C33%2015.9%2032.1%2015%2031%2015ZM26.14%2023.86L23.14%2027.73L21%2025.14L18%2029H30L26.14%2023.86Z'%20fill='%233F465B'/%3e%3c/svg%3e";
var ho, Yi;
function kb() {
  if (Yi) return ho;
  Yi = 1;
  var e = !1, n, t, r, o, a, i, s, l, d, p, f, m, g, x, h;
  function v() {
    if (!e) {
      e = !0;
      var b = navigator.userAgent, S = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(b), E = /(Mac OS X)|(Windows)|(Linux)/.exec(b);
      if (m = /\b(iPhone|iP[ao]d)/.exec(b), g = /\b(iP[ao]d)/.exec(b), p = /Android/i.exec(b), x = /FBAN\/\w+;/i.exec(b), h = /Mobile/i.exec(b), f = !!/Win64/.exec(b), S) {
        n = S[1] ? parseFloat(S[1]) : S[5] ? parseFloat(S[5]) : NaN, n && document && document.documentMode && (n = document.documentMode);
        var C = /(?:Trident\/(\d+.\d+))/.exec(b);
        i = C ? parseFloat(C[1]) + 4 : n, t = S[2] ? parseFloat(S[2]) : NaN, r = S[3] ? parseFloat(S[3]) : NaN, o = S[4] ? parseFloat(S[4]) : NaN, o ? (S = /(?:Chrome\/(\d+\.\d+))/.exec(b), a = S && S[1] ? parseFloat(S[1]) : NaN) : a = NaN;
      } else
        n = t = r = a = o = NaN;
      if (E) {
        if (E[1]) {
          var D = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(b);
          s = D ? parseFloat(D[1].replace("_", ".")) : !0;
        } else
          s = !1;
        l = !!E[2], d = !!E[3];
      } else
        s = l = d = !1;
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
      return w.ie() && f;
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
      return v() || l;
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
      return v() || d;
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
  return ho = w, ho;
}
var go, qi;
function _b() {
  if (qi) return go;
  qi = 1;
  var e = !!(typeof window < "u" && window.document && window.document.createElement), n = {
    canUseDOM: e,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
    canUseViewport: e && !!window.screen,
    isInWorker: !e
    // For now, this is true - might change in the future.
  };
  return go = n, go;
}
var vo, Ki;
function Pb() {
  if (Ki) return vo;
  Ki = 1;
  var e = _b(), n;
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
  return vo = t, vo;
}
var xo, Zi;
function Rb() {
  if (Zi) return xo;
  Zi = 1;
  var e = kb(), n = Pb(), t = 10, r = 40, o = 800;
  function a(i) {
    var s = 0, l = 0, d = 0, p = 0;
    return "detail" in i && (l = i.detail), "wheelDelta" in i && (l = -i.wheelDelta / 120), "wheelDeltaY" in i && (l = -i.wheelDeltaY / 120), "wheelDeltaX" in i && (s = -i.wheelDeltaX / 120), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (s = l, l = 0), d = s * t, p = l * t, "deltaY" in i && (p = i.deltaY), "deltaX" in i && (d = i.deltaX), (d || p) && i.deltaMode && (i.deltaMode == 1 ? (d *= r, p *= r) : (d *= o, p *= o)), d && !s && (s = d < 1 ? -1 : 1), p && !l && (l = p < 1 ? -1 : 1), {
      spinX: s,
      spinY: l,
      pixelX: d,
      pixelY: p
    };
  }
  return a.getEventType = function() {
    return e.firefox() ? "DOMMouseScroll" : n("wheel") ? "wheel" : "mousewheel";
  }, xo = a, xo;
}
var bo, Xi;
function jb() {
  return Xi || (Xi = 1, bo = Rb()), bo;
}
var Ob = jb();
const Mb = /* @__PURE__ */ Uo(Ob);
function Tb(e, n, t, r, o, a) {
  a === void 0 && (a = 0);
  var i = Wt(e, n, a), s = i.width, l = i.height, d = Math.min(s, t), p = Math.min(l, r);
  return d > p * o ? {
    width: p * o,
    height: p
  } : {
    width: d,
    height: d / o
  };
}
function Ab(e) {
  return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight;
}
function rn(e, n, t, r, o) {
  o === void 0 && (o = 0);
  var a = Wt(n.width, n.height, o), i = a.width, s = a.height;
  return {
    x: Ji(e.x, i, t.width, r),
    y: Ji(e.y, s, t.height, r)
  };
}
function Ji(e, n, t, r) {
  var o = n * r / 2 - t / 2;
  return Nr(e, -o, o);
}
function Qi(e, n) {
  return Math.sqrt(Math.pow(e.y - n.y, 2) + Math.pow(e.x - n.x, 2));
}
function es(e, n) {
  return Math.atan2(n.y - e.y, n.x - e.x) * 180 / Math.PI;
}
function Db(e, n, t, r, o, a, i) {
  a === void 0 && (a = 0), i === void 0 && (i = !0);
  var s = i ? Nb : Ib, l = Wt(n.width, n.height, a), d = Wt(n.naturalWidth, n.naturalHeight, a), p = {
    x: s(100, ((l.width - t.width / o) / 2 - e.x / o) / l.width * 100),
    y: s(100, ((l.height - t.height / o) / 2 - e.y / o) / l.height * 100),
    width: s(100, t.width / l.width * 100 / o),
    height: s(100, t.height / l.height * 100 / o)
  }, f = Math.round(s(d.width, p.width * d.width / 100)), m = Math.round(s(d.height, p.height * d.height / 100)), g = d.width >= d.height * r, x = g ? {
    width: Math.round(m * r),
    height: m
  } : {
    width: f,
    height: Math.round(f / r)
  }, h = ve(ve({}, x), {
    x: Math.round(s(d.width - x.width, p.x * d.width / 100)),
    y: Math.round(s(d.height - x.height, p.y * d.height / 100))
  });
  return {
    croppedAreaPercentages: p,
    croppedAreaPixels: h
  };
}
function Nb(e, n) {
  return Math.min(e, Math.max(0, n));
}
function Ib(e, n) {
  return n;
}
function Lb(e, n, t, r, o, a) {
  var i = Wt(n.width, n.height, t), s = Nr(r.width / i.width * (100 / e.width), o, a), l = {
    x: s * i.width / 2 - r.width / 2 - i.width * s * (e.x / 100),
    y: s * i.height / 2 - r.height / 2 - i.height * s * (e.y / 100)
  };
  return {
    crop: l,
    zoom: s
  };
}
function Fb(e, n, t) {
  var r = Ab(n);
  return t.height > t.width ? t.height / (e.height * r) : t.width / (e.width * r);
}
function zb(e, n, t, r, o, a) {
  t === void 0 && (t = 0);
  var i = Wt(n.naturalWidth, n.naturalHeight, t), s = Nr(Fb(e, n, r), o, a), l = r.height > r.width ? r.height / e.height : r.width / e.width, d = {
    x: ((i.width - e.width) / 2 - e.x) * l,
    y: ((i.height - e.height) / 2 - e.y) * l
  };
  return {
    crop: d,
    zoom: s
  };
}
function ts(e, n) {
  return {
    x: (n.x + e.x) / 2,
    y: (n.y + e.y) / 2
  };
}
function $b(e) {
  return e * Math.PI / 180;
}
function Wt(e, n, t) {
  var r = $b(t);
  return {
    width: Math.abs(Math.cos(r) * e) + Math.abs(Math.sin(r) * n),
    height: Math.abs(Math.sin(r) * e) + Math.abs(Math.cos(r) * n)
  };
}
function Nr(e, n, t) {
  return Math.min(Math.max(e, n), t);
}
function Gn() {
  for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return e.filter(function(t) {
    return typeof t == "string" && t.length > 0;
  }).join(" ").trim();
}
var Wb = `.reactEasyCrop_Container {
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
`, Vb = 1, Bb = 3, Hb = 1, Ub = (
  /** @class */
  (function(e) {
    Vd(n, e);
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
          var o = Lb(t.props.initialCroppedAreaPercentages, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), a = o.crop, i = o.zoom;
          t.props.onCropChange(a), t.props.onZoomChange && t.props.onZoomChange(i);
        } else if (t.props.initialCroppedAreaPixels) {
          var s = zb(t.props.initialCroppedAreaPixels, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), a = s.crop, i = s.zoom;
          t.props.onCropChange(a), t.props.onZoomChange && t.props.onZoomChange(i);
        }
      }, t.computeSizes = function() {
        var r, o, a, i, s, l, d = t.imageRef.current || t.videoRef.current;
        if (d && t.containerRef) {
          t.containerRect = t.containerRef.getBoundingClientRect(), t.saveContainerPosition();
          var p = t.containerRect.width / t.containerRect.height, f = ((r = t.imageRef.current) === null || r === void 0 ? void 0 : r.naturalWidth) || ((o = t.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, m = ((a = t.imageRef.current) === null || a === void 0 ? void 0 : a.naturalHeight) || ((i = t.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, g = d.offsetWidth < f || d.offsetHeight < m, x = f / m, h = void 0;
          if (g)
            switch (t.state.mediaObjectFit) {
              default:
              case "contain":
                h = p > x ? {
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
              width: d.offsetWidth,
              height: d.offsetHeight
            };
          t.mediaSize = ve(ve({}, h), {
            naturalWidth: f,
            naturalHeight: m
          }), t.props.setMediaSize && t.props.setMediaSize(t.mediaSize);
          var v = t.props.cropSize ? t.props.cropSize : Tb(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
          return (((s = t.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== v.height || ((l = t.state.cropSize) === null || l === void 0 ? void 0 : l.width) !== v.width) && t.props.onCropSizeChange && t.props.onCropSizeChange(v), t.setState({
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
        }, t.dragStartCrop = ve({}, t.props.crop), (a = (o = t.props).onInteractionStart) === null || a === void 0 || a.call(o);
      }, t.onDrag = function(r) {
        var o = r.x, a = r.y;
        t.currentWindow && (t.rafDragTimeout && t.currentWindow.cancelAnimationFrame(t.rafDragTimeout), t.rafDragTimeout = t.currentWindow.requestAnimationFrame(function() {
          if (t.state.cropSize && !(o === void 0 || a === void 0)) {
            var i = o - t.dragStartPosition.x, s = a - t.dragStartPosition.y, l = {
              x: t.dragStartCrop.x + i,
              y: t.dragStartCrop.y + s
            }, d = t.props.restrictPosition ? rn(l, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : l;
            t.props.onCropChange(d);
          }
        }));
      }, t.onDragStopped = function() {
        var r, o;
        t.isTouching = !1, t.cleanEvents(), t.emitCropData(), (o = (r = t.props).onInteractionEnd) === null || o === void 0 || o.call(r);
      }, t.onWheel = function(r) {
        if (t.currentWindow && !(t.props.onWheelRequest && !t.props.onWheelRequest(r))) {
          r.preventDefault();
          var o = n.getMousePoint(r), a = Mb(r).pixelY, i = t.props.zoom - a * t.props.zoomSpeed / 200;
          t.setNewZoom(i, o, {
            shouldUpdatePosition: !0
          }), t.state.hasWheelJustStarted || t.setState({
            hasWheelJustStarted: !0
          }, function() {
            var s, l;
            return (l = (s = t.props).onInteractionStart) === null || l === void 0 ? void 0 : l.call(s);
          }), t.wheelTimer && clearTimeout(t.wheelTimer), t.wheelTimer = t.currentWindow.setTimeout(function() {
            return t.setState({
              hasWheelJustStarted: !1
            }, function() {
              var s, l;
              return (l = (s = t.props).onInteractionEnd) === null || l === void 0 ? void 0 : l.call(s);
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
        var o = r.x, a = r.y, i = t.props, s = i.crop, l = i.zoom;
        return {
          x: (o + s.x) / l,
          y: (a + s.y) / l
        };
      }, t.setNewZoom = function(r, o, a) {
        var i = a === void 0 ? {} : a, s = i.shouldUpdatePosition, l = s === void 0 ? !0 : s;
        if (!(!t.state.cropSize || !t.props.onZoomChange)) {
          var d = Nr(r, t.props.minZoom, t.props.maxZoom);
          if (l) {
            var p = t.getPointOnContainer(o, t.containerPosition), f = t.getPointOnMedia(p), m = {
              x: f.x * d - p.x,
              y: f.y * d - p.y
            }, g = t.props.restrictPosition ? rn(m, t.mediaSize, t.state.cropSize, d, t.props.rotation) : m;
            t.props.onCropChange(g);
          }
          t.props.onZoomChange(d);
        }
      }, t.getCropData = function() {
        if (!t.state.cropSize)
          return null;
        var r = t.props.restrictPosition ? rn(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
        return Db(r, t.mediaSize, t.state.cropSize, t.getAspect(), t.props.zoom, t.props.rotation, t.props.restrictPosition);
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
              var s = t.state.cropSize.width / t.previousCropSize.width, l = t.state.cropSize.height / t.previousCropSize.height;
              a = {
                x: t.props.crop.x * s,
                y: t.props.crop.y * l
              };
            }
          }
          var d = t.props.restrictPosition ? rn(a, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : a;
          t.previousCropSize = t.state.cropSize, t.props.onCropChange(d), t.emitCropData();
        }
      }, t.onKeyDown = function(r) {
        var o, a, i = t.props, s = i.crop, l = i.onCropChange, d = i.keyboardStep, p = i.zoom, f = i.rotation, m = d;
        if (t.state.cropSize) {
          r.shiftKey && (m *= 0.2);
          var g = ve({}, s);
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
          t.props.restrictPosition && (g = rn(g, t.mediaSize, t.state.cropSize, p, f)), r.repeat || (a = (o = t.props).onInteractionStart) === null || a === void 0 || a.call(o), l(g);
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
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Wb, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, n.prototype.componentWillUnmount = function() {
      var t, r;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((r = this.styleRef.parentNode) === null || r === void 0 || r.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, n.prototype.componentDidUpdate = function(t) {
      var r, o, a, i, s, l, d, p, f;
      t.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : t.aspect !== this.props.aspect ? this.computeSizes() : t.objectFit !== this.props.objectFit ? this.computeSizes() : t.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((r = t.cropSize) === null || r === void 0 ? void 0 : r.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((a = t.cropSize) === null || a === void 0 ? void 0 : a.width) !== ((i = this.props.cropSize) === null || i === void 0 ? void 0 : i.width) ? this.computeSizes() : (((s = t.crop) === null || s === void 0 ? void 0 : s.x) !== ((l = this.props.crop) === null || l === void 0 ? void 0 : l.x) || ((d = t.crop) === null || d === void 0 ? void 0 : d.y) !== ((p = this.props.crop) === null || p === void 0 ? void 0 : p.y)) && this.emitCropAreaChange(), t.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), t.video !== this.props.video && ((f = this.videoRef.current) === null || f === void 0 || f.load());
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
          var s = this.containerRect.width / this.containerRect.height, l = ((t = this.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((r = this.videoRef.current) === null || r === void 0 ? void 0 : r.videoWidth) || 0, d = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((a = this.videoRef.current) === null || a === void 0 ? void 0 : a.videoHeight) || 0, p = l / d;
          return p < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, n.prototype.onPinchStart = function(t) {
      var r = n.getTouchPoint(t.touches[0]), o = n.getTouchPoint(t.touches[1]);
      this.lastPinchDistance = Qi(r, o), this.lastPinchRotation = es(r, o), this.onDragStart(ts(r, o));
    }, n.prototype.onPinchMove = function(t) {
      var r = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = n.getTouchPoint(t.touches[0]), a = n.getTouchPoint(t.touches[1]), i = ts(o, a);
        this.onDrag(i), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = Qi(o, a), l = r.props.zoom * (s / r.lastPinchDistance);
          r.setNewZoom(l, i, {
            shouldUpdatePosition: !1
          }), r.lastPinchDistance = s;
          var d = es(o, a), p = r.props.rotation + (d - r.lastPinchRotation);
          r.props.onRotationChange && r.props.onRotationChange(p), r.lastPinchRotation = d;
        });
      }
    }, n.prototype.render = function() {
      var t = this, r, o = this.props, a = o.image, i = o.video, s = o.mediaProps, l = o.cropperProps, d = o.transform, p = o.crop, f = p.x, m = p.y, g = o.rotation, x = o.zoom, h = o.cropShape, v = o.showGrid, w = o.roundCropAreaPixels, b = o.style, S = b.containerStyle, E = b.cropAreaStyle, C = b.mediaStyle, D = o.classes, j = D.containerClassName, R = D.cropAreaClassName, L = D.mediaClassName, B = (r = this.state.mediaObjectFit) !== null && r !== void 0 ? r : this.getObjectFit();
      return u.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(q) {
          return t.containerRef = q;
        },
        "data-testid": "container",
        style: S,
        className: Gn("reactEasyCrop_Container", j)
      }, a ? u.createElement("img", ve({
        alt: "",
        className: Gn("reactEasyCrop_Image", B === "contain" && "reactEasyCrop_Contain", B === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", B === "vertical-cover" && "reactEasyCrop_Cover_Vertical", L)
      }, s, {
        src: a,
        ref: this.imageRef,
        style: ve(ve({}, C), {
          transform: d || "translate(".concat(f, "px, ").concat(m, "px) rotate(").concat(g, "deg) scale(").concat(x, ")")
        }),
        onLoad: this.onMediaLoad
      })) : i && u.createElement("video", ve({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: Gn("reactEasyCrop_Video", B === "contain" && "reactEasyCrop_Contain", B === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", B === "vertical-cover" && "reactEasyCrop_Cover_Vertical", L)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: ve(ve({}, C), {
          transform: d || "translate(".concat(f, "px, ").concat(m, "px) rotate(").concat(g, "deg) scale(").concat(x, ")")
        }),
        controls: !1
      }), (Array.isArray(i) ? i : [{
        src: i
      }]).map(function(J) {
        return u.createElement("source", ve({
          key: J.src
        }, J));
      })), this.state.cropSize && u.createElement("div", ve({
        ref: this.cropperRef,
        style: ve(ve({}, E), {
          width: w ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: w ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: Gn("reactEasyCrop_CropArea", h === "round" && "reactEasyCrop_CropAreaRound", v && "reactEasyCrop_CropAreaGrid", R)
      }, l)));
    }, n.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: Bb,
      minZoom: Vb,
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
      keyboardStep: Hb
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
function Gb({
  imageUrl: e,
  aspect: n,
  rounded: t,
  crop: r,
  zoom: o,
  onCropChange: a,
  onZoomChange: i,
  onCropComplete: s,
  onClose: l,
  onConfirm: d
}) {
  const p = ye(
    (f, m) => s(m),
    [s]
  );
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 sm:p-6",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Crop image",
      children: /* @__PURE__ */ c.jsxs("div", { className: "w-full sm:max-w-2xl bg-white sm:rounded-lg max-h-[95dvh] sm:max-h-[90vh] overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4", children: [
          /* @__PURE__ */ c.jsx("h2", { className: "text-base sm:text-lg font-semibold text-gray-900", children: "Crop image" }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              type: "button",
              onClick: l,
              className: "inline-flex size-10 items-center justify-center rounded-md hover:bg-gray-25 transition-colors",
              "aria-label": "Close crop modal",
              children: /* @__PURE__ */ c.jsx(ra, { className: "size-5 text-gray-700" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex-1 overflow-auto px-4 py-4 sm:px-6 sm:py-6", children: [
          /* @__PURE__ */ c.jsx("div", { className: "relative w-full overflow-hidden rounded-lg bg-gray-900", children: /* @__PURE__ */ c.jsx("div", { className: "relative h-[60dvh] sm:h-[420px] w-full", children: /* @__PURE__ */ c.jsx(
            Ub,
            {
              image: e,
              crop: r,
              zoom: o,
              aspect: n,
              cropShape: t ? "round" : "rect",
              onCropChange: a,
              onCropComplete: p,
              onZoomChange: i
            }
          ) }) }),
          /* @__PURE__ */ c.jsxs("div", { className: "mt-4 space-y-2", children: [
            /* @__PURE__ */ c.jsxs("label", { className: "text-sm font-medium text-gray-700", children: [
              "Zoom: ",
              o.toFixed(1),
              "x"
            ] }),
            /* @__PURE__ */ c.jsx(
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
        /* @__PURE__ */ c.jsx("div", { className: "sticky bottom-0 z-10 border-t border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4", children: /* @__PURE__ */ c.jsx("div", { className: "flex flex-col-reverse sm:flex-row gap-2 sm:justify-end", children: /* @__PURE__ */ c.jsx(
          oa,
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
function Yb(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = `image/${r === "jpg" ? "jpeg" : r}`;
    n[o] ??= [], n[o].push(`.${r}`);
  }
  return n;
}
function qb(e) {
  return new Promise((n, t) => {
    const r = new Image();
    r.addEventListener("load", () => n(r)), r.addEventListener("error", (o) => t(o)), r.setAttribute("crossOrigin", "anonymous"), r.src = e;
  });
}
async function Kb(e, n, t) {
  const r = await qb(e), o = document.createElement("canvas"), a = o.getContext("2d");
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
  const i = await new Promise((s, l) => {
    o.toBlob(
      (d) => d ? s(d) : l(new Error("Canvas is empty")),
      t.fileType || "image/png",
      0.92
    );
  });
  return new File([i], t.fileName, { type: t.fileType || i.type });
}
function w2({
  value: e,
  onChange: n,
  aspectRatio: t,
  extensions: r,
  rounded: o = !1,
  maxSize: a = 5 * 1024 * 1024,
  minWidth: i,
  minHeight: s,
  maxWidth: l,
  maxHeight: d,
  placeholder: p = "Accepted files jpg, png and webp",
  className: f
}) {
  const [m, g] = Te(null), [x, h] = Te([]), [v, w] = Te(!1), [b, S] = Te(null), [E, C] = Te({ x: 0, y: 0 }), [D, j] = Te(1), [R, L] = Te(null), B = ut(() => Yb(r), [r]);
  dn(() => {
    if (!e) {
      m && URL.revokeObjectURL(m), g(null);
      return;
    }
    const y = URL.createObjectURL(e);
    return m && URL.revokeObjectURL(m), g(y), () => {
      URL.revokeObjectURL(y);
    };
  }, [e]);
  const J = ye(
    async (y) => {
      const O = y[0];
      if (!O) return;
      if (h([]), [i, s, l, d].some(
        (G) => typeof G == "number"
      ))
        try {
          const G = await new Promise(
            (k, V) => {
              const X = URL.createObjectURL(O), F = new Image();
              F.onload = () => {
                const re = F.naturalWidth || F.width, M = F.naturalHeight || F.height;
                URL.revokeObjectURL(X), k({ width: re, height: M });
              }, F.onerror = () => {
                URL.revokeObjectURL(X), V(new Error("Unable to read image dimensions"));
              }, F.src = X;
            }
          ), W = [];
          if (typeof i == "number" && G.width < i && W.push(
            `Image width is too small. Minimum width is ${i}px.`
          ), typeof s == "number" && G.height < s && W.push(
            `Image height is too small. Minimum height is ${s}px.`
          ), typeof l == "number" && G.width > l && W.push(
            `Image width is too large. Maximum width is ${l}px.`
          ), typeof d == "number" && G.height > d && W.push(
            `Image height is too large. Maximum height is ${d}px.`
          ), W.length > 0) {
            h(W);
            return;
          }
        } catch {
          h(["Unable to read image dimensions. Please try another image."]);
          return;
        }
      const T = URL.createObjectURL(O);
      S(T), w(!0), C({ x: 0, y: 0 }), j(1), L(null);
    },
    [d, l, s, i]
  ), { getRootProps: q, getInputProps: U, isDragActive: H, fileRejections: Q } = Ta({
    onDrop: J,
    accept: B,
    maxSize: a,
    multiple: !1
  }), $ = [
    ...Q.flatMap(
      (y) => y.errors.map((O) => O.code === "file-too-large" ? `File is too large. Max size is ${(a / 1048576).toFixed(0)}MB` : O.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${r.join(", ")}` : O.message)
    ),
    ...x
  ], ee = ye(() => {
    w(!1), b && URL.revokeObjectURL(b), S(null);
  }, [b]), P = ye(async () => {
    if (!(!b || !R))
      try {
        const y = await Kb(b, R, {
          fileName: e?.name ?? "image.png",
          fileType: e?.type ?? "image/png"
        });
        n(y), w(!1), URL.revokeObjectURL(b), S(null);
      } catch (y) {
        console.error("Error cropping image:", y);
      }
  }, [R, n, b, e?.name, e?.type]), N = ye(() => {
    m && URL.revokeObjectURL(m), g(null), n(null);
  }, [n, m]), _ = o ? { aspectRatio: "1 / 1" } : { aspectRatio: `${t}` };
  return /* @__PURE__ */ c.jsxs("div", { className: A("w-full space-y-2", f), children: [
    m ? /* @__PURE__ */ c.jsxs("div", { className: "relative w-fit max-h-44", children: [
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: A(
            "h-44 overflow-hidden border border-gray-50 bg-white shadow-lg",
            o ? "rounded-full" : "rounded-lg"
          ),
          style: _,
          children: /* @__PURE__ */ c.jsx(
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
      /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          onClick: N,
          "aria-label": "Remove image",
          className: A(
            "absolute right-1 top-1 inline-flex items-center justify-center",
            "size-10 rounded-full bg-gray-600 text-white border border-white",
            "hover:bg-gray-700 transition-colors"
          ),
          children: /* @__PURE__ */ c.jsx(ra, { className: "size-4" })
        }
      )
    ] }) : /* @__PURE__ */ c.jsxs(
      "div",
      {
        ...q(),
        className: A(
          "relative flex w-full items-center justify-center",
          "rounded-[0.625rem] border border-gray-50 bg-white",
          "min-h-44",
          "cursor-pointer transition-colors",
          H && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ c.jsx("input", { ...U() }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center px-4 text-center gap-y-3", children: [
            /* @__PURE__ */ c.jsx("img", { src: Eb, alt: "" }),
            /* @__PURE__ */ c.jsx("p", { className: "text-sm font-manrope font-medium text-gray-700", children: "Click to upload or drag and drop" }),
            !!p && /* @__PURE__ */ c.jsx("p", { className: "text-xs text-gray-500", children: p })
          ] })
        ]
      }
    ),
    $.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "space-y-1", children: $.map((y, O) => /* @__PURE__ */ c.jsx("p", { className: "text-sm text-bright-red-600", children: y }, O)) }),
    v && b && /* @__PURE__ */ c.jsx(
      Gb,
      {
        imageUrl: b,
        aspect: t,
        rounded: o,
        crop: E,
        zoom: D,
        onCropChange: C,
        onZoomChange: j,
        onCropComplete: (y) => L(y),
        onClose: ee,
        onConfirm: P
      }
    )
  ] });
}
function Zb({ className: e, type: n, ...t }) {
  return /* @__PURE__ */ c.jsx(
    "input",
    {
      type: n,
      "data-slot": "input",
      className: A(
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
function C2({
  className: e,
  ...n
}) {
  const [t, r] = Te(!1), o = ye(() => {
    r((a) => !a);
  }, []);
  return /* @__PURE__ */ c.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ c.jsx(
      Zb,
      {
        ...n,
        "data-slot": "input",
        className: A(e, "pr-10"),
        type: t ? "text" : "password"
      }
    ),
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        className: "absolute right-0 top-0 size-10 flex items-center justify-center",
        onClick: o,
        children: [
          t && /* @__PURE__ */ c.jsx(Tm, { className: "size-4 text-gray-300" }),
          !t && /* @__PURE__ */ c.jsx(Dm, { className: "size-4 text-gray-300" })
        ]
      }
    )
  ] });
}
var Xb = Object.defineProperty, Jb = Object.defineProperties, Qb = Object.getOwnPropertyDescriptors, ur = Object.getOwnPropertySymbols, Ul = Object.prototype.hasOwnProperty, Gl = Object.prototype.propertyIsEnumerable, ns = (e, n, t) => n in e ? Xb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, e0 = (e, n) => {
  for (var t in n || (n = {})) Ul.call(n, t) && ns(e, t, n[t]);
  if (ur) for (var t of ur(n)) Gl.call(n, t) && ns(e, t, n[t]);
  return e;
}, t0 = (e, n) => Jb(e, Qb(n)), n0 = (e, n) => {
  var t = {};
  for (var r in e) Ul.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && ur) for (var r of ur(e)) n.indexOf(r) < 0 && Gl.call(e, r) && (t[r] = e[r]);
  return t;
};
function r0(e) {
  let n = setTimeout(e, 0), t = setTimeout(e, 10), r = setTimeout(e, 50);
  return [n, t, r];
}
function o0(e) {
  let n = u.useRef();
  return u.useEffect(() => {
    n.current = e;
  }), n.current;
}
var a0 = 18, Yl = 40, i0 = `${Yl}px`, s0 = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function c0({ containerRef: e, inputRef: n, pushPasswordManagerStrategy: t, isFocused: r }) {
  let [o, a] = u.useState(!1), [i, s] = u.useState(!1), [l, d] = u.useState(!1), p = u.useMemo(() => t === "none" ? !1 : (t === "increase-width" || t === "experimental-no-flickering") && o && i, [o, i, t]), f = u.useCallback(() => {
    let m = e.current, g = n.current;
    if (!m || !g || l || t === "none") return;
    let x = m, h = x.getBoundingClientRect().left + x.offsetWidth, v = x.getBoundingClientRect().top + x.offsetHeight / 2, w = h - a0, b = v;
    document.querySelectorAll(s0).length === 0 && document.elementFromPoint(w, b) === m || (a(!0), d(!0));
  }, [e, n, l, t]);
  return u.useEffect(() => {
    let m = e.current;
    if (!m || t === "none") return;
    function g() {
      let h = window.innerWidth - m.getBoundingClientRect().right;
      s(h >= Yl);
    }
    g();
    let x = setInterval(g, 1e3);
    return () => {
      clearInterval(x);
    };
  }, [e, t]), u.useEffect(() => {
    let m = r || document.activeElement === n.current;
    if (t === "none" || !m) return;
    let g = setTimeout(f, 0), x = setTimeout(f, 2e3), h = setTimeout(f, 5e3), v = setTimeout(() => {
      d(!0);
    }, 6e3);
    return () => {
      clearTimeout(g), clearTimeout(x), clearTimeout(h), clearTimeout(v);
    };
  }, [n, r, t, f]), { hasPWMBadge: o, willPushPWMBadge: p, PWM_BADGE_SPACE_WIDTH: i0 };
}
var ql = u.createContext({}), Kl = u.forwardRef((e, n) => {
  var t = e, { value: r, onChange: o, maxLength: a, textAlign: i = "left", pattern: s, placeholder: l, inputMode: d = "numeric", onComplete: p, pushPasswordManagerStrategy: f = "increase-width", pasteTransformer: m, containerClassName: g, noScriptCSSFallback: x = l0, render: h, children: v } = t, w = n0(t, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), b, S, E, C, D;
  let [j, R] = u.useState(typeof w.defaultValue == "string" ? w.defaultValue : ""), L = r ?? j, B = o0(L), J = u.useCallback((te) => {
    o?.(te), R(te);
  }, [o]), q = u.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), U = u.useRef(null), H = u.useRef(null), Q = u.useRef({ value: L, onChange: J, isIOS: typeof window < "u" && ((S = (b = window?.CSS) == null ? void 0 : b.supports) == null ? void 0 : S.call(b, "-webkit-touch-callout", "none")) }), $ = u.useRef({ prev: [(E = U.current) == null ? void 0 : E.selectionStart, (C = U.current) == null ? void 0 : C.selectionEnd, (D = U.current) == null ? void 0 : D.selectionDirection] });
  u.useImperativeHandle(n, () => U.current, []), u.useEffect(() => {
    let te = U.current, oe = H.current;
    if (!te || !oe) return;
    Q.current.value !== te.value && Q.current.onChange(te.value), $.current.prev = [te.selectionStart, te.selectionEnd, te.selectionDirection];
    function we() {
      if (document.activeElement !== te) {
        O(null), T(null);
        return;
      }
      let me = te.selectionStart, Se = te.selectionEnd, jt = te.selectionDirection, Me = te.maxLength, Qe = te.value, z = $.current.prev, ne = -1, de = -1, ge;
      if (Qe.length !== 0 && me !== null && Se !== null) {
        let Xt = me === Se, Jt = me === Qe.length && Qe.length < Me;
        if (Xt && !Jt) {
          let ze = me;
          if (ze === 0) ne = 0, de = 1, ge = "forward";
          else if (ze === Me) ne = ze - 1, de = ze, ge = "backward";
          else if (Me > 1 && Qe.length > 1) {
            let it = 0;
            if (z[0] !== null && z[1] !== null) {
              ge = ze < z[1] ? "backward" : "forward";
              let Qt = z[0] === z[1] && z[0] < Me;
              ge === "backward" && !Qt && (it = -1);
            }
            ne = it + ze, de = it + ze + 1;
          }
        }
        ne !== -1 && de !== -1 && ne !== de && U.current.setSelectionRange(ne, de, ge);
      }
      let Pe = ne !== -1 ? ne : me, ot = de !== -1 ? de : Se, at = ge ?? jt;
      O(Pe), T(ot), $.current.prev = [Pe, ot, at];
    }
    if (document.addEventListener("selectionchange", we, { capture: !0 }), we(), document.activeElement === te && _(!0), !document.getElementById("input-otp-style")) {
      let me = document.createElement("style");
      if (me.id = "input-otp-style", document.head.appendChild(me), me.sheet) {
        let Se = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        on(me.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), on(me.sheet, `[data-input-otp]:autofill { ${Se} }`), on(me.sheet, `[data-input-otp]:-webkit-autofill { ${Se} }`), on(me.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), on(me.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let xe = () => {
      oe && oe.style.setProperty("--root-height", `${te.clientHeight}px`);
    };
    xe();
    let _e = new ResizeObserver(xe);
    return _e.observe(te), () => {
      document.removeEventListener("selectionchange", we, { capture: !0 }), _e.disconnect();
    };
  }, []);
  let [ee, P] = u.useState(!1), [N, _] = u.useState(!1), [y, O] = u.useState(null), [I, T] = u.useState(null);
  u.useEffect(() => {
    r0(() => {
      var te, oe, we, xe;
      (te = U.current) == null || te.dispatchEvent(new Event("input"));
      let _e = (oe = U.current) == null ? void 0 : oe.selectionStart, me = (we = U.current) == null ? void 0 : we.selectionEnd, Se = (xe = U.current) == null ? void 0 : xe.selectionDirection;
      _e !== null && me !== null && (O(_e), T(me), $.current.prev = [_e, me, Se]);
    });
  }, [L, N]), u.useEffect(() => {
    B !== void 0 && L !== B && B.length < a && L.length === a && p?.(L);
  }, [a, p, B, L]);
  let G = c0({ containerRef: H, inputRef: U, pushPasswordManagerStrategy: f, isFocused: N }), W = u.useCallback((te) => {
    let oe = te.currentTarget.value.slice(0, a);
    if (oe.length > 0 && q && !q.test(oe)) {
      te.preventDefault();
      return;
    }
    typeof B == "string" && oe.length < B.length && document.dispatchEvent(new Event("selectionchange")), J(oe);
  }, [a, J, B, q]), k = u.useCallback(() => {
    var te;
    if (U.current) {
      let oe = Math.min(U.current.value.length, a - 1), we = U.current.value.length;
      (te = U.current) == null || te.setSelectionRange(oe, we), O(oe), T(we);
    }
    _(!0);
  }, [a]), V = u.useCallback((te) => {
    var oe, we;
    let xe = U.current;
    if (!m && (!Q.current.isIOS || !te.clipboardData || !xe)) return;
    let _e = te.clipboardData.getData("text/plain"), me = m ? m(_e) : _e;
    te.preventDefault();
    let Se = (oe = U.current) == null ? void 0 : oe.selectionStart, jt = (we = U.current) == null ? void 0 : we.selectionEnd, Me = (Se !== jt ? L.slice(0, Se) + me + L.slice(jt) : L.slice(0, Se) + me + L.slice(Se)).slice(0, a);
    if (Me.length > 0 && q && !q.test(Me)) return;
    xe.value = Me, J(Me);
    let Qe = Math.min(Me.length, a - 1), z = Me.length;
    xe.setSelectionRange(Qe, z), O(Qe), T(z);
  }, [a, J, q, L]), X = u.useMemo(() => ({ position: "relative", cursor: w.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [w.disabled]), F = u.useMemo(() => ({ position: "absolute", inset: 0, width: G.willPushPWMBadge ? `calc(100% + ${G.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: G.willPushPWMBadge ? `inset(0 ${G.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [G.PWM_BADGE_SPACE_WIDTH, G.willPushPWMBadge, i]), re = u.useMemo(() => u.createElement("input", t0(e0({ autoComplete: w.autoComplete || "one-time-code" }, w), { "data-input-otp": !0, "data-input-otp-placeholder-shown": L.length === 0 || void 0, "data-input-otp-mss": y, "data-input-otp-mse": I, inputMode: d, pattern: q?.source, "aria-placeholder": l, style: F, maxLength: a, value: L, ref: U, onPaste: (te) => {
    var oe;
    V(te), (oe = w.onPaste) == null || oe.call(w, te);
  }, onChange: W, onMouseOver: (te) => {
    var oe;
    P(!0), (oe = w.onMouseOver) == null || oe.call(w, te);
  }, onMouseLeave: (te) => {
    var oe;
    P(!1), (oe = w.onMouseLeave) == null || oe.call(w, te);
  }, onFocus: (te) => {
    var oe;
    k(), (oe = w.onFocus) == null || oe.call(w, te);
  }, onBlur: (te) => {
    var oe;
    _(!1), (oe = w.onBlur) == null || oe.call(w, te);
  } })), [W, k, V, d, F, a, I, y, w, q?.source, L]), M = u.useMemo(() => ({ slots: Array.from({ length: a }).map((te, oe) => {
    var we;
    let xe = N && y !== null && I !== null && (y === I && oe === y || oe >= y && oe < I), _e = L[oe] !== void 0 ? L[oe] : null, me = L[0] !== void 0 ? null : (we = l?.[oe]) != null ? we : null;
    return { char: _e, placeholderChar: me, isActive: xe, hasFakeCaret: xe && _e === null };
  }), isFocused: N, isHovering: !w.disabled && ee }), [N, ee, a, I, y, w.disabled, L]), fe = u.useMemo(() => h ? h(M) : u.createElement(ql.Provider, { value: M }, v), [v, M, h]);
  return u.createElement(u.Fragment, null, x !== null && u.createElement("noscript", null, u.createElement("style", null, x)), u.createElement("div", { ref: H, "data-input-otp-container": !0, style: X, className: g }, fe, u.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, re)));
});
Kl.displayName = "Input";
function on(e, n) {
  try {
    e.insertRule(n);
  } catch {
    console.error("input-otp could not insert CSS rule:", n);
  }
}
var l0 = `
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
function S2({ className: e, containerClassName: n, ...t }) {
  return /* @__PURE__ */ c.jsx(
    Kl,
    {
      "data-slot": "input-otp",
      containerClassName: A("flex items-center gap-2 has-disabled:opacity-50", n),
      className: A("disabled:cursor-not-allowed", e),
      ...t
    }
  );
}
function E2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: A("flex items-center gap-2", e),
      ...n
    }
  );
}
function k2({
  index: e,
  className: n,
  ...t
}) {
  const r = Co(ql), { char: o, hasFakeCaret: a, isActive: i } = r?.slots[e] ?? {};
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": i,
      className: A(
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
        a && /* @__PURE__ */ c.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ c.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function _2({ ...e }) {
  return /* @__PURE__ */ c.jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ c.jsx(Im, {}) });
}
function Zl({ size: e = 48, className: n, ...t }) {
  const r = typeof e == "number" ? `${e}` : e, o = typeof t["aria-label"] == "string";
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 47 48",
      width: r,
      height: r,
      className: A("inline-block", n),
      "aria-hidden": o ? void 0 : !0,
      role: o ? "img" : "presentation",
      ...t,
      children: [
        /* @__PURE__ */ c.jsx(
          "path",
          {
            d: "M19.2133 35.3017C18.2492 38.5617 18.6978 42.077 20.4506 44.9899L20.4943 45.0635L13.8785 40.431L20.4869 30.9956L19.2133 35.3017ZM20.7073 24.9743C21.9138 25.819 22.2068 27.482 21.3622 28.6884L13.3829 40.0841L11.1984 38.5544L20.7073 24.9743ZM20.7056 18.0024C22.241 19.0776 22.6141 21.1938 21.5391 22.7293L10.7017 38.2067L9.50708 37.3701C8.96698 36.992 8.46813 36.5767 8.00954 36.1319L20.7056 18.0024ZM20.7058 9.75901C22.5703 11.0646 23.0234 13.635 21.718 15.4996L7.57802 35.6923C6.53641 34.5734 5.73826 33.2869 5.19379 31.9112L20.7058 9.75901ZM20.7043 0.246588C22.8979 1.78253 23.4309 4.80619 21.8951 6.99983L4.93983 31.2132C3.80636 27.7434 4.24748 23.8057 6.47085 20.5729L20.7043 0.246588Z",
            fill: "#BF3535"
          }
        ),
        /* @__PURE__ */ c.jsx(
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
function P2({ size: e = 32, className: n, ...t }) {
  return /* @__PURE__ */ c.jsxs("div", { className: A("inline-flex items-center gap-2", n), ...t, children: [
    /* @__PURE__ */ c.jsx(Zl, { size: e }),
    /* @__PURE__ */ c.jsx("span", { className: "font-manrope text-base font-normal leading-none text-white", children: "MercySeat" })
  ] });
}
function u0(e) {
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
function d0(e) {
  return ["mp4", "webm", "ogg", "mov", "m4v"].includes(e) ? `video/${e === "mov" ? "quicktime" : e}` : ["mp3", "wav", "ogg", "aac", "flac", "m4a"].includes(e) ? `audio/${e === "mp3" ? "mpeg" : e === "m4a" ? "mp4" : e}` : null;
}
function p0(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = d0(r);
    o && (n[o] ??= [], n[o].push(`.${r}`));
  }
  return n;
}
function f0({ extensions: e, placeholder: n, onDropFile: t }) {
  const r = ut(() => p0(e), [e]), o = ye(
    async (p) => {
      const f = p[0] || null;
      if (f && !(!f.type.startsWith("video/") && !f.type.startsWith("audio/")))
        try {
          const m = await u0(f);
          t({
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
    [t]
  ), { getRootProps: a, getInputProps: i, isDragActive: s, fileRejections: l } = Ta({
    onDrop: o,
    accept: r,
    maxFiles: 1
  }), d = l.flatMap(
    (p) => p.errors.map((f) => f.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${e.join(", ")}` : f.message)
  );
  return /* @__PURE__ */ c.jsxs("div", { className: "space-y-2 w-full", children: [
    /* @__PURE__ */ c.jsxs(
      "div",
      {
        ...a(),
        className: A(
          "relative flex flex-col items-center justify-center w-full min-h-38.5 border border-gray-50 rounded-[0.625rem] cursor-pointer transition-colors bg-white",
          s && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ c.jsx("input", { ...i() }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ c.jsx("div", { className: "size-12 flex items-center justify-center rounded-full bg-gray-25 mb-4", children: /* @__PURE__ */ c.jsx(mc, { className: "size-6 text-blue-hepatica-600" }) }),
            /* @__PURE__ */ c.jsx("p", { className: "mb-2 text-sm text-gray-700 font-medium", children: "Click to upload or drag and drop" }),
            !!n && /* @__PURE__ */ c.jsx("p", { className: "text-xs text-gray-500 text-center", children: n })
          ] })
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "space-y-1", children: d.map((p, f) => /* @__PURE__ */ c.jsx("p", { className: "text-sm text-bright-red-600", children: p }, f)) })
  ] });
}
function m0({ file: e, onChange: n }) {
  const t = ye(() => {
    n(null);
  }, [n]), r = e.type.startsWith("video/") ? "Video" : "Audio";
  return /* @__PURE__ */ c.jsxs("div", { className: "w-full p-4 flex justify-between items-center bg-white border border-gray-50 rounded-lg", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ c.jsx("div", { className: "size-10 bg-gray-25 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ c.jsx(mc, { className: "size-6 text-blue-hepatica-600" }) }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ c.jsx("h3", { className: "text-sm leading-4.5 font-medium text-gray-700 tracking-[0.02em]", children: e.name }),
        /* @__PURE__ */ c.jsxs("span", { className: "text-xs font-normal leading-4 text-gray-100 tracking-[0.02em]", children: [
          r,
          " file uploaded"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        type: "button",
        onClick: t,
        className: "size-10 flex items-center justify-center rounded-lg bg-white hover:bg-bright-red-100 transition-colors duration-200",
        children: /* @__PURE__ */ c.jsx(Fm, { className: "size-4 text-bright-red-600" })
      }
    )
  ] });
}
function R2({
  accepts: e,
  onChange: n,
  value: t,
  placeholder: r = ""
}) {
  return t ? /* @__PURE__ */ c.jsx(m0, { file: t, onChange: n }) : /* @__PURE__ */ c.jsx(
    f0,
    {
      extensions: e,
      onDropFile: n,
      placeholder: r
    }
  );
}
function j2({ active: e, children: n, collapsed: t, disabled: r = !1 }) {
  return /* @__PURE__ */ c.jsx(
    wr,
    {
      className: A(
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
function rs(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
// @__NO_SIDE_EFFECTS__
function h0(e) {
  const n = /* @__PURE__ */ g0(e), t = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(x0);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function g0(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (u.isValidElement(o)) {
      const i = y0(o), s = b0(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? Xe(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var v0 = /* @__PURE__ */ Symbol("radix.slottable");
function x0(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === v0;
}
function b0(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], a = n[r];
    /^on[A-Z]/.test(r) ? o && a ? t[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...a } : r === "className" && (t[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function y0(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function w0(e) {
  const n = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
var Xl = Object.freeze({
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
}), C0 = "VisuallyHidden", S0 = u.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(
    se.span,
    {
      ...e,
      ref: n,
      style: { ...Xl, ...e.style }
    }
  )
);
S0.displayName = C0;
var E0 = [" ", "Enter", "ArrowUp", "ArrowDown"], k0 = [" ", "Enter"], kt = "Select", [Ir, Lr, _0] = aa(kt), [Zt] = Ze(kt, [
  _0,
  mt
]), Fr = mt(), [P0, gt] = Zt(kt), [R0, j0] = Zt(kt), Jl = (e) => {
  const {
    __scopeSelect: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: l,
    dir: d,
    name: p,
    autoComplete: f,
    disabled: m,
    required: g,
    form: x
  } = e, h = Fr(n), [v, w] = u.useState(null), [b, S] = u.useState(null), [E, C] = u.useState(!1), D = ia(d), [j, R] = dt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: kt
  }), [L, B] = dt({
    prop: i,
    defaultProp: s,
    onChange: l,
    caller: kt
  }), J = u.useRef(null), q = v ? x || !!v.closest("form") : !0, [U, H] = u.useState(/* @__PURE__ */ new Set()), Q = Array.from(U).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ c.jsx(kn, { ...h, children: /* @__PURE__ */ c.jsxs(
    P0,
    {
      required: g,
      scope: n,
      trigger: v,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: S,
      valueNodeHasChildren: E,
      onValueNodeHasChildrenChange: C,
      contentId: De(),
      value: L,
      onValueChange: B,
      open: j,
      onOpenChange: R,
      dir: D,
      triggerPointerDownPosRef: J,
      disabled: m,
      children: [
        /* @__PURE__ */ c.jsx(Ir.Provider, { scope: n, children: /* @__PURE__ */ c.jsx(
          R0,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback(($) => {
              H((ee) => new Set(ee).add($));
            }, []),
            onNativeOptionRemove: u.useCallback(($) => {
              H((ee) => {
                const P = new Set(ee);
                return P.delete($), P;
              });
            }, []),
            children: t
          }
        ) }),
        q ? /* @__PURE__ */ c.jsxs(
          Su,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: p,
            autoComplete: f,
            value: L,
            onChange: ($) => B($.target.value),
            disabled: m,
            form: x,
            children: [
              L === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(U)
            ]
          },
          Q
        ) : null
      ]
    }
  ) });
};
Jl.displayName = kt;
var Ql = "SelectTrigger", eu = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, disabled: r = !1, ...o } = e, a = Fr(t), i = gt(Ql, t), s = i.disabled || r, l = ce(n, i.onTriggerChange), d = Lr(t), p = u.useRef("touch"), [f, m, g] = ku((h) => {
      const v = d().filter((S) => !S.disabled), w = v.find((S) => S.value === i.value), b = _u(v, h, w);
      b !== void 0 && i.onValueChange(b.value);
    }), x = (h) => {
      s || (i.onOpenChange(!0), g()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(_n, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
      se.button,
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
        "data-placeholder": Eu(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: Y(o.onClick, (h) => {
          h.currentTarget.focus(), p.current !== "mouse" && x(h);
        }),
        onPointerDown: Y(o.onPointerDown, (h) => {
          p.current = h.pointerType;
          const v = h.target;
          v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (x(h), h.preventDefault());
        }),
        onKeyDown: Y(o.onKeyDown, (h) => {
          const v = f.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(v && h.key === " ") && E0.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
eu.displayName = Ql;
var tu = "SelectValue", nu = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, children: a, placeholder: i = "", ...s } = e, l = gt(tu, t), { onValueNodeHasChildrenChange: d } = l, p = a !== void 0, f = ce(n, l.onValueNodeChange);
    return Re(() => {
      d(p);
    }, [d, p]), /* @__PURE__ */ c.jsx(
      se.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: Eu(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: i }) : a
      }
    );
  }
);
nu.displayName = tu;
var O0 = "SelectIcon", ru = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(se.span, { "aria-hidden": !0, ...o, ref: n, children: r || "▼" });
  }
);
ru.displayName = O0;
var M0 = "SelectPortal", ou = (e) => /* @__PURE__ */ c.jsx(yn, { asChild: !0, ...e });
ou.displayName = M0;
var _t = "SelectContent", au = u.forwardRef(
  (e, n) => {
    const t = gt(_t, e.__scopeSelect), [r, o] = u.useState();
    if (Re(() => {
      o(new DocumentFragment());
    }, []), !t.open) {
      const a = r;
      return a ? gr.createPortal(
        /* @__PURE__ */ c.jsx(iu, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(Ir.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(su, { ...e, ref: n });
  }
);
au.displayName = _t;
var $e = 10, [iu, vt] = Zt(_t), T0 = "SelectContentImpl", A0 = /* @__PURE__ */ h0("SelectContent.RemoveScroll"), su = u.forwardRef(
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
      sideOffset: l,
      align: d,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: v,
      //
      ...w
    } = e, b = gt(_t, t), [S, E] = u.useState(null), [C, D] = u.useState(null), j = ce(n, (k) => E(k)), [R, L] = u.useState(null), [B, J] = u.useState(
      null
    ), q = Lr(t), [U, H] = u.useState(!1), Q = u.useRef(!1);
    u.useEffect(() => {
      if (S) return br(S);
    }, [S]), vr();
    const $ = u.useCallback(
      (k) => {
        const [V, ...X] = q().map((M) => M.ref.current), [F] = X.slice(-1), re = document.activeElement;
        for (const M of k)
          if (M === re || (M?.scrollIntoView({ block: "nearest" }), M === V && C && (C.scrollTop = 0), M === F && C && (C.scrollTop = C.scrollHeight), M?.focus(), document.activeElement !== re)) return;
      },
      [q, C]
    ), ee = u.useCallback(
      () => $([R, S]),
      [$, R, S]
    );
    u.useEffect(() => {
      U && ee();
    }, [U, ee]);
    const { onOpenChange: P, triggerPointerDownPosRef: N } = b;
    u.useEffect(() => {
      if (S) {
        let k = { x: 0, y: 0 };
        const V = (F) => {
          k = {
            x: Math.abs(Math.round(F.pageX) - (N.current?.x ?? 0)),
            y: Math.abs(Math.round(F.pageY) - (N.current?.y ?? 0))
          };
        }, X = (F) => {
          k.x <= 10 && k.y <= 10 ? F.preventDefault() : S.contains(F.target) || P(!1), document.removeEventListener("pointermove", V), N.current = null;
        };
        return N.current !== null && (document.addEventListener("pointermove", V), document.addEventListener("pointerup", X, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", V), document.removeEventListener("pointerup", X, { capture: !0 });
        };
      }
    }, [S, P, N]), u.useEffect(() => {
      const k = () => P(!1);
      return window.addEventListener("blur", k), window.addEventListener("resize", k), () => {
        window.removeEventListener("blur", k), window.removeEventListener("resize", k);
      };
    }, [P]);
    const [_, y] = ku((k) => {
      const V = q().filter((re) => !re.disabled), X = V.find((re) => re.ref.current === document.activeElement), F = _u(V, k, X);
      F && setTimeout(() => F.ref.current.focus());
    }), O = u.useCallback(
      (k, V, X) => {
        const F = !Q.current && !X;
        (b.value !== void 0 && b.value === V || F) && (L(k), F && (Q.current = !0));
      },
      [b.value]
    ), I = u.useCallback(() => S?.focus(), [S]), T = u.useCallback(
      (k, V, X) => {
        const F = !Q.current && !X;
        (b.value !== void 0 && b.value === V || F) && J(k);
      },
      [b.value]
    ), G = r === "popper" ? Fo : cu, W = G === Fo ? {
      side: s,
      sideOffset: l,
      align: d,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ c.jsx(
      iu,
      {
        scope: t,
        content: S,
        viewport: C,
        onViewportChange: D,
        itemRefCallback: O,
        selectedItem: R,
        onItemLeave: I,
        itemTextRefCallback: T,
        focusSelectedItem: ee,
        selectedItemText: B,
        position: r,
        isPositioned: U,
        searchRef: _,
        children: /* @__PURE__ */ c.jsx(wn, { as: A0, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          bn,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (k) => {
              k.preventDefault();
            },
            onUnmountAutoFocus: Y(o, (k) => {
              b.trigger?.focus({ preventScroll: !0 }), k.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              Ut,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (k) => k.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  G,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (k) => k.preventDefault(),
                    ...w,
                    ...W,
                    onPlaced: () => H(!0),
                    ref: j,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: Y(w.onKeyDown, (k) => {
                      const V = k.ctrlKey || k.altKey || k.metaKey;
                      if (k.key === "Tab" && k.preventDefault(), !V && k.key.length === 1 && y(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
                        let F = q().filter((re) => !re.disabled).map((re) => re.ref.current);
                        if (["ArrowUp", "End"].includes(k.key) && (F = F.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(k.key)) {
                          const re = k.target, M = F.indexOf(re);
                          F = F.slice(M + 1);
                        }
                        setTimeout(() => $(F)), k.preventDefault();
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
su.displayName = T0;
var D0 = "SelectItemAlignedPosition", cu = u.forwardRef((e, n) => {
  const { __scopeSelect: t, onPlaced: r, ...o } = e, a = gt(_t, t), i = vt(_t, t), [s, l] = u.useState(null), [d, p] = u.useState(null), f = ce(n, (j) => p(j)), m = Lr(t), g = u.useRef(!1), x = u.useRef(!0), { viewport: h, selectedItem: v, selectedItemText: w, focusSelectedItem: b } = i, S = u.useCallback(() => {
    if (a.trigger && a.valueNode && s && d && h && v && w) {
      const j = a.trigger.getBoundingClientRect(), R = d.getBoundingClientRect(), L = a.valueNode.getBoundingClientRect(), B = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const re = B.left - R.left, M = L.left - re, fe = j.left - M, te = j.width + fe, oe = Math.max(te, R.width), we = window.innerWidth - $e, xe = rs(M, [
          $e,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max($e, we - oe)
        ]);
        s.style.minWidth = te + "px", s.style.left = xe + "px";
      } else {
        const re = R.right - B.right, M = window.innerWidth - L.right - re, fe = window.innerWidth - j.right - M, te = j.width + fe, oe = Math.max(te, R.width), we = window.innerWidth - $e, xe = rs(M, [
          $e,
          Math.max($e, we - oe)
        ]);
        s.style.minWidth = te + "px", s.style.right = xe + "px";
      }
      const J = m(), q = window.innerHeight - $e * 2, U = h.scrollHeight, H = window.getComputedStyle(d), Q = parseInt(H.borderTopWidth, 10), $ = parseInt(H.paddingTop, 10), ee = parseInt(H.borderBottomWidth, 10), P = parseInt(H.paddingBottom, 10), N = Q + $ + U + P + ee, _ = Math.min(v.offsetHeight * 5, N), y = window.getComputedStyle(h), O = parseInt(y.paddingTop, 10), I = parseInt(y.paddingBottom, 10), T = j.top + j.height / 2 - $e, G = q - T, W = v.offsetHeight / 2, k = v.offsetTop + W, V = Q + $ + k, X = N - V;
      if (V <= T) {
        const re = J.length > 0 && v === J[J.length - 1].ref.current;
        s.style.bottom = "0px";
        const M = d.clientHeight - h.offsetTop - h.offsetHeight, fe = Math.max(
          G,
          W + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? I : 0) + M + ee
        ), te = V + fe;
        s.style.height = te + "px";
      } else {
        const re = J.length > 0 && v === J[0].ref.current;
        s.style.top = "0px";
        const fe = Math.max(
          T,
          Q + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? O : 0) + W
        ) + X;
        s.style.height = fe + "px", h.scrollTop = V - T + h.offsetTop;
      }
      s.style.margin = `${$e}px 0`, s.style.minHeight = _ + "px", s.style.maxHeight = q + "px", r?.(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    s,
    d,
    h,
    v,
    w,
    a.dir,
    r
  ]);
  Re(() => S(), [S]);
  const [E, C] = u.useState();
  Re(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [d]);
  const D = u.useCallback(
    (j) => {
      j && x.current === !0 && (S(), b?.(), x.current = !1);
    },
    [S, b]
  );
  return /* @__PURE__ */ c.jsx(
    I0,
    {
      scope: t,
      contentWrapper: s,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: D,
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: E
          },
          children: /* @__PURE__ */ c.jsx(
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
cu.displayName = D0;
var N0 = "SelectPopperPosition", Fo = u.forwardRef((e, n) => {
  const {
    __scopeSelect: t,
    align: r = "start",
    collisionPadding: o = $e,
    ...a
  } = e, i = Fr(t);
  return /* @__PURE__ */ c.jsx(
    Rr,
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
Fo.displayName = N0;
var [I0, Aa] = Zt(_t, {}), zo = "SelectViewport", lu = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, nonce: r, ...o } = e, a = vt(zo, t), i = Aa(zo, t), s = ce(n, a.onViewportChange), l = u.useRef(0);
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ c.jsx(Ir.Slot, { scope: t, children: /* @__PURE__ */ c.jsx(
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
          onScroll: Y(o.onScroll, (d) => {
            const p = d.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: m } = i;
            if (m?.current && f) {
              const g = Math.abs(l.current - p.scrollTop);
              if (g > 0) {
                const x = window.innerHeight - $e * 2, h = parseFloat(f.style.minHeight), v = parseFloat(f.style.height), w = Math.max(h, v);
                if (w < x) {
                  const b = w + g, S = Math.min(x, b), E = b - S;
                  f.style.height = S + "px", f.style.bottom === "0px" && (p.scrollTop = E > 0 ? E : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = p.scrollTop;
          })
        }
      ) })
    ] });
  }
);
lu.displayName = zo;
var uu = "SelectGroup", [L0, F0] = Zt(uu), du = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = De();
    return /* @__PURE__ */ c.jsx(L0, { scope: t, id: o, children: /* @__PURE__ */ c.jsx(se.div, { role: "group", "aria-labelledby": o, ...r, ref: n }) });
  }
);
du.displayName = uu;
var pu = "SelectLabel", fu = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = F0(pu, t);
    return /* @__PURE__ */ c.jsx(se.div, { id: o.id, ...r, ref: n });
  }
);
fu.displayName = pu;
var dr = "SelectItem", [z0, mu] = Zt(dr), hu = u.forwardRef(
  (e, n) => {
    const {
      __scopeSelect: t,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = gt(dr, t), l = vt(dr, t), d = s.value === r, [p, f] = u.useState(a ?? ""), [m, g] = u.useState(!1), x = ce(
      n,
      (b) => l.itemRefCallback?.(b, r, o)
    ), h = De(), v = u.useRef("touch"), w = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      z0,
      {
        scope: t,
        value: r,
        disabled: o,
        textId: h,
        isSelected: d,
        onItemTextChange: u.useCallback((b) => {
          f((S) => S || (b?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ c.jsx(
          Ir.ItemSlot,
          {
            scope: t,
            value: r,
            disabled: o,
            textValue: p,
            children: /* @__PURE__ */ c.jsx(
              se.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": d && m,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: x,
                onFocus: Y(i.onFocus, () => g(!0)),
                onBlur: Y(i.onBlur, () => g(!1)),
                onClick: Y(i.onClick, () => {
                  v.current !== "mouse" && w();
                }),
                onPointerUp: Y(i.onPointerUp, () => {
                  v.current === "mouse" && w();
                }),
                onPointerDown: Y(i.onPointerDown, (b) => {
                  v.current = b.pointerType;
                }),
                onPointerMove: Y(i.onPointerMove, (b) => {
                  v.current = b.pointerType, o ? l.onItemLeave?.() : v.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Y(i.onPointerLeave, (b) => {
                  b.currentTarget === document.activeElement && l.onItemLeave?.();
                }),
                onKeyDown: Y(i.onKeyDown, (b) => {
                  l.searchRef?.current !== "" && b.key === " " || (k0.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
hu.displayName = dr;
var un = "SelectItemText", gu = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, ...a } = e, i = gt(un, t), s = vt(un, t), l = mu(un, t), d = j0(un, t), [p, f] = u.useState(null), m = ce(
      n,
      (w) => f(w),
      l.onItemTextChange,
      (w) => s.itemTextRefCallback?.(w, l.value, l.disabled)
    ), g = p?.textContent, x = u.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: l.value, disabled: l.disabled, children: g }, l.value),
      [l.disabled, l.value, g]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: v } = d;
    return Re(() => (h(x), () => v(x)), [h, v, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(se.span, { id: l.textId, ...a, ref: m }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? gr.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
gu.displayName = un;
var vu = "SelectItemIndicator", xu = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return mu(vu, t).isSelected ? /* @__PURE__ */ c.jsx(se.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }
);
xu.displayName = vu;
var $o = "SelectScrollUpButton", bu = u.forwardRef((e, n) => {
  const t = vt($o, e.__scopeSelect), r = Aa($o, e.__scopeSelect), [o, a] = u.useState(!1), i = ce(n, r.onScrollButtonChange);
  return Re(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const d = l.scrollTop > 0;
        a(d);
      };
      const l = t.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    wu,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = t;
        s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
bu.displayName = $o;
var Wo = "SelectScrollDownButton", yu = u.forwardRef((e, n) => {
  const t = vt(Wo, e.__scopeSelect), r = Aa(Wo, e.__scopeSelect), [o, a] = u.useState(!1), i = ce(n, r.onScrollButtonChange);
  return Re(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const d = l.scrollHeight - l.clientHeight, p = Math.ceil(l.scrollTop) < d;
        a(p);
      };
      const l = t.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    wu,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = t;
        s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
yu.displayName = Wo;
var wu = u.forwardRef((e, n) => {
  const { __scopeSelect: t, onAutoScroll: r, ...o } = e, a = vt("SelectScrollButton", t), i = u.useRef(null), s = Lr(t), l = u.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), Re(() => {
    s().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ c.jsx(
    se.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: n,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: Y(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: Y(o.onPointerMove, () => {
        a.onItemLeave?.(), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: Y(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), $0 = "SelectSeparator", Cu = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(se.div, { "aria-hidden": !0, ...r, ref: n });
  }
);
Cu.displayName = $0;
var Vo = "SelectArrow", W0 = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = Fr(t), a = gt(Vo, t), i = vt(Vo, t);
    return a.open && i.position === "popper" ? /* @__PURE__ */ c.jsx(jr, { ...o, ...r, ref: n }) : null;
  }
);
W0.displayName = Vo;
var V0 = "SelectBubbleInput", Su = u.forwardRef(
  ({ __scopeSelect: e, value: n, ...t }, r) => {
    const o = u.useRef(null), a = ce(r, o), i = w0(n);
    return u.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== n && p) {
        const f = new Event("change", { bubbles: !0 });
        p.call(s, n), s.dispatchEvent(f);
      }
    }, [i, n]), /* @__PURE__ */ c.jsx(
      se.select,
      {
        ...t,
        style: { ...Xl, ...t.style },
        ref: a,
        defaultValue: n
      }
    );
  }
);
Su.displayName = V0;
function Eu(e) {
  return e === "" || e === void 0;
}
function ku(e) {
  const n = We(e), t = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (i) => {
      const s = t.current + i;
      n(s), (function l(d) {
        t.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(s);
    },
    [n]
  ), a = u.useCallback(() => {
    t.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [t, o, a];
}
function _u(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((d) => d === n[0]) ? n[0] : n, a = t ? e.indexOf(t) : -1;
  let i = B0(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((d) => d !== t));
  const l = i.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== t ? l : void 0;
}
function B0(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var H0 = Jl, U0 = eu, G0 = nu, Y0 = ru, q0 = ou, K0 = au, Z0 = lu, X0 = du, J0 = fu, Q0 = hu, ey = gu, ty = xu, ny = bu, ry = yu, oy = Cu;
function ay({ ...e }) {
  return /* @__PURE__ */ c.jsx(H0, { "data-slot": "select", ...e });
}
function O2({ ...e }) {
  return /* @__PURE__ */ c.jsx(X0, { "data-slot": "select-group", ...e });
}
function iy({ ...e }) {
  return /* @__PURE__ */ c.jsx(G0, { "data-slot": "select-value", ...e });
}
function sy({
  className: e,
  size: n = "default",
  variant: t = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ c.jsxs(
    U0,
    {
      "data-slot": "select-trigger",
      "data-size": n,
      className: A(
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
        /* @__PURE__ */ c.jsx(Y0, { asChild: !0, children: /* @__PURE__ */ c.jsx(
          pc,
          {
            className: A({
              "size-6 text-gray-300": t === "default",
              "size-4 text-gray-600": t === "ghost"
            })
          }
        ) })
      ]
    }
  );
}
function cy({
  className: e,
  children: n,
  position: t = "popper",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ c.jsx(q0, { children: /* @__PURE__ */ c.jsxs(
    K0,
    {
      "data-slot": "select-content",
      className: A(
        "bg-white font-manrope text-gray-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height)  origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-gray-25 shadow-md",
        t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: t,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ c.jsx(uy, {}),
        /* @__PURE__ */ c.jsx(
          Z0,
          {
            className: A(
              "p-1",
              t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: n
          }
        ),
        /* @__PURE__ */ c.jsx(dy, {})
      ]
    }
  ) });
}
function M2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    J0,
    {
      "data-slot": "select-label",
      className: A("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...n
    }
  );
}
function ly({
  className: e,
  children: n,
  ...t
}) {
  return /* @__PURE__ */ c.jsxs(
    Q0,
    {
      "data-slot": "select-item",
      className: A(
        "focus:bg-gray-25 focus:text-blue-hepatica-600 [&_svg:not([class*='text-'])]:text-gray-300 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...t,
      children: [
        /* @__PURE__ */ c.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx(ty, { children: /* @__PURE__ */ c.jsx(Sn, { className: "size-4" }) }) }),
        /* @__PURE__ */ c.jsx(ey, { children: n })
      ]
    }
  );
}
function T2({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    oy,
    {
      "data-slot": "select-separator",
      className: A("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...n
    }
  );
}
function uy({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    ny,
    {
      "data-slot": "select-scroll-up-button",
      className: A("flex cursor-default items-center justify-center py-1", e),
      ...n,
      children: /* @__PURE__ */ c.jsx(Rm, { className: "size-4" })
    }
  );
}
function dy({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    ry,
    {
      "data-slot": "select-scroll-down-button",
      className: A("flex cursor-default items-center justify-center py-1", e),
      ...n,
      children: /* @__PURE__ */ c.jsx(pc, { className: "size-4" })
    }
  );
}
function A2({
  page: e,
  pageSize: n,
  totalItems: t,
  pageSizeOptions: r = [5, 10, 25, 50],
  onPageChange: o,
  onPageSizeChange: a,
  disabled: i = !1,
  className: s,
  ...l
}) {
  const d = Math.max(1, Math.ceil(t / Math.max(n, 1))), p = Math.min(Math.max(e, 1), d), f = t === 0 ? 0 : (p - 1) * n + 1, m = t === 0 ? 0 : Math.min(t, p * n), g = !i && p > 1, x = !i && p < d, h = () => {
    g && o(p - 1);
  }, v = () => {
    x && o(p + 1);
  }, w = (b) => {
    Number.isNaN(Number(b)) || a?.(Number(b));
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      "data-slot": "pagination",
      className: A(
        "flex w-full items-center justify-end gap-4 py-3 text-sm text-gray-700",
        "border-t border-gray-50",
        s
      ),
      ...l,
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ c.jsx("span", { className: "font-manrope text-xs text-gray-700", children: "Rows per page:" }),
          /* @__PURE__ */ c.jsx("div", { className: "w-16", children: /* @__PURE__ */ c.jsxs(
            ay,
            {
              disabled: i || !a,
              defaultValue: `${n}`,
              onValueChange: w,
              "data-testid": "pagination--items-per-page",
              children: [
                /* @__PURE__ */ c.jsx(sy, { variant: "ghost", disabled: i, children: /* @__PURE__ */ c.jsx(iy, { placeholder: "Theme" }) }),
                /* @__PURE__ */ c.jsx(cy, { children: r.map((b) => /* @__PURE__ */ c.jsx(ly, { value: `${b}`, children: b }, b)) })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ c.jsx("p", { "data-slot": "pagination-range", className: "text-xs text-gray-600 whitespace-nowrap", children: t === 0 ? "0 of 0" : `${f} – ${m} of ${t}` }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-x-1", children: [
            /* @__PURE__ */ c.jsx(
              "button",
              {
                "data-slot": "pagination-prev",
                type: "button",
                onClick: h,
                disabled: !g,
                "aria-label": "Previous page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ c.jsx(fc, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                "data-slot": "pagination-next",
                type: "button",
                onClick: v,
                disabled: !x,
                "aria-label": "Next page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ c.jsx(Sr, { className: "size-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function D2({
  checked: e,
  children: n,
  name: t,
  onChange: r,
  value: o,
  disabled: a = !1
}) {
  const i = `${t}-${o}`;
  return /* @__PURE__ */ c.jsxs(
    "label",
    {
      htmlFor: i,
      className: A(
        "group w-full p-4 gap-1 flex items-start justify-start rounded-lg border border-gray-50 bg-white transition-colors",
        "focus-within:ring-2 focus-within:ring-blue-hepatica-300",
        {
          "border-2 border-blue-hepatica-600 bg-blue-hepatica-100": e,
          "opacity-60 cursor-not-allowed": a
        }
      ),
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "size-10 flex justify-center items-center", children: [
          /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: A(
                "pointer-events-none size-4 border border-gray-700 rounded-full flex items-center justify-center",
                {
                  "border-2 border-blue-hepatica-600": e
                }
              ),
              children: /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: A("size-2 rounded-full bg-transparent", {
                    "bg-blue-hepatica-600": e
                  })
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ c.jsx("div", { className: "", children: n })
      ]
    }
  );
}
const py = Cr("bg-white rounded-2xl overflow-hidden flex flex-col w-full", {
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
function N2({
  title: e,
  children: n,
  footer: t,
  elevation: r = "elevation-0",
  className: o,
  ...a
}) {
  return /* @__PURE__ */ c.jsxs("section", { ...a, className: A(py({ elevation: r, className: o })), children: [
    !!e && /* @__PURE__ */ c.jsx("header", { className: "h-15 flex items-center px-8 border-b border-b-gray-25", children: /* @__PURE__ */ c.jsx("h3", { className: "font-manrope font-semibold text-base text-gray-900 leading-5", children: e }) }),
    /* @__PURE__ */ c.jsx("div", { className: "flex flex-col p-4 md:p-8!", children: n }),
    !!t && /* @__PURE__ */ c.jsx("footer", { className: "px-4 md:px-8! py-4 md:py-6! border-t border-t-gray-25", children: t })
  ] });
}
function I2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "shimmer",
      "aria-hidden": "true",
      className: A(
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
var Pu = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, os = ae.createContext && /* @__PURE__ */ ae.createContext(Pu), fy = ["attr", "size", "title"];
function my(e, n) {
  if (e == null) return {};
  var t = hy(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function hy(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function pr() {
  return pr = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, pr.apply(this, arguments);
}
function as(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function fr(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? as(Object(t), !0).forEach(function(r) {
      gy(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : as(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function gy(e, n, t) {
  return n = vy(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function vy(e) {
  var n = xy(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function xy(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Ru(e) {
  return e && e.map((n, t) => /* @__PURE__ */ ae.createElement(n.tag, fr({
    key: t
  }, n.attr), Ru(n.child)));
}
function by(e) {
  return (n) => /* @__PURE__ */ ae.createElement(yy, pr({
    attr: fr({}, e.attr)
  }, n), Ru(e.child));
}
function yy(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: a
    } = e, i = my(e, fy), s = o || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ ae.createElement("svg", pr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, i, {
      className: l,
      style: fr(fr({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ ae.createElement("title", null, a), e.children);
  };
  return os !== void 0 ? /* @__PURE__ */ ae.createElement(os.Consumer, null, (t) => n(t)) : n(Pu);
}
function wy(e) {
  return by({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM22.0104 8.81412L20.5962 7.3999L16 11.9961L20.5962 16.5923L22.0104 15.1781L18.8284 11.9961L22.0104 8.81412Z" }, child: [] }] })(e);
}
const Cy = new URL("data:image/svg+xml,%3csvg%20width='247'%20height='980'%20viewBox='0%200%20247%20980'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9467_2027)'%3e%3crect%20width='247'%20height='983'%20fill='black'/%3e%3cg%20opacity='0.3'%20filter='url(%23filter0_f_9467_2027)'%3e%3cellipse%20cx='-129.135'%20cy='1014.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20-129.135%201014.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.3'%20filter='url(%23filter1_f_9467_2027)'%3e%3cellipse%20cx='450.01'%20cy='1514.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20450.01%201514.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter2_f_9467_2027)'%3e%3cellipse%20cx='119.407'%20cy='-84.3658'%20rx='364.442'%20ry='193.158'%20fill='%230B495D'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter3_f_9467_2027)'%3e%3cellipse%20cx='399.478'%20cy='-0.360779'%20rx='364.442'%20ry='193.158'%20transform='rotate(30%20399.478%20-0.360779)'%20fill='%23BF3535'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter4_f_9467_2027)'%3e%3cellipse%20cx='-312.773'%20cy='835'%20rx='434.874'%20ry='485.827'%20transform='rotate(-136.998%20-312.773%20835)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter5_f_9467_2027)'%3e%3cellipse%20cx='336.608'%20cy='1039.65'%20rx='553.734'%20ry='293.484'%20transform='rotate(7.13051%20336.608%201039.65)'%20fill='%23660000'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_9467_2027'%20x='-691.145'%20y='128.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_9467_2027'%20x='-112'%20y='628.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_9467_2027'%20x='-453.839'%20y='-486.327'%20width='1146.49'%20height='803.922'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_9467_2027'%20x='-139.475'%20y='-456.526'%20width='1077.91'%20height='912.33'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_9467_2027'%20x='-1172.05'%20y='-27.8358'%20width='1718.56'%20height='1725.67'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_9467_2027'%20x='-531.326'%20y='423.111'%20width='1735.87'%20height='1233.08'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='158.628'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cclipPath%20id='clip0_9467_2027'%3e%3crect%20width='247'%20height='983'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", import.meta.url).href;
function L2({ children: e }) {
  const [n, t] = Te(!1), r = ye(() => t((a) => !a), []), o = ye(() => t(!1), []);
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(
      "button",
      {
        type: "button",
        onClick: r,
        className: A(
          "fixed left-4 top-4 z-40 inline-flex size-12 items-center justify-center",
          "rounded-lg bg-black",
          "lg:hidden"
          // hide the button when viewport >= 912px
        ),
        "aria-label": n ? "Close sidebar" : "Open sidebar",
        children: /* @__PURE__ */ c.jsx(wy, { className: "size-6 text-white" })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: A(
          "fixed inset-0 z-30 bg-black/40 transition-opacity sidebar:hidden lg:hidden",
          n ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: o
      }
    ),
    /* @__PURE__ */ c.jsxs(
      "aside",
      {
        className: A(
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
          /* @__PURE__ */ c.jsx(
            "img",
            {
              src: Cy,
              alt: "",
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
            }
          ),
          /* @__PURE__ */ c.jsxs("div", { className: "w-66.75 grid grid-rows-[112px_1fr]", children: [
            /* @__PURE__ */ c.jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center gap-y-2", children: [
              /* @__PURE__ */ c.jsx(Zl, { className: "size-10.5" }),
              /* @__PURE__ */ c.jsx("h1", { className: "font-manrope font-nromal text-base text-white tracking-[0.04em]", children: "MercySeat" })
            ] }) }),
            /* @__PURE__ */ c.jsx("div", { className: "overflow-hidden w-66.75", children: e })
          ] })
        ]
      }
    )
  ] });
}
function Sy({
  index: e,
  label: n,
  current: t,
  completed: r,
  disabled: o = !1,
  onClick: a
}) {
  return /* @__PURE__ */ c.jsxs("li", { className: "flex flex-col justify-start items-center gap-4 w-fit px-4 bg-gray-25 relative", children: [
    /* @__PURE__ */ c.jsx(
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
        className: A(
          "w-8 h-8 rounded-full flex justify-center items-center",
          "border border-gray-50 bg-gray-25",
          {
            "bg-blue-hepatica-600 text-white border-none hover:bg-blue-hepatica-700": t || r,
            "cursor-not-allowed": o
          }
        ),
        children: r && !t ? /* @__PURE__ */ c.jsx(Sn, { className: "size-4 text-white", "aria-hidden": "true" }) : /* @__PURE__ */ c.jsx(
          "span",
          {
            className: A("font-semibold text-sm text-gray-300", {
              "text-white": t
            }),
            children: e + 1
          }
        )
      }
    ),
    /* @__PURE__ */ c.jsx(
      "span",
      {
        className: A(
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
function F2({
  steps: e,
  currentId: n,
  onStepChange: t,
  className: r
}) {
  const o = e.findIndex((a) => a.id === n);
  return /* @__PURE__ */ c.jsx(
    "nav",
    {
      "aria-label": "Steps",
      "data-slot": "steps",
      className: A("w-full", r),
      children: /* @__PURE__ */ c.jsxs("ol", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ c.jsx("span", { className: "absolute border-b border-b-gray-50 top-1/2 left-0 right-0" }),
        e.map((a, i) => {
          const s = o !== -1 && i < o;
          return /* @__PURE__ */ c.jsx(
            Sy,
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
function z2({ children: e, items: n, className: t, align: r = "end", side: o = "bottom" }) {
  return /* @__PURE__ */ c.jsxs(Fv, { children: [
    /* @__PURE__ */ c.jsx(zv, { asChild: !0, children: e }),
    /* @__PURE__ */ c.jsx($v, { children: /* @__PURE__ */ c.jsx(
      Wv,
      {
        className: A(
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
        children: n.map((a, i) => /* @__PURE__ */ c.jsxs(
          Vv,
          {
            className: A(
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
              a.icon && /* @__PURE__ */ c.jsx("span", { className: "shrink-0 w-4 h-4 flex items-center justify-center", children: a.icon }),
              /* @__PURE__ */ c.jsx("span", { children: a.label })
            ]
          },
          i
        ))
      }
    ) })
  ] });
}
function $2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ c.jsx(
    "table",
    {
      "data-slot": "table",
      className: A("w-full caption-bottom text-sm", e),
      ...n
    }
  ) });
}
function W2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: A("border-b-2 border-b-gray-50", e),
      ...n
    }
  );
}
function V2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: A("[&_tr:last-child]:border-0", e),
      ...n
    }
  );
}
function B2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: A(
        "bg-white border-t border-t-gray-50 font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...n
    }
  );
}
function H2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: A(
        "hover:bg-blue-hepatica-100 data-[state=selected]:bg-blue-hepatica-100 border-b border-b-gray-50 transition-colors",
        e
      ),
      ...n
    }
  );
}
function U2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: A(
        "font-manrope text-sm text-gray-900 tracking-[0.02em] h-12 px-4 text-left align-middle font-semibold whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function G2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: A(
        "px-4 py-2 font-manrope align-middle whitespace-nowrap text-sm tracking-[0.02em] text-gray-700 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function Y2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "caption",
    {
      "data-slot": "table-caption",
      className: A("text-muted-foreground mt-4 text-sm", e),
      ...n
    }
  );
}
function q2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: A(
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
var Ey = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ky(e) {
  const n = ({ children: t }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = Ey, n;
}
var _y = Object.freeze({
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
}), Py = "VisuallyHidden", ju = u.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(
    se.span,
    {
      ...e,
      ref: n,
      style: { ..._y, ...e.style }
    }
  )
);
ju.displayName = Py;
var Ry = ju, [zr] = Ze("Tooltip", [
  mt
]), $r = mt(), Ou = "TooltipProvider", jy = 700, Bo = "tooltip.open", [Oy, Da] = zr(Ou), Mu = (e) => {
  const {
    __scopeTooltip: n,
    delayDuration: t = jy,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = u.useRef(!0), s = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    Oy,
    {
      scope: n,
      isOpenDelayedRef: i,
      delayDuration: t,
      onOpen: u.useCallback(() => {
        window.clearTimeout(l.current), i.current = !1;
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: u.useCallback((d) => {
        s.current = d;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
Mu.displayName = Ou;
var vn = "Tooltip", [My, Wr] = zr(vn), Tu = (e) => {
  const {
    __scopeTooltip: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, l = Da(vn, e.__scopeTooltip), d = $r(n), [p, f] = u.useState(null), m = De(), g = u.useRef(0), x = i ?? l.disableHoverableContent, h = s ?? l.delayDuration, v = u.useRef(!1), [w, b] = dt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (j) => {
      j ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Bo))) : l.onClose(), a?.(j);
    },
    caller: vn
  }), S = u.useMemo(() => w ? v.current ? "delayed-open" : "instant-open" : "closed", [w]), E = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, v.current = !1, b(!0);
  }, [b]), C = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, b(!1);
  }, [b]), D = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      v.current = !0, b(!0), g.current = 0;
    }, h);
  }, [h, b]);
  return u.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ c.jsx(kn, { ...d, children: /* @__PURE__ */ c.jsx(
    My,
    {
      scope: n,
      contentId: m,
      open: w,
      stateAttribute: S,
      trigger: p,
      onTriggerChange: f,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? D() : E();
      }, [l.isOpenDelayedRef, D, E]),
      onTriggerLeave: u.useCallback(() => {
        x ? C() : (window.clearTimeout(g.current), g.current = 0);
      }, [C, x]),
      onOpen: E,
      onClose: C,
      disableHoverableContent: x,
      children: t
    }
  ) });
};
Tu.displayName = vn;
var Ho = "TooltipTrigger", Au = u.forwardRef(
  (e, n) => {
    const { __scopeTooltip: t, ...r } = e, o = Wr(Ho, t), a = Da(Ho, t), i = $r(t), s = u.useRef(null), l = ce(n, s, o.onTriggerChange), d = u.useRef(!1), p = u.useRef(!1), f = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ c.jsx(_n, { asChild: !0, ...i, children: /* @__PURE__ */ c.jsx(
      se.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: Y(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !p.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: Y(e.onPointerLeave, () => {
          o.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: Y(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: Y(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: Y(e.onBlur, o.onClose),
        onClick: Y(e.onClick, o.onClose)
      }
    ) });
  }
);
Au.displayName = Ho;
var Ty = "TooltipPortal", [K2, Ay] = zr(Ty, {
  forceMount: void 0
}), Vt = "TooltipContent", Du = u.forwardRef(
  (e, n) => {
    const t = Ay(Vt, e.__scopeTooltip), { forceMount: r = t.forceMount, side: o = "top", ...a } = e, i = Wr(Vt, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(He, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ c.jsx(Nu, { side: o, ...a, ref: n }) : /* @__PURE__ */ c.jsx(Dy, { side: o, ...a, ref: n }) });
  }
), Dy = u.forwardRef((e, n) => {
  const t = Wr(Vt, e.__scopeTooltip), r = Da(Vt, e.__scopeTooltip), o = u.useRef(null), a = ce(n, o), [i, s] = u.useState(null), { trigger: l, onClose: d } = t, p = o.current, { onPointerInTransitChange: f } = r, m = u.useCallback(() => {
    s(null), f(!1);
  }, [f]), g = u.useCallback(
    (x, h) => {
      const v = x.currentTarget, w = { x: x.clientX, y: x.clientY }, b = zy(w, v.getBoundingClientRect()), S = $y(w, b), E = Wy(h.getBoundingClientRect()), C = By([...S, ...E]);
      s(C), f(!0);
    },
    [f]
  );
  return u.useEffect(() => () => m(), [m]), u.useEffect(() => {
    if (l && p) {
      const x = (v) => g(v, p), h = (v) => g(v, l);
      return l.addEventListener("pointerleave", x), p.addEventListener("pointerleave", h), () => {
        l.removeEventListener("pointerleave", x), p.removeEventListener("pointerleave", h);
      };
    }
  }, [l, p, g, m]), u.useEffect(() => {
    if (i) {
      const x = (h) => {
        const v = h.target, w = { x: h.clientX, y: h.clientY }, b = l?.contains(v) || p?.contains(v), S = !Vy(w, i);
        b ? m() : S && (m(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, p, i, d, m]), /* @__PURE__ */ c.jsx(Nu, { ...e, ref: a });
}), [Ny, Iy] = zr(vn, { isInside: !1 }), Ly = /* @__PURE__ */ ky("TooltipContent"), Nu = u.forwardRef(
  (e, n) => {
    const {
      __scopeTooltip: t,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, l = Wr(Vt, t), d = $r(t), { onClose: p } = l;
    return u.useEffect(() => (document.addEventListener(Bo, p), () => document.removeEventListener(Bo, p)), [p]), u.useEffect(() => {
      if (l.trigger) {
        const f = (m) => {
          m.target?.contains(l.trigger) && p();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, p]), /* @__PURE__ */ c.jsx(
      Ut,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ c.jsxs(
          Rr,
          {
            "data-state": l.stateAttribute,
            ...d,
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
              /* @__PURE__ */ c.jsx(Ly, { children: r }),
              /* @__PURE__ */ c.jsx(Ny, { scope: t, isInside: !0, children: /* @__PURE__ */ c.jsx(Ry, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Du.displayName = Vt;
var Iu = "TooltipArrow", Fy = u.forwardRef(
  (e, n) => {
    const { __scopeTooltip: t, ...r } = e, o = $r(t);
    return Iy(
      Iu,
      t
    ).isInside ? null : /* @__PURE__ */ c.jsx(jr, { ...o, ...r, ref: n });
  }
);
Fy.displayName = Iu;
function zy(e, n) {
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
function $y(e, n, t = 5) {
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
function Wy(e) {
  const { top: n, right: t, bottom: r, left: o } = e;
  return [
    { x: o, y: n },
    { x: t, y: n },
    { x: t, y: r },
    { x: o, y: r }
  ];
}
function Vy(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let a = 0, i = n.length - 1; a < n.length; i = a++) {
    const s = n[a], l = n[i], d = s.x, p = s.y, f = l.x, m = l.y;
    p > r != m > r && t < (f - d) * (r - p) / (m - p) + d && (o = !o);
  }
  return o;
}
function By(e) {
  const n = e.slice();
  return n.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), Hy(n);
}
function Hy(e) {
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
function Z2({
  delayDuration: e = 0,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    Mu,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...n
    }
  );
}
function X2({ ...e }) {
  return /* @__PURE__ */ c.jsx(Tu, { "data-slot": "tooltip", ...e });
}
function J2({ ...e }) {
  return /* @__PURE__ */ c.jsx(Au, { "data-slot": "tooltip-trigger", ...e });
}
function Q2({
  className: e,
  sideOffset: n = 6,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    Du,
    {
      "data-slot": "tooltip-content",
      sideOffset: n,
      className: A(
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
const Uy = Cr("font-manrope text-gray-900", {
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
}), Gy = {
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
function eC(e) {
  const { as: n, variant: t, className: r, children: o, ...a } = e, i = t ?? "body-md", s = n ?? Gy[i];
  return /* @__PURE__ */ c.jsx(
    s,
    {
      className: A(Uy({ variant: i }), r),
      ...a,
      children: o
    }
  );
}
const Lu = 6048e5, Yy = 864e5, is = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Ie(e, n) {
  return typeof e == "function" ? e(n) : e && typeof e == "object" && is in e ? e[is](n) : e instanceof Date ? new e.constructor(n) : new Date(n);
}
function ke(e, n) {
  return Ie(n || e, e);
}
function Fu(e, n, t) {
  const r = ke(e, t?.in);
  if (isNaN(n)) return Ie(e, NaN);
  if (!n)
    return r;
  const o = r.getDate(), a = Ie(e, r.getTime());
  a.setMonth(r.getMonth() + n + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let qy = {};
function Mn() {
  return qy;
}
function Bt(e, n) {
  const t = Mn(), r = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? t.weekStartsOn ?? t.locale?.options?.weekStartsOn ?? 0, o = ke(e, n?.in), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function mr(e, n) {
  return Bt(e, { ...n, weekStartsOn: 1 });
}
function zu(e, n) {
  const t = ke(e, n?.in), r = t.getFullYear(), o = Ie(t, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = mr(o), i = Ie(t, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = mr(i);
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= s.getTime() ? r : r - 1;
}
function ss(e) {
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
function Vr(e, ...n) {
  const t = Ie.bind(
    null,
    n.find((r) => typeof r == "object")
  );
  return n.map(t);
}
function xn(e, n) {
  const t = ke(e, n?.in);
  return t.setHours(0, 0, 0, 0), t;
}
function Ky(e, n, t) {
  const [r, o] = Vr(
    t?.in,
    e,
    n
  ), a = xn(r), i = xn(o), s = +a - ss(a), l = +i - ss(i);
  return Math.round((s - l) / Yy);
}
function Zy(e, n) {
  const t = zu(e, n), r = Ie(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), mr(r);
}
function Xy(e) {
  return Ie(e, Date.now());
}
function $u(e, n, t) {
  const [r, o] = Vr(
    t?.in,
    e,
    n
  );
  return +xn(r) == +xn(o);
}
function Jy(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Qy(e) {
  return !(!Jy(e) && typeof e != "number" || isNaN(+ke(e)));
}
function ew(e, n) {
  const t = ke(e, n?.in), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function tw(e, n) {
  const [t, r] = Vr(e, n.start, n.end);
  return { start: t, end: r };
}
function nw(e, n) {
  const { start: t, end: r } = tw(n?.in, e);
  let o = +t > +r;
  const a = o ? +t : +r, i = o ? r : t;
  i.setHours(0, 0, 0, 0);
  let s = 1;
  const l = [];
  for (; +i <= a; )
    l.push(Ie(t, i)), i.setDate(i.getDate() + s), i.setHours(0, 0, 0, 0);
  return o ? l.reverse() : l;
}
function rw(e, n) {
  const t = ke(e, n?.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function ow(e, n) {
  const t = ke(e, n?.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function aw(e, n) {
  const t = Mn(), r = t.weekStartsOn ?? t.locale?.options?.weekStartsOn ?? 0, o = ke(e, n?.in), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
const iw = {
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
}, sw = (e, n, t) => {
  let r;
  const o = iw[e];
  return typeof o == "string" ? r = o : n === 1 ? r = o.one : r = o.other.replace("{{count}}", n.toString()), t?.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function yo(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const cw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, lw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, uw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, dw = {
  date: yo({
    formats: cw,
    defaultWidth: "full"
  }),
  time: yo({
    formats: lw,
    defaultWidth: "full"
  }),
  dateTime: yo({
    formats: uw,
    defaultWidth: "full"
  })
}, pw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, fw = (e, n, t, r) => pw[e];
function an(e) {
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
const mw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, hw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, gw = {
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
}, vw = {
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
}, xw = {
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
}, bw = {
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
}, yw = (e, n) => {
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
}, ww = {
  ordinalNumber: yw,
  era: an({
    values: mw,
    defaultWidth: "wide"
  }),
  quarter: an({
    values: hw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: an({
    values: gw,
    defaultWidth: "wide"
  }),
  day: an({
    values: vw,
    defaultWidth: "wide"
  }),
  dayPeriod: an({
    values: xw,
    defaultWidth: "wide",
    formattingValues: bw,
    defaultFormattingWidth: "wide"
  })
};
function sn(e) {
  return (n, t = {}) => {
    const r = t.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = n.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? Sw(s, (f) => f.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      Cw(s, (f) => f.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(l) : l, d = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(d)
    ) : d;
    const p = n.slice(i.length);
    return { value: d, rest: p };
  };
}
function Cw(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function Sw(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Ew(e) {
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
const kw = /^(\d+)(th|st|nd|rd)?/i, _w = /\d+/i, Pw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Rw = {
  any: [/^b/i, /^(a|c)/i]
}, jw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ow = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Mw = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Tw = {
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
}, Aw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Dw = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Nw = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Iw = {
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
}, Lw = {
  ordinalNumber: Ew({
    matchPattern: kw,
    parsePattern: _w,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: sn({
    matchPatterns: Pw,
    defaultMatchWidth: "wide",
    parsePatterns: Rw,
    defaultParseWidth: "any"
  }),
  quarter: sn({
    matchPatterns: jw,
    defaultMatchWidth: "wide",
    parsePatterns: Ow,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: sn({
    matchPatterns: Mw,
    defaultMatchWidth: "wide",
    parsePatterns: Tw,
    defaultParseWidth: "any"
  }),
  day: sn({
    matchPatterns: Aw,
    defaultMatchWidth: "wide",
    parsePatterns: Dw,
    defaultParseWidth: "any"
  }),
  dayPeriod: sn({
    matchPatterns: Nw,
    defaultMatchWidth: "any",
    parsePatterns: Iw,
    defaultParseWidth: "any"
  })
}, Fw = {
  code: "en-US",
  formatDistance: sw,
  formatLong: dw,
  formatRelative: fw,
  localize: ww,
  match: Lw,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function zw(e, n) {
  const t = ke(e, n?.in);
  return Ky(t, ow(t)) + 1;
}
function $w(e, n) {
  const t = ke(e, n?.in), r = +mr(t) - +Zy(t);
  return Math.round(r / Lu) + 1;
}
function Wu(e, n) {
  const t = ke(e, n?.in), r = t.getFullYear(), o = Mn(), a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, i = Ie(n?.in || e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = Bt(i, n), l = Ie(n?.in || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = Bt(l, n);
  return +t >= +s ? r + 1 : +t >= +d ? r : r - 1;
}
function Ww(e, n) {
  const t = Mn(), r = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? t.firstWeekContainsDate ?? t.locale?.options?.firstWeekContainsDate ?? 1, o = Wu(e, n), a = Ie(n?.in || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Bt(a, n);
}
function Vw(e, n) {
  const t = ke(e, n?.in), r = +Bt(t, n) - +Ww(t, n);
  return Math.round(r / Lu) + 1;
}
function pe(e, n) {
  const t = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(n, "0");
  return t + r;
}
const ct = {
  // Year
  y(e, n) {
    const t = e.getFullYear(), r = t > 0 ? t : 1 - t;
    return pe(n === "yy" ? r % 100 : r, n.length);
  },
  // Month
  M(e, n) {
    const t = e.getMonth();
    return n === "M" ? String(t + 1) : pe(t + 1, 2);
  },
  // Day of the month
  d(e, n) {
    return pe(e.getDate(), n.length);
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
    return pe(e.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(e, n) {
    return pe(e.getHours(), n.length);
  },
  // Minute
  m(e, n) {
    return pe(e.getMinutes(), n.length);
  },
  // Second
  s(e, n) {
    return pe(e.getSeconds(), n.length);
  },
  // Fraction of second
  S(e, n) {
    const t = n.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, t - 3)
    );
    return pe(o, n.length);
  }
}, Dt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, cs = {
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
    return ct.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, r) {
    const o = Wu(e, r), a = o > 0 ? o : 1 - o;
    if (n === "YY") {
      const i = a % 100;
      return pe(i, 2);
    }
    return n === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : pe(a, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = zu(e);
    return pe(t, n.length);
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
    return pe(t, n.length);
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
        return pe(r, 2);
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
        return pe(r, 2);
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
        return ct.M(e, n);
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
        return pe(r + 1, 2);
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
    const o = Vw(e, r);
    return n === "wo" ? t.ordinalNumber(o, { unit: "week" }) : pe(o, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const r = $w(e);
    return n === "Io" ? t.ordinalNumber(r, { unit: "week" }) : pe(r, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : ct.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const r = zw(e);
    return n === "Do" ? t.ordinalNumber(r, { unit: "dayOfYear" }) : pe(r, n.length);
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
        return pe(a, 2);
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
        return pe(a, n.length);
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
        return pe(o, n.length);
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
    switch (r === 12 ? o = Dt.noon : r === 0 ? o = Dt.midnight : o = r / 12 >= 1 ? "pm" : "am", n) {
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
    switch (r >= 17 ? o = Dt.evening : r >= 12 ? o = Dt.afternoon : r >= 4 ? o = Dt.morning : o = Dt.night, n) {
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
    return ct.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : ct.H(e, n);
  },
  // Hour [0-11]
  K: function(e, n, t) {
    const r = e.getHours() % 12;
    return n === "Ko" ? t.ordinalNumber(r, { unit: "hour" }) : pe(r, n.length);
  },
  // Hour [1-24]
  k: function(e, n, t) {
    let r = e.getHours();
    return r === 0 && (r = 24), n === "ko" ? t.ordinalNumber(r, { unit: "hour" }) : pe(r, n.length);
  },
  // Minute
  m: function(e, n, t) {
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : ct.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : ct.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return ct.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (n) {
      // Hours and optional minutes
      case "X":
        return us(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return yt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return yt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      // Hours and optional minutes
      case "x":
        return us(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return yt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return yt(r, ":");
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
        return "GMT" + ls(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + yt(r, ":");
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
        return "GMT" + ls(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + yt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, n, t) {
    const r = Math.trunc(+e / 1e3);
    return pe(r, n.length);
  },
  // Milliseconds timestamp
  T: function(e, n, t) {
    return pe(+e, n.length);
  }
};
function ls(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? t + String(o) : t + String(o) + n + pe(a, 2);
}
function us(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + pe(Math.abs(e) / 60, 2) : yt(e, n);
}
function yt(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = pe(Math.trunc(r / 60), 2), a = pe(r % 60, 2);
  return t + o + n + a;
}
const ds = (e, n) => {
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
}, Vu = (e, n) => {
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
}, Bw = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], r = t[1], o = t[2];
  if (!o)
    return ds(e, n);
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
  return a.replace("{{date}}", ds(r, n)).replace("{{time}}", Vu(o, n));
}, Hw = {
  p: Vu,
  P: Bw
}, Uw = /^D+$/, Gw = /^Y+$/, Yw = ["D", "DD", "YY", "YYYY"];
function qw(e) {
  return Uw.test(e);
}
function Kw(e) {
  return Gw.test(e);
}
function Zw(e, n, t) {
  const r = Xw(e, n, t);
  if (console.warn(r), Yw.includes(e)) throw new RangeError(r);
}
function Xw(e, n, t) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Jw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Qw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, e1 = /^'([^]*?)'?$/, t1 = /''/g, n1 = /[a-zA-Z]/;
function Yn(e, n, t) {
  const r = Mn(), o = r.locale ?? Fw, a = r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = ke(e, t?.in);
  if (!Qy(s))
    throw new RangeError("Invalid time value");
  let l = n.match(Qw).map((p) => {
    const f = p[0];
    if (f === "p" || f === "P") {
      const m = Hw[f];
      return m(p, o.formatLong);
    }
    return p;
  }).join("").match(Jw).map((p) => {
    if (p === "''")
      return { isToken: !1, value: "'" };
    const f = p[0];
    if (f === "'")
      return { isToken: !1, value: r1(p) };
    if (cs[f])
      return { isToken: !0, value: p };
    if (f.match(n1))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: p };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return l.map((p) => {
    if (!p.isToken) return p.value;
    const f = p.value;
    (Kw(f) || qw(f)) && Zw(f, n, String(e));
    const m = cs[f[0]];
    return m(s, f, o.localize, d);
  }).join("");
}
function r1(e) {
  const n = e.match(e1);
  return n ? n[1].replace(t1, "'") : e;
}
function ps(e, n) {
  return +ke(e) < +ke(n);
}
function o1(e, n, t) {
  const [r, o] = Vr(
    t?.in,
    e,
    n
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function a1(e, n) {
  return $u(
    Ie(e, e),
    Xy(e)
  );
}
function i1(e, n, t) {
  return Fu(e, -1, t);
}
const s1 = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function tC({
  value: e,
  onChange: n,
  "data-testid": t
}) {
  const [r, o] = Te(!1), [a, i] = Te({}), [s, l] = Te(
    () => e ? /* @__PURE__ */ new Date(`${e}T00:00:00`) : /* @__PURE__ */ new Date()
  ), d = Nt(null), p = Nt(null), f = e ? /* @__PURE__ */ new Date(`${e}T00:00:00`) : null, m = xn(/* @__PURE__ */ new Date()), g = ye(() => {
    if (!p.current) return;
    const b = p.current.getBoundingClientRect();
    i({
      position: "fixed",
      top: b.bottom + 4,
      left: b.left,
      zIndex: 9999
    });
  }, []), x = () => {
    e && l(/* @__PURE__ */ new Date(`${e}T00:00:00`)), g(), o(!0);
  };
  dn(() => {
    if (!r) return;
    const b = (E) => {
      d.current?.contains(E.target) || o(!1);
    }, S = (E) => {
      E.key === "Escape" && o(!1);
    };
    return document.addEventListener("mousedown", b), document.addEventListener("keydown", S), window.addEventListener("scroll", g, !0), window.addEventListener("resize", g), () => {
      document.removeEventListener("mousedown", b), document.removeEventListener("keydown", S), window.removeEventListener("scroll", g, !0), window.removeEventListener("resize", g);
    };
  }, [r, g]);
  const h = nw({
    start: Bt(rw(s)),
    end: aw(ew(s))
  }), v = (b) => {
    ps(b, m) || (n(Yn(b, "yyyy-MM-dd")), o(!1));
  }, w = f ? Yn(f, "MMMM d, yyyy") : "";
  return /* @__PURE__ */ c.jsxs("div", { ref: d, className: "relative", "data-testid": t, children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        ref: p,
        type: "button",
        onClick: x,
        className: "flex h-10 w-full items-center gap-2 rounded-md border border-gray-200 bg-white px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        children: [
          /* @__PURE__ */ c.jsx(Cm, { className: "size-4 shrink-0 text-gray-400" }),
          /* @__PURE__ */ c.jsx("span", { className: A(w ? "text-gray-900" : "text-gray-400"), children: w || "Select a date" })
        ]
      }
    ),
    r && /* @__PURE__ */ c.jsxs(
      "div",
      {
        style: a,
        className: "w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-lg",
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
            /* @__PURE__ */ c.jsx(
              "button",
              {
                type: "button",
                onClick: () => l((b) => i1(b)),
                className: "flex size-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100",
                "aria-label": "Previous month",
                children: /* @__PURE__ */ c.jsx(fc, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ c.jsx("span", { className: "text-sm font-semibold text-gray-900", children: Yn(s, "MMMM yyyy") }),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                type: "button",
                onClick: () => l((b) => Fu(b, 1)),
                className: "flex size-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100",
                "aria-label": "Next month",
                children: /* @__PURE__ */ c.jsx(Sr, { className: "size-4" })
              }
            )
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "mb-1 grid grid-cols-7", children: s1.map((b) => /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "flex h-8 items-center justify-center text-xs font-medium text-gray-400",
              children: b
            },
            b
          )) }),
          /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-7", children: h.map((b) => {
            const S = !!f && $u(b, f), E = o1(b, s), C = ps(b, m), D = a1(b);
            return /* @__PURE__ */ c.jsx(
              "button",
              {
                type: "button",
                onClick: () => v(b),
                disabled: C,
                className: A(
                  "flex size-9 items-center justify-center rounded-full text-sm transition-colors",
                  (!E || C) && "text-gray-300",
                  !C && E && !S && "hover:bg-gray-100",
                  D && !S && "font-semibold text-blue-600",
                  S && "bg-blue-600 font-semibold text-white"
                ),
                children: Yn(b, "d")
              },
              b.toISOString()
            );
          }) })
        ]
      }
    )
  ] });
}
// @__NO_SIDE_EFFECTS__
function c1(e) {
  const n = /* @__PURE__ */ l1(e), t = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(d1);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function l1(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (u.isValidElement(o)) {
      const i = f1(o), s = p1(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? Xe(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var u1 = /* @__PURE__ */ Symbol("radix.slottable");
function d1(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === u1;
}
function p1(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], a = n[r];
    /^on[A-Z]/.test(r) ? o && a ? t[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...a } : r === "className" && (t[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function f1(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Br = "Popover", [Bu] = Ze(Br, [
  mt
]), Tn = mt(), [m1, xt] = Bu(Br), Hu = (e) => {
  const {
    __scopePopover: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = Tn(n), l = u.useRef(null), [d, p] = u.useState(!1), [f, m] = dt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Br
  });
  return /* @__PURE__ */ c.jsx(kn, { ...s, children: /* @__PURE__ */ c.jsx(
    m1,
    {
      scope: n,
      contentId: De(),
      triggerRef: l,
      open: f,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((g) => !g), [m]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: u.useCallback(() => p(!0), []),
      onCustomAnchorRemove: u.useCallback(() => p(!1), []),
      modal: i,
      children: t
    }
  ) });
};
Hu.displayName = Br;
var Uu = "PopoverAnchor", h1 = u.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = xt(Uu, t), a = Tn(t), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return u.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ c.jsx(_n, { ...a, ...r, ref: n });
  }
);
h1.displayName = Uu;
var Gu = "PopoverTrigger", Yu = u.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = xt(Gu, t), a = Tn(t), i = ce(n, o.triggerRef), s = /* @__PURE__ */ c.jsx(
      se.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ju(o.open),
        ...r,
        ref: i,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ c.jsx(_n, { asChild: !0, ...a, children: s });
  }
);
Yu.displayName = Gu;
var Na = "PopoverPortal", [g1, v1] = Bu(Na, {
  forceMount: void 0
}), qu = (e) => {
  const { __scopePopover: n, forceMount: t, children: r, container: o } = e, a = xt(Na, n);
  return /* @__PURE__ */ c.jsx(g1, { scope: n, forceMount: t, children: /* @__PURE__ */ c.jsx(He, { present: t || a.open, children: /* @__PURE__ */ c.jsx(yn, { asChild: !0, container: o, children: r }) }) });
};
qu.displayName = Na;
var Ht = "PopoverContent", Ku = u.forwardRef(
  (e, n) => {
    const t = v1(Ht, e.__scopePopover), { forceMount: r = t.forceMount, ...o } = e, a = xt(Ht, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(He, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(b1, { ...o, ref: n }) : /* @__PURE__ */ c.jsx(y1, { ...o, ref: n }) });
  }
);
Ku.displayName = Ht;
var x1 = /* @__PURE__ */ c1("PopoverContent.RemoveScroll"), b1 = u.forwardRef(
  (e, n) => {
    const t = xt(Ht, e.__scopePopover), r = u.useRef(null), o = ce(n, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const i = r.current;
      if (i) return br(i);
    }, []), /* @__PURE__ */ c.jsx(wn, { as: x1, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      Zu,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Y(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), a.current || t.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Y(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, d = s.button === 2 || l;
            a.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Y(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), y1 = u.forwardRef(
  (e, n) => {
    const t = xt(Ht, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Zu,
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
), Zu = u.forwardRef(
  (e, n) => {
    const {
      __scopePopover: t,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      onFocusOutside: d,
      onInteractOutside: p,
      ...f
    } = e, m = xt(Ht, t), g = Tn(t);
    return vr(), /* @__PURE__ */ c.jsx(
      bn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ c.jsx(
          Ut,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: p,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ c.jsx(
              Rr,
              {
                "data-state": Ju(m.open),
                role: "dialog",
                id: m.contentId,
                ...g,
                ...f,
                ref: n,
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
), Xu = "PopoverClose", w1 = u.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = xt(Xu, t);
    return /* @__PURE__ */ c.jsx(
      se.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
w1.displayName = Xu;
var C1 = "PopoverArrow", S1 = u.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = Tn(t);
    return /* @__PURE__ */ c.jsx(jr, { ...o, ...r, ref: n });
  }
);
S1.displayName = C1;
function Ju(e) {
  return e ? "open" : "closed";
}
var E1 = Hu, k1 = Yu, _1 = qu, P1 = Ku;
const R1 = Array.from({ length: 96 }, (e, n) => {
  const t = n * 15, r = Math.floor(t / 60), o = t % 60, a = `${String(r).padStart(2, "0")}:${String(o).padStart(2, "0")}`, i = r < 12 ? "AM" : "PM", l = `${r === 0 ? 12 : r > 12 ? r - 12 : r}:${String(o).padStart(2, "0")} ${i}`;
  return { value: a, label: l };
});
function j1(e) {
  if (!e) return "";
  const [n, t] = e.split(":"), r = Number(n), o = Number(t), a = r < 12 ? "AM" : "PM";
  return `${r === 0 ? 12 : r > 12 ? r - 12 : r}:${String(o).padStart(2, "0")} ${a}`;
}
function O1(e) {
  if (!e) return "";
  const [n, t] = e.split(":"), r = Number(n) * 60 + Number(t), o = Math.round(r / 15) * 15, a = Math.min(o, 1425), i = Math.floor(a / 60), s = a % 60;
  return `${String(i).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function nC({
  value: e,
  onChange: n,
  "data-testid": t
}) {
  const [r, o] = u.useState(!1), a = u.useRef(null), i = j1(e), s = O1(e);
  return u.useEffect(() => {
    r && a.current && a.current.scrollIntoView?.({ block: "center" });
  }, [r]), /* @__PURE__ */ c.jsxs(E1, { open: r, onOpenChange: o, children: [
    /* @__PURE__ */ c.jsx(k1, { asChild: !0, children: /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        "data-testid": t,
        className: "flex h-10 w-full items-center gap-2 rounded-md border border-gray-200 bg-white px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        children: [
          /* @__PURE__ */ c.jsx(Om, { className: "size-4 shrink-0 text-gray-400" }),
          /* @__PURE__ */ c.jsx("span", { className: A(i ? "text-gray-900" : "text-gray-400"), children: i || "Select a time" })
        ]
      }
    ) }),
    /* @__PURE__ */ c.jsx(_1, { children: /* @__PURE__ */ c.jsx(
      P1,
      {
        align: "start",
        sideOffset: 4,
        className: A(
          "z-50 max-h-56 w-[var(--radix-popover-trigger-width)]",
          "overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        ),
        children: R1.map((l) => {
          const d = l.value === s && !!e;
          return /* @__PURE__ */ c.jsx(
            "button",
            {
              ref: d ? a : void 0,
              type: "button",
              onClick: () => {
                n(l.value), o(!1);
              },
              className: A(
                "flex w-full items-center px-4 py-2 text-sm transition-colors",
                d ? "bg-blue-50 font-semibold text-blue-600" : "text-gray-700 hover:bg-gray-50"
              ),
              children: l.label
            },
            l.value
          );
        })
      }
    ) })
  ] });
}
export {
  N1 as AlertDialog,
  nx as AnalyticsIcon,
  rx as AnnouncementIcon,
  I1 as Badge,
  L1 as Breadcrumb,
  z1 as BreadcrumbItem,
  $1 as BreadcrumbLink,
  F1 as BreadcrumbList,
  W1 as BreadcrumbPage,
  V1 as BreadcrumbSeparator,
  oa as Button,
  B1 as Checkbox,
  ox as ChurchIcon,
  ax as ClassIcon,
  ix as CrownIcon,
  tC as DatePicker,
  H1 as Dialog,
  A1 as DialogAction,
  D1 as DialogCancel,
  G1 as DialogClose,
  Y1 as DialogContent,
  X1 as DialogDescription,
  K1 as DialogFooter,
  q1 as DialogHeader,
  Bm as DialogOverlay,
  Vm as DialogPortal,
  Z1 as DialogTitle,
  U1 as DialogTrigger,
  J1 as DropdownMenu,
  o2 as DropdownMenuCheckboxItem,
  t2 as DropdownMenuContent,
  n2 as DropdownMenuGroup,
  r2 as DropdownMenuItem,
  s2 as DropdownMenuLabel,
  Q1 as DropdownMenuPortal,
  a2 as DropdownMenuRadioGroup,
  i2 as DropdownMenuRadioItem,
  c2 as DropdownMenuSeparator,
  l2 as DropdownMenuShortcut,
  u2 as DropdownMenuSub,
  p2 as DropdownMenuSubContent,
  d2 as DropdownMenuSubTrigger,
  e2 as DropdownMenuTrigger,
  sx as EventIcon,
  f2 as Form,
  v2 as FormControl,
  x2 as FormDescription,
  m2 as FormField,
  h2 as FormItem,
  g2 as FormLabel,
  b2 as FormMessage,
  cx as GiftIcon,
  lx as HomeIcon,
  y2 as Icon,
  w2 as ImageUploader,
  Zb as Input,
  S2 as InputOTP,
  E2 as InputOTPGroup,
  _2 as InputOTPSeparator,
  k2 as InputOTPSlot,
  Ol as Label,
  ux as ListIcon,
  dx as LivestreamIcon,
  px as LockClosedIcon,
  fx as LockOpenIcon,
  Zl as Logo,
  P2 as LogoLockup,
  R2 as MediaUploader,
  j2 as MenuItem,
  mx as MinistryIcon,
  A2 as Pagination,
  C2 as PasswordInput,
  hx as PodcastIcon,
  D2 as RadioButton,
  N2 as Section,
  ay as Select,
  cy as SelectContent,
  O2 as SelectGroup,
  ly as SelectItem,
  M2 as SelectLabel,
  dy as SelectScrollDownButton,
  uy as SelectScrollUpButton,
  T2 as SelectSeparator,
  sy as SelectTrigger,
  iy as SelectValue,
  gx as SeriesIcon,
  vx as SermonIcon,
  I2 as Shimmer,
  L2 as Sidebar,
  F2 as Stepper,
  xx as SubscriptionIcon,
  z2 as SuspendedMenu,
  $2 as Table,
  V2 as TableBody,
  Y2 as TableCaption,
  G2 as TableCell,
  B2 as TableFooter,
  U2 as TableHead,
  W2 as TableHeader,
  H2 as TableRow,
  q2 as Textarea,
  nC as TimePicker,
  X2 as Tooltip,
  Q2 as TooltipContent,
  Z2 as TooltipProvider,
  J2 as TooltipTrigger,
  eC as Typography,
  bx as VideoIcon,
  hm as badgeVariants,
  Wm as buttonVariants,
  Uy as typographyVariants,
  Dr as useFormField
};
