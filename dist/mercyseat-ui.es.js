import * as u from "react";
import ae, { useState as Me, forwardRef as sr, createElement as po, useLayoutEffect as zu, useContext as fo, createContext as cs, useId as $u, useMemo as dt, useRef as Je, useReducer as Wu, useEffect as yt, useCallback as xe, useImperativeHandle as Vu, Fragment as Bu } from "react";
import * as cr from "react-dom";
import Hu from "react-dom";
function Io(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var kn = { exports: {} }, Jt = {};
var Ta;
function Uu() {
  if (Ta) return Jt;
  Ta = 1;
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
  return Jt.Fragment = n, Jt.jsx = t, Jt.jsxs = t, Jt;
}
var Qt = {};
var Oa;
function Gu() {
  return Oa || (Oa = 1, process.env.NODE_ENV !== "production" && (function() {
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
        case A:
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
            var M = y.render;
            return y = y.displayName, y || (y = M.displayName || M.name || "", y = y !== "" ? "ForwardRef(" + y + ")" : "ForwardRef"), y;
          case P:
            return M = y.displayName || null, M !== null ? M : e(y.type) || "Memo";
          case L:
            M = y._payload, y = y._init;
            try {
              return e(y(M));
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
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var I = M.error, O = typeof Symbol == "function" && Symbol.toStringTag && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return I.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), n(y);
      }
    }
    function r(y) {
      if (y === v) return "<>";
      if (typeof y == "object" && y !== null && y.$$typeof === L)
        return "<...>";
      try {
        var M = e(y);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var y = Y.A;
      return y === null ? null : y.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(y) {
      if (U.call(y, "key")) {
        var M = Object.getOwnPropertyDescriptor(y, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return y.key !== void 0;
    }
    function s(y, M) {
      function I() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
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
    function d(y, M, I, O, G, W) {
      var k = I.ref;
      return y = {
        $$typeof: x,
        type: y,
        key: M,
        props: I,
        _owner: O
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
    function p(y, M, I, O, G, W) {
      var k = M.children;
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
      if (U.call(M, "key")) {
        k = e(y);
        var V = Object.keys(M).filter(function(F) {
          return F !== "key";
        });
        O = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", _[k + O] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          k,
          V,
          k
        ), _[k + O] = !0);
      }
      if (k = null, I !== void 0 && (t(I), k = "" + I), i(M) && (t(M.key), k = "" + M.key), "key" in M) {
        I = {};
        for (var Z in M)
          Z !== "key" && (I[Z] = M[Z]);
      } else I = M;
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
    var g = ae, x = /* @__PURE__ */ Symbol.for("react.transitional.element"), h = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), S = /* @__PURE__ */ Symbol.for("react.consumer"), E = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), A = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), J = /* @__PURE__ */ Symbol.for("react.client.reference"), Y = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, H = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(y) {
        return y();
      }
    };
    var $, ee = {}, R = g.react_stack_bottom_frame.bind(
      g,
      a
    )(), N = Q(r(a)), _ = {};
    Qt.Fragment = v, Qt.jsx = function(y, M, I) {
      var O = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return p(
        y,
        M,
        I,
        !1,
        O ? Error("react-stack-top-frame") : R,
        O ? Q(r(y)) : N
      );
    }, Qt.jsxs = function(y, M, I) {
      var O = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return p(
        y,
        M,
        I,
        !0,
        O ? Error("react-stack-top-frame") : R,
        O ? Q(r(y)) : N
      );
    };
  })()), Qt;
}
var Da;
function Yu() {
  return Da || (Da = 1, process.env.NODE_ENV === "production" ? kn.exports = Uu() : kn.exports = Gu()), kn.exports;
}
var c = Yu();
function qu(e, n) {
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
function tt(e, n = []) {
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
  return o.scopeName = e, [r, Ku(o, ...n)];
}
function Ku(...e) {
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
function Aa(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function nt(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const a = Aa(o, n);
      return !t && typeof a == "function" && (t = !0), a;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Aa(e[o], null);
        }
      };
  };
}
function ce(...e) {
  return u.useCallback(nt(...e), e);
}
function X(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e?.(o), t === !1 || !o.defaultPrevented)
      return n?.(o);
  };
}
var Pe = globalThis?.document ? u.useLayoutEffect : () => {
}, Zu = u[" useId ".trim().toString()] || (() => {
}), Xu = 0;
function Le(e) {
  const [n, t] = u.useState(Zu());
  return Pe(() => {
    t((r) => r ?? String(Xu++));
  }, [e]), e || (n ? `radix-${n}` : "");
}
var Ju = u[" useInsertionEffect ".trim().toString()] || Pe;
function wt({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, a, i] = Qu({
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
        const f = ed(p) ? p(e) : p;
        f !== e && i.current?.(f);
      } else
        a(p);
    },
    [s, e, a, i]
  );
  return [l, d];
}
function Qu({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = u.useState(e), o = u.useRef(t), a = u.useRef(n);
  return Ju(() => {
    a.current = n;
  }, [n]), u.useEffect(() => {
    o.current !== t && (a.current?.(t), o.current = t);
  }, [t, o]), [t, r, a];
}
function ed(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function td(e) {
  const n = /* @__PURE__ */ nd(e), t = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(od);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function nd(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (u.isValidElement(o)) {
      const i = id(o), s = ad(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? nt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var rd = /* @__PURE__ */ Symbol("radix.slottable");
function od(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === rd;
}
function ad(e, n) {
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
function id(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var sd = [
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
], se = sd.reduce((e, n) => {
  const t = /* @__PURE__ */ td(`Primitive.${n}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? t : n;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function ls(e, n) {
  e && cr.flushSync(() => e.dispatchEvent(n));
}
function We(e) {
  const n = u.useRef(e);
  return u.useEffect(() => {
    n.current = e;
  }), u.useMemo(() => (...t) => n.current?.(...t), []);
}
function cd(e, n = globalThis?.document) {
  const t = We(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && t(o);
    };
    return n.addEventListener("keydown", r, { capture: !0 }), () => n.removeEventListener("keydown", r, { capture: !0 });
  }, [t, n]);
}
var ld = "DismissableLayer", mo = "dismissableLayer.update", ud = "dismissableLayer.pointerDownOutside", dd = "dismissableLayer.focusOutside", Na, us = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), gn = u.forwardRef(
  (e, n) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, d = u.useContext(us), [p, f] = u.useState(null), m = p?.ownerDocument ?? globalThis?.document, [, g] = u.useState({}), x = ce(n, (j) => f(j)), h = Array.from(d.layers), [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(v), b = p ? h.indexOf(p) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, E = b >= w, C = md((j) => {
      const P = j.target, L = [...d.branches].some((B) => B.contains(P));
      !E || L || (o?.(j), i?.(j), j.defaultPrevented || s?.());
    }, m), A = hd((j) => {
      const P = j.target;
      [...d.branches].some((B) => B.contains(P)) || (a?.(j), i?.(j), j.defaultPrevented || s?.());
    }, m);
    return cd((j) => {
      b === d.layers.size - 1 && (r?.(j), !j.defaultPrevented && s && (j.preventDefault(), s()));
    }, m), u.useEffect(() => {
      if (p)
        return t && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Na = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), Ia(), () => {
          t && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Na);
        };
    }, [p, m, t, d]), u.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), Ia());
    }, [p, d]), u.useEffect(() => {
      const j = () => g({});
      return document.addEventListener(mo, j), () => document.removeEventListener(mo, j);
    }, []), /* @__PURE__ */ c.jsx(
      se.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: S ? E ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: X(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: X(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
gn.displayName = ld;
var pd = "DismissableLayerBranch", fd = u.forwardRef((e, n) => {
  const t = u.useContext(us), r = u.useRef(null), o = ce(n, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return t.branches.add(a), () => {
        t.branches.delete(a);
      };
  }, [t.branches]), /* @__PURE__ */ c.jsx(se.div, { ...e, ref: o });
});
fd.displayName = pd;
function md(e, n = globalThis?.document) {
  const t = We(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          ds(
            ud,
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
function hd(e, n = globalThis?.document) {
  const t = We(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && ds(dd, t, { originalEvent: a }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", o), () => n.removeEventListener("focusin", o);
  }, [n, t]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ia() {
  const e = new CustomEvent(mo);
  document.dispatchEvent(e);
}
function ds(e, n, t, { discrete: r }) {
  const o = t.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  n && o.addEventListener(e, n, { once: !0 }), r ? ls(o, a) : o.dispatchEvent(a);
}
var Fr = "focusScope.autoFocusOnMount", zr = "focusScope.autoFocusOnUnmount", La = { bubbles: !1, cancelable: !0 }, gd = "FocusScope", lr = u.forwardRef((e, n) => {
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
        s.contains(E) ? f.current = E : ut(f.current, { select: !0 });
      }, v = function(S) {
        if (g.paused || !s) return;
        const E = S.relatedTarget;
        E !== null && (s.contains(E) || ut(f.current, { select: !0 }));
      }, w = function(S) {
        if (document.activeElement === document.body)
          for (const C of S)
            C.removedNodes.length > 0 && ut(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", v);
      const b = new MutationObserver(w);
      return s && b.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", v), b.disconnect();
      };
    }
  }, [r, s, g.paused]), u.useEffect(() => {
    if (s) {
      za.add(g);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const w = new CustomEvent(Fr, La);
        s.addEventListener(Fr, d), s.dispatchEvent(w), w.defaultPrevented || (vd(Cd(ps(s)), { select: !0 }), document.activeElement === h && ut(s));
      }
      return () => {
        s.removeEventListener(Fr, d), setTimeout(() => {
          const w = new CustomEvent(zr, La);
          s.addEventListener(zr, p), s.dispatchEvent(w), w.defaultPrevented || ut(h ?? document.body, { select: !0 }), s.removeEventListener(zr, p), za.remove(g);
        }, 0);
      };
    }
  }, [s, d, p, g]);
  const x = u.useCallback(
    (h) => {
      if (!t && !r || g.paused) return;
      const v = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (v && w) {
        const b = h.currentTarget, [S, E] = xd(b);
        S && E ? !h.shiftKey && w === E ? (h.preventDefault(), t && ut(S, { select: !0 })) : h.shiftKey && w === S && (h.preventDefault(), t && ut(E, { select: !0 })) : w === b && h.preventDefault();
      }
    },
    [t, r, g.paused]
  );
  return /* @__PURE__ */ c.jsx(se.div, { tabIndex: -1, ...i, ref: m, onKeyDown: x });
});
lr.displayName = gd;
function vd(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const r of e)
    if (ut(r, { select: n }), document.activeElement !== t) return;
}
function xd(e) {
  const n = ps(e), t = Fa(n, e), r = Fa(n.reverse(), e);
  return [t, r];
}
function ps(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function Fa(e, n) {
  for (const t of e)
    if (!bd(t, { upTo: n })) return t;
}
function bd(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function yd(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ut(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== t && yd(e) && n && e.select();
  }
}
var za = wd();
function wd() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && t?.pause(), e = $a(e, n), e.unshift(n);
    },
    remove(n) {
      e = $a(e, n), e[0]?.resume();
    }
  };
}
function $a(e, n) {
  const t = [...e], r = t.indexOf(n);
  return r !== -1 && t.splice(r, 1), t;
}
function Cd(e) {
  return e.filter((n) => n.tagName !== "A");
}
var Sd = "Portal", ur = u.forwardRef((e, n) => {
  const { container: t, ...r } = e, [o, a] = u.useState(!1);
  Pe(() => a(!0), []);
  const i = t || o && globalThis?.document?.body;
  return i ? Hu.createPortal(/* @__PURE__ */ c.jsx(se.div, { ...r, ref: n }), i) : null;
});
ur.displayName = Sd;
function Ed(e, n) {
  return u.useReducer((t, r) => n[t][r] ?? t, e);
}
var rt = (e) => {
  const { present: n, children: t } = e, r = kd(n), o = typeof t == "function" ? t({ present: r.isPresent }) : u.Children.only(t), a = ce(r.ref, _d(o));
  return typeof t == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
rt.displayName = "Presence";
function kd(e) {
  const [n, t] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = Ed(i, {
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
    const d = _n(r.current);
    a.current = s === "mounted" ? d : "none";
  }, [s]), Pe(() => {
    const d = r.current, p = o.current;
    if (p !== e) {
      const m = a.current, g = _n(d);
      e ? l("MOUNT") : g === "none" || d?.display === "none" ? l("UNMOUNT") : l(p && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Pe(() => {
    if (n) {
      let d;
      const p = n.ownerDocument.defaultView ?? window, f = (g) => {
        const h = _n(r.current).includes(CSS.escape(g.animationName));
        if (g.target === n && h && (l("ANIMATION_END"), !o.current)) {
          const v = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", d = p.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = v);
          });
        }
      }, m = (g) => {
        g.target === n && (a.current = _n(r.current));
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
function _n(e) {
  return e?.animationName || "none";
}
function _d(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var $r = 0;
function Lo() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Wa()), document.body.insertAdjacentElement("beforeend", e[1] ?? Wa()), $r++, () => {
      $r === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), $r--;
    };
  }, []);
}
function Wa() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ho = function(e, n) {
  return ho = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, ho(e, n);
};
function Rd(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  ho(e, n);
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
function fs(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
}
function Rt(e, n, t, r) {
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
function Pd(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, a; r < o; r++)
    (a || !(r in n)) && (a || (a = Array.prototype.slice.call(n, 0, r)), a[r] = n[r]);
  return e.concat(a || Array.prototype.slice.call(n));
}
var $n = "right-scroll-bar-position", Wn = "width-before-scroll-bar", jd = "with-scroll-bars-hidden", Md = "--removed-body-scroll-bar-size";
function Wr(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function Td(e, n) {
  var t = Me(function() {
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
var Od = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Va = /* @__PURE__ */ new WeakMap();
function Dd(e, n) {
  var t = Td(null, function(r) {
    return e.forEach(function(o) {
      return Wr(o, r);
    });
  });
  return Od(function() {
    var r = Va.get(t);
    if (r) {
      var o = new Set(r), a = new Set(e), i = t.current;
      o.forEach(function(s) {
        a.has(s) || Wr(s, null);
      }), a.forEach(function(s) {
        o.has(s) || Wr(s, i);
      });
    }
    Va.set(t, e);
  }, [e]), t;
}
function Ad(e) {
  return e;
}
function Nd(e, n) {
  n === void 0 && (n = Ad);
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
function Id(e) {
  e === void 0 && (e = {});
  var n = Nd(null);
  return n.options = ve({ async: !0, ssr: !1 }, e), n;
}
var ms = function(e) {
  var n = e.sideCar, t = fs(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = n.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, ve({}, t));
};
ms.isSideCarExport = !0;
function Ld(e, n) {
  return e.useMedium(n), ms;
}
var hs = Id(), Vr = function() {
}, dr = u.forwardRef(function(e, n) {
  var t = u.useRef(null), r = u.useState({
    onScrollCapture: Vr,
    onWheelCapture: Vr,
    onTouchMoveCapture: Vr
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, d = e.removeScrollBar, p = e.enabled, f = e.shards, m = e.sideCar, g = e.noRelative, x = e.noIsolation, h = e.inert, v = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, S = e.gapMode, E = fs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = m, A = Dd([t, n]), j = ve(ve({}, E), o);
  return u.createElement(
    u.Fragment,
    null,
    p && u.createElement(C, { sideCar: hs, removeScrollBar: d, shards: f, noRelative: g, noIsolation: x, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: t, gapMode: S }),
    i ? u.cloneElement(u.Children.only(s), ve(ve({}, j), { ref: A })) : u.createElement(b, ve({}, j, { className: l, ref: A }), s)
  );
});
dr.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
dr.classNames = {
  fullWidth: Wn,
  zeroRight: $n
};
var Fd = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function zd() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = Fd();
  return n && e.setAttribute("nonce", n), e;
}
function $d(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function Wd(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var Vd = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = zd()) && ($d(n, t), Wd(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, Bd = function() {
  var e = Vd();
  return function(n, t) {
    u.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, gs = function() {
  var e = Bd(), n = function(t) {
    var r = t.styles, o = t.dynamic;
    return e(r, o), null;
  };
  return n;
}, Hd = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Br = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ud = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], r = n[e === "padding" ? "paddingTop" : "marginTop"], o = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [Br(t), Br(r), Br(o)];
}, Gd = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Hd;
  var n = Ud(e), t = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, r - t + n[2] - n[0])
  };
}, Yd = gs(), Nt = "data-scroll-locked", qd = function(e, n, t, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(jd, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Nt, `] {
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
  
  .`).concat($n, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Wn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat($n, " .").concat($n, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Wn, " .").concat(Wn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Nt, `] {
    `).concat(Md, ": ").concat(s, `px;
  }
`);
}, Ba = function() {
  var e = parseInt(document.body.getAttribute(Nt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Kd = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Nt, (Ba() + 1).toString()), function() {
      var e = Ba() - 1;
      e <= 0 ? document.body.removeAttribute(Nt) : document.body.setAttribute(Nt, e.toString());
    };
  }, []);
}, Zd = function(e) {
  var n = e.noRelative, t = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Kd();
  var a = u.useMemo(function() {
    return Gd(o);
  }, [o]);
  return u.createElement(Yd, { styles: qd(a, !n, o, t ? "" : "!important") });
}, go = !1;
if (typeof window < "u")
  try {
    var Rn = Object.defineProperty({}, "passive", {
      get: function() {
        return go = !0, !0;
      }
    });
    window.addEventListener("test", Rn, Rn), window.removeEventListener("test", Rn, Rn);
  } catch {
    go = !1;
  }
var Mt = go ? { passive: !1 } : !1, Xd = function(e) {
  return e.tagName === "TEXTAREA";
}, vs = function(e, n) {
  if (!(e instanceof Element))
    return !1;
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !Xd(e) && t[n] === "visible")
  );
}, Jd = function(e) {
  return vs(e, "overflowY");
}, Qd = function(e) {
  return vs(e, "overflowX");
}, Ha = function(e, n) {
  var t = n.ownerDocument, r = n;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = xs(e, r);
    if (o) {
      var a = bs(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== t.body);
  return !1;
}, ep = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, r = e.clientHeight;
  return [
    n,
    t,
    r
  ];
}, tp = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, r = e.clientWidth;
  return [
    n,
    t,
    r
  ];
}, xs = function(e, n) {
  return e === "v" ? Jd(n) : Qd(n);
}, bs = function(e, n) {
  return e === "v" ? ep(n) : tp(n);
}, np = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, rp = function(e, n, t, r, o) {
  var a = np(e, window.getComputedStyle(n).direction), i = a * r, s = t.target, l = n.contains(s), d = !1, p = i > 0, f = 0, m = 0;
  do {
    if (!s)
      break;
    var g = bs(e, s), x = g[0], h = g[1], v = g[2], w = h - v - a * x;
    (x || w) && xs(e, s) && (f += w, m += x);
    var b = s.parentNode;
    s = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (n.contains(s) || n === s)
  );
  return (p && Math.abs(f) < 1 || !p && Math.abs(m) < 1) && (d = !0), d;
}, Pn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ua = function(e) {
  return [e.deltaX, e.deltaY];
}, Ga = function(e) {
  return e && "current" in e ? e.current : e;
}, op = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, ap = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ip = 0, Tt = [];
function sp(e) {
  var n = u.useRef([]), t = u.useRef([0, 0]), r = u.useRef(), o = u.useState(ip++)[0], a = u.useState(gs)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Pd([e.lockRef.current], (e.shards || []).map(Ga), !0).filter(Boolean);
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
    var w = Pn(h), b = t.current, S = "deltaX" in h ? h.deltaX : b[0] - w[0], E = "deltaY" in h ? h.deltaY : b[1] - w[1], C, A = h.target, j = Math.abs(S) > Math.abs(E) ? "h" : "v";
    if ("touches" in h && j === "h" && A.type === "range")
      return !1;
    var P = window.getSelection(), L = P && P.anchorNode, B = L ? L === A || L.contains(A) : !1;
    if (B)
      return !1;
    var J = Ha(j, A);
    if (!J)
      return !0;
    if (J ? C = j : (C = j === "v" ? "h" : "v", J = Ha(j, A)), !J)
      return !1;
    if (!r.current && "changedTouches" in h && (S || E) && (r.current = C), !C)
      return !0;
    var Y = r.current || C;
    return rp(Y, v, h, Y === "h" ? S : E);
  }, []), l = u.useCallback(function(h) {
    var v = h;
    if (!(!Tt.length || Tt[Tt.length - 1] !== a)) {
      var w = "deltaY" in v ? Ua(v) : Pn(v), b = n.current.filter(function(C) {
        return C.name === v.type && (C.target === v.target || v.target === C.shadowParent) && op(C.delta, w);
      })[0];
      if (b && b.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!b) {
        var S = (i.current.shards || []).map(Ga).filter(Boolean).filter(function(C) {
          return C.contains(v.target);
        }), E = S.length > 0 ? s(v, S[0]) : !i.current.noIsolation;
        E && v.cancelable && v.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(h, v, w, b) {
    var S = { name: h, delta: v, target: w, should: b, shadowParent: cp(w) };
    n.current.push(S), setTimeout(function() {
      n.current = n.current.filter(function(E) {
        return E !== S;
      });
    }, 1);
  }, []), p = u.useCallback(function(h) {
    t.current = Pn(h), r.current = void 0;
  }, []), f = u.useCallback(function(h) {
    d(h.type, Ua(h), h.target, s(h, e.lockRef.current));
  }, []), m = u.useCallback(function(h) {
    d(h.type, Pn(h), h.target, s(h, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Tt.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, Mt), document.addEventListener("touchmove", l, Mt), document.addEventListener("touchstart", p, Mt), function() {
      Tt = Tt.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, Mt), document.removeEventListener("touchmove", l, Mt), document.removeEventListener("touchstart", p, Mt);
    };
  }, []);
  var g = e.removeScrollBar, x = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(a, { styles: ap(o) }) : null,
    g ? u.createElement(Zd, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function cp(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
  return n;
}
const lp = Ld(hs, sp);
var pr = u.forwardRef(function(e, n) {
  return u.createElement(dr, ve({}, e, { ref: n, sideCar: lp }));
});
pr.classNames = dr.classNames;
var up = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, Ot = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), Mn = {}, Hr = 0, ys = function(e) {
  return e && (e.host || ys(e.parentNode));
}, dp = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var r = ys(t);
    return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, pp = function(e, n, t, r) {
  var o = dp(n, Array.isArray(e) ? e : [e]);
  Mn[t] || (Mn[t] = /* @__PURE__ */ new WeakMap());
  var a = Mn[t], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), d = function(f) {
    !f || s.has(f) || (s.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var p = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (s.has(m))
        p(m);
      else
        try {
          var g = m.getAttribute(r), x = g !== null && g !== "false", h = (Ot.get(m) || 0) + 1, v = (a.get(m) || 0) + 1;
          Ot.set(m, h), a.set(m, v), i.push(m), h === 1 && x && jn.set(m, !0), v === 1 && m.setAttribute(t, "true"), x || m.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return p(n), s.clear(), Hr++, function() {
    i.forEach(function(f) {
      var m = Ot.get(f) - 1, g = a.get(f) - 1;
      Ot.set(f, m), a.set(f, g), m || (jn.has(f) || f.removeAttribute(r), jn.delete(f)), g || f.removeAttribute(t);
    }), Hr--, Hr || (Ot = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), Mn = {});
  };
}, Fo = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = up(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), pp(r, o, t, "aria-hidden")) : function() {
    return null;
  };
};
// @__NO_SIDE_EFFECTS__
function fp(e) {
  const n = /* @__PURE__ */ mp(e), t = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(gp);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function mp(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (u.isValidElement(o)) {
      const i = xp(o), s = vp(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? nt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var hp = /* @__PURE__ */ Symbol("radix.slottable");
function gp(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === hp;
}
function vp(e, n) {
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
function xp(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var fr = "Dialog", [ws, Cs] = tt(fr), [bp, He] = ws(fr), zo = (e) => {
  const {
    __scopeDialog: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = u.useRef(null), l = u.useRef(null), [d, p] = wt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: fr
  });
  return /* @__PURE__ */ c.jsx(
    bp,
    {
      scope: n,
      triggerRef: s,
      contentRef: l,
      contentId: Le(),
      titleId: Le(),
      descriptionId: Le(),
      open: d,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((f) => !f), [p]),
      modal: i,
      children: t
    }
  );
};
zo.displayName = fr;
var Ss = "DialogTrigger", $o = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = He(Ss, t), a = ce(n, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      se.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": qo(o.open),
        ...r,
        ref: a,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
$o.displayName = Ss;
var Wo = "DialogPortal", [yp, Es] = ws(Wo, {
  forceMount: void 0
}), Vo = (e) => {
  const { __scopeDialog: n, forceMount: t, children: r, container: o } = e, a = He(Wo, n);
  return /* @__PURE__ */ c.jsx(yp, { scope: n, forceMount: t, children: u.Children.map(r, (i) => /* @__PURE__ */ c.jsx(rt, { present: t || a.open, children: /* @__PURE__ */ c.jsx(ur, { asChild: !0, container: o, children: i }) })) });
};
Vo.displayName = Wo;
var Hn = "DialogOverlay", Bo = u.forwardRef(
  (e, n) => {
    const t = Es(Hn, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, a = He(Hn, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx(rt, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Cp, { ...o, ref: n }) }) : null;
  }
);
Bo.displayName = Hn;
var wp = /* @__PURE__ */ fp("DialogOverlay.RemoveScroll"), Cp = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = He(Hn, t);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(pr, { as: wp, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        se.div,
        {
          "data-state": qo(o.open),
          ...r,
          ref: n,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Ct = "DialogContent", Ho = u.forwardRef(
  (e, n) => {
    const t = Es(Ct, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, a = He(Ct, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(rt, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(Sp, { ...o, ref: n }) : /* @__PURE__ */ c.jsx(Ep, { ...o, ref: n }) });
  }
);
Ho.displayName = Ct;
var Sp = u.forwardRef(
  (e, n) => {
    const t = He(Ct, e.__scopeDialog), r = u.useRef(null), o = ce(n, t.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Fo(a);
    }, []), /* @__PURE__ */ c.jsx(
      ks,
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
), Ep = u.forwardRef(
  (e, n) => {
    const t = He(Ct, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      ks,
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
), ks = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = He(Ct, t), l = u.useRef(null), d = ce(n, l);
    return Lo(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        lr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ c.jsx(
            gn,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": qo(s.open),
              ...i,
              ref: d,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(_p, { titleId: s.titleId }),
        /* @__PURE__ */ c.jsx(Pp, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Uo = "DialogTitle", Go = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = He(Uo, t);
    return /* @__PURE__ */ c.jsx(se.h2, { id: o.titleId, ...r, ref: n });
  }
);
Go.displayName = Uo;
var _s = "DialogDescription", Yo = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = He(_s, t);
    return /* @__PURE__ */ c.jsx(se.p, { id: o.descriptionId, ...r, ref: n });
  }
);
Yo.displayName = _s;
var Rs = "DialogClose", vn = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = He(Rs, t);
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
vn.displayName = Rs;
function qo(e) {
  return e ? "open" : "closed";
}
var Ps = "DialogTitleWarning", [kp, js] = qu(Ps, {
  contentName: Ct,
  titleName: Uo,
  docsSlug: "dialog"
}), _p = ({ titleId: e }) => {
  const n = js(Ps), t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(t));
  }, [t, e]), null;
}, Rp = "DialogDescriptionWarning", Pp = ({ contentRef: e, descriptionId: n }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${js(Rp).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    n && o && (document.getElementById(n) || console.warn(r));
  }, [r, e, n]), null;
}, jp = zo, Mp = $o, Tp = Vo, Op = Bo, Dp = Ho, Ap = Go, Np = Yo, Ms = vn, Ip = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Lp(e) {
  const n = ({ children: t }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = Ip, n;
}
var Ts = "AlertDialog", [Fp] = tt(Ts, [
  Cs
]), ot = Cs(), Os = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = ot(n);
  return /* @__PURE__ */ c.jsx(jp, { ...r, ...t, modal: !0 });
};
Os.displayName = Ts;
var zp = "AlertDialogTrigger", $p = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = ot(t);
    return /* @__PURE__ */ c.jsx(Mp, { ...o, ...r, ref: n });
  }
);
$p.displayName = zp;
var Wp = "AlertDialogPortal", Ds = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = ot(n);
  return /* @__PURE__ */ c.jsx(Tp, { ...r, ...t });
};
Ds.displayName = Wp;
var Vp = "AlertDialogOverlay", As = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = ot(t);
    return /* @__PURE__ */ c.jsx(Op, { ...o, ...r, ref: n });
  }
);
As.displayName = Vp;
var It = "AlertDialogContent", [Bp, Hp] = Fp(It), Up = /* @__PURE__ */ Lp("AlertDialogContent"), Ns = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, children: r, ...o } = e, a = ot(t), i = u.useRef(null), s = ce(n, i), l = u.useRef(null);
    return /* @__PURE__ */ c.jsx(
      kp,
      {
        contentName: It,
        titleName: Is,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ c.jsx(Bp, { scope: t, cancelRef: l, children: /* @__PURE__ */ c.jsxs(
          Dp,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: X(o.onOpenAutoFocus, (d) => {
              d.preventDefault(), l.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (d) => d.preventDefault(),
            onInteractOutside: (d) => d.preventDefault(),
            children: [
              /* @__PURE__ */ c.jsx(Up, { children: r }),
              /* @__PURE__ */ c.jsx(Yp, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
Ns.displayName = It;
var Is = "AlertDialogTitle", Ls = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = ot(t);
    return /* @__PURE__ */ c.jsx(Ap, { ...o, ...r, ref: n });
  }
);
Ls.displayName = Is;
var Fs = "AlertDialogDescription", zs = u.forwardRef((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = ot(t);
  return /* @__PURE__ */ c.jsx(Np, { ...o, ...r, ref: n });
});
zs.displayName = Fs;
var Gp = "AlertDialogAction", $s = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = ot(t);
    return /* @__PURE__ */ c.jsx(Ms, { ...o, ...r, ref: n });
  }
);
$s.displayName = Gp;
var Ws = "AlertDialogCancel", Vs = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, { cancelRef: o } = Hp(Ws, t), a = ot(t), i = ce(n, o);
    return /* @__PURE__ */ c.jsx(Ms, { ...a, ...r, ref: i });
  }
);
Vs.displayName = Ws;
var Yp = ({ contentRef: e }) => {
  const n = `\`${It}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${It}\` by passing a \`${Fs}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${It}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return u.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(n);
  }, [n, e]), null;
}, qp = Os, Kp = Ds, Zp = As, Xp = Ns, Jw = $s, Qw = Vs, Jp = Ls, Ya = zs, Qp = /* @__PURE__ */ Symbol.for("react.lazy"), Un = u[" use ".trim().toString()];
function ef(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Bs(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Qp && "_payload" in e && ef(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Hs(e) {
  const n = /* @__PURE__ */ tf(e), t = u.forwardRef((r, o) => {
    let { children: a, ...i } = r;
    Bs(a) && typeof Un == "function" && (a = Un(a._payload));
    const s = u.Children.toArray(a), l = s.find(rf);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
var mr = /* @__PURE__ */ Hs("Slot");
// @__NO_SIDE_EFFECTS__
function tf(e) {
  const n = u.forwardRef((t, r) => {
    let { children: o, ...a } = t;
    if (Bs(o) && typeof Un == "function" && (o = Un(o._payload)), u.isValidElement(o)) {
      const i = af(o), s = of(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? nt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var nf = /* @__PURE__ */ Symbol("radix.slottable");
function rf(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === nf;
}
function of(e, n) {
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
function af(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var sf = [
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
], cf = sf.reduce((e, n) => {
  const t = /* @__PURE__ */ Hs(`Primitive.${n}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? t : n;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), lf = Object.freeze({
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
}), uf = "VisuallyHidden", Us = u.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(
    cf.span,
    {
      ...e,
      ref: n,
      style: { ...lf, ...e.style }
    }
  )
);
Us.displayName = uf;
var df = Us;
function Gs(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = Gs(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Ys() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = Gs(e)) && (r && (r += " "), r += n);
  return r;
}
const pf = (e, n) => {
  const t = new Array(e.length + n.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e[r];
  for (let r = 0; r < n.length; r++)
    t[e.length + r] = n[r];
  return t;
}, ff = (e, n) => ({
  classGroupId: e,
  validator: n
}), qs = (e = /* @__PURE__ */ new Map(), n = null, t) => ({
  nextPart: e,
  validators: n,
  classGroupId: t
}), Gn = "-", qa = [], mf = "arbitrary..", hf = (e) => {
  const n = vf(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return gf(i);
      const s = i.split(Gn), l = s[0] === "" && s.length > 1 ? 1 : 0;
      return Ks(s, l, n);
    },
    getConflictingClassGroupIds: (i, s) => {
      if (s) {
        const l = r[i], d = t[i];
        return l ? d ? pf(d, l) : l : d || qa;
      }
      return t[i] || qa;
    }
  };
}, Ks = (e, n, t) => {
  if (e.length - n === 0)
    return t.classGroupId;
  const o = e[n], a = t.nextPart.get(o);
  if (a) {
    const d = Ks(e, n + 1, a);
    if (d) return d;
  }
  const i = t.validators;
  if (i === null)
    return;
  const s = n === 0 ? e.join(Gn) : e.slice(n).join(Gn), l = i.length;
  for (let d = 0; d < l; d++) {
    const p = i[d];
    if (p.validator(s))
      return p.classGroupId;
  }
}, gf = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), t = n.indexOf(":"), r = n.slice(0, t);
  return r ? mf + r : void 0;
})(), vf = (e) => {
  const {
    theme: n,
    classGroups: t
  } = e;
  return xf(t, n);
}, xf = (e, n) => {
  const t = qs();
  for (const r in e) {
    const o = e[r];
    Ko(o, t, r, n);
  }
  return t;
}, Ko = (e, n, t, r) => {
  const o = e.length;
  for (let a = 0; a < o; a++) {
    const i = e[a];
    bf(i, n, t, r);
  }
}, bf = (e, n, t, r) => {
  if (typeof e == "string") {
    yf(e, n, t);
    return;
  }
  if (typeof e == "function") {
    wf(e, n, t, r);
    return;
  }
  Cf(e, n, t, r);
}, yf = (e, n, t) => {
  const r = e === "" ? n : Zs(n, e);
  r.classGroupId = t;
}, wf = (e, n, t, r) => {
  if (Sf(e)) {
    Ko(e(r), n, t, r);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(ff(t, e));
}, Cf = (e, n, t, r) => {
  const o = Object.entries(e), a = o.length;
  for (let i = 0; i < a; i++) {
    const [s, l] = o[i];
    Ko(l, Zs(n, s), t, r);
  }
}, Zs = (e, n) => {
  let t = e;
  const r = n.split(Gn), o = r.length;
  for (let a = 0; a < o; a++) {
    const i = r[a];
    let s = t.nextPart.get(i);
    s || (s = qs(), t.nextPart.set(i, s)), t = s;
  }
  return t;
}, Sf = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Ef = (e) => {
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
}, vo = "!", Ka = ":", kf = [], Za = (e, n, t, r, o) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: t,
  maybePostfixModifierPosition: r,
  isExternal: o
}), _f = (e) => {
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
        if (v === Ka) {
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
    f.endsWith(vo) ? (m = f.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(vo) && (m = f.slice(1), g = !0)
    );
    const x = d && d > l ? d - l : void 0;
    return Za(a, g, m, x);
  };
  if (n) {
    const o = n + Ka, a = r;
    r = (i) => i.startsWith(o) ? a(i.slice(o.length)) : Za(kf, !1, i, void 0, !0);
  }
  if (t) {
    const o = r;
    r = (a) => t({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, Rf = (e) => {
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
}, Pf = (e) => ({
  cache: Ef(e.cacheSize),
  parseClassName: _f(e),
  sortModifiers: Rf(e),
  ...hf(e)
}), jf = /\s+/, Mf = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = n, i = [], s = e.trim().split(jf);
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
    const b = m.length === 0 ? "" : m.length === 1 ? m[0] : a(m).join(":"), S = g ? b + vo : b, E = S + w;
    if (i.indexOf(E) > -1)
      continue;
    i.push(E);
    const C = o(w, v);
    for (let A = 0; A < C.length; ++A) {
      const j = C[A];
      i.push(S + j);
    }
    l = p + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Tf = (...e) => {
  let n = 0, t, r, o = "";
  for (; n < e.length; )
    (t = e[n++]) && (r = Xs(t)) && (o && (o += " "), o += r);
  return o;
}, Xs = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = Xs(e[r])) && (t && (t += " "), t += n);
  return t;
}, Of = (e, ...n) => {
  let t, r, o, a;
  const i = (l) => {
    const d = n.reduce((p, f) => f(p), e());
    return t = Pf(d), r = t.cache.get, o = t.cache.set, a = s, s(l);
  }, s = (l) => {
    const d = r(l);
    if (d)
      return d;
    const p = Mf(l, t);
    return o(l, p), p;
  };
  return a = i, (...l) => a(Tf(...l));
}, Df = [], Ce = (e) => {
  const n = (t) => t[e] || Df;
  return n.isThemeGetter = !0, n;
}, Js = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Qs = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Af = /^\d+\/\d+$/, Nf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, If = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Lf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ff = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Dt = (e) => Af.test(e), ie = (e) => !!e && !Number.isNaN(Number(e)), ct = (e) => !!e && Number.isInteger(Number(e)), Ur = (e) => e.endsWith("%") && ie(e.slice(0, -1)), Xe = (e) => Nf.test(e), $f = () => !0, Wf = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  If.test(e) && !Lf.test(e)
), ec = () => !1, Vf = (e) => Ff.test(e), Bf = (e) => zf.test(e), Hf = (e) => !q(e) && !K(e), Uf = (e) => Bt(e, rc, ec), q = (e) => Js.test(e), vt = (e) => Bt(e, oc, Wf), Gr = (e) => Bt(e, Zf, ie), Xa = (e) => Bt(e, tc, ec), Gf = (e) => Bt(e, nc, Bf), Tn = (e) => Bt(e, ac, Vf), K = (e) => Qs.test(e), en = (e) => Ht(e, oc), Yf = (e) => Ht(e, Xf), Ja = (e) => Ht(e, tc), qf = (e) => Ht(e, rc), Kf = (e) => Ht(e, nc), On = (e) => Ht(e, ac, !0), Bt = (e, n, t) => {
  const r = Js.exec(e);
  return r ? r[1] ? n(r[1]) : t(r[2]) : !1;
}, Ht = (e, n, t = !1) => {
  const r = Qs.exec(e);
  return r ? r[1] ? n(r[1]) : t : !1;
}, tc = (e) => e === "position" || e === "percentage", nc = (e) => e === "image" || e === "url", rc = (e) => e === "length" || e === "size" || e === "bg-size", oc = (e) => e === "length", Zf = (e) => e === "number", Xf = (e) => e === "family-name", ac = (e) => e === "shadow", Jf = () => {
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
  ], C = () => [...E(), K, q], A = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], P = () => [K, q, l], L = () => [Dt, "full", "auto", ...P()], B = () => [ct, "none", "subgrid", K, q], J = () => ["auto", {
    span: ["full", ct, K, q]
  }, ct, K, q], Y = () => [ct, "auto", K, q], U = () => ["auto", "min", "max", "fr", K, q], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...P()], ee = () => [Dt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], R = () => [e, K, q], N = () => [...E(), Ja, Xa, {
    position: [K, q]
  }], _ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], y = () => ["auto", "cover", "contain", qf, Uf, {
    size: [K, q]
  }], M = () => [Ur, en, vt], I = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    K,
    q
  ], O = () => ["", ie, en, vt], G = () => ["solid", "dashed", "dotted", "double"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => [ie, Ur, Ja, Xa], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    K,
    q
  ], Z = () => ["none", ie, K, q], F = () => ["none", ie, K, q], re = () => [ie, K, q], T = () => [Dt, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Xe],
      breakpoint: [Xe],
      color: [$f],
      container: [Xe],
      "drop-shadow": [Xe],
      ease: ["in", "out", "in-out"],
      font: [Hf],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Xe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Xe],
      shadow: [Xe],
      spacing: ["px", ie],
      text: [Xe],
      "text-shadow": [Xe],
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
        aspect: ["auto", "square", Dt, q, K, v]
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
        columns: [ie, q, K, s]
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
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
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
        z: [ct, "auto", K, q]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Dt, "full", "auto", s, ...P()]
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
        flex: [ie, Dt, "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ie, K, q]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ie, K, q]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ct, "first", "last", "none", K, q]
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
        "col-start": Y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Y()
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
        "row-start": Y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Y()
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
        text: ["base", t, en, vt]
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
        font: [r, K, Gr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ur, q]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Yf, q, n]
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
        tracking: [o, K, q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ie, "none", K, Gr]
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
        "list-image": ["none", K, q]
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
        list: ["disc", "decimal", "none", K, q]
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
        decoration: [ie, "from-font", "auto", K, vt]
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
        "underline-offset": [ie, "auto", K, q]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K, q]
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
        content: ["none", K, q]
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
          }, ct, K, q],
          radial: ["", K, q],
          conic: [ct, K, q]
        }, Kf, Gf]
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
        from: M()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: M()
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
        "outline-offset": [ie, K, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ie, en, vt]
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
          On,
          Tn
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
        "inset-shadow": ["none", f, On, Tn]
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
        "ring-offset": [ie, vt]
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
        "text-shadow": ["none", m, On, Tn]
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
        opacity: [ie, K, q]
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
        "mask-radial": [K, q]
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
        "mask-conic": [ie]
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
        mask: ["none", K, q]
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
          q
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
        brightness: [ie, K, q]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ie, K, q]
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
          On,
          Tn
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
        grayscale: ["", ie, K, q]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ie, K, q]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ie, K, q]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ie, K, q]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ie, K, q]
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
          q
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
        "backdrop-brightness": [ie, K, q]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ie, K, q]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ie, K, q]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ie, K, q]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ie, K, q]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ie, K, q]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ie, K, q]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ie, K, q]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", K, q]
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
        duration: [ie, "initial", K, q]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, K, q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ie, K, q]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, K, q]
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
        perspective: [h, K, q]
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
        transform: [K, q, "", "none", "gpu", "cpu"]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K, q]
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
        "will-change": ["auto", "scroll", "contents", "transform", K, q]
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
        stroke: [ie, en, vt, Gr]
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
}, Qf = /* @__PURE__ */ Of(Jf);
function D(...e) {
  return Qf(Ys(e));
}
function e1({
  open: e,
  onOpenChange: n,
  header: t,
  content: r,
  actions: o,
  className: a
}) {
  return /* @__PURE__ */ c.jsx(qp, { open: e, onOpenChange: n, children: /* @__PURE__ */ c.jsxs(Kp, { children: [
    /* @__PURE__ */ c.jsx(Zp, { className: "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
    /* @__PURE__ */ c.jsxs(
      Xp,
      {
        className: D(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
          a
        ),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col space-y-2", children: [
            /* @__PURE__ */ c.jsx(Jp, { className: "text-lg font-semibold text-gray-900", children: t }),
            typeof r == "string" ? /* @__PURE__ */ c.jsx(Ya, { className: "text-sm text-gray-600", children: r }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsx(Ya, { asChild: !0, children: /* @__PURE__ */ c.jsx(df, { children: /* @__PURE__ */ c.jsx("span", { children: "Confirmation dialog content" }) }) }),
              /* @__PURE__ */ c.jsx("div", { className: "text-sm text-gray-600", children: r })
            ] })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0", children: o })
        ]
      }
    )
  ] }) });
}
const Qa = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ei = Ys, hr = (e, n) => (t) => {
  var r;
  if (n?.variants == null) return ei(e, t?.class, t?.className);
  const { variants: o, defaultVariants: a } = n, i = Object.keys(o).map((d) => {
    const p = t?.[d], f = a?.[d];
    if (p === null) return null;
    const m = Qa(p) || Qa(f);
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
  return ei(e, i, l, t?.class, t?.className);
}, em = hr(
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
function t1({
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
      className: D(em({ variant: n, size: t, className: e })),
      ...r
    }
  );
}
const tm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), nm = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), ti = (e) => {
  const n = nm(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, ic = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), rm = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
var om = {
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
const am = sr(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, l) => po(
    "svg",
    {
      ref: l,
      ...om,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: ic("lucide", o),
      ...!a && !rm(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...i.map(([d, p]) => po(d, p)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
const Ie = (e, n) => {
  const t = sr(
    ({ className: r, ...o }, a) => po(am, {
      ref: a,
      iconNode: n,
      className: ic(
        `lucide-${tm(ti(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return t.displayName = ti(e), t;
};
const im = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], sm = Ie("calendar", im);
const cm = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], xn = Ie("check", cm);
const lm = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], sc = Ie("chevron-down", lm);
const um = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], gr = Ie("chevron-right", um);
const dm = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], cc = Ie("chevron-left", dm);
const pm = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], fm = Ie("chevron-up", pm);
const mm = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], hm = Ie("clock", mm);
const gm = [
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
], vm = Ie("eye-off", gm);
const xm = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], bm = Ie("eye", xm);
const ym = [["path", { d: "M5 12h14", key: "1ays0h" }]], wm = Ie("minus", ym);
const Cm = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Sm = Ie("trash-2", Cm);
const Em = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], lc = Ie("upload", Em);
const km = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Zo = Ie("x", km);
function n1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      "data-slot": "breadcrumb",
      className: D("w-full", e),
      ...n
    }
  );
}
function r1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: D("flex items-center justify-start gap-2", e),
      ...n
    }
  );
}
function o1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: D("flex justify-start items-center gap-x-1", e),
      ...n
    }
  );
}
function a1({
  asChild: e,
  className: n,
  ...t
}) {
  const r = e ? mr : "a";
  return /* @__PURE__ */ c.jsx(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: D(
        "flex w-fit font-manrope text-sm font-normal leading-4.5 text-gray-200 hover:text-gray-600 hover:underline transition-all",
        n
      ),
      ...t
    }
  );
}
function i1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      "aria-current": "page",
      className: D(
        "font-manrope text-sm font-semibold text-blue-hepatica-600 leading-4",
        e
      ),
      ...n
    }
  );
}
function s1() {
  return /* @__PURE__ */ c.jsx(
    gr,
    {
      "data-slot": "breadcrumb-separator",
      "aria-hidden": "true",
      className: "size-4 text-gray-300 shrink-0"
    }
  );
}
const _m = hr(
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
function Xo({
  className: e,
  variant: n,
  size: t,
  asChild: r = !1,
  ...o
}) {
  const a = r ? mr : "button";
  return /* @__PURE__ */ c.jsx(
    a,
    {
      "data-slot": "button",
      className: D(_m({ variant: n, size: t, className: e })),
      ...o
    }
  );
}
function c1({
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
      className: D(
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
            className: D(
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
              xn,
              {
                className: D("size-3 text-transparent", {
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
function l1({ ...e }) {
  return /* @__PURE__ */ c.jsx(zo, { "data-slot": "dialog", ...e });
}
function u1({ ...e }) {
  return /* @__PURE__ */ c.jsx($o, { "data-slot": "dialog-trigger", ...e });
}
function Rm({ ...e }) {
  return /* @__PURE__ */ c.jsx(Vo, { "data-slot": "dialog-portal", ...e });
}
function d1({ ...e }) {
  return /* @__PURE__ */ c.jsx(vn, { "data-slot": "dialog-close", ...e });
}
function Pm({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    Bo,
    {
      "data-slot": "dialog-overlay",
      className: D(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/50 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50",
        e
      ),
      ...n
    }
  );
}
function p1({
  className: e,
  children: n,
  showCloseButton: t = !0,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(Rm, { children: [
    /* @__PURE__ */ c.jsx(Pm, {}),
    /* @__PURE__ */ c.jsxs(
      Ho,
      {
        "data-slot": "dialog-content",
        className: D(
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
          t && /* @__PURE__ */ c.jsx(vn, { "data-slot": "dialog-close", asChild: !0, children: /* @__PURE__ */ c.jsxs(
            Xo,
            {
              variant: "gray-ghost",
              className: "absolute top-6 right-8 size-10 flex items-center justify-center",
              size: "sm",
              children: [
                /* @__PURE__ */ c.jsx(Zo, {}),
                /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function f1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: D(
        "min-h-22 px-8 justify-center gap-2 flex flex-col border-b border-b-gray-25",
        e
      ),
      ...n
    }
  );
}
function m1({
  className: e,
  showCloseButton: n = !1,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: D("px-8 pb-8 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ c.jsx(vn, { asChild: !0, children: /* @__PURE__ */ c.jsx(Xo, { variant: "gray-outline", size: "sm", children: "Close" }) })
      ]
    }
  );
}
function h1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    Go,
    {
      "data-slot": "dialog-title",
      className: D("font-manrope text-base leading-5 font-semibold text-gray-900", e),
      ...n
    }
  );
}
function g1({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    Yo,
    {
      "data-slot": "dialog-description",
      className: D(
        "text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3",
        e
      ),
      ...n
    }
  );
}
// @__NO_SIDE_EFFECTS__
function ni(e) {
  const n = /* @__PURE__ */ jm(e), t = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(Tm);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function jm(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (u.isValidElement(o)) {
      const i = Dm(o), s = Om(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? nt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Mm = /* @__PURE__ */ Symbol("radix.slottable");
function Tm(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Mm;
}
function Om(e, n) {
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
function Dm(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function Jo(e) {
  const n = e + "CollectionProvider", [t, r] = tt(n), [o, a] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (h) => {
    const { scope: v, children: w } = h, b = ae.useRef(null), S = ae.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: v, itemMap: S, collectionRef: b, children: w });
  };
  i.displayName = n;
  const s = e + "CollectionSlot", l = /* @__PURE__ */ ni(s), d = ae.forwardRef(
    (h, v) => {
      const { scope: w, children: b } = h, S = a(s, w), E = ce(v, S.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: E, children: b });
    }
  );
  d.displayName = s;
  const p = e + "CollectionItemSlot", f = "data-radix-collection-item", m = /* @__PURE__ */ ni(p), g = ae.forwardRef(
    (h, v) => {
      const { scope: w, children: b, ...S } = h, E = ae.useRef(null), C = ce(v, E), A = a(p, w);
      return ae.useEffect(() => (A.itemMap.set(E, { ref: E, ...S }), () => {
        A.itemMap.delete(E);
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
        (A, j) => S.indexOf(A.ref.current) - S.indexOf(j.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: i, Slot: d, ItemSlot: g },
    x,
    r
  ];
}
var Am = u.createContext(void 0);
function Qo(e) {
  const n = u.useContext(Am);
  return e || n || "ltr";
}
const Nm = ["top", "right", "bottom", "left"], pt = Math.min, De = Math.max, Yn = Math.round, Dn = Math.floor, Ye = (e) => ({
  x: e,
  y: e
}), Im = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Lm = {
  start: "end",
  end: "start"
};
function xo(e, n, t) {
  return De(e, pt(n, t));
}
function Qe(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function et(e) {
  return e.split("-")[0];
}
function Ut(e) {
  return e.split("-")[1];
}
function ea(e) {
  return e === "x" ? "y" : "x";
}
function ta(e) {
  return e === "y" ? "height" : "width";
}
const Fm = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ge(e) {
  return Fm.has(et(e)) ? "y" : "x";
}
function na(e) {
  return ea(Ge(e));
}
function zm(e, n, t) {
  t === void 0 && (t = !1);
  const r = Ut(e), o = na(e), a = ta(o);
  let i = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[a] > n.floating[a] && (i = qn(i)), [i, qn(i)];
}
function $m(e) {
  const n = qn(e);
  return [bo(e), n, bo(n)];
}
function bo(e) {
  return e.replace(/start|end/g, (n) => Lm[n]);
}
const ri = ["left", "right"], oi = ["right", "left"], Wm = ["top", "bottom"], Vm = ["bottom", "top"];
function Bm(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? oi : ri : n ? ri : oi;
    case "left":
    case "right":
      return n ? Wm : Vm;
    default:
      return [];
  }
}
function Hm(e, n, t, r) {
  const o = Ut(e);
  let a = Bm(et(e), t === "start", r);
  return o && (a = a.map((i) => i + "-" + o), n && (a = a.concat(a.map(bo)))), a;
}
function qn(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Im[n]);
}
function Um(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function uc(e) {
  return typeof e != "number" ? Um(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Kn(e) {
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
function ai(e, n, t) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Ge(n), i = na(n), s = ta(i), l = et(n), d = a === "y", p = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
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
  switch (Ut(n)) {
    case "start":
      g[i] -= m * (t && d ? -1 : 1);
      break;
    case "end":
      g[i] += m * (t && d ? -1 : 1);
      break;
  }
  return g;
}
const Gm = async (e, n, t) => {
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
  } = ai(d, r, l), m = r, g = {}, x = 0;
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
    } = ai(d, m, l)), h = -1);
  }
  return {
    x: p,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: g
  };
};
async function ln(e, n) {
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
  } = Qe(n, e), x = uc(g), v = s[m ? f === "floating" ? "reference" : "floating" : f], w = Kn(await a.getClippingRect({
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
  }, C = Kn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Ym = (e) => ({
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
    } = Qe(e, n) || {};
    if (d == null)
      return {};
    const f = uc(p), m = {
      x: t,
      y: r
    }, g = na(o), x = ta(g), h = await i.getDimensions(d), v = g === "y", w = v ? "top" : "left", b = v ? "bottom" : "right", S = v ? "clientHeight" : "clientWidth", E = a.reference[x] + a.reference[g] - m[g] - a.floating[x], C = m[g] - a.reference[g], A = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let j = A ? A[S] : 0;
    (!j || !await (i.isElement == null ? void 0 : i.isElement(A))) && (j = s.floating[S] || a.floating[x]);
    const P = E / 2 - C / 2, L = j / 2 - h[x] / 2 - 1, B = pt(f[w], L), J = pt(f[b], L), Y = B, U = j - h[x] - J, H = j / 2 - h[x] / 2 + P, Q = xo(Y, H, U), $ = !l.arrow && Ut(o) != null && H !== Q && a.reference[x] / 2 - (H < Y ? B : J) - h[x] / 2 < 0, ee = $ ? H < Y ? H - Y : H - U : 0;
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
}), qm = function(e) {
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
      } = Qe(e, n);
      if ((t = a.arrow) != null && t.alignmentOffset)
        return {};
      const w = et(o), b = Ge(s), S = et(s) === s, E = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = m || (S || !h ? [qn(s)] : $m(s)), A = x !== "none";
      !m && A && C.push(...Hm(s, h, x, E));
      const j = [s, ...C], P = await ln(n, v), L = [];
      let B = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (p && L.push(P[w]), f) {
        const H = zm(o, i, E);
        L.push(P[H[0]], P[H[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: L
      }], !L.every((H) => H <= 0)) {
        var J, Y;
        const H = (((J = a.flip) == null ? void 0 : J.index) || 0) + 1, Q = j[H];
        if (Q && (!(f === "alignment" ? b !== Ge(Q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((R) => Ge(R.placement) === b ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: H,
              overflows: B
            },
            reset: {
              placement: Q
            }
          };
        let $ = (Y = B.filter((ee) => ee.overflows[0] <= 0).sort((ee, R) => ee.overflows[1] - R.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!$)
          switch (g) {
            case "bestFit": {
              var U;
              const ee = (U = B.filter((R) => {
                if (A) {
                  const N = Ge(R.placement);
                  return N === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  N === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((N) => N > 0).reduce((N, _) => N + _, 0)]).sort((R, N) => R[1] - N[1])[0]) == null ? void 0 : U[0];
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
function ii(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function si(e) {
  return Nm.some((n) => e[n] >= 0);
}
const Km = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(n) {
      const {
        rects: t
      } = n, {
        strategy: r = "referenceHidden",
        ...o
      } = Qe(e, n);
      switch (r) {
        case "referenceHidden": {
          const a = await ln(n, {
            ...o,
            elementContext: "reference"
          }), i = ii(a, t.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: si(i)
            }
          };
        }
        case "escaped": {
          const a = await ln(n, {
            ...o,
            altBoundary: !0
          }), i = ii(a, t.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: si(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, dc = /* @__PURE__ */ new Set(["left", "top"]);
async function Zm(e, n) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = et(t), s = Ut(t), l = Ge(t) === "y", d = dc.has(i) ? -1 : 1, p = a && l ? -1 : 1, f = Qe(n, e);
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
const Xm = function(e) {
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
      } = n, l = await Zm(n, e);
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
}, Jm = function(e) {
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
      } = Qe(e, n), d = {
        x: t,
        y: r
      }, p = await ln(n, l), f = Ge(et(o)), m = ea(f);
      let g = d[m], x = d[f];
      if (a) {
        const v = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = g + p[v], S = g - p[w];
        g = xo(b, g, S);
      }
      if (i) {
        const v = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", b = x + p[v], S = x - p[w];
        x = xo(b, x, S);
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
}, Qm = function(e) {
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
      } = Qe(e, n), p = {
        x: t,
        y: r
      }, f = Ge(o), m = ea(f);
      let g = p[m], x = p[f];
      const h = Qe(s, n), v = typeof h == "number" ? {
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
        const S = m === "y" ? "width" : "height", E = dc.has(et(o)), C = a.reference[f] - a.floating[S] + (E && ((w = i.offset) == null ? void 0 : w[f]) || 0) + (E ? 0 : v.crossAxis), A = a.reference[f] + a.reference[S] + (E ? 0 : ((b = i.offset) == null ? void 0 : b[f]) || 0) - (E ? v.crossAxis : 0);
        x < C ? x = C : x > A && (x = A);
      }
      return {
        [m]: g,
        [f]: x
      };
    }
  };
}, eh = function(e) {
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
      } = Qe(e, n), p = await ln(n, d), f = et(o), m = Ut(o), g = Ge(o) === "y", {
        width: x,
        height: h
      } = a.floating;
      let v, w;
      f === "top" || f === "bottom" ? (v = f, w = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = f, v = m === "end" ? "top" : "bottom");
      const b = h - p.top - p.bottom, S = x - p.left - p.right, E = pt(h - p[v], b), C = pt(x - p[w], S), A = !n.middlewareData.shift;
      let j = E, P = C;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (P = S), (r = n.middlewareData.shift) != null && r.enabled.y && (j = b), A && !m) {
        const B = De(p.left, 0), J = De(p.right, 0), Y = De(p.top, 0), U = De(p.bottom, 0);
        g ? P = x - 2 * (B !== 0 || J !== 0 ? B + J : De(p.left, p.right)) : j = h - 2 * (Y !== 0 || U !== 0 ? Y + U : De(p.top, p.bottom));
      }
      await l({
        ...n,
        availableWidth: P,
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
function vr() {
  return typeof window < "u";
}
function Gt(e) {
  return pc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ae(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Ke(e) {
  var n;
  return (n = (pc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function pc(e) {
  return vr() ? e instanceof Node || e instanceof Ae(e).Node : !1;
}
function Ve(e) {
  return vr() ? e instanceof Element || e instanceof Ae(e).Element : !1;
}
function qe(e) {
  return vr() ? e instanceof HTMLElement || e instanceof Ae(e).HTMLElement : !1;
}
function ci(e) {
  return !vr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ae(e).ShadowRoot;
}
const th = /* @__PURE__ */ new Set(["inline", "contents"]);
function bn(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: r,
    display: o
  } = Be(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !th.has(o);
}
const nh = /* @__PURE__ */ new Set(["table", "td", "th"]);
function rh(e) {
  return nh.has(Gt(e));
}
const oh = [":popover-open", ":modal"];
function xr(e) {
  return oh.some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
const ah = ["transform", "translate", "scale", "rotate", "perspective"], ih = ["transform", "translate", "scale", "rotate", "perspective", "filter"], sh = ["paint", "layout", "strict", "content"];
function ra(e) {
  const n = oa(), t = Ve(e) ? Be(e) : e;
  return ah.some((r) => t[r] ? t[r] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ih.some((r) => (t.willChange || "").includes(r)) || sh.some((r) => (t.contain || "").includes(r));
}
function ch(e) {
  let n = ft(e);
  for (; qe(n) && !Ft(n); ) {
    if (ra(n))
      return n;
    if (xr(n))
      return null;
    n = ft(n);
  }
  return null;
}
function oa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const lh = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ft(e) {
  return lh.has(Gt(e));
}
function Be(e) {
  return Ae(e).getComputedStyle(e);
}
function br(e) {
  return Ve(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ft(e) {
  if (Gt(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ci(e) && e.host || // Fallback.
    Ke(e)
  );
  return ci(n) ? n.host : n;
}
function fc(e) {
  const n = ft(e);
  return Ft(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : qe(n) && bn(n) ? n : fc(n);
}
function un(e, n, t) {
  var r;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const o = fc(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Ae(o);
  if (a) {
    const s = yo(i);
    return n.concat(i, i.visualViewport || [], bn(o) ? o : [], s && t ? un(s) : []);
  }
  return n.concat(o, un(o, [], t));
}
function yo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function mc(e) {
  const n = Be(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const o = qe(e), a = o ? e.offsetWidth : t, i = o ? e.offsetHeight : r, s = Yn(t) !== a || Yn(r) !== i;
  return s && (t = a, r = i), {
    width: t,
    height: r,
    $: s
  };
}
function aa(e) {
  return Ve(e) ? e : e.contextElement;
}
function Lt(e) {
  const n = aa(e);
  if (!qe(n))
    return Ye(1);
  const t = n.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = mc(n);
  let i = (a ? Yn(t.width) : t.width) / r, s = (a ? Yn(t.height) : t.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const uh = /* @__PURE__ */ Ye(0);
function hc(e) {
  const n = Ae(e);
  return !oa() || !n.visualViewport ? uh : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function dh(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Ae(e) ? !1 : n;
}
function St(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), a = aa(e);
  let i = Ye(1);
  n && (r ? Ve(r) && (i = Lt(r)) : i = Lt(e));
  const s = dh(a, t, r) ? hc(a) : Ye(0);
  let l = (o.left + s.x) / i.x, d = (o.top + s.y) / i.y, p = o.width / i.x, f = o.height / i.y;
  if (a) {
    const m = Ae(a), g = r && Ve(r) ? Ae(r) : r;
    let x = m, h = yo(x);
    for (; h && r && g !== x; ) {
      const v = Lt(h), w = h.getBoundingClientRect(), b = Be(h), S = w.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, E = w.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      l *= v.x, d *= v.y, p *= v.x, f *= v.y, l += S, d += E, x = Ae(h), h = yo(x);
    }
  }
  return Kn({
    width: p,
    height: f,
    x: l,
    y: d
  });
}
function yr(e, n) {
  const t = br(e).scrollLeft;
  return n ? n.left + t : St(Ke(e)).left + t;
}
function gc(e, n) {
  const t = e.getBoundingClientRect(), r = t.left + n.scrollLeft - yr(e, t), o = t.top + n.scrollTop;
  return {
    x: r,
    y: o
  };
}
function ph(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = Ke(r), s = n ? xr(n.floating) : !1;
  if (r === i || s && a)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Ye(1);
  const p = Ye(0), f = qe(r);
  if ((f || !f && !a) && ((Gt(r) !== "body" || bn(i)) && (l = br(r)), qe(r))) {
    const g = St(r);
    d = Lt(r), p.x = g.x + r.clientLeft, p.y = g.y + r.clientTop;
  }
  const m = i && !f && !a ? gc(i, l) : Ye(0);
  return {
    width: t.width * d.x,
    height: t.height * d.y,
    x: t.x * d.x - l.scrollLeft * d.x + p.x + m.x,
    y: t.y * d.y - l.scrollTop * d.y + p.y + m.y
  };
}
function fh(e) {
  return Array.from(e.getClientRects());
}
function mh(e) {
  const n = Ke(e), t = br(e), r = e.ownerDocument.body, o = De(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), a = De(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -t.scrollLeft + yr(e);
  const s = -t.scrollTop;
  return Be(r).direction === "rtl" && (i += De(n.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
const li = 25;
function hh(e, n) {
  const t = Ae(e), r = Ke(e), o = t.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const p = oa();
    (!p || p && n === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  const d = yr(r);
  if (d <= 0) {
    const p = r.ownerDocument, f = p.body, m = getComputedStyle(f), g = p.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, x = Math.abs(r.clientWidth - f.clientWidth - g);
    x <= li && (a -= x);
  } else d <= li && (a += d);
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
const gh = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function vh(e, n) {
  const t = St(e, !0, n === "fixed"), r = t.top + e.clientTop, o = t.left + e.clientLeft, a = qe(e) ? Lt(e) : Ye(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, d = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: d
  };
}
function ui(e, n, t) {
  let r;
  if (n === "viewport")
    r = hh(e, t);
  else if (n === "document")
    r = mh(Ke(e));
  else if (Ve(n))
    r = vh(n, t);
  else {
    const o = hc(e);
    r = {
      x: n.x - o.x,
      y: n.y - o.y,
      width: n.width,
      height: n.height
    };
  }
  return Kn(r);
}
function vc(e, n) {
  const t = ft(e);
  return t === n || !Ve(t) || Ft(t) ? !1 : Be(t).position === "fixed" || vc(t, n);
}
function xh(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let r = un(e, [], !1).filter((s) => Ve(s) && Gt(s) !== "body"), o = null;
  const a = Be(e).position === "fixed";
  let i = a ? ft(e) : e;
  for (; Ve(i) && !Ft(i); ) {
    const s = Be(i), l = ra(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && !!o && gh.has(o.position) || bn(i) && !l && vc(e, i)) ? r = r.filter((p) => p !== i) : o = s, i = ft(i);
  }
  return n.set(e, r), r;
}
function bh(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...t === "clippingAncestors" ? xr(n) ? [] : xh(n, this._c) : [].concat(t), r], s = i[0], l = i.reduce((d, p) => {
    const f = ui(n, p, o);
    return d.top = De(f.top, d.top), d.right = pt(f.right, d.right), d.bottom = pt(f.bottom, d.bottom), d.left = De(f.left, d.left), d;
  }, ui(n, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function yh(e) {
  const {
    width: n,
    height: t
  } = mc(e);
  return {
    width: n,
    height: t
  };
}
function wh(e, n, t) {
  const r = qe(n), o = Ke(n), a = t === "fixed", i = St(e, !0, a, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ye(0);
  function d() {
    l.x = yr(o);
  }
  if (r || !r && !a)
    if ((Gt(n) !== "body" || bn(o)) && (s = br(n)), r) {
      const g = St(n, !0, a, n);
      l.x = g.x + n.clientLeft, l.y = g.y + n.clientTop;
    } else o && d();
  a && !r && o && d();
  const p = o && !r && !a ? gc(o, s) : Ye(0), f = i.left + s.scrollLeft - l.x - p.x, m = i.top + s.scrollTop - l.y - p.y;
  return {
    x: f,
    y: m,
    width: i.width,
    height: i.height
  };
}
function Yr(e) {
  return Be(e).position === "static";
}
function di(e, n) {
  if (!qe(e) || Be(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Ke(e) === t && (t = t.ownerDocument.body), t;
}
function xc(e, n) {
  const t = Ae(e);
  if (xr(e))
    return t;
  if (!qe(e)) {
    let o = ft(e);
    for (; o && !Ft(o); ) {
      if (Ve(o) && !Yr(o))
        return o;
      o = ft(o);
    }
    return t;
  }
  let r = di(e, n);
  for (; r && rh(r) && Yr(r); )
    r = di(r, n);
  return r && Ft(r) && Yr(r) && !ra(r) ? t : r || ch(e) || t;
}
const Ch = async function(e) {
  const n = this.getOffsetParent || xc, t = this.getDimensions, r = await t(e.floating);
  return {
    reference: wh(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Sh(e) {
  return Be(e).direction === "rtl";
}
const Eh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ph,
  getDocumentElement: Ke,
  getClippingRect: bh,
  getOffsetParent: xc,
  getElementRects: Ch,
  getClientRects: fh,
  getDimensions: yh,
  getScale: Lt,
  isElement: Ve,
  isRTL: Sh
};
function bc(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function kh(e, n) {
  let t = null, r;
  const o = Ke(e);
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
    const x = Dn(f), h = Dn(o.clientWidth - (p + m)), v = Dn(o.clientHeight - (f + g)), w = Dn(p), S = {
      rootMargin: -x + "px " + -h + "px " + -v + "px " + -w + "px",
      threshold: De(0, pt(1, l)) || 1
    };
    let E = !0;
    function C(A) {
      const j = A[0].intersectionRatio;
      if (j !== l) {
        if (!E)
          return i();
        j ? i(!1, j) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      j === 1 && !bc(d, e.getBoundingClientRect()) && i(), E = !1;
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
function _h(e, n, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = aa(e), p = o || a ? [...d ? un(d) : [], ...un(n)] : [];
  p.forEach((w) => {
    o && w.addEventListener("scroll", t, {
      passive: !0
    }), a && w.addEventListener("resize", t);
  });
  const f = d && s ? kh(d, t) : null;
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
    h && !bc(h, w) && t(), h = w, x = requestAnimationFrame(v);
  }
  return t(), () => {
    var w;
    p.forEach((b) => {
      o && b.removeEventListener("scroll", t), a && b.removeEventListener("resize", t);
    }), f?.(), (w = g) == null || w.disconnect(), g = null, l && cancelAnimationFrame(x);
  };
}
const Rh = Xm, Ph = Jm, jh = qm, Mh = eh, Th = Km, pi = Ym, Oh = Qm, Dh = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Eh,
    ...t
  }, a = {
    ...o.platform,
    _c: r
  };
  return Gm(e, n, {
    ...o,
    platform: a
  });
};
var Ah = typeof document < "u", Nh = function() {
}, Vn = Ah ? zu : Nh;
function Zn(e, n) {
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
        if (!Zn(e[r], n[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Zn(e[a], n[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function yc(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function fi(e, n) {
  const t = yc(e);
  return Math.round(n * t) / t;
}
function qr(e) {
  const n = u.useRef(e);
  return Vn(() => {
    n.current = e;
  }), n;
}
function Ih(e) {
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
  Zn(m, r) || g(r);
  const [x, h] = u.useState(null), [v, w] = u.useState(null), b = u.useCallback((R) => {
    R !== A.current && (A.current = R, h(R));
  }, []), S = u.useCallback((R) => {
    R !== j.current && (j.current = R, w(R));
  }, []), E = a || x, C = i || v, A = u.useRef(null), j = u.useRef(null), P = u.useRef(p), L = l != null, B = qr(l), J = qr(o), Y = qr(d), U = u.useCallback(() => {
    if (!A.current || !j.current)
      return;
    const R = {
      placement: n,
      strategy: t,
      middleware: m
    };
    J.current && (R.platform = J.current), Dh(A.current, j.current, R).then((N) => {
      const _ = {
        ...N,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Y.current !== !1
      };
      H.current && !Zn(P.current, _) && (P.current = _, cr.flushSync(() => {
        f(_);
      }));
    });
  }, [m, n, t, J, Y]);
  Vn(() => {
    d === !1 && P.current.isPositioned && (P.current.isPositioned = !1, f((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [d]);
  const H = u.useRef(!1);
  Vn(() => (H.current = !0, () => {
    H.current = !1;
  }), []), Vn(() => {
    if (E && (A.current = E), C && (j.current = C), E && C) {
      if (B.current)
        return B.current(E, C, U);
      U();
    }
  }, [E, C, U, B, L]);
  const Q = u.useMemo(() => ({
    reference: A,
    floating: j,
    setReference: b,
    setFloating: S
  }), [b, S]), $ = u.useMemo(() => ({
    reference: E,
    floating: C
  }), [E, C]), ee = u.useMemo(() => {
    const R = {
      position: t,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return R;
    const N = fi($.floating, p.x), _ = fi($.floating, p.y);
    return s ? {
      ...R,
      transform: "translate(" + N + "px, " + _ + "px)",
      ...yc($.floating) >= 1.5 && {
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
const Lh = (e) => {
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
      return r && n(r) ? r.current != null ? pi({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? pi({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
}, Fh = (e, n) => ({
  ...Rh(e),
  options: [e, n]
}), zh = (e, n) => ({
  ...Ph(e),
  options: [e, n]
}), $h = (e, n) => ({
  ...Oh(e),
  options: [e, n]
}), Wh = (e, n) => ({
  ...jh(e),
  options: [e, n]
}), Vh = (e, n) => ({
  ...Mh(e),
  options: [e, n]
}), Bh = (e, n) => ({
  ...Th(e),
  options: [e, n]
}), Hh = (e, n) => ({
  ...Lh(e),
  options: [e, n]
});
var Uh = "Arrow", wc = u.forwardRef((e, n) => {
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
wc.displayName = Uh;
var Gh = wc;
function Yh(e) {
  const [n, t] = u.useState(void 0);
  return Pe(() => {
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
var ia = "Popper", [Cc, Yt] = tt(ia), [qh, Sc] = Cc(ia), Ec = (e) => {
  const { __scopePopper: n, children: t } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ c.jsx(qh, { scope: n, anchor: r, onAnchorChange: o, children: t });
};
Ec.displayName = ia;
var kc = "PopperAnchor", _c = u.forwardRef(
  (e, n) => {
    const { __scopePopper: t, virtualRef: r, ...o } = e, a = Sc(kc, t), i = u.useRef(null), s = ce(n, i), l = u.useRef(null);
    return u.useEffect(() => {
      const d = l.current;
      l.current = r?.current || i.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(se.div, { ...o, ref: s });
  }
);
_c.displayName = kc;
var sa = "PopperContent", [Kh, Zh] = Cc(sa), Rc = u.forwardRef(
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
    } = e, v = Sc(sa, t), [w, b] = u.useState(null), S = ce(n, (k) => b(k)), [E, C] = u.useState(null), A = Yh(E), j = A?.width ?? 0, P = A?.height ?? 0, L = r + (a !== "center" ? "-" + a : ""), B = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, J = Array.isArray(d) ? d : [d], Y = J.length > 0, U = {
      padding: B,
      boundary: J.filter(Jh),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Y
    }, { refs: H, floatingStyles: Q, placement: $, isPositioned: ee, middlewareData: R } = Ih({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: L,
      whileElementsMounted: (...k) => _h(...k, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        Fh({ mainAxis: o + P, alignmentAxis: i }),
        l && zh({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? $h() : void 0,
          ...U
        }),
        l && Wh({ ...U }),
        Vh({
          ...U,
          apply: ({ elements: k, rects: V, availableWidth: Z, availableHeight: F }) => {
            const { width: re, height: T } = V.reference, fe = k.floating.style;
            fe.setProperty("--radix-popper-available-width", `${Z}px`), fe.setProperty("--radix-popper-available-height", `${F}px`), fe.setProperty("--radix-popper-anchor-width", `${re}px`), fe.setProperty("--radix-popper-anchor-height", `${T}px`);
          }
        }),
        E && Hh({ element: E, padding: s }),
        Qh({ arrowWidth: j, arrowHeight: P }),
        m && Bh({ strategy: "referenceHidden", ...U })
      ]
    }), [N, _] = Mc($), y = We(x);
    Pe(() => {
      ee && y?.();
    }, [ee, y]);
    const M = R.arrow?.x, I = R.arrow?.y, O = R.arrow?.centerOffset !== 0, [G, W] = u.useState();
    return Pe(() => {
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
          Kh,
          {
            scope: t,
            placedSide: N,
            onArrowChange: C,
            arrowX: M,
            arrowY: I,
            shouldHideArrow: O,
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
Rc.displayName = sa;
var Pc = "PopperArrow", Xh = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, jc = u.forwardRef(function(n, t) {
  const { __scopePopper: r, ...o } = n, a = Zh(Pc, r), i = Xh[a.placedSide];
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
          Gh,
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
jc.displayName = Pc;
function Jh(e) {
  return e !== null;
}
var Qh = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    const { placement: t, rects: r, middlewareData: o } = n, i = o.arrow?.centerOffset !== 0, s = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [d, p] = Mc(t), f = { start: "0%", center: "50%", end: "100%" }[p], m = (o.arrow?.x ?? 0) + s / 2, g = (o.arrow?.y ?? 0) + l / 2;
    let x = "", h = "";
    return d === "bottom" ? (x = i ? f : `${m}px`, h = `${-l}px`) : d === "top" ? (x = i ? f : `${m}px`, h = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, h = i ? f : `${g}px`) : d === "left" && (x = `${r.floating.width + l}px`, h = i ? f : `${g}px`), { data: { x, y: h } };
  }
});
function Mc(e) {
  const [n, t = "center"] = e.split("-");
  return [n, t];
}
var wr = Ec, ca = _c, la = Rc, ua = jc, Kr = "rovingFocusGroup.onEntryFocus", eg = { bubbles: !1, cancelable: !0 }, yn = "RovingFocusGroup", [wo, Tc, tg] = Jo(yn), [ng, Oc] = tt(
  yn,
  [tg]
), [rg, og] = ng(yn), Dc = u.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(wo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(wo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(ag, { ...e, ref: n }) }) })
);
Dc.displayName = yn;
var ag = u.forwardRef((e, n) => {
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
  } = e, m = u.useRef(null), g = ce(n, m), x = Qo(a), [h, v] = wt({
    prop: i,
    defaultProp: s ?? null,
    onChange: l,
    caller: yn
  }), [w, b] = u.useState(!1), S = We(d), E = Tc(t), C = u.useRef(!1), [A, j] = u.useState(0);
  return u.useEffect(() => {
    const P = m.current;
    if (P)
      return P.addEventListener(Kr, S), () => P.removeEventListener(Kr, S);
  }, [S]), /* @__PURE__ */ c.jsx(
    rg,
    {
      scope: t,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: h,
      onItemFocus: u.useCallback(
        (P) => v(P),
        [v]
      ),
      onItemShiftTab: u.useCallback(() => b(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => j((P) => P + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => j((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ c.jsx(
        se.div,
        {
          tabIndex: w || A === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: X(e.onFocus, (P) => {
            const L = !C.current;
            if (P.target === P.currentTarget && L && !w) {
              const B = new CustomEvent(Kr, eg);
              if (P.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const J = E().filter(($) => $.focusable), Y = J.find(($) => $.active), U = J.find(($) => $.id === h), Q = [Y, U, ...J].filter(
                  Boolean
                ).map(($) => $.ref.current);
                Ic(Q, p);
              }
            }
            C.current = !1;
          }),
          onBlur: X(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Ac = "RovingFocusGroupItem", Nc = u.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, l = Le(), d = a || l, p = og(Ac, t), f = p.currentTabStopId === d, m = Tc(t), { onFocusableItemAdd: g, onFocusableItemRemove: x, currentTabStopId: h } = p;
    return u.useEffect(() => {
      if (r)
        return g(), () => x();
    }, [r, g, x]), /* @__PURE__ */ c.jsx(
      wo.ItemSlot,
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
            onMouseDown: X(e.onMouseDown, (v) => {
              r ? p.onItemFocus(d) : v.preventDefault();
            }),
            onFocus: X(e.onFocus, () => p.onItemFocus(d)),
            onKeyDown: X(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const w = cg(v, p.orientation, p.dir);
              if (w !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let S = m().filter((E) => E.focusable).map((E) => E.ref.current);
                if (w === "last") S.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && S.reverse();
                  const E = S.indexOf(v.currentTarget);
                  S = p.loop ? lg(S, E + 1) : S.slice(E + 1);
                }
                setTimeout(() => Ic(S));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: f, hasTabStop: h != null }) : i
          }
        )
      }
    );
  }
);
Nc.displayName = Ac;
var ig = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function sg(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function cg(e, n, t) {
  const r = sg(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return ig[r];
}
function Ic(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function lg(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var ug = Dc, dg = Nc;
// @__NO_SIDE_EFFECTS__
function pg(e) {
  const n = /* @__PURE__ */ fg(e), t = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(hg);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function fg(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (u.isValidElement(o)) {
      const i = vg(o), s = gg(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? nt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var mg = /* @__PURE__ */ Symbol("radix.slottable");
function hg(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === mg;
}
function gg(e, n) {
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
function vg(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Co = ["Enter", " "], xg = ["ArrowDown", "PageUp", "Home"], Lc = ["ArrowUp", "PageDown", "End"], bg = [...xg, ...Lc], yg = {
  ltr: [...Co, "ArrowRight"],
  rtl: [...Co, "ArrowLeft"]
}, wg = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, wn = "Menu", [dn, Cg, Sg] = Jo(wn), [Pt, Fc] = tt(wn, [
  Sg,
  Yt,
  Oc
]), Cn = Yt(), zc = Oc(), [$c, mt] = Pt(wn), [Eg, Sn] = Pt(wn), Wc = (e) => {
  const { __scopeMenu: n, open: t = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = Cn(n), [l, d] = u.useState(null), p = u.useRef(!1), f = We(a), m = Qo(o);
  return u.useEffect(() => {
    const g = () => {
      p.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => p.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(wr, { ...s, children: /* @__PURE__ */ c.jsx(
    $c,
    {
      scope: n,
      open: t,
      onOpenChange: f,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        Eg,
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
Wc.displayName = wn;
var kg = "MenuAnchor", da = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = Cn(t);
    return /* @__PURE__ */ c.jsx(ca, { ...o, ...r, ref: n });
  }
);
da.displayName = kg;
var pa = "MenuPortal", [_g, Vc] = Pt(pa, {
  forceMount: void 0
}), Bc = (e) => {
  const { __scopeMenu: n, forceMount: t, children: r, container: o } = e, a = mt(pa, n);
  return /* @__PURE__ */ c.jsx(_g, { scope: n, forceMount: t, children: /* @__PURE__ */ c.jsx(rt, { present: t || a.open, children: /* @__PURE__ */ c.jsx(ur, { asChild: !0, container: o, children: r }) }) });
};
Bc.displayName = pa;
var Fe = "MenuContent", [Rg, fa] = Pt(Fe), Hc = u.forwardRef(
  (e, n) => {
    const t = Vc(Fe, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, a = mt(Fe, e.__scopeMenu), i = Sn(Fe, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(dn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(rt, { present: r || a.open, children: /* @__PURE__ */ c.jsx(dn.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ c.jsx(Pg, { ...o, ref: n }) : /* @__PURE__ */ c.jsx(jg, { ...o, ref: n }) }) }) });
  }
), Pg = u.forwardRef(
  (e, n) => {
    const t = mt(Fe, e.__scopeMenu), r = u.useRef(null), o = ce(n, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Fo(a);
    }, []), /* @__PURE__ */ c.jsx(
      ma,
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
), jg = u.forwardRef((e, n) => {
  const t = mt(Fe, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    ma,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), Mg = /* @__PURE__ */ pg("MenuContent.ScrollLock"), ma = u.forwardRef(
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
    } = e, v = mt(Fe, t), w = Sn(Fe, t), b = Cn(t), S = zc(t), E = Cg(t), [C, A] = u.useState(null), j = u.useRef(null), P = ce(n, j, v.onContentChange), L = u.useRef(0), B = u.useRef(""), J = u.useRef(0), Y = u.useRef(null), U = u.useRef("right"), H = u.useRef(0), Q = x ? pr : u.Fragment, $ = x ? { as: Mg, allowPinchZoom: !0 } : void 0, ee = (N) => {
      const _ = B.current + N, y = E().filter((k) => !k.disabled), M = document.activeElement, I = y.find((k) => k.ref.current === M)?.textValue, O = y.map((k) => k.textValue), G = Vg(O, _, I), W = y.find((k) => k.textValue === G)?.ref.current;
      (function k(V) {
        B.current = V, window.clearTimeout(L.current), V !== "" && (L.current = window.setTimeout(() => k(""), 1e3));
      })(_), W && setTimeout(() => W.focus());
    };
    u.useEffect(() => () => window.clearTimeout(L.current), []), Lo();
    const R = u.useCallback((N) => U.current === Y.current?.side && Hg(N, Y.current?.area), []);
    return /* @__PURE__ */ c.jsx(
      Rg,
      {
        scope: t,
        searchRef: B,
        onItemEnter: u.useCallback(
          (N) => {
            R(N) && N.preventDefault();
          },
          [R]
        ),
        onItemLeave: u.useCallback(
          (N) => {
            R(N) || (j.current?.focus(), A(null));
          },
          [R]
        ),
        onTriggerLeave: u.useCallback(
          (N) => {
            R(N) && N.preventDefault();
          },
          [R]
        ),
        pointerGraceTimerRef: J,
        onPointerGraceIntentChange: u.useCallback((N) => {
          Y.current = N;
        }, []),
        children: /* @__PURE__ */ c.jsx(Q, { ...$, children: /* @__PURE__ */ c.jsx(
          lr,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: X(a, (N) => {
              N.preventDefault(), j.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ c.jsx(
              gn,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: d,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: m,
                onDismiss: g,
                children: /* @__PURE__ */ c.jsx(
                  ug,
                  {
                    asChild: !0,
                    ...S,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: A,
                    onEntryFocus: X(l, (N) => {
                      w.isUsingKeyboardRef.current || N.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      la,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": sl(v.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...h,
                        ref: P,
                        style: { outline: "none", ...h.style },
                        onKeyDown: X(h.onKeyDown, (N) => {
                          const y = N.target.closest("[data-radix-menu-content]") === N.currentTarget, M = N.ctrlKey || N.altKey || N.metaKey, I = N.key.length === 1;
                          y && (N.key === "Tab" && N.preventDefault(), !M && I && ee(N.key));
                          const O = j.current;
                          if (N.target !== O || !bg.includes(N.key)) return;
                          N.preventDefault();
                          const W = E().filter((k) => !k.disabled).map((k) => k.ref.current);
                          Lc.includes(N.key) && W.reverse(), $g(W);
                        }),
                        onBlur: X(e.onBlur, (N) => {
                          N.currentTarget.contains(N.target) || (window.clearTimeout(L.current), B.current = "");
                        }),
                        onPointerMove: X(
                          e.onPointerMove,
                          pn((N) => {
                            const _ = N.target, y = H.current !== N.clientX;
                            if (N.currentTarget.contains(_) && y) {
                              const M = N.clientX > H.current ? "right" : "left";
                              U.current = M, H.current = N.clientX;
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
Hc.displayName = Fe;
var Tg = "MenuGroup", ha = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(se.div, { role: "group", ...r, ref: n });
  }
);
ha.displayName = Tg;
var Og = "MenuLabel", Uc = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(se.div, { ...r, ref: n });
  }
);
Uc.displayName = Og;
var Xn = "MenuItem", mi = "menu.itemSelect", Cr = u.forwardRef(
  (e, n) => {
    const { disabled: t = !1, onSelect: r, ...o } = e, a = u.useRef(null), i = Sn(Xn, e.__scopeMenu), s = fa(Xn, e.__scopeMenu), l = ce(n, a), d = u.useRef(!1), p = () => {
      const f = a.current;
      if (!t && f) {
        const m = new CustomEvent(mi, { bubbles: !0, cancelable: !0 });
        f.addEventListener(mi, (g) => r?.(g), { once: !0 }), ls(f, m), m.defaultPrevented ? d.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Gc,
      {
        ...o,
        ref: l,
        disabled: t,
        onClick: X(e.onClick, p),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), d.current = !0;
        },
        onPointerUp: X(e.onPointerUp, (f) => {
          d.current || f.currentTarget?.click();
        }),
        onKeyDown: X(e.onKeyDown, (f) => {
          const m = s.searchRef.current !== "";
          t || m && f.key === " " || Co.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
Cr.displayName = Xn;
var Gc = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, disabled: r = !1, textValue: o, ...a } = e, i = fa(Xn, t), s = zc(t), l = u.useRef(null), d = ce(n, l), [p, f] = u.useState(!1), [m, g] = u.useState("");
    return u.useEffect(() => {
      const x = l.current;
      x && g((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      dn.ItemSlot,
      {
        scope: t,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ c.jsx(dg, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ c.jsx(
          se.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: X(
              e.onPointerMove,
              pn((x) => {
                r ? i.onItemLeave(x) : (i.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: X(
              e.onPointerLeave,
              pn((x) => i.onItemLeave(x))
            ),
            onFocus: X(e.onFocus, () => f(!0)),
            onBlur: X(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), Dg = "MenuCheckboxItem", Yc = u.forwardRef(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Jc, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ c.jsx(
      Cr,
      {
        role: "menuitemcheckbox",
        "aria-checked": Jn(t) ? "mixed" : t,
        ...o,
        ref: n,
        "data-state": xa(t),
        onSelect: X(
          o.onSelect,
          () => r?.(Jn(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Yc.displayName = Dg;
var qc = "MenuRadioGroup", [Ag, Ng] = Pt(
  qc,
  { value: void 0, onValueChange: () => {
  } }
), Kc = u.forwardRef(
  (e, n) => {
    const { value: t, onValueChange: r, ...o } = e, a = We(r);
    return /* @__PURE__ */ c.jsx(Ag, { scope: e.__scopeMenu, value: t, onValueChange: a, children: /* @__PURE__ */ c.jsx(ha, { ...o, ref: n }) });
  }
);
Kc.displayName = qc;
var Zc = "MenuRadioItem", Xc = u.forwardRef(
  (e, n) => {
    const { value: t, ...r } = e, o = Ng(Zc, e.__scopeMenu), a = t === o.value;
    return /* @__PURE__ */ c.jsx(Jc, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      Cr,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: n,
        "data-state": xa(a),
        onSelect: X(
          r.onSelect,
          () => o.onValueChange?.(t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Xc.displayName = Zc;
var ga = "MenuItemIndicator", [Jc, Ig] = Pt(
  ga,
  { checked: !1 }
), Qc = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, forceMount: r, ...o } = e, a = Ig(ga, t);
    return /* @__PURE__ */ c.jsx(
      rt,
      {
        present: r || Jn(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          se.span,
          {
            ...o,
            ref: n,
            "data-state": xa(a.checked)
          }
        )
      }
    );
  }
);
Qc.displayName = ga;
var Lg = "MenuSeparator", el = u.forwardRef(
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
el.displayName = Lg;
var Fg = "MenuArrow", tl = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = Cn(t);
    return /* @__PURE__ */ c.jsx(ua, { ...o, ...r, ref: n });
  }
);
tl.displayName = Fg;
var va = "MenuSub", [zg, nl] = Pt(va), rl = (e) => {
  const { __scopeMenu: n, children: t, open: r = !1, onOpenChange: o } = e, a = mt(va, n), i = Cn(n), [s, l] = u.useState(null), [d, p] = u.useState(null), f = We(o);
  return u.useEffect(() => (a.open === !1 && f(!1), () => f(!1)), [a.open, f]), /* @__PURE__ */ c.jsx(wr, { ...i, children: /* @__PURE__ */ c.jsx(
    $c,
    {
      scope: n,
      open: r,
      onOpenChange: f,
      content: d,
      onContentChange: p,
      children: /* @__PURE__ */ c.jsx(
        zg,
        {
          scope: n,
          contentId: Le(),
          triggerId: Le(),
          trigger: s,
          onTriggerChange: l,
          children: t
        }
      )
    }
  ) });
};
rl.displayName = va;
var an = "MenuSubTrigger", ol = u.forwardRef(
  (e, n) => {
    const t = mt(an, e.__scopeMenu), r = Sn(an, e.__scopeMenu), o = nl(an, e.__scopeMenu), a = fa(an, e.__scopeMenu), i = u.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, p = u.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return u.useEffect(() => p, [p]), u.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [s, l]), /* @__PURE__ */ c.jsx(da, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      Gc,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": o.contentId,
        "data-state": sl(t.open),
        ...e,
        ref: nt(n, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: X(
          e.onPointerMove,
          pn((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !t.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              t.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: X(
          e.onPointerLeave,
          pn((f) => {
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
        onKeyDown: X(e.onKeyDown, (f) => {
          const m = a.searchRef.current !== "";
          e.disabled || m && f.key === " " || yg[r.dir].includes(f.key) && (t.onOpenChange(!0), t.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
ol.displayName = an;
var al = "MenuSubContent", il = u.forwardRef(
  (e, n) => {
    const t = Vc(Fe, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, a = mt(Fe, e.__scopeMenu), i = Sn(Fe, e.__scopeMenu), s = nl(al, e.__scopeMenu), l = u.useRef(null), d = ce(n, l);
    return /* @__PURE__ */ c.jsx(dn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(rt, { present: r || a.open, children: /* @__PURE__ */ c.jsx(dn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      ma,
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
        onFocusOutside: X(e.onFocusOutside, (p) => {
          p.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: X(e.onEscapeKeyDown, (p) => {
          i.onClose(), p.preventDefault();
        }),
        onKeyDown: X(e.onKeyDown, (p) => {
          const f = p.currentTarget.contains(p.target), m = wg[i.dir].includes(p.key);
          f && m && (a.onOpenChange(!1), s.trigger?.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
il.displayName = al;
function sl(e) {
  return e ? "open" : "closed";
}
function Jn(e) {
  return e === "indeterminate";
}
function xa(e) {
  return Jn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function $g(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function Wg(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
function Vg(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((d) => d === n[0]) ? n[0] : n, a = t ? e.indexOf(t) : -1;
  let i = Wg(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((d) => d !== t));
  const l = i.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== t ? l : void 0;
}
function Bg(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let a = 0, i = n.length - 1; a < n.length; i = a++) {
    const s = n[a], l = n[i], d = s.x, p = s.y, f = l.x, m = l.y;
    p > r != m > r && t < (f - d) * (r - p) / (m - p) + d && (o = !o);
  }
  return o;
}
function Hg(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return Bg(t, n);
}
function pn(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var Ug = Wc, Gg = da, Yg = Bc, qg = Hc, Kg = ha, Zg = Uc, Xg = Cr, Jg = Yc, Qg = Kc, ev = Xc, tv = Qc, nv = el, rv = tl, ov = rl, av = ol, iv = il, Sr = "DropdownMenu", [sv] = tt(
  Sr,
  [Fc]
), je = Fc(), [cv, cl] = sv(Sr), ba = (e) => {
  const {
    __scopeDropdownMenu: n,
    children: t,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, l = je(n), d = u.useRef(null), [p, f] = wt({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: Sr
  });
  return /* @__PURE__ */ c.jsx(
    cv,
    {
      scope: n,
      triggerId: Le(),
      triggerRef: d,
      contentId: Le(),
      open: p,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: /* @__PURE__ */ c.jsx(Ug, { ...l, open: p, onOpenChange: f, dir: r, modal: s, children: t })
    }
  );
};
ba.displayName = Sr;
var ll = "DropdownMenuTrigger", ya = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, disabled: r = !1, ...o } = e, a = cl(ll, t), i = je(t);
    return /* @__PURE__ */ c.jsx(Gg, { asChild: !0, ...i, children: /* @__PURE__ */ c.jsx(
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
        ref: nt(n, a.triggerRef),
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
ya.displayName = ll;
var lv = "DropdownMenuPortal", Er = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = je(n);
  return /* @__PURE__ */ c.jsx(Yg, { ...r, ...t });
};
Er.displayName = lv;
var ul = "DropdownMenuContent", wa = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = cl(ul, t), a = je(t), i = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      qg,
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
wa.displayName = ul;
var uv = "DropdownMenuGroup", dl = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
    return /* @__PURE__ */ c.jsx(Kg, { ...o, ...r, ref: n });
  }
);
dl.displayName = uv;
var dv = "DropdownMenuLabel", pl = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
    return /* @__PURE__ */ c.jsx(Zg, { ...o, ...r, ref: n });
  }
);
pl.displayName = dv;
var pv = "DropdownMenuItem", Ca = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
    return /* @__PURE__ */ c.jsx(Xg, { ...o, ...r, ref: n });
  }
);
Ca.displayName = pv;
var fv = "DropdownMenuCheckboxItem", fl = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(Jg, { ...o, ...r, ref: n });
});
fl.displayName = fv;
var mv = "DropdownMenuRadioGroup", ml = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(Qg, { ...o, ...r, ref: n });
});
ml.displayName = mv;
var hv = "DropdownMenuRadioItem", hl = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(ev, { ...o, ...r, ref: n });
});
hl.displayName = hv;
var gv = "DropdownMenuItemIndicator", Sa = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(tv, { ...o, ...r, ref: n });
});
Sa.displayName = gv;
var vv = "DropdownMenuSeparator", gl = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(nv, { ...o, ...r, ref: n });
});
gl.displayName = vv;
var xv = "DropdownMenuArrow", bv = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
    return /* @__PURE__ */ c.jsx(rv, { ...o, ...r, ref: n });
  }
);
bv.displayName = xv;
var yv = (e) => {
  const { __scopeDropdownMenu: n, children: t, open: r, onOpenChange: o, defaultOpen: a } = e, i = je(n), [s, l] = wt({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ c.jsx(ov, { ...i, open: s, onOpenChange: l, children: t });
}, wv = "DropdownMenuSubTrigger", vl = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(av, { ...o, ...r, ref: n });
});
vl.displayName = wv;
var Cv = "DropdownMenuSubContent", xl = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = je(t);
  return /* @__PURE__ */ c.jsx(
    iv,
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
xl.displayName = Cv;
var Sv = ba, Ev = ya, kv = Er, _v = wa, Rv = Ca;
function v1({ ...e }) {
  return /* @__PURE__ */ c.jsx(ba, { "data-slot": "dropdown-menu", ...e });
}
function x1({ ...e }) {
  return /* @__PURE__ */ c.jsx(Er, { "data-slot": "dropdown-menu-portal", ...e });
}
function b1({ ...e }) {
  return /* @__PURE__ */ c.jsx(ya, { "data-slot": "dropdown-menu-trigger", ...e });
}
function y1({
  className: e,
  align: n = "start",
  sideOffset: t = 4,
  ...r
}) {
  return /* @__PURE__ */ c.jsx(Er, { children: /* @__PURE__ */ c.jsx(
    wa,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      align: n,
      className: D(
        "z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-2xl bg-white p-1 text-popover-foreground shadow-dropdown duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...r
    }
  ) });
}
function w1({ ...e }) {
  return /* @__PURE__ */ c.jsx(dl, { "data-slot": "dropdown-menu-group", ...e });
}
function C1({
  className: e,
  inset: n,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ c.jsx(
    Ca,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": n,
      "data-variant": t,
      className: D(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        e
      ),
      ...r
    }
  );
}
function S1({
  className: e,
  children: n,
  checked: t,
  inset: r,
  ...o
}) {
  return /* @__PURE__ */ c.jsxs(
    fl,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      "data-inset": r,
      className: D(
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
            children: /* @__PURE__ */ c.jsx(Sa, { children: /* @__PURE__ */ c.jsx(xn, {}) })
          }
        ),
        n
      ]
    }
  );
}
function E1({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(ml, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function k1({
  className: e,
  children: n,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(
    hl,
    {
      "data-slot": "dropdown-menu-radio-item",
      "data-inset": t,
      className: D(
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
            children: /* @__PURE__ */ c.jsx(Sa, { children: /* @__PURE__ */ c.jsx(xn, {}) })
          }
        ),
        n
      ]
    }
  );
}
function _1({
  className: e,
  inset: n,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    pl,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": n,
      className: D(
        "px-7 py-4 text-base leading-5 font-manrope font-semibold text-gray-900 data-inset:pl-7",
        e
      ),
      ...t
    }
  );
}
function R1({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    gl,
    {
      "data-slot": "dropdown-menu-separator",
      className: D("-mx-1 my-1 h-px bg-gray-50", e),
      ...n
    }
  );
}
function P1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: D(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        e
      ),
      ...n
    }
  );
}
function j1({ ...e }) {
  return /* @__PURE__ */ c.jsx(yv, { "data-slot": "dropdown-menu-sub", ...e });
}
function M1({
  className: e,
  inset: n,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(
    vl,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": n,
      className: D(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ c.jsx(gr, { className: "cn-rtl-flip ml-auto" })
      ]
    }
  );
}
function T1({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    xl,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: D(
        "z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        e
      ),
      ...n
    }
  );
}
var Pv = (e) => e.type === "checkbox", sn = (e) => e instanceof Date, Ea = (e) => e == null;
const bl = (e) => typeof e == "object";
var Et = (e) => !Ea(e) && !Array.isArray(e) && bl(e) && !sn(e), jv = (e) => Et(e) && e.target ? Pv(e.target) ? e.target.checked : e.target.value : e, Mv = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Tv = (e, n) => e.has(Mv(n)), Ov = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return Et(n) && n.hasOwnProperty("isPrototypeOf");
}, Dv = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function yl(e) {
  let n;
  const t = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    n = new Date(e);
  else if (!(Dv && (e instanceof Blob || r)) && (t || Et(e)))
    if (n = t ? [] : Object.create(Object.getPrototypeOf(e)), !t && !Ov(e))
      n = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (n[o] = yl(e[o]));
  else
    return e;
  return n;
}
var wl = (e) => /^\w*$/.test(e), So = (e) => e === void 0, Av = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Cl = (e) => Av(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Te = (e, n, t) => {
  if (!n || !Et(e))
    return t;
  const r = (wl(n) ? [n] : Cl(n)).reduce((o, a) => Ea(o) ? o : o[a], e);
  return So(r) || r === e ? So(e[n]) ? t : e[n] : r;
}, Zr = (e) => typeof e == "boolean", hi = (e, n, t) => {
  let r = -1;
  const o = wl(n) ? [n] : Cl(n), a = o.length, i = a - 1;
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
const gi = {
  BLUR: "blur",
  CHANGE: "change"
}, vi = {
  all: "all"
}, ka = ae.createContext(null);
ka.displayName = "HookFormContext";
const kr = () => ae.useContext(ka), Nv = (e) => {
  const { children: n, ...t } = e;
  return ae.createElement(ka.Provider, { value: t }, n);
};
var Iv = (e, n, t, r = !0) => {
  const o = {
    defaultValues: n._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const i = a;
        return n._proxyFormState[i] !== vi.all && (n._proxyFormState[i] = !r || vi.all), t && (t[i] = !0), e[i];
      }
    });
  return o;
};
const Sl = typeof window < "u" ? ae.useLayoutEffect : ae.useEffect;
function El(e) {
  const n = kr(), { control: t = n.control, disabled: r, name: o, exact: a } = e || {}, [i, s] = ae.useState(t._formState), l = ae.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Sl(() => t._subscribe({
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
  }, [t]), ae.useMemo(() => Iv(i, t, l.current, !1), [i, t]);
}
var Lv = (e) => typeof e == "string", xi = (e, n, t, r, o) => Lv(e) ? Te(t, e, o) : Array.isArray(e) ? e.map((a) => Te(t, a)) : t, bi = (e) => Ea(e) || !bl(e);
function Bn(e, n, t = /* @__PURE__ */ new WeakSet()) {
  if (bi(e) || bi(n))
    return Object.is(e, n);
  if (sn(e) && sn(n))
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
      if (sn(i) && sn(s) || Et(i) && Et(s) || Array.isArray(i) && Array.isArray(s) ? !Bn(i, s, t) : !Object.is(i, s))
        return !1;
    }
  }
  return !0;
}
function Fv(e) {
  const n = kr(), { control: t = n.control, name: r, defaultValue: o, disabled: a, exact: i, compute: s } = e || {}, l = ae.useRef(o), d = ae.useRef(s), p = ae.useRef(void 0), f = ae.useRef(t), m = ae.useRef(r);
  d.current = s;
  const [g, x] = ae.useState(() => {
    const E = t._getWatch(r, l.current);
    return d.current ? d.current(E) : E;
  }), h = ae.useCallback((E) => {
    const C = xi(r, t._names, E || t._formValues, !1, l.current);
    return d.current ? d.current(C) : C;
  }, [t._formValues, t._names, r]), v = ae.useCallback((E) => {
    if (!a) {
      const C = xi(r, t._names, E || t._formValues, !1, l.current);
      if (d.current) {
        const A = d.current(C);
        Bn(A, p.current) || (x(A), p.current = A);
      } else
        x(C);
    }
  }, [t._formValues, t._names, a, r]);
  Sl(() => ((f.current !== t || !Bn(m.current, r)) && (f.current = t, m.current = r, v()), t._subscribe({
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
    const E = !w && !Bn(b, r);
    return w || E ? h() : null;
  }, [a, w, r, b, h]);
  return S !== null ? S : g;
}
function zv(e) {
  const n = kr(), { name: t, disabled: r, control: o = n.control, shouldUnregister: a, defaultValue: i, exact: s = !0 } = e, l = Tv(o._names.array, t), d = ae.useMemo(() => Te(o._formValues, t, Te(o._defaultValues, t, i)), [o, t, i]), p = Fv({
    control: o,
    name: t,
    defaultValue: d,
    exact: s
  }), f = El({
    control: o,
    name: t,
    exact: s
  }), m = ae.useRef(e), g = ae.useRef(void 0), x = ae.useRef(o.register(t, {
    ...e.rules,
    value: p,
    ...Zr(e.disabled) ? { disabled: e.disabled } : {}
  }));
  m.current = e;
  const h = ae.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Te(f.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Te(f.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Te(f.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Te(f.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => Te(f.errors, t)
    }
  }), [f, t]), v = ae.useCallback((E) => x.current.onChange({
    target: {
      value: jv(E),
      name: t
    },
    type: gi.CHANGE
  }), [t]), w = ae.useCallback(() => x.current.onBlur({
    target: {
      value: Te(o._formValues, t),
      name: t
    },
    type: gi.BLUR
  }), [t, o._formValues]), b = ae.useCallback((E) => {
    const C = Te(o._fields, t);
    C && E && (C._f.ref = {
      focus: () => E.focus && E.focus(),
      select: () => E.select && E.select(),
      setCustomValidity: (A) => E.setCustomValidity(A),
      reportValidity: () => E.reportValidity()
    });
  }, [o._fields, t]), S = ae.useMemo(() => ({
    name: t,
    value: p,
    ...Zr(r) || f.disabled ? { disabled: f.disabled || r } : {},
    onChange: v,
    onBlur: w,
    ref: b
  }), [t, r, f.disabled, v, w, b, p]);
  return ae.useEffect(() => {
    const E = o._options.shouldUnregister || a, C = g.current;
    C && C !== t && !l && o.unregister(C), o.register(t, {
      ...m.current.rules,
      ...Zr(m.current.disabled) ? { disabled: m.current.disabled } : {}
    });
    const A = (j, P) => {
      const L = Te(o._fields, j);
      L && L._f && (L._f.mount = P);
    };
    if (A(t, !0), E) {
      const j = yl(Te(o._options.defaultValues, t, m.current.defaultValue));
      hi(o._defaultValues, t, j), So(Te(o._formValues, t)) && hi(o._formValues, t, j);
    }
    return !l && o.register(t), g.current = t, () => {
      (l ? E && !o._state.action : E) ? o.unregister(t) : A(t, !1);
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
const $v = (e) => e.render(zv(e)), kl = sr(
  ({ className: e, children: n, required: t, ...r }, o) => /* @__PURE__ */ c.jsxs(
    "label",
    {
      ref: o,
      "data-slot": "label",
      className: D("font-manrope font-medium text-sm text-gray-700", e),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx("span", { children: n }),
        t ? /* @__PURE__ */ c.jsx("span", { className: "text-base font-normal text-bright-red-600 ml-1 leading-[22px]", children: "*" }) : null
      ]
    }
  )
);
kl.displayName = "Label";
const O1 = Nv, _l = cs({}), D1 = ({
  ...e
}) => /* @__PURE__ */ c.jsx(_l.Provider, { value: { name: e.name }, children: /* @__PURE__ */ c.jsx($v, { ...e }) }), _r = () => {
  const e = fo(_l), n = fo(Rl), { getFieldState: t } = kr(), r = El({ name: e.name }), o = t(e.name, r);
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
}, Rl = cs({});
function A1({ className: e, ...n }) {
  const t = $u();
  return /* @__PURE__ */ c.jsx(Rl.Provider, { value: { id: t }, children: /* @__PURE__ */ c.jsx("div", { "data-slot": "form-item", className: D("grid gap-2", e), ...n }) });
}
function N1({ className: e, ...n }) {
  const { error: t, formItemId: r } = _r();
  return /* @__PURE__ */ c.jsx(
    kl,
    {
      "data-slot": "form-label",
      "data-error": !!t,
      className: e,
      htmlFor: r,
      ...n
    }
  );
}
function I1({ ...e }) {
  const { error: n, formItemId: t, formDescriptionId: r, formMessageId: o } = _r();
  return /* @__PURE__ */ c.jsx(
    mr,
    {
      "data-slot": "form-control",
      id: t,
      "aria-describedby": n ? `${r} ${o}` : `${r}`,
      "aria-invalid": !!n,
      ...e
    }
  );
}
function L1({ className: e, ...n }) {
  const { formDescriptionId: t } = _r();
  return /* @__PURE__ */ c.jsx(
    "p",
    {
      "data-slot": "form-description",
      id: t,
      className: D("text-muted-foreground text-sm", e),
      ...n
    }
  );
}
function F1({ className: e, ...n }) {
  const { error: t, formMessageId: r } = _r(), o = t ? String(t?.message ?? "") : n.children;
  return o ? /* @__PURE__ */ c.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: D("text-bright-red-600 text-sm", e),
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
function Wv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: D("inline-block", n), ...r, children: [
    /* @__PURE__ */ c.jsx("circle", { cx: "12.6457", cy: "4.35422", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "10.0876", cy: "9.80881", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "3.35422", cy: "11.0876", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "5.46091", cy: "5.63328", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("path", { d: "M5.19745 6.83691L3.91846 10.0344", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("path", { d: "M12.232 5.55786L10.3135 8.75533", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("path", { d: "M6.47645 6.83691L9.03442 8.7554", stroke: "currentColor" })
  ] });
}
function Vv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", className: D("inline-block", n), ...r, children: [
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
function Bv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: D("inline-block", n),
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
function Hv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: D("inline-block", n),
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
function Uv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: D("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M10.6517 3.73292C10.3353 3.1997 9.64138 3.1997 9.32503 3.73292L6.86562 7.83985C6.68193 8.13482 6.36558 8.29365 6.04922 8.21424L2.62035 7.46546C2.03866 7.34067 1.54882 7.93061 1.69169 8.56594L3.3449 15.6112C3.43675 15.9856 3.72249 16.2466 4.06946 16.2693C4.06946 16.2693 5.34508 16.6663 9.99856 16.6663C14.652 16.6663 15.9277 16.2693 15.9277 16.2693C16.1828 16.2012 16.5604 15.9743 16.6522 15.6112L18.3054 8.56594C18.4585 7.93061 17.9584 7.34067 17.3768 7.46546L13.9479 8.21424C13.6315 8.28231 13.305 8.13482 13.1315 7.83985L10.6517 3.73292Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeMiterlimit: "10"
    }
  ) });
}
function Gv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: D("inline-block", n),
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
function Yv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: D("inline-block", n),
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
function qv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: D("inline-block", n),
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
function Kv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: D("inline-block", n), ...r, children: [
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
function Zv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: D("inline-block", n), ...r, children: [
    /* @__PURE__ */ c.jsx("circle", { cx: "8", cy: "8", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "8", cy: "8", r: "4", fill: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "8", cy: "8", r: "5.5", stroke: "currentColor" })
  ] });
}
function Xv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: D("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM7.50001 5.41667C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H7.50001V5.41667ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function Jv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: D("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667H7.50001C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function Qv({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: D("inline-block", n),
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
function ex({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: D("inline-block", n),
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
function tx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: D("inline-block", n),
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
function nx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: D("inline-block", n),
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
function rx({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: D("inline-block", n),
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
function ox({ size: e, className: n, ...t }) {
  const r = Ee(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 48 48", fill: "none", className: D("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M30 16V32H10V16H30ZM32 12H8C6.9 12 6 12.9 6 14V34C6 35.1 6.9 36 8 36H32C33.1 36 34 35.1 34 34V27L42 35V13L34 21V14C34 12.9 33.1 12 32 12Z",
      fill: "currentColor"
    }
  ) });
}
const ax = {
  analytics: Wv,
  announcement: Vv,
  church: Bv,
  class: Hv,
  crown: Uv,
  event: Gv,
  gift: Yv,
  home: qv,
  list: Kv,
  livestream: Zv,
  "lock-closed": Xv,
  "lock-open": Jv,
  ministry: Qv,
  podcast: ex,
  series: tx,
  sermon: nx,
  subscription: rx,
  video: ox
};
function z1({ name: e, ...n }) {
  const t = ax[e];
  return /* @__PURE__ */ c.jsx(t, { ...n });
}
var An = { exports: {} }, Nn = { exports: {} }, le = {};
var yi;
function ix() {
  if (yi) return le;
  yi = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, t = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, a = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, l = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, m = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, g = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, h = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, v = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, w = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, b = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function S(C) {
    if (typeof C == "object" && C !== null) {
      var A = C.$$typeof;
      switch (A) {
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
                  return A;
              }
          }
        case t:
          return A;
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
var wi;
function sx() {
  return wi || (wi = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, t = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, r = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, o = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, a = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, i = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, l = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, d = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, p = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, m = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, g = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, x = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, h = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, v = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, w = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, b = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function S(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === r || T === d || T === a || T === o || T === f || T === m || typeof T == "object" && T !== null && (T.$$typeof === x || T.$$typeof === g || T.$$typeof === i || T.$$typeof === s || T.$$typeof === p || T.$$typeof === v || T.$$typeof === w || T.$$typeof === b || T.$$typeof === h);
    }
    function E(T) {
      if (typeof T == "object" && T !== null) {
        var fe = T.$$typeof;
        switch (fe) {
          case n:
            var te = T.type;
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
    var C = l, A = d, j = s, P = i, L = n, B = p, J = r, Y = x, U = g, H = t, Q = a, $ = o, ee = f, R = !1;
    function N(T) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(T) || E(T) === l;
    }
    function _(T) {
      return E(T) === d;
    }
    function y(T) {
      return E(T) === s;
    }
    function M(T) {
      return E(T) === i;
    }
    function I(T) {
      return typeof T == "object" && T !== null && T.$$typeof === n;
    }
    function O(T) {
      return E(T) === p;
    }
    function G(T) {
      return E(T) === r;
    }
    function W(T) {
      return E(T) === x;
    }
    function k(T) {
      return E(T) === g;
    }
    function V(T) {
      return E(T) === t;
    }
    function Z(T) {
      return E(T) === a;
    }
    function F(T) {
      return E(T) === o;
    }
    function re(T) {
      return E(T) === f;
    }
    ue.AsyncMode = C, ue.ConcurrentMode = A, ue.ContextConsumer = j, ue.ContextProvider = P, ue.Element = L, ue.ForwardRef = B, ue.Fragment = J, ue.Lazy = Y, ue.Memo = U, ue.Portal = H, ue.Profiler = Q, ue.StrictMode = $, ue.Suspense = ee, ue.isAsyncMode = N, ue.isConcurrentMode = _, ue.isContextConsumer = y, ue.isContextProvider = M, ue.isElement = I, ue.isForwardRef = O, ue.isFragment = G, ue.isLazy = W, ue.isMemo = k, ue.isPortal = V, ue.isProfiler = Z, ue.isStrictMode = F, ue.isSuspense = re, ue.isValidElementType = S, ue.typeOf = E;
  })()), ue;
}
var Ci;
function Pl() {
  return Ci || (Ci = 1, process.env.NODE_ENV === "production" ? Nn.exports = ix() : Nn.exports = sx()), Nn.exports;
}
var Xr, Si;
function cx() {
  if (Si) return Xr;
  Si = 1;
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
  return Xr = o() ? Object.assign : function(a, i) {
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
  }, Xr;
}
var Jr, Ei;
function _a() {
  if (Ei) return Jr;
  Ei = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jr = e, Jr;
}
var Qr, ki;
function jl() {
  return ki || (ki = 1, Qr = Function.call.bind(Object.prototype.hasOwnProperty)), Qr;
}
var eo, _i;
function lx() {
  if (_i) return eo;
  _i = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ _a(), t = {}, r = /* @__PURE__ */ jl();
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
  }, eo = o, eo;
}
var to, Ri;
function ux() {
  if (Ri) return to;
  Ri = 1;
  var e = Pl(), n = cx(), t = /* @__PURE__ */ _a(), r = /* @__PURE__ */ jl(), o = /* @__PURE__ */ lx(), a = function() {
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
  return to = function(s, l) {
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
      instanceOf: A,
      node: B(),
      objectOf: P,
      oneOf: j,
      oneOfType: L,
      shape: Y,
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
        var y = {}, M = 0;
      function I(G, W, k, V, Z, F, re) {
        if (V = V || m, F = F || k, re !== t) {
          if (l) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = V + ":" + k;
            !y[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[fe] = !0, M++);
          }
        }
        return W[k] == null ? G ? W[k] === null ? new h("The " + Z + " `" + F + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new h("The " + Z + " `" + F + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : _(W, k, V, Z, F);
      }
      var O = I.bind(null, !1);
      return O.isRequired = I.bind(null, !0), O;
    }
    function w(_) {
      function y(M, I, O, G, W, k) {
        var V = M[I], Z = $(V);
        if (Z !== _) {
          var F = ee(V);
          return new h(
            "Invalid " + G + " `" + W + "` of type " + ("`" + F + "` supplied to `" + O + "`, expected ") + ("`" + _ + "`."),
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
      function y(M, I, O, G, W) {
        if (typeof _ != "function")
          return new h("Property `" + W + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var k = M[I];
        if (!Array.isArray(k)) {
          var V = $(k);
          return new h("Invalid " + G + " `" + W + "` of type " + ("`" + V + "` supplied to `" + O + "`, expected an array."));
        }
        for (var Z = 0; Z < k.length; Z++) {
          var F = _(k, Z, O, G, W + "[" + Z + "]", t);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return v(y);
    }
    function E() {
      function _(y, M, I, O, G) {
        var W = y[M];
        if (!s(W)) {
          var k = $(W);
          return new h("Invalid " + O + " `" + G + "` of type " + ("`" + k + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(_);
    }
    function C() {
      function _(y, M, I, O, G) {
        var W = y[M];
        if (!e.isValidElementType(W)) {
          var k = $(W);
          return new h("Invalid " + O + " `" + G + "` of type " + ("`" + k + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(_);
    }
    function A(_) {
      function y(M, I, O, G, W) {
        if (!(M[I] instanceof _)) {
          var k = _.name || m, V = N(M[I]);
          return new h("Invalid " + G + " `" + W + "` of type " + ("`" + V + "` supplied to `" + O + "`, expected ") + ("instance of `" + k + "`."));
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
      function y(M, I, O, G, W) {
        for (var k = M[I], V = 0; V < _.length; V++)
          if (x(k, _[V]))
            return null;
        var Z = JSON.stringify(_, function(re, T) {
          var fe = ee(T);
          return fe === "symbol" ? String(T) : T;
        });
        return new h("Invalid " + G + " `" + W + "` of value `" + String(k) + "` " + ("supplied to `" + O + "`, expected one of " + Z + "."));
      }
      return v(y);
    }
    function P(_) {
      function y(M, I, O, G, W) {
        if (typeof _ != "function")
          return new h("Property `" + W + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var k = M[I], V = $(k);
        if (V !== "object")
          return new h("Invalid " + G + " `" + W + "` of type " + ("`" + V + "` supplied to `" + O + "`, expected an object."));
        for (var Z in k)
          if (r(k, Z)) {
            var F = _(k, Z, O, G, W + "." + Z, t);
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
        var M = _[y];
        if (typeof M != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + R(M) + " at index " + y + "."
          ), i;
      }
      function I(O, G, W, k, V) {
        for (var Z = [], F = 0; F < _.length; F++) {
          var re = _[F], T = re(O, G, W, k, V, t);
          if (T == null)
            return null;
          T.data && r(T.data, "expectedType") && Z.push(T.data.expectedType);
        }
        var fe = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new h("Invalid " + k + " `" + V + "` supplied to " + ("`" + W + "`" + fe + "."));
      }
      return v(I);
    }
    function B() {
      function _(y, M, I, O, G) {
        return H(y[M]) ? null : new h("Invalid " + O + " `" + G + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return v(_);
    }
    function J(_, y, M, I, O) {
      return new h(
        (_ || "React class") + ": " + y + " type `" + M + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function Y(_) {
      function y(M, I, O, G, W) {
        var k = M[I], V = $(k);
        if (V !== "object")
          return new h("Invalid " + G + " `" + W + "` of type `" + V + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var Z in _) {
          var F = _[Z];
          if (typeof F != "function")
            return J(O, G, W, Z, ee(F));
          var re = F(k, Z, O, G, W + "." + Z, t);
          if (re)
            return re;
        }
        return null;
      }
      return v(y);
    }
    function U(_) {
      function y(M, I, O, G, W) {
        var k = M[I], V = $(k);
        if (V !== "object")
          return new h("Invalid " + G + " `" + W + "` of type `" + V + "` " + ("supplied to `" + O + "`, expected `object`."));
        var Z = n({}, M[I], _);
        for (var F in Z) {
          var re = _[F];
          if (r(_, F) && typeof re != "function")
            return J(O, G, W, F, ee(re));
          if (!re)
            return new h(
              "Invalid " + G + " `" + W + "` key `" + F + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(M[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var T = re(k, F, O, G, W + "." + F, t);
          if (T)
            return T;
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
            var M = y.call(_), I;
            if (y !== _.entries) {
              for (; !(I = M.next()).done; )
                if (!H(I.value))
                  return !1;
            } else
              for (; !(I = M.next()).done; ) {
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
    function R(_) {
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
  }, to;
}
var no, Pi;
function dx() {
  if (Pi) return no;
  Pi = 1;
  var e = /* @__PURE__ */ _a();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, no = function() {
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
  }, no;
}
var ji;
function px() {
  if (ji) return An.exports;
  if (ji = 1, process.env.NODE_ENV !== "production") {
    var e = Pl(), n = !0;
    An.exports = /* @__PURE__ */ ux()(e.isElement, n);
  } else
    An.exports = /* @__PURE__ */ dx()();
  return An.exports;
}
var fx = /* @__PURE__ */ px();
const he = /* @__PURE__ */ Io(fx), mx = /* @__PURE__ */ new Map([
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
function zt(e, n, t) {
  const r = hx(e), { webkitRelativePath: o } = e, a = typeof n == "string" ? n : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && Mi(r, "path", a), Mi(r, "relativePath", a), r;
}
function hx(e) {
  const { name: n } = e;
  if (n && n.lastIndexOf(".") !== -1 && !e.type) {
    const r = n.split(".").pop().toLowerCase(), o = mx.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Mi(e, n, t) {
  Object.defineProperty(e, n, {
    value: t,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const gx = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function vx(e) {
  return Rt(this, void 0, void 0, function* () {
    return Qn(e) && xx(e.dataTransfer) ? Cx(e.dataTransfer, e.type) : bx(e) ? yx(e) : Array.isArray(e) && e.every((n) => "getFile" in n && typeof n.getFile == "function") ? wx(e) : [];
  });
}
function xx(e) {
  return Qn(e);
}
function bx(e) {
  return Qn(e) && Qn(e.target);
}
function Qn(e) {
  return typeof e == "object" && e !== null;
}
function yx(e) {
  return Eo(e.target.files).map((n) => zt(n));
}
function wx(e) {
  return Rt(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((t) => t.getFile()))).map((t) => zt(t));
  });
}
function Cx(e, n) {
  return Rt(this, void 0, void 0, function* () {
    if (e.items) {
      const t = Eo(e.items).filter((o) => o.kind === "file");
      if (n !== "drop")
        return t;
      const r = yield Promise.all(t.map(Sx));
      return Ti(Ml(r));
    }
    return Ti(Eo(e.files).map((t) => zt(t)));
  });
}
function Ti(e) {
  return e.filter((n) => gx.indexOf(n.name) === -1);
}
function Eo(e) {
  if (e === null)
    return [];
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    n.push(r);
  }
  return n;
}
function Sx(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Oi(e);
  const n = e.webkitGetAsEntry();
  return n && n.isDirectory ? Tl(n) : Oi(e, n);
}
function Ml(e) {
  return e.reduce((n, t) => [
    ...n,
    ...Array.isArray(t) ? Ml(t) : [t]
  ], []);
}
function Oi(e, n) {
  return Rt(this, void 0, void 0, function* () {
    var t;
    if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
      const a = yield e.getAsFileSystemHandle();
      if (a === null)
        throw new Error(`${e} is not a File`);
      if (a !== void 0) {
        const i = yield a.getFile();
        return i.handle = a, zt(i);
      }
    }
    const r = e.getAsFile();
    if (!r)
      throw new Error(`${e} is not a File`);
    return zt(r, (t = n?.fullPath) !== null && t !== void 0 ? t : void 0);
  });
}
function Ex(e) {
  return Rt(this, void 0, void 0, function* () {
    return e.isDirectory ? Tl(e) : kx(e);
  });
}
function Tl(e) {
  const n = e.createReader();
  return new Promise((t, r) => {
    const o = [];
    function a() {
      n.readEntries((i) => Rt(this, void 0, void 0, function* () {
        if (i.length) {
          const s = Promise.all(i.map(Ex));
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
function kx(e) {
  return Rt(this, void 0, void 0, function* () {
    return new Promise((n, t) => {
      e.file((r) => {
        const o = zt(r, e.fullPath);
        n(o);
      }, (r) => {
        t(r);
      });
    });
  });
}
var In = {}, Di;
function _x() {
  return Di || (Di = 1, In.__esModule = !0, In.default = function(e, n) {
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
  }), In;
}
var Rx = _x();
const ro = /* @__PURE__ */ Io(Rx);
function Ai(e) {
  return Mx(e) || jx(e) || Dl(e) || Px();
}
function Px() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jx(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Mx(e) {
  if (Array.isArray(e)) return ko(e);
}
function Ni(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ii(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ni(Object(t), !0).forEach(function(r) {
      Ol(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ni(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Ol(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function fn(e, n) {
  return Dx(e) || Ox(e, n) || Dl(e, n) || Tx();
}
function Tx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dl(e, n) {
  if (e) {
    if (typeof e == "string") return ko(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ko(e, n);
  }
}
function ko(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Ox(e, n) {
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
function Dx(e) {
  if (Array.isArray(e)) return e;
}
var Ax = typeof ro == "function" ? ro : ro.default, Nx = "file-invalid-type", Ix = "file-too-large", Lx = "file-too-small", Fx = "too-many-files", zx = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = n.split(","), r = t.length > 1 ? "one of ".concat(t.join(", ")) : t[0];
  return {
    code: Nx,
    message: "File type must be ".concat(r)
  };
}, Li = function(n) {
  return {
    code: Ix,
    message: "File is larger than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, Fi = function(n) {
  return {
    code: Lx,
    message: "File is smaller than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, $x = {
  code: Fx,
  message: "Too many files"
};
function Al(e, n) {
  var t = e.type === "application/x-moz-file" || Ax(e, n);
  return [t, t ? null : zx(n)];
}
function Nl(e, n, t) {
  if (bt(e.size))
    if (bt(n) && bt(t)) {
      if (e.size > t) return [!1, Li(t)];
      if (e.size < n) return [!1, Fi(n)];
    } else {
      if (bt(n) && e.size < n) return [!1, Fi(n)];
      if (bt(t) && e.size > t) return [!1, Li(t)];
    }
  return [!0, null];
}
function bt(e) {
  return e != null;
}
function Wx(e) {
  var n = e.files, t = e.accept, r = e.minSize, o = e.maxSize, a = e.multiple, i = e.maxFiles, s = e.validator;
  return !a && n.length > 1 || a && i >= 1 && n.length > i ? !1 : n.every(function(l) {
    var d = Al(l, t), p = fn(d, 1), f = p[0], m = Nl(l, r, o), g = fn(m, 1), x = g[0], h = s ? s(l) : null;
    return f && x && !h;
  });
}
function er(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function Ln(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(n) {
    return n === "Files" || n === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function zi(e) {
  e.preventDefault();
}
function Vx(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Bx(e) {
  return e.indexOf("Edge/") !== -1;
}
function Hx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return Vx(e) || Bx(e);
}
function Ue() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return function(r) {
    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
      a[i - 1] = arguments[i];
    return n.some(function(s) {
      return !er(r) && s && s.apply(void 0, [r].concat(a)), er(r);
    });
  };
}
function Ux() {
  return "showOpenFilePicker" in window;
}
function Gx(e) {
  if (bt(e)) {
    var n = Object.entries(e).filter(function(t) {
      var r = fn(t, 2), o = r[0], a = r[1], i = !0;
      return Il(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), i = !1), (!Array.isArray(a) || !a.every(Ll)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), i = !1), i;
    }).reduce(function(t, r) {
      var o = fn(r, 2), a = o[0], i = o[1];
      return Ii(Ii({}, t), {}, Ol({}, a, i));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: n
    }];
  }
  return e;
}
function Yx(e) {
  if (bt(e))
    return Object.entries(e).reduce(function(n, t) {
      var r = fn(t, 2), o = r[0], a = r[1];
      return [].concat(Ai(n), [o], Ai(a));
    }, []).filter(function(n) {
      return Il(n) || Ll(n);
    }).join(",");
}
function qx(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Kx(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function Il(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Ll(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Zx = ["children"], Xx = ["open"], Jx = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], Qx = ["refKey", "onChange", "onClick"];
function e0(e) {
  return r0(e) || n0(e) || Fl(e) || t0();
}
function t0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function r0(e) {
  if (Array.isArray(e)) return _o(e);
}
function oo(e, n) {
  return i0(e) || a0(e, n) || Fl(e, n) || o0();
}
function o0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fl(e, n) {
  if (e) {
    if (typeof e == "string") return _o(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _o(e, n);
  }
}
function _o(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function a0(e, n) {
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
function i0(e) {
  if (Array.isArray(e)) return e;
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
function ye(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? $i(Object(t), !0).forEach(function(r) {
      Ro(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $i(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Ro(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function tr(e, n) {
  if (e == null) return {};
  var t = s0(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function s0(e, n) {
  if (e == null) return {};
  var t = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var Ra = /* @__PURE__ */ sr(function(e, n) {
  var t = e.children, r = tr(e, Zx), o = Pa(r), a = o.open, i = tr(o, Xx);
  return Vu(n, function() {
    return {
      open: a
    };
  }, [a]), /* @__PURE__ */ ae.createElement(Bu, null, t(ye(ye({}, i), {}, {
    open: a
  })));
});
Ra.displayName = "Dropzone";
var zl = {
  disabled: !1,
  getFilesFromEvent: vx,
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
Ra.defaultProps = zl;
Ra.propTypes = {
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
var Po = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Pa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = ye(ye({}, zl), e), t = n.accept, r = n.disabled, o = n.getFilesFromEvent, a = n.maxSize, i = n.minSize, s = n.multiple, l = n.maxFiles, d = n.onDragEnter, p = n.onDragLeave, f = n.onDragOver, m = n.onDrop, g = n.onDropAccepted, x = n.onDropRejected, h = n.onFileDialogCancel, v = n.onFileDialogOpen, w = n.useFsAccessApi, b = n.autoFocus, S = n.preventDropOnDocument, E = n.noClick, C = n.noKeyboard, A = n.noDrag, j = n.noDragEventsBubbling, P = n.onError, L = n.validator, B = dt(function() {
    return Yx(t);
  }, [t]), J = dt(function() {
    return Gx(t);
  }, [t]), Y = dt(function() {
    return typeof v == "function" ? v : Wi;
  }, [v]), U = dt(function() {
    return typeof h == "function" ? h : Wi;
  }, [h]), H = Je(null), Q = Je(null), $ = Wu(c0, Po), ee = oo($, 2), R = ee[0], N = ee[1], _ = R.isFocused, y = R.isFileDialogActive, M = Je(typeof window < "u" && window.isSecureContext && w && Ux()), I = function() {
    !M.current && y && setTimeout(function() {
      if (Q.current) {
        var ne = Q.current.files;
        ne.length || (N({
          type: "closeDialog"
        }), U());
      }
    }, 300);
  };
  yt(function() {
    return window.addEventListener("focus", I, !1), function() {
      window.removeEventListener("focus", I, !1);
    };
  }, [Q, y, U, M]);
  var O = Je([]), G = function(ne) {
    H.current && H.current.contains(ne.target) || (ne.preventDefault(), O.current = []);
  };
  yt(function() {
    return S && (document.addEventListener("dragover", zi, !1), document.addEventListener("drop", G, !1)), function() {
      S && (document.removeEventListener("dragover", zi), document.removeEventListener("drop", G));
    };
  }, [H, S]), yt(function() {
    return !r && b && H.current && H.current.focus(), function() {
    };
  }, [H, b, r]);
  var W = xe(function(z) {
    P ? P(z) : console.error(z);
  }, [P]), k = xe(function(z) {
    z.preventDefault(), z.persist(), Se(z), O.current = [].concat(e0(O.current), [z.target]), Ln(z) && Promise.resolve(o(z)).then(function(ne) {
      if (!(er(z) && !j)) {
        var de = ne.length, ge = de > 0 && Wx({
          files: ne,
          accept: B,
          minSize: i,
          maxSize: a,
          multiple: s,
          maxFiles: l,
          validator: L
        }), Re = de > 0 && !ge;
        N({
          isDragAccept: ge,
          isDragReject: Re,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), d && d(z);
      }
    }).catch(function(ne) {
      return W(ne);
    });
  }, [o, d, W, j, B, i, a, s, l, L]), V = xe(function(z) {
    z.preventDefault(), z.persist(), Se(z);
    var ne = Ln(z);
    if (ne && z.dataTransfer)
      try {
        z.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return ne && f && f(z), !1;
  }, [f, j]), Z = xe(function(z) {
    z.preventDefault(), z.persist(), Se(z);
    var ne = O.current.filter(function(ge) {
      return H.current && H.current.contains(ge);
    }), de = ne.indexOf(z.target);
    de !== -1 && ne.splice(de, 1), O.current = ne, !(ne.length > 0) && (N({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), Ln(z) && p && p(z));
  }, [H, p, j]), F = xe(function(z, ne) {
    var de = [], ge = [];
    z.forEach(function(Re) {
      var at = Al(Re, B), it = oo(at, 2), Kt = it[0], Zt = it[1], ze = Nl(Re, i, a), st = oo(ze, 2), Xt = st[0], Nr = st[1], Ir = L ? L(Re) : null;
      if (Kt && Xt && !Ir)
        de.push(Re);
      else {
        var Lr = [Zt, Nr];
        Ir && (Lr = Lr.concat(Ir)), ge.push({
          file: Re,
          errors: Lr.filter(function(Fu) {
            return Fu;
          })
        });
      }
    }), (!s && de.length > 1 || s && l >= 1 && de.length > l) && (de.forEach(function(Re) {
      ge.push({
        file: Re,
        errors: [$x]
      });
    }), de.splice(0)), N({
      acceptedFiles: de,
      fileRejections: ge,
      isDragReject: ge.length > 0,
      type: "setFiles"
    }), m && m(de, ge, ne), ge.length > 0 && x && x(ge, ne), de.length > 0 && g && g(de, ne);
  }, [N, s, B, i, a, l, m, g, x, L]), re = xe(function(z) {
    z.preventDefault(), z.persist(), Se(z), O.current = [], Ln(z) && Promise.resolve(o(z)).then(function(ne) {
      er(z) && !j || F(ne, z);
    }).catch(function(ne) {
      return W(ne);
    }), N({
      type: "reset"
    });
  }, [o, F, W, j]), T = xe(function() {
    if (M.current) {
      N({
        type: "openDialog"
      }), Y();
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
        qx(ne) ? (U(ne), N({
          type: "closeDialog"
        })) : Kx(ne) ? (M.current = !1, Q.current ? (Q.current.value = null, Q.current.click()) : W(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : W(ne);
      });
      return;
    }
    Q.current && (N({
      type: "openDialog"
    }), Y(), Q.current.value = null, Q.current.click());
  }, [N, Y, U, w, F, W, J, s]), fe = xe(function(z) {
    !H.current || !H.current.isEqualNode(z.target) || (z.key === " " || z.key === "Enter" || z.keyCode === 32 || z.keyCode === 13) && (z.preventDefault(), T());
  }, [H, T]), te = xe(function() {
    N({
      type: "focus"
    });
  }, []), oe = xe(function() {
    N({
      type: "blur"
    });
  }, []), we = xe(function() {
    E || (Hx() ? setTimeout(T, 0) : T());
  }, [E, T]), be = function(ne) {
    return r ? null : ne;
  }, _e = function(ne) {
    return C ? null : be(ne);
  }, me = function(ne) {
    return A ? null : be(ne);
  }, Se = function(ne) {
    j && ne.stopPropagation();
  }, jt = dt(function() {
    return function() {
      var z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ne = z.refKey, de = ne === void 0 ? "ref" : ne, ge = z.role, Re = z.onKeyDown, at = z.onFocus, it = z.onBlur, Kt = z.onClick, Zt = z.onDragEnter, ze = z.onDragOver, st = z.onDragLeave, Xt = z.onDrop, Nr = tr(z, Jx);
      return ye(ye(Ro({
        onKeyDown: _e(Ue(Re, fe)),
        onFocus: _e(Ue(at, te)),
        onBlur: _e(Ue(it, oe)),
        onClick: be(Ue(Kt, we)),
        onDragEnter: me(Ue(Zt, k)),
        onDragOver: me(Ue(ze, V)),
        onDragLeave: me(Ue(st, Z)),
        onDrop: me(Ue(Xt, re)),
        role: typeof ge == "string" && ge !== "" ? ge : "presentation"
      }, de, H), !r && !C ? {
        tabIndex: 0
      } : {}), Nr);
    };
  }, [H, fe, te, oe, we, k, V, Z, re, C, A, r]), Oe = xe(function(z) {
    z.stopPropagation();
  }, []), Ze = dt(function() {
    return function() {
      var z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, ne = z.refKey, de = ne === void 0 ? "ref" : ne, ge = z.onChange, Re = z.onClick, at = tr(z, Qx), it = Ro({
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
        onChange: be(Ue(ge, re)),
        onClick: be(Ue(Re, Oe)),
        tabIndex: -1
      }, de, Q);
      return ye(ye({}, it), at);
    };
  }, [Q, t, s, re, r]);
  return ye(ye({}, R), {}, {
    isFocused: _ && !r,
    getRootProps: jt,
    getInputProps: Ze,
    rootRef: H,
    inputRef: Q,
    open: be(T)
  });
}
function c0(e, n) {
  switch (n.type) {
    case "focus":
      return ye(ye({}, e), {}, {
        isFocused: !0
      });
    case "blur":
      return ye(ye({}, e), {}, {
        isFocused: !1
      });
    case "openDialog":
      return ye(ye({}, Po), {}, {
        isFileDialogActive: !0
      });
    case "closeDialog":
      return ye(ye({}, e), {}, {
        isFileDialogActive: !1
      });
    case "setDraggedFiles":
      return ye(ye({}, e), {}, {
        isDragActive: n.isDragActive,
        isDragAccept: n.isDragAccept,
        isDragReject: n.isDragReject
      });
    case "setFiles":
      return ye(ye({}, e), {}, {
        acceptedFiles: n.acceptedFiles,
        fileRejections: n.fileRejections,
        isDragReject: n.isDragReject
      });
    case "reset":
      return ye({}, Po);
    default:
      return e;
  }
}
function Wi() {
}
const l0 = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2024C0%2010.7452%2010.7452%200%2024%200C37.2548%200%2048%2010.7452%2048%2024C48%2037.2548%2037.2548%2048%2024%2048C10.7452%2048%200%2037.2548%200%2024Z'%20fill='%23EFF1F5'/%3e%3cpath%20d='M31%2017V31H17V17H31ZM31%2015H17C15.9%2015%2015%2015.9%2015%2017V31C15%2032.1%2015.9%2033%2017%2033H31C32.1%2033%2033%2032.1%2033%2031V17C33%2015.9%2032.1%2015%2031%2015ZM26.14%2023.86L23.14%2027.73L21%2025.14L18%2029H30L26.14%2023.86Z'%20fill='%233F465B'/%3e%3c/svg%3e";
var ao, Vi;
function u0() {
  if (Vi) return ao;
  Vi = 1;
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
          var A = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(b);
          s = A ? parseFloat(A[1].replace("_", ".")) : !0;
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
  return ao = w, ao;
}
var io, Bi;
function d0() {
  if (Bi) return io;
  Bi = 1;
  var e = !!(typeof window < "u" && window.document && window.document.createElement), n = {
    canUseDOM: e,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
    canUseViewport: e && !!window.screen,
    isInWorker: !e
    // For now, this is true - might change in the future.
  };
  return io = n, io;
}
var so, Hi;
function p0() {
  if (Hi) return so;
  Hi = 1;
  var e = d0(), n;
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
  return so = t, so;
}
var co, Ui;
function f0() {
  if (Ui) return co;
  Ui = 1;
  var e = u0(), n = p0(), t = 10, r = 40, o = 800;
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
  }, co = a, co;
}
var lo, Gi;
function m0() {
  return Gi || (Gi = 1, lo = f0()), lo;
}
var h0 = m0();
const g0 = /* @__PURE__ */ Io(h0);
function v0(e, n, t, r, o, a) {
  a === void 0 && (a = 0);
  var i = $t(e, n, a), s = i.width, l = i.height, d = Math.min(s, t), p = Math.min(l, r);
  return d > p * o ? {
    width: p * o,
    height: p
  } : {
    width: d,
    height: d / o
  };
}
function x0(e) {
  return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight;
}
function tn(e, n, t, r, o) {
  o === void 0 && (o = 0);
  var a = $t(n.width, n.height, o), i = a.width, s = a.height;
  return {
    x: Yi(e.x, i, t.width, r),
    y: Yi(e.y, s, t.height, r)
  };
}
function Yi(e, n, t, r) {
  var o = n * r / 2 - t / 2;
  return Rr(e, -o, o);
}
function qi(e, n) {
  return Math.sqrt(Math.pow(e.y - n.y, 2) + Math.pow(e.x - n.x, 2));
}
function Ki(e, n) {
  return Math.atan2(n.y - e.y, n.x - e.x) * 180 / Math.PI;
}
function b0(e, n, t, r, o, a, i) {
  a === void 0 && (a = 0), i === void 0 && (i = !0);
  var s = i ? y0 : w0, l = $t(n.width, n.height, a), d = $t(n.naturalWidth, n.naturalHeight, a), p = {
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
function y0(e, n) {
  return Math.min(e, Math.max(0, n));
}
function w0(e, n) {
  return n;
}
function C0(e, n, t, r, o, a) {
  var i = $t(n.width, n.height, t), s = Rr(r.width / i.width * (100 / e.width), o, a), l = {
    x: s * i.width / 2 - r.width / 2 - i.width * s * (e.x / 100),
    y: s * i.height / 2 - r.height / 2 - i.height * s * (e.y / 100)
  };
  return {
    crop: l,
    zoom: s
  };
}
function S0(e, n, t) {
  var r = x0(n);
  return t.height > t.width ? t.height / (e.height * r) : t.width / (e.width * r);
}
function E0(e, n, t, r, o, a) {
  t === void 0 && (t = 0);
  var i = $t(n.naturalWidth, n.naturalHeight, t), s = Rr(S0(e, n, r), o, a), l = r.height > r.width ? r.height / e.height : r.width / e.width, d = {
    x: ((i.width - e.width) / 2 - e.x) * l,
    y: ((i.height - e.height) / 2 - e.y) * l
  };
  return {
    crop: d,
    zoom: s
  };
}
function Zi(e, n) {
  return {
    x: (n.x + e.x) / 2,
    y: (n.y + e.y) / 2
  };
}
function k0(e) {
  return e * Math.PI / 180;
}
function $t(e, n, t) {
  var r = k0(t);
  return {
    width: Math.abs(Math.cos(r) * e) + Math.abs(Math.sin(r) * n),
    height: Math.abs(Math.sin(r) * e) + Math.abs(Math.cos(r) * n)
  };
}
function Rr(e, n, t) {
  return Math.min(Math.max(e, n), t);
}
function Fn() {
  for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return e.filter(function(t) {
    return typeof t == "string" && t.length > 0;
  }).join(" ").trim();
}
var _0 = `.reactEasyCrop_Container {
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
`, R0 = 1, P0 = 3, j0 = 1, M0 = (
  /** @class */
  (function(e) {
    Rd(n, e);
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
          var o = C0(t.props.initialCroppedAreaPercentages, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), a = o.crop, i = o.zoom;
          t.props.onCropChange(a), t.props.onZoomChange && t.props.onZoomChange(i);
        } else if (t.props.initialCroppedAreaPixels) {
          var s = E0(t.props.initialCroppedAreaPixels, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), a = s.crop, i = s.zoom;
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
          var v = t.props.cropSize ? t.props.cropSize : v0(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
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
            }, d = t.props.restrictPosition ? tn(l, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : l;
            t.props.onCropChange(d);
          }
        }));
      }, t.onDragStopped = function() {
        var r, o;
        t.isTouching = !1, t.cleanEvents(), t.emitCropData(), (o = (r = t.props).onInteractionEnd) === null || o === void 0 || o.call(r);
      }, t.onWheel = function(r) {
        if (t.currentWindow && !(t.props.onWheelRequest && !t.props.onWheelRequest(r))) {
          r.preventDefault();
          var o = n.getMousePoint(r), a = g0(r).pixelY, i = t.props.zoom - a * t.props.zoomSpeed / 200;
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
          var d = Rr(r, t.props.minZoom, t.props.maxZoom);
          if (l) {
            var p = t.getPointOnContainer(o, t.containerPosition), f = t.getPointOnMedia(p), m = {
              x: f.x * d - p.x,
              y: f.y * d - p.y
            }, g = t.props.restrictPosition ? tn(m, t.mediaSize, t.state.cropSize, d, t.props.rotation) : m;
            t.props.onCropChange(g);
          }
          t.props.onZoomChange(d);
        }
      }, t.getCropData = function() {
        if (!t.state.cropSize)
          return null;
        var r = t.props.restrictPosition ? tn(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
        return b0(r, t.mediaSize, t.state.cropSize, t.getAspect(), t.props.zoom, t.props.rotation, t.props.restrictPosition);
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
          var d = t.props.restrictPosition ? tn(a, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : a;
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
          t.props.restrictPosition && (g = tn(g, t.mediaSize, t.state.cropSize, p, f)), r.repeat || (a = (o = t.props).onInteractionStart) === null || a === void 0 || a.call(o), l(g);
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
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = _0, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
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
      this.lastPinchDistance = qi(r, o), this.lastPinchRotation = Ki(r, o), this.onDragStart(Zi(r, o));
    }, n.prototype.onPinchMove = function(t) {
      var r = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = n.getTouchPoint(t.touches[0]), a = n.getTouchPoint(t.touches[1]), i = Zi(o, a);
        this.onDrag(i), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = qi(o, a), l = r.props.zoom * (s / r.lastPinchDistance);
          r.setNewZoom(l, i, {
            shouldUpdatePosition: !1
          }), r.lastPinchDistance = s;
          var d = Ki(o, a), p = r.props.rotation + (d - r.lastPinchRotation);
          r.props.onRotationChange && r.props.onRotationChange(p), r.lastPinchRotation = d;
        });
      }
    }, n.prototype.render = function() {
      var t = this, r, o = this.props, a = o.image, i = o.video, s = o.mediaProps, l = o.cropperProps, d = o.transform, p = o.crop, f = p.x, m = p.y, g = o.rotation, x = o.zoom, h = o.cropShape, v = o.showGrid, w = o.roundCropAreaPixels, b = o.style, S = b.containerStyle, E = b.cropAreaStyle, C = b.mediaStyle, A = o.classes, j = A.containerClassName, P = A.cropAreaClassName, L = A.mediaClassName, B = (r = this.state.mediaObjectFit) !== null && r !== void 0 ? r : this.getObjectFit();
      return u.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(Y) {
          return t.containerRef = Y;
        },
        "data-testid": "container",
        style: S,
        className: Fn("reactEasyCrop_Container", j)
      }, a ? u.createElement("img", ve({
        alt: "",
        className: Fn("reactEasyCrop_Image", B === "contain" && "reactEasyCrop_Contain", B === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", B === "vertical-cover" && "reactEasyCrop_Cover_Vertical", L)
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
        className: Fn("reactEasyCrop_Video", B === "contain" && "reactEasyCrop_Contain", B === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", B === "vertical-cover" && "reactEasyCrop_Cover_Vertical", L)
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
        className: Fn("reactEasyCrop_CropArea", h === "round" && "reactEasyCrop_CropAreaRound", v && "reactEasyCrop_CropAreaGrid", P)
      }, l)));
    }, n.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: P0,
      minZoom: R0,
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
      keyboardStep: j0
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
function T0({
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
  const p = xe(
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
              children: /* @__PURE__ */ c.jsx(Zo, { className: "size-5 text-gray-700" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex-1 overflow-auto px-4 py-4 sm:px-6 sm:py-6", children: [
          /* @__PURE__ */ c.jsx("div", { className: "relative w-full overflow-hidden rounded-lg bg-gray-900", children: /* @__PURE__ */ c.jsx("div", { className: "relative h-[60dvh] sm:h-[420px] w-full", children: /* @__PURE__ */ c.jsx(
            M0,
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
          Xo,
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
function O0(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = `image/${r === "jpg" ? "jpeg" : r}`;
    n[o] ??= [], n[o].push(`.${r}`);
  }
  return n;
}
function D0(e) {
  return new Promise((n, t) => {
    const r = new Image();
    r.addEventListener("load", () => n(r)), r.addEventListener("error", (o) => t(o)), r.setAttribute("crossOrigin", "anonymous"), r.src = e;
  });
}
async function A0(e, n, t) {
  const r = await D0(e), o = document.createElement("canvas"), a = o.getContext("2d");
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
function $1({
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
  const [m, g] = Me(null), [x, h] = Me([]), [v, w] = Me(!1), [b, S] = Me(null), [E, C] = Me({ x: 0, y: 0 }), [A, j] = Me(1), [P, L] = Me(null), B = dt(() => O0(r), [r]);
  yt(() => {
    if (!e) {
      m && URL.revokeObjectURL(m), g(null);
      return;
    }
    const y = URL.createObjectURL(e);
    return m && URL.revokeObjectURL(m), g(y), () => {
      URL.revokeObjectURL(y);
    };
  }, [e]);
  const J = xe(
    async (y) => {
      const M = y[0];
      if (!M) return;
      if (h([]), [i, s, l, d].some(
        (G) => typeof G == "number"
      ))
        try {
          const G = await new Promise(
            (k, V) => {
              const Z = URL.createObjectURL(M), F = new Image();
              F.onload = () => {
                const re = F.naturalWidth || F.width, T = F.naturalHeight || F.height;
                URL.revokeObjectURL(Z), k({ width: re, height: T });
              }, F.onerror = () => {
                URL.revokeObjectURL(Z), V(new Error("Unable to read image dimensions"));
              }, F.src = Z;
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
      const O = URL.createObjectURL(M);
      S(O), w(!0), C({ x: 0, y: 0 }), j(1), L(null);
    },
    [d, l, s, i]
  ), { getRootProps: Y, getInputProps: U, isDragActive: H, fileRejections: Q } = Pa({
    onDrop: J,
    accept: B,
    maxSize: a,
    multiple: !1
  }), $ = [
    ...Q.flatMap(
      (y) => y.errors.map((M) => M.code === "file-too-large" ? `File is too large. Max size is ${(a / 1048576).toFixed(0)}MB` : M.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${r.join(", ")}` : M.message)
    ),
    ...x
  ], ee = xe(() => {
    w(!1), b && URL.revokeObjectURL(b), S(null);
  }, [b]), R = xe(async () => {
    if (!(!b || !P))
      try {
        const y = await A0(b, P, {
          fileName: e?.name ?? "image.png",
          fileType: e?.type ?? "image/png"
        });
        n(y), w(!1), URL.revokeObjectURL(b), S(null);
      } catch (y) {
        console.error("Error cropping image:", y);
      }
  }, [P, n, b, e?.name, e?.type]), N = xe(() => {
    m && URL.revokeObjectURL(m), g(null), n(null);
  }, [n, m]), _ = o ? { aspectRatio: "1 / 1" } : { aspectRatio: `${t}` };
  return /* @__PURE__ */ c.jsxs("div", { className: D("w-full space-y-2", f), children: [
    m ? /* @__PURE__ */ c.jsxs("div", { className: "relative w-fit max-h-44", children: [
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: D(
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
          className: D(
            "absolute right-1 top-1 inline-flex items-center justify-center",
            "size-10 rounded-full bg-gray-600 text-white border border-white",
            "hover:bg-gray-700 transition-colors"
          ),
          children: /* @__PURE__ */ c.jsx(Zo, { className: "size-4" })
        }
      )
    ] }) : /* @__PURE__ */ c.jsxs(
      "div",
      {
        ...Y(),
        className: D(
          "relative flex w-full items-center justify-center",
          "rounded-[0.625rem] border border-gray-50 bg-white",
          "min-h-44",
          "cursor-pointer transition-colors",
          H && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ c.jsx("input", { ...U() }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center px-4 text-center gap-y-3", children: [
            /* @__PURE__ */ c.jsx("img", { src: l0, alt: "" }),
            /* @__PURE__ */ c.jsx("p", { className: "text-sm font-manrope font-medium text-gray-700", children: "Click to upload or drag and drop" }),
            !!p && /* @__PURE__ */ c.jsx("p", { className: "text-xs text-gray-500", children: p })
          ] })
        ]
      }
    ),
    $.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "space-y-1", children: $.map((y, M) => /* @__PURE__ */ c.jsx("p", { className: "text-sm text-bright-red-600", children: y }, M)) }),
    v && b && /* @__PURE__ */ c.jsx(
      T0,
      {
        imageUrl: b,
        aspect: t,
        rounded: o,
        crop: E,
        zoom: A,
        onCropChange: C,
        onZoomChange: j,
        onCropComplete: (y) => L(y),
        onClose: ee,
        onConfirm: R
      }
    )
  ] });
}
function N0({ className: e, type: n, ...t }) {
  return /* @__PURE__ */ c.jsx(
    "input",
    {
      type: n,
      "data-slot": "input",
      className: D(
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
function W1({
  className: e,
  ...n
}) {
  const [t, r] = Me(!1), o = xe(() => {
    r((a) => !a);
  }, []);
  return /* @__PURE__ */ c.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ c.jsx(
      N0,
      {
        ...n,
        "data-slot": "input",
        className: D(e, "pr-10"),
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
          t && /* @__PURE__ */ c.jsx(vm, { className: "size-4 text-gray-300" }),
          !t && /* @__PURE__ */ c.jsx(bm, { className: "size-4 text-gray-300" })
        ]
      }
    )
  ] });
}
var I0 = Object.defineProperty, L0 = Object.defineProperties, F0 = Object.getOwnPropertyDescriptors, nr = Object.getOwnPropertySymbols, $l = Object.prototype.hasOwnProperty, Wl = Object.prototype.propertyIsEnumerable, Xi = (e, n, t) => n in e ? I0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, z0 = (e, n) => {
  for (var t in n || (n = {})) $l.call(n, t) && Xi(e, t, n[t]);
  if (nr) for (var t of nr(n)) Wl.call(n, t) && Xi(e, t, n[t]);
  return e;
}, $0 = (e, n) => L0(e, F0(n)), W0 = (e, n) => {
  var t = {};
  for (var r in e) $l.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && nr) for (var r of nr(e)) n.indexOf(r) < 0 && Wl.call(e, r) && (t[r] = e[r]);
  return t;
};
function V0(e) {
  let n = setTimeout(e, 0), t = setTimeout(e, 10), r = setTimeout(e, 50);
  return [n, t, r];
}
function B0(e) {
  let n = u.useRef();
  return u.useEffect(() => {
    n.current = e;
  }), n.current;
}
var H0 = 18, Vl = 40, U0 = `${Vl}px`, G0 = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function Y0({ containerRef: e, inputRef: n, pushPasswordManagerStrategy: t, isFocused: r }) {
  let [o, a] = u.useState(!1), [i, s] = u.useState(!1), [l, d] = u.useState(!1), p = u.useMemo(() => t === "none" ? !1 : (t === "increase-width" || t === "experimental-no-flickering") && o && i, [o, i, t]), f = u.useCallback(() => {
    let m = e.current, g = n.current;
    if (!m || !g || l || t === "none") return;
    let x = m, h = x.getBoundingClientRect().left + x.offsetWidth, v = x.getBoundingClientRect().top + x.offsetHeight / 2, w = h - H0, b = v;
    document.querySelectorAll(G0).length === 0 && document.elementFromPoint(w, b) === m || (a(!0), d(!0));
  }, [e, n, l, t]);
  return u.useEffect(() => {
    let m = e.current;
    if (!m || t === "none") return;
    function g() {
      let h = window.innerWidth - m.getBoundingClientRect().right;
      s(h >= Vl);
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
  }, [n, r, t, f]), { hasPWMBadge: o, willPushPWMBadge: p, PWM_BADGE_SPACE_WIDTH: U0 };
}
var Bl = u.createContext({}), Hl = u.forwardRef((e, n) => {
  var t = e, { value: r, onChange: o, maxLength: a, textAlign: i = "left", pattern: s, placeholder: l, inputMode: d = "numeric", onComplete: p, pushPasswordManagerStrategy: f = "increase-width", pasteTransformer: m, containerClassName: g, noScriptCSSFallback: x = q0, render: h, children: v } = t, w = W0(t, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), b, S, E, C, A;
  let [j, P] = u.useState(typeof w.defaultValue == "string" ? w.defaultValue : ""), L = r ?? j, B = B0(L), J = u.useCallback((te) => {
    o?.(te), P(te);
  }, [o]), Y = u.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), U = u.useRef(null), H = u.useRef(null), Q = u.useRef({ value: L, onChange: J, isIOS: typeof window < "u" && ((S = (b = window?.CSS) == null ? void 0 : b.supports) == null ? void 0 : S.call(b, "-webkit-touch-callout", "none")) }), $ = u.useRef({ prev: [(E = U.current) == null ? void 0 : E.selectionStart, (C = U.current) == null ? void 0 : C.selectionEnd, (A = U.current) == null ? void 0 : A.selectionDirection] });
  u.useImperativeHandle(n, () => U.current, []), u.useEffect(() => {
    let te = U.current, oe = H.current;
    if (!te || !oe) return;
    Q.current.value !== te.value && Q.current.onChange(te.value), $.current.prev = [te.selectionStart, te.selectionEnd, te.selectionDirection];
    function we() {
      if (document.activeElement !== te) {
        M(null), O(null);
        return;
      }
      let me = te.selectionStart, Se = te.selectionEnd, jt = te.selectionDirection, Oe = te.maxLength, Ze = te.value, z = $.current.prev, ne = -1, de = -1, ge;
      if (Ze.length !== 0 && me !== null && Se !== null) {
        let Kt = me === Se, Zt = me === Ze.length && Ze.length < Oe;
        if (Kt && !Zt) {
          let ze = me;
          if (ze === 0) ne = 0, de = 1, ge = "forward";
          else if (ze === Oe) ne = ze - 1, de = ze, ge = "backward";
          else if (Oe > 1 && Ze.length > 1) {
            let st = 0;
            if (z[0] !== null && z[1] !== null) {
              ge = ze < z[1] ? "backward" : "forward";
              let Xt = z[0] === z[1] && z[0] < Oe;
              ge === "backward" && !Xt && (st = -1);
            }
            ne = st + ze, de = st + ze + 1;
          }
        }
        ne !== -1 && de !== -1 && ne !== de && U.current.setSelectionRange(ne, de, ge);
      }
      let Re = ne !== -1 ? ne : me, at = de !== -1 ? de : Se, it = ge ?? jt;
      M(Re), O(at), $.current.prev = [Re, at, it];
    }
    if (document.addEventListener("selectionchange", we, { capture: !0 }), we(), document.activeElement === te && _(!0), !document.getElementById("input-otp-style")) {
      let me = document.createElement("style");
      if (me.id = "input-otp-style", document.head.appendChild(me), me.sheet) {
        let Se = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        nn(me.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), nn(me.sheet, `[data-input-otp]:autofill { ${Se} }`), nn(me.sheet, `[data-input-otp]:-webkit-autofill { ${Se} }`), nn(me.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), nn(me.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let be = () => {
      oe && oe.style.setProperty("--root-height", `${te.clientHeight}px`);
    };
    be();
    let _e = new ResizeObserver(be);
    return _e.observe(te), () => {
      document.removeEventListener("selectionchange", we, { capture: !0 }), _e.disconnect();
    };
  }, []);
  let [ee, R] = u.useState(!1), [N, _] = u.useState(!1), [y, M] = u.useState(null), [I, O] = u.useState(null);
  u.useEffect(() => {
    V0(() => {
      var te, oe, we, be;
      (te = U.current) == null || te.dispatchEvent(new Event("input"));
      let _e = (oe = U.current) == null ? void 0 : oe.selectionStart, me = (we = U.current) == null ? void 0 : we.selectionEnd, Se = (be = U.current) == null ? void 0 : be.selectionDirection;
      _e !== null && me !== null && (M(_e), O(me), $.current.prev = [_e, me, Se]);
    });
  }, [L, N]), u.useEffect(() => {
    B !== void 0 && L !== B && B.length < a && L.length === a && p?.(L);
  }, [a, p, B, L]);
  let G = Y0({ containerRef: H, inputRef: U, pushPasswordManagerStrategy: f, isFocused: N }), W = u.useCallback((te) => {
    let oe = te.currentTarget.value.slice(0, a);
    if (oe.length > 0 && Y && !Y.test(oe)) {
      te.preventDefault();
      return;
    }
    typeof B == "string" && oe.length < B.length && document.dispatchEvent(new Event("selectionchange")), J(oe);
  }, [a, J, B, Y]), k = u.useCallback(() => {
    var te;
    if (U.current) {
      let oe = Math.min(U.current.value.length, a - 1), we = U.current.value.length;
      (te = U.current) == null || te.setSelectionRange(oe, we), M(oe), O(we);
    }
    _(!0);
  }, [a]), V = u.useCallback((te) => {
    var oe, we;
    let be = U.current;
    if (!m && (!Q.current.isIOS || !te.clipboardData || !be)) return;
    let _e = te.clipboardData.getData("text/plain"), me = m ? m(_e) : _e;
    te.preventDefault();
    let Se = (oe = U.current) == null ? void 0 : oe.selectionStart, jt = (we = U.current) == null ? void 0 : we.selectionEnd, Oe = (Se !== jt ? L.slice(0, Se) + me + L.slice(jt) : L.slice(0, Se) + me + L.slice(Se)).slice(0, a);
    if (Oe.length > 0 && Y && !Y.test(Oe)) return;
    be.value = Oe, J(Oe);
    let Ze = Math.min(Oe.length, a - 1), z = Oe.length;
    be.setSelectionRange(Ze, z), M(Ze), O(z);
  }, [a, J, Y, L]), Z = u.useMemo(() => ({ position: "relative", cursor: w.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [w.disabled]), F = u.useMemo(() => ({ position: "absolute", inset: 0, width: G.willPushPWMBadge ? `calc(100% + ${G.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: G.willPushPWMBadge ? `inset(0 ${G.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [G.PWM_BADGE_SPACE_WIDTH, G.willPushPWMBadge, i]), re = u.useMemo(() => u.createElement("input", $0(z0({ autoComplete: w.autoComplete || "one-time-code" }, w), { "data-input-otp": !0, "data-input-otp-placeholder-shown": L.length === 0 || void 0, "data-input-otp-mss": y, "data-input-otp-mse": I, inputMode: d, pattern: Y?.source, "aria-placeholder": l, style: F, maxLength: a, value: L, ref: U, onPaste: (te) => {
    var oe;
    V(te), (oe = w.onPaste) == null || oe.call(w, te);
  }, onChange: W, onMouseOver: (te) => {
    var oe;
    R(!0), (oe = w.onMouseOver) == null || oe.call(w, te);
  }, onMouseLeave: (te) => {
    var oe;
    R(!1), (oe = w.onMouseLeave) == null || oe.call(w, te);
  }, onFocus: (te) => {
    var oe;
    k(), (oe = w.onFocus) == null || oe.call(w, te);
  }, onBlur: (te) => {
    var oe;
    _(!1), (oe = w.onBlur) == null || oe.call(w, te);
  } })), [W, k, V, d, F, a, I, y, w, Y?.source, L]), T = u.useMemo(() => ({ slots: Array.from({ length: a }).map((te, oe) => {
    var we;
    let be = N && y !== null && I !== null && (y === I && oe === y || oe >= y && oe < I), _e = L[oe] !== void 0 ? L[oe] : null, me = L[0] !== void 0 ? null : (we = l?.[oe]) != null ? we : null;
    return { char: _e, placeholderChar: me, isActive: be, hasFakeCaret: be && _e === null };
  }), isFocused: N, isHovering: !w.disabled && ee }), [N, ee, a, I, y, w.disabled, L]), fe = u.useMemo(() => h ? h(T) : u.createElement(Bl.Provider, { value: T }, v), [v, T, h]);
  return u.createElement(u.Fragment, null, x !== null && u.createElement("noscript", null, u.createElement("style", null, x)), u.createElement("div", { ref: H, "data-input-otp-container": !0, style: Z, className: g }, fe, u.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, re)));
});
Hl.displayName = "Input";
function nn(e, n) {
  try {
    e.insertRule(n);
  } catch {
    console.error("input-otp could not insert CSS rule:", n);
  }
}
var q0 = `
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
function V1({ className: e, containerClassName: n, ...t }) {
  return /* @__PURE__ */ c.jsx(
    Hl,
    {
      "data-slot": "input-otp",
      containerClassName: D("flex items-center gap-2 has-disabled:opacity-50", n),
      className: D("disabled:cursor-not-allowed", e),
      ...t
    }
  );
}
function B1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: D("flex items-center gap-2", e),
      ...n
    }
  );
}
function H1({
  index: e,
  className: n,
  ...t
}) {
  const r = fo(Bl), { char: o, hasFakeCaret: a, isActive: i } = r?.slots[e] ?? {};
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": i,
      className: D(
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
function U1({ ...e }) {
  return /* @__PURE__ */ c.jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ c.jsx(wm, {}) });
}
function Ul({ size: e = 48, className: n, ...t }) {
  const r = typeof e == "number" ? `${e}` : e, o = typeof t["aria-label"] == "string";
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 47 48",
      width: r,
      height: r,
      className: D("inline-block", n),
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
function G1({ size: e = 32, className: n, ...t }) {
  return /* @__PURE__ */ c.jsxs("div", { className: D("inline-flex items-center gap-2", n), ...t, children: [
    /* @__PURE__ */ c.jsx(Ul, { size: e }),
    /* @__PURE__ */ c.jsx("span", { className: "font-manrope text-base font-normal leading-none text-white", children: "MercySeat" })
  ] });
}
function K0(e) {
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
function Z0(e) {
  return ["mp4", "webm", "ogg", "mov", "m4v"].includes(e) ? `video/${e === "mov" ? "quicktime" : e}` : ["mp3", "wav", "ogg", "aac", "flac", "m4a"].includes(e) ? `audio/${e === "mp3" ? "mpeg" : e === "m4a" ? "mp4" : e}` : null;
}
function X0(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = Z0(r);
    o && (n[o] ??= [], n[o].push(`.${r}`));
  }
  return n;
}
function J0({ extensions: e, placeholder: n, onDropFile: t }) {
  const r = dt(() => X0(e), [e]), o = xe(
    async (p) => {
      const f = p[0] || null;
      if (f && !(!f.type.startsWith("video/") && !f.type.startsWith("audio/")))
        try {
          const m = await K0(f);
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
  ), { getRootProps: a, getInputProps: i, isDragActive: s, fileRejections: l } = Pa({
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
        className: D(
          "relative flex flex-col items-center justify-center w-full min-h-38.5 border border-gray-50 rounded-[0.625rem] cursor-pointer transition-colors bg-white",
          s && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ c.jsx("input", { ...i() }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ c.jsx("div", { className: "size-12 flex items-center justify-center rounded-full bg-gray-25 mb-4", children: /* @__PURE__ */ c.jsx(lc, { className: "size-6 text-blue-hepatica-600" }) }),
            /* @__PURE__ */ c.jsx("p", { className: "mb-2 text-sm text-gray-700 font-medium", children: "Click to upload or drag and drop" }),
            !!n && /* @__PURE__ */ c.jsx("p", { className: "text-xs text-gray-500 text-center", children: n })
          ] })
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "space-y-1", children: d.map((p, f) => /* @__PURE__ */ c.jsx("p", { className: "text-sm text-bright-red-600", children: p }, f)) })
  ] });
}
function Q0({ file: e, onChange: n }) {
  const t = xe(() => {
    n(null);
  }, [n]), r = e.type.startsWith("video/") ? "Video" : "Audio";
  return /* @__PURE__ */ c.jsxs("div", { className: "w-full p-4 flex justify-between items-center bg-white border border-gray-50 rounded-lg", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ c.jsx("div", { className: "size-10 bg-gray-25 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ c.jsx(lc, { className: "size-6 text-blue-hepatica-600" }) }),
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
        children: /* @__PURE__ */ c.jsx(Sm, { className: "size-4 text-bright-red-600" })
      }
    )
  ] });
}
function Y1({
  accepts: e,
  onChange: n,
  value: t,
  placeholder: r = ""
}) {
  return t ? /* @__PURE__ */ c.jsx(Q0, { file: t, onChange: n }) : /* @__PURE__ */ c.jsx(
    J0,
    {
      extensions: e,
      onDropFile: n,
      placeholder: r
    }
  );
}
function q1({ active: e, children: n, collapsed: t, disabled: r = !1 }) {
  return /* @__PURE__ */ c.jsx(
    mr,
    {
      className: D(
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
function Ji(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
// @__NO_SIDE_EFFECTS__
function eb(e) {
  const n = /* @__PURE__ */ tb(e), t = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(rb);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...i, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function tb(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (u.isValidElement(o)) {
      const i = ab(o), s = ob(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? nt(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var nb = /* @__PURE__ */ Symbol("radix.slottable");
function rb(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === nb;
}
function ob(e, n) {
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
function ab(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
function ib(e) {
  const n = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
var Gl = Object.freeze({
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
}), sb = "VisuallyHidden", cb = u.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(
    se.span,
    {
      ...e,
      ref: n,
      style: { ...Gl, ...e.style }
    }
  )
);
cb.displayName = sb;
var lb = [" ", "Enter", "ArrowUp", "ArrowDown"], ub = [" ", "Enter"], kt = "Select", [Pr, jr, db] = Jo(kt), [qt] = tt(kt, [
  db,
  Yt
]), Mr = Yt(), [pb, ht] = qt(kt), [fb, mb] = qt(kt), Yl = (e) => {
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
  } = e, h = Mr(n), [v, w] = u.useState(null), [b, S] = u.useState(null), [E, C] = u.useState(!1), A = Qo(d), [j, P] = wt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: kt
  }), [L, B] = wt({
    prop: i,
    defaultProp: s,
    onChange: l,
    caller: kt
  }), J = u.useRef(null), Y = v ? x || !!v.closest("form") : !0, [U, H] = u.useState(/* @__PURE__ */ new Set()), Q = Array.from(U).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ c.jsx(wr, { ...h, children: /* @__PURE__ */ c.jsxs(
    pb,
    {
      required: g,
      scope: n,
      trigger: v,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: S,
      valueNodeHasChildren: E,
      onValueNodeHasChildrenChange: C,
      contentId: Le(),
      value: L,
      onValueChange: B,
      open: j,
      onOpenChange: P,
      dir: A,
      triggerPointerDownPosRef: J,
      disabled: m,
      children: [
        /* @__PURE__ */ c.jsx(Pr.Provider, { scope: n, children: /* @__PURE__ */ c.jsx(
          fb,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback(($) => {
              H((ee) => new Set(ee).add($));
            }, []),
            onNativeOptionRemove: u.useCallback(($) => {
              H((ee) => {
                const R = new Set(ee);
                return R.delete($), R;
              });
            }, []),
            children: t
          }
        ) }),
        Y ? /* @__PURE__ */ c.jsxs(
          xu,
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
Yl.displayName = kt;
var ql = "SelectTrigger", Kl = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, disabled: r = !1, ...o } = e, a = Mr(t), i = ht(ql, t), s = i.disabled || r, l = ce(n, i.onTriggerChange), d = jr(t), p = u.useRef("touch"), [f, m, g] = yu((h) => {
      const v = d().filter((S) => !S.disabled), w = v.find((S) => S.value === i.value), b = wu(v, h, w);
      b !== void 0 && i.onValueChange(b.value);
    }), x = (h) => {
      s || (i.onOpenChange(!0), g()), h && (i.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(ca, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
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
        "data-placeholder": bu(i.value) ? "" : void 0,
        ...o,
        ref: l,
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
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(v && h.key === " ") && lb.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
Kl.displayName = ql;
var Zl = "SelectValue", Xl = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, children: a, placeholder: i = "", ...s } = e, l = ht(Zl, t), { onValueNodeHasChildrenChange: d } = l, p = a !== void 0, f = ce(n, l.onValueNodeChange);
    return Pe(() => {
      d(p);
    }, [d, p]), /* @__PURE__ */ c.jsx(
      se.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: bu(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: i }) : a
      }
    );
  }
);
Xl.displayName = Zl;
var hb = "SelectIcon", Jl = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(se.span, { "aria-hidden": !0, ...o, ref: n, children: r || "▼" });
  }
);
Jl.displayName = hb;
var gb = "SelectPortal", Ql = (e) => /* @__PURE__ */ c.jsx(ur, { asChild: !0, ...e });
Ql.displayName = gb;
var _t = "SelectContent", eu = u.forwardRef(
  (e, n) => {
    const t = ht(_t, e.__scopeSelect), [r, o] = u.useState();
    if (Pe(() => {
      o(new DocumentFragment());
    }, []), !t.open) {
      const a = r;
      return a ? cr.createPortal(
        /* @__PURE__ */ c.jsx(tu, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(Pr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(nu, { ...e, ref: n });
  }
);
eu.displayName = _t;
var $e = 10, [tu, gt] = qt(_t), vb = "SelectContentImpl", xb = /* @__PURE__ */ eb("SelectContent.RemoveScroll"), nu = u.forwardRef(
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
    } = e, b = ht(_t, t), [S, E] = u.useState(null), [C, A] = u.useState(null), j = ce(n, (k) => E(k)), [P, L] = u.useState(null), [B, J] = u.useState(
      null
    ), Y = jr(t), [U, H] = u.useState(!1), Q = u.useRef(!1);
    u.useEffect(() => {
      if (S) return Fo(S);
    }, [S]), Lo();
    const $ = u.useCallback(
      (k) => {
        const [V, ...Z] = Y().map((T) => T.ref.current), [F] = Z.slice(-1), re = document.activeElement;
        for (const T of k)
          if (T === re || (T?.scrollIntoView({ block: "nearest" }), T === V && C && (C.scrollTop = 0), T === F && C && (C.scrollTop = C.scrollHeight), T?.focus(), document.activeElement !== re)) return;
      },
      [Y, C]
    ), ee = u.useCallback(
      () => $([P, S]),
      [$, P, S]
    );
    u.useEffect(() => {
      U && ee();
    }, [U, ee]);
    const { onOpenChange: R, triggerPointerDownPosRef: N } = b;
    u.useEffect(() => {
      if (S) {
        let k = { x: 0, y: 0 };
        const V = (F) => {
          k = {
            x: Math.abs(Math.round(F.pageX) - (N.current?.x ?? 0)),
            y: Math.abs(Math.round(F.pageY) - (N.current?.y ?? 0))
          };
        }, Z = (F) => {
          k.x <= 10 && k.y <= 10 ? F.preventDefault() : S.contains(F.target) || R(!1), document.removeEventListener("pointermove", V), N.current = null;
        };
        return N.current !== null && (document.addEventListener("pointermove", V), document.addEventListener("pointerup", Z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", V), document.removeEventListener("pointerup", Z, { capture: !0 });
        };
      }
    }, [S, R, N]), u.useEffect(() => {
      const k = () => R(!1);
      return window.addEventListener("blur", k), window.addEventListener("resize", k), () => {
        window.removeEventListener("blur", k), window.removeEventListener("resize", k);
      };
    }, [R]);
    const [_, y] = yu((k) => {
      const V = Y().filter((re) => !re.disabled), Z = V.find((re) => re.ref.current === document.activeElement), F = wu(V, k, Z);
      F && setTimeout(() => F.ref.current.focus());
    }), M = u.useCallback(
      (k, V, Z) => {
        const F = !Q.current && !Z;
        (b.value !== void 0 && b.value === V || F) && (L(k), F && (Q.current = !0));
      },
      [b.value]
    ), I = u.useCallback(() => S?.focus(), [S]), O = u.useCallback(
      (k, V, Z) => {
        const F = !Q.current && !Z;
        (b.value !== void 0 && b.value === V || F) && J(k);
      },
      [b.value]
    ), G = r === "popper" ? jo : ru, W = G === jo ? {
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
      tu,
      {
        scope: t,
        content: S,
        viewport: C,
        onViewportChange: A,
        itemRefCallback: M,
        selectedItem: P,
        onItemLeave: I,
        itemTextRefCallback: O,
        focusSelectedItem: ee,
        selectedItemText: B,
        position: r,
        isPositioned: U,
        searchRef: _,
        children: /* @__PURE__ */ c.jsx(pr, { as: xb, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          lr,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (k) => {
              k.preventDefault();
            },
            onUnmountAutoFocus: X(o, (k) => {
              b.trigger?.focus({ preventScroll: !0 }), k.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              gn,
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
                    onKeyDown: X(w.onKeyDown, (k) => {
                      const V = k.ctrlKey || k.altKey || k.metaKey;
                      if (k.key === "Tab" && k.preventDefault(), !V && k.key.length === 1 && y(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
                        let F = Y().filter((re) => !re.disabled).map((re) => re.ref.current);
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
nu.displayName = vb;
var bb = "SelectItemAlignedPosition", ru = u.forwardRef((e, n) => {
  const { __scopeSelect: t, onPlaced: r, ...o } = e, a = ht(_t, t), i = gt(_t, t), [s, l] = u.useState(null), [d, p] = u.useState(null), f = ce(n, (j) => p(j)), m = jr(t), g = u.useRef(!1), x = u.useRef(!0), { viewport: h, selectedItem: v, selectedItemText: w, focusSelectedItem: b } = i, S = u.useCallback(() => {
    if (a.trigger && a.valueNode && s && d && h && v && w) {
      const j = a.trigger.getBoundingClientRect(), P = d.getBoundingClientRect(), L = a.valueNode.getBoundingClientRect(), B = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const re = B.left - P.left, T = L.left - re, fe = j.left - T, te = j.width + fe, oe = Math.max(te, P.width), we = window.innerWidth - $e, be = Ji(T, [
          $e,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max($e, we - oe)
        ]);
        s.style.minWidth = te + "px", s.style.left = be + "px";
      } else {
        const re = P.right - B.right, T = window.innerWidth - L.right - re, fe = window.innerWidth - j.right - T, te = j.width + fe, oe = Math.max(te, P.width), we = window.innerWidth - $e, be = Ji(T, [
          $e,
          Math.max($e, we - oe)
        ]);
        s.style.minWidth = te + "px", s.style.right = be + "px";
      }
      const J = m(), Y = window.innerHeight - $e * 2, U = h.scrollHeight, H = window.getComputedStyle(d), Q = parseInt(H.borderTopWidth, 10), $ = parseInt(H.paddingTop, 10), ee = parseInt(H.borderBottomWidth, 10), R = parseInt(H.paddingBottom, 10), N = Q + $ + U + R + ee, _ = Math.min(v.offsetHeight * 5, N), y = window.getComputedStyle(h), M = parseInt(y.paddingTop, 10), I = parseInt(y.paddingBottom, 10), O = j.top + j.height / 2 - $e, G = Y - O, W = v.offsetHeight / 2, k = v.offsetTop + W, V = Q + $ + k, Z = N - V;
      if (V <= O) {
        const re = J.length > 0 && v === J[J.length - 1].ref.current;
        s.style.bottom = "0px";
        const T = d.clientHeight - h.offsetTop - h.offsetHeight, fe = Math.max(
          G,
          W + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? I : 0) + T + ee
        ), te = V + fe;
        s.style.height = te + "px";
      } else {
        const re = J.length > 0 && v === J[0].ref.current;
        s.style.top = "0px";
        const fe = Math.max(
          O,
          Q + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? M : 0) + W
        ) + Z;
        s.style.height = fe + "px", h.scrollTop = V - O + h.offsetTop;
      }
      s.style.margin = `${$e}px 0`, s.style.minHeight = _ + "px", s.style.maxHeight = Y + "px", r?.(), requestAnimationFrame(() => g.current = !0);
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
  Pe(() => S(), [S]);
  const [E, C] = u.useState();
  Pe(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [d]);
  const A = u.useCallback(
    (j) => {
      j && x.current === !0 && (S(), b?.(), x.current = !1);
    },
    [S, b]
  );
  return /* @__PURE__ */ c.jsx(
    wb,
    {
      scope: t,
      contentWrapper: s,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: A,
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
ru.displayName = bb;
var yb = "SelectPopperPosition", jo = u.forwardRef((e, n) => {
  const {
    __scopeSelect: t,
    align: r = "start",
    collisionPadding: o = $e,
    ...a
  } = e, i = Mr(t);
  return /* @__PURE__ */ c.jsx(
    la,
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
jo.displayName = yb;
var [wb, ja] = qt(_t, {}), Mo = "SelectViewport", ou = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, nonce: r, ...o } = e, a = gt(Mo, t), i = ja(Mo, t), s = ce(n, a.onViewportChange), l = u.useRef(0);
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
      /* @__PURE__ */ c.jsx(Pr.Slot, { scope: t, children: /* @__PURE__ */ c.jsx(
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
          onScroll: X(o.onScroll, (d) => {
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
ou.displayName = Mo;
var au = "SelectGroup", [Cb, Sb] = qt(au), iu = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = Le();
    return /* @__PURE__ */ c.jsx(Cb, { scope: t, id: o, children: /* @__PURE__ */ c.jsx(se.div, { role: "group", "aria-labelledby": o, ...r, ref: n }) });
  }
);
iu.displayName = au;
var su = "SelectLabel", cu = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = Sb(su, t);
    return /* @__PURE__ */ c.jsx(se.div, { id: o.id, ...r, ref: n });
  }
);
cu.displayName = su;
var rr = "SelectItem", [Eb, lu] = qt(rr), uu = u.forwardRef(
  (e, n) => {
    const {
      __scopeSelect: t,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = ht(rr, t), l = gt(rr, t), d = s.value === r, [p, f] = u.useState(a ?? ""), [m, g] = u.useState(!1), x = ce(
      n,
      (b) => l.itemRefCallback?.(b, r, o)
    ), h = Le(), v = u.useRef("touch"), w = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      Eb,
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
          Pr.ItemSlot,
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
                  v.current = b.pointerType, o ? l.onItemLeave?.() : v.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(i.onPointerLeave, (b) => {
                  b.currentTarget === document.activeElement && l.onItemLeave?.();
                }),
                onKeyDown: X(i.onKeyDown, (b) => {
                  l.searchRef?.current !== "" && b.key === " " || (ub.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
uu.displayName = rr;
var cn = "SelectItemText", du = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, ...a } = e, i = ht(cn, t), s = gt(cn, t), l = lu(cn, t), d = mb(cn, t), [p, f] = u.useState(null), m = ce(
      n,
      (w) => f(w),
      l.onItemTextChange,
      (w) => s.itemTextRefCallback?.(w, l.value, l.disabled)
    ), g = p?.textContent, x = u.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: l.value, disabled: l.disabled, children: g }, l.value),
      [l.disabled, l.value, g]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: v } = d;
    return Pe(() => (h(x), () => v(x)), [h, v, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(se.span, { id: l.textId, ...a, ref: m }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? cr.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
du.displayName = cn;
var pu = "SelectItemIndicator", fu = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return lu(pu, t).isSelected ? /* @__PURE__ */ c.jsx(se.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }
);
fu.displayName = pu;
var To = "SelectScrollUpButton", mu = u.forwardRef((e, n) => {
  const t = gt(To, e.__scopeSelect), r = ja(To, e.__scopeSelect), [o, a] = u.useState(!1), i = ce(n, r.onScrollButtonChange);
  return Pe(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const d = l.scrollTop > 0;
        a(d);
      };
      const l = t.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    gu,
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
mu.displayName = To;
var Oo = "SelectScrollDownButton", hu = u.forwardRef((e, n) => {
  const t = gt(Oo, e.__scopeSelect), r = ja(Oo, e.__scopeSelect), [o, a] = u.useState(!1), i = ce(n, r.onScrollButtonChange);
  return Pe(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const d = l.scrollHeight - l.clientHeight, p = Math.ceil(l.scrollTop) < d;
        a(p);
      };
      const l = t.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    gu,
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
hu.displayName = Oo;
var gu = u.forwardRef((e, n) => {
  const { __scopeSelect: t, onAutoScroll: r, ...o } = e, a = gt("SelectScrollButton", t), i = u.useRef(null), s = jr(t), l = u.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), Pe(() => {
    s().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ c.jsx(
    se.div,
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
        l();
      })
    }
  );
}), kb = "SelectSeparator", vu = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(se.div, { "aria-hidden": !0, ...r, ref: n });
  }
);
vu.displayName = kb;
var Do = "SelectArrow", _b = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = Mr(t), a = ht(Do, t), i = gt(Do, t);
    return a.open && i.position === "popper" ? /* @__PURE__ */ c.jsx(ua, { ...o, ...r, ref: n }) : null;
  }
);
_b.displayName = Do;
var Rb = "SelectBubbleInput", xu = u.forwardRef(
  ({ __scopeSelect: e, value: n, ...t }, r) => {
    const o = u.useRef(null), a = ce(r, o), i = ib(n);
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
        style: { ...Gl, ...t.style },
        ref: a,
        defaultValue: n
      }
    );
  }
);
xu.displayName = Rb;
function bu(e) {
  return e === "" || e === void 0;
}
function yu(e) {
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
function wu(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((d) => d === n[0]) ? n[0] : n, a = t ? e.indexOf(t) : -1;
  let i = Pb(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((d) => d !== t));
  const l = i.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== t ? l : void 0;
}
function Pb(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var jb = Yl, Mb = Kl, Tb = Xl, Ob = Jl, Db = Ql, Ab = eu, Nb = ou, Ib = iu, Lb = cu, Fb = uu, zb = du, $b = fu, Wb = mu, Vb = hu, Bb = vu;
function Hb({ ...e }) {
  return /* @__PURE__ */ c.jsx(jb, { "data-slot": "select", ...e });
}
function K1({ ...e }) {
  return /* @__PURE__ */ c.jsx(Ib, { "data-slot": "select-group", ...e });
}
function Ub({ ...e }) {
  return /* @__PURE__ */ c.jsx(Tb, { "data-slot": "select-value", ...e });
}
function Gb({
  className: e,
  size: n = "default",
  variant: t = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ c.jsxs(
    Mb,
    {
      "data-slot": "select-trigger",
      "data-size": n,
      className: D(
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
        /* @__PURE__ */ c.jsx(Ob, { asChild: !0, children: /* @__PURE__ */ c.jsx(
          sc,
          {
            className: D({
              "size-6 text-gray-300": t === "default",
              "size-4 text-gray-600": t === "ghost"
            })
          }
        ) })
      ]
    }
  );
}
function Yb({
  className: e,
  children: n,
  position: t = "popper",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ c.jsx(Db, { children: /* @__PURE__ */ c.jsxs(
    Ab,
    {
      "data-slot": "select-content",
      className: D(
        "bg-white font-manrope text-gray-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height)  origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-gray-25 shadow-md",
        t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: t,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ c.jsx(Kb, {}),
        /* @__PURE__ */ c.jsx(
          Nb,
          {
            className: D(
              "p-1",
              t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: n
          }
        ),
        /* @__PURE__ */ c.jsx(Zb, {})
      ]
    }
  ) });
}
function Z1({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    Lb,
    {
      "data-slot": "select-label",
      className: D("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...n
    }
  );
}
function qb({
  className: e,
  children: n,
  ...t
}) {
  return /* @__PURE__ */ c.jsxs(
    Fb,
    {
      "data-slot": "select-item",
      className: D(
        "focus:bg-gray-25 focus:text-blue-hepatica-600 [&_svg:not([class*='text-'])]:text-gray-300 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...t,
      children: [
        /* @__PURE__ */ c.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx($b, { children: /* @__PURE__ */ c.jsx(xn, { className: "size-4" }) }) }),
        /* @__PURE__ */ c.jsx(zb, { children: n })
      ]
    }
  );
}
function X1({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    Bb,
    {
      "data-slot": "select-separator",
      className: D("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...n
    }
  );
}
function Kb({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    Wb,
    {
      "data-slot": "select-scroll-up-button",
      className: D("flex cursor-default items-center justify-center py-1", e),
      ...n,
      children: /* @__PURE__ */ c.jsx(fm, { className: "size-4" })
    }
  );
}
function Zb({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    Vb,
    {
      "data-slot": "select-scroll-down-button",
      className: D("flex cursor-default items-center justify-center py-1", e),
      ...n,
      children: /* @__PURE__ */ c.jsx(sc, { className: "size-4" })
    }
  );
}
function J1({
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
      className: D(
        "flex w-full items-center justify-end gap-4 py-3 text-sm text-gray-700",
        "border-t border-gray-50",
        s
      ),
      ...l,
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ c.jsx("span", { className: "font-manrope text-xs text-gray-700", children: "Rows per page:" }),
          /* @__PURE__ */ c.jsx("div", { className: "w-16", children: /* @__PURE__ */ c.jsxs(
            Hb,
            {
              disabled: i || !a,
              defaultValue: `${n}`,
              onValueChange: w,
              "data-testid": "pagination--items-per-page",
              children: [
                /* @__PURE__ */ c.jsx(Gb, { variant: "ghost", disabled: i, children: /* @__PURE__ */ c.jsx(Ub, { placeholder: "Theme" }) }),
                /* @__PURE__ */ c.jsx(Yb, { children: r.map((b) => /* @__PURE__ */ c.jsx(qb, { value: `${b}`, children: b }, b)) })
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
                children: /* @__PURE__ */ c.jsx(cc, { className: "size-4" })
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
                children: /* @__PURE__ */ c.jsx(gr, { className: "size-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Q1({
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
      className: D(
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
              className: D(
                "pointer-events-none size-4 border border-gray-700 rounded-full flex items-center justify-center",
                {
                  "border-2 border-blue-hepatica-600": e
                }
              ),
              children: /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: D("size-2 rounded-full bg-transparent", {
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
const Xb = hr("bg-white rounded-2xl overflow-hidden flex flex-col w-full", {
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
function e2({
  title: e,
  children: n,
  footer: t,
  elevation: r = "elevation-0",
  className: o,
  ...a
}) {
  return /* @__PURE__ */ c.jsxs("section", { ...a, className: D(Xb({ elevation: r, className: o })), children: [
    !!e && /* @__PURE__ */ c.jsx("header", { className: "h-15 flex items-center px-8 border-b border-b-gray-25", children: /* @__PURE__ */ c.jsx("h3", { className: "font-manrope font-semibold text-base text-gray-900 leading-5", children: e }) }),
    /* @__PURE__ */ c.jsx("div", { className: "flex flex-col p-4 md:p-8!", children: n }),
    !!t && /* @__PURE__ */ c.jsx("footer", { className: "px-4 md:px-8! py-4 md:py-6! border-t border-t-gray-25", children: t })
  ] });
}
function t2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "shimmer",
      "aria-hidden": "true",
      className: D(
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
var Cu = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Qi = ae.createContext && /* @__PURE__ */ ae.createContext(Cu), Jb = ["attr", "size", "title"];
function Qb(e, n) {
  if (e == null) return {};
  var t = ey(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function ey(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function or() {
  return or = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, or.apply(this, arguments);
}
function es(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ar(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? es(Object(t), !0).forEach(function(r) {
      ty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : es(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function ty(e, n, t) {
  return n = ny(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function ny(e) {
  var n = ry(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function ry(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Su(e) {
  return e && e.map((n, t) => /* @__PURE__ */ ae.createElement(n.tag, ar({
    key: t
  }, n.attr), Su(n.child)));
}
function oy(e) {
  return (n) => /* @__PURE__ */ ae.createElement(ay, or({
    attr: ar({}, e.attr)
  }, n), Su(e.child));
}
function ay(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: a
    } = e, i = Qb(e, Jb), s = o || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ ae.createElement("svg", or({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, i, {
      className: l,
      style: ar(ar({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ ae.createElement("title", null, a), e.children);
  };
  return Qi !== void 0 ? /* @__PURE__ */ ae.createElement(Qi.Consumer, null, (t) => n(t)) : n(Cu);
}
function iy(e) {
  return oy({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM22.0104 8.81412L20.5962 7.3999L16 11.9961L20.5962 16.5923L22.0104 15.1781L18.8284 11.9961L22.0104 8.81412Z" }, child: [] }] })(e);
}
const sy = new URL("data:image/svg+xml,%3csvg%20width='247'%20height='980'%20viewBox='0%200%20247%20980'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9467_2027)'%3e%3crect%20width='247'%20height='983'%20fill='black'/%3e%3cg%20opacity='0.3'%20filter='url(%23filter0_f_9467_2027)'%3e%3cellipse%20cx='-129.135'%20cy='1014.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20-129.135%201014.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.3'%20filter='url(%23filter1_f_9467_2027)'%3e%3cellipse%20cx='450.01'%20cy='1514.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20450.01%201514.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter2_f_9467_2027)'%3e%3cellipse%20cx='119.407'%20cy='-84.3658'%20rx='364.442'%20ry='193.158'%20fill='%230B495D'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter3_f_9467_2027)'%3e%3cellipse%20cx='399.478'%20cy='-0.360779'%20rx='364.442'%20ry='193.158'%20transform='rotate(30%20399.478%20-0.360779)'%20fill='%23BF3535'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter4_f_9467_2027)'%3e%3cellipse%20cx='-312.773'%20cy='835'%20rx='434.874'%20ry='485.827'%20transform='rotate(-136.998%20-312.773%20835)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter5_f_9467_2027)'%3e%3cellipse%20cx='336.608'%20cy='1039.65'%20rx='553.734'%20ry='293.484'%20transform='rotate(7.13051%20336.608%201039.65)'%20fill='%23660000'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_9467_2027'%20x='-691.145'%20y='128.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_9467_2027'%20x='-112'%20y='628.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_9467_2027'%20x='-453.839'%20y='-486.327'%20width='1146.49'%20height='803.922'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_9467_2027'%20x='-139.475'%20y='-456.526'%20width='1077.91'%20height='912.33'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_9467_2027'%20x='-1172.05'%20y='-27.8358'%20width='1718.56'%20height='1725.67'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_9467_2027'%20x='-531.326'%20y='423.111'%20width='1735.87'%20height='1233.08'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='158.628'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cclipPath%20id='clip0_9467_2027'%3e%3crect%20width='247'%20height='983'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", import.meta.url).href;
function n2({ children: e }) {
  const [n, t] = Me(!1), r = xe(() => t((a) => !a), []), o = xe(() => t(!1), []);
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(
      "button",
      {
        type: "button",
        onClick: r,
        className: D(
          "fixed left-4 top-4 z-40 inline-flex size-12 items-center justify-center",
          "rounded-lg bg-black",
          "lg:hidden"
          // hide the button when viewport >= 912px
        ),
        "aria-label": n ? "Close sidebar" : "Open sidebar",
        children: /* @__PURE__ */ c.jsx(iy, { className: "size-6 text-white" })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: D(
          "fixed inset-0 z-30 bg-black/40 transition-opacity sidebar:hidden lg:hidden",
          n ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: o
      }
    ),
    /* @__PURE__ */ c.jsxs(
      "aside",
      {
        className: D(
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
              src: sy,
              alt: "",
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
            }
          ),
          /* @__PURE__ */ c.jsxs("div", { className: "w-66.75 grid grid-rows-[112px_1fr]", children: [
            /* @__PURE__ */ c.jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center gap-y-2", children: [
              /* @__PURE__ */ c.jsx(Ul, { className: "size-10.5" }),
              /* @__PURE__ */ c.jsx("h1", { className: "font-manrope font-nromal text-base text-white tracking-[0.04em]", children: "MercySeat" })
            ] }) }),
            /* @__PURE__ */ c.jsx("div", { className: "overflow-hidden w-66.75", children: e })
          ] })
        ]
      }
    )
  ] });
}
function cy({
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
        className: D(
          "w-8 h-8 rounded-full flex justify-center items-center",
          "border border-gray-50 bg-gray-25",
          {
            "bg-blue-hepatica-600 text-white border-none hover:bg-blue-hepatica-700": t || r,
            "cursor-not-allowed": o
          }
        ),
        children: r && !t ? /* @__PURE__ */ c.jsx(xn, { className: "size-4 text-white", "aria-hidden": "true" }) : /* @__PURE__ */ c.jsx(
          "span",
          {
            className: D("font-semibold text-sm text-gray-300", {
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
        className: D(
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
function r2({
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
      className: D("w-full", r),
      children: /* @__PURE__ */ c.jsxs("ol", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ c.jsx("span", { className: "absolute border-b border-b-gray-50 top-1/2 left-0 right-0" }),
        e.map((a, i) => {
          const s = o !== -1 && i < o;
          return /* @__PURE__ */ c.jsx(
            cy,
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
function o2({ children: e, items: n, className: t, align: r = "end", side: o = "bottom" }) {
  return /* @__PURE__ */ c.jsxs(Sv, { children: [
    /* @__PURE__ */ c.jsx(Ev, { asChild: !0, children: e }),
    /* @__PURE__ */ c.jsx(kv, { children: /* @__PURE__ */ c.jsx(
      _v,
      {
        className: D(
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
          Rv,
          {
            className: D(
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
function a2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ c.jsx(
    "table",
    {
      "data-slot": "table",
      className: D("w-full caption-bottom text-sm", e),
      ...n
    }
  ) });
}
function i2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: D("border-b-2 border-b-gray-50", e),
      ...n
    }
  );
}
function s2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: D("[&_tr:last-child]:border-0", e),
      ...n
    }
  );
}
function c2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: D(
        "bg-white border-t border-t-gray-50 font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...n
    }
  );
}
function l2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: D(
        "hover:bg-blue-hepatica-100 data-[state=selected]:bg-blue-hepatica-100 border-b border-b-gray-50 transition-colors",
        e
      ),
      ...n
    }
  );
}
function u2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: D(
        "font-manrope text-sm text-gray-900 tracking-[0.02em] h-12 px-4 text-left align-middle font-semibold whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function d2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: D(
        "px-4 py-2 font-manrope align-middle whitespace-nowrap text-sm tracking-[0.02em] text-gray-700 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function p2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "caption",
    {
      "data-slot": "table-caption",
      className: D("text-muted-foreground mt-4 text-sm", e),
      ...n
    }
  );
}
function f2({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: D(
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
var ly = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function uy(e) {
  const n = ({ children: t }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = ly, n;
}
var dy = Object.freeze({
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
}), py = "VisuallyHidden", Eu = u.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(
    se.span,
    {
      ...e,
      ref: n,
      style: { ...dy, ...e.style }
    }
  )
);
Eu.displayName = py;
var fy = Eu, [Tr] = tt("Tooltip", [
  Yt
]), Or = Yt(), ku = "TooltipProvider", my = 700, Ao = "tooltip.open", [hy, Ma] = Tr(ku), _u = (e) => {
  const {
    __scopeTooltip: n,
    delayDuration: t = my,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = u.useRef(!0), s = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    hy,
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
_u.displayName = ku;
var mn = "Tooltip", [gy, Dr] = Tr(mn), Ru = (e) => {
  const {
    __scopeTooltip: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, l = Ma(mn, e.__scopeTooltip), d = Or(n), [p, f] = u.useState(null), m = Le(), g = u.useRef(0), x = i ?? l.disableHoverableContent, h = s ?? l.delayDuration, v = u.useRef(!1), [w, b] = wt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (j) => {
      j ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ao))) : l.onClose(), a?.(j);
    },
    caller: mn
  }), S = u.useMemo(() => w ? v.current ? "delayed-open" : "instant-open" : "closed", [w]), E = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, v.current = !1, b(!0);
  }, [b]), C = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, b(!1);
  }, [b]), A = u.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      v.current = !0, b(!0), g.current = 0;
    }, h);
  }, [h, b]);
  return u.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ c.jsx(wr, { ...d, children: /* @__PURE__ */ c.jsx(
    gy,
    {
      scope: n,
      contentId: m,
      open: w,
      stateAttribute: S,
      trigger: p,
      onTriggerChange: f,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? A() : E();
      }, [l.isOpenDelayedRef, A, E]),
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
Ru.displayName = mn;
var No = "TooltipTrigger", Pu = u.forwardRef(
  (e, n) => {
    const { __scopeTooltip: t, ...r } = e, o = Dr(No, t), a = Ma(No, t), i = Or(t), s = u.useRef(null), l = ce(n, s, o.onTriggerChange), d = u.useRef(!1), p = u.useRef(!1), f = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ c.jsx(ca, { asChild: !0, ...i, children: /* @__PURE__ */ c.jsx(
      se.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: X(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !p.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: X(e.onPointerLeave, () => {
          o.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: X(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: X(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: X(e.onBlur, o.onClose),
        onClick: X(e.onClick, o.onClose)
      }
    ) });
  }
);
Pu.displayName = No;
var vy = "TooltipPortal", [m2, xy] = Tr(vy, {
  forceMount: void 0
}), Wt = "TooltipContent", ju = u.forwardRef(
  (e, n) => {
    const t = xy(Wt, e.__scopeTooltip), { forceMount: r = t.forceMount, side: o = "top", ...a } = e, i = Dr(Wt, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(rt, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ c.jsx(Mu, { side: o, ...a, ref: n }) : /* @__PURE__ */ c.jsx(by, { side: o, ...a, ref: n }) });
  }
), by = u.forwardRef((e, n) => {
  const t = Dr(Wt, e.__scopeTooltip), r = Ma(Wt, e.__scopeTooltip), o = u.useRef(null), a = ce(n, o), [i, s] = u.useState(null), { trigger: l, onClose: d } = t, p = o.current, { onPointerInTransitChange: f } = r, m = u.useCallback(() => {
    s(null), f(!1);
  }, [f]), g = u.useCallback(
    (x, h) => {
      const v = x.currentTarget, w = { x: x.clientX, y: x.clientY }, b = Ey(w, v.getBoundingClientRect()), S = ky(w, b), E = _y(h.getBoundingClientRect()), C = Py([...S, ...E]);
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
        const v = h.target, w = { x: h.clientX, y: h.clientY }, b = l?.contains(v) || p?.contains(v), S = !Ry(w, i);
        b ? m() : S && (m(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, p, i, d, m]), /* @__PURE__ */ c.jsx(Mu, { ...e, ref: a });
}), [yy, wy] = Tr(mn, { isInside: !1 }), Cy = /* @__PURE__ */ uy("TooltipContent"), Mu = u.forwardRef(
  (e, n) => {
    const {
      __scopeTooltip: t,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, l = Dr(Wt, t), d = Or(t), { onClose: p } = l;
    return u.useEffect(() => (document.addEventListener(Ao, p), () => document.removeEventListener(Ao, p)), [p]), u.useEffect(() => {
      if (l.trigger) {
        const f = (m) => {
          m.target?.contains(l.trigger) && p();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, p]), /* @__PURE__ */ c.jsx(
      gn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ c.jsxs(
          la,
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
              /* @__PURE__ */ c.jsx(Cy, { children: r }),
              /* @__PURE__ */ c.jsx(yy, { scope: t, isInside: !0, children: /* @__PURE__ */ c.jsx(fy, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
ju.displayName = Wt;
var Tu = "TooltipArrow", Sy = u.forwardRef(
  (e, n) => {
    const { __scopeTooltip: t, ...r } = e, o = Or(t);
    return wy(
      Tu,
      t
    ).isInside ? null : /* @__PURE__ */ c.jsx(ua, { ...o, ...r, ref: n });
  }
);
Sy.displayName = Tu;
function Ey(e, n) {
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
function ky(e, n, t = 5) {
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
function _y(e) {
  const { top: n, right: t, bottom: r, left: o } = e;
  return [
    { x: o, y: n },
    { x: t, y: n },
    { x: t, y: r },
    { x: o, y: r }
  ];
}
function Ry(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let a = 0, i = n.length - 1; a < n.length; i = a++) {
    const s = n[a], l = n[i], d = s.x, p = s.y, f = l.x, m = l.y;
    p > r != m > r && t < (f - d) * (r - p) / (m - p) + d && (o = !o);
  }
  return o;
}
function Py(e) {
  const n = e.slice();
  return n.sort((t, r) => t.x < r.x ? -1 : t.x > r.x ? 1 : t.y < r.y ? -1 : t.y > r.y ? 1 : 0), jy(n);
}
function jy(e) {
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
function h2({
  delayDuration: e = 0,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    _u,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...n
    }
  );
}
function g2({ ...e }) {
  return /* @__PURE__ */ c.jsx(Ru, { "data-slot": "tooltip", ...e });
}
function v2({ ...e }) {
  return /* @__PURE__ */ c.jsx(Pu, { "data-slot": "tooltip-trigger", ...e });
}
function x2({
  className: e,
  sideOffset: n = 6,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    ju,
    {
      "data-slot": "tooltip-content",
      sideOffset: n,
      className: D(
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
const My = hr("font-manrope text-gray-900", {
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
}), Ty = {
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
function b2(e) {
  const { as: n, variant: t, className: r, children: o, ...a } = e, i = t ?? "body-md", s = n ?? Ty[i];
  return /* @__PURE__ */ c.jsx(
    s,
    {
      className: D(My({ variant: i }), r),
      ...a,
      children: o
    }
  );
}
const Ou = 6048e5, Oy = 864e5, ts = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Ne(e, n) {
  return typeof e == "function" ? e(n) : e && typeof e == "object" && ts in e ? e[ts](n) : e instanceof Date ? new e.constructor(n) : new Date(n);
}
function ke(e, n) {
  return Ne(n || e, e);
}
function Du(e, n, t) {
  const r = ke(e, t?.in);
  if (isNaN(n)) return Ne(e, NaN);
  if (!n)
    return r;
  const o = r.getDate(), a = Ne(e, r.getTime());
  a.setMonth(r.getMonth() + n + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let Dy = {};
function En() {
  return Dy;
}
function Vt(e, n) {
  const t = En(), r = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? t.weekStartsOn ?? t.locale?.options?.weekStartsOn ?? 0, o = ke(e, n?.in), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function ir(e, n) {
  return Vt(e, { ...n, weekStartsOn: 1 });
}
function Au(e, n) {
  const t = ke(e, n?.in), r = t.getFullYear(), o = Ne(t, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = ir(o), i = Ne(t, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = ir(i);
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= s.getTime() ? r : r - 1;
}
function ns(e) {
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
function Ar(e, ...n) {
  const t = Ne.bind(
    null,
    n.find((r) => typeof r == "object")
  );
  return n.map(t);
}
function hn(e, n) {
  const t = ke(e, n?.in);
  return t.setHours(0, 0, 0, 0), t;
}
function Ay(e, n, t) {
  const [r, o] = Ar(
    t?.in,
    e,
    n
  ), a = hn(r), i = hn(o), s = +a - ns(a), l = +i - ns(i);
  return Math.round((s - l) / Oy);
}
function Ny(e, n) {
  const t = Au(e, n), r = Ne(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), ir(r);
}
function Iy(e) {
  return Ne(e, Date.now());
}
function Nu(e, n, t) {
  const [r, o] = Ar(
    t?.in,
    e,
    n
  );
  return +hn(r) == +hn(o);
}
function Ly(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Fy(e) {
  return !(!Ly(e) && typeof e != "number" || isNaN(+ke(e)));
}
function zy(e, n) {
  const t = ke(e, n?.in), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function $y(e, n) {
  const [t, r] = Ar(e, n.start, n.end);
  return { start: t, end: r };
}
function Wy(e, n) {
  const { start: t, end: r } = $y(n?.in, e);
  let o = +t > +r;
  const a = o ? +t : +r, i = o ? r : t;
  i.setHours(0, 0, 0, 0);
  let s = 1;
  const l = [];
  for (; +i <= a; )
    l.push(Ne(t, i)), i.setDate(i.getDate() + s), i.setHours(0, 0, 0, 0);
  return o ? l.reverse() : l;
}
function Vy(e, n) {
  const t = ke(e, n?.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function By(e, n) {
  const t = ke(e, n?.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Hy(e, n) {
  const t = En(), r = t.weekStartsOn ?? t.locale?.options?.weekStartsOn ?? 0, o = ke(e, n?.in), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
const Uy = {
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
}, Gy = (e, n, t) => {
  let r;
  const o = Uy[e];
  return typeof o == "string" ? r = o : n === 1 ? r = o.one : r = o.other.replace("{{count}}", n.toString()), t?.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function uo(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const Yy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, qy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ky = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Zy = {
  date: uo({
    formats: Yy,
    defaultWidth: "full"
  }),
  time: uo({
    formats: qy,
    defaultWidth: "full"
  }),
  dateTime: uo({
    formats: Ky,
    defaultWidth: "full"
  })
}, Xy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Jy = (e, n, t, r) => Xy[e];
function rn(e) {
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
const Qy = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ew = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, tw = {
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
}, nw = {
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
}, rw = {
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
}, ow = {
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
}, aw = (e, n) => {
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
}, iw = {
  ordinalNumber: aw,
  era: rn({
    values: Qy,
    defaultWidth: "wide"
  }),
  quarter: rn({
    values: ew,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: rn({
    values: tw,
    defaultWidth: "wide"
  }),
  day: rn({
    values: nw,
    defaultWidth: "wide"
  }),
  dayPeriod: rn({
    values: rw,
    defaultWidth: "wide",
    formattingValues: ow,
    defaultFormattingWidth: "wide"
  })
};
function on(e) {
  return (n, t = {}) => {
    const r = t.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = n.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? cw(s, (f) => f.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      sw(s, (f) => f.test(i))
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
function sw(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function cw(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function lw(e) {
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
const uw = /^(\d+)(th|st|nd|rd)?/i, dw = /\d+/i, pw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, fw = {
  any: [/^b/i, /^(a|c)/i]
}, mw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, hw = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, gw = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, vw = {
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
}, xw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bw = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, yw = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ww = {
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
}, Cw = {
  ordinalNumber: lw({
    matchPattern: uw,
    parsePattern: dw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: on({
    matchPatterns: pw,
    defaultMatchWidth: "wide",
    parsePatterns: fw,
    defaultParseWidth: "any"
  }),
  quarter: on({
    matchPatterns: mw,
    defaultMatchWidth: "wide",
    parsePatterns: hw,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: on({
    matchPatterns: gw,
    defaultMatchWidth: "wide",
    parsePatterns: vw,
    defaultParseWidth: "any"
  }),
  day: on({
    matchPatterns: xw,
    defaultMatchWidth: "wide",
    parsePatterns: bw,
    defaultParseWidth: "any"
  }),
  dayPeriod: on({
    matchPatterns: yw,
    defaultMatchWidth: "any",
    parsePatterns: ww,
    defaultParseWidth: "any"
  })
}, Sw = {
  code: "en-US",
  formatDistance: Gy,
  formatLong: Zy,
  formatRelative: Jy,
  localize: iw,
  match: Cw,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ew(e, n) {
  const t = ke(e, n?.in);
  return Ay(t, By(t)) + 1;
}
function kw(e, n) {
  const t = ke(e, n?.in), r = +ir(t) - +Ny(t);
  return Math.round(r / Ou) + 1;
}
function Iu(e, n) {
  const t = ke(e, n?.in), r = t.getFullYear(), o = En(), a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, i = Ne(n?.in || e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = Vt(i, n), l = Ne(n?.in || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = Vt(l, n);
  return +t >= +s ? r + 1 : +t >= +d ? r : r - 1;
}
function _w(e, n) {
  const t = En(), r = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? t.firstWeekContainsDate ?? t.locale?.options?.firstWeekContainsDate ?? 1, o = Iu(e, n), a = Ne(n?.in || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Vt(a, n);
}
function Rw(e, n) {
  const t = ke(e, n?.in), r = +Vt(t, n) - +_w(t, n);
  return Math.round(r / Ou) + 1;
}
function pe(e, n) {
  const t = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(n, "0");
  return t + r;
}
const lt = {
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
}, At = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, rs = {
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
    return lt.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, r) {
    const o = Iu(e, r), a = o > 0 ? o : 1 - o;
    if (n === "YY") {
      const i = a % 100;
      return pe(i, 2);
    }
    return n === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : pe(a, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = Au(e);
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
        return lt.M(e, n);
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
    const o = Rw(e, r);
    return n === "wo" ? t.ordinalNumber(o, { unit: "week" }) : pe(o, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const r = kw(e);
    return n === "Io" ? t.ordinalNumber(r, { unit: "week" }) : pe(r, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : lt.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const r = Ew(e);
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
    switch (r === 12 ? o = At.noon : r === 0 ? o = At.midnight : o = r / 12 >= 1 ? "pm" : "am", n) {
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
    switch (r >= 17 ? o = At.evening : r >= 12 ? o = At.afternoon : r >= 4 ? o = At.morning : o = At.night, n) {
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
    return lt.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : lt.H(e, n);
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
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : lt.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : lt.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return lt.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (n) {
      // Hours and optional minutes
      case "X":
        return as(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return xt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return xt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      // Hours and optional minutes
      case "x":
        return as(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return xt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return xt(r, ":");
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
        return "GMT" + os(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + xt(r, ":");
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
        return "GMT" + os(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + xt(r, ":");
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
function os(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? t + String(o) : t + String(o) + n + pe(a, 2);
}
function as(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + pe(Math.abs(e) / 60, 2) : xt(e, n);
}
function xt(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), o = pe(Math.trunc(r / 60), 2), a = pe(r % 60, 2);
  return t + o + n + a;
}
const is = (e, n) => {
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
}, Lu = (e, n) => {
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
}, Pw = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], r = t[1], o = t[2];
  if (!o)
    return is(e, n);
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
  return a.replace("{{date}}", is(r, n)).replace("{{time}}", Lu(o, n));
}, jw = {
  p: Lu,
  P: Pw
}, Mw = /^D+$/, Tw = /^Y+$/, Ow = ["D", "DD", "YY", "YYYY"];
function Dw(e) {
  return Mw.test(e);
}
function Aw(e) {
  return Tw.test(e);
}
function Nw(e, n, t) {
  const r = Iw(e, n, t);
  if (console.warn(r), Ow.includes(e)) throw new RangeError(r);
}
function Iw(e, n, t) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Lw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Fw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, zw = /^'([^]*?)'?$/, $w = /''/g, Ww = /[a-zA-Z]/;
function zn(e, n, t) {
  const r = En(), o = r.locale ?? Sw, a = r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = ke(e, t?.in);
  if (!Fy(s))
    throw new RangeError("Invalid time value");
  let l = n.match(Fw).map((p) => {
    const f = p[0];
    if (f === "p" || f === "P") {
      const m = jw[f];
      return m(p, o.formatLong);
    }
    return p;
  }).join("").match(Lw).map((p) => {
    if (p === "''")
      return { isToken: !1, value: "'" };
    const f = p[0];
    if (f === "'")
      return { isToken: !1, value: Vw(p) };
    if (rs[f])
      return { isToken: !0, value: p };
    if (f.match(Ww))
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
    (Aw(f) || Dw(f)) && Nw(f, n, String(e));
    const m = rs[f[0]];
    return m(s, f, o.localize, d);
  }).join("");
}
function Vw(e) {
  const n = e.match(zw);
  return n ? n[1].replace($w, "'") : e;
}
function ss(e, n) {
  return +ke(e) < +ke(n);
}
function Bw(e, n, t) {
  const [r, o] = Ar(
    t?.in,
    e,
    n
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Hw(e, n) {
  return Nu(
    Ne(e, e),
    Iy(e)
  );
}
function Uw(e, n, t) {
  return Du(e, -1, t);
}
const Gw = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function y2({
  value: e,
  onChange: n,
  "data-testid": t
}) {
  const [r, o] = Me(!1), [a, i] = Me({}), [s, l] = Me(
    () => e ? /* @__PURE__ */ new Date(`${e}T00:00:00`) : /* @__PURE__ */ new Date()
  ), d = Je(null), p = Je(null), f = e ? /* @__PURE__ */ new Date(`${e}T00:00:00`) : null, m = hn(/* @__PURE__ */ new Date()), g = xe(() => {
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
  yt(() => {
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
  const h = Wy({
    start: Vt(Vy(s)),
    end: Hy(zy(s))
  }), v = (b) => {
    ss(b, m) || (n(zn(b, "yyyy-MM-dd")), o(!1));
  }, w = f ? zn(f, "MMMM d, yyyy") : "";
  return /* @__PURE__ */ c.jsxs("div", { ref: d, className: "relative", "data-testid": t, children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        ref: p,
        type: "button",
        onClick: x,
        className: "flex h-10 w-full items-center gap-2 rounded-md border border-gray-200 bg-white px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        children: [
          /* @__PURE__ */ c.jsx(sm, { className: "size-4 shrink-0 text-gray-400" }),
          /* @__PURE__ */ c.jsx("span", { className: D(w ? "text-gray-900" : "text-gray-400"), children: w || "Select a date" })
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
                onClick: () => l((b) => Uw(b)),
                className: "flex size-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100",
                "aria-label": "Previous month",
                children: /* @__PURE__ */ c.jsx(cc, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ c.jsx("span", { className: "text-sm font-semibold text-gray-900", children: zn(s, "MMMM yyyy") }),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                type: "button",
                onClick: () => l((b) => Du(b, 1)),
                className: "flex size-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100",
                "aria-label": "Next month",
                children: /* @__PURE__ */ c.jsx(gr, { className: "size-4" })
              }
            )
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "mb-1 grid grid-cols-7", children: Gw.map((b) => /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "flex h-8 items-center justify-center text-xs font-medium text-gray-400",
              children: b
            },
            b
          )) }),
          /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-7", children: h.map((b) => {
            const S = !!f && Nu(b, f), E = Bw(b, s), C = ss(b, m), A = Hw(b);
            return /* @__PURE__ */ c.jsx(
              "button",
              {
                type: "button",
                onClick: () => v(b),
                disabled: C,
                className: D(
                  "flex size-9 items-center justify-center rounded-full text-sm transition-colors",
                  (!E || C) && "text-gray-300",
                  !C && E && !S && "hover:bg-gray-100",
                  A && !S && "font-semibold text-blue-600",
                  S && "bg-blue-600 font-semibold text-white"
                ),
                children: zn(b, "d")
              },
              b.toISOString()
            );
          }) })
        ]
      }
    )
  ] });
}
const Yw = Array.from({ length: 96 }, (e, n) => {
  const t = n * 15, r = Math.floor(t / 60), o = t % 60, a = `${String(r).padStart(2, "0")}:${String(o).padStart(2, "0")}`, i = r < 12 ? "AM" : "PM", l = `${r === 0 ? 12 : r > 12 ? r - 12 : r}:${String(o).padStart(2, "0")} ${i}`;
  return { value: a, label: l };
});
function qw(e) {
  if (!e) return "";
  const [n, t] = e.split(":"), r = Number(n), o = Number(t), a = r < 12 ? "AM" : "PM";
  return `${r === 0 ? 12 : r > 12 ? r - 12 : r}:${String(o).padStart(2, "0")} ${a}`;
}
function Kw(e) {
  if (!e) return "";
  const [n, t] = e.split(":"), r = Number(n) * 60 + Number(t), o = Math.round(r / 15) * 15, a = Math.min(o, 1425), i = Math.floor(a / 60), s = a % 60;
  return `${String(i).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function w2({
  value: e,
  onChange: n,
  "data-testid": t
}) {
  const [r, o] = Me(!1), [a, i] = Me({}), s = Je(null), l = Je(null), d = Je(null), p = xe(() => {
    if (!l.current) return;
    const x = l.current.getBoundingClientRect();
    i({
      position: "fixed",
      top: x.bottom + 4,
      left: x.left,
      width: x.width,
      zIndex: 9999
    });
  }, []), f = () => {
    p(), o(!0);
  };
  yt(() => {
    if (!r) return;
    const x = (v) => {
      s.current?.contains(v.target) || o(!1);
    }, h = (v) => {
      v.key === "Escape" && o(!1);
    };
    return document.addEventListener("mousedown", x), document.addEventListener("keydown", h), window.addEventListener("scroll", p, !0), window.addEventListener("resize", p), () => {
      document.removeEventListener("mousedown", x), document.removeEventListener("keydown", h), window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", p);
    };
  }, [r, p]), yt(() => {
    r && d.current && d.current.scrollIntoView?.({ block: "center" });
  }, [r]);
  const m = qw(e), g = Kw(e);
  return /* @__PURE__ */ c.jsxs("div", { ref: s, className: "relative", "data-testid": t, children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        ref: l,
        type: "button",
        onClick: f,
        className: "flex h-10 w-full items-center gap-2 rounded-md border border-gray-200 bg-white px-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        children: [
          /* @__PURE__ */ c.jsx(hm, { className: "size-4 shrink-0 text-gray-400" }),
          /* @__PURE__ */ c.jsx("span", { className: D(m ? "text-gray-900" : "text-gray-400"), children: m || "Select a time" })
        ]
      }
    ),
    r && /* @__PURE__ */ c.jsx(
      "div",
      {
        style: a,
        className: "max-h-56 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg",
        children: Yw.map((x) => {
          const h = x.value === g && !!e;
          return /* @__PURE__ */ c.jsx(
            "button",
            {
              ref: h ? d : void 0,
              type: "button",
              onClick: () => {
                n(x.value), o(!1);
              },
              className: D(
                "flex w-full items-center px-4 py-2 text-sm transition-colors",
                h ? "bg-blue-50 font-semibold text-blue-600" : "text-gray-700 hover:bg-gray-50"
              ),
              children: x.label
            },
            x.value
          );
        })
      }
    )
  ] });
}
export {
  e1 as AlertDialog,
  Wv as AnalyticsIcon,
  Vv as AnnouncementIcon,
  t1 as Badge,
  n1 as Breadcrumb,
  o1 as BreadcrumbItem,
  a1 as BreadcrumbLink,
  r1 as BreadcrumbList,
  i1 as BreadcrumbPage,
  s1 as BreadcrumbSeparator,
  Xo as Button,
  c1 as Checkbox,
  Bv as ChurchIcon,
  Hv as ClassIcon,
  Uv as CrownIcon,
  y2 as DatePicker,
  l1 as Dialog,
  Jw as DialogAction,
  Qw as DialogCancel,
  d1 as DialogClose,
  p1 as DialogContent,
  g1 as DialogDescription,
  m1 as DialogFooter,
  f1 as DialogHeader,
  Pm as DialogOverlay,
  Rm as DialogPortal,
  h1 as DialogTitle,
  u1 as DialogTrigger,
  v1 as DropdownMenu,
  S1 as DropdownMenuCheckboxItem,
  y1 as DropdownMenuContent,
  w1 as DropdownMenuGroup,
  C1 as DropdownMenuItem,
  _1 as DropdownMenuLabel,
  x1 as DropdownMenuPortal,
  E1 as DropdownMenuRadioGroup,
  k1 as DropdownMenuRadioItem,
  R1 as DropdownMenuSeparator,
  P1 as DropdownMenuShortcut,
  j1 as DropdownMenuSub,
  T1 as DropdownMenuSubContent,
  M1 as DropdownMenuSubTrigger,
  b1 as DropdownMenuTrigger,
  Gv as EventIcon,
  O1 as Form,
  I1 as FormControl,
  L1 as FormDescription,
  D1 as FormField,
  A1 as FormItem,
  N1 as FormLabel,
  F1 as FormMessage,
  Yv as GiftIcon,
  qv as HomeIcon,
  z1 as Icon,
  $1 as ImageUploader,
  N0 as Input,
  V1 as InputOTP,
  B1 as InputOTPGroup,
  U1 as InputOTPSeparator,
  H1 as InputOTPSlot,
  kl as Label,
  Kv as ListIcon,
  Zv as LivestreamIcon,
  Xv as LockClosedIcon,
  Jv as LockOpenIcon,
  Ul as Logo,
  G1 as LogoLockup,
  Y1 as MediaUploader,
  q1 as MenuItem,
  Qv as MinistryIcon,
  J1 as Pagination,
  W1 as PasswordInput,
  ex as PodcastIcon,
  Q1 as RadioButton,
  e2 as Section,
  Hb as Select,
  Yb as SelectContent,
  K1 as SelectGroup,
  qb as SelectItem,
  Z1 as SelectLabel,
  Zb as SelectScrollDownButton,
  Kb as SelectScrollUpButton,
  X1 as SelectSeparator,
  Gb as SelectTrigger,
  Ub as SelectValue,
  tx as SeriesIcon,
  nx as SermonIcon,
  t2 as Shimmer,
  n2 as Sidebar,
  r2 as Stepper,
  rx as SubscriptionIcon,
  o2 as SuspendedMenu,
  a2 as Table,
  s2 as TableBody,
  p2 as TableCaption,
  d2 as TableCell,
  c2 as TableFooter,
  u2 as TableHead,
  i2 as TableHeader,
  l2 as TableRow,
  f2 as Textarea,
  w2 as TimePicker,
  g2 as Tooltip,
  x2 as TooltipContent,
  h2 as TooltipProvider,
  v2 as TooltipTrigger,
  b2 as Typography,
  ox as VideoIcon,
  em as badgeVariants,
  _m as buttonVariants,
  My as typographyVariants,
  _r as useFormField
};
