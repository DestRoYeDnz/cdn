const t = { white: { bg: "#ffffff", fg: "#17191F" }, fawn: { bg: "#EEEEEE", fg: "#17191F" }, gray: { bg: "#F4F5F7", fg: "#1C2024" }, vulcan: { bg: "#111222", fg: "#ffffff" }, mirage: { bg: "#17191F", fg: "#ffffff" }, orange: { bg: "#FF6B00", fg: "#ffffff" }, field: { bg: "#E9E7E3", fg: "#17191F" }, toryBlue: { bg: "#1049A9", fg: "#ffffff" }, sanMarinoBlue: { bg: "#406DBA", fg: "#ffffff" }, black: { bg: "#000000", fg: "#ffffff" }, wvGradient: { bg: "linear-gradient(30deg, #FF5515 0%, #FF681F 50%, #F43C01 100%)", fg: "#ffffff" } }, e = { primary: { bg: "#FF6B00", fg: "#ffffff" }, primaryHover: { bg: "#FF6B00", fg: "#ffffff" }, primaryActive: { bg: "#FF6B00", fg: "#ffffff" }, primaryDisabled: { bg: "#FF6B00", fg: "#ffffff" }, white: { bg: "#E9E7E3", fg: "#17191F" }, whiteHover: { bg: "#E9E7E3", fg: "#17191F" }, whiteActive: { bg: "#E9E7E3", fg: "#17191F" }, whiteDisabled: { bg: "#E9E7E3", fg: "#17191F" }, black: { bg: "#000000", fg: "#ffffff" }, blackHover: { bg: "#000000", fg: "#ffffff" }, blackActive: { bg: "#000000", fg: "#ffffff" }, blackDisabled: { bg: "#000000", fg: "#ffffff" }, blue: { bg: "#1049A9", fg: "#ffffff" }, blueHover: { bg: "#406DBA", fg: "#ffffff" }, blueActive: { bg: "#1049A9", fg: "#ffffff" }, blueDisabled: { bg: "#1049A9", fg: "#ffffff" }, outlineDark: { bg: "transparent", fg: "#17191F", border: "#17191F" }, outlineLight: { bg: "transparent", fg: "#ffffff", border: "#ffffff" }, outlineDarkHover: { bg: "transparent", fg: "#17191F", border: "#17191F" }, outlineLightHover: { bg: "transparent", fg: "#ffffff", border: "#ffffff" }, outlineDarkActive: { bg: "transparent", fg: "#17191F", border: "#17191F" }, outlineLightActive: { bg: "transparent", fg: "#ffffff", border: "#ffffff" }, outlineDarkDisabled: { bg: "transparent", fg: "#17191F", border: "#17191F" }, ghostDark: { bg: "transparent", fg: "#17191F", border: "transparent" }, ghostLight: { bg: "transparent", fg: "#ffffff", border: "transparent" }, ghostDarkHover: { bg: "transparent", fg: "#17191F", border: "transparent" }, ghostLightHover: { bg: "transparent", fg: "#ffffff", border: "transparent" }, ghostDarkActive: { bg: "transparent", fg: "#17191F", border: "transparent" }, ghostLightActive: { bg: "transparent", fg: "#ffffff", border: "transparent" }, ghostDarkDisabled: { bg: "transparent", fg: "#17191F", border: "transparent" }, ghostLightDisabled: { bg: "transparent", fg: "#ffffff", border: "transparent" }, wvGradient: { bg: "linear-gradient(30deg, #FF5515 0%, #FF681F 50%, #F43C01 100%)", fg: "#ffffff" }, wvGradientHover: { bg: "linear-gradient(30deg, #FF5515 0%, #FF681F 50%, #F43C01 100%)", fg: "#ffffff" }, wvGradientActive: { bg: "linear-gradient(30deg, #FF5515 0%, #FF681F 50%, #F43C01 100%)", fg: "#ffffff" }, wvGradientDisabled: { bg: "linear-gradient(30deg, #FF5515 0%, #FF681F 50%, #F43C01 100%)", fg: "#ffffff" } }, s = e => t[e] || null, i = t => e[t] || null, r = globalThis, n = r.ShadowRoot && (void 0 === r.ShadyCSS || r.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, a = Symbol(), o = new WeakMap; let l = class { constructor(t, e, s) { if (this._$cssResult$ = !0, s !== a) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead."); this.cssText = t, this.t = e } get styleSheet() { let t = this.o; const e = this.t; if (n && void 0 === t) { const s = void 0 !== e && 1 === e.length; s && (t = o.get(e)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), s && o.set(e, t)) } return t } toString() { return this.cssText } }; const c = n ? t => t : t => t instanceof CSSStyleSheet ? (t => { let e = ""; for (const s of t.cssRules) e += s.cssText; return (t => new l("string" == typeof t ? t : t + "", void 0, a))(e) })(t) : t, { is: d, defineProperty: h, getOwnPropertyDescriptor: g, getOwnPropertyNames: u, getOwnPropertySymbols: p, getPrototypeOf: f } = Object, m = globalThis, b = m.trustedTypes, v = b ? b.emptyScript : "", w = m.reactiveElementPolyfillSupport, x = (t, e) => t, y = { toAttribute(t, e) { switch (e) { case Boolean: t = t ? v : null; break; case Object: case Array: t = null == t ? t : JSON.stringify(t) }return t }, fromAttribute(t, e) { let s = t; switch (e) { case Boolean: s = null !== t; break; case Number: s = null === t ? null : Number(t); break; case Object: case Array: try { s = JSON.parse(t) } catch (t) { s = null } }return s } }, $ = (t, e) => !d(t, e), S = { attribute: !0, type: String, converter: y, reflect: !1, useDefault: !1, hasChanged: $ }; Symbol.metadata ??= Symbol("metadata"), m.litPropertyMetadata ??= new WeakMap; let z = class extends HTMLElement { static addInitializer(t) { this._$Ei(), (this.l ??= []).push(t) } static get observedAttributes() { return this.finalize(), this._$Eh && [...this._$Eh.keys()] } static createProperty(t, e = S) { if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) { const s = Symbol(), i = this.getPropertyDescriptor(t, s, e); void 0 !== i && h(this.prototype, t, i) } } static getPropertyDescriptor(t, e, s) { const { get: i, set: r } = g(this.prototype, t) ?? { get() { return this[e] }, set(t) { this[e] = t } }; return { get: i, set(e) { const n = i?.call(this); r?.call(this, e), this.requestUpdate(t, n, s) }, configurable: !0, enumerable: !0 } } static getPropertyOptions(t) { return this.elementProperties.get(t) ?? S } static _$Ei() { if (this.hasOwnProperty(x("elementProperties"))) return; const t = f(this); t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties) } static finalize() { if (this.hasOwnProperty(x("finalized"))) return; if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(x("properties"))) { const t = this.properties, e = [...u(t), ...p(t)]; for (const s of e) this.createProperty(s, t[s]) } const t = this[Symbol.metadata]; if (null !== t) { const e = litPropertyMetadata.get(t); if (void 0 !== e) for (const [t, s] of e) this.elementProperties.set(t, s) } this._$Eh = new Map; for (const [e, s] of this.elementProperties) { const t = this._$Eu(e, s); void 0 !== t && this._$Eh.set(t, e) } this.elementStyles = this.finalizeStyles(this.styles) } static finalizeStyles(t) { const e = []; if (Array.isArray(t)) { const s = new Set(t.flat(1 / 0).reverse()); for (const t of s) e.unshift(c(t)) } else void 0 !== t && e.push(c(t)); return e } static _$Eu(t, e) { const s = e.attribute; return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0 } constructor() { super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev() } _$Ev() { this._$ES = new Promise(t => this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(t => t(this)) } addController(t) { (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.() } removeController(t) { this._$EO?.delete(t) } _$E_() { const t = new Map, e = this.constructor.elementProperties; for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]); t.size > 0 && (this._$Ep = t) } createRenderRoot() { const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions); return ((t, e) => { if (n) t.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet); else for (const s of e) { const e = document.createElement("style"), i = r.litNonce; void 0 !== i && e.setAttribute("nonce", i), e.textContent = s.cssText, t.appendChild(e) } })(t, this.constructor.elementStyles), t } connectedCallback() { this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(t => t.hostConnected?.()) } enableUpdating(t) { } disconnectedCallback() { this._$EO?.forEach(t => t.hostDisconnected?.()) } attributeChangedCallback(t, e, s) { this._$AK(t, s) } _$ET(t, e) { const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s); if (void 0 !== i && !0 === s.reflect) { const r = (void 0 !== s.converter?.toAttribute ? s.converter : y).toAttribute(e, s.type); this._$Em = t, null == r ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null } } _$AK(t, e) { const s = this.constructor, i = s._$Eh.get(t); if (void 0 !== i && this._$Em !== i) { const t = s.getPropertyOptions(i), r = "function" == typeof t.converter ? { fromAttribute: t.converter } : void 0 !== t.converter?.fromAttribute ? t.converter : y; this._$Em = i; const n = r.fromAttribute(e, t.type); this[i] = n ?? this._$Ej?.get(i) ?? n, this._$Em = null } } requestUpdate(t, e, s) { if (void 0 !== t) { const i = this.constructor, r = this[t]; if (s ??= i.getPropertyOptions(t), !((s.hasChanged ?? $)(r, e) || s.useDefault && s.reflect && r === this._$Ej?.get(t) && !this.hasAttribute(i._$Eu(t, s)))) return; this.C(t, e, s) } !1 === this.isUpdatePending && (this._$ES = this._$EP()) } C(t, e, { useDefault: s, reflect: i, wrapped: r }, n) { s && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), !0 !== r || void 0 !== n) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), !0 === i && this._$Em !== t && (this._$Eq ??= new Set).add(t)) } async _$EP() { this.isUpdatePending = !0; try { await this._$ES } catch (t) { Promise.reject(t) } const t = this.scheduleUpdate(); return null != t && await t, !this.isUpdatePending } scheduleUpdate() { return this.performUpdate() } performUpdate() { if (!this.isUpdatePending) return; if (!this.hasUpdated) { if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) { for (const [t, e] of this._$Ep) this[t] = e; this._$Ep = void 0 } const t = this.constructor.elementProperties; if (t.size > 0) for (const [e, s] of t) { const { wrapped: t } = s, i = this[e]; !0 !== t || this._$AL.has(e) || void 0 === i || this.C(e, void 0, s, i) } } let t = !1; const e = this._$AL; try { t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach(t => t.hostUpdate?.()), this.update(e)) : this._$EM() } catch (e) { throw t = !1, this._$EM(), e } t && this._$AE(e) } willUpdate(t) { } _$AE(t) { this._$EO?.forEach(t => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t) } _$EM() { this._$AL = new Map, this.isUpdatePending = !1 } get updateComplete() { return this.getUpdateComplete() } getUpdateComplete() { return this._$ES } shouldUpdate(t) { return !0 } update(t) { this._$Eq &&= this._$Eq.forEach(t => this._$ET(t, this[t])), this._$EM() } updated(t) { } firstUpdated(t) { } }; z.elementStyles = [], z.shadowRootOptions = { mode: "open" }, z[x("elementProperties")] = new Map, z[x("finalized")] = new Map, w?.({ ReactiveElement: z }), (m.reactiveElementVersions ??= []).push("2.1.1"); const k = globalThis, C = k.trustedTypes, A = C ? C.createPolicy("lit-html", { createHTML: t => t }) : void 0, _ = "$lit$", E = `lit$${Math.random().toFixed(9).slice(2)}$`, j = "?" + E, R = `<${j}>`, I = document, U = () => I.createComment(""), L = t => null === t || "object" != typeof t && "function" != typeof t, q = Array.isArray, N = "[ \t\n\f\r]", F = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, O = /-->/g, P = />/g, H = RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), M = /'/g, T = /"/g, B = /^(?:script|style|textarea|title)$/i, W = (t, ...e) => ({ _$litType$: 1, strings: t, values: e }), D = Symbol.for("lit-noChange"), Z = Symbol.for("lit-nothing"), V = new WeakMap, G = I.createTreeWalker(I, 129); function J(t, e) { if (!q(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array"); return void 0 !== A ? A.createHTML(e) : e } const K = (t, e) => { const s = t.length - 1, i = []; let r, n = 2 === e ? "<svg>" : 3 === e ? "<math>" : "", a = F; for (let o = 0; o < s; o++) { const e = t[o]; let s, l, c = -1, d = 0; for (; d < e.length && (a.lastIndex = d, l = a.exec(e), null !== l);)d = a.lastIndex, a === F ? "!--" === l[1] ? a = O : void 0 !== l[1] ? a = P : void 0 !== l[2] ? (B.test(l[2]) && (r = RegExp("</" + l[2], "g")), a = H) : void 0 !== l[3] && (a = H) : a === H ? ">" === l[0] ? (a = r ?? F, c = -1) : void 0 === l[1] ? c = -2 : (c = a.lastIndex - l[2].length, s = l[1], a = void 0 === l[3] ? H : '"' === l[3] ? T : M) : a === T || a === M ? a = H : a === O || a === P ? a = F : (a = H, r = void 0); const h = a === H && t[o + 1].startsWith("/>") ? " " : ""; n += a === F ? e + R : c >= 0 ? (i.push(s), e.slice(0, c) + _ + e.slice(c) + E + h) : e + E + (-2 === c ? o : h) } return [J(t, n + (t[s] || "<?>") + (2 === e ? "</svg>" : 3 === e ? "</math>" : "")), i] }; class Y { constructor({ strings: t, _$litType$: e }, s) { let i; this.parts = []; let r = 0, n = 0; const a = t.length - 1, o = this.parts, [l, c] = K(t, e); if (this.el = Y.createElement(l, s), G.currentNode = this.el.content, 2 === e || 3 === e) { const t = this.el.content.firstChild; t.replaceWith(...t.childNodes) } for (; null !== (i = G.nextNode()) && o.length < a;) { if (1 === i.nodeType) { if (i.hasAttributes()) for (const t of i.getAttributeNames()) if (t.endsWith(_)) { const e = c[n++], s = i.getAttribute(t).split(E), a = /([.?@])?(.*)/.exec(e); o.push({ type: 1, index: r, name: a[2], strings: s, ctor: "." === a[1] ? st : "?" === a[1] ? it : "@" === a[1] ? rt : et }), i.removeAttribute(t) } else t.startsWith(E) && (o.push({ type: 6, index: r }), i.removeAttribute(t)); if (B.test(i.tagName)) { const t = i.textContent.split(E), e = t.length - 1; if (e > 0) { i.textContent = C ? C.emptyScript : ""; for (let s = 0; s < e; s++)i.append(t[s], U()), G.nextNode(), o.push({ type: 2, index: ++r }); i.append(t[e], U()) } } } else if (8 === i.nodeType) if (i.data === j) o.push({ type: 2, index: r }); else { let t = -1; for (; -1 !== (t = i.data.indexOf(E, t + 1));)o.push({ type: 7, index: r }), t += E.length - 1 } r++ } } static createElement(t, e) { const s = I.createElement("template"); return s.innerHTML = t, s } } function Q(t, e, s = t, i) { if (e === D) return e; let r = void 0 !== i ? s._$Co?.[i] : s._$Cl; const n = L(e) ? void 0 : e._$litDirective$; return r?.constructor !== n && (r?._$AO?.(!1), void 0 === n ? r = void 0 : (r = new n(t), r._$AT(t, s, i)), void 0 !== i ? (s._$Co ??= [])[i] = r : s._$Cl = r), void 0 !== r && (e = Q(t, r._$AS(t, e.values), r, i)), e } class X { constructor(t, e) { this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e } get parentNode() { return this._$AM.parentNode } get _$AU() { return this._$AM._$AU } u(t) { const { el: { content: e }, parts: s } = this._$AD, i = (t?.creationScope ?? I).importNode(e, !0); G.currentNode = i; let r = G.nextNode(), n = 0, a = 0, o = s[0]; for (; void 0 !== o;) { if (n === o.index) { let e; 2 === o.type ? e = new tt(r, r.nextSibling, this, t) : 1 === o.type ? e = new o.ctor(r, o.name, o.strings, this, t) : 6 === o.type && (e = new nt(r, this, t)), this._$AV.push(e), o = s[++a] } n !== o?.index && (r = G.nextNode(), n++) } return G.currentNode = I, i } p(t) { let e = 0; for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++ } } class tt { get _$AU() { return this._$AM?._$AU ?? this._$Cv } constructor(t, e, s, i) { this.type = 2, this._$AH = Z, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = i?.isConnected ?? !0 } get parentNode() { let t = this._$AA.parentNode; const e = this._$AM; return void 0 !== e && 11 === t?.nodeType && (t = e.parentNode), t } get startNode() { return this._$AA } get endNode() { return this._$AB } _$AI(t, e = this) { t = Q(this, t, e), L(t) ? t === Z || null == t || "" === t ? (this._$AH !== Z && this._$AR(), this._$AH = Z) : t !== this._$AH && t !== D && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : (t => q(t) || "function" == typeof t?.[Symbol.iterator])(t) ? this.k(t) : this._(t) } O(t) { return this._$AA.parentNode.insertBefore(t, this._$AB) } T(t) { this._$AH !== t && (this._$AR(), this._$AH = this.O(t)) } _(t) { this._$AH !== Z && L(this._$AH) ? this._$AA.nextSibling.data = t : this.T(I.createTextNode(t)), this._$AH = t } $(t) { const { values: e, _$litType$: s } = t, i = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = Y.createElement(J(s.h, s.h[0]), this.options)), s); if (this._$AH?._$AD === i) this._$AH.p(e); else { const t = new X(i, this), s = t.u(this.options); t.p(e), this.T(s), this._$AH = t } } _$AC(t) { let e = V.get(t.strings); return void 0 === e && V.set(t.strings, e = new Y(t)), e } k(t) { q(this._$AH) || (this._$AH = [], this._$AR()); const e = this._$AH; let s, i = 0; for (const r of t) i === e.length ? e.push(s = new tt(this.O(U()), this.O(U()), this, this.options)) : s = e[i], s._$AI(r), i++; i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i) } _$AR(t = this._$AA.nextSibling, e) { for (this._$AP?.(!1, !0, e); t !== this._$AB;) { const e = t.nextSibling; t.remove(), t = e } } setConnected(t) { void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t)) } } class et { get tagName() { return this.element.tagName } get _$AU() { return this._$AM._$AU } constructor(t, e, s, i, r) { this.type = 1, this._$AH = Z, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = Z } _$AI(t, e = this, s, i) { const r = this.strings; let n = !1; if (void 0 === r) t = Q(this, t, e, 0), n = !L(t) || t !== this._$AH && t !== D, n && (this._$AH = t); else { const i = t; let a, o; for (t = r[0], a = 0; a < r.length - 1; a++)o = Q(this, i[s + a], e, a), o === D && (o = this._$AH[a]), n ||= !L(o) || o !== this._$AH[a], o === Z ? t = Z : t !== Z && (t += (o ?? "") + r[a + 1]), this._$AH[a] = o } n && !i && this.j(t) } j(t) { t === Z ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "") } } class st extends et { constructor() { super(...arguments), this.type = 3 } j(t) { this.element[this.name] = t === Z ? void 0 : t } } class it extends et { constructor() { super(...arguments), this.type = 4 } j(t) { this.element.toggleAttribute(this.name, !!t && t !== Z) } } class rt extends et { constructor(t, e, s, i, r) { super(t, e, s, i, r), this.type = 5 } _$AI(t, e = this) { if ((t = Q(this, t, e, 0) ?? Z) === D) return; const s = this._$AH, i = t === Z && s !== Z || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== Z && (s === Z || i); i && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t } handleEvent(t) { "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t) } } class nt { constructor(t, e, s) { this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s } get _$AU() { return this._$AM._$AU } _$AI(t) { Q(this, t) } } const at = k.litHtmlPolyfillSupport; at?.(Y, tt), (k.litHtmlVersions ??= []).push("3.3.1"); const ot = globalThis; let lt = class extends z { constructor() { super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0 } createRenderRoot() { const t = super.createRenderRoot(); return this.renderOptions.renderBefore ??= t.firstChild, t } update(t) { const e = this.render(); this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ((t, e, s) => { const i = s?.renderBefore ?? e; let r = i._$litPart$; if (void 0 === r) { const t = s?.renderBefore ?? null; i._$litPart$ = r = new tt(e.insertBefore(U(), t), t, void 0, s ?? {}) } return r._$AI(t), r })(e, this.renderRoot, this.renderOptions) } connectedCallback() { super.connectedCallback(), this._$Do?.setConnected(!0) } disconnectedCallback() { super.disconnectedCallback(), this._$Do?.setConnected(!1) } render() { return D } }; lt._$litElement$ = !0, lt.finalized = !0, ot.litElementHydrateSupport?.({ LitElement: lt }); const ct = ot.litElementPolyfillSupport; ct?.({ LitElement: lt }), (ot.litElementVersions ??= []).push("4.2.1"); class dt { constructor(t) { } get _$AU() { return this._$AM._$AU } _$AT(t, e, s) { this._$Ct = t, this._$AM = e, this._$Ci = s } _$AS(t, e) { return this.update(t, e) } update(t, e) { return this.render(...e) } } class ht extends dt { constructor(t) { if (super(t), this.it = Z, 2 !== t.type) throw Error(this.constructor.directiveName + "() can only be used in child bindings") } render(t) { if (t === Z || null == t) return this._t = void 0, this.it = t; if (t === D) return t; if ("string" != typeof t) throw Error(this.constructor.directiveName + "() called with a non-string value"); if (t === this.it) return this._t; this.it = t; const e = [t]; return e.raw = e, this._t = { _$litType$: this.constructor.resultType, strings: e, values: [] } } } ht.directiveName = "unsafeHTML", ht.resultType = 1; const gt = (ut = ht, (...t) => ({ _$litDirective$: ut, values: t })); var ut; customElements.get("wvnz-accordion") || customElements.define("wvnz-accordion", class extends lt {
    static autoIdSeq = 0; static properties = { heading: { type: String, attribute: "heading" }, subheading: { type: String, attribute: "subheading" }, rightCTA: { type: String, attribute: "rightcta" }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-accordion-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } render() {
        return W`<section class="${"accordion " + this.className}">
            <div class="w-full">
                
                <div class="flex flex-col mb-8 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        ${this.heading ? W`<wvnz-landing-text variant="h2" weight="bold" class="mb-2">
                                ${this.heading}
                            </wvnz-landing-text>`: ""}

                        ${this.subheading ? W`<wvnz-landing-text variant="h4" color="secondary">
                                ${this.subheading}
                            </wvnz-landing-text>`: ""}
                    </div>

                    ${this.rightCTA ? W`<div class="mt-4 lg:mt-0">
                            <wvnz-cta></wvnz-cta>
                        </div>`: ""}
                </div>

                
                <div class="space-y-4">
                    <slot></slot>
                </div>
            </div>
        </section>`}
}); customElements.get("wvnz-accordion-item") || customElements.define("wvnz-accordion-item", class extends lt {
    static autoIdSeq = 0; static properties = { heading: { type: Object, attribute: !1 }, defaultOpen: { type: Boolean, attribute: "default-open" }, className: { type: String, attribute: "class-name" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-accordion-item-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get toggleItem() { return () => { } } toggleItem() { } render() {
        return W`<div class="${"overflow-hidden rounded-lg border border-gray-200 " + this.className}">
            <button @click=${this.toggleItem} class="flex justify-between items-center px-6 py-4 w-full text-left bg-white transition-colors duration-200 hover:bg-gray-50" aria-expanded="${this.isOpen}" aria-controls="${"accordion-content-" + this.heading?.replace(/\s+/g, "-")?.toLowerCase()}">
                <h5 class="flex-1 font-semibold text-gray-900">
                    ${this.heading}
                </h5>

                <svg class="${"w-5 h-5 text-gray-500 transition-transform duration-200 " + (this.isOpen ? "rotate-180" : "")}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" .strokeWidth=${2} d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>

            ${this.isOpen ? W`<div id="${"accordion-content-" + this.heading?.replace(/\s+/g, "-")?.toLowerCase()}" class="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <div class="max-w-none prose prose-sm">
                        <slot></slot>
                    </div>
                </div>`: ""}
        </div>`}
}); customElements.get("wvnz-banner") || customElements.define("wvnz-banner", class extends lt {
    static autoIdSeq = 0; static properties = { desktopImage: { type: String, attribute: "desktopimage" }, mobileImage: { type: String, attribute: "mobileimage" }, alt: { type: String, attribute: "alt" }, href: { type: String, attribute: "href" }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-banner-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } render() {
        return W`<section class="${"banner " + this.className}">
            <wvnz-responsive-image .desktopSrc=${this.desktopImage} .mobileSrc=${this.mobileImage} alt="${this.alt}" href="${this.href}" class="w-full" objectFit="cover"></wvnz-responsive-image>
        </section>`}
}); customElements.get("wvnz-basic-section") || customElements.define("wvnz-basic-section", class extends lt {
    static autoIdSeq = 0; static properties = { heading: { type: String, attribute: "heading" }, subheading: { type: String, attribute: "subheading" }, backgroundColor: { type: String, attribute: "backgroundcolor" }, textColor: { type: String, attribute: "textcolor" }, shadow: { type: String, attribute: "shadow" }, maxWidth: { type: String, attribute: "maxwidth" }, className: { type: String, attribute: "classname" }, cta: { type: String, attribute: "cta" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-basic-section-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } render() {
        return W`<section class="${"inline-flex justify-center items-center px-4 py-20 w-full " + this.className}" style="${(() => { const t = {}; return t.backgroundColor = this.backgroundColor, t.boxShadow = this.shadow, t.margin = "0 auto", Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
            <div class="inline-flex flex-col justify-start items-center w-full">
                <div class="w-full max-w-[550px] flex flex-col justify-start items-center">
                    <div class="flex flex-col justify-start items-center w-full">
                        <h2 class="w-full text-center text-6xl font-semibold font-['Hanken_Grotesk'] leading-[68px]" style="${(() => { const t = {}; return t.color = this.textColor, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                            ${this.heading}
                        </h2>
                    </div>
                    <div class="flex flex-col justify-start items-center py-4 w-full">
                        <p class="w-full text-center text-lg font-normal font-['Hanken_Grotesk'] leading-normal" style="${(() => { const t = {}; return t.color = this.textColor, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                            ${this.subheading}
                        </p>
                    </div>
                    ${this.cta ? W`<div class="flex justify-center items-center mt-6 w-full">
                            ${this.cta}
                        </div>`: ""}
                </div>
                <slot></slot>
            </div>
        </section>`}
}); customElements.get("wvnz-button") || customElements.define("wvnz-button", class extends lt {
    static autoIdSeq = 0; static properties = { variant: { type: String, attribute: "variant" }, colorScheme: { type: String, attribute: "color-scheme" }, size: { type: String, attribute: "size" }, disabled: { type: Boolean, attribute: "disabled" }, fullWidth: { type: Boolean, attribute: "fullwidth" }, onClick: { type: String, attribute: "onclick" }, href: { type: String, attribute: "href" }, target: { type: String, attribute: "target" }, rel: { type: String, attribute: "rel" }, className: { type: String, attribute: "classname" }, icon: { type: String, attribute: "icon" }, iconPosition: { type: String, attribute: "iconposition" }, gradient: { type: Boolean, attribute: "gradient" }, textShadow: { type: Boolean, attribute: "textshadow" }, label: { type: String, attribute: "label" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-button-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } updated(t) { if (t && 0 === t.size || !this.label) { const t = this.getAttribute("label"); t && this.label !== t && (this.label = t) } } get handleClick() { return () => { } } get baseClasses() { return "btn inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed" } get variantClasses() { return { primary: this.gradient ? "bg-gradient-to-t from-[#FF5515] to-[#FF6A2E] via-[#FF6A2E] text-white hover:from-[#E64C13] hover:to-[#FF5515] focus:ring-[#FF5515]" : "bg-[#FF5515] text-white hover:bg-[#E64C13] focus:ring-[#FF5515]", blue: this.gradient ? "bg-gradient-to-t from-blue-600 to-blue-500 via-blue-500 text-white hover:from-blue-700 hover:to-blue-600 focus:ring-blue-500" : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500", secondary: "bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-500", "outline-light": "border border-neutral-200 text-inherit bg-transparent hover:bg-neutral-50 focus:ring-[#FF5515]", "outline-dark": "border border-neutral-900 text-neutral-900 bg-transparent hover:bg-neutral-50 focus:ring-[#FF5515]", outline: "border border-neutral-200 text-inherit bg-transparent hover:bg-neutral-50 focus:ring-[#FF5515]", ghost: "text-neutral-900 hover:bg-neutral-50 focus:ring-[#FF5515]" } } get sizeClasses() { return { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2 text-sm", lg: "px-5 py-3 text-base", xl: "px-6 py-4 text-lg" } } get widthClass() { return this.fullWidth ? "w-full" : "" } get shadowClass() { return this.textShadow ? "[text-shadow:#e32c13_0px_-0.5px_0px]" : "" } get classes() { let t = this.colorScheme ? i(this.colorScheme) || s(this.colorScheme) : null; if (!t && this.variant) { const e = t => (t + "").split("-").map((t, e) => 0 === e ? t : t.charAt(0).toUpperCase() + t.slice(1)).join(""), s = i(e(this.variant)); s && (t = s) } const e = []; t && (t.bg && e.push((t.bg + "").includes("gradient") ? "background-image:" + t.bg : "background-color:" + t.bg), t.fg && e.push("color:" + t.fg), t.border && e.push(`border-color:${t.border};border-width:1px;border-style:solid`)); const r = e.join("; "), n = [this.baseClasses, t ? "" : this.variantClasses?.[this.variant] || "", this.sizeClasses?.[this.size], this.widthClass, this.shadowClass, this.className, this.disabled ? "pointer-events-none opacity-50" : ""]?.filter(Boolean)?.join(" "); return this._inlineStyle = r, n } get effectiveLabel() { return "" + (this.label ?? this.getAttribute("label") ?? "") } renderContent() {
        return W`
            ${this.icon && "left" === this.iconPosition && this.renderIcon()}
            ${this.effectiveLabel}
            ${this.icon && "right" === this.iconPosition && this.renderIcon()}
        `} render() {
        return W`<a href="${this.href}" target="${this.target}" rel="${this.rel || ("_blank" === this.target ? "noopener noreferrer" : this.undefined)}" @click=${this.handleClick} class="${this.classes}" style="${this._inlineStyle || ""}" aria-disabled="${this.disabled}" .tabIndex=${this.disabled ? void 0 : this.undefined}>
                ${this.renderContent()}
            </a>`}
}); customElements.get("wvnz-card") || customElements.define("wvnz-card", class extends lt {
    static autoIdSeq = 0; static properties = { heading: { type: String, attribute: "heading" }, variant: { type: String, attribute: "variant" }, padding: { type: String, attribute: "padding" }, className: { type: String, attribute: "classname" }, colorScheme: { type: String, attribute: "color-scheme" }, imageHeader: { type: Object, attribute: !1 }, imageHeaderSrc: { type: String, attribute: "imageheadersrc" }, imageHeaderAlt: { type: String, attribute: "imageheaderalt" }, imageHeaderHeight: { type: String, attribute: "imageheaderheight" }, outlined: { type: Boolean, attribute: "outlined" }, borderColor: { type: String, attribute: "bordercolor" }, buttons: { type: String, attribute: "buttons" } }; constructor() { super(), this.colorScheme = "white" } firstUpdated() { if (this.id || (this.id = "wvnz-card-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } connectedCallback() { if (super.connectedCallback(), !this.colorScheme) { const t = this.getAttribute("color-scheme") || this.getAttribute("colorscheme"); this.colorScheme = t || "white" } } get baseClasses() { return "relative bg-white rounded-2xl overflow-hidden" } get variantClasses() { return { default: "shadow-sm", elevated: "shadow-lg", outlined: "" } } get paddingClasses() { return { none: "", sm: "p-4", md: "p-8", lg: "px-[60px] py-16" } } get borderClasses() { return this.outlined ? "border border-solid" : "" } get cardClasses() { return [this.baseClasses, this.variantClasses?.[this.variant] || "", this.paddingClasses?.[this.padding] || "", this.borderClasses, this.className]?.filter(Boolean)?.join(" ") } get borderStyle() { return this.outlined ? { borderColor: this.borderColor } : {} } get hasButtons() { return !!(this.querySelector('[slot="buttons"]') || this.querySelector('[slot="primary-button"]') || this.querySelector('[slot="secondary-button"]')) } get resolvedImageHeaderSrc() { return this.imageHeader?.src || this.imageHeaderSrc || this.getAttribute("imageheadersrc") || this.getAttribute("image-header-src") } renderImageHeader() {
        return W`<div class="w-full h-[240px]">
                <img class="w-full h-full object-cover rounded-tl-[32px] rounded-tr-[32px]" .src=${this.resolvedImageHeaderSrc} alt="${this.imageHeader?.alt || this.imageHeaderAlt || ""}" style="${(() => { const t = this.imageHeader?.height || this.imageHeaderHeight ? { height: this.imageHeader?.height || this.imageHeaderHeight } : this.undefined; return t && "object" == typeof t ? Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") : "" })()}"></img>
            </div>`} render() {
        return W`<div class="${this.cardClasses}" style="${(() => { const t = s?.(this.colorScheme) || s?.("white") || { bg: "#ffffff", fg: "#17191F" }, e = { ...this.borderStyle }; return t?.bg && ((t.bg + "").includes("gradient") ? e.backgroundImage = t.bg : e.backgroundColor = t.bg), t?.fg && (e.color = t.fg), Object.entries(e).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
            ${this.resolvedImageHeaderSrc && this.renderImageHeader()}
            <div class="flex flex-col flex-1 justify-between items-start self-stretch px-8 pt-6 pb-12">
                <div class="flex flex-col gap-4 justify-start items-start self-stretch">
                    ${this.heading ? W`<div class="flex flex-col justify-start items-start self-stretch">
                            <wvnz-landing-text variant="h3" weight="semibold" class="text-color-blue-11 leading-9">${this.heading}</wvnz-landing-text>
                        </div>`: ""}
                    <div class="flex flex-col justify-start items-start self-stretch pb-10">
                        <div class="self-stretch justify-center text-color-grey-41 text-base leading-tight">
                            <slot name="content"></slot>
                            <slot></slot>
                        </div>
                    </div>
                </div>
                ${this.hasButtons ? W`<div class="inline-flex gap-4 justify-center items-center self-stretch px-5 py-3 mt-auto">
                        <slot name="buttons"></slot>
                        <slot name="primary-button"></slot>
                        <slot name="secondary-button"></slot>
                    </div>`: ""}
            </div>
        </div>`}
}); customElements.get("wvnz-card-group") || customElements.define("wvnz-card-group", class extends lt {
    static autoIdSeq = 0; static properties = { variant: { type: String, attribute: "variant" }, cardStyle: { type: String, attribute: "card-style" }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-card-group-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get gridClasses() { return { "2-col": "grid-cols-1 md:grid-cols-2", "3-col": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", "4-col": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4", "5-col": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" } } render() {
        return W`<section class="${"card-group " + this.className}">
            <div class="${"grid gap-6 " + this.gridClasses?.[this.variant] + " lg:gap-8"}">
                <slot></slot>
            </div>
        </section>`}
}); customElements.get("wvnz-cta") || customElements.define("wvnz-cta", class extends lt {
    static autoIdSeq = 0; static properties = { href: { type: String, attribute: "href" }, target: { type: String, attribute: "target" }, rel: { type: String, attribute: "rel" }, className: { type: String, attribute: "classname" }, variant: { type: String, attribute: "variant" }, size: { type: String, attribute: "size" }, fullWidth: { type: String, attribute: "fullwidth" }, gradient: { type: String, attribute: "gradient" }, textShadow: { type: String, attribute: "textshadow" }, icon: { type: String, attribute: "icon" }, label: { type: String, attribute: "label" } }; constructor() { super() } get effectiveLabel() { return (this.label ?? this.getAttribute("label") ?? (this.textContent ? this.textContent.trim() : "")) || "" } firstUpdated() { if (this.id || (this.id = "wvnz-cta-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } updated(t) { const e = this.getAttribute("label"); e && this.label !== e && (this.label = e) } render() {
        return W`<wvnz-button href="${this.href}" target="${this.target}" rel="${this.rel || ("_blank" === this.target ? "noopener noreferrer" : this.undefined)}"
                .variant=${this.variant} .size=${this.size} .fullWidth=${this.fullWidth} .gradient=${this.gradient} .textShadow=${this.textShadow} .icon=${this.icon}
                label="${this.effectiveLabel}" .label=${this.effectiveLabel}
                class="${"cta-button " + (this.className || "")}"></wvnz-button>`
    }
}); customElements.get("wvnz-donation-card") || customElements.define("wvnz-donation-card", class extends lt {
    static autoIdSeq = 0; static properties = { title: { type: String, attribute: "title" }, description: { type: String, attribute: "description" }, tag: { type: String, attribute: "tag" }, image: { type: String, attribute: "image" }, ctaUrl: { type: String, attribute: "cta-url" }, ctaText: { type: String, attribute: "cta-text" }, variant: { type: String, attribute: "variant" }, className: { type: String, attribute: "class-name" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-donation-card-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get variantClasses() { return { default: "bg-white border border-gray-200 hover:shadow-lg", featured: "bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200", compact: "bg-white border border-gray-200" } } get sizeClasses() { return { default: "p-6", featured: "p-8", compact: "p-4" } } render() {
        return W`<div class="${"rounded-lg transition-all duration-300 " + this.variantClasses?.[this.variant] + " " + this.sizeClasses?.[this.variant] + " " + this.className}">
            ${this.image ? W`<div class="mb-4">
                    <img src="${this.image}" alt="${this.title}" class="w-full h-48 object-cover rounded-md"></img>
                </div>`: ""}

            ${this.tag ? W`<div class="mb-3">
                    <span class="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                        ${this.tag}
                    </span>
                </div>`: ""}

            <h3 class="text-xl font-bold text-gray-900 mb-3">
                ${this.title}
            </h3>

            <p class="text-gray-600 mb-6 leading-relaxed">
                ${this.description}
            </p>

            <wvnz-button variant="primary" fullWidth @click=${() => this.window?.open(this.ctaUrl, "_blank")} class="bg-[#007BFF] hover:bg-[#0056b3] text-white">
                ${this.ctaText}
            </wvnz-button>
        </div>`}
}); customElements.get("wvnz-email-footer") || customElements.define("wvnz-email-footer", class extends lt {
    static autoIdSeq = 0; static properties = { socialIcons: { type: Object, attribute: !1 }, footerText: { type: Object, attribute: !1 }, address: { type: Object, attribute: !1 }, horizonImageUrl: { type: String, attribute: "horizon-image-url" }, className: { type: String, attribute: "class-name" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-email-footer-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } render() {
        return W`<div class="${"bg-[#ffffff] flex flex-col items-center justify-start p-0 relative rounded-tl-[32px] rounded-tr-[32px] w-[760px] " + this.className}">
            <div class="flex flex-col gap-[46px] items-center justify-start pb-0 pt-14 px-0 relative shrink-0 w-[600px]">
                
                <div class="flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                    <div class="flex flex-row gap-[30px] items-center justify-start pb-0 pt-5 px-0 relative shrink-0">
                        ${this.socialIcons?.instagram ? W`<div class="relative shrink-0 size-6">
                                <img alt="Instagram" class="block max-w-none size-full" src="${this.socialIcons?.instagram}"></img>
                            </div>`: ""}
                        ${this.socialIcons?.facebook ? W`<div class="relative shrink-0 size-[24.077px]">
                                <img alt="Facebook" class="block max-w-none size-full" src="${this.socialIcons?.facebook}"></img>
                            </div>`: ""}
                        ${this.socialIcons?.twitter ? W`<div class="h-[18px] relative shrink-0 w-[19.503px]">
                                <img alt="Twitter" class="block max-w-none size-full" src="${this.socialIcons?.twitter}"></img>
                            </div>`: ""}
                        ${this.socialIcons?.youtube ? W`<div class="h-[19.403px] relative shrink-0 w-[24.253px]">
                                <img alt="YouTube" class="block max-w-none size-full" src="${this.socialIcons?.youtube}"></img>
                            </div>`: ""}
                    </div>
                    <div class="h-[64.68px] overflow-clip relative shrink-0 w-[192.228px]">
                        <div class="absolute h-[214px] left-0 overflow-clip top-0 w-[636px]">
                            
                            <div class="absolute bottom-[24.416%] left-[63.302%] right-[8.222%] top-[24.294%]">
                                <img alt="Beacon" class="block max-w-none size-full" src="/assets/beacon.svg"></img>
                            </div>
                            <div class="absolute bottom-[45.818%] left-[83.832%] right-[9.656%] top-[28.084%]">
                                <img alt="Star" class="block max-w-none size-full" src="/assets/star.svg"></img>
                            </div>
                            <div class="absolute bottom-[24.84%] left-[8.176%] right-[20.681%] top-[46.724%]">
                                <img alt="Wordmark" class="block max-w-none size-full" src="/assets/wordmark.svg"></img>
                            </div>
                            <div class="absolute bottom-[69.397%] left-[93.302%] right-[5.02%] top-[25.631%]">
                                <img alt="Beacon Registration" class="block max-w-none size-full" src="/assets/beacon-reg.svg"></img>
                            </div>
                            <div class="absolute bottom-[39.43%] left-[79.731%] right-[18.591%] top-[55.598%]">
                                <img alt="Wordmark Registration" class="block max-w-none size-full" src="/assets/wordmark-reg.svg"></img>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#3f3d4c] text-[14px] text-center w-[480px]">
                    <p class="mb-0">
                        <span>${this.footerText?.split("unsubscribe")?.[0]}</span>
                        <span class="font-['Inter:Bold',_sans-serif] font-bold not-italic">unsubscribe</span>
                        <span>${void 0}</span>
                        <span class="font-['Inter:Bold',_sans-serif] font-bold not-italic">adjust your preferences</span>
                        <span>${this.footerText?.split("adjust your preferences")?.[1]}</span>
                    </p>
                    <p class="block mb-0"> </p>
                    <p class="block mb-0">${this.address?.line1}</p>
                    <p class="block mb-0">${this.address?.line2}</p>
                    <p class="block">${this.address?.city}</p>
                </div>
            </div>

            
            <div class="bg-center bg-cover bg-no-repeat h-[129px] shrink-0 w-[760px]" style="${(() => { const t = {}; return t.backgroundImage = "url('" + this.horizonImageUrl + "')", Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}"></div>
        </div>`}
}); customElements.get("wvnz-email-header") || customElements.define("wvnz-email-header", class extends lt {
    static autoIdSeq = 0; static properties = { title: { type: String, attribute: "title" }, logoUrl: { type: String, attribute: "logo-url" }, logoAlt: { type: String, attribute: "logo-alt" }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-email-header-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } render() {
        return W`<div class="${"flex flex-row items-center justify-between pb-0 pt-10 px-0 relative w-[600px] " + this.className}">
            <div class="flex flex-col gap-2.5 items-center justify-center pb-0 pt-6 px-0 relative shrink-0">
                <div class="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
                    <p class="block leading-[14px] whitespace-pre">${this.title}</p>
                </div>
            </div>
            <div class="h-[64.68px] overflow-clip relative shrink-0 w-[192.228px]">
                <div class="absolute h-[64.68px] left-0 top-0 w-[192.228px]">
                    <img alt="${this.logoAlt}" class="block max-w-none size-full" src="${this.logoUrl}"></img>
                </div>
            </div>
        </div>`}
}); customElements.get("wvnz-fine-print-section") || customElements.define("wvnz-fine-print-section", class extends lt {
    static autoIdSeq = 0; static properties = { content: { type: String, attribute: "content" }, isCard: { type: Boolean, attribute: "is-card" }, cta1: { type: String, attribute: "cta1" }, cta2: { type: String, attribute: "cta2" }, className: { type: String, attribute: "class-name" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-fine-print-section-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get contentElement() {
        return W`<div class="text-sm text-gray-600 leading-relaxed">
            ${gt(this.convertMarkdown(this.content || ""))}

            ${this.cta1 || this.cta2 ? W`<div class="flex flex-col sm:flex-row gap-4 mt-6">
                    ${this.cta1 ? W`<wvnz-cta size="sm"></wvnz-cta>` : ""}
                    ${this.cta2 ? W`<wvnz-cta size="sm"></wvnz-cta>` : ""}
                </div>`: ""}
        </div>`} convertMarkdown(t) { return this.markdown?.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")?.replace(/\*(.*?)\*/g, "<em>$1</em>")?.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#ff5515] hover:underline">$1</a>')?.replace(/\n/g, "<br>") } render() {
        return W`<section class="${"fine-print-section " + this.className}">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                        ${this.contentElement}
                    </div>
                </div>
            </section>`}
}); customElements.get("wvnz-form-block") || customElements.define("wvnz-form-block", class extends lt {
    static autoIdSeq = 0; static properties = { heading: { type: String, attribute: "heading" }, subheading: { type: String, attribute: "subheading" }, formEmbed: { type: Object, attribute: !1 }, colorScheme: { type: String, attribute: "colorscheme" }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-form-block-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get colorSchemeClasses() { return { default: { section: "bg-[#ffffff]", form: "bg-[#f8fafc] text-gray-900" }, light: { section: "bg-[#f8fafc]", form: "bg-white text-gray-900" }, dark: { section: "bg-gray-900", form: "bg-gray-800 text-white" }, blue: { section: "bg-blue-50", form: "bg-blue-100 text-blue-900" }, brand: { section: "bg-brand-50", form: "bg-brand-100 text-brand-900" } } } get scheme() { return { default: { section: "bg-[#ffffff]", form: "bg-[#f8fafc] text-gray-900" }, light: { section: "bg-[#f8fafc]", form: "bg-white text-gray-900" }, dark: { section: "bg-gray-900", form: "bg-gray-800 text-white" }, blue: { section: "bg-blue-50", form: "bg-blue-100 text-blue-900" }, brand: { section: "bg-brand-50", form: "bg-brand-100 text-brand-900" } }?.[this.colorScheme] || { section: "bg-[#ffffff]", form: "bg-[#f8fafc] text-gray-900" } } render() {
        return W`<section class="${"flex flex-col gap-12 items-center px-6 pt-16 pb-10 w-full md:px-24 md:pt-32 md:pb-20 " + this.scheme?.section + " " + this.className}">
            
            <div class="flex flex-col gap-6 items-center w-full">
                <div class="flex flex-col gap-4 items-center w-full max-w-4xl">
                    ${this.heading ? W`<div class="flex flex-col items-center pt-4 w-full">
                            <wvnz-landing-text variant="h2" weight="bold" class="w-full text-center text-color-blue-11 text-4xl md:text-6xl font-bold font-['Hanken_Grotesk'] leading-tight md:leading-[68px]">
                                ${this.heading}
                            </wvnz-landing-text>
                        </div>`: ""}
                    ${this.subheading ? W`<div class="flex flex-col items-center">
                            <wvnz-landing-text variant="h4" color="secondary" class="text-center text-color-grey-41 text-base md:text-lg font-normal font-['Hanken_Grotesk'] leading-normal">
                                ${this.subheading}
                            </wvnz-landing-text>
                        </div>`: ""}
                </div>
            </div>
            
            <div class="flex flex-wrap gap-4 justify-center items-start w-full">
                <div class="grid grid-cols-1 gap-4 w-full max-w-2xl md:grid-cols-1 lg:grid-cols-1">
                    <div class="${"p-8 rounded-2xl md:p-12 " + this.scheme?.form}">
                        ${this.formEmbed?.formEmbedCode ? W`${gt(this.formEmbed?.formEmbedCode)}` : W`<div class="py-12 text-center">
                                <svg class="mx-auto mb-4 w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" .strokeWidth=${2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                <p class="text-gray-500">
                                    Form embed code will appear here
                                </p>
                                <slot></slot>
                            </div>`}
                    </div>
                </div>
            </div>
        </section>`}
}); customElements.get("wvnz-half-half") || customElements.define("wvnz-half-half", class extends lt {
    static autoIdSeq = 0; static properties = { backgroundColor: { type: String, attribute: "background-color" }, textColor: { type: String, attribute: "text-color" }, reverse: { type: Boolean, attribute: "reverse" }, verticalPadding: { type: String, attribute: "vertical-padding" }, horizontalPadding: { type: String, attribute: "horizontal-padding" }, heading: { type: String, attribute: "heading" }, subheading: { type: String, attribute: "subheading" }, content: { type: String, attribute: "content" }, buttons: { type: String, attribute: "buttons" }, right: { type: String, attribute: "right" }, className: { type: String, attribute: "class-name" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-half-half-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } render() {
        return W`<wvnz-container .backgroundColor=${this.backgroundColor} maxWidth="full" .verticalPadding=${this.verticalPadding} .horizontalPadding=${this.horizontalPadding} class="${"wvnz-halfhalf " + this.className}">
            <div class="flex flex-col gap-8 items-stretch mx-auto w-full max-w-[1240px] md:flex-row">
                
                <div class="${"flex-1 flex flex-col justify-center " + (this.reverse ? "order-2 md:order-1" : "order-1") + " p-8 md:p-12"}" style="${(() => { const t = {}; return t.backgroundColor = this.backgroundColor, t.color = this.textColor, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                    ${this.heading ? W`<div class="mb-2 text-3xl font-bold font-['Inter'] leading-tight" style="${(() => { const t = {}; return t.color = this.textColor, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                            ${this.heading}
                        </div>`: ""}
                    ${this.subheading ? W`<div class="mb-4 text-lg font-semibold font-['Inter'] opacity-80" style="${(() => { const t = {}; return t.color = this.textColor, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                            ${this.subheading}
                        </div>`: ""}
                    ${this.content ? W`<div class="mb-6 text-base font-normal font-['Inter'] leading-relaxed" style="${(() => { const t = {}; return t.color = this.textColor, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                            ${this.content}
                        </div>`: ""}
                    ${this.buttons ? W`<div class="flex flex-wrap gap-4">${this.buttons}</div>` : ""}
                </div>
                
                <div class="${"flex-1 flex flex-col justify-center items-center " + (this.reverse ? "order-1 md:order-2" : "order-2")}" style="${(() => { const t = {}; return t.backgroundColor = this.backgroundColor, t.color = this.textColor, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                    ${this.right}
                </div>
            </div>
        </wvnz-container>`}
}); customElements.get("wvnz-container") || customElements.define("wvnz-container", class extends lt { static autoIdSeq = 0; static properties = { backgroundColor: { type: String, attribute: "backgroundcolor" }, colorScheme: { type: String, attribute: "color-scheme" }, maxWidth: { type: String, attribute: "maxwidth" }, verticalPadding: { type: String, attribute: "verticalpadding" }, horizontalPadding: { type: String, attribute: "horizontalpadding" }, className: { type: String, attribute: "classname" } }; constructor() { super() } createRenderRoot() { return this } connectedCallback() { super.connectedCallback(), this.style.display || (this.style.display = "block"), this.style.width || (this.style.width = "100%"); const t = this.maxWidth, e = this.verticalPadding, s = this.horizontalPadding, i = this.backgroundColor, r = this.className, n = this.colorScheme; if (!this.maxWidth) { const t = this.getAttribute("max-width") ?? this.getAttribute("maxwidth"); null != t && (this.maxWidth = "" === t ? "full" : t) } this.verticalPadding || (this.verticalPadding = this.getAttribute("vertical-padding") || this.getAttribute("verticalpadding") || this.verticalPadding), this.horizontalPadding || (this.horizontalPadding = this.getAttribute("horizontal-padding") || this.getAttribute("horizontalpadding") || this.horizontalPadding), this.backgroundColor || (this.backgroundColor = this.getAttribute("background-color") || this.getAttribute("backgroundcolor") || this.backgroundColor), this.className || (this.className = this.getAttribute("classname") || ""), this.colorScheme || (this.colorScheme = this.getAttribute("color-scheme") || this.getAttribute("colorscheme") || this.colorScheme), t === this.maxWidth && e === this.verticalPadding && s === this.horizontalPadding && i === this.backgroundColor && r === this.className && n === this.colorScheme || this.requestUpdate() } firstUpdated() { this.id || (this.id = "wvnz-container-" + ++this.constructor.autoIdSeq) } get maxWidthClasses() { return { sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg", xl: "max-w-xl", xxl: "max-w-2xl", internal: "max-w-[1240px]", full: "w-full max-w-full" } } get verticalPaddingClasses() { return { none: "", sm: "py-4", md: "py-8", lg: "py-14", xl: "py-20" } } get horizontalPaddingClasses() { return { none: "", sm: "px-4", md: "px-8", lg: "px-14", xl: "px-20" } } get resolvedMaxWidthStyle() { return "full" === this.maxWidth ? "" : `max-width:${{ sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", xxl: "42rem", internal: "1240px", full: null }[this.maxWidth] ?? "1240px"}; margin-left:auto; margin-right:auto;` } get resolvedPaddingStyle() { return `padding:${{ none: 0, sm: 16, md: 32, lg: 56, xl: 80 }[this.verticalPadding] ?? 0}px ${{ none: 0, sm: 16, md: 32, lg: 56, xl: 80 }[this.horizontalPadding] ?? 0}px;` } firstUpdated() { const t = this.querySelector("[data-wvnz-container-inner]"); if (t) { const e = document.createDocumentFragment(), s = []; for (let i = this.firstChild; i; i = i.nextSibling)i !== t && (1 === i.nodeType && i.hasAttribute && i.hasAttribute("data-wvnz-container-inner") || s.push(i)); s.forEach(t => e.appendChild(t)), t.appendChild(e) } } render() { const e = (e => { if (!e) return null; const s = (e + "").trim(), i = s.split("-").map((t, e) => 0 === e ? t : t.charAt(0).toUpperCase() + t.slice(1)).join(""); if (t[i]) return i; const r = s.replace(/[\s_-]/g, "").toLowerCase(), n = Object.keys(t).find(t => t.replace(/[\s_-]/g, "").toLowerCase() === r); return n || s })(this.colorScheme), i = e ? s(e) : null, r = i?.bg || this.backgroundColor, n = i?.fg || void 0, a = ["mx-auto", "w-full", this.maxWidthClasses?.[this.maxWidth] || "", this.verticalPaddingClasses?.[this.verticalPadding] || "", this.horizontalPaddingClasses?.[this.horizontalPadding] || "", this.className].filter(Boolean).join(" "), o = (() => { const t = []; r && t.push((r + "").includes("gradient") ? "background-image:" + r : "background-color:" + r); const e = this.resolvedMaxWidthStyle; return e && t.push(e), t.push(this.resolvedPaddingStyle), t.join("; ") })(); return W`<div class="${a}" style="${o}; ${n ? "color:" + n : ""}" data-wvnz-container-inner></div>` } }); class pt extends lt {
    static properties = { backgroundColor: { type: String, attribute: !0 }, textColor: { type: String, attribute: !0 }, colorscheme: { type: String, attribute: "colorscheme" }, reverse: { type: Boolean, attribute: "reverse", converter: { fromAttribute: t => null !== t && !/^(false|0|no)$/i.test(t) } }, verticalPadding: { type: String, attribute: !0 }, horizontalPadding: { type: String, attribute: !0 }, heading: { type: String, attribute: !0 }, subheading: { type: String, attribute: !0 }, content: { type: String, attribute: !0 }, buttons: { type: String, attribute: !0 }, right: { type: String, attribute: !0 }, className: { type: String, attribute: "class" } }; constructor() { super(), this.backgroundColor = "#ffffff", this.reverse = !1, this.verticalPadding = "lg", this.horizontalPadding = "md" } createRenderRoot() { return super.createRenderRoot() } connectedCallback() { if (super.connectedCallback(), !this.colorscheme) { const t = this.getAttribute("color-scheme") || this.getAttribute("colorscheme"); t && (this.colorscheme = t) } } firstUpdated() { if (this.id || (this.id = "wvnz-half-half-" + (++this.constructor.autoIdSeq || 1)), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = window.WVNZ_CSS_URL || new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } updated(t) { super.updated(t), (t.has("variant") || t.has("size") || t.has("disabled")) && this.requestUpdate() } render() {
        const t = this.reverse ? "md:order-2" : "md:order-1", e = this.reverse ? "md:order-1" : "md:order-2"; return W`<wvnz-container
      background-color="${this.backgroundColor || ""}"
      colorscheme="${this.colorscheme || ""}"
      max-width="full"
      vertical-padding="${this.verticalPadding || ""}"
      horizontal-padding="${this.horizontalPadding || ""}"
      class="${("wvnz-halfhalf " + (this.className || "")).trim()}"
    >
      <div class="flex flex-col gap-8 items-stretch mx-auto w-full max-w-[1240px] md:flex-row">
        <div class="${`flex-1 flex flex-col justify-center ${t} p-8 md:p-12`}">
          <div class="mb-2 text-3xl font-bold font-['Inter'] leading-tight">
            <slot name="heading">${this.heading || ""}</slot>
          </div>
          <div class="mb-4 text-lg font-semibold font-['Inter'] opacity-80">
            <slot name="subheading">${this.subheading || ""}</slot>
          </div>
          <div class="mb-6 text-base font-normal font-['Inter'] leading-relaxed">
            <slot name="content">${this.content || ""}</slot>
          </div>
          <div class="flex flex-wrap gap-4">
            <slot name="buttons">${this.buttons || ""}</slot>
          </div>
        </div>
        <div class="${"flex-1 flex flex-col justify-center items-center " + e}">
          <slot name="right">${this.right || ""}</slot>
        </div>
      </div>
    </wvnz-container>`}
} customElements.get("wvnz-hallf-half") || customElements.define("wvnz-hallf-half", pt), customElements.get("wvnz-half-half") || customElements.define("wvnz-half-half", pt); customElements.get("wvnz-hero-with-cards") || customElements.define("wvnz-hero-with-cards", class extends lt {
    static autoIdSeq = 0; static properties = { heading: { type: String, attribute: "heading" }, subheading: { type: String, attribute: "subheading" }, ctaText: { type: String, attribute: "ctatext" }, ctaOnClick: { type: String, attribute: "ctaonclick" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-hero-with-cards-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } render() {
        return W`<section class="flex flex-col gap-12 items-center px-6 pt-16 pb-10 w-full md:px-24 md:pt-32 md:pb-20">
            
            <div class="flex flex-col gap-6 items-center w-full">
                <div class="flex flex-col gap-4 items-center w-full max-w-4xl">
                    <div class="flex flex-col items-center pt-4 w-full">
                        <h1 class="w-full text-center text-color-blue-11 text-4xl md:text-6xl font-bold font-['Hanken_Grotesk'] leading-tight md:leading-[68px]">
                            ${this.heading}
                        </h1>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="text-center text-color-grey-41 text-base md:text-lg font-normal font-['Hanken_Grotesk'] leading-normal">
                            ${this.subheading}
                        </p>
                    </div>
                </div>
                <div class="flex justify-center mt-4 w-full">
                    <wvnz-cta variant="primary" href="#" @click=${this.ctaOnClick}>
                        ${this.ctaText}
                    </wvnz-cta>
                </div>
            </div>
            
            <div class="flex flex-wrap gap-4 justify-center items-start w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
                    <slot></slot>
                </div>
            </div>
        </section>`}
}); customElements.get("wvnz-hero") || customElements.define("wvnz-hero", class extends lt {
    static autoIdSeq = 0; static properties = { variant: { type: String, attribute: "variant" }, size: { type: String, attribute: "size" }, colorScheme: { type: String, attribute: "colorscheme" }, background: { type: Object, attribute: !1 }, backgroundType: { type: String, attribute: "background-type" }, backgroundDesktopImage: { type: String, attribute: "background-desktop-image" }, backgroundMobileImage: { type: String, attribute: "background-mobile-image" }, backgroundColor: { type: String, attribute: "background-color" }, heading: { type: String, attribute: "heading" }, subheading: { type: String, attribute: "subheading" }, cta1: { type: String, attribute: "cta1" }, cta2: { type: String, attribute: "cta2" }, formEmbed: { type: Object, attribute: !1 }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-hero-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = window.WVNZ_CSS_URL || new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get colorSchemes() { return { white: { bg: "#ffffff", fg: "#17191F" }, fawn: { bg: "#f8f9fa", fg: "#17191F" }, orange: { bg: "#ff5515", fg: "#ffffff" } } } get currentScheme() { return s?.(this.colorScheme) || this.colorSchemes?.[this.colorScheme] } get sizeClasses() { return { auto: "py-16", small: "min-h-[400px] py-16", medium: "min-h-[600px] py-24", large: "min-h-[800px] py-32" } } renderBackground() {
        const t = this.backgroundType || this.background?.type; if ("image" === t) {
            const t = this.backgroundDesktopImage || this.background?.desktopImage; return t ? W`<div class="absolute inset-0 z-0">
        <wvnz-responsive-image .desktopSrc=${t} .mobileSrc=${this.backgroundMobileImage || this.background?.mobileImage || t} alt="Hero background" class="object-cover w-full h-full" objectFit="cover"></wvnz-responsive-image>
        <div class="absolute inset-0 bg-black/40"></div>
      </div>`: ""
        } if ("color" === t) { const t = this.backgroundColor || this.background?.color; return t ? W`<div class="absolute inset-0 z-0" style="${Object.entries({ backgroundColor: t }).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ")}"></div>` : "" } return ""
    } renderSplitContent() {
        const t = "image" === (this.backgroundType || this.background?.type) ? "text-white" : this.currentScheme?.text || ""; return W`<div class="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ${t}">
                <div class="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
                    <div class="text-center lg:text-left">
                        ${this.heading ? W`<wvnz-landing-text variant="h1" weight="bold" class="mb-6 ${t}">
                                ${this.heading}
                            </wvnz-landing-text>`: ""}

                        ${this.subheading ? W`<wvnz-landing-text variant="h3" class="mb-4 ${t}">
                                ${this.subheading}
                            </wvnz-landing-text>`: ""}

                        <slot name="content"></slot>

                        <div class="flex flex-col gap-4 justify-start sm:flex-row mt-4">
                            <slot name="cta1"></slot>
                            <slot name="cta2"></slot>
                        </div>
                    </div>

                    <div class="flex justify-center lg:justify-end ${t}">
                        <slot name="right"></slot>
                        ${this.formEmbed ? W`<div class="p-6 w-full max-w-md rounded-lg backdrop-blur-sm bg-white/90">
                                ${gt(this.formEmbed?.formEmbedCode || "")}
                            </div>`: ""}
                    </div>
                </div>
            </div>`} renderContent() {
        const t = "image" === (this.backgroundType || this.background?.type) ? "text-white" : this.currentScheme?.text || ""; return W`<div class="relative z-10 px-4 mx-auto max-w-6xl sm:px-6 lg:px-8 ${t}">
        <div class="text-center">
          ${this.heading ? W`<wvnz-landing-text variant="h1" weight="bold" class="mb-6 ${t}">${this.heading}</wvnz-landing-text>` : ""}
          ${this.subheading ? W`<wvnz-landing-text variant="h3" class="mx-auto mb-4 max-w-3xl ${t}">${this.subheading}</wvnz-landing-text>` : ""}

          <div class="mx-auto mb-4 max-w-3xl">
            <slot name="content"></slot>
          </div>

          <div class="flex flex-col gap-4 justify-center items-center sm:flex-row">
            <slot name="cta1"></slot>
            <slot name="cta2"></slot>
          </div>
          ${this.formEmbed ? W`<div class="mt-8"><div class="p-6 mx-auto max-w-md rounded-lg backdrop-blur-sm bg-white/90">${gt(this.formEmbed?.formEmbedCode || "")}</div></div>` : ""}
        </div>
      </div>`} render() {
        const t = "image" === (this.backgroundType || this.background?.type), e = t ? "color:#ffffff" : this.currentScheme?.fg ? "color:" + this.currentScheme.fg : ""; let s = ""; if (!t && this.currentScheme?.bg) { const t = this.currentScheme.bg; s = (t + "").includes("gradient") ? "background-image:" + t : "background-color:" + t } return W`<section class="${"hero " + this.variant + " " + this.sizeClasses?.[this.size] + " " + this.className + " relative overflow-hidden"}" style="${[s, e].filter(Boolean).join("; ")}">
            ${this.renderBackground()}

            ${"split" === this.variant ? this.renderSplitContent() : this.renderContent()}
        </section>`}
}); customElements.get("wvnz-image-carousel") || customElements.define("wvnz-image-carousel", class extends lt {
    static autoIdSeq = 0; static properties = { images: { type: Object, attribute: !1 }, showCaptions: { type: Boolean, attribute: "showcaptions" }, showCTAs: { type: Boolean, attribute: "showctas" }, autoplay: { type: Boolean, attribute: "autoplay" }, interval: { type: Number, attribute: "interval" }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-image-carousel-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } goToSlide(t) { } goToPrevious() { } goToNext() { } render() {
        return W`<section class="${"image-carousel " + this.className}">
                <div class="flex justify-center items-center h-64 bg-gray-200 rounded-lg">
                    <span class="text-gray-500">No images to display</span>
                </div>
            </section>`}
}); customElements.get("wvnz-impact-stats") || customElements.define("wvnz-impact-stats", class extends lt {
    static autoIdSeq = 0; static properties = { title: { type: String, attribute: "title" }, subtitle: { type: String, attribute: "subtitle" }, stats: { type: Object, attribute: !1 }, showProgressBars: { type: Boolean, attribute: "show-progress-bars" }, layout: { type: String, attribute: "layout" }, className: { type: String, attribute: "class-name" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-impact-stats-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get layoutClasses() { return { grid: "grid grid-cols-1 md:grid-cols-3 gap-8", list: "space-y-6", cards: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" } } render() {
        return W`<div class="${"bg-white rounded-lg p-8 " + this.className}">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">
                    ${this.title}
                </h2>
                ${this.subtitle ? W`<p class="text-lg text-gray-600 max-w-3xl mx-auto">
                        ${this.subtitle}
                    </p>`: ""}
            </div>

            <div class="${this.layoutClasses?.[this.layout]}">
                ${this.stats?.map(() => W`<div .key=${this.index} class="text-center">
                        <wvnz-stats-display .percentage=${this.stat?.percentage} .label=${this.stat?.label} .color=${this.stat?.color} size="lg" class="mb-4"></wvnz-stats-display>
                        ${this.showProgressBars ? W`<wvnz-progress-bar .percentage=${this.stat?.percentage} .color=${this.stat?.color} height="md"></wvnz-progress-bar>` : ""}
                    </div>`)}
            </div>
        </div>`}
}); customElements.get("wvnz-landing-card") || customElements.define("wvnz-landing-card", class extends lt {
    static autoIdSeq = 0; static properties = { variant: { type: String, attribute: "variant" }, image: { type: Object, attribute: !1 }, heading: { type: String, attribute: "heading" }, subheading: { type: String, attribute: "subheading" }, cta: { type: String, attribute: "cta" }, href: { type: String, attribute: "href" }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-landing-card-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get cardContent() {
        return W`<div class="${"landing-card " + this.variant + " " + this.className}">
            ${"image-overlay" === this.variant ? W`<div class="overflow-hidden relative rounded-lg shadow-lg">
                    ${this.image ? W`<wvnz-responsive-image .desktopSrc=${this.image?.desktopSrc} .mobileSrc=${this.image?.mobileSrc} alt="${this.image?.alt}" class="object-cover w-full h-64"></wvnz-responsive-image>` : ""}
                    <div class="flex absolute inset-0 flex-col justify-end p-6 bg-gradient-to-t to-transparent from-black/70 via-black/20">
                        ${this.heading ? W`<wvnz-landing-text variant="h3" color="primary" class="mb-2 text-white">
                                ${this.heading}
                            </wvnz-landing-text>`: ""}
                        ${this.subheading ? W`<wvnz-landing-text variant="body" color="primary" class="mb-4 text-white/90">
                                ${this.subheading}
                            </wvnz-landing-text>`: ""}
                        ${this.cta ? W`<div class="flex justify-end">
                                <wvnz-cta></wvnz-cta>
                            </div>`: ""}
                    </div>
                </div>`: W`<div class="overflow-hidden bg-white rounded-lg shadow-lg">
                    ${this.image ? W`<wvnz-responsive-image .desktopSrc=${this.image?.desktopSrc} .mobileSrc=${this.image?.mobileSrc} alt="${this.image?.alt}" class="object-cover w-full h-48"></wvnz-responsive-image>` : ""}
                    <div class="p-6">
                        ${this.heading ? W`<wvnz-landing-text variant="h4" class="mb-2">
                                ${this.heading}
                            </wvnz-landing-text>`: ""}
                        ${this.subheading ? W`<wvnz-landing-text variant="body" color="secondary" class="mb-4">
                                ${this.subheading}
                            </wvnz-landing-text>`: ""}
                        ${this.cta ? W`<wvnz-cta></wvnz-cta>` : ""}
                    </div>
                </div>`}
        </div>`} render() {
        return W`<a href="${this.href}" class="block transition-transform duration-200 hover:transform hover:scale-105">
                ${this.cardContent}
            </a>`}
}); customElements.get("wvnz-landing-footer") || customElements.define("wvnz-landing-footer", class extends lt {
    static autoIdSeq = 0; static properties = { socialIcons: { type: Object, attribute: !1 }, footerText: { type: String, attribute: "footer-text" }, address: { type: Object, attribute: !1 }, horizonImageUrl: { type: String, attribute: "horizon-image-url" }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-landing-footer-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } render() {
        return W`<footer class="${"landing-footer " + this.className}">
            <div class="bg-white">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    
                    <div class="flex flex-col md:flex-row justify-between items-center mb-8">
                        
                        ${this.socialIcons ? W`<div class="flex space-x-4 mb-4 md:mb-0">
                                ${this.socialIcons?.instagram ? W`<a href="${this.socialIcons?.instagram}" class="text-[#ff5515] hover:text-[#e03a12] transition-colors">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                        </svg>
                                    </a>`: ""}
                                ${this.socialIcons?.facebook ? W`<a href="${this.socialIcons?.facebook}" class="text-[#ff5515] hover:text-[#e03a12] transition-colors">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                                        </svg>
                                    </a>`: ""}
                                ${this.socialIcons?.twitter ? W`<a href="${this.socialIcons?.twitter}" class="text-[#ff5515] hover:text-[#e03a12] transition-colors">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                                        </svg>
                                    </a>`: ""}
                                ${this.socialIcons?.youtube ? W`<a href="${this.socialIcons?.youtube}" class="text-[#ff5515] hover:text-[#e03a12] transition-colors">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                                        </svg>
                                    </a>`: ""}
                            </div>`: ""}

                        
                        <div class="flex-shrink-0">
                            <wvnz-responsive-image desktopSrc="/assets/world-vision-logo.svg" mobileSrc="/assets/world-vision-logo.svg" alt="World Vision New Zealand" class="h-8 md:h-10 w-auto"></wvnz-responsive-image>
                        </div>
                    </div>

                    
                    ${this.footerText ? W`<div class="text-center mb-6">
                            <wvnz-landing-text variant="body" color="secondary" align="center" class="text-sm">
                                ${this.footerText}
                            </wvnz-landing-text>
                        </div>`: ""}

                    
                    ${this.address ? W`<div class="text-center mb-8">
                            <wvnz-landing-text variant="body" color="secondary" align="center" class="text-sm">
                                ${this.address?.line1}<br></br>
                                ${this.address?.line2}<br></br>
                                ${this.address?.city}, ${this.address?.country}
                            </wvnz-landing-text>
                        </div>`: ""}

                    
                    <div class="flex flex-wrap justify-center items-center space-x-8 mb-8">
                        <wvnz-responsive-image desktopSrc="/assets/pwc-logo.svg" mobileSrc="/assets/pwc-logo.svg" alt="PwC" class="h-12 w-auto"></wvnz-responsive-image>
                        <wvnz-responsive-image desktopSrc="/assets/cid-logo.png" mobileSrc="/assets/cid-logo.png" alt="CID" class="h-12 w-auto"></wvnz-responsive-image>
                        <wvnz-responsive-image desktopSrc="/assets/shielded-logo.png" mobileSrc="/assets/shielded-logo.png" alt="Shielded Site" class="h-12 w-auto"></wvnz-responsive-image>
                    </div>

                    
                    <div class="text-center">
                        <wvnz-landing-text variant="caption" color="secondary" align="center">
                            World Vision New Zealand is a registered charity. Our Charity Commission Registration Number is CC25984.
                        </wvnz-landing-text>
                    </div>
                </div>

                
                ${this.horizonImageUrl ? W`<wvnz-responsive-image .desktopSrc=${this.horizonImageUrl} .mobileSrc=${this.horizonImageUrl} alt="Footer horizon" class="w-full"></wvnz-responsive-image>` : ""}
            </div>
        </footer>`}
}); customElements.get("wvnz-landing-text") || customElements.define("wvnz-landing-text", class extends lt { static autoIdSeq = 0; static properties = { variant: { type: String, attribute: "variant" }, weight: { type: String, attribute: "weight" }, color: { type: String, attribute: "color" }, align: { type: String, attribute: "align" }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-landing-text-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } if (!this.shadowRoot.querySelector("link[data-wvnz-dev-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-dev-css", ""), t.href = new URL("/src/styles/index.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get variantClasses() { return { h1: "text-4xl md:text-5xl lg:text-6xl leading-tight", h2: "text-3xl md:text-4xl lg:text-5xl leading-tight", h3: "text-2xl md:text-3xl lg:text-4xl leading-tight", h4: "text-xl md:text-2xl lg:text-3xl leading-tight", h5: "text-lg md:text-xl lg:text-2xl leading-tight", h6: "text-base md:text-lg lg:text-xl leading-tight", body: "text-base md:text-lg leading-relaxed", caption: "text-sm md:text-base leading-relaxed", overline: "text-xs md:text-sm uppercase tracking-wider" } } get weightClasses() { return { light: "font-light", normal: "font-normal", medium: "font-medium", semibold: "font-semibold", bold: "font-bold" } } get colorClasses() { return { primary: "text-neutral-900", secondary: "text-neutral-600", neutral: "text-neutral-700", success: "text-green-600", warning: "text-yellow-600", error: "text-red-600" } } get alignClasses() { return { left: "text-left", center: "text-center", right: "text-right", justify: "text-justify" } } get classes() { return [this.variantClasses?.[this.variant], this.weightClasses?.[this.weight], this.colorClasses?.[this.color], this.alignClasses?.[this.align], this.className]?.filter(Boolean)?.join(" ") } render() { const t = this.classes; switch (this.variant) { case "h1": return W`<h1 class="${t}"><slot></slot></h1>`; case "h2": return W`<h2 class="${t}"><slot></slot></h2>`; case "h3": return W`<h3 class="${t}"><slot></slot></h3>`; case "h4": return W`<h4 class="${t}"><slot></slot></h4>`; case "h5": return W`<h5 class="${t}"><slot></slot></h5>`; case "h6": return W`<h6 class="${t}"><slot></slot></h6>`; case "caption": case "overline": return W`<span class="${t}"><slot></slot></span>`; default: return W`<p class="${t}"><slot></slot></p>` } } }); customElements.get("wvnz-navigation") || customElements.define("wvnz-navigation", class extends lt {
    static autoIdSeq = 0; static properties = { className: { type: String, attribute: "classname" }, style: { type: String, attribute: "style" }, id: { type: String, attribute: "id" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-navigation-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } render() {
        return W`<nav class="${"sticky top-0 z-50 w-full bg-white shadow navigation " + this.className}" style="${(() => { const t = { minHeight: "64px" }; return Object.assign(t, this.style), Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}" id="${this.id}">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="flex justify-between items-center py-4">
                    
                    <div class="flex-shrink-0">
                        <a href="${"/"}" class="block" aria-label="${"World Vision New Zealand Logo"}">
                            <wvnz-responsive-image .desktopSrc=${"https://www.worldvision.org.nz/dist/assets/images/svg/ic-logo-sm.svg"} .mobileSrc=${"https://www.worldvision.org.nz/dist/assets/images/svg/ic-logo-sm.svg"} alt="${"World Vision New Zealand Logo"}" class="w-auto h-8 md:h-10"></wvnz-responsive-image>
                        </a>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </nav>`}
}); customElements.get("wvnz-page-title") || customElements.define("wvnz-page-title", class extends lt {
    static autoIdSeq = 0; static properties = { title: { type: String, attribute: "title" }, backgroundColor: { type: String, attribute: "backgroundcolor" }, borderColor: { type: String, attribute: "bordercolor" }, textColor: { type: String, attribute: "textcolor" }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-page-title-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } render() {
        return W`<div class="${"inline-flex flex-col justify-start items-start py-px w-full border-t border-b " + this.className}" style="${(() => { const t = {}; return t.borderColor = this.borderColor, t.backgroundColor = this.backgroundColor, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
            <div class="inline-flex justify-center items-start self-stretch h-14" style="${(() => { const t = {}; return t.backgroundColor = this.backgroundColor, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                <div class="inline-flex flex-col justify-start items-start self-stretch" style="${(() => { const t = {}; return t.backgroundColor = this.backgroundColor, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                    <div class="inline-flex justify-center items-center h-14" style="${(() => { const t = {}; return t.backgroundColor = this.backgroundColor, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                        <div class="inline-flex flex-col justify-center items-start py-4" style="${(() => { const t = {}; return t.backgroundColor = this.backgroundColor, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                            <div class="flex flex-col justify-center items-center self-stretch">
                                <div class="justify-center text-base font-normal leading-normal text-center" style="${(() => { const t = {}; return t.color = this.textColor, t.fontFamily = "'Hanken Grotesk', sans-serif", Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                                    ${W`<slot></slot>` || this.title}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`}
}); customElements.get("wvnz-play-button") || customElements.define("wvnz-play-button", class extends lt {
    static autoIdSeq = 0; static properties = { size: { type: Number, attribute: "size" }, backgroundColor: { type: String, attribute: "background-color" }, iconColor: { type: String, attribute: "icon-color" }, ariaLabel: { type: String, attribute: "aria-label" }, className: { type: String, attribute: "class-name" }, style: { type: Object, attribute: !1 }, onClick: { type: String, attribute: "on-click" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-play-button-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get iconWidth() { return Math?.round(.4 * this.size) } get iconHeight() { return Math?.round(.5 * this.size) } get iconLeft() { return Math?.round(.375 * this.size) } get iconTop() { return Math?.round(.28 * this.size) } render() {
        return W`<button type="button" aria-label="${this.ariaLabel}" class="${"flex overflow-hidden flex-col justify-center items-center rounded-full p-0 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow " + this.className}" style="${(() => { const t = {}; return t.width = this.size, t.height = this.size, t.background = "transparent", Object.assign(t, this.style), Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}" @click=${this.onClick}>
            <span data-variant="2" class="overflow-hidden relative" style="${(() => { const t = {}; return t.width = this.size, t.height = this.size, t.display = "inline-block", Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                <span class="absolute" style="${(() => { const t = {}; return t.width = this.size, t.height = this.size, t.left = 0, t.top = 0, t.background = this.backgroundColor, t.borderRadius = "50%", t.boxShadow = "0 2px 8px rgba(0,0,0,0.10)", t.display = "block", Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}"></span>
                <svg class="absolute" style="${(() => { const t = {}; return t.width = this.iconWidth, t.height = this.iconHeight, t.left = this.iconLeft, t.top = this.iconTop, t.display = "block", Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <polygon points="0,0 16,10 0,20" .fill=${this.iconColor}></polygon>
                </svg>
            </span>
        </button>`}
}); customElements.get("wvnz-progress-bar") || customElements.define("wvnz-progress-bar", class extends lt {
    static autoIdSeq = 0; static properties = { percentage: { type: String, attribute: "percentage" }, color: { type: String, attribute: "color" }, label: { type: String, attribute: "label" }, showPercentage: { type: Boolean, attribute: "showpercentage" }, height: { type: String, attribute: "height" }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-progress-bar-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get heightClasses() { return { sm: "h-2", md: "h-4", lg: "h-6" } } get colorClasses() { return { orange: "bg-[#ff5515]", blue: "bg-[#007BFF]", green: "bg-[#28a745]", purple: "bg-[#6f42c1]" } } render() {
        return W`<div class="${"w-full " + this.className}">
            ${this.label || this.showPercentage ? W`<div class="flex justify-between items-center mb-2">
                    ${this.label ? W`<span class="text-sm font-medium text-gray-700">
                            ${this.label}
                        </span>`: ""}
                    ${this.showPercentage ? W`<span class="text-sm font-bold text-gray-900">
                            ${this.percentage}%
                        </span>`: ""}
                </div>`: ""}
            <div class="${"w-full bg-gray-200 rounded-full " + this.heightClasses?.[this.height]}">
                <div class="${this.colorClasses?.[this.color] + " " + this.heightClasses?.[this.height] + " rounded-full transition-all duration-500 ease-out"}" style="${(() => { const t = {}; return t.width = Math?.min(this.percentage, 100) + "%", Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}"></div>
            </div>
        </div>`}
}); customElements.get("wvnz-quote-section") || customElements.define("wvnz-quote-section", class extends lt {
    static autoIdSeq = 0; static properties = { quote: { type: String, attribute: "quote" }, author: { type: String, attribute: "author" }, association: { type: String, attribute: "association" }, profileImage: { type: Object, attribute: !1 }, cta1: { type: String, attribute: "cta1" }, cta2: { type: String, attribute: "cta2" }, className: { type: String, attribute: "class-name" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-quote-section-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } render() {
        return W`<section class="${"quote-section " + this.className}" style="color: initial">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12" style="color: initial">
                    <div class="text-center">
                        
                        <div class="mb-6">
                            <svg class="w-12 h-12 text-[#ff5515] mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                            </svg>
                        </div>

                        
                        ${this.quote ? W`<wvnz-landing-text variant="h3" weight="medium" align="center" class="mb-8 italic" style="color: #17191F">
                                "${this.quote}"
                            </wvnz-landing-text>`: ""}

                        
                        <div class="flex flex-col items-center space-y-4">
                            ${this.profileImage ? W`<wvnz-responsive-image .desktopSrc=${this.profileImage?.desktopSrc} .mobileSrc=${this.profileImage?.mobileSrc} alt="${this.profileImage?.alt}" class="w-16 h-16 rounded-full object-cover"></wvnz-responsive-image>` : ""}

                            <div>
                                ${this.author ? W`<wvnz-landing-text variant="h5" weight="semibold" align="center" class="mb-1" style="color: #17191F">
                                        ${this.author}
                                    </wvnz-landing-text>`: ""}

                                ${this.association ? W`<wvnz-landing-text variant="body" align="center" style="color: #6B7280">
                                        ${this.association}
                                    </wvnz-landing-text>`: ""}
                            </div>
                        </div>

                        
                        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>`}
}); customElements.get("wvnz-responsive-image") || customElements.define("wvnz-responsive-image", class extends lt {
    static autoIdSeq = 0; static properties = { desktopSrc: { type: String, attribute: "desktopsrc" }, mobileSrc: { type: String, attribute: "mobilesrc" }, alt: { type: String, attribute: "alt" }, width: { type: String, attribute: "width" }, height: { type: String, attribute: "height" }, href: { type: String, attribute: "href" }, objectFit: { type: String, attribute: "objectfit" }, loading: { type: String, attribute: "loading" }, className: { type: String, attribute: "classname" }, rounded: { type: String, attribute: "rounded" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-responsive-image-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get borderRadiusMap() { return { none: "0px", sm: "4px", md: "8px", lg: "16px", xl: "24px", full: "9999px" } } get borderRadius() { return { none: "0px", sm: "4px", md: "8px", lg: "16px", xl: "24px", full: "9999px" }?.[this.rounded] || "0px" } get imageElement() {
        return W`<picture class="${"responsive-image " + this.className}">
            
            <source media="(max-width: 768px)" .srcSet=${this.mobileSrc || this.desktopSrc}></source>
            
            <source media="(min-width: 769px)" .srcSet=${this.desktopSrc}></source>
            
            <img src="${this.desktopSrc}" alt="${this.alt}" width="${this.width}" height="${this.height}" .loading=${this.loading} style="${(() => { const t = {}; return t.width = this.width, t.height = this.height, t.objectFit = this.objectFit, t.display = "block", t.maxWidth = "100%", t.borderRadius = this.borderRadius, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}"></img>
        </picture>`} render() {
        return W`<a href="${this.href}" target="_blank" rel="noopener noreferrer" style="${Object.entries({ display: "block" }).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ")}">
                ${this.imageElement}
            </a>`}
}); customElements.get("wvnz-rich-text-section") || customElements.define("wvnz-rich-text-section", class extends lt {
    static autoIdSeq = 0; static properties = { className: { type: String, attribute: "classname" }, content: { type: String, attribute: "content" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-rich-text-section-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get parsedContent() { return this.content ? this.parseMarkdown(this.content) : null } parseMarkdown(t) { return this.markdown?.split("\n"), "" } render() {
        return W`<section class="${"rich-text-section " + this.className}">
            <div class="w-full">
                
                <div class="max-w-none prose prose-lg">
                    ${null !== this.parsedContent ? W`${gt(this.parsedContent)}` : W`<slot></slot>`}
                </div>
            </div>
        </section>`}
}); customElements.get("wvnz-stats-display") || customElements.define("wvnz-stats-display", class extends lt {
    static autoIdSeq = 0; static properties = { percentage: { type: String, attribute: "percentage" }, label: { type: String, attribute: "label" }, color: { type: String, attribute: "color" }, size: { type: String, attribute: "size" }, className: { type: String, attribute: "class-name" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-stats-display-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get sizeClasses() { return { sm: "text-2xl font-bold", md: "text-4xl font-bold", lg: "text-6xl font-bold" } } get colorClasses() { return { orange: "text-[#ff5515]", blue: "text-[#007BFF]", green: "text-[#28a745]", purple: "text-[#6f42c1]" } } render() {
        return W`<div class="${"text-center " + this.className}">
            <div class="${this.sizeClasses?.[this.size] + " " + this.colorClasses?.[this.color] + " mb-2"}">
                ${this.percentage}%
            </div>
            <div class="text-sm text-gray-600 font-medium">
                ${this.label}
            </div>
        </div>`}
}); customElements.get("wvnz-video-section") || customElements.define("wvnz-video-section", class extends lt {
    static autoIdSeq = 0; static properties = { videoUrl: { type: String, attribute: "videourl" }, src: { type: String, attribute: "src" }, videoProvider: { type: String, attribute: "videoprovider" }, heading: { type: String, attribute: "heading" }, subheading: { type: String, attribute: "subheading" }, cta1: { type: String, attribute: "cta1" }, cta2: { type: String, attribute: "cta2" }, className: { type: String, attribute: "classname" } }; constructor() { super() } firstUpdated() { if (this.id || (this.id = "wvnz-video-section-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get computedSrc() { return this.videoUrl || this.src || this.getAttribute("src") || "" } render() {
        return W`<section class="${["inline-flex relative flex-col justify-start items-start self-stretch px-10 pt-20 pb-16 bg-color-blue-11", this.className]?.filter(Boolean)?.join(" ")}">
            <div class="flex flex-col justify-start items-center self-stretch w-full">
                ${this.heading || this.subheading ? W`<div class="mb-12 w-full text-center">
                        ${this.heading ? W`<wvnz-landing-text variant="h2" weight="bold" align="center" class="mb-4">
                                ${this.heading}
                            </wvnz-landing-text>`: ""}
                        ${this.subheading ? W`<wvnz-landing-text variant="h4" color="secondary" align="center" class="mb-8">
                                ${this.subheading}
                            </wvnz-landing-text>`: ""}
                    </div>`: ""}
                <div class="flex flex-col justify-start items-start pt-6 w-full">
                    <div class="inline-flex relative justify-center items-center w-full h-auto">
                        <iframe src="${this.computedSrc}" title="${this.heading || "Video"}" class="w-[944px] h-[532px] max-w-[1382.40px] relative rounded-[20px] shadow-lg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        
                        <div class="left-[699px] top-[342px] absolute flex flex-col justify-start items-start overflow-hidden pointer-events-none">
                            <wvnz-play-button></wvnz-play-button>
                        </div>
                    </div>
                </div>
            </div>
            ${this.cta1 || this.cta2 ? W`<div class="flex flex-col gap-4 justify-center items-center mt-8 w-full sm:flex-row">
                    ${this.cta1 ? W`<wvnz-cta></wvnz-cta>` : ""}
                    ${this.cta2 ? W`<wvnz-cta></wvnz-cta>` : ""}
                </div>`: ""}
        </section>`}
}); customElements.get("wvnz-wayfinding-block") || customElements.define("wvnz-wayfinding-block", class extends lt {
    static autoIdSeq = 0; static properties = { heading: { type: String, attribute: "heading" }, subheading: { type: String, attribute: "subheading" }, image: { type: Object, attribute: !1 }, imageDesktopSrc: { type: String, attribute: "image-desktop-src" }, imageMobileSrc: { type: String, attribute: "image-mobile-src" }, imageAlt: { type: String, attribute: "image-alt" }, ctas: { type: String, attribute: "ctas" }, scheme: { type: String, attribute: "scheme" }, backgroundImage: { type: String, attribute: "background-image" }, className: { type: String, attribute: "classname" } }; constructor() { super(), this.scheme || (this.scheme = "orange"), this.className || (this.className = "") } firstUpdated() { if (this.id || (this.id = "wvnz-wayfinding-block-" + ++this.constructor.autoIdSeq), !this.shadowRoot.querySelector("link[data-wvnz-components-css]")) { const t = document.createElement("link"); t.rel = "stylesheet", t.setAttribute("data-wvnz-components-css", ""), t.href = new URL("/dist/wvnz-components.css", window.location.origin).href, this.shadowRoot.appendChild(t) } } get SCHEME_COLORS() { return { orange: { background: "#ff6929", foreground: "#fff" }, blue: { background: "#2563eb", foreground: "#fff" }, green: { background: "#10b981", foreground: "#fff" }, purple: { background: "#a78bfa", foreground: "#fff" }, gray: { background: "#d1d5db", foreground: "#111" }, black: { background: "#111827", foreground: "#fff" } } } get background() { const t = this.scheme || "orange"; return this.SCHEME_COLORS[t]?.background || this.SCHEME_COLORS.orange.background } get foreground() { const t = this.scheme || "orange"; return this.SCHEME_COLORS[t]?.foreground || this.SCHEME_COLORS.orange.foreground } get backgroundStyle() { const t = { backgroundColor: this.background, color: this.foreground }; return this.backgroundImage && (t.backgroundImage = `url(${this.backgroundImage})`, t.backgroundSize = "cover", t.backgroundPosition = "center", t.backgroundRepeat = "no-repeat"), t } render() {
        return W`<section class="${"wayfinding-block " + this.className}">
            <div class="w-full">
                <div class="overflow-hidden px-4 py-12 rounded-2xl shadow-xl sm:px-6 lg:px-8" style="${(() => { const t = this.backgroundStyle; return t && "object" == typeof t ? Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") : "" })()}">
                    <div class="grid grid-cols-1 gap-8 items-center p-8 lg:grid-cols-2 md:p-12">
                        
                        <div style="${(() => { const t = {}; return t.color = this.foreground, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                            ${this.heading ? W`<wvnz-landing-text variant="h2" weight="bold" class="mb-4" style="${(() => { const t = {}; return t.color = this.foreground, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                                    ${this.heading}
                                </wvnz-landing-text>`: ""}

                            ${this.subheading ? W`<wvnz-landing-text variant="h4" class="mb-6" style="${(() => { const t = {}; return t.color = this.foreground, t.opacity = .9, Object.entries(t).filter(([, t]) => null != t && "" !== t).map(([t, e]) => (t => (t + "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/_/g, "-").toLowerCase())(t) + ": " + e).join("; ") })()}">
                                    ${this.subheading}
                                </wvnz-landing-text>`: ""}

                            
                            ${W`<slot name="cta"></slot>` ? W`<div class="flex flex-col gap-4 sm:flex-row">
                                    <slot name="cta"></slot>
                                </div>`: null}
                        </div>

                        
                        ${this.image || this.imageDesktopSrc ? W`<div class="flex justify-center lg:justify-end">
                                <wvnz-responsive-image 
                                    .desktopSrc=${this.image?.desktopSrc || this.imageDesktopSrc} 
                                    .mobileSrc=${this.image?.mobileSrc || this.imageMobileSrc} 
                                    alt="${this.image?.alt || this.imageAlt}" 
                                    class="w-full max-w-md rounded-lg shadow-lg">
                                </wvnz-responsive-image>
                            </div>`: ""}
                    </div>
                </div>
            </div>
        </section>`}
}), (() => { try { if (!window.WVNZ_CSS_URL) { const t = Array.from(document.querySelectorAll('script[type="module"],script')).map(t => t.src).filter(Boolean).find(t => /wvnz-component-bundle\.js(\?|$)/.test(t)); if (t) { const e = new URL("wvnz-components.css", t).href; window.WVNZ_CSS_URL = e } } } catch { } const t = (t, e) => { try { const s = window.WVNZ_CSS_URL; return s && (/\/dist\/wvnz-components\.css(\?|$)/.test(e) || t?.hasAttribute?.("data-wvnz-components-css") || t?.hasAttribute?.("data-wvnz-dev-css")) ? s : e } catch { return e } }; try { const e = HTMLLinkElement && HTMLLinkElement.prototype; if (e && !e.__wvnzSetAttrPatched) { const s = e.setAttribute; e.setAttribute = function (e, i) { return "href" === (e + "").toLowerCase() && (i = t(this, i)), s.call(this, e, i) }; const i = Object.getOwnPropertyDescriptor(e, "href"); if (i && i.set && !i.set.__wvnzPatched) { const s = i.set, r = i.get; Object.defineProperty(e, "href", { configurable: !0, enumerable: i.enumerable, get: function () { return r.call(this) }, set: function (e) { return s.call(this, t(this, e)) } }) } e.__wvnzSetAttrPatched = !0 } } catch { } const e = t => { try { const e = window.WVNZ_CSS_URL; if (!e || !t || !t.querySelectorAll) return; t.querySelectorAll("link[data-wvnz-components-css], link[data-wvnz-dev-css]").forEach(t => { t.href = e }) } catch { } }, s = Element.prototype.attachShadow; s && !s.__wvnzPatched && (Element.prototype.attachShadow = function (t) { const i = s.call(this, t); try { e(i); const t = new MutationObserver(t => { for (const s of t) s.addedNodes && s.addedNodes.forEach(t => { if (t && 1 === t.nodeType) { const s = t; (s.matches && (s.matches("link[data-wvnz-components-css]") || s.matches("link[data-wvnz-dev-css]")) || s.querySelector && s.querySelector("link[data-wvnz-components-css], link[data-wvnz-dev-css]")) && e(i) } }) }); t.observe(i, { childList: !0, subtree: !0 }) } catch { } return i }, Element.prototype.attachShadow.__wvnzPatched = !0) })();
