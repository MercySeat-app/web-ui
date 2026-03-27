import * as u from "react";
import ie, { useState as $e, forwardRef as Bn, createElement as Vr, useContext as Br, createContext as ya, useId as Ll, useMemo as rt, useRef as sn, useReducer as Fl, useEffect as Cn, useCallback as ye, useImperativeHandle as zl, Fragment as $l, useLayoutEffect as Wl } from "react";
import * as Hn from "react-dom";
import Vl from "react-dom";
function uo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cn = { exports: {} }, $t = {};
var Xo;
function Bl() {
  if (Xo) return $t;
  Xo = 1;
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
var Jo;
function Hl() {
  return Jo || (Jo = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === X ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case g:
          return "Fragment";
        case C:
          return "Profiler";
        case y:
          return "StrictMode";
        case N:
          return "Suspense";
        case A:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case m:
            return "Portal";
          case E:
            return x.displayName || "Context";
          case S:
            return (x._context.displayName || "Context") + ".Consumer";
          case w:
            var P = x.render;
            return x = x.displayName, x || (x = P.displayName || P.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case j:
            return P = x.displayName || null, P !== null ? P : e(x.type) || "Memo";
          case I:
            P = x._payload, x = x._init;
            try {
              return e(x(P));
            } catch {
            }
        }
      return null;
    }
    function n(x) {
      return "" + x;
    }
    function t(x) {
      try {
        n(x);
        var P = !1;
      } catch {
        P = !0;
      }
      if (P) {
        P = console;
        var D = P.error, O = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return D.call(
          P,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), n(x);
      }
    }
    function r(x) {
      if (x === g) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === I)
        return "<...>";
      try {
        var P = e(x);
        return P ? "<" + P + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var x = q.A;
      return x === null ? null : x.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(x) {
      if (U.call(x, "key")) {
        var P = Object.getOwnPropertyDescriptor(x, "key").get;
        if (P && P.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function s(x, P) {
      function D() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          P
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: D,
        configurable: !0
      });
    }
    function l() {
      var x = e(this.type);
      return Q[x] || (Q[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function d(x, P, D, O, G, W) {
      var k = D.ref;
      return x = {
        $$typeof: b,
        type: x,
        key: P,
        props: D,
        _owner: O
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(x, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function p(x, P, D, O, G, W) {
      var k = P.children;
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
      if (U.call(P, "key")) {
        k = e(x);
        var V = Object.keys(P).filter(function(F) {
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
      if (k = null, D !== void 0 && (t(D), k = "" + D), a(P) && (t(P.key), k = "" + P.key), "key" in P) {
        D = {};
        for (var Z in P)
          Z !== "key" && (D[Z] = P[Z]);
      } else D = P;
      return k && s(
        D,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), d(
        x,
        k,
        D,
        o(),
        G,
        W
      );
    }
    function f(x) {
      v(x) ? x._store && (x._store.validated = 1) : typeof x == "object" && x !== null && x.$$typeof === I && (x._payload.status === "fulfilled" ? v(x._payload.value) && x._payload.value._store && (x._payload.value._store.validated = 1) : x._store && (x._store.validated = 1));
    }
    function v(x) {
      return typeof x == "object" && x !== null && x.$$typeof === b;
    }
    var h = ie, b = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), E = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), X = Symbol.for("react.client.reference"), q = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, H = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(x) {
        return x();
      }
    };
    var $, Q = {}, R = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), T = J(r(i)), _ = {};
    Wt.Fragment = g, Wt.jsx = function(x, P, D) {
      var O = 1e4 > q.recentlyCreatedOwnerStacks++;
      return p(
        x,
        P,
        D,
        !1,
        O ? Error("react-stack-top-frame") : R,
        O ? J(r(x)) : T
      );
    }, Wt.jsxs = function(x, P, D) {
      var O = 1e4 > q.recentlyCreatedOwnerStacks++;
      return p(
        x,
        P,
        D,
        !0,
        O ? Error("react-stack-top-frame") : R,
        O ? J(r(x)) : T
      );
    };
  })()), Wt;
}
var Qo;
function Ul() {
  return Qo || (Qo = 1, process.env.NODE_ENV === "production" ? cn.exports = Bl() : cn.exports = Hl()), cn.exports;
}
var c = Ul();
function Gl(e, n) {
  const t = u.createContext(n), r = (i) => {
    const { children: a, ...s } = i, l = u.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ c.jsx(t.Provider, { value: l, children: a });
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
    const s = u.createContext(a), l = t.length;
    t = [...t, a];
    const d = (f) => {
      const { scope: v, children: h, ...b } = f, m = v?.[e]?.[l] || s, g = u.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ c.jsx(m.Provider, { value: g, children: h });
    };
    d.displayName = i + "Provider";
    function p(f, v) {
      const h = v?.[e]?.[l] || s, b = u.useContext(h);
      if (b) return b;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [d, p];
  }
  const o = () => {
    const i = t.map((a) => u.createContext(a));
    return function(s) {
      const l = s?.[e] || i;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, ql(o, ...n)];
}
function ql(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((s, { useScope: l, scopeName: d }) => {
        const f = l(i)[`__scope${d}`];
        return { ...s, ...f };
      }, {});
      return u.useMemo(() => ({ [`__scope${n.scopeName}`]: a }), [a]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
function ei(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function en(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const i = ei(o, n);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : ei(e[o], null);
        }
      };
  };
}
function ue(...e) {
  return u.useCallback(en(...e), e);
}
function ne(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e?.(o), t === !1 || !o.defaultPrevented)
      return n?.(o);
  };
}
var _e = globalThis?.document ? u.useLayoutEffect : () => {
}, Yl = u[" useId ".trim().toString()] || (() => {
}), Kl = 0;
function Ye(e) {
  const [n, t] = u.useState(Yl());
  return _e(() => {
    t((r) => r ?? String(Kl++));
  }, [e]), e || (n ? `radix-${n}` : "");
}
var Zl = u[" useInsertionEffect ".trim().toString()] || _e;
function Yt({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, i, a] = Xl({
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
        const f = Jl(p) ? p(e) : p;
        f !== e && a.current?.(f);
      } else
        i(p);
    },
    [s, e, i, a]
  );
  return [l, d];
}
function Xl({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = u.useState(e), o = u.useRef(t), i = u.useRef(n);
  return Zl(() => {
    i.current = n;
  }, [n]), u.useEffect(() => {
    o.current !== t && (i.current?.(t), o.current = t);
  }, [t, o]), [t, r, i];
}
function Jl(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  const n = /* @__PURE__ */ Ql(e), t = u.forwardRef((r, o) => {
    const { children: i, ...a } = r, s = u.Children.toArray(i), l = s.find(td);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Ql(e) {
  const n = u.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (u.isValidElement(o)) {
      const a = rd(o), s = nd(i, o.props);
      return o.type !== u.Fragment && (s.ref = r ? en(r, a) : a), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var wa = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ed(e) {
  const n = ({ children: t }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
  return n.displayName = `${e}.Slottable`, n.__radixId = wa, n;
}
function td(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === wa;
}
function nd(e, n) {
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
function rd(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var od = [
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
], se = od.reduce((e, n) => {
  const t = /* @__PURE__ */ jt(`Primitive.${n}`), r = u.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, l = a ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function Ca(e, n) {
  e && Hn.flushSync(() => e.dispatchEvent(n));
}
function Be(e) {
  const n = u.useRef(e);
  return u.useEffect(() => {
    n.current = e;
  }), u.useMemo(() => (...t) => n.current?.(...t), []);
}
function id(e, n = globalThis?.document) {
  const t = Be(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && t(o);
    };
    return n.addEventListener("keydown", r, { capture: !0 }), () => n.removeEventListener("keydown", r, { capture: !0 });
  }, [t, n]);
}
var ad = "DismissableLayer", Hr = "dismissableLayer.update", sd = "dismissableLayer.pointerDownOutside", cd = "dismissableLayer.focusOutside", ti, Sa = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Un = u.forwardRef(
  (e, n) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...l
    } = e, d = u.useContext(Sa), [p, f] = u.useState(null), v = p?.ownerDocument ?? globalThis?.document, [, h] = u.useState({}), b = ue(n, (A) => f(A)), m = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(g), C = p ? m.indexOf(p) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, E = C >= y, w = ud((A) => {
      const j = A.target, I = [...d.branches].some((B) => B.contains(j));
      !E || I || (o?.(A), a?.(A), A.defaultPrevented || s?.());
    }, v), N = pd((A) => {
      const j = A.target;
      [...d.branches].some((B) => B.contains(j)) || (i?.(A), a?.(A), A.defaultPrevented || s?.());
    }, v);
    return id((A) => {
      C === d.layers.size - 1 && (r?.(A), !A.defaultPrevented && s && (A.preventDefault(), s()));
    }, v), u.useEffect(() => {
      if (p)
        return t && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (ti = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), ni(), () => {
          t && d.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = ti);
        };
    }, [p, v, t, d]), u.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), ni());
    }, [p, d]), u.useEffect(() => {
      const A = () => h({});
      return document.addEventListener(Hr, A), () => document.removeEventListener(Hr, A);
    }, []), /* @__PURE__ */ c.jsx(
      se.div,
      {
        ...l,
        ref: b,
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
Un.displayName = ad;
var ld = "DismissableLayerBranch", dd = u.forwardRef((e, n) => {
  const t = u.useContext(Sa), r = u.useRef(null), o = ue(n, r);
  return u.useEffect(() => {
    const i = r.current;
    if (i)
      return t.branches.add(i), () => {
        t.branches.delete(i);
      };
  }, [t.branches]), /* @__PURE__ */ c.jsx(se.div, { ...e, ref: o });
});
dd.displayName = ld;
function ud(e, n = globalThis?.document) {
  const t = Be(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Ea(
            sd,
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
function pd(e, n = globalThis?.document) {
  const t = Be(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Ea(cd, t, { originalEvent: i }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", o), () => n.removeEventListener("focusin", o);
  }, [n, t]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ni() {
  const e = new CustomEvent(Hr);
  document.dispatchEvent(e);
}
function Ea(e, n, t, { discrete: r }) {
  const o = t.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  n && o.addEventListener(e, n, { once: !0 }), r ? Ca(o, i) : o.dispatchEvent(i);
}
var hr = "focusScope.autoFocusOnMount", gr = "focusScope.autoFocusOnUnmount", ri = { bubbles: !1, cancelable: !0 }, fd = "FocusScope", Gn = u.forwardRef((e, n) => {
  const {
    loop: t = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, l] = u.useState(null), d = Be(o), p = Be(i), f = u.useRef(null), v = ue(n, (m) => l(m)), h = u.useRef({
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
      ii.add(h);
      const m = document.activeElement;
      if (!s.contains(m)) {
        const y = new CustomEvent(hr, ri);
        s.addEventListener(hr, d), s.dispatchEvent(y), y.defaultPrevented || (md(bd(ka(s)), { select: !0 }), document.activeElement === m && nt(s));
      }
      return () => {
        s.removeEventListener(hr, d), setTimeout(() => {
          const y = new CustomEvent(gr, ri);
          s.addEventListener(gr, p), s.dispatchEvent(y), y.defaultPrevented || nt(m ?? document.body, { select: !0 }), s.removeEventListener(gr, p), ii.remove(h);
        }, 0);
      };
    }
  }, [s, d, p, h]);
  const b = u.useCallback(
    (m) => {
      if (!t && !r || h.paused) return;
      const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, y = document.activeElement;
      if (g && y) {
        const C = m.currentTarget, [S, E] = vd(C);
        S && E ? !m.shiftKey && y === E ? (m.preventDefault(), t && nt(S, { select: !0 })) : m.shiftKey && y === S && (m.preventDefault(), t && nt(E, { select: !0 })) : y === C && m.preventDefault();
      }
    },
    [t, r, h.paused]
  );
  return /* @__PURE__ */ c.jsx(se.div, { tabIndex: -1, ...a, ref: v, onKeyDown: b });
});
Gn.displayName = fd;
function md(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const r of e)
    if (nt(r, { select: n }), document.activeElement !== t) return;
}
function vd(e) {
  const n = ka(e), t = oi(n, e), r = oi(n.reverse(), e);
  return [t, r];
}
function ka(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function oi(e, n) {
  for (const t of e)
    if (!hd(t, { upTo: n })) return t;
}
function hd(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function gd(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function nt(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== t && gd(e) && n && e.select();
  }
}
var ii = xd();
function xd() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && t?.pause(), e = ai(e, n), e.unshift(n);
    },
    remove(n) {
      e = ai(e, n), e[0]?.resume();
    }
  };
}
function ai(e, n) {
  const t = [...e], r = t.indexOf(n);
  return r !== -1 && t.splice(r, 1), t;
}
function bd(e) {
  return e.filter((n) => n.tagName !== "A");
}
var yd = "Portal", qn = u.forwardRef((e, n) => {
  const { container: t, ...r } = e, [o, i] = u.useState(!1);
  _e(() => i(!0), []);
  const a = t || o && globalThis?.document?.body;
  return a ? Vl.createPortal(/* @__PURE__ */ c.jsx(se.div, { ...r, ref: n }), a) : null;
});
qn.displayName = yd;
function wd(e, n) {
  return u.useReducer((t, r) => n[t][r] ?? t, e);
}
var st = (e) => {
  const { present: n, children: t } = e, r = Cd(n), o = typeof t == "function" ? t({ present: r.isPresent }) : u.Children.only(t), i = ue(r.ref, Sd(o));
  return typeof t == "function" || r.isPresent ? u.cloneElement(o, { ref: i }) : null;
};
st.displayName = "Presence";
function Cd(e) {
  const [n, t] = u.useState(), r = u.useRef(null), o = u.useRef(e), i = u.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = wd(a, {
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
    const d = ln(r.current);
    i.current = s === "mounted" ? d : "none";
  }, [s]), _e(() => {
    const d = r.current, p = o.current;
    if (p !== e) {
      const v = i.current, h = ln(d);
      e ? l("MOUNT") : h === "none" || d?.display === "none" ? l("UNMOUNT") : l(p && v !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), _e(() => {
    if (n) {
      let d;
      const p = n.ownerDocument.defaultView ?? window, f = (h) => {
        const m = ln(r.current).includes(CSS.escape(h.animationName));
        if (h.target === n && m && (l("ANIMATION_END"), !o.current)) {
          const g = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", d = p.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = g);
          });
        }
      }, v = (h) => {
        h.target === n && (i.current = ln(r.current));
      };
      return n.addEventListener("animationstart", v), n.addEventListener("animationcancel", f), n.addEventListener("animationend", f), () => {
        p.clearTimeout(d), n.removeEventListener("animationstart", v), n.removeEventListener("animationcancel", f), n.removeEventListener("animationend", f);
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
function ln(e) {
  return e?.animationName || "none";
}
function Sd(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var xr = 0;
function po() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? si()), document.body.insertAdjacentElement("beforeend", e[1] ?? si()), xr++, () => {
      xr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), xr--;
    };
  }, []);
}
function si() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ur = function(e, n) {
  return Ur = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
  }, Ur(e, n);
};
function Ed(e, n) {
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
function _a(e, n) {
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
    function l(p) {
      try {
        d(r.throw(p));
      } catch (f) {
        a(f);
      }
    }
    function d(p) {
      p.done ? i(p.value) : o(p.value).then(s, l);
    }
    d((r = r.apply(e, n || [])).next());
  });
}
function kd(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
var Sn = "right-scroll-bar-position", En = "width-before-scroll-bar", _d = "with-scroll-bars-hidden", Rd = "--removed-body-scroll-bar-size";
function br(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function jd(e, n) {
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
var Pd = typeof window < "u" ? u.useLayoutEffect : u.useEffect, ci = /* @__PURE__ */ new WeakMap();
function Ad(e, n) {
  var t = jd(null, function(r) {
    return e.forEach(function(o) {
      return br(o, r);
    });
  });
  return Pd(function() {
    var r = ci.get(t);
    if (r) {
      var o = new Set(r), i = new Set(e), a = t.current;
      o.forEach(function(s) {
        i.has(s) || br(s, null);
      }), i.forEach(function(s) {
        o.has(s) || br(s, a);
      });
    }
    ci.set(t, e);
  }, [e]), t;
}
function Md(e) {
  return e;
}
function Od(e, n) {
  n === void 0 && (n = Md);
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
      }, d = function() {
        return Promise.resolve().then(l);
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
function Td(e) {
  e === void 0 && (e = {});
  var n = Od(null);
  return n.options = he({ async: !0, ssr: !1 }, e), n;
}
var Ra = function(e) {
  var n = e.sideCar, t = _a(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = n.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, he({}, t));
};
Ra.isSideCarExport = !0;
function Dd(e, n) {
  return e.useMedium(n), Ra;
}
var ja = Td(), yr = function() {
}, Yn = u.forwardRef(function(e, n) {
  var t = u.useRef(null), r = u.useState({
    onScrollCapture: yr,
    onWheelCapture: yr,
    onTouchMoveCapture: yr
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, d = e.removeScrollBar, p = e.enabled, f = e.shards, v = e.sideCar, h = e.noRelative, b = e.noIsolation, m = e.inert, g = e.allowPinchZoom, y = e.as, C = y === void 0 ? "div" : y, S = e.gapMode, E = _a(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = v, N = Ad([t, n]), A = he(he({}, E), o);
  return u.createElement(
    u.Fragment,
    null,
    p && u.createElement(w, { sideCar: ja, removeScrollBar: d, shards: f, noRelative: h, noIsolation: b, inert: m, setCallbacks: i, allowPinchZoom: !!g, lockRef: t, gapMode: S }),
    a ? u.cloneElement(u.Children.only(s), he(he({}, A), { ref: N })) : u.createElement(C, he({}, A, { className: l, ref: N }), s)
  );
});
Yn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Yn.classNames = {
  fullWidth: En,
  zeroRight: Sn
};
var Nd = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Id() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = Nd();
  return n && e.setAttribute("nonce", n), e;
}
function Ld(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function Fd(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var zd = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = Id()) && (Ld(n, t), Fd(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, $d = function() {
  var e = zd();
  return function(n, t) {
    u.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, Pa = function() {
  var e = $d(), n = function(t) {
    var r = t.styles, o = t.dynamic;
    return e(r, o), null;
  };
  return n;
}, Wd = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, wr = function(e) {
  return parseInt(e || "", 10) || 0;
}, Vd = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], r = n[e === "padding" ? "paddingTop" : "marginTop"], o = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [wr(t), wr(r), wr(o)];
}, Bd = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Wd;
  var n = Vd(e), t = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, r - t + n[2] - n[0])
  };
}, Hd = Pa(), kt = "data-scroll-locked", Ud = function(e, n, t, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(_d, ` {
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
  
  .`).concat(Sn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(En, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Sn, " .").concat(Sn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(En, " .").concat(En, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(kt, `] {
    `).concat(Rd, ": ").concat(s, `px;
  }
`);
}, li = function() {
  var e = parseInt(document.body.getAttribute(kt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Gd = function() {
  u.useEffect(function() {
    return document.body.setAttribute(kt, (li() + 1).toString()), function() {
      var e = li() - 1;
      e <= 0 ? document.body.removeAttribute(kt) : document.body.setAttribute(kt, e.toString());
    };
  }, []);
}, qd = function(e) {
  var n = e.noRelative, t = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Gd();
  var i = u.useMemo(function() {
    return Bd(o);
  }, [o]);
  return u.createElement(Hd, { styles: Ud(i, !n, o, t ? "" : "!important") });
}, Gr = !1;
if (typeof window < "u")
  try {
    var dn = Object.defineProperty({}, "passive", {
      get: function() {
        return Gr = !0, !0;
      }
    });
    window.addEventListener("test", dn, dn), window.removeEventListener("test", dn, dn);
  } catch {
    Gr = !1;
  }
var wt = Gr ? { passive: !1 } : !1, Yd = function(e) {
  return e.tagName === "TEXTAREA";
}, Aa = function(e, n) {
  if (!(e instanceof Element))
    return !1;
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !Yd(e) && t[n] === "visible")
  );
}, Kd = function(e) {
  return Aa(e, "overflowY");
}, Zd = function(e) {
  return Aa(e, "overflowX");
}, di = function(e, n) {
  var t = n.ownerDocument, r = n;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ma(e, r);
    if (o) {
      var i = Oa(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== t.body);
  return !1;
}, Xd = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, r = e.clientHeight;
  return [
    n,
    t,
    r
  ];
}, Jd = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, r = e.clientWidth;
  return [
    n,
    t,
    r
  ];
}, Ma = function(e, n) {
  return e === "v" ? Kd(n) : Zd(n);
}, Oa = function(e, n) {
  return e === "v" ? Xd(n) : Jd(n);
}, Qd = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, eu = function(e, n, t, r, o) {
  var i = Qd(e, window.getComputedStyle(n).direction), a = i * r, s = t.target, l = n.contains(s), d = !1, p = a > 0, f = 0, v = 0;
  do {
    if (!s)
      break;
    var h = Oa(e, s), b = h[0], m = h[1], g = h[2], y = m - g - i * b;
    (b || y) && Ma(e, s) && (f += y, v += b);
    var C = s.parentNode;
    s = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (n.contains(s) || n === s)
  );
  return (p && Math.abs(f) < 1 || !p && Math.abs(v) < 1) && (d = !0), d;
}, un = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ui = function(e) {
  return [e.deltaX, e.deltaY];
}, pi = function(e) {
  return e && "current" in e ? e.current : e;
}, tu = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, nu = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ru = 0, Ct = [];
function ou(e) {
  var n = u.useRef([]), t = u.useRef([0, 0]), r = u.useRef(), o = u.useState(ru++)[0], i = u.useState(Pa)[0], a = u.useRef(e);
  u.useEffect(function() {
    a.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = kd([e.lockRef.current], (e.shards || []).map(pi), !0).filter(Boolean);
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
    var y = un(m), C = t.current, S = "deltaX" in m ? m.deltaX : C[0] - y[0], E = "deltaY" in m ? m.deltaY : C[1] - y[1], w, N = m.target, A = Math.abs(S) > Math.abs(E) ? "h" : "v";
    if ("touches" in m && A === "h" && N.type === "range")
      return !1;
    var j = window.getSelection(), I = j && j.anchorNode, B = I ? I === N || I.contains(N) : !1;
    if (B)
      return !1;
    var X = di(A, N);
    if (!X)
      return !0;
    if (X ? w = A : (w = A === "v" ? "h" : "v", X = di(A, N)), !X)
      return !1;
    if (!r.current && "changedTouches" in m && (S || E) && (r.current = w), !w)
      return !0;
    var q = r.current || w;
    return eu(q, g, m, q === "h" ? S : E);
  }, []), l = u.useCallback(function(m) {
    var g = m;
    if (!(!Ct.length || Ct[Ct.length - 1] !== i)) {
      var y = "deltaY" in g ? ui(g) : un(g), C = n.current.filter(function(w) {
        return w.name === g.type && (w.target === g.target || g.target === w.shadowParent) && tu(w.delta, y);
      })[0];
      if (C && C.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!C) {
        var S = (a.current.shards || []).map(pi).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), E = S.length > 0 ? s(g, S[0]) : !a.current.noIsolation;
        E && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(m, g, y, C) {
    var S = { name: m, delta: g, target: y, should: C, shadowParent: iu(y) };
    n.current.push(S), setTimeout(function() {
      n.current = n.current.filter(function(E) {
        return E !== S;
      });
    }, 1);
  }, []), p = u.useCallback(function(m) {
    t.current = un(m), r.current = void 0;
  }, []), f = u.useCallback(function(m) {
    d(m.type, ui(m), m.target, s(m, e.lockRef.current));
  }, []), v = u.useCallback(function(m) {
    d(m.type, un(m), m.target, s(m, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Ct.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", l, wt), document.addEventListener("touchmove", l, wt), document.addEventListener("touchstart", p, wt), function() {
      Ct = Ct.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", l, wt), document.removeEventListener("touchmove", l, wt), document.removeEventListener("touchstart", p, wt);
    };
  }, []);
  var h = e.removeScrollBar, b = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    b ? u.createElement(i, { styles: nu(o) }) : null,
    h ? u.createElement(qd, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function iu(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
  return n;
}
const au = Dd(ja, ou);
var Kn = u.forwardRef(function(e, n) {
  return u.createElement(Yn, he({}, e, { ref: n, sideCar: au }));
});
Kn.classNames = Yn.classNames;
var su = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, St = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap(), fn = {}, Cr = 0, Ta = function(e) {
  return e && (e.host || Ta(e.parentNode));
}, cu = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var r = Ta(t);
    return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, lu = function(e, n, t, r) {
  var o = cu(n, Array.isArray(e) ? e : [e]);
  fn[t] || (fn[t] = /* @__PURE__ */ new WeakMap());
  var i = fn[t], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), d = function(f) {
    !f || s.has(f) || (s.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var p = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(v) {
      if (s.has(v))
        p(v);
      else
        try {
          var h = v.getAttribute(r), b = h !== null && h !== "false", m = (St.get(v) || 0) + 1, g = (i.get(v) || 0) + 1;
          St.set(v, m), i.set(v, g), a.push(v), m === 1 && b && pn.set(v, !0), g === 1 && v.setAttribute(t, "true"), b || v.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", v, y);
        }
    });
  };
  return p(n), s.clear(), Cr++, function() {
    a.forEach(function(f) {
      var v = St.get(f) - 1, h = i.get(f) - 1;
      St.set(f, v), i.set(f, h), v || (pn.has(f) || f.removeAttribute(r), pn.delete(f)), h || f.removeAttribute(t);
    }), Cr--, Cr || (St = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap(), fn = {});
  };
}, fo = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = su(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), lu(r, o, t, "aria-hidden")) : function() {
    return null;
  };
}, Zn = "Dialog", [Da, Na] = at(Zn), [du, Le] = Da(Zn), mo = (e) => {
  const {
    __scopeDialog: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = u.useRef(null), l = u.useRef(null), [d, p] = Yt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: Zn
  });
  return /* @__PURE__ */ c.jsx(
    du,
    {
      scope: n,
      triggerRef: s,
      contentRef: l,
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
mo.displayName = Zn;
var Ia = "DialogTrigger", vo = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(Ia, t), i = ue(n, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      se.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": So(o.open),
        ...r,
        ref: i,
        onClick: ne(e.onClick, o.onOpenToggle)
      }
    );
  }
);
vo.displayName = Ia;
var ho = "DialogPortal", [uu, La] = Da(ho, {
  forceMount: void 0
}), go = (e) => {
  const { __scopeDialog: n, forceMount: t, children: r, container: o } = e, i = Le(ho, n);
  return /* @__PURE__ */ c.jsx(uu, { scope: n, forceMount: t, children: u.Children.map(r, (a) => /* @__PURE__ */ c.jsx(st, { present: t || i.open, children: /* @__PURE__ */ c.jsx(qn, { asChild: !0, container: o, children: a }) })) });
};
go.displayName = ho;
var Rn = "DialogOverlay", xo = u.forwardRef(
  (e, n) => {
    const t = La(Rn, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, i = Le(Rn, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ c.jsx(st, { present: r || i.open, children: /* @__PURE__ */ c.jsx(fu, { ...o, ref: n }) }) : null;
  }
);
xo.displayName = Rn;
var pu = /* @__PURE__ */ jt("DialogOverlay.RemoveScroll"), fu = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(Rn, t);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Kn, { as: pu, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        se.div,
        {
          "data-state": So(o.open),
          ...r,
          ref: n,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), pt = "DialogContent", bo = u.forwardRef(
  (e, n) => {
    const t = La(pt, e.__scopeDialog), { forceMount: r = t.forceMount, ...o } = e, i = Le(pt, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(st, { present: r || i.open, children: i.modal ? /* @__PURE__ */ c.jsx(mu, { ...o, ref: n }) : /* @__PURE__ */ c.jsx(vu, { ...o, ref: n }) });
  }
);
bo.displayName = pt;
var mu = u.forwardRef(
  (e, n) => {
    const t = Le(pt, e.__scopeDialog), r = u.useRef(null), o = ue(n, t.contentRef, r);
    return u.useEffect(() => {
      const i = r.current;
      if (i) return fo(i);
    }, []), /* @__PURE__ */ c.jsx(
      Fa,
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
), vu = u.forwardRef(
  (e, n) => {
    const t = Le(pt, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Fa,
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
), Fa = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = Le(pt, t), l = u.useRef(null), d = ue(n, l);
    return po(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        Gn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ c.jsx(
            Un,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": So(s.open),
              ...a,
              ref: d,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(gu, { titleId: s.titleId }),
        /* @__PURE__ */ c.jsx(bu, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), yo = "DialogTitle", wo = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(yo, t);
    return /* @__PURE__ */ c.jsx(se.h2, { id: o.titleId, ...r, ref: n });
  }
);
wo.displayName = yo;
var za = "DialogDescription", Co = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le(za, t);
    return /* @__PURE__ */ c.jsx(se.p, { id: o.descriptionId, ...r, ref: n });
  }
);
Co.displayName = za;
var $a = "DialogClose", tn = u.forwardRef(
  (e, n) => {
    const { __scopeDialog: t, ...r } = e, o = Le($a, t);
    return /* @__PURE__ */ c.jsx(
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
tn.displayName = $a;
function So(e) {
  return e ? "open" : "closed";
}
var Wa = "DialogTitleWarning", [hu, Va] = Gl(Wa, {
  contentName: pt,
  titleName: yo,
  docsSlug: "dialog"
}), gu = ({ titleId: e }) => {
  const n = Va(Wa), t = `\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(t));
  }, [t, e]), null;
}, xu = "DialogDescriptionWarning", bu = ({ contentRef: e, descriptionId: n }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Va(xu).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    n && o && (document.getElementById(n) || console.warn(r));
  }, [r, e, n]), null;
}, yu = mo, wu = vo, Cu = go, Su = xo, Eu = bo, ku = wo, _u = Co, Ba = tn, Ha = "AlertDialog", [Ru] = at(Ha, [
  Na
]), Xe = Na(), Ua = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = Xe(n);
  return /* @__PURE__ */ c.jsx(yu, { ...r, ...t, modal: !0 });
};
Ua.displayName = Ha;
var ju = "AlertDialogTrigger", Pu = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
    return /* @__PURE__ */ c.jsx(wu, { ...o, ...r, ref: n });
  }
);
Pu.displayName = ju;
var Au = "AlertDialogPortal", Ga = (e) => {
  const { __scopeAlertDialog: n, ...t } = e, r = Xe(n);
  return /* @__PURE__ */ c.jsx(Cu, { ...r, ...t });
};
Ga.displayName = Au;
var Mu = "AlertDialogOverlay", qa = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
    return /* @__PURE__ */ c.jsx(Su, { ...o, ...r, ref: n });
  }
);
qa.displayName = Mu;
var _t = "AlertDialogContent", [Ou, Tu] = Ru(_t), Du = /* @__PURE__ */ ed("AlertDialogContent"), Ya = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, children: r, ...o } = e, i = Xe(t), a = u.useRef(null), s = ue(n, a), l = u.useRef(null);
    return /* @__PURE__ */ c.jsx(
      hu,
      {
        contentName: _t,
        titleName: Ka,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ c.jsx(Ou, { scope: t, cancelRef: l, children: /* @__PURE__ */ c.jsxs(
          Eu,
          {
            role: "alertdialog",
            ...i,
            ...o,
            ref: s,
            onOpenAutoFocus: ne(o.onOpenAutoFocus, (d) => {
              d.preventDefault(), l.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (d) => d.preventDefault(),
            onInteractOutside: (d) => d.preventDefault(),
            children: [
              /* @__PURE__ */ c.jsx(Du, { children: r }),
              /* @__PURE__ */ c.jsx(Iu, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
Ya.displayName = _t;
var Ka = "AlertDialogTitle", Za = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
    return /* @__PURE__ */ c.jsx(ku, { ...o, ...r, ref: n });
  }
);
Za.displayName = Ka;
var Xa = "AlertDialogDescription", Ja = u.forwardRef((e, n) => {
  const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
  return /* @__PURE__ */ c.jsx(_u, { ...o, ...r, ref: n });
});
Ja.displayName = Xa;
var Nu = "AlertDialogAction", Qa = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, o = Xe(t);
    return /* @__PURE__ */ c.jsx(Ba, { ...o, ...r, ref: n });
  }
);
Qa.displayName = Nu;
var es = "AlertDialogCancel", ts = u.forwardRef(
  (e, n) => {
    const { __scopeAlertDialog: t, ...r } = e, { cancelRef: o } = Tu(es, t), i = Xe(t), a = ue(n, o);
    return /* @__PURE__ */ c.jsx(Ba, { ...i, ...r, ref: a });
  }
);
ts.displayName = es;
var Iu = ({ contentRef: e }) => {
  const n = `\`${_t}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${_t}\` by passing a \`${Xa}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${_t}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return u.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(n);
  }, [n, e]), null;
}, Lu = Ua, Fu = Ga, zu = qa, $u = Ya, B0 = Qa, H0 = ts, Wu = Za, fi = Ja, Vu = Symbol.for("react.lazy"), jn = u[" use ".trim().toString()];
function Bu(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function ns(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Vu && "_payload" in e && Bu(e._payload);
}
// @__NO_SIDE_EFFECTS__
function rs(e) {
  const n = /* @__PURE__ */ Hu(e), t = u.forwardRef((r, o) => {
    let { children: i, ...a } = r;
    ns(i) && typeof jn == "function" && (i = jn(i._payload));
    const s = u.Children.toArray(i), l = s.find(Gu);
    if (l) {
      const d = l.props.children, p = s.map((f) => f === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, p) : null });
    }
    return /* @__PURE__ */ c.jsx(n, { ...a, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
var Xn = /* @__PURE__ */ rs("Slot");
// @__NO_SIDE_EFFECTS__
function Hu(e) {
  const n = u.forwardRef((t, r) => {
    let { children: o, ...i } = t;
    if (ns(o) && typeof jn == "function" && (o = jn(o._payload)), u.isValidElement(o)) {
      const a = Yu(o), s = qu(i, o.props);
      return o.type !== u.Fragment && (s.ref = r ? en(r, a) : a), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Uu = Symbol("radix.slottable");
function Gu(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Uu;
}
function qu(e, n) {
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
function Yu(e) {
  let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Ku = [
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
], Zu = Ku.reduce((e, n) => {
  const t = /* @__PURE__ */ rs(`Primitive.${n}`), r = u.forwardRef((o, i) => {
    const { asChild: a, ...s } = o, l = a ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), Xu = Object.freeze({
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
}), Ju = "VisuallyHidden", os = u.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(
    Zu.span,
    {
      ...e,
      ref: n,
      style: { ...Xu, ...e.style }
    }
  )
);
os.displayName = Ju;
var Qu = os;
function is(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = is(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function as() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = is(e)) && (r && (r += " "), r += n);
  return r;
}
const ep = (e, n) => {
  const t = new Array(e.length + n.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e[r];
  for (let r = 0; r < n.length; r++)
    t[e.length + r] = n[r];
  return t;
}, tp = (e, n) => ({
  classGroupId: e,
  validator: n
}), ss = (e = /* @__PURE__ */ new Map(), n = null, t) => ({
  nextPart: e,
  validators: n,
  classGroupId: t
}), Pn = "-", mi = [], np = "arbitrary..", rp = (e) => {
  const n = ip(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return op(a);
      const s = a.split(Pn), l = s[0] === "" && s.length > 1 ? 1 : 0;
      return cs(s, l, n);
    },
    getConflictingClassGroupIds: (a, s) => {
      if (s) {
        const l = r[a], d = t[a];
        return l ? d ? ep(d, l) : l : d || mi;
      }
      return t[a] || mi;
    }
  };
}, cs = (e, n, t) => {
  if (e.length - n === 0)
    return t.classGroupId;
  const o = e[n], i = t.nextPart.get(o);
  if (i) {
    const d = cs(e, n + 1, i);
    if (d) return d;
  }
  const a = t.validators;
  if (a === null)
    return;
  const s = n === 0 ? e.join(Pn) : e.slice(n).join(Pn), l = a.length;
  for (let d = 0; d < l; d++) {
    const p = a[d];
    if (p.validator(s))
      return p.classGroupId;
  }
}, op = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const n = e.slice(1, -1), t = n.indexOf(":"), r = n.slice(0, t);
  return r ? np + r : void 0;
})(), ip = (e) => {
  const {
    theme: n,
    classGroups: t
  } = e;
  return ap(t, n);
}, ap = (e, n) => {
  const t = ss();
  for (const r in e) {
    const o = e[r];
    Eo(o, t, r, n);
  }
  return t;
}, Eo = (e, n, t, r) => {
  const o = e.length;
  for (let i = 0; i < o; i++) {
    const a = e[i];
    sp(a, n, t, r);
  }
}, sp = (e, n, t, r) => {
  if (typeof e == "string") {
    cp(e, n, t);
    return;
  }
  if (typeof e == "function") {
    lp(e, n, t, r);
    return;
  }
  dp(e, n, t, r);
}, cp = (e, n, t) => {
  const r = e === "" ? n : ls(n, e);
  r.classGroupId = t;
}, lp = (e, n, t, r) => {
  if (up(e)) {
    Eo(e(r), n, t, r);
    return;
  }
  n.validators === null && (n.validators = []), n.validators.push(tp(t, e));
}, dp = (e, n, t, r) => {
  const o = Object.entries(e), i = o.length;
  for (let a = 0; a < i; a++) {
    const [s, l] = o[a];
    Eo(l, ls(n, s), t, r);
  }
}, ls = (e, n) => {
  let t = e;
  const r = n.split(Pn), o = r.length;
  for (let i = 0; i < o; i++) {
    const a = r[i];
    let s = t.nextPart.get(a);
    s || (s = ss(), t.nextPart.set(a, s)), t = s;
  }
  return t;
}, up = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, pp = (e) => {
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
}, qr = "!", vi = ":", fp = [], hi = (e, n, t, r, o) => ({
  modifiers: e,
  hasImportantModifier: n,
  baseClassName: t,
  maybePostfixModifierPosition: r,
  isExternal: o
}), mp = (e) => {
  const {
    prefix: n,
    experimentalParseClassName: t
  } = e;
  let r = (o) => {
    const i = [];
    let a = 0, s = 0, l = 0, d;
    const p = o.length;
    for (let m = 0; m < p; m++) {
      const g = o[m];
      if (a === 0 && s === 0) {
        if (g === vi) {
          i.push(o.slice(l, m)), l = m + 1;
          continue;
        }
        if (g === "/") {
          d = m;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" ? a-- : g === "(" ? s++ : g === ")" && s--;
    }
    const f = i.length === 0 ? o : o.slice(l);
    let v = f, h = !1;
    f.endsWith(qr) ? (v = f.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(qr) && (v = f.slice(1), h = !0)
    );
    const b = d && d > l ? d - l : void 0;
    return hi(i, h, v, b);
  };
  if (n) {
    const o = n + vi, i = r;
    r = (a) => a.startsWith(o) ? i(a.slice(o.length)) : hi(fp, !1, a, void 0, !0);
  }
  if (t) {
    const o = r;
    r = (i) => t({
      className: i,
      parseClassName: o
    });
  }
  return r;
}, vp = (e) => {
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
}, hp = (e) => ({
  cache: pp(e.cacheSize),
  parseClassName: mp(e),
  sortModifiers: vp(e),
  ...rp(e)
}), gp = /\s+/, xp = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: i
  } = n, a = [], s = e.trim().split(gp);
  let l = "";
  for (let d = s.length - 1; d >= 0; d -= 1) {
    const p = s[d], {
      isExternal: f,
      modifiers: v,
      hasImportantModifier: h,
      baseClassName: b,
      maybePostfixModifierPosition: m
    } = t(p);
    if (f) {
      l = p + (l.length > 0 ? " " + l : l);
      continue;
    }
    let g = !!m, y = r(g ? b.substring(0, m) : b);
    if (!y) {
      if (!g) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (y = r(b), !y) {
        l = p + (l.length > 0 ? " " + l : l);
        continue;
      }
      g = !1;
    }
    const C = v.length === 0 ? "" : v.length === 1 ? v[0] : i(v).join(":"), S = h ? C + qr : C, E = S + y;
    if (a.indexOf(E) > -1)
      continue;
    a.push(E);
    const w = o(y, g);
    for (let N = 0; N < w.length; ++N) {
      const A = w[N];
      a.push(S + A);
    }
    l = p + (l.length > 0 ? " " + l : l);
  }
  return l;
}, bp = (...e) => {
  let n = 0, t, r, o = "";
  for (; n < e.length; )
    (t = e[n++]) && (r = ds(t)) && (o && (o += " "), o += r);
  return o;
}, ds = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = ds(e[r])) && (t && (t += " "), t += n);
  return t;
}, yp = (e, ...n) => {
  let t, r, o, i;
  const a = (l) => {
    const d = n.reduce((p, f) => f(p), e());
    return t = hp(d), r = t.cache.get, o = t.cache.set, i = s, s(l);
  }, s = (l) => {
    const d = r(l);
    if (d)
      return d;
    const p = xp(l, t);
    return o(l, p), p;
  };
  return i = a, (...l) => i(bp(...l));
}, wp = [], we = (e) => {
  const n = (t) => t[e] || wp;
  return n.isThemeGetter = !0, n;
}, us = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ps = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Cp = /^\d+\/\d+$/, Sp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ep = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, kp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, _p = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Rp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Et = (e) => Cp.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), tt = (e) => !!e && Number.isInteger(Number(e)), Sr = (e) => e.endsWith("%") && ae(e.slice(0, -1)), qe = (e) => Sp.test(e), jp = () => !0, Pp = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ep.test(e) && !kp.test(e)
), fs = () => !1, Ap = (e) => _p.test(e), Mp = (e) => Rp.test(e), Op = (e) => !Y(e) && !K(e), Tp = (e) => Ot(e, hs, fs), Y = (e) => us.test(e), dt = (e) => Ot(e, gs, Pp), Er = (e) => Ot(e, Fp, ae), gi = (e) => Ot(e, ms, fs), Dp = (e) => Ot(e, vs, Mp), mn = (e) => Ot(e, xs, Ap), K = (e) => ps.test(e), Vt = (e) => Tt(e, gs), Np = (e) => Tt(e, zp), xi = (e) => Tt(e, ms), Ip = (e) => Tt(e, hs), Lp = (e) => Tt(e, vs), vn = (e) => Tt(e, xs, !0), Ot = (e, n, t) => {
  const r = us.exec(e);
  return r ? r[1] ? n(r[1]) : t(r[2]) : !1;
}, Tt = (e, n, t = !1) => {
  const r = ps.exec(e);
  return r ? r[1] ? n(r[1]) : t : !1;
}, ms = (e) => e === "position" || e === "percentage", vs = (e) => e === "image" || e === "url", hs = (e) => e === "length" || e === "size" || e === "bg-size", gs = (e) => e === "length", Fp = (e) => e === "number", zp = (e) => e === "family-name", xs = (e) => e === "shadow", $p = () => {
  const e = we("color"), n = we("font"), t = we("text"), r = we("font-weight"), o = we("tracking"), i = we("leading"), a = we("breakpoint"), s = we("container"), l = we("spacing"), d = we("radius"), p = we("shadow"), f = we("inset-shadow"), v = we("text-shadow"), h = we("drop-shadow"), b = we("blur"), m = we("perspective"), g = we("aspect"), y = we("ease"), C = we("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], w = () => [...E(), K, Y], N = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], j = () => [K, Y, l], I = () => [Et, "full", "auto", ...j()], B = () => [tt, "none", "subgrid", K, Y], X = () => ["auto", {
    span: ["full", tt, K, Y]
  }, tt, K, Y], q = () => [tt, "auto", K, Y], U = () => ["auto", "min", "max", "fr", K, Y], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], J = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...j()], Q = () => [Et, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()], R = () => [e, K, Y], T = () => [...E(), xi, gi, {
    position: [K, Y]
  }], _ = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], x = () => ["auto", "cover", "contain", Ip, Tp, {
    size: [K, Y]
  }], P = () => [Sr, Vt, dt], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    K,
    Y
  ], O = () => ["", ae, Vt, dt], G = () => ["solid", "dashed", "dotted", "double"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => [ae, Sr, xi, gi], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    K,
    Y
  ], Z = () => ["none", ae, K, Y], F = () => ["none", ae, K, Y], re = () => [ae, K, Y], M = () => [Et, "full", ...j()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [qe],
      breakpoint: [qe],
      color: [jp],
      container: [qe],
      "drop-shadow": [qe],
      ease: ["in", "out", "in-out"],
      font: [Op],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [qe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [qe],
      shadow: [qe],
      spacing: ["px", ae],
      text: [qe],
      "text-shadow": [qe],
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
        aspect: ["auto", "square", Et, Y, K, g]
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
        basis: [Et, "full", "auto", s, ...j()]
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
        flex: [ae, Et, "auto", "initial", "none", Y]
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
        "grid-cols": B()
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
        "grid-rows": B()
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
        "justify-items": [...J(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...J()]
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
        items: [...J(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...J(), {
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
        "place-items": [...J(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...J()]
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
            screen: [a]
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
        font: [r, K, Er]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Sr, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Np, Y, n]
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
        "line-clamp": [ae, "none", K, Er]
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
        bg: T()
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
        bg: x()
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
        }, Lp, Dp]
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
        from: P()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: P()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: P()
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
          vn,
          mn
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
        "inset-shadow": ["none", f, vn, mn]
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
        "text-shadow": ["none", v, vn, mn]
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
        mask: T()
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
        mask: x()
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
        blur: V()
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
          vn,
          mn
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
        "backdrop-blur": V()
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
        stroke: [ae, Vt, dt, Er]
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
}, Wp = /* @__PURE__ */ yp($p);
function L(...e) {
  return Wp(as(e));
}
function U0({
  open: e,
  onOpenChange: n,
  header: t,
  content: r,
  actions: o,
  className: i
}) {
  return /* @__PURE__ */ c.jsx(Lu, { open: e, onOpenChange: n, children: /* @__PURE__ */ c.jsxs(Fu, { children: [
    /* @__PURE__ */ c.jsx(zu, { className: "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
    /* @__PURE__ */ c.jsxs(
      $u,
      {
        className: L(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
          i
        ),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col space-y-2", children: [
            /* @__PURE__ */ c.jsx(Wu, { className: "text-lg font-semibold text-gray-900", children: t }),
            typeof r == "string" ? /* @__PURE__ */ c.jsx(fi, { className: "text-sm text-gray-600", children: r }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsx(fi, { asChild: !0, children: /* @__PURE__ */ c.jsx(Qu, { children: /* @__PURE__ */ c.jsx("span", { children: "Confirmation dialog content" }) }) }),
              /* @__PURE__ */ c.jsx("div", { className: "text-sm text-gray-600", children: r })
            ] })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0", children: o })
        ]
      }
    )
  ] }) });
}
const bi = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, yi = as, Jn = (e, n) => (t) => {
  var r;
  if (n?.variants == null) return yi(e, t?.class, t?.className);
  const { variants: o, defaultVariants: i } = n, a = Object.keys(o).map((d) => {
    const p = t?.[d], f = i?.[d];
    if (p === null) return null;
    const v = bi(p) || bi(f);
    return o[d][v];
  }), s = t && Object.entries(t).reduce((d, p) => {
    let [f, v] = p;
    return v === void 0 || (d[f] = v), d;
  }, {}), l = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, p) => {
    let { class: f, className: v, ...h } = p;
    return Object.entries(h).every((b) => {
      let [m, g] = b;
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
  return yi(e, a, l, t?.class, t?.className);
}, Vp = Jn(
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
function G0({
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
      className: L(Vp({ variant: n, size: t, className: e })),
      ...r
    }
  );
}
const Bp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Hp = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, t, r) => r ? r.toUpperCase() : t.toLowerCase()
), wi = (e) => {
  const n = Hp(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, bs = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim(), Up = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
var Gp = {
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
const qp = Bn(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, l) => Vr(
    "svg",
    {
      ref: l,
      ...Gp,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: bs("lucide", o),
      ...!i && !Up(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...a.map(([d, p]) => Vr(d, p)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const Fe = (e, n) => {
  const t = Bn(
    ({ className: r, ...o }, i) => Vr(qp, {
      ref: i,
      iconNode: n,
      className: bs(
        `lucide-${Bp(wi(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return t.displayName = wi(e), t;
};
const Yp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ko = Fe("check", Yp);
const Kp = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ys = Fe("chevron-down", Kp);
const Zp = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], ws = Fe("chevron-right", Zp);
const Xp = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Jp = Fe("chevron-left", Xp);
const Qp = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], ef = Fe("chevron-up", Qp);
const tf = [
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
], nf = Fe("eye-off", tf);
const rf = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], of = Fe("eye", rf);
const af = [["path", { d: "M5 12h14", key: "1ays0h" }]], sf = Fe("minus", af);
const cf = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], lf = Fe("trash-2", cf);
const df = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Cs = Fe("upload", df);
const uf = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], _o = Fe("x", uf);
function q0({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      "data-slot": "breadcrumb",
      className: L("w-full", e),
      ...n
    }
  );
}
function Y0({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: L("flex items-center justify-start gap-2", e),
      ...n
    }
  );
}
function K0({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: L("flex justify-start items-center gap-x-1", e),
      ...n
    }
  );
}
function Z0({
  asChild: e,
  className: n,
  ...t
}) {
  const r = e ? Xn : "a";
  return /* @__PURE__ */ c.jsx(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: L(
        "flex w-fit font-sans text-sm font-normal leading-4.5 text-gray-200 hover:text-gray-600 hover:underline transition-all",
        n
      ),
      ...t
    }
  );
}
function X0({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      "aria-current": "page",
      className: L(
        "font-sans text-sm font-semibold text-blue-hepatica-600 leading-4",
        e
      ),
      ...n
    }
  );
}
function J0() {
  return /* @__PURE__ */ c.jsx(
    ws,
    {
      "data-slot": "breadcrumb-separator",
      "aria-hidden": "true",
      className: "size-4 text-gray-300 shrink-0"
    }
  );
}
const pf = Jn(
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
function Ro({
  className: e,
  variant: n,
  size: t,
  asChild: r = !1,
  ...o
}) {
  const i = r ? Xn : "button";
  return /* @__PURE__ */ c.jsx(
    i,
    {
      "data-slot": "button",
      className: L(pf({ variant: n, size: t, className: e })),
      ...o
    }
  );
}
function Q0({
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
      className: L(
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
            children: /* @__PURE__ */ c.jsx(
              ko,
              {
                className: L("size-3 text-transparent", {
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
function eb({ ...e }) {
  return /* @__PURE__ */ c.jsx(mo, { "data-slot": "dialog", ...e });
}
function tb({ ...e }) {
  return /* @__PURE__ */ c.jsx(vo, { "data-slot": "dialog-trigger", ...e });
}
function ff({ ...e }) {
  return /* @__PURE__ */ c.jsx(go, { "data-slot": "dialog-portal", ...e });
}
function nb({ ...e }) {
  return /* @__PURE__ */ c.jsx(tn, { "data-slot": "dialog-close", ...e });
}
function mf({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    xo,
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
function rb({
  className: e,
  children: n,
  showCloseButton: t = !0,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(ff, { children: [
    /* @__PURE__ */ c.jsx(mf, {}),
    /* @__PURE__ */ c.jsxs(
      bo,
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
          t && /* @__PURE__ */ c.jsx(tn, { "data-slot": "dialog-close", asChild: !0, children: /* @__PURE__ */ c.jsxs(
            Ro,
            {
              variant: "gray-ghost",
              className: "absolute top-6 right-8 size-10 flex items-center justify-center",
              size: "sm",
              children: [
                /* @__PURE__ */ c.jsx(_o, {}),
                /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function ob({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
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
function ib({
  className: e,
  showCloseButton: n = !1,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: L("px-8 pb-8 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...r,
      children: [
        t,
        n && /* @__PURE__ */ c.jsx(tn, { asChild: !0, children: /* @__PURE__ */ c.jsx(Ro, { variant: "gray-outline", size: "sm", children: "Close" }) })
      ]
    }
  );
}
function ab({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    wo,
    {
      "data-slot": "dialog-title",
      className: L("font-manrope text-base leading-5 font-semibold text-gray-900", e),
      ...n
    }
  );
}
function sb({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    Co,
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
var vf = (e) => e.type === "checkbox", Ut = (e) => e instanceof Date, jo = (e) => e == null;
const Ss = (e) => typeof e == "object";
var ft = (e) => !jo(e) && !Array.isArray(e) && Ss(e) && !Ut(e), hf = (e) => ft(e) && e.target ? vf(e.target) ? e.target.checked : e.target.value : e, gf = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, xf = (e, n) => e.has(gf(n)), bf = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return ft(n) && n.hasOwnProperty("isPrototypeOf");
}, yf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Es(e) {
  let n;
  const t = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    n = new Date(e);
  else if (!(yf && (e instanceof Blob || r)) && (t || ft(e)))
    if (n = t ? [] : Object.create(Object.getPrototypeOf(e)), !t && !bf(e))
      n = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (n[o] = Es(e[o]));
  else
    return e;
  return n;
}
var ks = (e) => /^\w*$/.test(e), Yr = (e) => e === void 0, wf = (e) => Array.isArray(e) ? e.filter(Boolean) : [], _s = (e) => wf(e.replace(/["|']|\]/g, "").split(/\.|\[/)), je = (e, n, t) => {
  if (!n || !ft(e))
    return t;
  const r = (ks(n) ? [n] : _s(n)).reduce((o, i) => jo(o) ? o : o[i], e);
  return Yr(r) || r === e ? Yr(e[n]) ? t : e[n] : r;
}, kr = (e) => typeof e == "boolean", Ci = (e, n, t) => {
  let r = -1;
  const o = ks(n) ? [n] : _s(n), i = o.length, a = i - 1;
  for (; ++r < i; ) {
    const s = o[r];
    let l = t;
    if (r !== a) {
      const d = e[s];
      l = ft(d) || Array.isArray(d) ? d : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = l, e = e[s];
  }
};
const Si = {
  BLUR: "blur",
  CHANGE: "change"
}, Ei = {
  all: "all"
}, Po = ie.createContext(null);
Po.displayName = "HookFormContext";
const Qn = () => ie.useContext(Po), Cf = (e) => {
  const { children: n, ...t } = e;
  return ie.createElement(Po.Provider, { value: t }, n);
};
var Sf = (e, n, t, r = !0) => {
  const o = {
    defaultValues: n._defaultValues
  };
  for (const i in e)
    Object.defineProperty(o, i, {
      get: () => {
        const a = i;
        return n._proxyFormState[a] !== Ei.all && (n._proxyFormState[a] = !r || Ei.all), t && (t[a] = !0), e[a];
      }
    });
  return o;
};
const Rs = typeof window < "u" ? ie.useLayoutEffect : ie.useEffect;
function js(e) {
  const n = Qn(), { control: t = n.control, disabled: r, name: o, exact: i } = e || {}, [a, s] = ie.useState(t._formState), l = ie.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Rs(() => t._subscribe({
    name: o,
    formState: l.current,
    exact: i,
    callback: (d) => {
      !r && s({
        ...t._formState,
        ...d
      });
    }
  }), [o, r, i]), ie.useEffect(() => {
    l.current.isValid && t._setValid(!0);
  }, [t]), ie.useMemo(() => Sf(a, t, l.current, !1), [a, t]);
}
var Ef = (e) => typeof e == "string", ki = (e, n, t, r, o) => Ef(e) ? je(t, e, o) : Array.isArray(e) ? e.map((i) => je(t, i)) : t, _i = (e) => jo(e) || !Ss(e);
function kn(e, n, t = /* @__PURE__ */ new WeakSet()) {
  if (_i(e) || _i(n))
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
      if (Ut(a) && Ut(s) || ft(a) && ft(s) || Array.isArray(a) && Array.isArray(s) ? !kn(a, s, t) : !Object.is(a, s))
        return !1;
    }
  }
  return !0;
}
function kf(e) {
  const n = Qn(), { control: t = n.control, name: r, defaultValue: o, disabled: i, exact: a, compute: s } = e || {}, l = ie.useRef(o), d = ie.useRef(s), p = ie.useRef(void 0), f = ie.useRef(t), v = ie.useRef(r);
  d.current = s;
  const [h, b] = ie.useState(() => {
    const E = t._getWatch(r, l.current);
    return d.current ? d.current(E) : E;
  }), m = ie.useCallback((E) => {
    const w = ki(r, t._names, E || t._formValues, !1, l.current);
    return d.current ? d.current(w) : w;
  }, [t._formValues, t._names, r]), g = ie.useCallback((E) => {
    if (!i) {
      const w = ki(r, t._names, E || t._formValues, !1, l.current);
      if (d.current) {
        const N = d.current(w);
        kn(N, p.current) || (b(N), p.current = N);
      } else
        b(w);
    }
  }, [t._formValues, t._names, i, r]);
  Rs(() => ((f.current !== t || !kn(v.current, r)) && (f.current = t, v.current = r, g()), t._subscribe({
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
    const E = !y && !kn(C, r);
    return y || E ? m() : null;
  }, [i, y, r, C, m]);
  return S !== null ? S : h;
}
function _f(e) {
  const n = Qn(), { name: t, disabled: r, control: o = n.control, shouldUnregister: i, defaultValue: a, exact: s = !0 } = e, l = xf(o._names.array, t), d = ie.useMemo(() => je(o._formValues, t, je(o._defaultValues, t, a)), [o, t, a]), p = kf({
    control: o,
    name: t,
    defaultValue: d,
    exact: s
  }), f = js({
    control: o,
    name: t,
    exact: s
  }), v = ie.useRef(e), h = ie.useRef(void 0), b = ie.useRef(o.register(t, {
    ...e.rules,
    value: p,
    ...kr(e.disabled) ? { disabled: e.disabled } : {}
  }));
  v.current = e;
  const m = ie.useMemo(() => Object.defineProperties({}, {
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
  }), [f, t]), g = ie.useCallback((E) => b.current.onChange({
    target: {
      value: hf(E),
      name: t
    },
    type: Si.CHANGE
  }), [t]), y = ie.useCallback(() => b.current.onBlur({
    target: {
      value: je(o._formValues, t),
      name: t
    },
    type: Si.BLUR
  }), [t, o._formValues]), C = ie.useCallback((E) => {
    const w = je(o._fields, t);
    w && E && (w._f.ref = {
      focus: () => E.focus && E.focus(),
      select: () => E.select && E.select(),
      setCustomValidity: (N) => E.setCustomValidity(N),
      reportValidity: () => E.reportValidity()
    });
  }, [o._fields, t]), S = ie.useMemo(() => ({
    name: t,
    value: p,
    ...kr(r) || f.disabled ? { disabled: f.disabled || r } : {},
    onChange: g,
    onBlur: y,
    ref: C
  }), [t, r, f.disabled, g, y, C, p]);
  return ie.useEffect(() => {
    const E = o._options.shouldUnregister || i, w = h.current;
    w && w !== t && !l && o.unregister(w), o.register(t, {
      ...v.current.rules,
      ...kr(v.current.disabled) ? { disabled: v.current.disabled } : {}
    });
    const N = (A, j) => {
      const I = je(o._fields, A);
      I && I._f && (I._f.mount = j);
    };
    if (N(t, !0), E) {
      const A = Es(je(o._options.defaultValues, t, v.current.defaultValue));
      Ci(o._defaultValues, t, A), Yr(je(o._formValues, t)) && Ci(o._formValues, t, A);
    }
    return !l && o.register(t), h.current = t, () => {
      (l ? E && !o._state.action : E) ? o.unregister(t) : N(t, !1);
    };
  }, [t, o, l, i]), ie.useEffect(() => {
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
const Rf = (e) => e.render(_f(e)), Ps = Bn(
  ({ className: e, children: n, required: t, ...r }, o) => /* @__PURE__ */ c.jsxs(
    "label",
    {
      ref: o,
      "data-slot": "label",
      className: L("font-sans font-medium text-sm text-gray-700", e),
      ...r,
      children: [
        /* @__PURE__ */ c.jsx("span", { children: n }),
        t ? /* @__PURE__ */ c.jsx("span", { className: "text-base font-normal text-bright-red-600 ml-1 leading-[22px]", children: "*" }) : null
      ]
    }
  )
);
Ps.displayName = "Label";
const cb = Cf, As = ya({}), lb = ({
  ...e
}) => /* @__PURE__ */ c.jsx(As.Provider, { value: { name: e.name }, children: /* @__PURE__ */ c.jsx(Rf, { ...e }) }), er = () => {
  const e = Br(As), n = Br(Ms), { getFieldState: t } = Qn(), r = js({ name: e.name }), o = t(e.name, r);
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
}, Ms = ya({});
function db({ className: e, ...n }) {
  const t = Ll();
  return /* @__PURE__ */ c.jsx(Ms.Provider, { value: { id: t }, children: /* @__PURE__ */ c.jsx("div", { "data-slot": "form-item", className: L("grid gap-2", e), ...n }) });
}
function ub({ className: e, ...n }) {
  const { error: t, formItemId: r } = er();
  return /* @__PURE__ */ c.jsx(
    Ps,
    {
      "data-slot": "form-label",
      "data-error": !!t,
      className: e,
      htmlFor: r,
      ...n
    }
  );
}
function pb({ ...e }) {
  const { error: n, formItemId: t, formDescriptionId: r, formMessageId: o } = er();
  return /* @__PURE__ */ c.jsx(
    Xn,
    {
      "data-slot": "form-control",
      id: t,
      "aria-describedby": n ? `${r} ${o}` : `${r}`,
      "aria-invalid": !!n,
      ...e
    }
  );
}
function fb({ className: e, ...n }) {
  const { formDescriptionId: t } = er();
  return /* @__PURE__ */ c.jsx(
    "p",
    {
      "data-slot": "form-description",
      id: t,
      className: L("text-muted-foreground text-sm", e),
      ...n
    }
  );
}
function mb({ className: e, ...n }) {
  const { error: t, formMessageId: r } = er(), o = t ? String(t?.message ?? "") : n.children;
  return o ? /* @__PURE__ */ c.jsx(
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
function Se(e, n = {}) {
  const t = typeof e == "number" ? `${e}` : e ?? "24", r = typeof n["aria-label"] == "string";
  return {
    width: t,
    height: t,
    role: r ? "img" : "presentation",
    "aria-hidden": r ? void 0 : !0,
    ...n
  };
}
function jf({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: L("inline-block", n), ...r, children: [
    /* @__PURE__ */ c.jsx("circle", { cx: "12.6457", cy: "4.35422", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "10.0876", cy: "9.80881", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "3.35422", cy: "11.0876", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("circle", { cx: "5.46091", cy: "5.63328", r: "1.35422", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("path", { d: "M5.19745 6.83691L3.91846 10.0344", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("path", { d: "M12.232 5.55786L10.3135 8.75533", stroke: "currentColor" }),
    /* @__PURE__ */ c.jsx("path", { d: "M6.47645 6.83691L9.03442 8.7554", stroke: "currentColor" })
  ] });
}
function Pf({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", className: L("inline-block", n), ...r, children: [
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
function Af({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function Mf({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function Of({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: L("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M10.6517 3.73292C10.3353 3.1997 9.64138 3.1997 9.32503 3.73292L6.86562 7.83985C6.68193 8.13482 6.36558 8.29365 6.04922 8.21424L2.62035 7.46546C2.03866 7.34067 1.54882 7.93061 1.69169 8.56594L3.3449 15.6112C3.43675 15.9856 3.72249 16.2466 4.06946 16.2693C4.06946 16.2693 5.34508 16.6663 9.99856 16.6663C14.652 16.6663 15.9277 16.2693 15.9277 16.2693C16.1828 16.2012 16.5604 15.9743 16.6522 15.6112L18.3054 8.56594C18.4585 7.93061 17.9584 7.34067 17.3768 7.46546L13.9479 8.21424C13.6315 8.28231 13.305 8.13482 13.1315 7.83985L10.6517 3.73292Z",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeMiterlimit: "10"
    }
  ) });
}
function Tf({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function Df({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function Nf({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function If({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsxs("svg", { viewBox: "0 0 16 16", fill: "none", className: L("inline-block", n), ...r, children: [
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
function Lf({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: L("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM7.50001 5.41667C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H7.50001V5.41667ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function Ff({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 20 20", fill: "none", className: L("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M15 7.08333H14.1667V5.41667C14.1667 3.11667 12.3 1.25 10 1.25C7.70001 1.25 5.83334 3.11667 5.83334 5.41667H7.50001C7.50001 4.03333 8.61668 2.91667 10 2.91667C11.3833 2.91667 12.5 4.03333 12.5 5.41667V7.08333H5.00001C4.08334 7.08333 3.33334 7.83333 3.33334 8.75V17.0833C3.33334 18 4.08334 18.75 5.00001 18.75H15C15.9167 18.75 16.6667 18 16.6667 17.0833V8.75C16.6667 7.83333 15.9167 7.08333 15 7.08333ZM15 17.0833H5.00001V8.75H15V17.0833ZM10 14.5833C10.9167 14.5833 11.6667 13.8333 11.6667 12.9167C11.6667 12 10.9167 11.25 10 11.25C9.08334 11.25 8.33334 12 8.33334 12.9167C8.33334 13.8333 9.08334 14.5833 10 14.5833Z",
      fill: "currentColor"
    }
  ) });
}
function zf({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function $f({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function Wf({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function Vf({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function Bf({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      className: L("inline-block", n),
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
function Hf({ size: e, className: n, ...t }) {
  const r = Se(e, t);
  return /* @__PURE__ */ c.jsx("svg", { viewBox: "0 0 48 48", fill: "none", className: L("inline-block", n), ...r, children: /* @__PURE__ */ c.jsx(
    "path",
    {
      d: "M30 16V32H10V16H30ZM32 12H8C6.9 12 6 12.9 6 14V34C6 35.1 6.9 36 8 36H32C33.1 36 34 35.1 34 34V27L42 35V13L34 21V14C34 12.9 33.1 12 32 12Z",
      fill: "currentColor"
    }
  ) });
}
const Uf = {
  analytics: jf,
  announcement: Pf,
  church: Af,
  class: Mf,
  crown: Of,
  event: Tf,
  gift: Df,
  home: Nf,
  list: If,
  "lock-closed": Lf,
  "lock-open": Ff,
  ministry: zf,
  podcast: $f,
  series: Wf,
  sermon: Vf,
  subscription: Bf,
  video: Hf
};
function vb({ name: e, ...n }) {
  const t = Uf[e];
  return /* @__PURE__ */ c.jsx(t, { ...n });
}
var hn = { exports: {} }, gn = { exports: {} }, ce = {};
var Ri;
function Gf() {
  if (Ri) return ce;
  Ri = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function S(w) {
    if (typeof w == "object" && w !== null) {
      var N = w.$$typeof;
      switch (N) {
        case n:
          switch (w = w.type, w) {
            case l:
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
                case b:
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
  return ce.AsyncMode = l, ce.ConcurrentMode = d, ce.ContextConsumer = s, ce.ContextProvider = a, ce.Element = n, ce.ForwardRef = p, ce.Fragment = r, ce.Lazy = b, ce.Memo = h, ce.Portal = t, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = f, ce.isAsyncMode = function(w) {
    return E(w) || S(w) === l;
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
    return S(w) === b;
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
    return typeof w == "string" || typeof w == "function" || w === r || w === d || w === i || w === o || w === f || w === v || typeof w == "object" && w !== null && (w.$$typeof === b || w.$$typeof === h || w.$$typeof === a || w.$$typeof === s || w.$$typeof === p || w.$$typeof === g || w.$$typeof === y || w.$$typeof === C || w.$$typeof === m);
  }, ce.typeOf = S, ce;
}
var le = {};
var ji;
function qf() {
  return ji || (ji = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function S(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === d || M === i || M === o || M === f || M === v || typeof M == "object" && M !== null && (M.$$typeof === b || M.$$typeof === h || M.$$typeof === a || M.$$typeof === s || M.$$typeof === p || M.$$typeof === g || M.$$typeof === y || M.$$typeof === C || M.$$typeof === m);
    }
    function E(M) {
      if (typeof M == "object" && M !== null) {
        var pe = M.$$typeof;
        switch (pe) {
          case n:
            var ee = M.type;
            switch (ee) {
              case l:
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
                  case b:
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
    var w = l, N = d, A = s, j = a, I = n, B = p, X = r, q = b, U = h, H = t, J = i, $ = o, Q = f, R = !1;
    function T(M) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(M) || E(M) === l;
    }
    function _(M) {
      return E(M) === d;
    }
    function x(M) {
      return E(M) === s;
    }
    function P(M) {
      return E(M) === a;
    }
    function D(M) {
      return typeof M == "object" && M !== null && M.$$typeof === n;
    }
    function O(M) {
      return E(M) === p;
    }
    function G(M) {
      return E(M) === r;
    }
    function W(M) {
      return E(M) === b;
    }
    function k(M) {
      return E(M) === h;
    }
    function V(M) {
      return E(M) === t;
    }
    function Z(M) {
      return E(M) === i;
    }
    function F(M) {
      return E(M) === o;
    }
    function re(M) {
      return E(M) === f;
    }
    le.AsyncMode = w, le.ConcurrentMode = N, le.ContextConsumer = A, le.ContextProvider = j, le.Element = I, le.ForwardRef = B, le.Fragment = X, le.Lazy = q, le.Memo = U, le.Portal = H, le.Profiler = J, le.StrictMode = $, le.Suspense = Q, le.isAsyncMode = T, le.isConcurrentMode = _, le.isContextConsumer = x, le.isContextProvider = P, le.isElement = D, le.isForwardRef = O, le.isFragment = G, le.isLazy = W, le.isMemo = k, le.isPortal = V, le.isProfiler = Z, le.isStrictMode = F, le.isSuspense = re, le.isValidElementType = S, le.typeOf = E;
  })()), le;
}
var Pi;
function Os() {
  return Pi || (Pi = 1, process.env.NODE_ENV === "production" ? gn.exports = Gf() : gn.exports = qf()), gn.exports;
}
var _r, Ai;
function Yf() {
  if (Ai) return _r;
  Ai = 1;
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
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return _r = o() ? Object.assign : function(i, a) {
    for (var s, l = r(i), d, p = 1; p < arguments.length; p++) {
      s = Object(arguments[p]);
      for (var f in s)
        n.call(s, f) && (l[f] = s[f]);
      if (e) {
        d = e(s);
        for (var v = 0; v < d.length; v++)
          t.call(s, d[v]) && (l[d[v]] = s[d[v]]);
      }
    }
    return l;
  }, _r;
}
var Rr, Mi;
function Ao() {
  if (Mi) return Rr;
  Mi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Rr = e, Rr;
}
var jr, Oi;
function Ts() {
  return Oi || (Oi = 1, jr = Function.call.bind(Object.prototype.hasOwnProperty)), jr;
}
var Pr, Ti;
function Kf() {
  if (Ti) return Pr;
  Ti = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ Ao(), t = {}, r = /* @__PURE__ */ Ts();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, l, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (r(i, p)) {
          var f;
          try {
            if (typeof i[p] != "function") {
              var v = Error(
                (l || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            f = i[p](a, p, l, s, null, n);
          } catch (b) {
            f = b;
          }
          if (f && !(f instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
  }, Pr = o, Pr;
}
var Ar, Di;
function Zf() {
  if (Di) return Ar;
  Di = 1;
  var e = Os(), n = Yf(), t = /* @__PURE__ */ Ao(), r = /* @__PURE__ */ Ts(), o = /* @__PURE__ */ Kf(), i = function() {
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
  return Ar = function(s, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function f(_) {
      var x = _ && (d && _[d] || _[p]);
      if (typeof x == "function")
        return x;
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
      node: B(),
      objectOf: j,
      oneOf: A,
      oneOfType: I,
      shape: q,
      exact: U
    };
    function b(_, x) {
      return _ === x ? _ !== 0 || 1 / _ === 1 / x : _ !== _ && x !== x;
    }
    function m(_, x) {
      this.message = _, this.data = x && typeof x == "object" ? x : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function g(_) {
      if (process.env.NODE_ENV !== "production")
        var x = {}, P = 0;
      function D(G, W, k, V, Z, F, re) {
        if (V = V || v, F = F || k, re !== t) {
          if (l) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = V + ":" + k;
            !x[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            P < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), x[pe] = !0, P++);
          }
        }
        return W[k] == null ? G ? W[k] === null ? new m("The " + Z + " `" + F + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new m("The " + Z + " `" + F + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : _(W, k, V, Z, F);
      }
      var O = D.bind(null, !1);
      return O.isRequired = D.bind(null, !0), O;
    }
    function y(_) {
      function x(P, D, O, G, W, k) {
        var V = P[D], Z = $(V);
        if (Z !== _) {
          var F = Q(V);
          return new m(
            "Invalid " + G + " `" + W + "` of type " + ("`" + F + "` supplied to `" + O + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return g(x);
    }
    function C() {
      return g(a);
    }
    function S(_) {
      function x(P, D, O, G, W) {
        if (typeof _ != "function")
          return new m("Property `" + W + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var k = P[D];
        if (!Array.isArray(k)) {
          var V = $(k);
          return new m("Invalid " + G + " `" + W + "` of type " + ("`" + V + "` supplied to `" + O + "`, expected an array."));
        }
        for (var Z = 0; Z < k.length; Z++) {
          var F = _(k, Z, O, G, W + "[" + Z + "]", t);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return g(x);
    }
    function E() {
      function _(x, P, D, O, G) {
        var W = x[P];
        if (!s(W)) {
          var k = $(W);
          return new m("Invalid " + O + " `" + G + "` of type " + ("`" + k + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(_);
    }
    function w() {
      function _(x, P, D, O, G) {
        var W = x[P];
        if (!e.isValidElementType(W)) {
          var k = $(W);
          return new m("Invalid " + O + " `" + G + "` of type " + ("`" + k + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(_);
    }
    function N(_) {
      function x(P, D, O, G, W) {
        if (!(P[D] instanceof _)) {
          var k = _.name || v, V = T(P[D]);
          return new m("Invalid " + G + " `" + W + "` of type " + ("`" + V + "` supplied to `" + O + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return g(x);
    }
    function A(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function x(P, D, O, G, W) {
        for (var k = P[D], V = 0; V < _.length; V++)
          if (b(k, _[V]))
            return null;
        var Z = JSON.stringify(_, function(re, M) {
          var pe = Q(M);
          return pe === "symbol" ? String(M) : M;
        });
        return new m("Invalid " + G + " `" + W + "` of value `" + String(k) + "` " + ("supplied to `" + O + "`, expected one of " + Z + "."));
      }
      return g(x);
    }
    function j(_) {
      function x(P, D, O, G, W) {
        if (typeof _ != "function")
          return new m("Property `" + W + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var k = P[D], V = $(k);
        if (V !== "object")
          return new m("Invalid " + G + " `" + W + "` of type " + ("`" + V + "` supplied to `" + O + "`, expected an object."));
        for (var Z in k)
          if (r(k, Z)) {
            var F = _(k, Z, O, G, W + "." + Z, t);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return g(x);
    }
    function I(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var x = 0; x < _.length; x++) {
        var P = _[x];
        if (typeof P != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + R(P) + " at index " + x + "."
          ), a;
      }
      function D(O, G, W, k, V) {
        for (var Z = [], F = 0; F < _.length; F++) {
          var re = _[F], M = re(O, G, W, k, V, t);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && Z.push(M.data.expectedType);
        }
        var pe = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new m("Invalid " + k + " `" + V + "` supplied to " + ("`" + W + "`" + pe + "."));
      }
      return g(D);
    }
    function B() {
      function _(x, P, D, O, G) {
        return H(x[P]) ? null : new m("Invalid " + O + " `" + G + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return g(_);
    }
    function X(_, x, P, D, O) {
      return new m(
        (_ || "React class") + ": " + x + " type `" + P + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function q(_) {
      function x(P, D, O, G, W) {
        var k = P[D], V = $(k);
        if (V !== "object")
          return new m("Invalid " + G + " `" + W + "` of type `" + V + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var Z in _) {
          var F = _[Z];
          if (typeof F != "function")
            return X(O, G, W, Z, Q(F));
          var re = F(k, Z, O, G, W + "." + Z, t);
          if (re)
            return re;
        }
        return null;
      }
      return g(x);
    }
    function U(_) {
      function x(P, D, O, G, W) {
        var k = P[D], V = $(k);
        if (V !== "object")
          return new m("Invalid " + G + " `" + W + "` of type `" + V + "` " + ("supplied to `" + O + "`, expected `object`."));
        var Z = n({}, P[D], _);
        for (var F in Z) {
          var re = _[F];
          if (r(_, F) && typeof re != "function")
            return X(O, G, W, F, Q(re));
          if (!re)
            return new m(
              "Invalid " + G + " `" + W + "` key `" + F + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(P[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var M = re(k, F, O, G, W + "." + F, t);
          if (M)
            return M;
        }
        return null;
      }
      return g(x);
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
          var x = f(_);
          if (x) {
            var P = x.call(_), D;
            if (x !== _.entries) {
              for (; !(D = P.next()).done; )
                if (!H(D.value))
                  return !1;
            } else
              for (; !(D = P.next()).done; ) {
                var O = D.value;
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
    function J(_, x) {
      return _ === "symbol" ? !0 : x ? x["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && x instanceof Symbol : !1;
    }
    function $(_) {
      var x = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : J(x, _) ? "symbol" : x;
    }
    function Q(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var x = $(_);
      if (x === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return x;
    }
    function R(_) {
      var x = Q(_);
      switch (x) {
        case "array":
        case "object":
          return "an " + x;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + x;
        default:
          return x;
      }
    }
    function T(_) {
      return !_.constructor || !_.constructor.name ? v : _.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, Ar;
}
var Mr, Ni;
function Xf() {
  if (Ni) return Mr;
  Ni = 1;
  var e = /* @__PURE__ */ Ao();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, Mr = function() {
    function r(a, s, l, d, p, f) {
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
  }, Mr;
}
var Ii;
function Jf() {
  if (Ii) return hn.exports;
  if (Ii = 1, process.env.NODE_ENV !== "production") {
    var e = Os(), n = !0;
    hn.exports = /* @__PURE__ */ Zf()(e.isElement, n);
  } else
    hn.exports = /* @__PURE__ */ Xf()();
  return hn.exports;
}
var Qf = /* @__PURE__ */ Jf();
const me = /* @__PURE__ */ uo(Qf), em = /* @__PURE__ */ new Map([
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
  const r = tm(e), { webkitRelativePath: o } = e, i = typeof n == "string" ? n : typeof o == "string" && o.length > 0 ? o : `./${e.name}`;
  return typeof r.path != "string" && Li(r, "path", i), Li(r, "relativePath", i), r;
}
function tm(e) {
  const { name: n } = e;
  if (n && n.lastIndexOf(".") !== -1 && !e.type) {
    const r = n.split(".").pop().toLowerCase(), o = em.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
function Li(e, n, t) {
  Object.defineProperty(e, n, {
    value: t,
    writable: !1,
    configurable: !1,
    enumerable: !0
  });
}
const nm = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  // macOs
  "Thumbs.db"
  // Windows
];
function rm(e) {
  return gt(this, void 0, void 0, function* () {
    return An(e) && om(e.dataTransfer) ? cm(e.dataTransfer, e.type) : im(e) ? am(e) : Array.isArray(e) && e.every((n) => "getFile" in n && typeof n.getFile == "function") ? sm(e) : [];
  });
}
function om(e) {
  return An(e);
}
function im(e) {
  return An(e) && An(e.target);
}
function An(e) {
  return typeof e == "object" && e !== null;
}
function am(e) {
  return Kr(e.target.files).map((n) => Pt(n));
}
function sm(e) {
  return gt(this, void 0, void 0, function* () {
    return (yield Promise.all(e.map((t) => t.getFile()))).map((t) => Pt(t));
  });
}
function cm(e, n) {
  return gt(this, void 0, void 0, function* () {
    if (e.items) {
      const t = Kr(e.items).filter((o) => o.kind === "file");
      if (n !== "drop")
        return t;
      const r = yield Promise.all(t.map(lm));
      return Fi(Ds(r));
    }
    return Fi(Kr(e.files).map((t) => Pt(t)));
  });
}
function Fi(e) {
  return e.filter((n) => nm.indexOf(n.name) === -1);
}
function Kr(e) {
  if (e === null)
    return [];
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    n.push(r);
  }
  return n;
}
function lm(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return zi(e);
  const n = e.webkitGetAsEntry();
  return n && n.isDirectory ? Ns(n) : zi(e, n);
}
function Ds(e) {
  return e.reduce((n, t) => [
    ...n,
    ...Array.isArray(t) ? Ds(t) : [t]
  ], []);
}
function zi(e, n) {
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
function dm(e) {
  return gt(this, void 0, void 0, function* () {
    return e.isDirectory ? Ns(e) : um(e);
  });
}
function Ns(e) {
  const n = e.createReader();
  return new Promise((t, r) => {
    const o = [];
    function i() {
      n.readEntries((a) => gt(this, void 0, void 0, function* () {
        if (a.length) {
          const s = Promise.all(a.map(dm));
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
function um(e) {
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
var xn = {}, $i;
function pm() {
  return $i || ($i = 1, xn.__esModule = !0, xn.default = function(e, n) {
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
  }), xn;
}
var fm = pm();
const Or = /* @__PURE__ */ uo(fm);
function Wi(e) {
  return hm(e) || vm(e) || Ls(e) || mm();
}
function mm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function hm(e) {
  if (Array.isArray(e)) return Zr(e);
}
function Vi(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Bi(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Vi(Object(t), !0).forEach(function(r) {
      Is(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Vi(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Is(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Kt(e, n) {
  return bm(e) || xm(e, n) || Ls(e, n) || gm();
}
function gm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ls(e, n) {
  if (e) {
    if (typeof e == "string") return Zr(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Zr(e, n);
  }
}
function Zr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function xm(e, n) {
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
function bm(e) {
  if (Array.isArray(e)) return e;
}
var ym = typeof Or == "function" ? Or : Or.default, wm = "file-invalid-type", Cm = "file-too-large", Sm = "file-too-small", Em = "too-many-files", km = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = n.split(","), r = t.length > 1 ? "one of ".concat(t.join(", ")) : t[0];
  return {
    code: wm,
    message: "File type must be ".concat(r)
  };
}, Hi = function(n) {
  return {
    code: Cm,
    message: "File is larger than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, Ui = function(n) {
  return {
    code: Sm,
    message: "File is smaller than ".concat(n, " ").concat(n === 1 ? "byte" : "bytes")
  };
}, _m = {
  code: Em,
  message: "Too many files"
};
function Fs(e, n) {
  var t = e.type === "application/x-moz-file" || ym(e, n);
  return [t, t ? null : km(n)];
}
function zs(e, n, t) {
  if (ut(e.size))
    if (ut(n) && ut(t)) {
      if (e.size > t) return [!1, Hi(t)];
      if (e.size < n) return [!1, Ui(n)];
    } else {
      if (ut(n) && e.size < n) return [!1, Ui(n)];
      if (ut(t) && e.size > t) return [!1, Hi(t)];
    }
  return [!0, null];
}
function ut(e) {
  return e != null;
}
function Rm(e) {
  var n = e.files, t = e.accept, r = e.minSize, o = e.maxSize, i = e.multiple, a = e.maxFiles, s = e.validator;
  return !i && n.length > 1 || i && a >= 1 && n.length > a ? !1 : n.every(function(l) {
    var d = Fs(l, t), p = Kt(d, 1), f = p[0], v = zs(l, r, o), h = Kt(v, 1), b = h[0], m = s ? s(l) : null;
    return f && b && !m;
  });
}
function Mn(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
function bn(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(n) {
    return n === "Files" || n === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function Gi(e) {
  e.preventDefault();
}
function jm(e) {
  return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function Pm(e) {
  return e.indexOf("Edge/") !== -1;
}
function Am() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return jm(e) || Pm(e);
}
function ze() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return function(r) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    return n.some(function(s) {
      return !Mn(r) && s && s.apply(void 0, [r].concat(i)), Mn(r);
    });
  };
}
function Mm() {
  return "showOpenFilePicker" in window;
}
function Om(e) {
  if (ut(e)) {
    var n = Object.entries(e).filter(function(t) {
      var r = Kt(t, 2), o = r[0], i = r[1], a = !0;
      return $s(o) || (console.warn('Skipped "'.concat(o, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), a = !1), (!Array.isArray(i) || !i.every(Ws)) && (console.warn('Skipped "'.concat(o, '" because an invalid file extension was provided.')), a = !1), a;
    }).reduce(function(t, r) {
      var o = Kt(r, 2), i = o[0], a = o[1];
      return Bi(Bi({}, t), {}, Is({}, i, a));
    }, {});
    return [{
      // description is required due to https://crbug.com/1264708
      description: "Files",
      accept: n
    }];
  }
  return e;
}
function Tm(e) {
  if (ut(e))
    return Object.entries(e).reduce(function(n, t) {
      var r = Kt(t, 2), o = r[0], i = r[1];
      return [].concat(Wi(n), [o], Wi(i));
    }, []).filter(function(n) {
      return $s(n) || Ws(n);
    }).join(",");
}
function Dm(e) {
  return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function Nm(e) {
  return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function $s(e) {
  return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function Ws(e) {
  return /^.*\.[\w]+$/.test(e);
}
var Im = ["children"], Lm = ["open"], Fm = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"], zm = ["refKey", "onChange", "onClick"];
function $m(e) {
  return Bm(e) || Vm(e) || Vs(e) || Wm();
}
function Wm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Bm(e) {
  if (Array.isArray(e)) return Xr(e);
}
function Tr(e, n) {
  return Gm(e) || Um(e, n) || Vs(e, n) || Hm();
}
function Hm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vs(e, n) {
  if (e) {
    if (typeof e == "string") return Xr(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Xr(e, n);
  }
}
function Xr(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Um(e, n) {
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
function Gm(e) {
  if (Array.isArray(e)) return e;
}
function qi(e, n) {
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
    n % 2 ? qi(Object(t), !0).forEach(function(r) {
      Jr(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qi(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Jr(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function On(e, n) {
  if (e == null) return {};
  var t = qm(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function qm(e, n) {
  if (e == null) return {};
  var t = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(n.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var Mo = /* @__PURE__ */ Bn(function(e, n) {
  var t = e.children, r = On(e, Im), o = Oo(r), i = o.open, a = On(o, Lm);
  return zl(n, function() {
    return {
      open: i
    };
  }, [i]), /* @__PURE__ */ ie.createElement($l, null, t(xe(xe({}, a), {}, {
    open: i
  })));
});
Mo.displayName = "Dropzone";
var Bs = {
  disabled: !1,
  getFilesFromEvent: rm,
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
Mo.defaultProps = Bs;
Mo.propTypes = {
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
var Qr = {
  isFocused: !1,
  isFileDialogActive: !1,
  isDragActive: !1,
  isDragAccept: !1,
  isDragReject: !1,
  acceptedFiles: [],
  fileRejections: []
};
function Oo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = xe(xe({}, Bs), e), t = n.accept, r = n.disabled, o = n.getFilesFromEvent, i = n.maxSize, a = n.minSize, s = n.multiple, l = n.maxFiles, d = n.onDragEnter, p = n.onDragLeave, f = n.onDragOver, v = n.onDrop, h = n.onDropAccepted, b = n.onDropRejected, m = n.onFileDialogCancel, g = n.onFileDialogOpen, y = n.useFsAccessApi, C = n.autoFocus, S = n.preventDropOnDocument, E = n.noClick, w = n.noKeyboard, N = n.noDrag, A = n.noDragEventsBubbling, j = n.onError, I = n.validator, B = rt(function() {
    return Tm(t);
  }, [t]), X = rt(function() {
    return Om(t);
  }, [t]), q = rt(function() {
    return typeof g == "function" ? g : Yi;
  }, [g]), U = rt(function() {
    return typeof m == "function" ? m : Yi;
  }, [m]), H = sn(null), J = sn(null), $ = Fl(Ym, Qr), Q = Tr($, 2), R = Q[0], T = Q[1], _ = R.isFocused, x = R.isFileDialogActive, P = sn(typeof window < "u" && window.isSecureContext && y && Mm()), D = function() {
    !P.current && x && setTimeout(function() {
      if (J.current) {
        var te = J.current.files;
        te.length || (T({
          type: "closeDialog"
        }), U());
      }
    }, 300);
  };
  Cn(function() {
    return window.addEventListener("focus", D, !1), function() {
      window.removeEventListener("focus", D, !1);
    };
  }, [J, x, U, P]);
  var O = sn([]), G = function(te) {
    H.current && H.current.contains(te.target) || (te.preventDefault(), O.current = []);
  };
  Cn(function() {
    return S && (document.addEventListener("dragover", Gi, !1), document.addEventListener("drop", G, !1)), function() {
      S && (document.removeEventListener("dragover", Gi), document.removeEventListener("drop", G));
    };
  }, [H, S]), Cn(function() {
    return !r && C && H.current && H.current.focus(), function() {
    };
  }, [H, C, r]);
  var W = ye(function(z) {
    j ? j(z) : console.error(z);
  }, [j]), k = ye(function(z) {
    z.preventDefault(), z.persist(), Ce(z), O.current = [].concat($m(O.current), [z.target]), bn(z) && Promise.resolve(o(z)).then(function(te) {
      if (!(Mn(z) && !A)) {
        var de = te.length, ve = de > 0 && Rm({
          files: te,
          accept: B,
          minSize: a,
          maxSize: i,
          multiple: s,
          maxFiles: l,
          validator: I
        }), ke = de > 0 && !ve;
        T({
          isDragAccept: ve,
          isDragReject: ke,
          isDragActive: !0,
          type: "setDraggedFiles"
        }), d && d(z);
      }
    }).catch(function(te) {
      return W(te);
    });
  }, [o, d, W, A, B, a, i, s, l, I]), V = ye(function(z) {
    z.preventDefault(), z.persist(), Ce(z);
    var te = bn(z);
    if (te && z.dataTransfer)
      try {
        z.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return te && f && f(z), !1;
  }, [f, A]), Z = ye(function(z) {
    z.preventDefault(), z.persist(), Ce(z);
    var te = O.current.filter(function(ve) {
      return H.current && H.current.contains(ve);
    }), de = te.indexOf(z.target);
    de !== -1 && te.splice(de, 1), O.current = te, !(te.length > 0) && (T({
      type: "setDraggedFiles",
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1
    }), bn(z) && p && p(z));
  }, [H, p, A]), F = ye(function(z, te) {
    var de = [], ve = [];
    z.forEach(function(ke) {
      var Je = Fs(ke, B), Qe = Tr(Je, 2), Lt = Qe[0], Ft = Qe[1], Te = zs(ke, a, i), et = Tr(Te, 2), zt = et[0], fr = et[1], mr = I ? I(ke) : null;
      if (Lt && zt && !mr)
        de.push(ke);
      else {
        var vr = [Ft, fr];
        mr && (vr = vr.concat(mr)), ve.push({
          file: ke,
          errors: vr.filter(function(Il) {
            return Il;
          })
        });
      }
    }), (!s && de.length > 1 || s && l >= 1 && de.length > l) && (de.forEach(function(ke) {
      ve.push({
        file: ke,
        errors: [_m]
      });
    }), de.splice(0)), T({
      acceptedFiles: de,
      fileRejections: ve,
      isDragReject: ve.length > 0,
      type: "setFiles"
    }), v && v(de, ve, te), ve.length > 0 && b && b(ve, te), de.length > 0 && h && h(de, te);
  }, [T, s, B, a, i, l, v, h, b, I]), re = ye(function(z) {
    z.preventDefault(), z.persist(), Ce(z), O.current = [], bn(z) && Promise.resolve(o(z)).then(function(te) {
      Mn(z) && !A || F(te, z);
    }).catch(function(te) {
      return W(te);
    }), T({
      type: "reset"
    });
  }, [o, F, W, A]), M = ye(function() {
    if (P.current) {
      T({
        type: "openDialog"
      }), q();
      var z = {
        multiple: s,
        types: X
      };
      window.showOpenFilePicker(z).then(function(te) {
        return o(te);
      }).then(function(te) {
        F(te, null), T({
          type: "closeDialog"
        });
      }).catch(function(te) {
        Dm(te) ? (U(te), T({
          type: "closeDialog"
        })) : Nm(te) ? (P.current = !1, J.current ? (J.current.value = null, J.current.click()) : W(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : W(te);
      });
      return;
    }
    J.current && (T({
      type: "openDialog"
    }), q(), J.current.value = null, J.current.click());
  }, [T, q, U, y, F, W, X, s]), pe = ye(function(z) {
    !H.current || !H.current.isEqualNode(z.target) || (z.key === " " || z.key === "Enter" || z.keyCode === 32 || z.keyCode === 13) && (z.preventDefault(), M());
  }, [H, M]), ee = ye(function() {
    T({
      type: "focus"
    });
  }, []), oe = ye(function() {
    T({
      type: "blur"
    });
  }, []), be = ye(function() {
    E || (Am() ? setTimeout(M, 0) : M());
  }, [E, M]), ge = function(te) {
    return r ? null : te;
  }, Ee = function(te) {
    return w ? null : ge(te);
  }, fe = function(te) {
    return N ? null : ge(te);
  }, Ce = function(te) {
    A && te.stopPropagation();
  }, yt = rt(function() {
    return function() {
      var z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, te = z.refKey, de = te === void 0 ? "ref" : te, ve = z.role, ke = z.onKeyDown, Je = z.onFocus, Qe = z.onBlur, Lt = z.onClick, Ft = z.onDragEnter, Te = z.onDragOver, et = z.onDragLeave, zt = z.onDrop, fr = On(z, Fm);
      return xe(xe(Jr({
        onKeyDown: Ee(ze(ke, pe)),
        onFocus: Ee(ze(Je, ee)),
        onBlur: Ee(ze(Qe, oe)),
        onClick: ge(ze(Lt, be)),
        onDragEnter: fe(ze(Ft, k)),
        onDragOver: fe(ze(Te, V)),
        onDragLeave: fe(ze(et, Z)),
        onDrop: fe(ze(zt, re)),
        role: typeof ve == "string" && ve !== "" ? ve : "presentation"
      }, de, H), !r && !w ? {
        tabIndex: 0
      } : {}), fr);
    };
  }, [H, pe, ee, oe, be, k, V, Z, re, w, N, r]), Pe = ye(function(z) {
    z.stopPropagation();
  }, []), Ge = rt(function() {
    return function() {
      var z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, te = z.refKey, de = te === void 0 ? "ref" : te, ve = z.onChange, ke = z.onClick, Je = On(z, zm), Qe = Jr({
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
      }, de, J);
      return xe(xe({}, Qe), Je);
    };
  }, [J, t, s, re, r]);
  return xe(xe({}, R), {}, {
    isFocused: _ && !r,
    getRootProps: yt,
    getInputProps: Ge,
    rootRef: H,
    inputRef: J,
    open: ge(M)
  });
}
function Ym(e, n) {
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
      return xe(xe({}, Qr), {}, {
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
      return xe({}, Qr);
    default:
      return e;
  }
}
function Yi() {
}
const Km = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2024C0%2010.7452%2010.7452%200%2024%200C37.2548%200%2048%2010.7452%2048%2024C48%2037.2548%2037.2548%2048%2024%2048C10.7452%2048%200%2037.2548%200%2024Z'%20fill='%23EFF1F5'/%3e%3cpath%20d='M31%2017V31H17V17H31ZM31%2015H17C15.9%2015%2015%2015.9%2015%2017V31C15%2032.1%2015.9%2033%2017%2033H31C32.1%2033%2033%2032.1%2033%2031V17C33%2015.9%2032.1%2015%2031%2015ZM26.14%2023.86L23.14%2027.73L21%2025.14L18%2029H30L26.14%2023.86Z'%20fill='%233F465B'/%3e%3c/svg%3e";
var Dr, Ki;
function Zm() {
  if (Ki) return Dr;
  Ki = 1;
  var e = !1, n, t, r, o, i, a, s, l, d, p, f, v, h, b, m;
  function g() {
    if (!e) {
      e = !0;
      var C = navigator.userAgent, S = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(C), E = /(Mac OS X)|(Windows)|(Linux)/.exec(C);
      if (v = /\b(iPhone|iP[ao]d)/.exec(C), h = /\b(iP[ao]d)/.exec(C), p = /Android/i.exec(C), b = /FBAN\/\w+;/i.exec(C), m = /Mobile/i.exec(C), f = !!/Win64/.exec(C), S) {
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
        l = !!E[2], d = !!E[3];
      } else
        s = l = d = !1;
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
      return g() || l;
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
      return g() || b;
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
var Nr, Zi;
function Xm() {
  if (Zi) return Nr;
  Zi = 1;
  var e = !!(typeof window < "u" && window.document && window.document.createElement), n = {
    canUseDOM: e,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
    canUseViewport: e && !!window.screen,
    isInWorker: !e
    // For now, this is true - might change in the future.
  };
  return Nr = n, Nr;
}
var Ir, Xi;
function Jm() {
  if (Xi) return Ir;
  Xi = 1;
  var e = Xm(), n;
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
  return Ir = t, Ir;
}
var Lr, Ji;
function Qm() {
  if (Ji) return Lr;
  Ji = 1;
  var e = Zm(), n = Jm(), t = 10, r = 40, o = 800;
  function i(a) {
    var s = 0, l = 0, d = 0, p = 0;
    return "detail" in a && (l = a.detail), "wheelDelta" in a && (l = -a.wheelDelta / 120), "wheelDeltaY" in a && (l = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (s = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (s = l, l = 0), d = s * t, p = l * t, "deltaY" in a && (p = a.deltaY), "deltaX" in a && (d = a.deltaX), (d || p) && a.deltaMode && (a.deltaMode == 1 ? (d *= r, p *= r) : (d *= o, p *= o)), d && !s && (s = d < 1 ? -1 : 1), p && !l && (l = p < 1 ? -1 : 1), {
      spinX: s,
      spinY: l,
      pixelX: d,
      pixelY: p
    };
  }
  return i.getEventType = function() {
    return e.firefox() ? "DOMMouseScroll" : n("wheel") ? "wheel" : "mousewheel";
  }, Lr = i, Lr;
}
var Fr, Qi;
function ev() {
  return Qi || (Qi = 1, Fr = Qm()), Fr;
}
var tv = ev();
const nv = /* @__PURE__ */ uo(tv);
function rv(e, n, t, r, o, i) {
  i === void 0 && (i = 0);
  var a = At(e, n, i), s = a.width, l = a.height, d = Math.min(s, t), p = Math.min(l, r);
  return d > p * o ? {
    width: p * o,
    height: p
  } : {
    width: d,
    height: d / o
  };
}
function ov(e) {
  return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight;
}
function Bt(e, n, t, r, o) {
  o === void 0 && (o = 0);
  var i = At(n.width, n.height, o), a = i.width, s = i.height;
  return {
    x: ea(e.x, a, t.width, r),
    y: ea(e.y, s, t.height, r)
  };
}
function ea(e, n, t, r) {
  var o = n * r / 2 - t / 2;
  return tr(e, -o, o);
}
function ta(e, n) {
  return Math.sqrt(Math.pow(e.y - n.y, 2) + Math.pow(e.x - n.x, 2));
}
function na(e, n) {
  return Math.atan2(n.y - e.y, n.x - e.x) * 180 / Math.PI;
}
function iv(e, n, t, r, o, i, a) {
  i === void 0 && (i = 0), a === void 0 && (a = !0);
  var s = a ? av : sv, l = At(n.width, n.height, i), d = At(n.naturalWidth, n.naturalHeight, i), p = {
    x: s(100, ((l.width - t.width / o) / 2 - e.x / o) / l.width * 100),
    y: s(100, ((l.height - t.height / o) / 2 - e.y / o) / l.height * 100),
    width: s(100, t.width / l.width * 100 / o),
    height: s(100, t.height / l.height * 100 / o)
  }, f = Math.round(s(d.width, p.width * d.width / 100)), v = Math.round(s(d.height, p.height * d.height / 100)), h = d.width >= d.height * r, b = h ? {
    width: Math.round(v * r),
    height: v
  } : {
    width: f,
    height: Math.round(f / r)
  }, m = he(he({}, b), {
    x: Math.round(s(d.width - b.width, p.x * d.width / 100)),
    y: Math.round(s(d.height - b.height, p.y * d.height / 100))
  });
  return {
    croppedAreaPercentages: p,
    croppedAreaPixels: m
  };
}
function av(e, n) {
  return Math.min(e, Math.max(0, n));
}
function sv(e, n) {
  return n;
}
function cv(e, n, t, r, o, i) {
  var a = At(n.width, n.height, t), s = tr(r.width / a.width * (100 / e.width), o, i), l = {
    x: s * a.width / 2 - r.width / 2 - a.width * s * (e.x / 100),
    y: s * a.height / 2 - r.height / 2 - a.height * s * (e.y / 100)
  };
  return {
    crop: l,
    zoom: s
  };
}
function lv(e, n, t) {
  var r = ov(n);
  return t.height > t.width ? t.height / (e.height * r) : t.width / (e.width * r);
}
function dv(e, n, t, r, o, i) {
  t === void 0 && (t = 0);
  var a = At(n.naturalWidth, n.naturalHeight, t), s = tr(lv(e, n, r), o, i), l = r.height > r.width ? r.height / e.height : r.width / e.width, d = {
    x: ((a.width - e.width) / 2 - e.x) * l,
    y: ((a.height - e.height) / 2 - e.y) * l
  };
  return {
    crop: d,
    zoom: s
  };
}
function ra(e, n) {
  return {
    x: (n.x + e.x) / 2,
    y: (n.y + e.y) / 2
  };
}
function uv(e) {
  return e * Math.PI / 180;
}
function At(e, n, t) {
  var r = uv(t);
  return {
    width: Math.abs(Math.cos(r) * e) + Math.abs(Math.sin(r) * n),
    height: Math.abs(Math.sin(r) * e) + Math.abs(Math.cos(r) * n)
  };
}
function tr(e, n, t) {
  return Math.min(Math.max(e, n), t);
}
function yn() {
  for (var e = [], n = 0; n < arguments.length; n++)
    e[n] = arguments[n];
  return e.filter(function(t) {
    return typeof t == "string" && t.length > 0;
  }).join(" ").trim();
}
var pv = `.reactEasyCrop_Container {
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
`, fv = 1, mv = 3, vv = 1, hv = (
  /** @class */
  (function(e) {
    Ed(n, e);
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
          var o = cv(t.props.initialCroppedAreaPercentages, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), i = o.crop, a = o.zoom;
          t.props.onCropChange(i), t.props.onZoomChange && t.props.onZoomChange(a);
        } else if (t.props.initialCroppedAreaPixels) {
          var s = dv(t.props.initialCroppedAreaPixels, t.mediaSize, t.props.rotation, r, t.props.minZoom, t.props.maxZoom), i = s.crop, a = s.zoom;
          t.props.onCropChange(i), t.props.onZoomChange && t.props.onZoomChange(a);
        }
      }, t.computeSizes = function() {
        var r, o, i, a, s, l, d = t.imageRef.current || t.videoRef.current;
        if (d && t.containerRef) {
          t.containerRect = t.containerRef.getBoundingClientRect(), t.saveContainerPosition();
          var p = t.containerRect.width / t.containerRect.height, f = ((r = t.imageRef.current) === null || r === void 0 ? void 0 : r.naturalWidth) || ((o = t.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, v = ((i = t.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((a = t.videoRef.current) === null || a === void 0 ? void 0 : a.videoHeight) || 0, h = d.offsetWidth < f || d.offsetHeight < v, b = f / v, m = void 0;
          if (h)
            switch (t.state.mediaObjectFit) {
              default:
              case "contain":
                m = p > b ? {
                  width: t.containerRect.height * b,
                  height: t.containerRect.height
                } : {
                  width: t.containerRect.width,
                  height: t.containerRect.width / b
                };
                break;
              case "horizontal-cover":
                m = {
                  width: t.containerRect.width,
                  height: t.containerRect.width / b
                };
                break;
              case "vertical-cover":
                m = {
                  width: t.containerRect.height * b,
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
          var g = t.props.cropSize ? t.props.cropSize : rv(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
          return (((s = t.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== g.height || ((l = t.state.cropSize) === null || l === void 0 ? void 0 : l.width) !== g.width) && t.props.onCropSizeChange && t.props.onCropSizeChange(g), t.setState({
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
            var a = o - t.dragStartPosition.x, s = i - t.dragStartPosition.y, l = {
              x: t.dragStartCrop.x + a,
              y: t.dragStartCrop.y + s
            }, d = t.props.restrictPosition ? Bt(l, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : l;
            t.props.onCropChange(d);
          }
        }));
      }, t.onDragStopped = function() {
        var r, o;
        t.isTouching = !1, t.cleanEvents(), t.emitCropData(), (o = (r = t.props).onInteractionEnd) === null || o === void 0 || o.call(r);
      }, t.onWheel = function(r) {
        if (t.currentWindow && !(t.props.onWheelRequest && !t.props.onWheelRequest(r))) {
          r.preventDefault();
          var o = n.getMousePoint(r), i = nv(r).pixelY, a = t.props.zoom - i * t.props.zoomSpeed / 200;
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
          var d = tr(r, t.props.minZoom, t.props.maxZoom);
          if (l) {
            var p = t.getPointOnContainer(o, t.containerPosition), f = t.getPointOnMedia(p), v = {
              x: f.x * d - p.x,
              y: f.y * d - p.y
            }, h = t.props.restrictPosition ? Bt(v, t.mediaSize, t.state.cropSize, d, t.props.rotation) : v;
            t.props.onCropChange(h);
          }
          t.props.onZoomChange(d);
        }
      }, t.getCropData = function() {
        if (!t.state.cropSize)
          return null;
        var r = t.props.restrictPosition ? Bt(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
        return iv(r, t.mediaSize, t.state.cropSize, t.getAspect(), t.props.zoom, t.props.rotation, t.props.restrictPosition);
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
          var d = t.props.restrictPosition ? Bt(i, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : i;
          t.previousCropSize = t.state.cropSize, t.props.onCropChange(d), t.emitCropData();
        }
      }, t.onKeyDown = function(r) {
        var o, i, a = t.props, s = a.crop, l = a.onCropChange, d = a.keyboardStep, p = a.zoom, f = a.rotation, v = d;
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
          t.props.restrictPosition && (h = Bt(h, t.mediaSize, t.state.cropSize, p, f)), r.repeat || (i = (o = t.props).onInteractionStart) === null || i === void 0 || i.call(o), l(h);
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
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = pv, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, n.prototype.componentWillUnmount = function() {
      var t, r;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((r = this.styleRef.parentNode) === null || r === void 0 || r.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, n.prototype.componentDidUpdate = function(t) {
      var r, o, i, a, s, l, d, p, f;
      t.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : t.aspect !== this.props.aspect ? this.computeSizes() : t.objectFit !== this.props.objectFit ? this.computeSizes() : t.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((r = t.cropSize) === null || r === void 0 ? void 0 : r.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((i = t.cropSize) === null || i === void 0 ? void 0 : i.width) !== ((a = this.props.cropSize) === null || a === void 0 ? void 0 : a.width) ? this.computeSizes() : (((s = t.crop) === null || s === void 0 ? void 0 : s.x) !== ((l = this.props.crop) === null || l === void 0 ? void 0 : l.x) || ((d = t.crop) === null || d === void 0 ? void 0 : d.y) !== ((p = this.props.crop) === null || p === void 0 ? void 0 : p.y)) && this.emitCropAreaChange(), t.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
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
          var s = this.containerRect.width / this.containerRect.height, l = ((t = this.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((r = this.videoRef.current) === null || r === void 0 ? void 0 : r.videoWidth) || 0, d = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, p = l / d;
          return p < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, n.prototype.onPinchStart = function(t) {
      var r = n.getTouchPoint(t.touches[0]), o = n.getTouchPoint(t.touches[1]);
      this.lastPinchDistance = ta(r, o), this.lastPinchRotation = na(r, o), this.onDragStart(ra(r, o));
    }, n.prototype.onPinchMove = function(t) {
      var r = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = n.getTouchPoint(t.touches[0]), i = n.getTouchPoint(t.touches[1]), a = ra(o, i);
        this.onDrag(a), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = ta(o, i), l = r.props.zoom * (s / r.lastPinchDistance);
          r.setNewZoom(l, a, {
            shouldUpdatePosition: !1
          }), r.lastPinchDistance = s;
          var d = na(o, i), p = r.props.rotation + (d - r.lastPinchRotation);
          r.props.onRotationChange && r.props.onRotationChange(p), r.lastPinchRotation = d;
        });
      }
    }, n.prototype.render = function() {
      var t = this, r, o = this.props, i = o.image, a = o.video, s = o.mediaProps, l = o.cropperProps, d = o.transform, p = o.crop, f = p.x, v = p.y, h = o.rotation, b = o.zoom, m = o.cropShape, g = o.showGrid, y = o.roundCropAreaPixels, C = o.style, S = C.containerStyle, E = C.cropAreaStyle, w = C.mediaStyle, N = o.classes, A = N.containerClassName, j = N.cropAreaClassName, I = N.mediaClassName, B = (r = this.state.mediaObjectFit) !== null && r !== void 0 ? r : this.getObjectFit();
      return u.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(q) {
          return t.containerRef = q;
        },
        "data-testid": "container",
        style: S,
        className: yn("reactEasyCrop_Container", A)
      }, i ? u.createElement("img", he({
        alt: "",
        className: yn("reactEasyCrop_Image", B === "contain" && "reactEasyCrop_Contain", B === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", B === "vertical-cover" && "reactEasyCrop_Cover_Vertical", I)
      }, s, {
        src: i,
        ref: this.imageRef,
        style: he(he({}, w), {
          transform: d || "translate(".concat(f, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(b, ")")
        }),
        onLoad: this.onMediaLoad
      })) : a && u.createElement("video", he({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: yn("reactEasyCrop_Video", B === "contain" && "reactEasyCrop_Contain", B === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", B === "vertical-cover" && "reactEasyCrop_Cover_Vertical", I)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: he(he({}, w), {
          transform: d || "translate(".concat(f, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(b, ")")
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
        className: yn("reactEasyCrop_CropArea", m === "round" && "reactEasyCrop_CropAreaRound", g && "reactEasyCrop_CropAreaGrid", j)
      }, l)));
    }, n.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: mv,
      minZoom: fv,
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
      keyboardStep: vv
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
function gv({
  imageUrl: e,
  aspect: n,
  rounded: t,
  crop: r,
  zoom: o,
  onCropChange: i,
  onZoomChange: a,
  onCropComplete: s,
  onClose: l,
  onConfirm: d
}) {
  const p = ye(
    (f, v) => s(v),
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
              children: /* @__PURE__ */ c.jsx(_o, { className: "size-5 text-gray-700" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex-1 overflow-auto px-4 py-4 sm:px-6 sm:py-6", children: [
          /* @__PURE__ */ c.jsx("div", { className: "relative w-full overflow-hidden rounded-lg bg-gray-900", children: /* @__PURE__ */ c.jsx("div", { className: "relative h-[60dvh] sm:h-[420px] w-full", children: /* @__PURE__ */ c.jsx(
            hv,
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
          Ro,
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
function xv(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = `image/${r === "jpg" ? "jpeg" : r}`;
    n[o] ??= [], n[o].push(`.${r}`);
  }
  return n;
}
function bv(e) {
  return new Promise((n, t) => {
    const r = new Image();
    r.addEventListener("load", () => n(r)), r.addEventListener("error", (o) => t(o)), r.setAttribute("crossOrigin", "anonymous"), r.src = e;
  });
}
async function yv(e, n, t) {
  const r = await bv(e), o = document.createElement("canvas"), i = o.getContext("2d");
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
      (d) => d ? s(d) : l(new Error("Canvas is empty")),
      t.fileType || "image/png",
      0.92
    );
  });
  return new File([a], t.fileName, { type: t.fileType || a.type });
}
function hb({
  value: e,
  onChange: n,
  aspectRatio: t,
  extensions: r,
  rounded: o = !1,
  maxSize: i = 5 * 1024 * 1024,
  minWidth: a,
  minHeight: s,
  maxWidth: l,
  maxHeight: d,
  placeholder: p = "Accepted files jpg, png and webp",
  className: f
}) {
  const [v, h] = $e(null), [b, m] = $e([]), [g, y] = $e(!1), [C, S] = $e(null), [E, w] = $e({ x: 0, y: 0 }), [N, A] = $e(1), [j, I] = $e(null), B = rt(() => xv(r), [r]);
  Cn(() => {
    if (!e) {
      v && URL.revokeObjectURL(v), h(null);
      return;
    }
    const x = URL.createObjectURL(e);
    return v && URL.revokeObjectURL(v), h(x), () => {
      URL.revokeObjectURL(x);
    };
  }, [e]);
  const X = ye(
    async (x) => {
      const P = x[0];
      if (!P) return;
      if (m([]), [a, s, l, d].some(
        (G) => typeof G == "number"
      ))
        try {
          const G = await new Promise(
            (k, V) => {
              const Z = URL.createObjectURL(P), F = new Image();
              F.onload = () => {
                const re = F.naturalWidth || F.width, M = F.naturalHeight || F.height;
                URL.revokeObjectURL(Z), k({ width: re, height: M });
              }, F.onerror = () => {
                URL.revokeObjectURL(Z), V(new Error("Unable to read image dimensions"));
              }, F.src = Z;
            }
          ), W = [];
          if (typeof a == "number" && G.width < a && W.push(
            `Image width is too small. Minimum width is ${a}px.`
          ), typeof s == "number" && G.height < s && W.push(
            `Image height is too small. Minimum height is ${s}px.`
          ), typeof l == "number" && G.width > l && W.push(
            `Image width is too large. Maximum width is ${l}px.`
          ), typeof d == "number" && G.height > d && W.push(
            `Image height is too large. Maximum height is ${d}px.`
          ), W.length > 0) {
            m(W);
            return;
          }
        } catch {
          m(["Unable to read image dimensions. Please try another image."]);
          return;
        }
      const O = URL.createObjectURL(P);
      S(O), y(!0), w({ x: 0, y: 0 }), A(1), I(null);
    },
    [d, l, s, a]
  ), { getRootProps: q, getInputProps: U, isDragActive: H, fileRejections: J } = Oo({
    onDrop: X,
    accept: B,
    maxSize: i,
    multiple: !1
  }), $ = [
    ...J.flatMap(
      (x) => x.errors.map((P) => P.code === "file-too-large" ? `File is too large. Max size is ${(i / 1048576).toFixed(0)}MB` : P.code === "file-invalid-type" ? `Invalid file type. Allowed types: ${r.join(", ")}` : P.message)
    ),
    ...b
  ], Q = ye(() => {
    y(!1), C && URL.revokeObjectURL(C), S(null);
  }, [C]), R = ye(async () => {
    if (!(!C || !j))
      try {
        const x = await yv(C, j, {
          fileName: e?.name ?? "image.png",
          fileType: e?.type ?? "image/png"
        });
        n(x), y(!1), URL.revokeObjectURL(C), S(null);
      } catch (x) {
        console.error("Error cropping image:", x);
      }
  }, [j, n, C, e?.name, e?.type]), T = ye(() => {
    v && URL.revokeObjectURL(v), h(null), n(null);
  }, [n, v]), _ = o ? { aspectRatio: "1 / 1" } : { aspectRatio: `${t}` };
  return /* @__PURE__ */ c.jsxs("div", { className: L("w-full space-y-2", f), children: [
    v ? /* @__PURE__ */ c.jsxs("div", { className: "relative w-fit max-h-44", children: [
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: L(
            "h-44 overflow-hidden border border-gray-50 bg-white shadow-lg",
            o ? "rounded-full" : "rounded-lg"
          ),
          style: _,
          children: /* @__PURE__ */ c.jsx(
            "img",
            {
              src: v,
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
          onClick: T,
          "aria-label": "Remove image",
          className: L(
            "absolute right-1 top-1 inline-flex items-center justify-center",
            "size-10 rounded-full bg-gray-600 text-white border border-white",
            "hover:bg-gray-700 transition-colors"
          ),
          children: /* @__PURE__ */ c.jsx(_o, { className: "size-4" })
        }
      )
    ] }) : /* @__PURE__ */ c.jsxs(
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
          /* @__PURE__ */ c.jsx("input", { ...U() }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center px-4 text-center gap-y-3", children: [
            /* @__PURE__ */ c.jsx("img", { src: Km, alt: "" }),
            /* @__PURE__ */ c.jsx("p", { className: "text-sm font-sans font-medium text-gray-700", children: "Click to upload or drag and drop" }),
            !!p && /* @__PURE__ */ c.jsx("p", { className: "text-xs text-gray-500", children: p })
          ] })
        ]
      }
    ),
    $.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "space-y-1", children: $.map((x, P) => /* @__PURE__ */ c.jsx("p", { className: "text-sm text-bright-red-600", children: x }, P)) }),
    g && C && /* @__PURE__ */ c.jsx(
      gv,
      {
        imageUrl: C,
        aspect: t,
        rounded: o,
        crop: E,
        zoom: N,
        onCropChange: w,
        onZoomChange: A,
        onCropComplete: (x) => I(x),
        onClose: Q,
        onConfirm: R
      }
    )
  ] });
}
function wv({ className: e, type: n, ...t }) {
  return /* @__PURE__ */ c.jsx(
    "input",
    {
      type: n,
      "data-slot": "input",
      className: L(
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
function gb({
  className: e,
  ...n
}) {
  const [t, r] = $e(!1), o = ye(() => {
    r((i) => !i);
  }, []);
  return /* @__PURE__ */ c.jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ c.jsx(
      wv,
      {
        ...n,
        "data-slot": "input",
        className: L(e, "pr-10"),
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
          t && /* @__PURE__ */ c.jsx(nf, { className: "size-4 text-gray-300" }),
          !t && /* @__PURE__ */ c.jsx(of, { className: "size-4 text-gray-300" })
        ]
      }
    )
  ] });
}
var Cv = Object.defineProperty, Sv = Object.defineProperties, Ev = Object.getOwnPropertyDescriptors, Tn = Object.getOwnPropertySymbols, Hs = Object.prototype.hasOwnProperty, Us = Object.prototype.propertyIsEnumerable, oa = (e, n, t) => n in e ? Cv(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, kv = (e, n) => {
  for (var t in n || (n = {})) Hs.call(n, t) && oa(e, t, n[t]);
  if (Tn) for (var t of Tn(n)) Us.call(n, t) && oa(e, t, n[t]);
  return e;
}, _v = (e, n) => Sv(e, Ev(n)), Rv = (e, n) => {
  var t = {};
  for (var r in e) Hs.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && Tn) for (var r of Tn(e)) n.indexOf(r) < 0 && Us.call(e, r) && (t[r] = e[r]);
  return t;
};
function jv(e) {
  let n = setTimeout(e, 0), t = setTimeout(e, 10), r = setTimeout(e, 50);
  return [n, t, r];
}
function Pv(e) {
  let n = u.useRef();
  return u.useEffect(() => {
    n.current = e;
  }), n.current;
}
var Av = 18, Gs = 40, Mv = `${Gs}px`, Ov = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function Tv({ containerRef: e, inputRef: n, pushPasswordManagerStrategy: t, isFocused: r }) {
  let [o, i] = u.useState(!1), [a, s] = u.useState(!1), [l, d] = u.useState(!1), p = u.useMemo(() => t === "none" ? !1 : (t === "increase-width" || t === "experimental-no-flickering") && o && a, [o, a, t]), f = u.useCallback(() => {
    let v = e.current, h = n.current;
    if (!v || !h || l || t === "none") return;
    let b = v, m = b.getBoundingClientRect().left + b.offsetWidth, g = b.getBoundingClientRect().top + b.offsetHeight / 2, y = m - Av, C = g;
    document.querySelectorAll(Ov).length === 0 && document.elementFromPoint(y, C) === v || (i(!0), d(!0));
  }, [e, n, l, t]);
  return u.useEffect(() => {
    let v = e.current;
    if (!v || t === "none") return;
    function h() {
      let m = window.innerWidth - v.getBoundingClientRect().right;
      s(m >= Gs);
    }
    h();
    let b = setInterval(h, 1e3);
    return () => {
      clearInterval(b);
    };
  }, [e, t]), u.useEffect(() => {
    let v = r || document.activeElement === n.current;
    if (t === "none" || !v) return;
    let h = setTimeout(f, 0), b = setTimeout(f, 2e3), m = setTimeout(f, 5e3), g = setTimeout(() => {
      d(!0);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(b), clearTimeout(m), clearTimeout(g);
    };
  }, [n, r, t, f]), { hasPWMBadge: o, willPushPWMBadge: p, PWM_BADGE_SPACE_WIDTH: Mv };
}
var qs = u.createContext({}), Ys = u.forwardRef((e, n) => {
  var t = e, { value: r, onChange: o, maxLength: i, textAlign: a = "left", pattern: s, placeholder: l, inputMode: d = "numeric", onComplete: p, pushPasswordManagerStrategy: f = "increase-width", pasteTransformer: v, containerClassName: h, noScriptCSSFallback: b = Dv, render: m, children: g } = t, y = Rv(t, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), C, S, E, w, N;
  let [A, j] = u.useState(typeof y.defaultValue == "string" ? y.defaultValue : ""), I = r ?? A, B = Pv(I), X = u.useCallback((ee) => {
    o?.(ee), j(ee);
  }, [o]), q = u.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), U = u.useRef(null), H = u.useRef(null), J = u.useRef({ value: I, onChange: X, isIOS: typeof window < "u" && ((S = (C = window?.CSS) == null ? void 0 : C.supports) == null ? void 0 : S.call(C, "-webkit-touch-callout", "none")) }), $ = u.useRef({ prev: [(E = U.current) == null ? void 0 : E.selectionStart, (w = U.current) == null ? void 0 : w.selectionEnd, (N = U.current) == null ? void 0 : N.selectionDirection] });
  u.useImperativeHandle(n, () => U.current, []), u.useEffect(() => {
    let ee = U.current, oe = H.current;
    if (!ee || !oe) return;
    J.current.value !== ee.value && J.current.onChange(ee.value), $.current.prev = [ee.selectionStart, ee.selectionEnd, ee.selectionDirection];
    function be() {
      if (document.activeElement !== ee) {
        P(null), O(null);
        return;
      }
      let fe = ee.selectionStart, Ce = ee.selectionEnd, yt = ee.selectionDirection, Pe = ee.maxLength, Ge = ee.value, z = $.current.prev, te = -1, de = -1, ve;
      if (Ge.length !== 0 && fe !== null && Ce !== null) {
        let Lt = fe === Ce, Ft = fe === Ge.length && Ge.length < Pe;
        if (Lt && !Ft) {
          let Te = fe;
          if (Te === 0) te = 0, de = 1, ve = "forward";
          else if (Te === Pe) te = Te - 1, de = Te, ve = "backward";
          else if (Pe > 1 && Ge.length > 1) {
            let et = 0;
            if (z[0] !== null && z[1] !== null) {
              ve = Te < z[1] ? "backward" : "forward";
              let zt = z[0] === z[1] && z[0] < Pe;
              ve === "backward" && !zt && (et = -1);
            }
            te = et + Te, de = et + Te + 1;
          }
        }
        te !== -1 && de !== -1 && te !== de && U.current.setSelectionRange(te, de, ve);
      }
      let ke = te !== -1 ? te : fe, Je = de !== -1 ? de : Ce, Qe = ve ?? yt;
      P(ke), O(Je), $.current.prev = [ke, Je, Qe];
    }
    if (document.addEventListener("selectionchange", be, { capture: !0 }), be(), document.activeElement === ee && _(!0), !document.getElementById("input-otp-style")) {
      let fe = document.createElement("style");
      if (fe.id = "input-otp-style", document.head.appendChild(fe), fe.sheet) {
        let Ce = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        Ht(fe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), Ht(fe.sheet, `[data-input-otp]:autofill { ${Ce} }`), Ht(fe.sheet, `[data-input-otp]:-webkit-autofill { ${Ce} }`), Ht(fe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Ht(fe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let ge = () => {
      oe && oe.style.setProperty("--root-height", `${ee.clientHeight}px`);
    };
    ge();
    let Ee = new ResizeObserver(ge);
    return Ee.observe(ee), () => {
      document.removeEventListener("selectionchange", be, { capture: !0 }), Ee.disconnect();
    };
  }, []);
  let [Q, R] = u.useState(!1), [T, _] = u.useState(!1), [x, P] = u.useState(null), [D, O] = u.useState(null);
  u.useEffect(() => {
    jv(() => {
      var ee, oe, be, ge;
      (ee = U.current) == null || ee.dispatchEvent(new Event("input"));
      let Ee = (oe = U.current) == null ? void 0 : oe.selectionStart, fe = (be = U.current) == null ? void 0 : be.selectionEnd, Ce = (ge = U.current) == null ? void 0 : ge.selectionDirection;
      Ee !== null && fe !== null && (P(Ee), O(fe), $.current.prev = [Ee, fe, Ce]);
    });
  }, [I, T]), u.useEffect(() => {
    B !== void 0 && I !== B && B.length < i && I.length === i && p?.(I);
  }, [i, p, B, I]);
  let G = Tv({ containerRef: H, inputRef: U, pushPasswordManagerStrategy: f, isFocused: T }), W = u.useCallback((ee) => {
    let oe = ee.currentTarget.value.slice(0, i);
    if (oe.length > 0 && q && !q.test(oe)) {
      ee.preventDefault();
      return;
    }
    typeof B == "string" && oe.length < B.length && document.dispatchEvent(new Event("selectionchange")), X(oe);
  }, [i, X, B, q]), k = u.useCallback(() => {
    var ee;
    if (U.current) {
      let oe = Math.min(U.current.value.length, i - 1), be = U.current.value.length;
      (ee = U.current) == null || ee.setSelectionRange(oe, be), P(oe), O(be);
    }
    _(!0);
  }, [i]), V = u.useCallback((ee) => {
    var oe, be;
    let ge = U.current;
    if (!v && (!J.current.isIOS || !ee.clipboardData || !ge)) return;
    let Ee = ee.clipboardData.getData("text/plain"), fe = v ? v(Ee) : Ee;
    ee.preventDefault();
    let Ce = (oe = U.current) == null ? void 0 : oe.selectionStart, yt = (be = U.current) == null ? void 0 : be.selectionEnd, Pe = (Ce !== yt ? I.slice(0, Ce) + fe + I.slice(yt) : I.slice(0, Ce) + fe + I.slice(Ce)).slice(0, i);
    if (Pe.length > 0 && q && !q.test(Pe)) return;
    ge.value = Pe, X(Pe);
    let Ge = Math.min(Pe.length, i - 1), z = Pe.length;
    ge.setSelectionRange(Ge, z), P(Ge), O(z);
  }, [i, X, q, I]), Z = u.useMemo(() => ({ position: "relative", cursor: y.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [y.disabled]), F = u.useMemo(() => ({ position: "absolute", inset: 0, width: G.willPushPWMBadge ? `calc(100% + ${G.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: G.willPushPWMBadge ? `inset(0 ${G.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: a, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [G.PWM_BADGE_SPACE_WIDTH, G.willPushPWMBadge, a]), re = u.useMemo(() => u.createElement("input", _v(kv({ autoComplete: y.autoComplete || "one-time-code" }, y), { "data-input-otp": !0, "data-input-otp-placeholder-shown": I.length === 0 || void 0, "data-input-otp-mss": x, "data-input-otp-mse": D, inputMode: d, pattern: q?.source, "aria-placeholder": l, style: F, maxLength: i, value: I, ref: U, onPaste: (ee) => {
    var oe;
    V(ee), (oe = y.onPaste) == null || oe.call(y, ee);
  }, onChange: W, onMouseOver: (ee) => {
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
  } })), [W, k, V, d, F, i, D, x, y, q?.source, I]), M = u.useMemo(() => ({ slots: Array.from({ length: i }).map((ee, oe) => {
    var be;
    let ge = T && x !== null && D !== null && (x === D && oe === x || oe >= x && oe < D), Ee = I[oe] !== void 0 ? I[oe] : null, fe = I[0] !== void 0 ? null : (be = l?.[oe]) != null ? be : null;
    return { char: Ee, placeholderChar: fe, isActive: ge, hasFakeCaret: ge && Ee === null };
  }), isFocused: T, isHovering: !y.disabled && Q }), [T, Q, i, D, x, y.disabled, I]), pe = u.useMemo(() => m ? m(M) : u.createElement(qs.Provider, { value: M }, g), [g, M, m]);
  return u.createElement(u.Fragment, null, b !== null && u.createElement("noscript", null, u.createElement("style", null, b)), u.createElement("div", { ref: H, "data-input-otp-container": !0, style: Z, className: h }, pe, u.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, re)));
});
Ys.displayName = "Input";
function Ht(e, n) {
  try {
    e.insertRule(n);
  } catch {
    console.error("input-otp could not insert CSS rule:", n);
  }
}
var Dv = `
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
function xb({
  className: e,
  containerClassName: n,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    Ys,
    {
      "data-slot": "input-otp",
      containerClassName: L(
        "flex items-center gap-2 has-disabled:opacity-50",
        n
      ),
      className: L("disabled:cursor-not-allowed", e),
      ...t
    }
  );
}
function bb({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: L("flex items-center gap-2", e),
      ...n
    }
  );
}
function yb({
  index: e,
  className: n,
  ...t
}) {
  const r = Br(qs), { char: o, hasFakeCaret: i, isActive: a } = r?.slots[e] ?? {};
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": a,
      className: L(
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
        i && /* @__PURE__ */ c.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ c.jsx("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function wb({ ...e }) {
  return /* @__PURE__ */ c.jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ c.jsx(sf, {}) });
}
function Ks({ size: e = 48, className: n, ...t }) {
  const r = typeof e == "number" ? `${e}` : e, o = typeof t["aria-label"] == "string";
  return /* @__PURE__ */ c.jsxs(
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
function Cb({
  size: e = 32,
  className: n,
  ...t
}) {
  return /* @__PURE__ */ c.jsxs("div", { className: L("inline-flex items-center gap-2", n), ...t, children: [
    /* @__PURE__ */ c.jsx(Ks, { size: e }),
    /* @__PURE__ */ c.jsx("span", { className: "font-sans text-base font-normal leading-none text-white", children: "MercySeat" })
  ] });
}
function Nv(e) {
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
function Iv(e) {
  return ["mp4", "webm", "ogg", "mov", "m4v"].includes(e) ? `video/${e === "mov" ? "quicktime" : e}` : ["mp3", "wav", "ogg", "aac", "flac", "m4a"].includes(e) ? `audio/${e === "mp3" ? "mpeg" : e === "m4a" ? "mp4" : e}` : null;
}
function Lv(e) {
  const n = {};
  for (const t of e) {
    const r = t.toLowerCase().replace(/^\./, ""), o = Iv(r);
    o && (n[o] ??= [], n[o].push(`.${r}`));
  }
  return n;
}
function Fv({ extensions: e, placeholder: n, onDropFile: t }) {
  const r = rt(() => Lv(e), [e]), o = ye(
    async (p) => {
      const f = p[0] || null;
      if (f && !(!f.type.startsWith("video/") && !f.type.startsWith("audio/")))
        try {
          const v = await Nv(f);
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
  ), { getRootProps: i, getInputProps: a, isDragActive: s, fileRejections: l } = Oo({
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
        ...i(),
        className: L(
          "relative flex flex-col items-center justify-center w-full min-h-38.5 border border-gray-50 rounded-[0.625rem] cursor-pointer transition-colors bg-white",
          s && "border-blue-hepatica-600"
        ),
        children: [
          /* @__PURE__ */ c.jsx("input", { ...a() }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ c.jsx("div", { className: "size-12 flex items-center justify-center rounded-full bg-gray-25 mb-4", children: /* @__PURE__ */ c.jsx(Cs, { className: "size-6 text-blue-hepatica-600" }) }),
            /* @__PURE__ */ c.jsx("p", { className: "mb-2 text-sm text-gray-700 font-medium", children: "Click to upload or drag and drop" }),
            !!n && /* @__PURE__ */ c.jsx("p", { className: "text-xs text-gray-500 text-center", children: n })
          ] })
        ]
      }
    ),
    d.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "space-y-1", children: d.map((p, f) => /* @__PURE__ */ c.jsx("p", { className: "text-sm text-bright-red-600", children: p }, f)) })
  ] });
}
function zv({ file: e, onChange: n }) {
  const t = ye(() => {
    n(null);
  }, [n]), r = e.type.startsWith("video/") ? "Video" : "Audio";
  return /* @__PURE__ */ c.jsxs("div", { className: "w-full p-4 flex justify-between items-center bg-white border border-gray-50 rounded-lg", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ c.jsx("div", { className: "size-10 bg-gray-25 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ c.jsx(Cs, { className: "size-6 text-blue-hepatica-600" }) }),
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
        children: /* @__PURE__ */ c.jsx(lf, { className: "size-4 text-bright-red-600" })
      }
    )
  ] });
}
function Sb({
  accepts: e,
  onChange: n,
  value: t,
  placeholder: r = ""
}) {
  return t ? /* @__PURE__ */ c.jsx(zv, { file: t, onChange: n }) : /* @__PURE__ */ c.jsx(
    Fv,
    {
      extensions: e,
      onDropFile: n,
      placeholder: r
    }
  );
}
function Eb({
  active: e,
  children: n,
  collapsed: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ c.jsx(
    Xn,
    {
      className: L(
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
function ia(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
function To(e) {
  const n = e + "CollectionProvider", [t, r] = at(n), [o, i] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (m) => {
    const { scope: g, children: y } = m, C = ie.useRef(null), S = ie.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: g, itemMap: S, collectionRef: C, children: y });
  };
  a.displayName = n;
  const s = e + "CollectionSlot", l = /* @__PURE__ */ jt(s), d = ie.forwardRef(
    (m, g) => {
      const { scope: y, children: C } = m, S = i(s, y), E = ue(g, S.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: E, children: C });
    }
  );
  d.displayName = s;
  const p = e + "CollectionItemSlot", f = "data-radix-collection-item", v = /* @__PURE__ */ jt(p), h = ie.forwardRef(
    (m, g) => {
      const { scope: y, children: C, ...S } = m, E = ie.useRef(null), w = ue(g, E), N = i(p, y);
      return ie.useEffect(() => (N.itemMap.set(E, { ref: E, ...S }), () => void N.itemMap.delete(E))), /* @__PURE__ */ c.jsx(v, { [f]: "", ref: w, children: C });
    }
  );
  h.displayName = p;
  function b(m) {
    const g = i(e + "CollectionConsumer", m);
    return ie.useCallback(() => {
      const C = g.collectionRef.current;
      if (!C) return [];
      const S = Array.from(C.querySelectorAll(`[${f}]`));
      return Array.from(g.itemMap.values()).sort(
        (N, A) => S.indexOf(N.ref.current) - S.indexOf(A.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: a, Slot: d, ItemSlot: h },
    b,
    r
  ];
}
var $v = u.createContext(void 0);
function Do(e) {
  const n = u.useContext($v);
  return e || n || "ltr";
}
const Wv = ["top", "right", "bottom", "left"], ot = Math.min, Ae = Math.max, Dn = Math.round, wn = Math.floor, Ve = (e) => ({
  x: e,
  y: e
}), Vv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Bv = {
  start: "end",
  end: "start"
};
function eo(e, n, t) {
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
function No(e) {
  return e === "x" ? "y" : "x";
}
function Io(e) {
  return e === "y" ? "height" : "width";
}
const Hv = /* @__PURE__ */ new Set(["top", "bottom"]);
function We(e) {
  return Hv.has(Ze(e)) ? "y" : "x";
}
function Lo(e) {
  return No(We(e));
}
function Uv(e, n, t) {
  t === void 0 && (t = !1);
  const r = Dt(e), o = Lo(e), i = Io(o);
  let a = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[i] > n.floating[i] && (a = Nn(a)), [a, Nn(a)];
}
function Gv(e) {
  const n = Nn(e);
  return [to(e), n, to(n)];
}
function to(e) {
  return e.replace(/start|end/g, (n) => Bv[n]);
}
const aa = ["left", "right"], sa = ["right", "left"], qv = ["top", "bottom"], Yv = ["bottom", "top"];
function Kv(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? sa : aa : n ? aa : sa;
    case "left":
    case "right":
      return n ? qv : Yv;
    default:
      return [];
  }
}
function Zv(e, n, t, r) {
  const o = Dt(e);
  let i = Kv(Ze(e), t === "start", r);
  return o && (i = i.map((a) => a + "-" + o), n && (i = i.concat(i.map(to)))), i;
}
function Nn(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Vv[n]);
}
function Xv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zs(e) {
  return typeof e != "number" ? Xv(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function In(e) {
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
function ca(e, n, t) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = We(n), a = Lo(n), s = Io(a), l = Ze(n), d = i === "y", p = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, v = r[s] / 2 - o[s] / 2;
  let h;
  switch (l) {
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
const Jv = async (e, n, t) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = t, s = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let d = await a.getElementRects({
    reference: e,
    floating: n,
    strategy: o
  }), {
    x: p,
    y: f
  } = ca(d, r, l), v = r, h = {}, b = 0;
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
    }, w && b <= 50 && (b++, typeof w == "object" && (w.placement && (v = w.placement), w.rects && (d = w.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: n,
      strategy: o
    }) : w.rects), {
      x: p,
      y: f
    } = ca(d, v, l)), m = -1);
  }
  return {
    x: p,
    y: f,
    placement: v,
    strategy: o,
    middlewareData: h
  };
};
async function Zt(e, n) {
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
    boundary: d = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: f = "floating",
    altBoundary: v = !1,
    padding: h = 0
  } = Ke(n, e), b = Zs(h), g = s[v ? f === "floating" ? "reference" : "floating" : f], y = In(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(g))) == null || t ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: p,
    strategy: l
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
  }, w = In(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: S,
    strategy: l
  }) : C);
  return {
    top: (y.top - w.top + b.top) / E.y,
    bottom: (w.bottom - y.bottom + b.bottom) / E.y,
    left: (y.left - w.left + b.left) / E.x,
    right: (w.right - y.right + b.right) / E.x
  };
}
const Qv = (e) => ({
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
      element: d,
      padding: p = 0
    } = Ke(e, n) || {};
    if (d == null)
      return {};
    const f = Zs(p), v = {
      x: t,
      y: r
    }, h = Lo(o), b = Io(h), m = await a.getDimensions(d), g = h === "y", y = g ? "top" : "left", C = g ? "bottom" : "right", S = g ? "clientHeight" : "clientWidth", E = i.reference[b] + i.reference[h] - v[h] - i.floating[b], w = v[h] - i.reference[h], N = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let A = N ? N[S] : 0;
    (!A || !await (a.isElement == null ? void 0 : a.isElement(N))) && (A = s.floating[S] || i.floating[b]);
    const j = E / 2 - w / 2, I = A / 2 - m[b] / 2 - 1, B = ot(f[y], I), X = ot(f[C], I), q = B, U = A - m[b] - X, H = A / 2 - m[b] / 2 + j, J = eo(q, H, U), $ = !l.arrow && Dt(o) != null && H !== J && i.reference[b] / 2 - (H < q ? B : X) - m[b] / 2 < 0, Q = $ ? H < q ? H - q : H - U : 0;
    return {
      [h]: v[h] + Q,
      data: {
        [h]: J,
        centerOffset: H - J - Q,
        ...$ && {
          alignmentOffset: Q
        }
      },
      reset: $
    };
  }
}), eh = function(e) {
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
        elements: d
      } = n, {
        mainAxis: p = !0,
        crossAxis: f = !0,
        fallbackPlacements: v,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: m = !0,
        ...g
      } = Ke(e, n);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const y = Ze(o), C = We(s), S = Ze(s) === s, E = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), w = v || (S || !m ? [Nn(s)] : Gv(s)), N = b !== "none";
      !v && N && w.push(...Zv(s, m, b, E));
      const A = [s, ...w], j = await Zt(n, g), I = [];
      let B = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (p && I.push(j[y]), f) {
        const H = Uv(o, a, E);
        I.push(j[H[0]], j[H[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: I
      }], !I.every((H) => H <= 0)) {
        var X, q;
        const H = (((X = i.flip) == null ? void 0 : X.index) || 0) + 1, J = A[H];
        if (J && (!(f === "alignment" ? C !== We(J) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((R) => We(R.placement) === C ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: H,
              overflows: B
            },
            reset: {
              placement: J
            }
          };
        let $ = (q = B.filter((Q) => Q.overflows[0] <= 0).sort((Q, R) => Q.overflows[1] - R.overflows[1])[0]) == null ? void 0 : q.placement;
        if (!$)
          switch (h) {
            case "bestFit": {
              var U;
              const Q = (U = B.filter((R) => {
                if (N) {
                  const T = We(R.placement);
                  return T === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  T === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((T) => T > 0).reduce((T, _) => T + _, 0)]).sort((R, T) => R[1] - T[1])[0]) == null ? void 0 : U[0];
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
function la(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function da(e) {
  return Wv.some((n) => e[n] >= 0);
}
const th = function(e) {
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
          const i = await Zt(n, {
            ...o,
            elementContext: "reference"
          }), a = la(i, t.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: da(a)
            }
          };
        }
        case "escaped": {
          const i = await Zt(n, {
            ...o,
            altBoundary: !0
          }), a = la(i, t.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: da(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Xs = /* @__PURE__ */ new Set(["left", "top"]);
async function nh(e, n) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Ze(t), s = Dt(t), l = We(t) === "y", d = Xs.has(a) ? -1 : 1, p = i && l ? -1 : 1, f = Ke(n, e);
  let {
    mainAxis: v,
    crossAxis: h,
    alignmentAxis: b
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof b == "number" && (h = s === "end" ? b * -1 : b), l ? {
    x: h * p,
    y: v * d
  } : {
    x: v * d,
    y: h * p
  };
}
const rh = function(e) {
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
      } = n, l = await nh(n, e);
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
}, oh = function(e) {
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
        ...l
      } = Ke(e, n), d = {
        x: t,
        y: r
      }, p = await Zt(n, l), f = We(Ze(o)), v = No(f);
      let h = d[v], b = d[f];
      if (i) {
        const g = v === "y" ? "top" : "left", y = v === "y" ? "bottom" : "right", C = h + p[g], S = h - p[y];
        h = eo(C, h, S);
      }
      if (a) {
        const g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", C = b + p[g], S = b - p[y];
        b = eo(C, b, S);
      }
      const m = s.fn({
        ...n,
        [v]: h,
        [f]: b
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
}, ih = function(e) {
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
        crossAxis: d = !0
      } = Ke(e, n), p = {
        x: t,
        y: r
      }, f = We(o), v = No(f);
      let h = p[v], b = p[f];
      const m = Ke(s, n), g = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (l) {
        const S = v === "y" ? "height" : "width", E = i.reference[v] - i.floating[S] + g.mainAxis, w = i.reference[v] + i.reference[S] - g.mainAxis;
        h < E ? h = E : h > w && (h = w);
      }
      if (d) {
        var y, C;
        const S = v === "y" ? "width" : "height", E = Xs.has(Ze(o)), w = i.reference[f] - i.floating[S] + (E && ((y = a.offset) == null ? void 0 : y[f]) || 0) + (E ? 0 : g.crossAxis), N = i.reference[f] + i.reference[S] + (E ? 0 : ((C = a.offset) == null ? void 0 : C[f]) || 0) - (E ? g.crossAxis : 0);
        b < w ? b = w : b > N && (b = N);
      }
      return {
        [v]: h,
        [f]: b
      };
    }
  };
}, ah = function(e) {
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
        ...d
      } = Ke(e, n), p = await Zt(n, d), f = Ze(o), v = Dt(o), h = We(o) === "y", {
        width: b,
        height: m
      } = i.floating;
      let g, y;
      f === "top" || f === "bottom" ? (g = f, y = v === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = f, g = v === "end" ? "top" : "bottom");
      const C = m - p.top - p.bottom, S = b - p.left - p.right, E = ot(m - p[g], C), w = ot(b - p[y], S), N = !n.middlewareData.shift;
      let A = E, j = w;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (j = S), (r = n.middlewareData.shift) != null && r.enabled.y && (A = C), N && !v) {
        const B = Ae(p.left, 0), X = Ae(p.right, 0), q = Ae(p.top, 0), U = Ae(p.bottom, 0);
        h ? j = b - 2 * (B !== 0 || X !== 0 ? B + X : Ae(p.left, p.right)) : A = m - 2 * (q !== 0 || U !== 0 ? q + U : Ae(p.top, p.bottom));
      }
      await l({
        ...n,
        availableWidth: j,
        availableHeight: A
      });
      const I = await a.getDimensions(s.floating);
      return b !== I.width || m !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function nr() {
  return typeof window < "u";
}
function Nt(e) {
  return Js(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Me(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Ue(e) {
  var n;
  return (n = (Js(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function Js(e) {
  return nr() ? e instanceof Node || e instanceof Me(e).Node : !1;
}
function Ne(e) {
  return nr() ? e instanceof Element || e instanceof Me(e).Element : !1;
}
function He(e) {
  return nr() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}
function ua(e) {
  return !nr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot;
}
const sh = /* @__PURE__ */ new Set(["inline", "contents"]);
function nn(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: r,
    display: o
  } = Ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !sh.has(o);
}
const ch = /* @__PURE__ */ new Set(["table", "td", "th"]);
function lh(e) {
  return ch.has(Nt(e));
}
const dh = [":popover-open", ":modal"];
function rr(e) {
  return dh.some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
const uh = ["transform", "translate", "scale", "rotate", "perspective"], ph = ["transform", "translate", "scale", "rotate", "perspective", "filter"], fh = ["paint", "layout", "strict", "content"];
function Fo(e) {
  const n = zo(), t = Ne(e) ? Ie(e) : e;
  return uh.some((r) => t[r] ? t[r] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ph.some((r) => (t.willChange || "").includes(r)) || fh.some((r) => (t.contain || "").includes(r));
}
function mh(e) {
  let n = it(e);
  for (; He(n) && !Mt(n); ) {
    if (Fo(n))
      return n;
    if (rr(n))
      return null;
    n = it(n);
  }
  return null;
}
function zo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const vh = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Mt(e) {
  return vh.has(Nt(e));
}
function Ie(e) {
  return Me(e).getComputedStyle(e);
}
function or(e) {
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
    ua(e) && e.host || // Fallback.
    Ue(e)
  );
  return ua(n) ? n.host : n;
}
function Qs(e) {
  const n = it(e);
  return Mt(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : He(n) && nn(n) ? n : Qs(n);
}
function Xt(e, n, t) {
  var r;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const o = Qs(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Me(o);
  if (i) {
    const s = no(a);
    return n.concat(a, a.visualViewport || [], nn(o) ? o : [], s && t ? Xt(s) : []);
  }
  return n.concat(o, Xt(o, [], t));
}
function no(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ec(e) {
  const n = Ie(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const o = He(e), i = o ? e.offsetWidth : t, a = o ? e.offsetHeight : r, s = Dn(t) !== i || Dn(r) !== a;
  return s && (t = i, r = a), {
    width: t,
    height: r,
    $: s
  };
}
function $o(e) {
  return Ne(e) ? e : e.contextElement;
}
function Rt(e) {
  const n = $o(e);
  if (!He(n))
    return Ve(1);
  const t = n.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ec(n);
  let a = (i ? Dn(t.width) : t.width) / r, s = (i ? Dn(t.height) : t.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const hh = /* @__PURE__ */ Ve(0);
function tc(e) {
  const n = Me(e);
  return !zo() || !n.visualViewport ? hh : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function gh(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Me(e) ? !1 : n;
}
function mt(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), i = $o(e);
  let a = Ve(1);
  n && (r ? Ne(r) && (a = Rt(r)) : a = Rt(e));
  const s = gh(i, t, r) ? tc(i) : Ve(0);
  let l = (o.left + s.x) / a.x, d = (o.top + s.y) / a.y, p = o.width / a.x, f = o.height / a.y;
  if (i) {
    const v = Me(i), h = r && Ne(r) ? Me(r) : r;
    let b = v, m = no(b);
    for (; m && r && h !== b; ) {
      const g = Rt(m), y = m.getBoundingClientRect(), C = Ie(m), S = y.left + (m.clientLeft + parseFloat(C.paddingLeft)) * g.x, E = y.top + (m.clientTop + parseFloat(C.paddingTop)) * g.y;
      l *= g.x, d *= g.y, p *= g.x, f *= g.y, l += S, d += E, b = Me(m), m = no(b);
    }
  }
  return In({
    width: p,
    height: f,
    x: l,
    y: d
  });
}
function ir(e, n) {
  const t = or(e).scrollLeft;
  return n ? n.left + t : mt(Ue(e)).left + t;
}
function nc(e, n) {
  const t = e.getBoundingClientRect(), r = t.left + n.scrollLeft - ir(e, t), o = t.top + n.scrollTop;
  return {
    x: r,
    y: o
  };
}
function xh(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Ue(r), s = n ? rr(n.floating) : !1;
  if (r === a || s && i)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Ve(1);
  const p = Ve(0), f = He(r);
  if ((f || !f && !i) && ((Nt(r) !== "body" || nn(a)) && (l = or(r)), He(r))) {
    const h = mt(r);
    d = Rt(r), p.x = h.x + r.clientLeft, p.y = h.y + r.clientTop;
  }
  const v = a && !f && !i ? nc(a, l) : Ve(0);
  return {
    width: t.width * d.x,
    height: t.height * d.y,
    x: t.x * d.x - l.scrollLeft * d.x + p.x + v.x,
    y: t.y * d.y - l.scrollTop * d.y + p.y + v.y
  };
}
function bh(e) {
  return Array.from(e.getClientRects());
}
function yh(e) {
  const n = Ue(e), t = or(e), r = e.ownerDocument.body, o = Ae(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), i = Ae(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -t.scrollLeft + ir(e);
  const s = -t.scrollTop;
  return Ie(r).direction === "rtl" && (a += Ae(n.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
const pa = 25;
function wh(e, n) {
  const t = Me(e), r = Ue(e), o = t.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const p = zo();
    (!p || p && n === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  const d = ir(r);
  if (d <= 0) {
    const p = r.ownerDocument, f = p.body, v = getComputedStyle(f), h = p.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0, b = Math.abs(r.clientWidth - f.clientWidth - h);
    b <= pa && (i -= b);
  } else d <= pa && (i += d);
  return {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
const Ch = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Sh(e, n) {
  const t = mt(e, !0, n === "fixed"), r = t.top + e.clientTop, o = t.left + e.clientLeft, i = He(e) ? Rt(e) : Ve(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, l = o * i.x, d = r * i.y;
  return {
    width: a,
    height: s,
    x: l,
    y: d
  };
}
function fa(e, n, t) {
  let r;
  if (n === "viewport")
    r = wh(e, t);
  else if (n === "document")
    r = yh(Ue(e));
  else if (Ne(n))
    r = Sh(n, t);
  else {
    const o = tc(e);
    r = {
      x: n.x - o.x,
      y: n.y - o.y,
      width: n.width,
      height: n.height
    };
  }
  return In(r);
}
function rc(e, n) {
  const t = it(e);
  return t === n || !Ne(t) || Mt(t) ? !1 : Ie(t).position === "fixed" || rc(t, n);
}
function Eh(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let r = Xt(e, [], !1).filter((s) => Ne(s) && Nt(s) !== "body"), o = null;
  const i = Ie(e).position === "fixed";
  let a = i ? it(e) : e;
  for (; Ne(a) && !Mt(a); ) {
    const s = Ie(a), l = Fo(a);
    !l && s.position === "fixed" && (o = null), (i ? !l && !o : !l && s.position === "static" && !!o && Ch.has(o.position) || nn(a) && !l && rc(e, a)) ? r = r.filter((p) => p !== a) : o = s, a = it(a);
  }
  return n.set(e, r), r;
}
function kh(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...t === "clippingAncestors" ? rr(n) ? [] : Eh(n, this._c) : [].concat(t), r], s = a[0], l = a.reduce((d, p) => {
    const f = fa(n, p, o);
    return d.top = Ae(f.top, d.top), d.right = ot(f.right, d.right), d.bottom = ot(f.bottom, d.bottom), d.left = Ae(f.left, d.left), d;
  }, fa(n, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function _h(e) {
  const {
    width: n,
    height: t
  } = ec(e);
  return {
    width: n,
    height: t
  };
}
function Rh(e, n, t) {
  const r = He(n), o = Ue(n), i = t === "fixed", a = mt(e, !0, i, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ve(0);
  function d() {
    l.x = ir(o);
  }
  if (r || !r && !i)
    if ((Nt(n) !== "body" || nn(o)) && (s = or(n)), r) {
      const h = mt(n, !0, i, n);
      l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
    } else o && d();
  i && !r && o && d();
  const p = o && !r && !i ? nc(o, s) : Ve(0), f = a.left + s.scrollLeft - l.x - p.x, v = a.top + s.scrollTop - l.y - p.y;
  return {
    x: f,
    y: v,
    width: a.width,
    height: a.height
  };
}
function zr(e) {
  return Ie(e).position === "static";
}
function ma(e, n) {
  if (!He(e) || Ie(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Ue(e) === t && (t = t.ownerDocument.body), t;
}
function oc(e, n) {
  const t = Me(e);
  if (rr(e))
    return t;
  if (!He(e)) {
    let o = it(e);
    for (; o && !Mt(o); ) {
      if (Ne(o) && !zr(o))
        return o;
      o = it(o);
    }
    return t;
  }
  let r = ma(e, n);
  for (; r && lh(r) && zr(r); )
    r = ma(r, n);
  return r && Mt(r) && zr(r) && !Fo(r) ? t : r || mh(e) || t;
}
const jh = async function(e) {
  const n = this.getOffsetParent || oc, t = this.getDimensions, r = await t(e.floating);
  return {
    reference: Rh(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Ph(e) {
  return Ie(e).direction === "rtl";
}
const Ah = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xh,
  getDocumentElement: Ue,
  getClippingRect: kh,
  getOffsetParent: oc,
  getElementRects: jh,
  getClientRects: bh,
  getDimensions: _h,
  getScale: Rt,
  isElement: Ne,
  isRTL: Ph
};
function ic(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function Mh(e, n) {
  let t = null, r;
  const o = Ue(e);
  function i() {
    var s;
    clearTimeout(r), (s = t) == null || s.disconnect(), t = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const d = e.getBoundingClientRect(), {
      left: p,
      top: f,
      width: v,
      height: h
    } = d;
    if (s || n(), !v || !h)
      return;
    const b = wn(f), m = wn(o.clientWidth - (p + v)), g = wn(o.clientHeight - (f + h)), y = wn(p), S = {
      rootMargin: -b + "px " + -m + "px " + -g + "px " + -y + "px",
      threshold: Ae(0, ot(1, l)) || 1
    };
    let E = !0;
    function w(N) {
      const A = N[0].intersectionRatio;
      if (A !== l) {
        if (!E)
          return a();
        A ? a(!1, A) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !ic(d, e.getBoundingClientRect()) && a(), E = !1;
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
function Oh(e, n, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = $o(e), p = o || i ? [...d ? Xt(d) : [], ...Xt(n)] : [];
  p.forEach((y) => {
    o && y.addEventListener("scroll", t, {
      passive: !0
    }), i && y.addEventListener("resize", t);
  });
  const f = d && s ? Mh(d, t) : null;
  let v = -1, h = null;
  a && (h = new ResizeObserver((y) => {
    let [C] = y;
    C && C.target === d && h && (h.unobserve(n), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var S;
      (S = h) == null || S.observe(n);
    })), t();
  }), d && !l && h.observe(d), h.observe(n));
  let b, m = l ? mt(e) : null;
  l && g();
  function g() {
    const y = mt(e);
    m && !ic(m, y) && t(), m = y, b = requestAnimationFrame(g);
  }
  return t(), () => {
    var y;
    p.forEach((C) => {
      o && C.removeEventListener("scroll", t), i && C.removeEventListener("resize", t);
    }), f?.(), (y = h) == null || y.disconnect(), h = null, l && cancelAnimationFrame(b);
  };
}
const Th = rh, Dh = oh, Nh = eh, Ih = ah, Lh = th, va = Qv, Fh = ih, zh = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ah,
    ...t
  }, i = {
    ...o.platform,
    _c: r
  };
  return Jv(e, n, {
    ...o,
    platform: i
  });
};
var $h = typeof document < "u", Wh = function() {
}, _n = $h ? Wl : Wh;
function Ln(e, n) {
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
        if (!Ln(e[r], n[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Ln(e[i], n[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function ac(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ha(e, n) {
  const t = ac(e);
  return Math.round(n * t) / t;
}
function $r(e) {
  const n = u.useRef(e);
  return _n(() => {
    n.current = e;
  }), n;
}
function Vh(e) {
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
    open: d
  } = e, [p, f] = u.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [v, h] = u.useState(r);
  Ln(v, r) || h(r);
  const [b, m] = u.useState(null), [g, y] = u.useState(null), C = u.useCallback((R) => {
    R !== N.current && (N.current = R, m(R));
  }, []), S = u.useCallback((R) => {
    R !== A.current && (A.current = R, y(R));
  }, []), E = i || b, w = a || g, N = u.useRef(null), A = u.useRef(null), j = u.useRef(p), I = l != null, B = $r(l), X = $r(o), q = $r(d), U = u.useCallback(() => {
    if (!N.current || !A.current)
      return;
    const R = {
      placement: n,
      strategy: t,
      middleware: v
    };
    X.current && (R.platform = X.current), zh(N.current, A.current, R).then((T) => {
      const _ = {
        ...T,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: q.current !== !1
      };
      H.current && !Ln(j.current, _) && (j.current = _, Hn.flushSync(() => {
        f(_);
      }));
    });
  }, [v, n, t, X, q]);
  _n(() => {
    d === !1 && j.current.isPositioned && (j.current.isPositioned = !1, f((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [d]);
  const H = u.useRef(!1);
  _n(() => (H.current = !0, () => {
    H.current = !1;
  }), []), _n(() => {
    if (E && (N.current = E), w && (A.current = w), E && w) {
      if (B.current)
        return B.current(E, w, U);
      U();
    }
  }, [E, w, U, B, I]);
  const J = u.useMemo(() => ({
    reference: N,
    floating: A,
    setReference: C,
    setFloating: S
  }), [C, S]), $ = u.useMemo(() => ({
    reference: E,
    floating: w
  }), [E, w]), Q = u.useMemo(() => {
    const R = {
      position: t,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return R;
    const T = ha($.floating, p.x), _ = ha($.floating, p.y);
    return s ? {
      ...R,
      transform: "translate(" + T + "px, " + _ + "px)",
      ...ac($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: T,
      top: _
    };
  }, [t, s, $.floating, p.x, p.y]);
  return u.useMemo(() => ({
    ...p,
    update: U,
    refs: J,
    elements: $,
    floatingStyles: Q
  }), [p, U, J, $, Q]);
}
const Bh = (e) => {
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
      return r && n(r) ? r.current != null ? va({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? va({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
}, Hh = (e, n) => ({
  ...Th(e),
  options: [e, n]
}), Uh = (e, n) => ({
  ...Dh(e),
  options: [e, n]
}), Gh = (e, n) => ({
  ...Fh(e),
  options: [e, n]
}), qh = (e, n) => ({
  ...Nh(e),
  options: [e, n]
}), Yh = (e, n) => ({
  ...Ih(e),
  options: [e, n]
}), Kh = (e, n) => ({
  ...Lh(e),
  options: [e, n]
}), Zh = (e, n) => ({
  ...Bh(e),
  options: [e, n]
});
var Xh = "Arrow", sc = u.forwardRef((e, n) => {
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
sc.displayName = Xh;
var Jh = sc;
function Qh(e) {
  const [n, t] = u.useState(void 0);
  return _e(() => {
    if (e) {
      t({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, s;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, d = Array.isArray(l) ? l[0] : l;
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
var Wo = "Popper", [cc, ar] = at(Wo), [eg, lc] = cc(Wo), dc = (e) => {
  const { __scopePopper: n, children: t } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ c.jsx(eg, { scope: n, anchor: r, onAnchorChange: o, children: t });
};
dc.displayName = Wo;
var uc = "PopperAnchor", pc = u.forwardRef(
  (e, n) => {
    const { __scopePopper: t, virtualRef: r, ...o } = e, i = lc(uc, t), a = u.useRef(null), s = ue(n, a), l = u.useRef(null);
    return u.useEffect(() => {
      const d = l.current;
      l.current = r?.current || a.current, d !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(se.div, { ...o, ref: s });
  }
);
pc.displayName = uc;
var Vo = "PopperContent", [tg, ng] = cc(Vo), fc = u.forwardRef(
  (e, n) => {
    const {
      __scopePopper: t,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: d = [],
      collisionPadding: p = 0,
      sticky: f = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: b,
      ...m
    } = e, g = lc(Vo, t), [y, C] = u.useState(null), S = ue(n, (k) => C(k)), [E, w] = u.useState(null), N = Qh(E), A = N?.width ?? 0, j = N?.height ?? 0, I = r + (i !== "center" ? "-" + i : ""), B = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, X = Array.isArray(d) ? d : [d], q = X.length > 0, U = {
      padding: B,
      boundary: X.filter(og),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: q
    }, { refs: H, floatingStyles: J, placement: $, isPositioned: Q, middlewareData: R } = Vh({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...k) => Oh(...k, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Hh({ mainAxis: o + j, alignmentAxis: a }),
        l && Uh({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Gh() : void 0,
          ...U
        }),
        l && qh({ ...U }),
        Yh({
          ...U,
          apply: ({ elements: k, rects: V, availableWidth: Z, availableHeight: F }) => {
            const { width: re, height: M } = V.reference, pe = k.floating.style;
            pe.setProperty("--radix-popper-available-width", `${Z}px`), pe.setProperty("--radix-popper-available-height", `${F}px`), pe.setProperty("--radix-popper-anchor-width", `${re}px`), pe.setProperty("--radix-popper-anchor-height", `${M}px`);
          }
        }),
        E && Zh({ element: E, padding: s }),
        ig({ arrowWidth: A, arrowHeight: j }),
        v && Kh({ strategy: "referenceHidden", ...U })
      ]
    }), [T, _] = hc($), x = Be(b);
    _e(() => {
      Q && x?.();
    }, [Q, x]);
    const P = R.arrow?.x, D = R.arrow?.y, O = R.arrow?.centerOffset !== 0, [G, W] = u.useState();
    return _e(() => {
      y && W(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: H.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...J,
          transform: Q ? J.transform : "translate(0, -200%)",
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
          tg,
          {
            scope: t,
            placedSide: T,
            onArrowChange: w,
            arrowX: P,
            arrowY: D,
            shouldHideArrow: O,
            children: /* @__PURE__ */ c.jsx(
              se.div,
              {
                "data-side": T,
                "data-align": _,
                ...m,
                ref: S,
                style: {
                  ...m.style,
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
fc.displayName = Vo;
var mc = "PopperArrow", rg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, vc = u.forwardRef(function(n, t) {
  const { __scopePopper: r, ...o } = n, i = ng(mc, r), a = rg[i.placedSide];
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
          Jh,
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
vc.displayName = mc;
function og(e) {
  return e !== null;
}
var ig = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    const { placement: t, rects: r, middlewareData: o } = n, a = o.arrow?.centerOffset !== 0, s = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [d, p] = hc(t), f = { start: "0%", center: "50%", end: "100%" }[p], v = (o.arrow?.x ?? 0) + s / 2, h = (o.arrow?.y ?? 0) + l / 2;
    let b = "", m = "";
    return d === "bottom" ? (b = a ? f : `${v}px`, m = `${-l}px`) : d === "top" ? (b = a ? f : `${v}px`, m = `${r.floating.height + l}px`) : d === "right" ? (b = `${-l}px`, m = a ? f : `${h}px`) : d === "left" && (b = `${r.floating.width + l}px`, m = a ? f : `${h}px`), { data: { x: b, y: m } };
  }
});
function hc(e) {
  const [n, t = "center"] = e.split("-");
  return [n, t];
}
var gc = dc, xc = pc, bc = fc, yc = vc;
function ag(e) {
  const n = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
var wc = Object.freeze({
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
}), sg = "VisuallyHidden", cg = u.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(
    se.span,
    {
      ...e,
      ref: n,
      style: { ...wc, ...e.style }
    }
  )
);
cg.displayName = sg;
var lg = [" ", "Enter", "ArrowUp", "ArrowDown"], dg = [" ", "Enter"], vt = "Select", [sr, cr, ug] = To(vt), [It] = at(vt, [
  ug,
  ar
]), lr = ar(), [pg, ct] = It(vt), [fg, mg] = It(vt), Cc = (e) => {
  const {
    __scopeSelect: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: a,
    defaultValue: s,
    onValueChange: l,
    dir: d,
    name: p,
    autoComplete: f,
    disabled: v,
    required: h,
    form: b
  } = e, m = lr(n), [g, y] = u.useState(null), [C, S] = u.useState(null), [E, w] = u.useState(!1), N = Do(d), [A, j] = Yt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: vt
  }), [I, B] = Yt({
    prop: a,
    defaultProp: s,
    onChange: l,
    caller: vt
  }), X = u.useRef(null), q = g ? b || !!g.closest("form") : !0, [U, H] = u.useState(/* @__PURE__ */ new Set()), J = Array.from(U).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ c.jsx(gc, { ...m, children: /* @__PURE__ */ c.jsxs(
    pg,
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
      onValueChange: B,
      open: A,
      onOpenChange: j,
      dir: N,
      triggerPointerDownPosRef: X,
      disabled: v,
      children: [
        /* @__PURE__ */ c.jsx(sr.Provider, { scope: n, children: /* @__PURE__ */ c.jsx(
          fg,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback(($) => {
              H((Q) => new Set(Q).add($));
            }, []),
            onNativeOptionRemove: u.useCallback(($) => {
              H((Q) => {
                const R = new Set(Q);
                return R.delete($), R;
              });
            }, []),
            children: t
          }
        ) }),
        q ? /* @__PURE__ */ c.jsxs(
          qc,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: p,
            autoComplete: f,
            value: I,
            onChange: ($) => B($.target.value),
            disabled: v,
            form: b,
            children: [
              I === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(U)
            ]
          },
          J
        ) : null
      ]
    }
  ) });
};
Cc.displayName = vt;
var Sc = "SelectTrigger", Ec = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, disabled: r = !1, ...o } = e, i = lr(t), a = ct(Sc, t), s = a.disabled || r, l = ue(n, a.onTriggerChange), d = cr(t), p = u.useRef("touch"), [f, v, h] = Kc((m) => {
      const g = d().filter((S) => !S.disabled), y = g.find((S) => S.value === a.value), C = Zc(g, m, y);
      C !== void 0 && a.onValueChange(C.value);
    }), b = (m) => {
      s || (a.onOpenChange(!0), h()), m && (a.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(xc, { asChild: !0, ...i, children: /* @__PURE__ */ c.jsx(
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
        "data-placeholder": Yc(a.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: ne(o.onClick, (m) => {
          m.currentTarget.focus(), p.current !== "mouse" && b(m);
        }),
        onPointerDown: ne(o.onPointerDown, (m) => {
          p.current = m.pointerType;
          const g = m.target;
          g.hasPointerCapture(m.pointerId) && g.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (b(m), m.preventDefault());
        }),
        onKeyDown: ne(o.onKeyDown, (m) => {
          const g = f.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && v(m.key), !(g && m.key === " ") && lg.includes(m.key) && (b(), m.preventDefault());
        })
      }
    ) });
  }
);
Ec.displayName = Sc;
var kc = "SelectValue", _c = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, children: i, placeholder: a = "", ...s } = e, l = ct(kc, t), { onValueNodeHasChildrenChange: d } = l, p = i !== void 0, f = ue(n, l.onValueNodeChange);
    return _e(() => {
      d(p);
    }, [d, p]), /* @__PURE__ */ c.jsx(
      se.span,
      {
        ...s,
        ref: f,
        style: { pointerEvents: "none" },
        children: Yc(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: a }) : i
      }
    );
  }
);
_c.displayName = kc;
var vg = "SelectIcon", Rc = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(se.span, { "aria-hidden": !0, ...o, ref: n, children: r || "▼" });
  }
);
Rc.displayName = vg;
var hg = "SelectPortal", jc = (e) => /* @__PURE__ */ c.jsx(qn, { asChild: !0, ...e });
jc.displayName = hg;
var ht = "SelectContent", Pc = u.forwardRef(
  (e, n) => {
    const t = ct(ht, e.__scopeSelect), [r, o] = u.useState();
    if (_e(() => {
      o(new DocumentFragment());
    }, []), !t.open) {
      const i = r;
      return i ? Hn.createPortal(
        /* @__PURE__ */ c.jsx(Ac, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(sr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(Mc, { ...e, ref: n });
  }
);
Pc.displayName = ht;
var De = 10, [Ac, lt] = It(ht), gg = "SelectContentImpl", xg = /* @__PURE__ */ jt("SelectContent.RemoveScroll"), Mc = u.forwardRef(
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
      align: d,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: v,
      collisionPadding: h,
      sticky: b,
      hideWhenDetached: m,
      avoidCollisions: g,
      //
      ...y
    } = e, C = ct(ht, t), [S, E] = u.useState(null), [w, N] = u.useState(null), A = ue(n, (k) => E(k)), [j, I] = u.useState(null), [B, X] = u.useState(
      null
    ), q = cr(t), [U, H] = u.useState(!1), J = u.useRef(!1);
    u.useEffect(() => {
      if (S) return fo(S);
    }, [S]), po();
    const $ = u.useCallback(
      (k) => {
        const [V, ...Z] = q().map((M) => M.ref.current), [F] = Z.slice(-1), re = document.activeElement;
        for (const M of k)
          if (M === re || (M?.scrollIntoView({ block: "nearest" }), M === V && w && (w.scrollTop = 0), M === F && w && (w.scrollTop = w.scrollHeight), M?.focus(), document.activeElement !== re)) return;
      },
      [q, w]
    ), Q = u.useCallback(
      () => $([j, S]),
      [$, j, S]
    );
    u.useEffect(() => {
      U && Q();
    }, [U, Q]);
    const { onOpenChange: R, triggerPointerDownPosRef: T } = C;
    u.useEffect(() => {
      if (S) {
        let k = { x: 0, y: 0 };
        const V = (F) => {
          k = {
            x: Math.abs(Math.round(F.pageX) - (T.current?.x ?? 0)),
            y: Math.abs(Math.round(F.pageY) - (T.current?.y ?? 0))
          };
        }, Z = (F) => {
          k.x <= 10 && k.y <= 10 ? F.preventDefault() : S.contains(F.target) || R(!1), document.removeEventListener("pointermove", V), T.current = null;
        };
        return T.current !== null && (document.addEventListener("pointermove", V), document.addEventListener("pointerup", Z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", V), document.removeEventListener("pointerup", Z, { capture: !0 });
        };
      }
    }, [S, R, T]), u.useEffect(() => {
      const k = () => R(!1);
      return window.addEventListener("blur", k), window.addEventListener("resize", k), () => {
        window.removeEventListener("blur", k), window.removeEventListener("resize", k);
      };
    }, [R]);
    const [_, x] = Kc((k) => {
      const V = q().filter((re) => !re.disabled), Z = V.find((re) => re.ref.current === document.activeElement), F = Zc(V, k, Z);
      F && setTimeout(() => F.ref.current.focus());
    }), P = u.useCallback(
      (k, V, Z) => {
        const F = !J.current && !Z;
        (C.value !== void 0 && C.value === V || F) && (I(k), F && (J.current = !0));
      },
      [C.value]
    ), D = u.useCallback(() => S?.focus(), [S]), O = u.useCallback(
      (k, V, Z) => {
        const F = !J.current && !Z;
        (C.value !== void 0 && C.value === V || F) && X(k);
      },
      [C.value]
    ), G = r === "popper" ? ro : Oc, W = G === ro ? {
      side: s,
      sideOffset: l,
      align: d,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: v,
      collisionPadding: h,
      sticky: b,
      hideWhenDetached: m,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ c.jsx(
      Ac,
      {
        scope: t,
        content: S,
        viewport: w,
        onViewportChange: N,
        itemRefCallback: P,
        selectedItem: j,
        onItemLeave: D,
        itemTextRefCallback: O,
        focusSelectedItem: Q,
        selectedItemText: B,
        position: r,
        isPositioned: U,
        searchRef: _,
        children: /* @__PURE__ */ c.jsx(Kn, { as: xg, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          Gn,
          {
            asChild: !0,
            trapped: C.open,
            onMountAutoFocus: (k) => {
              k.preventDefault();
            },
            onUnmountAutoFocus: ne(o, (k) => {
              C.trigger?.focus({ preventScroll: !0 }), k.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              Un,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: a,
                onFocusOutside: (k) => k.preventDefault(),
                onDismiss: () => C.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  G,
                  {
                    role: "listbox",
                    id: C.contentId,
                    "data-state": C.open ? "open" : "closed",
                    dir: C.dir,
                    onContextMenu: (k) => k.preventDefault(),
                    ...y,
                    ...W,
                    onPlaced: () => H(!0),
                    ref: A,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: ne(y.onKeyDown, (k) => {
                      const V = k.ctrlKey || k.altKey || k.metaKey;
                      if (k.key === "Tab" && k.preventDefault(), !V && k.key.length === 1 && x(k.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(k.key)) {
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
Mc.displayName = gg;
var bg = "SelectItemAlignedPosition", Oc = u.forwardRef((e, n) => {
  const { __scopeSelect: t, onPlaced: r, ...o } = e, i = ct(ht, t), a = lt(ht, t), [s, l] = u.useState(null), [d, p] = u.useState(null), f = ue(n, (A) => p(A)), v = cr(t), h = u.useRef(!1), b = u.useRef(!0), { viewport: m, selectedItem: g, selectedItemText: y, focusSelectedItem: C } = a, S = u.useCallback(() => {
    if (i.trigger && i.valueNode && s && d && m && g && y) {
      const A = i.trigger.getBoundingClientRect(), j = d.getBoundingClientRect(), I = i.valueNode.getBoundingClientRect(), B = y.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const re = B.left - j.left, M = I.left - re, pe = A.left - M, ee = A.width + pe, oe = Math.max(ee, j.width), be = window.innerWidth - De, ge = ia(M, [
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
        const re = j.right - B.right, M = window.innerWidth - I.right - re, pe = window.innerWidth - A.right - M, ee = A.width + pe, oe = Math.max(ee, j.width), be = window.innerWidth - De, ge = ia(M, [
          De,
          Math.max(De, be - oe)
        ]);
        s.style.minWidth = ee + "px", s.style.right = ge + "px";
      }
      const X = v(), q = window.innerHeight - De * 2, U = m.scrollHeight, H = window.getComputedStyle(d), J = parseInt(H.borderTopWidth, 10), $ = parseInt(H.paddingTop, 10), Q = parseInt(H.borderBottomWidth, 10), R = parseInt(H.paddingBottom, 10), T = J + $ + U + R + Q, _ = Math.min(g.offsetHeight * 5, T), x = window.getComputedStyle(m), P = parseInt(x.paddingTop, 10), D = parseInt(x.paddingBottom, 10), O = A.top + A.height / 2 - De, G = q - O, W = g.offsetHeight / 2, k = g.offsetTop + W, V = J + $ + k, Z = T - V;
      if (V <= O) {
        const re = X.length > 0 && g === X[X.length - 1].ref.current;
        s.style.bottom = "0px";
        const M = d.clientHeight - m.offsetTop - m.offsetHeight, pe = Math.max(
          G,
          W + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (re ? D : 0) + M + Q
        ), ee = V + pe;
        s.style.height = ee + "px";
      } else {
        const re = X.length > 0 && g === X[0].ref.current;
        s.style.top = "0px";
        const pe = Math.max(
          O,
          J + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (re ? P : 0) + W
        ) + Z;
        s.style.height = pe + "px", m.scrollTop = V - O + m.offsetTop;
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
  _e(() => S(), [S]);
  const [E, w] = u.useState();
  _e(() => {
    d && w(window.getComputedStyle(d).zIndex);
  }, [d]);
  const N = u.useCallback(
    (A) => {
      A && b.current === !0 && (S(), C?.(), b.current = !1);
    },
    [S, C]
  );
  return /* @__PURE__ */ c.jsx(
    wg,
    {
      scope: t,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: N,
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
Oc.displayName = bg;
var yg = "SelectPopperPosition", ro = u.forwardRef((e, n) => {
  const {
    __scopeSelect: t,
    align: r = "start",
    collisionPadding: o = De,
    ...i
  } = e, a = lr(t);
  return /* @__PURE__ */ c.jsx(
    bc,
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
ro.displayName = yg;
var [wg, Bo] = It(ht, {}), oo = "SelectViewport", Tc = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, nonce: r, ...o } = e, i = lt(oo, t), a = Bo(oo, t), s = ue(n, i.onViewportChange), l = u.useRef(0);
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
      /* @__PURE__ */ c.jsx(sr.Slot, { scope: t, children: /* @__PURE__ */ c.jsx(
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
              const h = Math.abs(l.current - p.scrollTop);
              if (h > 0) {
                const b = window.innerHeight - De * 2, m = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), y = Math.max(m, g);
                if (y < b) {
                  const C = y + h, S = Math.min(b, C), E = C - S;
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
Tc.displayName = oo;
var Dc = "SelectGroup", [Cg, Sg] = It(Dc), Nc = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = Ye();
    return /* @__PURE__ */ c.jsx(Cg, { scope: t, id: o, children: /* @__PURE__ */ c.jsx(se.div, { role: "group", "aria-labelledby": o, ...r, ref: n }) });
  }
);
Nc.displayName = Dc;
var Ic = "SelectLabel", Lc = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = Sg(Ic, t);
    return /* @__PURE__ */ c.jsx(se.div, { id: o.id, ...r, ref: n });
  }
);
Lc.displayName = Ic;
var Fn = "SelectItem", [Eg, Fc] = It(Fn), zc = u.forwardRef(
  (e, n) => {
    const {
      __scopeSelect: t,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...a
    } = e, s = ct(Fn, t), l = lt(Fn, t), d = s.value === r, [p, f] = u.useState(i ?? ""), [v, h] = u.useState(!1), b = ue(
      n,
      (C) => l.itemRefCallback?.(C, r, o)
    ), m = Ye(), g = u.useRef("touch"), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      Eg,
      {
        scope: t,
        value: r,
        disabled: o,
        textId: m,
        isSelected: d,
        onItemTextChange: u.useCallback((C) => {
          f((S) => S || (C?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ c.jsx(
          sr.ItemSlot,
          {
            scope: t,
            value: r,
            disabled: o,
            textValue: p,
            children: /* @__PURE__ */ c.jsx(
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
                ref: b,
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
                  g.current = C.pointerType, o ? l.onItemLeave?.() : g.current === "mouse" && C.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: ne(a.onPointerLeave, (C) => {
                  C.currentTarget === document.activeElement && l.onItemLeave?.();
                }),
                onKeyDown: ne(a.onKeyDown, (C) => {
                  l.searchRef?.current !== "" && C.key === " " || (dg.includes(C.key) && y(), C.key === " " && C.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
zc.displayName = Fn;
var Gt = "SelectItemText", $c = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, className: r, style: o, ...i } = e, a = ct(Gt, t), s = lt(Gt, t), l = Fc(Gt, t), d = mg(Gt, t), [p, f] = u.useState(null), v = ue(
      n,
      (y) => f(y),
      l.onItemTextChange,
      (y) => s.itemTextRefCallback?.(y, l.value, l.disabled)
    ), h = p?.textContent, b = u.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: g } = d;
    return _e(() => (m(b), () => g(b)), [m, g, b]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(se.span, { id: l.textId, ...i, ref: v }),
      l.isSelected && a.valueNode && !a.valueNodeHasChildren ? Hn.createPortal(i.children, a.valueNode) : null
    ] });
  }
);
$c.displayName = Gt;
var Wc = "SelectItemIndicator", Vc = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return Fc(Wc, t).isSelected ? /* @__PURE__ */ c.jsx(se.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }
);
Vc.displayName = Wc;
var io = "SelectScrollUpButton", Bc = u.forwardRef((e, n) => {
  const t = lt(io, e.__scopeSelect), r = Bo(io, e.__scopeSelect), [o, i] = u.useState(!1), a = ue(n, r.onScrollButtonChange);
  return _e(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const d = l.scrollTop > 0;
        i(d);
      };
      const l = t.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    Uc,
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
Bc.displayName = io;
var ao = "SelectScrollDownButton", Hc = u.forwardRef((e, n) => {
  const t = lt(ao, e.__scopeSelect), r = Bo(ao, e.__scopeSelect), [o, i] = u.useState(!1), a = ue(n, r.onScrollButtonChange);
  return _e(() => {
    if (t.viewport && t.isPositioned) {
      let s = function() {
        const d = l.scrollHeight - l.clientHeight, p = Math.ceil(l.scrollTop) < d;
        i(p);
      };
      const l = t.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [t.viewport, t.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    Uc,
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
Hc.displayName = ao;
var Uc = u.forwardRef((e, n) => {
  const { __scopeSelect: t, onAutoScroll: r, ...o } = e, i = lt("SelectScrollButton", t), a = u.useRef(null), s = cr(t), l = u.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), _e(() => {
    s().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ c.jsx(
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
        l();
      })
    }
  );
}), kg = "SelectSeparator", Gc = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(se.div, { "aria-hidden": !0, ...r, ref: n });
  }
);
Gc.displayName = kg;
var so = "SelectArrow", _g = u.forwardRef(
  (e, n) => {
    const { __scopeSelect: t, ...r } = e, o = lr(t), i = ct(so, t), a = lt(so, t);
    return i.open && a.position === "popper" ? /* @__PURE__ */ c.jsx(yc, { ...o, ...r, ref: n }) : null;
  }
);
_g.displayName = so;
var Rg = "SelectBubbleInput", qc = u.forwardRef(
  ({ __scopeSelect: e, value: n, ...t }, r) => {
    const o = u.useRef(null), i = ue(r, o), a = ag(n);
    return u.useEffect(() => {
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
        style: { ...wc, ...t.style },
        ref: i,
        defaultValue: n
      }
    );
  }
);
qc.displayName = Rg;
function Yc(e) {
  return e === "" || e === void 0;
}
function Kc(e) {
  const n = Be(e), t = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (a) => {
      const s = t.current + a;
      n(s), (function l(d) {
        t.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(s);
    },
    [n]
  ), i = u.useCallback(() => {
    t.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [t, o, i];
}
function Zc(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((d) => d === n[0]) ? n[0] : n, i = t ? e.indexOf(t) : -1;
  let a = jg(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((d) => d !== t));
  const l = a.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== t ? l : void 0;
}
function jg(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var Pg = Cc, Ag = Ec, Mg = _c, Og = Rc, Tg = jc, Dg = Pc, Ng = Tc, Ig = Nc, Lg = Lc, Fg = zc, zg = $c, $g = Vc, Wg = Bc, Vg = Hc, Bg = Gc;
function Hg({ ...e }) {
  return /* @__PURE__ */ c.jsx(Pg, { "data-slot": "select", ...e });
}
function kb({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(Ig, { "data-slot": "select-group", ...e });
}
function Ug({
  ...e
}) {
  return /* @__PURE__ */ c.jsx(Mg, { "data-slot": "select-value", ...e });
}
function Gg({
  className: e,
  size: n = "default",
  variant: t = "default",
  children: r,
  ...o
}) {
  return /* @__PURE__ */ c.jsxs(
    Ag,
    {
      "data-slot": "select-trigger",
      "data-size": n,
      className: L(
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
        /* @__PURE__ */ c.jsx(Og, { asChild: !0, children: /* @__PURE__ */ c.jsx(
          ys,
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
function qg({
  className: e,
  children: n,
  position: t = "popper",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ c.jsx(Tg, { children: /* @__PURE__ */ c.jsxs(
    Dg,
    {
      "data-slot": "select-content",
      className: L(
        "bg-white font-sans text-gray-700 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height)  origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-gray-25 shadow-md",
        t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: t,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ c.jsx(Kg, {}),
        /* @__PURE__ */ c.jsx(
          Ng,
          {
            className: L(
              "p-1",
              t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: n
          }
        ),
        /* @__PURE__ */ c.jsx(Zg, {})
      ]
    }
  ) });
}
function _b({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    Lg,
    {
      "data-slot": "select-label",
      className: L("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...n
    }
  );
}
function Yg({
  className: e,
  children: n,
  ...t
}) {
  return /* @__PURE__ */ c.jsxs(
    Fg,
    {
      "data-slot": "select-item",
      className: L(
        "focus:bg-gray-25 focus:text-blue-hepatica-600 [&_svg:not([class*='text-'])]:text-gray-300 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...t,
      children: [
        /* @__PURE__ */ c.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx($g, { children: /* @__PURE__ */ c.jsx(ko, { className: "size-4" }) }) }),
        /* @__PURE__ */ c.jsx(zg, { children: n })
      ]
    }
  );
}
function Rb({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    Bg,
    {
      "data-slot": "select-separator",
      className: L("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...n
    }
  );
}
function Kg({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    Wg,
    {
      "data-slot": "select-scroll-up-button",
      className: L(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...n,
      children: /* @__PURE__ */ c.jsx(ef, { className: "size-4" })
    }
  );
}
function Zg({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    Vg,
    {
      "data-slot": "select-scroll-down-button",
      className: L(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...n,
      children: /* @__PURE__ */ c.jsx(ys, { className: "size-4" })
    }
  );
}
function jb({
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
  const d = Math.max(1, Math.ceil(t / Math.max(n, 1))), p = Math.min(Math.max(e, 1), d), f = t === 0 ? 0 : (p - 1) * n + 1, v = t === 0 ? 0 : Math.min(t, p * n), h = !a && p > 1, b = !a && p < d, m = () => {
    h && o(p - 1);
  }, g = () => {
    b && o(p + 1);
  }, y = (C) => {
    Number.isNaN(Number(C)) || i?.(Number(C));
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      "data-slot": "pagination",
      className: L(
        "flex w-full items-center justify-end gap-4 py-3 text-sm text-gray-700",
        "border-t border-gray-50",
        s
      ),
      ...l,
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ c.jsx("span", { className: "font-sans text-xs text-gray-700", children: "Rows per page:" }),
          /* @__PURE__ */ c.jsx("div", { className: "w-16", children: /* @__PURE__ */ c.jsxs(
            Hg,
            {
              disabled: a || !i,
              defaultValue: `${n}`,
              onValueChange: y,
              "data-testid": "pagination--items-per-page",
              children: [
                /* @__PURE__ */ c.jsx(Gg, { variant: "ghost", disabled: a, children: /* @__PURE__ */ c.jsx(Ug, { placeholder: "Theme" }) }),
                /* @__PURE__ */ c.jsx(qg, { children: r.map((C) => /* @__PURE__ */ c.jsx(Yg, { value: `${C}`, children: C }, C)) })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ c.jsx(
            "p",
            {
              "data-slot": "pagination-range",
              className: "text-xs text-gray-600 whitespace-nowrap",
              children: t === 0 ? "0 of 0" : `${f} – ${v} of ${t}`
            }
          ),
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-x-1", children: [
            /* @__PURE__ */ c.jsx(
              "button",
              {
                "data-slot": "pagination-prev",
                type: "button",
                onClick: m,
                disabled: !h,
                "aria-label": "Previous page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ c.jsx(Jp, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ c.jsx(
              "button",
              {
                "data-slot": "pagination-next",
                type: "button",
                onClick: g,
                disabled: !b,
                "aria-label": "Next page",
                className: "size-10 border-none flex items-center justify-center rounded-md hover:bg-gray-25 transition-colors disabled:opacity-45",
                children: /* @__PURE__ */ c.jsx(ws, { className: "size-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function Pb({
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
      className: L(
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
              className: L(
                "pointer-events-none size-4 border border-gray-700 rounded-full flex items-center justify-center",
                {
                  "border-2 border-blue-hepatica-600": e
                }
              ),
              children: /* @__PURE__ */ c.jsx(
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
        /* @__PURE__ */ c.jsx("div", { className: "", children: n })
      ]
    }
  );
}
const Xg = Jn("bg-white rounded-2xl overflow-hidden flex flex-col w-full", {
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
function Ab({
  title: e,
  children: n,
  footer: t,
  elevation: r = "elevation-0",
  className: o,
  ...i
}) {
  return /* @__PURE__ */ c.jsxs("section", { ...i, className: L(Xg({ elevation: r, className: o })), children: [
    !!e && /* @__PURE__ */ c.jsx("header", { className: "h-15 flex items-center px-8 border-b border-b-gray-25", children: /* @__PURE__ */ c.jsx("h3", { className: "font-sans font-semibold text-base text-gray-900 leading-5", children: e }) }),
    /* @__PURE__ */ c.jsx("div", { className: "flex flex-col p-4 md:p-8!", children: n }),
    !!t && /* @__PURE__ */ c.jsx("footer", { className: "px-4 md:px-8! py-4 md:py-6! border-t border-t-gray-25", children: t })
  ] });
}
function Mb({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
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
var Xc = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ga = ie.createContext && /* @__PURE__ */ ie.createContext(Xc), Jg = ["attr", "size", "title"];
function Qg(e, n) {
  if (e == null) return {};
  var t = ex(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function ex(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function zn() {
  return zn = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, zn.apply(this, arguments);
}
function xa(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function $n(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? xa(Object(t), !0).forEach(function(r) {
      tx(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : xa(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function tx(e, n, t) {
  return n = nx(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function nx(e) {
  var n = rx(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function rx(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Jc(e) {
  return e && e.map((n, t) => /* @__PURE__ */ ie.createElement(n.tag, $n({
    key: t
  }, n.attr), Jc(n.child)));
}
function ox(e) {
  return (n) => /* @__PURE__ */ ie.createElement(ix, zn({
    attr: $n({}, e.attr)
  }, n), Jc(e.child));
}
function ix(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, a = Qg(e, Jg), s = o || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ ie.createElement("svg", zn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, a, {
      className: l,
      style: $n($n({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ ie.createElement("title", null, i), e.children);
  };
  return ga !== void 0 ? /* @__PURE__ */ ie.createElement(ga.Consumer, null, (t) => n(t)) : n(Xc);
}
function ax(e) {
  return ox({ attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM22.0104 8.81412L20.5962 7.3999L16 11.9961L20.5962 16.5923L22.0104 15.1781L18.8284 11.9961L22.0104 8.81412Z" }, child: [] }] })(e);
}
const sx = new URL("data:image/svg+xml,%3csvg%20width='247'%20height='980'%20viewBox='0%200%20247%20980'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9467_2027)'%3e%3crect%20width='247'%20height='983'%20fill='black'/%3e%3cg%20opacity='0.3'%20filter='url(%23filter0_f_9467_2027)'%3e%3cellipse%20cx='-129.135'%20cy='1014.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20-129.135%201014.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.3'%20filter='url(%23filter1_f_9467_2027)'%3e%3cellipse%20cx='450.01'%20cy='1514.17'%20rx='162.01'%20ry='485.827'%20transform='rotate(180%20450.01%201514.17)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter2_f_9467_2027)'%3e%3cellipse%20cx='119.407'%20cy='-84.3658'%20rx='364.442'%20ry='193.158'%20fill='%230B495D'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter3_f_9467_2027)'%3e%3cellipse%20cx='399.478'%20cy='-0.360779'%20rx='364.442'%20ry='193.158'%20transform='rotate(30%20399.478%20-0.360779)'%20fill='%23BF3535'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter4_f_9467_2027)'%3e%3cellipse%20cx='-312.773'%20cy='835'%20rx='434.874'%20ry='485.827'%20transform='rotate(-136.998%20-312.773%20835)'%20fill='%236361EA'/%3e%3c/g%3e%3cg%20opacity='0.5'%20filter='url(%23filter5_f_9467_2027)'%3e%3cellipse%20cx='336.608'%20cy='1039.65'%20rx='553.734'%20ry='293.484'%20transform='rotate(7.13051%20336.608%201039.65)'%20fill='%23660000'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_9467_2027'%20x='-691.145'%20y='128.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_9467_2027'%20x='-112'%20y='628.346'%20width='1124.02'%20height='1771.65'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_9467_2027'%20x='-453.839'%20y='-486.327'%20width='1146.49'%20height='803.922'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_9467_2027'%20x='-139.475'%20y='-456.526'%20width='1077.91'%20height='912.33'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='104.402'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_9467_2027'%20x='-1172.05'%20y='-27.8358'%20width='1718.56'%20height='1725.67'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='200'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_9467_2027'%20x='-531.326'%20y='423.111'%20width='1735.87'%20height='1233.08'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='158.628'%20result='effect1_foregroundBlur_9467_2027'/%3e%3c/filter%3e%3cclipPath%20id='clip0_9467_2027'%3e%3crect%20width='247'%20height='983'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", import.meta.url).href;
function Ob({ children: e }) {
  const [n, t] = $e(!1), r = ye(() => t((i) => !i), []), o = ye(() => t(!1), []);
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(
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
        children: /* @__PURE__ */ c.jsx(ax, { className: "size-6 text-white" })
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: L(
          "fixed inset-0 z-30 bg-black/40 transition-opacity sidebar:hidden lg:hidden",
          n ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: o
      }
    ),
    /* @__PURE__ */ c.jsxs(
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
          /* @__PURE__ */ c.jsx(
            "img",
            {
              src: sx,
              alt: "",
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-top"
            }
          ),
          /* @__PURE__ */ c.jsxs("div", { className: "w-full grid grid-rows-[112px_1fr]", children: [
            /* @__PURE__ */ c.jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center gap-y-2", children: [
              /* @__PURE__ */ c.jsx(Ks, { className: "size-10.5" }),
              /* @__PURE__ */ c.jsx("h1", { className: "font-manrope font-nromal text-base text-white tracking-[0.04em]", children: "MercySeat" })
            ] }) }),
            /* @__PURE__ */ c.jsx("div", { children: e })
          ] })
        ]
      }
    )
  ] });
}
function cx({
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
        className: L(
          "w-8 h-8 rounded-full flex justify-center items-center",
          "border border-gray-50 bg-gray-25",
          {
            "bg-blue-hepatica-600 text-white border-none hover:bg-blue-hepatica-700": t || r,
            "cursor-not-allowed": o
          }
        ),
        children: r && !t ? /* @__PURE__ */ c.jsx(ko, { className: "size-4 text-white", "aria-hidden": "true" }) : /* @__PURE__ */ c.jsx(
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
    /* @__PURE__ */ c.jsx(
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
function Tb({
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
      className: L("w-full", r),
      children: /* @__PURE__ */ c.jsxs("ol", { className: "flex items-center justify-between gap-2 relative", children: [
        /* @__PURE__ */ c.jsx("span", { className: "absolute border-b border-b-gray-50 top-1/2 left-0 right-0" }),
        e.map((i, a) => {
          const s = o !== -1 && a < o;
          return /* @__PURE__ */ c.jsx(
            cx,
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
var Wr = "rovingFocusGroup.onEntryFocus", lx = { bubbles: !1, cancelable: !0 }, rn = "RovingFocusGroup", [co, Qc, dx] = To(rn), [ux, el] = at(
  rn,
  [dx]
), [px, fx] = ux(rn), tl = u.forwardRef(
  (e, n) => /* @__PURE__ */ c.jsx(co.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(co.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(mx, { ...e, ref: n }) }) })
);
tl.displayName = rn;
var mx = u.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: t,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: d,
    preventScrollOnEntryFocus: p = !1,
    ...f
  } = e, v = u.useRef(null), h = ue(n, v), b = Do(i), [m, g] = Yt({
    prop: a,
    defaultProp: s ?? null,
    onChange: l,
    caller: rn
  }), [y, C] = u.useState(!1), S = Be(d), E = Qc(t), w = u.useRef(!1), [N, A] = u.useState(0);
  return u.useEffect(() => {
    const j = v.current;
    if (j)
      return j.addEventListener(Wr, S), () => j.removeEventListener(Wr, S);
  }, [S]), /* @__PURE__ */ c.jsx(
    px,
    {
      scope: t,
      orientation: r,
      dir: b,
      loop: o,
      currentTabStopId: m,
      onItemFocus: u.useCallback(
        (j) => g(j),
        [g]
      ),
      onItemShiftTab: u.useCallback(() => C(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => A((j) => j + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => A((j) => j - 1),
        []
      ),
      children: /* @__PURE__ */ c.jsx(
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
          onFocus: ne(e.onFocus, (j) => {
            const I = !w.current;
            if (j.target === j.currentTarget && I && !y) {
              const B = new CustomEvent(Wr, lx);
              if (j.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const X = E().filter(($) => $.focusable), q = X.find(($) => $.active), U = X.find(($) => $.id === m), J = [q, U, ...X].filter(
                  Boolean
                ).map(($) => $.ref.current);
                ol(J, p);
              }
            }
            w.current = !1;
          }),
          onBlur: ne(e.onBlur, () => C(!1))
        }
      )
    }
  );
}), nl = "RovingFocusGroupItem", rl = u.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: a,
      ...s
    } = e, l = Ye(), d = i || l, p = fx(nl, t), f = p.currentTabStopId === d, v = Qc(t), { onFocusableItemAdd: h, onFocusableItemRemove: b, currentTabStopId: m } = p;
    return u.useEffect(() => {
      if (r)
        return h(), () => b();
    }, [r, h, b]), /* @__PURE__ */ c.jsx(
      co.ItemSlot,
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
              const y = gx(g, p.orientation, p.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let S = v().filter((E) => E.focusable).map((E) => E.ref.current);
                if (y === "last") S.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && S.reverse();
                  const E = S.indexOf(g.currentTarget);
                  S = p.loop ? xx(S, E + 1) : S.slice(E + 1);
                }
                setTimeout(() => ol(S));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: m != null }) : a
          }
        )
      }
    );
  }
);
rl.displayName = nl;
var vx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function hx(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function gx(e, n, t) {
  const r = hx(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return vx[r];
}
function ol(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function xx(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var bx = tl, yx = rl, lo = ["Enter", " "], wx = ["ArrowDown", "PageUp", "Home"], il = ["ArrowUp", "PageDown", "End"], Cx = [...wx, ...il], Sx = {
  ltr: [...lo, "ArrowRight"],
  rtl: [...lo, "ArrowLeft"]
}, Ex = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, on = "Menu", [Jt, kx, _x] = To(on), [xt, al] = at(on, [
  _x,
  ar,
  el
]), dr = ar(), sl = el(), [Rx, bt] = xt(on), [jx, an] = xt(on), cl = (e) => {
  const { __scopeMenu: n, open: t = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, s = dr(n), [l, d] = u.useState(null), p = u.useRef(!1), f = Be(i), v = Do(o);
  return u.useEffect(() => {
    const h = () => {
      p.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => p.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(gc, { ...s, children: /* @__PURE__ */ c.jsx(
    Rx,
    {
      scope: n,
      open: t,
      onOpenChange: f,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        jx,
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
cl.displayName = on;
var Px = "MenuAnchor", Ho = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = dr(t);
    return /* @__PURE__ */ c.jsx(xc, { ...o, ...r, ref: n });
  }
);
Ho.displayName = Px;
var Uo = "MenuPortal", [Ax, ll] = xt(Uo, {
  forceMount: void 0
}), dl = (e) => {
  const { __scopeMenu: n, forceMount: t, children: r, container: o } = e, i = bt(Uo, n);
  return /* @__PURE__ */ c.jsx(Ax, { scope: n, forceMount: t, children: /* @__PURE__ */ c.jsx(st, { present: t || i.open, children: /* @__PURE__ */ c.jsx(qn, { asChild: !0, container: o, children: r }) }) });
};
dl.displayName = Uo;
var Oe = "MenuContent", [Mx, Go] = xt(Oe), ul = u.forwardRef(
  (e, n) => {
    const t = ll(Oe, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, i = bt(Oe, e.__scopeMenu), a = an(Oe, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(Jt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(st, { present: r || i.open, children: /* @__PURE__ */ c.jsx(Jt.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ c.jsx(Ox, { ...o, ref: n }) : /* @__PURE__ */ c.jsx(Tx, { ...o, ref: n }) }) }) });
  }
), Ox = u.forwardRef(
  (e, n) => {
    const t = bt(Oe, e.__scopeMenu), r = u.useRef(null), o = ue(n, r);
    return u.useEffect(() => {
      const i = r.current;
      if (i) return fo(i);
    }, []), /* @__PURE__ */ c.jsx(
      qo,
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
), Tx = u.forwardRef((e, n) => {
  const t = bt(Oe, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    qo,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), Dx = /* @__PURE__ */ jt("MenuContent.ScrollLock"), qo = u.forwardRef(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEntryFocus: l,
      onEscapeKeyDown: d,
      onPointerDownOutside: p,
      onFocusOutside: f,
      onInteractOutside: v,
      onDismiss: h,
      disableOutsideScroll: b,
      ...m
    } = e, g = bt(Oe, t), y = an(Oe, t), C = dr(t), S = sl(t), E = kx(t), [w, N] = u.useState(null), A = u.useRef(null), j = ue(n, A, g.onContentChange), I = u.useRef(0), B = u.useRef(""), X = u.useRef(0), q = u.useRef(null), U = u.useRef("right"), H = u.useRef(0), J = b ? Kn : u.Fragment, $ = b ? { as: Dx, allowPinchZoom: !0 } : void 0, Q = (T) => {
      const _ = B.current + T, x = E().filter((k) => !k.disabled), P = document.activeElement, D = x.find((k) => k.ref.current === P)?.textValue, O = x.map((k) => k.textValue), G = Gx(O, _, D), W = x.find((k) => k.textValue === G)?.ref.current;
      (function k(V) {
        B.current = V, window.clearTimeout(I.current), V !== "" && (I.current = window.setTimeout(() => k(""), 1e3));
      })(_), W && setTimeout(() => W.focus());
    };
    u.useEffect(() => () => window.clearTimeout(I.current), []), po();
    const R = u.useCallback((T) => U.current === q.current?.side && Yx(T, q.current?.area), []);
    return /* @__PURE__ */ c.jsx(
      Mx,
      {
        scope: t,
        searchRef: B,
        onItemEnter: u.useCallback(
          (T) => {
            R(T) && T.preventDefault();
          },
          [R]
        ),
        onItemLeave: u.useCallback(
          (T) => {
            R(T) || (A.current?.focus(), N(null));
          },
          [R]
        ),
        onTriggerLeave: u.useCallback(
          (T) => {
            R(T) && T.preventDefault();
          },
          [R]
        ),
        pointerGraceTimerRef: X,
        onPointerGraceIntentChange: u.useCallback((T) => {
          q.current = T;
        }, []),
        children: /* @__PURE__ */ c.jsx(J, { ...$, children: /* @__PURE__ */ c.jsx(
          Gn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: ne(i, (T) => {
              T.preventDefault(), A.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ c.jsx(
              Un,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: d,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: v,
                onDismiss: h,
                children: /* @__PURE__ */ c.jsx(
                  bx,
                  {
                    asChild: !0,
                    ...S,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: w,
                    onCurrentTabStopIdChange: N,
                    onEntryFocus: ne(l, (T) => {
                      y.isUsingKeyboardRef.current || T.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      bc,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Rl(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...C,
                        ...m,
                        ref: j,
                        style: { outline: "none", ...m.style },
                        onKeyDown: ne(m.onKeyDown, (T) => {
                          const x = T.target.closest("[data-radix-menu-content]") === T.currentTarget, P = T.ctrlKey || T.altKey || T.metaKey, D = T.key.length === 1;
                          x && (T.key === "Tab" && T.preventDefault(), !P && D && Q(T.key));
                          const O = A.current;
                          if (T.target !== O || !Cx.includes(T.key)) return;
                          T.preventDefault();
                          const W = E().filter((k) => !k.disabled).map((k) => k.ref.current);
                          il.includes(T.key) && W.reverse(), Hx(W);
                        }),
                        onBlur: ne(e.onBlur, (T) => {
                          T.currentTarget.contains(T.target) || (window.clearTimeout(I.current), B.current = "");
                        }),
                        onPointerMove: ne(
                          e.onPointerMove,
                          Qt((T) => {
                            const _ = T.target, x = H.current !== T.clientX;
                            if (T.currentTarget.contains(_) && x) {
                              const P = T.clientX > H.current ? "right" : "left";
                              U.current = P, H.current = T.clientX;
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
ul.displayName = Oe;
var Nx = "MenuGroup", Yo = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(se.div, { role: "group", ...r, ref: n });
  }
);
Yo.displayName = Nx;
var Ix = "MenuLabel", pl = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ c.jsx(se.div, { ...r, ref: n });
  }
);
pl.displayName = Ix;
var Wn = "MenuItem", ba = "menu.itemSelect", ur = u.forwardRef(
  (e, n) => {
    const { disabled: t = !1, onSelect: r, ...o } = e, i = u.useRef(null), a = an(Wn, e.__scopeMenu), s = Go(Wn, e.__scopeMenu), l = ue(n, i), d = u.useRef(!1), p = () => {
      const f = i.current;
      if (!t && f) {
        const v = new CustomEvent(ba, { bubbles: !0, cancelable: !0 });
        f.addEventListener(ba, (h) => r?.(h), { once: !0 }), Ca(f, v), v.defaultPrevented ? d.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      fl,
      {
        ...o,
        ref: l,
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
          t || v && f.key === " " || lo.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
ur.displayName = Wn;
var fl = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, disabled: r = !1, textValue: o, ...i } = e, a = Go(Wn, t), s = sl(t), l = u.useRef(null), d = ue(n, l), [p, f] = u.useState(!1), [v, h] = u.useState("");
    return u.useEffect(() => {
      const b = l.current;
      b && h((b.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ c.jsx(
      Jt.ItemSlot,
      {
        scope: t,
        disabled: r,
        textValue: o ?? v,
        children: /* @__PURE__ */ c.jsx(yx, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ c.jsx(
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
              Qt((b) => {
                r ? a.onItemLeave(b) : (a.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: ne(
              e.onPointerLeave,
              Qt((b) => a.onItemLeave(b))
            ),
            onFocus: ne(e.onFocus, () => f(!0)),
            onBlur: ne(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), Lx = "MenuCheckboxItem", ml = u.forwardRef(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(bl, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ c.jsx(
      ur,
      {
        role: "menuitemcheckbox",
        "aria-checked": Vn(t) ? "mixed" : t,
        ...o,
        ref: n,
        "data-state": Zo(t),
        onSelect: ne(
          o.onSelect,
          () => r?.(Vn(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ml.displayName = Lx;
var vl = "MenuRadioGroup", [Fx, zx] = xt(
  vl,
  { value: void 0, onValueChange: () => {
  } }
), hl = u.forwardRef(
  (e, n) => {
    const { value: t, onValueChange: r, ...o } = e, i = Be(r);
    return /* @__PURE__ */ c.jsx(Fx, { scope: e.__scopeMenu, value: t, onValueChange: i, children: /* @__PURE__ */ c.jsx(Yo, { ...o, ref: n }) });
  }
);
hl.displayName = vl;
var gl = "MenuRadioItem", xl = u.forwardRef(
  (e, n) => {
    const { value: t, ...r } = e, o = zx(gl, e.__scopeMenu), i = t === o.value;
    return /* @__PURE__ */ c.jsx(bl, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ c.jsx(
      ur,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: n,
        "data-state": Zo(i),
        onSelect: ne(
          r.onSelect,
          () => o.onValueChange?.(t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
xl.displayName = gl;
var Ko = "MenuItemIndicator", [bl, $x] = xt(
  Ko,
  { checked: !1 }
), yl = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, forceMount: r, ...o } = e, i = $x(Ko, t);
    return /* @__PURE__ */ c.jsx(
      st,
      {
        present: r || Vn(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          se.span,
          {
            ...o,
            ref: n,
            "data-state": Zo(i.checked)
          }
        )
      }
    );
  }
);
yl.displayName = Ko;
var Wx = "MenuSeparator", wl = u.forwardRef(
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
wl.displayName = Wx;
var Vx = "MenuArrow", Cl = u.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, o = dr(t);
    return /* @__PURE__ */ c.jsx(yc, { ...o, ...r, ref: n });
  }
);
Cl.displayName = Vx;
var Bx = "MenuSub", [Db, Sl] = xt(Bx), qt = "MenuSubTrigger", El = u.forwardRef(
  (e, n) => {
    const t = bt(qt, e.__scopeMenu), r = an(qt, e.__scopeMenu), o = Sl(qt, e.__scopeMenu), i = Go(qt, e.__scopeMenu), a = u.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = i, d = { __scopeMenu: e.__scopeMenu }, p = u.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return u.useEffect(() => p, [p]), u.useEffect(() => {
      const f = s.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [s, l]), /* @__PURE__ */ c.jsx(Ho, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      fl,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": o.contentId,
        "data-state": Rl(t.open),
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
              const h = t.content?.dataset.side, b = h === "right", m = b ? -5 : 5, g = v[b ? "left" : "right"], y = v[b ? "right" : "left"];
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
          e.disabled || v && f.key === " " || Sx[r.dir].includes(f.key) && (t.onOpenChange(!0), t.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
El.displayName = qt;
var kl = "MenuSubContent", _l = u.forwardRef(
  (e, n) => {
    const t = ll(Oe, e.__scopeMenu), { forceMount: r = t.forceMount, ...o } = e, i = bt(Oe, e.__scopeMenu), a = an(Oe, e.__scopeMenu), s = Sl(kl, e.__scopeMenu), l = u.useRef(null), d = ue(n, l);
    return /* @__PURE__ */ c.jsx(Jt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(st, { present: r || i.open, children: /* @__PURE__ */ c.jsx(Jt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      qo,
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
          a.isUsingKeyboardRef.current && l.current?.focus(), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: ne(e.onFocusOutside, (p) => {
          p.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: ne(e.onEscapeKeyDown, (p) => {
          a.onClose(), p.preventDefault();
        }),
        onKeyDown: ne(e.onKeyDown, (p) => {
          const f = p.currentTarget.contains(p.target), v = Ex[a.dir].includes(p.key);
          f && v && (i.onOpenChange(!1), s.trigger?.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
_l.displayName = kl;
function Rl(e) {
  return e ? "open" : "closed";
}
function Vn(e) {
  return e === "indeterminate";
}
function Zo(e) {
  return Vn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Hx(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function Ux(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
function Gx(e, n, t) {
  const o = n.length > 1 && Array.from(n).every((d) => d === n[0]) ? n[0] : n, i = t ? e.indexOf(t) : -1;
  let a = Ux(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((d) => d !== t));
  const l = a.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== t ? l : void 0;
}
function qx(e, n) {
  const { x: t, y: r } = e;
  let o = !1;
  for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
    const s = n[i], l = n[a], d = s.x, p = s.y, f = l.x, v = l.y;
    p > r != v > r && t < (f - d) * (r - p) / (v - p) + d && (o = !o);
  }
  return o;
}
function Yx(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return qx(t, n);
}
function Qt(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var Kx = cl, Zx = Ho, Xx = dl, Jx = ul, Qx = Yo, e0 = pl, t0 = ur, n0 = ml, r0 = hl, o0 = xl, i0 = yl, a0 = wl, s0 = Cl, c0 = El, l0 = _l, pr = "DropdownMenu", [d0] = at(
  pr,
  [al]
), Re = al(), [u0, jl] = d0(pr), Pl = (e) => {
  const {
    __scopeDropdownMenu: n,
    children: t,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, l = Re(n), d = u.useRef(null), [p, f] = Yt({
    prop: o,
    defaultProp: i ?? !1,
    onChange: a,
    caller: pr
  });
  return /* @__PURE__ */ c.jsx(
    u0,
    {
      scope: n,
      triggerId: Ye(),
      triggerRef: d,
      contentId: Ye(),
      open: p,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((v) => !v), [f]),
      modal: s,
      children: /* @__PURE__ */ c.jsx(Kx, { ...l, open: p, onOpenChange: f, dir: r, modal: s, children: t })
    }
  );
};
Pl.displayName = pr;
var Al = "DropdownMenuTrigger", Ml = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, disabled: r = !1, ...o } = e, i = jl(Al, t), a = Re(t);
    return /* @__PURE__ */ c.jsx(Zx, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
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
Ml.displayName = Al;
var p0 = "DropdownMenuPortal", Ol = (e) => {
  const { __scopeDropdownMenu: n, ...t } = e, r = Re(n);
  return /* @__PURE__ */ c.jsx(Xx, { ...r, ...t });
};
Ol.displayName = p0;
var Tl = "DropdownMenuContent", Dl = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = jl(Tl, t), i = Re(t), a = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Jx,
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
          const l = s.detail.originalEvent, d = l.button === 0 && l.ctrlKey === !0, p = l.button === 2 || d;
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
Dl.displayName = Tl;
var f0 = "DropdownMenuGroup", m0 = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ c.jsx(Qx, { ...o, ...r, ref: n });
  }
);
m0.displayName = f0;
var v0 = "DropdownMenuLabel", h0 = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ c.jsx(e0, { ...o, ...r, ref: n });
  }
);
h0.displayName = v0;
var g0 = "DropdownMenuItem", Nl = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ c.jsx(t0, { ...o, ...r, ref: n });
  }
);
Nl.displayName = g0;
var x0 = "DropdownMenuCheckboxItem", b0 = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(n0, { ...o, ...r, ref: n });
});
b0.displayName = x0;
var y0 = "DropdownMenuRadioGroup", w0 = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(r0, { ...o, ...r, ref: n });
});
w0.displayName = y0;
var C0 = "DropdownMenuRadioItem", S0 = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(o0, { ...o, ...r, ref: n });
});
S0.displayName = C0;
var E0 = "DropdownMenuItemIndicator", k0 = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(i0, { ...o, ...r, ref: n });
});
k0.displayName = E0;
var _0 = "DropdownMenuSeparator", R0 = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(a0, { ...o, ...r, ref: n });
});
R0.displayName = _0;
var j0 = "DropdownMenuArrow", P0 = u.forwardRef(
  (e, n) => {
    const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
    return /* @__PURE__ */ c.jsx(s0, { ...o, ...r, ref: n });
  }
);
P0.displayName = j0;
var A0 = "DropdownMenuSubTrigger", M0 = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(c0, { ...o, ...r, ref: n });
});
M0.displayName = A0;
var O0 = "DropdownMenuSubContent", T0 = u.forwardRef((e, n) => {
  const { __scopeDropdownMenu: t, ...r } = e, o = Re(t);
  return /* @__PURE__ */ c.jsx(
    l0,
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
T0.displayName = O0;
var D0 = Pl, N0 = Ml, I0 = Ol, L0 = Dl, F0 = Nl;
function Nb({ children: e, items: n, className: t, align: r = "end", side: o = "bottom" }) {
  return /* @__PURE__ */ c.jsxs(D0, { children: [
    /* @__PURE__ */ c.jsx(N0, { asChild: !0, children: e }),
    /* @__PURE__ */ c.jsx(I0, { children: /* @__PURE__ */ c.jsx(
      L0,
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
        children: n.map((i, a) => /* @__PURE__ */ c.jsxs(
          F0,
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
function Ib({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ c.jsx(
        "table",
        {
          "data-slot": "table",
          className: L("w-full caption-bottom text-sm", e),
          ...n
        }
      )
    }
  );
}
function Lb({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: L("border-b-2 border-b-gray-50", e),
      ...n
    }
  );
}
function Fb({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: L("[&_tr:last-child]:border-0", e),
      ...n
    }
  );
}
function zb({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
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
function $b({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
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
function Wb({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: L(
        "font-sans text-sm text-gray-900 tracking-[0.02em] h-12 px-4 text-left align-middle font-semibold whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function Vb({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: L(
        "px-4 py-2 font-sans align-middle whitespace-nowrap text-sm tracking-[0.02em] text-gray-700 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...n
    }
  );
}
function Bb({
  className: e,
  ...n
}) {
  return /* @__PURE__ */ c.jsx(
    "caption",
    {
      "data-slot": "table-caption",
      className: L("text-muted-foreground mt-4 text-sm", e),
      ...n
    }
  );
}
function Hb({ className: e, ...n }) {
  return /* @__PURE__ */ c.jsx(
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
const z0 = Jn("font-sans text-gray-900", {
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
}), $0 = {
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
function Ub(e) {
  const { as: n, variant: t, className: r, children: o, ...i } = e, a = t ?? "body-md", s = n ?? $0[a];
  return /* @__PURE__ */ c.jsx(
    s,
    {
      className: L(
        z0({ variant: a }),
        r
      ),
      ...i,
      children: o
    }
  );
}
export {
  U0 as AlertDialog,
  jf as AnalyticsIcon,
  Pf as AnnouncementIcon,
  G0 as Badge,
  q0 as Breadcrumb,
  K0 as BreadcrumbItem,
  Z0 as BreadcrumbLink,
  Y0 as BreadcrumbList,
  X0 as BreadcrumbPage,
  J0 as BreadcrumbSeparator,
  Ro as Button,
  Q0 as Checkbox,
  Af as ChurchIcon,
  Mf as ClassIcon,
  Of as CrownIcon,
  eb as Dialog,
  B0 as DialogAction,
  H0 as DialogCancel,
  nb as DialogClose,
  rb as DialogContent,
  sb as DialogDescription,
  ib as DialogFooter,
  ob as DialogHeader,
  mf as DialogOverlay,
  ff as DialogPortal,
  ab as DialogTitle,
  tb as DialogTrigger,
  Tf as EventIcon,
  cb as Form,
  pb as FormControl,
  fb as FormDescription,
  lb as FormField,
  db as FormItem,
  ub as FormLabel,
  mb as FormMessage,
  Df as GiftIcon,
  Nf as HomeIcon,
  vb as Icon,
  hb as ImageUploader,
  wv as Input,
  xb as InputOTP,
  bb as InputOTPGroup,
  wb as InputOTPSeparator,
  yb as InputOTPSlot,
  Ps as Label,
  If as ListIcon,
  Lf as LockClosedIcon,
  Ff as LockOpenIcon,
  Ks as Logo,
  Cb as LogoLockup,
  Sb as MediaUploader,
  Eb as MenuItem,
  zf as MinistryIcon,
  jb as Pagination,
  gb as PasswordInput,
  $f as PodcastIcon,
  Pb as RadioButton,
  Ab as Section,
  Hg as Select,
  qg as SelectContent,
  kb as SelectGroup,
  Yg as SelectItem,
  _b as SelectLabel,
  Zg as SelectScrollDownButton,
  Kg as SelectScrollUpButton,
  Rb as SelectSeparator,
  Gg as SelectTrigger,
  Ug as SelectValue,
  Wf as SeriesIcon,
  Vf as SermonIcon,
  Mb as Shimmer,
  Ob as Sidebar,
  Tb as Stepper,
  Bf as SubscriptionIcon,
  Nb as SuspendedMenu,
  Ib as Table,
  Fb as TableBody,
  Bb as TableCaption,
  Vb as TableCell,
  zb as TableFooter,
  Wb as TableHead,
  Lb as TableHeader,
  $b as TableRow,
  Hb as Textarea,
  Ub as Typography,
  Hf as VideoIcon,
  Vp as badgeVariants,
  pf as buttonVariants,
  z0 as typographyVariants,
  er as useFormField
};
