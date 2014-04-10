///#source 1 1 vendor/skrollr.min.js
/*! skrollr 0.6.20 (2014-01-03) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function (e, t, r) { "use strict"; function n(r) { if (o = t.documentElement, a = t.body, K(), it = this, r = r || {}, ut = r.constants || {}, r.easing) for (var n in r.easing) U[n] = r.easing[n]; yt = r.edgeStrategy || "set", ct = { beforerender: r.beforerender, render: r.render }, ft = r.forceHeight !== !1, ft && (zt = r.scale || 1), pt = r.mobileDeceleration || E, gt = r.smoothScrolling !== !1, vt = r.smoothScrollingDuration || x, dt = { targetTop: it.getScrollTop() }, _t = (r.mobileCheck || function () { return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || e.opera) })(), _t ? (st = t.getElementById("skrollr-body"), st && at(), X(), Ct(o, [y, S], [T])) : Ct(o, [y, b], [T]), it.refresh(), St(e, "resize orientationchange", function () { var e = o.clientWidth, t = o.clientHeight; (t !== $t || e !== Lt) && ($t = t, Lt = e, Mt = !0) }); var i = Y(); return function l() { Z(), bt = i(l) }(), it } var o, a, i = e.skrollr = { get: function () { return it }, init: function (e) { return it || new n(e) }, VERSION: "0.6.20" }, l = Object.prototype.hasOwnProperty, s = e.Math, c = e.getComputedStyle, f = "touchstart", u = "touchmove", p = "touchcancel", m = "touchend", g = "skrollable", v = g + "-before", d = g + "-between", h = g + "-after", y = "skrollr", T = "no-" + y, b = y + "-desktop", S = y + "-mobile", w = "linear", k = 1e3, E = .004, x = 200, A = "start", F = "end", C = "center", D = "bottom", H = "___skrollable_id", P = /^(?:input|textarea|button|select)$/i, N = /^\s+|\s+$/g, V = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/, z = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, O = /^([a-z\-]+)\[(\w+)\]$/, q = /-([a-z])/g, I = function (e, t) { return t.toUpperCase() }, L = /[\-+]?[\d]*\.?[\d]+/g, $ = /\{\?\}/g, M = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g, B = /[a-z\-]+-gradient/g, _ = "", G = "", K = function () { var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/; if (c) { var t = c(a, null); for (var n in t) if (_ = n.match(e) || +n == n && t[n].match(e)) break; if (!_) return _ = G = "", r; _ = _[0], "-" === _.slice(0, 1) ? (G = _, _ = { "-webkit-": "webkit", "-moz-": "Moz", "-ms-": "ms", "-o-": "O" }[_]) : G = "-" + _.toLowerCase() + "-" } }, Y = function () { var t = e.requestAnimationFrame || e[_.toLowerCase() + "RequestAnimationFrame"], r = Pt(); return (_t || !t) && (t = function (t) { var n = Pt() - r, o = s.max(0, 1e3 / 60 - n); return e.setTimeout(function () { r = Pt(), t() }, o) }), t }, R = function () { var t = e.cancelAnimationFrame || e[_.toLowerCase() + "CancelAnimationFrame"]; return (_t || !t) && (t = function (t) { return e.clearTimeout(t) }), t }, U = { begin: function () { return 0 }, end: function () { return 1 }, linear: function (e) { return e }, quadratic: function (e) { return e * e }, cubic: function (e) { return e * e * e }, swing: function (e) { return -s.cos(e * s.PI) / 2 + .5 }, sqrt: function (e) { return s.sqrt(e) }, outCubic: function (e) { return s.pow(e - 1, 3) + 1 }, bounce: function (e) { var t; if (.5083 >= e) t = 3; else if (.8489 >= e) t = 9; else if (.96208 >= e) t = 27; else { if (!(.99981 >= e)) return 1; t = 91 } return 1 - s.abs(3 * s.cos(1.028 * e * t) / t) } }; n.prototype.refresh = function (e) { var n, o, a = !1; for (e === r ? (a = !0, lt = [], Bt = 0, e = t.getElementsByTagName("*")) : e = [].concat(e), n = 0, o = e.length; o > n; n++) { var i = e[n], l = i, s = [], c = gt, f = yt; if (i.attributes) { for (var u = 0, p = i.attributes.length; p > u; u++) { var m = i.attributes[u]; if ("data-anchor-target" !== m.name) if ("data-smooth-scrolling" !== m.name) if ("data-edge-strategy" !== m.name) { var v = m.name.match(V); if (null !== v) { var d = { props: m.value, element: i }; s.push(d); var h = v[1]; h && (d.constant = h.substr(1)); var y = v[2]; /p$/.test(y) ? (d.isPercentage = !0, d.offset = (0 | y.slice(0, -1)) / 100) : d.offset = 0 | y; var T = v[3], b = v[4] || T; T && T !== A && T !== F ? (d.mode = "relative", d.anchors = [T, b]) : (d.mode = "absolute", T === F ? d.isEnd = !0 : d.isPercentage || (d.offset = d.offset * zt)) } } else f = m.value; else c = "off" !== m.value; else if (l = t.querySelector(m.value), null === l) throw 'Unable to find anchor target "' + m.value + '"' } if (s.length) { var S, w, k; !a && H in i ? (k = i[H], S = lt[k].styleAttr, w = lt[k].classAttr) : (k = i[H] = Bt++, S = i.style.cssText, w = Ft(i)), lt[k] = { element: i, styleAttr: S, classAttr: w, anchorTarget: l, keyFrames: s, smoothScrolling: c, edgeStrategy: f }, Ct(i, [g], []) } } } for (Et(), n = 0, o = e.length; o > n; n++) { var E = lt[e[n][H]]; E !== r && (J(E), et(E)) } return it }, n.prototype.relativeToAbsolute = function (e, t, r) { var n = o.clientHeight, a = e.getBoundingClientRect(), i = a.top, l = a.bottom - a.top; return t === D ? i -= n : t === C && (i -= n / 2), r === D ? i += l : r === C && (i += l / 2), i += it.getScrollTop(), 0 | i + .5 }, n.prototype.animateTo = function (e, t) { t = t || {}; var n = Pt(), o = it.getScrollTop(); return mt = { startTop: o, topDiff: e - o, targetTop: e, duration: t.duration || k, startTime: n, endTime: n + (t.duration || k), easing: U[t.easing || w], done: t.done }, mt.topDiff || (mt.done && mt.done.call(it, !1), mt = r), it }, n.prototype.stopAnimateTo = function () { mt && mt.done && mt.done.call(it, !0), mt = r }, n.prototype.isAnimatingTo = function () { return !!mt }, n.prototype.setScrollTop = function (t, r) { return ht = r === !0, _t ? Gt = s.min(s.max(t, 0), Vt) : e.scrollTo(0, t), it }, n.prototype.getScrollTop = function () { return _t ? Gt : e.pageYOffset || o.scrollTop || a.scrollTop || 0 }, n.prototype.getMaxScrollTop = function () { return Vt }, n.prototype.on = function (e, t) { return ct[e] = t, it }, n.prototype.off = function (e) { return delete ct[e], it }, n.prototype.destroy = function () { var e = R(); e(bt), kt(), Ct(o, [T], [y, b, S]); for (var t = 0, n = lt.length; n > t; t++) ot(lt[t].element); o.style.overflow = a.style.overflow = "auto", o.style.height = a.style.height = "auto", st && i.setStyle(st, "transform", "none"), it = r, st = r, ct = r, ft = r, Vt = 0, zt = 1, ut = r, pt = r, Ot = "down", qt = -1, Lt = 0, $t = 0, Mt = !1, mt = r, gt = r, vt = r, dt = r, ht = r, Bt = 0, yt = r, _t = !1, Gt = 0, Tt = r }; var X = function () { var n, i, l, c, g, v, d, h, y, T, b, S; St(o, [f, u, p, m].join(" "), function (e) { var o = e.changedTouches[0]; for (c = e.target; 3 === c.nodeType;) c = c.parentNode; switch (g = o.clientY, v = o.clientX, T = e.timeStamp, P.test(c.tagName) || e.preventDefault(), e.type) { case f: n && n.blur(), it.stopAnimateTo(), n = c, i = d = g, l = v, y = T; break; case u: P.test(c.tagName) && t.activeElement !== c && e.preventDefault(), h = g - d, S = T - b, it.setScrollTop(Gt - h, !0), d = g, b = T; break; default: case p: case m: var a = i - g, w = l - v, k = w * w + a * a; if (49 > k) { if (!P.test(n.tagName)) { n.focus(); var E = t.createEvent("MouseEvents"); E.initMouseEvent("click", !0, !0, e.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(E) } return } n = r; var x = h / S; x = s.max(s.min(x, 3), -3); var A = s.abs(x / pt), F = x * A + .5 * pt * A * A, C = it.getScrollTop() - F, D = 0; C > Vt ? (D = (Vt - C) / F, C = Vt) : 0 > C && (D = -C / F, C = 0), A *= 1 - D, it.animateTo(0 | C + .5, { easing: "outCubic", duration: A }) } }), e.scrollTo(0, 0), o.style.overflow = a.style.overflow = "hidden" }, j = function () { var e, t, r, n, a, i, l, c, f, u, p, m = o.clientHeight, g = xt(); for (c = 0, f = lt.length; f > c; c++) for (e = lt[c], t = e.element, r = e.anchorTarget, n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], u = l.offset, p = g[l.constant] || 0, l.frame = u, l.isPercentage && (u *= m, l.frame = u), "relative" === l.mode && (ot(t), l.frame = it.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u, ot(t, !0)), l.frame += p, ft && !l.isEnd && l.frame > Vt && (Vt = l.frame); for (Vt = s.max(Vt, At()), c = 0, f = lt.length; f > c; c++) { for (e = lt[c], n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], p = g[l.constant] || 0, l.isEnd && (l.frame = Vt - l.offset + p); e.keyFrames.sort(Nt) } }, W = function (e, t) { for (var r = 0, n = lt.length; n > r; r++) { var o, a, s = lt[r], c = s.element, f = s.smoothScrolling ? e : t, u = s.keyFrames, p = u[0].frame, m = u[u.length - 1].frame, y = p > f, T = f > m, b = u[y ? 0 : u.length - 1]; if (y || T) { if (y && -1 === s.edge || T && 1 === s.edge) continue; switch (Ct(c, [y ? v : h], [v, d, h]), s.edge = y ? -1 : 1, s.edgeStrategy) { case "reset": ot(c); continue; case "ease": f = b.frame; break; default: case "set": var S = b.props; for (o in S) l.call(S, o) && (a = nt(S[o].value), i.setStyle(c, o, a)); continue } } else 0 !== s.edge && (Ct(c, [g, d], [v, h]), s.edge = 0); for (var w = 0, k = u.length - 1; k > w; w++) if (f >= u[w].frame && u[w + 1].frame >= f) { var E = u[w], x = u[w + 1]; for (o in E.props) if (l.call(E.props, o)) { var A = (f - E.frame) / (x.frame - E.frame); A = E.props[o].easing(A), a = rt(E.props[o].value, x.props[o].value, A), a = nt(a), i.setStyle(c, o, a) } break } } }, Z = function () { Mt && (Mt = !1, Et()); var e, t, n = it.getScrollTop(), o = Pt(); if (mt) o >= mt.endTime ? (n = mt.targetTop, e = mt.done, mt = r) : (t = mt.easing((o - mt.startTime) / mt.duration), n = 0 | mt.startTop + t * mt.topDiff), it.setScrollTop(n, !0); else if (!ht) { var a = dt.targetTop - n; a && (dt = { startTop: qt, topDiff: n - qt, targetTop: n, startTime: It, endTime: It + vt }), dt.endTime >= o && (t = U.sqrt((o - dt.startTime) / vt), n = 0 | dt.startTop + t * dt.topDiff) } if (_t && st && i.setStyle(st, "transform", "translate(0, " + -Gt + "px) " + Tt), ht || qt !== n) { Ot = n > qt ? "down" : qt > n ? "up" : Ot, ht = !1; var l = { curTop: n, lastTop: qt, maxTop: Vt, direction: Ot }, s = ct.beforerender && ct.beforerender.call(it, l); s !== !1 && (W(n, it.getScrollTop()), qt = n, ct.render && ct.render.call(it, l)), e && e.call(it, !1) } It = o }, J = function (e) { for (var t = 0, r = e.keyFrames.length; r > t; t++) { for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = z.exec(l.props)) ;) a = i[1], o = i[2], n = a.match(O), null !== n ? (a = n[1], n = n[2]) : n = w, o = o.indexOf("!") ? Q(o) : [o.slice(1)], s[a] = { value: o, easing: U[n] }; l.props = s } }, Q = function (e) { var t = []; return M.lastIndex = 0, e = e.replace(M, function (e) { return e.replace(L, function (e) { return 100 * (e / 255) + "%" }) }), G && (B.lastIndex = 0, e = e.replace(B, function (e) { return G + e })), e = e.replace(L, function (e) { return t.push(+e), "{?}" }), t.unshift(e), t }, et = function (e) { var t, r, n = {}; for (t = 0, r = e.keyFrames.length; r > t; t++) tt(e.keyFrames[t], n); for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) tt(e.keyFrames[t], n) }, tt = function (e, t) { var r; for (r in t) l.call(e.props, r) || (e.props[r] = t[r]); for (r in e.props) t[r] = e.props[r] }, rt = function (e, t, r) { var n, o = e.length; if (o !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"'; var a = [e[0]]; for (n = 1; o > n; n++) a[n] = e[n] + (t[n] - e[n]) * r; return a }, nt = function (e) { var t = 1; return $.lastIndex = 0, e[0].replace($, function () { return e[t++] }) }, ot = function (e, t) { e = [].concat(e); for (var r, n, o = 0, a = e.length; a > o; o++) n = e[o], r = lt[n[H]], r && (t ? (n.style.cssText = r.dirtyStyleAttr, Ct(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText, r.dirtyClassAttr = Ft(n), n.style.cssText = r.styleAttr, Ct(n, r.classAttr))) }, at = function () { Tt = "translateZ(0)", i.setStyle(st, "transform", Tt); var e = c(st), t = e.getPropertyValue("transform"), r = e.getPropertyValue(G + "transform"), n = t && "none" !== t || r && "none" !== r; n || (Tt = "") }; i.setStyle = function (e, t, r) { var n = e.style; if (t = t.replace(q, I).replace("-", ""), "zIndex" === t) n[t] = isNaN(r) ? r : "" + (0 | r); else if ("float" === t) n.styleFloat = n.cssFloat = r; else try { _ && (n[_ + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), n[t] = r } catch (o) { } }; var it, lt, st, ct, ft, ut, pt, mt, gt, vt, dt, ht, yt, Tt, bt, St = i.addEvent = function (t, r, n) { var o = function (t) { return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function () { t.returnValue = !1 }), n.call(this, t) }; r = r.split(" "); for (var a, i = 0, l = r.length; l > i; i++) a = r[i], t.addEventListener ? t.addEventListener(a, n, !1) : t.attachEvent("on" + a, o), Kt.push({ element: t, name: a, listener: n }) }, wt = i.removeEvent = function (e, t, r) { t = t.split(" "); for (var n = 0, o = t.length; o > n; n++) e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r) }, kt = function () { for (var e, t = 0, r = Kt.length; r > t; t++) e = Kt[t], wt(e.element, e.name, e.listener); Kt = [] }, Et = function () { var e = it.getScrollTop(); Vt = 0, ft && !_t && (a.style.height = "auto"), j(), ft && !_t && (a.style.height = Vt + o.clientHeight + "px"), _t ? it.setScrollTop(s.min(it.getScrollTop(), Vt)) : it.setScrollTop(e, !0), ht = !0 }, xt = function () { var e, t, r = o.clientHeight, n = {}; for (e in ut) t = ut[e], "function" == typeof t ? t = t.call(it) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r), n[e] = t; return n }, At = function () { var e = st && st.offsetHeight || 0, t = s.max(e, a.scrollHeight, a.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight); return t - o.clientHeight }, Ft = function (t) { var r = "className"; return e.SVGElement && t instanceof e.SVGElement && (t = t[r], r = "baseVal"), t[r] }, Ct = function (t, n, o) { var a = "className"; if (e.SVGElement && t instanceof e.SVGElement && (t = t[a], a = "baseVal"), o === r) return t[a] = n, r; for (var i = t[a], l = 0, s = o.length; s > l; l++) i = Ht(i).replace(Ht(o[l]), " "); i = Dt(i); for (var c = 0, f = n.length; f > c; c++) -1 === Ht(i).indexOf(Ht(n[c])) && (i += " " + n[c]); t[a] = Dt(i) }, Dt = function (e) { return e.replace(N, "") }, Ht = function (e) { return " " + e + " " }, Pt = Date.now || function () { return +new Date }, Nt = function (e, t) { return e.frame - t.frame }, Vt = 0, zt = 1, Ot = "down", qt = -1, It = Pt(), Lt = 0, $t = 0, Mt = !1, Bt = 0, _t = !1, Gt = 0, Kt = [] })(window, document);
///#source 1 1 vendor/jquery.validate.js
/*! jQuery Validation Plugin - v1.11.0 - 2/4/2013
* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 JÃ¶rn Zaefferer; Licensed MIT */
(function (e) { e.extend(e.fn, { validate: function (t) { if (!this.length) { t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."); return } var n = e.data(this[0], "validator"); return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) { n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0) }), this.submit(function (t) { function r() { var r; return n.settings.submitHandler ? (n.submitButton && (r = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(n.submitButton.value).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && r.remove(), !1) : !0 } return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, r()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : r() : (n.focusInvalid(), !1) })), n) }, valid: function () { if (e(this[0]).is("form")) return this.validate().form(); var t = !0, n = e(this[0].form).validate(); return this.each(function () { t &= n.element(this) }), t }, removeAttrs: function (t) { var n = {}, r = this; return e.each(t.split(/\s/), function (e, t) { n[t] = r.attr(t), r.removeAttr(t) }), n }, rules: function (t, n) { var r = this[0]; if (t) { var i = e.data(r.form, "validator").settings, s = i.rules, o = e.validator.staticRules(r); switch (t) { case "add": e.extend(o, e.validator.normalizeRule(n)), s[r.name] = o, n.messages && (i.messages[r.name] = e.extend(i.messages[r.name], n.messages)); break; case "remove": if (!n) return delete s[r.name], o; var u = {}; return e.each(n.split(/\s/), function (e, t) { u[t] = o[t], delete o[t] }), u } } var a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(r), e.validator.attributeRules(r), e.validator.dataRules(r), e.validator.staticRules(r)), r); if (a.required) { var f = a.required; delete a.required, a = e.extend({ required: f }, a) } return a } }), e.extend(e.expr[":"], { blank: function (t) { return !e.trim("" + t.value) }, filled: function (t) { return !!e.trim("" + t.value) }, unchecked: function (e) { return !e.checked } }), e.validator = function (t, n) { this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init() }, e.validator.format = function (t, n) { return arguments.length === 1 ? function () { var n = e.makeArray(arguments); return n.unshift(t), e.validator.format.apply(this, n) } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function (e, n) { t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () { return n }) }), t) }, e.extend(e.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: !0, errorContainer: e([]), errorLabelContainer: e([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function (e, t) { this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide()) }, onfocusout: function (e, t) { !this.checkable(e) && (e.name in this.submitted || !this.optional(e)) && this.element(e) }, onkeyup: function (e, t) { if (t.which === 9 && this.elementValue(e) === "") return; (e.name in this.submitted || e === this.lastElement) && this.element(e) }, onclick: function (e, t) { e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode) }, highlight: function (t, n, r) { t.type === "radio" ? this.findByName(t.name).addClass(n).removeClass(r) : e(t).addClass(n).removeClass(r) }, unhighlight: function (t, n, r) { t.type === "radio" ? this.findByName(t.name).removeClass(n).addClass(r) : e(t).removeClass(n).addClass(r) } }, setDefaults: function (t) { e.extend(e.validator.defaults, t) }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}.") }, autoCreateRanges: !1, prototype: { init: function () { function r(t) { var n = e.data(this[0].form, "validator"), r = "on" + t.type.replace(/^validate/, ""); n.settings[r] && n.settings[r].call(n, this[0], t) } this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset(); var t = this.groups = {}; e.each(this.settings.groups, function (n, r) { typeof r == "string" && (r = r.split(/\s/)), e.each(r, function (e, r) { t[r] = n }) }); var n = this.settings.rules; e.each(n, function (t, r) { n[t] = e.validator.normalizeRule(r) }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", r).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", r), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler) }, form: function () { return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() }, checkForm: function () { this.prepareForm(); for (var e = 0, t = this.currentElements = this.elements() ; t[e]; e++) this.check(t[e]); return this.valid() }, element: function (t) { t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t); var n = this.check(t) !== !1; return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n }, showErrors: function (t) { if (t) { e.extend(this.errorMap, t), this.errorList = []; for (var n in t) this.errorList.push({ message: t[n], element: this.findByName(n)[0] }); this.successList = e.grep(this.successList, function (e) { return !(e.name in t) }) } this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors() }, resetForm: function () { e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue") }, numberOfInvalids: function () { return this.objectLength(this.invalid) }, objectLength: function (e) { var t = 0; for (var n in e) t++; return t }, hideErrors: function () { this.addWrapper(this.toHide).hide() }, valid: function () { return this.size() === 0 }, size: function () { return this.errorList.length }, focusInvalid: function () { if (this.settings.focusInvalid) try { e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (t) { } }, findLastActive: function () { var t = this.lastActive; return t && e.grep(this.errorList, function (e) { return e.element.name === t.name }).length === 1 && t }, elements: function () { var t = this, n = {}; return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () { return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0) }) }, clean: function (t) { return e(t)[0] }, errors: function () { var t = this.settings.errorClass.replace(" ", "."); return e(this.settings.errorElement + "." + t, this.errorContext) }, reset: function () { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([]) }, prepareForm: function () { this.reset(), this.toHide = this.errors().add(this.containers) }, prepareElement: function (e) { this.reset(), this.toHide = this.errorsFor(e) }, elementValue: function (t) { var n = e(t).attr("type"), r = e(t).val(); return n === "radio" || n === "checkbox" ? e("input[name='" + e(t).attr("name") + "']:checked").val() : typeof r == "string" ? r.replace(/\r/g, "") : r }, check: function (t) { t = this.validationTargetFor(this.clean(t)); var n = e(t).rules(), r = !1, i = this.elementValue(t), s; for (var o in n) { var u = { method: o, parameters: n[o] }; try { s = e.validator.methods[o].call(this, i, t, u.parameters); if (s === "dependency-mismatch") { r = !0; continue } r = !1; if (s === "pending") { this.toHide = this.toHide.not(this.errorsFor(t)); return } if (!s) return this.formatAndAdd(t, u), !1 } catch (a) { throw this.settings.debug && window.console && console.log("Exception occured when checking element " + t.id + ", check the '" + u.method + "' method.", a), a } } if (r) return; return this.objectLength(n) && this.successList.push(t), !0 }, customDataMessage: function (t, n) { return e(t).data("msg-" + n.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + n.toLowerCase()) }, customMessage: function (e, t) { var n = this.settings.messages[e]; return n && (n.constructor === String ? n : n[t]) }, findDefined: function () { for (var e = 0; e < arguments.length; e++) if (arguments[e] !== undefined) return arguments[e]; return undefined }, defaultMessage: function (t, n) { return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || undefined, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>") }, formatAndAdd: function (t, n) { var r = this.defaultMessage(t, n.method), i = /\$?\{(\d+)\}/g; typeof r == "function" ? r = r.call(this, n.parameters, t) : i.test(r) && (r = e.validator.format(r.replace(i, "{$1}"), n.parameters)), this.errorList.push({ message: r, element: t }), this.errorMap[t.name] = r, this.submitted[t.name] = r }, addWrapper: function (e) { return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e }, defaultShowErrors: function () { var e, t; for (e = 0; this.errorList[e]; e++) { var n = this.errorList[e]; this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message) } this.errorList.length && (this.toShow = this.toShow.add(this.containers)); if (this.settings.success) for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]); if (this.settings.unhighlight) for (e = 0, t = this.validElements() ; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass); this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show() }, validElements: function () { return this.currentElements.not(this.invalidElements()) }, invalidElements: function () { return e(this.errorList).map(function () { return this.element }) }, showLabel: function (t, n) { var r = this.errorsFor(t); r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(n)) : (r = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, e(t)) : r.insertAfter(t))), !n && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r) }, errorsFor: function (t) { var n = this.idOrName(t); return this.errors().filter(function () { return e(this).attr("for") === n }) }, idOrName: function (e) { return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name) }, validationTargetFor: function (e) { return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e }, checkable: function (e) { return /radio|checkbox/i.test(e.type) }, findByName: function (t) { return e(this.currentForm).find("[name='" + t + "']") }, getLength: function (t, n) { switch (n.nodeName.toLowerCase()) { case "select": return e("option:selected", n).length; case "input": if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length } return t.length }, depend: function (e, t) { return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0 }, dependTypes: { "boolean": function (e, t) { return e }, string: function (t, n) { return !!e(t, n.form).length }, "function": function (e, t) { return e(t) } }, optional: function (t) { var n = this.elementValue(t); return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch" }, startRequest: function (e) { this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0) }, stopRequest: function (t, n) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && this.pendingRequest === 0 && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) }, previousValue: function (t) { return e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, "remote") }) } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function (t, n) { t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t) }, classRules: function (t) { var n = {}, r = e(t).attr("class"); return r && e.each(r.split(" "), function () { this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]) }), n }, attributeRules: function (t) { var n = {}, r = e(t); for (var i in e.validator.methods) { var s; i === "required" ? (s = r.get(0).getAttribute(i), s === "" && (s = !0), s = !!s) : s = r.attr(i), s ? n[i] = s : r[0].getAttribute("type") === i && (n[i] = !0) } return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n }, dataRules: function (t) { var n, r, i = {}, s = e(t); for (n in e.validator.methods) r = s.data("rule-" + n.toLowerCase()), r !== undefined && (i[n] = r); return i }, staticRules: function (t) { var n = {}, r = e.data(t.form, "validator"); return r.settings.rules && (n = e.validator.normalizeRule(r.settings.rules[t.name]) || {}), n }, normalizeRules: function (t, n) { return e.each(t, function (r, i) { if (i === !1) { delete t[r]; return } if (i.param || i.depends) { var s = !0; switch (typeof i.depends) { case "string": s = !!e(i.depends, n.form).length; break; case "function": s = i.depends.call(n, n) } s ? t[r] = i.param !== undefined ? i.param : !0 : delete t[r] } }), e.each(t, function (r, i) { t[r] = e.isFunction(i) ? i(n) : i }), e.each(["minlength", "maxlength"], function () { t[this] && (t[this] = Number(t[this])) }), e.each(["rangelength"], function () { var n; t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : typeof t[this] == "string" && (n = t[this].split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])])) }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t }, normalizeRule: function (t) { if (typeof t == "string") { var n = {}; e.each(t.split(/\s/), function () { n[this] = !0 }), t = n } return t }, addMethod: function (t, n, r) { e.validator.methods[t] = n, e.validator.messages[t] = r !== undefined ? r : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t)) }, methods: { required: function (t, n, r) { if (!this.depend(r, n)) return "dependency-mismatch"; if (n.nodeName.toLowerCase() === "select") { var i = e(n).val(); return i && i.length > 0 } return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0 }, remote: function (t, n, r) { if (this.optional(n)) return "dependency-mismatch"; var i = this.previousValue(n); this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), i.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = i.message, r = typeof r == "string" && { url: r } || r; if (i.old === t) return i.valid; i.old = t; var s = this; this.startRequest(n); var o = {}; return o[n.name] = t, e.ajax(e.extend(!0, { url: r, mode: "abort", port: "validate" + n.name, dataType: "json", data: o, success: function (r) { s.settings.messages[n.name].remote = i.originalMessage; var o = r === !0 || r === "true"; if (o) { var u = s.formSubmitted; s.prepareElement(n), s.formSubmitted = u, s.successList.push(n), delete s.invalid[n.name], s.showErrors() } else { var a = {}, f = r || s.defaultMessage(n, "remote"); a[n.name] = i.message = e.isFunction(f) ? f(t) : f, s.invalid[n.name] = !0, s.showErrors(a) } i.valid = o, s.stopRequest(n, o) } }, r)), "pending" }, minlength: function (t, n, r) { var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n); return this.optional(n) || i >= r }, maxlength: function (t, n, r) { var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n); return this.optional(n) || i <= r }, rangelength: function (t, n, r) { var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n); return this.optional(n) || i >= r[0] && i <= r[1] }, min: function (e, t, n) { return this.optional(t) || e >= n }, max: function (e, t, n) { return this.optional(t) || e <= n }, range: function (e, t, n) { return this.optional(t) || e >= n[0] && e <= n[1] }, email: function (e, t) { return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e) }, url: function (e, t) { return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e) }, date: function (e, t) { return this.optional(t) || !/Invalid|NaN/.test((new Date(e)).toString()) }, dateISO: function (e, t) { return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e) }, number: function (e, t) { return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e) }, digits: function (e, t) { return this.optional(t) || /^\d+$/.test(e) }, creditcard: function (e, t) { if (this.optional(t)) return "dependency-mismatch"; if (/[^0-9 \-]+/.test(e)) return !1; var n = 0, r = 0, i = !1; e = e.replace(/\D/g, ""); for (var s = e.length - 1; s >= 0; s--) { var o = e.charAt(s); r = parseInt(o, 10), i && (r *= 2) > 9 && (r -= 9), n += r, i = !i } return n % 10 === 0 }, equalTo: function (t, n, r) { var i = e(r); return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () { e(n).valid() }), t === i.val() } } }), e.format = e.validator.format })(jQuery), function (e) { var t = {}; if (e.ajaxPrefilter) e.ajaxPrefilter(function (e, n, r) { var i = e.port; e.mode === "abort" && (t[i] && t[i].abort(), t[i] = r) }); else { var n = e.ajax; e.ajax = function (r) { var i = ("mode" in r ? r : e.ajaxSettings).mode, s = ("port" in r ? r : e.ajaxSettings).port; return i === "abort" ? (t[s] && t[s].abort(), t[s] = n.apply(this, arguments)) : n.apply(this, arguments) } } }(jQuery), function (e) { e.extend(e.fn, { validateDelegate: function (t, n, r) { return this.bind(n, function (n) { var i = e(n.target); if (i.is(t)) return r.apply(i, arguments) }) } }) }(jQuery);
///#source 1 1 vendor/jquery.magnific-popup.js
// Magnific Popup v0.9.9 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline
(function (a) { var b = "Close", c = "BeforeClose", d = "AfterClose", e = "BeforeAppend", f = "MarkupParse", g = "Open", h = "Change", i = "mfp", j = "." + i, k = "mfp-ready", l = "mfp-removing", m = "mfp-prevent-close", n, o = function () { }, p = !!window.jQuery, q, r = a(window), s, t, u, v, w, x = function (a, b) { n.ev.on(i + a + j, b) }, y = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, z = function (b, c) { n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c])) }, A = function (b) { if (b !== w || !n.currTemplate.closeBtn) n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)), w = b; return n.currTemplate.closeBtn }, B = function () { a.magnificPopup.instance || (n = new o, n.init(), a.magnificPopup.instance = n) }, C = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (a.transition !== undefined) return !0; while (b.length) if (b.pop() + "Transition" in a) return !0; return !1 }; o.prototype = { constructor: o, init: function () { var b = navigator.appVersion; n.isIE7 = b.indexOf("MSIE 7.") !== -1, n.isIE8 = b.indexOf("MSIE 8.") !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = C(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), t = a(document), n.popupsCache = {} }, open: function (b) { s || (s = a(document.body)); var c; if (b.isObj === !1) { n.items = b.items.toArray(), n.index = 0; var d = b.items, e; for (c = 0; c < d.length; c++) { e = d[c], e.parsed && (e = e.el[0]); if (e === b.el[0]) { n.index = c; break } } } else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0; if (n.isOpen) { n.updateItemHTML(); return } n.types = [], v = "", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = t, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = y("bg").on("click" + j, function () { n.close() }), n.wrap = y("wrap").attr("tabindex", -1).on("click" + j, function (a) { n._checkIfClose(a.target) && n.close() }), n.container = y("container", n.wrap)), n.contentContainer = y("content"), n.st.preloader && (n.preloader = y("preloader", n.container, n.st.tLoading)); var h = a.magnificPopup.modules; for (c = 0; c < h.length; c++) { var i = h[c]; i = i.charAt(0).toUpperCase() + i.slice(1), n["init" + i].call(n) } z("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (x(f, function (a, b, c, d) { c.close_replaceWith = A(d.type) }), v += " mfp-close-btn-in") : n.wrap.append(A())), n.st.alignTop && (v += " mfp-align-top"), n.fixedContentPos ? n.wrap.css({ overflow: n.st.overflowY, overflowX: "hidden", overflowY: n.st.overflowY }) : n.wrap.css({ top: r.scrollTop(), position: "absolute" }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({ height: t.height(), position: "absolute" }), n.st.enableEscapeKey && t.on("keyup" + j, function (a) { a.keyCode === 27 && n.close() }), r.on("resize" + j, function () { n.updateSize() }), n.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && n.wrap.addClass(v); var l = n.wH = r.height(), m = {}; if (n.fixedContentPos && n._hasScrollBar(l)) { var o = n._getScrollbarSize(); o && (m.marginRight = o) } n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden"); var p = n.st.mainClass; return n.isIE7 && (p += " mfp-ie7"), p && n._addClassToMFP(p), n.updateItemHTML(), z("BuildControls"), a("html").css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || s), n._lastFocusedEl = document.activeElement, setTimeout(function () { n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), t.on("focusin" + j, n._onFocusIn) }, 16), n.isOpen = !0, n.updateSize(l), z(g), b }, close: function () { if (!n.isOpen) return; z(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(function () { n._close() }, n.st.removalDelay)) : n._close() }, _close: function () { z(b); var c = l + " " + k + " "; n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + " "), n._removeClassFromMFP(c); if (n.fixedContentPos) { var e = { marginRight: "" }; n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } t.off("keyup" + j + " focusin" + j), n.ev.off(j), n.wrap.attr("class", "mfp-wrap").removeAttr("style"), n.bgOverlay.attr("class", "mfp-bg"), n.container.attr("class", "mfp-container"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, z(d) }, updateSize: function (a) { if (n.isIOS) { var b = document.documentElement.clientWidth / window.innerWidth, c = window.innerHeight * b; n.wrap.css("height", c), n.wH = c } else n.wH = a || r.height(); n.fixedContentPos || n.wrap.css("height", n.wH), z("Resize") }, updateItemHTML: function () { var b = n.items[n.index]; n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index)); var c = b.type; z("BeforeChange", [n.currItem ? n.currItem.type : "", c]), n.currItem = b; if (!n.currTemplate[c]) { var d = n.st[c] ? n.st[c].markup : !1; z("FirstMarkupParse", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0 } u && u !== b.type && n.container.removeClass("mfp-" + u + "-holder"); var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]); n.appendContent(e, c), b.preloaded = !0, z(h, b), u = b.type, n.container.prepend(n.contentContainer), z("AfterChange") }, appendContent: function (a, b) { n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".mfp-close").length || n.content.append(A()) : n.content = a : n.content = "", z(e), n.container.addClass("mfp-" + b + "-holder"), n.contentContainer.append(n.content) }, parseEl: function (b) { var c = n.items[b], d; c.tagName ? c = { el: a(c) } : (d = c.type, c = { data: c, src: c.src }); if (c.el) { var e = n.types; for (var f = 0; f < e.length; f++) if (c.el.hasClass("mfp-" + e[f])) { d = e[f]; break } c.src = c.el.attr("data-mfp-src"), c.src || (c.src = c.el.attr("href")) } return c.type = d || n.st.type || "inline", c.index = b, c.parsed = !0, n.items[b] = c, z("ElementParse", c), n.items[b] }, addGroup: function (a, b) { var c = function (c) { c.mfpEl = this, n._openClick(c, a, b) }; b || (b = {}); var d = "click.magnificPopup"; b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c))) }, _openClick: function (b, c, d) { var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick; if (!e && (b.which === 2 || b.ctrlKey || b.metaKey)) return; var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn; if (f) if (a.isFunction(f)) { if (!f.call(n)) return !0 } else if (r.width() < f) return !0; b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d) }, updateStatus: function (a, b) { if (n.preloader) { q !== a && n.container.removeClass("mfp-s-" + q), !b && a === "loading" && (b = n.st.tLoading); var c = { status: a, text: b }; z("UpdateStatus", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), n.container.addClass("mfp-s-" + a), q = a } }, _checkIfClose: function (b) { if (a(b).hasClass(m)) return; var c = n.st.closeOnContentClick, d = n.st.closeOnBgClick; if (c && d) return !0; if (!n.content || a(b).hasClass("mfp-close") || n.preloader && b === n.preloader[0]) return !0; if (b !== n.content[0] && !a.contains(n.content[0], b)) { if (d && a.contains(document, b)) return !0 } else if (c) return !0; return !1 }, _addClassToMFP: function (a) { n.bgOverlay.addClass(a), n.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), n.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (n.isIE7 ? t.height() : document.body.scrollHeight) > (a || r.height()) }, _setFocus: function () { (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus() }, _onFocusIn: function (b) { if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target)) return n._setFocus(), !1 }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), z(f, [b, c, d]), a.each(c, function (a, c) { if (c === undefined || c === !1) return !0; e = a.split("_"); if (e.length > 1) { var d = b.find(j + "-" + e[0]); if (d.length > 0) { var f = e[1]; f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c) } } else b.find(j + "-" + a).html(c) }) }, _getScrollbarSize: function () { if (n.scrollbarSize === undefined) { var a = document.createElement("div"); a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return n.scrollbarSize } }, a.magnificPopup = { instance: null, proto: o.prototype, modules: [], open: function (b, c) { return B(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, a.fn.magnificPopup = function (b) { B(); var c = a(this); if (typeof b == "string") if (b === "open") { var d, e = p ? c.data("magnificPopup") : c[0].magnificPopup, f = parseInt(arguments[1], 10) || 0; e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({ mfpEl: d }, c, e) } else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1)); else b = a.extend(!0, {}, b), p ? c.data("magnificPopup", b) : c[0].magnificPopup = b, n.addGroup(c, b); return c }; var D = "inline", E, F, G, H = function () { G && (F.after(G.addClass(E)).detach(), G = null) }; a.magnificPopup.registerModule(D, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { n.types.push(D), x(b + "." + D, function () { H() }) }, getInline: function (b, c) { H(); if (b.src) { var d = n.st.inline, e = a(b.src); if (e.length) { var f = e[0].parentNode; f && f.tagName && (F || (E = d.hiddenClass, F = y(E), E = "mfp-" + E), G = e.after(F).detach().removeClass(E)), n.updateStatus("ready") } else n.updateStatus("error", d.tNotFound), e = a("<div>"); return b.inlineElement = e, e } return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c } } }); var I, J = function () { return I === undefined && (I = document.createElement("p").style.MozTransform !== undefined), I }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a = n.st.zoom, d = ".zoom", e; if (!a.enabled || !n.supportsTransition) return; var f = a.duration, g = function (b) { var c = b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + a.duration / 1e3 + "s " + a.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, c.css(e), c }, h = function () { n.content.css("visibility", "visible") }, i, j; x("BuildControls" + d, function () { if (n._allowZoom()) { clearTimeout(i), n.content.css("visibility", "hidden"), e = n._getItemToZoom(); if (!e) { h(); return } j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(function () { j.css(n._getOffset(!0)), i = setTimeout(function () { h(), setTimeout(function () { j.remove(), e = j = null, z("ZoomAnimationEnded") }, 16) }, f) }, 16) } }), x(c + d, function () { if (n._allowZoom()) { clearTimeout(i), n.st.removalDelay = f; if (!e) { e = n._getItemToZoom(); if (!e) return; j = g(e) } j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css("visibility", "hidden"), setTimeout(function () { j.css(n._getOffset()) }, 16) } }), x(b + d, function () { n._allowZoom() && (h(), j && j.remove(), e = null) }) }, _allowZoom: function () { return n.currItem.type === "image" }, _getItemToZoom: function () { return n.currItem.hasSize ? n.currItem.img : !1 }, _getOffset: function (b) { var c; b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem); var d = c.offset(), e = parseInt(c.css("padding-top"), 10), f = parseInt(c.css("padding-bottom"), 10); d.top -= a(window).scrollTop() - e; var g = { width: c.width(), height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e }; return J() ? g["-moz-transform"] = g.transform = "translate(" + d.left + "px," + d.top + "px)" : (g.left = d.left, g.top = d.top), g } } }), B() })(window.jQuery || window.Zepto)

///#source 1 1 inmetrics/animations.js
var animations = function () {
  var PortableVersion = function () {
    $('header .in-inspire').attr({ "style": setPrefixCSS("transform: translate(108px, 541px);") });

    $(window).on({
      scroll: function () {
        var _top = $(document).scrollTop();

        if (_top > 200)
          $('header .in-inspire').attr({ "style": setPrefixCSS("transform: translate(108px, 160px);") });
        else
          $('header .in-inspire').attr({ "style": setPrefixCSS("transform: translate(108px, 541px);") });
      }
    });
  };

  var DesktopVersion = function () {
    var w_height = $(window).height();

    //olhos
    $('header .in-inspire').attr({
      "data-0": setPrefixCSS("transform: translate(108px, 541px);"),
      "data-1100": setPrefixCSS("transform: translate(115px, 140px);"),
      "data-1500": setPrefixCSS("transform: translate(115px, 570px);"),
      "data-2450": setPrefixCSS("transform: translate(115px, 140px);"),
      "data-2490": setPrefixCSS("transform: translate(115px, 140px);"),
      "data-3000": setPrefixCSS("transform: translate(115px, 340px);"),
      "data-3300": setPrefixCSS("transform: translate(115px, 140px);"),
      "data-3750": setPrefixCSS("transform: translate(115px, 420px);"),
      "data-4150": setPrefixCSS("transform: translate(115px, 120px);"),
      "data-4970": setPrefixCSS("transform: translate(115px, 120px);"),
      "data-5350": setPrefixCSS("transform: translate(115px, 240px);"),
      "data-5600": setPrefixCSS("transform: translate(115px, 120px);"),
      "data-6430": setPrefixCSS("transform: translate(115px, 550px);"),
      "data-7380": setPrefixCSS("transform: translate(115px, 140px);"),
      "data-7650": setPrefixCSS("transform: translate(115px, 450px);"),
      "data-8020": setPrefixCSS("transform: translate(115px, 120px);"),
      "data-9020": setPrefixCSS("transform: translate(115px, 570px);"),
      "data-10300": setPrefixCSS("transform: translate(115px, 140px);"),
      "data-12000": setPrefixCSS("transform: translate(115px, 210px);"),
      "data-13000": setPrefixCSS("transform: translate(115px, 540px);"),
      "data-13650": setPrefixCSS("transform: translate(115px, 140px);"),
      "data-0-end": setPrefixCSS("transform: translate(720px, " + (w_height - 600) + "px);")
    });

    //iniciando apresenta
    $("#apresenta").attr({
      "data-0": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-1500": setPrefixCSS("transform: translate(0px, -470px);")
    });
    $("#apresenta .olho").attr({
      "data-400": "background-position: 0px 0px;",
      "data-1500": "background-position: 0px -130px;"
    });
    $('#apresenta .olho-2').attr({
      "data-600": "background-position: -223px 0px;",
      "data-1500": "background-position: -223px -110px;"
    });
    $('#apresenta .olho-3').attr({
      "data-500": "background-position: right 0px;",
      "data-1600": "background-position: right -150px;"
    });

    //estrategia
    $("#estrategica").attr({
      "data-0": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-1500": setPrefixCSS("transform: translate(0px, -470px);"),
      "data-4200": setPrefixCSS("transform: translate(0px, -1402px);")
    });
    $('#estrategica h2').attr({
      "data-850": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-3000": setPrefixCSS("transform: translate(0px, -700px);")
    });
    $('#estrategica .img-cena').attr({
      "data-750": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-2300": setPrefixCSS("transform: translate(0px, -150px);")
    });
    $('#estrategica .img-projeto').attr({
      "data-850": setPrefixCSS("transform: translate(0px, 0px);") + " width:223px; opacity:1;",
      "data-3000": setPrefixCSS("transform: translate(35px, -230px);") + " width:90px; opacity:0;"
    });
    $('#estrategica .img-nuvens').attr({
      "data-1000": setPrefixCSS("transform: translate(0px, 80px);"),
      "data-2800": setPrefixCSS("transform: translate(0px, -300px);")
    });
    $('#estrategica .table').attr({
      "data-1000": setPrefixCSS("transform: translate(0px, 100px);"),
      "data-3500": setPrefixCSS("transform: translate(0px, -200px);")
    });

    //iniciando gestao
    $('#gestao').attr({
      "data-2100": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-3250": setPrefixCSS("transform: translate(0px, -" + w_height + "px);"),
      "data-5300": setPrefixCSS("transform: translate(0px, -" + (w_height + 1100) + "px);")
    });
    $("#gestao h2").attr({
      "data-2700": setPrefixCSS("transform: translate(0px, 200px);"),
      "data-4500": setPrefixCSS("transform: translate(0px, -100px);")
    });
    $('#gestao .img-cena').attr({
      "data-2800": setPrefixCSS("transform: translate(0px, 150px);"),
      "data-4500": setPrefixCSS("transform: translate(0px, -200px);")
    });
    $('#gestao .table').attr({
      "data-3200": setPrefixCSS("transform: translate(0px, 120px);"),
      "data-4800": setPrefixCSS("transform: translate(0px, -100px);")
    });

    //inicianado operacional
    $('#operacional').attr({
      "data-3000": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-3200": setPrefixCSS("transform: translate(0px, -" + (w_height - 50) + "px);"),
      "data-6000": setPrefixCSS("transform: translate(0px, -" + (w_height - 50) + "px);"),
      "data-8900": setPrefixCSS("transform: translate(0px, -" + (w_height + 1204) + "px);")
    });
    $('#operacional h2').attr({
      "data-4500": setPrefixCSS("transform: translate(0px, -200px);"),
      "data-5300": setPrefixCSS("transform: translate(0px, 60px);"),
      "data-6500": setPrefixCSS("transform: translate(0px, -210px);")
    });
    $('#operacional span.fil-1').attr({
      "data-4300": setPrefixCSS("transform: translate(0px, -490px);"),
      "data-4800": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-5300": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-6500": setPrefixCSS("transform: translate(0px, -230px);"),
    });
    $('#operacional img.fil-2').attr({
      "data-4400": setPrefixCSS("transform: translate(0px, -490px);"),
      "data-5000": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-5300": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-6500": setPrefixCSS("transform: translate(0px, -230px);")
    });
    $('#operacional img.fil-3').attr({
      "data-4500": setPrefixCSS("transform: translate(0px, -490px);"),
      "data-5300": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-6500": setPrefixCSS("transform: translate(0px, -230px);")
    });
    $('#operacional .table').attr({
      "data-4700": setPrefixCSS("transform: translate(0px, 300px);"),
      "data-6500": setPrefixCSS("transform: translate(0px, -50px);")
    });

    //iniciando funcional
    $('#funcional').attr({
      "data-7100": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-8100": setPrefixCSS("transform: translate(0px, -" + (w_height - 20) + "px);"),
      "data-12400": setPrefixCSS("transform: translate(0px, -" + (w_height + 1180) + "px);")
    });
    $('#funcional h2').attr({
      "data-7500": setPrefixCSS("transform: translate(0px, 100px);"),
      "data-8100": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-8200": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-9600": setPrefixCSS("transform: translate(0px, -200px);")
    });
    $('#funcional .img-cena').attr({
      "data-7500": setPrefixCSS("transform: translate(0px, 80px);"),
      "data-8200": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-9000": setPrefixCSS("transform: translate(0px, -70px);")
    });
    $('#funcional .img-peao-cabeca').attr({
      "data-7500": setPrefixCSS("transform: translate(0px, -35px);"),
      "data-8150": setPrefixCSS("transform: translate(0px, 67px);")
    });
    $('#funcional .img-peao-base').attr({
      "data-7500": setPrefixCSS("transform: translate(2px, 35px);"),
      "data-8150": setPrefixCSS("transform: translate(2px, -76px);")
    });
    $('#funcional .img-nuvens').attr({
      "data-8000": setPrefixCSS("transform: translate(0px, 80px);") + " opacity: 0;",
      "data-8900": setPrefixCSS("transform: translate(0px, 10px);") + " opacity: 1;",
      "data-11000": setPrefixCSS("transform: translate(0px, -220px);") + " opacity: 1;"
    });
    $('#funcional .table').attr({
      "data-8700": setPrefixCSS("transform: translate(0px, 120px);"),
      "data-10700": setPrefixCSS("transform: translate(0px, -50px);")
    });

    //iniciando qualidade
    $('#qualidade').attr({
      "data-7500": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-10500": setPrefixCSS("transform: translate(0px, -490px);"),
      "data-12300": setPrefixCSS("transform: translate(0px, -" + (w_height - 100) + "px);"),
      "data-14500": setPrefixCSS("transform: translate(0px, -" + (w_height + 1040) + "px);")
    });
    $('#qualidade h2').attr({
      "data-10500": setPrefixCSS("transform: translate(0px, -300px);"),
      "data-12300": setPrefixCSS("transform: translate(0px, 50px);"),
      "data-13000": setPrefixCSS("transform: translate(0px, -200px);")
    });
    $('#qualidade .img-coroa').attr({
      "data-11300": setPrefixCSS("transform: translate(0px, -300px);"),
      "data-12000": setPrefixCSS("transform: translate(0px, 35px);")
    });
    $('#qualidade .img-raios').attr({
      "data-11980": "opacity: 0",
      "data-12020": "opacity: 1"
    });
    $('#qualidade .img-projeto').attr({
      "data-11000": "opacity: 0; width: 100px; right: 102px;",
      "data-12000": "opacity: 1; width: 320px; right: 22px;"
    });
    $('#qualidade .img-nuvens').attr({
      "data-12150": setPrefixCSS("transform: translate(0px, 50px);" + " opacity: 0;"),
      "data-12200": setPrefixCSS("transform: translate(0px, 50px);" + " opacity: 1;"),
      "data-13000": setPrefixCSS("transform: translate(0px, -200px);" + " opacity: 1;")
    });

    $('#qualidade .table').attr({
      "data-12150": setPrefixCSS("transform: translate(0px, 150px);"),
      "data-14000": setPrefixCSS("transform: translate(0px, 0px);")
    });

    //iniciando contato
    $('#contato').attr({
      "data-2600-end": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-750-end": setPrefixCSS("transform: translate(0px, -651px);"),
      "data-0-end": setPrefixCSS("transform: translate(0px, -751px);")
    });

    //iniciando o parallax
    var s = skrollr.init({
      scale: 2.2
    });
  };

  var setPrefixCSS = function (values) {
    var data = "-webkit-" + values;
    data += "-moz-" + values;
    data += "-ms-" + values;
    data += "-o-" + values;
    data += values;
    return data;
  };

  return {
    PortableVersion: PortableVersion,
    DesktopVersion: DesktopVersion
  };
}();
///#source 1 1 inmetrics/init.js
var inmetrics = function () {

  var init = function () {
    if ($("body").hasClass("animated")) {
      if ($(window).width() > 768)
        setDataSkrollr();
      removeCurtain();
    }
    $("[data-toggle=slide]").on({ click: slideToggle });
    $(".descriptions a").magnificPopup({ type: 'inline' });
    $(".selections a").on({
      mouseenter: selectionsHoverIn,
      mouseleave: selectionsHoverOut,
      click: selectionsClick
    });
    contactFormValidations();
  };

  var slideToggle = function () {
    var target = $($(this).attr("href"));
    if (target.data("slide-toggle") != "on") {
      target.slideDown('fast', function () {
        target.data("slide-toggle", "on");
      });
    }
    else {
      target.slideUp('fast', function () {
        target.data("slide-toggle", "off");
      });
    }
    return false;
  };

  var selectionsHoverIn = function () {
    var selection = $(this).data("selection");
    $(this).closest(".columns-overlap")
           .find("[data-selection-row=" + selection + "]")
           .addClass("hovered");
  };

  var selectionsHoverOut = function () {
    var selection = $(this).data("selection");
    $("[data-selection-row=" + selection + "]").removeClass("hovered");
  };

  var selectionsClick = function () {
    var selection = $(this).data("selection");
    $(this).toggleClass("selected");
    var isSelected = $(this).hasClass("selected");
    if ($("[data-selection=" + selection + "].selected").length > 0)
      $("[data-selection-row=" + selection + "]").addClass("selected");
    else
      $("[data-selection-row=" + selection + "]").removeClass("selected");
    var selectionIds = $(this).data("selection-ids");    
    var selections = $(".contact-form form").data("selections") || [];
    if (isSelected) {
      selections.push(selectionIds);
    }
    else {
      i = selections.indexOf(selectionIds);
      if (i != -1) selections.splice(i, 1);
    }
    $(".contact-form form").data("selections", selections);
    $("#selections-input").val(selections.join(";"));
    return false;
  };

  var contactFormValidations = function () {
    $('.contact-form form').validate({
      rules: {
        'plan_request[name]': "required",
        'plan_request[email]': { required: true, email: true },
        'plan_request[message]': "required"
      },
      messages: {
        'plan_request[name]': "<?php esc_attr_e('* Field is required', 'inmetrics'); ?>",
        'plan_request[email]': {
          required: "<?php esc_attr_e('* Field is required', 'inmetrics'); ?>",
          email: "<?php esc_attr_e('* E-mail is invalid', 'inmetrics'); ?>"
        },
        'plan_request[message]': "<?php esc_attr_e('* Field is required', 'inmetrics'); ?>"
      }
    });
  }

  var removeCurtain = function () {
    $.get('/wp-content/themes/inmetrics/images/animados/olho_aladoanima.png', function () {
      setTimeout(function () {
        $('body').removeClass('loading-on');
      }, 1200);
    });
  };

  isMobile = function () {
    return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
  };

  var setDataSkrollr = function () {
    if (isMobile()) {
      animations.PortableVersion();
    } else {
      animations.DesktopVersion();
    }
  };

  return { init: init }
}();

$(document).ready(inmetrics.init);
