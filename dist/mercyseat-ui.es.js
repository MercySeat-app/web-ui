import * as d from "react";
import ie, { useState as We, forwardRef as Yn, createElement as Kr, useLayoutEffect as dd, useContext as Zr, createContext as $a, useId as ud, useMemo as at, useRef as pn, useReducer as pd, useEffect as Rn, useCallback as ye, useImperativeHandle as fd, Fragment as md } from "react";
import * as Kn from "react-dom";
import vd from "react-dom";
function yo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fn = { exports: {} }, Bt = {};
var gi;
function gd() {
  if (gi) return Bt;
  gi = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
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
  return Bt.Fragment = n, Bt.jsx = t, Bt.jsxs = t, Bt;
}
var Ht = {};
var hi;
function hd() {
  return hi || (hi = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === J ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case h:
          return "Fragment";
        case w:
          return "Profiler";
        case y:
          return "StrictMode";
        case D:
          return "Suspense";
        case P:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case v:
            return "Portal";
          case S:
            return b.displayName || "Context";
          case E:
            return (b._context.displayName || "Context") + ".Consumer";
          case C:
            var A = b.render;
            return b = b.displayName, b || (b = A.displayName || A.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case j:
            return A = b.displayName || null, A !== null ? A : e(b.type) || "Memo";
          case L:
            A = b._payload, b = b._init;
            try {
              return e(b(A));
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
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var I = A.error, O = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return I.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), n(b);
      }
    }
    function r(b) {
      if (b === h) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === L)
        return "<...>";
      try {
        var A = e(b);
        return A ? "<" + A + ">" : "<...>";
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
        var A = Object.getOwnPropertyDescriptor(b, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function s(b, A) {
      function I() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: I,
        configurable: !0
      });
    }
    function l() {
      var b = e(this.type);
      return ee[b] || (ee[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function u(b, A, I, O, G, V) {
      var k = I.ref;
      return b = {
        $$typeof: x,
        type: b,
        key: A,
        props: I,
        _owner: O
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: l
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
        value: G
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function p(b, A, I, O, G, V) {
      var k = A.children;
      if (k !== void 0)
        if (O)
          if (H(k)) {
            for (O = 0; O < k.length; O++)
              f(k[O]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(k);
      if (U.call(A, "key")) {
        k = e(b);
        var W = Object.keys(A).filter(function(F) {
          return F !== "key";
        });
        O = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", _[k + O] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          k,
          W,
          k
        ), _[k + O] = !0);
      }
      if (k = null, I !== void 0 && (t(I), k = "" + I), a(A) && (t(A.key), k = "" + A.key), "key" in A) {
        I = {};
        for (var Z in A)
          Z !== "key" && (I[Z] = A[Z]);
      } else I = A;
      return k && s(
        I,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), u(
        b,
        k,
        I,
        o(),
        G,
        V
      );
    }
    function f(b) {
      m(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === L && (b._payload.status === "fulfilled" ? m(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function m(b) {
      return typeof b == "object" && b !== null && b.$$typeof === x;
    }
    var g = ie, x = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), P = /* @__PURE__ */ Symbol.for("react.suspense_list"), j = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), J = /* @__PURE__ */ Symbol.for("react.client.reference"), q = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, H = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var $, ee = {}, R = g.react_stack_bottom_frame.bind(
      g,
      i
    )(), M = Q(r(i)), _ = {};
    Ht.Fragment = h, Ht.jsx = function(b, A, I) {
      var O = 1e4 > q.recentlyCreatedOwnerStacks++;
      return p(
        b,
        A,
        I,
        !1,
        O ? Error("react-stack-top-frame") : R,
        O ? Q(r(b)) : M
      );
    }, Ht.jsxs = function(b, A, I) {
      var O = 1e4 > q.recentlyCreatedOwnerStacks++;
      return p(
        b,
        A,
        I,
        !0,
        O ? Error("react-stack-top-frame") : R,
        O ? Q(r(b)) : M
      );
    };
  })()), Ht;
}
var xi;
function xd() {
  return xi || (xi = 1, process.env.NODE_ENV === "production" ? fn.exports = gd() : fn.exports = hd()), fn.exports;
}
var c = xd();
function bd(e, n) {
  const t = d.createContext(n), r = (i) => {
    const { children: a, ...s } = i, l = d.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ c.jsx(t.Provider, { value: l, children: a });
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
function Xe(e, n = []) {
  let t = [];
  function r(i, a) {
    const s = d.createContext(a), l = t.length;
    t = [...t, a];
    const u = (f) => {
      const { scope: m, children: g, ...x } = f, v = m?.[e]?.[l] || s, h = d.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ c.jsx(v.Provider, { value: h, children: g });
    };
    u.displayName = i + "Provider";
    function p(f, m) {
      const g = m?.[e]?.[l] || s, x = d.useContext(g);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, p];
  }
  const o = () => {
    const i = t.map((a) => d.createContext(a));
    return function(s) {
      const l = s?.[e] || i;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, yd(o, ...n)];
}
function yd(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((s, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return { ...s, ...f };
      }, {});
      return d.useMemo(() => ({ [`__scope${n.scopeName}`]: a }), [a]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
function bi(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function Je(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const i = bi(o, n);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : bi(e[o], null);
        }
      };
  };
}
function ce(...e) {
  return d.useCallback(Je(...e), e);
}
function X(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e?.(o), t === !1 || !o.defaultPrevented)
      return n?.(o);
  };
}
var _e = globalThis?.document ? d.useLayoutEffect : () => {
}, wd = d[" useId ".trim().toString()] || (() => {
}), Cd = 0;
function Oe(e) {
  const [n, t] = d.useState(wd());
  return _e(() => {
    t((r) => r ?? String(Cd++));
  }, [e]), e || (n ? `radix-${n}` : "");
}
var Ed = d[" useInsertionEffect ".trim().toString()] || _e;
function mt({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, i, a] = Sd({
    defaultProp: n,
    onChange: t
  }), s = e !== void 0, l = s ? e : o;
  {
    const p = d.useRef(e !== void 0);
    d.useEffect(() => {
      const f = p.current;
      f !== s && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), p.current = s;
    }, [s, r]);
  }
  const u = d.useCallback(
    (p) => {
      if (s) {
        const f = kd(p) ? p(e) : p;
        f !== e && a.current?.(f);
      } else
        i(p);
    },
    [s, e, i, a]
  );
  return [l, u];
}
function Sd({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = d.useState(e), o = d.useRef(t), i = d.useRef(n);
  return Ed(() => {
    i.current = n;
  }, [n]), d.useEffect(() => {
    o.current !== t && (i.current?.(t), o.current = t);
  }, [t, o]), [t, r, i];
}
function kd(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function _d(e) {
  const n = /* @__PURE__ */ Rd(e), t = d.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = d.Children.toArray(i), l = s.find(Pd);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Rd(e) {
  const n = d.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (d.isValidElement(o)) {
      const a = Td(o), s = Ad(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? Je(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var jd = /* @__PURE__ */ Symbol("radix.slottable");
function Pd(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === jd;
}
function Ad(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], i = n[r];
    /^on[A-Z]/.test(r) ? o && i ? t[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...i } : r === "className" && (t[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Td(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Od = [
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
], se = Od.reduce((e, n) => {
  const t = /* @__PURE__ */ _d(`Primitive.${n}`), r = d.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, l = a ? t : n;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function Va(e, n) {
  e && Kn.flushSync(() => e.dispatchEvent(n));
}
function Ie(e) {
  const n = d.useRef(e);
  return d.useEffect(() => {
    n.current = e;
  }), d.useMemo(() => (...t) => n.current?.(...t), []);
}
function Md(e, n = globalThis?.document) {
  const t = Ie(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && t(o);
    };
    return n.addEventListener("keydown", r, { capture: !0 }), () => n.removeEventListener("keydown", r, { capture: !0 });
  }, [t, n]);
}
var Dd = "DismissableLayer", Xr = "dismissableLayer.update", Nd = "dismissableLayer.pointerDownOutside", Id = "dismissableLayer.focusOutside", yi, Wa = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), rn = d.forwardRef(
  (e, n) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...l
    } = e, u = d.useContext(Wa), [p, f] = d.useState(null), m = p?.ownerDocument ?? globalThis?.document, [, g] = d.useState({}), x = ce(n, (P) => f(P)), v = Array.from(u.layers), [h] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(h), w = p ? v.indexOf(p) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= y, C = zd((P) => {
      const j = P.target, L = [...u.branches].some((B) => B.contains(j));
      !S || L || (o?.(P), a?.(P), P.defaultPrevented || s?.());
    }, m), D = $d((P) => {
      const j = P.target;
      [...u.branches].some((B) => B.contains(j)) || (i?.(P), a?.(P), P.defaultPrevented || s?.());
    }, m);
    return Md((P) => {
      w === u.layers.size - 1 && (r?.(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
    }, m), d.useEffect(() => {
      if (p)
        return t && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (yi = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(p)), u.layers.add(p), wi(), () => {
          t && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = yi);
        };
    }, [p, m, t, u]), d.useEffect(() => () => {
      p && (u.layers.delete(p), u.layersWithOutsidePointerEventsDisabled.delete(p), wi());
    }, [p, u]), d.useEffect(() => {
      const P = () => g({});
      return document.addEventListener(Xr, P), () => document.removeEventListener(Xr, P);
    }, []), /* @__PURE__ */ c.jsx(
      se.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: E ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: X(e.onFocusCapture, D.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, D.onBlurCapture),
        onPointerDownCapture: X(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
rn.displayName = Dd;
var Ld = "DismissableLayerBranch", Fd = d.forwardRef((e, n) => {
  const t = d.useContext(Wa), r = d.useRef(null), o = ce(n, r);
  return d.useEffect(() => {
    const i = r.current;
    if (i)
      return t.branches.add(i), () => {
        t.branches.delete(i);
      };
  }, [t.branches]), /* @__PURE__ */ c.jsx(se.div, { ...e, ref: o });
});
Fd.displayName = Ld;
function zd(e, n = globalThis?.document) {
  const t = Ie(e), r = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Ba(
            Nd,
            t,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (n.removeEventListener("click", o.current), o.current = l, n.addEventListener("click", o.current, { once: !0 })) : l();
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
function $d(e, n = globalThis?.document) {
  const t = Ie(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Ba(Id, t, { originalEvent: i }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", o), () => n.removeEventListener("focusin", o);
  }, [n, t]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function wi() {
  const e = new CustomEvent(Xr);
  document.dispatchEvent(e);
}
function Ba(e, n, t, { discrete: r }) {
  const o = t.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  n && o.addEventListener(e, n, { once: !0 }), r ? Va(o, i) : o.dispatchEvent(i);
}
var Er = "focusScope.autoFocusOnMount", Sr = "focusScope.autoFocusOnUnmount", Ci = { bubbles: !1, cancelable: !0 }, Vd = "FocusScope", Zn = d.forwardRef((e, n) => {
  const {
    loop: t = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, l] = d.useState(null), u = Ie(o), p = Ie(i), f = d.useRef(null), m = ce(n, (v) => l(v)), g = d.useRef({
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
      let v = function(E) {
        if (g.paused || !s) return;
        const S = E.target;
        s.contains(S) ? f.current = S : it(f.current, { select: !0 });
      }, h = function(E) {
        if (g.paused || !s) return;
        const S = E.relatedTarget;
        S !== null && (s.contains(S) || it(f.current, { select: !0 }));
      }, y = function(E) {
        if (document.activeElement === document.body)
          for (const C of E)
            C.removedNodes.length > 0 && it(s);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", h);
      const w = new MutationObserver(y);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", h), w.disconnect();
      };
    }
  }, [r, s, g.paused]), d.useEffect(() => {
    if (s) {
      Si.add(g);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const y = new CustomEvent(Er, Ci);
        s.addEventListener(Er, u), s.dispatchEvent(y), y.defaultPrevented || (Wd(qd(Ha(s)), { select: !0 }), document.activeElement === v && it(s));
      }
      return () => {
        s.removeEventListener(Er, u), setTimeout(() => {
          const y = new CustomEvent(Sr, Ci);
          s.addEventListener(Sr, p), s.dispatchEvent(y), y.defaultPrevented || it(v ?? document.body, { select: !0 }), s.removeEventListener(Sr, p), Si.remove(g);
        }, 0);
      };
    }
  }, [s, u, p, g]);
  const x = d.useCallback(
    (v) => {
      if (!t && !r || g.paused) return;
      const h = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, y = document.activeElement;
      if (h && y) {
        const w = v.currentTarget, [E, S] = Bd(w);
        E && S ? !v.shiftKey && y === S ? (v.preventDefault(), t && it(E, { select: !0 })) : v.shiftKey && y === E && (v.preventDefault(), t && it(S, { select: !0 })) : y === w && v.preventDefault();
      }
    },
    [t, r, g.paused]
  );
  return /* @__PURE__ */ c.jsx(se.div, { tabIndex: -1, ...a, ref: m, onKeyDown: x });
});
Zn.displayName = Vd;
function Wd(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const r of e)
    if (it(r, { select: n }), document.activeElement !== t) return;
}
function Bd(e) {
  const n = Ha(e), t = Ei(n, e), r = Ei(n.reverse(), e);
  return [t, r];
}
function Ha(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function Ei(e, n) {
  for (const t of e)
    if (!Hd(t, { upTo: n })) return t;
}
function Hd(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ud(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function it(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== t && Ud(e) && n && e.select();
  }
}
var Si = Gd();
function Gd() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && t?.pause(), e = ki(e, n), e.unshift(n);
    },
    remove(n) {
      e = ki(e, n), e[0]?.resume();
    }
  };
}
function ki(e, n) {
  const t = [...e], r = t.indexOf(n);
  return r !== -1 && t.splice(r, 1), t;
}
function qd(e) {
  return e.filter((n) => n.tagName !== "A");
}
var Yd = "Portal", Xn = d.forwardRef((e, n) => {
  const { container: t, ...r } = e, [o, i] = d.useState(!1);
  _e(() => i(!0), []);
  const a = t || o && globalThis?.document?.body;
  return a ? vd.createPortal(/* @__PURE__ */ c.jsx(se.div, { ...r, ref: n }), a) : null;
});
Xn.displayName = Yd;
function Kd(e, n) {
  return d.useReducer((t, r) => n[t][r] ?? t, e);
}
var Qe = (e) => {
  const { present: n, children: t } = e, r = Zd(n), o = typeof t == "function" ? t({ present: r.isPresent }) : d.Children.only(t), i = ce(r.ref, Xd(o));
  return typeof t == "function" || r.isPresent ? d.cloneElement(o, { ref: i }) : null;
};
Qe.displayName = "Presence";
function Zd(e) {
  const [n, t] = d.useState(), r = d.useRef(null), o = d.useRef(e), i = d.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = Kd(a, {
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
    const u = mn(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [s]), _e(() => {
    const u = r.current, p = o.current;
    if (p !== e) {
      const m = i.current, g = mn(u);
      e ? l("MOUNT") : g === "none" || u?.display === "none" ? l("UNMOUNT") : l(p && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), _e(() => {
    if (n) {
      let u;
      const p = n.ownerDocument.defaultView ?? window, f = (g) => {
        const v = mn(r.current).includes(CSS.escape(g.animationName));
        if (g.target === n && v && (l("ANIMATION_END"), !o.current)) {
          const h = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", u = p.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = h);
          });
        }
      }, m = (g) => {
        g.target === n && (i.current = mn(r.current));
      };
      return n.addEventListener("animationstart", m), n.addEventListener("animationcancel", f), n.addEventListener("animationend", f), () => {
        p.clearTimeout(u), n.removeEventListener("animationstart", m), n.removeEventListener("animationcancel", f), n.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [n, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: d.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, t(u);
    }, [])
  };
}
function mn(e) {
  return e?.animationName || "none";
}
function Xd(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var kr = 0;
function wo() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? _i()), document.body.insertAdjacentElement("beforeend", e[1] ?? _i()), kr++, () => {
      kr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), kr--;
    };
  }, []);
}
function _i() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Jr = function(e, n) {
  return Jr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, Jr(e, n);
};
function Jd(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Jr(e, n);
  function t() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
var ge = function() {
  return ge = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, ge.apply(this, arguments);
};
function Ua(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
}
function yt(e, n, t, r) {
  function o(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function s(p) {
      try {
        u(r.next(p));
      } catch (f) {
        a(f);
      }
    }
    function l(p) {
      try {
        u(r.throw(p));
      } catch (f) {
        a(f);
      }
    }
    function u(p) {
      p.done ? i(p.value) : o(p.value).then(s, l);
    }
    u((r = r.apply(e, n || [])).next());
  });
}
function Qd(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
var jn = "right-scroll-bar-position", Pn = "width-before-scroll-bar", eu = "with-scroll-bars-hidden", tu = "--removed-body-scroll-bar-size";
function _r(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function nu(e, n) {
  var t = We(function() {
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
var ru = typeof window < "u" ? d.useLayoutEffect : d.useEffect, Ri = /* @__PURE__ */ new WeakMap();
function ou(e, n) {
  var t = nu(null, function(r) {
    return e.forEach(function(o) {
      return _r(o, r);
    });
  });
  return ru(function() {
    var r = Ri.get(t);
    if (r) {
      var o = new Set(r), i = new Set(e), a = t.current;
      o.forEach(function(s) {
        i.has(s) || _r(s, null);
      }), i.forEach(function(s) {
        o.has(s) || _r(s, a);
      });
    }
    Ri.set(t, e);
  }, [e]), t;
}
function iu(e) {
  return e;
}
function au(e, n) {
  n === void 0 && (n = iu);
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
      var l = function() {
        var p = a;
        a = [], p.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), t = {
        push: function(p) {
          a.push(p), u();
        },
        filter: function(p) {
          return a = a.filter(p), t;
        }
      };
    }
  };
  return o;
}
function su(e) {
  e === void 0 && (e = {});
  var n = au(null);
  return n.options = ge({ async: !0, ssr: !1 }, e), n;
}
var Ga = function(e) {
  var n = e.sideCar, t = Ua(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = n.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return d.createElement(r, ge({}, t));
};
Ga.isSideCarExport = !0;
function cu(e, n) {
  return e.useMedium(n), Ga;
}
var qa = su(), Rr = function() {
}, Jn = d.forwardRef(function(e, n) {
  var t = d.useRef(null), r = d.useState({
    onScrollCapture: Rr,
    onWheelCapture: Rr,
    onTouchMoveCapture: Rr
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, p = e.enabled, f = e.shards, m = e.sideCar, g = e.noRelative, x = e.noIsolation, v = e.inert, h = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, E = e.gapMode, S = Ua(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = m, D = ou([t, n]), P = ge(ge({}, S), o);
  return d.createElement(
    d.Fragment,
    null,
    p && d.createElement(C, { sideCar: qa, removeScrollBar: u, shards: f, noRelative: g, noIsolation: x, inert: v, setCallbacks: i, allowPinchZoom: !!h, lockRef: t, gapMode: E }),
    a ? d.cloneElement(d.Children.only(s), ge(ge({}, P), { ref: D })) : d.createElement(w, ge({}, P, { className: l, ref: D }), s)
  );
});
Jn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Jn.classNames = {
  fullWidth: Pn,
  zeroRight: jn
};
var lu = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function du() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = lu();
  return n && e.setAttribute("nonce", n), e;
}
function uu(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function pu(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var fu = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = du()) && (uu(n, t), pu(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, mu = function() {
  var e = fu();
  return function(n, t) {
    d.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, Ya = function() {
  var e = mu(), n = function(t) {
    var r = t.styles, o = t.dynamic;
    return e(r, o), null;
  };
  return n;
}, vu = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, jr = function(e) {
  return parseInt(e || "", 10) || 0;
}, gu = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], r = n[e === "padding" ? "paddingTop" : "marginTop"], o = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [jr(t), jr(r), jr(o)];
}, hu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return vu;
  var n = gu(e), t = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, r - t + n[2] - n[0])
  };
}, xu = Ya(), Rt = "data-scroll-locked", bu = function(e, n, t, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(eu, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Rt, `] {
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
  
  .`).concat(jn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Pn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(jn, " .").concat(jn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Pn, " .").concat(Pn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Rt, `] {
    `).concat(tu, ": ").concat(s, `px;
  }
`);
}, ji = function() {
  var e = parseInt(document.body.getAttribute(Rt) || "0", 10);
  return isFinite(e) ? e : 0;
}, yu = function() {
  d.useEffect(function() {
    return document.body.setAttribute(Rt, (ji() + 1).toString()), function() {
      var e = ji() - 1;
      e <= 0 ? document.body.removeAttribute(Rt) : document.body.setAttribute(Rt, e.toString());
    };
  }, []);
}, wu = function(e) {
  var n = e.noRelative, t = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  yu();
  var i = d.useMemo(function() {
    return hu(o);
  }, [o]);
  return d.createElement(xu, { styles: bu(i, !n, o, t ? "" : "!important") });
}, Qr = !1;
if (typeof window < "u")
  try {
    var vn = Object.defineProperty({}, "passive", {
      get: function() {
        return Qr = !0, !0;
      }
    });
    window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
  } catch {
    Qr = !1;
  }
var Et = Qr ? { passive: !1 } : !1, Cu = function(e) {
  return e.tagName === "TEXTAREA";
}, Ka = function(e, n) {
  if (!(e instanceof Element))
    return !1;
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !Cu(e) && t[n] === "visible")
  );
}, Eu = function(e) {
  return Ka(e, "overflowY");
}, Su = function(e) {
  return Ka(e, "overflowX");
}, Pi = function(e, n) {
  var t = n.ownerDocument, r = n;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Za(e, r);
    if (o) {
      var i = Xa(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== t.body);
  return !1;
}, ku = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, r = e.clientHeight;
  return [
    n,
    t,
    r
  ];
}, _u = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, r = e.clientWidth;
  return [
    n,
    t,
    r
  ];
}, Za = function(e, n) {
  return e === "v" ? Eu(n) : Su(n);
}, Xa = function(e, n) {
  return e === "v" ? ku(n) : _u(n);
}, Ru = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, ju = function(e, n, t, r, o) {
  var i = Ru(e, window.getComputedStyle(n).direction), a = i * r, s = t.target, l = n.contains(s), u = !1, p = a > 0, f = 0, m = 0;
  do {
    if (!s)
      break;
    var g = Xa(e, s), x = g[0], v = g[1], h = g[2], y = v - h - i * x;
    (x || y) && Za(e, s) && (f += y, m += x);
    var w = s.parentNode;
    s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (n.contains(s) || n === s)
  );
  return (p && Math.abs(f) < 1 || !p && Math.abs(m) < 1) && (u = !0), u;
}, gn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ai = function(e) {
  return [e.deltaX, e.deltaY];
}, Ti = function(e) {
  return e && "current" in e ? e.current : e;
}, Pu = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, Au = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Tu = 0, St = [];
function Ou(e) {
  var n = d.useRef([]), t = d.useRef([0, 0]), r = d.useRef(), o = d.useState(Tu++)[0], i = d.useState(Ya)[0], a = d.useRef(e);
  d.useEffect(function() {
    a.current = e;
  }, [e]), d.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Qd([e.lockRef.current], (e.shards || []).map(Ti), !0).filter(Boolean);
      return v.forEach(function(h) {
        return h.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(h) {
          return h.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = d.useCallback(function(v, h) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = gn(v), w = t.current, E = "deltaX" in v ? v.deltaX : w[0] - y[0], S = "deltaY" in v ? v.deltaY : w[1] - y[1], C, D = v.target, P = Math.abs(E) > Math.abs(S) ? "h" : "v";
    if ("touches" in v && P === "h" && D.type === "range")
      return !1;
    var j = window.getSelection(), L = j && j.anchorNode, B = L ? L === D || L.contains(D) : !1;
    if (B)
      return !1;
    var J = Pi(P, D);
    if (!J)
      return !0;
    if (J ? C = P : (C = P === "v" ? "h" : "v", J = Pi(P, D)), !J)
      return !1;
    if (!r.current && "changedTouches" in v && (E || S) && (r.current = C), !C)
      return !0;
    var q = r.current || C;
    return ju(q, h, v, q === "h" ? E : S);
  }, []), l = d.useCallback(function(v) {
    var h = v;
    if (!(!St.length || St[St.length - 1] !== i)) {
      var y = "deltaY" in h ? Ai(h) : gn(h), w = n.current.filter(function(C) {
        return C.name === h.type && (C.target === h.target || h.target === C.shadowParent) && Pu(C.delta, y);
      })[0];
      if (w && w.should) {
        h.cancelable && h.preventDefault();
        return;
      }
      if (!w) {
        var E = (a.current.shards || []).map(Ti).filter(Boolean).filter(function(C) {
          return C.contains(h.target);
        }), S = E.length > 0 ? s(h, E[0]) : !a.current.noIsolation;
        S && h.cancelable && h.preventDefault();
      }
    }
  }, []), u = d.useCallback(function(v, h, y, w) {
    var E = { name: v, delta: h, target: y, should: w, shadowParent: Mu(y) };
    n.current.push(E), setTimeout(function() {
      n.current = n.current.filter(function(S) {
        return S !== E;
      });
    }, 1);
  }, []), p = d.useCallback(function(v) {
    t.current = gn(v), r.current = void 0;
  }, []), f = d.useCallback(function(v) {
    u(v.type, Ai(v), v.target, s(v, e.lockRef.current));
  }, []), m = d.useCallback(function(v) {
    u(v.type, gn(v), v.target, s(v, e.lockRef.current));
  }, []);
  d.useEffect(function() {
    return St.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, Et), document.addEventListener("touchmove", l, Et), document.addEventListener("touchstart", p, Et), function() {
      St = St.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", l, Et), document.removeEventListener("touchmove", l, Et), document.removeEventListener("touchstart", p, Et);
    };
  }, []);
  var g = e.removeScrollBar, x = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    x ? d.createElement(i, { styles: Au(o) }) : null,
    g ? d.createElement(wu, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Mu(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
  return n;
}
const Du = cu(qa, Ou);
var Qn = d.forwardRef(function(e, n) {
  return d.createElement(Jn, ge({}, e, { ref: n, sideCar: Du }));
});
Qn.classNames = Jn.classNames;
var Nu = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, kt = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), xn = {}, Pr = 0, Ja = function(e) {
  return e && (e.host || Ja(e.parentNode));
}, Iu = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var r = Ja(t);
    return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, Lu = function(e, n, t, r) {
  var o = Iu(n, Array.isArray(e) ? e : [e]);
  xn[t] || (xn[t] = /* @__PURE__ */ new WeakMap());
  var i = xn[t], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var p = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (s.has(m))
        p(m);
      else
        try {
          var g = m.getAttribute(r), x = g !== null && g !== "false", v = (kt.get(m) || 0) + 1, h = (i.get(m) || 0) + 1;
          kt.set(m, v), i.set(m, h), a.push(m), v === 1 && x && hn.set(m, !0), h === 1 && m.setAttribute(t, "true"), x || m.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return p(n), s.clear(), Pr++, function() {
    a.forEach(function(f) {
      var m = kt.get(f) - 1, g = i.get(f) - 1;
      kt.set(f, m), i.set(f, g), m || (hn.has(f) || f.removeAttribute(r), hn.delete(f)), g || f.removeAttribute(t);
    }), Pr--, Pr || (kt = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), xn = {});
  };
}, Co = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Nu(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Lu(r, o, t, "aria-hidden")) : function() {
    return null;
  };
};
// @__NO_SIDE_EFFECTS__
function Fu(e) {
  const n = /* @__PURE__ */ zu(e), t = d.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = d.Children.toArray(i), l = s.find(Vu);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function zu(e) {
  const n = d.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (d.isValidElement(o)) {
      const a = Bu(o), s = Wu(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? Je(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var $u = /* @__PURE__ */ Symbol("radix.slottable");
function Vu(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === $u;
}
function Wu(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], i = n[r];
    /^on[A-Z]/.test(r) ? o && i ? t[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...i } : r === "className" && (t[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Bu(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var er = "Dialog", [Qa, es] = Xe(er), [Hu, ze] = Qa(er), Eo = (e) => {
  const {
    __scopeDialog: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = d.useRef(null), l = d.useRef(null), [u, p] = mt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: er
  });
  return /* @__PURE__ */ c.jsx(
    Hu,
    {
      scope: n,
      triggerRef: s,
      contentRef: l,
      contentId: Oe(),
      titleId: Oe(),
      descriptionId: Oe(),
      open: u,
      onOpenChange: p,
      onOpenToggle: d.useCallback(() => p((f) => !f), [p]),
      modal: a,
      children: t
    }
  );
};
Eo.displayName = er;
var ts = "DialogTrigger", So = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = ze(ts, t), i = ce(n, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      se.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Oo(o.open),
        ...r,
        ref: i,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
So.displayName = ts;
var ko = "DialogPortal", [Uu, ns] = Qa(ko, {
  forceMount: void 0
}), _o = (e) => {
  const { __scopeDialog: n, forceMount: t, children: r, container: o } = e, i = ze(ko, n);
  return /* @__PURE__ */ c.jsx(Uu, { scope: n, forceMount: t, children: d.Children.map(r, (a) => /* @__PURE__ */ c.jsx(Qe, { present: t || i.open, children: /* @__PURE__ */ c.jsx(Xn, { asChild: !0, container: o, children: a }) })) });
};
_o.displayName = ko;
var On = "DialogOverlay", Ro = d.forwardRef(
  (e, n) => {
    const t = ns(On, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, i = ze(On, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ c.jsx(Qe, { present: r || i.open, children: /* @__PURE__ */ c.jsx(qu, { ...o, ref: n }) }) : null;
  }
);
Ro.displayName = On;
var Gu = /* @__PURE__ */ Fu("DialogOverlay.RemoveScroll"), qu = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = ze(On, t);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Qn, { as: Gu, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        se.div,
        {
          "data-state": Oo(o.open),
          ...r,
          ref: n,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), vt = "DialogContent", jo = d.forwardRef(
  (e, n) => {
    const t = ns(vt, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, i = ze(vt, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(Qe, { present: r || i.open, children: i.modal ? /* @__PURE__ */ c.jsx(Yu, { ...o, ref: n }) : /* @__PURE__ */ c.jsx(Ku, { ...o, ref: n }) });
  }
);
jo.displayName = vt;
var Yu = d.forwardRef(
  (e, n) => {
    const t = ze(vt, e.__scopeDialog), r = d.useRef(null), o = ce(n, t.contentRef, r);
    return d.useEffect(() => {
      const i = r.current;
      if (i) return Co(i);
    }, []), /* @__PURE__ */ c.jsx(
      rs,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), t.triggerRef.current?.focus();
        }),
        onPointerDownOutside: X(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && i.preventDefault();
        }),
        onFocusOutside: X(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), Ku = d.forwardRef(
  (e, n) => {
    const t = ze(vt, e.__scopeDialog), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      rs,
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
), rs = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = ze(vt, t), l = d.useRef(null), u = ce(n, l);
    return wo(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        Zn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ c.jsx(
            rn,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Oo(s.open),
              ...a,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(Xu, { titleId: s.titleId }),
        /* @__PURE__ */ c.jsx(Qu, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Po = "DialogTitle", Ao = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = ze(Po, t);
    return /* @__PURE__ */ c.jsx(se.h2, { id: o.titleId, ...r, ref: n });
  }
);
Ao.displayName = Po;
var os = "DialogDescription", To = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = ze(os, t);
    return /* @__PURE__ */ c.jsx(se.p, { id: o.descriptionId, ...r, ref: n });
  }
);
To.displayName = os;
var is = "DialogClose", on = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = ze(is, t);
    return /* @__PURE__ */ c.jsx(
      se.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
on.displayName = is;
function Oo(e) {
  return e ? "open" : "closed";
}
var as = "DialogTitleWarning", [Zu, ss] = bd(as, {
  contentName: vt,
  titleName: Po,
  docsSlug: "dialog"
}), Xu = ({ titleId: e }) => {
  const n = ss(as), t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
  return d.useEffect(() => {
    e && (document.getElementById(e) || console.error(t));
  }, [t, e]), null;
}, Ju = "DialogDescriptionWarning", Qu = ({ contentRef: e, descriptionId: n }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ss(Ju).contentName}}.`;
  return d.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    n && o && (document.getElementById(n) || console.warn(r));
  }, [r, e, n]), null;
}, ep = Eo, tp = So, np = _o, rp = Ro, op = jo, ip = Ao, ap = To, cs = on, sp = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function cp(e) {
  const n = ({ children: t }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = sp, n;
}
var ls = "AlertDialog", [lp] = Xe(ls, [
  es
]), et = es(), ds = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = et(n);
  return /* @__PURE__ */ c.jsx(ep, { ...r, ...t, modal: !0 });
};
ds.displayName = ls;
var dp = "AlertDialogTrigger", up = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = et(t);
    return /* @__PURE__ */ c.jsx(tp, { ...o, ...r, ref: n });
  }
);
up.displayName = dp;
var pp = "AlertDialogPortal", us = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = et(n);
  return /* @__PURE__ */ c.jsx(np, { ...r, ...t });
};
us.displayName = pp;
var fp = "AlertDialogOverlay", ps = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = et(t);
    return /* @__PURE__ */ c.jsx(rp, { ...o, ...r, ref: n });
  }
);
ps.displayName = fp;
var jt = "AlertDialogContent", [mp, vp] = lp(jt), gp = /* @__PURE__ */ cp("AlertDialogContent"), fs = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, children: r, ...o } = e, i = et(t), a = d.useRef(null), s = ce(n, a), l = d.useRef(null);
    return /* @__PURE__ */ c.jsx(
      Zu,
      {
        contentName: jt,
        titleName: ms,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ c.jsx(mp, { scope: t, cancelRef: l, children: /* @__PURE__ */ c.jsxs(
          op,
          {
            role: "alertdialog",
            ...i,
            ...o,
            ref: s,
            onOpenAutoFocus: X(o.onOpenAutoFocus, (u) => {
              u.preventDefault(), l.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (u) => u.preventDefault(),
            onInteractOutside: (u) => u.preventDefault(),
            children: [
              /* @__PURE__ */ c.jsx(gp, { children: r }),
              /* @__PURE__ */ c.jsx(xp, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
fs.displayName = jt;
var ms = "AlertDialogTitle", vs = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = et(t);
    return /* @__PURE__ */ c.jsx(ip, { ...o, ...r, ref: n });
  }
);
vs.displayName = ms;
var gs = "AlertDialogDescription", hs = d.forwardRef((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = et(t);
  return /* @__PURE__ */ c.jsx(ap, { ...o, ...r, ref: n });
});
hs.displayName = gs;
var hp = "AlertDialogAction", xs = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = et(t);
    return /* @__PURE__ */ c.jsx(cs, { ...o, ...r, ref: n });
  }
);
xs.displayName = hp;
var bs = "AlertDialogCancel", ys = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, { cancelRef: o } = vp(bs, t), i = et(t), a = ce(n, o);
    return /* @__PURE__ */ c.jsx(cs, { ...i, ...r, ref: a });
  }
);
ys.displayName = bs;
var xp = ({ contentRef: e }) => {
  const n = `\`${jt}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${jt}\` by passing a \`${gs}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${jt}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return d.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(n);
  }, [n, e]), null;
}, bp = ds, yp = us, wp = ps, Cp = fs, ny = xs, ry = ys, Ep = vs, Oi = hs, Sp = /* @__PURE__ */ Symbol.for("react.lazy"), Mn = d[" use ".trim().toString()];
function kp(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function ws(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Sp && "_payload" in e && kp(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Cs(e) {
  const n = /* @__PURE__ */ _p(e), t = d.forwardRef((r, o) => {
    let { children: i, ...a } = r;
    ws(i) && typeof Mn == "function" && (i = Mn(i._payload));
    const s = d.Children.toArray(i), l = s.find(jp);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
var tr = /* @__PURE__ */ Cs("Slot");
// @__NO_SIDE_EFFECTS__
function _p(e) {
  const n = d.forwardRef((t, r) => {
    let { children: o, ...i } = t;
    if (ws(o) && typeof Mn == "function" && (o = Mn(o._payload)), d.isValidElement(o)) {
      const a = Ap(o), s = Pp(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? Je(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Rp = /* @__PURE__ */ Symbol("radix.slottable");
function jp(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Rp;
}
function Pp(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], i = n[r];
    /^on[A-Z]/.test(r) ? o && i ? t[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...i } : r === "className" && (t[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Ap(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Tp = [
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
], Op = Tp.reduce((e, n) => {
  const t = /* @__PURE__ */ Cs(`Primitive.${n}`), r = d.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, l = a ? t : n;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), Mp = Object.freeze({
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
}), Dp = "VisuallyHidden", Es = d.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(
    Op.span,
    {
      ...e,
      ref: n,
      style: { ...Mp, ...e.style }
    }
  )
);
Es.displayName = Dp;
var Np = Es;
function Ss(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = Ss(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function ks() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = Ss(e)) && (r && (r += " "), r += n);
  return r;
}
const Ip = (e, n) => {
  const t = new Array(e.length + n.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e[r];
  for (let r = 0; r < n.length; r++)
    t[e.length + r] = n[r];
  return t;
}, Lp = (e, n) => ({
  classGroupId: e,
  validator: n
}), _s = (e = /* @__PURE__ */ new Map(), n = null, t) => ({
  nextPart: e,
  validators: n,
  classGroupId: t
}), Dn = "-", Mi = [], Fp = "arbitrary..", zp = (e) => {
  const n = Vp(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return $p(a);
      const s = a.split(Dn), l = s[0] === "" && s.length > 1 ? 1 : 0;
      return Rs(s, l, n);
    },
    getConflictingClassGroupIds: (a, s) => {
      if (s) {
        const l = r[a], u = t[a];
        return l ? u ? Ip(u, l) : l : u || Mi;
      }
      return t[a] || Mi;
    }
  };
}, Rs = (e, n, t) => {
  if (e.length - n === 0)
    return t.classGroupId;
  const o = e[n], i = t.nextPart.get(o);
  if (i) {
    const u = Rs(e, n + 1, i);
    if (u) return u;
  }
  const a = t.validators;
  if (a === null)
    return;
  const s = n === 0 ? e.join(Dn) : e.slice(n).join(Dn), l = a.length;
  for (let u = 0; u < l; u++) {
    const p = a[u];
    if (p.validator(s))
      return p.classGroupId;
  }
}, $p = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), t = n.indexOf(":"), r = n.slice(0, t);
  return r ? Fp + r : void 0;
})(), Vp = (e) => {
  const {
    theme: n,
    classGroups: t
  } = e;
  return Wp(t, n);
}, Wp = (e, n) => {
  const t = _s();
  for (const r in e) {
    const o = e[r];
    Mo(o, t, r, n);
  }
  return t;
}, Mo = (e, n, t, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const a = e[i];
    Bp(a, n, t, r);
  }
}, Bp = (e, n, t, r) => {
  if (typeof e == "string") {
    Hp(e, n, t);
    return;
  }
  if (typeof e == "function") {
    Up(e, n, t, r);
    return;
  }
  Gp(e, n, t, r);
}, Hp = (e, n, t) => {
  const r = e === "" ? n : js(n, e);
  r.classGroupId = t;
}, Up = (e, n, t, r) => {
  if (qp(e)) {
    Mo(e(r), n, t, r);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(Lp(t, e));
}, Gp = (e, n, t, r) => {
  const o = Object.entries(e), i = o.length;
  for (let a = 0; a < i; a++) {
    const [s, l] = o[a];
    Mo(l, js(n, s), t, r);
  }
}, js = (e, n) => {
  let t = e;
  const r = n.split(Dn), o = r.length;
  for (let i = 0; i < o; i++) {
    const a = r[i];
    let s = t.nextPart.get(a);
    s || (s = _s(), t.nextPart.set(a, s)), t = s;
  }
  return t;
}, qp = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Yp = (e) => {
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
}, eo = "!", Di = ":", Kp = [], Ni = (e, n, t, r, o) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: t,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Zp = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: t
  } = e;
  let r = (o) => {
    const i = [];
    let a = 0, s = 0, l = 0, u;
    const p = o.length;
    for (let v = 0; v < p; v++) {
      const h = o[v];
      if (a === 0 && s === 0) {
        if (h === Di) {
          i.push(o.slice(l, v)), l = v + 1;
          continue;
        }
        if (h === "/") {
          u = v;
          continue;
        }
      }
      h === "[" ? a++ : h === "]" ? a-- : h === "(" ? s++ : h === ")" && s--;
    }
    const f = i.length === 0 ? o : o.slice(l);
    let m = f, g = !1;
    f.endsWith(eo) ? (m = f.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(eo) && (m = f.slice(1), g = !0)
    );
    const x = u && u > l ? u - l : void 0;
    return Ni(i, g, m, x);
  };
  if (n) {
    const o = n + Di, i = r;
    r = (a) => a.startsWith(o) ? i(a.slice(o.length)) : Ni(Kp, !1, a, void 0, !0);
  }
  if (t) {
    const o = r;
    r = (i) => t({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, Xp = (e) => {
  const n = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((t, r) => {
    n.set(t, 1e6 + r);
  }), (t) => {
    const r = [];
    let o = [];
    for (let i = 0; i < t.length; i++) {
      const a = t[i], s = a[0] === "[", l = n.has(a);
      s || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(a)) : o.push(a);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, Jp = (e) => ({
  cache: Yp(e.cacheSize),
  parseClassName: Zp(e),
  sortModifiers: Xp(e),
  ...zp(e)
}), Qp = /\s+/, ef = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = n, a = [], s = e.trim().split(Qp);
  let l = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const p = s[u], {
      isExternal: f,
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: v
    } = t(p);
    if (f) {
      l = p + (l.length > 0 ? " " + l : l);
      continue;
    }
    let h = !!v, y = r(h ? x.substring(0, v) : x);
    if (!y) {
      if (!h) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (y = r(x), !y) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      h = !1;
    }
    const w = m.length === 0 ? "" : m.length === 1 ? m[0] : i(m).join(":"), E = g ? w + eo : w, S = E + y;
    if (a.indexOf(S) > -1)
      continue;
    a.push(S);
    const C = o(y, h);
    for (let D = 0; D < C.length; ++D) {
      const P = C[D];
      a.push(E + P);
    }
    l = p + (l.length > 0 ? " " + l : l);
  }
  return l;
}, tf = (...e) => {
  let n = 0, t, r, o = "";
  for (; n < e.length; )
    (t = e[n++]) && (r = Ps(t)) && (o && (o += " "), o += r);
  return o;
}, Ps = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = Ps(e[r])) && (t && (t += " "), t += n);
  return t;
}, nf = (e, ...n) => {
  let t, r, o, i;
  const a = (l) => {
    const u = n.reduce((p, f) => f(p), e());
    return t = Jp(u), r = t.cache.get, o = t.cache.set, i = s, s(l);
  }, s = (l) => {
    const u = r(l);
    if (u)
      return u;
    const p = ef(l, t);
    return o(l, p), p;
  };
  return i = a, (...l) => i(tf(...l));
}, rf = [], we = (e) => {
  const n = (t) => t[e] || rf;
  return n.isThemeGetter = !0, n;
}, As = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ts = /^\((?:(\w[\w-]*):)?(.+)\)$/i, of = /^\d+\/\d+$/, af = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, sf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, cf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, lf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, df = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _t = (e) => of.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), ot = (e) => !!e && Number.isInteger(Number(e)), Ar = (e) => e.endsWith("%") && ae(e.slice(0, -1)), Ye = (e) => af.test(e), uf = () => !0, pf = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  sf.test(e) && !cf.test(e)
), Os = () => !1, ff = (e) => lf.test(e), mf = (e) => df.test(e), vf = (e) => !Y(e) && !K(e), gf = (e) => Dt(e, Ns, Os), Y = (e) => As.test(e), pt = (e) => Dt(e, Is, pf), Tr = (e) => Dt(e, wf, ae), Ii = (e) => Dt(e, Ms, Os), hf = (e) => Dt(e, Ds, mf), bn = (e) => Dt(e, Ls, ff), K = (e) => Ts.test(e), Ut = (e) => Nt(e, Is), xf = (e) => Nt(e, Cf), Li = (e) => Nt(e, Ms), bf = (e) => Nt(e, Ns), yf = (e) => Nt(e, Ds), yn = (e) => Nt(e, Ls, !0), Dt = (e, n, t) => {
  const r = As.exec(e);
  return r ? r[1] ? n(r[1]) : t(r[2]) : !1;
}, Nt = (e, n, t = !1) => {
  const r = Ts.exec(e);
  return r ? r[1] ? n(r[1]) : t : !1;
}, Ms = (e) => e === "position" || e === "percentage", Ds = (e) => e === "image" || e === "url", Ns = (e) => e === "length" || e === "size" || e === "bg-size", Is = (e) => e === "length", wf = (e) => e === "number", Cf = (e) => e === "family-name", Ls = (e) => e === "shadow", Ef = () => {
  const e = we("color"), n = we("font"), t = we("text"), r = we("font-weight"), o = we("tracking"), i = we("leading"), a = we("breakpoint"), s = we("container"), l = we("spacing"), u = we("radius"), p = we("shadow"), f = we("inset-shadow"), m = we("text-shadow"), g = we("drop-shadow"), x = we("blur"), v = we("perspective"), h = we("aspect"), y = we("ease"), w = we("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], C = () => [...S(), K, Y], D = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], j = () => [K, Y, l], L = () => [_t, "full", "auto", ...j()], B = () => [ot, "none", "subgrid", K, Y], J = () => ["auto", {
    span: ["full", ot, K, Y]
  }, ot, K, Y], q = () => [ot, "auto", K, Y], U = () => ["auto", "min", "max", "fr", K, Y], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...j()], ee = () => [_t, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()], R = () => [e, K, Y], M = () => [...S(), Li, Ii, {
    position: [K, Y]
  }], _ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], b = () => ["auto", "cover", "contain", bf, gf, {
    size: [K, Y]
  }], A = () => [Ar, Ut, pt], I = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    K,
    Y
  ], O = () => ["", ae, Ut, pt], G = () => ["solid", "dashed", "dotted", "double"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => [ae, Ar, Li, Ii], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    K,
    Y
  ], Z = () => ["none", ae, K, Y], F = () => ["none", ae, K, Y], re = () => [ae, K, Y], T = () => [_t, "full", ...j()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ye],
      breakpoint: [Ye],
      color: [uf],
      container: [Ye],
      "drop-shadow": [Ye],
      ease: ["in", "out", "in-out"],
      font: [vf],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ye],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ye],
      shadow: [Ye],
      spacing: ["px", ae],
      text: [Ye],
      "text-shadow": [Ye],
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
        aspect: ["auto", "square", _t, Y, K, h]
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
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
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
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
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
        z: [ot, "auto", K, Y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [_t, "full", "auto", s, ...j()]
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
        flex: [ae, _t, "auto", "initial", "none", Y]
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
        order: [ot, "first", "last", "none", K, Y]
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
        gap: j()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": j()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": j()
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
        p: j()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: j()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: j()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: j()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: j()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: j()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: j()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: j()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: j()
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
        "space-x": j()
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
        "space-y": j()
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
            screen: [a]
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
        text: ["base", t, Ut, pt]
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
        font: [r, K, Tr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ar, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [xf, Y, n]
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
        "line-clamp": [ae, "none", K, Tr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...j()
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
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", K, pt]
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
        indent: j()
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
          }, ot, K, Y],
          radial: ["", K, Y],
          conic: [ot, K, Y]
        }, yf, hf]
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
        from: A()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: A()
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
        border: O()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": O()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": O()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": O()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": O()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": O()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": O()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": O()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": O()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": O()
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
        "divide-y": O()
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
        outline: [...G(), "none", "hidden"]
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
        outline: ["", ae, Ut, pt]
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
          yn,
          bn
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
        "inset-shadow": ["none", f, yn, bn]
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
        ring: O()
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
        "ring-offset": [ae, pt]
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
        "inset-ring": O()
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
        "text-shadow": ["none", m, yn, bn]
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
        "mix-blend": [...V(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
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
        "mask-radial-at": S()
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
          g,
          yn,
          bn
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
        "border-spacing": j()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": j()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": j()
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
        animate: ["none", w, K, Y]
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
        perspective: [v, K, Y]
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
        rotate: Z()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Z()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Z()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Z()
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
        transform: [K, Y, "", "none", "gpu", "cpu"]
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
        translate: T()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": T()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": T()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": T()
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
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
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
        stroke: [ae, Ut, pt, Tr]
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
}, Sf = /* @__PURE__ */ nf(Ef);
function N(...e) {
  return Sf(ks(e));
}
function oy({
  open: e,
  onOpenChange: n,
  header: t,
  content: r,
  actions: o,
  className: i
}) {
  return /* @__PURE__ */ c.jsx(bp, { open: e, onOpenChange: n, children: /* @__PURE__ */ c.jsxs(yp, { children: [
    /* @__PURE__ */ c.jsx(wp, { className: "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
    /* @__PURE__ */ c.jsxs(
      Cp,
      {
        className: N(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
          i
        ),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col space-y-2", children: [
            /* @__PURE__ */ c.jsx(Ep, { className: "text-lg font-semibold text-gray-900", children: t }),
            typeof r == "string" ? /* @__PURE__ */ c.jsx(Oi, { className: "text-sm text-gray-600", children: r }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsx(Oi, { asChild: !0, children: /* @__PURE__ */ c.jsx(Np, { children: /* @__PURE__ */ c.jsx("span", { children: "Confirmation dialog content" }) }) }),
              /* @__PURE__ */ c.jsx("div", { className: "text-sm text-gray-600", children: r })
            ] })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0", children: o })
        ]
      }
    )
  ] }) });
}
const Fi = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, zi = ks, nr = (e, n) => (t) => {
  var r;
  if (n?.variants == null) return zi(e, t?.class, t?.className);
  const { variants: o, defaultVariants: i } = n, a = Object.keys(o).map((u) => {
    const p = t?.[u], f = i?.[u];
    if (p === null) return null;
    const m = Fi(p) || Fi(f);
    return o[u][m];
  }), s = t && Object.entries(t).reduce((u, p) => {
    let [f, m] = p;
    return m === void 0 || (u[f] = m), u;
  }, {}), l = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, p) => {
    let { class: f, className: m, ...g } = p;
    return Object.entries(g).every((x) => {
      let [v, h] = x;
      return Array.isArray(h) ? h.includes({
        ...i,
        ...s
      }[v]) : {
        ...i,
        ...s
      }[v] === h;
    }) ? [
      ...u,
      f,
      m
    ] : u;
  }, []);
  return zi(e, a, l, t?.class, t?.className);
}, kf = nr(
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
function iy({
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
      className: N(kf({ variant: n, size: t, className: e })),
      ...r
    }
  );
}
const _f = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Rf = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), $i = (e) => {
  const n = Rf(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Fs = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), jf = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
var Pf = {
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
const Af = Yn(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, l) => Kr(
    "svg",
    {
      ref: l,
      ...Pf,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: Fs("lucide", o),
      ...!i && !jf(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([u, p]) => Kr(u, p)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const $e = (e, n) => {
  const t = Yn(
    ({ className: r, ...o }, i) => Kr(Af, {
      ref: i,
      iconNode: n,
      className: Fs(
        `lucide-${_f($i(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return t.displayName = $i(e), t;
};
const Tf = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], an = $e("check", Tf);
const Of = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], zs = $e("chevron-down", Of);
const Mf = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Do = $e("chevron-right", Mf);
const Df = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Nf = $e("chevron-left", Df);
const If = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Lf = $e("chevron-up", If);
const Ff = [
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
], zf = $e("eye-off", Ff);
const $f = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Vf = $e("eye", $f);
const Wf = [["path", { d: "M5 12h14", key: "1ays0h" }]], Bf = $e("minus", Wf);
const Hf = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Uf = $e("trash-2", Hf);
const Gf = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], $s = $e("upload", Gf);
const qf = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], No = $e("x", qf);
function ay({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      "data-slot": "breadcrumb",
      className: N("w-full", e),
      ...n
    }
  );
}
function sy({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: N("flex items-center justify-start gap-2", e),
      ...n
    }
  );
}
function cy({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: N("flex justify-start items-center gap-x-1", e),
      ...n
    }
  );
}
function ly({
  asChild: e,
  className: n,
  ...t
}) {
  const r = e ? tr : "a";
  return /* @__PURE__ */ c.jsx(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: N(
        "flex w-fit font-manrope text-sm font-normal leading-4.5 text-gray-200 hover:text-gray-600 hover:underline transition-all",
        n
      ),
      ...t
    }
  );
}
function dy({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      "aria-current": "page",
      className: N(
        "font-manrope text-sm font-semibold text-blue-hepatica-600 leading-4",
        e
      ),
      ...n
    }
  );
}
function uy() {
  return /* @__PURE__ */ c.jsx(
    Do,
    {
      "data-slot": "breadcrumb-separator",
      "aria-hidden": "true",
      className: "size-4 text-gray-300 shrink-0"
    }
  );
}
const Yf = nr(
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
function Io({
  className: e,
  variant: n,
  size: t,
  asChild: r = !1,
  ...o
}) {
  const i = r ? tr : "button";
  return /* @__PURE__ */ c.jsx(
    i,
    {
      "data-slot": "button",
      className: N(Yf({ variant: n, size: t, className: e })),
      ...o
    }
  );
}
function py({
  className: e,
  checked: n,
  disabled: t = !1,
  name: r,
  value: o,
  onChange: i,
  ...a
}) {
  const s = `${r ?? "checkbox"}-${String(o ?? "value")}`;
  return /* @__PURE__ */ c.jsxs(
    "label",
    {
      htmlFor: s,
      "data-slot": "checkbox-label",
      className: N(
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
            className: N(
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
              an,
              {
                className: N("size-3 text-transparent", {
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
            onChange: (l) => i?.(l.target.checked),
            ...a
          }
        )
      ]
    }
  );
}
function fy({ ...e }) {
  return /* @__PURE__ */ c.jsx(Eo, { "data-slot": "dialog", ...e });
}
function my({ ...e }) {
  return /* @__PURE__ */ c.jsx(So, { "data-slot": "dialog-trigger", ...e });
}
function Kf({ ...e }) {
  return /* @__PURE__ */ c.jsx(_o, { "data-slot": "dialog-portal", ...e });
}
function vy({ ...e }) {
  return /* @__PURE__ */ c.jsx(on, { "data-slot": "dialog-close", ...e });
}
function Zf({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    Ro,
    {
      "data-slot": "dialog-overlay",
      className: N(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/50 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50",
        e
      ),
      ...n
    }
  );
}
function gy({
  className: e,
  children: n,
  showCloseButton: t = !0,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(Kf, { children: [
    /* @__PURE__ */ c.jsx(Zf, {}),
    /* @__PURE__ */ c.jsxs(
      jo,
      {
        "data-slot": "dialog-content",
        className: N(
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
          t && /* @__PURE__ */ c.jsx(on, { "data-slot": "dialog-close", asChild: !0, children: /* @__PURE__ */ c.jsxs(
            Io,
            {
              variant: "gray-ghost",
              className: "absolute top-6 right-8 size-10 flex items-center justify-center",
              size: "sm",
              children: [
                /* @__PURE__ */ c.jsx(No, {}),
                /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function hy({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: N(
        "min-h-22 px-8 justify-center gap-2 flex flex-col border-b border-b-gray-25",
        e
      ),
      ...n
    }
  );
}
function xy({
  className: e,
  showCloseButton: n = !1,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: N("px-8 pb-8 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ c.jsx(on, { asChild: !0, children: /* @__PURE__ */ c.jsx(Io, { variant: "gray-outline", size: "sm", children: "Close" }) })
      ]
    }
  );
}
function by({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    Ao,
    {
      "data-slot": "dialog-title",
      className: N("font-manrope text-base leading-5 font-semibold text-gray-900", e),
      ...n
    }
  );
}
function yy({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    To,
    {
      "data-slot": "dialog-description",
      className: N(
        "text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3",
        e
      ),
      ...n
    }
  );
}
// @__NO_SIDE_EFFECTS__
function Vi(e) {
  const n = /* @__PURE__ */ Xf(e), t = d.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = d.Children.toArray(i), l = s.find(Qf);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Xf(e) {
  const n = d.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (d.isValidElement(o)) {
      const a = tm(o), s = em(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? Je(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Jf = /* @__PURE__ */ Symbol("radix.slottable");
function Qf(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Jf;
}
function em(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], i = n[r];
    /^on[A-Z]/.test(r) ? o && i ? t[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...i } : r === "className" && (t[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function tm(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function Lo(e) {
  const n = e + "CollectionProvider", [t, r] = Xe(n), [o, i] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (v) => {
    const { scope: h, children: y } = v, w = ie.useRef(null), E = ie.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: h, itemMap: E, collectionRef: w, children: y });
  };
  a.displayName = n;
  const s = e + "CollectionSlot", l = /* @__PURE__ */ Vi(s), u = ie.forwardRef(
    (v, h) => {
      const { scope: y, children: w } = v, E = i(s, y), S = ce(h, E.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: S, children: w });
    }
  );
  u.displayName = s;
  const p = e + "CollectionItemSlot", f = "data-radix-collection-item", m = /* @__PURE__ */ Vi(p), g = ie.forwardRef(
    (v, h) => {
      const { scope: y, children: w, ...E } = v, S = ie.useRef(null), C = ce(h, S), D = i(p, y);
      return ie.useEffect(() => (D.itemMap.set(S, { ref: S, ...E }), () => {
        D.itemMap.delete(S);
      })), /* @__PURE__ */ c.jsx(m, { [f]: "", ref: C, children: w });
    }
  );
  g.displayName = p;
  function x(v) {
    const h = i(e + "CollectionConsumer", v);
    return ie.useCallback(() => {
      const w = h.collectionRef.current;
      if (!w) return [];
      const E = Array.from(w.querySelectorAll(`[${f}]`));
      return Array.from(h.itemMap.values()).sort(
        (D, P) => E.indexOf(D.ref.current) - E.indexOf(P.ref.current)
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return [
    { Provider: a, Slot: u, ItemSlot: g },
    x,
    r
  ];
}
var nm = d.createContext(void 0);
function Fo(e) {
  const n = d.useContext(nm);
  return e || n || "ltr";
}
const rm = ["top", "right", "bottom", "left"], st = Math.min, Ae = Math.max, Nn = Math.round, wn = Math.floor, He = (e) => ({
  x: e,
  y: e
}), om = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, im = {
  start: "end",
  end: "start"
};
function to(e, n, t) {
  return Ae(e, st(n, t));
}
function Ke(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Ze(e) {
  return e.split("-")[0];
}
function It(e) {
  return e.split("-")[1];
}
function zo(e) {
  return e === "x" ? "y" : "x";
}
function $o(e) {
  return e === "y" ? "height" : "width";
}
const am = /* @__PURE__ */ new Set(["top", "bottom"]);
function Be(e) {
  return am.has(Ze(e)) ? "y" : "x";
}
function Vo(e) {
  return zo(Be(e));
}
function sm(e, n, t) {
  t === void 0 && (t = !1);
  const r = It(e), o = Vo(e), i = $o(o);
  let a = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[i] > n.floating[i] && (a = In(a)), [a, In(a)];
}
function cm(e) {
  const n = In(e);
  return [no(e), n, no(n)];
}
function no(e) {
  return e.replace(/start|end/g, (n) => im[n]);
}
const Wi = ["left", "right"], Bi = ["right", "left"], lm = ["top", "bottom"], dm = ["bottom", "top"];
function um(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? Bi : Wi : n ? Wi : Bi;
    case "left":
    case "right":
      return n ? lm : dm;
    default:
      return [];
  }
}
function pm(e, n, t, r) {
  const o = It(e);
  let i = um(Ze(e), t === "start", r);
  return o && (i = i.map((a) => a + "-" + o), n && (i = i.concat(i.map(no)))), i;
}
function In(e) {
  return e.replace(/left|right|bottom|top/g, (n) => om[n]);
}
function fm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Vs(e) {
  return typeof e != "number" ? fm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ln(e) {
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
function Hi(e, n, t) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Be(n), a = Vo(n), s = $o(a), l = Ze(n), u = i === "y", p = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
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
  switch (It(n)) {
    case "start":
      g[a] -= m * (t && u ? -1 : 1);
      break;
    case "end":
      g[a] += m * (t && u ? -1 : 1);
      break;
  }
  return g;
}
const mm = async (e, n, t) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = t, s = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let u = await a.getElementRects({
    reference: e,
    floating: n,
    strategy: o
  }), {
    x: p,
    y: f
  } = Hi(u, r, l), m = r, g = {}, x = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: h,
      fn: y
    } = s[v], {
      x: w,
      y: E,
      data: S,
      reset: C
    } = await y({
      x: p,
      y: f,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: n
      }
    });
    p = w ?? p, f = E ?? f, g = {
      ...g,
      [h]: {
        ...g[h],
        ...S
      }
    }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (u = C.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: n,
      strategy: o
    }) : C.rects), {
      x: p,
      y: f
    } = Hi(u, m, l)), v = -1);
  }
  return {
    x: p,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: g
  };
};
async function Xt(e, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = Ke(n, e), x = Vs(g), h = s[m ? f === "floating" ? "reference" : "floating" : f], y = Ln(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(h))) == null || t ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: p,
    strategy: l
  })), w = f === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), S = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ln(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: E,
    strategy: l
  }) : w);
  return {
    top: (y.top - C.top + x.top) / S.y,
    bottom: (C.bottom - y.bottom + x.bottom) / S.y,
    left: (y.left - C.left + x.left) / S.x,
    right: (C.right - y.right + x.right) / S.x
  };
}
const vm = (e) => ({
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
      middlewareData: l
    } = n, {
      element: u,
      padding: p = 0
    } = Ke(e, n) || {};
    if (u == null)
      return {};
    const f = Vs(p), m = {
      x: t,
      y: r
    }, g = Vo(o), x = $o(g), v = await a.getDimensions(u), h = g === "y", y = h ? "top" : "left", w = h ? "bottom" : "right", E = h ? "clientHeight" : "clientWidth", S = i.reference[x] + i.reference[g] - m[g] - i.floating[x], C = m[g] - i.reference[g], D = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let P = D ? D[E] : 0;
    (!P || !await (a.isElement == null ? void 0 : a.isElement(D))) && (P = s.floating[E] || i.floating[x]);
    const j = S / 2 - C / 2, L = P / 2 - v[x] / 2 - 1, B = st(f[y], L), J = st(f[w], L), q = B, U = P - v[x] - J, H = P / 2 - v[x] / 2 + j, Q = to(q, H, U), $ = !l.arrow && It(o) != null && H !== Q && i.reference[x] / 2 - (H < q ? B : J) - v[x] / 2 < 0, ee = $ ? H < q ? H - q : H - U : 0;
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
}), gm = function(e) {
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
        platform: l,
        elements: u
      } = n, {
        mainAxis: p = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: v = !0,
        ...h
      } = Ke(e, n);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const y = Ze(o), w = Be(s), E = Ze(s) === s, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = m || (E || !v ? [In(s)] : cm(s)), D = x !== "none";
      !m && D && C.push(...pm(s, v, x, S));
      const P = [s, ...C], j = await Xt(n, h), L = [];
      let B = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (p && L.push(j[y]), f) {
        const H = sm(o, a, S);
        L.push(j[H[0]], j[H[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: L
      }], !L.every((H) => H <= 0)) {
        var J, q;
        const H = (((J = i.flip) == null ? void 0 : J.index) || 0) + 1, Q = P[H];
        if (Q && (!(f === "alignment" ? w !== Be(Q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((R) => Be(R.placement) === w ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: H,
              overflows: B
            },
            reset: {
              placement: Q
            }
          };
        let $ = (q = B.filter((ee) => ee.overflows[0] <= 0).sort((ee, R) => ee.overflows[1] - R.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!$)
          switch (g) {
            case "bestFit": {
              var U;
              const ee = (U = B.filter((R) => {
                if (D) {
                  const M = Be(R.placement);
                  return M === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((M) => M > 0).reduce((M, _) => M + _, 0)]).sort((R, M) => R[1] - M[1])[0]) == null ? void 0 : U[0];
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
function Ui(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function Gi(e) {
  return rm.some((n) => e[n] >= 0);
}
const hm = function(e) {
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
          const i = await Xt(n, {
            ...o,
            elementContext: "reference"
          }), a = Ui(i, t.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Gi(a)
            }
          };
        }
        case "escaped": {
          const i = await Xt(n, {
            ...o,
            altBoundary: !0
          }), a = Ui(i, t.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Gi(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ws = /* @__PURE__ */ new Set(["left", "top"]);
async function xm(e, n) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Ze(t), s = It(t), l = Be(t) === "y", u = Ws.has(a) ? -1 : 1, p = i && l ? -1 : 1, f = Ke(n, e);
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
    y: m * u
  } : {
    x: m * u,
    y: g * p
  };
}
const bm = function(e) {
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
      } = n, l = await xm(n, e);
      return a === ((t = s.offset) == null ? void 0 : t.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, ym = function(e) {
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
          fn: (h) => {
            let {
              x: y,
              y: w
            } = h;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = Ke(e, n), u = {
        x: t,
        y: r
      }, p = await Xt(n, l), f = Be(Ze(o)), m = zo(f);
      let g = u[m], x = u[f];
      if (i) {
        const h = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", w = g + p[h], E = g - p[y];
        g = to(w, g, E);
      }
      if (a) {
        const h = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", w = x + p[h], E = x - p[y];
        x = to(w, x, E);
      }
      const v = s.fn({
        ...n,
        [m]: g,
        [f]: x
      });
      return {
        ...v,
        data: {
          x: v.x - t,
          y: v.y - r,
          enabled: {
            [m]: i,
            [f]: a
          }
        }
      };
    }
  };
}, wm = function(e) {
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
        mainAxis: l = !0,
        crossAxis: u = !0
      } = Ke(e, n), p = {
        x: t,
        y: r
      }, f = Be(o), m = zo(f);
      let g = p[m], x = p[f];
      const v = Ke(s, n), h = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const E = m === "y" ? "height" : "width", S = i.reference[m] - i.floating[E] + h.mainAxis, C = i.reference[m] + i.reference[E] - h.mainAxis;
        g < S ? g = S : g > C && (g = C);
      }
      if (u) {
        var y, w;
        const E = m === "y" ? "width" : "height", S = Ws.has(Ze(o)), C = i.reference[f] - i.floating[E] + (S && ((y = a.offset) == null ? void 0 : y[f]) || 0) + (S ? 0 : h.crossAxis), D = i.reference[f] + i.reference[E] + (S ? 0 : ((w = a.offset) == null ? void 0 : w[f]) || 0) - (S ? h.crossAxis : 0);
        x < C ? x = C : x > D && (x = D);
      }
      return {
        [m]: g,
        [f]: x
      };
    }
  };
}, Cm = function(e) {
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
        apply: l = () => {
        },
        ...u
      } = Ke(e, n), p = await Xt(n, u), f = Ze(o), m = It(o), g = Be(o) === "y", {
        width: x,
        height: v
      } = i.floating;
      let h, y;
      f === "top" || f === "bottom" ? (h = f, y = m === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = f, h = m === "end" ? "top" : "bottom");
      const w = v - p.top - p.bottom, E = x - p.left - p.right, S = st(v - p[h], w), C = st(x - p[y], E), D = !n.middlewareData.shift;
      let P = S, j = C;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (j = E), (r = n.middlewareData.shift) != null && r.enabled.y && (P = w), D && !m) {
        const B = Ae(p.left, 0), J = Ae(p.right, 0), q = Ae(p.top, 0), U = Ae(p.bottom, 0);
        g ? j = x - 2 * (B !== 0 || J !== 0 ? B + J : Ae(p.left, p.right)) : P = v - 2 * (q !== 0 || U !== 0 ? q + U : Ae(p.top, p.bottom));
      }
      await l({
        ...n,
        availableWidth: j,
        availableHeight: P
      });
      const L = await a.getDimensions(s.floating);
      return x !== L.width || v !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function rr() {
  return typeof window < "u";
}
function Lt(e) {
  return Bs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Te(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Ge(e) {
  var n;
  return (n = (Bs(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function Bs(e) {
  return rr() ? e instanceof Node || e instanceof Te(e).Node : !1;
}
function Le(e) {
  return rr() ? e instanceof Element || e instanceof Te(e).Element : !1;
}
function Ue(e) {
  return rr() ? e instanceof HTMLElement || e instanceof Te(e).HTMLElement : !1;
}
function qi(e) {
  return !rr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Te(e).ShadowRoot;
}
const Em = /* @__PURE__ */ new Set(["inline", "contents"]);
function sn(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: r,
    display: o
  } = Fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !Em.has(o);
}
const Sm = /* @__PURE__ */ new Set(["table", "td", "th"]);
function km(e) {
  return Sm.has(Lt(e));
}
const _m = [":popover-open", ":modal"];
function or(e) {
  return _m.some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
const Rm = ["transform", "translate", "scale", "rotate", "perspective"], jm = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Pm = ["paint", "layout", "strict", "content"];
function Wo(e) {
  const n = Bo(), t = Le(e) ? Fe(e) : e;
  return Rm.some((r) => t[r] ? t[r] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || jm.some((r) => (t.willChange || "").includes(r)) || Pm.some((r) => (t.contain || "").includes(r));
}
function Am(e) {
  let n = ct(e);
  for (; Ue(n) && !At(n); ) {
    if (Wo(n))
      return n;
    if (or(n))
      return null;
    n = ct(n);
  }
  return null;
}
function Bo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Tm = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function At(e) {
  return Tm.has(Lt(e));
}
function Fe(e) {
  return Te(e).getComputedStyle(e);
}
function ir(e) {
  return Le(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ct(e) {
  if (Lt(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    qi(e) && e.host || // Fallback.
    Ge(e)
  );
  return qi(n) ? n.host : n;
}
function Hs(e) {
  const n = ct(e);
  return At(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ue(n) && sn(n) ? n : Hs(n);
}
function Jt(e, n, t) {
  var r;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const o = Hs(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Te(o);
  if (i) {
    const s = ro(a);
    return n.concat(a, a.visualViewport || [], sn(o) ? o : [], s && t ? Jt(s) : []);
  }
  return n.concat(o, Jt(o, [], t));
}
function ro(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Us(e) {
  const n = Fe(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const o = Ue(e), i = o ? e.offsetWidth : t, a = o ? e.offsetHeight : r, s = Nn(t) !== i || Nn(r) !== a;
  return s && (t = i, r = a), {
    width: t,
    height: r,
    $: s
  };
}
function Ho(e) {
  return Le(e) ? e : e.contextElement;
}
function Pt(e) {
  const n = Ho(e);
  if (!Ue(n))
    return He(1);
  const t = n.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Us(n);
  let a = (i ? Nn(t.width) : t.width) / r, s = (i ? Nn(t.height) : t.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Om = /* @__PURE__ */ He(0);
function Gs(e) {
  const n = Te(e);
  return !Bo() || !n.visualViewport ? Om : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Mm(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Te(e) ? !1 : n;
}
function gt(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), i = Ho(e);
  let a = He(1);
  n && (r ? Le(r) && (a = Pt(r)) : a = Pt(e));
  const s = Mm(i, t, r) ? Gs(i) : He(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, p = o.width / a.x, f = o.height / a.y;
  if (i) {
    const m = Te(i), g = r && Le(r) ? Te(r) : r;
    let x = m, v = ro(x);
    for (; v && r && g !== x; ) {
      const h = Pt(v), y = v.getBoundingClientRect(), w = Fe(v), E = y.left + (v.clientLeft + parseFloat(w.paddingLeft)) * h.x, S = y.top + (v.clientTop + parseFloat(w.paddingTop)) * h.y;
      l *= h.x, u *= h.y, p *= h.x, f *= h.y, l += E, u += S, x = Te(v), v = ro(x);
    }
  }
  return Ln({
    width: p,
    height: f,
    x: l,
    y: u
  });
}
function ar(e, n) {
  const t = ir(e).scrollLeft;
  return n ? n.left + t : gt(Ge(e)).left + t;
}
function qs(e, n) {
  const t = e.getBoundingClientRect(), r = t.left + n.scrollLeft - ar(e, t), o = t.top + n.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Dm(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Ge(r), s = n ? or(n.floating) : !1;
  if (r === a || s && i)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = He(1);
  const p = He(0), f = Ue(r);
  if ((f || !f && !i) && ((Lt(r) !== "body" || sn(a)) && (l = ir(r)), Ue(r))) {
    const g = gt(r);
    u = Pt(r), p.x = g.x + r.clientLeft, p.y = g.y + r.clientTop;
  }
  const m = a && !f && !i ? qs(a, l) : He(0);
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - l.scrollLeft * u.x + p.x + m.x,
    y: t.y * u.y - l.scrollTop * u.y + p.y + m.y
  };
}
function Nm(e) {
  return Array.from(e.getClientRects());
}
function Im(e) {
  const n = Ge(e), t = ir(e), r = e.ownerDocument.body, o = Ae(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), i = Ae(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -t.scrollLeft + ar(e);
  const s = -t.scrollTop;
  return Fe(r).direction === "rtl" && (a += Ae(n.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
const Yi = 25;
function Lm(e, n) {
  const t = Te(e), r = Ge(e), o = t.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const p = Bo();
    (!p || p && n === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  const u = ar(r);
  if (u <= 0) {
    const p = r.ownerDocument, f = p.body, m = getComputedStyle(f), g = p.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, x = Math.abs(r.clientWidth - f.clientWidth - g);
    x <= Yi && (i -= x);
  } else u <= Yi && (i += u);
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
const Fm = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function zm(e, n) {
  const t = gt(e, !0, n === "fixed"), r = t.top + e.clientTop, o = t.left + e.clientLeft, i = Ue(e) ? Pt(e) : He(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function Ki(e, n, t) {
  let r;
  if (n === "viewport")
    r = Lm(e, t);
  else if (n === "document")
    r = Im(Ge(e));
  else if (Le(n))
    r = zm(n, t);
  else {
    const o = Gs(e);
    r = {
      x: n.x - o.x,
      y: n.y - o.y,
      width: n.width,
      height: n.height
    };
  }
  return Ln(r);
}
function Ys(e, n) {
  const t = ct(e);
  return t === n || !Le(t) || At(t) ? !1 : Fe(t).position === "fixed" || Ys(t, n);
}
function $m(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let r = Jt(e, [], !1).filter((s) => Le(s) && Lt(s) !== "body"), o = null;
  const i = Fe(e).position === "fixed";
  let a = i ? ct(e) : e;
  for (; Le(a) && !At(a); ) {
    const s = Fe(a), l = Wo(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && !!o && Fm.has(o.position) || sn(a) && !l && Ys(e, a)) ? r = r.filter((p) => p !== a) : o = s, a = ct(a);
  }
  return n.set(e, r), r;
}
function Vm(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...t === "clippingAncestors" ? or(n) ? [] : $m(n, this._c) : [].concat(t), r], s = a[0], l = a.reduce((u, p) => {
    const f = Ki(n, p, o);
    return u.top = Ae(f.top, u.top), u.right = st(f.right, u.right), u.bottom = st(f.bottom, u.bottom), u.left = Ae(f.left, u.left), u;
  }, Ki(n, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Wm(e) {
  const {
    width: n,
    height: t
  } = Us(e);
  return {
    width: n,
    height: t
  };
}
function Bm(e, n, t) {
  const r = Ue(n), o = Ge(n), i = t === "fixed", a = gt(e, !0, i, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = He(0);
  function u() {
    l.x = ar(o);
  }
  if (r || !r && !i)
    if ((Lt(n) !== "body" || sn(o)) && (s = ir(n)), r) {
      const g = gt(n, !0, i, n);
      l.x = g.x + n.clientLeft, l.y = g.y + n.clientTop;
    } else o && u();
  i && !r && o && u();
  const p = o && !r && !i ? qs(o, s) : He(0), f = a.left + s.scrollLeft - l.x - p.x, m = a.top + s.scrollTop - l.y - p.y;
  return {
    x: f,
    y: m,
    width: a.width,
    height: a.height
  };
}
function Or(e) {
  return Fe(e).position === "static";
}
function Zi(e, n) {
  if (!Ue(e) || Fe(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Ge(e) === t && (t = t.ownerDocument.body), t;
}
function Ks(e, n) {
  const t = Te(e);
  if (or(e))
    return t;
  if (!Ue(e)) {
    let o = ct(e);
    for (; o && !At(o); ) {
      if (Le(o) && !Or(o))
        return o;
      o = ct(o);
    }
    return t;
  }
  let r = Zi(e, n);
  for (; r && km(r) && Or(r); )
    r = Zi(r, n);
  return r && At(r) && Or(r) && !Wo(r) ? t : r || Am(e) || t;
}
const Hm = async function(e) {
  const n = this.getOffsetParent || Ks, t = this.getDimensions, r = await t(e.floating);
  return {
    reference: Bm(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Um(e) {
  return Fe(e).direction === "rtl";
}
const Gm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Dm,
  getDocumentElement: Ge,
  getClippingRect: Vm,
  getOffsetParent: Ks,
  getElementRects: Hm,
  getClientRects: Nm,
  getDimensions: Wm,
  getScale: Pt,
  isElement: Le,
  isRTL: Um
};
function Zs(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function qm(e, n) {
  let t = null, r;
  const o = Ge(e);
  function i() {
    var s;
    clearTimeout(r), (s = t) == null || s.disconnect(), t = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const u = e.getBoundingClientRect(), {
      left: p,
      top: f,
      width: m,
      height: g
    } = u;
    if (s || n(), !m || !g)
      return;
    const x = wn(f), v = wn(o.clientWidth - (p + m)), h = wn(o.clientHeight - (f + g)), y = wn(p), E = {
      rootMargin: -x + "px " + -v + "px " + -h + "px " + -y + "px",
      threshold: Ae(0, st(1, l)) || 1
    };
    let S = !0;
    function C(D) {
      const P = D[0].intersectionRatio;
      if (P !== l) {
        if (!S)
          return a();
        P ? a(!1, P) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !Zs(u, e.getBoundingClientRect()) && a(), S = !1;
    }
    try {
      t = new IntersectionObserver(C, {
        ...E,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(C, E);
    }
    t.observe(e);
  }
  return a(!0), i;
}
function Ym(e, n, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Ho(e), p = o || i ? [...u ? Jt(u) : [], ...Jt(n)] : [];
  p.forEach((y) => {
    o && y.addEventListener("scroll", t, {
      passive: !0
    }), i && y.addEventListener("resize", t);
  });
  const f = u && s ? qm(u, t) : null;
  let m = -1, g = null;
  a && (g = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === u && g && (g.unobserve(n), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var E;
      (E = g) == null || E.observe(n);
    })), t();
  }), u && !l && g.observe(u), g.observe(n));
  let x, v = l ? gt(e) : null;
  l && h();
  function h() {
    const y = gt(e);
    v && !Zs(v, y) && t(), v = y, x = requestAnimationFrame(h);
  }
  return t(), () => {
    var y;
    p.forEach((w) => {
      o && w.removeEventListener("scroll", t), i && w.removeEventListener("resize", t);
    }), f?.(), (y = g) == null || y.disconnect(), g = null, l && cancelAnimationFrame(x);
  };
}
const Km = bm, Zm = ym, Xm = gm, Jm = Cm, Qm = hm, Xi = vm, ev = wm, tv = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Gm,
    ...t
  }, i = {
    ...o.platform,
    _c: r
  };
  return mm(e, n, {
    ...o,
    platform: i
  });
};
var nv = typeof document < "u", rv = function() {
}, An = nv ? dd : rv;
function Fn(e, n) {
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
        if (!Fn(e[r], n[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Fn(e[i], n[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function Xs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ji(e, n) {
  const t = Xs(e);
  return Math.round(n * t) / t;
}
function Mr(e) {
  const n = d.useRef(e);
  return An(() => {
    n.current = e;
  }), n;
}
function ov(e) {
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
    whileElementsMounted: l,
    open: u
  } = e, [p, f] = d.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [m, g] = d.useState(r);
  Fn(m, r) || g(r);
  const [x, v] = d.useState(null), [h, y] = d.useState(null), w = d.useCallback((R) => {
    R !== D.current && (D.current = R, v(R));
  }, []), E = d.useCallback((R) => {
    R !== P.current && (P.current = R, y(R));
  }, []), S = i || x, C = a || h, D = d.useRef(null), P = d.useRef(null), j = d.useRef(p), L = l != null, B = Mr(l), J = Mr(o), q = Mr(u), U = d.useCallback(() => {
    if (!D.current || !P.current)
      return;
    const R = {
      placement: n,
      strategy: t,
      middleware: m
    };
    J.current && (R.platform = J.current), tv(D.current, P.current, R).then((M) => {
      const _ = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: q.current !== !1
      };
      H.current && !Fn(j.current, _) && (j.current = _, Kn.flushSync(() => {
        f(_);
      }));
    });
  }, [m, n, t, J, q]);
  An(() => {
    u === !1 && j.current.isPositioned && (j.current.isPositioned = !1, f((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [u]);
  const H = d.useRef(!1);
  An(() => (H.current = !0, () => {
    H.current = !1;
  }), []), An(() => {
    if (S && (D.current = S), C && (P.current = C), S && C) {
      if (B.current)
        return B.current(S, C, U);
      U();
    }
  }, [S, C, U, B, L]);
  const Q = d.useMemo(() => ({
    reference: D,
    floating: P,
    setReference: w,
    setFloating: E
  }), [w, E]), $ = d.useMemo(() => ({
    reference: S,
    floating: C
  }), [S, C]), ee = d.useMemo(() => {
    const R = {
      position: t,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return R;
    const M = Ji($.floating, p.x), _ = Ji($.floating, p.y);
    return s ? {
      ...R,
      transform: "translate(" + M + "px, " + _ + "px)",
      ...Xs($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: M,
      top: _
    };
  }, [t, s, $.floating, p.x, p.y]);
  return d.useMemo(() => ({
    ...p,
    update: U,
    refs: Q,
    elements: $,
    floatingStyles: ee
  }), [p, U, Q, $, ee]);
}
const iv = (e) => {
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
      return r && n(r) ? r.current != null ? Xi({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? Xi({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
}, av = (e, n) => ({
  ...Km(e),
  options: [e, n]
}), sv = (e, n) => ({
  ...Zm(e),
  options: [e, n]
}), cv = (e, n) => ({
  ...ev(e),
  options: [e, n]
}), lv = (e, n) => ({
  ...Xm(e),
  options: [e, n]
}), dv = (e, n) => ({
  ...Jm(e),
  options: [e, n]
}), uv = (e, n) => ({
  ...Qm(e),
  options: [e, n]
}), pv = (e, n) => ({
  ...iv(e),
  options: [e, n]
});
var fv = "Arrow", Js = d.forwardRef((e, n) => {
  const { children: t, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ c.jsx(
    se.svg,
    {
      ...i,
      ref: n,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? t : /* @__PURE__ */ c.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Js.displayName = fv;
var mv = Js;
function vv(e) {
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
          const l = i.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          a = u.inlineSize, s = u.blockSize;
        } else
          a = e.offsetWidth, s = e.offsetHeight;
        t({ width: a, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      t(void 0);
  }, [e]), n;
}
var Uo = "Popper", [Qs, Ft] = Xe(Uo), [gv, ec] = Qs(Uo), tc = (e) => {
  const { __scopePopper: n, children: t } = e, [r, o] = d.useState(null);
  return /* @__PURE__ */ c.jsx(gv, { scope: n, anchor: r, onAnchorChange: o, children: t });
};
tc.displayName = Uo;
var nc = "PopperAnchor", rc = d.forwardRef(
  (e, n) => {
    const { __scopePopper: t, virtualRef: r, ...o } = e, i = ec(nc, t), a = d.useRef(null), s = ce(n, a), l = d.useRef(null);
    return d.useEffect(() => {
      const u = l.current;
      l.current = r?.current || a.current, u !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(se.div, { ...o, ref: s });
  }
);
rc.displayName = nc;
var Go = "PopperContent", [hv, xv] = Qs(Go), oc = d.forwardRef(
  (e, n) => {
    const {
      __scopePopper: t,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: p = 0,
      sticky: f = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: x,
      ...v
    } = e, h = ec(Go, t), [y, w] = d.useState(null), E = ce(n, (k) => w(k)), [S, C] = d.useState(null), D = vv(S), P = D?.width ?? 0, j = D?.height ?? 0, L = r + (i !== "center" ? "-" + i : ""), B = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, J = Array.isArray(u) ? u : [u], q = J.length > 0, U = {
      padding: B,
      boundary: J.filter(yv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: H, floatingStyles: Q, placement: $, isPositioned: ee, middlewareData: R } = ov({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: L,
      whileElementsMounted: (...k) => Ym(...k, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: h.anchor
      },
      middleware: [
        av({ mainAxis: o + j, alignmentAxis: a }),
        l && sv({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? cv() : void 0,
          ...U
        }),
        l && lv({ ...U }),
        dv({
          ...U,
          apply: ({ elements: k, rects: W, availableWidth: Z, availableHeight: F }) => {
            const { width: re, height: T } = W.reference, pe = k.floating.style;
            pe.setProperty("--radix-popper-available-width", `${Z}px`), pe.setProperty("--radix-popper-available-height", `${F}px`), pe.setProperty("--radix-popper-anchor-width", `${re}px`), pe.setProperty("--radix-popper-anchor-height", `${T}px`);
          }
        }),
        S && pv({ element: S, padding: s }),
        wv({ arrowWidth: P, arrowHeight: j }),
        m && uv({ strategy: "referenceHidden", ...U })
      ]
    }), [M, _] = sc($), b = Ie(x);
    _e(() => {
      ee && b?.();
    }, [ee, b]);
    const A = R.arrow?.x, I = R.arrow?.y, O = R.arrow?.centerOffset !== 0, [G, V] = d.useState();
    return _e(() => {
      y && V(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ c.jsx(
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
        children: /* @__PURE__ */ c.jsx(
          hv,
          {
            scope: t,
            placedSide: M,
            onArrowChange: C,
            arrowX: A,
            arrowY: I,
            shouldHideArrow: O,
            children: /* @__PURE__ */ c.jsx(
              se.div,
              {
                "data-side": M,
                "data-align": _,
                ...v,
                ref: E,
                style: {
                  ...v.style,
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
oc.displayName = Go;
var ic = "PopperArrow", bv = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ac = d.forwardRef(function(n, t) {
  const { __scopePopper: r, ...o } = n, i = xv(ic, r), a = bv[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ c.jsx(
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
        children: /* @__PURE__ */ c.jsx(
          mv,
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
ac.displayName = ic;
function yv(e) {
  return e !== null;
}
var wv = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    const { placement: t, rects: r, middlewareData: o } = n, a = o.arrow?.centerOffset !== 0, s = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [u, p] = sc(t), f = { start: "0%", center: "50%", end: "100%" }[p], m = (o.arrow?.x ?? 0) + s / 2, g = (o.arrow?.y ?? 0) + l / 2;
    let x = "", v = "";
    return u === "bottom" ? (x = a ? f : `${m}px`, v = `${-l}px`) : u === "top" ? (x = a ? f : `${m}px`, v = `${r.floating.height + l}px`) : u === "right" ? (x = `${-l}px`, v = a ? f : `${g}px`) : u === "left" && (x = `${r.floating.width + l}px`, v = a ? f : `${g}px`), { data: { x, y: v } };
  }
});
function sc(e) {
  const [n, t = "center"] = e.split("-");
  return [n, t];
}
var sr = tc, qo = rc, Yo = oc, Ko = ac, Dr = "rovingFocusGroup.onEntryFocus", Cv = { bubbles: !1, cancelable: !0 }, cn = "RovingFocusGroup", [oo, cc, Ev] = Lo(cn), [Sv, lc] = Xe(
  cn,
  [Ev]
), [kv, _v] = Sv(cn), dc = d.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(oo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(oo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Rv, { ...e, ref: n }) }) })
);
dc.displayName = cn;
var Rv = d.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: t,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: p = !1,
    ...f
  } = e, m = d.useRef(null), g = ce(n, m), x = Fo(i), [v, h] = mt({
    prop: a,
    defaultProp: s ?? null,
    onChange: l,
    caller: cn
  }), [y, w] = d.useState(!1), E = Ie(u), S = cc(t), C = d.useRef(!1), [D, P] = d.useState(0);
  return d.useEffect(() => {
    const j = m.current;
    if (j)
      return j.addEventListener(Dr, E), () => j.removeEventListener(Dr, E);
  }, [E]), /* @__PURE__ */ c.jsx(
    kv,
    {
      scope: t,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: v,
      onItemFocus: d.useCallback(
        (j) => h(j),
        [h]
      ),
      onItemShiftTab: d.useCallback(() => w(!0), []),
      onFocusableItemAdd: d.useCallback(
        () => P((j) => j + 1),
        []
      ),
      onFocusableItemRemove: d.useCallback(
        () => P((j) => j - 1),
        []
      ),
      children: /* @__PURE__ */ c.jsx(
        se.div,
        {
          tabIndex: y || D === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: X(e.onFocus, (j) => {
            const L = !C.current;
            if (j.target === j.currentTarget && L && !y) {
              const B = new CustomEvent(Dr, Cv);
              if (j.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const J = S().filter(($) => $.focusable), q = J.find(($) => $.active), U = J.find(($) => $.id === v), Q = [q, U, ...J].filter(
                  Boolean
                ).map(($) => $.ref.current);
                fc(Q, p);
              }
            }
            C.current = !1;
          }),
          onBlur: X(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), uc = "RovingFocusGroupItem", pc = d.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: a,
      ...s
    } = e, l = Oe(), u = i || l, p = _v(uc, t), f = p.currentTabStopId === u, m = cc(t), { onFocusableItemAdd: g, onFocusableItemRemove: x, currentTabStopId: v } = p;
    return d.useEffect(() => {
      if (r)
        return g(), () => x();
    }, [r, g, x]), /* @__PURE__ */ c.jsx(
      oo.ItemSlot,
      {
        scope: t,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ c.jsx(
          se.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": p.orientation,
            ...s,
            ref: n,
            onMouseDown: X(e.onMouseDown, (h) => {
              r ? p.onItemFocus(u) : h.preventDefault();
            }),
            onFocus: X(e.onFocus, () => p.onItemFocus(u)),
            onKeyDown: X(e.onKeyDown, (h) => {
              if (h.key === "Tab" && h.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (h.target !== h.currentTarget) return;
              const y = Av(h, p.orientation, p.dir);
              if (y !== void 0) {
                if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey) return;
                h.preventDefault();
                let E = m().filter((S) => S.focusable).map((S) => S.ref.current);
                if (y === "last") E.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && E.reverse();
                  const S = E.indexOf(h.currentTarget);
                  E = p.loop ? Tv(E, S + 1) : E.slice(S + 1);
                }
                setTimeout(() => fc(E));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: v != null }) : a
          }
        )
      }
    );
  }
);
pc.displayName = uc;
var jv = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Pv(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Av(e, n, t) {
  const r = Pv(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return jv[r];
}
function fc(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function Tv(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var Ov = dc, Mv = pc;
// @__NO_SIDE_EFFECTS__
function Dv(e) {
  const n = /* @__PURE__ */ Nv(e), t = d.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = d.Children.toArray(i), l = s.find(Lv);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Nv(e) {
  const n = d.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (d.isValidElement(o)) {
      const a = zv(o), s = Fv(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? Je(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Iv = /* @__PURE__ */ Symbol("radix.slottable");
function Lv(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Iv;
}
function Fv(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], i = n[r];
    /^on[A-Z]/.test(r) ? o && i ? t[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...i } : r === "className" && (t[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function zv(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var io = ["Enter", " "], $v = ["ArrowDown", "PageUp", "Home"], mc = ["ArrowUp", "PageDown", "End"], Vv = [...$v, ...mc], Wv = {
  ltr: [...io, "ArrowRight"],
  rtl: [...io, "ArrowLeft"]
}, Bv = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, ln = "Menu", [Qt, Hv, Uv] = Lo(ln), [wt, vc] = Xe(ln, [
  Uv,
  Ft,
  lc
]), dn = Ft(), gc = lc(), [hc, lt] = wt(ln), [Gv, un] = wt(ln), xc = (e) => {
  const { __scopeMenu: n, open: t = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, s = dn(n), [l, u] = d.useState(null), p = d.useRef(!1), f = Ie(i), m = Fo(o);
  return d.useEffect(() => {
    const g = () => {
      p.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => p.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(sr, { ...s, children: /* @__PURE__ */ c.jsx(
    hc,
    {
      scope: n,
      open: t,
      onOpenChange: f,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ c.jsx(
        Gv,
        {
          scope: n,
          onClose: d.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: p,
          dir: m,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
xc.displayName = ln;
var qv = "MenuAnchor", Zo = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = dn(t);
    return /* @__PURE__ */ c.jsx(qo, { ...o, ...r, ref: n });
  }
);
Zo.displayName = qv;
var Xo = "MenuPortal", [Yv, bc] = wt(Xo, {
  forceMount: void 0
}), yc = (e) => {
  const { __scopeMenu: n, forceMount: t, children: r, container: o } = e, i = lt(Xo, n);
  return /* @__PURE__ */ c.jsx(Yv, { scope: n, forceMount: t, children: /* @__PURE__ */ c.jsx(Qe, { present: t || i.open, children: /* @__PURE__ */ c.jsx(Xn, { asChild: !0, container: o, children: r }) }) });
};
yc.displayName = Xo;
var Me = "MenuContent", [Kv, Jo] = wt(Me), wc = d.forwardRef(
  (e, n) => {
    const t = bc(Me, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, i = lt(Me, e.__scopeMenu), a = un(Me, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(Qt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Qe, { present: r || i.open, children: /* @__PURE__ */ c.jsx(Qt.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ c.jsx(Zv, { ...o, ref: n }) : /* @__PURE__ */ c.jsx(Xv, { ...o, ref: n }) }) }) });
  }
), Zv = d.forwardRef(
  (e, n) => {
    const t = lt(Me, e.__scopeMenu), r = d.useRef(null), o = ce(n, r);
    return d.useEffect(() => {
      const i = r.current;
      if (i) return Co(i);
    }, []), /* @__PURE__ */ c.jsx(
      Qo,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: t.open,
        disableOutsideScroll: !0,
        onFocusOutside: X(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => t.onOpenChange(!1)
      }
    );
  }
), Xv = d.forwardRef((e, n) => {
  const t = lt(Me, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    Qo,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), Jv = /* @__PURE__ */ Dv("MenuContent.ScrollLock"), Qo = d.forwardRef(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEntryFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: p,
      onFocusOutside: f,
      onInteractOutside: m,
      onDismiss: g,
      disableOutsideScroll: x,
      ...v
    } = e, h = lt(Me, t), y = un(Me, t), w = dn(t), E = gc(t), S = Hv(t), [C, D] = d.useState(null), P = d.useRef(null), j = ce(n, P, h.onContentChange), L = d.useRef(0), B = d.useRef(""), J = d.useRef(0), q = d.useRef(null), U = d.useRef("right"), H = d.useRef(0), Q = x ? Qn : d.Fragment, $ = x ? { as: Jv, allowPinchZoom: !0 } : void 0, ee = (M) => {
      const _ = B.current + M, b = S().filter((k) => !k.disabled), A = document.activeElement, I = b.find((k) => k.ref.current === A)?.textValue, O = b.map((k) => k.textValue), G = dg(O, _, I), V = b.find((k) => k.textValue === G)?.ref.current;
      (function k(W) {
        B.current = W, window.clearTimeout(L.current), W !== "" && (L.current = window.setTimeout(() => k(""), 1e3));
      })(_), V && setTimeout(() => V.focus());
    };
    d.useEffect(() => () => window.clearTimeout(L.current), []), wo();
    const R = d.useCallback((M) => U.current === q.current?.side && pg(M, q.current?.area), []);
    return /* @__PURE__ */ c.jsx(
      Kv,
      {
        scope: t,
        searchRef: B,
        onItemEnter: d.useCallback(
          (M) => {
            R(M) && M.preventDefault();
          },
          [R]
        ),
        onItemLeave: d.useCallback(
          (M) => {
            R(M) || (P.current?.focus(), D(null));
          },
          [R]
        ),
        onTriggerLeave: d.useCallback(
          (M) => {
            R(M) && M.preventDefault();
          },
          [R]
        ),
        pointerGraceTimerRef: J,
        onPointerGraceIntentChange: d.useCallback((M) => {
          q.current = M;
        }, []),
        children: /* @__PURE__ */ c.jsx(Q, { ...$, children: /* @__PURE__ */ c.jsx(
          Zn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: X(i, (M) => {
              M.preventDefault(), P.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ c.jsx(
              rn,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: u,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: m,
                onDismiss: g,
                children: /* @__PURE__ */ c.jsx(
                  Ov,
                  {
                    asChild: !0,
                    ...E,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: D,
                    onEntryFocus: X(l, (M) => {
                      y.isUsingKeyboardRef.current || M.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      Yo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Fc(h.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...v,
                        ref: j,
                        style: { outline: "none", ...v.style },
                        onKeyDown: X(v.onKeyDown, (M) => {
                          const b = M.target.closest("[data-radix-menu-content]") === M.currentTarget, A = M.ctrlKey || M.altKey || M.metaKey, I = M.key.length === 1;
                          b && (M.key === "Tab" && M.preventDefault(), !A && I && ee(M.key));
                          const O = P.current;
                          if (M.target !== O || !Vv.includes(M.key)) return;
                          M.preventDefault();
                          const V = S().filter((k) => !k.disabled).map((k) => k.ref.current);
                          mc.includes(M.key) && V.reverse(), cg(V);
                        }),
                        onBlur: X(e.onBlur, (M) => {
                          M.currentTarget.contains(M.target) || (window.clearTimeout(L.current), B.current = "");
                        }),
                        onPointerMove: X(
                          e.onPointerMove,
                          en((M) => {
                            const _ = M.target, b = H.current !== M.clientX;
                            if (M.currentTarget.contains(_) && b) {
                              const A = M.clientX > H.current ? "right" : "left";
                              U.current = A, H.current = M.clientX;
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
wc.displayName = Me;
var Qv = "MenuGroup", ei = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(se.div, { role: "group", ...r, ref: n });
  }
);
ei.displayName = Qv;
var eg = "MenuLabel", Cc = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(se.div, { ...r, ref: n });
  }
);
Cc.displayName = eg;
var zn = "MenuItem", Qi = "menu.itemSelect", cr = d.forwardRef(
  (e, n) => {
    const { disabled: t = !1, onSelect: r, ...o } = e, i = d.useRef(null), a = un(zn, e.__scopeMenu), s = Jo(zn, e.__scopeMenu), l = ce(n, i), u = d.useRef(!1), p = () => {
      const f = i.current;
      if (!t && f) {
        const m = new CustomEvent(Qi, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Qi, (g) => r?.(g), { once: !0 }), Va(f, m), m.defaultPrevented ? u.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Ec,
      {
        ...o,
        ref: l,
        disabled: t,
        onClick: X(e.onClick, p),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), u.current = !0;
        },
        onPointerUp: X(e.onPointerUp, (f) => {
          u.current || f.currentTarget?.click();
        }),
        onKeyDown: X(e.onKeyDown, (f) => {
          const m = s.searchRef.current !== "";
          t || m && f.key === " " || io.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
cr.displayName = zn;
var Ec = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, disabled: r = !1, textValue: o, ...i } = e, a = Jo(zn, t), s = gc(t), l = d.useRef(null), u = ce(n, l), [p, f] = d.useState(!1), [m, g] = d.useState("");
    return d.useEffect(() => {
      const x = l.current;
      x && g((x.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ c.jsx(
      Qt.ItemSlot,
      {
        scope: t,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ c.jsx(Mv, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ c.jsx(
          se.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: X(
              e.onPointerMove,
              en((x) => {
                r ? a.onItemLeave(x) : (a.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: X(
              e.onPointerLeave,
              en((x) => a.onItemLeave(x))
            ),
            onFocus: X(e.onFocus, () => f(!0)),
            onBlur: X(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), tg = "MenuCheckboxItem", Sc = d.forwardRef(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Pc, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ c.jsx(
      cr,
      {
        role: "menuitemcheckbox",
        "aria-checked": $n(t) ? "mixed" : t,
        ...o,
        ref: n,
        "data-state": ri(t),
        onSelect: X(
          o.onSelect,
          () => r?.($n(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Sc.displayName = tg;
var kc = "MenuRadioGroup", [ng, rg] = wt(
  kc,
  { value: void 0, onValueChange: () => {
  } }
), _c = d.forwardRef(
  (e, n) => {
    const { value: t, onValueChange: r, ...o } = e, i = Ie(r);
    return /* @__PURE__ */ c.jsx(ng, { scope: e.__scopeMenu, value: t, onValueChange: i, children: /* @__PURE__ */ c.jsx(ei, { ...o, ref: n }) });
  }
);
_c.displayName = kc;
var Rc = "MenuRadioItem", jc = d.forwardRef(
  (e, n) => {
    const { value: t, ...r } = e, o = rg(Rc, e.__scopeMenu), i = t === o.value;
    return /* @__PURE__ */ c.jsx(Pc, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ c.jsx(
      cr,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: n,
        "data-state": ri(i),
        onSelect: X(
          r.onSelect,
          () => o.onValueChange?.(t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
jc.displayName = Rc;
var ti = "MenuItemIndicator", [Pc, og] = wt(
  ti,
  { checked: !1 }
), Ac = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, forceMount: r, ...o } = e, i = og(ti, t);
    return /* @__PURE__ */ c.jsx(
      Qe,
      {
        present: r || $n(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          se.span,
          {
            ...o,
            ref: n,
            "data-state": ri(i.checked)
          }
        )
      }
    );
  }
);
Ac.displayName = ti;
var ig = "MenuSeparator", Tc = d.forwardRef(
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
Tc.displayName = ig;
var ag = "MenuArrow", Oc = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = dn(t);
    return /* @__PURE__ */ c.jsx(Ko, { ...o, ...r, ref: n });
  }
);
Oc.displayName = ag;
var ni = "MenuSub", [sg, Mc] = wt(ni), Dc = (e) => {
  const { __scopeMenu: n, children: t, open: r = !1, onOpenChange: o } = e, i = lt(ni, n), a = dn(n), [s, l] = d.useState(null), [u, p] = d.useState(null), f = Ie(o);
  return d.useEffect(() => (i.open === !1 && f(!1), () => f(!1)), [i.open, f]), /* @__PURE__ */ c.jsx(sr, { ...a, children: /* @__PURE__ */ c.jsx(
    hc,
    {
      scope: n,
      open: r,
      onOpenChange: f,
      content: u,
      onContentChange: p,
      children: /* @__PURE__ */ c.jsx(
        sg,
        {
          scope: n,
          contentId: Oe(),
          triggerId: Oe(),
          trigger: s,
          onTriggerChange: l,
          children: t
        }
      )
    }
  ) });
};
Dc.displayName = ni;
var Yt = "MenuSubTrigger", Nc = d.forwardRef(
  (e, n) => {
    const t = lt(Yt, e.__scopeMenu), r = un(Yt, e.__scopeMenu), o = Mc(Yt, e.__scopeMenu), i = Jo(Yt, e.__scopeMenu), a = d.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = i, u = { __scopeMenu: e.__scopeMenu }, p = d.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return d.useEffect(() => p, [p]), d.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [s, l]), /* @__PURE__ */ c.jsx(Zo, { asChild: !0, ...u, children: /* @__PURE__ */ c.jsx(
      Ec,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": o.contentId,
        "data-state": Fc(t.open),
        ...e,
        ref: Je(n, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: X(
          e.onPointerMove,
          en((f) => {
            i.onItemEnter(f), !f.defaultPrevented && !e.disabled && !t.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              t.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: X(
          e.onPointerLeave,
          en((f) => {
            p();
            const m = t.content?.getBoundingClientRect();
            if (m) {
              const g = t.content?.dataset.side, x = g === "right", v = x ? -5 : 5, h = m[x ? "left" : "right"], y = m[x ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + v, y: f.clientY },
                  { x: h, y: m.top },
                  { x: y, y: m.top },
                  { x: y, y: m.bottom },
                  { x: h, y: m.bottom }
                ],
                side: g
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
        onKeyDown: X(e.onKeyDown, (f) => {
          const m = i.searchRef.current !== "";
          e.disabled || m && f.key === " " || Wv[r.dir].includes(f.key) && (t.onOpenChange(!0), t.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Nc.displayName = Yt;
var Ic = "MenuSubContent", Lc = d.forwardRef(
  (e, n) => {
    const t = bc(Me, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, i = lt(Me, e.__scopeMenu), a = un(Me, e.__scopeMenu), s = Mc(Ic, e.__scopeMenu), l = d.useRef(null), u = ce(n, l);
    return /* @__PURE__ */ c.jsx(Qt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Qe, { present: r || i.open, children: /* @__PURE__ */ c.jsx(Qt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      Qo,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (p) => {
          a.isUsingKeyboardRef.current && l.current?.focus(), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: X(e.onFocusOutside, (p) => {
          p.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: X(e.onEscapeKeyDown, (p) => {
          a.onClose(), p.preventDefault();
        }),
        onKeyDown: X(e.onKeyDown, (p) => {
          const f = p.currentTarget.contains(p.target), m = Bv[a.dir].includes(p.key);
          f && m && (i.onOpenChange(!1), s.trigger?.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
Lc.displayName = Ic;
function Fc(e) {
  return e ? "open" : "closed";
}
function $n(e) {
  return e === "indeterminate";
}
function ri(e) {
  return $n(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function cg(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function lg(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
function dg(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((u) => u === n[0]) ? n[0] : n, i = t ? e.indexOf(t) : -1;
  let a = lg(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== t));
  const l = a.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== t ? l : void 0;
}
function ug(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
    const s = n[i], l = n[a], u = s.x, p = s.y, f = l.x, m = l.y;
    p > r != m > r && t < (f - u) * (r - p) / (m - p) + u && (o = !o);
  }
  return o;
}
function pg(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return ug(t, n);
}
function en(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var fg = xc, mg = Zo, vg = yc, gg = wc, hg = ei, xg = Cc, bg = cr, yg = Sc, wg = _c, Cg = jc, Eg = Ac, Sg = Tc, kg = Oc, _g = Dc, Rg = Nc, jg = Lc, lr = "DropdownMenu", [Pg] = Xe(
  lr,
  [vc]
), Re = vc(), [Ag, zc] = Pg(lr), oi = (e) => {
  const {
    __scopeDropdownMenu: n,
    children: t,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, l = Re(n), u = d.useRef(null), [p, f] = mt({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: lr
  });
  return /* @__PURE__ */ c.jsx(
    Ag,
    {
      scope: n,
      triggerId: Oe(),
      triggerRef: u,
      contentId: Oe(),
      open: p,
      onOpenChange: f,
      onOpenToggle: d.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: /* @__PURE__ */ c.jsx(fg, { ...l, open: p, onOpenChange: f, dir: r, modal: s, children: t })
    }
  );
};
oi.displayName = lr;
var $c = "DropdownMenuTrigger", ii = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, disabled: r = !1, ...o } = e, i = zc($c, t), a = Re(t);
    return /* @__PURE__ */ c.jsx(mg, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
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
        ref: Je(n, i.triggerRef),
        onPointerDown: X(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(), i.open || s.preventDefault());
        }),
        onKeyDown: X(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && i.onOpenToggle(), s.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
ii.displayName = $c;
var Tg = "DropdownMenuPortal", dr = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = Re(n);
  return /* @__PURE__ */ c.jsx(vg, { ...r, ...t });
};
dr.displayName = Tg;
var Vc = "DropdownMenuContent", ai = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = zc(Vc, t), i = Re(t), a = d.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      gg,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: n,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (s) => {
          a.current || o.triggerRef.current?.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: X(e.onInteractOutside, (s) => {
          const l = s.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0, p = l.button === 2 || u;
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
ai.displayName = Vc;
var Og = "DropdownMenuGroup", Wc = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ c.jsx(hg, { ...o, ...r, ref: n });
  }
);
Wc.displayName = Og;
var Mg = "DropdownMenuLabel", Bc = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ c.jsx(xg, { ...o, ...r, ref: n });
  }
);
Bc.displayName = Mg;
var Dg = "DropdownMenuItem", si = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ c.jsx(bg, { ...o, ...r, ref: n });
  }
);
si.displayName = Dg;
var Ng = "DropdownMenuCheckboxItem", Hc = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(yg, { ...o, ...r, ref: n });
});
Hc.displayName = Ng;
var Ig = "DropdownMenuRadioGroup", Uc = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(wg, { ...o, ...r, ref: n });
});
Uc.displayName = Ig;
var Lg = "DropdownMenuRadioItem", Gc = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(Cg, { ...o, ...r, ref: n });
});
Gc.displayName = Lg;
var Fg = "DropdownMenuItemIndicator", ci = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(Eg, { ...o, ...r, ref: n });
});
ci.displayName = Fg;
var zg = "DropdownMenuSeparator", qc = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(Sg, { ...o, ...r, ref: n });
});
qc.displayName = zg;
var $g = "DropdownMenuArrow", Vg = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ c.jsx(kg, { ...o, ...r, ref: n });
  }
);
Vg.displayName = $g;
var Wg = (e) => {
  const { __scopeDropdownMenu: n, children: t, open: r, onOpenChange: o, defaultOpen: i } = e, a = Re(n), [s, l] = mt({
    prop: r,
    defaultProp: i ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ c.jsx(_g, { ...a, open: s, onOpenChange: l, children: t });
}, Bg = "DropdownMenuSubTrigger", Yc = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(Rg, { ...o, ...r, ref: n });
});
Yc.displayName = Bg;
var Hg = "DropdownMenuSubContent", Kc = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(
    jg,
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
Kc.displayName = Hg;
var Ug = oi, Gg = ii, qg = dr, Yg = ai, Kg = si;
function wy({ ...e }) {
  return /* @__PURE__ */ c.jsx(oi, { "data-slot": "dropdown-menu", ...e });
}
function Cy({ ...e }) {
  return /* @__PURE__ */ c.jsx(dr, { "data-slot": "dropdown-menu-portal", ...e });
}
function Ey({ ...e }) {
  return /* @__PURE__ */ c.jsx(ii, { "data-slot": "dropdown-menu-trigger", ...e });
}
function Sy({
  className: e,
  align: n = "start",
  sideOffset: t = 4,
  ...r
}) {
  return /* @__PURE__ */ c.jsx(dr, { children: /* @__PURE__ */ c.jsx(
    ai,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      align: n,
      className: N(
        "z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-2xl bg-white p-1 text-popover-foreground shadow-dropdown duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...r
    }
  ) });
}
function ky({ ...e }) {
  return /* @__PURE__ */ c.jsx(Wc, { "data-slot": "dropdown-menu-group", ...e });
}
function _y({
  className: e,
  inset: n,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ c.jsx(
    si,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": n,
      "data-variant": t,
      className: N(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        e
      ),
      ...r
    }
  );
}
function Ry({
  className: e,
  children: n,
  checked: t,
  inset: r,
  ...o
}) {
  return /* @__PURE__ */ c.jsxs(
    Hc,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      "data-inset": r,
      className: N(
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
            children: /* @__PURE__ */ c.jsx(ci, { children: /* @__PURE__ */ c.jsx(an, {}) })
          }
        ),
        n
      ]
    }
  );
}
function jy({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(Uc, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function Py({
  className: e,
  children: n,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(
    Gc,
    {
      "data-slot": "dropdown-menu-radio-item",
      "data-inset": t,
      className: N(
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
            children: /* @__PURE__ */ c.jsx(ci, { children: /* @__PURE__ */ c.jsx(an, {}) })
          }
        ),
        n
      ]
    }
  );
}
function Ay({
  className: e,
  inset: n,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    Bc,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": n,
      className: N(
        "px-7 py-4 text-base leading-5 font-manrope font-semibold text-gray-900 data-inset:pl-7",
        e
      ),
      ...t
    }
  );
}
function Ty({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    qc,
    {
      "data-slot": "dropdown-menu-separator",
      className: N("-mx-1 my-1 h-px bg-gray-50", e),
      ...n
    }
  );
}
function Oy({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: N(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        e
      ),
      ...n
    }
  );
}
function My({ ...e }) {
  return /* @__PURE__ */ c.jsx(Wg, { "data-slot": "dropdown-menu-sub", ...e });
}
function Dy({
  className: e,
  inset: n,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(
    Yc,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": n,
      className: N(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ c.jsx(Do, { className: "cn-rtl-flip ml-auto" })
      ]
    }
  );
}
function Ny({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    Kc,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: N(
        "z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...n
    }
  );
}
var Zg = (e) => e.type === "checkbox", Kt = (e) => e instanceof Date, li = (e) => e == null;
const Zc = (e) => typeof e == "object";
var ht = (e) => !li(e) && !Array.isArray(e) && Zc(e) && !Kt(e), Xg = (e) => ht(e) && e.target ? Zg(e.target) ? e.target.checked : e.target.value : e, Jg = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Qg = (e, n) => e.has(Jg(n)), eh = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return ht(n) && n.hasOwnProperty("isPrototypeOf");
}, th = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Xc(e) {
  let n;
  const t = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    n = new Date(e);
  else if (!(th && (e instanceof Blob || r)) && (t || ht(e)))
    if (n = t ? [] : Object.create(Object.getPrototypeOf(e)), !t && !eh(e))
      n = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (n[o] = Xc(e[o]));
  else
    return e;
  return n;
}
var Jc = (e) => /^\w*$/.test(e), ao = (e) => e === void 0, nh = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Qc = (e) => nh(e.replace(/["|']|\]/g, "").split(/\.|\[/)), je = (e, n, t) => {
  if (!n || !ht(e))
    return t;
  const r = (Jc(n) ? [n] : Qc(n)).reduce((o, i) => li(o) ? o : o[i], e);
  return ao(r) || r === e ? ao(e[n]) ? t : e[n] : r;
}, Nr = (e) => typeof e == "boolean", ea = (e, n, t) => {
  let r = -1;
  const o = Jc(n) ? [n] : Qc(n), i = o.length, a = i - 1;
  for (; ++r < i; ) {
    const s = o[r];
    let l = t;
    if (r !== a) {
      const u = e[s];
      l = ht(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = l, e = e[s];
  }
};
const ta = {
  BLUR: "blur",
  CHANGE: "change"
}, na = {
  all: "all"
}, di = ie.createContext(null);
di.displayName = "HookFormContext";
const ur = () => ie.useContext(di), rh = (e) => {
  const { children: n, ...t } = e;
  return ie.createElement(di.Provider, { value: t }, n);
};
var oh = (e, n, t, r = !0) => {
  const o = {
    defaultValues: n._defaultValues
  };
  for (const i in e)
    Object.defineProperty(o, i, {
      get: () => {
        const a = i;
        return n._proxyFormState[a] !== na.all && (n._proxyFormState[a] = !r || na.all), t && (t[a] = !0), e[a];
      }
    });
  return o;
};
const el = typeof window < "u" ? ie.useLayoutEffect : ie.useEffect;
function tl(e) {
  const n = ur(), { control: t = n.control, disabled: r, name: o, exact: i } = e || {}, [a, s] = ie.useState(t._formState), l = ie.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return el(() => t._subscribe({
    name: o,
    formState: l.current,
    exact: i,
    callback: (u) => {
      !r && s({
        ...t._formState,
        ...u
      });
    }
  }), [o, r, i]), ie.useEffect(() => {
    l.current.isValid && t._setValid(!0);
  }, [t]), ie.useMemo(() => oh(a, t, l.current, !1), [a, t]);
}
var ih = (e) => typeof e == "string", ra = (e, n, t, r, o) => ih(e) ? je(t, e, o) : Array.isArray(e) ? e.map((i) => je(t, i)) : t, oa = (e) => li(e) || !Zc(e);
function Tn(e, n, t = /* @__PURE__ */ new WeakSet()) {
  if (oa(e) || oa(n))
    return Object.is(e, n);
  if (Kt(e) && Kt(n))
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
      if (Kt(a) && Kt(s) || ht(a) && ht(s) || Array.isArray(a) && Array.isArray(s) ? !Tn(a, s, t) : !Object.is(a, s))
        return !1;
    }
  }
  return !0;
}
function ah(e) {
  const n = ur(), { control: t = n.control, name: r, defaultValue: o, disabled: i, exact: a, compute: s } = e || {}, l = ie.useRef(o), u = ie.useRef(s), p = ie.useRef(void 0), f = ie.useRef(t), m = ie.useRef(r);
  u.current = s;
  const [g, x] = ie.useState(() => {
    const S = t._getWatch(r, l.current);
    return u.current ? u.current(S) : S;
  }), v = ie.useCallback((S) => {
    const C = ra(r, t._names, S || t._formValues, !1, l.current);
    return u.current ? u.current(C) : C;
  }, [t._formValues, t._names, r]), h = ie.useCallback((S) => {
    if (!i) {
      const C = ra(r, t._names, S || t._formValues, !1, l.current);
      if (u.current) {
        const D = u.current(C);
        Tn(D, p.current) || (x(D), p.current = D);
      } else
        x(C);
    }
  }, [t._formValues, t._names, i, r]);
  el(() => ((f.current !== t || !Tn(m.current, r)) && (f.current = t, m.current = r, h()), t._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: a,
    callback: (S) => {
      h(S.values);
    }
  })), [t, a, r, h]), ie.useEffect(() => t._removeUnmounted());
  const y = f.current !== t, w = m.current, E = ie.useMemo(() => {
    if (i)
      return null;
    const S = !y && !Tn(w, r);
    return y || S ? v() : null;
  }, [i, y, r, w, v]);
  return E !== null ? E : g;
}
function sh(e) {
  const n = ur(), { name: t, disabled: r, control: o = n.control, shouldUnregister: i, defaultValue: a, exact: s = !0 } = e, l = Qg(o._names.array, t), u = ie.useMemo(() => je(o._formValues, t, je(o._defaultValues, t, a)), [o, t, a]), p = ah({
    control: o,
    name: t,
    defaultValue: u,
    exact: s
  }), f = tl({
    control: o,
    name: t,
    exact: s
  }), m = ie.useRef(e), g = ie.useRef(void 0), x = ie.useRef(o.register(t, {
    ...e.rules,
    value: p,
    ...Nr(e.disabled) ? { disabled: e.disabled } : {}
  }));
  m.current = e;
  const v = ie.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!je(f.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!je(f.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!je(f.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!je(f.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => je(f.errors, t)
    }
  }), [f, t]), h = ie.useCallback((S) => x.current.onChange({
    target: {
      value: Xg(S),
      name: t
    },
    type: ta.CHANGE
  }), [t]), y = ie.useCallback(() => x.current.onBlur({
    target: {
      value: je(o._formValues, t),
      name: t
    },
    type: ta.BLUR
  }), [t, o._formValues]), w = ie.useCallback((S) => {
    const C = je(o._fields, t);
    C && S && (C._f.ref = {
      focus: () => S.focus && S.focus(),
      select: () => S.select && S.select(),
      setCustomValidity: (D) => S.setCustomValidity(D),
      reportValidity: () => S.reportValidity()
    });
  }, [o._fields, t]), E = ie.useMemo(() => ({
    name: t,
    value: p,
    ...Nr(r) || f.disabled ? { disabled: f.disabled || r } : {},
    onChange: h,
    onBlur: y,
    ref: w
  }), [t, r, f.disabled, h, y, w, p]);
  return ie.useEffect(() => {
    const S = o._options.shouldUnregister || i, C = g.current;
    C && C !== t && !l && o.unregister(C), o.register(t, {
      ...m.current.rules,
      ...Nr(m.current.disabled) ? { disabled: m.current.disabled } : {}
    });
    const D = (P, j) => {
      const L = je(o._fields, P);
      L && L._f && (L._f.mount = j);
    };
    if (D(t, !0), S) {
      const P = Xc(je(o._options.defaultValues, t, m.current.defaultValue));
      ea(o._defaultValues, t, P), ao(je(o._formValues, t)) && ea(o._formValues, t, P);
    }
    return !l && o.register(t), g.current = t, () => {
      (l ? S && !o._state.action : S) ? o.unregister(t) : D(t, !1);
    };
  }, [t, o, l, i]), ie.useEffect(() => {
    o._setDisabledField({
      disabled: r,
      name: t
    });
  }, [r, t, o]), ie.useMemo(() => ({
    field: E,
    formState: f,
    fieldState: v
  }), [E, f, v]);
}
const ch = (e) => e.render(sh(e)), nl = Yn(
  ({ className: e, children: n, required: t, ...r }, o) => /* @__PURE__ */ c.jsxs(
    "label",
    {
      ref: o,
      "data-slot": "label",
      className: N("font-manrope font-medium text-sm text-gray-700", e),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx("span", { children: n }),
        t ? /* @__PURE__ */ c.jsx("span", { className: "text-base font-normal text-bright-red-600 ml-1 leading-[22px]", children: "*" }) : null
      ]
    }
  )
);
nl.displayName = "Label";
const Iy = rh, rl = $a({}), Ly = ({
  ...e
}) => /* @__PURE__ */ c.jsx(rl.Provider, { value: { name: e.name }, children: /* @__PURE__ */ c.jsx(ch, { ...e }) }), pr = () => {
  const e = Zr(rl), n = Zr(ol), { getFieldState: t } = ur(), r = tl({ name: e.name }), o = t(e.name, r);
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
}, ol = $a({});
function Fy({ className: e, ...n }) {
  const t = ud();
  return /* @__PURE__ */ c.jsx(ol.Provider, { value: { id: t }, children: /* @__PURE__ */ c.jsx("div", { "data-slot": "form-item", className: N("grid gap-2", e), ...n }) });
}
function zy({ className: e, ...n }) {
  const { error: t, formItemId: r } = pr();
  return /* @__PURE__ */ c.jsx(
    nl,
    {
      "data-slot": "form-label",
      "data-error": !!t,
      className: e,
      htmlFor: r,
      ...n
    }
  );
}
function $y({ ...e }) {
  const { error: n, formItemId: t, formDescriptionId: r, formMessageId: o } = pr();
  return /* @__PURE__ */ c.jsx(
    tr,
    {
      "data-slot": "form-control",
      id: t,
      "aria-describedby": n ? `${r} ${o}` : `${r}`,
      "aria-invalid": !!n,
      ...e
    }
  );
}
function Vy({ className: e, ...n }) {
  const { formDescriptionId: t } = pr();
  return /* @__PURE__ */ c.jsx(
    "p",
    {
      "data-slot": "form-description",
      id: t,
      className: N("text-muted-foreground text-sm", e),
      ...n
    }
  );
}
function Wy({ className: e, ...n }) {
  const { error: t, formMessageId: r } = pr(), o = t ? String(t?.message ?? "") : n.children;
  return o ? /* @__PURE__ */ c.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: N("text-bright-red-600 text-sm", e),
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
function lh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: N("inline-block", n), ...r, children: [
    /* @__PURE__ */ c.jsx("circle", { cx: "12.6457", cy: "4.35422", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "10.0876", cy: "9.80881", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "3.35422", cy: "11.0876", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "5.46091", cy: "5.63328", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("path", { d: "M5.19745 6.83691L3.91846 10.0344", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("path", { d: "M12.232 5.55786L10.3135 8.75533", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("path", { d: "M6.47645 6.83691L9.03442 8.7554", stroke: "currentColor" })
  ] });
}
function dh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", className: N("inline-block", n), ...r, children: [
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
function uh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: N("inline-block", n),
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
function ph({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: N("inline-block", n),
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
function fh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: N("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M10.6517 3.73292C10.3353 3.1997 9.64138 3.1997 9.32503 3.73292L6.86562 7.83985C6.68193 8.13482 6.36558 8.29365 6.04922 8.21424L2.62035 7.46546C2.03866 7.34067 1.54882 7.93061 1.69169 8.56594L3.3449 15.6112C3.43675 15.9856 3.72249 16.2466 4.06946 16.2693C4.06946 16.2693 5.34508 16.6663 9.99856 16.6663C14.652 16.6663 15.9277 16.2693 15.9277 16.2693C16.1828 16.2012 16.5604 15.9743 16.6522 15.6112L18.3054 8.56594C18.4585 7.93061 17.9584 7.34067 17.3768 7.46546L13.9479 8.21424C13.6315 8.28231 13.305 8.13482 13.1315 7.83985L10.6517 3.73292Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeMiterlimit: "10"
    }
  ) });
}
function mh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: N("inline-block", n),
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
function vh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: N("inline-block", n),
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
function gh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: N("inline-block", n),
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
function hh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: N("inline-block", n), ...r, children: [
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
function xh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: N("inline-block", n), ...r, children: [
    /* @__PURE__ */ c.jsx("circle", { cx: "8", cy: "8", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "8", cy: "8", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "8", cy: "8", r: "5.5", stroke: "currentColor" })
  ] });
}
function bh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: N("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM7.50001 5.41667C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H7.50001V5.41667ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function yh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: N("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667H7.50001C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function wh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: N("inline-block", n),
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
function Ch({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: N("inline-block", n),
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
function Eh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: N("inline-block", n),
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
function Sh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: N("inline-block", n),
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
function kh({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: N("inline-block", n),
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
function _h({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 48 48", fill: "none", className: N("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M30 16V32H10V16H30ZM32 12H8C6.9 12 6 12.9 6 14V34C6 35.1 6.9 36 8 36H32C33.1 36 34 35.1 34 34V27L42 35V13L34 21V14C34 12.9 33.1 12 32 12Z",
      fill: "currentColor"
    }
  ) });
}
const Rh = {
  analytics: lh,
  announcement: dh,
  church: uh,
  class: ph,
  crown: fh,
  event: mh,
  gift: vh,
  home: gh,
  list: hh,
  livestream: xh,
  "lock-closed": bh,
  "lock-open": yh,
  ministry: wh,
  podcast: Ch,
  series: Eh,
  sermon: Sh,
  subscription: kh,
  video: _h
};
function By({ name: e, ...n }) {
  const t = Rh[e];
  return /* @__PURE__ */ c.jsx(t, { ...n });
}
var Cn = { exports: {} }, En = { exports: {} }, le = {};
var ia;
function jh() {
  if (ia) return le;
  ia = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, t = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, a = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, l = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, m = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, g = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, v = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, h = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, y = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, w = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function E(C) {
    if (typeof C == "object" && C !== null) {
      var D = C.$$typeof;
      switch (D) {
        case n:
          switch (C = C.type, C) {
            case l:
            case u:
            case r:
            case i:
            case o:
            case f:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case s:
                case p:
                case x:
                case g:
                case a:
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
  function S(C) {
    return E(C) === u;
  }
  return le.AsyncMode = l, le.ConcurrentMode = u, le.ContextConsumer = s, le.ContextProvider = a, le.Element = n, le.ForwardRef = p, le.Fragment = r, le.Lazy = x, le.Memo = g, le.Portal = t, le.Profiler = i, le.StrictMode = o, le.Suspense = f, le.isAsyncMode = function(C) {
    return S(C) || E(C) === l;
  }, le.isConcurrentMode = S, le.isContextConsumer = function(C) {
    return E(C) === s;
  }, le.isContextProvider = function(C) {
    return E(C) === a;
  }, le.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === n;
  }, le.isForwardRef = function(C) {
    return E(C) === p;
  }, le.isFragment = function(C) {
    return E(C) === r;
  }, le.isLazy = function(C) {
    return E(C) === x;
  }, le.isMemo = function(C) {
    return E(C) === g;
  }, le.isPortal = function(C) {
    return E(C) === t;
  }, le.isProfiler = function(C) {
    return E(C) === i;
  }, le.isStrictMode = function(C) {
    return E(C) === o;
  }, le.isSuspense = function(C) {
    return E(C) === f;
  }, le.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === r || C === u || C === i || C === o || C === f || C === m || typeof C == "object" && C !== null && (C.$$typeof === x || C.$$typeof === g || C.$$typeof === a || C.$$typeof === s || C.$$typeof === p || C.$$typeof === h || C.$$typeof === y || C.$$typeof === w || C.$$typeof === v);
  }, le.typeOf = E, le;
}
var de = {};
var aa;
function Ph() {
  return aa || (aa = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, t = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, a = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, l = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, m = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, g = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, v = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, h = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, y = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, w = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function E(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === r || T === u || T === i || T === o || T === f || T === m || typeof T == "object" && T !== null && (T.$$typeof === x || T.$$typeof === g || T.$$typeof === a || T.$$typeof === s || T.$$typeof === p || T.$$typeof === h || T.$$typeof === y || T.$$typeof === w || T.$$typeof === v);
    }
    function S(T) {
      if (typeof T == "object" && T !== null) {
        var pe = T.$$typeof;
        switch (pe) {
          case n:
            var te = T.type;
            switch (te) {
              case l:
              case u:
              case r:
              case i:
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
    var C = l, D = u, P = s, j = a, L = n, B = p, J = r, q = x, U = g, H = t, Q = i, $ = o, ee = f, R = !1;
    function M(T) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(T) || S(T) === l;
    }
    function _(T) {
      return S(T) === u;
    }
    function b(T) {
      return S(T) === s;
    }
    function A(T) {
      return S(T) === a;
    }
    function I(T) {
      return typeof T == "object" && T !== null && T.$$typeof === n;
    }
    function O(T) {
      return S(T) === p;
    }
    function G(T) {
      return S(T) === r;
    }
    function V(T) {
      return S(T) === x;
    }
    function k(T) {
      return S(T) === g;
    }
    function W(T) {
      return S(T) === t;
    }
    function Z(T) {
      return S(T) === i;
    }
    function F(T) {
      return S(T) === o;
    }
    function re(T) {
      return S(T) === f;
    }
    de.AsyncMode = C, de.ConcurrentMode = D, de.ContextConsumer = P, de.ContextProvider = j, de.Element = L, de.ForwardRef = B, de.Fragment = J, de.Lazy = q, de.Memo = U, de.Portal = H, de.Profiler = Q, de.StrictMode = $, de.Suspense = ee, de.isAsyncMode = M, de.isConcurrentMode = _, de.isContextConsumer = b, de.isContextProvider = A, de.isElement = I, de.isForwardRef = O, de.isFragment = G, de.isLazy = V, de.isMemo = k, de.isPortal = W, de.isProfiler = Z, de.isStrictMode = F, de.isSuspense = re, de.isValidElementType = E, de.typeOf = S;
  })()), de;
}
var sa;
function il() {
  return sa || (sa = 1, process.env.NODE_ENV === "production" ? En.exports = jh() : En.exports = Ph()), En.exports;
}
var Ir, ca;
function Ah() {
  if (ca) return Ir;
  ca = 1;
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
      var l = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        u[p] = p;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ir = o() ? Object.assign : function(i, a) {
    for (var s, l = r(i), u, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var f in s)
        n.call(s, f) && (l[f] = s[f]);
      if (e) {
        u = e(s);
        for (var m = 0; m < u.length; m++)
          t.call(s, u[m]) && (l[u[m]] = s[u[m]]);
      }
    }
    return l;
  }, Ir;
}
var Lr, la;
function ui() {
  if (la) return Lr;
  la = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Lr = e, Lr;
}
var Fr, da;
function al() {
  return da || (da = 1, Fr = Function.call.bind(Object.prototype.hasOwnProperty)), Fr;
}
var zr, ua;
function Th() {
  if (ua) return zr;
  ua = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ ui(), t = {}, r = /* @__PURE__ */ al();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (r(i, p)) {
          var f;
          try {
            if (typeof i[p] != "function") {
              var m = Error(
                (l || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            f = i[p](a, p, l, s, null, n);
          } catch (x) {
            f = x;
          }
          if (f && !(f instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in t)) {
            t[f.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + s + " type: " + f.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, zr = o, zr;
}
var $r, pa;
function Oh() {
  if (pa) return $r;
  pa = 1;
  var e = il(), n = Ah(), t = /* @__PURE__ */ ui(), r = /* @__PURE__ */ al(), o = /* @__PURE__ */ Th(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return $r = function(s, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function f(_) {
      var b = _ && (u && _[u] || _[p]);
      if (typeof b == "function")
        return b;
    }
    var m = "<<anonymous>>", g = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: w(),
      arrayOf: E,
      element: S(),
      elementType: C(),
      instanceOf: D,
      node: B(),
      objectOf: j,
      oneOf: P,
      oneOfType: L,
      shape: q,
      exact: U
    };
    function x(_, b) {
      return _ === b ? _ !== 0 || 1 / _ === 1 / b : _ !== _ && b !== b;
    }
    function v(_, b) {
      this.message = _, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function h(_) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, A = 0;
      function I(G, V, k, W, Z, F, re) {
        if (W = W || m, F = F || k, re !== t) {
          if (l) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = W + ":" + k;
            !b[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[pe] = !0, A++);
          }
        }
        return V[k] == null ? G ? V[k] === null ? new v("The " + Z + " `" + F + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new v("The " + Z + " `" + F + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : _(V, k, W, Z, F);
      }
      var O = I.bind(null, !1);
      return O.isRequired = I.bind(null, !0), O;
    }
    function y(_) {
      function b(A, I, O, G, V, k) {
        var W = A[I], Z = $(W);
        if (Z !== _) {
          var F = ee(W);
          return new v(
            "Invalid " + G + " `" + V + "` of type " + ("`" + F + "` supplied to `" + O + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return h(b);
    }
    function w() {
      return h(a);
    }
    function E(_) {
      function b(A, I, O, G, V) {
        if (typeof _ != "function")
          return new v("Property `" + V + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var k = A[I];
        if (!Array.isArray(k)) {
          var W = $(k);
          return new v("Invalid " + G + " `" + V + "` of type " + ("`" + W + "` supplied to `" + O + "`, expected an array."));
        }
        for (var Z = 0; Z < k.length; Z++) {
          var F = _(k, Z, O, G, V + "[" + Z + "]", t);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return h(b);
    }
    function S() {
      function _(b, A, I, O, G) {
        var V = b[A];
        if (!s(V)) {
          var k = $(V);
          return new v("Invalid " + O + " `" + G + "` of type " + ("`" + k + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(_);
    }
    function C() {
      function _(b, A, I, O, G) {
        var V = b[A];
        if (!e.isValidElementType(V)) {
          var k = $(V);
          return new v("Invalid " + O + " `" + G + "` of type " + ("`" + k + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(_);
    }
    function D(_) {
      function b(A, I, O, G, V) {
        if (!(A[I] instanceof _)) {
          var k = _.name || m, W = M(A[I]);
          return new v("Invalid " + G + " `" + V + "` of type " + ("`" + W + "` supplied to `" + O + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return h(b);
    }
    function P(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function b(A, I, O, G, V) {
        for (var k = A[I], W = 0; W < _.length; W++)
          if (x(k, _[W]))
            return null;
        var Z = JSON.stringify(_, function(re, T) {
          var pe = ee(T);
          return pe === "symbol" ? String(T) : T;
        });
        return new v("Invalid " + G + " `" + V + "` of value `" + String(k) + "` " + ("supplied to `" + O + "`, expected one of " + Z + "."));
      }
      return h(b);
    }
    function j(_) {
      function b(A, I, O, G, V) {
        if (typeof _ != "function")
          return new v("Property `" + V + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var k = A[I], W = $(k);
        if (W !== "object")
          return new v("Invalid " + G + " `" + V + "` of type " + ("`" + W + "` supplied to `" + O + "`, expected an object."));
        for (var Z in k)
          if (r(k, Z)) {
            var F = _(k, Z, O, G, V + "." + Z, t);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return h(b);
    }
    function L(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var b = 0; b < _.length; b++) {
        var A = _[b];
        if (typeof A != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + R(A) + " at index " + b + "."
          ), a;
      }
      function I(O, G, V, k, W) {
        for (var Z = [], F = 0; F < _.length; F++) {
          var re = _[F], T = re(O, G, V, k, W, t);
          if (T == null)
            return null;
          T.data && r(T.data, "expectedType") && Z.push(T.data.expectedType);
        }
        var pe = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new v("Invalid " + k + " `" + W + "` supplied to " + ("`" + V + "`" + pe + "."));
      }
      return h(I);
    }
    function B() {
      function _(b, A, I, O, G) {
        return H(b[A]) ? null : new v("Invalid " + O + " `" + G + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return h(_);
    }
    function J(_, b, A, I, O) {
      return new v(
        (_ || "React class") + ": " + b + " type `" + A + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function q(_) {
      function b(A, I, O, G, V) {
        var k = A[I], W = $(k);
        if (W !== "object")
          return new v("Invalid " + G + " `" + V + "` of type `" + W + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var Z in _) {
          var F = _[Z];
          if (typeof F != "function")
            return J(O, G, V, Z, ee(F));
          var re = F(k, Z, O, G, V + "." + Z, t);
          if (re)
            return re;
        }
        return null;
      }
      return h(b);
    }
    function U(_) {
      function b(A, I, O, G, V) {
        var k = A[I], W = $(k);
        if (W !== "object")
          return new v("Invalid " + G + " `" + V + "` of type `" + W + "` " + ("supplied to `" + O + "`, expected `object`."));
        var Z = n({}, A[I], _);
        for (var F in Z) {
          var re = _[F];
          if (r(_, F) && typeof re != "function")
            return J(O, G, V, F, ee(re));
          if (!re)
            return new v(
              "Invalid " + G + " `" + V + "` key `" + F + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(A[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var T = re(k, F, O, G, V + "." + F, t);
          if (T)
            return T;
        }
        return null;
      }
      return h(b);
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
            var A = b.call(_), I;
            if (b !== _.entries) {
              for (; !(I = A.next()).done; )
                if (!H(I.value))
                  return !1;
            } else
              for (; !(I = A.next()).done; ) {
                var O = I.value;
                if (O && !H(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(_, b) {
      return _ === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function $(_) {
      var b = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : Q(b, _) ? "symbol" : b;
    }
    function ee(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var b = $(_);
      if (b === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function R(_) {
      var b = ee(_);
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
      return !_.constructor || !_.constructor.name ? m : _.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, $r;
}
var Vr, fa;
function Mh() {
  if (fa) return Vr;
  fa = 1;
  var e = /* @__PURE__ */ ui();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, Vr = function() {
    function r(a, s, l, u, p, f) {
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
  }, Vr;
}
var ma;
function Dh() {
  if (ma) return Cn.exports;
  if (ma = 1, process.env.NODE_ENV !== "production") {
    var e = il(), n = !0;
    Cn.exports = /* @__PURE__ */ Oh()(e.isElement, n);
  } else
    Cn.exports = /* @__PURE__ */ Mh()();
  return Cn.exports;
}
var Nh = /* @__PURE__ */ Dh();
const me = /* @__PURE__ */ yo(Nh), Ih = /* @__PURE__ */ new Map([
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
function Tt(e, n, t) {
  const r = Lh(e), { webkitRelativePath: o } = e, i = typeof n == "string" ? n : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && va(r, "path", i), va(r, "relativePath", i), r;
}
function Lh(e) {
  const { name: n } = e;
  if (n && n.lastIndexOf(".") !== -1 && !e.type) {
    const r = n.split(".").pop().toLowerCase(), o = Ih.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function va(e, n, t) {
  Object.defineProperty(e, n, {
    value: t,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const Fh = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function zh(e) {
  return yt(this, void 0, void 0, function* () {
    return Vn(e) && $h(e.dataTransfer) ? Hh(e.dataTransfer, e.type) : Vh(e) ? Wh(e) : Array.isArray(e) && e.every((n) => "getFile" in n && typeof n.getFile == "function") ? Bh(e) : [];
  });
}
function $h(e) {
  return Vn(e);
}
function Vh(e) {
  return Vn(e) && Vn(e.target);
}
function Vn(e) {
  return typeof e == "object" && e !== null;
}
function Wh(e) {
  return so(e.target.files).map((n) => Tt(n));
}
function Bh(e) {
  return yt(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((t) => t.getFile()))).map((t) => Tt(t));
  });
}
function Hh(e, n) {
  return yt(this, void 0, void 0, function* () {
    if (e.items) {
      const t = so(e.items).filter((o) => o.kind === "file");
      if (n !== "drop")
        return t;
      const r = yield Promise.all(t.map(Uh));
      return ga(sl(r));
    }
    return ga(so(e.files).map((t) => Tt(t)));
  });
}
function ga(e) {
  return e.filter((n) => Fh.indexOf(n.name) === -1);
}
function so(e) {
  if (e === null)
    return [];
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    n.push(r);
  }
  return n;
}
function Uh(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return ha(e);
  const n = e.webkitGetAsEntry();
  return n && n.isDirectory ? cl(n) : ha(e, n);
}
function sl(e) {
  return e.reduce((n, t) => [
    ...n,
    ...Array.isArray(t) ? sl(t) : [t]
  ], []);
}
function ha(e, n) {
  return yt(this, void 0, void 0, function* () {
    var t;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const i = yield e.getAsFileSystemHandle();
      if (i === null)
        throw new Error(`${e} is not a File`);
      if (i !== void 0) {
        const a = yield i.getFile();
        return a.handle = i, Tt(a);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return Tt(r, (t = n?.fullPath) !== null && t !== void 0 ? t : void 0);
  });
}
function Gh(e) {
  return yt(this, void 0, void 0, function* () {
    return e.isDirectory ? cl(e) : qh(e);
  });
}
function cl(e) {
  const n = e.createReader();
  return new Promise((t, r) => {
    const o = [];
    function i() {
      n.readEntries((a) => yt(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(Gh));
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
function qh(e) {
  return yt(this, void 0, void 0, function* () {
    return new Promise((n, t) => {
      e.file((r) => {
        const o = Tt(r, e.fullPath);
        n(o);
      }, (r) => {
        t(r);
      });
    });
  });
}
var Sn = {}, xa;
function Yh() {
  return xa || (xa = 1, Sn.__esModule = !0, Sn.default = function(e, n) {
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
  }), Sn;
}
var Kh = Yh();
const Wr = /* @__PURE__ */ yo(Kh);
function ba(e) {
  return Jh(e) || Xh(e) || dl(e) || Zh();
}
function Zh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xh(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Jh(e) {
  if (Array.isArray(e)) return co(e);
}
function ya(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function wa(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ya(Object(t), !0).forEach(function(r) {
      ll(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ya(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function ll(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function tn(e, n) {
  return tx(e) || ex(e, n) || dl(e, n) || Qh();
}
function Qh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dl(e, n) {
  if (e) {
    if (typeof e == "string") return co(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return co(e, n);
  }
}
function co(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function ex(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], o = !0, i = !1, a, s;
    try {
      for (t = t.call(e); !(o = (a = t.next()).done) && (r.push(a.value), !(n && r.length === n)); o = !0)
        ;
    } catch (l) {
      i = !0, s = l;
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
function tx(e) {
  if (Array.isArray(e)) return e;
}
var nx = typeof Wr == "function" ? Wr : Wr.default, rx = "file-invalid-type", ox = "file-too-large", ix = "file-too-small", ax = "too-many-files", sx = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = n.split(","), r = t.length > 1 ? "one of ".concat(t.join(", ")) : t[0];
  return {
    code: rx,
    message: "File type must be ".concat(r)
  };
}, Ca = function(n) {
  return {
    code: ox,
    message: "File is larger than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, Ea = function(n) {
  return {
    code: ix,
    message: "File is smaller than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, cx = {
  code: ax,
  message: "Too many files"
};
function ul(e, n) {
  var t = e.type === "application/x-moz-file" || nx(e, n);
  return [t, t ? null : sx(n)];
}
function pl(e, n, t) {
  if (ft(e.size))
    if (ft(n) && ft(t)) {
      if (e.size > t) return [!1, Ca(t)];
      if (e.size < n) return [!1, Ea(n)];
    } else {
      if (ft(n) && e.size < n) return [!1, Ea(n)];
      if (ft(t) && e.size > t) return [!1, Ca(t)];
    }
  return [!0, null];
}
function ft(e) {
  return e != null;
}
function lx(e) {
  var n = e.files, t = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && n.length > 1 || i && a >= 1 && n.length > a ? !1 : n.every(function(l) {
    var u = ul(l, t), p = tn(u, 1), f = p[0], m = pl(l, r, o), g = tn(m, 1), x = g[0], v = s ? s(l) : null;
    return f && x && !v;
  });
}
function Wn(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function kn(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(n) {
    return n === "Files" || n === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Sa(e) {
  e.preventDefault();
}
function dx(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function ux(e) {
  return e.indexOf("Edge/") !== -1;
}
function px() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return dx(e) || ux(e);
}
function Ve() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return n.some(function(s) {
      return !Wn(r) && s && s.apply(void 0, [r].concat(i)), Wn(r);
    });
  };
}
function fx() {
  return "showOpenFilePicker" in window;
}
function mx(e) {
  if (ft(e)) {
    var n = Object.entries(e).filter(function(t) {
      var r = tn(t, 2), o = r[0], i = r[1], a = !0;
      return fl(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(ml)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(t, r) {
      var o = tn(r, 2), i = o[0], a = o[1];
      return wa(wa({}, t), {}, ll({}, i, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: n
    }];
  }
  return e;
}
function vx(e) {
  if (ft(e))
    return Object.entries(e).reduce(function(n, t) {
      var r = tn(t, 2), o = r[0], i = r[1];
      return [].concat(ba(n), [o], ba(i));
    }, []).filter(function(n) {
      return fl(n) || ml(n);
    }).join(",");
}
function gx(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function hx(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function fl(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function ml(e) {
  return /^.*\.[\w]+$/.test(e);
}
var xx = ["children"], bx = ["open"], yx = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], wx = ["refKey", "onChange", "onClick"];
function Cx(e) {
  return kx(e) || Sx(e) || vl(e) || Ex();
}
function Ex() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sx(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function kx(e) {
  if (Array.isArray(e)) return lo(e);
}
function Br(e, n) {
  return jx(e) || Rx(e, n) || vl(e, n) || _x();
}
function _x() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vl(e, n) {
  if (e) {
    if (typeof e == "string") return lo(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return lo(e, n);
  }
}
function lo(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Rx(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], o = !0, i = !1, a, s;
    try {
      for (t = t.call(e); !(o = (a = t.next()).done) && (r.push(a.value), !(n && r.length === n)); o = !0)
        ;
    } catch (l) {
      i = !0, s = l;
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
function jx(e) {
  if (Array.isArray(e)) return e;
}
function ka(e, n) {
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
    n % 2 ? ka(Object(t), !0).forEach(function(r) {
      uo(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ka(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function uo(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Bn(e, n) {
  if (e == null) return {};
  var t = Px(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Px(e, n) {
  if (e == null) return {};
  var t = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var pi = /* @__PURE__ */ Yn(function(e, n) {
  var t = e.children, r = Bn(e, xx), o = fi(r), i = o.open, a = Bn(o, bx);
  return fd(n, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ ie.createElement(md, null, t(xe(xe({}, a), {}, {
    open: i
  })));
});
pi.displayName = "Dropzone";
var gl = {
  disabled: !1,
  getFilesFromEvent: zh,
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
pi.defaultProps = gl;
pi.propTypes = {
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
var po = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function fi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = xe(xe({}, gl), e), t = n.accept, r = n.disabled, o = n.getFilesFromEvent, i = n.maxSize, a = n.minSize, s = n.multiple, l = n.maxFiles, u = n.onDragEnter, p = n.onDragLeave, f = n.onDragOver, m = n.onDrop, g = n.onDropAccepted, x = n.onDropRejected, v = n.onFileDialogCancel, h = n.onFileDialogOpen, y = n.useFsAccessApi, w = n.autoFocus, E = n.preventDropOnDocument, S = n.noClick, C = n.noKeyboard, D = n.noDrag, P = n.noDragEventsBubbling, j = n.onError, L = n.validator, B = at(function() {
    return vx(t);
  }, [t]), J = at(function() {
    return mx(t);
  }, [t]), q = at(function() {
    return typeof h == "function" ? h : _a;
  }, [h]), U = at(function() {
    return typeof v == "function" ? v : _a;
  }, [v]), H = pn(null), Q = pn(null), $ = pd(Ax, po), ee = Br($, 2), R = ee[0], M = ee[1], _ = R.isFocused, b = R.isFileDialogActive, A = pn(typeof window < "u" && window.isSecureContext && y && fx()), I = function() {
    !A.current && b && setTimeout(function() {
      if (Q.current) {
        var ne = Q.current.files;
        ne.length || (M({
          type: "closeDialog"
        }), U());
      }
    }, 300);
  };
  Rn(function() {
    return window.addEventListener("focus", I, !1), function() {
      window.removeEventListener("focus", I, !1);
    };
  }, [Q, b, U, A]);
  var O = pn([]), G = function(ne) {
    H.current && H.current.contains(ne.target) || (ne.preventDefault(), O.current = []);
  };
  Rn(function() {
    return E && (document.addEventListener("dragover", Sa, !1), document.addEventListener("drop", G, !1)), function() {
      E && (document.removeEventListener("dragover", Sa), document.removeEventListener("drop", G));
    };
  }, [H, E]), Rn(function() {
    return !r && w && H.current && H.current.focus(), function() {
    };
  }, [H, w, r]);
  var V = ye(function(z) {
    j ? j(z) : console.error(z);
  }, [j]), k = ye(function(z) {
    z.preventDefault(), z.persist(), Ce(z), O.current = [].concat(Cx(O.current), [z.target]), kn(z) && Promise.resolve(o(z)).then(function(ne) {
      if (!(Wn(z) && !P)) {
        var ue = ne.length, ve = ue > 0 && lx({
          files: ne,
          accept: B,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: l,
          validator: L
        }), ke = ue > 0 && !ve;
        M({
          isDragAccept: ve,
          isDragReject: ke,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), u && u(z);
      }
    }).catch(function(ne) {
      return V(ne);
    });
  }, [o, u, V, P, B, a, i, s, l, L]), W = ye(function(z) {
    z.preventDefault(), z.persist(), Ce(z);
    var ne = kn(z);
    if (ne && z.dataTransfer)
      try {
        z.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return ne && f && f(z), !1;
  }, [f, P]), Z = ye(function(z) {
    z.preventDefault(), z.persist(), Ce(z);
    var ne = O.current.filter(function(ve) {
      return H.current && H.current.contains(ve);
    }), ue = ne.indexOf(z.target);
    ue !== -1 && ne.splice(ue, 1), O.current = ne, !(ne.length > 0) && (M({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), kn(z) && p && p(z));
  }, [H, p, P]), F = ye(function(z, ne) {
    var ue = [], ve = [];
    z.forEach(function(ke) {
      var tt = ul(ke, B), nt = Br(tt, 2), $t = nt[0], Vt = nt[1], De = pl(ke, a, i), rt = Br(De, 2), Wt = rt[0], yr = rt[1], wr = L ? L(ke) : null;
      if ($t && Wt && !wr)
        ue.push(ke);
      else {
        var Cr = [Vt, yr];
        wr && (Cr = Cr.concat(wr)), ve.push({
          file: ke,
          errors: Cr.filter(function(ld) {
            return ld;
          })
        });
      }
    }), (!s && ue.length > 1 || s && l >= 1 && ue.length > l) && (ue.forEach(function(ke) {
      ve.push({
        file: ke,
        errors: [cx]
      });
    }), ue.splice(0)), M({
      acceptedFiles: ue,
      fileRejections: ve,
      isDragReject: ve.length > 0,
      type: "setFiles"
    }), m && m(ue, ve, ne), ve.length > 0 && x && x(ve, ne), ue.length > 0 && g && g(ue, ne);
  }, [M, s, B, a, i, l, m, g, x, L]), re = ye(function(z) {
    z.preventDefault(), z.persist(), Ce(z), O.current = [], kn(z) && Promise.resolve(o(z)).then(function(ne) {
      Wn(z) && !P || F(ne, z);
    }).catch(function(ne) {
      return V(ne);
    }), M({
      type: "reset"
    });
  }, [o, F, V, P]), T = ye(function() {
    if (A.current) {
      M({
        type: "openDialog"
      }), q();
      var z = {
        multiple: s,
        types: J
      };
      window.showOpenFilePicker(z).then(function(ne) {
        return o(ne);
      }).then(function(ne) {
        F(ne, null), M({
          type: "closeDialog"
        });
      }).catch(function(ne) {
        gx(ne) ? (U(ne), M({
          type: "closeDialog"
        })) : hx(ne) ? (A.current = !1, Q.current ? (Q.current.value = null, Q.current.click()) : V(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : V(ne);
      });
      return;
    }
    Q.current && (M({
      type: "openDialog"
    }), q(), Q.current.value = null, Q.current.click());
  }, [M, q, U, y, F, V, J, s]), pe = ye(function(z) {
    !H.current || !H.current.isEqualNode(z.target) || (z.key === " " || z.key === "Enter" || z.keyCode === 32 || z.keyCode === 13) && (z.preventDefault(), T());
  }, [H, T]), te = ye(function() {
    M({
      type: "focus"
    });
  }, []), oe = ye(function() {
    M({
      type: "blur"
    });
  }, []), be = ye(function() {
    S || (px() ? setTimeout(T, 0) : T());
  }, [S, T]), he = function(ne) {
    return r ? null : ne;
  }, Se = function(ne) {
    return C ? null : he(ne);
  }, fe = function(ne) {
    return D ? null : he(ne);
  }, Ce = function(ne) {
    P && ne.stopPropagation();
  }, Ct = at(function() {
    return function() {
      var z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ne = z.refKey, ue = ne === void 0 ? "ref" : ne, ve = z.role, ke = z.onKeyDown, tt = z.onFocus, nt = z.onBlur, $t = z.onClick, Vt = z.onDragEnter, De = z.onDragOver, rt = z.onDragLeave, Wt = z.onDrop, yr = Bn(z, yx);
      return xe(xe(uo({
        onKeyDown: Se(Ve(ke, pe)),
        onFocus: Se(Ve(tt, te)),
        onBlur: Se(Ve(nt, oe)),
        onClick: he(Ve($t, be)),
        onDragEnter: fe(Ve(Vt, k)),
        onDragOver: fe(Ve(De, W)),
        onDragLeave: fe(Ve(rt, Z)),
        onDrop: fe(Ve(Wt, re)),
        role: typeof ve == "string" && ve !== "" ? ve : "presentation"
      }, ue, H), !r && !C ? {
        tabIndex: 0
      } : {}), yr);
    };
  }, [H, pe, te, oe, be, k, W, Z, re, C, D, r]), Pe = ye(function(z) {
    z.stopPropagation();
  }, []), qe = at(function() {
    return function() {
      var z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ne = z.refKey, ue = ne === void 0 ? "ref" : ne, ve = z.onChange, ke = z.onClick, tt = Bn(z, wx), nt = uo({
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
        onChange: he(Ve(ve, re)),
        onClick: he(Ve(ke, Pe)),
        tabIndex: -1
      }, ue, Q);
      return xe(xe({}, nt), tt);
    };
  }, [Q, t, s, re, r]);
  return xe(xe({}, R), {}, {
    isFocused: _ && !r,
    getRootProps: Ct,
    getInputProps: qe,
    rootRef: H,
    inputRef: Q,
    open: he(T)
  });
}
function Ax(e, n) {
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
      return xe(xe({}, po), {}, {
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
      return xe({}, po);
    default:
      return e;
  }
}
function _a() {
}
const Tx = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2024C0%2010.7452%2010.7452%200%2024%200C37.2548%200%2048%2010.7452%2048%2024C48%2037.2548%2037.2548%2048%2024%2048C10.7452%2048%200%2037.2548%200%2024Z'%20fill='%23EFF1F5'/%3e%3cpath%20d='M31%2017V31H17V17H31ZM31%2015H17C15.9%2015%2015%2015.9%2015%2017V31C15%2032.1%2015.9%2033%2017%2033H31C32.1%2033%2033%2032.1%2033%2031V17C33%2015.9%2032.1%2015%2031%2015ZM26.14%2023.86L23.14%2027.73L21%2025.14L18%2029H30L26.14%2023.86Z'%20fill='%233F465B'/%3e%3c/svg%3e";
var Hr, Ra;
function Ox() {
  if (Ra) return Hr;
  Ra = 1;
  var e = !1, n, t, r, o, i, a, s, l, u, p, f, m, g, x, v;
  function h() {
    if (!e) {
      e = !0;
      var w = navigator.userAgent, E = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(w), S = /(Mac OS X)|(Windows)|(Linux)/.exec(w);
      if (m = /\b(iPhone|iP[ao]d)/.exec(w), g = /\b(iP[ao]d)/.exec(w), p = /Android/i.exec(w), x = /FBAN\/\w+;/i.exec(w), v = /Mobile/i.exec(w), f = !!/Win64/.exec(w), E) {
        n = E[1] ? parseFloat(E[1]) : E[5] ? parseFloat(E[5]) : NaN, n && document && document.documentMode && (n = document.documentMode);
        var C = /(?:Trident\/(\d+.\d+))/.exec(w);
        a = C ? parseFloat(C[1]) + 4 : n, t = E[2] ? parseFloat(E[2]) : NaN, r = E[3] ? parseFloat(E[3]) : NaN, o = E[4] ? parseFloat(E[4]) : NaN, o ? (E = /(?:Chrome\/(\d+\.\d+))/.exec(w), i = E && E[1] ? parseFloat(E[1]) : NaN) : i = NaN;
      } else
        n = t = r = i = o = NaN;
      if (S) {
        if (S[1]) {
          var D = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(w);
          s = D ? parseFloat(D[1].replace("_", ".")) : !0;
        } else
          s = !1;
        l = !!S[2], u = !!S[3];
      } else
        s = l = u = !1;
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
      return h() || n;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return h() || a > n;
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
      return h() || t;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return h() || r;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return h() || o;
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
      return h() || i;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return h() || l;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return h() || s;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return h() || u;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return h() || m;
    },
    mobile: function() {
      return h() || m || g || p || v;
    },
    nativeApp: function() {
      return h() || x;
    },
    android: function() {
      return h() || p;
    },
    ipad: function() {
      return h() || g;
    }
  };
  return Hr = y, Hr;
}
var Ur, ja;
function Mx() {
  if (ja) return Ur;
  ja = 1;
  var e = !!(typeof window < "u" && window.document && window.document.createElement), n = {
    canUseDOM: e,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
    canUseViewport: e && !!window.screen,
    isInWorker: !e
    // For now, this is true - might change in the future.
  };
  return Ur = n, Ur;
}
var Gr, Pa;
function Dx() {
  if (Pa) return Gr;
  Pa = 1;
  var e = Mx(), n;
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
  return Gr = t, Gr;
}
var qr, Aa;
function Nx() {
  if (Aa) return qr;
  Aa = 1;
  var e = Ox(), n = Dx(), t = 10, r = 40, o = 800;
  function i(a) {
    var s = 0, l = 0, u = 0, p = 0;
    return "detail" in a && (l = a.detail), "wheelDelta" in a && (l = -a.wheelDelta / 120), "wheelDeltaY" in a && (l = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (s = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (s = l, l = 0), u = s * t, p = l * t, "deltaY" in a && (p = a.deltaY), "deltaX" in a && (u = a.deltaX), (u || p) && a.deltaMode && (a.deltaMode == 1 ? (u *= r, p *= r) : (u *= o, p *= o)), u && !s && (s = u < 1 ? -1 : 1), p && !l && (l = p < 1 ? -1 : 1), {
      spinX: s,
      spinY: l,
      pixelX: u,
      pixelY: p
    };
  }
  return i.getEventType = function() {
    return e.firefox() ? "DOMMouseScroll" : n("wheel") ? "wheel" : "mousewheel";
  }, qr = i, qr;
}
var Yr, Ta;
function Ix() {
  return Ta || (Ta = 1, Yr = Nx()), Yr;
}
var Lx = Ix();
const Fx = /* @__PURE__ */ yo(Lx);
function zx(e, n, t, r, o, i) {
  i === void 0 && (i = 0);
  var a = Ot(e, n, i), s = a.width, l = a.height, u = Math.min(s, t), p = Math.min(l, r);
  return u > p * o ? {
    width: p * o,
    height: p
  } : {
    width: u,
    height: u / o
  };
}
function $x(e) {
  return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight;
}
function Gt(e, n, t, r, o) {
  o === void 0 && (o = 0);
  var i = Ot(n.width, n.height, o), a = i.width, s = i.height;
  return {
    x: Oa(e.x, a, t.width, r),
    y: Oa(e.y, s, t.height, r)
  };
}
function Oa(e, n, t, r) {
  var o = n * r / 2 - t / 2;
  return fr(e, -o, o);
}
function Ma(e, n) {
  return Math.sqrt(Math.pow(e.y - n.y, 2) + Math.pow(e.x - n.x, 2));
}
function Da(e, n) {
  return Math.atan2(n.y - e.y, n.x - e.x) * 180 / Math.PI;
}
function Vx(e, n, t, r, o, i, a) {
  i === void 0 && (i = 0), a === void 0 && (a = !0);
  var s = a ? Wx : Bx, l = Ot(n.width, n.height, i), u = Ot(n.naturalWidth, n.naturalHeight, i), p = {
    x: s(100, ((l.width - t.width / o) / 2 - e.x / o) / l.width * 100),
    y: s(100, ((l.height - t.height / o) / 2 - e.y / o) / l.height * 100),
    width: s(100, t.width / l.width * 100 / o),
    height: s(100, t.height / l.height * 100 / o)
  }, f = Math.round(s(u.width, p.width * u.width / 100)), m = Math.round(s(u.height, p.height * u.height / 100)), g = u.width >= u.height * r, x = g ? {
    width: Math.round(m * r),
    height: m
  } : {
    width: f,
    height: Math.round(f / r)
  }, v = ge(ge({}, x), {
    x: Math.round(s(u.width - x.width, p.x * u.width / 100)),
    y: Math.round(s(u.height - x.height, p.y * u.height / 100))
  });
  return {
    croppedAreaPercentages: p,
    croppedAreaPixels: v
  };
}
function Wx(e, n) {
  return Math.min(e, Math.max(0, n));
}
function Bx(e, n) {
  return n;
}
function Hx(e, n, t, r, o, i) {
  var a = Ot(n.width, n.height, t), s = fr(r.width / a.width * (100 / e.width), o, i), l = {
    x: s * a.width / 2 - r.width / 2 - a.width * s * (e.x / 100),
    y: s * a.height / 2 - r.height / 2 - a.height * s * (e.y / 100)
  };
  return {
    crop: l,
    zoom: s
  };
}
function Ux(e, n, t) {
  var r = $x(n);
  return t.height > t.width ? t.height / (e.height * r) : t.width / (e.width * r);
}
function Gx(e, n, t, r, o, i) {
  t === void 0 && (t = 0);
  var a = Ot(n.naturalWidth, n.naturalHeight, t), s = fr(Ux(e, n, r), o, i), l = r.height > r.width ? r.height / e.height : r.width / e.width, u = {
    x: ((a.width - e.width) / 2 - e.x) * l,
    y: ((a.height - e.height) / 2 - e.y) * l
  };
  return {
    crop: u,
    zoom: s
  };
}
function Na(e, n) {
  return {
    x: (n.x + e.x) / 2,
    y: (n.y + e.y) / 2
  };
}
function qx(e) {
  return e * Math.PI / 180;
}
function Ot(e, n, t) {
  var r = qx(t);
  return {
    width: Math.abs(Math.cos(r) * e) + Math.abs(Math.sin(r) * n),
    height: Math.abs(Math.sin(r) * e) + Math.abs(Math.cos(r) * n)
  };
}
function fr(e, n, t) {
  return Math.min(Math.max(e, n), t);
}
function _n() {
  for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return e.filter(function(t) {
    return typeof t == "string" && t.length > 0;
  }).join(" ").trim();
}
var Yx = `.reactEasyCrop_Container {
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
`, Kx = 1, Zx = 3, Xx = 1, Jx = (
  /** @class */
  (function(e) {
    Jd(n, e);
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
          var o = Hx(t.props.initialCroppedAreaPercentages, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), i = o.crop, a = o.zoom;
          t.props.onCropChange(i), t.props.onZoomChange && t.props.onZoomChange(a);
        } else if (t.props.initialCroppedAreaPixels) {
          var s = Gx(t.props.initialCroppedAreaPixels, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), i = s.crop, a = s.zoom;
          t.props.onCropChange(i), t.props.onZoomChange && t.props.onZoomChange(a);
        }
      }, t.computeSizes = function() {
        var r, o, i, a, s, l, u = t.imageRef.current || t.videoRef.current;
        if (u && t.containerRef) {
          t.containerRect = t.containerRef.getBoundingClientRect(), t.saveContainerPosition();
          var p = t.containerRect.width / t.containerRect.height, f = ((r = t.imageRef.current) === null || r === void 0 ? void 0 : r.naturalWidth) || ((o = t.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, m = ((i = t.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((a = t.videoRef.current) === null || a === void 0 ? void 0 : a.videoHeight) || 0, g = u.offsetWidth < f || u.offsetHeight < m, x = f / m, v = void 0;
          if (g)
            switch (t.state.mediaObjectFit) {
              default:
              case "contain":
                v = p > x ? {
                  width: t.containerRect.height * x,
                  height: t.containerRect.height
                } : {
                  width: t.containerRect.width,
                  height: t.containerRect.width / x
                };
                break;
              case "horizontal-cover":
                v = {
                  width: t.containerRect.width,
                  height: t.containerRect.width / x
                };
                break;
              case "vertical-cover":
                v = {
                  width: t.containerRect.height * x,
                  height: t.containerRect.height
                };
                break;
            }
          else
            v = {
              width: u.offsetWidth,
              height: u.offsetHeight
            };
          t.mediaSize = ge(ge({}, v), {
            naturalWidth: f,
            naturalHeight: m
          }), t.props.setMediaSize && t.props.setMediaSize(t.mediaSize);
          var h = t.props.cropSize ? t.props.cropSize : zx(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
          return (((s = t.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== h.height || ((l = t.state.cropSize) === null || l === void 0 ? void 0 : l.width) !== h.width) && t.props.onCropSizeChange && t.props.onCropSizeChange(h), t.setState({
            cropSize: h
          }, t.recomputeCropPosition), t.props.setCropSize && t.props.setCropSize(h), h;
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
        }, t.dragStartCrop = ge({}, t.props.crop), (i = (o = t.props).onInteractionStart) === null || i === void 0 || i.call(o);
      }, t.onDrag = function(r) {
        var o = r.x, i = r.y;
        t.currentWindow && (t.rafDragTimeout && t.currentWindow.cancelAnimationFrame(t.rafDragTimeout), t.rafDragTimeout = t.currentWindow.requestAnimationFrame(function() {
          if (t.state.cropSize && !(o === void 0 || i === void 0)) {
            var a = o - t.dragStartPosition.x, s = i - t.dragStartPosition.y, l = {
              x: t.dragStartCrop.x + a,
              y: t.dragStartCrop.y + s
            }, u = t.props.restrictPosition ? Gt(l, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : l;
            t.props.onCropChange(u);
          }
        }));
      }, t.onDragStopped = function() {
        var r, o;
        t.isTouching = !1, t.cleanEvents(), t.emitCropData(), (o = (r = t.props).onInteractionEnd) === null || o === void 0 || o.call(r);
      }, t.onWheel = function(r) {
        if (t.currentWindow && !(t.props.onWheelRequest && !t.props.onWheelRequest(r))) {
          r.preventDefault();
          var o = n.getMousePoint(r), i = Fx(r).pixelY, a = t.props.zoom - i * t.props.zoomSpeed / 200;
          t.setNewZoom(a, o, {
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
        var i = r.x, a = r.y;
        if (!t.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: t.containerRect.width / 2 - (i - o.x),
          y: t.containerRect.height / 2 - (a - o.y)
        };
      }, t.getPointOnMedia = function(r) {
        var o = r.x, i = r.y, a = t.props, s = a.crop, l = a.zoom;
        return {
          x: (o + s.x) / l,
          y: (i + s.y) / l
        };
      }, t.setNewZoom = function(r, o, i) {
        var a = i === void 0 ? {} : i, s = a.shouldUpdatePosition, l = s === void 0 ? !0 : s;
        if (!(!t.state.cropSize || !t.props.onZoomChange)) {
          var u = fr(r, t.props.minZoom, t.props.maxZoom);
          if (l) {
            var p = t.getPointOnContainer(o, t.containerPosition), f = t.getPointOnMedia(p), m = {
              x: f.x * u - p.x,
              y: f.y * u - p.y
            }, g = t.props.restrictPosition ? Gt(m, t.mediaSize, t.state.cropSize, u, t.props.rotation) : m;
            t.props.onCropChange(g);
          }
          t.props.onZoomChange(u);
        }
      }, t.getCropData = function() {
        if (!t.state.cropSize)
          return null;
        var r = t.props.restrictPosition ? Gt(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
        return Vx(r, t.mediaSize, t.state.cropSize, t.getAspect(), t.props.zoom, t.props.rotation, t.props.restrictPosition);
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
              var s = t.state.cropSize.width / t.previousCropSize.width, l = t.state.cropSize.height / t.previousCropSize.height;
              i = {
                x: t.props.crop.x * s,
                y: t.props.crop.y * l
              };
            }
          }
          var u = t.props.restrictPosition ? Gt(i, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : i;
          t.previousCropSize = t.state.cropSize, t.props.onCropChange(u), t.emitCropData();
        }
      }, t.onKeyDown = function(r) {
        var o, i, a = t.props, s = a.crop, l = a.onCropChange, u = a.keyboardStep, p = a.zoom, f = a.rotation, m = u;
        if (t.state.cropSize) {
          r.shiftKey && (m *= 0.2);
          var g = ge({}, s);
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
          t.props.restrictPosition && (g = Gt(g, t.mediaSize, t.state.cropSize, p, f)), r.repeat || (i = (o = t.props).onInteractionStart) === null || i === void 0 || i.call(o), l(g);
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
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Yx, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, n.prototype.componentWillUnmount = function() {
      var t, r;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((r = this.styleRef.parentNode) === null || r === void 0 || r.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, n.prototype.componentDidUpdate = function(t) {
      var r, o, i, a, s, l, u, p, f;
      t.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : t.aspect !== this.props.aspect ? this.computeSizes() : t.objectFit !== this.props.objectFit ? this.computeSizes() : t.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((r = t.cropSize) === null || r === void 0 ? void 0 : r.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((i = t.cropSize) === null || i === void 0 ? void 0 : i.width) !== ((a = this.props.cropSize) === null || a === void 0 ? void 0 : a.width) ? this.computeSizes() : (((s = t.crop) === null || s === void 0 ? void 0 : s.x) !== ((l = this.props.crop) === null || l === void 0 ? void 0 : l.x) || ((u = t.crop) === null || u === void 0 ? void 0 : u.y) !== ((p = this.props.crop) === null || p === void 0 ? void 0 : p.y)) && this.emitCropAreaChange(), t.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
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
      var t, r, o, i;
      if (this.props.objectFit === "cover") {
        var a = this.imageRef.current || this.videoRef.current;
        if (a && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var s = this.containerRect.width / this.containerRect.height, l = ((t = this.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((r = this.videoRef.current) === null || r === void 0 ? void 0 : r.videoWidth) || 0, u = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, p = l / u;
          return p < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, n.prototype.onPinchStart = function(t) {
      var r = n.getTouchPoint(t.touches[0]), o = n.getTouchPoint(t.touches[1]);
      this.lastPinchDistance = Ma(r, o), this.lastPinchRotation = Da(r, o), this.onDragStart(Na(r, o));
    }, n.prototype.onPinchMove = function(t) {
      var r = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = n.getTouchPoint(t.touches[0]), i = n.getTouchPoint(t.touches[1]), a = Na(o, i);
        this.onDrag(a), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = Ma(o, i), l = r.props.zoom * (s / r.lastPinchDistance);
          r.setNewZoom(l, a, {
            shouldUpdatePosition: !1
          }), r.lastPinchDistance = s;
          var u = Da(o, i), p = r.props.rotation + (u - r.lastPinchRotation);
          r.props.onRotationChange && r.props.onRotationChange(p), r.lastPinchRotation = u;
        });
      }
    }, n.prototype.render = function() {
      var t = this, r, o = this.props, i = o.image, a = o.video, s = o.mediaProps, l = o.cropperProps, u = o.transform, p = o.crop, f = p.x, m = p.y, g = o.rotation, x = o.zoom, v = o.cropShape, h = o.showGrid, y = o.roundCropAreaPixels, w = o.style, E = w.containerStyle, S = w.cropAreaStyle, C = w.mediaStyle, D = o.classes, P = D.containerClassName, j = D.cropAreaClassName, L = D.mediaClassName, B = (r = this.state.mediaObjectFit) !== null && r !== void 0 ? r : this.getObjectFit();
      return d.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(q) {
          return t.containerRef = q;
        },
        "data-testid": "container",
        style: E,
        className: _n("reactEasyCrop_Container", P)
      }, i ? d.createElement("img", ge({
        alt: "",
        className: _n("reactEasyCrop_Image", B === "contain" && "reactEasyCrop_Contain", B === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", B === "vertical-cover" && "reactEasyCrop_Cover_Vertical", L)
      }, s, {
        src: i,
        ref: this.imageRef,
        style: ge(ge({}, C), {
          transform: u || "translate(".concat(f, "px, ").concat(m, "px) rotate(").concat(g, "deg) scale(").concat(x, ")")
        }),
        onLoad: this.onMediaLoad
      })) : a && d.createElement("video", ge({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: _n("reactEasyCrop_Video", B === "contain" && "reactEasyCrop_Contain", B === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", B === "vertical-cover" && "reactEasyCrop_Cover_Vertical", L)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: ge(ge({}, C), {
          transform: u || "translate(".concat(f, "px, ").concat(m, "px) rotate(").concat(g, "deg) scale(").concat(x, ")")
        }),
        controls: !1
      }), (Array.isArray(a) ? a : [{
        src: a
      }]).map(function(J) {
        return d.createElement("source", ge({
          key: J.src
        }, J));
      })), this.state.cropSize && d.createElement("div", ge({
        ref: this.cropperRef,
        style: ge(ge({}, S), {
          width: y ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: y ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: _n("reactEasyCrop_CropArea", v === "round" && "reactEasyCrop_CropAreaRound", h && "reactEasyCrop_CropAreaGrid", j)
      }, l)));
    }, n.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: Zx,
      minZoom: Kx,
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
      keyboardStep: Xx
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
function Qx({
  imageUrl: e,
  aspect: n,
  rounded: t,
  crop: r,
  zoom: o,
  onCropChange: i,
  onZoomChange: a,
  onCropComplete: s,
  onClose: l,
  onConfirm: u
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
              children: /* @__PURE__ */ c.jsx(No, { className: "size-5 text-gray-700" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex-1 overflow-auto px-4 py-4 sm:px-6 sm:py-6", children: [
          /* @__PURE__ */ c.jsx("div", { className: "relative w-full overflow-hidden rounded-lg bg-gray-900", children: /* @__PURE__ */ c.jsx("div", { className: "relative h-[60dvh] sm:h-[420px] w-full", children: /* @__PURE__ */ c.jsx(
            Jx,
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
                onChange: (f) => a(parseFloat(f.target.value)),
                className: "w-full cursor-pointer",
                "aria-label": "Zoom"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ c.jsx("div", { className: "sticky bottom-0 z-10 border-t border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4", children: /* @__PURE__ */ c.jsx("div", { className: "flex flex-col-reverse sm:flex-row gap-2 sm:justify-end", children: /* @__PURE__ */ c.jsx(
          Io,
          {
            type: "button",
            variant: "blue-hepatica-solid",
            onClick: u,
            className: "w-full sm:w-auto",
            children: "Crop"
          }
        ) }) })
      ] })
    }
  );
}
function eb(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = `image/${r === "jpg" ? "jpeg" : r}`;
    n[o] ??= [], n[o].push(`.${r}`);
  }
  return n;
}
function tb(e) {
  return new Promise((n, t) => {
    const r = new Image();
    r.addEventListener("load", () => n(r)), r.addEventListener("error", (o) => t(o)), r.setAttribute("crossOrigin", "anonymous"), r.src = e;
  });
}
async function nb(e, n, t) {
  const r = await tb(e), o = document.createElement("canvas"), i = o.getContext("2d");
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
  const a = await new Promise((s, l) => {
    o.toBlob(
      (u) => u ? s(u) : l(new Error("Canvas is empty")),
      t.fileType || "image/png",
      0.92
    );
  });
  return new File([a], t.fileName, { type: t.fileType || a.type });
}
function Hy({
  value: e,
  onChange: n,
  aspectRatio: t,
  extensions: r,
  rounded: o = !1,
  maxSize: i = 5 * 1024 * 1024,
  minWidth: a,
  minHeight: s,
  maxWidth: l,
  maxHeight: u,
  placeholder: p = "Accepted files jpg, png and webp",
  className: f
}) {
  const [m, g] = We(null), [x, v] = We([]), [h, y] = We(!1), [w, E] = We(null), [S, C] = We({ x: 0, y: 0 }), [D, P] = We(1), [j, L] = We(null), B = at(() => eb(r), [r]);
  Rn(() => {
    if (!e) {
      m && URL.revokeObjectURL(m), g(null);
      return;
    }
    const b = URL.createObjectURL(e);
    return m && URL.revokeObjectURL(m), g(b), () => {
      URL.revokeObjectURL(b);
    };
  }, [e]);
  const J = ye(
    async (b) => {
      const A = b[0];
      if (!A) return;
      if (v([]), [a, s, l, u].some(
        (G) => typeof G == "number"
      ))
        try {
          const G = await new Promise(
            (k, W) => {
              const Z = URL.createObjectURL(A), F = new Image();
              F.onload = () => {
                const re = F.naturalWidth || F.width, T = F.naturalHeight || F.height;
                URL.revokeObjectURL(Z), k({ width: re, height: T });
              }, F.onerror = () => {
                URL.revokeObjectURL(Z), W(new Error("Unable to read image dimensions"));
              }, F.src = Z;
            }
          ), V = [];
          if (typeof a == "number" && G.width < a && V.push(
            `Image width is too small. Minimum width is ${a}px.`
          ), typeof s == "number" && G.height < s && V.push(
            `Image height is too small. Minimum height is ${s}px.`
          ), typeof l == "number" && G.width > l && V.push(
            `Image width is too large. Maximum width is ${l}px.`
          ), typeof u == "number" && G.height > u && V.push(
            `Image height is too large. Maximum height is ${u}px.`
          ), V.length > 0) {
            v(V);
            return;
          }
        } catch {
          v(["Unable to read image dimensions. Please try another image."]);
          return;
        }
      const O = URL.createObjectURL(A);
      E(O), y(!0), C({ x: 0, y: 0 }), P(1), L(null);
    },
    [u, l, s, a]
  ), { getRootProps: q, getInputProps: U, isDragActive: H, fileRejections: Q } = fi({
    onDrop: J,
    accept: B,
    maxSize: i,
    multiple: !1
  }), $ = [
    ...Q.flatMap(
      (b) => b.errors.map((A) => A.code === "file-too-large" ? `File is too large. Max size is ${(i / 1048576).toFixed(0)}MB` : A.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${r.join(", ")}` : A.message)
    ),
    ...x
  ], ee = ye(() => {
    y(!1), w && URL.revokeObjectURL(w), E(null);
  }, [w]), R = ye(async () => {
    if (!(!w || !j))
      try {
        const b = await nb(w, j, {
          fileName: e?.name ?? "image.png",
          fileType: e?.type ?? "image/png"
        });
        n(b), y(!1), URL.revokeObjectURL(w), E(null);
      } catch (b) {
        console.error("Error cropping image:", b);
      }
  }, [j, n, w, e?.name, e?.type]), M = ye(() => {
    m && URL.revokeObjectURL(m), g(null), n(null);
  }, [n, m]), _ = o ? { aspectRatio: "1 / 1" } : { aspectRatio: `${t}` };
  return /* @__PURE__ */ c.jsxs("div", { className: N("w-full space-y-2", f), children: [
    m ? /* @__PURE__ */ c.jsxs("div", { className: "relative w-fit max-h-44", children: [
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: N(
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
          onClick: M,
          "aria-label": "Remove image",
          className: N(
            "absolute right-1 top-1 inline-flex items-center justify-center",
            "size-10 rounded-full bg-gray-600 text-white border border-white",
            "hover:bg-gray-700 transition-colors"
          ),
          children: /* @__PURE__ */ c.jsx(No, { className: "size-4" })
        }
      )
    ] }) : /* @__PURE__ */ c.jsxs(
      "div",
      {
        ...q(),
        className: N(
          "relative flex w-full items-center justify-center",
          "rounded-[0.625rem] border border-gray-50 bg-white",
          "min-h-44",
          "cursor-pointer transition-colors",
          H && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ c.jsx("input", { ...U() }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center px-4 text-center gap-y-3", children: [
            /* @__PURE__ */ c.jsx("img", { src: Tx, alt: "" }),
            /* @__PURE__ */ c.jsx("p", { className: "text-sm font-manrope font-medium text-gray-700", children: "Click to upload or drag and drop" }),
            !!p && /* @__PURE__ */ c.jsx("p", { className: "text-xs text-gray-500", children: p })
          ] })
        ]
      }
    ),
    $.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "space-y-1", children: $.map((b, A) => /* @__PURE__ */ c.jsx("p", { className: "text-sm text-bright-red-600", children: b }, A)) }),
    h && w && /* @__PURE__ */ c.jsx(
      Qx,
      {
        imageUrl: w,
        aspect: t,
        rounded: o,
        crop: S,
        zoom: D,
        onCropChange: C,
        onZoomChange: P,
        onCropComplete: (b) => L(b),
        onClose: ee,
        onConfirm: R
      }
    )
  ] });
}
function rb({ className: e, type: n, ...t }) {
  return /* @__PURE__ */ c.jsx(
    "input",
    {
      type: n,
      "data-slot": "input",
      className: N(
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
function Uy({
  className: e,
  ...n
}) {
  const [t, r] = We(!1), o = ye(() => {
    r((i) => !i);
  }, []);
  return /* @__PURE__ */ c.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ c.jsx(
      rb,
      {
        ...n,
        "data-slot": "input",
        className: N(e, "pr-10"),
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
          t && /* @__PURE__ */ c.jsx(zf, { className: "size-4 text-gray-300" }),
          !t && /* @__PURE__ */ c.jsx(Vf, { className: "size-4 text-gray-300" })
        ]
      }
    )
  ] });
}
var ob = Object.defineProperty, ib = Object.defineProperties, ab = Object.getOwnPropertyDescriptors, Hn = Object.getOwnPropertySymbols, hl = Object.prototype.hasOwnProperty, xl = Object.prototype.propertyIsEnumerable, Ia = (e, n, t) => n in e ? ob(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, sb = (e, n) => {
  for (var t in n || (n = {})) hl.call(n, t) && Ia(e, t, n[t]);
  if (Hn) for (var t of Hn(n)) xl.call(n, t) && Ia(e, t, n[t]);
  return e;
}, cb = (e, n) => ib(e, ab(n)), lb = (e, n) => {
  var t = {};
  for (var r in e) hl.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && Hn) for (var r of Hn(e)) n.indexOf(r) < 0 && xl.call(e, r) && (t[r] = e[r]);
  return t;
};
function db(e) {
  let n = setTimeout(e, 0), t = setTimeout(e, 10), r = setTimeout(e, 50);
  return [n, t, r];
}
function ub(e) {
  let n = d.useRef();
  return d.useEffect(() => {
    n.current = e;
  }), n.current;
}
var pb = 18, bl = 40, fb = `${bl}px`, mb = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function vb({ containerRef: e, inputRef: n, pushPasswordManagerStrategy: t, isFocused: r }) {
  let [o, i] = d.useState(!1), [a, s] = d.useState(!1), [l, u] = d.useState(!1), p = d.useMemo(() => t === "none" ? !1 : (t === "increase-width" || t === "experimental-no-flickering") && o && a, [o, a, t]), f = d.useCallback(() => {
    let m = e.current, g = n.current;
    if (!m || !g || l || t === "none") return;
    let x = m, v = x.getBoundingClientRect().left + x.offsetWidth, h = x.getBoundingClientRect().top + x.offsetHeight / 2, y = v - pb, w = h;
    document.querySelectorAll(mb).length === 0 && document.elementFromPoint(y, w) === m || (i(!0), u(!0));
  }, [e, n, l, t]);
  return d.useEffect(() => {
    let m = e.current;
    if (!m || t === "none") return;
    function g() {
      let v = window.innerWidth - m.getBoundingClientRect().right;
      s(v >= bl);
    }
    g();
    let x = setInterval(g, 1e3);
    return () => {
      clearInterval(x);
    };
  }, [e, t]), d.useEffect(() => {
    let m = r || document.activeElement === n.current;
    if (t === "none" || !m) return;
    let g = setTimeout(f, 0), x = setTimeout(f, 2e3), v = setTimeout(f, 5e3), h = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(g), clearTimeout(x), clearTimeout(v), clearTimeout(h);
    };
  }, [n, r, t, f]), { hasPWMBadge: o, willPushPWMBadge: p, PWM_BADGE_SPACE_WIDTH: fb };
}
var yl = d.createContext({}), wl = d.forwardRef((e, n) => {
  var t = e, { value: r, onChange: o, maxLength: i, textAlign: a = "left", pattern: s, placeholder: l, inputMode: u = "numeric", onComplete: p, pushPasswordManagerStrategy: f = "increase-width", pasteTransformer: m, containerClassName: g, noScriptCSSFallback: x = gb, render: v, children: h } = t, y = lb(t, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), w, E, S, C, D;
  let [P, j] = d.useState(typeof y.defaultValue == "string" ? y.defaultValue : ""), L = r ?? P, B = ub(L), J = d.useCallback((te) => {
    o?.(te), j(te);
  }, [o]), q = d.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), U = d.useRef(null), H = d.useRef(null), Q = d.useRef({ value: L, onChange: J, isIOS: typeof window < "u" && ((E = (w = window?.CSS) == null ? void 0 : w.supports) == null ? void 0 : E.call(w, "-webkit-touch-callout", "none")) }), $ = d.useRef({ prev: [(S = U.current) == null ? void 0 : S.selectionStart, (C = U.current) == null ? void 0 : C.selectionEnd, (D = U.current) == null ? void 0 : D.selectionDirection] });
  d.useImperativeHandle(n, () => U.current, []), d.useEffect(() => {
    let te = U.current, oe = H.current;
    if (!te || !oe) return;
    Q.current.value !== te.value && Q.current.onChange(te.value), $.current.prev = [te.selectionStart, te.selectionEnd, te.selectionDirection];
    function be() {
      if (document.activeElement !== te) {
        A(null), O(null);
        return;
      }
      let fe = te.selectionStart, Ce = te.selectionEnd, Ct = te.selectionDirection, Pe = te.maxLength, qe = te.value, z = $.current.prev, ne = -1, ue = -1, ve;
      if (qe.length !== 0 && fe !== null && Ce !== null) {
        let $t = fe === Ce, Vt = fe === qe.length && qe.length < Pe;
        if ($t && !Vt) {
          let De = fe;
          if (De === 0) ne = 0, ue = 1, ve = "forward";
          else if (De === Pe) ne = De - 1, ue = De, ve = "backward";
          else if (Pe > 1 && qe.length > 1) {
            let rt = 0;
            if (z[0] !== null && z[1] !== null) {
              ve = De < z[1] ? "backward" : "forward";
              let Wt = z[0] === z[1] && z[0] < Pe;
              ve === "backward" && !Wt && (rt = -1);
            }
            ne = rt + De, ue = rt + De + 1;
          }
        }
        ne !== -1 && ue !== -1 && ne !== ue && U.current.setSelectionRange(ne, ue, ve);
      }
      let ke = ne !== -1 ? ne : fe, tt = ue !== -1 ? ue : Ce, nt = ve ?? Ct;
      A(ke), O(tt), $.current.prev = [ke, tt, nt];
    }
    if (document.addEventListener("selectionchange", be, { capture: !0 }), be(), document.activeElement === te && _(!0), !document.getElementById("input-otp-style")) {
      let fe = document.createElement("style");
      if (fe.id = "input-otp-style", document.head.appendChild(fe), fe.sheet) {
        let Ce = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        qt(fe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), qt(fe.sheet, `[data-input-otp]:autofill { ${Ce} }`), qt(fe.sheet, `[data-input-otp]:-webkit-autofill { ${Ce} }`), qt(fe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), qt(fe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let he = () => {
      oe && oe.style.setProperty("--root-height", `${te.clientHeight}px`);
    };
    he();
    let Se = new ResizeObserver(he);
    return Se.observe(te), () => {
      document.removeEventListener("selectionchange", be, { capture: !0 }), Se.disconnect();
    };
  }, []);
  let [ee, R] = d.useState(!1), [M, _] = d.useState(!1), [b, A] = d.useState(null), [I, O] = d.useState(null);
  d.useEffect(() => {
    db(() => {
      var te, oe, be, he;
      (te = U.current) == null || te.dispatchEvent(new Event("input"));
      let Se = (oe = U.current) == null ? void 0 : oe.selectionStart, fe = (be = U.current) == null ? void 0 : be.selectionEnd, Ce = (he = U.current) == null ? void 0 : he.selectionDirection;
      Se !== null && fe !== null && (A(Se), O(fe), $.current.prev = [Se, fe, Ce]);
    });
  }, [L, M]), d.useEffect(() => {
    B !== void 0 && L !== B && B.length < i && L.length === i && p?.(L);
  }, [i, p, B, L]);
  let G = vb({ containerRef: H, inputRef: U, pushPasswordManagerStrategy: f, isFocused: M }), V = d.useCallback((te) => {
    let oe = te.currentTarget.value.slice(0, i);
    if (oe.length > 0 && q && !q.test(oe)) {
      te.preventDefault();
      return;
    }
    typeof B == "string" && oe.length < B.length && document.dispatchEvent(new Event("selectionchange")), J(oe);
  }, [i, J, B, q]), k = d.useCallback(() => {
    var te;
    if (U.current) {
      let oe = Math.min(U.current.value.length, i - 1), be = U.current.value.length;
      (te = U.current) == null || te.setSelectionRange(oe, be), A(oe), O(be);
    }
    _(!0);
  }, [i]), W = d.useCallback((te) => {
    var oe, be;
    let he = U.current;
    if (!m && (!Q.current.isIOS || !te.clipboardData || !he)) return;
    let Se = te.clipboardData.getData("text/plain"), fe = m ? m(Se) : Se;
    te.preventDefault();
    let Ce = (oe = U.current) == null ? void 0 : oe.selectionStart, Ct = (be = U.current) == null ? void 0 : be.selectionEnd, Pe = (Ce !== Ct ? L.slice(0, Ce) + fe + L.slice(Ct) : L.slice(0, Ce) + fe + L.slice(Ce)).slice(0, i);
    if (Pe.length > 0 && q && !q.test(Pe)) return;
    he.value = Pe, J(Pe);
    let qe = Math.min(Pe.length, i - 1), z = Pe.length;
    he.setSelectionRange(qe, z), A(qe), O(z);
  }, [i, J, q, L]), Z = d.useMemo(() => ({ position: "relative", cursor: y.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [y.disabled]), F = d.useMemo(() => ({ position: "absolute", inset: 0, width: G.willPushPWMBadge ? `calc(100% + ${G.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: G.willPushPWMBadge ? `inset(0 ${G.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: a, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [G.PWM_BADGE_SPACE_WIDTH, G.willPushPWMBadge, a]), re = d.useMemo(() => d.createElement("input", cb(sb({ autoComplete: y.autoComplete || "one-time-code" }, y), { "data-input-otp": !0, "data-input-otp-placeholder-shown": L.length === 0 || void 0, "data-input-otp-mss": b, "data-input-otp-mse": I, inputMode: u, pattern: q?.source, "aria-placeholder": l, style: F, maxLength: i, value: L, ref: U, onPaste: (te) => {
    var oe;
    W(te), (oe = y.onPaste) == null || oe.call(y, te);
  }, onChange: V, onMouseOver: (te) => {
    var oe;
    R(!0), (oe = y.onMouseOver) == null || oe.call(y, te);
  }, onMouseLeave: (te) => {
    var oe;
    R(!1), (oe = y.onMouseLeave) == null || oe.call(y, te);
  }, onFocus: (te) => {
    var oe;
    k(), (oe = y.onFocus) == null || oe.call(y, te);
  }, onBlur: (te) => {
    var oe;
    _(!1), (oe = y.onBlur) == null || oe.call(y, te);
  } })), [V, k, W, u, F, i, I, b, y, q?.source, L]), T = d.useMemo(() => ({ slots: Array.from({ length: i }).map((te, oe) => {
    var be;
    let he = M && b !== null && I !== null && (b === I && oe === b || oe >= b && oe < I), Se = L[oe] !== void 0 ? L[oe] : null, fe = L[0] !== void 0 ? null : (be = l?.[oe]) != null ? be : null;
    return { char: Se, placeholderChar: fe, isActive: he, hasFakeCaret: he && Se === null };
  }), isFocused: M, isHovering: !y.disabled && ee }), [M, ee, i, I, b, y.disabled, L]), pe = d.useMemo(() => v ? v(T) : d.createElement(yl.Provider, { value: T }, h), [h, T, v]);
  return d.createElement(d.Fragment, null, x !== null && d.createElement("noscript", null, d.createElement("style", null, x)), d.createElement("div", { ref: H, "data-input-otp-container": !0, style: Z, className: g }, pe, d.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, re)));
});
wl.displayName = "Input";
function qt(e, n) {
  try {
    e.insertRule(n);
  } catch {
    console.error("input-otp could not insert CSS rule:", n);
  }
}
var gb = `
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
function Gy({ className: e, containerClassName: n, ...t }) {
  return /* @__PURE__ */ c.jsx(
    wl,
    {
      "data-slot": "input-otp",
      containerClassName: N("flex items-center gap-2 has-disabled:opacity-50", n),
      className: N("disabled:cursor-not-allowed", e),
      ...t
    }
  );
}
function qy({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: N("flex items-center gap-2", e),
      ...n
    }
  );
}
function Yy({
  index: e,
  className: n,
  ...t
}) {
  const r = Zr(yl), { char: o, hasFakeCaret: i, isActive: a } = r?.slots[e] ?? {};
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": a,
      className: N(
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
        i && /* @__PURE__ */ c.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ c.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function Ky({ ...e }) {
  return /* @__PURE__ */ c.jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ c.jsx(Bf, {}) });
}
function Cl({ size: e = 48, className: n, ...t }) {
  const r = typeof e == "number" ? `${e}` : e, o = typeof t["aria-label"] == "string";
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 47 48",
      width: r,
      height: r,
      className: N("inline-block", n),
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
function Zy({ size: e = 32, className: n, ...t }) {
  return /* @__PURE__ */ c.jsxs("div", { className: N("inline-flex items-center gap-2", n), ...t, children: [
    /* @__PURE__ */ c.jsx(Cl, { size: e }),
    /* @__PURE__ */ c.jsx("span", { className: "font-manrope text-base font-normal leading-none text-white", children: "MercySeat" })
  ] });
}
function hb(e) {
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
function xb(e) {
  return ["mp4", "webm", "ogg", "mov", "m4v"].includes(e) ? `video/${e === "mov" ? "quicktime" : e}` : ["mp3", "wav", "ogg", "aac", "flac", "m4a"].includes(e) ? `audio/${e === "mp3" ? "mpeg" : e === "m4a" ? "mp4" : e}` : null;
}
function bb(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = xb(r);
    o && (n[o] ??= [], n[o].push(`.${r}`));
  }
  return n;
}
function yb({ extensions: e, placeholder: n, onDropFile: t }) {
  const r = at(() => bb(e), [e]), o = ye(
    async (p) => {
      const f = p[0] || null;
      if (f && !(!f.type.startsWith("video/") && !f.type.startsWith("audio/")))
        try {
          const m = await hb(f);
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
  ), { getRootProps: i, getInputProps: a, isDragActive: s, fileRejections: l } = fi({
    onDrop: o,
    accept: r,
    maxFiles: 1
  }), u = l.flatMap(
    (p) => p.errors.map((f) => f.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${e.join(", ")}` : f.message)
  );
  return /* @__PURE__ */ c.jsxs("div", { className: "space-y-2 w-full", children: [
    /* @__PURE__ */ c.jsxs(
      "div",
      {
        ...i(),
        className: N(
          "relative flex flex-col items-center justify-center w-full min-h-38.5 border border-gray-50 rounded-[0.625rem] cursor-pointer transition-colors bg-white",
          s && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ c.jsx("input", { ...a() }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ c.jsx("div", { className: "size-12 flex items-center justify-center rounded-full bg-gray-25 mb-4", children: /* @__PURE__ */ c.jsx($s, { className: "size-6 text-blue-hepatica-600" }) }),
            /* @__PURE__ */ c.jsx("p", { className: "mb-2 text-sm text-gray-700 font-medium", children: "Click to upload or drag and drop" }),
            !!n && /* @__PURE__ */ c.jsx("p", { className: "text-xs text-gray-500 text-center", children: n })
          ] })
        ]
      }
    ),
    u.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "space-y-1", children: u.map((p, f) => /* @__PURE__ */ c.jsx("p", { className: "text-sm text-bright-red-600", children: p }, f)) })
  ] });
}
function wb({ file: e, onChange: n }) {
  const t = ye(() => {
    n(null);
  }, [n]), r = e.type.startsWith("video/") ? "Video" : "Audio";
  return /* @__PURE__ */ c.jsxs("div", { className: "w-full p-4 flex justify-between items-center bg-white border border-gray-50 rounded-lg", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ c.jsx("div", { className: "size-10 bg-gray-25 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ c.jsx($s, { className: "size-6 text-blue-hepatica-600" }) }),
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
        children: /* @__PURE__ */ c.jsx(Uf, { className: "size-4 text-bright-red-600" })
      }
    )
  ] });
}
function Xy({
  accepts: e,
  onChange: n,
  value: t,
  placeholder: r = ""
}) {
  return t ? /* @__PURE__ */ c.jsx(wb, { file: t, onChange: n }) : /* @__PURE__ */ c.jsx(
    yb,
    {
      extensions: e,
      onDropFile: n,
      placeholder: r
    }
  );
}
function Jy({ active: e, children: n, collapsed: t, disabled: r = !1 }) {
  return /* @__PURE__ */ c.jsx(
    tr,
    {
      className: N(
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
function La(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
// @__NO_SIDE_EFFECTS__
function Cb(e) {
  const n = /* @__PURE__ */ Eb(e), t = d.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = d.Children.toArray(i), l = s.find(kb);
    if (l) {
      const u = l.props.children, p = s.map((f) => f === l ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Eb(e) {
  const n = d.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (d.isValidElement(o)) {
      const a = Rb(o), s = _b(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? Je(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Sb = /* @__PURE__ */ Symbol("radix.slottable");
function kb(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Sb;
}
function _b(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], i = n[r];
    /^on[A-Z]/.test(r) ? o && i ? t[r] = (...s) => {
      const l = i(...s);
      return o(...s), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...i } : r === "className" && (t[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Rb(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function jb(e) {
  const n = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
var El = Object.freeze({
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
}), Pb = "VisuallyHidden", Ab = d.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(
    se.span,
    {
      ...e,
      ref: n,
      style: { ...El, ...e.style }
    }
  )
);
Ab.displayName = Pb;
var Tb = [" ", "Enter", "ArrowUp", "ArrowDown"], Ob = [" ", "Enter"], xt = "Select", [mr, vr, Mb] = Lo(xt), [zt] = Xe(xt, [
  Mb,
  Ft
]), gr = Ft(), [Db, dt] = zt(xt), [Nb, Ib] = zt(xt), Sl = (e) => {
  const {
    __scopeSelect: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: a,
    defaultValue: s,
    onValueChange: l,
    dir: u,
    name: p,
    autoComplete: f,
    disabled: m,
    required: g,
    form: x
  } = e, v = gr(n), [h, y] = d.useState(null), [w, E] = d.useState(null), [S, C] = d.useState(!1), D = Fo(u), [P, j] = mt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: xt
  }), [L, B] = mt({
    prop: a,
    defaultProp: s,
    onChange: l,
    caller: xt
  }), J = d.useRef(null), q = h ? x || !!h.closest("form") : !0, [U, H] = d.useState(/* @__PURE__ */ new Set()), Q = Array.from(U).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ c.jsx(sr, { ...v, children: /* @__PURE__ */ c.jsxs(
    Db,
    {
      required: g,
      scope: n,
      trigger: h,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: E,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: Oe(),
      value: L,
      onValueChange: B,
      open: P,
      onOpenChange: j,
      dir: D,
      triggerPointerDownPosRef: J,
      disabled: m,
      children: [
        /* @__PURE__ */ c.jsx(mr.Provider, { scope: n, children: /* @__PURE__ */ c.jsx(
          Nb,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: d.useCallback(($) => {
              H((ee) => new Set(ee).add($));
            }, []),
            onNativeOptionRemove: d.useCallback(($) => {
              H((ee) => {
                const R = new Set(ee);
                return R.delete($), R;
              });
            }, []),
            children: t
          }
        ) }),
        q ? /* @__PURE__ */ c.jsxs(
          Kl,
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
Sl.displayName = xt;
var kl = "SelectTrigger", _l = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, disabled: r = !1, ...o } = e, i = gr(t), a = dt(kl, t), s = a.disabled || r, l = ce(n, a.onTriggerChange), u = vr(t), p = d.useRef("touch"), [f, m, g] = Xl((v) => {
      const h = u().filter((E) => !E.disabled), y = h.find((E) => E.value === a.value), w = Jl(h, v, y);
      w !== void 0 && a.onValueChange(w.value);
    }), x = (v) => {
      s || (a.onOpenChange(!0), g()), v && (a.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(qo, { asChild: !0, ...i, children: /* @__PURE__ */ c.jsx(
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
        "data-placeholder": Zl(a.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: X(o.onClick, (v) => {
          v.currentTarget.focus(), p.current !== "mouse" && x(v);
        }),
        onPointerDown: X(o.onPointerDown, (v) => {
          p.current = v.pointerType;
          const h = v.target;
          h.hasPointerCapture(v.pointerId) && h.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (x(v), v.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (v) => {
          const h = f.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && m(v.key), !(h && v.key === " ") && Tb.includes(v.key) && (x(), v.preventDefault());
        })
      }
    ) });
  }
);
_l.displayName = kl;
var Rl = "SelectValue", jl = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, children: i, placeholder: a = "", ...s } = e, l = dt(Rl, t), { onValueNodeHasChildrenChange: u } = l, p = i !== void 0, f = ce(n, l.onValueNodeChange);
    return _e(() => {
      u(p);
    }, [u, p]), /* @__PURE__ */ c.jsx(
      se.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: Zl(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: a }) : i
      }
    );
  }
);
jl.displayName = Rl;
var Lb = "SelectIcon", Pl = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(se.span, { "aria-hidden": !0, ...o, ref: n, children: r || "▼" });
  }
);
Pl.displayName = Lb;
var Fb = "SelectPortal", Al = (e) => /* @__PURE__ */ c.jsx(Xn, { asChild: !0, ...e });
Al.displayName = Fb;
var bt = "SelectContent", Tl = d.forwardRef(
  (e, n) => {
    const t = dt(bt, e.__scopeSelect), [r, o] = d.useState();
    if (_e(() => {
      o(new DocumentFragment());
    }, []), !t.open) {
      const i = r;
      return i ? Kn.createPortal(
        /* @__PURE__ */ c.jsx(Ol, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(mr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(Ml, { ...e, ref: n });
  }
);
Tl.displayName = bt;
var Ne = 10, [Ol, ut] = zt(bt), zb = "SelectContentImpl", $b = /* @__PURE__ */ Cb("SelectContent.RemoveScroll"), Ml = d.forwardRef(
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
      sideOffset: l,
      align: u,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: x,
      hideWhenDetached: v,
      avoidCollisions: h,
      //
      ...y
    } = e, w = dt(bt, t), [E, S] = d.useState(null), [C, D] = d.useState(null), P = ce(n, (k) => S(k)), [j, L] = d.useState(null), [B, J] = d.useState(
      null
    ), q = vr(t), [U, H] = d.useState(!1), Q = d.useRef(!1);
    d.useEffect(() => {
      if (E) return Co(E);
    }, [E]), wo();
    const $ = d.useCallback(
      (k) => {
        const [W, ...Z] = q().map((T) => T.ref.current), [F] = Z.slice(-1), re = document.activeElement;
        for (const T of k)
          if (T === re || (T?.scrollIntoView({ block: "nearest" }), T === W && C && (C.scrollTop = 0), T === F && C && (C.scrollTop = C.scrollHeight), T?.focus(), document.activeElement !== re)) return;
      },
      [q, C]
    ), ee = d.useCallback(
      () => $([j, E]),
      [$, j, E]
    );
    d.useEffect(() => {
      U && ee();
    }, [U, ee]);
    const { onOpenChange: R, triggerPointerDownPosRef: M } = w;
    d.useEffect(() => {
      if (E) {
        let k = { x: 0, y: 0 };
        const W = (F) => {
          k = {
            x: Math.abs(Math.round(F.pageX) - (M.current?.x ?? 0)),
            y: Math.abs(Math.round(F.pageY) - (M.current?.y ?? 0))
          };
        }, Z = (F) => {
          k.x <= 10 && k.y <= 10 ? F.preventDefault() : E.contains(F.target) || R(!1), document.removeEventListener("pointermove", W), M.current = null;
        };
        return M.current !== null && (document.addEventListener("pointermove", W), document.addEventListener("pointerup", Z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", W), document.removeEventListener("pointerup", Z, { capture: !0 });
        };
      }
    }, [E, R, M]), d.useEffect(() => {
      const k = () => R(!1);
      return window.addEventListener("blur", k), window.addEventListener("resize", k), () => {
        window.removeEventListener("blur", k), window.removeEventListener("resize", k);
      };
    }, [R]);
    const [_, b] = Xl((k) => {
      const W = q().filter((re) => !re.disabled), Z = W.find((re) => re.ref.current === document.activeElement), F = Jl(W, k, Z);
      F && setTimeout(() => F.ref.current.focus());
    }), A = d.useCallback(
      (k, W, Z) => {
        const F = !Q.current && !Z;
        (w.value !== void 0 && w.value === W || F) && (L(k), F && (Q.current = !0));
      },
      [w.value]
    ), I = d.useCallback(() => E?.focus(), [E]), O = d.useCallback(
      (k, W, Z) => {
        const F = !Q.current && !Z;
        (w.value !== void 0 && w.value === W || F) && J(k);
      },
      [w.value]
    ), G = r === "popper" ? fo : Dl, V = G === fo ? {
      side: s,
      sideOffset: l,
      align: u,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: x,
      hideWhenDetached: v,
      avoidCollisions: h
    } : {};
    return /* @__PURE__ */ c.jsx(
      Ol,
      {
        scope: t,
        content: E,
        viewport: C,
        onViewportChange: D,
        itemRefCallback: A,
        selectedItem: j,
        onItemLeave: I,
        itemTextRefCallback: O,
        focusSelectedItem: ee,
        selectedItemText: B,
        position: r,
        isPositioned: U,
        searchRef: _,
        children: /* @__PURE__ */ c.jsx(Qn, { as: $b, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          Zn,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (k) => {
              k.preventDefault();
            },
            onUnmountAutoFocus: X(o, (k) => {
              w.trigger?.focus({ preventScroll: !0 }), k.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              rn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (k) => k.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  G,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (k) => k.preventDefault(),
                    ...y,
                    ...V,
                    onPlaced: () => H(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: X(y.onKeyDown, (k) => {
                      const W = k.ctrlKey || k.altKey || k.metaKey;
                      if (k.key === "Tab" && k.preventDefault(), !W && k.key.length === 1 && b(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
                        let F = q().filter((re) => !re.disabled).map((re) => re.ref.current);
                        if (["ArrowUp", "End"].includes(k.key) && (F = F.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(k.key)) {
                          const re = k.target, T = F.indexOf(re);
                          F = F.slice(T + 1);
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
Ml.displayName = zb;
var Vb = "SelectItemAlignedPosition", Dl = d.forwardRef((e, n) => {
  const { __scopeSelect: t, onPlaced: r, ...o } = e, i = dt(bt, t), a = ut(bt, t), [s, l] = d.useState(null), [u, p] = d.useState(null), f = ce(n, (P) => p(P)), m = vr(t), g = d.useRef(!1), x = d.useRef(!0), { viewport: v, selectedItem: h, selectedItemText: y, focusSelectedItem: w } = a, E = d.useCallback(() => {
    if (i.trigger && i.valueNode && s && u && v && h && y) {
      const P = i.trigger.getBoundingClientRect(), j = u.getBoundingClientRect(), L = i.valueNode.getBoundingClientRect(), B = y.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const re = B.left - j.left, T = L.left - re, pe = P.left - T, te = P.width + pe, oe = Math.max(te, j.width), be = window.innerWidth - Ne, he = La(T, [
          Ne,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ne, be - oe)
        ]);
        s.style.minWidth = te + "px", s.style.left = he + "px";
      } else {
        const re = j.right - B.right, T = window.innerWidth - L.right - re, pe = window.innerWidth - P.right - T, te = P.width + pe, oe = Math.max(te, j.width), be = window.innerWidth - Ne, he = La(T, [
          Ne,
          Math.max(Ne, be - oe)
        ]);
        s.style.minWidth = te + "px", s.style.right = he + "px";
      }
      const J = m(), q = window.innerHeight - Ne * 2, U = v.scrollHeight, H = window.getComputedStyle(u), Q = parseInt(H.borderTopWidth, 10), $ = parseInt(H.paddingTop, 10), ee = parseInt(H.borderBottomWidth, 10), R = parseInt(H.paddingBottom, 10), M = Q + $ + U + R + ee, _ = Math.min(h.offsetHeight * 5, M), b = window.getComputedStyle(v), A = parseInt(b.paddingTop, 10), I = parseInt(b.paddingBottom, 10), O = P.top + P.height / 2 - Ne, G = q - O, V = h.offsetHeight / 2, k = h.offsetTop + V, W = Q + $ + k, Z = M - W;
      if (W <= O) {
        const re = J.length > 0 && h === J[J.length - 1].ref.current;
        s.style.bottom = "0px";
        const T = u.clientHeight - v.offsetTop - v.offsetHeight, pe = Math.max(
          G,
          V + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? I : 0) + T + ee
        ), te = W + pe;
        s.style.height = te + "px";
      } else {
        const re = J.length > 0 && h === J[0].ref.current;
        s.style.top = "0px";
        const pe = Math.max(
          O,
          Q + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? A : 0) + V
        ) + Z;
        s.style.height = pe + "px", v.scrollTop = W - O + v.offsetTop;
      }
      s.style.margin = `${Ne}px 0`, s.style.minHeight = _ + "px", s.style.maxHeight = q + "px", r?.(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    m,
    i.trigger,
    i.valueNode,
    s,
    u,
    v,
    h,
    y,
    i.dir,
    r
  ]);
  _e(() => E(), [E]);
  const [S, C] = d.useState();
  _e(() => {
    u && C(window.getComputedStyle(u).zIndex);
  }, [u]);
  const D = d.useCallback(
    (P) => {
      P && x.current === !0 && (E(), w?.(), x.current = !1);
    },
    [E, w]
  );
  return /* @__PURE__ */ c.jsx(
    Bb,
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
            zIndex: S
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
Dl.displayName = Vb;
var Wb = "SelectPopperPosition", fo = d.forwardRef((e, n) => {
  const {
    __scopeSelect: t,
    align: r = "start",
    collisionPadding: o = Ne,
    ...i
  } = e, a = gr(t);
  return /* @__PURE__ */ c.jsx(
    Yo,
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
fo.displayName = Wb;
var [Bb, mi] = zt(bt, {}), mo = "SelectViewport", Nl = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, nonce: r, ...o } = e, i = ut(mo, t), a = mi(mo, t), s = ce(n, i.onViewportChange), l = d.useRef(0);
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
      /* @__PURE__ */ c.jsx(mr.Slot, { scope: t, children: /* @__PURE__ */ c.jsx(
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
          onScroll: X(o.onScroll, (u) => {
            const p = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: m } = a;
            if (m?.current && f) {
              const g = Math.abs(l.current - p.scrollTop);
              if (g > 0) {
                const x = window.innerHeight - Ne * 2, v = parseFloat(f.style.minHeight), h = parseFloat(f.style.height), y = Math.max(v, h);
                if (y < x) {
                  const w = y + g, E = Math.min(x, w), S = w - E;
                  f.style.height = E + "px", f.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, f.style.justifyContent = "flex-end");
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
Nl.displayName = mo;
var Il = "SelectGroup", [Hb, Ub] = zt(Il), Ll = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = Oe();
    return /* @__PURE__ */ c.jsx(Hb, { scope: t, id: o, children: /* @__PURE__ */ c.jsx(se.div, { role: "group", "aria-labelledby": o, ...r, ref: n }) });
  }
);
Ll.displayName = Il;
var Fl = "SelectLabel", zl = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = Ub(Fl, t);
    return /* @__PURE__ */ c.jsx(se.div, { id: o.id, ...r, ref: n });
  }
);
zl.displayName = Fl;
var Un = "SelectItem", [Gb, $l] = zt(Un), Vl = d.forwardRef(
  (e, n) => {
    const {
      __scopeSelect: t,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, s = dt(Un, t), l = ut(Un, t), u = s.value === r, [p, f] = d.useState(i ?? ""), [m, g] = d.useState(!1), x = ce(
      n,
      (w) => l.itemRefCallback?.(w, r, o)
    ), v = Oe(), h = d.useRef("touch"), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      Gb,
      {
        scope: t,
        value: r,
        disabled: o,
        textId: v,
        isSelected: u,
        onItemTextChange: d.useCallback((w) => {
          f((E) => E || (w?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ c.jsx(
          mr.ItemSlot,
          {
            scope: t,
            value: r,
            disabled: o,
            textValue: p,
            children: /* @__PURE__ */ c.jsx(
              se.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": u && m,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: x,
                onFocus: X(a.onFocus, () => g(!0)),
                onBlur: X(a.onBlur, () => g(!1)),
                onClick: X(a.onClick, () => {
                  h.current !== "mouse" && y();
                }),
                onPointerUp: X(a.onPointerUp, () => {
                  h.current === "mouse" && y();
                }),
                onPointerDown: X(a.onPointerDown, (w) => {
                  h.current = w.pointerType;
                }),
                onPointerMove: X(a.onPointerMove, (w) => {
                  h.current = w.pointerType, o ? l.onItemLeave?.() : h.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(a.onPointerLeave, (w) => {
                  w.currentTarget === document.activeElement && l.onItemLeave?.();
                }),
                onKeyDown: X(a.onKeyDown, (w) => {
                  l.searchRef?.current !== "" && w.key === " " || (Ob.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Vl.displayName = Un;
var Zt = "SelectItemText", Wl = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, ...i } = e, a = dt(Zt, t), s = ut(Zt, t), l = $l(Zt, t), u = Ib(Zt, t), [p, f] = d.useState(null), m = ce(
      n,
      (y) => f(y),
      l.onItemTextChange,
      (y) => s.itemTextRefCallback?.(y, l.value, l.disabled)
    ), g = p?.textContent, x = d.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: l.value, disabled: l.disabled, children: g }, l.value),
      [l.disabled, l.value, g]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: h } = u;
    return _e(() => (v(x), () => h(x)), [v, h, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(se.span, { id: l.textId, ...i, ref: m }),
      l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Kn.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
Wl.displayName = Zt;
var Bl = "SelectItemIndicator", Hl = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return $l(Bl, t).isSelected ? /* @__PURE__ */ c.jsx(se.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }
);
Hl.displayName = Bl;
var vo = "SelectScrollUpButton", Ul = d.forwardRef((e, n) => {
  const t = ut(vo, e.__scopeSelect), r = mi(vo, e.__scopeSelect), [o, i] = d.useState(!1), a = ce(n, r.onScrollButtonChange);
  return _e(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const u = l.scrollTop > 0;
        i(u);
      };
      const l = t.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    ql,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = t;
        s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Ul.displayName = vo;
var go = "SelectScrollDownButton", Gl = d.forwardRef((e, n) => {
  const t = ut(go, e.__scopeSelect), r = mi(go, e.__scopeSelect), [o, i] = d.useState(!1), a = ce(n, r.onScrollButtonChange);
  return _e(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const u = l.scrollHeight - l.clientHeight, p = Math.ceil(l.scrollTop) < u;
        i(p);
      };
      const l = t.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    ql,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = t;
        s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Gl.displayName = go;
var ql = d.forwardRef((e, n) => {
  const { __scopeSelect: t, onAutoScroll: r, ...o } = e, i = ut("SelectScrollButton", t), a = d.useRef(null), s = vr(t), l = d.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return d.useEffect(() => () => l(), [l]), _e(() => {
    s().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ c.jsx(
    se.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: n,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: X(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: X(o.onPointerMove, () => {
        i.onItemLeave?.(), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: X(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), qb = "SelectSeparator", Yl = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(se.div, { "aria-hidden": !0, ...r, ref: n });
  }
);
Yl.displayName = qb;
var ho = "SelectArrow", Yb = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = gr(t), i = dt(ho, t), a = ut(ho, t);
    return i.open && a.position === "popper" ? /* @__PURE__ */ c.jsx(Ko, { ...o, ...r, ref: n }) : null;
  }
);
Yb.displayName = ho;
var Kb = "SelectBubbleInput", Kl = d.forwardRef(
  ({ __scopeSelect: e, value: n, ...t }, r) => {
    const o = d.useRef(null), i = ce(r, o), a = jb(n);
    return d.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (a !== n && p) {
        const f = new Event("change", { bubbles: !0 });
        p.call(s, n), s.dispatchEvent(f);
      }
    }, [a, n]), /* @__PURE__ */ c.jsx(
      se.select,
      {
        ...t,
        style: { ...El, ...t.style },
        ref: i,
        defaultValue: n
      }
    );
  }
);
Kl.displayName = Kb;
function Zl(e) {
  return e === "" || e === void 0;
}
function Xl(e) {
  const n = Ie(e), t = d.useRef(""), r = d.useRef(0), o = d.useCallback(
    (a) => {
      const s = t.current + a;
      n(s), (function l(u) {
        t.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(s);
    },
    [n]
  ), i = d.useCallback(() => {
    t.current = "", window.clearTimeout(r.current);
  }, []);
  return d.useEffect(() => () => window.clearTimeout(r.current), []), [t, o, i];
}
function Jl(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((u) => u === n[0]) ? n[0] : n, i = t ? e.indexOf(t) : -1;
  let a = Zb(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== t));
  const l = a.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== t ? l : void 0;
}
function Zb(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var Xb = Sl, Jb = _l, Qb = jl, e0 = Pl, t0 = Al, n0 = Tl, r0 = Nl, o0 = Ll, i0 = zl, a0 = Vl, s0 = Wl, c0 = Hl, l0 = Ul, d0 = Gl, u0 = Yl;
function p0({ ...e }) {
  return /* @__PURE__ */ c.jsx(Xb, { "data-slot": "select", ...e });
}
function Qy({ ...e }) {
  return /* @__PURE__ */ c.jsx(o0, { "data-slot": "select-group", ...e });
}
function f0({ ...e }) {
  return /* @__PURE__ */ c.jsx(Qb, { "data-slot": "select-value", ...e });
}
function m0({
  className: e,
  size: n = "default",
  variant: t = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ c.jsxs(
    Jb,
    {
      "data-slot": "select-trigger",
      "data-size": n,
      className: N(
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
        /* @__PURE__ */ c.jsx(e0, { asChild: !0, children: /* @__PURE__ */ c.jsx(
          zs,
          {
            className: N({
              "size-6 text-gray-300": t === "default",
              "size-4 text-gray-600": t === "ghost"
            })
          }
        ) })
      ]
    }
  );
}
function v0({
  className: e,
  children: n,
  position: t = "popper",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ c.jsx(t0, { children: /* @__PURE__ */ c.jsxs(
    n0,
    {
      "data-slot": "select-content",
      className: N(
        "bg-white font-manrope text-gray-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height)  origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-gray-25 shadow-md",
        t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: t,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ c.jsx(h0, {}),
        /* @__PURE__ */ c.jsx(
          r0,
          {
            className: N(
              "p-1",
              t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: n
          }
        ),
        /* @__PURE__ */ c.jsx(x0, {})
      ]
    }
  ) });
}
function e1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    i0,
    {
      "data-slot": "select-label",
      className: N("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...n
    }
  );
}
function g0({
  className: e,
  children: n,
  ...t
}) {
  return /* @__PURE__ */ c.jsxs(
    a0,
    {
      "data-slot": "select-item",
      className: N(
        "focus:bg-gray-25 focus:text-blue-hepatica-600 [&_svg:not([class*='text-'])]:text-gray-300 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...t,
      children: [
        /* @__PURE__ */ c.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx(c0, { children: /* @__PURE__ */ c.jsx(an, { className: "size-4" }) }) }),
        /* @__PURE__ */ c.jsx(s0, { children: n })
      ]
    }
  );
}
function t1({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    u0,
    {
      "data-slot": "select-separator",
      className: N("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...n
    }
  );
}
function h0({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    l0,
    {
      "data-slot": "select-scroll-up-button",
      className: N("flex cursor-default items-center justify-center py-1", e),
      ...n,
      children: /* @__PURE__ */ c.jsx(Lf, { className: "size-4" })
    }
  );
}
function x0({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    d0,
    {
      "data-slot": "select-scroll-down-button",
      className: N("flex cursor-default items-center justify-center py-1", e),
      ...n,
      children: /* @__PURE__ */ c.jsx(zs, { className: "size-4" })
    }
  );
}
function n1({
  page: e,
  pageSize: n,
  totalItems: t,
  pageSizeOptions: r = [5, 10, 25, 50],
  onPageChange: o,
  onPageSizeChange: i,
  disabled: a = !1,
  className: s,
  ...l
}) {
  const u = Math.max(1, Math.ceil(t / Math.max(n, 1))), p = Math.min(Math.max(e, 1), u), f = t === 0 ? 0 : (p - 1) * n + 1, m = t === 0 ? 0 : Math.min(t, p * n), g = !a && p > 1, x = !a && p < u, v = () => {
    g && o(p - 1);
  }, h = () => {
    x && o(p + 1);
  }, y = (w) => {
    Number.isNaN(Number(w)) || i?.(Number(w));
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      "data-slot": "pagination",
      className: N(
        "flex w-full items-center justify-end gap-4 py-3 text-sm text-gray-700",
        "border-t border-gray-50",
        s
      ),
      ...l,
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ c.jsx("span", { className: "font-manrope text-xs text-gray-700", children: "Rows per page:" }),
          /* @__PURE__ */ c.jsx("div", { className: "w-16", children: /* @__PURE__ */ c.jsxs(
            p0,
            {
              disabled: a || !i,
              defaultValue: `${n}`,
              onValueChange: y,
              "data-testid": "pagination--items-per-page",
              children: [
                /* @__PURE__ */ c.jsx(m0, { variant: "ghost", disabled: a, children: /* @__PURE__ */ c.jsx(f0, { placeholder: "Theme" }) }),
                /* @__PURE__ */ c.jsx(v0, { children: r.map((w) => /* @__PURE__ */ c.jsx(g0, { value: `${w}`, children: w }, w)) })
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
                onClick: v,
                disabled: !g,
                "aria-label": "Previous page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ c.jsx(Nf, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                "data-slot": "pagination-next",
                type: "button",
                onClick: h,
                disabled: !x,
                "aria-label": "Next page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ c.jsx(Do, { className: "size-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function r1({
  checked: e,
  children: n,
  name: t,
  onChange: r,
  value: o,
  disabled: i = !1
}) {
  const a = `${t}-${o}`;
  return /* @__PURE__ */ c.jsxs(
    "label",
    {
      htmlFor: a,
      className: N(
        "group w-full p-4 gap-1 flex items-start justify-start rounded-lg border border-gray-50 bg-white transition-colors",
        "focus-within:ring-2 focus-within:ring-blue-hepatica-300",
        {
          "border-2 border-blue-hepatica-600 bg-blue-hepatica-100": e,
          "opacity-60 cursor-not-allowed": i
        }
      ),
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "size-10 flex justify-center items-center", children: [
          /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: N(
                "pointer-events-none size-4 border border-gray-700 rounded-full flex items-center justify-center",
                {
                  "border-2 border-blue-hepatica-600": e
                }
              ),
              children: /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: N("size-2 rounded-full bg-transparent", {
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
const b0 = nr("bg-white rounded-2xl overflow-hidden flex flex-col w-full", {
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
function o1({
  title: e,
  children: n,
  footer: t,
  elevation: r = "elevation-0",
  className: o,
  ...i
}) {
  return /* @__PURE__ */ c.jsxs("section", { ...i, className: N(b0({ elevation: r, className: o })), children: [
    !!e && /* @__PURE__ */ c.jsx("header", { className: "h-15 flex items-center px-8 border-b border-b-gray-25", children: /* @__PURE__ */ c.jsx("h3", { className: "font-manrope font-semibold text-base text-gray-900 leading-5", children: e }) }),
    /* @__PURE__ */ c.jsx("div", { className: "flex flex-col p-4 md:p-8!", children: n }),
    !!t && /* @__PURE__ */ c.jsx("footer", { className: "px-4 md:px-8! py-4 md:py-6! border-t border-t-gray-25", children: t })
  ] });
}
function i1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "shimmer",
      "aria-hidden": "true",
      className: N(
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
var Ql = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Fa = ie.createContext && /* @__PURE__ */ ie.createContext(Ql), y0 = ["attr", "size", "title"];
function w0(e, n) {
  if (e == null) return {};
  var t = C0(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function C0(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function Gn() {
  return Gn = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Gn.apply(this, arguments);
}
function za(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function qn(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? za(Object(t), !0).forEach(function(r) {
      E0(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : za(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function E0(e, n, t) {
  return n = S0(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function S0(e) {
  var n = k0(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function k0(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function ed(e) {
  return e && e.map((n, t) => /* @__PURE__ */ ie.createElement(n.tag, qn({
    key: t
  }, n.attr), ed(n.child)));
}
function _0(e) {
  return (n) => /* @__PURE__ */ ie.createElement(R0, Gn({
    attr: qn({}, e.attr)
  }, n), ed(e.child));
}
function R0(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, a = w0(e, y0), s = o || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ ie.createElement("svg", Gn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, a, {
      className: l,
      style: qn(qn({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ ie.createElement("title", null, i), e.children);
  };
  return Fa !== void 0 ? /* @__PURE__ */ ie.createElement(Fa.Consumer, null, (t) => n(t)) : n(Ql);
}
function j0(e) {
  return _0({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM22.0104 8.81412L20.5962 7.3999L16 11.9961L20.5962 16.5923L22.0104 15.1781L18.8284 11.9961L22.0104 8.81412Z" }, child: [] }] })(e);
}
const P0 = new URL("data:image/svg+xml,%3csvg%20width='247'%20height='980'%20viewBox='0%200%20247%20980'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9467_2027)'%3e%3crect%20width='247'%20height='983'%20fill='black'/%3e%3cg%20opacity='0.3'%20filter='url(%23filter0_f_9467_2027)'%3e%3cellipse%20cx='-129.135'%20cy='1014.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20-129.135%201014.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.3'%20filter='url(%23filter1_f_9467_2027)'%3e%3cellipse%20cx='450.01'%20cy='1514.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20450.01%201514.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter2_f_9467_2027)'%3e%3cellipse%20cx='119.407'%20cy='-84.3658'%20rx='364.442'%20ry='193.158'%20fill='%230B495D'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter3_f_9467_2027)'%3e%3cellipse%20cx='399.478'%20cy='-0.360779'%20rx='364.442'%20ry='193.158'%20transform='rotate(30%20399.478%20-0.360779)'%20fill='%23BF3535'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter4_f_9467_2027)'%3e%3cellipse%20cx='-312.773'%20cy='835'%20rx='434.874'%20ry='485.827'%20transform='rotate(-136.998%20-312.773%20835)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter5_f_9467_2027)'%3e%3cellipse%20cx='336.608'%20cy='1039.65'%20rx='553.734'%20ry='293.484'%20transform='rotate(7.13051%20336.608%201039.65)'%20fill='%23660000'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_9467_2027'%20x='-691.145'%20y='128.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_9467_2027'%20x='-112'%20y='628.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_9467_2027'%20x='-453.839'%20y='-486.327'%20width='1146.49'%20height='803.922'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_9467_2027'%20x='-139.475'%20y='-456.526'%20width='1077.91'%20height='912.33'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_9467_2027'%20x='-1172.05'%20y='-27.8358'%20width='1718.56'%20height='1725.67'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_9467_2027'%20x='-531.326'%20y='423.111'%20width='1735.87'%20height='1233.08'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='158.628'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cclipPath%20id='clip0_9467_2027'%3e%3crect%20width='247'%20height='983'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", import.meta.url).href;
function a1({ children: e }) {
  const [n, t] = We(!1), r = ye(() => t((i) => !i), []), o = ye(() => t(!1), []);
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(
      "button",
      {
        type: "button",
        onClick: r,
        className: N(
          "fixed left-4 top-4 z-40 inline-flex size-12 items-center justify-center",
          "rounded-lg bg-black",
          "lg:hidden"
          // hide the button when viewport >= 912px
        ),
        "aria-label": n ? "Close sidebar" : "Open sidebar",
        children: /* @__PURE__ */ c.jsx(j0, { className: "size-6 text-white" })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: N(
          "fixed inset-0 z-30 bg-black/40 transition-opacity sidebar:hidden lg:hidden",
          n ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: o
      }
    ),
    /* @__PURE__ */ c.jsxs(
      "aside",
      {
        className: N(
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
              src: P0,
              alt: "",
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
            }
          ),
          /* @__PURE__ */ c.jsxs("div", { className: "w-66.75 grid grid-rows-[112px_1fr]", children: [
            /* @__PURE__ */ c.jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center gap-y-2", children: [
              /* @__PURE__ */ c.jsx(Cl, { className: "size-10.5" }),
              /* @__PURE__ */ c.jsx("h1", { className: "font-manrope font-nromal text-base text-white tracking-[0.04em]", children: "MercySeat" })
            ] }) }),
            /* @__PURE__ */ c.jsx("div", { className: "overflow-hidden w-66.75", children: e })
          ] })
        ]
      }
    )
  ] });
}
function A0({
  index: e,
  label: n,
  current: t,
  completed: r,
  disabled: o = !1,
  onClick: i
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
          t || o || i();
        },
        className: N(
          "w-8 h-8 rounded-full flex justify-center items-center",
          "border border-gray-50 bg-gray-25",
          {
            "bg-blue-hepatica-600 text-white border-none hover:bg-blue-hepatica-700": t || r,
            "cursor-not-allowed": o
          }
        ),
        children: r && !t ? /* @__PURE__ */ c.jsx(an, { className: "size-4 text-white", "aria-hidden": "true" }) : /* @__PURE__ */ c.jsx(
          "span",
          {
            className: N("font-semibold text-sm text-gray-300", {
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
        className: N(
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
function s1({
  steps: e,
  currentId: n,
  onStepChange: t,
  className: r
}) {
  const o = e.findIndex((i) => i.id === n);
  return /* @__PURE__ */ c.jsx(
    "nav",
    {
      "aria-label": "Steps",
      "data-slot": "steps",
      className: N("w-full", r),
      children: /* @__PURE__ */ c.jsxs("ol", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ c.jsx("span", { className: "absolute border-b border-b-gray-50 top-1/2 left-0 right-0" }),
        e.map((i, a) => {
          const s = o !== -1 && a < o;
          return /* @__PURE__ */ c.jsx(
            A0,
            {
              current: i.id === n,
              completed: s,
              disabled: i.disabled,
              index: a,
              label: i.label,
              onClick: () => t(i.id)
            },
            i.id
          );
        })
      ] })
    }
  );
}
function c1({ children: e, items: n, className: t, align: r = "end", side: o = "bottom" }) {
  return /* @__PURE__ */ c.jsxs(Ug, { children: [
    /* @__PURE__ */ c.jsx(Gg, { asChild: !0, children: e }),
    /* @__PURE__ */ c.jsx(qg, { children: /* @__PURE__ */ c.jsx(
      Yg,
      {
        className: N(
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
        children: n.map((i, a) => /* @__PURE__ */ c.jsxs(
          Kg,
          {
            className: N(
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
              i.icon && /* @__PURE__ */ c.jsx("span", { className: "shrink-0 w-4 h-4 flex items-center justify-center", children: i.icon }),
              /* @__PURE__ */ c.jsx("span", { children: i.label })
            ]
          },
          a
        ))
      }
    ) })
  ] });
}
function l1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ c.jsx(
    "table",
    {
      "data-slot": "table",
      className: N("w-full caption-bottom text-sm", e),
      ...n
    }
  ) });
}
function d1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: N("border-b-2 border-b-gray-50", e),
      ...n
    }
  );
}
function u1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: N("[&_tr:last-child]:border-0", e),
      ...n
    }
  );
}
function p1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: N(
        "bg-white border-t border-t-gray-50 font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...n
    }
  );
}
function f1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: N(
        "hover:bg-blue-hepatica-100 data-[state=selected]:bg-blue-hepatica-100 border-b border-b-gray-50 transition-colors",
        e
      ),
      ...n
    }
  );
}
function m1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: N(
        "font-manrope text-sm text-gray-900 tracking-[0.02em] h-12 px-4 text-left align-middle font-semibold whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function v1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: N(
        "px-4 py-2 font-manrope align-middle whitespace-nowrap text-sm tracking-[0.02em] text-gray-700 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function g1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "caption",
    {
      "data-slot": "table-caption",
      className: N("text-muted-foreground mt-4 text-sm", e),
      ...n
    }
  );
}
function h1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: N(
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
var T0 = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function O0(e) {
  const n = ({ children: t }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = T0, n;
}
var M0 = Object.freeze({
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
}), D0 = "VisuallyHidden", td = d.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(
    se.span,
    {
      ...e,
      ref: n,
      style: { ...M0, ...e.style }
    }
  )
);
td.displayName = D0;
var N0 = td, [hr] = Xe("Tooltip", [
  Ft
]), xr = Ft(), nd = "TooltipProvider", I0 = 700, xo = "tooltip.open", [L0, vi] = hr(nd), rd = (e) => {
  const {
    __scopeTooltip: n,
    delayDuration: t = I0,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, a = d.useRef(!0), s = d.useRef(!1), l = d.useRef(0);
  return d.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ c.jsx(
    L0,
    {
      scope: n,
      isOpenDelayedRef: a,
      delayDuration: t,
      onOpen: d.useCallback(() => {
        window.clearTimeout(l.current), a.current = !1;
      }, []),
      onClose: d.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => a.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: d.useCallback((u) => {
        s.current = u;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
rd.displayName = nd;
var nn = "Tooltip", [F0, br] = hr(nn), od = (e) => {
  const {
    __scopeTooltip: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: a,
    delayDuration: s
  } = e, l = vi(nn, e.__scopeTooltip), u = xr(n), [p, f] = d.useState(null), m = Oe(), g = d.useRef(0), x = a ?? l.disableHoverableContent, v = s ?? l.delayDuration, h = d.useRef(!1), [y, w] = mt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (P) => {
      P ? (l.onOpen(), document.dispatchEvent(new CustomEvent(xo))) : l.onClose(), i?.(P);
    },
    caller: nn
  }), E = d.useMemo(() => y ? h.current ? "delayed-open" : "instant-open" : "closed", [y]), S = d.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, h.current = !1, w(!0);
  }, [w]), C = d.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, w(!1);
  }, [w]), D = d.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      h.current = !0, w(!0), g.current = 0;
    }, v);
  }, [v, w]);
  return d.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ c.jsx(sr, { ...u, children: /* @__PURE__ */ c.jsx(
    F0,
    {
      scope: n,
      contentId: m,
      open: y,
      stateAttribute: E,
      trigger: p,
      onTriggerChange: f,
      onTriggerEnter: d.useCallback(() => {
        l.isOpenDelayedRef.current ? D() : S();
      }, [l.isOpenDelayedRef, D, S]),
      onTriggerLeave: d.useCallback(() => {
        x ? C() : (window.clearTimeout(g.current), g.current = 0);
      }, [C, x]),
      onOpen: S,
      onClose: C,
      disableHoverableContent: x,
      children: t
    }
  ) });
};
od.displayName = nn;
var bo = "TooltipTrigger", id = d.forwardRef(
  (e, n) => {
    const { __scopeTooltip: t, ...r } = e, o = br(bo, t), i = vi(bo, t), a = xr(t), s = d.useRef(null), l = ce(n, s, o.onTriggerChange), u = d.useRef(!1), p = d.useRef(!1), f = d.useCallback(() => u.current = !1, []);
    return d.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ c.jsx(qo, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
      se.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: X(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !p.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: X(e.onPointerLeave, () => {
          o.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: X(e.onPointerDown, () => {
          o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: X(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: X(e.onBlur, o.onClose),
        onClick: X(e.onClick, o.onClose)
      }
    ) });
  }
);
id.displayName = bo;
var z0 = "TooltipPortal", [x1, $0] = hr(z0, {
  forceMount: void 0
}), Mt = "TooltipContent", ad = d.forwardRef(
  (e, n) => {
    const t = $0(Mt, e.__scopeTooltip), { forceMount: r = t.forceMount, side: o = "top", ...i } = e, a = br(Mt, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(Qe, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ c.jsx(sd, { side: o, ...i, ref: n }) : /* @__PURE__ */ c.jsx(V0, { side: o, ...i, ref: n }) });
  }
), V0 = d.forwardRef((e, n) => {
  const t = br(Mt, e.__scopeTooltip), r = vi(Mt, e.__scopeTooltip), o = d.useRef(null), i = ce(n, o), [a, s] = d.useState(null), { trigger: l, onClose: u } = t, p = o.current, { onPointerInTransitChange: f } = r, m = d.useCallback(() => {
    s(null), f(!1);
  }, [f]), g = d.useCallback(
    (x, v) => {
      const h = x.currentTarget, y = { x: x.clientX, y: x.clientY }, w = G0(y, h.getBoundingClientRect()), E = q0(y, w), S = Y0(v.getBoundingClientRect()), C = Z0([...E, ...S]);
      s(C), f(!0);
    },
    [f]
  );
  return d.useEffect(() => () => m(), [m]), d.useEffect(() => {
    if (l && p) {
      const x = (h) => g(h, p), v = (h) => g(h, l);
      return l.addEventListener("pointerleave", x), p.addEventListener("pointerleave", v), () => {
        l.removeEventListener("pointerleave", x), p.removeEventListener("pointerleave", v);
      };
    }
  }, [l, p, g, m]), d.useEffect(() => {
    if (a) {
      const x = (v) => {
        const h = v.target, y = { x: v.clientX, y: v.clientY }, w = l?.contains(h) || p?.contains(h), E = !K0(y, a);
        w ? m() : E && (m(), u());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, p, a, u, m]), /* @__PURE__ */ c.jsx(sd, { ...e, ref: i });
}), [W0, B0] = hr(nn, { isInside: !1 }), H0 = /* @__PURE__ */ O0("TooltipContent"), sd = d.forwardRef(
  (e, n) => {
    const {
      __scopeTooltip: t,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      ...s
    } = e, l = br(Mt, t), u = xr(t), { onClose: p } = l;
    return d.useEffect(() => (document.addEventListener(xo, p), () => document.removeEventListener(xo, p)), [p]), d.useEffect(() => {
      if (l.trigger) {
        const f = (m) => {
          m.target?.contains(l.trigger) && p();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, p]), /* @__PURE__ */ c.jsx(
      rn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ c.jsxs(
          Yo,
          {
            "data-state": l.stateAttribute,
            ...u,
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
              /* @__PURE__ */ c.jsx(H0, { children: r }),
              /* @__PURE__ */ c.jsx(W0, { scope: t, isInside: !0, children: /* @__PURE__ */ c.jsx(N0, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
ad.displayName = Mt;
var cd = "TooltipArrow", U0 = d.forwardRef(
  (e, n) => {
    const { __scopeTooltip: t, ...r } = e, o = xr(t);
    return B0(
      cd,
      t
    ).isInside ? null : /* @__PURE__ */ c.jsx(Ko, { ...o, ...r, ref: n });
  }
);
U0.displayName = cd;
function G0(e, n) {
  const t = Math.abs(n.top - e.y), r = Math.abs(n.bottom - e.y), o = Math.abs(n.right - e.x), i = Math.abs(n.left - e.x);
  switch (Math.min(t, r, o, i)) {
    case i:
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
function q0(e, n, t = 5) {
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
function Y0(e) {
  const { top: n, right: t, bottom: r, left: o } = e;
  return [
    { x: o, y: n },
    { x: t, y: n },
    { x: t, y: r },
    { x: o, y: r }
  ];
}
function K0(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
    const s = n[i], l = n[a], u = s.x, p = s.y, f = l.x, m = l.y;
    p > r != m > r && t < (f - u) * (r - p) / (m - p) + u && (o = !o);
  }
  return o;
}
function Z0(e) {
  const n = e.slice();
  return n.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), X0(n);
}
function X0(e) {
  if (e.length <= 1) return e.slice();
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], a = n[n.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  n.pop();
  const t = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], a = t[t.length - 2];
      if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  return t.pop(), n.length === 1 && t.length === 1 && n[0].x === t[0].x && n[0].y === t[0].y ? n : n.concat(t);
}
function b1({
  delayDuration: e = 0,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    rd,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...n
    }
  );
}
function y1({ ...e }) {
  return /* @__PURE__ */ c.jsx(od, { "data-slot": "tooltip", ...e });
}
function w1({ ...e }) {
  return /* @__PURE__ */ c.jsx(id, { "data-slot": "tooltip-trigger", ...e });
}
function C1({
  className: e,
  sideOffset: n = 6,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    ad,
    {
      "data-slot": "tooltip-content",
      sideOffset: n,
      className: N(
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
const J0 = nr("font-manrope text-gray-900", {
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
}), Q0 = {
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
function E1(e) {
  const { as: n, variant: t, className: r, children: o, ...i } = e, a = t ?? "body-md", s = n ?? Q0[a];
  return /* @__PURE__ */ c.jsx(
    s,
    {
      className: N(J0({ variant: a }), r),
      ...i,
      children: o
    }
  );
}
export {
  oy as AlertDialog,
  lh as AnalyticsIcon,
  dh as AnnouncementIcon,
  iy as Badge,
  ay as Breadcrumb,
  cy as BreadcrumbItem,
  ly as BreadcrumbLink,
  sy as BreadcrumbList,
  dy as BreadcrumbPage,
  uy as BreadcrumbSeparator,
  Io as Button,
  py as Checkbox,
  uh as ChurchIcon,
  ph as ClassIcon,
  fh as CrownIcon,
  fy as Dialog,
  ny as DialogAction,
  ry as DialogCancel,
  vy as DialogClose,
  gy as DialogContent,
  yy as DialogDescription,
  xy as DialogFooter,
  hy as DialogHeader,
  Zf as DialogOverlay,
  Kf as DialogPortal,
  by as DialogTitle,
  my as DialogTrigger,
  wy as DropdownMenu,
  Ry as DropdownMenuCheckboxItem,
  Sy as DropdownMenuContent,
  ky as DropdownMenuGroup,
  _y as DropdownMenuItem,
  Ay as DropdownMenuLabel,
  Cy as DropdownMenuPortal,
  jy as DropdownMenuRadioGroup,
  Py as DropdownMenuRadioItem,
  Ty as DropdownMenuSeparator,
  Oy as DropdownMenuShortcut,
  My as DropdownMenuSub,
  Ny as DropdownMenuSubContent,
  Dy as DropdownMenuSubTrigger,
  Ey as DropdownMenuTrigger,
  mh as EventIcon,
  Iy as Form,
  $y as FormControl,
  Vy as FormDescription,
  Ly as FormField,
  Fy as FormItem,
  zy as FormLabel,
  Wy as FormMessage,
  vh as GiftIcon,
  gh as HomeIcon,
  By as Icon,
  Hy as ImageUploader,
  rb as Input,
  Gy as InputOTP,
  qy as InputOTPGroup,
  Ky as InputOTPSeparator,
  Yy as InputOTPSlot,
  nl as Label,
  hh as ListIcon,
  xh as LivestreamIcon,
  bh as LockClosedIcon,
  yh as LockOpenIcon,
  Cl as Logo,
  Zy as LogoLockup,
  Xy as MediaUploader,
  Jy as MenuItem,
  wh as MinistryIcon,
  n1 as Pagination,
  Uy as PasswordInput,
  Ch as PodcastIcon,
  r1 as RadioButton,
  o1 as Section,
  p0 as Select,
  v0 as SelectContent,
  Qy as SelectGroup,
  g0 as SelectItem,
  e1 as SelectLabel,
  x0 as SelectScrollDownButton,
  h0 as SelectScrollUpButton,
  t1 as SelectSeparator,
  m0 as SelectTrigger,
  f0 as SelectValue,
  Eh as SeriesIcon,
  Sh as SermonIcon,
  i1 as Shimmer,
  a1 as Sidebar,
  s1 as Stepper,
  kh as SubscriptionIcon,
  c1 as SuspendedMenu,
  l1 as Table,
  u1 as TableBody,
  g1 as TableCaption,
  v1 as TableCell,
  p1 as TableFooter,
  m1 as TableHead,
  d1 as TableHeader,
  f1 as TableRow,
  h1 as Textarea,
  y1 as Tooltip,
  C1 as TooltipContent,
  b1 as TooltipProvider,
  w1 as TooltipTrigger,
  E1 as Typography,
  _h as VideoIcon,
  kf as badgeVariants,
  Yf as buttonVariants,
  J0 as typographyVariants,
  pr as useFormField
};
