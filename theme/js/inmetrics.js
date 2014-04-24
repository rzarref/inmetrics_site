/*! skrollr 0.6.20 (2014-01-03) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function (e, t, r) { "use strict"; function n(r) { if (o = t.documentElement, a = t.body, K(), it = this, r = r || {}, ut = r.constants || {}, r.easing) for (var n in r.easing) U[n] = r.easing[n]; yt = r.edgeStrategy || "set", ct = { beforerender: r.beforerender, render: r.render }, ft = r.forceHeight !== !1, ft && (zt = r.scale || 1), pt = r.mobileDeceleration || E, gt = r.smoothScrolling !== !1, vt = r.smoothScrollingDuration || x, dt = { targetTop: it.getScrollTop() }, _t = (r.mobileCheck || function () { return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || e.opera) })(), _t ? (st = t.getElementById("skrollr-body"), st && at(), X(), Ct(o, [y, S], [T])) : Ct(o, [y, b], [T]), it.refresh(), St(e, "resize orientationchange", function () { var e = o.clientWidth, t = o.clientHeight; (t !== $t || e !== Lt) && ($t = t, Lt = e, Mt = !0) }); var i = Y(); return function l() { Z(), bt = i(l) }(), it } var o, a, i = e.skrollr = { get: function () { return it }, init: function (e) { return it || new n(e) }, VERSION: "0.6.20" }, l = Object.prototype.hasOwnProperty, s = e.Math, c = e.getComputedStyle, f = "touchstart", u = "touchmove", p = "touchcancel", m = "touchend", g = "skrollable", v = g + "-before", d = g + "-between", h = g + "-after", y = "skrollr", T = "no-" + y, b = y + "-desktop", S = y + "-mobile", w = "linear", k = 1e3, E = .004, x = 200, A = "start", F = "end", C = "center", D = "bottom", H = "___skrollable_id", P = /^(?:input|textarea|button|select)$/i, N = /^\s+|\s+$/g, V = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/, z = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, O = /^([a-z\-]+)\[(\w+)\]$/, q = /-([a-z])/g, I = function (e, t) { return t.toUpperCase() }, L = /[\-+]?[\d]*\.?[\d]+/g, $ = /\{\?\}/g, M = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g, B = /[a-z\-]+-gradient/g, _ = "", G = "", K = function () { var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/; if (c) { var t = c(a, null); for (var n in t) if (_ = n.match(e) || +n == n && t[n].match(e)) break; if (!_) return _ = G = "", r; _ = _[0], "-" === _.slice(0, 1) ? (G = _, _ = { "-webkit-": "webkit", "-moz-": "Moz", "-ms-": "ms", "-o-": "O" }[_]) : G = "-" + _.toLowerCase() + "-" } }, Y = function () { var t = e.requestAnimationFrame || e[_.toLowerCase() + "RequestAnimationFrame"], r = Pt(); return (_t || !t) && (t = function (t) { var n = Pt() - r, o = s.max(0, 1e3 / 60 - n); return e.setTimeout(function () { r = Pt(), t() }, o) }), t }, R = function () { var t = e.cancelAnimationFrame || e[_.toLowerCase() + "CancelAnimationFrame"]; return (_t || !t) && (t = function (t) { return e.clearTimeout(t) }), t }, U = { begin: function () { return 0 }, end: function () { return 1 }, linear: function (e) { return e }, quadratic: function (e) { return e * e }, cubic: function (e) { return e * e * e }, swing: function (e) { return -s.cos(e * s.PI) / 2 + .5 }, sqrt: function (e) { return s.sqrt(e) }, outCubic: function (e) { return s.pow(e - 1, 3) + 1 }, bounce: function (e) { var t; if (.5083 >= e) t = 3; else if (.8489 >= e) t = 9; else if (.96208 >= e) t = 27; else { if (!(.99981 >= e)) return 1; t = 91 } return 1 - s.abs(3 * s.cos(1.028 * e * t) / t) } }; n.prototype.refresh = function (e) { var n, o, a = !1; for (e === r ? (a = !0, lt = [], Bt = 0, e = t.getElementsByTagName("*")) : e = [].concat(e), n = 0, o = e.length; o > n; n++) { var i = e[n], l = i, s = [], c = gt, f = yt; if (i.attributes) { for (var u = 0, p = i.attributes.length; p > u; u++) { var m = i.attributes[u]; if ("data-anchor-target" !== m.name) if ("data-smooth-scrolling" !== m.name) if ("data-edge-strategy" !== m.name) { var v = m.name.match(V); if (null !== v) { var d = { props: m.value, element: i }; s.push(d); var h = v[1]; h && (d.constant = h.substr(1)); var y = v[2]; /p$/.test(y) ? (d.isPercentage = !0, d.offset = (0 | y.slice(0, -1)) / 100) : d.offset = 0 | y; var T = v[3], b = v[4] || T; T && T !== A && T !== F ? (d.mode = "relative", d.anchors = [T, b]) : (d.mode = "absolute", T === F ? d.isEnd = !0 : d.isPercentage || (d.offset = d.offset * zt)) } } else f = m.value; else c = "off" !== m.value; else if (l = t.querySelector(m.value), null === l) throw 'Unable to find anchor target "' + m.value + '"' } if (s.length) { var S, w, k; !a && H in i ? (k = i[H], S = lt[k].styleAttr, w = lt[k].classAttr) : (k = i[H] = Bt++, S = i.style.cssText, w = Ft(i)), lt[k] = { element: i, styleAttr: S, classAttr: w, anchorTarget: l, keyFrames: s, smoothScrolling: c, edgeStrategy: f }, Ct(i, [g], []) } } } for (Et(), n = 0, o = e.length; o > n; n++) { var E = lt[e[n][H]]; E !== r && (J(E), et(E)) } return it }, n.prototype.relativeToAbsolute = function (e, t, r) { var n = o.clientHeight, a = e.getBoundingClientRect(), i = a.top, l = a.bottom - a.top; return t === D ? i -= n : t === C && (i -= n / 2), r === D ? i += l : r === C && (i += l / 2), i += it.getScrollTop(), 0 | i + .5 }, n.prototype.animateTo = function (e, t) { t = t || {}; var n = Pt(), o = it.getScrollTop(); return mt = { startTop: o, topDiff: e - o, targetTop: e, duration: t.duration || k, startTime: n, endTime: n + (t.duration || k), easing: U[t.easing || w], done: t.done }, mt.topDiff || (mt.done && mt.done.call(it, !1), mt = r), it }, n.prototype.stopAnimateTo = function () { mt && mt.done && mt.done.call(it, !0), mt = r }, n.prototype.isAnimatingTo = function () { return !!mt }, n.prototype.setScrollTop = function (t, r) { return ht = r === !0, _t ? Gt = s.min(s.max(t, 0), Vt) : e.scrollTo(0, t), it }, n.prototype.getScrollTop = function () { return _t ? Gt : e.pageYOffset || o.scrollTop || a.scrollTop || 0 }, n.prototype.getMaxScrollTop = function () { return Vt }, n.prototype.on = function (e, t) { return ct[e] = t, it }, n.prototype.off = function (e) { return delete ct[e], it }, n.prototype.destroy = function () { var e = R(); e(bt), kt(), Ct(o, [T], [y, b, S]); for (var t = 0, n = lt.length; n > t; t++) ot(lt[t].element); o.style.overflow = a.style.overflow = "auto", o.style.height = a.style.height = "auto", st && i.setStyle(st, "transform", "none"), it = r, st = r, ct = r, ft = r, Vt = 0, zt = 1, ut = r, pt = r, Ot = "down", qt = -1, Lt = 0, $t = 0, Mt = !1, mt = r, gt = r, vt = r, dt = r, ht = r, Bt = 0, yt = r, _t = !1, Gt = 0, Tt = r }; var X = function () { var n, i, l, c, g, v, d, h, y, T, b, S; St(o, [f, u, p, m].join(" "), function (e) { var o = e.changedTouches[0]; for (c = e.target; 3 === c.nodeType;) c = c.parentNode; switch (g = o.clientY, v = o.clientX, T = e.timeStamp, P.test(c.tagName) || e.preventDefault(), e.type) { case f: n && n.blur(), it.stopAnimateTo(), n = c, i = d = g, l = v, y = T; break; case u: P.test(c.tagName) && t.activeElement !== c && e.preventDefault(), h = g - d, S = T - b, it.setScrollTop(Gt - h, !0), d = g, b = T; break; default: case p: case m: var a = i - g, w = l - v, k = w * w + a * a; if (49 > k) { if (!P.test(n.tagName)) { n.focus(); var E = t.createEvent("MouseEvents"); E.initMouseEvent("click", !0, !0, e.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(E) } return } n = r; var x = h / S; x = s.max(s.min(x, 3), -3); var A = s.abs(x / pt), F = x * A + .5 * pt * A * A, C = it.getScrollTop() - F, D = 0; C > Vt ? (D = (Vt - C) / F, C = Vt) : 0 > C && (D = -C / F, C = 0), A *= 1 - D, it.animateTo(0 | C + .5, { easing: "outCubic", duration: A }) } }), e.scrollTo(0, 0), o.style.overflow = a.style.overflow = "hidden" }, j = function () { var e, t, r, n, a, i, l, c, f, u, p, m = o.clientHeight, g = xt(); for (c = 0, f = lt.length; f > c; c++) for (e = lt[c], t = e.element, r = e.anchorTarget, n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], u = l.offset, p = g[l.constant] || 0, l.frame = u, l.isPercentage && (u *= m, l.frame = u), "relative" === l.mode && (ot(t), l.frame = it.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u, ot(t, !0)), l.frame += p, ft && !l.isEnd && l.frame > Vt && (Vt = l.frame); for (Vt = s.max(Vt, At()), c = 0, f = lt.length; f > c; c++) { for (e = lt[c], n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], p = g[l.constant] || 0, l.isEnd && (l.frame = Vt - l.offset + p); e.keyFrames.sort(Nt) } }, W = function (e, t) { for (var r = 0, n = lt.length; n > r; r++) { var o, a, s = lt[r], c = s.element, f = s.smoothScrolling ? e : t, u = s.keyFrames, p = u[0].frame, m = u[u.length - 1].frame, y = p > f, T = f > m, b = u[y ? 0 : u.length - 1]; if (y || T) { if (y && -1 === s.edge || T && 1 === s.edge) continue; switch (Ct(c, [y ? v : h], [v, d, h]), s.edge = y ? -1 : 1, s.edgeStrategy) { case "reset": ot(c); continue; case "ease": f = b.frame; break; default: case "set": var S = b.props; for (o in S) l.call(S, o) && (a = nt(S[o].value), i.setStyle(c, o, a)); continue } } else 0 !== s.edge && (Ct(c, [g, d], [v, h]), s.edge = 0); for (var w = 0, k = u.length - 1; k > w; w++) if (f >= u[w].frame && u[w + 1].frame >= f) { var E = u[w], x = u[w + 1]; for (o in E.props) if (l.call(E.props, o)) { var A = (f - E.frame) / (x.frame - E.frame); A = E.props[o].easing(A), a = rt(E.props[o].value, x.props[o].value, A), a = nt(a), i.setStyle(c, o, a) } break } } }, Z = function () { Mt && (Mt = !1, Et()); var e, t, n = it.getScrollTop(), o = Pt(); if (mt) o >= mt.endTime ? (n = mt.targetTop, e = mt.done, mt = r) : (t = mt.easing((o - mt.startTime) / mt.duration), n = 0 | mt.startTop + t * mt.topDiff), it.setScrollTop(n, !0); else if (!ht) { var a = dt.targetTop - n; a && (dt = { startTop: qt, topDiff: n - qt, targetTop: n, startTime: It, endTime: It + vt }), dt.endTime >= o && (t = U.sqrt((o - dt.startTime) / vt), n = 0 | dt.startTop + t * dt.topDiff) } if (_t && st && i.setStyle(st, "transform", "translate(0, " + -Gt + "px) " + Tt), ht || qt !== n) { Ot = n > qt ? "down" : qt > n ? "up" : Ot, ht = !1; var l = { curTop: n, lastTop: qt, maxTop: Vt, direction: Ot }, s = ct.beforerender && ct.beforerender.call(it, l); s !== !1 && (W(n, it.getScrollTop()), qt = n, ct.render && ct.render.call(it, l)), e && e.call(it, !1) } It = o }, J = function (e) { for (var t = 0, r = e.keyFrames.length; r > t; t++) { for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = z.exec(l.props)) ;) a = i[1], o = i[2], n = a.match(O), null !== n ? (a = n[1], n = n[2]) : n = w, o = o.indexOf("!") ? Q(o) : [o.slice(1)], s[a] = { value: o, easing: U[n] }; l.props = s } }, Q = function (e) { var t = []; return M.lastIndex = 0, e = e.replace(M, function (e) { return e.replace(L, function (e) { return 100 * (e / 255) + "%" }) }), G && (B.lastIndex = 0, e = e.replace(B, function (e) { return G + e })), e = e.replace(L, function (e) { return t.push(+e), "{?}" }), t.unshift(e), t }, et = function (e) { var t, r, n = {}; for (t = 0, r = e.keyFrames.length; r > t; t++) tt(e.keyFrames[t], n); for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) tt(e.keyFrames[t], n) }, tt = function (e, t) { var r; for (r in t) l.call(e.props, r) || (e.props[r] = t[r]); for (r in e.props) t[r] = e.props[r] }, rt = function (e, t, r) { var n, o = e.length; if (o !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"'; var a = [e[0]]; for (n = 1; o > n; n++) a[n] = e[n] + (t[n] - e[n]) * r; return a }, nt = function (e) { var t = 1; return $.lastIndex = 0, e[0].replace($, function () { return e[t++] }) }, ot = function (e, t) { e = [].concat(e); for (var r, n, o = 0, a = e.length; a > o; o++) n = e[o], r = lt[n[H]], r && (t ? (n.style.cssText = r.dirtyStyleAttr, Ct(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText, r.dirtyClassAttr = Ft(n), n.style.cssText = r.styleAttr, Ct(n, r.classAttr))) }, at = function () { Tt = "translateZ(0)", i.setStyle(st, "transform", Tt); var e = c(st), t = e.getPropertyValue("transform"), r = e.getPropertyValue(G + "transform"), n = t && "none" !== t || r && "none" !== r; n || (Tt = "") }; i.setStyle = function (e, t, r) { var n = e.style; if (t = t.replace(q, I).replace("-", ""), "zIndex" === t) n[t] = isNaN(r) ? r : "" + (0 | r); else if ("float" === t) n.styleFloat = n.cssFloat = r; else try { _ && (n[_ + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), n[t] = r } catch (o) { } }; var it, lt, st, ct, ft, ut, pt, mt, gt, vt, dt, ht, yt, Tt, bt, St = i.addEvent = function (t, r, n) { var o = function (t) { return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function () { t.returnValue = !1 }), n.call(this, t) }; r = r.split(" "); for (var a, i = 0, l = r.length; l > i; i++) a = r[i], t.addEventListener ? t.addEventListener(a, n, !1) : t.attachEvent("on" + a, o), Kt.push({ element: t, name: a, listener: n }) }, wt = i.removeEvent = function (e, t, r) { t = t.split(" "); for (var n = 0, o = t.length; o > n; n++) e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r) }, kt = function () { for (var e, t = 0, r = Kt.length; r > t; t++) e = Kt[t], wt(e.element, e.name, e.listener); Kt = [] }, Et = function () { var e = it.getScrollTop(); Vt = 0, ft && !_t && (a.style.height = "auto"), j(), ft && !_t && (a.style.height = Vt + o.clientHeight + "px"), _t ? it.setScrollTop(s.min(it.getScrollTop(), Vt)) : it.setScrollTop(e, !0), ht = !0 }, xt = function () { var e, t, r = o.clientHeight, n = {}; for (e in ut) t = ut[e], "function" == typeof t ? t = t.call(it) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r), n[e] = t; return n }, At = function () { var e = st && st.offsetHeight || 0, t = s.max(e, a.scrollHeight, a.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight); return t - o.clientHeight }, Ft = function (t) { var r = "className"; return e.SVGElement && t instanceof e.SVGElement && (t = t[r], r = "baseVal"), t[r] }, Ct = function (t, n, o) { var a = "className"; if (e.SVGElement && t instanceof e.SVGElement && (t = t[a], a = "baseVal"), o === r) return t[a] = n, r; for (var i = t[a], l = 0, s = o.length; s > l; l++) i = Ht(i).replace(Ht(o[l]), " "); i = Dt(i); for (var c = 0, f = n.length; f > c; c++) -1 === Ht(i).indexOf(Ht(n[c])) && (i += " " + n[c]); t[a] = Dt(i) }, Dt = function (e) { return e.replace(N, "") }, Ht = function (e) { return " " + e + " " }, Pt = Date.now || function () { return +new Date }, Nt = function (e, t) { return e.frame - t.frame }, Vt = 0, zt = 1, Ot = "down", qt = -1, It = Pt(), Lt = 0, $t = 0, Mt = !1, Bt = 0, _t = !1, Gt = 0, Kt = [] })(window, document);
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

/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
; (function ($) {

  /*>>core*/
  /**
   * 
   * Magnific Popup Core JS file
   * 
   */


  /**
   * Private static constants
   */
  var CLOSE_EVENT = 'Close',
    BEFORE_CLOSE_EVENT = 'BeforeClose',
    AFTER_CLOSE_EVENT = 'AfterClose',
    BEFORE_APPEND_EVENT = 'BeforeAppend',
    MARKUP_PARSE_EVENT = 'MarkupParse',
    OPEN_EVENT = 'Open',
    CHANGE_EVENT = 'Change',
    NS = 'mfp',
    EVENT_NS = '.' + NS,
    READY_CLASS = 'mfp-ready',
    REMOVING_CLASS = 'mfp-removing',
    PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


  /**
   * Private vars 
   */
  var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
    MagnificPopup = function () { },
    _isJQ = !!(window.jQuery),
    _prevStatus,
    _window = $(window),
    _body,
    _document,
    _prevContentType,
    _wrapClasses,
    _currPopupType;


  /**
   * Private functions
   */
  var _mfpOn = function (name, f) {
    mfp.ev.on(NS + name + EVENT_NS, f);
  },
    _getEl = function (className, appendTo, html, raw) {
      var el = document.createElement('div');
      el.className = 'mfp-' + className;
      if (html) {
        el.innerHTML = html;
      }
      if (!raw) {
        el = $(el);
        if (appendTo) {
          el.appendTo(appendTo);
        }
      } else if (appendTo) {
        appendTo.appendChild(el);
      }
      return el;
    },
    _mfpTrigger = function (e, data) {
      mfp.ev.triggerHandler(NS + e, data);

      if (mfp.st.callbacks) {
        // converts "mfpEventName" to "eventName" callback and triggers it if it's present
        e = e.charAt(0).toLowerCase() + e.slice(1);
        if (mfp.st.callbacks[e]) {
          mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
        }
      }
    },
    _getCloseBtn = function (type) {
      if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
        mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
        _currPopupType = type;
      }
      return mfp.currTemplate.closeBtn;
    },
    // Initialize Magnific Popup only when called at least once
    _checkInstance = function () {
      if (!$.magnificPopup.instance) {
        mfp = new MagnificPopup();
        mfp.init();
        $.magnificPopup.instance = mfp;
      }
    },
    // CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
    supportsTransitions = function () {
      var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
        v = ['ms', 'O', 'Moz', 'Webkit']; // 'v' for vendor

      if (s['transition'] !== undefined) {
        return true;
      }

      while (v.length) {
        if (v.pop() + 'Transition' in s) {
          return true;
        }
      }

      return false;
    };



  /**
   * Public functions
   */
  MagnificPopup.prototype = {

    constructor: MagnificPopup,

    /**
     * Initializes Magnific Popup plugin. 
     * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
     */
    init: function () {
      var appVersion = navigator.appVersion;
      mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1;
      mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
      mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
      mfp.isAndroid = (/android/gi).test(appVersion);
      mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
      mfp.supportsTransition = supportsTransitions();

      // We disable fixed positioned lightbox on devices that don't handle it nicely.
      // If you know a better way of detecting this - let me know.
      mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
      _document = $(document);

      mfp.popupsCache = {};
    },

    /**
     * Opens popup
     * @param  data [description]
     */
    open: function (data) {

      if (!_body) {
        _body = $(document.body);
      }

      var i;

      if (data.isObj === false) {
        // convert jQuery collection to array to avoid conflicts later
        mfp.items = data.items.toArray();

        mfp.index = 0;
        var items = data.items,
          item;
        for (i = 0; i < items.length; i++) {
          item = items[i];
          if (item.parsed) {
            item = item.el[0];
          }
          if (item === data.el[0]) {
            mfp.index = i;
            break;
          }
        }
      } else {
        mfp.items = $.isArray(data.items) ? data.items : [data.items];
        mfp.index = data.index || 0;
      }

      // if popup is already opened - we just update the content
      if (mfp.isOpen) {
        mfp.updateItemHTML();
        return;
      }

      mfp.types = [];
      _wrapClasses = '';
      if (data.mainEl && data.mainEl.length) {
        mfp.ev = data.mainEl.eq(0);
      } else {
        mfp.ev = _document;
      }

      if (data.key) {
        if (!mfp.popupsCache[data.key]) {
          mfp.popupsCache[data.key] = {};
        }
        mfp.currTemplate = mfp.popupsCache[data.key];
      } else {
        mfp.currTemplate = {};
      }



      mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
      mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

      if (mfp.st.modal) {
        mfp.st.closeOnContentClick = false;
        mfp.st.closeOnBgClick = false;
        mfp.st.showCloseBtn = false;
        mfp.st.enableEscapeKey = false;
      }


      // Building markup
      // main containers are created only once
      if (!mfp.bgOverlay) {

        // Dark overlay
        mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function () {
          mfp.close();
        });

        mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function (e) {
          if (mfp._checkIfClose(e.target)) {
            mfp.close();
          }
        });

        mfp.container = _getEl('container', mfp.wrap);
      }

      mfp.contentContainer = _getEl('content');
      if (mfp.st.preloader) {
        mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
      }


      // Initializing modules
      var modules = $.magnificPopup.modules;
      for (i = 0; i < modules.length; i++) {
        var n = modules[i];
        n = n.charAt(0).toUpperCase() + n.slice(1);
        mfp['init' + n].call(mfp);
      }
      _mfpTrigger('BeforeOpen');


      if (mfp.st.showCloseBtn) {
        // Close button
        if (!mfp.st.closeBtnInside) {
          mfp.wrap.append(_getCloseBtn());
        } else {
          _mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
            values.close_replaceWith = _getCloseBtn(item.type);
          });
          _wrapClasses += ' mfp-close-btn-in';
        }
      }

      if (mfp.st.alignTop) {
        _wrapClasses += ' mfp-align-top';
      }



      if (mfp.fixedContentPos) {
        mfp.wrap.css({
          overflow: mfp.st.overflowY,
          overflowX: 'hidden',
          overflowY: mfp.st.overflowY
        });
      } else {
        mfp.wrap.css({
          top: _window.scrollTop(),
          position: 'absolute'
        });
      }
      if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
        mfp.bgOverlay.css({
          height: _document.height(),
          position: 'absolute'
        });
      }



      if (mfp.st.enableEscapeKey) {
        // Close on ESC key
        _document.on('keyup' + EVENT_NS, function (e) {
          if (e.keyCode === 27) {
            mfp.close();
          }
        });
      }

      _window.on('resize' + EVENT_NS, function () {
        mfp.updateSize();
      });


      if (!mfp.st.closeOnContentClick) {
        _wrapClasses += ' mfp-auto-cursor';
      }

      if (_wrapClasses)
        mfp.wrap.addClass(_wrapClasses);


      // this triggers recalculation of layout, so we get it once to not to trigger twice
      var windowHeight = mfp.wH = _window.height();


      var windowStyles = {};

      if (mfp.fixedContentPos) {
        if (mfp._hasScrollBar(windowHeight)) {
          var s = mfp._getScrollbarSize();
          if (s) {
            windowStyles.marginRight = s;
          }
        }
      }

      if (mfp.fixedContentPos) {
        if (!mfp.isIE7) {
          windowStyles.overflow = 'hidden';
        } else {
          // ie7 double-scroll bug
          $('body, html').css('overflow', 'hidden');
        }
      }



      var classesToadd = mfp.st.mainClass;
      if (mfp.isIE7) {
        classesToadd += ' mfp-ie7';
      }
      if (classesToadd) {
        mfp._addClassToMFP(classesToadd);
      }

      // add content
      mfp.updateItemHTML();

      _mfpTrigger('BuildControls');

      // remove scrollbar, add margin e.t.c
      $('html').css(windowStyles);

      // add everything to DOM
      mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || _body);

      // Save last focused element
      mfp._lastFocusedEl = document.activeElement;

      // Wait for next cycle to allow CSS transition
      setTimeout(function () {

        if (mfp.content) {
          mfp._addClassToMFP(READY_CLASS);
          mfp._setFocus();
        } else {
          // if content is not defined (not loaded e.t.c) we add class only for BG
          mfp.bgOverlay.addClass(READY_CLASS);
        }

        // Trap the focus in popup
        _document.on('focusin' + EVENT_NS, mfp._onFocusIn);

      }, 16);

      mfp.isOpen = true;
      mfp.updateSize(windowHeight);
      _mfpTrigger(OPEN_EVENT);

      return data;
    },

    /**
     * Closes the popup
     */
    close: function () {
      if (!mfp.isOpen) return;
      _mfpTrigger(BEFORE_CLOSE_EVENT);

      mfp.isOpen = false;
      // for CSS3 animation
      if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
        mfp._addClassToMFP(REMOVING_CLASS);
        setTimeout(function () {
          mfp._close();
        }, mfp.st.removalDelay);
      } else {
        mfp._close();
      }
    },

    /**
     * Helper for close() function
     */
    _close: function () {
      _mfpTrigger(CLOSE_EVENT);

      var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

      mfp.bgOverlay.detach();
      mfp.wrap.detach();
      mfp.container.empty();

      if (mfp.st.mainClass) {
        classesToRemove += mfp.st.mainClass + ' ';
      }

      mfp._removeClassFromMFP(classesToRemove);

      if (mfp.fixedContentPos) {
        var windowStyles = { marginRight: '' };
        if (mfp.isIE7) {
          $('body, html').css('overflow', '');
        } else {
          windowStyles.overflow = '';
        }
        $('html').css(windowStyles);
      }

      _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
      mfp.ev.off(EVENT_NS);

      // clean up DOM elements that aren't removed
      mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
      mfp.bgOverlay.attr('class', 'mfp-bg');
      mfp.container.attr('class', 'mfp-container');

      // remove close button from target element
      if (mfp.st.showCloseBtn &&
      (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
        if (mfp.currTemplate.closeBtn)
          mfp.currTemplate.closeBtn.detach();
      }


      if (mfp._lastFocusedEl) {
        $(mfp._lastFocusedEl).focus(); // put tab focus back
      }
      mfp.currItem = null;
      mfp.content = null;
      mfp.currTemplate = null;
      mfp.prevHeight = 0;

      _mfpTrigger(AFTER_CLOSE_EVENT);
    },

    updateSize: function (winHeight) {

      if (mfp.isIOS) {
        // fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
        var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
        var height = window.innerHeight * zoomLevel;
        mfp.wrap.css('height', height);
        mfp.wH = height;
      } else {
        mfp.wH = winHeight || _window.height();
      }
      // Fixes #84: popup incorrectly positioned with position:relative on body
      if (!mfp.fixedContentPos) {
        mfp.wrap.css('height', mfp.wH);
      }

      _mfpTrigger('Resize');

    },

    /**
     * Set content of popup based on current index
     */
    updateItemHTML: function () {
      var item = mfp.items[mfp.index];

      // Detach and perform modifications
      mfp.contentContainer.detach();

      if (mfp.content)
        mfp.content.detach();

      if (!item.parsed) {
        item = mfp.parseEl(mfp.index);
      }

      var type = item.type;

      _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
      // BeforeChange event works like so:
      // _mfpOn('BeforeChange', function(e, prevType, newType) { });

      mfp.currItem = item;





      if (!mfp.currTemplate[type]) {
        var markup = mfp.st[type] ? mfp.st[type].markup : false;

        // allows to modify markup
        _mfpTrigger('FirstMarkupParse', markup);

        if (markup) {
          mfp.currTemplate[type] = $(markup);
        } else {
          // if there is no markup found we just define that template is parsed
          mfp.currTemplate[type] = true;
        }
      }

      if (_prevContentType && _prevContentType !== item.type) {
        mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
      }

      var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
      mfp.appendContent(newContent, type);

      item.preloaded = true;

      _mfpTrigger(CHANGE_EVENT, item);
      _prevContentType = item.type;

      // Append container back after its content changed
      mfp.container.prepend(mfp.contentContainer);

      _mfpTrigger('AfterChange');
    },


    /**
     * Set HTML content of popup
     */
    appendContent: function (newContent, type) {
      mfp.content = newContent;

      if (newContent) {
        if (mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
          mfp.currTemplate[type] === true) {
          // if there is no markup, we just append close button element inside
          if (!mfp.content.find('.mfp-close').length) {
            mfp.content.append(_getCloseBtn());
          }
        } else {
          mfp.content = newContent;
        }
      } else {
        mfp.content = '';
      }

      _mfpTrigger(BEFORE_APPEND_EVENT);
      mfp.container.addClass('mfp-' + type + '-holder');

      mfp.contentContainer.append(mfp.content);
    },




    /**
     * Creates Magnific Popup data object based on given data
     * @param  {int} index Index of item to parse
     */
    parseEl: function (index) {
      var item = mfp.items[index],
        type;

      if (item.tagName) {
        item = { el: $(item) };
      } else {
        type = item.type;
        item = { data: item, src: item.src };
      }

      if (item.el) {
        var types = mfp.types;

        // check for 'mfp-TYPE' class
        for (var i = 0; i < types.length; i++) {
          if (item.el.hasClass('mfp-' + types[i])) {
            type = types[i];
            break;
          }
        }

        item.src = item.el.attr('data-mfp-src');
        if (!item.src) {
          item.src = item.el.attr('href');
        }
      }

      item.type = type || mfp.st.type || 'inline';
      item.index = index;
      item.parsed = true;
      mfp.items[index] = item;
      _mfpTrigger('ElementParse', item);

      return mfp.items[index];
    },


    /**
     * Initializes single popup or a group of popups
     */
    addGroup: function (el, options) {
      var eHandler = function (e) {
        e.mfpEl = this;
        mfp._openClick(e, el, options);
      };

      if (!options) {
        options = {};
      }

      var eName = 'click.magnificPopup';
      options.mainEl = el;

      if (options.items) {
        options.isObj = true;
        el.off(eName).on(eName, eHandler);
      } else {
        options.isObj = false;
        if (options.delegate) {
          el.off(eName).on(eName, options.delegate, eHandler);
        } else {
          options.items = el;
          el.off(eName).on(eName, eHandler);
        }
      }
    },
    _openClick: function (e, el, options) {
      var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


      if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey)) {
        return;
      }

      var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

      if (disableOn) {
        if ($.isFunction(disableOn)) {
          if (!disableOn.call(mfp)) {
            return true;
          }
        } else { // else it's number
          if (_window.width() < disableOn) {
            return true;
          }
        }
      }

      if (e.type) {
        e.preventDefault();

        // This will prevent popup from closing if element is inside and popup is already opened
        if (mfp.isOpen) {
          e.stopPropagation();
        }
      }


      options.el = $(e.mfpEl);
      if (options.delegate) {
        options.items = el.find(options.delegate);
      }
      mfp.open(options);
    },


    /**
     * Updates text on preloader
     */
    updateStatus: function (status, text) {

      if (mfp.preloader) {
        if (_prevStatus !== status) {
          mfp.container.removeClass('mfp-s-' + _prevStatus);
        }

        if (!text && status === 'loading') {
          text = mfp.st.tLoading;
        }

        var data = {
          status: status,
          text: text
        };
        // allows to modify status
        _mfpTrigger('UpdateStatus', data);

        status = data.status;
        text = data.text;

        mfp.preloader.html(text);

        mfp.preloader.find('a').on('click', function (e) {
          e.stopImmediatePropagation();
        });

        mfp.container.addClass('mfp-s-' + status);
        _prevStatus = status;
      }
    },


    /*
      "Private" helpers that aren't private at all
     */
    // Check to close popup or not
    // "target" is an element that was clicked
    _checkIfClose: function (target) {

      if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
        return;
      }

      var closeOnContent = mfp.st.closeOnContentClick;
      var closeOnBg = mfp.st.closeOnBgClick;

      if (closeOnContent && closeOnBg) {
        return true;
      } else {

        // We close the popup if click is on close button or on preloader. Or if there is no content.
        if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
          return true;
        }

        // if click is outside the content
        if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
          if (closeOnBg) {
            // last check, if the clicked element is in DOM, (in case it's removed onclick)
            if ($.contains(document, target)) {
              return true;
            }
          }
        } else if (closeOnContent) {
          return true;
        }

      }
      return false;
    },
    _addClassToMFP: function (cName) {
      mfp.bgOverlay.addClass(cName);
      mfp.wrap.addClass(cName);
    },
    _removeClassFromMFP: function (cName) {
      this.bgOverlay.removeClass(cName);
      mfp.wrap.removeClass(cName);
    },
    _hasScrollBar: function (winHeight) {
      return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
    },
    _setFocus: function () {
      (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
    },
    _onFocusIn: function (e) {
      if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
        mfp._setFocus();
        return false;
      }
    },
    _parseMarkup: function (template, values, item) {
      var arr;
      if (item.data) {
        values = $.extend(item.data, values);
      }
      _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);

      $.each(values, function (key, value) {
        if (value === undefined || value === false) {
          return true;
        }
        arr = key.split('_');
        if (arr.length > 1) {
          var el = template.find(EVENT_NS + '-' + arr[0]);

          if (el.length > 0) {
            var attr = arr[1];
            if (attr === 'replaceWith') {
              if (el[0] !== value[0]) {
                el.replaceWith(value);
              }
            } else if (attr === 'img') {
              if (el.is('img')) {
                el.attr('src', value);
              } else {
                el.replaceWith('<img src="' + value + '" class="' + el.attr('class') + '" />');
              }
            } else {
              el.attr(arr[1], value);
            }
          }

        } else {
          template.find(EVENT_NS + '-' + key).html(value);
        }
      });
    },

    _getScrollbarSize: function () {
      // thx David
      if (mfp.scrollbarSize === undefined) {
        var scrollDiv = document.createElement("div");
        scrollDiv.id = "mfp-sbm";
        scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
        document.body.appendChild(scrollDiv);
        mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
      }
      return mfp.scrollbarSize;
    }

  }; /* MagnificPopup core prototype end */




  /**
   * Public static functions
   */
  $.magnificPopup = {
    instance: null,
    proto: MagnificPopup.prototype,
    modules: [],

    open: function (options, index) {
      _checkInstance();

      if (!options) {
        options = {};
      } else {
        options = $.extend(true, {}, options);
      }


      options.isObj = true;
      options.index = index || 0;
      return this.instance.open(options);
    },

    close: function () {
      return $.magnificPopup.instance && $.magnificPopup.instance.close();
    },

    registerModule: function (name, module) {
      if (module.options) {
        $.magnificPopup.defaults[name] = module.options;
      }
      $.extend(this.proto, module.proto);
      this.modules.push(name);
    },

    defaults: {

      // Info about options is in docs:
      // http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

      disableOn: 0,

      key: null,

      midClick: false,

      mainClass: '',

      preloader: true,

      focus: '', // CSS selector of input to focus after popup is opened

      closeOnContentClick: false,

      closeOnBgClick: true,

      closeBtnInside: true,

      showCloseBtn: true,

      enableEscapeKey: true,

      modal: false,

      alignTop: false,

      removalDelay: 0,

      prependTo: null,

      fixedContentPos: 'auto',

      fixedBgPos: 'auto',

      overflowY: 'auto',

      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',

      tClose: 'Close (Esc)',

      tLoading: 'Loading...'

    }
  };



  $.fn.magnificPopup = function (options) {
    _checkInstance();

    var jqEl = $(this);

    // We call some API method of first param is a string
    if (typeof options === "string") {

      if (options === 'open') {
        var items,
          itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
          index = parseInt(arguments[1], 10) || 0;

        if (itemOpts.items) {
          items = itemOpts.items[index];
        } else {
          items = jqEl;
          if (itemOpts.delegate) {
            items = items.find(itemOpts.delegate);
          }
          items = items.eq(index);
        }
        mfp._openClick({ mfpEl: items }, jqEl, itemOpts);
      } else {
        if (mfp.isOpen)
          mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
      }

    } else {
      // clone options obj
      options = $.extend(true, {}, options);

      /*
       * As Zepto doesn't support .data() method for objects 
       * and it works only in normal browsers
       * we assign "options" object directly to the DOM element. FTW!
       */
      if (_isJQ) {
        jqEl.data('magnificPopup', options);
      } else {
        jqEl[0].magnificPopup = options;
      }

      mfp.addGroup(jqEl, options);

    }
    return jqEl;
  };


  //Quick benchmark
  /*
  var start = performance.now(),
    i,
    rounds = 1000;
  
  for(i = 0; i < rounds; i++) {
  
  }
  console.log('Test #1:', performance.now() - start);
  
  start = performance.now();
  for(i = 0; i < rounds; i++) {
  
  }
  console.log('Test #2:', performance.now() - start);
  */


  /*>>core*/

  /*>>inline*/

  var INLINE_NS = 'inline',
    _hiddenClass,
    _inlinePlaceholder,
    _lastInlineElement,
    _putInlineElementsBack = function () {
      if (_lastInlineElement) {
        _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
        _lastInlineElement = null;
      }
    };

  $.magnificPopup.registerModule(INLINE_NS, {
    options: {
      hiddenClass: 'hide', // will be appended with `mfp-` prefix
      markup: '',
      tNotFound: 'Content not found'
    },
    proto: {

      initInline: function () {
        mfp.types.push(INLINE_NS);

        _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function () {
          _putInlineElementsBack();
        });
      },

      getInline: function (item, template) {

        _putInlineElementsBack();

        if (item.src) {
          var inlineSt = mfp.st.inline,
            el = $(item.src);

          if (el.length) {

            // If target element has parent - we replace it with placeholder and put it back after popup is closed
            var parent = el[0].parentNode;
            if (parent && parent.tagName) {
              if (!_inlinePlaceholder) {
                _hiddenClass = inlineSt.hiddenClass;
                _inlinePlaceholder = _getEl(_hiddenClass);
                _hiddenClass = 'mfp-' + _hiddenClass;
              }
              // replace target inline element with placeholder
              _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
            }

            mfp.updateStatus('ready');
          } else {
            mfp.updateStatus('error', inlineSt.tNotFound);
            el = $('<div>');
          }

          item.inlineElement = el;
          return el;
        }

        mfp.updateStatus('ready');
        mfp._parseMarkup(template, {}, item);
        return template;
      }
    }
  });

  /*>>inline*/



  /*>>image*/
  var _imgInterval,
    _getTitle = function (item) {
      if (item.data && item.data.title !== undefined)
        return item.data.title;

      var src = mfp.st.image.titleSrc;

      if (src) {
        if ($.isFunction(src)) {
          return src.call(mfp, item);
        } else if (item.el) {
          return item.el.attr(src) || '';
        }
      }
      return '';
    };

  $.magnificPopup.registerModule('image', {

    options: {
      markup: '<div class="mfp-figure">' +
            '<div class="mfp-close"></div>' +
            '<figure>' +
              '<div class="mfp-img"></div>' +
              '<figcaption>' +
                '<div class="mfp-bottom-bar">' +
                  '<div class="mfp-title"></div>' +
                  '<div class="mfp-counter"></div>' +
                '</div>' +
              '</figcaption>' +
            '</figure>' +
          '</div>',
      cursor: 'mfp-zoom-out-cur',
      titleSrc: 'title',
      verticalFit: true,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },

    proto: {
      initImage: function () {
        var imgSt = mfp.st.image,
          ns = '.image';

        mfp.types.push('image');

        _mfpOn(OPEN_EVENT + ns, function () {
          if (mfp.currItem.type === 'image' && imgSt.cursor) {
            _body.addClass(imgSt.cursor);
          }
        });

        _mfpOn(CLOSE_EVENT + ns, function () {
          if (imgSt.cursor) {
            _body.removeClass(imgSt.cursor);
          }
          _window.off('resize' + EVENT_NS);
        });

        _mfpOn('Resize' + ns, mfp.resizeImage);
        if (mfp.isLowIE) {
          _mfpOn('AfterChange', mfp.resizeImage);
        }
      },
      resizeImage: function () {
        var item = mfp.currItem;
        if (!item || !item.img) return;

        if (mfp.st.image.verticalFit) {
          var decr = 0;
          // fix box-sizing in ie7/8
          if (mfp.isLowIE) {
            decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
          }
          item.img.css('max-height', mfp.wH - decr);
        }
      },
      _onImageHasSize: function (item) {
        if (item.img) {

          item.hasSize = true;

          if (_imgInterval) {
            clearInterval(_imgInterval);
          }

          item.isCheckingImgSize = false;

          _mfpTrigger('ImageHasSize', item);

          if (item.imgHidden) {
            if (mfp.content)
              mfp.content.removeClass('mfp-loading');

            item.imgHidden = false;
          }

        }
      },

      /**
       * Function that loops until the image has size to display elements that rely on it asap
       */
      findImageSize: function (item) {

        var counter = 0,
          img = item.img[0],
          mfpSetInterval = function (delay) {

            if (_imgInterval) {
              clearInterval(_imgInterval);
            }
            // decelerating interval that checks for size of an image
            _imgInterval = setInterval(function () {
              if (img.naturalWidth > 0) {
                mfp._onImageHasSize(item);
                return;
              }

              if (counter > 200) {
                clearInterval(_imgInterval);
              }

              counter++;
              if (counter === 3) {
                mfpSetInterval(10);
              } else if (counter === 40) {
                mfpSetInterval(50);
              } else if (counter === 100) {
                mfpSetInterval(500);
              }
            }, delay);
          };

        mfpSetInterval(1);
      },

      getImage: function (item, template) {

        var guard = 0,

          // image load complete handler
          onLoadComplete = function () {
            if (item) {
              if (item.img[0].complete) {
                item.img.off('.mfploader');

                if (item === mfp.currItem) {
                  mfp._onImageHasSize(item);

                  mfp.updateStatus('ready');
                }

                item.hasSize = true;
                item.loaded = true;

                _mfpTrigger('ImageLoadComplete');

              }
              else {
                // if image complete check fails 200 times (20 sec), we assume that there was an error.
                guard++;
                if (guard < 200) {
                  setTimeout(onLoadComplete, 100);
                } else {
                  onLoadError();
                }
              }
            }
          },

          // image error handler
          onLoadError = function () {
            if (item) {
              item.img.off('.mfploader');
              if (item === mfp.currItem) {
                mfp._onImageHasSize(item);
                mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
              }

              item.hasSize = true;
              item.loaded = true;
              item.loadError = true;
            }
          },
          imgSt = mfp.st.image;


        var el = template.find('.mfp-img');
        if (el.length) {
          var img = document.createElement('img');
          img.className = 'mfp-img';
          item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
          img.src = item.src;

          // without clone() "error" event is not firing when IMG is replaced by new IMG
          // TODO: find a way to avoid such cloning
          if (el.is('img')) {
            item.img = item.img.clone();
          }

          img = item.img[0];
          if (img.naturalWidth > 0) {
            item.hasSize = true;
          } else if (!img.width) {
            item.hasSize = false;
          }
        }

        mfp._parseMarkup(template, {
          title: _getTitle(item),
          img_replaceWith: item.img
        }, item);

        mfp.resizeImage();

        if (item.hasSize) {
          if (_imgInterval) clearInterval(_imgInterval);

          if (item.loadError) {
            template.addClass('mfp-loading');
            mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
          } else {
            template.removeClass('mfp-loading');
            mfp.updateStatus('ready');
          }
          return template;
        }

        mfp.updateStatus('loading');
        item.loading = true;

        if (!item.hasSize) {
          item.imgHidden = true;
          template.addClass('mfp-loading');
          mfp.findImageSize(item);
        }

        return template;
      }
    }
  });



  /*>>image*/

  /*>>zoom*/
  var hasMozTransform,
    getHasMozTransform = function () {
      if (hasMozTransform === undefined) {
        hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
      }
      return hasMozTransform;
    };

  $.magnificPopup.registerModule('zoom', {

    options: {
      enabled: false,
      easing: 'ease-in-out',
      duration: 300,
      opener: function (element) {
        return element.is('img') ? element : element.find('img');
      }
    },

    proto: {

      initZoom: function () {
        var zoomSt = mfp.st.zoom,
          ns = '.zoom',
          image;

        if (!zoomSt.enabled || !mfp.supportsTransition) {
          return;
        }

        var duration = zoomSt.duration,
          getElToAnimate = function (image) {
            var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
              transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing,
              cssObj = {
                position: 'fixed',
                zIndex: 9999,
                left: 0,
                top: 0,
                '-webkit-backface-visibility': 'hidden'
              },
              t = 'transition';

            cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;

            newImg.css(cssObj);
            return newImg;
          },
          showMainContent = function () {
            mfp.content.css('visibility', 'visible');
          },
          openTimeout,
          animatedImg;

        _mfpOn('BuildControls' + ns, function () {
          if (mfp._allowZoom()) {

            clearTimeout(openTimeout);
            mfp.content.css('visibility', 'hidden');

            // Basically, all code below does is clones existing image, puts in on top of the current one and animated it

            image = mfp._getItemToZoom();

            if (!image) {
              showMainContent();
              return;
            }

            animatedImg = getElToAnimate(image);

            animatedImg.css(mfp._getOffset());

            mfp.wrap.append(animatedImg);

            openTimeout = setTimeout(function () {
              animatedImg.css(mfp._getOffset(true));
              openTimeout = setTimeout(function () {

                showMainContent();

                setTimeout(function () {
                  animatedImg.remove();
                  image = animatedImg = null;
                  _mfpTrigger('ZoomAnimationEnded');
                }, 16); // avoid blink when switching images 

              }, duration); // this timeout equals animation duration

            }, 16); // by adding this timeout we avoid short glitch at the beginning of animation


            // Lots of timeouts...
          }
        });
        _mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
          if (mfp._allowZoom()) {

            clearTimeout(openTimeout);

            mfp.st.removalDelay = duration;

            if (!image) {
              image = mfp._getItemToZoom();
              if (!image) {
                return;
              }
              animatedImg = getElToAnimate(image);
            }


            animatedImg.css(mfp._getOffset(true));
            mfp.wrap.append(animatedImg);
            mfp.content.css('visibility', 'hidden');

            setTimeout(function () {
              animatedImg.css(mfp._getOffset());
            }, 16);
          }

        });

        _mfpOn(CLOSE_EVENT + ns, function () {
          if (mfp._allowZoom()) {
            showMainContent();
            if (animatedImg) {
              animatedImg.remove();
            }
            image = null;
          }
        });
      },

      _allowZoom: function () {
        return mfp.currItem.type === 'image';
      },

      _getItemToZoom: function () {
        if (mfp.currItem.hasSize) {
          return mfp.currItem.img;
        } else {
          return false;
        }
      },

      // Get element postion relative to viewport
      _getOffset: function (isLarge) {
        var el;
        if (isLarge) {
          el = mfp.currItem.img;
        } else {
          el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
        }

        var offset = el.offset();
        var paddingTop = parseInt(el.css('padding-top'), 10);
        var paddingBottom = parseInt(el.css('padding-bottom'), 10);
        offset.top -= ($(window).scrollTop() - paddingTop);


        /*
        
        Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.
  
         */
        var obj = {
          width: el.width(),
          // fix Zepto height+padding issue
          height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
        };

        // I hate to do this, but there is no another option
        if (getHasMozTransform()) {
          obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
        } else {
          obj.left = offset.left;
          obj.top = offset.top;
        }
        return obj;
      }

    }
  });



  /*>>zoom*/








  _checkInstance();
})(window.jQuery || window.Zepto);
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
      "data-1320": setPrefixCSS("transform: translate(140px, 660px); opacity: 0;"),
      "data-1420": setPrefixCSS("transform: translate(140px, 660px); opacity: 1;"),
      "data-2680": setPrefixCSS("transform: translate(140px, 140px); opacity: 1;"),
      "data-2730": setPrefixCSS("transform: translate(140px, 140px); opacity: 0;"),
      "data-3400": setPrefixCSS("transform: translate(70px, 140px); opacity: 0;"),
      "data-3450": setPrefixCSS("transform: translate(70px, 140px); opacity: 1;"),
      "data-3600": setPrefixCSS("transform: translate(70px, 140px); opacity: 1;"),
      "data-3650": setPrefixCSS("transform: translate(70px, 140px); opacity: 0;"),
      "data-3670": setPrefixCSS("transform: translate(140px, 630px); opacity: 0;"),
      "data-3720": setPrefixCSS("transform: translate(140px, 630px); opacity: 1;"),
      "data-4490": setPrefixCSS("transform: translate(140px, 140px); opacity: 1;"),
      "data-4540": setPrefixCSS("transform: translate(140px, 140px); opacity: 0;"),
      "data-5200": setPrefixCSS("transform: translate(50px, 230px); opacity: 0;"),
      "data-5250": setPrefixCSS("transform: translate(50px, 230px); opacity: 1;"),
      "data-6200": setPrefixCSS("transform: translate(50px, 230px); opacity: 1;"),
      "data-6250": setPrefixCSS("transform: translate(50px, 230px); opacity: 0;"),
      "data-6450": setPrefixCSS("transform: translate(140px, 640px); opacity: 0;"),
      "data-6500": setPrefixCSS("transform: translate(140px, 640px); opacity: 1;"),
      "data-7750": setPrefixCSS("transform: translate(140px, 140px); opacity: 1;"),
      "data-7800": setPrefixCSS("transform: translate(140px, 140px); opacity: 0;"),
      "data-8300": setPrefixCSS("transform: translate(70px, 230px); opacity: 0;"),
      "data-8350": setPrefixCSS("transform: translate(70px, 230px); opacity: 1;"),
      "data-8480": setPrefixCSS("transform: translate(70px, 230px); opacity: 1;"),
      "data-8530": setPrefixCSS("transform: translate(70px, 230px); opacity: 0;"),
      "data-9200": setPrefixCSS("transform: translate(140px, 690px); opacity: 0;"),
      "data-9250": setPrefixCSS("transform: translate(140px, 690px); opacity: 1;"),
      "data-10900": setPrefixCSS("transform: translate(140px, 140px); opacity: 1;"),
      "data-10950": setPrefixCSS("transform: translate(140px, 140px); opacity: 0;"),
      "data-12400": setPrefixCSS("transform: translate(70px, 140px); opacity: 0;"),
      "data-12450": setPrefixCSS("transform: translate(70px, 140px); opacity: 1;"),
      "data-13000": setPrefixCSS("transform: translate(70px, 140px); opacity: 1;"),
      "data-13050": setPrefixCSS("transform: translate(70px, 140px); opacity: 0;"),
      "data-13300": setPrefixCSS("transform: translate(140px, 650px); opacity: 0;"),
      "data-13350": setPrefixCSS("transform: translate(140px, 650px); opacity: 1;"),
      "data-14250": setPrefixCSS("transform: translate(140px, 140px); opacity: 1;"),
      "data-14300": setPrefixCSS("transform: translate(140px, 140px); opacity: 0;"),
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
      "data-2400": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-3550": setPrefixCSS("transform: translate(0px, -"+ w_height +"px);"),
      "data-5600": setPrefixCSS("transform: translate(0px, -"+ (w_height + 1130) +"px);")
    });
    $("#management h2").attr({
      "data-3000": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-4700": setPrefixCSS("transform: translate(0px, -170px);")
    });
    $('#management .img-cena').attr({
      "data-3100": setPrefixCSS("transform: translate(0px, 150px);"),
      "data-4800": setPrefixCSS("transform: translate(0px, -200px);")
    });
    $('#management .table').attr({
      "data-3500": setPrefixCSS("transform: translate(0px, 50px);"),
      "data-5100": setPrefixCSS("transform: translate(0px, -100px);")
    });

    //inicianado operacional
    $('#operational').attr({
      "data-3300": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-3500": setPrefixCSS("transform: translate(0px, -"+ (w_height - 50) +"px);"),
      "data-6300": setPrefixCSS("transform: translate(0px, -"+ (w_height - 50) +"px);"),
      "data-9200": setPrefixCSS("transform: translate(0px, -"+ (w_height + 1204) +"px);")
    });
    $('#operational h2').attr({
      "data-4800": setPrefixCSS("transform: translate(0px, -200px);"),
      "data-5600": setPrefixCSS("transform: translate(0px, 60px);"),
      "data-6800": setPrefixCSS("transform: translate(0px, -210px);")
    });
    $('#operational span.fil-1').attr({
      "data-4600": setPrefixCSS("transform: translate(0px, -490px);"),
      "data-5100": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-5600": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-6800": setPrefixCSS("transform: translate(0px, -230px);"),
    });
    $('#operational img.fil-2').attr({
      "data-4700": setPrefixCSS("transform: translate(0px, -490px);"),
      "data-5300": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-5600": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-6800": setPrefixCSS("transform: translate(0px, -230px);")
    });
    $('#operational img.fil-3').attr({
      "data-4800": setPrefixCSS("transform: translate(0px, -490px);"),
      "data-5600": setPrefixCSS("transform: translate(0px, 70px);"),
      "data-6800": setPrefixCSS("transform: translate(0px, -230px);")
    });
    $('#operational .table').attr({
      "data-5000": setPrefixCSS("transform: translate(0px, 300px);"),
      "data-6800": setPrefixCSS("transform: translate(0px, -50px);")
    });

    //iniciando funcional
    $('#functional').attr({
      "data-7600": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-8600": setPrefixCSS("transform: translate(0px, -"+ (w_height - 20) +"px);"),
      "data-12900": setPrefixCSS("transform: translate(0px, -"+ (w_height + 1210) +"px);")
    });
    $('#functional h2').attr({
      "data-8000": setPrefixCSS("transform: translate(0px, 100px);"),
      "data-8600": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-8700": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-10100": setPrefixCSS("transform: translate(0px, -200px);")
    });
    $('#functional .img-cena').attr({
      "data-8000": setPrefixCSS("transform: translate(0px, 80px);"),
      "data-8700": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-9500": setPrefixCSS("transform: translate(0px, -70px);")
    });
    $('#functional .img-peao-cabeca').attr({
      "data-8000": setPrefixCSS("transform: translate(0px, -35px);"),
      "data-8650": setPrefixCSS("transform: translate(0px, 67px);")
    });
    $('#functional .img-peao-base').attr({
      "data-8000": setPrefixCSS("transform: translate(2px, 72px);"),
      "data-8650": setPrefixCSS("transform: translate(2px, -41px);")
    });
    $('#functional .img-nuvens').attr({
      "data-8500": setPrefixCSS("transform: translate(0px, 80px);") + " opacity: 0;",
      "data-10400": setPrefixCSS("transform: translate(0px, 10px);") + " opacity: 1;",
      "data-11500": setPrefixCSS("transform: translate(0px, -220px);") + " opacity: 1;"
    });
    $('#functional .table').attr({
      "data-9200": setPrefixCSS("transform: translate(0px, 120px);"),
      "data-11200": setPrefixCSS("transform: translate(0px, -50px);")
    });

    //iniciando qualidade
    $('#quality').attr({
      "data-8000": setPrefixCSS("transform: translate(0px, 0px);"),
      "data-11000": setPrefixCSS("transform: translate(0px, -490px);"),
      "data-12800": setPrefixCSS("transform: translate(0px, -"+ (w_height - 100) +"px);"),
      "data-15000": setPrefixCSS("transform: translate(0px, -"+ (w_height + 1040) +"px);")
    });
    $('#quality h2').attr({
      "data-11000": setPrefixCSS("transform: translate(0px, -300px);"),
      "data-12800": setPrefixCSS("transform: translate(0px, 50px);"),
      "data-13900": setPrefixCSS("transform: translate(0px, -70px);")
    });
    $('#quality .img-coroa').attr({
      "data-11800": setPrefixCSS("transform: translate(0px, -300px);"),
      "data-12500": setPrefixCSS("transform: translate(0px, 35px);")
    });
    $('#quality .img-raios').attr({
      "data-12480": "opacity: 0",
      "data-12520": "opacity: 1"
    });
    $('#quality .img-projeto').attr({
      "data-11500": "opacity: 0; width: 100px; right: 102px;",
      "data-12500": "opacity: 1; width: 320px; right: 22px;"
    });
    $('#quality .img-nuvens').attr({
      "data-12650": setPrefixCSS("transform: translate(0px, 50px);" + " opacity: 0;"),
      "data-12700": setPrefixCSS("transform: translate(0px, 60px);" + " opacity: 1;"),
      "data-13900": setPrefixCSS("transform: translate(0px, -80px);" + " opacity: 1;")
    });

    $('#quality .table').attr({
      "data-12650": setPrefixCSS("transform: translate(0px, 150px);"),
      "data-14500": setPrefixCSS("transform: translate(0px, 0px);")
    });

    //iniciando contato
    $('#contato').attr({
      "data-1800-end": setPrefixCSS("transform: translate(0px, 0px);"),
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
var inmetrics = function () {

  var init = function () {
    if ($("body").hasClass("animated")) {
      //Adicionei a validação dentro da função, estou controlando o resize quando menor que 768px removo o parallax.
      animations.init(isMobile());
      removeCurtain(openPopup);
    }

    $("[data-toggle=slide]").on({ click: slideToggle });
    $(".descriptions a").magnificPopup({ type: 'inline' });
    $(".selections a").on({
      mouseenter: selectionsHoverIn,
      mouseleave: selectionsHoverOut,
      click: selectionsClick
    });
    $('.contact-form form').validate(contactFormValidations());
  };

  var openPopup = function () {
    var popup = $('#home-popup');
    if (popup.length > 0) {
      popup.magnificPopup({
        items: {
          src: window.config.base + 'images/popup-' + popup.data("lang") + '.jpg',
          type: 'image'
        }
      }).magnificPopup('open');
    }
  }

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

  var contactFormSubmit = function (formElement) {
    var form = $(formElement);
    var button = form.find("input[type=submit]");
    var spinner = form.find(".spinner");
    button.hide();
    spinner.show();
    $.ajax({
      url: form.attr("action"),
      type: "POST",
      data: form.serialize(),
      success: function (data, textStatus, request) {

        if (request.getResponseHeader('inmetrics_plan_request') == 'success') {
          form.find("ul").hide();
          $(".result-message").html(data).fadeIn('slow');
        }
      },
      error: function (r, status, error) {
        console.info("Ajax Error, status = " + status);
        console.info(error);
      }
    });
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
      },
      submitHandler: contactFormSubmit,
    };
  };

  var removeCurtain = function (callback) {
    $.get(window.config.base + 'images/animados/olho_aladoanima.png', function () {
      setTimeout(function () {
        $('body').removeClass('loading-on');
        callback();
      }, 1200);
    });
  };

  isMobile = function () {
    return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
  };

  return { init: init }
}();

$(document).ready(inmetrics.init);

