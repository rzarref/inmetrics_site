///#source 1 1 vendor/skrollr.min.js
/*! skrollr 0.6.20 (2014-01-03) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function (e, t, r) { "use strict"; function n(r) { if (o = t.documentElement, a = t.body, K(), it = this, r = r || {}, ut = r.constants || {}, r.easing) for (var n in r.easing) U[n] = r.easing[n]; yt = r.edgeStrategy || "set", ct = { beforerender: r.beforerender, render: r.render }, ft = r.forceHeight !== !1, ft && (zt = r.scale || 1), pt = r.mobileDeceleration || E, gt = r.smoothScrolling !== !1, vt = r.smoothScrollingDuration || x, dt = { targetTop: it.getScrollTop() }, _t = (r.mobileCheck || function () { return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || e.opera) })(), _t ? (st = t.getElementById("skrollr-body"), st && at(), X(), Ct(o, [y, S], [T])) : Ct(o, [y, b], [T]), it.refresh(), St(e, "resize orientationchange", function () { var e = o.clientWidth, t = o.clientHeight; (t !== $t || e !== Lt) && ($t = t, Lt = e, Mt = !0) }); var i = Y(); return function l() { Z(), bt = i(l) }(), it } var o, a, i = e.skrollr = { get: function () { return it }, init: function (e) { return it || new n(e) }, VERSION: "0.6.20" }, l = Object.prototype.hasOwnProperty, s = e.Math, c = e.getComputedStyle, f = "touchstart", u = "touchmove", p = "touchcancel", m = "touchend", g = "skrollable", v = g + "-before", d = g + "-between", h = g + "-after", y = "skrollr", T = "no-" + y, b = y + "-desktop", S = y + "-mobile", w = "linear", k = 1e3, E = .004, x = 200, A = "start", F = "end", C = "center", D = "bottom", H = "___skrollable_id", P = /^(?:input|textarea|button|select)$/i, N = /^\s+|\s+$/g, V = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/, z = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, O = /^([a-z\-]+)\[(\w+)\]$/, q = /-([a-z])/g, I = function (e, t) { return t.toUpperCase() }, L = /[\-+]?[\d]*\.?[\d]+/g, $ = /\{\?\}/g, M = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g, B = /[a-z\-]+-gradient/g, _ = "", G = "", K = function () { var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/; if (c) { var t = c(a, null); for (var n in t) if (_ = n.match(e) || +n == n && t[n].match(e)) break; if (!_) return _ = G = "", r; _ = _[0], "-" === _.slice(0, 1) ? (G = _, _ = { "-webkit-": "webkit", "-moz-": "Moz", "-ms-": "ms", "-o-": "O" }[_]) : G = "-" + _.toLowerCase() + "-" } }, Y = function () { var t = e.requestAnimationFrame || e[_.toLowerCase() + "RequestAnimationFrame"], r = Pt(); return (_t || !t) && (t = function (t) { var n = Pt() - r, o = s.max(0, 1e3 / 60 - n); return e.setTimeout(function () { r = Pt(), t() }, o) }), t }, R = function () { var t = e.cancelAnimationFrame || e[_.toLowerCase() + "CancelAnimationFrame"]; return (_t || !t) && (t = function (t) { return e.clearTimeout(t) }), t }, U = { begin: function () { return 0 }, end: function () { return 1 }, linear: function (e) { return e }, quadratic: function (e) { return e * e }, cubic: function (e) { return e * e * e }, swing: function (e) { return -s.cos(e * s.PI) / 2 + .5 }, sqrt: function (e) { return s.sqrt(e) }, outCubic: function (e) { return s.pow(e - 1, 3) + 1 }, bounce: function (e) { var t; if (.5083 >= e) t = 3; else if (.8489 >= e) t = 9; else if (.96208 >= e) t = 27; else { if (!(.99981 >= e)) return 1; t = 91 } return 1 - s.abs(3 * s.cos(1.028 * e * t) / t) } }; n.prototype.refresh = function (e) { var n, o, a = !1; for (e === r ? (a = !0, lt = [], Bt = 0, e = t.getElementsByTagName("*")) : e = [].concat(e), n = 0, o = e.length; o > n; n++) { var i = e[n], l = i, s = [], c = gt, f = yt; if (i.attributes) { for (var u = 0, p = i.attributes.length; p > u; u++) { var m = i.attributes[u]; if ("data-anchor-target" !== m.name) if ("data-smooth-scrolling" !== m.name) if ("data-edge-strategy" !== m.name) { var v = m.name.match(V); if (null !== v) { var d = { props: m.value, element: i }; s.push(d); var h = v[1]; h && (d.constant = h.substr(1)); var y = v[2]; /p$/.test(y) ? (d.isPercentage = !0, d.offset = (0 | y.slice(0, -1)) / 100) : d.offset = 0 | y; var T = v[3], b = v[4] || T; T && T !== A && T !== F ? (d.mode = "relative", d.anchors = [T, b]) : (d.mode = "absolute", T === F ? d.isEnd = !0 : d.isPercentage || (d.offset = d.offset * zt)) } } else f = m.value; else c = "off" !== m.value; else if (l = t.querySelector(m.value), null === l) throw 'Unable to find anchor target "' + m.value + '"' } if (s.length) { var S, w, k; !a && H in i ? (k = i[H], S = lt[k].styleAttr, w = lt[k].classAttr) : (k = i[H] = Bt++, S = i.style.cssText, w = Ft(i)), lt[k] = { element: i, styleAttr: S, classAttr: w, anchorTarget: l, keyFrames: s, smoothScrolling: c, edgeStrategy: f }, Ct(i, [g], []) } } } for (Et(), n = 0, o = e.length; o > n; n++) { var E = lt[e[n][H]]; E !== r && (J(E), et(E)) } return it }, n.prototype.relativeToAbsolute = function (e, t, r) { var n = o.clientHeight, a = e.getBoundingClientRect(), i = a.top, l = a.bottom - a.top; return t === D ? i -= n : t === C && (i -= n / 2), r === D ? i += l : r === C && (i += l / 2), i += it.getScrollTop(), 0 | i + .5 }, n.prototype.animateTo = function (e, t) { t = t || {}; var n = Pt(), o = it.getScrollTop(); return mt = { startTop: o, topDiff: e - o, targetTop: e, duration: t.duration || k, startTime: n, endTime: n + (t.duration || k), easing: U[t.easing || w], done: t.done }, mt.topDiff || (mt.done && mt.done.call(it, !1), mt = r), it }, n.prototype.stopAnimateTo = function () { mt && mt.done && mt.done.call(it, !0), mt = r }, n.prototype.isAnimatingTo = function () { return !!mt }, n.prototype.setScrollTop = function (t, r) { return ht = r === !0, _t ? Gt = s.min(s.max(t, 0), Vt) : e.scrollTo(0, t), it }, n.prototype.getScrollTop = function () { return _t ? Gt : e.pageYOffset || o.scrollTop || a.scrollTop || 0 }, n.prototype.getMaxScrollTop = function () { return Vt }, n.prototype.on = function (e, t) { return ct[e] = t, it }, n.prototype.off = function (e) { return delete ct[e], it }, n.prototype.destroy = function () { var e = R(); e(bt), kt(), Ct(o, [T], [y, b, S]); for (var t = 0, n = lt.length; n > t; t++) ot(lt[t].element); o.style.overflow = a.style.overflow = "auto", o.style.height = a.style.height = "auto", st && i.setStyle(st, "transform", "none"), it = r, st = r, ct = r, ft = r, Vt = 0, zt = 1, ut = r, pt = r, Ot = "down", qt = -1, Lt = 0, $t = 0, Mt = !1, mt = r, gt = r, vt = r, dt = r, ht = r, Bt = 0, yt = r, _t = !1, Gt = 0, Tt = r }; var X = function () { var n, i, l, c, g, v, d, h, y, T, b, S; St(o, [f, u, p, m].join(" "), function (e) { var o = e.changedTouches[0]; for (c = e.target; 3 === c.nodeType;) c = c.parentNode; switch (g = o.clientY, v = o.clientX, T = e.timeStamp, P.test(c.tagName) || e.preventDefault(), e.type) { case f: n && n.blur(), it.stopAnimateTo(), n = c, i = d = g, l = v, y = T; break; case u: P.test(c.tagName) && t.activeElement !== c && e.preventDefault(), h = g - d, S = T - b, it.setScrollTop(Gt - h, !0), d = g, b = T; break; default: case p: case m: var a = i - g, w = l - v, k = w * w + a * a; if (49 > k) { if (!P.test(n.tagName)) { n.focus(); var E = t.createEvent("MouseEvents"); E.initMouseEvent("click", !0, !0, e.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(E) } return } n = r; var x = h / S; x = s.max(s.min(x, 3), -3); var A = s.abs(x / pt), F = x * A + .5 * pt * A * A, C = it.getScrollTop() - F, D = 0; C > Vt ? (D = (Vt - C) / F, C = Vt) : 0 > C && (D = -C / F, C = 0), A *= 1 - D, it.animateTo(0 | C + .5, { easing: "outCubic", duration: A }) } }), e.scrollTo(0, 0), o.style.overflow = a.style.overflow = "hidden" }, j = function () { var e, t, r, n, a, i, l, c, f, u, p, m = o.clientHeight, g = xt(); for (c = 0, f = lt.length; f > c; c++) for (e = lt[c], t = e.element, r = e.anchorTarget, n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], u = l.offset, p = g[l.constant] || 0, l.frame = u, l.isPercentage && (u *= m, l.frame = u), "relative" === l.mode && (ot(t), l.frame = it.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u, ot(t, !0)), l.frame += p, ft && !l.isEnd && l.frame > Vt && (Vt = l.frame); for (Vt = s.max(Vt, At()), c = 0, f = lt.length; f > c; c++) { for (e = lt[c], n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], p = g[l.constant] || 0, l.isEnd && (l.frame = Vt - l.offset + p); e.keyFrames.sort(Nt) } }, W = function (e, t) { for (var r = 0, n = lt.length; n > r; r++) { var o, a, s = lt[r], c = s.element, f = s.smoothScrolling ? e : t, u = s.keyFrames, p = u[0].frame, m = u[u.length - 1].frame, y = p > f, T = f > m, b = u[y ? 0 : u.length - 1]; if (y || T) { if (y && -1 === s.edge || T && 1 === s.edge) continue; switch (Ct(c, [y ? v : h], [v, d, h]), s.edge = y ? -1 : 1, s.edgeStrategy) { case "reset": ot(c); continue; case "ease": f = b.frame; break; default: case "set": var S = b.props; for (o in S) l.call(S, o) && (a = nt(S[o].value), i.setStyle(c, o, a)); continue } } else 0 !== s.edge && (Ct(c, [g, d], [v, h]), s.edge = 0); for (var w = 0, k = u.length - 1; k > w; w++) if (f >= u[w].frame && u[w + 1].frame >= f) { var E = u[w], x = u[w + 1]; for (o in E.props) if (l.call(E.props, o)) { var A = (f - E.frame) / (x.frame - E.frame); A = E.props[o].easing(A), a = rt(E.props[o].value, x.props[o].value, A), a = nt(a), i.setStyle(c, o, a) } break } } }, Z = function () { Mt && (Mt = !1, Et()); var e, t, n = it.getScrollTop(), o = Pt(); if (mt) o >= mt.endTime ? (n = mt.targetTop, e = mt.done, mt = r) : (t = mt.easing((o - mt.startTime) / mt.duration), n = 0 | mt.startTop + t * mt.topDiff), it.setScrollTop(n, !0); else if (!ht) { var a = dt.targetTop - n; a && (dt = { startTop: qt, topDiff: n - qt, targetTop: n, startTime: It, endTime: It + vt }), dt.endTime >= o && (t = U.sqrt((o - dt.startTime) / vt), n = 0 | dt.startTop + t * dt.topDiff) } if (_t && st && i.setStyle(st, "transform", "translate(0, " + -Gt + "px) " + Tt), ht || qt !== n) { Ot = n > qt ? "down" : qt > n ? "up" : Ot, ht = !1; var l = { curTop: n, lastTop: qt, maxTop: Vt, direction: Ot }, s = ct.beforerender && ct.beforerender.call(it, l); s !== !1 && (W(n, it.getScrollTop()), qt = n, ct.render && ct.render.call(it, l)), e && e.call(it, !1) } It = o }, J = function (e) { for (var t = 0, r = e.keyFrames.length; r > t; t++) { for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = z.exec(l.props)) ;) a = i[1], o = i[2], n = a.match(O), null !== n ? (a = n[1], n = n[2]) : n = w, o = o.indexOf("!") ? Q(o) : [o.slice(1)], s[a] = { value: o, easing: U[n] }; l.props = s } }, Q = function (e) { var t = []; return M.lastIndex = 0, e = e.replace(M, function (e) { return e.replace(L, function (e) { return 100 * (e / 255) + "%" }) }), G && (B.lastIndex = 0, e = e.replace(B, function (e) { return G + e })), e = e.replace(L, function (e) { return t.push(+e), "{?}" }), t.unshift(e), t }, et = function (e) { var t, r, n = {}; for (t = 0, r = e.keyFrames.length; r > t; t++) tt(e.keyFrames[t], n); for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) tt(e.keyFrames[t], n) }, tt = function (e, t) { var r; for (r in t) l.call(e.props, r) || (e.props[r] = t[r]); for (r in e.props) t[r] = e.props[r] }, rt = function (e, t, r) { var n, o = e.length; if (o !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"'; var a = [e[0]]; for (n = 1; o > n; n++) a[n] = e[n] + (t[n] - e[n]) * r; return a }, nt = function (e) { var t = 1; return $.lastIndex = 0, e[0].replace($, function () { return e[t++] }) }, ot = function (e, t) { e = [].concat(e); for (var r, n, o = 0, a = e.length; a > o; o++) n = e[o], r = lt[n[H]], r && (t ? (n.style.cssText = r.dirtyStyleAttr, Ct(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText, r.dirtyClassAttr = Ft(n), n.style.cssText = r.styleAttr, Ct(n, r.classAttr))) }, at = function () { Tt = "translateZ(0)", i.setStyle(st, "transform", Tt); var e = c(st), t = e.getPropertyValue("transform"), r = e.getPropertyValue(G + "transform"), n = t && "none" !== t || r && "none" !== r; n || (Tt = "") }; i.setStyle = function (e, t, r) { var n = e.style; if (t = t.replace(q, I).replace("-", ""), "zIndex" === t) n[t] = isNaN(r) ? r : "" + (0 | r); else if ("float" === t) n.styleFloat = n.cssFloat = r; else try { _ && (n[_ + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), n[t] = r } catch (o) { } }; var it, lt, st, ct, ft, ut, pt, mt, gt, vt, dt, ht, yt, Tt, bt, St = i.addEvent = function (t, r, n) { var o = function (t) { return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function () { t.returnValue = !1 }), n.call(this, t) }; r = r.split(" "); for (var a, i = 0, l = r.length; l > i; i++) a = r[i], t.addEventListener ? t.addEventListener(a, n, !1) : t.attachEvent("on" + a, o), Kt.push({ element: t, name: a, listener: n }) }, wt = i.removeEvent = function (e, t, r) { t = t.split(" "); for (var n = 0, o = t.length; o > n; n++) e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r) }, kt = function () { for (var e, t = 0, r = Kt.length; r > t; t++) e = Kt[t], wt(e.element, e.name, e.listener); Kt = [] }, Et = function () { var e = it.getScrollTop(); Vt = 0, ft && !_t && (a.style.height = "auto"), j(), ft && !_t && (a.style.height = Vt + o.clientHeight + "px"), _t ? it.setScrollTop(s.min(it.getScrollTop(), Vt)) : it.setScrollTop(e, !0), ht = !0 }, xt = function () { var e, t, r = o.clientHeight, n = {}; for (e in ut) t = ut[e], "function" == typeof t ? t = t.call(it) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r), n[e] = t; return n }, At = function () { var e = st && st.offsetHeight || 0, t = s.max(e, a.scrollHeight, a.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight); return t - o.clientHeight }, Ft = function (t) { var r = "className"; return e.SVGElement && t instanceof e.SVGElement && (t = t[r], r = "baseVal"), t[r] }, Ct = function (t, n, o) { var a = "className"; if (e.SVGElement && t instanceof e.SVGElement && (t = t[a], a = "baseVal"), o === r) return t[a] = n, r; for (var i = t[a], l = 0, s = o.length; s > l; l++) i = Ht(i).replace(Ht(o[l]), " "); i = Dt(i); for (var c = 0, f = n.length; f > c; c++) -1 === Ht(i).indexOf(Ht(n[c])) && (i += " " + n[c]); t[a] = Dt(i) }, Dt = function (e) { return e.replace(N, "") }, Ht = function (e) { return " " + e + " " }, Pt = Date.now || function () { return +new Date }, Nt = function (e, t) { return e.frame - t.frame }, Vt = 0, zt = 1, Ot = "down", qt = -1, It = Pt(), Lt = 0, $t = 0, Mt = !1, Bt = 0, _t = !1, Gt = 0, Kt = [] })(window, document);
///#source 1 1 vendor/jquery.validate.js
/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

  $.extend($.fn, {
    // http://docs.jquery.com/Plugins/Validation/validate
    validate: function (options) {

      // if nothing is selected, return nothing; can't chain anyway
      if (!this.length) {
        if (options && options.debug && window.console) {
          console.warn("Nothing selected, can't validate, returning nothing.");
        }
        return;
      }

      // check if a validator for this form was already created
      var validator = $.data(this[0], "validator");
      if (validator) {
        return validator;
      }

      // Add novalidate tag if HTML5.
      this.attr("novalidate", "novalidate");

      validator = new $.validator(options, this[0]);
      $.data(this[0], "validator", validator);

      if (validator.settings.onsubmit) {

        this.validateDelegate(":submit", "click", function (event) {
          if (validator.settings.submitHandler) {
            validator.submitButton = event.target;
          }
          // allow suppressing validation by adding a cancel class to the submit button
          if ($(event.target).hasClass("cancel")) {
            validator.cancelSubmit = true;
          }

          // allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
          if ($(event.target).attr("formnovalidate") !== undefined) {
            validator.cancelSubmit = true;
          }
        });

        // validate the form on submit
        this.submit(function (event) {
          if (validator.settings.debug) {
            // prevent form submit to be able to see console output
            event.preventDefault();
          }
          function handle() {
            var hidden;
            if (validator.settings.submitHandler) {
              if (validator.submitButton) {
                // insert a hidden input as a replacement for the missing submit button
                hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
              }
              validator.settings.submitHandler.call(validator, validator.currentForm, event);
              if (validator.submitButton) {
                // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                hidden.remove();
              }
              return false;
            }
            return true;
          }

          // prevent submit for invalid forms or custom submit handlers
          if (validator.cancelSubmit) {
            validator.cancelSubmit = false;
            return handle();
          }
          if (validator.form()) {
            if (validator.pendingRequest) {
              validator.formSubmitted = true;
              return false;
            }
            return handle();
          } else {
            validator.focusInvalid();
            return false;
          }
        });
      }

      return validator;
    },
    // http://docs.jquery.com/Plugins/Validation/valid
    valid: function () {
      if ($(this[0]).is("form")) {
        return this.validate().form();
      } else {
        var valid = true;
        var validator = $(this[0].form).validate();
        this.each(function () {
          valid = valid && validator.element(this);
        });
        return valid;
      }
    },
    // attributes: space seperated list of attributes to retrieve and remove
    removeAttrs: function (attributes) {
      var result = {},
        $element = this;
      $.each(attributes.split(/\s/), function (index, value) {
        result[value] = $element.attr(value);
        $element.removeAttr(value);
      });
      return result;
    },
    // http://docs.jquery.com/Plugins/Validation/rules
    rules: function (command, argument) {
      var element = this[0];

      if (command) {
        var settings = $.data(element.form, "validator").settings;
        var staticRules = settings.rules;
        var existingRules = $.validator.staticRules(element);
        switch (command) {
          case "add":
            $.extend(existingRules, $.validator.normalizeRule(argument));
            // remove messages from rules, but allow them to be set separetely
            delete existingRules.messages;
            staticRules[element.name] = existingRules;
            if (argument.messages) {
              settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
            }
            break;
          case "remove":
            if (!argument) {
              delete staticRules[element.name];
              return existingRules;
            }
            var filtered = {};
            $.each(argument.split(/\s/), function (index, method) {
              filtered[method] = existingRules[method];
              delete existingRules[method];
            });
            return filtered;
        }
      }

      var data = $.validator.normalizeRules(
      $.extend(
        {},
        $.validator.classRules(element),
        $.validator.attributeRules(element),
        $.validator.dataRules(element),
        $.validator.staticRules(element)
      ), element);

      // make sure required is at front
      if (data.required) {
        var param = data.required;
        delete data.required;
        data = $.extend({ required: param }, data);
      }

      return data;
    }
  });

  // Custom selectors
  $.extend($.expr[":"], {
    // http://docs.jquery.com/Plugins/Validation/blank
    blank: function (a) { return !$.trim("" + $(a).val()); },
    // http://docs.jquery.com/Plugins/Validation/filled
    filled: function (a) { return !!$.trim("" + $(a).val()); },
    // http://docs.jquery.com/Plugins/Validation/unchecked
    unchecked: function (a) { return !$(a).prop("checked"); }
  });

  // constructor for validator
  $.validator = function (options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
  };

  $.validator.format = function (source, params) {
    if (arguments.length === 1) {
      return function () {
        var args = $.makeArray(arguments);
        args.unshift(source);
        return $.validator.format.apply(this, args);
      };
    }
    if (arguments.length > 2 && params.constructor !== Array) {
      params = $.makeArray(arguments).slice(1);
    }
    if (params.constructor !== Array) {
      params = [params];
    }
    $.each(params, function (i, n) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
        return n;
      });
    });
    return source;
  };

  $.extend($.validator, {

    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusInvalid: true,
      errorContainer: $([]),
      errorLabelContainer: $([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function (element, event) {
        this.lastActive = element;

        // hide error label and remove error class on focus if enabled
        if (this.settings.focusCleanup && !this.blockFocusCleanup) {
          if (this.settings.unhighlight) {
            this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
          }
          this.addWrapper(this.errorsFor(element)).hide();
        }
      },
      onfocusout: function (element, event) {
        if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
          this.element(element);
        }
      },
      onkeyup: function (element, event) {
        if (event.which === 9 && this.elementValue(element) === "") {
          return;
        } else if (element.name in this.submitted || element === this.lastElement) {
          this.element(element);
        }
      },
      onclick: function (element, event) {
        // click on selects, radiobuttons and checkboxes
        if (element.name in this.submitted) {
          this.element(element);
        }
          // or option elements, check parent select in that case
        else if (element.parentNode.name in this.submitted) {
          this.element(element.parentNode);
        }
      },
      highlight: function (element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
          $(element).addClass(errorClass).removeClass(validClass);
        }
      },
      unhighlight: function (element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
          $(element).removeClass(errorClass).addClass(validClass);
        }
      }
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
    setDefaults: function (settings) {
      $.extend($.validator.defaults, settings);
    },

    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: $.validator.format("Please enter no more than {0} characters."),
      minlength: $.validator.format("Please enter at least {0} characters."),
      rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
      range: $.validator.format("Please enter a value between {0} and {1}."),
      max: $.validator.format("Please enter a value less than or equal to {0}."),
      min: $.validator.format("Please enter a value greater than or equal to {0}.")
    },

    autoCreateRanges: false,

    prototype: {

      init: function () {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();

        var groups = (this.groups = {});
        $.each(this.settings.groups, function (key, value) {
          if (typeof value === "string") {
            value = value.split(/\s/);
          }
          $.each(value, function (index, name) {
            groups[name] = key;
          });
        });
        var rules = this.settings.rules;
        $.each(rules, function (key, value) {
          rules[key] = $.validator.normalizeRule(value);
        });

        function delegate(event) {
          var validator = $.data(this[0].form, "validator"),
            eventType = "on" + event.type.replace(/^validate/, "");
          if (validator.settings[eventType]) {
            validator.settings[eventType].call(validator, this[0], event);
          }
        }
        $(this.currentForm)
          .validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
            "[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
            "[type='email'], [type='datetime'], [type='date'], [type='month'], " +
            "[type='week'], [type='time'], [type='datetime-local'], " +
            "[type='range'], [type='color'] ",
            "focusin focusout keyup", delegate)
          .validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

        if (this.settings.invalidHandler) {
          $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
        }
      },

      // http://docs.jquery.com/Plugins/Validation/Validator/form
      form: function () {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);
        if (!this.valid()) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
        }
        this.showErrors();
        return this.valid();
      },

      checkForm: function () {
        this.prepareForm();
        for (var i = 0, elements = (this.currentElements = this.elements()) ; elements[i]; i++) {
          this.check(elements[i]);
        }
        return this.valid();
      },

      // http://docs.jquery.com/Plugins/Validation/Validator/element
      element: function (element) {
        element = this.validationTargetFor(this.clean(element));
        this.lastElement = element;
        this.prepareElement(element);
        this.currentElements = $(element);
        var result = this.check(element) !== false;
        if (result) {
          delete this.invalid[element.name];
        } else {
          this.invalid[element.name] = true;
        }
        if (!this.numberOfInvalids()) {
          // Hide error containers on last error
          this.toHide = this.toHide.add(this.containers);
        }
        this.showErrors();
        return result;
      },

      // http://docs.jquery.com/Plugins/Validation/Validator/showErrors
      showErrors: function (errors) {
        if (errors) {
          // add items to error list and map
          $.extend(this.errorMap, errors);
          this.errorList = [];
          for (var name in errors) {
            this.errorList.push({
              message: errors[name],
              element: this.findByName(name)[0]
            });
          }
          // remove items from success list
          this.successList = $.grep(this.successList, function (element) {
            return !(element.name in errors);
          });
        }
        if (this.settings.showErrors) {
          this.settings.showErrors.call(this, this.errorMap, this.errorList);
        } else {
          this.defaultShowErrors();
        }
      },

      // http://docs.jquery.com/Plugins/Validation/Validator/resetForm
      resetForm: function () {
        if ($.fn.resetForm) {
          $(this.currentForm).resetForm();
        }
        this.submitted = {};
        this.lastElement = null;
        this.prepareForm();
        this.hideErrors();
        this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
      },

      numberOfInvalids: function () {
        return this.objectLength(this.invalid);
      },

      objectLength: function (obj) {
        var count = 0;
        for (var i in obj) {
          count++;
        }
        return count;
      },

      hideErrors: function () {
        this.addWrapper(this.toHide).hide();
      },

      valid: function () {
        return this.size() === 0;
      },

      size: function () {
        return this.errorList.length;
      },

      focusInvalid: function () {
        if (this.settings.focusInvalid) {
          try {
            $(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
            .filter(":visible")
            .focus()
            // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
            .trigger("focusin");
          } catch (e) {
            // ignore IE throwing errors when focusing hidden elements
          }
        }
      },

      findLastActive: function () {
        var lastActive = this.lastActive;
        return lastActive && $.grep(this.errorList, function (n) {
          return n.element.name === lastActive.name;
        }).length === 1 && lastActive;
      },

      elements: function () {
        var validator = this,
          rulesCache = {};

        // select all valid inputs inside the form (no submit or reset buttons)
        return $(this.currentForm)
        .find("input, select, textarea")
        .not(":submit, :reset, :image, [disabled]")
        .not(this.settings.ignore)
        .filter(function () {
          if (!this.name && validator.settings.debug && window.console) {
            console.error("%o has no name assigned", this);
          }

          // select only the first element for each name, and only those with rules specified
          if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
            return false;
          }

          rulesCache[this.name] = true;
          return true;
        });
      },

      clean: function (selector) {
        return $(selector)[0];
      },

      errors: function () {
        var errorClass = this.settings.errorClass.replace(" ", ".");
        return $(this.settings.errorElement + "." + errorClass, this.errorContext);
      },

      reset: function () {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
        this.currentElements = $([]);
      },

      prepareForm: function () {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },

      prepareElement: function (element) {
        this.reset();
        this.toHide = this.errorsFor(element);
      },

      elementValue: function (element) {
        var type = $(element).attr("type"),
          val = $(element).val();

        if (type === "radio" || type === "checkbox") {
          return $("input[name='" + $(element).attr("name") + "']:checked").val();
        }

        if (typeof val === "string") {
          return val.replace(/\r/g, "");
        }
        return val;
      },

      check: function (element) {
        element = this.validationTargetFor(this.clean(element));

        var rules = $(element).rules();
        var dependencyMismatch = false;
        var val = this.elementValue(element);
        var result;

        for (var method in rules) {
          var rule = { method: method, parameters: rules[method] };
          try {

            result = $.validator.methods[method].call(this, val, element, rule.parameters);

            // if a method indicates that the field is optional and therefore valid,
            // don't mark it as valid when there are no other rules
            if (result === "dependency-mismatch") {
              dependencyMismatch = true;
              continue;
            }
            dependencyMismatch = false;

            if (result === "pending") {
              this.toHide = this.toHide.not(this.errorsFor(element));
              return;
            }

            if (!result) {
              this.formatAndAdd(element, rule);
              return false;
            }
          } catch (e) {
            if (this.settings.debug && window.console) {
              console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
            }
            throw e;
          }
        }
        if (dependencyMismatch) {
          return;
        }
        if (this.objectLength(rules)) {
          this.successList.push(element);
        }
        return true;
      },

      // return the custom message for the given element and validation method
      // specified in the element's HTML5 data attribute
      customDataMessage: function (element, method) {
        return $(element).data("msg-" + method.toLowerCase()) || (element.attributes && $(element).attr("data-msg-" + method.toLowerCase()));
      },

      // return the custom message for the given element name and validation method
      customMessage: function (name, method) {
        var m = this.settings.messages[name];
        return m && (m.constructor === String ? m : m[method]);
      },

      // return the first defined argument, allowing empty strings
      findDefined: function () {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined) {
            return arguments[i];
          }
        }
        return undefined;
      },

      defaultMessage: function (element, method) {
        return this.findDefined(
          this.customMessage(element.name, method),
          this.customDataMessage(element, method),
          // title is never undefined, so handle empty string as undefined
          !this.settings.ignoreTitle && element.title || undefined,
          $.validator.messages[method],
          "<strong>Warning: No message defined for " + element.name + "</strong>"
        );
      },

      formatAndAdd: function (element, rule) {
        var message = this.defaultMessage(element, rule.method),
          theregex = /\$?\{(\d+)\}/g;
        if (typeof message === "function") {
          message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
          message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
        }
        this.errorList.push({
          message: message,
          element: element
        });

        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
      },

      addWrapper: function (toToggle) {
        if (this.settings.wrapper) {
          toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        }
        return toToggle;
      },

      defaultShowErrors: function () {
        var i, elements;
        for (i = 0; this.errorList[i]; i++) {
          var error = this.errorList[i];
          if (this.settings.highlight) {
            this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
          }
          this.showLabel(error.element, error.message);
        }
        if (this.errorList.length) {
          this.toShow = this.toShow.add(this.containers);
        }
        if (this.settings.success) {
          for (i = 0; this.successList[i]; i++) {
            this.showLabel(this.successList[i]);
          }
        }
        if (this.settings.unhighlight) {
          for (i = 0, elements = this.validElements() ; elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
          }
        }
        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },

      validElements: function () {
        return this.currentElements.not(this.invalidElements());
      },

      invalidElements: function () {
        return $(this.errorList).map(function () {
          return this.element;
        });
      },

      showLabel: function (element, message) {
        var label = this.errorsFor(element);
        if (label.length) {
          // refresh error/success class
          label.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
          // replace message on existing label
          label.html(message);
        } else {
          // create label
          label = $("<" + this.settings.errorElement + ">")
            .attr("for", this.idOrName(element))
            .addClass(this.settings.errorClass)
            .html(message || "");
          if (this.settings.wrapper) {
            // make sure the element is visible, even in IE
            // actually showing the wrapped element is handled elsewhere
            label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
          }
          if (!this.labelContainer.append(label).length) {
            if (this.settings.errorPlacement) {
              this.settings.errorPlacement(label, $(element));
            } else {
              label.insertAfter(element);
            }
          }
        }
        if (!message && this.settings.success) {
          label.text("");
          if (typeof this.settings.success === "string") {
            label.addClass(this.settings.success);
          } else {
            this.settings.success(label, element);
          }
        }
        this.toShow = this.toShow.add(label);
      },

      errorsFor: function (element) {
        var name = this.idOrName(element);
        return this.errors().filter(function () {
          return $(this).attr("for") === name;
        });
      },

      idOrName: function (element) {
        return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
      },

      validationTargetFor: function (element) {
        // if radio/checkbox, validate first element in group instead
        if (this.checkable(element)) {
          element = this.findByName(element.name).not(this.settings.ignore)[0];
        }
        return element;
      },

      checkable: function (element) {
        return (/radio|checkbox/i).test(element.type);
      },

      findByName: function (name) {
        return $(this.currentForm).find("[name='" + name + "']");
      },

      getLength: function (value, element) {
        switch (element.nodeName.toLowerCase()) {
          case "select":
            return $("option:selected", element).length;
          case "input":
            if (this.checkable(element)) {
              return this.findByName(element.name).filter(":checked").length;
            }
        }
        return value.length;
      },

      depend: function (param, element) {
        return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
      },

      dependTypes: {
        "boolean": function (param, element) {
          return param;
        },
        "string": function (param, element) {
          return !!$(param, element.form).length;
        },
        "function": function (param, element) {
          return param(element);
        }
      },

      optional: function (element) {
        var val = this.elementValue(element);
        return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
      },

      startRequest: function (element) {
        if (!this.pending[element.name]) {
          this.pendingRequest++;
          this.pending[element.name] = true;
        }
      },

      stopRequest: function (element, valid) {
        this.pendingRequest--;
        // sometimes synchronization fails, make sure pendingRequest is never < 0
        if (this.pendingRequest < 0) {
          this.pendingRequest = 0;
        }
        delete this.pending[element.name];
        if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
          $(this.currentForm).submit();
          this.formSubmitted = false;
        } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },

      previousValue: function (element) {
        return $.data(element, "previousValue") || $.data(element, "previousValue", {
          old: null,
          valid: true,
          message: this.defaultMessage(element, "remote")
        });
      }

    },

    classRuleSettings: {
      required: { required: true },
      email: { email: true },
      url: { url: true },
      date: { date: true },
      dateISO: { dateISO: true },
      number: { number: true },
      digits: { digits: true },
      creditcard: { creditcard: true }
    },

    addClassRules: function (className, rules) {
      if (className.constructor === String) {
        this.classRuleSettings[className] = rules;
      } else {
        $.extend(this.classRuleSettings, className);
      }
    },

    classRules: function (element) {
      var rules = {};
      var classes = $(element).attr("class");
      if (classes) {
        $.each(classes.split(" "), function () {
          if (this in $.validator.classRuleSettings) {
            $.extend(rules, $.validator.classRuleSettings[this]);
          }
        });
      }
      return rules;
    },

    attributeRules: function (element) {
      var rules = {};
      var $element = $(element);
      var type = $element[0].getAttribute("type");

      for (var method in $.validator.methods) {
        var value;

        // support for <input required> in both html5 and older browsers
        if (method === "required") {
          value = $element.get(0).getAttribute(method);
          // Some browsers return an empty string for the required attribute
          // and non-HTML5 browsers might have required="" markup
          if (value === "") {
            value = true;
          }
          // force non-HTML5 browsers to return bool
          value = !!value;
        } else {
          value = $element.attr(method);
        }

        // convert the value to a number for number inputs, and for text for backwards compability
        // allows type="date" and others to be compared as strings
        if (/min|max/.test(method) && (type === null || /number|range|text/.test(type))) {
          value = Number(value);
        }

        if (value) {
          rules[method] = value;
        } else if (type === method && type !== 'range') {
          // exception: the jquery validate 'range' method
          // does not test for the html5 'range' type
          rules[method] = true;
        }
      }

      // maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
      if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
        delete rules.maxlength;
      }

      return rules;
    },

    dataRules: function (element) {
      var method, value,
        rules = {}, $element = $(element);
      for (method in $.validator.methods) {
        value = $element.data("rule-" + method.toLowerCase());
        if (value !== undefined) {
          rules[method] = value;
        }
      }
      return rules;
    },

    staticRules: function (element) {
      var rules = {};
      var validator = $.data(element.form, "validator");
      if (validator.settings.rules) {
        rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
      }
      return rules;
    },

    normalizeRules: function (rules, element) {
      // handle dependency check
      $.each(rules, function (prop, val) {
        // ignore rule when param is explicitly false, eg. required:false
        if (val === false) {
          delete rules[prop];
          return;
        }
        if (val.param || val.depends) {
          var keepRule = true;
          switch (typeof val.depends) {
            case "string":
              keepRule = !!$(val.depends, element.form).length;
              break;
            case "function":
              keepRule = val.depends.call(element, element);
              break;
          }
          if (keepRule) {
            rules[prop] = val.param !== undefined ? val.param : true;
          } else {
            delete rules[prop];
          }
        }
      });

      // evaluate parameters
      $.each(rules, function (rule, parameter) {
        rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
      });

      // clean number parameters
      $.each(['minlength', 'maxlength'], function () {
        if (rules[this]) {
          rules[this] = Number(rules[this]);
        }
      });
      $.each(['rangelength', 'range'], function () {
        var parts;
        if (rules[this]) {
          if ($.isArray(rules[this])) {
            rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
          } else if (typeof rules[this] === "string") {
            parts = rules[this].split(/[\s,]+/);
            rules[this] = [Number(parts[0]), Number(parts[1])];
          }
        }
      });

      if ($.validator.autoCreateRanges) {
        // auto-create ranges
        if (rules.min && rules.max) {
          rules.range = [rules.min, rules.max];
          delete rules.min;
          delete rules.max;
        }
        if (rules.minlength && rules.maxlength) {
          rules.rangelength = [rules.minlength, rules.maxlength];
          delete rules.minlength;
          delete rules.maxlength;
        }
      }

      return rules;
    },

    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function (data) {
      if (typeof data === "string") {
        var transformed = {};
        $.each(data.split(/\s/), function () {
          transformed[this] = true;
        });
        data = transformed;
      }
      return data;
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/addMethod
    addMethod: function (name, method, message) {
      $.validator.methods[name] = method;
      $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
      if (method.length < 3) {
        $.validator.addClassRules(name, $.validator.normalizeRule(name));
      }
    },

    methods: {

      // http://docs.jquery.com/Plugins/Validation/Methods/required
      required: function (value, element, param) {
        // check if dependency is met
        if (!this.depend(param, element)) {
          return "dependency-mismatch";
        }
        if (element.nodeName.toLowerCase() === "select") {
          // could be an array for select-multiple or a string, both are fine this way
          var val = $(element).val();
          return val && val.length > 0;
        }
        if (this.checkable(element)) {
          return this.getLength(value, element) > 0;
        }
        return $.trim(value).length > 0;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/email
      email: function (value, element) {
        // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
        return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/url
      url: function (value, element) {
        // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
        return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/date
      date: function (value, element) {
        return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/dateISO
      dateISO: function (value, element) {
        return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/number
      number: function (value, element) {
        return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/digits
      digits: function (value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
      // based on http://en.wikipedia.org/wiki/Luhn
      creditcard: function (value, element) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }
        // accept only spaces, digits and dashes
        if (/[^0-9 \-]+/.test(value)) {
          return false;
        }
        var nCheck = 0,
          nDigit = 0,
          bEven = false;

        value = value.replace(/\D/g, "");

        for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n);
          nDigit = parseInt(cDigit, 10);
          if (bEven) {
            if ((nDigit *= 2) > 9) {
              nDigit -= 9;
            }
          }
          nCheck += nDigit;
          bEven = !bEven;
        }

        return (nCheck % 10) === 0;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/minlength
      minlength: function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);
        return this.optional(element) || length >= param;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
      maxlength: function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);
        return this.optional(element) || length <= param;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
      rangelength: function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);
        return this.optional(element) || (length >= param[0] && length <= param[1]);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/min
      min: function (value, element, param) {
        return this.optional(element) || value >= param;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/max
      max: function (value, element, param) {
        return this.optional(element) || value <= param;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/range
      range: function (value, element, param) {
        return this.optional(element) || (value >= param[0] && value <= param[1]);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/equalTo
      equalTo: function (value, element, param) {
        // bind to the blur event of the target in order to revalidate whenever the target field is updated
        // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
        var target = $(param);
        if (this.settings.onfocusout) {
          target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
            $(element).valid();
          });
        }
        return value === target.val();
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/remote
      remote: function (value, element, param) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }

        var previous = this.previousValue(element);
        if (!this.settings.messages[element.name]) {
          this.settings.messages[element.name] = {};
        }
        previous.originalMessage = this.settings.messages[element.name].remote;
        this.settings.messages[element.name].remote = previous.message;

        param = typeof param === "string" && { url: param } || param;

        if (previous.old === value) {
          return previous.valid;
        }

        previous.old = value;
        var validator = this;
        this.startRequest(element);
        var data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
          url: param,
          mode: "abort",
          port: "validate" + element.name,
          dataType: "json",
          data: data,
          success: function (response) {
            validator.settings.messages[element.name].remote = previous.originalMessage;
            var valid = response === true || response === "true";
            if (valid) {
              var submitted = validator.formSubmitted;
              validator.prepareElement(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              delete validator.invalid[element.name];
              validator.showErrors();
            } else {
              var errors = {};
              var message = response || validator.defaultMessage(element, "remote");
              errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
              validator.invalid[element.name] = true;
              validator.showErrors(errors);
            }
            previous.valid = valid;
            validator.stopRequest(element, valid);
          }
        }, param));
        return "pending";
      }

    }

  });

  // deprecated, use $.validator.format instead
  $.format = $.validator.format;

}(jQuery));

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
(function ($) {
  var pendingRequests = {};
  // Use a prefilter if available (1.5+)
  if ($.ajaxPrefilter) {
    $.ajaxPrefilter(function (settings, _, xhr) {
      var port = settings.port;
      if (settings.mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = xhr;
      }
    });
  } else {
    // Proxy ajax
    var ajax = $.ajax;
    $.ajax = function (settings) {
      var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
        port = ("port" in settings ? settings : $.ajaxSettings).port;
      if (mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = ajax.apply(this, arguments);
        return pendingRequests[port];
      }
      return ajax.apply(this, arguments);
    };
  }
}(jQuery));

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
(function ($) {
  $.extend($.fn, {
    validateDelegate: function (delegate, type, handler) {
      return this.bind(type, function (event) {
        var target = $(event.target);
        if (target.is(delegate)) {
          return handler.apply(target, arguments);
        }
      });
    }
  });
}(jQuery));

///#source 1 1 vendor/jquery.magnific-popup.js
// Magnific Popup v0.9.9 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline
(function (a) { var b = "Close", c = "BeforeClose", d = "AfterClose", e = "BeforeAppend", f = "MarkupParse", g = "Open", h = "Change", i = "mfp", j = "." + i, k = "mfp-ready", l = "mfp-removing", m = "mfp-prevent-close", n, o = function () { }, p = !!window.jQuery, q, r = a(window), s, t, u, v, w, x = function (a, b) { n.ev.on(i + a + j, b) }, y = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, z = function (b, c) { n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c])) }, A = function (b) { if (b !== w || !n.currTemplate.closeBtn) n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)), w = b; return n.currTemplate.closeBtn }, B = function () { a.magnificPopup.instance || (n = new o, n.init(), a.magnificPopup.instance = n) }, C = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (a.transition !== undefined) return !0; while (b.length) if (b.pop() + "Transition" in a) return !0; return !1 }; o.prototype = { constructor: o, init: function () { var b = navigator.appVersion; n.isIE7 = b.indexOf("MSIE 7.") !== -1, n.isIE8 = b.indexOf("MSIE 8.") !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = C(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), t = a(document), n.popupsCache = {} }, open: function (b) { s || (s = a(document.body)); var c; if (b.isObj === !1) { n.items = b.items.toArray(), n.index = 0; var d = b.items, e; for (c = 0; c < d.length; c++) { e = d[c], e.parsed && (e = e.el[0]); if (e === b.el[0]) { n.index = c; break } } } else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0; if (n.isOpen) { n.updateItemHTML(); return } n.types = [], v = "", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = t, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = y("bg").on("click" + j, function () { n.close() }), n.wrap = y("wrap").attr("tabindex", -1).on("click" + j, function (a) { n._checkIfClose(a.target) && n.close() }), n.container = y("container", n.wrap)), n.contentContainer = y("content"), n.st.preloader && (n.preloader = y("preloader", n.container, n.st.tLoading)); var h = a.magnificPopup.modules; for (c = 0; c < h.length; c++) { var i = h[c]; i = i.charAt(0).toUpperCase() + i.slice(1), n["init" + i].call(n) } z("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (x(f, function (a, b, c, d) { c.close_replaceWith = A(d.type) }), v += " mfp-close-btn-in") : n.wrap.append(A())), n.st.alignTop && (v += " mfp-align-top"), n.fixedContentPos ? n.wrap.css({ overflow: n.st.overflowY, overflowX: "hidden", overflowY: n.st.overflowY }) : n.wrap.css({ top: r.scrollTop(), position: "absolute" }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({ height: t.height(), position: "absolute" }), n.st.enableEscapeKey && t.on("keyup" + j, function (a) { a.keyCode === 27 && n.close() }), r.on("resize" + j, function () { n.updateSize() }), n.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && n.wrap.addClass(v); var l = n.wH = r.height(), m = {}; if (n.fixedContentPos && n._hasScrollBar(l)) { var o = n._getScrollbarSize(); o && (m.marginRight = o) } n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden"); var p = n.st.mainClass; return n.isIE7 && (p += " mfp-ie7"), p && n._addClassToMFP(p), n.updateItemHTML(), z("BuildControls"), a("html").css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || s), n._lastFocusedEl = document.activeElement, setTimeout(function () { n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), t.on("focusin" + j, n._onFocusIn) }, 16), n.isOpen = !0, n.updateSize(l), z(g), b }, close: function () { if (!n.isOpen) return; z(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(function () { n._close() }, n.st.removalDelay)) : n._close() }, _close: function () { z(b); var c = l + " " + k + " "; n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + " "), n._removeClassFromMFP(c); if (n.fixedContentPos) { var e = { marginRight: "" }; n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } t.off("keyup" + j + " focusin" + j), n.ev.off(j), n.wrap.attr("class", "mfp-wrap").removeAttr("style"), n.bgOverlay.attr("class", "mfp-bg"), n.container.attr("class", "mfp-container"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, z(d) }, updateSize: function (a) { if (n.isIOS) { var b = document.documentElement.clientWidth / window.innerWidth, c = window.innerHeight * b; n.wrap.css("height", c), n.wH = c } else n.wH = a || r.height(); n.fixedContentPos || n.wrap.css("height", n.wH), z("Resize") }, updateItemHTML: function () { var b = n.items[n.index]; n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index)); var c = b.type; z("BeforeChange", [n.currItem ? n.currItem.type : "", c]), n.currItem = b; if (!n.currTemplate[c]) { var d = n.st[c] ? n.st[c].markup : !1; z("FirstMarkupParse", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0 } u && u !== b.type && n.container.removeClass("mfp-" + u + "-holder"); var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]); n.appendContent(e, c), b.preloaded = !0, z(h, b), u = b.type, n.container.prepend(n.contentContainer), z("AfterChange") }, appendContent: function (a, b) { n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".mfp-close").length || n.content.append(A()) : n.content = a : n.content = "", z(e), n.container.addClass("mfp-" + b + "-holder"), n.contentContainer.append(n.content) }, parseEl: function (b) { var c = n.items[b], d; c.tagName ? c = { el: a(c) } : (d = c.type, c = { data: c, src: c.src }); if (c.el) { var e = n.types; for (var f = 0; f < e.length; f++) if (c.el.hasClass("mfp-" + e[f])) { d = e[f]; break } c.src = c.el.attr("data-mfp-src"), c.src || (c.src = c.el.attr("href")) } return c.type = d || n.st.type || "inline", c.index = b, c.parsed = !0, n.items[b] = c, z("ElementParse", c), n.items[b] }, addGroup: function (a, b) { var c = function (c) { c.mfpEl = this, n._openClick(c, a, b) }; b || (b = {}); var d = "click.magnificPopup"; b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c))) }, _openClick: function (b, c, d) { var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick; if (!e && (b.which === 2 || b.ctrlKey || b.metaKey)) return; var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn; if (f) if (a.isFunction(f)) { if (!f.call(n)) return !0 } else if (r.width() < f) return !0; b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d) }, updateStatus: function (a, b) { if (n.preloader) { q !== a && n.container.removeClass("mfp-s-" + q), !b && a === "loading" && (b = n.st.tLoading); var c = { status: a, text: b }; z("UpdateStatus", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), n.container.addClass("mfp-s-" + a), q = a } }, _checkIfClose: function (b) { if (a(b).hasClass(m)) return; var c = n.st.closeOnContentClick, d = n.st.closeOnBgClick; if (c && d) return !0; if (!n.content || a(b).hasClass("mfp-close") || n.preloader && b === n.preloader[0]) return !0; if (b !== n.content[0] && !a.contains(n.content[0], b)) { if (d && a.contains(document, b)) return !0 } else if (c) return !0; return !1 }, _addClassToMFP: function (a) { n.bgOverlay.addClass(a), n.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), n.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (n.isIE7 ? t.height() : document.body.scrollHeight) > (a || r.height()) }, _setFocus: function () { (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus() }, _onFocusIn: function (b) { if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target)) return n._setFocus(), !1 }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), z(f, [b, c, d]), a.each(c, function (a, c) { if (c === undefined || c === !1) return !0; e = a.split("_"); if (e.length > 1) { var d = b.find(j + "-" + e[0]); if (d.length > 0) { var f = e[1]; f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c) } } else b.find(j + "-" + a).html(c) }) }, _getScrollbarSize: function () { if (n.scrollbarSize === undefined) { var a = document.createElement("div"); a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return n.scrollbarSize } }, a.magnificPopup = { instance: null, proto: o.prototype, modules: [], open: function (b, c) { return B(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, a.fn.magnificPopup = function (b) { B(); var c = a(this); if (typeof b == "string") if (b === "open") { var d, e = p ? c.data("magnificPopup") : c[0].magnificPopup, f = parseInt(arguments[1], 10) || 0; e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({ mfpEl: d }, c, e) } else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1)); else b = a.extend(!0, {}, b), p ? c.data("magnificPopup", b) : c[0].magnificPopup = b, n.addGroup(c, b); return c }; var D = "inline", E, F, G, H = function () { G && (F.after(G.addClass(E)).detach(), G = null) }; a.magnificPopup.registerModule(D, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { n.types.push(D), x(b + "." + D, function () { H() }) }, getInline: function (b, c) { H(); if (b.src) { var d = n.st.inline, e = a(b.src); if (e.length) { var f = e[0].parentNode; f && f.tagName && (F || (E = d.hiddenClass, F = y(E), E = "mfp-" + E), G = e.after(F).detach().removeClass(E)), n.updateStatus("ready") } else n.updateStatus("error", d.tNotFound), e = a("<div>"); return b.inlineElement = e, e } return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c } } }); var I, J = function () { return I === undefined && (I = document.createElement("p").style.MozTransform !== undefined), I }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a = n.st.zoom, d = ".zoom", e; if (!a.enabled || !n.supportsTransition) return; var f = a.duration, g = function (b) { var c = b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + a.duration / 1e3 + "s " + a.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, c.css(e), c }, h = function () { n.content.css("visibility", "visible") }, i, j; x("BuildControls" + d, function () { if (n._allowZoom()) { clearTimeout(i), n.content.css("visibility", "hidden"), e = n._getItemToZoom(); if (!e) { h(); return } j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(function () { j.css(n._getOffset(!0)), i = setTimeout(function () { h(), setTimeout(function () { j.remove(), e = j = null, z("ZoomAnimationEnded") }, 16) }, f) }, 16) } }), x(c + d, function () { if (n._allowZoom()) { clearTimeout(i), n.st.removalDelay = f; if (!e) { e = n._getItemToZoom(); if (!e) return; j = g(e) } j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css("visibility", "hidden"), setTimeout(function () { j.css(n._getOffset()) }, 16) } }), x(b + d, function () { n._allowZoom() && (h(), j && j.remove(), e = null) }) }, _allowZoom: function () { return n.currItem.type === "image" }, _getItemToZoom: function () { return n.currItem.hasSize ? n.currItem.img : !1 }, _getOffset: function (b) { var c; b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem); var d = c.offset(), e = parseInt(c.css("padding-top"), 10), f = parseInt(c.css("padding-bottom"), 10); d.top -= a(window).scrollTop() - e; var g = { width: c.width(), height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e }; return J() ? g["-moz-transform"] = g.transform = "translate(" + d.left + "px," + d.top + "px)" : (g.left = d.left, g.top = d.top), g } } }), B() })(window.jQuery || window.Zepto)

///#source 1 1 inmetrics/animations.js
var animations = function () {
  var init = function(isMobile) {
    if (isMobile && $(window).width() > 768)
      PortableVersion();
    else {
      DesktopVersion(true);
      $(window).on({resize: windowResize});
    }
  };

  var timeoutResize = null;
  var windowResize = function(){
    clearTimeout(timeoutResize);
    timeoutResize = setTimeout(function(){
      DesktopVersion(false)
    }, 300);
  };

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

  var mySkroll = null;
  var DesktopVersion = function (isInit) {
    var w_height = $(window).height();

    //olhos
    $('header .in-inspire').attr({
      "data-0": setPrefixCSS("transform: translate(70px, 530px); opacity: 1;"),
      "data-1200": setPrefixCSS("transform: translate(70px, 140px); opacity: 1;"),
      "data-1300": setPrefixCSS("transform: translate(70px, 140px); opacity: 0;"),
      "data-1450": setPrefixCSS("transform: translate(120px, 230px); opacity: 0;"),
      "data-2100": setPrefixCSS("transform: translate(140px, 230px); opacity: 0;"),
      "data-2250": setPrefixCSS("transform: translate(140px, 230px); opacity: 1;"),
      "data-2490": setPrefixCSS("transform: translate(140px, 230px); opacity: 1;"),
      "data-2530": setPrefixCSS("transform: translate(140px, 230px); opacity: 0;"),
      "data-2580": setPrefixCSS("transform: translate(70px, 230px); opacity: 0;"),
      "data-2900": setPrefixCSS("transform: translate(70px, 230px); opacity: 0;"),
      "data-3000": setPrefixCSS("transform: translate(70px, 230px); opacity: 1;"),
      "data-3180": setPrefixCSS("transform: translate(70px, 230px); opacity: 1;"),
      "data-3200": setPrefixCSS("transform: translate(70px, 230px); opacity: 0;"),
      "data-3990": setPrefixCSS("transform: translate(140px, 230px); opacity: 0;"),
      "data-4020": setPrefixCSS("transform: translate(140px, 230px); opacity: 1;"),
      "data-4120": setPrefixCSS("transform: translate(140px, 230px); opacity: 1;"),
      "data-4140": setPrefixCSS("transform: translate(140px, 230px); opacity: 0;"),
      "data-5240": setPrefixCSS("transform: translate(60px, 230px); opacity: 0;"),
      "data-5290": setPrefixCSS("transform: translate(60px, 230px); opacity: 1;"),
      "data-5920": setPrefixCSS("transform: translate(60px, 230px); opacity: 1;"),
      "data-5970": setPrefixCSS("transform: translate(60px, 230px); opacity: 0;"),
      "data-7090": setPrefixCSS("transform: translate(140px, 230px); opacity: 0;"),
      "data-7120": setPrefixCSS("transform: translate(140px, 230px); opacity: 1;"),
      "data-7270": setPrefixCSS("transform: translate(140px, 230px); opacity: 1;"),
      "data-7300": setPrefixCSS("transform: translate(140px, 230px); opacity: 0;"),
      "data-7800": setPrefixCSS("transform: translate(70px, 230px); opacity: 0;"),
      "data-7830": setPrefixCSS("transform: translate(70px, 230px); opacity: 1;"),
      "data-7990": setPrefixCSS("transform: translate(70px, 230px); opacity: 1;"),
      "data-8010": setPrefixCSS("transform: translate(70px, 230px); opacity: 0;"),
      "data-9950": setPrefixCSS("transform: translate(140px, 230px); opacity: 0;"),
      "data-9990": setPrefixCSS("transform: translate(140px, 230px); opacity: 1;"),
      "data-10180": setPrefixCSS("transform: translate(140px, 230px); opacity: 1;"),
      "data-10210": setPrefixCSS("transform: translate(140px, 230px); opacity: 0;"),
      "data-11900": setPrefixCSS("transform: translate(70px, 230px); opacity: 0;"),
      "data-11940": setPrefixCSS("transform: translate(70px, 230px); opacity: 1;"),
      "data-12400": setPrefixCSS("transform: translate(70px, 230px); opacity: 1;"),
      "data-12440": setPrefixCSS("transform: translate(70px, 230px); opacity: 0;"),
      "data-13530": setPrefixCSS("transform: translate(140px, 230px); opacity: 0;"),
      "data-13560": setPrefixCSS("transform: translate(140px, 230px); opacity: 1;"),
      "data-13680": setPrefixCSS("transform: translate(140px, 230px); opacity: 1;"),
      "data-13700": setPrefixCSS("transform: translate(140px, 230px); opacity: 0;"),
      "data-13720": setPrefixCSS("transform: translate(620px, 100px); opacity: 0;"),
      "data-250-end": setPrefixCSS("transform: translate(620px, "+ (w_height- 630) +"px); opacity: 0;"),
      "data-0-end": setPrefixCSS("transform: translate(620px, "+ (w_height- 630) +"px); opacity: 1;")
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
    $("#strategic").attr({
      "data-0": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-1500": setPrefixCSS("transform: translate(0px, -470px);"),
      "data-4200": setPrefixCSS("transform: translate(0px, -1402px);")
    });
    // $('#strategic h2').attr({
    //  "data-850": setPrefixCSS("transform: translate(0px, 0px);"),
    //  "data-3000": setPrefixCSS("transform: translate(0px, -700px);")
    // });
    $('#strategic .img-cena').attr({
      "data-750": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-2300": setPrefixCSS("transform: translate(0px, -150px);")
    });
    $('#strategic .img-projeto').attr({
      "data-850": setPrefixCSS("transform: translate(0px, 0px);") + " width:223px; opacity:1;",
      "data-3000": setPrefixCSS("transform: translate(35px, -230px);") + " width:90px; opacity:0;"
    });
    $('#strategic .img-nuvens').attr({
      "data-1000": setPrefixCSS("transform: translate(0px, 80px);"),
      "data-2800": setPrefixCSS("transform: translate(0px, -300px);")
    });
    $('#strategic .table').attr({
      "data-1000": setPrefixCSS("transform: translate(0px, 100px);"),
      "data-3500": setPrefixCSS("transform: translate(0px, -200px);")
    });

    //iniciando gestao
    $('#management').attr({
      "data-2100": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-3250": setPrefixCSS("transform: translate(0px, -"+ w_height +"px);"),
      "data-5300": setPrefixCSS("transform: translate(0px, -"+ (w_height + 1130) +"px);")
    });
    $("#management h2").attr({
      "data-2700": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-4400": setPrefixCSS("transform: translate(0px, -170px);")
    });
    $('#management .img-cena').attr({
      "data-2800": setPrefixCSS("transform: translate(0px, 150px);"),
      "data-4500": setPrefixCSS("transform: translate(0px, -200px);")
    });
    $('#management .table').attr({
      "data-3200": setPrefixCSS("transform: translate(0px, 120px);"),
      "data-4800": setPrefixCSS("transform: translate(0px, -100px);")
    });

    //inicianado operacional
    $('#operational').attr({
      "data-3000": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-3200": setPrefixCSS("transform: translate(0px, -"+ (w_height - 50) +"px);"),
      "data-6000": setPrefixCSS("transform: translate(0px, -"+ (w_height - 50) +"px);"),
      "data-8900": setPrefixCSS("transform: translate(0px, -"+ (w_height + 1204) +"px);")
    });
    $('#operational h2').attr({
      "data-4500": setPrefixCSS("transform: translate(0px, -200px);"),
      "data-5300": setPrefixCSS("transform: translate(0px, 60px);"),
      "data-6500": setPrefixCSS("transform: translate(0px, -210px);")
    });
    $('#operational span.fil-1').attr({
      "data-4300": setPrefixCSS("transform: translate(0px, -490px);"),
      "data-4800": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-5300": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-6500": setPrefixCSS("transform: translate(0px, -230px);"),
    });
    $('#operational img.fil-2').attr({
      "data-4400": setPrefixCSS("transform: translate(0px, -490px);"),
      "data-5000": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-5300": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-6500": setPrefixCSS("transform: translate(0px, -230px);")
    });
    $('#operational img.fil-3').attr({
      "data-4500": setPrefixCSS("transform: translate(0px, -490px);"),
      "data-5300": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-6500": setPrefixCSS("transform: translate(0px, -230px);")
    });
    $('#operational .table').attr({
      "data-4700": setPrefixCSS("transform: translate(0px, 300px);"),
      "data-6500": setPrefixCSS("transform: translate(0px, -50px);")
    });

    //iniciando funcional
    $('#functional').attr({
      "data-7100": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-8100": setPrefixCSS("transform: translate(0px, -"+ (w_height - 20) +"px);"),
      "data-12400": setPrefixCSS("transform: translate(0px, -"+ (w_height + 1210) +"px);")
    });
    $('#functional h2').attr({
      "data-7500": setPrefixCSS("transform: translate(0px, 100px);"),
      "data-8100": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-8200": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-9600": setPrefixCSS("transform: translate(0px, -200px);")
    });
    $('#functional .img-cena').attr({
      "data-7500": setPrefixCSS("transform: translate(0px, 80px);"),
      "data-8200": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-9000": setPrefixCSS("transform: translate(0px, -70px);")
    });
    $('#functional .img-peao-cabeca').attr({
      "data-7500": setPrefixCSS("transform: translate(0px, -35px);"),
      "data-8150": setPrefixCSS("transform: translate(0px, 67px);")
    });
    $('#functional .img-peao-base').attr({
      "data-7500": setPrefixCSS("transform: translate(2px, 72px);"),
      "data-8150": setPrefixCSS("transform: translate(2px, -41px);")
    });
    $('#functional .img-nuvens').attr({
      "data-8000": setPrefixCSS("transform: translate(0px, 80px);") + " opacity: 0;",
      "data-8900": setPrefixCSS("transform: translate(0px, 10px);") + " opacity: 1;",
      "data-11000": setPrefixCSS("transform: translate(0px, -220px);") + " opacity: 1;"
    });
    $('#functional .table').attr({
      "data-8700": setPrefixCSS("transform: translate(0px, 120px);"),
      "data-10700": setPrefixCSS("transform: translate(0px, -50px);")
    });

    //iniciando qualidade
    $('#quality').attr({
      "data-7500": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-10500": setPrefixCSS("transform: translate(0px, -490px);"),
      "data-12300": setPrefixCSS("transform: translate(0px, -"+ (w_height - 100) +"px);"),
      "data-14500": setPrefixCSS("transform: translate(0px, -"+ (w_height + 1040) +"px);")
    });
    $('#quality h2').attr({
      "data-10500": setPrefixCSS("transform: translate(0px, -300px);"),
      "data-12300": setPrefixCSS("transform: translate(0px, 50px);"),
      "data-13400": setPrefixCSS("transform: translate(0px, -70px);")
    });
    $('#quality .img-coroa').attr({
      "data-11300": setPrefixCSS("transform: translate(0px, -300px);"),
      "data-12000": setPrefixCSS("transform: translate(0px, 35px);")
    });
    $('#quality .img-raios').attr({
      "data-11980": "opacity: 0",
      "data-12020": "opacity: 1"
    });
    $('#quality .img-projeto').attr({
      "data-11000": "opacity: 0; width: 100px; right: 102px;",
      "data-12000": "opacity: 1; width: 320px; right: 22px;"
    });
    $('#quality .img-nuvens').attr({
      "data-12150": setPrefixCSS("transform: translate(0px, 50px);" + " opacity: 0;"),
      "data-12200": setPrefixCSS("transform: translate(0px, 60px);" + " opacity: 1;"),
      "data-13400": setPrefixCSS("transform: translate(0px, -80px);" + " opacity: 1;")
    });

    $('#quality .table').attr({
      "data-12150": setPrefixCSS("transform: translate(0px, 150px);"),
      "data-14000": setPrefixCSS("transform: translate(0px, 0px);")
    });

    //iniciando contato
    $('#contato').attr({
      "data-2600-end": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-750-end": setPrefixCSS("transform: translate(0px, -651px);"),
      "data-0-end": setPrefixCSS("transform: translate(0px, -740px);")
    });

    //iniciando o parallax
    if ($(window).width() > 768) {
      if(isInit || mySkroll == null) {
        mySkroll = skrollr.init({
          scale: 2.2
        });
      } else {
        mySkroll.refresh();
      }
    } else {
      if (mySkroll != null) {
        mySkroll.destroy();
        mySkroll = skrollr.get();
      }
    }
  };

  var setPrefixCSS = function (values) {
    var data = "-webkit-" + values;
    data += "-moz-" + values;
    data += "-ms-" + values;
    data += "-o-" + values;
    data += values;
    return data;
  };

  return { init: init };
}();
///#source 1 1 inmetrics/init.js
var inmetrics = function () {

  var init = function () {
    if ($("body").hasClass("animated")) {
      //Adicionei a validação dentro da função, estou controlando o resize quando menor que 768px removo o parallax.
      animations.init(isMobile());
      removeCurtain();
    }
    
    $("[data-toggle=slide]").on({ click: slideToggle });
    $(".descriptions a").magnificPopup({ type: 'inline' });
    $(".selections a").on({
      mouseenter: selectionsHoverIn,
      mouseleave: selectionsHoverOut,
      click: selectionsClick
    });
    $('.contact-form form').on({ 
      submit: contactFormSubmit
    })
    .validate(contactFormValidations());
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

  var contactFormSubmit = function () {    
    var form = $(this);
    $.ajax({
      url: form.attr("action"),
      type: "POST",
      data: form.serialize(),
      success: function (data, textStatus, request) {
        if (request.getResponseHeader('inmetrics_plan_request') == 'success')
          form[0].reset();
        $(".result-message").html(data).fadeIn();
      },
      error: function (r, status, error) {
        console.info("Ajax Error, status = " + status);
        console.info(error);
      }
    });
    return false;
  };

  var contactFormValidations = function () {
    return {
      rules: {
        'plan_request[name]': "required",
        'plan_request[email]': { required: true, email: true },
        'plan_request[email_confirmation]': { equalTo: '#email_input' },
        'plan_request[message]': "required"
      },
      messages: {
        'plan_request[name]': window.config.errors.required,
        'plan_request[email]': {
          required: window.config.errors.required,
          email: window.config.errors.invalid_email,
        },
        'plan_request[email_confirmation]': {
          equalTo: window.config.errors.email_nomatch,
        },
        'plan_request[message]': window.config.errors.required,
      }
    };
  };

  var removeCurtain = function () {
    $.get(window.config.base + 'images/animados/olho_aladoanima.png', function () {
      setTimeout(function () {
        $('body').removeClass('loading-on');
      }, 1200);
    });
  };

  isMobile = function () {
    return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
  };

  return { init: init }
}();

$(document).ready(inmetrics.init);
