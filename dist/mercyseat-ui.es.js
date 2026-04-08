import * as d from "react";
import ie, { useState as $e, forwardRef as Gn, createElement as Gr, useContext as qr, createContext as Oa, useId as Jl, useMemo as at, useRef as dn, useReducer as Ql, useEffect as kn, useCallback as ye, useImperativeHandle as ed, Fragment as td, useLayoutEffect as nd } from "react";
import * as qn from "react-dom";
import rd from "react-dom";
function go(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var un = { exports: {} }, Bt = {};
var ci;
function od() {
  if (ci) return Bt;
  ci = 1;
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
var li;
function id() {
  return li || (li = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === J ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case g:
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
          case I:
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
        var N = A.error, O = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return N.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), n(b);
      }
    }
    function r(b) {
      if (b === g) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === I)
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
      function N() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: N,
        configurable: !0
      });
    }
    function c() {
      var b = e(this.type);
      return ee[b] || (ee[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function u(b, A, N, O, G, V) {
      var k = N.ref;
      return b = {
        $$typeof: x,
        type: b,
        key: A,
        props: N,
        _owner: O
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
        value: G
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function p(b, A, N, O, G, V) {
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
      if (k = null, N !== void 0 && (t(N), k = "" + N), a(A) && (t(A.key), k = "" + A.key), "key" in A) {
        N = {};
        for (var Z in A)
          Z !== "key" && (N[Z] = A[Z]);
      } else N = A;
      return k && s(
        N,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), u(
        b,
        k,
        N,
        o(),
        G,
        V
      );
    }
    function f(b) {
      m(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === I && (b._payload.status === "fulfilled" ? m(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function m(b) {
      return typeof b == "object" && b !== null && b.$$typeof === x;
    }
    var h = ie, x = /* @__PURE__ */ Symbol.for("react.transitional.element"), v = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), w = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), P = /* @__PURE__ */ Symbol.for("react.suspense_list"), j = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), J = /* @__PURE__ */ Symbol.for("react.client.reference"), q = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, H = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var $, ee = {}, R = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), M = Q(r(i)), _ = {};
    Ht.Fragment = g, Ht.jsx = function(b, A, N) {
      var O = 1e4 > q.recentlyCreatedOwnerStacks++;
      return p(
        b,
        A,
        N,
        !1,
        O ? Error("react-stack-top-frame") : R,
        O ? Q(r(b)) : M
      );
    }, Ht.jsxs = function(b, A, N) {
      var O = 1e4 > q.recentlyCreatedOwnerStacks++;
      return p(
        b,
        A,
        N,
        !0,
        O ? Error("react-stack-top-frame") : R,
        O ? Q(r(b)) : M
      );
    };
  })()), Ht;
}
var di;
function ad() {
  return di || (di = 1, process.env.NODE_ENV === "production" ? un.exports = od() : un.exports = id()), un.exports;
}
var l = ad();
function sd(e, n) {
  const t = d.createContext(n), r = (i) => {
    const { children: a, ...s } = i, c = d.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ l.jsx(t.Provider, { value: c, children: a });
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
    const s = d.createContext(a), c = t.length;
    t = [...t, a];
    const u = (f) => {
      const { scope: m, children: h, ...x } = f, v = m?.[e]?.[c] || s, g = d.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ l.jsx(v.Provider, { value: g, children: h });
    };
    u.displayName = i + "Provider";
    function p(f, m) {
      const h = m?.[e]?.[c] || s, x = d.useContext(h);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, p];
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
  return o.scopeName = e, [r, cd(o, ...n)];
}
function cd(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((s, { useScope: c, scopeName: u }) => {
        const f = c(i)[`__scope${u}`];
        return { ...s, ...f };
      }, {});
      return d.useMemo(() => ({ [`__scope${n.scopeName}`]: a }), [a]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
function ui(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function Je(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const i = ui(o, n);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : ui(e[o], null);
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
}, ld = d[" useId ".trim().toString()] || (() => {
}), dd = 0;
function We(e) {
  const [n, t] = d.useState(ld());
  return _e(() => {
    t((r) => r ?? String(dd++));
  }, [e]), e || (n ? `radix-${n}` : "");
}
var ud = d[" useInsertionEffect ".trim().toString()] || _e;
function Pt({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, i, a] = pd({
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
  const u = d.useCallback(
    (p) => {
      if (s) {
        const f = fd(p) ? p(e) : p;
        f !== e && a.current?.(f);
      } else
        i(p);
    },
    [s, e, i, a]
  );
  return [c, u];
}
function pd({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = d.useState(e), o = d.useRef(t), i = d.useRef(n);
  return ud(() => {
    i.current = n;
  }, [n]), d.useEffect(() => {
    o.current !== t && (i.current?.(t), o.current = t);
  }, [t, o]), [t, r, i];
}
function fd(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function md(e) {
  const n = /* @__PURE__ */ vd(e), t = d.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = d.Children.toArray(i), c = s.find(gd);
    if (c) {
      const u = c.props.children, p = s.map((f) => f === c ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function vd(e) {
  const n = d.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (d.isValidElement(o)) {
      const a = bd(o), s = xd(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? Je(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var hd = /* @__PURE__ */ Symbol("radix.slottable");
function gd(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === hd;
}
function xd(e, n) {
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
function bd(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var yd = [
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
], se = yd.reduce((e, n) => {
  const t = /* @__PURE__ */ md(`Primitive.${n}`), r = d.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, c = a ? t : n;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(c, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function Ma(e, n) {
  e && qn.flushSync(() => e.dispatchEvent(n));
}
function He(e) {
  const n = d.useRef(e);
  return d.useEffect(() => {
    n.current = e;
  }), d.useMemo(() => (...t) => n.current?.(...t), []);
}
function wd(e, n = globalThis?.document) {
  const t = He(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && t(o);
    };
    return n.addEventListener("keydown", r, { capture: !0 }), () => n.removeEventListener("keydown", r, { capture: !0 });
  }, [t, n]);
}
var Cd = "DismissableLayer", Yr = "dismissableLayer.update", Ed = "dismissableLayer.pointerDownOutside", Sd = "dismissableLayer.focusOutside", pi, Da = d.createContext({
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
      ...c
    } = e, u = d.useContext(Da), [p, f] = d.useState(null), m = p?.ownerDocument ?? globalThis?.document, [, h] = d.useState({}), x = ce(n, (P) => f(P)), v = Array.from(u.layers), [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(g), w = p ? v.indexOf(p) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= y, C = Rd((P) => {
      const j = P.target, I = [...u.branches].some((B) => B.contains(j));
      !S || I || (o?.(P), a?.(P), P.defaultPrevented || s?.());
    }, m), D = jd((P) => {
      const j = P.target;
      [...u.branches].some((B) => B.contains(j)) || (i?.(P), a?.(P), P.defaultPrevented || s?.());
    }, m);
    return wd((P) => {
      w === u.layers.size - 1 && (r?.(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
    }, m), d.useEffect(() => {
      if (p)
        return t && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (pi = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(p)), u.layers.add(p), fi(), () => {
          t && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = pi);
        };
    }, [p, m, t, u]), d.useEffect(() => () => {
      p && (u.layers.delete(p), u.layersWithOutsidePointerEventsDisabled.delete(p), fi());
    }, [p, u]), d.useEffect(() => {
      const P = () => h({});
      return document.addEventListener(Yr, P), () => document.removeEventListener(Yr, P);
    }, []), /* @__PURE__ */ l.jsx(
      se.div,
      {
        ...c,
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
rn.displayName = Cd;
var kd = "DismissableLayerBranch", _d = d.forwardRef((e, n) => {
  const t = d.useContext(Da), r = d.useRef(null), o = ce(n, r);
  return d.useEffect(() => {
    const i = r.current;
    if (i)
      return t.branches.add(i), () => {
        t.branches.delete(i);
      };
  }, [t.branches]), /* @__PURE__ */ l.jsx(se.div, { ...e, ref: o });
});
_d.displayName = kd;
function Rd(e, n = globalThis?.document) {
  const t = He(e), r = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          Na(
            Ed,
            t,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
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
function jd(e, n = globalThis?.document) {
  const t = He(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Na(Sd, t, { originalEvent: i }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", o), () => n.removeEventListener("focusin", o);
  }, [n, t]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function fi() {
  const e = new CustomEvent(Yr);
  document.dispatchEvent(e);
}
function Na(e, n, t, { discrete: r }) {
  const o = t.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  n && o.addEventListener(e, n, { once: !0 }), r ? Ma(o, i) : o.dispatchEvent(i);
}
var yr = "focusScope.autoFocusOnMount", wr = "focusScope.autoFocusOnUnmount", mi = { bubbles: !1, cancelable: !0 }, Pd = "FocusScope", Yn = d.forwardRef((e, n) => {
  const {
    loop: t = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, c] = d.useState(null), u = He(o), p = He(i), f = d.useRef(null), m = ce(n, (v) => c(v)), h = d.useRef({
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
        if (h.paused || !s) return;
        const S = E.target;
        s.contains(S) ? f.current = S : it(f.current, { select: !0 });
      }, g = function(E) {
        if (h.paused || !s) return;
        const S = E.relatedTarget;
        S !== null && (s.contains(S) || it(f.current, { select: !0 }));
      }, y = function(E) {
        if (document.activeElement === document.body)
          for (const C of E)
            C.removedNodes.length > 0 && it(s);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const w = new MutationObserver(y);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), w.disconnect();
      };
    }
  }, [r, s, h.paused]), d.useEffect(() => {
    if (s) {
      hi.add(h);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const y = new CustomEvent(yr, mi);
        s.addEventListener(yr, u), s.dispatchEvent(y), y.defaultPrevented || (Ad(Nd(Ia(s)), { select: !0 }), document.activeElement === v && it(s));
      }
      return () => {
        s.removeEventListener(yr, u), setTimeout(() => {
          const y = new CustomEvent(wr, mi);
          s.addEventListener(wr, p), s.dispatchEvent(y), y.defaultPrevented || it(v ?? document.body, { select: !0 }), s.removeEventListener(wr, p), hi.remove(h);
        }, 0);
      };
    }
  }, [s, u, p, h]);
  const x = d.useCallback(
    (v) => {
      if (!t && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, y = document.activeElement;
      if (g && y) {
        const w = v.currentTarget, [E, S] = Td(w);
        E && S ? !v.shiftKey && y === S ? (v.preventDefault(), t && it(E, { select: !0 })) : v.shiftKey && y === E && (v.preventDefault(), t && it(S, { select: !0 })) : y === w && v.preventDefault();
      }
    },
    [t, r, h.paused]
  );
  return /* @__PURE__ */ l.jsx(se.div, { tabIndex: -1, ...a, ref: m, onKeyDown: x });
});
Yn.displayName = Pd;
function Ad(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const r of e)
    if (it(r, { select: n }), document.activeElement !== t) return;
}
function Td(e) {
  const n = Ia(e), t = vi(n, e), r = vi(n.reverse(), e);
  return [t, r];
}
function Ia(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function vi(e, n) {
  for (const t of e)
    if (!Od(t, { upTo: n })) return t;
}
function Od(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Md(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function it(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== t && Md(e) && n && e.select();
  }
}
var hi = Dd();
function Dd() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && t?.pause(), e = gi(e, n), e.unshift(n);
    },
    remove(n) {
      e = gi(e, n), e[0]?.resume();
    }
  };
}
function gi(e, n) {
  const t = [...e], r = t.indexOf(n);
  return r !== -1 && t.splice(r, 1), t;
}
function Nd(e) {
  return e.filter((n) => n.tagName !== "A");
}
var Id = "Portal", Kn = d.forwardRef((e, n) => {
  const { container: t, ...r } = e, [o, i] = d.useState(!1);
  _e(() => i(!0), []);
  const a = t || o && globalThis?.document?.body;
  return a ? rd.createPortal(/* @__PURE__ */ l.jsx(se.div, { ...r, ref: n }), a) : null;
});
Kn.displayName = Id;
function Ld(e, n) {
  return d.useReducer((t, r) => n[t][r] ?? t, e);
}
var Qe = (e) => {
  const { present: n, children: t } = e, r = Fd(n), o = typeof t == "function" ? t({ present: r.isPresent }) : d.Children.only(t), i = ce(r.ref, zd(o));
  return typeof t == "function" || r.isPresent ? d.cloneElement(o, { ref: i }) : null;
};
Qe.displayName = "Presence";
function Fd(e) {
  const [n, t] = d.useState(), r = d.useRef(null), o = d.useRef(e), i = d.useRef("none"), a = e ? "mounted" : "unmounted", [s, c] = Ld(a, {
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
    const u = pn(r.current);
    i.current = s === "mounted" ? u : "none";
  }, [s]), _e(() => {
    const u = r.current, p = o.current;
    if (p !== e) {
      const m = i.current, h = pn(u);
      e ? c("MOUNT") : h === "none" || u?.display === "none" ? c("UNMOUNT") : c(p && m !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), _e(() => {
    if (n) {
      let u;
      const p = n.ownerDocument.defaultView ?? window, f = (h) => {
        const v = pn(r.current).includes(CSS.escape(h.animationName));
        if (h.target === n && v && (c("ANIMATION_END"), !o.current)) {
          const g = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", u = p.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = g);
          });
        }
      }, m = (h) => {
        h.target === n && (i.current = pn(r.current));
      };
      return n.addEventListener("animationstart", m), n.addEventListener("animationcancel", f), n.addEventListener("animationend", f), () => {
        p.clearTimeout(u), n.removeEventListener("animationstart", m), n.removeEventListener("animationcancel", f), n.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [n, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: d.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, t(u);
    }, [])
  };
}
function pn(e) {
  return e?.animationName || "none";
}
function zd(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Cr = 0;
function xo() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? xi()), document.body.insertAdjacentElement("beforeend", e[1] ?? xi()), Cr++, () => {
      Cr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Cr--;
    };
  }, []);
}
function xi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Kr = function(e, n) {
  return Kr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, Kr(e, n);
};
function $d(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Kr(e, n);
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
function La(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
}
function xt(e, n, t, r) {
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
    function c(p) {
      try {
        u(r.throw(p));
      } catch (f) {
        a(f);
      }
    }
    function u(p) {
      p.done ? i(p.value) : o(p.value).then(s, c);
    }
    u((r = r.apply(e, n || [])).next());
  });
}
function Vd(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
var _n = "right-scroll-bar-position", Rn = "width-before-scroll-bar", Wd = "with-scroll-bars-hidden", Bd = "--removed-body-scroll-bar-size";
function Er(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function Hd(e, n) {
  var t = $e(function() {
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
var Ud = typeof window < "u" ? d.useLayoutEffect : d.useEffect, bi = /* @__PURE__ */ new WeakMap();
function Gd(e, n) {
  var t = Hd(null, function(r) {
    return e.forEach(function(o) {
      return Er(o, r);
    });
  });
  return Ud(function() {
    var r = bi.get(t);
    if (r) {
      var o = new Set(r), i = new Set(e), a = t.current;
      o.forEach(function(s) {
        i.has(s) || Er(s, null);
      }), i.forEach(function(s) {
        o.has(s) || Er(s, a);
      });
    }
    bi.set(t, e);
  }, [e]), t;
}
function qd(e) {
  return e;
}
function Yd(e, n) {
  n === void 0 && (n = qd);
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
      }, u = function() {
        return Promise.resolve().then(c);
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
function Kd(e) {
  e === void 0 && (e = {});
  var n = Yd(null);
  return n.options = he({ async: !0, ssr: !1 }, e), n;
}
var Fa = function(e) {
  var n = e.sideCar, t = La(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = n.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return d.createElement(r, he({}, t));
};
Fa.isSideCarExport = !0;
function Zd(e, n) {
  return e.useMedium(n), Fa;
}
var za = Kd(), Sr = function() {
}, Zn = d.forwardRef(function(e, n) {
  var t = d.useRef(null), r = d.useState({
    onScrollCapture: Sr,
    onWheelCapture: Sr,
    onTouchMoveCapture: Sr
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, c = e.className, u = e.removeScrollBar, p = e.enabled, f = e.shards, m = e.sideCar, h = e.noRelative, x = e.noIsolation, v = e.inert, g = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, E = e.gapMode, S = La(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = m, D = Gd([t, n]), P = he(he({}, S), o);
  return d.createElement(
    d.Fragment,
    null,
    p && d.createElement(C, { sideCar: za, removeScrollBar: u, shards: f, noRelative: h, noIsolation: x, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: t, gapMode: E }),
    a ? d.cloneElement(d.Children.only(s), he(he({}, P), { ref: D })) : d.createElement(w, he({}, P, { className: c, ref: D }), s)
  );
});
Zn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Zn.classNames = {
  fullWidth: Rn,
  zeroRight: _n
};
var Xd = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Jd() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = Xd();
  return n && e.setAttribute("nonce", n), e;
}
function Qd(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function eu(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var tu = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = Jd()) && (Qd(n, t), eu(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, nu = function() {
  var e = tu();
  return function(n, t) {
    d.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, $a = function() {
  var e = nu(), n = function(t) {
    var r = t.styles, o = t.dynamic;
    return e(r, o), null;
  };
  return n;
}, ru = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, kr = function(e) {
  return parseInt(e || "", 10) || 0;
}, ou = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], r = n[e === "padding" ? "paddingTop" : "marginTop"], o = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [kr(t), kr(r), kr(o)];
}, iu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ru;
  var n = ou(e), t = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, r - t + n[2] - n[0])
  };
}, au = $a(), _t = "data-scroll-locked", su = function(e, n, t, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(Wd, ` {
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
  
  .`).concat(_n, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Rn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(_n, " .").concat(_n, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Rn, " .").concat(Rn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(_t, `] {
    `).concat(Bd, ": ").concat(s, `px;
  }
`);
}, yi = function() {
  var e = parseInt(document.body.getAttribute(_t) || "0", 10);
  return isFinite(e) ? e : 0;
}, cu = function() {
  d.useEffect(function() {
    return document.body.setAttribute(_t, (yi() + 1).toString()), function() {
      var e = yi() - 1;
      e <= 0 ? document.body.removeAttribute(_t) : document.body.setAttribute(_t, e.toString());
    };
  }, []);
}, lu = function(e) {
  var n = e.noRelative, t = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  cu();
  var i = d.useMemo(function() {
    return iu(o);
  }, [o]);
  return d.createElement(au, { styles: su(i, !n, o, t ? "" : "!important") });
}, Zr = !1;
if (typeof window < "u")
  try {
    var fn = Object.defineProperty({}, "passive", {
      get: function() {
        return Zr = !0, !0;
      }
    });
    window.addEventListener("test", fn, fn), window.removeEventListener("test", fn, fn);
  } catch {
    Zr = !1;
  }
var Ct = Zr ? { passive: !1 } : !1, du = function(e) {
  return e.tagName === "TEXTAREA";
}, Va = function(e, n) {
  if (!(e instanceof Element))
    return !1;
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !du(e) && t[n] === "visible")
  );
}, uu = function(e) {
  return Va(e, "overflowY");
}, pu = function(e) {
  return Va(e, "overflowX");
}, wi = function(e, n) {
  var t = n.ownerDocument, r = n;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Wa(e, r);
    if (o) {
      var i = Ba(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== t.body);
  return !1;
}, fu = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, r = e.clientHeight;
  return [
    n,
    t,
    r
  ];
}, mu = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, r = e.clientWidth;
  return [
    n,
    t,
    r
  ];
}, Wa = function(e, n) {
  return e === "v" ? uu(n) : pu(n);
}, Ba = function(e, n) {
  return e === "v" ? fu(n) : mu(n);
}, vu = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, hu = function(e, n, t, r, o) {
  var i = vu(e, window.getComputedStyle(n).direction), a = i * r, s = t.target, c = n.contains(s), u = !1, p = a > 0, f = 0, m = 0;
  do {
    if (!s)
      break;
    var h = Ba(e, s), x = h[0], v = h[1], g = h[2], y = v - g - i * x;
    (x || y) && Wa(e, s) && (f += y, m += x);
    var w = s.parentNode;
    s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (n.contains(s) || n === s)
  );
  return (p && Math.abs(f) < 1 || !p && Math.abs(m) < 1) && (u = !0), u;
}, mn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ci = function(e) {
  return [e.deltaX, e.deltaY];
}, Ei = function(e) {
  return e && "current" in e ? e.current : e;
}, gu = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, xu = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, bu = 0, Et = [];
function yu(e) {
  var n = d.useRef([]), t = d.useRef([0, 0]), r = d.useRef(), o = d.useState(bu++)[0], i = d.useState($a)[0], a = d.useRef(e);
  d.useEffect(function() {
    a.current = e;
  }, [e]), d.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Vd([e.lockRef.current], (e.shards || []).map(Ei), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = d.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = mn(v), w = t.current, E = "deltaX" in v ? v.deltaX : w[0] - y[0], S = "deltaY" in v ? v.deltaY : w[1] - y[1], C, D = v.target, P = Math.abs(E) > Math.abs(S) ? "h" : "v";
    if ("touches" in v && P === "h" && D.type === "range")
      return !1;
    var j = window.getSelection(), I = j && j.anchorNode, B = I ? I === D || I.contains(D) : !1;
    if (B)
      return !1;
    var J = wi(P, D);
    if (!J)
      return !0;
    if (J ? C = P : (C = P === "v" ? "h" : "v", J = wi(P, D)), !J)
      return !1;
    if (!r.current && "changedTouches" in v && (E || S) && (r.current = C), !C)
      return !0;
    var q = r.current || C;
    return hu(q, g, v, q === "h" ? E : S);
  }, []), c = d.useCallback(function(v) {
    var g = v;
    if (!(!Et.length || Et[Et.length - 1] !== i)) {
      var y = "deltaY" in g ? Ci(g) : mn(g), w = n.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && gu(C.delta, y);
      })[0];
      if (w && w.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!w) {
        var E = (a.current.shards || []).map(Ei).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), S = E.length > 0 ? s(g, E[0]) : !a.current.noIsolation;
        S && g.cancelable && g.preventDefault();
      }
    }
  }, []), u = d.useCallback(function(v, g, y, w) {
    var E = { name: v, delta: g, target: y, should: w, shadowParent: wu(y) };
    n.current.push(E), setTimeout(function() {
      n.current = n.current.filter(function(S) {
        return S !== E;
      });
    }, 1);
  }, []), p = d.useCallback(function(v) {
    t.current = mn(v), r.current = void 0;
  }, []), f = d.useCallback(function(v) {
    u(v.type, Ci(v), v.target, s(v, e.lockRef.current));
  }, []), m = d.useCallback(function(v) {
    u(v.type, mn(v), v.target, s(v, e.lockRef.current));
  }, []);
  d.useEffect(function() {
    return Et.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, Ct), document.addEventListener("touchmove", c, Ct), document.addEventListener("touchstart", p, Ct), function() {
      Et = Et.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", c, Ct), document.removeEventListener("touchmove", c, Ct), document.removeEventListener("touchstart", p, Ct);
    };
  }, []);
  var h = e.removeScrollBar, x = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    x ? d.createElement(i, { styles: xu(o) }) : null,
    h ? d.createElement(lu, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function wu(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
  return n;
}
const Cu = Zd(za, yu);
var Xn = d.forwardRef(function(e, n) {
  return d.createElement(Zn, he({}, e, { ref: n, sideCar: Cu }));
});
Xn.classNames = Zn.classNames;
var Eu = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, St = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), hn = {}, _r = 0, Ha = function(e) {
  return e && (e.host || Ha(e.parentNode));
}, Su = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var r = Ha(t);
    return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, ku = function(e, n, t, r) {
  var o = Su(n, Array.isArray(e) ? e : [e]);
  hn[t] || (hn[t] = /* @__PURE__ */ new WeakMap());
  var i = hn[t], a = [], s = /* @__PURE__ */ new Set(), c = new Set(o), u = function(f) {
    !f || s.has(f) || (s.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var p = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (s.has(m))
        p(m);
      else
        try {
          var h = m.getAttribute(r), x = h !== null && h !== "false", v = (St.get(m) || 0) + 1, g = (i.get(m) || 0) + 1;
          St.set(m, v), i.set(m, g), a.push(m), v === 1 && x && vn.set(m, !0), g === 1 && m.setAttribute(t, "true"), x || m.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return p(n), s.clear(), _r++, function() {
    a.forEach(function(f) {
      var m = St.get(f) - 1, h = i.get(f) - 1;
      St.set(f, m), i.set(f, h), m || (vn.has(f) || f.removeAttribute(r), vn.delete(f)), h || f.removeAttribute(t);
    }), _r--, _r || (St = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), hn = {});
  };
}, bo = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Eu(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), ku(r, o, t, "aria-hidden")) : function() {
    return null;
  };
};
// @__NO_SIDE_EFFECTS__
function _u(e) {
  const n = /* @__PURE__ */ Ru(e), t = d.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = d.Children.toArray(i), c = s.find(Pu);
    if (c) {
      const u = c.props.children, p = s.map((f) => f === c ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Ru(e) {
  const n = d.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (d.isValidElement(o)) {
      const a = Tu(o), s = Au(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? Je(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var ju = /* @__PURE__ */ Symbol("radix.slottable");
function Pu(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ju;
}
function Au(e, n) {
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
function Tu(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Jn = "Dialog", [Ua, Ga] = Xe(Jn), [Ou, Le] = Ua(Jn), yo = (e) => {
  const {
    __scopeDialog: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = d.useRef(null), c = d.useRef(null), [u, p] = Pt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Jn
  });
  return /* @__PURE__ */ l.jsx(
    Ou,
    {
      scope: n,
      triggerRef: s,
      contentRef: c,
      contentId: We(),
      titleId: We(),
      descriptionId: We(),
      open: u,
      onOpenChange: p,
      onOpenToggle: d.useCallback(() => p((f) => !f), [p]),
      modal: a,
      children: t
    }
  );
};
yo.displayName = Jn;
var qa = "DialogTrigger", wo = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(qa, t), i = ce(n, o.triggerRef);
    return /* @__PURE__ */ l.jsx(
      se.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Po(o.open),
        ...r,
        ref: i,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
wo.displayName = qa;
var Co = "DialogPortal", [Mu, Ya] = Ua(Co, {
  forceMount: void 0
}), Eo = (e) => {
  const { __scopeDialog: n, forceMount: t, children: r, container: o } = e, i = Le(Co, n);
  return /* @__PURE__ */ l.jsx(Mu, { scope: n, forceMount: t, children: d.Children.map(r, (a) => /* @__PURE__ */ l.jsx(Qe, { present: t || i.open, children: /* @__PURE__ */ l.jsx(Kn, { asChild: !0, container: o, children: a }) })) });
};
Eo.displayName = Co;
var An = "DialogOverlay", So = d.forwardRef(
  (e, n) => {
    const t = Ya(An, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, i = Le(An, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ l.jsx(Qe, { present: r || i.open, children: /* @__PURE__ */ l.jsx(Nu, { ...o, ref: n }) }) : null;
  }
);
So.displayName = An;
var Du = /* @__PURE__ */ _u("DialogOverlay.RemoveScroll"), Nu = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(An, t);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l.jsx(Xn, { as: Du, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ l.jsx(
        se.div,
        {
          "data-state": Po(o.open),
          ...r,
          ref: n,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), ft = "DialogContent", ko = d.forwardRef(
  (e, n) => {
    const t = Ya(ft, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, i = Le(ft, e.__scopeDialog);
    return /* @__PURE__ */ l.jsx(Qe, { present: r || i.open, children: i.modal ? /* @__PURE__ */ l.jsx(Iu, { ...o, ref: n }) : /* @__PURE__ */ l.jsx(Lu, { ...o, ref: n }) });
  }
);
ko.displayName = ft;
var Iu = d.forwardRef(
  (e, n) => {
    const t = Le(ft, e.__scopeDialog), r = d.useRef(null), o = ce(n, t.contentRef, r);
    return d.useEffect(() => {
      const i = r.current;
      if (i) return bo(i);
    }, []), /* @__PURE__ */ l.jsx(
      Ka,
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
), Lu = d.forwardRef(
  (e, n) => {
    const t = Le(ft, e.__scopeDialog), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      Ka,
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
), Ka = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = Le(ft, t), c = d.useRef(null), u = ce(n, c);
    return xo(), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        Yn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ l.jsx(
            rn,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Po(s.open),
              ...a,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(zu, { titleId: s.titleId }),
        /* @__PURE__ */ l.jsx(Vu, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), _o = "DialogTitle", Ro = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(_o, t);
    return /* @__PURE__ */ l.jsx(se.h2, { id: o.titleId, ...r, ref: n });
  }
);
Ro.displayName = _o;
var Za = "DialogDescription", jo = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(Za, t);
    return /* @__PURE__ */ l.jsx(se.p, { id: o.descriptionId, ...r, ref: n });
  }
);
jo.displayName = Za;
var Xa = "DialogClose", on = d.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(Xa, t);
    return /* @__PURE__ */ l.jsx(
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
on.displayName = Xa;
function Po(e) {
  return e ? "open" : "closed";
}
var Ja = "DialogTitleWarning", [Fu, Qa] = sd(Ja, {
  contentName: ft,
  titleName: _o,
  docsSlug: "dialog"
}), zu = ({ titleId: e }) => {
  const n = Qa(Ja), t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
  return d.useEffect(() => {
    e && (document.getElementById(e) || console.error(t));
  }, [t, e]), null;
}, $u = "DialogDescriptionWarning", Vu = ({ contentRef: e, descriptionId: n }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Qa($u).contentName}}.`;
  return d.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    n && o && (document.getElementById(n) || console.warn(r));
  }, [r, e, n]), null;
}, Wu = yo, Bu = wo, Hu = Eo, Uu = So, Gu = ko, qu = Ro, Yu = jo, es = on, Ku = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Zu(e) {
  const n = ({ children: t }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = Ku, n;
}
var ts = "AlertDialog", [Xu] = Xe(ts, [
  Ga
]), et = Ga(), ns = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = et(n);
  return /* @__PURE__ */ l.jsx(Wu, { ...r, ...t, modal: !0 });
};
ns.displayName = ts;
var Ju = "AlertDialogTrigger", Qu = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = et(t);
    return /* @__PURE__ */ l.jsx(Bu, { ...o, ...r, ref: n });
  }
);
Qu.displayName = Ju;
var ep = "AlertDialogPortal", rs = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = et(n);
  return /* @__PURE__ */ l.jsx(Hu, { ...r, ...t });
};
rs.displayName = ep;
var tp = "AlertDialogOverlay", os = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = et(t);
    return /* @__PURE__ */ l.jsx(Uu, { ...o, ...r, ref: n });
  }
);
os.displayName = tp;
var Rt = "AlertDialogContent", [np, rp] = Xu(Rt), op = /* @__PURE__ */ Zu("AlertDialogContent"), is = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, children: r, ...o } = e, i = et(t), a = d.useRef(null), s = ce(n, a), c = d.useRef(null);
    return /* @__PURE__ */ l.jsx(
      Fu,
      {
        contentName: Rt,
        titleName: as,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ l.jsx(np, { scope: t, cancelRef: c, children: /* @__PURE__ */ l.jsxs(
          Gu,
          {
            role: "alertdialog",
            ...i,
            ...o,
            ref: s,
            onOpenAutoFocus: X(o.onOpenAutoFocus, (u) => {
              u.preventDefault(), c.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (u) => u.preventDefault(),
            onInteractOutside: (u) => u.preventDefault(),
            children: [
              /* @__PURE__ */ l.jsx(op, { children: r }),
              /* @__PURE__ */ l.jsx(ap, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
is.displayName = Rt;
var as = "AlertDialogTitle", ss = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = et(t);
    return /* @__PURE__ */ l.jsx(qu, { ...o, ...r, ref: n });
  }
);
ss.displayName = as;
var cs = "AlertDialogDescription", ls = d.forwardRef((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = et(t);
  return /* @__PURE__ */ l.jsx(Yu, { ...o, ...r, ref: n });
});
ls.displayName = cs;
var ip = "AlertDialogAction", ds = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = et(t);
    return /* @__PURE__ */ l.jsx(es, { ...o, ...r, ref: n });
  }
);
ds.displayName = ip;
var us = "AlertDialogCancel", ps = d.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, { cancelRef: o } = rp(us, t), i = et(t), a = ce(n, o);
    return /* @__PURE__ */ l.jsx(es, { ...i, ...r, ref: a });
  }
);
ps.displayName = us;
var ap = ({ contentRef: e }) => {
  const n = `\`${Rt}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Rt}\` by passing a \`${cs}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Rt}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return d.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(n);
  }, [n, e]), null;
}, sp = ns, cp = rs, lp = os, dp = is, Xb = ds, Jb = ps, up = ss, Si = ls, pp = /* @__PURE__ */ Symbol.for("react.lazy"), Tn = d[" use ".trim().toString()];
function fp(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function fs(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === pp && "_payload" in e && fp(e._payload);
}
// @__NO_SIDE_EFFECTS__
function ms(e) {
  const n = /* @__PURE__ */ mp(e), t = d.forwardRef((r, o) => {
    let { children: i, ...a } = r;
    fs(i) && typeof Tn == "function" && (i = Tn(i._payload));
    const s = d.Children.toArray(i), c = s.find(hp);
    if (c) {
      const u = c.props.children, p = s.map((f) => f === c ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
var Qn = /* @__PURE__ */ ms("Slot");
// @__NO_SIDE_EFFECTS__
function mp(e) {
  const n = d.forwardRef((t, r) => {
    let { children: o, ...i } = t;
    if (fs(o) && typeof Tn == "function" && (o = Tn(o._payload)), d.isValidElement(o)) {
      const a = xp(o), s = gp(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? Je(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var vp = /* @__PURE__ */ Symbol("radix.slottable");
function hp(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === vp;
}
function gp(e, n) {
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
function xp(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var bp = [
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
], yp = bp.reduce((e, n) => {
  const t = /* @__PURE__ */ ms(`Primitive.${n}`), r = d.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, c = a ? t : n;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(c, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), wp = Object.freeze({
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
}), Cp = "VisuallyHidden", vs = d.forwardRef(
  (e, n) => /* @__PURE__ */ l.jsx(
    yp.span,
    {
      ...e,
      ref: n,
      style: { ...wp, ...e.style }
    }
  )
);
vs.displayName = Cp;
var Ep = vs;
function hs(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = hs(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function gs() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = hs(e)) && (r && (r += " "), r += n);
  return r;
}
const Sp = (e, n) => {
  const t = new Array(e.length + n.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e[r];
  for (let r = 0; r < n.length; r++)
    t[e.length + r] = n[r];
  return t;
}, kp = (e, n) => ({
  classGroupId: e,
  validator: n
}), xs = (e = /* @__PURE__ */ new Map(), n = null, t) => ({
  nextPart: e,
  validators: n,
  classGroupId: t
}), On = "-", ki = [], _p = "arbitrary..", Rp = (e) => {
  const n = Pp(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return jp(a);
      const s = a.split(On), c = s[0] === "" && s.length > 1 ? 1 : 0;
      return bs(s, c, n);
    },
    getConflictingClassGroupIds: (a, s) => {
      if (s) {
        const c = r[a], u = t[a];
        return c ? u ? Sp(u, c) : c : u || ki;
      }
      return t[a] || ki;
    }
  };
}, bs = (e, n, t) => {
  if (e.length - n === 0)
    return t.classGroupId;
  const o = e[n], i = t.nextPart.get(o);
  if (i) {
    const u = bs(e, n + 1, i);
    if (u) return u;
  }
  const a = t.validators;
  if (a === null)
    return;
  const s = n === 0 ? e.join(On) : e.slice(n).join(On), c = a.length;
  for (let u = 0; u < c; u++) {
    const p = a[u];
    if (p.validator(s))
      return p.classGroupId;
  }
}, jp = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), t = n.indexOf(":"), r = n.slice(0, t);
  return r ? _p + r : void 0;
})(), Pp = (e) => {
  const {
    theme: n,
    classGroups: t
  } = e;
  return Ap(t, n);
}, Ap = (e, n) => {
  const t = xs();
  for (const r in e) {
    const o = e[r];
    Ao(o, t, r, n);
  }
  return t;
}, Ao = (e, n, t, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const a = e[i];
    Tp(a, n, t, r);
  }
}, Tp = (e, n, t, r) => {
  if (typeof e == "string") {
    Op(e, n, t);
    return;
  }
  if (typeof e == "function") {
    Mp(e, n, t, r);
    return;
  }
  Dp(e, n, t, r);
}, Op = (e, n, t) => {
  const r = e === "" ? n : ys(n, e);
  r.classGroupId = t;
}, Mp = (e, n, t, r) => {
  if (Np(e)) {
    Ao(e(r), n, t, r);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(kp(t, e));
}, Dp = (e, n, t, r) => {
  const o = Object.entries(e), i = o.length;
  for (let a = 0; a < i; a++) {
    const [s, c] = o[a];
    Ao(c, ys(n, s), t, r);
  }
}, ys = (e, n) => {
  let t = e;
  const r = n.split(On), o = r.length;
  for (let i = 0; i < o; i++) {
    const a = r[i];
    let s = t.nextPart.get(a);
    s || (s = xs(), t.nextPart.set(a, s)), t = s;
  }
  return t;
}, Np = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Ip = (e) => {
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
}, Xr = "!", _i = ":", Lp = [], Ri = (e, n, t, r, o) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: t,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Fp = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: t
  } = e;
  let r = (o) => {
    const i = [];
    let a = 0, s = 0, c = 0, u;
    const p = o.length;
    for (let v = 0; v < p; v++) {
      const g = o[v];
      if (a === 0 && s === 0) {
        if (g === _i) {
          i.push(o.slice(c, v)), c = v + 1;
          continue;
        }
        if (g === "/") {
          u = v;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? s++ : g === ")" && s--;
    }
    const f = i.length === 0 ? o : o.slice(c);
    let m = f, h = !1;
    f.endsWith(Xr) ? (m = f.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(Xr) && (m = f.slice(1), h = !0)
    );
    const x = u && u > c ? u - c : void 0;
    return Ri(i, h, m, x);
  };
  if (n) {
    const o = n + _i, i = r;
    r = (a) => a.startsWith(o) ? i(a.slice(o.length)) : Ri(Lp, !1, a, void 0, !0);
  }
  if (t) {
    const o = r;
    r = (i) => t({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, zp = (e) => {
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
}, $p = (e) => ({
  cache: Ip(e.cacheSize),
  parseClassName: Fp(e),
  sortModifiers: zp(e),
  ...Rp(e)
}), Vp = /\s+/, Wp = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = n, a = [], s = e.trim().split(Vp);
  let c = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const p = s[u], {
      isExternal: f,
      modifiers: m,
      hasImportantModifier: h,
      baseClassName: x,
      maybePostfixModifierPosition: v
    } = t(p);
    if (f) {
      c = p + (c.length > 0 ? " " + c : c);
      continue;
    }
    let g = !!v, y = r(g ? x.substring(0, v) : x);
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
    const w = m.length === 0 ? "" : m.length === 1 ? m[0] : i(m).join(":"), E = h ? w + Xr : w, S = E + y;
    if (a.indexOf(S) > -1)
      continue;
    a.push(S);
    const C = o(y, g);
    for (let D = 0; D < C.length; ++D) {
      const P = C[D];
      a.push(E + P);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
}, Bp = (...e) => {
  let n = 0, t, r, o = "";
  for (; n < e.length; )
    (t = e[n++]) && (r = ws(t)) && (o && (o += " "), o += r);
  return o;
}, ws = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = ws(e[r])) && (t && (t += " "), t += n);
  return t;
}, Hp = (e, ...n) => {
  let t, r, o, i;
  const a = (c) => {
    const u = n.reduce((p, f) => f(p), e());
    return t = $p(u), r = t.cache.get, o = t.cache.set, i = s, s(c);
  }, s = (c) => {
    const u = r(c);
    if (u)
      return u;
    const p = Wp(c, t);
    return o(c, p), p;
  };
  return i = a, (...c) => i(Bp(...c));
}, Up = [], we = (e) => {
  const n = (t) => t[e] || Up;
  return n.isThemeGetter = !0, n;
}, Cs = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Es = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Gp = /^\d+\/\d+$/, qp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Kp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Zp = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Xp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, kt = (e) => Gp.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), ot = (e) => !!e && Number.isInteger(Number(e)), Rr = (e) => e.endsWith("%") && ae(e.slice(0, -1)), Ye = (e) => qp.test(e), Jp = () => !0, Qp = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Yp.test(e) && !Kp.test(e)
), Ss = () => !1, ef = (e) => Zp.test(e), tf = (e) => Xp.test(e), nf = (e) => !Y(e) && !K(e), rf = (e) => Dt(e, Rs, Ss), Y = (e) => Cs.test(e), ut = (e) => Dt(e, js, Qp), jr = (e) => Dt(e, lf, ae), ji = (e) => Dt(e, ks, Ss), of = (e) => Dt(e, _s, tf), gn = (e) => Dt(e, Ps, ef), K = (e) => Es.test(e), Ut = (e) => Nt(e, js), af = (e) => Nt(e, df), Pi = (e) => Nt(e, ks), sf = (e) => Nt(e, Rs), cf = (e) => Nt(e, _s), xn = (e) => Nt(e, Ps, !0), Dt = (e, n, t) => {
  const r = Cs.exec(e);
  return r ? r[1] ? n(r[1]) : t(r[2]) : !1;
}, Nt = (e, n, t = !1) => {
  const r = Es.exec(e);
  return r ? r[1] ? n(r[1]) : t : !1;
}, ks = (e) => e === "position" || e === "percentage", _s = (e) => e === "image" || e === "url", Rs = (e) => e === "length" || e === "size" || e === "bg-size", js = (e) => e === "length", lf = (e) => e === "number", df = (e) => e === "family-name", Ps = (e) => e === "shadow", uf = () => {
  const e = we("color"), n = we("font"), t = we("text"), r = we("font-weight"), o = we("tracking"), i = we("leading"), a = we("breakpoint"), s = we("container"), c = we("spacing"), u = we("radius"), p = we("shadow"), f = we("inset-shadow"), m = we("text-shadow"), h = we("drop-shadow"), x = we("blur"), v = we("perspective"), g = we("aspect"), y = we("ease"), w = we("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], C = () => [...S(), K, Y], D = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], j = () => [K, Y, c], I = () => [kt, "full", "auto", ...j()], B = () => [ot, "none", "subgrid", K, Y], J = () => ["auto", {
    span: ["full", ot, K, Y]
  }, ot, K, Y], q = () => [ot, "auto", K, Y], U = () => ["auto", "min", "max", "fr", K, Y], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...j()], ee = () => [kt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()], R = () => [e, K, Y], M = () => [...S(), Pi, ji, {
    position: [K, Y]
  }], _ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], b = () => ["auto", "cover", "contain", sf, rf, {
    size: [K, Y]
  }], A = () => [Rr, Ut, ut], N = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    K,
    Y
  ], O = () => ["", ae, Ut, ut], G = () => ["solid", "dashed", "dotted", "double"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => [ae, Rr, Pi, ji], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    K,
    Y
  ], Z = () => ["none", ae, K, Y], F = () => ["none", ae, K, Y], re = () => [ae, K, Y], T = () => [kt, "full", ...j()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ye],
      breakpoint: [Ye],
      color: [Jp],
      container: [Ye],
      "drop-shadow": [Ye],
      ease: ["in", "out", "in-out"],
      font: [nf],
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
        aspect: ["auto", "square", kt, Y, K, g]
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
        basis: [kt, "full", "auto", s, ...j()]
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
        flex: [ae, kt, "auto", "initial", "none", Y]
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
        text: ["base", t, Ut, ut]
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
        font: [r, K, jr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Rr, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [af, Y, n]
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
        "line-clamp": [ae, "none", K, jr]
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
        decoration: [ae, "from-font", "auto", K, ut]
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
        }, cf, of]
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
        rounded: N()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": N()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": N()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": N()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": N()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": N()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": N()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": N()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": N()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": N()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": N()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": N()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": N()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": N()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": N()
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
        outline: ["", ae, Ut, ut]
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
          xn,
          gn
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
        "inset-shadow": ["none", f, xn, gn]
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
        "ring-offset": [ae, ut]
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
        "text-shadow": ["none", m, xn, gn]
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
          h,
          xn,
          gn
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
        stroke: [ae, Ut, ut, jr]
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
}, pf = /* @__PURE__ */ Hp(uf);
function L(...e) {
  return pf(gs(e));
}
function Qb({
  open: e,
  onOpenChange: n,
  header: t,
  content: r,
  actions: o,
  className: i
}) {
  return /* @__PURE__ */ l.jsx(sp, { open: e, onOpenChange: n, children: /* @__PURE__ */ l.jsxs(cp, { children: [
    /* @__PURE__ */ l.jsx(lp, { className: "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
    /* @__PURE__ */ l.jsxs(
      dp,
      {
        className: L(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
          i
        ),
        children: [
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col space-y-2", children: [
            /* @__PURE__ */ l.jsx(up, { className: "text-lg font-semibold text-gray-900", children: t }),
            typeof r == "string" ? /* @__PURE__ */ l.jsx(Si, { className: "text-sm text-gray-600", children: r }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
              /* @__PURE__ */ l.jsx(Si, { asChild: !0, children: /* @__PURE__ */ l.jsx(Ep, { children: /* @__PURE__ */ l.jsx("span", { children: "Confirmation dialog content" }) }) }),
              /* @__PURE__ */ l.jsx("div", { className: "text-sm text-gray-600", children: r })
            ] })
          ] }),
          /* @__PURE__ */ l.jsx("div", { className: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0", children: o })
        ]
      }
    )
  ] }) });
}
const Ai = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ti = gs, er = (e, n) => (t) => {
  var r;
  if (n?.variants == null) return Ti(e, t?.class, t?.className);
  const { variants: o, defaultVariants: i } = n, a = Object.keys(o).map((u) => {
    const p = t?.[u], f = i?.[u];
    if (p === null) return null;
    const m = Ai(p) || Ai(f);
    return o[u][m];
  }), s = t && Object.entries(t).reduce((u, p) => {
    let [f, m] = p;
    return m === void 0 || (u[f] = m), u;
  }, {}), c = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, p) => {
    let { class: f, className: m, ...h } = p;
    return Object.entries(h).every((x) => {
      let [v, g] = x;
      return Array.isArray(g) ? g.includes({
        ...i,
        ...s
      }[v]) : {
        ...i,
        ...s
      }[v] === g;
    }) ? [
      ...u,
      f,
      m
    ] : u;
  }, []);
  return Ti(e, a, c, t?.class, t?.className);
}, ff = er(
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
function ey({
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
      className: L(ff({ variant: n, size: t, className: e })),
      ...r
    }
  );
}
const mf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vf = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), Oi = (e) => {
  const n = vf(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, As = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), hf = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
var gf = {
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
const xf = Gn(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => Gr(
    "svg",
    {
      ref: c,
      ...gf,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: As("lucide", o),
      ...!i && !hf(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([u, p]) => Gr(u, p)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const Fe = (e, n) => {
  const t = Gn(
    ({ className: r, ...o }, i) => Gr(xf, {
      ref: i,
      iconNode: n,
      className: As(
        `lucide-${mf(Oi(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return t.displayName = Oi(e), t;
};
const bf = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], To = Fe("check", bf);
const yf = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ts = Fe("chevron-down", yf);
const wf = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Os = Fe("chevron-right", wf);
const Cf = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Ef = Fe("chevron-left", Cf);
const Sf = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], kf = Fe("chevron-up", Sf);
const _f = [
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
], Rf = Fe("eye-off", _f);
const jf = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Pf = Fe("eye", jf);
const Af = [["path", { d: "M5 12h14", key: "1ays0h" }]], Tf = Fe("minus", Af);
const Of = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Mf = Fe("trash-2", Of);
const Df = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Ms = Fe("upload", Df);
const Nf = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Oo = Fe("x", Nf);
function ty({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      "data-slot": "breadcrumb",
      className: L("w-full", e),
      ...n
    }
  );
}
function ny({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: L("flex items-center justify-start gap-2", e),
      ...n
    }
  );
}
function ry({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: L("flex justify-start items-center gap-x-1", e),
      ...n
    }
  );
}
function oy({
  asChild: e,
  className: n,
  ...t
}) {
  const r = e ? Qn : "a";
  return /* @__PURE__ */ l.jsx(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: L(
        "flex w-fit font-manrope text-sm font-normal leading-4.5 text-gray-200 hover:text-gray-600 hover:underline transition-all",
        n
      ),
      ...t
    }
  );
}
function iy({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      "aria-current": "page",
      className: L(
        "font-manrope text-sm font-semibold text-blue-hepatica-600 leading-4",
        e
      ),
      ...n
    }
  );
}
function ay() {
  return /* @__PURE__ */ l.jsx(
    Os,
    {
      "data-slot": "breadcrumb-separator",
      "aria-hidden": "true",
      className: "size-4 text-gray-300 shrink-0"
    }
  );
}
const If = er(
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
function Mo({
  className: e,
  variant: n,
  size: t,
  asChild: r = !1,
  ...o
}) {
  const i = r ? Qn : "button";
  return /* @__PURE__ */ l.jsx(
    i,
    {
      "data-slot": "button",
      className: L(If({ variant: n, size: t, className: e })),
      ...o
    }
  );
}
function sy({
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
      className: L(
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
            className: L(
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
              To,
              {
                className: L("size-3 text-transparent", {
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
function cy({ ...e }) {
  return /* @__PURE__ */ l.jsx(yo, { "data-slot": "dialog", ...e });
}
function ly({ ...e }) {
  return /* @__PURE__ */ l.jsx(wo, { "data-slot": "dialog-trigger", ...e });
}
function Lf({ ...e }) {
  return /* @__PURE__ */ l.jsx(Eo, { "data-slot": "dialog-portal", ...e });
}
function dy({ ...e }) {
  return /* @__PURE__ */ l.jsx(on, { "data-slot": "dialog-close", ...e });
}
function Ff({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    So,
    {
      "data-slot": "dialog-overlay",
      className: L(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/50 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50",
        e
      ),
      ...n
    }
  );
}
function uy({
  className: e,
  children: n,
  showCloseButton: t = !0,
  ...r
}) {
  return /* @__PURE__ */ l.jsxs(Lf, { children: [
    /* @__PURE__ */ l.jsx(Ff, {}),
    /* @__PURE__ */ l.jsxs(
      ko,
      {
        "data-slot": "dialog-content",
        className: L(
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
          t && /* @__PURE__ */ l.jsx(on, { "data-slot": "dialog-close", asChild: !0, children: /* @__PURE__ */ l.jsxs(
            Mo,
            {
              variant: "gray-ghost",
              className: "absolute top-6 right-8 size-10 flex items-center justify-center",
              size: "sm",
              children: [
                /* @__PURE__ */ l.jsx(Oo, {}),
                /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function py({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: L(
        "min-h-22 px-8 justify-center gap-2 flex flex-col border-b border-b-gray-25",
        e
      ),
      ...n
    }
  );
}
function fy({
  className: e,
  showCloseButton: n = !1,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: L("px-8 pb-8 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ l.jsx(on, { asChild: !0, children: /* @__PURE__ */ l.jsx(Mo, { variant: "gray-outline", size: "sm", children: "Close" }) })
      ]
    }
  );
}
function my({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    Ro,
    {
      "data-slot": "dialog-title",
      className: L("font-manrope text-base leading-5 font-semibold text-gray-900", e),
      ...n
    }
  );
}
function vy({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    jo,
    {
      "data-slot": "dialog-description",
      className: L(
        "text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3",
        e
      ),
      ...n
    }
  );
}
var zf = (e) => e.type === "checkbox", Yt = (e) => e instanceof Date, Do = (e) => e == null;
const Ds = (e) => typeof e == "object";
var mt = (e) => !Do(e) && !Array.isArray(e) && Ds(e) && !Yt(e), $f = (e) => mt(e) && e.target ? zf(e.target) ? e.target.checked : e.target.value : e, Vf = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Wf = (e, n) => e.has(Vf(n)), Bf = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return mt(n) && n.hasOwnProperty("isPrototypeOf");
}, Hf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ns(e) {
  let n;
  const t = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    n = new Date(e);
  else if (!(Hf && (e instanceof Blob || r)) && (t || mt(e)))
    if (n = t ? [] : Object.create(Object.getPrototypeOf(e)), !t && !Bf(e))
      n = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (n[o] = Ns(e[o]));
  else
    return e;
  return n;
}
var Is = (e) => /^\w*$/.test(e), Jr = (e) => e === void 0, Uf = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Ls = (e) => Uf(e.replace(/["|']|\]/g, "").split(/\.|\[/)), je = (e, n, t) => {
  if (!n || !mt(e))
    return t;
  const r = (Is(n) ? [n] : Ls(n)).reduce((o, i) => Do(o) ? o : o[i], e);
  return Jr(r) || r === e ? Jr(e[n]) ? t : e[n] : r;
}, Pr = (e) => typeof e == "boolean", Mi = (e, n, t) => {
  let r = -1;
  const o = Is(n) ? [n] : Ls(n), i = o.length, a = i - 1;
  for (; ++r < i; ) {
    const s = o[r];
    let c = t;
    if (r !== a) {
      const u = e[s];
      c = mt(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = c, e = e[s];
  }
};
const Di = {
  BLUR: "blur",
  CHANGE: "change"
}, Ni = {
  all: "all"
}, No = ie.createContext(null);
No.displayName = "HookFormContext";
const tr = () => ie.useContext(No), Gf = (e) => {
  const { children: n, ...t } = e;
  return ie.createElement(No.Provider, { value: t }, n);
};
var qf = (e, n, t, r = !0) => {
  const o = {
    defaultValues: n._defaultValues
  };
  for (const i in e)
    Object.defineProperty(o, i, {
      get: () => {
        const a = i;
        return n._proxyFormState[a] !== Ni.all && (n._proxyFormState[a] = !r || Ni.all), t && (t[a] = !0), e[a];
      }
    });
  return o;
};
const Fs = typeof window < "u" ? ie.useLayoutEffect : ie.useEffect;
function zs(e) {
  const n = tr(), { control: t = n.control, disabled: r, name: o, exact: i } = e || {}, [a, s] = ie.useState(t._formState), c = ie.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Fs(() => t._subscribe({
    name: o,
    formState: c.current,
    exact: i,
    callback: (u) => {
      !r && s({
        ...t._formState,
        ...u
      });
    }
  }), [o, r, i]), ie.useEffect(() => {
    c.current.isValid && t._setValid(!0);
  }, [t]), ie.useMemo(() => qf(a, t, c.current, !1), [a, t]);
}
var Yf = (e) => typeof e == "string", Ii = (e, n, t, r, o) => Yf(e) ? je(t, e, o) : Array.isArray(e) ? e.map((i) => je(t, i)) : t, Li = (e) => Do(e) || !Ds(e);
function jn(e, n, t = /* @__PURE__ */ new WeakSet()) {
  if (Li(e) || Li(n))
    return Object.is(e, n);
  if (Yt(e) && Yt(n))
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
      if (Yt(a) && Yt(s) || mt(a) && mt(s) || Array.isArray(a) && Array.isArray(s) ? !jn(a, s, t) : !Object.is(a, s))
        return !1;
    }
  }
  return !0;
}
function Kf(e) {
  const n = tr(), { control: t = n.control, name: r, defaultValue: o, disabled: i, exact: a, compute: s } = e || {}, c = ie.useRef(o), u = ie.useRef(s), p = ie.useRef(void 0), f = ie.useRef(t), m = ie.useRef(r);
  u.current = s;
  const [h, x] = ie.useState(() => {
    const S = t._getWatch(r, c.current);
    return u.current ? u.current(S) : S;
  }), v = ie.useCallback((S) => {
    const C = Ii(r, t._names, S || t._formValues, !1, c.current);
    return u.current ? u.current(C) : C;
  }, [t._formValues, t._names, r]), g = ie.useCallback((S) => {
    if (!i) {
      const C = Ii(r, t._names, S || t._formValues, !1, c.current);
      if (u.current) {
        const D = u.current(C);
        jn(D, p.current) || (x(D), p.current = D);
      } else
        x(C);
    }
  }, [t._formValues, t._names, i, r]);
  Fs(() => ((f.current !== t || !jn(m.current, r)) && (f.current = t, m.current = r, g()), t._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: a,
    callback: (S) => {
      g(S.values);
    }
  })), [t, a, r, g]), ie.useEffect(() => t._removeUnmounted());
  const y = f.current !== t, w = m.current, E = ie.useMemo(() => {
    if (i)
      return null;
    const S = !y && !jn(w, r);
    return y || S ? v() : null;
  }, [i, y, r, w, v]);
  return E !== null ? E : h;
}
function Zf(e) {
  const n = tr(), { name: t, disabled: r, control: o = n.control, shouldUnregister: i, defaultValue: a, exact: s = !0 } = e, c = Wf(o._names.array, t), u = ie.useMemo(() => je(o._formValues, t, je(o._defaultValues, t, a)), [o, t, a]), p = Kf({
    control: o,
    name: t,
    defaultValue: u,
    exact: s
  }), f = zs({
    control: o,
    name: t,
    exact: s
  }), m = ie.useRef(e), h = ie.useRef(void 0), x = ie.useRef(o.register(t, {
    ...e.rules,
    value: p,
    ...Pr(e.disabled) ? { disabled: e.disabled } : {}
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
  }), [f, t]), g = ie.useCallback((S) => x.current.onChange({
    target: {
      value: $f(S),
      name: t
    },
    type: Di.CHANGE
  }), [t]), y = ie.useCallback(() => x.current.onBlur({
    target: {
      value: je(o._formValues, t),
      name: t
    },
    type: Di.BLUR
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
    ...Pr(r) || f.disabled ? { disabled: f.disabled || r } : {},
    onChange: g,
    onBlur: y,
    ref: w
  }), [t, r, f.disabled, g, y, w, p]);
  return ie.useEffect(() => {
    const S = o._options.shouldUnregister || i, C = h.current;
    C && C !== t && !c && o.unregister(C), o.register(t, {
      ...m.current.rules,
      ...Pr(m.current.disabled) ? { disabled: m.current.disabled } : {}
    });
    const D = (P, j) => {
      const I = je(o._fields, P);
      I && I._f && (I._f.mount = j);
    };
    if (D(t, !0), S) {
      const P = Ns(je(o._options.defaultValues, t, m.current.defaultValue));
      Mi(o._defaultValues, t, P), Jr(je(o._formValues, t)) && Mi(o._formValues, t, P);
    }
    return !c && o.register(t), h.current = t, () => {
      (c ? S && !o._state.action : S) ? o.unregister(t) : D(t, !1);
    };
  }, [t, o, c, i]), ie.useEffect(() => {
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
const Xf = (e) => e.render(Zf(e)), $s = Gn(
  ({ className: e, children: n, required: t, ...r }, o) => /* @__PURE__ */ l.jsxs(
    "label",
    {
      ref: o,
      "data-slot": "label",
      className: L("font-manrope font-medium text-sm text-gray-700", e),
      ...r,
      children: [
        /* @__PURE__ */ l.jsx("span", { children: n }),
        t ? /* @__PURE__ */ l.jsx("span", { className: "text-base font-normal text-bright-red-600 ml-1 leading-[22px]", children: "*" }) : null
      ]
    }
  )
);
$s.displayName = "Label";
const hy = Gf, Vs = Oa({}), gy = ({
  ...e
}) => /* @__PURE__ */ l.jsx(Vs.Provider, { value: { name: e.name }, children: /* @__PURE__ */ l.jsx(Xf, { ...e }) }), nr = () => {
  const e = qr(Vs), n = qr(Ws), { getFieldState: t } = tr(), r = zs({ name: e.name }), o = t(e.name, r);
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
}, Ws = Oa({});
function xy({ className: e, ...n }) {
  const t = Jl();
  return /* @__PURE__ */ l.jsx(Ws.Provider, { value: { id: t }, children: /* @__PURE__ */ l.jsx("div", { "data-slot": "form-item", className: L("grid gap-2", e), ...n }) });
}
function by({ className: e, ...n }) {
  const { error: t, formItemId: r } = nr();
  return /* @__PURE__ */ l.jsx(
    $s,
    {
      "data-slot": "form-label",
      "data-error": !!t,
      className: e,
      htmlFor: r,
      ...n
    }
  );
}
function yy({ ...e }) {
  const { error: n, formItemId: t, formDescriptionId: r, formMessageId: o } = nr();
  return /* @__PURE__ */ l.jsx(
    Qn,
    {
      "data-slot": "form-control",
      id: t,
      "aria-describedby": n ? `${r} ${o}` : `${r}`,
      "aria-invalid": !!n,
      ...e
    }
  );
}
function wy({ className: e, ...n }) {
  const { formDescriptionId: t } = nr();
  return /* @__PURE__ */ l.jsx(
    "p",
    {
      "data-slot": "form-description",
      id: t,
      className: L("text-muted-foreground text-sm", e),
      ...n
    }
  );
}
function Cy({ className: e, ...n }) {
  const { error: t, formMessageId: r } = nr(), o = t ? String(t?.message ?? "") : n.children;
  return o ? /* @__PURE__ */ l.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: L("text-bright-red-600 text-sm", e),
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
function Jf({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: L("inline-block", n), ...r, children: [
    /* @__PURE__ */ l.jsx("circle", { cx: "12.6457", cy: "4.35422", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "10.0876", cy: "9.80881", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "3.35422", cy: "11.0876", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ l.jsx("circle", { cx: "5.46091", cy: "5.63328", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ l.jsx("path", { d: "M5.19745 6.83691L3.91846 10.0344", stroke: "currentColor" }),
    /* @__PURE__ */ l.jsx("path", { d: "M12.232 5.55786L10.3135 8.75533", stroke: "currentColor" }),
    /* @__PURE__ */ l.jsx("path", { d: "M6.47645 6.83691L9.03442 8.7554", stroke: "currentColor" })
  ] });
}
function Qf({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", className: L("inline-block", n), ...r, children: [
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
  ] });
}
function em({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function tm({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function nm({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: L("inline-block", n), ...r, children: /* @__PURE__ */ l.jsx(
    "path",
    {
      d: "M10.6517 3.73292C10.3353 3.1997 9.64138 3.1997 9.32503 3.73292L6.86562 7.83985C6.68193 8.13482 6.36558 8.29365 6.04922 8.21424L2.62035 7.46546C2.03866 7.34067 1.54882 7.93061 1.69169 8.56594L3.3449 15.6112C3.43675 15.9856 3.72249 16.2466 4.06946 16.2693C4.06946 16.2693 5.34508 16.6663 9.99856 16.6663C14.652 16.6663 15.9277 16.2693 15.9277 16.2693C16.1828 16.2012 16.5604 15.9743 16.6522 15.6112L18.3054 8.56594C18.4585 7.93061 17.9584 7.34067 17.3768 7.46546L13.9479 8.21424C13.6315 8.28231 13.305 8.13482 13.1315 7.83985L10.6517 3.73292Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeMiterlimit: "10"
    }
  ) });
}
function rm({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function om({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function im({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function am({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: L("inline-block", n), ...r, children: [
    /* @__PURE__ */ l.jsx(
      "path",
      {
        d: "M5.33325 4H13.9999",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "path",
      {
        d: "M5.33325 8H13.9999",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "path",
      {
        d: "M5.33325 12H13.9999",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ l.jsx("path", { d: "M2 4H2.00667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ l.jsx("path", { d: "M2 8H2.00667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ l.jsx("path", { d: "M2 12H2.00667", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function sm({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: L("inline-block", n), ...r, children: /* @__PURE__ */ l.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM7.50001 5.41667C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H7.50001V5.41667ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function cm({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: L("inline-block", n), ...r, children: /* @__PURE__ */ l.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667H7.50001C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function lm({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function dm({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function um({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function pm({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function fm({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function mm({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 48 48", fill: "none", className: L("inline-block", n), ...r, children: /* @__PURE__ */ l.jsx(
    "path",
    {
      d: "M30 16V32H10V16H30ZM32 12H8C6.9 12 6 12.9 6 14V34C6 35.1 6.9 36 8 36H32C33.1 36 34 35.1 34 34V27L42 35V13L34 21V14C34 12.9 33.1 12 32 12Z",
      fill: "currentColor"
    }
  ) });
}
const vm = {
  analytics: Jf,
  announcement: Qf,
  church: em,
  class: tm,
  crown: nm,
  event: rm,
  gift: om,
  home: im,
  list: am,
  "lock-closed": sm,
  "lock-open": cm,
  ministry: lm,
  podcast: dm,
  series: um,
  sermon: pm,
  subscription: fm,
  video: mm
};
function Ey({ name: e, ...n }) {
  const t = vm[e];
  return /* @__PURE__ */ l.jsx(t, { ...n });
}
var bn = { exports: {} }, yn = { exports: {} }, le = {};
var Fi;
function hm() {
  if (Fi) return le;
  Fi = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, t = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, a = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, m = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, h = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, v = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, g = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, y = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, w = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function E(C) {
    if (typeof C == "object" && C !== null) {
      var D = C.$$typeof;
      switch (D) {
        case n:
          switch (C = C.type, C) {
            case c:
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
                case h:
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
  return le.AsyncMode = c, le.ConcurrentMode = u, le.ContextConsumer = s, le.ContextProvider = a, le.Element = n, le.ForwardRef = p, le.Fragment = r, le.Lazy = x, le.Memo = h, le.Portal = t, le.Profiler = i, le.StrictMode = o, le.Suspense = f, le.isAsyncMode = function(C) {
    return S(C) || E(C) === c;
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
    return E(C) === h;
  }, le.isPortal = function(C) {
    return E(C) === t;
  }, le.isProfiler = function(C) {
    return E(C) === i;
  }, le.isStrictMode = function(C) {
    return E(C) === o;
  }, le.isSuspense = function(C) {
    return E(C) === f;
  }, le.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === r || C === u || C === i || C === o || C === f || C === m || typeof C == "object" && C !== null && (C.$$typeof === x || C.$$typeof === h || C.$$typeof === a || C.$$typeof === s || C.$$typeof === p || C.$$typeof === g || C.$$typeof === y || C.$$typeof === w || C.$$typeof === v);
  }, le.typeOf = E, le;
}
var de = {};
var zi;
function gm() {
  return zi || (zi = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, t = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, a = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, m = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, h = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, v = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, g = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, y = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, w = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function E(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === r || T === u || T === i || T === o || T === f || T === m || typeof T == "object" && T !== null && (T.$$typeof === x || T.$$typeof === h || T.$$typeof === a || T.$$typeof === s || T.$$typeof === p || T.$$typeof === g || T.$$typeof === y || T.$$typeof === w || T.$$typeof === v);
    }
    function S(T) {
      if (typeof T == "object" && T !== null) {
        var pe = T.$$typeof;
        switch (pe) {
          case n:
            var te = T.type;
            switch (te) {
              case c:
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
    var C = c, D = u, P = s, j = a, I = n, B = p, J = r, q = x, U = h, H = t, Q = i, $ = o, ee = f, R = !1;
    function M(T) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(T) || S(T) === c;
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
    function N(T) {
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
      return S(T) === h;
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
    de.AsyncMode = C, de.ConcurrentMode = D, de.ContextConsumer = P, de.ContextProvider = j, de.Element = I, de.ForwardRef = B, de.Fragment = J, de.Lazy = q, de.Memo = U, de.Portal = H, de.Profiler = Q, de.StrictMode = $, de.Suspense = ee, de.isAsyncMode = M, de.isConcurrentMode = _, de.isContextConsumer = b, de.isContextProvider = A, de.isElement = N, de.isForwardRef = O, de.isFragment = G, de.isLazy = V, de.isMemo = k, de.isPortal = W, de.isProfiler = Z, de.isStrictMode = F, de.isSuspense = re, de.isValidElementType = E, de.typeOf = S;
  })()), de;
}
var $i;
function Bs() {
  return $i || ($i = 1, process.env.NODE_ENV === "production" ? yn.exports = hm() : yn.exports = gm()), yn.exports;
}
var Ar, Vi;
function xm() {
  if (Vi) return Ar;
  Vi = 1;
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
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        u[p] = p;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ar = o() ? Object.assign : function(i, a) {
    for (var s, c = r(i), u, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var f in s)
        n.call(s, f) && (c[f] = s[f]);
      if (e) {
        u = e(s);
        for (var m = 0; m < u.length; m++)
          t.call(s, u[m]) && (c[u[m]] = s[u[m]]);
      }
    }
    return c;
  }, Ar;
}
var Tr, Wi;
function Io() {
  if (Wi) return Tr;
  Wi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Tr = e, Tr;
}
var Or, Bi;
function Hs() {
  return Bi || (Bi = 1, Or = Function.call.bind(Object.prototype.hasOwnProperty)), Or;
}
var Mr, Hi;
function bm() {
  if (Hi) return Mr;
  Hi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ Io(), t = {}, r = /* @__PURE__ */ Hs();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (r(i, p)) {
          var f;
          try {
            if (typeof i[p] != "function") {
              var m = Error(
                (c || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            f = i[p](a, p, c, s, null, n);
          } catch (x) {
            f = x;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in t)) {
            t[f.message] = !0;
            var h = u ? u() : "";
            e(
              "Failed " + s + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Mr = o, Mr;
}
var Dr, Ui;
function ym() {
  if (Ui) return Dr;
  Ui = 1;
  var e = Bs(), n = xm(), t = /* @__PURE__ */ Io(), r = /* @__PURE__ */ Hs(), o = /* @__PURE__ */ bm(), i = function() {
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
  return Dr = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function f(_) {
      var b = _ && (u && _[u] || _[p]);
      if (typeof b == "function")
        return b;
    }
    var m = "<<anonymous>>", h = {
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
      oneOfType: I,
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
    function g(_) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, A = 0;
      function N(G, V, k, W, Z, F, re) {
        if (W = W || m, F = F || k, re !== t) {
          if (c) {
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
      var O = N.bind(null, !1);
      return O.isRequired = N.bind(null, !0), O;
    }
    function y(_) {
      function b(A, N, O, G, V, k) {
        var W = A[N], Z = $(W);
        if (Z !== _) {
          var F = ee(W);
          return new v(
            "Invalid " + G + " `" + V + "` of type " + ("`" + F + "` supplied to `" + O + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return g(b);
    }
    function w() {
      return g(a);
    }
    function E(_) {
      function b(A, N, O, G, V) {
        if (typeof _ != "function")
          return new v("Property `" + V + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var k = A[N];
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
      return g(b);
    }
    function S() {
      function _(b, A, N, O, G) {
        var V = b[A];
        if (!s(V)) {
          var k = $(V);
          return new v("Invalid " + O + " `" + G + "` of type " + ("`" + k + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(_);
    }
    function C() {
      function _(b, A, N, O, G) {
        var V = b[A];
        if (!e.isValidElementType(V)) {
          var k = $(V);
          return new v("Invalid " + O + " `" + G + "` of type " + ("`" + k + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(_);
    }
    function D(_) {
      function b(A, N, O, G, V) {
        if (!(A[N] instanceof _)) {
          var k = _.name || m, W = M(A[N]);
          return new v("Invalid " + G + " `" + V + "` of type " + ("`" + W + "` supplied to `" + O + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return g(b);
    }
    function P(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function b(A, N, O, G, V) {
        for (var k = A[N], W = 0; W < _.length; W++)
          if (x(k, _[W]))
            return null;
        var Z = JSON.stringify(_, function(re, T) {
          var pe = ee(T);
          return pe === "symbol" ? String(T) : T;
        });
        return new v("Invalid " + G + " `" + V + "` of value `" + String(k) + "` " + ("supplied to `" + O + "`, expected one of " + Z + "."));
      }
      return g(b);
    }
    function j(_) {
      function b(A, N, O, G, V) {
        if (typeof _ != "function")
          return new v("Property `" + V + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var k = A[N], W = $(k);
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
      return g(b);
    }
    function I(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var b = 0; b < _.length; b++) {
        var A = _[b];
        if (typeof A != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + R(A) + " at index " + b + "."
          ), a;
      }
      function N(O, G, V, k, W) {
        for (var Z = [], F = 0; F < _.length; F++) {
          var re = _[F], T = re(O, G, V, k, W, t);
          if (T == null)
            return null;
          T.data && r(T.data, "expectedType") && Z.push(T.data.expectedType);
        }
        var pe = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new v("Invalid " + k + " `" + W + "` supplied to " + ("`" + V + "`" + pe + "."));
      }
      return g(N);
    }
    function B() {
      function _(b, A, N, O, G) {
        return H(b[A]) ? null : new v("Invalid " + O + " `" + G + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return g(_);
    }
    function J(_, b, A, N, O) {
      return new v(
        (_ || "React class") + ": " + b + " type `" + A + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function q(_) {
      function b(A, N, O, G, V) {
        var k = A[N], W = $(k);
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
      return g(b);
    }
    function U(_) {
      function b(A, N, O, G, V) {
        var k = A[N], W = $(k);
        if (W !== "object")
          return new v("Invalid " + G + " `" + V + "` of type `" + W + "` " + ("supplied to `" + O + "`, expected `object`."));
        var Z = n({}, A[N], _);
        for (var F in Z) {
          var re = _[F];
          if (r(_, F) && typeof re != "function")
            return J(O, G, V, F, ee(re));
          if (!re)
            return new v(
              "Invalid " + G + " `" + V + "` key `" + F + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(A[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var T = re(k, F, O, G, V + "." + F, t);
          if (T)
            return T;
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
            var A = b.call(_), N;
            if (b !== _.entries) {
              for (; !(N = A.next()).done; )
                if (!H(N.value))
                  return !1;
            } else
              for (; !(N = A.next()).done; ) {
                var O = N.value;
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
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, Dr;
}
var Nr, Gi;
function wm() {
  if (Gi) return Nr;
  Gi = 1;
  var e = /* @__PURE__ */ Io();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, Nr = function() {
    function r(a, s, c, u, p, f) {
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
  }, Nr;
}
var qi;
function Cm() {
  if (qi) return bn.exports;
  if (qi = 1, process.env.NODE_ENV !== "production") {
    var e = Bs(), n = !0;
    bn.exports = /* @__PURE__ */ ym()(e.isElement, n);
  } else
    bn.exports = /* @__PURE__ */ wm()();
  return bn.exports;
}
var Em = /* @__PURE__ */ Cm();
const me = /* @__PURE__ */ go(Em), Sm = /* @__PURE__ */ new Map([
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
function At(e, n, t) {
  const r = km(e), { webkitRelativePath: o } = e, i = typeof n == "string" ? n : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && Yi(r, "path", i), Yi(r, "relativePath", i), r;
}
function km(e) {
  const { name: n } = e;
  if (n && n.lastIndexOf(".") !== -1 && !e.type) {
    const r = n.split(".").pop().toLowerCase(), o = Sm.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Yi(e, n, t) {
  Object.defineProperty(e, n, {
    value: t,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const _m = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function Rm(e) {
  return xt(this, void 0, void 0, function* () {
    return Mn(e) && jm(e.dataTransfer) ? Om(e.dataTransfer, e.type) : Pm(e) ? Am(e) : Array.isArray(e) && e.every((n) => "getFile" in n && typeof n.getFile == "function") ? Tm(e) : [];
  });
}
function jm(e) {
  return Mn(e);
}
function Pm(e) {
  return Mn(e) && Mn(e.target);
}
function Mn(e) {
  return typeof e == "object" && e !== null;
}
function Am(e) {
  return Qr(e.target.files).map((n) => At(n));
}
function Tm(e) {
  return xt(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((t) => t.getFile()))).map((t) => At(t));
  });
}
function Om(e, n) {
  return xt(this, void 0, void 0, function* () {
    if (e.items) {
      const t = Qr(e.items).filter((o) => o.kind === "file");
      if (n !== "drop")
        return t;
      const r = yield Promise.all(t.map(Mm));
      return Ki(Us(r));
    }
    return Ki(Qr(e.files).map((t) => At(t)));
  });
}
function Ki(e) {
  return e.filter((n) => _m.indexOf(n.name) === -1);
}
function Qr(e) {
  if (e === null)
    return [];
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    n.push(r);
  }
  return n;
}
function Mm(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Zi(e);
  const n = e.webkitGetAsEntry();
  return n && n.isDirectory ? Gs(n) : Zi(e, n);
}
function Us(e) {
  return e.reduce((n, t) => [
    ...n,
    ...Array.isArray(t) ? Us(t) : [t]
  ], []);
}
function Zi(e, n) {
  return xt(this, void 0, void 0, function* () {
    var t;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const i = yield e.getAsFileSystemHandle();
      if (i === null)
        throw new Error(`${e} is not a File`);
      if (i !== void 0) {
        const a = yield i.getFile();
        return a.handle = i, At(a);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return At(r, (t = n?.fullPath) !== null && t !== void 0 ? t : void 0);
  });
}
function Dm(e) {
  return xt(this, void 0, void 0, function* () {
    return e.isDirectory ? Gs(e) : Nm(e);
  });
}
function Gs(e) {
  const n = e.createReader();
  return new Promise((t, r) => {
    const o = [];
    function i() {
      n.readEntries((a) => xt(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(Dm));
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
function Nm(e) {
  return xt(this, void 0, void 0, function* () {
    return new Promise((n, t) => {
      e.file((r) => {
        const o = At(r, e.fullPath);
        n(o);
      }, (r) => {
        t(r);
      });
    });
  });
}
var wn = {}, Xi;
function Im() {
  return Xi || (Xi = 1, wn.__esModule = !0, wn.default = function(e, n) {
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
  }), wn;
}
var Lm = Im();
const Ir = /* @__PURE__ */ go(Lm);
function Ji(e) {
  return $m(e) || zm(e) || Ys(e) || Fm();
}
function Fm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function $m(e) {
  if (Array.isArray(e)) return eo(e);
}
function Qi(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ea(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Qi(Object(t), !0).forEach(function(r) {
      qs(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qi(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function qs(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Xt(e, n) {
  return Bm(e) || Wm(e, n) || Ys(e, n) || Vm();
}
function Vm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ys(e, n) {
  if (e) {
    if (typeof e == "string") return eo(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return eo(e, n);
  }
}
function eo(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Wm(e, n) {
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
function Bm(e) {
  if (Array.isArray(e)) return e;
}
var Hm = typeof Ir == "function" ? Ir : Ir.default, Um = "file-invalid-type", Gm = "file-too-large", qm = "file-too-small", Ym = "too-many-files", Km = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = n.split(","), r = t.length > 1 ? "one of ".concat(t.join(", ")) : t[0];
  return {
    code: Um,
    message: "File type must be ".concat(r)
  };
}, ta = function(n) {
  return {
    code: Gm,
    message: "File is larger than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, na = function(n) {
  return {
    code: qm,
    message: "File is smaller than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, Zm = {
  code: Ym,
  message: "Too many files"
};
function Ks(e, n) {
  var t = e.type === "application/x-moz-file" || Hm(e, n);
  return [t, t ? null : Km(n)];
}
function Zs(e, n, t) {
  if (pt(e.size))
    if (pt(n) && pt(t)) {
      if (e.size > t) return [!1, ta(t)];
      if (e.size < n) return [!1, na(n)];
    } else {
      if (pt(n) && e.size < n) return [!1, na(n)];
      if (pt(t) && e.size > t) return [!1, ta(t)];
    }
  return [!0, null];
}
function pt(e) {
  return e != null;
}
function Xm(e) {
  var n = e.files, t = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && n.length > 1 || i && a >= 1 && n.length > a ? !1 : n.every(function(c) {
    var u = Ks(c, t), p = Xt(u, 1), f = p[0], m = Zs(c, r, o), h = Xt(m, 1), x = h[0], v = s ? s(c) : null;
    return f && x && !v;
  });
}
function Dn(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function Cn(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(n) {
    return n === "Files" || n === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function ra(e) {
  e.preventDefault();
}
function Jm(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Qm(e) {
  return e.indexOf("Edge/") !== -1;
}
function ev() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Jm(e) || Qm(e);
}
function ze() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return n.some(function(s) {
      return !Dn(r) && s && s.apply(void 0, [r].concat(i)), Dn(r);
    });
  };
}
function tv() {
  return "showOpenFilePicker" in window;
}
function nv(e) {
  if (pt(e)) {
    var n = Object.entries(e).filter(function(t) {
      var r = Xt(t, 2), o = r[0], i = r[1], a = !0;
      return Xs(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(Js)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(t, r) {
      var o = Xt(r, 2), i = o[0], a = o[1];
      return ea(ea({}, t), {}, qs({}, i, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: n
    }];
  }
  return e;
}
function rv(e) {
  if (pt(e))
    return Object.entries(e).reduce(function(n, t) {
      var r = Xt(t, 2), o = r[0], i = r[1];
      return [].concat(Ji(n), [o], Ji(i));
    }, []).filter(function(n) {
      return Xs(n) || Js(n);
    }).join(",");
}
function ov(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function iv(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Xs(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Js(e) {
  return /^.*\.[\w]+$/.test(e);
}
var av = ["children"], sv = ["open"], cv = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], lv = ["refKey", "onChange", "onClick"];
function dv(e) {
  return fv(e) || pv(e) || Qs(e) || uv();
}
function uv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function fv(e) {
  if (Array.isArray(e)) return to(e);
}
function Lr(e, n) {
  return hv(e) || vv(e, n) || Qs(e, n) || mv();
}
function mv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qs(e, n) {
  if (e) {
    if (typeof e == "string") return to(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return to(e, n);
  }
}
function to(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function vv(e, n) {
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
function hv(e) {
  if (Array.isArray(e)) return e;
}
function oa(e, n) {
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
    n % 2 ? oa(Object(t), !0).forEach(function(r) {
      no(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : oa(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function no(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Nn(e, n) {
  if (e == null) return {};
  var t = gv(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function gv(e, n) {
  if (e == null) return {};
  var t = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var Lo = /* @__PURE__ */ Gn(function(e, n) {
  var t = e.children, r = Nn(e, av), o = Fo(r), i = o.open, a = Nn(o, sv);
  return ed(n, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ ie.createElement(td, null, t(xe(xe({}, a), {}, {
    open: i
  })));
});
Lo.displayName = "Dropzone";
var ec = {
  disabled: !1,
  getFilesFromEvent: Rm,
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
Lo.defaultProps = ec;
Lo.propTypes = {
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
var ro = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Fo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = xe(xe({}, ec), e), t = n.accept, r = n.disabled, o = n.getFilesFromEvent, i = n.maxSize, a = n.minSize, s = n.multiple, c = n.maxFiles, u = n.onDragEnter, p = n.onDragLeave, f = n.onDragOver, m = n.onDrop, h = n.onDropAccepted, x = n.onDropRejected, v = n.onFileDialogCancel, g = n.onFileDialogOpen, y = n.useFsAccessApi, w = n.autoFocus, E = n.preventDropOnDocument, S = n.noClick, C = n.noKeyboard, D = n.noDrag, P = n.noDragEventsBubbling, j = n.onError, I = n.validator, B = at(function() {
    return rv(t);
  }, [t]), J = at(function() {
    return nv(t);
  }, [t]), q = at(function() {
    return typeof g == "function" ? g : ia;
  }, [g]), U = at(function() {
    return typeof v == "function" ? v : ia;
  }, [v]), H = dn(null), Q = dn(null), $ = Ql(xv, ro), ee = Lr($, 2), R = ee[0], M = ee[1], _ = R.isFocused, b = R.isFileDialogActive, A = dn(typeof window < "u" && window.isSecureContext && y && tv()), N = function() {
    !A.current && b && setTimeout(function() {
      if (Q.current) {
        var ne = Q.current.files;
        ne.length || (M({
          type: "closeDialog"
        }), U());
      }
    }, 300);
  };
  kn(function() {
    return window.addEventListener("focus", N, !1), function() {
      window.removeEventListener("focus", N, !1);
    };
  }, [Q, b, U, A]);
  var O = dn([]), G = function(ne) {
    H.current && H.current.contains(ne.target) || (ne.preventDefault(), O.current = []);
  };
  kn(function() {
    return E && (document.addEventListener("dragover", ra, !1), document.addEventListener("drop", G, !1)), function() {
      E && (document.removeEventListener("dragover", ra), document.removeEventListener("drop", G));
    };
  }, [H, E]), kn(function() {
    return !r && w && H.current && H.current.focus(), function() {
    };
  }, [H, w, r]);
  var V = ye(function(z) {
    j ? j(z) : console.error(z);
  }, [j]), k = ye(function(z) {
    z.preventDefault(), z.persist(), Ce(z), O.current = [].concat(dv(O.current), [z.target]), Cn(z) && Promise.resolve(o(z)).then(function(ne) {
      if (!(Dn(z) && !P)) {
        var ue = ne.length, ve = ue > 0 && Xm({
          files: ne,
          accept: B,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: c,
          validator: I
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
  }, [o, u, V, P, B, a, i, s, c, I]), W = ye(function(z) {
    z.preventDefault(), z.persist(), Ce(z);
    var ne = Cn(z);
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
    }), Cn(z) && p && p(z));
  }, [H, p, P]), F = ye(function(z, ne) {
    var ue = [], ve = [];
    z.forEach(function(ke) {
      var tt = Ks(ke, B), nt = Lr(tt, 2), $t = nt[0], Vt = nt[1], Me = Zs(ke, a, i), rt = Lr(Me, 2), Wt = rt[0], gr = rt[1], xr = I ? I(ke) : null;
      if ($t && Wt && !xr)
        ue.push(ke);
      else {
        var br = [Vt, gr];
        xr && (br = br.concat(xr)), ve.push({
          file: ke,
          errors: br.filter(function(Xl) {
            return Xl;
          })
        });
      }
    }), (!s && ue.length > 1 || s && c >= 1 && ue.length > c) && (ue.forEach(function(ke) {
      ve.push({
        file: ke,
        errors: [Zm]
      });
    }), ue.splice(0)), M({
      acceptedFiles: ue,
      fileRejections: ve,
      isDragReject: ve.length > 0,
      type: "setFiles"
    }), m && m(ue, ve, ne), ve.length > 0 && x && x(ve, ne), ue.length > 0 && h && h(ue, ne);
  }, [M, s, B, a, i, c, m, h, x, I]), re = ye(function(z) {
    z.preventDefault(), z.persist(), Ce(z), O.current = [], Cn(z) && Promise.resolve(o(z)).then(function(ne) {
      Dn(z) && !P || F(ne, z);
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
        ov(ne) ? (U(ne), M({
          type: "closeDialog"
        })) : iv(ne) ? (A.current = !1, Q.current ? (Q.current.value = null, Q.current.click()) : V(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : V(ne);
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
    S || (ev() ? setTimeout(T, 0) : T());
  }, [S, T]), ge = function(ne) {
    return r ? null : ne;
  }, Se = function(ne) {
    return C ? null : ge(ne);
  }, fe = function(ne) {
    return D ? null : ge(ne);
  }, Ce = function(ne) {
    P && ne.stopPropagation();
  }, wt = at(function() {
    return function() {
      var z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ne = z.refKey, ue = ne === void 0 ? "ref" : ne, ve = z.role, ke = z.onKeyDown, tt = z.onFocus, nt = z.onBlur, $t = z.onClick, Vt = z.onDragEnter, Me = z.onDragOver, rt = z.onDragLeave, Wt = z.onDrop, gr = Nn(z, cv);
      return xe(xe(no({
        onKeyDown: Se(ze(ke, pe)),
        onFocus: Se(ze(tt, te)),
        onBlur: Se(ze(nt, oe)),
        onClick: ge(ze($t, be)),
        onDragEnter: fe(ze(Vt, k)),
        onDragOver: fe(ze(Me, W)),
        onDragLeave: fe(ze(rt, Z)),
        onDrop: fe(ze(Wt, re)),
        role: typeof ve == "string" && ve !== "" ? ve : "presentation"
      }, ue, H), !r && !C ? {
        tabIndex: 0
      } : {}), gr);
    };
  }, [H, pe, te, oe, be, k, W, Z, re, C, D, r]), Pe = ye(function(z) {
    z.stopPropagation();
  }, []), qe = at(function() {
    return function() {
      var z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ne = z.refKey, ue = ne === void 0 ? "ref" : ne, ve = z.onChange, ke = z.onClick, tt = Nn(z, lv), nt = no({
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
        onChange: ge(ze(ve, re)),
        onClick: ge(ze(ke, Pe)),
        tabIndex: -1
      }, ue, Q);
      return xe(xe({}, nt), tt);
    };
  }, [Q, t, s, re, r]);
  return xe(xe({}, R), {}, {
    isFocused: _ && !r,
    getRootProps: wt,
    getInputProps: qe,
    rootRef: H,
    inputRef: Q,
    open: ge(T)
  });
}
function xv(e, n) {
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
      return xe(xe({}, ro), {}, {
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
      return xe({}, ro);
    default:
      return e;
  }
}
function ia() {
}
const bv = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2024C0%2010.7452%2010.7452%200%2024%200C37.2548%200%2048%2010.7452%2048%2024C48%2037.2548%2037.2548%2048%2024%2048C10.7452%2048%200%2037.2548%200%2024Z'%20fill='%23EFF1F5'/%3e%3cpath%20d='M31%2017V31H17V17H31ZM31%2015H17C15.9%2015%2015%2015.9%2015%2017V31C15%2032.1%2015.9%2033%2017%2033H31C32.1%2033%2033%2032.1%2033%2031V17C33%2015.9%2032.1%2015%2031%2015ZM26.14%2023.86L23.14%2027.73L21%2025.14L18%2029H30L26.14%2023.86Z'%20fill='%233F465B'/%3e%3c/svg%3e";
var Fr, aa;
function yv() {
  if (aa) return Fr;
  aa = 1;
  var e = !1, n, t, r, o, i, a, s, c, u, p, f, m, h, x, v;
  function g() {
    if (!e) {
      e = !0;
      var w = navigator.userAgent, E = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(w), S = /(Mac OS X)|(Windows)|(Linux)/.exec(w);
      if (m = /\b(iPhone|iP[ao]d)/.exec(w), h = /\b(iP[ao]d)/.exec(w), p = /Android/i.exec(w), x = /FBAN\/\w+;/i.exec(w), v = /Mobile/i.exec(w), f = !!/Win64/.exec(w), E) {
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
        c = !!S[2], u = !!S[3];
      } else
        s = c = u = !1;
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
      return g() || u;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return g() || m;
    },
    mobile: function() {
      return g() || m || h || p || v;
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
  return Fr = y, Fr;
}
var zr, sa;
function wv() {
  if (sa) return zr;
  sa = 1;
  var e = !!(typeof window < "u" && window.document && window.document.createElement), n = {
    canUseDOM: e,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
    canUseViewport: e && !!window.screen,
    isInWorker: !e
    // For now, this is true - might change in the future.
  };
  return zr = n, zr;
}
var $r, ca;
function Cv() {
  if (ca) return $r;
  ca = 1;
  var e = wv(), n;
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
  return $r = t, $r;
}
var Vr, la;
function Ev() {
  if (la) return Vr;
  la = 1;
  var e = yv(), n = Cv(), t = 10, r = 40, o = 800;
  function i(a) {
    var s = 0, c = 0, u = 0, p = 0;
    return "detail" in a && (c = a.detail), "wheelDelta" in a && (c = -a.wheelDelta / 120), "wheelDeltaY" in a && (c = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (s = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (s = c, c = 0), u = s * t, p = c * t, "deltaY" in a && (p = a.deltaY), "deltaX" in a && (u = a.deltaX), (u || p) && a.deltaMode && (a.deltaMode == 1 ? (u *= r, p *= r) : (u *= o, p *= o)), u && !s && (s = u < 1 ? -1 : 1), p && !c && (c = p < 1 ? -1 : 1), {
      spinX: s,
      spinY: c,
      pixelX: u,
      pixelY: p
    };
  }
  return i.getEventType = function() {
    return e.firefox() ? "DOMMouseScroll" : n("wheel") ? "wheel" : "mousewheel";
  }, Vr = i, Vr;
}
var Wr, da;
function Sv() {
  return da || (da = 1, Wr = Ev()), Wr;
}
var kv = Sv();
const _v = /* @__PURE__ */ go(kv);
function Rv(e, n, t, r, o, i) {
  i === void 0 && (i = 0);
  var a = Tt(e, n, i), s = a.width, c = a.height, u = Math.min(s, t), p = Math.min(c, r);
  return u > p * o ? {
    width: p * o,
    height: p
  } : {
    width: u,
    height: u / o
  };
}
function jv(e) {
  return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight;
}
function Gt(e, n, t, r, o) {
  o === void 0 && (o = 0);
  var i = Tt(n.width, n.height, o), a = i.width, s = i.height;
  return {
    x: ua(e.x, a, t.width, r),
    y: ua(e.y, s, t.height, r)
  };
}
function ua(e, n, t, r) {
  var o = n * r / 2 - t / 2;
  return rr(e, -o, o);
}
function pa(e, n) {
  return Math.sqrt(Math.pow(e.y - n.y, 2) + Math.pow(e.x - n.x, 2));
}
function fa(e, n) {
  return Math.atan2(n.y - e.y, n.x - e.x) * 180 / Math.PI;
}
function Pv(e, n, t, r, o, i, a) {
  i === void 0 && (i = 0), a === void 0 && (a = !0);
  var s = a ? Av : Tv, c = Tt(n.width, n.height, i), u = Tt(n.naturalWidth, n.naturalHeight, i), p = {
    x: s(100, ((c.width - t.width / o) / 2 - e.x / o) / c.width * 100),
    y: s(100, ((c.height - t.height / o) / 2 - e.y / o) / c.height * 100),
    width: s(100, t.width / c.width * 100 / o),
    height: s(100, t.height / c.height * 100 / o)
  }, f = Math.round(s(u.width, p.width * u.width / 100)), m = Math.round(s(u.height, p.height * u.height / 100)), h = u.width >= u.height * r, x = h ? {
    width: Math.round(m * r),
    height: m
  } : {
    width: f,
    height: Math.round(f / r)
  }, v = he(he({}, x), {
    x: Math.round(s(u.width - x.width, p.x * u.width / 100)),
    y: Math.round(s(u.height - x.height, p.y * u.height / 100))
  });
  return {
    croppedAreaPercentages: p,
    croppedAreaPixels: v
  };
}
function Av(e, n) {
  return Math.min(e, Math.max(0, n));
}
function Tv(e, n) {
  return n;
}
function Ov(e, n, t, r, o, i) {
  var a = Tt(n.width, n.height, t), s = rr(r.width / a.width * (100 / e.width), o, i), c = {
    x: s * a.width / 2 - r.width / 2 - a.width * s * (e.x / 100),
    y: s * a.height / 2 - r.height / 2 - a.height * s * (e.y / 100)
  };
  return {
    crop: c,
    zoom: s
  };
}
function Mv(e, n, t) {
  var r = jv(n);
  return t.height > t.width ? t.height / (e.height * r) : t.width / (e.width * r);
}
function Dv(e, n, t, r, o, i) {
  t === void 0 && (t = 0);
  var a = Tt(n.naturalWidth, n.naturalHeight, t), s = rr(Mv(e, n, r), o, i), c = r.height > r.width ? r.height / e.height : r.width / e.width, u = {
    x: ((a.width - e.width) / 2 - e.x) * c,
    y: ((a.height - e.height) / 2 - e.y) * c
  };
  return {
    crop: u,
    zoom: s
  };
}
function ma(e, n) {
  return {
    x: (n.x + e.x) / 2,
    y: (n.y + e.y) / 2
  };
}
function Nv(e) {
  return e * Math.PI / 180;
}
function Tt(e, n, t) {
  var r = Nv(t);
  return {
    width: Math.abs(Math.cos(r) * e) + Math.abs(Math.sin(r) * n),
    height: Math.abs(Math.sin(r) * e) + Math.abs(Math.cos(r) * n)
  };
}
function rr(e, n, t) {
  return Math.min(Math.max(e, n), t);
}
function En() {
  for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return e.filter(function(t) {
    return typeof t == "string" && t.length > 0;
  }).join(" ").trim();
}
var Iv = `.reactEasyCrop_Container {
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
`, Lv = 1, Fv = 3, zv = 1, $v = (
  /** @class */
  (function(e) {
    $d(n, e);
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
          var o = Ov(t.props.initialCroppedAreaPercentages, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), i = o.crop, a = o.zoom;
          t.props.onCropChange(i), t.props.onZoomChange && t.props.onZoomChange(a);
        } else if (t.props.initialCroppedAreaPixels) {
          var s = Dv(t.props.initialCroppedAreaPixels, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), i = s.crop, a = s.zoom;
          t.props.onCropChange(i), t.props.onZoomChange && t.props.onZoomChange(a);
        }
      }, t.computeSizes = function() {
        var r, o, i, a, s, c, u = t.imageRef.current || t.videoRef.current;
        if (u && t.containerRef) {
          t.containerRect = t.containerRef.getBoundingClientRect(), t.saveContainerPosition();
          var p = t.containerRect.width / t.containerRect.height, f = ((r = t.imageRef.current) === null || r === void 0 ? void 0 : r.naturalWidth) || ((o = t.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, m = ((i = t.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((a = t.videoRef.current) === null || a === void 0 ? void 0 : a.videoHeight) || 0, h = u.offsetWidth < f || u.offsetHeight < m, x = f / m, v = void 0;
          if (h)
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
          t.mediaSize = he(he({}, v), {
            naturalWidth: f,
            naturalHeight: m
          }), t.props.setMediaSize && t.props.setMediaSize(t.mediaSize);
          var g = t.props.cropSize ? t.props.cropSize : Rv(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
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
            }, u = t.props.restrictPosition ? Gt(c, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : c;
            t.props.onCropChange(u);
          }
        }));
      }, t.onDragStopped = function() {
        var r, o;
        t.isTouching = !1, t.cleanEvents(), t.emitCropData(), (o = (r = t.props).onInteractionEnd) === null || o === void 0 || o.call(r);
      }, t.onWheel = function(r) {
        if (t.currentWindow && !(t.props.onWheelRequest && !t.props.onWheelRequest(r))) {
          r.preventDefault();
          var o = n.getMousePoint(r), i = _v(r).pixelY, a = t.props.zoom - i * t.props.zoomSpeed / 200;
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
          var u = rr(r, t.props.minZoom, t.props.maxZoom);
          if (c) {
            var p = t.getPointOnContainer(o, t.containerPosition), f = t.getPointOnMedia(p), m = {
              x: f.x * u - p.x,
              y: f.y * u - p.y
            }, h = t.props.restrictPosition ? Gt(m, t.mediaSize, t.state.cropSize, u, t.props.rotation) : m;
            t.props.onCropChange(h);
          }
          t.props.onZoomChange(u);
        }
      }, t.getCropData = function() {
        if (!t.state.cropSize)
          return null;
        var r = t.props.restrictPosition ? Gt(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
        return Pv(r, t.mediaSize, t.state.cropSize, t.getAspect(), t.props.zoom, t.props.rotation, t.props.restrictPosition);
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
          var u = t.props.restrictPosition ? Gt(i, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : i;
          t.previousCropSize = t.state.cropSize, t.props.onCropChange(u), t.emitCropData();
        }
      }, t.onKeyDown = function(r) {
        var o, i, a = t.props, s = a.crop, c = a.onCropChange, u = a.keyboardStep, p = a.zoom, f = a.rotation, m = u;
        if (t.state.cropSize) {
          r.shiftKey && (m *= 0.2);
          var h = he({}, s);
          switch (r.key) {
            case "ArrowUp":
              h.y -= m, r.preventDefault();
              break;
            case "ArrowDown":
              h.y += m, r.preventDefault();
              break;
            case "ArrowLeft":
              h.x -= m, r.preventDefault();
              break;
            case "ArrowRight":
              h.x += m, r.preventDefault();
              break;
            default:
              return;
          }
          t.props.restrictPosition && (h = Gt(h, t.mediaSize, t.state.cropSize, p, f)), r.repeat || (i = (o = t.props).onInteractionStart) === null || i === void 0 || i.call(o), c(h);
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
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Iv, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, n.prototype.componentWillUnmount = function() {
      var t, r;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((r = this.styleRef.parentNode) === null || r === void 0 || r.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, n.prototype.componentDidUpdate = function(t) {
      var r, o, i, a, s, c, u, p, f;
      t.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : t.aspect !== this.props.aspect ? this.computeSizes() : t.objectFit !== this.props.objectFit ? this.computeSizes() : t.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((r = t.cropSize) === null || r === void 0 ? void 0 : r.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((i = t.cropSize) === null || i === void 0 ? void 0 : i.width) !== ((a = this.props.cropSize) === null || a === void 0 ? void 0 : a.width) ? this.computeSizes() : (((s = t.crop) === null || s === void 0 ? void 0 : s.x) !== ((c = this.props.crop) === null || c === void 0 ? void 0 : c.x) || ((u = t.crop) === null || u === void 0 ? void 0 : u.y) !== ((p = this.props.crop) === null || p === void 0 ? void 0 : p.y)) && this.emitCropAreaChange(), t.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
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
          var s = this.containerRect.width / this.containerRect.height, c = ((t = this.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((r = this.videoRef.current) === null || r === void 0 ? void 0 : r.videoWidth) || 0, u = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, p = c / u;
          return p < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, n.prototype.onPinchStart = function(t) {
      var r = n.getTouchPoint(t.touches[0]), o = n.getTouchPoint(t.touches[1]);
      this.lastPinchDistance = pa(r, o), this.lastPinchRotation = fa(r, o), this.onDragStart(ma(r, o));
    }, n.prototype.onPinchMove = function(t) {
      var r = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = n.getTouchPoint(t.touches[0]), i = n.getTouchPoint(t.touches[1]), a = ma(o, i);
        this.onDrag(a), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = pa(o, i), c = r.props.zoom * (s / r.lastPinchDistance);
          r.setNewZoom(c, a, {
            shouldUpdatePosition: !1
          }), r.lastPinchDistance = s;
          var u = fa(o, i), p = r.props.rotation + (u - r.lastPinchRotation);
          r.props.onRotationChange && r.props.onRotationChange(p), r.lastPinchRotation = u;
        });
      }
    }, n.prototype.render = function() {
      var t = this, r, o = this.props, i = o.image, a = o.video, s = o.mediaProps, c = o.cropperProps, u = o.transform, p = o.crop, f = p.x, m = p.y, h = o.rotation, x = o.zoom, v = o.cropShape, g = o.showGrid, y = o.roundCropAreaPixels, w = o.style, E = w.containerStyle, S = w.cropAreaStyle, C = w.mediaStyle, D = o.classes, P = D.containerClassName, j = D.cropAreaClassName, I = D.mediaClassName, B = (r = this.state.mediaObjectFit) !== null && r !== void 0 ? r : this.getObjectFit();
      return d.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(q) {
          return t.containerRef = q;
        },
        "data-testid": "container",
        style: E,
        className: En("reactEasyCrop_Container", P)
      }, i ? d.createElement("img", he({
        alt: "",
        className: En("reactEasyCrop_Image", B === "contain" && "reactEasyCrop_Contain", B === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", B === "vertical-cover" && "reactEasyCrop_Cover_Vertical", I)
      }, s, {
        src: i,
        ref: this.imageRef,
        style: he(he({}, C), {
          transform: u || "translate(".concat(f, "px, ").concat(m, "px) rotate(").concat(h, "deg) scale(").concat(x, ")")
        }),
        onLoad: this.onMediaLoad
      })) : a && d.createElement("video", he({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: En("reactEasyCrop_Video", B === "contain" && "reactEasyCrop_Contain", B === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", B === "vertical-cover" && "reactEasyCrop_Cover_Vertical", I)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: he(he({}, C), {
          transform: u || "translate(".concat(f, "px, ").concat(m, "px) rotate(").concat(h, "deg) scale(").concat(x, ")")
        }),
        controls: !1
      }), (Array.isArray(a) ? a : [{
        src: a
      }]).map(function(J) {
        return d.createElement("source", he({
          key: J.src
        }, J));
      })), this.state.cropSize && d.createElement("div", he({
        ref: this.cropperRef,
        style: he(he({}, S), {
          width: y ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: y ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: En("reactEasyCrop_CropArea", v === "round" && "reactEasyCrop_CropAreaRound", g && "reactEasyCrop_CropAreaGrid", j)
      }, c)));
    }, n.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: Fv,
      minZoom: Lv,
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
      keyboardStep: zv
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
function Vv({
  imageUrl: e,
  aspect: n,
  rounded: t,
  crop: r,
  zoom: o,
  onCropChange: i,
  onZoomChange: a,
  onCropComplete: s,
  onClose: c,
  onConfirm: u
}) {
  const p = ye(
    (f, m) => s(m),
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
              children: /* @__PURE__ */ l.jsx(Oo, { className: "size-5 text-gray-700" })
            }
          )
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex-1 overflow-auto px-4 py-4 sm:px-6 sm:py-6", children: [
          /* @__PURE__ */ l.jsx("div", { className: "relative w-full overflow-hidden rounded-lg bg-gray-900", children: /* @__PURE__ */ l.jsx("div", { className: "relative h-[60dvh] sm:h-[420px] w-full", children: /* @__PURE__ */ l.jsx(
            $v,
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
          Mo,
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
function Wv(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = `image/${r === "jpg" ? "jpeg" : r}`;
    n[o] ??= [], n[o].push(`.${r}`);
  }
  return n;
}
function Bv(e) {
  return new Promise((n, t) => {
    const r = new Image();
    r.addEventListener("load", () => n(r)), r.addEventListener("error", (o) => t(o)), r.setAttribute("crossOrigin", "anonymous"), r.src = e;
  });
}
async function Hv(e, n, t) {
  const r = await Bv(e), o = document.createElement("canvas"), i = o.getContext("2d");
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
      (u) => u ? s(u) : c(new Error("Canvas is empty")),
      t.fileType || "image/png",
      0.92
    );
  });
  return new File([a], t.fileName, { type: t.fileType || a.type });
}
function Sy({
  value: e,
  onChange: n,
  aspectRatio: t,
  extensions: r,
  rounded: o = !1,
  maxSize: i = 5 * 1024 * 1024,
  minWidth: a,
  minHeight: s,
  maxWidth: c,
  maxHeight: u,
  placeholder: p = "Accepted files jpg, png and webp",
  className: f
}) {
  const [m, h] = $e(null), [x, v] = $e([]), [g, y] = $e(!1), [w, E] = $e(null), [S, C] = $e({ x: 0, y: 0 }), [D, P] = $e(1), [j, I] = $e(null), B = at(() => Wv(r), [r]);
  kn(() => {
    if (!e) {
      m && URL.revokeObjectURL(m), h(null);
      return;
    }
    const b = URL.createObjectURL(e);
    return m && URL.revokeObjectURL(m), h(b), () => {
      URL.revokeObjectURL(b);
    };
  }, [e]);
  const J = ye(
    async (b) => {
      const A = b[0];
      if (!A) return;
      if (v([]), [a, s, c, u].some(
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
          ), typeof c == "number" && G.width > c && V.push(
            `Image width is too large. Maximum width is ${c}px.`
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
      E(O), y(!0), C({ x: 0, y: 0 }), P(1), I(null);
    },
    [u, c, s, a]
  ), { getRootProps: q, getInputProps: U, isDragActive: H, fileRejections: Q } = Fo({
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
        const b = await Hv(w, j, {
          fileName: e?.name ?? "image.png",
          fileType: e?.type ?? "image/png"
        });
        n(b), y(!1), URL.revokeObjectURL(w), E(null);
      } catch (b) {
        console.error("Error cropping image:", b);
      }
  }, [j, n, w, e?.name, e?.type]), M = ye(() => {
    m && URL.revokeObjectURL(m), h(null), n(null);
  }, [n, m]), _ = o ? { aspectRatio: "1 / 1" } : { aspectRatio: `${t}` };
  return /* @__PURE__ */ l.jsxs("div", { className: L("w-full space-y-2", f), children: [
    m ? /* @__PURE__ */ l.jsxs("div", { className: "relative w-fit max-h-44", children: [
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: L(
            "h-44 overflow-hidden border border-gray-50 bg-white shadow-lg",
            o ? "rounded-full" : "rounded-lg"
          ),
          style: _,
          children: /* @__PURE__ */ l.jsx(
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
      /* @__PURE__ */ l.jsx(
        "button",
        {
          type: "button",
          onClick: M,
          "aria-label": "Remove image",
          className: L(
            "absolute right-1 top-1 inline-flex items-center justify-center",
            "size-10 rounded-full bg-gray-600 text-white border border-white",
            "hover:bg-gray-700 transition-colors"
          ),
          children: /* @__PURE__ */ l.jsx(Oo, { className: "size-4" })
        }
      )
    ] }) : /* @__PURE__ */ l.jsxs(
      "div",
      {
        ...q(),
        className: L(
          "relative flex w-full items-center justify-center",
          "rounded-[0.625rem] border border-gray-50 bg-white",
          "min-h-44",
          "cursor-pointer transition-colors",
          H && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ l.jsx("input", { ...U() }),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center justify-center px-4 text-center gap-y-3", children: [
            /* @__PURE__ */ l.jsx("img", { src: bv, alt: "" }),
            /* @__PURE__ */ l.jsx("p", { className: "text-sm font-manrope font-medium text-gray-700", children: "Click to upload or drag and drop" }),
            !!p && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-gray-500", children: p })
          ] })
        ]
      }
    ),
    $.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "space-y-1", children: $.map((b, A) => /* @__PURE__ */ l.jsx("p", { className: "text-sm text-bright-red-600", children: b }, A)) }),
    g && w && /* @__PURE__ */ l.jsx(
      Vv,
      {
        imageUrl: w,
        aspect: t,
        rounded: o,
        crop: S,
        zoom: D,
        onCropChange: C,
        onZoomChange: P,
        onCropComplete: (b) => I(b),
        onClose: ee,
        onConfirm: R
      }
    )
  ] });
}
function Uv({ className: e, type: n, ...t }) {
  return /* @__PURE__ */ l.jsx(
    "input",
    {
      type: n,
      "data-slot": "input",
      className: L(
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
function ky({
  className: e,
  ...n
}) {
  const [t, r] = $e(!1), o = ye(() => {
    r((i) => !i);
  }, []);
  return /* @__PURE__ */ l.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ l.jsx(
      Uv,
      {
        ...n,
        "data-slot": "input",
        className: L(e, "pr-10"),
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
          t && /* @__PURE__ */ l.jsx(Rf, { className: "size-4 text-gray-300" }),
          !t && /* @__PURE__ */ l.jsx(Pf, { className: "size-4 text-gray-300" })
        ]
      }
    )
  ] });
}
var Gv = Object.defineProperty, qv = Object.defineProperties, Yv = Object.getOwnPropertyDescriptors, In = Object.getOwnPropertySymbols, tc = Object.prototype.hasOwnProperty, nc = Object.prototype.propertyIsEnumerable, va = (e, n, t) => n in e ? Gv(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Kv = (e, n) => {
  for (var t in n || (n = {})) tc.call(n, t) && va(e, t, n[t]);
  if (In) for (var t of In(n)) nc.call(n, t) && va(e, t, n[t]);
  return e;
}, Zv = (e, n) => qv(e, Yv(n)), Xv = (e, n) => {
  var t = {};
  for (var r in e) tc.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && In) for (var r of In(e)) n.indexOf(r) < 0 && nc.call(e, r) && (t[r] = e[r]);
  return t;
};
function Jv(e) {
  let n = setTimeout(e, 0), t = setTimeout(e, 10), r = setTimeout(e, 50);
  return [n, t, r];
}
function Qv(e) {
  let n = d.useRef();
  return d.useEffect(() => {
    n.current = e;
  }), n.current;
}
var eh = 18, rc = 40, th = `${rc}px`, nh = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function rh({ containerRef: e, inputRef: n, pushPasswordManagerStrategy: t, isFocused: r }) {
  let [o, i] = d.useState(!1), [a, s] = d.useState(!1), [c, u] = d.useState(!1), p = d.useMemo(() => t === "none" ? !1 : (t === "increase-width" || t === "experimental-no-flickering") && o && a, [o, a, t]), f = d.useCallback(() => {
    let m = e.current, h = n.current;
    if (!m || !h || c || t === "none") return;
    let x = m, v = x.getBoundingClientRect().left + x.offsetWidth, g = x.getBoundingClientRect().top + x.offsetHeight / 2, y = v - eh, w = g;
    document.querySelectorAll(nh).length === 0 && document.elementFromPoint(y, w) === m || (i(!0), u(!0));
  }, [e, n, c, t]);
  return d.useEffect(() => {
    let m = e.current;
    if (!m || t === "none") return;
    function h() {
      let v = window.innerWidth - m.getBoundingClientRect().right;
      s(v >= rc);
    }
    h();
    let x = setInterval(h, 1e3);
    return () => {
      clearInterval(x);
    };
  }, [e, t]), d.useEffect(() => {
    let m = r || document.activeElement === n.current;
    if (t === "none" || !m) return;
    let h = setTimeout(f, 0), x = setTimeout(f, 2e3), v = setTimeout(f, 5e3), g = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(x), clearTimeout(v), clearTimeout(g);
    };
  }, [n, r, t, f]), { hasPWMBadge: o, willPushPWMBadge: p, PWM_BADGE_SPACE_WIDTH: th };
}
var oc = d.createContext({}), ic = d.forwardRef((e, n) => {
  var t = e, { value: r, onChange: o, maxLength: i, textAlign: a = "left", pattern: s, placeholder: c, inputMode: u = "numeric", onComplete: p, pushPasswordManagerStrategy: f = "increase-width", pasteTransformer: m, containerClassName: h, noScriptCSSFallback: x = oh, render: v, children: g } = t, y = Xv(t, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), w, E, S, C, D;
  let [P, j] = d.useState(typeof y.defaultValue == "string" ? y.defaultValue : ""), I = r ?? P, B = Qv(I), J = d.useCallback((te) => {
    o?.(te), j(te);
  }, [o]), q = d.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), U = d.useRef(null), H = d.useRef(null), Q = d.useRef({ value: I, onChange: J, isIOS: typeof window < "u" && ((E = (w = window?.CSS) == null ? void 0 : w.supports) == null ? void 0 : E.call(w, "-webkit-touch-callout", "none")) }), $ = d.useRef({ prev: [(S = U.current) == null ? void 0 : S.selectionStart, (C = U.current) == null ? void 0 : C.selectionEnd, (D = U.current) == null ? void 0 : D.selectionDirection] });
  d.useImperativeHandle(n, () => U.current, []), d.useEffect(() => {
    let te = U.current, oe = H.current;
    if (!te || !oe) return;
    Q.current.value !== te.value && Q.current.onChange(te.value), $.current.prev = [te.selectionStart, te.selectionEnd, te.selectionDirection];
    function be() {
      if (document.activeElement !== te) {
        A(null), O(null);
        return;
      }
      let fe = te.selectionStart, Ce = te.selectionEnd, wt = te.selectionDirection, Pe = te.maxLength, qe = te.value, z = $.current.prev, ne = -1, ue = -1, ve;
      if (qe.length !== 0 && fe !== null && Ce !== null) {
        let $t = fe === Ce, Vt = fe === qe.length && qe.length < Pe;
        if ($t && !Vt) {
          let Me = fe;
          if (Me === 0) ne = 0, ue = 1, ve = "forward";
          else if (Me === Pe) ne = Me - 1, ue = Me, ve = "backward";
          else if (Pe > 1 && qe.length > 1) {
            let rt = 0;
            if (z[0] !== null && z[1] !== null) {
              ve = Me < z[1] ? "backward" : "forward";
              let Wt = z[0] === z[1] && z[0] < Pe;
              ve === "backward" && !Wt && (rt = -1);
            }
            ne = rt + Me, ue = rt + Me + 1;
          }
        }
        ne !== -1 && ue !== -1 && ne !== ue && U.current.setSelectionRange(ne, ue, ve);
      }
      let ke = ne !== -1 ? ne : fe, tt = ue !== -1 ? ue : Ce, nt = ve ?? wt;
      A(ke), O(tt), $.current.prev = [ke, tt, nt];
    }
    if (document.addEventListener("selectionchange", be, { capture: !0 }), be(), document.activeElement === te && _(!0), !document.getElementById("input-otp-style")) {
      let fe = document.createElement("style");
      if (fe.id = "input-otp-style", document.head.appendChild(fe), fe.sheet) {
        let Ce = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        qt(fe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), qt(fe.sheet, `[data-input-otp]:autofill { ${Ce} }`), qt(fe.sheet, `[data-input-otp]:-webkit-autofill { ${Ce} }`), qt(fe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), qt(fe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let ge = () => {
      oe && oe.style.setProperty("--root-height", `${te.clientHeight}px`);
    };
    ge();
    let Se = new ResizeObserver(ge);
    return Se.observe(te), () => {
      document.removeEventListener("selectionchange", be, { capture: !0 }), Se.disconnect();
    };
  }, []);
  let [ee, R] = d.useState(!1), [M, _] = d.useState(!1), [b, A] = d.useState(null), [N, O] = d.useState(null);
  d.useEffect(() => {
    Jv(() => {
      var te, oe, be, ge;
      (te = U.current) == null || te.dispatchEvent(new Event("input"));
      let Se = (oe = U.current) == null ? void 0 : oe.selectionStart, fe = (be = U.current) == null ? void 0 : be.selectionEnd, Ce = (ge = U.current) == null ? void 0 : ge.selectionDirection;
      Se !== null && fe !== null && (A(Se), O(fe), $.current.prev = [Se, fe, Ce]);
    });
  }, [I, M]), d.useEffect(() => {
    B !== void 0 && I !== B && B.length < i && I.length === i && p?.(I);
  }, [i, p, B, I]);
  let G = rh({ containerRef: H, inputRef: U, pushPasswordManagerStrategy: f, isFocused: M }), V = d.useCallback((te) => {
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
    let ge = U.current;
    if (!m && (!Q.current.isIOS || !te.clipboardData || !ge)) return;
    let Se = te.clipboardData.getData("text/plain"), fe = m ? m(Se) : Se;
    te.preventDefault();
    let Ce = (oe = U.current) == null ? void 0 : oe.selectionStart, wt = (be = U.current) == null ? void 0 : be.selectionEnd, Pe = (Ce !== wt ? I.slice(0, Ce) + fe + I.slice(wt) : I.slice(0, Ce) + fe + I.slice(Ce)).slice(0, i);
    if (Pe.length > 0 && q && !q.test(Pe)) return;
    ge.value = Pe, J(Pe);
    let qe = Math.min(Pe.length, i - 1), z = Pe.length;
    ge.setSelectionRange(qe, z), A(qe), O(z);
  }, [i, J, q, I]), Z = d.useMemo(() => ({ position: "relative", cursor: y.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [y.disabled]), F = d.useMemo(() => ({ position: "absolute", inset: 0, width: G.willPushPWMBadge ? `calc(100% + ${G.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: G.willPushPWMBadge ? `inset(0 ${G.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: a, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [G.PWM_BADGE_SPACE_WIDTH, G.willPushPWMBadge, a]), re = d.useMemo(() => d.createElement("input", Zv(Kv({ autoComplete: y.autoComplete || "one-time-code" }, y), { "data-input-otp": !0, "data-input-otp-placeholder-shown": I.length === 0 || void 0, "data-input-otp-mss": b, "data-input-otp-mse": N, inputMode: u, pattern: q?.source, "aria-placeholder": c, style: F, maxLength: i, value: I, ref: U, onPaste: (te) => {
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
  } })), [V, k, W, u, F, i, N, b, y, q?.source, I]), T = d.useMemo(() => ({ slots: Array.from({ length: i }).map((te, oe) => {
    var be;
    let ge = M && b !== null && N !== null && (b === N && oe === b || oe >= b && oe < N), Se = I[oe] !== void 0 ? I[oe] : null, fe = I[0] !== void 0 ? null : (be = c?.[oe]) != null ? be : null;
    return { char: Se, placeholderChar: fe, isActive: ge, hasFakeCaret: ge && Se === null };
  }), isFocused: M, isHovering: !y.disabled && ee }), [M, ee, i, N, b, y.disabled, I]), pe = d.useMemo(() => v ? v(T) : d.createElement(oc.Provider, { value: T }, g), [g, T, v]);
  return d.createElement(d.Fragment, null, x !== null && d.createElement("noscript", null, d.createElement("style", null, x)), d.createElement("div", { ref: H, "data-input-otp-container": !0, style: Z, className: h }, pe, d.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, re)));
});
ic.displayName = "Input";
function qt(e, n) {
  try {
    e.insertRule(n);
  } catch {
    console.error("input-otp could not insert CSS rule:", n);
  }
}
var oh = `
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
function _y({ className: e, containerClassName: n, ...t }) {
  return /* @__PURE__ */ l.jsx(
    ic,
    {
      "data-slot": "input-otp",
      containerClassName: L("flex items-center gap-2 has-disabled:opacity-50", n),
      className: L("disabled:cursor-not-allowed", e),
      ...t
    }
  );
}
function Ry({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: L("flex items-center gap-2", e),
      ...n
    }
  );
}
function jy({
  index: e,
  className: n,
  ...t
}) {
  const r = qr(oc), { char: o, hasFakeCaret: i, isActive: a } = r?.slots[e] ?? {};
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": a,
      className: L(
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
        i && /* @__PURE__ */ l.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ l.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function Py({ ...e }) {
  return /* @__PURE__ */ l.jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ l.jsx(Tf, {}) });
}
function ac({ size: e = 48, className: n, ...t }) {
  const r = typeof e == "number" ? `${e}` : e, o = typeof t["aria-label"] == "string";
  return /* @__PURE__ */ l.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 47 48",
      width: r,
      height: r,
      className: L("inline-block", n),
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
function Ay({ size: e = 32, className: n, ...t }) {
  return /* @__PURE__ */ l.jsxs("div", { className: L("inline-flex items-center gap-2", n), ...t, children: [
    /* @__PURE__ */ l.jsx(ac, { size: e }),
    /* @__PURE__ */ l.jsx("span", { className: "font-manrope text-base font-normal leading-none text-white", children: "MercySeat" })
  ] });
}
function ih(e) {
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
function ah(e) {
  return ["mp4", "webm", "ogg", "mov", "m4v"].includes(e) ? `video/${e === "mov" ? "quicktime" : e}` : ["mp3", "wav", "ogg", "aac", "flac", "m4a"].includes(e) ? `audio/${e === "mp3" ? "mpeg" : e === "m4a" ? "mp4" : e}` : null;
}
function sh(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = ah(r);
    o && (n[o] ??= [], n[o].push(`.${r}`));
  }
  return n;
}
function ch({ extensions: e, placeholder: n, onDropFile: t }) {
  const r = at(() => sh(e), [e]), o = ye(
    async (p) => {
      const f = p[0] || null;
      if (f && !(!f.type.startsWith("video/") && !f.type.startsWith("audio/")))
        try {
          const m = await ih(f);
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
  ), { getRootProps: i, getInputProps: a, isDragActive: s, fileRejections: c } = Fo({
    onDrop: o,
    accept: r,
    maxFiles: 1
  }), u = c.flatMap(
    (p) => p.errors.map((f) => f.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${e.join(", ")}` : f.message)
  );
  return /* @__PURE__ */ l.jsxs("div", { className: "space-y-2 w-full", children: [
    /* @__PURE__ */ l.jsxs(
      "div",
      {
        ...i(),
        className: L(
          "relative flex flex-col items-center justify-center w-full min-h-38.5 border border-gray-50 rounded-[0.625rem] cursor-pointer transition-colors bg-white",
          s && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ l.jsx("input", { ...a() }),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ l.jsx("div", { className: "size-12 flex items-center justify-center rounded-full bg-gray-25 mb-4", children: /* @__PURE__ */ l.jsx(Ms, { className: "size-6 text-blue-hepatica-600" }) }),
            /* @__PURE__ */ l.jsx("p", { className: "mb-2 text-sm text-gray-700 font-medium", children: "Click to upload or drag and drop" }),
            !!n && /* @__PURE__ */ l.jsx("p", { className: "text-xs text-gray-500 text-center", children: n })
          ] })
        ]
      }
    ),
    u.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "space-y-1", children: u.map((p, f) => /* @__PURE__ */ l.jsx("p", { className: "text-sm text-bright-red-600", children: p }, f)) })
  ] });
}
function lh({ file: e, onChange: n }) {
  const t = ye(() => {
    n(null);
  }, [n]), r = e.type.startsWith("video/") ? "Video" : "Audio";
  return /* @__PURE__ */ l.jsxs("div", { className: "w-full p-4 flex justify-between items-center bg-white border border-gray-50 rounded-lg", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ l.jsx("div", { className: "size-10 bg-gray-25 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ l.jsx(Ms, { className: "size-6 text-blue-hepatica-600" }) }),
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
        children: /* @__PURE__ */ l.jsx(Mf, { className: "size-4 text-bright-red-600" })
      }
    )
  ] });
}
function Ty({
  accepts: e,
  onChange: n,
  value: t,
  placeholder: r = ""
}) {
  return t ? /* @__PURE__ */ l.jsx(lh, { file: t, onChange: n }) : /* @__PURE__ */ l.jsx(
    ch,
    {
      extensions: e,
      onDropFile: n,
      placeholder: r
    }
  );
}
function Oy({ active: e, children: n, collapsed: t, disabled: r = !1 }) {
  return /* @__PURE__ */ l.jsx(
    Qn,
    {
      className: L(
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
function ha(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  const n = /* @__PURE__ */ dh(e), t = d.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = d.Children.toArray(i), c = s.find(ph);
    if (c) {
      const u = c.props.children, p = s.map((f) => f === c ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function dh(e) {
  const n = d.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (d.isValidElement(o)) {
      const a = mh(o), s = fh(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? Je(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var uh = /* @__PURE__ */ Symbol("radix.slottable");
function ph(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === uh;
}
function fh(e, n) {
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
function mh(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function zo(e) {
  const n = e + "CollectionProvider", [t, r] = Xe(n), [o, i] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (v) => {
    const { scope: g, children: y } = v, w = ie.useRef(null), E = ie.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l.jsx(o, { scope: g, itemMap: E, collectionRef: w, children: y });
  };
  a.displayName = n;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ ga(s), u = ie.forwardRef(
    (v, g) => {
      const { scope: y, children: w } = v, E = i(s, y), S = ce(g, E.collectionRef);
      return /* @__PURE__ */ l.jsx(c, { ref: S, children: w });
    }
  );
  u.displayName = s;
  const p = e + "CollectionItemSlot", f = "data-radix-collection-item", m = /* @__PURE__ */ ga(p), h = ie.forwardRef(
    (v, g) => {
      const { scope: y, children: w, ...E } = v, S = ie.useRef(null), C = ce(g, S), D = i(p, y);
      return ie.useEffect(() => (D.itemMap.set(S, { ref: S, ...E }), () => {
        D.itemMap.delete(S);
      })), /* @__PURE__ */ l.jsx(m, { [f]: "", ref: C, children: w });
    }
  );
  h.displayName = p;
  function x(v) {
    const g = i(e + "CollectionConsumer", v);
    return ie.useCallback(() => {
      const w = g.collectionRef.current;
      if (!w) return [];
      const E = Array.from(w.querySelectorAll(`[${f}]`));
      return Array.from(g.itemMap.values()).sort(
        (D, P) => E.indexOf(D.ref.current) - E.indexOf(P.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: a, Slot: u, ItemSlot: h },
    x,
    r
  ];
}
var vh = d.createContext(void 0);
function $o(e) {
  const n = d.useContext(vh);
  return e || n || "ltr";
}
const hh = ["top", "right", "bottom", "left"], st = Math.min, Ae = Math.max, Ln = Math.round, Sn = Math.floor, Be = (e) => ({
  x: e,
  y: e
}), gh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, xh = {
  start: "end",
  end: "start"
};
function oo(e, n, t) {
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
function Vo(e) {
  return e === "x" ? "y" : "x";
}
function Wo(e) {
  return e === "y" ? "height" : "width";
}
const bh = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ve(e) {
  return bh.has(Ze(e)) ? "y" : "x";
}
function Bo(e) {
  return Vo(Ve(e));
}
function yh(e, n, t) {
  t === void 0 && (t = !1);
  const r = It(e), o = Bo(e), i = Wo(o);
  let a = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[i] > n.floating[i] && (a = Fn(a)), [a, Fn(a)];
}
function wh(e) {
  const n = Fn(e);
  return [io(e), n, io(n)];
}
function io(e) {
  return e.replace(/start|end/g, (n) => xh[n]);
}
const xa = ["left", "right"], ba = ["right", "left"], Ch = ["top", "bottom"], Eh = ["bottom", "top"];
function Sh(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? ba : xa : n ? xa : ba;
    case "left":
    case "right":
      return n ? Ch : Eh;
    default:
      return [];
  }
}
function kh(e, n, t, r) {
  const o = It(e);
  let i = Sh(Ze(e), t === "start", r);
  return o && (i = i.map((a) => a + "-" + o), n && (i = i.concat(i.map(io)))), i;
}
function Fn(e) {
  return e.replace(/left|right|bottom|top/g, (n) => gh[n]);
}
function _h(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function sc(e) {
  return typeof e != "number" ? _h(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function zn(e) {
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
function ya(e, n, t) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Ve(n), a = Bo(n), s = Wo(a), c = Ze(n), u = i === "y", p = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
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
  switch (It(n)) {
    case "start":
      h[a] -= m * (t && u ? -1 : 1);
      break;
    case "end":
      h[a] += m * (t && u ? -1 : 1);
      break;
  }
  return h;
}
const Rh = async (e, n, t) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = t, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let u = await a.getElementRects({
    reference: e,
    floating: n,
    strategy: o
  }), {
    x: p,
    y: f
  } = ya(u, r, c), m = r, h = {}, x = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: g,
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
      middlewareData: h,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: n
      }
    });
    p = w ?? p, f = E ?? f, h = {
      ...h,
      [g]: {
        ...h[g],
        ...S
      }
    }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (u = C.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: n,
      strategy: o
    }) : C.rects), {
      x: p,
      y: f
    } = ya(u, m, c)), v = -1);
  }
  return {
    x: p,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: h
  };
};
async function Jt(e, n) {
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
    boundary: u = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = Ke(n, e), x = sc(h), g = s[m ? f === "floating" ? "reference" : "floating" : f], y = zn(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(g))) == null || t ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: p,
    strategy: c
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
  }, C = zn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: E,
    strategy: c
  }) : w);
  return {
    top: (y.top - C.top + x.top) / S.y,
    bottom: (C.bottom - y.bottom + x.bottom) / S.y,
    left: (y.left - C.left + x.left) / S.x,
    right: (C.right - y.right + x.right) / S.x
  };
}
const jh = (e) => ({
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
      element: u,
      padding: p = 0
    } = Ke(e, n) || {};
    if (u == null)
      return {};
    const f = sc(p), m = {
      x: t,
      y: r
    }, h = Bo(o), x = Wo(h), v = await a.getDimensions(u), g = h === "y", y = g ? "top" : "left", w = g ? "bottom" : "right", E = g ? "clientHeight" : "clientWidth", S = i.reference[x] + i.reference[h] - m[h] - i.floating[x], C = m[h] - i.reference[h], D = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let P = D ? D[E] : 0;
    (!P || !await (a.isElement == null ? void 0 : a.isElement(D))) && (P = s.floating[E] || i.floating[x]);
    const j = S / 2 - C / 2, I = P / 2 - v[x] / 2 - 1, B = st(f[y], I), J = st(f[w], I), q = B, U = P - v[x] - J, H = P / 2 - v[x] / 2 + j, Q = oo(q, H, U), $ = !c.arrow && It(o) != null && H !== Q && i.reference[x] / 2 - (H < q ? B : J) - v[x] / 2 < 0, ee = $ ? H < q ? H - q : H - U : 0;
    return {
      [h]: m[h] + ee,
      data: {
        [h]: Q,
        centerOffset: H - Q - ee,
        ...$ && {
          alignmentOffset: ee
        }
      },
      reset: $
    };
  }
}), Ph = function(e) {
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
        elements: u
      } = n, {
        mainAxis: p = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: v = !0,
        ...g
      } = Ke(e, n);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const y = Ze(o), w = Ve(s), E = Ze(s) === s, S = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), C = m || (E || !v ? [Fn(s)] : wh(s)), D = x !== "none";
      !m && D && C.push(...kh(s, v, x, S));
      const P = [s, ...C], j = await Jt(n, g), I = [];
      let B = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (p && I.push(j[y]), f) {
        const H = yh(o, a, S);
        I.push(j[H[0]], j[H[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: I
      }], !I.every((H) => H <= 0)) {
        var J, q;
        const H = (((J = i.flip) == null ? void 0 : J.index) || 0) + 1, Q = P[H];
        if (Q && (!(f === "alignment" ? w !== Ve(Q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((R) => Ve(R.placement) === w ? R.overflows[0] > 0 : !0)))
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
          switch (h) {
            case "bestFit": {
              var U;
              const ee = (U = B.filter((R) => {
                if (D) {
                  const M = Ve(R.placement);
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
function wa(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function Ca(e) {
  return hh.some((n) => e[n] >= 0);
}
const Ah = function(e) {
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
          const i = await Jt(n, {
            ...o,
            elementContext: "reference"
          }), a = wa(i, t.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Ca(a)
            }
          };
        }
        case "escaped": {
          const i = await Jt(n, {
            ...o,
            altBoundary: !0
          }), a = wa(i, t.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Ca(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, cc = /* @__PURE__ */ new Set(["left", "top"]);
async function Th(e, n) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Ze(t), s = It(t), c = Ve(t) === "y", u = cc.has(a) ? -1 : 1, p = i && c ? -1 : 1, f = Ke(n, e);
  let {
    mainAxis: m,
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
    y: m * u
  } : {
    x: m * u,
    y: h * p
  };
}
const Oh = function(e) {
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
      } = n, c = await Th(n, e);
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
}, Mh = function(e) {
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
              y: w
            } = g;
            return {
              x: y,
              y: w
            };
          }
        },
        ...c
      } = Ke(e, n), u = {
        x: t,
        y: r
      }, p = await Jt(n, c), f = Ve(Ze(o)), m = Vo(f);
      let h = u[m], x = u[f];
      if (i) {
        const g = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", w = h + p[g], E = h - p[y];
        h = oo(w, h, E);
      }
      if (a) {
        const g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", w = x + p[g], E = x - p[y];
        x = oo(w, x, E);
      }
      const v = s.fn({
        ...n,
        [m]: h,
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
}, Dh = function(e) {
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
        crossAxis: u = !0
      } = Ke(e, n), p = {
        x: t,
        y: r
      }, f = Ve(o), m = Vo(f);
      let h = p[m], x = p[f];
      const v = Ke(s, n), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const E = m === "y" ? "height" : "width", S = i.reference[m] - i.floating[E] + g.mainAxis, C = i.reference[m] + i.reference[E] - g.mainAxis;
        h < S ? h = S : h > C && (h = C);
      }
      if (u) {
        var y, w;
        const E = m === "y" ? "width" : "height", S = cc.has(Ze(o)), C = i.reference[f] - i.floating[E] + (S && ((y = a.offset) == null ? void 0 : y[f]) || 0) + (S ? 0 : g.crossAxis), D = i.reference[f] + i.reference[E] + (S ? 0 : ((w = a.offset) == null ? void 0 : w[f]) || 0) - (S ? g.crossAxis : 0);
        x < C ? x = C : x > D && (x = D);
      }
      return {
        [m]: h,
        [f]: x
      };
    }
  };
}, Nh = function(e) {
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
        ...u
      } = Ke(e, n), p = await Jt(n, u), f = Ze(o), m = It(o), h = Ve(o) === "y", {
        width: x,
        height: v
      } = i.floating;
      let g, y;
      f === "top" || f === "bottom" ? (g = f, y = m === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = f, g = m === "end" ? "top" : "bottom");
      const w = v - p.top - p.bottom, E = x - p.left - p.right, S = st(v - p[g], w), C = st(x - p[y], E), D = !n.middlewareData.shift;
      let P = S, j = C;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (j = E), (r = n.middlewareData.shift) != null && r.enabled.y && (P = w), D && !m) {
        const B = Ae(p.left, 0), J = Ae(p.right, 0), q = Ae(p.top, 0), U = Ae(p.bottom, 0);
        h ? j = x - 2 * (B !== 0 || J !== 0 ? B + J : Ae(p.left, p.right)) : P = v - 2 * (q !== 0 || U !== 0 ? q + U : Ae(p.top, p.bottom));
      }
      await c({
        ...n,
        availableWidth: j,
        availableHeight: P
      });
      const I = await a.getDimensions(s.floating);
      return x !== I.width || v !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function or() {
  return typeof window < "u";
}
function Lt(e) {
  return lc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Te(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Ge(e) {
  var n;
  return (n = (lc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function lc(e) {
  return or() ? e instanceof Node || e instanceof Te(e).Node : !1;
}
function Ne(e) {
  return or() ? e instanceof Element || e instanceof Te(e).Element : !1;
}
function Ue(e) {
  return or() ? e instanceof HTMLElement || e instanceof Te(e).HTMLElement : !1;
}
function Ea(e) {
  return !or() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Te(e).ShadowRoot;
}
const Ih = /* @__PURE__ */ new Set(["inline", "contents"]);
function an(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: r,
    display: o
  } = Ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !Ih.has(o);
}
const Lh = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Fh(e) {
  return Lh.has(Lt(e));
}
const zh = [":popover-open", ":modal"];
function ir(e) {
  return zh.some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
const $h = ["transform", "translate", "scale", "rotate", "perspective"], Vh = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Wh = ["paint", "layout", "strict", "content"];
function Ho(e) {
  const n = Uo(), t = Ne(e) ? Ie(e) : e;
  return $h.some((r) => t[r] ? t[r] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || Vh.some((r) => (t.willChange || "").includes(r)) || Wh.some((r) => (t.contain || "").includes(r));
}
function Bh(e) {
  let n = ct(e);
  for (; Ue(n) && !Ot(n); ) {
    if (Ho(n))
      return n;
    if (ir(n))
      return null;
    n = ct(n);
  }
  return null;
}
function Uo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Hh = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ot(e) {
  return Hh.has(Lt(e));
}
function Ie(e) {
  return Te(e).getComputedStyle(e);
}
function ar(e) {
  return Ne(e) ? {
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
    Ea(e) && e.host || // Fallback.
    Ge(e)
  );
  return Ea(n) ? n.host : n;
}
function dc(e) {
  const n = ct(e);
  return Ot(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ue(n) && an(n) ? n : dc(n);
}
function Qt(e, n, t) {
  var r;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const o = dc(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Te(o);
  if (i) {
    const s = ao(a);
    return n.concat(a, a.visualViewport || [], an(o) ? o : [], s && t ? Qt(s) : []);
  }
  return n.concat(o, Qt(o, [], t));
}
function ao(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function uc(e) {
  const n = Ie(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const o = Ue(e), i = o ? e.offsetWidth : t, a = o ? e.offsetHeight : r, s = Ln(t) !== i || Ln(r) !== a;
  return s && (t = i, r = a), {
    width: t,
    height: r,
    $: s
  };
}
function Go(e) {
  return Ne(e) ? e : e.contextElement;
}
function jt(e) {
  const n = Go(e);
  if (!Ue(n))
    return Be(1);
  const t = n.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = uc(n);
  let a = (i ? Ln(t.width) : t.width) / r, s = (i ? Ln(t.height) : t.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Uh = /* @__PURE__ */ Be(0);
function pc(e) {
  const n = Te(e);
  return !Uo() || !n.visualViewport ? Uh : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Gh(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Te(e) ? !1 : n;
}
function vt(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), i = Go(e);
  let a = Be(1);
  n && (r ? Ne(r) && (a = jt(r)) : a = jt(e));
  const s = Gh(i, t, r) ? pc(i) : Be(0);
  let c = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, p = o.width / a.x, f = o.height / a.y;
  if (i) {
    const m = Te(i), h = r && Ne(r) ? Te(r) : r;
    let x = m, v = ao(x);
    for (; v && r && h !== x; ) {
      const g = jt(v), y = v.getBoundingClientRect(), w = Ie(v), E = y.left + (v.clientLeft + parseFloat(w.paddingLeft)) * g.x, S = y.top + (v.clientTop + parseFloat(w.paddingTop)) * g.y;
      c *= g.x, u *= g.y, p *= g.x, f *= g.y, c += E, u += S, x = Te(v), v = ao(x);
    }
  }
  return zn({
    width: p,
    height: f,
    x: c,
    y: u
  });
}
function sr(e, n) {
  const t = ar(e).scrollLeft;
  return n ? n.left + t : vt(Ge(e)).left + t;
}
function fc(e, n) {
  const t = e.getBoundingClientRect(), r = t.left + n.scrollLeft - sr(e, t), o = t.top + n.scrollTop;
  return {
    x: r,
    y: o
  };
}
function qh(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Ge(r), s = n ? ir(n.floating) : !1;
  if (r === a || s && i)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Be(1);
  const p = Be(0), f = Ue(r);
  if ((f || !f && !i) && ((Lt(r) !== "body" || an(a)) && (c = ar(r)), Ue(r))) {
    const h = vt(r);
    u = jt(r), p.x = h.x + r.clientLeft, p.y = h.y + r.clientTop;
  }
  const m = a && !f && !i ? fc(a, c) : Be(0);
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - c.scrollLeft * u.x + p.x + m.x,
    y: t.y * u.y - c.scrollTop * u.y + p.y + m.y
  };
}
function Yh(e) {
  return Array.from(e.getClientRects());
}
function Kh(e) {
  const n = Ge(e), t = ar(e), r = e.ownerDocument.body, o = Ae(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), i = Ae(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -t.scrollLeft + sr(e);
  const s = -t.scrollTop;
  return Ie(r).direction === "rtl" && (a += Ae(n.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
const Sa = 25;
function Zh(e, n) {
  const t = Te(e), r = Ge(e), o = t.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const p = Uo();
    (!p || p && n === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  const u = sr(r);
  if (u <= 0) {
    const p = r.ownerDocument, f = p.body, m = getComputedStyle(f), h = p.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, x = Math.abs(r.clientWidth - f.clientWidth - h);
    x <= Sa && (i -= x);
  } else u <= Sa && (i += u);
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
const Xh = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Jh(e, n) {
  const t = vt(e, !0, n === "fixed"), r = t.top + e.clientTop, o = t.left + e.clientLeft, i = Ue(e) ? jt(e) : Be(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, c = o * i.x, u = r * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: u
  };
}
function ka(e, n, t) {
  let r;
  if (n === "viewport")
    r = Zh(e, t);
  else if (n === "document")
    r = Kh(Ge(e));
  else if (Ne(n))
    r = Jh(n, t);
  else {
    const o = pc(e);
    r = {
      x: n.x - o.x,
      y: n.y - o.y,
      width: n.width,
      height: n.height
    };
  }
  return zn(r);
}
function mc(e, n) {
  const t = ct(e);
  return t === n || !Ne(t) || Ot(t) ? !1 : Ie(t).position === "fixed" || mc(t, n);
}
function Qh(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let r = Qt(e, [], !1).filter((s) => Ne(s) && Lt(s) !== "body"), o = null;
  const i = Ie(e).position === "fixed";
  let a = i ? ct(e) : e;
  for (; Ne(a) && !Ot(a); ) {
    const s = Ie(a), c = Ho(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && Xh.has(o.position) || an(a) && !c && mc(e, a)) ? r = r.filter((p) => p !== a) : o = s, a = ct(a);
  }
  return n.set(e, r), r;
}
function eg(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...t === "clippingAncestors" ? ir(n) ? [] : Qh(n, this._c) : [].concat(t), r], s = a[0], c = a.reduce((u, p) => {
    const f = ka(n, p, o);
    return u.top = Ae(f.top, u.top), u.right = st(f.right, u.right), u.bottom = st(f.bottom, u.bottom), u.left = Ae(f.left, u.left), u;
  }, ka(n, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function tg(e) {
  const {
    width: n,
    height: t
  } = uc(e);
  return {
    width: n,
    height: t
  };
}
function ng(e, n, t) {
  const r = Ue(n), o = Ge(n), i = t === "fixed", a = vt(e, !0, i, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Be(0);
  function u() {
    c.x = sr(o);
  }
  if (r || !r && !i)
    if ((Lt(n) !== "body" || an(o)) && (s = ar(n)), r) {
      const h = vt(n, !0, i, n);
      c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
    } else o && u();
  i && !r && o && u();
  const p = o && !r && !i ? fc(o, s) : Be(0), f = a.left + s.scrollLeft - c.x - p.x, m = a.top + s.scrollTop - c.y - p.y;
  return {
    x: f,
    y: m,
    width: a.width,
    height: a.height
  };
}
function Br(e) {
  return Ie(e).position === "static";
}
function _a(e, n) {
  if (!Ue(e) || Ie(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Ge(e) === t && (t = t.ownerDocument.body), t;
}
function vc(e, n) {
  const t = Te(e);
  if (ir(e))
    return t;
  if (!Ue(e)) {
    let o = ct(e);
    for (; o && !Ot(o); ) {
      if (Ne(o) && !Br(o))
        return o;
      o = ct(o);
    }
    return t;
  }
  let r = _a(e, n);
  for (; r && Fh(r) && Br(r); )
    r = _a(r, n);
  return r && Ot(r) && Br(r) && !Ho(r) ? t : r || Bh(e) || t;
}
const rg = async function(e) {
  const n = this.getOffsetParent || vc, t = this.getDimensions, r = await t(e.floating);
  return {
    reference: ng(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function og(e) {
  return Ie(e).direction === "rtl";
}
const ig = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qh,
  getDocumentElement: Ge,
  getClippingRect: eg,
  getOffsetParent: vc,
  getElementRects: rg,
  getClientRects: Yh,
  getDimensions: tg,
  getScale: jt,
  isElement: Ne,
  isRTL: og
};
function hc(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function ag(e, n) {
  let t = null, r;
  const o = Ge(e);
  function i() {
    var s;
    clearTimeout(r), (s = t) == null || s.disconnect(), t = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const u = e.getBoundingClientRect(), {
      left: p,
      top: f,
      width: m,
      height: h
    } = u;
    if (s || n(), !m || !h)
      return;
    const x = Sn(f), v = Sn(o.clientWidth - (p + m)), g = Sn(o.clientHeight - (f + h)), y = Sn(p), E = {
      rootMargin: -x + "px " + -v + "px " + -g + "px " + -y + "px",
      threshold: Ae(0, st(1, c)) || 1
    };
    let S = !0;
    function C(D) {
      const P = D[0].intersectionRatio;
      if (P !== c) {
        if (!S)
          return a();
        P ? a(!1, P) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      P === 1 && !hc(u, e.getBoundingClientRect()) && a(), S = !1;
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
function sg(e, n, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, u = Go(e), p = o || i ? [...u ? Qt(u) : [], ...Qt(n)] : [];
  p.forEach((y) => {
    o && y.addEventListener("scroll", t, {
      passive: !0
    }), i && y.addEventListener("resize", t);
  });
  const f = u && s ? ag(u, t) : null;
  let m = -1, h = null;
  a && (h = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === u && h && (h.unobserve(n), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var E;
      (E = h) == null || E.observe(n);
    })), t();
  }), u && !c && h.observe(u), h.observe(n));
  let x, v = c ? vt(e) : null;
  c && g();
  function g() {
    const y = vt(e);
    v && !hc(v, y) && t(), v = y, x = requestAnimationFrame(g);
  }
  return t(), () => {
    var y;
    p.forEach((w) => {
      o && w.removeEventListener("scroll", t), i && w.removeEventListener("resize", t);
    }), f?.(), (y = h) == null || y.disconnect(), h = null, c && cancelAnimationFrame(x);
  };
}
const cg = Oh, lg = Mh, dg = Ph, ug = Nh, pg = Ah, Ra = jh, fg = Dh, mg = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ig,
    ...t
  }, i = {
    ...o.platform,
    _c: r
  };
  return Rh(e, n, {
    ...o,
    platform: i
  });
};
var vg = typeof document < "u", hg = function() {
}, Pn = vg ? nd : hg;
function $n(e, n) {
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
        if (!$n(e[r], n[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !$n(e[i], n[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function gc(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ja(e, n) {
  const t = gc(e);
  return Math.round(n * t) / t;
}
function Hr(e) {
  const n = d.useRef(e);
  return Pn(() => {
    n.current = e;
  }), n;
}
function gg(e) {
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
    open: u
  } = e, [p, f] = d.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [m, h] = d.useState(r);
  $n(m, r) || h(r);
  const [x, v] = d.useState(null), [g, y] = d.useState(null), w = d.useCallback((R) => {
    R !== D.current && (D.current = R, v(R));
  }, []), E = d.useCallback((R) => {
    R !== P.current && (P.current = R, y(R));
  }, []), S = i || x, C = a || g, D = d.useRef(null), P = d.useRef(null), j = d.useRef(p), I = c != null, B = Hr(c), J = Hr(o), q = Hr(u), U = d.useCallback(() => {
    if (!D.current || !P.current)
      return;
    const R = {
      placement: n,
      strategy: t,
      middleware: m
    };
    J.current && (R.platform = J.current), mg(D.current, P.current, R).then((M) => {
      const _ = {
        ...M,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: q.current !== !1
      };
      H.current && !$n(j.current, _) && (j.current = _, qn.flushSync(() => {
        f(_);
      }));
    });
  }, [m, n, t, J, q]);
  Pn(() => {
    u === !1 && j.current.isPositioned && (j.current.isPositioned = !1, f((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [u]);
  const H = d.useRef(!1);
  Pn(() => (H.current = !0, () => {
    H.current = !1;
  }), []), Pn(() => {
    if (S && (D.current = S), C && (P.current = C), S && C) {
      if (B.current)
        return B.current(S, C, U);
      U();
    }
  }, [S, C, U, B, I]);
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
    const M = ja($.floating, p.x), _ = ja($.floating, p.y);
    return s ? {
      ...R,
      transform: "translate(" + M + "px, " + _ + "px)",
      ...gc($.floating) >= 1.5 && {
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
const xg = (e) => {
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
      return r && n(r) ? r.current != null ? Ra({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? Ra({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
}, bg = (e, n) => ({
  ...cg(e),
  options: [e, n]
}), yg = (e, n) => ({
  ...lg(e),
  options: [e, n]
}), wg = (e, n) => ({
  ...fg(e),
  options: [e, n]
}), Cg = (e, n) => ({
  ...dg(e),
  options: [e, n]
}), Eg = (e, n) => ({
  ...ug(e),
  options: [e, n]
}), Sg = (e, n) => ({
  ...pg(e),
  options: [e, n]
}), kg = (e, n) => ({
  ...xg(e),
  options: [e, n]
});
var _g = "Arrow", xc = d.forwardRef((e, n) => {
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
xc.displayName = _g;
var Rg = xc;
function jg(e) {
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
          const c = i.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
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
var qo = "Popper", [bc, Ft] = Xe(qo), [Pg, yc] = bc(qo), wc = (e) => {
  const { __scopePopper: n, children: t } = e, [r, o] = d.useState(null);
  return /* @__PURE__ */ l.jsx(Pg, { scope: n, anchor: r, onAnchorChange: o, children: t });
};
wc.displayName = qo;
var Cc = "PopperAnchor", Ec = d.forwardRef(
  (e, n) => {
    const { __scopePopper: t, virtualRef: r, ...o } = e, i = yc(Cc, t), a = d.useRef(null), s = ce(n, a), c = d.useRef(null);
    return d.useEffect(() => {
      const u = c.current;
      c.current = r?.current || a.current, u !== c.current && i.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ l.jsx(se.div, { ...o, ref: s });
  }
);
Ec.displayName = Cc;
var Yo = "PopperContent", [Ag, Tg] = bc(Yo), Sc = d.forwardRef(
  (e, n) => {
    const {
      __scopePopper: t,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: u = [],
      collisionPadding: p = 0,
      sticky: f = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: x,
      ...v
    } = e, g = yc(Yo, t), [y, w] = d.useState(null), E = ce(n, (k) => w(k)), [S, C] = d.useState(null), D = jg(S), P = D?.width ?? 0, j = D?.height ?? 0, I = r + (i !== "center" ? "-" + i : ""), B = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, J = Array.isArray(u) ? u : [u], q = J.length > 0, U = {
      padding: B,
      boundary: J.filter(Mg),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: H, floatingStyles: Q, placement: $, isPositioned: ee, middlewareData: R } = gg({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...k) => sg(...k, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        bg({ mainAxis: o + j, alignmentAxis: a }),
        c && yg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? wg() : void 0,
          ...U
        }),
        c && Cg({ ...U }),
        Eg({
          ...U,
          apply: ({ elements: k, rects: W, availableWidth: Z, availableHeight: F }) => {
            const { width: re, height: T } = W.reference, pe = k.floating.style;
            pe.setProperty("--radix-popper-available-width", `${Z}px`), pe.setProperty("--radix-popper-available-height", `${F}px`), pe.setProperty("--radix-popper-anchor-width", `${re}px`), pe.setProperty("--radix-popper-anchor-height", `${T}px`);
          }
        }),
        S && kg({ element: S, padding: s }),
        Dg({ arrowWidth: P, arrowHeight: j }),
        m && Sg({ strategy: "referenceHidden", ...U })
      ]
    }), [M, _] = Rc($), b = He(x);
    _e(() => {
      ee && b?.();
    }, [ee, b]);
    const A = R.arrow?.x, N = R.arrow?.y, O = R.arrow?.centerOffset !== 0, [G, V] = d.useState();
    return _e(() => {
      y && V(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ l.jsx(
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
        children: /* @__PURE__ */ l.jsx(
          Ag,
          {
            scope: t,
            placedSide: M,
            onArrowChange: C,
            arrowX: A,
            arrowY: N,
            shouldHideArrow: O,
            children: /* @__PURE__ */ l.jsx(
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
Sc.displayName = Yo;
var kc = "PopperArrow", Og = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, _c = d.forwardRef(function(n, t) {
  const { __scopePopper: r, ...o } = n, i = Tg(kc, r), a = Og[i.placedSide];
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
          Rg,
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
_c.displayName = kc;
function Mg(e) {
  return e !== null;
}
var Dg = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    const { placement: t, rects: r, middlewareData: o } = n, a = o.arrow?.centerOffset !== 0, s = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [u, p] = Rc(t), f = { start: "0%", center: "50%", end: "100%" }[p], m = (o.arrow?.x ?? 0) + s / 2, h = (o.arrow?.y ?? 0) + c / 2;
    let x = "", v = "";
    return u === "bottom" ? (x = a ? f : `${m}px`, v = `${-c}px`) : u === "top" ? (x = a ? f : `${m}px`, v = `${r.floating.height + c}px`) : u === "right" ? (x = `${-c}px`, v = a ? f : `${h}px`) : u === "left" && (x = `${r.floating.width + c}px`, v = a ? f : `${h}px`), { data: { x, y: v } };
  }
});
function Rc(e) {
  const [n, t = "center"] = e.split("-");
  return [n, t];
}
var Ko = wc, Zo = Ec, Xo = Sc, Jo = _c;
// @__NO_SIDE_EFFECTS__
function Ng(e) {
  const n = /* @__PURE__ */ Ig(e), t = d.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = d.Children.toArray(i), c = s.find(Fg);
    if (c) {
      const u = c.props.children, p = s.map((f) => f === c ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Ig(e) {
  const n = d.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (d.isValidElement(o)) {
      const a = $g(o), s = zg(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? Je(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Lg = /* @__PURE__ */ Symbol("radix.slottable");
function Fg(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Lg;
}
function zg(e, n) {
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
function $g(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function Vg(e) {
  const n = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
var jc = Object.freeze({
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
}), Wg = "VisuallyHidden", Bg = d.forwardRef(
  (e, n) => /* @__PURE__ */ l.jsx(
    se.span,
    {
      ...e,
      ref: n,
      style: { ...jc, ...e.style }
    }
  )
);
Bg.displayName = Wg;
var Hg = [" ", "Enter", "ArrowUp", "ArrowDown"], Ug = [" ", "Enter"], ht = "Select", [cr, lr, Gg] = zo(ht), [zt] = Xe(ht, [
  Gg,
  Ft
]), dr = Ft(), [qg, lt] = zt(ht), [Yg, Kg] = zt(ht), Pc = (e) => {
  const {
    __scopeSelect: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: a,
    defaultValue: s,
    onValueChange: c,
    dir: u,
    name: p,
    autoComplete: f,
    disabled: m,
    required: h,
    form: x
  } = e, v = dr(n), [g, y] = d.useState(null), [w, E] = d.useState(null), [S, C] = d.useState(!1), D = $o(u), [P, j] = Pt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: ht
  }), [I, B] = Pt({
    prop: a,
    defaultProp: s,
    onChange: c,
    caller: ht
  }), J = d.useRef(null), q = g ? x || !!g.closest("form") : !0, [U, H] = d.useState(/* @__PURE__ */ new Set()), Q = Array.from(U).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ l.jsx(Ko, { ...v, children: /* @__PURE__ */ l.jsxs(
    qg,
    {
      required: h,
      scope: n,
      trigger: g,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: E,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: We(),
      value: I,
      onValueChange: B,
      open: P,
      onOpenChange: j,
      dir: D,
      triggerPointerDownPosRef: J,
      disabled: m,
      children: [
        /* @__PURE__ */ l.jsx(cr.Provider, { scope: n, children: /* @__PURE__ */ l.jsx(
          Yg,
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
        q ? /* @__PURE__ */ l.jsxs(
          el,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: p,
            autoComplete: f,
            value: I,
            onChange: ($) => B($.target.value),
            disabled: m,
            form: x,
            children: [
              I === void 0 ? /* @__PURE__ */ l.jsx("option", { value: "" }) : null,
              Array.from(U)
            ]
          },
          Q
        ) : null
      ]
    }
  ) });
};
Pc.displayName = ht;
var Ac = "SelectTrigger", Tc = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, disabled: r = !1, ...o } = e, i = dr(t), a = lt(Ac, t), s = a.disabled || r, c = ce(n, a.onTriggerChange), u = lr(t), p = d.useRef("touch"), [f, m, h] = nl((v) => {
      const g = u().filter((E) => !E.disabled), y = g.find((E) => E.value === a.value), w = rl(g, v, y);
      w !== void 0 && a.onValueChange(w.value);
    }), x = (v) => {
      s || (a.onOpenChange(!0), h()), v && (a.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ l.jsx(Zo, { asChild: !0, ...i, children: /* @__PURE__ */ l.jsx(
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
        "data-placeholder": tl(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: X(o.onClick, (v) => {
          v.currentTarget.focus(), p.current !== "mouse" && x(v);
        }),
        onPointerDown: X(o.onPointerDown, (v) => {
          p.current = v.pointerType;
          const g = v.target;
          g.hasPointerCapture(v.pointerId) && g.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (x(v), v.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (v) => {
          const g = f.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && m(v.key), !(g && v.key === " ") && Hg.includes(v.key) && (x(), v.preventDefault());
        })
      }
    ) });
  }
);
Tc.displayName = Ac;
var Oc = "SelectValue", Mc = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, children: i, placeholder: a = "", ...s } = e, c = lt(Oc, t), { onValueNodeHasChildrenChange: u } = c, p = i !== void 0, f = ce(n, c.onValueNodeChange);
    return _e(() => {
      u(p);
    }, [u, p]), /* @__PURE__ */ l.jsx(
      se.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: tl(c.value) ? /* @__PURE__ */ l.jsx(l.Fragment, { children: a }) : i
      }
    );
  }
);
Mc.displayName = Oc;
var Zg = "SelectIcon", Dc = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, children: r, ...o } = e;
    return /* @__PURE__ */ l.jsx(se.span, { "aria-hidden": !0, ...o, ref: n, children: r || "▼" });
  }
);
Dc.displayName = Zg;
var Xg = "SelectPortal", Nc = (e) => /* @__PURE__ */ l.jsx(Kn, { asChild: !0, ...e });
Nc.displayName = Xg;
var gt = "SelectContent", Ic = d.forwardRef(
  (e, n) => {
    const t = lt(gt, e.__scopeSelect), [r, o] = d.useState();
    if (_e(() => {
      o(new DocumentFragment());
    }, []), !t.open) {
      const i = r;
      return i ? qn.createPortal(
        /* @__PURE__ */ l.jsx(Lc, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx(cr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ l.jsx(Fc, { ...e, ref: n });
  }
);
Ic.displayName = gt;
var De = 10, [Lc, dt] = zt(gt), Jg = "SelectContentImpl", Qg = /* @__PURE__ */ Ng("SelectContent.RemoveScroll"), Fc = d.forwardRef(
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
      align: u,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: v,
      avoidCollisions: g,
      //
      ...y
    } = e, w = lt(gt, t), [E, S] = d.useState(null), [C, D] = d.useState(null), P = ce(n, (k) => S(k)), [j, I] = d.useState(null), [B, J] = d.useState(
      null
    ), q = lr(t), [U, H] = d.useState(!1), Q = d.useRef(!1);
    d.useEffect(() => {
      if (E) return bo(E);
    }, [E]), xo();
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
    const [_, b] = nl((k) => {
      const W = q().filter((re) => !re.disabled), Z = W.find((re) => re.ref.current === document.activeElement), F = rl(W, k, Z);
      F && setTimeout(() => F.ref.current.focus());
    }), A = d.useCallback(
      (k, W, Z) => {
        const F = !Q.current && !Z;
        (w.value !== void 0 && w.value === W || F) && (I(k), F && (Q.current = !0));
      },
      [w.value]
    ), N = d.useCallback(() => E?.focus(), [E]), O = d.useCallback(
      (k, W, Z) => {
        const F = !Q.current && !Z;
        (w.value !== void 0 && w.value === W || F) && J(k);
      },
      [w.value]
    ), G = r === "popper" ? so : zc, V = G === so ? {
      side: s,
      sideOffset: c,
      align: u,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: v,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ l.jsx(
      Lc,
      {
        scope: t,
        content: E,
        viewport: C,
        onViewportChange: D,
        itemRefCallback: A,
        selectedItem: j,
        onItemLeave: N,
        itemTextRefCallback: O,
        focusSelectedItem: ee,
        selectedItemText: B,
        position: r,
        isPositioned: U,
        searchRef: _,
        children: /* @__PURE__ */ l.jsx(Xn, { as: Qg, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
          Yn,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (k) => {
              k.preventDefault();
            },
            onUnmountAutoFocus: X(o, (k) => {
              w.trigger?.focus({ preventScroll: !0 }), k.preventDefault();
            }),
            children: /* @__PURE__ */ l.jsx(
              rn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (k) => k.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ l.jsx(
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
Fc.displayName = Jg;
var ex = "SelectItemAlignedPosition", zc = d.forwardRef((e, n) => {
  const { __scopeSelect: t, onPlaced: r, ...o } = e, i = lt(gt, t), a = dt(gt, t), [s, c] = d.useState(null), [u, p] = d.useState(null), f = ce(n, (P) => p(P)), m = lr(t), h = d.useRef(!1), x = d.useRef(!0), { viewport: v, selectedItem: g, selectedItemText: y, focusSelectedItem: w } = a, E = d.useCallback(() => {
    if (i.trigger && i.valueNode && s && u && v && g && y) {
      const P = i.trigger.getBoundingClientRect(), j = u.getBoundingClientRect(), I = i.valueNode.getBoundingClientRect(), B = y.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const re = B.left - j.left, T = I.left - re, pe = P.left - T, te = P.width + pe, oe = Math.max(te, j.width), be = window.innerWidth - De, ge = ha(T, [
          De,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(De, be - oe)
        ]);
        s.style.minWidth = te + "px", s.style.left = ge + "px";
      } else {
        const re = j.right - B.right, T = window.innerWidth - I.right - re, pe = window.innerWidth - P.right - T, te = P.width + pe, oe = Math.max(te, j.width), be = window.innerWidth - De, ge = ha(T, [
          De,
          Math.max(De, be - oe)
        ]);
        s.style.minWidth = te + "px", s.style.right = ge + "px";
      }
      const J = m(), q = window.innerHeight - De * 2, U = v.scrollHeight, H = window.getComputedStyle(u), Q = parseInt(H.borderTopWidth, 10), $ = parseInt(H.paddingTop, 10), ee = parseInt(H.borderBottomWidth, 10), R = parseInt(H.paddingBottom, 10), M = Q + $ + U + R + ee, _ = Math.min(g.offsetHeight * 5, M), b = window.getComputedStyle(v), A = parseInt(b.paddingTop, 10), N = parseInt(b.paddingBottom, 10), O = P.top + P.height / 2 - De, G = q - O, V = g.offsetHeight / 2, k = g.offsetTop + V, W = Q + $ + k, Z = M - W;
      if (W <= O) {
        const re = J.length > 0 && g === J[J.length - 1].ref.current;
        s.style.bottom = "0px";
        const T = u.clientHeight - v.offsetTop - v.offsetHeight, pe = Math.max(
          G,
          V + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? N : 0) + T + ee
        ), te = W + pe;
        s.style.height = te + "px";
      } else {
        const re = J.length > 0 && g === J[0].ref.current;
        s.style.top = "0px";
        const pe = Math.max(
          O,
          Q + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? A : 0) + V
        ) + Z;
        s.style.height = pe + "px", v.scrollTop = W - O + v.offsetTop;
      }
      s.style.margin = `${De}px 0`, s.style.minHeight = _ + "px", s.style.maxHeight = q + "px", r?.(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    m,
    i.trigger,
    i.valueNode,
    s,
    u,
    v,
    g,
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
  return /* @__PURE__ */ l.jsx(
    nx,
    {
      scope: t,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: D,
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
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
zc.displayName = ex;
var tx = "SelectPopperPosition", so = d.forwardRef((e, n) => {
  const {
    __scopeSelect: t,
    align: r = "start",
    collisionPadding: o = De,
    ...i
  } = e, a = dr(t);
  return /* @__PURE__ */ l.jsx(
    Xo,
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
so.displayName = tx;
var [nx, Qo] = zt(gt, {}), co = "SelectViewport", $c = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, nonce: r, ...o } = e, i = dt(co, t), a = Qo(co, t), s = ce(n, i.onViewportChange), c = d.useRef(0);
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
      /* @__PURE__ */ l.jsx(cr.Slot, { scope: t, children: /* @__PURE__ */ l.jsx(
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
              const h = Math.abs(c.current - p.scrollTop);
              if (h > 0) {
                const x = window.innerHeight - De * 2, v = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), y = Math.max(v, g);
                if (y < x) {
                  const w = y + h, E = Math.min(x, w), S = w - E;
                  f.style.height = E + "px", f.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, f.style.justifyContent = "flex-end");
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
$c.displayName = co;
var Vc = "SelectGroup", [rx, ox] = zt(Vc), Wc = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = We();
    return /* @__PURE__ */ l.jsx(rx, { scope: t, id: o, children: /* @__PURE__ */ l.jsx(se.div, { role: "group", "aria-labelledby": o, ...r, ref: n }) });
  }
);
Wc.displayName = Vc;
var Bc = "SelectLabel", Hc = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = ox(Bc, t);
    return /* @__PURE__ */ l.jsx(se.div, { id: o.id, ...r, ref: n });
  }
);
Hc.displayName = Bc;
var Vn = "SelectItem", [ix, Uc] = zt(Vn), Gc = d.forwardRef(
  (e, n) => {
    const {
      __scopeSelect: t,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, s = lt(Vn, t), c = dt(Vn, t), u = s.value === r, [p, f] = d.useState(i ?? ""), [m, h] = d.useState(!1), x = ce(
      n,
      (w) => c.itemRefCallback?.(w, r, o)
    ), v = We(), g = d.useRef("touch"), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ l.jsx(
      ix,
      {
        scope: t,
        value: r,
        disabled: o,
        textId: v,
        isSelected: u,
        onItemTextChange: d.useCallback((w) => {
          f((E) => E || (w?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ l.jsx(
          cr.ItemSlot,
          {
            scope: t,
            value: r,
            disabled: o,
            textValue: p,
            children: /* @__PURE__ */ l.jsx(
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
                onFocus: X(a.onFocus, () => h(!0)),
                onBlur: X(a.onBlur, () => h(!1)),
                onClick: X(a.onClick, () => {
                  g.current !== "mouse" && y();
                }),
                onPointerUp: X(a.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: X(a.onPointerDown, (w) => {
                  g.current = w.pointerType;
                }),
                onPointerMove: X(a.onPointerMove, (w) => {
                  g.current = w.pointerType, o ? c.onItemLeave?.() : g.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(a.onPointerLeave, (w) => {
                  w.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: X(a.onKeyDown, (w) => {
                  c.searchRef?.current !== "" && w.key === " " || (Ug.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Gc.displayName = Vn;
var Kt = "SelectItemText", qc = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, ...i } = e, a = lt(Kt, t), s = dt(Kt, t), c = Uc(Kt, t), u = Kg(Kt, t), [p, f] = d.useState(null), m = ce(
      n,
      (y) => f(y),
      c.onItemTextChange,
      (y) => s.itemTextRefCallback?.(y, c.value, c.disabled)
    ), h = p?.textContent, x = d.useMemo(
      () => /* @__PURE__ */ l.jsx("option", { value: c.value, disabled: c.disabled, children: h }, c.value),
      [c.disabled, c.value, h]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = u;
    return _e(() => (v(x), () => g(x)), [v, g, x]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(se.span, { id: c.textId, ...i, ref: m }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? qn.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
qc.displayName = Kt;
var Yc = "SelectItemIndicator", Kc = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return Uc(Yc, t).isSelected ? /* @__PURE__ */ l.jsx(se.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }
);
Kc.displayName = Yc;
var lo = "SelectScrollUpButton", Zc = d.forwardRef((e, n) => {
  const t = dt(lo, e.__scopeSelect), r = Qo(lo, e.__scopeSelect), [o, i] = d.useState(!1), a = ce(n, r.onScrollButtonChange);
  return _e(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const u = c.scrollTop > 0;
        i(u);
      };
      const c = t.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ l.jsx(
    Jc,
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
Zc.displayName = lo;
var uo = "SelectScrollDownButton", Xc = d.forwardRef((e, n) => {
  const t = dt(uo, e.__scopeSelect), r = Qo(uo, e.__scopeSelect), [o, i] = d.useState(!1), a = ce(n, r.onScrollButtonChange);
  return _e(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const u = c.scrollHeight - c.clientHeight, p = Math.ceil(c.scrollTop) < u;
        i(p);
      };
      const c = t.viewport;
      return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ l.jsx(
    Jc,
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
Xc.displayName = uo;
var Jc = d.forwardRef((e, n) => {
  const { __scopeSelect: t, onAutoScroll: r, ...o } = e, i = dt("SelectScrollButton", t), a = d.useRef(null), s = lr(t), c = d.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return d.useEffect(() => () => c(), [c]), _e(() => {
    s().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ l.jsx(
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
        c();
      })
    }
  );
}), ax = "SelectSeparator", Qc = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return /* @__PURE__ */ l.jsx(se.div, { "aria-hidden": !0, ...r, ref: n });
  }
);
Qc.displayName = ax;
var po = "SelectArrow", sx = d.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = dr(t), i = lt(po, t), a = dt(po, t);
    return i.open && a.position === "popper" ? /* @__PURE__ */ l.jsx(Jo, { ...o, ...r, ref: n }) : null;
  }
);
sx.displayName = po;
var cx = "SelectBubbleInput", el = d.forwardRef(
  ({ __scopeSelect: e, value: n, ...t }, r) => {
    const o = d.useRef(null), i = ce(r, o), a = Vg(n);
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
    }, [a, n]), /* @__PURE__ */ l.jsx(
      se.select,
      {
        ...t,
        style: { ...jc, ...t.style },
        ref: i,
        defaultValue: n
      }
    );
  }
);
el.displayName = cx;
function tl(e) {
  return e === "" || e === void 0;
}
function nl(e) {
  const n = He(e), t = d.useRef(""), r = d.useRef(0), o = d.useCallback(
    (a) => {
      const s = t.current + a;
      n(s), (function c(u) {
        t.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(s);
    },
    [n]
  ), i = d.useCallback(() => {
    t.current = "", window.clearTimeout(r.current);
  }, []);
  return d.useEffect(() => () => window.clearTimeout(r.current), []), [t, o, i];
}
function rl(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((u) => u === n[0]) ? n[0] : n, i = t ? e.indexOf(t) : -1;
  let a = lx(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== t));
  const c = a.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== t ? c : void 0;
}
function lx(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var dx = Pc, ux = Tc, px = Mc, fx = Dc, mx = Nc, vx = Ic, hx = $c, gx = Wc, xx = Hc, bx = Gc, yx = qc, wx = Kc, Cx = Zc, Ex = Xc, Sx = Qc;
function kx({ ...e }) {
  return /* @__PURE__ */ l.jsx(dx, { "data-slot": "select", ...e });
}
function My({ ...e }) {
  return /* @__PURE__ */ l.jsx(gx, { "data-slot": "select-group", ...e });
}
function _x({ ...e }) {
  return /* @__PURE__ */ l.jsx(px, { "data-slot": "select-value", ...e });
}
function Rx({
  className: e,
  size: n = "default",
  variant: t = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ l.jsxs(
    ux,
    {
      "data-slot": "select-trigger",
      "data-size": n,
      className: L(
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
        /* @__PURE__ */ l.jsx(fx, { asChild: !0, children: /* @__PURE__ */ l.jsx(
          Ts,
          {
            className: L({
              "size-6 text-gray-300": t === "default",
              "size-4 text-gray-600": t === "ghost"
            })
          }
        ) })
      ]
    }
  );
}
function jx({
  className: e,
  children: n,
  position: t = "popper",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ l.jsx(mx, { children: /* @__PURE__ */ l.jsxs(
    vx,
    {
      "data-slot": "select-content",
      className: L(
        "bg-white font-manrope text-gray-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height)  origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-gray-25 shadow-md",
        t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: t,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ l.jsx(Ax, {}),
        /* @__PURE__ */ l.jsx(
          hx,
          {
            className: L(
              "p-1",
              t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: n
          }
        ),
        /* @__PURE__ */ l.jsx(Tx, {})
      ]
    }
  ) });
}
function Dy({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    xx,
    {
      "data-slot": "select-label",
      className: L("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...n
    }
  );
}
function Px({
  className: e,
  children: n,
  ...t
}) {
  return /* @__PURE__ */ l.jsxs(
    bx,
    {
      "data-slot": "select-item",
      className: L(
        "focus:bg-gray-25 focus:text-blue-hepatica-600 [&_svg:not([class*='text-'])]:text-gray-300 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...t,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(wx, { children: /* @__PURE__ */ l.jsx(To, { className: "size-4" }) }) }),
        /* @__PURE__ */ l.jsx(yx, { children: n })
      ]
    }
  );
}
function Ny({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    Sx,
    {
      "data-slot": "select-separator",
      className: L("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...n
    }
  );
}
function Ax({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    Cx,
    {
      "data-slot": "select-scroll-up-button",
      className: L("flex cursor-default items-center justify-center py-1", e),
      ...n,
      children: /* @__PURE__ */ l.jsx(kf, { className: "size-4" })
    }
  );
}
function Tx({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    Ex,
    {
      "data-slot": "select-scroll-down-button",
      className: L("flex cursor-default items-center justify-center py-1", e),
      ...n,
      children: /* @__PURE__ */ l.jsx(Ts, { className: "size-4" })
    }
  );
}
function Iy({
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
  const u = Math.max(1, Math.ceil(t / Math.max(n, 1))), p = Math.min(Math.max(e, 1), u), f = t === 0 ? 0 : (p - 1) * n + 1, m = t === 0 ? 0 : Math.min(t, p * n), h = !a && p > 1, x = !a && p < u, v = () => {
    h && o(p - 1);
  }, g = () => {
    x && o(p + 1);
  }, y = (w) => {
    Number.isNaN(Number(w)) || i?.(Number(w));
  };
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      "data-slot": "pagination",
      className: L(
        "flex w-full items-center justify-end gap-4 py-3 text-sm text-gray-700",
        "border-t border-gray-50",
        s
      ),
      ...c,
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ l.jsx("span", { className: "font-manrope text-xs text-gray-700", children: "Rows per page:" }),
          /* @__PURE__ */ l.jsx("div", { className: "w-16", children: /* @__PURE__ */ l.jsxs(
            kx,
            {
              disabled: a || !i,
              defaultValue: `${n}`,
              onValueChange: y,
              "data-testid": "pagination--items-per-page",
              children: [
                /* @__PURE__ */ l.jsx(Rx, { variant: "ghost", disabled: a, children: /* @__PURE__ */ l.jsx(_x, { placeholder: "Theme" }) }),
                /* @__PURE__ */ l.jsx(jx, { children: r.map((w) => /* @__PURE__ */ l.jsx(Px, { value: `${w}`, children: w }, w)) })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ l.jsx("p", { "data-slot": "pagination-range", className: "text-xs text-gray-600 whitespace-nowrap", children: t === 0 ? "0 of 0" : `${f} – ${m} of ${t}` }),
          /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-x-1", children: [
            /* @__PURE__ */ l.jsx(
              "button",
              {
                "data-slot": "pagination-prev",
                type: "button",
                onClick: v,
                disabled: !h,
                "aria-label": "Previous page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ l.jsx(Ef, { className: "size-4" })
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
                children: /* @__PURE__ */ l.jsx(Os, { className: "size-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Ly({
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
      className: L(
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
              className: L(
                "pointer-events-none size-4 border border-gray-700 rounded-full flex items-center justify-center",
                {
                  "border-2 border-blue-hepatica-600": e
                }
              ),
              children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: L("size-2 rounded-full bg-transparent", {
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
const Ox = er("bg-white rounded-2xl overflow-hidden flex flex-col w-full", {
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
function Fy({
  title: e,
  children: n,
  footer: t,
  elevation: r = "elevation-0",
  className: o,
  ...i
}) {
  return /* @__PURE__ */ l.jsxs("section", { ...i, className: L(Ox({ elevation: r, className: o })), children: [
    !!e && /* @__PURE__ */ l.jsx("header", { className: "h-15 flex items-center px-8 border-b border-b-gray-25", children: /* @__PURE__ */ l.jsx("h3", { className: "font-manrope font-semibold text-base text-gray-900 leading-5", children: e }) }),
    /* @__PURE__ */ l.jsx("div", { className: "flex flex-col p-4 md:p-8!", children: n }),
    !!t && /* @__PURE__ */ l.jsx("footer", { className: "px-4 md:px-8! py-4 md:py-6! border-t border-t-gray-25", children: t })
  ] });
}
function zy({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "shimmer",
      "aria-hidden": "true",
      className: L(
        "relative overflow-hidden rounded-md",
        "bg-linear-to-r from-gray-50 via-gray-100 to-gray-50",
        "bg-size-[200%_100%] animate-[shimmer_2.5s_ease-in-out_infinite]",
        "h-4 w-full",
        e
      ),
      ...n
    }
  );
}
var ol = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Pa = ie.createContext && /* @__PURE__ */ ie.createContext(ol), Mx = ["attr", "size", "title"];
function Dx(e, n) {
  if (e == null) return {};
  var t = Nx(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Nx(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function Wn() {
  return Wn = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Wn.apply(this, arguments);
}
function Aa(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Bn(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Aa(Object(t), !0).forEach(function(r) {
      Ix(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Aa(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Ix(e, n, t) {
  return n = Lx(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Lx(e) {
  var n = Fx(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Fx(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function il(e) {
  return e && e.map((n, t) => /* @__PURE__ */ ie.createElement(n.tag, Bn({
    key: t
  }, n.attr), il(n.child)));
}
function zx(e) {
  return (n) => /* @__PURE__ */ ie.createElement($x, Wn({
    attr: Bn({}, e.attr)
  }, n), il(e.child));
}
function $x(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, a = Dx(e, Mx), s = o || t.size || "1em", c;
    return t.className && (c = t.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ ie.createElement("svg", Wn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, a, {
      className: c,
      style: Bn(Bn({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ ie.createElement("title", null, i), e.children);
  };
  return Pa !== void 0 ? /* @__PURE__ */ ie.createElement(Pa.Consumer, null, (t) => n(t)) : n(ol);
}
function Vx(e) {
  return zx({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM22.0104 8.81412L20.5962 7.3999L16 11.9961L20.5962 16.5923L22.0104 15.1781L18.8284 11.9961L22.0104 8.81412Z" }, child: [] }] })(e);
}
const Wx = new URL("data:image/svg+xml,%3csvg%20width='247'%20height='980'%20viewBox='0%200%20247%20980'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9467_2027)'%3e%3crect%20width='247'%20height='983'%20fill='black'/%3e%3cg%20opacity='0.3'%20filter='url(%23filter0_f_9467_2027)'%3e%3cellipse%20cx='-129.135'%20cy='1014.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20-129.135%201014.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.3'%20filter='url(%23filter1_f_9467_2027)'%3e%3cellipse%20cx='450.01'%20cy='1514.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20450.01%201514.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter2_f_9467_2027)'%3e%3cellipse%20cx='119.407'%20cy='-84.3658'%20rx='364.442'%20ry='193.158'%20fill='%230B495D'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter3_f_9467_2027)'%3e%3cellipse%20cx='399.478'%20cy='-0.360779'%20rx='364.442'%20ry='193.158'%20transform='rotate(30%20399.478%20-0.360779)'%20fill='%23BF3535'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter4_f_9467_2027)'%3e%3cellipse%20cx='-312.773'%20cy='835'%20rx='434.874'%20ry='485.827'%20transform='rotate(-136.998%20-312.773%20835)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter5_f_9467_2027)'%3e%3cellipse%20cx='336.608'%20cy='1039.65'%20rx='553.734'%20ry='293.484'%20transform='rotate(7.13051%20336.608%201039.65)'%20fill='%23660000'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_9467_2027'%20x='-691.145'%20y='128.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_9467_2027'%20x='-112'%20y='628.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_9467_2027'%20x='-453.839'%20y='-486.327'%20width='1146.49'%20height='803.922'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_9467_2027'%20x='-139.475'%20y='-456.526'%20width='1077.91'%20height='912.33'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_9467_2027'%20x='-1172.05'%20y='-27.8358'%20width='1718.56'%20height='1725.67'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_9467_2027'%20x='-531.326'%20y='423.111'%20width='1735.87'%20height='1233.08'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='158.628'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cclipPath%20id='clip0_9467_2027'%3e%3crect%20width='247'%20height='983'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", import.meta.url).href;
function $y({ children: e }) {
  const [n, t] = $e(!1), r = ye(() => t((i) => !i), []), o = ye(() => t(!1), []);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        onClick: r,
        className: L(
          "fixed left-4 top-4 z-40 inline-flex size-12 items-center justify-center",
          "rounded-lg bg-black",
          "lg:hidden"
          // hide the button when viewport >= 912px
        ),
        "aria-label": n ? "Close sidebar" : "Open sidebar",
        children: /* @__PURE__ */ l.jsx(Vx, { className: "size-6 text-white" })
      }
    ),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: L(
          "fixed inset-0 z-30 bg-black/40 transition-opacity sidebar:hidden lg:hidden",
          n ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: o
      }
    ),
    /* @__PURE__ */ l.jsxs(
      "aside",
      {
        className: L(
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
              src: Wx,
              alt: "",
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
            }
          ),
          /* @__PURE__ */ l.jsxs("div", { className: "w-full grid grid-rows-[112px_1fr]", children: [
            /* @__PURE__ */ l.jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center gap-y-2", children: [
              /* @__PURE__ */ l.jsx(ac, { className: "size-10.5" }),
              /* @__PURE__ */ l.jsx("h1", { className: "font-manrope font-nromal text-base text-white tracking-[0.04em]", children: "MercySeat" })
            ] }) }),
            /* @__PURE__ */ l.jsx("div", { children: e })
          ] })
        ]
      }
    )
  ] });
}
function Bx({
  index: e,
  label: n,
  current: t,
  completed: r,
  disabled: o = !1,
  onClick: i
}) {
  return /* @__PURE__ */ l.jsxs("li", { className: "flex flex-col justify-start items-center gap-4 w-fit px-4 bg-gray-25 relative", children: [
    /* @__PURE__ */ l.jsx(
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
        className: L(
          "w-8 h-8 rounded-full flex justify-center items-center",
          "border border-gray-50 bg-gray-25",
          {
            "bg-blue-hepatica-600 text-white border-none hover:bg-blue-hepatica-700": t || r,
            "cursor-not-allowed": o
          }
        ),
        children: r && !t ? /* @__PURE__ */ l.jsx(To, { className: "size-4 text-white", "aria-hidden": "true" }) : /* @__PURE__ */ l.jsx(
          "span",
          {
            className: L("font-semibold text-sm text-gray-300", {
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
        className: L(
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
function Vy({
  steps: e,
  currentId: n,
  onStepChange: t,
  className: r
}) {
  const o = e.findIndex((i) => i.id === n);
  return /* @__PURE__ */ l.jsx(
    "nav",
    {
      "aria-label": "Steps",
      "data-slot": "steps",
      className: L("w-full", r),
      children: /* @__PURE__ */ l.jsxs("ol", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ l.jsx("span", { className: "absolute border-b border-b-gray-50 top-1/2 left-0 right-0" }),
        e.map((i, a) => {
          const s = o !== -1 && a < o;
          return /* @__PURE__ */ l.jsx(
            Bx,
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
var Ur = "rovingFocusGroup.onEntryFocus", Hx = { bubbles: !1, cancelable: !0 }, sn = "RovingFocusGroup", [fo, al, Ux] = zo(sn), [Gx, sl] = Xe(
  sn,
  [Ux]
), [qx, Yx] = Gx(sn), cl = d.forwardRef(
  (e, n) => /* @__PURE__ */ l.jsx(fo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(fo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(Kx, { ...e, ref: n }) }) })
);
cl.displayName = sn;
var Kx = d.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: t,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: u,
    preventScrollOnEntryFocus: p = !1,
    ...f
  } = e, m = d.useRef(null), h = ce(n, m), x = $o(i), [v, g] = Pt({
    prop: a,
    defaultProp: s ?? null,
    onChange: c,
    caller: sn
  }), [y, w] = d.useState(!1), E = He(u), S = al(t), C = d.useRef(!1), [D, P] = d.useState(0);
  return d.useEffect(() => {
    const j = m.current;
    if (j)
      return j.addEventListener(Ur, E), () => j.removeEventListener(Ur, E);
  }, [E]), /* @__PURE__ */ l.jsx(
    qx,
    {
      scope: t,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: v,
      onItemFocus: d.useCallback(
        (j) => g(j),
        [g]
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
      children: /* @__PURE__ */ l.jsx(
        se.div,
        {
          tabIndex: y || D === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: X(e.onFocus, (j) => {
            const I = !C.current;
            if (j.target === j.currentTarget && I && !y) {
              const B = new CustomEvent(Ur, Hx);
              if (j.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const J = S().filter(($) => $.focusable), q = J.find(($) => $.active), U = J.find(($) => $.id === v), Q = [q, U, ...J].filter(
                  Boolean
                ).map(($) => $.ref.current);
                ul(Q, p);
              }
            }
            C.current = !1;
          }),
          onBlur: X(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), ll = "RovingFocusGroupItem", dl = d.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: a,
      ...s
    } = e, c = We(), u = i || c, p = Yx(ll, t), f = p.currentTabStopId === u, m = al(t), { onFocusableItemAdd: h, onFocusableItemRemove: x, currentTabStopId: v } = p;
    return d.useEffect(() => {
      if (r)
        return h(), () => x();
    }, [r, h, x]), /* @__PURE__ */ l.jsx(
      fo.ItemSlot,
      {
        scope: t,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ l.jsx(
          se.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": p.orientation,
            ...s,
            ref: n,
            onMouseDown: X(e.onMouseDown, (g) => {
              r ? p.onItemFocus(u) : g.preventDefault();
            }),
            onFocus: X(e.onFocus, () => p.onItemFocus(u)),
            onKeyDown: X(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = Jx(g, p.orientation, p.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let E = m().filter((S) => S.focusable).map((S) => S.ref.current);
                if (y === "last") E.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && E.reverse();
                  const S = E.indexOf(g.currentTarget);
                  E = p.loop ? Qx(E, S + 1) : E.slice(S + 1);
                }
                setTimeout(() => ul(E));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: v != null }) : a
          }
        )
      }
    );
  }
);
dl.displayName = ll;
var Zx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Xx(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Jx(e, n, t) {
  const r = Xx(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Zx[r];
}
function ul(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function Qx(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var e0 = cl, t0 = dl;
// @__NO_SIDE_EFFECTS__
function n0(e) {
  const n = /* @__PURE__ */ r0(e), t = d.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = d.Children.toArray(i), c = s.find(i0);
    if (c) {
      const u = c.props.children, p = s.map((f) => f === c ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ l.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function r0(e) {
  const n = d.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (d.isValidElement(o)) {
      const a = s0(o), s = a0(i, o.props);
      return o.type !== d.Fragment && (s.ref = r ? Je(r, a) : a), d.cloneElement(o, s);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var o0 = /* @__PURE__ */ Symbol("radix.slottable");
function i0(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === o0;
}
function a0(e, n) {
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
function s0(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var mo = ["Enter", " "], c0 = ["ArrowDown", "PageUp", "Home"], pl = ["ArrowUp", "PageDown", "End"], l0 = [...c0, ...pl], d0 = {
  ltr: [...mo, "ArrowRight"],
  rtl: [...mo, "ArrowLeft"]
}, u0 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, cn = "Menu", [en, p0, f0] = zo(cn), [bt, fl] = Xe(cn, [
  f0,
  Ft,
  sl
]), ur = Ft(), ml = sl(), [m0, yt] = bt(cn), [v0, ln] = bt(cn), vl = (e) => {
  const { __scopeMenu: n, open: t = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, s = ur(n), [c, u] = d.useState(null), p = d.useRef(!1), f = He(i), m = $o(o);
  return d.useEffect(() => {
    const h = () => {
      p.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => p.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l.jsx(Ko, { ...s, children: /* @__PURE__ */ l.jsx(
    m0,
    {
      scope: n,
      open: t,
      onOpenChange: f,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ l.jsx(
        v0,
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
vl.displayName = cn;
var h0 = "MenuAnchor", ei = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = ur(t);
    return /* @__PURE__ */ l.jsx(Zo, { ...o, ...r, ref: n });
  }
);
ei.displayName = h0;
var ti = "MenuPortal", [g0, hl] = bt(ti, {
  forceMount: void 0
}), gl = (e) => {
  const { __scopeMenu: n, forceMount: t, children: r, container: o } = e, i = yt(ti, n);
  return /* @__PURE__ */ l.jsx(g0, { scope: n, forceMount: t, children: /* @__PURE__ */ l.jsx(Qe, { present: t || i.open, children: /* @__PURE__ */ l.jsx(Kn, { asChild: !0, container: o, children: r }) }) });
};
gl.displayName = ti;
var Oe = "MenuContent", [x0, ni] = bt(Oe), xl = d.forwardRef(
  (e, n) => {
    const t = hl(Oe, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, i = yt(Oe, e.__scopeMenu), a = ln(Oe, e.__scopeMenu);
    return /* @__PURE__ */ l.jsx(en.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(Qe, { present: r || i.open, children: /* @__PURE__ */ l.jsx(en.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ l.jsx(b0, { ...o, ref: n }) : /* @__PURE__ */ l.jsx(y0, { ...o, ref: n }) }) }) });
  }
), b0 = d.forwardRef(
  (e, n) => {
    const t = yt(Oe, e.__scopeMenu), r = d.useRef(null), o = ce(n, r);
    return d.useEffect(() => {
      const i = r.current;
      if (i) return bo(i);
    }, []), /* @__PURE__ */ l.jsx(
      ri,
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
), y0 = d.forwardRef((e, n) => {
  const t = yt(Oe, e.__scopeMenu);
  return /* @__PURE__ */ l.jsx(
    ri,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), w0 = /* @__PURE__ */ n0("MenuContent.ScrollLock"), ri = d.forwardRef(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: u,
      onPointerDownOutside: p,
      onFocusOutside: f,
      onInteractOutside: m,
      onDismiss: h,
      disableOutsideScroll: x,
      ...v
    } = e, g = yt(Oe, t), y = ln(Oe, t), w = ur(t), E = ml(t), S = p0(t), [C, D] = d.useState(null), P = d.useRef(null), j = ce(n, P, g.onContentChange), I = d.useRef(0), B = d.useRef(""), J = d.useRef(0), q = d.useRef(null), U = d.useRef("right"), H = d.useRef(0), Q = x ? Xn : d.Fragment, $ = x ? { as: w0, allowPinchZoom: !0 } : void 0, ee = (M) => {
      const _ = B.current + M, b = S().filter((k) => !k.disabled), A = document.activeElement, N = b.find((k) => k.ref.current === A)?.textValue, O = b.map((k) => k.textValue), G = M0(O, _, N), V = b.find((k) => k.textValue === G)?.ref.current;
      (function k(W) {
        B.current = W, window.clearTimeout(I.current), W !== "" && (I.current = window.setTimeout(() => k(""), 1e3));
      })(_), V && setTimeout(() => V.focus());
    };
    d.useEffect(() => () => window.clearTimeout(I.current), []), xo();
    const R = d.useCallback((M) => U.current === q.current?.side && N0(M, q.current?.area), []);
    return /* @__PURE__ */ l.jsx(
      x0,
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
        children: /* @__PURE__ */ l.jsx(Q, { ...$, children: /* @__PURE__ */ l.jsx(
          Yn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: X(i, (M) => {
              M.preventDefault(), P.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ l.jsx(
              rn,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: u,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: m,
                onDismiss: h,
                children: /* @__PURE__ */ l.jsx(
                  e0,
                  {
                    asChild: !0,
                    ...E,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: D,
                    onEntryFocus: X(c, (M) => {
                      y.isUsingKeyboardRef.current || M.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l.jsx(
                      Xo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Dl(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...v,
                        ref: j,
                        style: { outline: "none", ...v.style },
                        onKeyDown: X(v.onKeyDown, (M) => {
                          const b = M.target.closest("[data-radix-menu-content]") === M.currentTarget, A = M.ctrlKey || M.altKey || M.metaKey, N = M.key.length === 1;
                          b && (M.key === "Tab" && M.preventDefault(), !A && N && ee(M.key));
                          const O = P.current;
                          if (M.target !== O || !l0.includes(M.key)) return;
                          M.preventDefault();
                          const V = S().filter((k) => !k.disabled).map((k) => k.ref.current);
                          pl.includes(M.key) && V.reverse(), T0(V);
                        }),
                        onBlur: X(e.onBlur, (M) => {
                          M.currentTarget.contains(M.target) || (window.clearTimeout(I.current), B.current = "");
                        }),
                        onPointerMove: X(
                          e.onPointerMove,
                          tn((M) => {
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
xl.displayName = Oe;
var C0 = "MenuGroup", oi = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ l.jsx(se.div, { role: "group", ...r, ref: n });
  }
);
oi.displayName = C0;
var E0 = "MenuLabel", bl = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ l.jsx(se.div, { ...r, ref: n });
  }
);
bl.displayName = E0;
var Hn = "MenuItem", Ta = "menu.itemSelect", pr = d.forwardRef(
  (e, n) => {
    const { disabled: t = !1, onSelect: r, ...o } = e, i = d.useRef(null), a = ln(Hn, e.__scopeMenu), s = ni(Hn, e.__scopeMenu), c = ce(n, i), u = d.useRef(!1), p = () => {
      const f = i.current;
      if (!t && f) {
        const m = new CustomEvent(Ta, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Ta, (h) => r?.(h), { once: !0 }), Ma(f, m), m.defaultPrevented ? u.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ l.jsx(
      yl,
      {
        ...o,
        ref: c,
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
          t || m && f.key === " " || mo.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
pr.displayName = Hn;
var yl = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, disabled: r = !1, textValue: o, ...i } = e, a = ni(Hn, t), s = ml(t), c = d.useRef(null), u = ce(n, c), [p, f] = d.useState(!1), [m, h] = d.useState("");
    return d.useEffect(() => {
      const x = c.current;
      x && h((x.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ l.jsx(
      en.ItemSlot,
      {
        scope: t,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ l.jsx(t0, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ l.jsx(
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
              tn((x) => {
                r ? a.onItemLeave(x) : (a.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: X(
              e.onPointerLeave,
              tn((x) => a.onItemLeave(x))
            ),
            onFocus: X(e.onFocus, () => f(!0)),
            onBlur: X(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), S0 = "MenuCheckboxItem", wl = d.forwardRef(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ l.jsx(_l, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ l.jsx(
      pr,
      {
        role: "menuitemcheckbox",
        "aria-checked": Un(t) ? "mixed" : t,
        ...o,
        ref: n,
        "data-state": ai(t),
        onSelect: X(
          o.onSelect,
          () => r?.(Un(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
wl.displayName = S0;
var Cl = "MenuRadioGroup", [k0, _0] = bt(
  Cl,
  { value: void 0, onValueChange: () => {
  } }
), El = d.forwardRef(
  (e, n) => {
    const { value: t, onValueChange: r, ...o } = e, i = He(r);
    return /* @__PURE__ */ l.jsx(k0, { scope: e.__scopeMenu, value: t, onValueChange: i, children: /* @__PURE__ */ l.jsx(oi, { ...o, ref: n }) });
  }
);
El.displayName = Cl;
var Sl = "MenuRadioItem", kl = d.forwardRef(
  (e, n) => {
    const { value: t, ...r } = e, o = _0(Sl, e.__scopeMenu), i = t === o.value;
    return /* @__PURE__ */ l.jsx(_l, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ l.jsx(
      pr,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: n,
        "data-state": ai(i),
        onSelect: X(
          r.onSelect,
          () => o.onValueChange?.(t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
kl.displayName = Sl;
var ii = "MenuItemIndicator", [_l, R0] = bt(
  ii,
  { checked: !1 }
), Rl = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, forceMount: r, ...o } = e, i = R0(ii, t);
    return /* @__PURE__ */ l.jsx(
      Qe,
      {
        present: r || Un(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          se.span,
          {
            ...o,
            ref: n,
            "data-state": ai(i.checked)
          }
        )
      }
    );
  }
);
Rl.displayName = ii;
var j0 = "MenuSeparator", jl = d.forwardRef(
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
jl.displayName = j0;
var P0 = "MenuArrow", Pl = d.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = ur(t);
    return /* @__PURE__ */ l.jsx(Jo, { ...o, ...r, ref: n });
  }
);
Pl.displayName = P0;
var A0 = "MenuSub", [Wy, Al] = bt(A0), Zt = "MenuSubTrigger", Tl = d.forwardRef(
  (e, n) => {
    const t = yt(Zt, e.__scopeMenu), r = ln(Zt, e.__scopeMenu), o = Al(Zt, e.__scopeMenu), i = ni(Zt, e.__scopeMenu), a = d.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = i, u = { __scopeMenu: e.__scopeMenu }, p = d.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return d.useEffect(() => p, [p]), d.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [s, c]), /* @__PURE__ */ l.jsx(ei, { asChild: !0, ...u, children: /* @__PURE__ */ l.jsx(
      yl,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": o.contentId,
        "data-state": Dl(t.open),
        ...e,
        ref: Je(n, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: X(
          e.onPointerMove,
          tn((f) => {
            i.onItemEnter(f), !f.defaultPrevented && !e.disabled && !t.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              t.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: X(
          e.onPointerLeave,
          tn((f) => {
            p();
            const m = t.content?.getBoundingClientRect();
            if (m) {
              const h = t.content?.dataset.side, x = h === "right", v = x ? -5 : 5, g = m[x ? "left" : "right"], y = m[x ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + v, y: f.clientY },
                  { x: g, y: m.top },
                  { x: y, y: m.top },
                  { x: y, y: m.bottom },
                  { x: g, y: m.bottom }
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
        onKeyDown: X(e.onKeyDown, (f) => {
          const m = i.searchRef.current !== "";
          e.disabled || m && f.key === " " || d0[r.dir].includes(f.key) && (t.onOpenChange(!0), t.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Tl.displayName = Zt;
var Ol = "MenuSubContent", Ml = d.forwardRef(
  (e, n) => {
    const t = hl(Oe, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, i = yt(Oe, e.__scopeMenu), a = ln(Oe, e.__scopeMenu), s = Al(Ol, e.__scopeMenu), c = d.useRef(null), u = ce(n, c);
    return /* @__PURE__ */ l.jsx(en.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(Qe, { present: r || i.open, children: /* @__PURE__ */ l.jsx(en.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(
      ri,
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
          a.isUsingKeyboardRef.current && c.current?.focus(), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: X(e.onFocusOutside, (p) => {
          p.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: X(e.onEscapeKeyDown, (p) => {
          a.onClose(), p.preventDefault();
        }),
        onKeyDown: X(e.onKeyDown, (p) => {
          const f = p.currentTarget.contains(p.target), m = u0[a.dir].includes(p.key);
          f && m && (i.onOpenChange(!1), s.trigger?.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ml.displayName = Ol;
function Dl(e) {
  return e ? "open" : "closed";
}
function Un(e) {
  return e === "indeterminate";
}
function ai(e) {
  return Un(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function T0(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function O0(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
function M0(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((u) => u === n[0]) ? n[0] : n, i = t ? e.indexOf(t) : -1;
  let a = O0(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((u) => u !== t));
  const c = a.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== t ? c : void 0;
}
function D0(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
    const s = n[i], c = n[a], u = s.x, p = s.y, f = c.x, m = c.y;
    p > r != m > r && t < (f - u) * (r - p) / (m - p) + u && (o = !o);
  }
  return o;
}
function N0(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return D0(t, n);
}
function tn(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var I0 = vl, L0 = ei, F0 = gl, z0 = xl, $0 = oi, V0 = bl, W0 = pr, B0 = wl, H0 = El, U0 = kl, G0 = Rl, q0 = jl, Y0 = Pl, K0 = Tl, Z0 = Ml, fr = "DropdownMenu", [X0] = Xe(
  fr,
  [fl]
), Re = fl(), [J0, Nl] = X0(fr), Il = (e) => {
  const {
    __scopeDropdownMenu: n,
    children: t,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, c = Re(n), u = d.useRef(null), [p, f] = Pt({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: fr
  });
  return /* @__PURE__ */ l.jsx(
    J0,
    {
      scope: n,
      triggerId: We(),
      triggerRef: u,
      contentId: We(),
      open: p,
      onOpenChange: f,
      onOpenToggle: d.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: /* @__PURE__ */ l.jsx(I0, { ...c, open: p, onOpenChange: f, dir: r, modal: s, children: t })
    }
  );
};
Il.displayName = fr;
var Ll = "DropdownMenuTrigger", Fl = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, disabled: r = !1, ...o } = e, i = Nl(Ll, t), a = Re(t);
    return /* @__PURE__ */ l.jsx(L0, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
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
Fl.displayName = Ll;
var Q0 = "DropdownMenuPortal", zl = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = Re(n);
  return /* @__PURE__ */ l.jsx(F0, { ...r, ...t });
};
zl.displayName = Q0;
var $l = "DropdownMenuContent", Vl = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Nl($l, t), i = Re(t), a = d.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      z0,
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
          const c = s.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, p = c.button === 2 || u;
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
Vl.displayName = $l;
var eb = "DropdownMenuGroup", tb = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ l.jsx($0, { ...o, ...r, ref: n });
  }
);
tb.displayName = eb;
var nb = "DropdownMenuLabel", rb = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ l.jsx(V0, { ...o, ...r, ref: n });
  }
);
rb.displayName = nb;
var ob = "DropdownMenuItem", Wl = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ l.jsx(W0, { ...o, ...r, ref: n });
  }
);
Wl.displayName = ob;
var ib = "DropdownMenuCheckboxItem", ab = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(B0, { ...o, ...r, ref: n });
});
ab.displayName = ib;
var sb = "DropdownMenuRadioGroup", cb = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(H0, { ...o, ...r, ref: n });
});
cb.displayName = sb;
var lb = "DropdownMenuRadioItem", db = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(U0, { ...o, ...r, ref: n });
});
db.displayName = lb;
var ub = "DropdownMenuItemIndicator", pb = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(G0, { ...o, ...r, ref: n });
});
pb.displayName = ub;
var fb = "DropdownMenuSeparator", mb = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(q0, { ...o, ...r, ref: n });
});
mb.displayName = fb;
var vb = "DropdownMenuArrow", hb = d.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ l.jsx(Y0, { ...o, ...r, ref: n });
  }
);
hb.displayName = vb;
var gb = "DropdownMenuSubTrigger", xb = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(K0, { ...o, ...r, ref: n });
});
xb.displayName = gb;
var bb = "DropdownMenuSubContent", yb = d.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ l.jsx(
    Z0,
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
yb.displayName = bb;
var wb = Il, Cb = Fl, Eb = zl, Sb = Vl, kb = Wl;
function By({ children: e, items: n, className: t, align: r = "end", side: o = "bottom" }) {
  return /* @__PURE__ */ l.jsxs(wb, { children: [
    /* @__PURE__ */ l.jsx(Cb, { asChild: !0, children: e }),
    /* @__PURE__ */ l.jsx(Eb, { children: /* @__PURE__ */ l.jsx(
      Sb,
      {
        className: L(
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
          kb,
          {
            className: L(
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
function Hy({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ l.jsx(
    "table",
    {
      "data-slot": "table",
      className: L("w-full caption-bottom text-sm", e),
      ...n
    }
  ) });
}
function Uy({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: L("border-b-2 border-b-gray-50", e),
      ...n
    }
  );
}
function Gy({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: L("[&_tr:last-child]:border-0", e),
      ...n
    }
  );
}
function qy({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: L(
        "bg-white border-t border-t-gray-50 font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...n
    }
  );
}
function Yy({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: L(
        "hover:bg-blue-hepatica-100 data-[state=selected]:bg-blue-hepatica-100 border-b border-b-gray-50 transition-colors",
        e
      ),
      ...n
    }
  );
}
function Ky({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: L(
        "font-manrope text-sm text-gray-900 tracking-[0.02em] h-12 px-4 text-left align-middle font-semibold whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function Zy({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: L(
        "px-4 py-2 font-manrope align-middle whitespace-nowrap text-sm tracking-[0.02em] text-gray-700 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function Xy({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "caption",
    {
      "data-slot": "table-caption",
      className: L("text-muted-foreground mt-4 text-sm", e),
      ...n
    }
  );
}
function Jy({ className: e, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: L(
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
var _b = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Rb(e) {
  const n = ({ children: t }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = _b, n;
}
var jb = Object.freeze({
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
}), Pb = "VisuallyHidden", Bl = d.forwardRef(
  (e, n) => /* @__PURE__ */ l.jsx(
    se.span,
    {
      ...e,
      ref: n,
      style: { ...jb, ...e.style }
    }
  )
);
Bl.displayName = Pb;
var Ab = Bl, [mr] = Xe("Tooltip", [
  Ft
]), vr = Ft(), Hl = "TooltipProvider", Tb = 700, vo = "tooltip.open", [Ob, si] = mr(Hl), Ul = (e) => {
  const {
    __scopeTooltip: n,
    delayDuration: t = Tb,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, a = d.useRef(!0), s = d.useRef(!1), c = d.useRef(0);
  return d.useEffect(() => {
    const u = c.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ l.jsx(
    Ob,
    {
      scope: n,
      isOpenDelayedRef: a,
      delayDuration: t,
      onOpen: d.useCallback(() => {
        window.clearTimeout(c.current), a.current = !1;
      }, []),
      onClose: d.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
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
Ul.displayName = Hl;
var nn = "Tooltip", [Mb, hr] = mr(nn), Gl = (e) => {
  const {
    __scopeTooltip: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    disableHoverableContent: a,
    delayDuration: s
  } = e, c = si(nn, e.__scopeTooltip), u = vr(n), [p, f] = d.useState(null), m = We(), h = d.useRef(0), x = a ?? c.disableHoverableContent, v = s ?? c.delayDuration, g = d.useRef(!1), [y, w] = Pt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (P) => {
      P ? (c.onOpen(), document.dispatchEvent(new CustomEvent(vo))) : c.onClose(), i?.(P);
    },
    caller: nn
  }), E = d.useMemo(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [y]), S = d.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, g.current = !1, w(!0);
  }, [w]), C = d.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, w(!1);
  }, [w]), D = d.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, w(!0), h.current = 0;
    }, v);
  }, [v, w]);
  return d.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ l.jsx(Ko, { ...u, children: /* @__PURE__ */ l.jsx(
    Mb,
    {
      scope: n,
      contentId: m,
      open: y,
      stateAttribute: E,
      trigger: p,
      onTriggerChange: f,
      onTriggerEnter: d.useCallback(() => {
        c.isOpenDelayedRef.current ? D() : S();
      }, [c.isOpenDelayedRef, D, S]),
      onTriggerLeave: d.useCallback(() => {
        x ? C() : (window.clearTimeout(h.current), h.current = 0);
      }, [C, x]),
      onOpen: S,
      onClose: C,
      disableHoverableContent: x,
      children: t
    }
  ) });
};
Gl.displayName = nn;
var ho = "TooltipTrigger", ql = d.forwardRef(
  (e, n) => {
    const { __scopeTooltip: t, ...r } = e, o = hr(ho, t), i = si(ho, t), a = vr(t), s = d.useRef(null), c = ce(n, s, o.onTriggerChange), u = d.useRef(!1), p = d.useRef(!1), f = d.useCallback(() => u.current = !1, []);
    return d.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ l.jsx(Zo, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      se.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
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
ql.displayName = ho;
var Db = "TooltipPortal", [Qy, Nb] = mr(Db, {
  forceMount: void 0
}), Mt = "TooltipContent", Yl = d.forwardRef(
  (e, n) => {
    const t = Nb(Mt, e.__scopeTooltip), { forceMount: r = t.forceMount, side: o = "top", ...i } = e, a = hr(Mt, e.__scopeTooltip);
    return /* @__PURE__ */ l.jsx(Qe, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ l.jsx(Kl, { side: o, ...i, ref: n }) : /* @__PURE__ */ l.jsx(Ib, { side: o, ...i, ref: n }) });
  }
), Ib = d.forwardRef((e, n) => {
  const t = hr(Mt, e.__scopeTooltip), r = si(Mt, e.__scopeTooltip), o = d.useRef(null), i = ce(n, o), [a, s] = d.useState(null), { trigger: c, onClose: u } = t, p = o.current, { onPointerInTransitChange: f } = r, m = d.useCallback(() => {
    s(null), f(!1);
  }, [f]), h = d.useCallback(
    (x, v) => {
      const g = x.currentTarget, y = { x: x.clientX, y: x.clientY }, w = Vb(y, g.getBoundingClientRect()), E = Wb(y, w), S = Bb(v.getBoundingClientRect()), C = Ub([...E, ...S]);
      s(C), f(!0);
    },
    [f]
  );
  return d.useEffect(() => () => m(), [m]), d.useEffect(() => {
    if (c && p) {
      const x = (g) => h(g, p), v = (g) => h(g, c);
      return c.addEventListener("pointerleave", x), p.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", x), p.removeEventListener("pointerleave", v);
      };
    }
  }, [c, p, h, m]), d.useEffect(() => {
    if (a) {
      const x = (v) => {
        const g = v.target, y = { x: v.clientX, y: v.clientY }, w = c?.contains(g) || p?.contains(g), E = !Hb(y, a);
        w ? m() : E && (m(), u());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [c, p, a, u, m]), /* @__PURE__ */ l.jsx(Kl, { ...e, ref: i });
}), [Lb, Fb] = mr(nn, { isInside: !1 }), zb = /* @__PURE__ */ Rb("TooltipContent"), Kl = d.forwardRef(
  (e, n) => {
    const {
      __scopeTooltip: t,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: a,
      ...s
    } = e, c = hr(Mt, t), u = vr(t), { onClose: p } = c;
    return d.useEffect(() => (document.addEventListener(vo, p), () => document.removeEventListener(vo, p)), [p]), d.useEffect(() => {
      if (c.trigger) {
        const f = (m) => {
          m.target?.contains(c.trigger) && p();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [c.trigger, p]), /* @__PURE__ */ l.jsx(
      rn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ l.jsxs(
          Xo,
          {
            "data-state": c.stateAttribute,
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
              /* @__PURE__ */ l.jsx(zb, { children: r }),
              /* @__PURE__ */ l.jsx(Lb, { scope: t, isInside: !0, children: /* @__PURE__ */ l.jsx(Ab, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Yl.displayName = Mt;
var Zl = "TooltipArrow", $b = d.forwardRef(
  (e, n) => {
    const { __scopeTooltip: t, ...r } = e, o = vr(t);
    return Fb(
      Zl,
      t
    ).isInside ? null : /* @__PURE__ */ l.jsx(Jo, { ...o, ...r, ref: n });
  }
);
$b.displayName = Zl;
function Vb(e, n) {
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
function Wb(e, n, t = 5) {
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
function Bb(e) {
  const { top: n, right: t, bottom: r, left: o } = e;
  return [
    { x: o, y: n },
    { x: t, y: n },
    { x: t, y: r },
    { x: o, y: r }
  ];
}
function Hb(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
    const s = n[i], c = n[a], u = s.x, p = s.y, f = c.x, m = c.y;
    p > r != m > r && t < (f - u) * (r - p) / (m - p) + u && (o = !o);
  }
  return o;
}
function Ub(e) {
  const n = e.slice();
  return n.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), Gb(n);
}
function Gb(e) {
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
function e1({
  delayDuration: e = 0,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    Ul,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...n
    }
  );
}
function t1({ ...e }) {
  return /* @__PURE__ */ l.jsx(Gl, { "data-slot": "tooltip", ...e });
}
function n1({ ...e }) {
  return /* @__PURE__ */ l.jsx(ql, { "data-slot": "tooltip-trigger", ...e });
}
function r1({
  className: e,
  sideOffset: n = 6,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    Yl,
    {
      "data-slot": "tooltip-content",
      sideOffset: n,
      className: L(
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
const qb = er("font-manrope text-gray-900", {
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
}), Yb = {
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
function o1(e) {
  const { as: n, variant: t, className: r, children: o, ...i } = e, a = t ?? "body-md", s = n ?? Yb[a];
  return /* @__PURE__ */ l.jsx(
    s,
    {
      className: L(qb({ variant: a }), r),
      ...i,
      children: o
    }
  );
}
export {
  Qb as AlertDialog,
  Jf as AnalyticsIcon,
  Qf as AnnouncementIcon,
  ey as Badge,
  ty as Breadcrumb,
  ry as BreadcrumbItem,
  oy as BreadcrumbLink,
  ny as BreadcrumbList,
  iy as BreadcrumbPage,
  ay as BreadcrumbSeparator,
  Mo as Button,
  sy as Checkbox,
  em as ChurchIcon,
  tm as ClassIcon,
  nm as CrownIcon,
  cy as Dialog,
  Xb as DialogAction,
  Jb as DialogCancel,
  dy as DialogClose,
  uy as DialogContent,
  vy as DialogDescription,
  fy as DialogFooter,
  py as DialogHeader,
  Ff as DialogOverlay,
  Lf as DialogPortal,
  my as DialogTitle,
  ly as DialogTrigger,
  rm as EventIcon,
  hy as Form,
  yy as FormControl,
  wy as FormDescription,
  gy as FormField,
  xy as FormItem,
  by as FormLabel,
  Cy as FormMessage,
  om as GiftIcon,
  im as HomeIcon,
  Ey as Icon,
  Sy as ImageUploader,
  Uv as Input,
  _y as InputOTP,
  Ry as InputOTPGroup,
  Py as InputOTPSeparator,
  jy as InputOTPSlot,
  $s as Label,
  am as ListIcon,
  sm as LockClosedIcon,
  cm as LockOpenIcon,
  ac as Logo,
  Ay as LogoLockup,
  Ty as MediaUploader,
  Oy as MenuItem,
  lm as MinistryIcon,
  Iy as Pagination,
  ky as PasswordInput,
  dm as PodcastIcon,
  Ly as RadioButton,
  Fy as Section,
  kx as Select,
  jx as SelectContent,
  My as SelectGroup,
  Px as SelectItem,
  Dy as SelectLabel,
  Tx as SelectScrollDownButton,
  Ax as SelectScrollUpButton,
  Ny as SelectSeparator,
  Rx as SelectTrigger,
  _x as SelectValue,
  um as SeriesIcon,
  pm as SermonIcon,
  zy as Shimmer,
  $y as Sidebar,
  Vy as Stepper,
  fm as SubscriptionIcon,
  By as SuspendedMenu,
  Hy as Table,
  Gy as TableBody,
  Xy as TableCaption,
  Zy as TableCell,
  qy as TableFooter,
  Ky as TableHead,
  Uy as TableHeader,
  Yy as TableRow,
  Jy as Textarea,
  t1 as Tooltip,
  r1 as TooltipContent,
  e1 as TooltipProvider,
  n1 as TooltipTrigger,
  o1 as Typography,
  mm as VideoIcon,
  ff as badgeVariants,
  If as buttonVariants,
  qb as typographyVariants,
  nr as useFormField
};
