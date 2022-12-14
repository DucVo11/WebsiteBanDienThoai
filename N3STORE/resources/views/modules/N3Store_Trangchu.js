/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
function gtm_ProductImpressions(n, t, i, r, u, f, e) {
    if (dataLayer === undefined) { console.log("dataLayer chÆ°a khai bĂ¡o"); return }
    var o = [{ name: n, id: t, price: i, brand: r, category: u, list: f, position: e }],
        s = { ecommerce: { impressions: o }, event: "productImpressions" };
    dataLayer.push(s)
}

function addListProductIntoImpression(n, t, i) {
    var e, u;
    if (n !== undefined && n.length > 0) {
        (i === undefined || i <= 0) && (i = 1);
        (t === undefined || t == null || t == "") && (t = "List product");
        var o = [],
            r = {},
            f = 0;
        for (e = 0; e < n.length; e++) f++, u = n[e], r.name = u.dataset.name, r.id = u.dataset.id, r.price = u.dataset.price, r.brand = u.dataset.brand, r.category = u.dataset.cate, r.list = t, r.position = f.toString(), o.push(r), r = {}, (e + 1 == n.length && f < i || f == i) && (gtm_ListProductImpressions(o), f = 0, o = [])
    }
}

function gtm_ListProductImpressions(n) {
    if (dataLayer === undefined) { console.log("dataLayer chÆ°a khai bĂ¡o"); return }
    if (n !== undefined && n != null && n.length > 0) {
        var t = { ecommerce: { impressions: n }, event: "productImpressions" };
        dataLayer.push(t)
    }
}

function gtm_ProductClick(n, t, i, r, u, f, e) {
    if (dataLayer === undefined) { console.log("dataLayer chÆ°a khai bĂ¡o"); return }
    var o = [{ name: n, id: t === undefined ? "" : t.toString(), price: i === undefined ? "" : i.toString(), brand: r, category: u, list: f, position: e }],
        s = { ecommerce: { click: { products: o, actionField: { list: f } } }, event: "productClick" };
    dataLayer.push(s)
}

function gtm_ProductDetailView(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k) {
    if (dataLayer === undefined) { console.log("dataLayer chÆ°a khai bĂ¡o"); return }
    var d = [{ name: n, id: t, price: i, brand: r, category: u, dimension33: f, dimension34: e, dimension35: o, dimension36: s, dimension37: h, dimension16: c, dimension38: l, dimension39: a, dimension40: v, dimension41: y, dimension43: p, dimension44: w, dimension45: b }],
        g = { event: "productDetail", serviceOrder: k, ecommerce: { detail: { products: d } } };
    dataLayer.push(g)
}

function gtm_ProductAddtoCart(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt) {
    if (dataLayer === undefined) { console.log("dataLayer chÆ°a khai bĂ¡o"); return }
    var it = [{ name: n, id: t, price: i, brand: r, category: u, variant: f, quantity: e, dimension33: o, dimension34: s, dimension35: h, dimension36: c, dimension37: l, dimension16: a, dimension38: v, dimension39: y, dimension40: p, dimension41: w, dimension43: b, dimension44: k, dimension45: d, dimension42: g }],
        rt = { event: "productAddToCart", orderType: nt, serviceOrder: tt, ecommerce: { add: { products: it } } };
    dataLayer.push(rt)
}

function goToSearchPage(n) {
    var t, r = n.toString().replace(inValidChar, ""),
        i = r.trim(),
        u = encodeURIComponent(i).replace(/\./g, "+").replace(/%20/gi, "+").replace(/ /g, "+");
    t = "/tim-kiem?key=" + u;
    UpdateSearchKeywordHistory(i, urlRoot + t);
    location.href = t
}

function UpdateSearchKeywordHistory(n, t) { $.ajax({ url: urlRoot + "/Common/UpdateSearchKeywordHistory", type: "POST", data: { keyword: n, url: t }, cache: !1, success: function() {}, error: function() {} }) }

function callSuggestSearch(n) {
    if (!searching) {
        searching = !0;
        n.preventDefault();
        var u = $(".click-search input").val().replace(inValidChar, ""),
            i = u.trim().toString().toLowerCase(),
            r = $(".list-sg-search"),
            t = $(".sg-search");
        if (i.length < MIN_SSKEYWORD_LENGTH) {
            t.removeClass("active");
            r.html("");
            searching = !1;
            return
        }
        i.length >= MIN_SSKEYWORD_LENGTH && ($.ajax({
            url: urlRoot + "/Common/SuggestSearch",
            type: "GET",
            data: { keywords: i },
            cache: !1,
            beforeSend: function() {},
            success: function(n) {
                n.trim() != "" ? t.html(n) : t.html("");
                $(".history-txt").length > 0 || $(".list-sg-search").length > 0 || $(".text-search").length > 0 ? (t.addClass("active"), r.addClass("active"), t.fadeIn()) : (t.removeClass("active"), r.removeClass("active"), t.fadeOut())
            },
            error: function() {}
        }), searching = !1)
    }
}

function ViewSearchKeywordHistory() {
    var t = $(".list-sg-search"),
        n = $(".sg-search");
    $.ajax({
        url: urlRoot + "/Common/ViewSearchKeywordHistory",
        type: "POST",
        cache: !1,
        success: function(i) {
            i.trim() != "" ? n.html(i) : n.html("");
            $(".history-txt").length > 0 || $(".list-sg-search").length > 0 || $(".text-search").length > 0 ? (n.addClass("active"), t.addClass("active"), n.show()) : (n.removeClass("active"), t.removeClass("active"), n.hide())
        },
        error: function() {}
    })
}

function locationConfirm(n) {
    $(".preloader").fadeIn();
    var t = { Address: "", ProvinceId: n, DistrictId: -1, WardId: -1 };
    $.ajax({ url: urlRoot + "/Common/locationConfirm", type: "POST", xhrFields: { withCredentials: (urlRoot.includes("thegioididong.com") || urlRoot.includes("dienmayxanh.com")) ? !1 : !0 }, data: { newcustomer: t, cateUrl: location.pathname.split("/").length > 2 ? location.pathname.split("/")[1] : location.pathname.replace("/", ""), productUrl: location.pathname.split("/").length > 2 ? location.pathname.split("/")[2] : "" }, cache: !1, success: function(n) { n != "" && n.status == 1 ? window.location.reload() : n != "" && n.status == 2 && n.message !== null && n.message !== "" ? location.href = location.origin + n.message : $(".preloader").hide() }, error: function() { $(".preloader").hide() } })
}

function GetQuanatyCart(n) {
    if (n != null) { UpdateNumberCart(n); return }
    $.ajax({
        url: urlRoot + "/cart/api/cart/info",
        type: "GET",
        cache: !1,
        success: function(n) {
            window.cart = n;
            n != null && UpdateNumberCart(n.items_count)
        },
        error: function() {}
    })
}

function UpdateNumberCart(n) { n > 0 ? $(".cart").append('<span class="number">' + n + "<\/span>") : $(".cart .number").remove() }! function(n, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) { if (!n.document) throw new Error("jQuery requires a window with a document"); return t(n) } : t(n) }("undefined" != typeof window ? window : this, function(n, t) {
    "use strict";

    function br(n, t, i) {
        var r, e, u = (i = i || f).createElement("script");
        if (u.text = n, t)
            for (r in oe)(e = t[r] || t.getAttribute && t.getAttribute(r)) && u.setAttribute(r, e);
        i.head.appendChild(u).parentNode.removeChild(u)
    }

    function ut(n) { return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ri[pr.call(n)] || "object" : typeof n }

    function pi(n) {
        var t = !!n && "length" in n && n.length,
            i = ut(n);
        return !u(n) && !rt(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n)
    }

    function c(n, t) { return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase() }

    function bi(n, t, r) { return u(t) ? i.grep(n, function(n, i) { return !!t.call(n, i, n) !== r }) : t.nodeType ? i.grep(n, function(n) { return n === t !== r }) : "string" != typeof t ? i.grep(n, function(n) { return -1 < ii.call(t, n) !== r }) : i.filter(t, n, r) }

    function uu(n, t) { while ((n = n[t]) && 1 !== n.nodeType); return n }

    function et(n) { return n }

    function fi(n) { throw n; }

    function fu(n, t, i, r) { var f; try { n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r)) } catch (n) { i.apply(void 0, [n]) } }

    function oi() {
        f.removeEventListener("DOMContentLoaded", oi);
        n.removeEventListener("load", oi);
        i.ready()
    }

    function ce(n, t) { return t.toUpperCase() }

    function y(n) { return n.replace(se, "ms-").replace(he, ce) }

    function bt() { this.expando = i.expando + bt.uid++ }

    function ou(n, t, i) {
        var u, r;
        if (void 0 === i && 1 === n.nodeType)
            if (u = "data-" + t.replace(ae, "-$&").toLowerCase(), "string" == typeof(i = n.getAttribute(u))) {
                try { i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : le.test(r) ? JSON.parse(r) : r) } catch (n) {}
                o.set(n, t, i)
            } else i = void 0;
        return i
    }

    function hu(n, t, r, u) {
        var s, h, c = 20,
            l = u ? function() { return u.cur() } : function() { return i.css(n, t, "") },
            o = l(),
            e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && kt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s
    }

    function ht(n, t) { for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)(f = n[u]).style && (h = f.style.display, t ? ("none" === h && (o[u] = r.get(f, "display") || null, o[u] || (f.style.display = "")), "" === f.style.display && dt(f) && (o[u] = (e = c = s = void 0, c = (a = f).ownerDocument, l = a.nodeName, (e = ki[l]) || (s = c.body.appendChild(c.createElement(l)), e = i.css(s, "display"), s.parentNode.removeChild(s), "none" === e && (e = "block"), ki[l] = e)))) : "none" !== h && (o[u] = "none", r.set(f, "display", h))); for (u = 0; u < v; u++) null != o[u] && (n[u].style.display = o[u]); return n }

    function s(n, t) { var r; return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && c(n, t) ? i.merge([n], r) : r }

    function di(n, t) { for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval")) }

    function vu(n, t, r, u, f) {
        for (var e, o, p, a, w, v, c = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if ((e = n[l]) || 0 === e)
                if ("object" === ut(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (au.test(e)) {
            for (o = o || c.appendChild(t.createElement("div")), p = (cu.exec(e) || ["", ""])[1].toLowerCase(), a = h[p] || h._default, o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) o = o.lastChild;
            i.merge(y, o.childNodes);
            (o = c.firstChild).textContent = ""
        } else y.push(t.createTextNode(e));
        for (c.textContent = "", l = 0; e = y[l++];)
            if (u && -1 < i.inArray(e, u)) f && f.push(e);
            else if (w = st(e), o = s(c.appendChild(e), "script"), w && di(o), r)
            for (v = 0; e = o[v++];) lu.test(e.type || "") && r.push(e);
        return c
    }

    function ct() { return !0 }

    function lt() { return !1 }

    function we(n, t) { return n === function() { try { return f.activeElement } catch (n) {} }() == ("focus" === t) }

    function gi(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) { for (s in "string" != typeof r && (u = u || r, r = void 0), t) gi(n, s, r, u, t[s], e); return n }
        if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), !1 === f) f = lt;
        else if (!f) return n;
        return 1 === e && (o = f, (f = function(n) { return i().off(n), o.apply(this, arguments) }).guid = o.guid || (o.guid = i.guid++)), n.each(function() { i.event.add(this, t, f, u, r) })
    }

    function hi(n, t, u) {
        u ? (r.set(n, t, !1), i.event.add(n, t, {
            namespace: !1,
            handler: function(n) {
                var o, e, f = r.get(this, t);
                if (1 & n.isTrigger && this[t]) {
                    if (f.length)(i.event.special[t] || {}).delegateType && n.stopPropagation();
                    else if (f = k.call(arguments), r.set(this, t, f), o = u(this, t), this[t](), f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : e = {}, f !== e) return n.stopImmediatePropagation(), n.preventDefault(), e.value
                } else f.length && (r.set(this, t, { value: i.event.trigger(i.extend(f[0], i.Event.prototype), f.slice(1), this) }), n.stopImmediatePropagation())
            }
        })) : void 0 === r.get(n, t) && i.event.add(n, t, ct)
    }

    function pu(n, t) { return c(n, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n }

    function ge(n) { return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n }

    function no(n) { return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"), n }

    function wu(n, t) {
        var u, s, f, h, c, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (e = r.get(n).events))
                for (f in r.remove(t, "handle events"), e)
                    for (u = 0, s = e[f].length; u < s; u++) i.event.add(t, f, e[f][u]);
            o.hasData(n) && (h = o.access(n), c = i.extend({}, h), o.set(t, c))
        }
    }

    function at(n, t, f, o) {
        t = yr(t);
        var a, b, l, v, h, y, c = 0,
            p = n.length,
            d = p - 1,
            w = t[0],
            k = u(w);
        if (k || 1 < p && "string" == typeof w && !e.checkClone && ke.test(w)) return n.each(function(i) {
            var r = n.eq(i);
            k && (t[0] = w.call(this, i, r.html()));
            at(r, t, f, o)
        });
        if (p && (b = (a = vu(t, n[0].ownerDocument, !1, n, o)).firstChild, 1 === a.childNodes.length && (a = b), b || o)) {
            for (v = (l = i.map(s(a, "script"), ge)).length; c < p; c++) h = a, c !== d && (h = i.clone(h, !0, !0), v && i.merge(l, s(h, "script"))), f.call(n[c], h, c);
            if (v)
                for (y = l[l.length - 1].ownerDocument, i.map(l, no), c = 0; c < v; c++) h = l[c], lu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(y, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && !h.noModule && i._evalUrl(h.src, { nonce: h.nonce || h.getAttribute("nonce") }, y) : br(h.textContent.replace(de, ""), h, y))
        }
        return n
    }

    function bu(n, t, r) { for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(s(u)), u.parentNode && (r && st(u) && di(s(u, "script")), u.parentNode.removeChild(u)); return n }

    function ni(n, t, r) { var o, s, h, f, u = n.style; return (r = r || ci(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || st(n) || (f = i.style(n, t)), !e.pixelBoxStyles() && nr.test(f) && to.test(t) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = r.width, u.width = o, u.minWidth = s, u.maxWidth = h)), void 0 !== f ? f + "" : f }

    function du(n, t) {
        return {
            get: function() {
                if (!n()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function tr(n) {
        var t = i.cssProps[n] || tf[n];
        return t || (n in nf ? n : tf[n] = function(n) {
            for (var i = n[0].toUpperCase() + n.slice(1), t = gu.length; t--;)
                if ((n = gu[t] + i) in nf) return n
        }(n) || n)
    }

    function ff(n, t, i) { var r = kt.exec(t); return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t }

    function ir(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0,
            h = 0,
            s = 0;
        if (r === (u ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === r && (s += i.css(n, r + b[o], !0, f)), u ? ("content" === r && (s -= i.css(n, "padding" + b[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + b[o] + "Width", !0, f))) : (s += i.css(n, "padding" + b[o], !0, f), "padding" !== r ? s += i.css(n, "border" + b[o] + "Width", !0, f) : h += i.css(n, "border" + b[o] + "Width", !0, f));
        return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0), s
    }

    function ef(n, t, r) {
        var f = ci(n),
            o = (!e.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, f),
            s = o,
            u = ni(n, t, f),
            h = "offset" + t[0].toUpperCase() + t.slice(1);
        if (nr.test(u)) {
            if (!r) return u;
            u = "auto"
        }
        return (!e.boxSizingReliable() && o || !e.reliableTrDimensions() && c(n, "tr") || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, f), (s = h in n) && (u = n[h])), (u = parseFloat(u) || 0) + ir(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
    }

    function a(n, t, i, r, u) { return new a.prototype.init(n, t, i, r, u) }

    function rr() { li && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(rr) : n.setTimeout(rr, i.fx.interval), i.fx.tick()) }

    function cf() { return n.setTimeout(function() { vt = void 0 }), vt = Date.now() }

    function ai(n, t) {
        var u, r = 0,
            i = { height: n };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = b[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i
    }

    function lf(n, t, i) {
        for (var u, f = (v.tweeners[t] || []).concat(v.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function v(n, t, r) {
        var o, s, h = 0,
            a = v.prefilters.length,
            e = i.Deferred().always(function() { delete l.elem }),
            l = function() { if (s) return !1; for (var o = vt || cf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++) f.tweens[r].run(i); return e.notifyWith(n, [f, i, t]), i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1) },
            f = e.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, { specialEasing: {}, easing: i.easing._default }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: vt || cf(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) { var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing); return f.tweens.push(u), u },
                stop: function(t) {
                    var i = 0,
                        r = t ? f.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < r; i++) f.tweens[i].run(1);
                    return t ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]), this
                }
            }),
            c = f.props;
        for (! function(n, t) {
                var r, f, e, u, o;
                for (r in n)
                    if (e = t[f = y(r)], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o)
                        for (r in u = o.expand(u), delete n[f], u) r in n || (n[r] = u[r], t[r] = e);
                    else t[f] = e
            }(c, f.opts.specialEasing); h < a; h++)
            if (o = v.prefilters[h].call(f, n, c, f.opts)) return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)), o;
        return i.map(c, lf, f), u(f.opts.start) && f.opts.start.call(n, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), i.fx.timer(i.extend(l, { elem: n, anim: f, queue: f.opts.queue })), f
    }

    function tt(n) { return (n.match(l) || []).join(" ") }

    function it(n) { return n.getAttribute && n.getAttribute("class") || "" }

    function ur(n) { return Array.isArray(n) ? n : "string" == typeof n && n.match(l) || [] }

    function sr(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function(t, i) { r || uo.test(n) ? u(n, i) : sr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u) });
        else if (r || "object" !== ut(t)) u(n, t);
        else
            for (f in t) sr(n + "[" + f + "]", t[f], r, u)
    }

    function gf(n) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var r, f = 0,
                e = t.toLowerCase().match(l) || [];
            if (u(i))
                while (r = e[f++]) "+" === r[0] ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }

    function ne(n, t, r, u) {
        function e(s) { var h; return f[s] = !0, i.each(n[s] || [], function(n, i) { var s = i(t, r, u); return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1) }), h }
        var f = {},
            o = n === hr;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function lr(n, t) { var r, u, f = i.ajaxSettings.flatOptions || {}; for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]); return u && i.extend(!0, n, u), n }
    var p = [],
        vr = Object.getPrototypeOf,
        k = p.slice,
        yr = p.flat ? function(n) { return p.flat.call(n) } : function(n) { return p.concat.apply([], n) },
        yi = p.push,
        ii = p.indexOf,
        ri = {},
        pr = ri.toString,
        ui = ri.hasOwnProperty,
        wr = ui.toString,
        ee = wr.call(Object),
        e = {},
        u = function(n) { return "function" == typeof n && "number" != typeof n.nodeType },
        rt = function(n) { return null != n && n === n.window },
        f = n.document,
        oe = { type: !0, src: !0, nonce: !0, noModule: !0 },
        kr = "3.5.1",
        i = function(n, t) { return new i.fn.init(n, t) },
        d, wi, nu, tu, iu, ru, l, eu, ei, ot, dt, ki, h, au, vt, li, yt, of, sf, hf, af, pt, vf, yf, pf, fr, er, te, wt, ie, ar, vi, re, ue, fe;
    i.fn = i.prototype = {
        jquery: kr,
        constructor: i,
        length: 0,
        toArray: function() { return k.call(this) },
        get: function(n) { return null == n ? k.call(this) : n < 0 ? this[n + this.length] : this[n] },
        pushStack: function(n) { var t = i.merge(this.constructor(), n); return t.prevObject = this, t },
        each: function(n) { return i.each(this, n) },
        map: function(n) { return this.pushStack(i.map(this, function(t, i) { return n.call(t, i, t) })) },
        slice: function() { return this.pushStack(k.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        even: function() { return this.pushStack(i.grep(this, function(n, t) { return (t + 1) % 2 })) },
        odd: function() { return this.pushStack(i.grep(this, function(n, t) { return t % 2 })) },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(0 <= t && t < i ? [this[t]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: yi,
        sort: p.sort,
        splice: p.splice
    };
    i.extend = i.fn.extend = function() {
        var s, f, e, t, o, c, n = arguments[0] || {},
            r = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[r] || {}, r++), "object" == typeof n || u(n) || (n = {}), r === l && (n = this, r--); r < l; r++)
            if (null != (s = arguments[r]))
                for (f in s) t = s[f], "__proto__" !== f && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f], c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {}, o = !1, n[f] = i.extend(h, c, t)) : void 0 !== t && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (kr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) { throw new Error(n); },
        noop: function() {},
        isPlainObject: function(n) { var t, i; return !(!n || "[object Object]" !== pr.call(n)) && (!(t = vr(n)) || "function" == typeof(i = ui.call(t, "constructor") && t.constructor) && wr.call(i) === ee) },
        isEmptyObject: function(n) { for (var t in n) return !1; return !0 },
        globalEval: function(n, t, i) { br(n, { nonce: t && t.nonce }, i) },
        each: function(n, t) {
            var r, i = 0;
            if (pi(n)) {
                for (r = n.length; i < r; i++)
                    if (!1 === t.call(n[i], i, n[i])) break
            } else
                for (i in n)
                    if (!1 === t.call(n[i], i, n[i])) break; return n
        },
        makeArray: function(n, t) { var r = t || []; return null != n && (pi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : yi.call(r, n)), r },
        inArray: function(n, t, i) { return null == t ? -1 : ii.call(t, n, i) },
        merge: function(n, t) { for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i]; return n.length = r, n },
        grep: function(n, t, i) { for (var u = [], r = 0, f = n.length, e = !i; r < f; r++) !t(n[r], r) !== e && u.push(n[r]); return u },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (pi(n))
                for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
            else
                for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
            return yr(f)
        },
        guid: 1,
        support: e
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) { ri["[object " + t + "]"] = t.toLowerCase() });
    d = function(n) {
        function u(n, t, r, u) {
            var s, y, c, l, p, w, d, v = t && t.ownerDocument,
                a = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof n || !n || 1 !== a && 9 !== a && 11 !== a) return r;
            if (!u && (b(t), t = t || i, h)) {
                if (11 !== a && (p = ar.exec(n)))
                    if (s = p[1]) { if (9 === a) { if (!(c = t.getElementById(s))) return r; if (c.id === s) return r.push(c), r } else if (v && (c = v.getElementById(s)) && et(t, c) && c.id === s) return r.push(c), r } else { if (p[2]) return k.apply(r, t.getElementsByTagName(n)), r; if ((s = p[3]) && f.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r }
                if (f.qsa && !lt[n + " "] && (!o || !o.test(n)) && (1 !== a || "object" !== t.nodeName.toLowerCase())) {
                    if (d = n, v = t, 1 === a && (er.test(n) || yi.test(n))) {
                        for ((v = ti.test(n) && ri(t.parentNode) || t) === t && f.scope || ((l = t.getAttribute("id")) ? l = l.replace(pi, wi) : t.setAttribute("id", l = e)), y = (w = ft(n)).length; y--;) w[y] = (l ? "#" + l : ":scope") + " " + pt(w[y]);
                        d = w.join(",")
                    }
                    try { return k.apply(r, v.querySelectorAll(d)), r } catch (t) { lt(n, !0) } finally { l === e && t.removeAttribute("id") }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function yt() { var n = []; return function i(r, u) { return n.push(r + " ") > t.cacheLength && delete i[n.shift()], i[r + " "] = u } }

        function l(n) { return n[e] = !0, n }

        function a(n) {
            var t = i.createElement("fieldset");
            try { return !!n(t) } catch (n) { return !1 } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) { for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i }

        function ki(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function yr(n) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === n } }

        function pr(n) { return function(t) { var i = t.nodeName.toLowerCase(); return ("input" === i || "button" === i) && t.type === n } }

        function di(n) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && vr(t) === n : t.disabled === n : "label" in t && t.disabled === n } }

        function it(n) { return l(function(t) { return t = +t, l(function(i, r) { for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u])) }) }) }

        function ri(n) { return n && "undefined" != typeof n.getElementsByTagName && n }

        function gi() {}

        function pt(n) { for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value; return i }

        function wt(n, t, i) {
            var r = t.dir,
                u = t.next,
                f = u || r,
                o = i && "parentNode" === f,
                s = nr++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o) return n(t, i, u);
                return !1
            } : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (l = (a = t[e] || (t[e] = {}))[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else { if ((c = l[f]) && c[0] === v && c[1] === s) return y[2] = c[2]; if ((l[f] = y)[2] = n(t, i, h)) return !0 } return !1
            }
        }

        function ui(n) {
            return 1 < n.length ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function bt(n, t, i, r, u) { for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f))); return o }

        function fi(n, t, i, r, f, o) {
            return r && !r[e] && (r = fi(r)), f && !f[e] && (f = fi(f, o)), l(function(e, o, s, h) {
                var a, l, v, w = [],
                    p = [],
                    b = o.length,
                    d = e || function(n, t, i) { for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i); return i }(t || "*", s.nodeType ? [s] : s, []),
                    y = !n || !e && t ? d : bt(d, w, n, s, h),
                    c = i ? f || (e ? n : b || r) ? [] : o : y;
                if (i && i(y, c, s, h), r)
                    for (a = bt(c, p), r(a, [], s, h), l = a.length; l--;)(v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
                if (e) {
                    if (f || n) {
                        if (f) {
                            for (a = [], l = c.length; l--;)(v = c[l]) && a.push(y[l] = v);
                            f(null, c = [], a, h)
                        }
                        for (l = c.length; l--;)(v = c[l]) && -1 < (a = f ? nt(e, v) : w[l]) && (e[a] = !(o[a] = v))
                    }
                } else c = bt(c === o ? c.splice(b, c.length) : c), f ? f(null, o, c, h) : k.apply(o, c)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = wt(function(n) { return n === o }, c, !0), a = wt(function(n) { return -1 < nt(o, n) }, c, !0), f = [function(n, t, i) { var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i)); return o = null, r }]; i < s; i++)
                if (u = t.relative[n[i].type]) f = [wt(ui(f), u)];
                else {
                    if ((u = t.filter[n[i].type].apply(null, n[i].matches))[e]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(1 < i && ui(f), 1 < i && pt(n.slice(0, i - 1).concat({ value: " " === n[i - 2].type ? "*" : "" })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && pt(n))
                    }
                    f.push(u)
                }
            return ui(f)
        }
        var rt, f, t, st, oi, ft, kt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            nr = 0,
            hi = yt(),
            ci = yt(),
            li = yt(),
            lt = yt(),
            dt = function(n, t) { return n === t && (ut = !0), 0 },
            tr = {}.hasOwnProperty,
            g = [],
            ir = g.pop,
            rr = g.push,
            k = g.push,
            ai = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            ni = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
            ur = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            fr = new RegExp("^" + r + "*," + r + "*"),
            yi = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            er = new RegExp(r + "|>"),
            or = new RegExp(ni),
            sr = new RegExp("^" + tt + "$"),
            vt = { ID: new RegExp("^#(" + tt + ")"), CLASS: new RegExp("^\\.(" + tt + ")"), TAG: new RegExp("^(" + tt + "|[*])"), ATTR: new RegExp("^" + vi), PSEUDO: new RegExp("^" + ni), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"), bool: new RegExp("^(?:" + gt + ")$", "i"), needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i") },
            hr = /HTML$/i,
            cr = /^(?:input|select|textarea|button)$/i,
            lr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ti = /[+~]/,
            y = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
            p = function(n, t) { var i = "0x" + n.slice(1) - 65536; return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)) },
            pi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            wi = function(n, t) { return t ? "\0" === n ? "ï¿½" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n },
            bi = function() { b() },
            vr = wt(function(n) { return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
        try {
            k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (rt) {
            k = {
                apply: g.length ? function(n, t) { rr.apply(n, ai.call(t)) } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        for (rt in f = u.support = {}, oi = u.isXML = function(n) {
                var i = n.namespaceURI,
                    t = (n.ownerDocument || n).documentElement;
                return !hr.test(i || t && t.nodeName || "HTML")
            }, b = u.setDocument = function(n) {
                var v, u, l = n ? n.ownerDocument || n : c;
                return l != i && 9 === l.nodeType && l.documentElement && (s = (i = l).documentElement, h = !oi(i), c != i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", bi, !1) : u.attachEvent && u.attachEvent("onunload", bi)), f.scope = a(function(n) { return s.appendChild(n).appendChild(i.createElement("div")), "undefined" != typeof n.querySelectorAll && !n.querySelectorAll(":scope fieldset div").length }), f.attributes = a(function(n) { return n.className = "i", !n.getAttribute("className") }), f.getElementsByTagName = a(function(n) { return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length }), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function(n) { return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length }), f.getById ? (t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { return n.getAttribute("id") === t } }, t.find.ID = function(n, t) { if ("undefined" != typeof t.getElementById && h) { var i = t.getElementById(n); return i ? [i] : [] } }) : (t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id"); return i && i.value === t } }, t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var r, u, f, i = t.getElementById(n);
                        if (i) {
                            if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
                            for (f = t.getElementsByName(n), u = 0; i = f[u++];)
                                if ((r = i.getAttributeNode("id")) && r.value === n) return [i]
                        }
                        return []
                    }
                }), t.find.TAG = f.getElementsByTagName ? function(n, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0 } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if ("*" === n) { while (i = u[f++]) 1 === i.nodeType && r.push(i); return r }
                    return u
                }, t.find.CLASS = f.getElementsByClassName && function(n, t) { if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n) }, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                    var t;
                    s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + gt + ")");
                    n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                    (t = i.createElement("input")).setAttribute("name", "");
                    n.appendChild(t);
                    n.querySelectorAll("[name='']").length || o.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")");
                    n.querySelectorAll(":checked").length || o.push(":checked");
                    n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]");
                    n.querySelectorAll("\\\f");
                    o.push("[\\r\\n\\f]")
                }), a(function(n) {
                    n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                    2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                    s.appendChild(n).disabled = !0;
                    2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    o.push(",.*:")
                })), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                    f.disconnectedMatch = ct.call(n, "*");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", ni)
                }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, dt = v ? function(n, t) { if (n === t) return ut = !0, 0; var r = !n.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (n.ownerDocument || n) == (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(n) === r ? n == i || n.ownerDocument == c && et(c, n) ? -1 : t == i || t.ownerDocument == c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1) } : function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (!o || !s) return n == i ? -1 : t == i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    if (o === s) return ki(n, t);
                    for (r = n; r = r.parentNode;) f.unshift(r);
                    for (r = t; r = r.parentNode;) e.unshift(r);
                    while (f[u] === e[u]) u++;
                    return u ? ki(f[u], e[u]) : f[u] == c ? -1 : e[u] == c ? 1 : 0
                }), i
            }, u.matches = function(n, t) { return u(n, null, null, t) }, u.matchesSelector = function(n, t) {
                if (b(n), f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try { var r = ct.call(n, t); if (r || f.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r } catch (n) { lt(t, !0) }
                return 0 < u(t, i, null, [n]).length
            }, u.contains = function(n, t) { return (n.ownerDocument || n) != i && b(n), et(n, t) }, u.attr = function(n, r) {
                (n.ownerDocument || n) != i && b(n);
                var e = t.attrHandle[r.toLowerCase()],
                    u = e && tr.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
                return void 0 !== u ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
            }, u.escape = function(n) { return (n + "").replace(pi, wi) }, u.error = function(n) { throw new Error("Syntax error, unrecognized expression: " + n); }, u.uniqueSort = function(n) {
                var r, u = [],
                    t = 0,
                    i = 0;
                if (ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(dt), ut) { while (r = n[i++]) r === n[i] && (t = u.push(i)); while (t--) n.splice(u[t], 1) }
                return w = null, n
            }, st = u.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) { if (1 === t || 9 === t || 11 === t) { if ("string" == typeof n.textContent) return n.textContent; for (n = n.firstChild; n; n = n.nextSibling) i += st(n) } else if (3 === t || 4 === t) return n.nodeValue } else
                    while (r = n[u++]) i += st(r);
                return i
            }, (t = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: vt,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(n) { return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4) }, CHILD: function(n) { return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n }, PSEUDO: function(n) { var i, t = !n[6] && n[2]; return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && or.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3)) } },
                filter: {
                    TAG: function(n) { var t = n.replace(y, p).toLowerCase(); return "*" === n ? function() { return !0 } : function(n) { return n.nodeName && n.nodeName.toLowerCase() === t } },
                    CLASS: function(n) { var t = hi[n + " "]; return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) { return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "") }) },
                    ATTR: function(n, t, i) { return function(r) { var f = u.attr(r, n); return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(ur, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            f = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) { return !!n.parentNode } : function(t, i, h) {
                            var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling",
                                k = t.parentNode,
                                nt = f && t.nodeName.toLowerCase(),
                                g = !h && !f,
                                l = !1;
                            if (k) {
                                if (s) {
                                    while (b) {
                                        for (c = t; c = c[b];)
                                            if (f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                        w = b = "only" === n && !w && "nextSibling"
                                    }
                                    return !0
                                }
                                if (w = [o ? k.firstChild : k.lastChild], o && g) {
                                    for (l = (a = (p = (d = (y = (c = k)[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2], c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop();)
                                        if (1 === c.nodeType && ++l && c === t) { d[n] = [v, a, l]; break }
                                } else if (g && (l = a = (p = (d = (y = (c = t)[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]), !1 === l)
                                    while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                                        if ((f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]), c === t)) break;
                                return (l -= u) === r || l % r == 0 && 0 <= l / r
                            }
                        }
                    },
                    PSEUDO: function(n, i) { var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n); return r[e] ? r(i) : 1 < r.length ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) { for (var e, u = r(n, i), f = u.length; f--;) n[e = nt(n, u[f])] = !(t[e] = u[f]) }) : function(n) { return r(n, 0, f) }) : r }
                },
                pseudos: {
                    not: l(function(n) {
                        var t = [],
                            r = [],
                            i = kt(n.replace(at, "$1"));
                        return i[e] ? l(function(n, t, r, u) { for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e)) }) : function(n, u, f) { return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop() }
                    }),
                    has: l(function(n) { return function(t) { return 0 < u(n, t).length } }),
                    contains: l(function(n) {
                        return n = n.replace(y, p),
                            function(t) { return -1 < (t.textContent || st(t)).indexOf(n) }
                    }),
                    lang: l(function(n) {
                        return sr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) { var i = n.location && n.location.hash; return i && i.slice(1) === t.id },
                    root: function(n) { return n === s },
                    focus: function(n) { return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex) },
                    enabled: di(!1),
                    disabled: di(!0),
                    checked: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && !!n.checked || "option" === t && !!n.selected },
                    selected: function(n) { return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) { return !t.pseudos.empty(n) },
                    header: function(n) { return lr.test(n.nodeName) },
                    input: function(n) { return cr.test(n.nodeName) },
                    button: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && "button" === n.type || "button" === t },
                    text: function(n) { var t; return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: it(function() { return [0] }),
                    last: it(function(n, t) { return [t - 1] }),
                    eq: it(function(n, t, i) { return [i < 0 ? i + t : i] }),
                    even: it(function(n, t) { for (var i = 0; i < t; i += 2) n.push(i); return n }),
                    odd: it(function(n, t) { for (var i = 1; i < t; i += 2) n.push(i); return n }),
                    lt: it(function(n, t, i) { for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r;) n.push(r); return n }),
                    gt: it(function(n, t, i) { for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r); return n })
                }
            }).pseudos.nth = t.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) t.pseudos[rt] = yr(rt);
        for (rt in { submit: !0, reset: !0 }) t.pseudos[rt] = pr(rt);
        return gi.prototype = t.filters = t.pseudos, t.setFilters = new gi, ft = u.tokenize = function(n, i) { var e, f, s, o, r, h, c, l = ci[n + " "]; if (l) return i ? 0 : l.slice(0); for (r = n, h = [], c = t.preFilter; r;) { for (o in e && !(f = fr.exec(r)) || (f && (r = r.slice(f[0].length) || r), h.push(s = [])), e = !1, (f = yi.exec(r)) && (e = f.shift(), s.push({ value: e, type: f[0].replace(at, " ") }), r = r.slice(e.length)), t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({ value: e, type: o, matches: f }), r = r.slice(e.length)); if (!e) break } return i ? r.length : r ? u.error(n) : ci(n, h).slice(0) }, kt = u.compile = function(n, r) {
            var s, c, a, o, y, p, w = [],
                d = [],
                f = li[n + " "];
            if (!f) {
                for (r || (r = ft(n)), s = r.length; s--;)(f = ei(r[s]))[e] ? w.push(f) : d.push(f);
                (f = li(n, (c = d, o = 0 < (a = w).length, y = 0 < c.length, p = function(n, r, f, e, s) {
                    var l, nt, d, g = 0,
                        p = "0",
                        tt = n && [],
                        w = [],
                        it = ht,
                        rt = n || y && t.find.TAG("*", s),
                        ut = v += null == it ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (s && (ht = r == i || r || s); p !== ft && null != (l = rt[p]); p++) {
                        if (y && l) {
                            for (nt = 0, r || l.ownerDocument == i || (b(l), f = !h); d = c[nt++];)
                                if (d(l, r || i, f)) { e.push(l); break }
                            s && (v = ut)
                        }
                        o && ((l = !d && l) && g--, n && tt.push(l))
                    }
                    if (g += p, o && p !== g) {
                        for (nt = 0; d = a[nt++];) d(tt, w, r, f);
                        if (n) {
                            if (0 < g)
                                while (p--) tt[p] || w[p] || (w[p] = ir.call(e));
                            w = bt(w)
                        }
                        k.apply(e, w);
                        s && !n && 0 < w.length && 1 < g + a.length && u.uniqueSort(e)
                    }
                    return s && (v = ut, ht = it), tt
                }, o ? l(p) : p))).selector = n
            }
            return f
        }, si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = "function" == typeof n && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], 1 === s.length) {
                if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                    if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0])) return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) { if (e = f[o], t.relative[l = e.type]) break; if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ti.test(f[0].type) && ri(i.parentNode) || i))) { if (f.splice(o, 1), !(n = u.length && pt(f))) return k.apply(r, u), r; break } }
            }
            return (c || kt(n, s))(u, i, !h, r, !i || ti.test(n) && ri(i.parentNode) || i), r
        }, f.sortStable = e.split("").sort(dt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function(n) { return 1 & n.compareDocumentPosition(i.createElement("fieldset")) }), a(function(n) { return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href") }) || ii("type|href|height|width", function(n, t, i) { if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), f.attributes && a(function(n) { return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value") }) || ii("value", function(n, t, i) { if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue }), a(function(n) { return null == n.getAttribute("disabled") }) || ii(gt, function(n, t, i) { var r; if (!i) return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null }), u
    }(n);
    i.find = d;
    i.expr = d.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = d.uniqueSort;
    i.text = d.getText;
    i.isXMLDoc = d.isXML;
    i.contains = d.contains;
    i.escapeSelector = d.escape;
    var ft = function(n, t, r) {
            for (var u = [], f = void 0 !== r;
                (n = n[t]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                }
            return u
        },
        dr = function(n, t) { for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n); return i },
        gr = i.expr.match.needsContext;
    wi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) { var u = t[0]; return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) { return 1 === n.nodeType })) };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return 1 < u ? i.uniqueSort(r) : r
        },
        filter: function(n) { return this.pushStack(bi(this, n || [], !1)) },
        not: function(n) { return this.pushStack(bi(this, n || [], !0)) },
        is: function(n) { return !!bi(this, "string" == typeof n && gr.test(n) ? i(n) : n || [], !1).length }
    });
    tu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(n, t, r) {
        var e, o;
        if (!n) return this;
        if (r = r || nu, "string" == typeof n) {
            if (!(e = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : tu.exec(n)) || !e[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (e[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), wi.test(e[1]) && i.isPlainObject(t))
                    for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                return this
            }
            return (o = f.getElementById(e[2])) && (this[0] = o, this.length = 1), this
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    }).prototype = i.fn;
    nu = i(f);
    iu = /^(?:parents|prev(?:Until|All))/;
    ru = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n);
            if (!gr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) { u.push(r); break }
            return this.pushStack(1 < u.length ? i.uniqueSort(u) : u)
        },
        index: function(n) { return n ? "string" == typeof n ? ii.call(i(n), this[0]) : ii.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(n, t) { return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t)))) },
        addBack: function(n) { return this.add(null == n ? this.prevObject : this.prevObject.filter(n)) }
    });
    i.each({ parent: function(n) { var t = n.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(n) { return ft(n, "parentNode") }, parentsUntil: function(n, t, i) { return ft(n, "parentNode", i) }, next: function(n) { return uu(n, "nextSibling") }, prev: function(n) { return uu(n, "previousSibling") }, nextAll: function(n) { return ft(n, "nextSibling") }, prevAll: function(n) { return ft(n, "previousSibling") }, nextUntil: function(n, t, i) { return ft(n, "nextSibling", i) }, prevUntil: function(n, t, i) { return ft(n, "previousSibling", i) }, siblings: function(n) { return dr((n.parentNode || {}).firstChild, n) }, children: function(n) { return dr(n.firstChild) }, contents: function(n) { return null != n.contentDocument && vr(n.contentDocument) ? n.contentDocument : (c(n, "template") && (n = n.content || n), i.merge([], n.childNodes)) } }, function(n, t) { i.fn[n] = function(r, u) { var f = i.map(this, t, r); return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), 1 < this.length && (ru[n] || i.uniqueSort(f), iu.test(n) && f.reverse()), this.pushStack(f) } });
    l = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        var a, h;
        n = "string" == typeof n ? (a = n, h = {}, i.each(a.match(l) || [], function(n, t) { h[t] = !0 }), h) : i.extend({}, n);
        var o, r, v, f, t = [],
            s = [],
            e = -1,
            y = function() {
                for (f = f || n.once, v = o = !0; s.length; e = -1)
                    for (r = s.shift(); ++e < t.length;) !1 === t[e].apply(r[0], r[1]) && n.stopOnFalse && (e = t.length, r = !1);
                n.memory || (r = !1);
                o = !1;
                f && (t = r ? [] : "")
            },
            c = { add: function() { return t && (r && !o && (e = t.length - 1, s.push(r)), function f(r) { i.each(r, function(i, r) { u(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== ut(r) && f(r) }) }(arguments), r && !o && y()), this }, remove: function() { return i.each(arguments, function(n, r) { for (var u; - 1 < (u = i.inArray(r, t, u));) t.splice(u, 1), u <= e && e-- }), this }, has: function(n) { return n ? -1 < i.inArray(n, t) : 0 < t.length }, empty: function() { return t && (t = []), this }, disable: function() { return f = s = [], t = r = "", this }, disabled: function() { return !t }, lock: function() { return f = s = [], r || o || (t = r = ""), this }, locked: function() { return !!f }, fireWith: function(n, t) { return f || (t = [n, (t = t || []).slice ? t.slice() : t], s.push(t), o || y()), this }, fire: function() { return c.fireWith(this, arguments), this }, fired: function() { return !!v } };
        return c
    };
    i.extend({
        Deferred: function(t) {
            var f = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                e = {
                    state: function() { return o },
                    always: function() { return r.done(arguments).fail(arguments), this },
                    "catch": function(n) { return e.then(null, n) },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(f, function(i, f) {
                                var e = u(n[f[4]]) && n[f[4]];
                                r[f[1]](function() {
                                    var n = e && e.apply(this, arguments);
                                    n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, e) {
                        function s(t, r, f, e) {
                            return function() {
                                var h = this,
                                    c = arguments,
                                    l = function() {
                                        var n, i;
                                        if (!(t < o)) {
                                            if ((n = f.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            u(i) ? e ? i.call(n, s(o, r, et, e), s(o, r, fi, e)) : (o++, i.call(n, s(o, r, et, e), s(o, r, fi, e), s(o, r, et, r.notifyWith))) : (f !== et && (h = void 0, c = [n]), (e || r.resolveWith)(h, c))
                                        }
                                    },
                                    a = e ? l : function() {
                                        try { l() } catch (l) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(l, a.stackTrace);
                                            o <= t + 1 && (f !== fi && (h = void 0, c = [l]), r.rejectWith(h, c))
                                        }
                                    };
                                t ? a() : (i.Deferred.getStackHook && (a.stackTrace = i.Deferred.getStackHook()), n.setTimeout(a))
                            }
                        }
                        var o = 0;
                        return i.Deferred(function(n) {
                            f[0][3].add(s(0, n, u(e) ? e : et, n.notifyWith));
                            f[1][3].add(s(0, n, u(t) ? t : et));
                            f[2][3].add(s(0, n, u(r) ? r : fi))
                        }).promise()
                    },
                    promise: function(n) { return null != n ? i.extend(n, e) : e }
                },
                r = {};
            return i.each(f, function(n, t) {
                var i = t[2],
                    u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() { o = u }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() { return r[t[0] + "With"](this === r ? void 0 : this, arguments), this };
                r[t[0] + "With"] = i.fireWith
            }), e.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var e = arguments.length,
                t = e,
                o = Array(t),
                f = k.call(arguments),
                r = i.Deferred(),
                s = function(n) {
                    return function(t) {
                        o[n] = this;
                        f[n] = 1 < arguments.length ? k.call(arguments) : t;
                        --e || r.resolveWith(o, f)
                    }
                };
            if (e <= 1 && (fu(n, r.done(s(t)).resolve, r.reject, !e), "pending" === r.state() || u(f[t] && f[t].then))) return r.then();
            while (t--) fu(f[t], s(t), r.reject);
            return r.promise()
        }
    });
    eu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) { n.console && n.console.warn && t && eu.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i) };
    i.readyException = function(t) { n.setTimeout(function() { throw t; }) };
    ei = i.Deferred();
    i.fn.ready = function(n) { return ei.then(n)["catch"](function(n) { i.readyException(n) }), this };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || ei.resolveWith(f, [i])
        }
    });
    i.ready.then = ei.then;
    "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", oi), n.addEventListener("load", oi));
    var w = function(n, t, r, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = null == r;
            if ("object" === ut(r))
                for (h in e = !0, r) w(n, t, h, r[h], !0, o, s);
            else if (void 0 !== f && (e = !0, u(f) || (s = !0), c && (s ? (t.call(n, f), t = null) : (c = t, t = function(n, t, r) { return c.call(i(n), r) })), t))
                for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
            return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
        },
        se = /^-ms-/,
        he = /-([a-z])/g;
    ot = function(n) { return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType };
    bt.uid = 1;
    bt.prototype = {
        cache: function(n) { var t = n[this.expando]; return t || (t = {}, ot(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, { value: t, configurable: !0 }))), t },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if ("string" == typeof t) u[y(t)] = i;
            else
                for (r in t) u[y(r)] = t[r];
            return u
        },
        get: function(n, t) { return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)] },
        access: function(n, t, i) { return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t) },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t)) in r ? [t] : t.match(l) || []).length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function(n) { var t = n[this.expando]; return void 0 !== t && !i.isEmptyObject(t) }
    };
    var r = new bt,
        o = new bt,
        le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ae = /[A-Z]/g;
    i.extend({ hasData: function(n) { return o.hasData(n) || r.hasData(n) }, data: function(n, t, i) { return o.access(n, t, i) }, removeData: function(n, t) { o.remove(n, t) }, _data: function(n, t, i) { return r.access(n, t, i) }, _removeData: function(n, t) { r.remove(n, t) } });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0],
                s = i && i.attributes;
            if (void 0 === n) {
                if (this.length && (e = o.get(i), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = s.length; f--;) s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)), ou(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() { o.set(this, n) }) : w(this, function(t) {
                var r;
                if (i && void 0 === t) return void 0 !== (r = o.get(i, n)) ? r : void 0 !== (r = ou(i, n)) ? r : void 0;
                this.each(function() { o.set(this, n, t) })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(n) { return this.each(function() { o.remove(this, n) }) }
    });
    i.extend({
        queue: function(n, t, u) { var f; if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || [] },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t);
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, function() { i.dequeue(n, t) }, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) { var u = t + "queueHooks"; return r.get(n, u) || r.access(n, u, { empty: i.Callbacks("once memory").add(function() { r.remove(n, [t + "queue", u]) }) }) }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) { return this.each(function() { i.dequeue(this, n) }) },
        clearQueue: function(n) { return this.queue(n || "fx", []) },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {--e || o.resolveWith(f, [f]) };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)(u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var su = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kt = new RegExp("^(?:([+-])=|)(" + su + ")([a-z%]*)$", "i"),
        b = ["Top", "Right", "Bottom", "Left"],
        g = f.documentElement,
        st = function(n) { return i.contains(n.ownerDocument, n) },
        ve = { composed: !0 };
    g.getRootNode && (st = function(n) { return i.contains(n.ownerDocument, n) || n.getRootNode(ve) === n.ownerDocument });
    dt = function(n, t) { return "none" === (n = t || n).style.display || "" === n.style.display && st(n) && "none" === i.css(n, "display") };
    ki = {};
    i.fn.extend({ show: function() { return ht(this, !0) }, hide: function() { return ht(this) }, toggle: function(n) { return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() { dt(this) ? i(this).show() : i(this).hide() }) } });
    var nt, si, gt = /^(?:checkbox|radio)$/i,
        cu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        lu = /^$|^module$|\/(?:java|ecma)script/i;
    nt = f.createDocumentFragment().appendChild(f.createElement("div"));
    (si = f.createElement("input")).setAttribute("type", "radio");
    si.setAttribute("checked", "checked");
    si.setAttribute("name", "t");
    nt.appendChild(si);
    e.checkClone = nt.cloneNode(!0).cloneNode(!0).lastChild.checked;
    nt.innerHTML = "<textarea>x<\/textarea>";
    e.noCloneChecked = !!nt.cloneNode(!0).lastChild.defaultValue;
    nt.innerHTML = "<option><\/option>";
    e.option = !!nt.lastChild;
    h = { thead: [1, "<table>", "<\/table>"], col: [2, "<table><colgroup>", "<\/colgroup><\/table>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"], _default: [0, "", ""] };
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    e.option || (h.optgroup = h.option = [1, "<select multiple='multiple'>", "<\/select>"]);
    au = /<|&#?\w+;/;
    var ye = /^key/,
        pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        yu = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var p, a, k, v, w, h, s, c, o, b, d, y = r.get(n);
            if (ot(n))
                for (u.handler && (u = (p = u).handler, e = p.selector), e && i.find.matchesSelector(g, e), u.guid || (u.guid = i.guid++), (v = y.events) || (v = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function(t) { if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments) }), w = (t = (t || "").match(l) || [""]).length; w--;) o = d = (k = yu.exec(t[w]) || [])[1], b = (k[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({ type: o, origType: d, data: f, handler: u, guid: u.guid, selector: e, needsContext: e && i.expr.match.needsContext.test(e), namespace: b.join(".") }, p), (c = v[o]) || ((c = v[o] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(n, f, b, a) || n.addEventListener && n.addEventListener(o, a)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, v, p, s, h, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (p = (t = (t || "").match(l) || [""]).length; p--;)
                    if (o = d = (c = yu.exec(t[p]) || [])[1], b = (c[2] || "").split(".").sort(), o) {
                        for (h = i.event.special[o] || {}, a = v[o = (f ? h.delegateType : h.bindType) || o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, h.remove && h.remove.call(n, s));
                        k && !a.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle), delete v[o])
                    } else
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var u, h, c, e, f, l, s = new Array(arguments.length),
                t = i.event.fix(n),
                a = (r.get(this, "events") || Object.create(null))[t.type] || [],
                o = i.event.special[t.type] || {};
            for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, h = 0;
                        (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, h, u, e, o, c = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                        for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length), o[u] && e.push(h);
                        e.length && c.push({ elem: r, handlers: e })
                    }
            return r = this, s < t.length && c.push({ elem: r, handlers: t.slice(s) }), c
        },
        addProp: function(n, t) { Object.defineProperty(i.Event.prototype, n, { enumerable: !0, configurable: !0, get: u(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[n] }, set: function(t) { Object.defineProperty(this, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
        fix: function(n) { return n[i.expando] ? n : new i.Event(n) },
        special: { load: { noBubble: !0 }, click: { setup: function(n) { var t = this || n; return gt.test(t.type) && t.click && c(t, "input") && hi(t, "click", ct), !1 }, trigger: function(n) { var t = this || n; return gt.test(t.type) && t.click && c(t, "input") && hi(t, "click"), !0 }, _default: function(n) { var t = n.target; return gt.test(t.type) && t.click && c(t, "input") && r.get(t, "click") || c(t, "a") } }, beforeunload: { postDispatch: function(n) { void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result) } } }
    };
    i.removeEvent = function(n, t, i) { n.removeEventListener && n.removeEventListener(t, i) };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ct : lt, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: lt,
        isPropagationStopped: lt,
        isImmediatePropagationStopped: lt,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ct;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ct;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ct;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(n) { var t = n.button; return null == n.which && ye.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && pe.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which } }, i.event.addProp);
    i.each({ focus: "focusin", blur: "focusout" }, function(n, t) { i.event.special[n] = { setup: function() { return hi(this, n, we), !1 }, trigger: function() { return hi(this, n), !0 }, delegateType: t } });
    i.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, r = n.relatedTarget,
                    f = n.handleObj;
                return r && (r === this || i.contains(this, r)) || (n.type = f.origType, u = f.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({ on: function(n, t, i, r) { return gi(this, n, t, i, r) }, one: function(n, t, i, r) { return gi(this, n, t, i, r, 1) }, off: function(n, t, r) { var u, f; if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this; if ("object" == typeof n) { for (f in n) this.off(f, t, n[f]); return this } return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = lt), this.each(function() { i.event.remove(this, n, r, t) }) } });
    var be = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) { return n },
        clone: function(n, t, r) {
            var u, c, o, f, l, a, v, h = n.cloneNode(!0),
                y = st(n);
            if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++) l = o[u], a = f[u], void 0, "input" === (v = a.nodeName.toLowerCase()) && gt.test(l.type) ? a.checked = l.checked : "input" !== v && "textarea" !== v || (a.defaultValue = l.defaultValue);
            if (t)
                if (r)
                    for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++) wu(o[u], f[u]);
                else wu(n, h);
            return 0 < (f = s(h, "script")).length && di(f, !y && s(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (ot(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[o.expando] && (t[o.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function(n) { return bu(this, n, !0) },
        remove: function(n) { return bu(this, n) },
        text: function(n) { return w(this, function(n) { return void 0 === n ? i.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n) }) }, null, n, arguments.length) },
        append: function() { return at(this, arguments, function(n) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pu(this, n).appendChild(n) }) },
        prepend: function() {
            return at(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() { return at(this, arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this) }) },
        after: function() { return at(this, arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this.nextSibling) }) },
        empty: function() { for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(s(n, !1)), n.textContent = ""); return this },
        clone: function(n, t) { return n = null != n && n, t = null == t ? n : t, this.map(function() { return i.clone(this, n, t) }) },
        html: function(n) {
            return w(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof n && !be.test(n) && !h[(cu.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (n) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return at(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(s(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(n, t) { i.fn[n] = function(n) { for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), yi.apply(f, u.get()); return this.pushStack(f) } });
    var nr = new RegExp("^(" + su + ")(?!px)[a-z%]+$", "i"),
        ci = function(t) { var i = t.ownerDocument.defaultView; return i && i.opener || (i = n), i.getComputedStyle(t) },
        ku = function(n, t, i) { var u, r, f = {}; for (r in t) f[r] = n.style[r], n.style[r] = t[r]; for (r in u = i.call(n), t) n.style[r] = f[r]; return u },
        to = new RegExp(b.join("|"), "i");
    ! function() {
        function r() {
            if (t) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                g.appendChild(s).appendChild(t);
                var i = n.getComputedStyle(t);
                h = "1%" !== i.top;
                v = 12 === u(i.marginLeft);
                t.style.right = "60%";
                a = 36 === u(i.right);
                c = 36 === u(i.width);
                t.style.position = "absolute";
                l = 12 === u(t.offsetWidth / 3);
                g.removeChild(s);
                t = null
            }
        }

        function u(n) { return Math.round(parseFloat(n)) }
        var h, c, l, a, o, v, s = f.createElement("div"),
            t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === t.style.backgroundClip, i.extend(e, { boxSizingReliable: function() { return r(), c }, pixelBoxStyles: function() { return r(), a }, pixelPosition: function() { return r(), h }, reliableMarginLeft: function() { return r(), v }, scrollboxSize: function() { return r(), l }, reliableTrDimensions: function() { var t, i, r, u; return null == o && (t = f.createElement("table"), i = f.createElement("tr"), r = f.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", i.style.height = "1px", r.style.height = "9px", g.appendChild(t).appendChild(i).appendChild(r), u = n.getComputedStyle(i), o = 3 < parseInt(u.height), g.removeChild(t)), o } }))
    }();
    var gu = ["Webkit", "Moz", "ms"],
        nf = f.createElement("div").style,
        tf = {};
    var io = /^(none|table(?!-c[ea]).+)/,
        rf = /^--/,
        ro = { position: "absolute", visibility: "hidden", display: "block" },
        uf = { letterSpacing: "0", fontWeight: "400" };
    i.extend({
        cssHooks: { opacity: { get: function(n, t) { if (t) { var i = ni(n, "opacity"); return "" === i ? "1" : i } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var f, h, o, c = y(t),
                    l = rf.test(t),
                    s = n.style;
                if (l || (t = tr(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r) return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
                "string" == (h = typeof r) && (f = kt.exec(r)) && f[1] && (r = hu(n, t, f), h = "number");
                null != r && r == r && ("number" !== h || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px")), e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
            }
        },
        css: function(n, t, r, u) { var f, e, o, s = y(t); return rf.test(t) || (t = tr(s)), (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = ni(n, t, u)), "normal" === f && t in uf && (f = uf[t]), "" === r || r ? (e = parseFloat(f), !0 === r || isFinite(e) ? e || 0 : f) : f }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) { if (r) return !io.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? ef(n, t, u) : ku(n, ro, function() { return ef(n, t, u) }) },
            set: function(n, r, u) {
                var s, f = ci(n),
                    h = !e.scrollboxSize() && "absolute" === f.position,
                    c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f),
                    o = u ? ir(n, t, u, c, f) : 0;
                return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - ir(n, t, "border", !1, f) - .5)), o && (s = kt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r, r = i.css(n, t)), ff(0, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = du(e.reliableMarginLeft, function(n, t) { if (t) return (parseFloat(ni(n, "marginLeft")) || n.getBoundingClientRect().left - ku(n, { marginLeft: 0 }, function() { return n.getBoundingClientRect().left })) + "px" });
    i.each({ margin: "", padding: "", border: "Width" }, function(n, t) { i.cssHooks[n + t] = { expand: function(i) { for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0]; return f } }; "margin" !== n && (i.cssHooks[n + t].set = ff) });
    i.fn.extend({
        css: function(n, t) {
            return w(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (Array.isArray(t)) { for (f = ci(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f); return o }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, 1 < arguments.length)
        }
    });
    ((i.Tween = a).prototype = {
        constructor: a,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() { var n = a.propHooks[this.prop]; return n && n.get ? n.get(this) : a.propHooks._default.get(this) },
        run: function(n) { var t, r = a.propHooks[this.prop]; return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : a.propHooks._default.set(this), this }
    }).init.prototype = a.prototype;
    (a.propHooks = { _default: { get: function(n) { var t; return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0 }, set: function(n) { i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[tr(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit) } } }).scrollTop = a.propHooks.scrollLeft = { set: function(n) { n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now) } };
    i.easing = { linear: function(n) { return n }, swing: function(n) { return .5 - Math.cos(n * Math.PI) / 2 }, _default: "swing" };
    i.fx = a.prototype.init;
    i.fx.step = {};
    sf = /^(?:toggle|show|hide)$/;
    hf = /queueHooks$/;
    i.Animation = i.extend(v, {
        tweeners: { "*": [function(n, t) { var i = this.createTween(n, t); return hu(i.elem, n, kt.exec(t), i), i }] },
        tweener: function(n, t) { u(n) ? (t = n, n = ["*"]) : n = n.match(l); for (var i, r = 0, f = n.length; r < f; r++) i = n[r], v.tweeners[i] = v.tweeners[i] || [], v.tweeners[i].unshift(t) },
        prefilters: [function(n, t, u) {
            var f, y, w, c, b, h, o, l, k = "width" in t || "height" in t,
                v = this,
                p = {},
                s = n.style,
                a = n.nodeType && dt(n),
                e = r.get(n, "fxshow");
            for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() { c.unqueued || b() }), c.unqueued++, v.always(function() {
                    v.always(function() {
                        c.unqueued--;
                        i.queue(n, "fx").length || c.empty.fire()
                    })
                })), t)
                if (y = t[f], sf.test(y)) {
                    if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                        if ("show" !== y || !e || void 0 === e[f]) continue;
                        a = !0
                    }
                    p[f] = e && e[f] || i.style(n, f)
                }
            if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
                for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY], null == (o = e && e.display) && (o = r.get(n, "display")), "none" === (l = i.css(n, "display")) && (o ? l = o : (ht([n], !0), o = n.style.display || o, l = i.css(n, "display"), ht([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() { s.display = o }), null == o && (l = s.display, o = "none" === l ? "" : l)), s.display = "inline-block")), u.overflow && (s.overflow = "hidden", v.always(function() {
                        s.overflow = u.overflow[0];
                        s.overflowX = u.overflow[1];
                        s.overflowY = u.overflow[2]
                    })), h = !1, p) h || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", { display: o }), w && (e.hidden = !a), a && ht([n], !0), v.done(function() { for (f in a || ht([n]), r.remove(n, "fxshow"), p) i.style(n, f, p[f]) })), h = lf(a ? e[f] : 0, f, v), f in e || (e[f] = h.start, a && (h.end = h.start, h.start = 0))
        }],
        prefilter: function(n, t) { t ? v.prefilters.unshift(n) : v.prefilters.push(n) }
    });
    i.speed = function(n, t, r) {
        var f = n && "object" == typeof n ? i.extend({}, n) : { complete: r || !r && t || u(n) && n, duration: n, easing: r && t || t && !u(t) && t };
        return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), null != f.queue && !0 !== f.queue || (f.queue = "fx"), f.old = f.complete, f.complete = function() {
            u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }, f
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) { return this.filter(dt).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r) },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = v(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t, t = n, n = void 0), t && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && hf.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return !1 !== n && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) { return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ai(t, !0), n, i, u) }
    });
    i.each({ slideDown: ai("show"), slideUp: ai("hide"), slideToggle: ai("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(n, t) { i.fn[n] = function(n, i, r) { return this.animate(t, n, i, r) } });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (vt = Date.now(); n < t.length; n++)(r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        vt = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() { li || (li = !0, rr()) };
    i.fx.stop = function() { li = null };
    i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    i.fn.delay = function(t, r) {
        return t = i.fx && i.fx.speeds[t] || t, r = r || "fx", this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() { n.clearTimeout(u) }
        })
    };
    yt = f.createElement("input");
    of = f.createElement("select").appendChild(f.createElement("option"));
    yt.type = "checkbox";
    e.checkOn = "" !== yt.value;
    e.optSelected = of.selected;
    (yt = f.createElement("input")).value = "t";
    yt.type = "radio";
    e.radioValue = "t" === yt.value;
    pt = i.expr.attrHandle;
    i.fn.extend({ attr: function(n, t) { return w(this, i.attr, n, t, 1 < arguments.length) }, removeAttr: function(n) { return this.each(function() { i.removeAttr(this, n) }) } });
    i.extend({
        attr: function(n, t, r) { var f, u, e = n.nodeType; if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? af : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : u && "get" in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f) },
        attrHooks: { type: { set: function(n, t) { if (!e.radioValue && "radio" === t && c(n, "input")) { var i = n.value; return n.setAttribute("type", t), i && (n.value = i), t } } } },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(l);
            if (r && 1 === n.nodeType)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    af = { set: function(n, t, r) { return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r } };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = pt[t] || i.find.attr;
        pt[t] = function(n, t, i) { var f, e, u = t.toLowerCase(); return i || (e = pt[u], pt[u] = f, f = null != r(n, t, i) ? u : null, pt[u] = e), f }
    });
    vf = /^(?:input|select|textarea|button)$/i;
    yf = /^(?:a|area)$/i;
    i.fn.extend({ prop: function(n, t) { return w(this, i.prop, n, t, 1 < arguments.length) }, removeProp: function(n) { return this.each(function() { delete this[i.propFix[n] || n] }) } });
    i.extend({ prop: function(n, t, r) { var f, u, e = n.nodeType; if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t] }, propHooks: { tabIndex: { get: function(n) { var t = i.find.attr(n, "tabindex"); return t ? parseInt(t, 10) : vf.test(n.nodeName) || yf.test(n.nodeName) && n.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } });
    e.optSelected || (i.propHooks.selected = {
        get: function(n) { var t = n.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { i.propFix[this.toLowerCase()] = this });
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) { i(this).addClass(n.call(this, t, it(this))) });
            if ((o = ur(n)).length)
                while (t = this[c++])
                    if (f = it(t), r = 1 === t.nodeType && " " + tt(f) + " ") {
                        for (s = 0; e = o[s++];) r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                        f !== (h = tt(r)) && t.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function(n) {
            var o, r, t, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) { i(this).removeClass(n.call(this, t, it(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((o = ur(n)).length)
                while (r = this[c++])
                    if (f = it(r), t = 1 === r.nodeType && " " + tt(f) + " ") {
                        for (s = 0; e = o[s++];)
                            while (-1 < t.indexOf(" " + e + " ")) t = t.replace(" " + e + " ", " ");
                        f !== (h = tt(t)) && r.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var f = typeof n,
                e = "string" === f || Array.isArray(n);
            return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) { i(this).toggleClass(n.call(this, r, it(this), t), t) }) : this.each(function() {
                var t, o, u, s;
                if (e)
                    for (o = 0, u = i(this), s = ur(n); t = s[o++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else void 0 !== n && "boolean" !== f || ((t = it(this)) && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (1 === t.nodeType && -1 < (" " + tt(it(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    pf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, e, f = this[0];
            return arguments.length ? (e = u(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) { return null == n ? "" : n + "" })), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof(r = f.value) ? r.replace(pf, "") : null == r ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: { get: function(n) { var t = i.find.attr(n, "value"); return null != t ? t : tt(i.text(n)) } },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) { for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--;)((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0); return r || (n.selectedIndex = -1), e }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = { set: function(n, t) { if (Array.isArray(t)) return n.checked = -1 < i.inArray(i(n).val(), t) } };
        e.checkOn || (i.valHooks[this].get = function(n) { return null === n.getAttribute("value") ? "on" : n.value })
    });
    e.focusin = "onfocusin" in n;
    fr = /^(?:focusinfocus|focusoutblur)$/;
    er = function(n) { n.stopPropagation() };
    i.extend(i.event, {
        trigger: function(t, e, o, s) {
            var k, c, l, d, v, y, a, p, w = [o || f],
                h = ui.call(t, "type") ? t.type : t,
                b = ui.call(t, "namespace") ? t.namespace.split(".") : [];
            if (c = p = l = o = o || f, 3 !== o.nodeType && 8 !== o.nodeType && !fr.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(), b.sort()), v = h.indexOf(":") < 0 && "on" + h, (t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), e = null == e ? [t] : i.makeArray(e, [t]), a = i.event.special[h] || {}, s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
                if (!s && !a.noBubble && !rt(o)) {
                    for (d = a.delegateType || h, fr.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), l = c;
                    l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0;
                    (c = w[k++]) && !t.isPropagationStopped();) p = c, t.type = 1 < k ? d : a.bindType || h, (y = (r.get(c, "events") || Object.create(null))[t.type] && r.get(c, "handle")) && y.apply(c, e), (y = v && c[v]) && y.apply && ot(c) && (t.result = y.apply(c, e), !1 === t.result && t.preventDefault());
                return t.type = h, s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !ot(o) || v && u(o[h]) && !rt(o) && ((l = o[v]) && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, er), o[h](), t.isPropagationStopped() && p.removeEventListener(h, er), i.event.triggered = void 0, l && (o[v] = l)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, { type: n, isSimulated: !0 });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({ trigger: function(n, t) { return this.each(function() { i.event.trigger(n, t, this) }) }, triggerHandler: function(n, t) { var r = this[0]; if (r) return i.event.trigger(n, t, r, !0) } });
    e.focusin || i.each({ focus: "focusin", blur: "focusout" }, function(n, t) {
        var u = function(n) { i.event.simulate(t, n.target, i.event.fix(n)) };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var ti = n.location,
        wf = { guid: Date.now() },
        or = /\?/;
    i.parseXML = function(t) { var r; if (!t || "string" != typeof t) return null; try { r = (new n.DOMParser).parseFromString(t, "text/xml") } catch (t) { r = void 0 } return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r };
    var uo = /\[\]$/,
        bf = /\r?\n/g,
        fo = /^(?:submit|button|image|reset|file)$/i,
        eo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, f = [],
            e = function(n, t) {
                var i = u(t) ? t() : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == n) return "";
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() { e(this.name, this.value) });
        else
            for (r in n) sr(r, n[r], t, e);
        return f.join("&")
    };
    i.fn.extend({ serialize: function() { return i.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var n = i.prop(this, "elements"); return n ? i.makeArray(n) : this }).filter(function() { var n = this.type; return this.name && !i(this).is(":disabled") && eo.test(this.nodeName) && !fo.test(n) && (this.checked || !gt.test(n)) }).map(function(n, t) { var r = i(this).val(); return null == r ? null : Array.isArray(r) ? i.map(r, function(n) { return { name: t.name, value: n.replace(bf, "\r\n") } }) : { name: t.name, value: r.replace(bf, "\r\n") } }).get() } });
    var oo = /%20/g,
        so = /#.*$/,
        ho = /([?&])_=[^&]*/,
        co = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        lo = /^(?:GET|HEAD)$/,
        ao = /^\/\//,
        kf = {},
        hr = {},
        df = "*/".concat("*"),
        cr = f.createElement("a");
    return cr.href = ti.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: ti.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ti.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": df, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": i.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(n, t) { return t ? lr(lr(n, i.ajaxSettings), t) : lr(i.ajaxSettings, n) },
        ajaxPrefilter: gf(kf),
        ajaxTransport: gf(hr),
        ajax: function(t, r) {
            function b(t, r, f, c) {
                var v, rt, b, p, g, l = r;
                s || (s = !0, d && n.clearTimeout(d), a = void 0, k = c || "", e.readyState = 0 < t ? 4 : 0, v = 200 <= t && t < 300 || 304 === t, f && (p = function(n, t, i) {
                    for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                        "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
                    if (e)
                        for (u in s)
                            if (s[u] && s[u].test(e)) { r.unshift(u); break }
                    if (r[0] in i) f = r[0];
                    else {
                        for (u in i) {
                            if (!r[0] || n.converters[u + " " + r[0]]) { f = u; break }
                            o || (o = u)
                        }
                        f = f || o
                    }
                    if (f) return f !== r[0] && r.unshift(f), i[f]
                }(u, e, f)), !v && -1 < i.inArray("script", u.dataTypes) && (u.converters["text script"] = function() {}), p = function(n, t, i, r) {
                    var h, u, f, s, e, o = {},
                        c = n.dataTypes.slice();
                    if (c[1])
                        for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
                    for (u = c.shift(); u;)
                        if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                            if ("*" === u) u = e;
                            else if ("*" !== e && e !== u) {
                        if (!(f = o[e + " " + u] || o["* " + u]))
                            for (h in o)
                                if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {!0 === f ? f = o[h] : !0 !== o[h] && (u = s[0], c.unshift(s[1])); break }
                        if (!0 !== f)
                            if (f && n.throws) t = f(t);
                            else try { t = f(t) } catch (n) { return { state: "parsererror", error: f ? n : "No conversion from " + e + " to " + u } }
                    }
                    return { state: "success", data: t }
                }(u, p, e, v), v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)), 204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, v = !(b = p.error))) : (b = l, !t && l || (l = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || l) + "", v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]), e.statusCode(w), w = void 0, y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]), it.fireWith(h, [e, l]), y && (nt.trigger("ajaxComplete", [e, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t, t = void 0);
            r = r || {};
            var a, o, k, v, d, c, s, y, g, p, u = i.ajaxSetup({}, r),
                h = u.context || u,
                nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = u.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!v)
                                for (v = {}; t = co.exec(k);) v[t[1].toLowerCase() + " "] = (v[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = v[n.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() { return s ? k : null },
                    setRequestHeader: function(n, t) { return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this },
                    overrideMimeType: function(n) { return null == s && (u.mimeType = n), this },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) { var t = n || ft; return a && a.abort(t), b(0, t), this }
                };
            if (tt.promise(e), u.url = ((t || u.url || ti.href) + "").replace(ao, ti.protocol + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""], null == u.crossDomain) {
                c = f.createElement("a");
                try {
                    c.href = u.url;
                    c.href = c.href;
                    u.crossDomain = cr.protocol + "//" + cr.host != c.protocol + "//" + c.host
                } catch (t) { u.crossDomain = !0 }
            }
            if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), ne(kf, u, r, e), s) return e;
            for (g in (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !lo.test(u.type), o = u.url.replace(so, ""), u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(oo, "+")) : (p = u.url.slice(o.length), u.data && (u.processData || "string" == typeof u.data) && (o += (or.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (o = o.replace(ho, "$1"), p = (or.test(o) ? "&" : "?") + "_=" + wf.guid++ + p), u.url = o + p), u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType), e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + df + "; q=0.01" : "") : u.accepts["*"]), u.headers) e.setRequestHeader(g, u.headers[g]);
            if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s)) return e.abort();
            if (ft = "abort", it.add(u.complete), e.done(u.success), e.fail(u.error), a = ne(hr, u, r, e)) {
                if (e.readyState = 1, y && nt.trigger("ajaxSend", [e, u]), s) return e;
                u.async && 0 < u.timeout && (d = n.setTimeout(function() { e.abort("timeout") }, u.timeout));
                try {
                    s = !1;
                    a.send(rt, b)
                } catch (t) {
                    if (s) throw t;
                    b(-1, t)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) { return i.get(n, t, r, "json") },
        getScript: function(n, t) { return i.get(n, void 0, t, "script") }
    }), i.each(["get", "post"], function(n, t) { i[t] = function(n, r, f, e) { return u(r) && (e = e || f, f = r, r = void 0), i.ajax(i.extend({ url: n, type: t, dataType: e, data: r, success: f }, i.isPlainObject(n) && n)) } }), i.ajaxPrefilter(function(n) { for (var t in n.headers) "content-type" === t.toLowerCase() && (n.contentType = n.headers[t] || "") }), i._evalUrl = function(n, t, r) { return i.ajax({ url: n, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(n) { i.globalEval(n, t, r) } }) }, i.fn.extend({
        wrapAll: function(n) { var t; return this[0] && (u(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var n = this; n.firstElementChild;) n = n.firstElementChild; return n }).append(this)), this },
        wrapInner: function(n) {
            return u(n) ? this.each(function(t) { i(this).wrapInner(n.call(this, t)) }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) { var t = u(n); return this.each(function(r) { i(this).wrapAll(t ? n.call(this, r) : n) }) },
        unwrap: function(n) { return this.parent(n).not("body").each(function() { i(this).replaceWith(this.childNodes) }), this }
    }), i.expr.pseudos.hidden = function(n) { return !i.expr.pseudos.visible(n) }, i.expr.pseudos.visible = function(n) { return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length) }, i.ajaxSettings.xhr = function() { try { return new n.XMLHttpRequest } catch (t) {} }, te = { 0: 200, 1223: 204 }, wt = i.ajaxSettings.xhr(), e.cors = !!wt && "withCredentials" in wt, e.ajax = wt = !!wt, i.ajaxTransport(function(t) {
        var i, r;
        if (e.cors || wt && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType), t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"), u) e.setRequestHeader(o, u[o]);
                i = function(n) { return function() { i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(te[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? { binary: e.response } : { text: e.responseText }, e.getAllResponseHeaders())) } };
                e.onload = i();
                r = e.onerror = e.ontimeout = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() { 4 === e.readyState && n.setTimeout(function() { i && r() }) };
                i = i("abort");
                try { e.send(t.hasContent && t.data || null) } catch (u) { if (i) throw u; }
            },
            abort: function() { i && i() }
        }
    }), i.ajaxPrefilter(function(n) { n.crossDomain && (n.contents.script = !1) }), i.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(n) { return i.globalEval(n), n } } }), i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        var r, t;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(u, e) {
                r = i("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", t = function(n) {
                    r.remove();
                    t = null;
                    n && e("error" === n.type ? 404 : 200, n.type)
                });
                f.head.appendChild(r[0])
            },
            abort: function() { t && t() }
        }
    }), ar = [], vi = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var n = ar.pop() || i.expando + "_" + wf.guid++; return this[n] = !0, n } }), i.ajaxPrefilter("json jsonp", function(t, r, f) {
        var e, o, s, h = !1 !== t.jsonp && (vi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && vi.test(t.data) && "data");
        if (h || "jsonp" === t.dataTypes[0]) return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(vi, "$1" + e) : !1 !== t.jsonp && (t.url += (or.test(t.url) ? "&" : "?") + t.jsonp + "=" + e), t.converters["script json"] = function() { return s || i.error(e + " was not called"), s[0] }, t.dataTypes[0] = "json", o = n[e], n[e] = function() { s = arguments }, f.always(function() {
            void 0 === o ? i(n).removeProp(e) : n[e] = o;
            t[e] && (t.jsonpCallback = r.jsonpCallback, ar.push(e));
            s && u(o) && o(s[0]);
            s = o = void 0
        }), "script"
    }), e.createHTMLDocument = ((ie = f.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>", 2 === ie.childNodes.length), i.parseHTML = function(n, t, r) { return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t, t = !1), t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href, t.head.appendChild(s)) : t = f), u = !r && [], (o = wi.exec(n)) ? [t.createElement(o[1])] : (o = vu([n], t, u), u && u.length && i(u).remove(), i.merge([], o.childNodes))); var s, o, u }, i.fn.load = function(n, t, r) {
        var f, s, h, e = this,
            o = n.indexOf(" ");
        return -1 < o && (f = tt(n.slice(o)), n = n.slice(0, o)), u(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < e.length && i.ajax({ url: n, type: s || "GET", dataType: "html", data: t }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).always(r && function(n, t) { e.each(function() { r.apply(this, h || [n.responseText, t, n]) }) }), this
    }, i.expr.pseudos.animated = function(n) { return i.grep(i.timers, function(t) { return n === t.elem }).length }, i.offset = {
        setOffset: function(n, t, r) {
            var v, o, s, h, e, c, l = i.css(n, "position"),
                a = i(n),
                f = {};
            "static" === l && (n.style.position = "relative");
            e = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top, o = v.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, e)));
            null != t.top && (f.top = t.top - e.top + h);
            null != t.left && (f.left = t.left - e.left + o);
            "using" in t ? t.using.call(n, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), a.css(f))
        }
    }, i.fn.extend({
        offset: function(n) { if (arguments.length) return void 0 === n ? this : this.each(function(t) { i.offset.setOffset(this, n, t) }); var r, u, t = this[0]; if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, { top: r.top + u.pageYOffset, left: r.left + u.pageXOffset }) : { top: 0, left: 0 } },
        position: function() {
            if (this[0]) {
                var n, r, u, t = this[0],
                    f = { top: 0, left: 0 };
                if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
                else {
                    for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position");) n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0), f.left += i.css(n, "borderLeftWidth", !0))
                }
                return { top: r.top - f.top - i.css(t, "marginTop", !0), left: r.left - f.left - i.css(t, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent; return n || g }) }
    }), i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return w(this, function(n, i, u) {
                var f;
                if (rt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView), void 0 === u) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) { i.cssHooks[t] = du(e.pixelPosition, function(n, r) { if (r) return r = ni(n, t), nr.test(r) ? i(n).position()[t] + "px" : r }) }), i.each({ Height: "height", Width: "width" }, function(n, t) {
        i.each({ padding: "inner" + n, content: t, "": "outer" + n }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (!0 === f || !0 === e ? "margin" : "border");
                return w(this, function(t, r, f) { var e; return rt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s) }, t, o ? f : void 0, o)
            }
        })
    }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) { i.fn[t] = function(n) { return this.on(t, n) } }), i.fn.extend({ bind: function(n, t, i) { return this.on(n, null, t, i) }, unbind: function(n, t) { return this.off(n, null, t) }, delegate: function(n, t, i, r) { return this.on(t, n, i, r) }, undelegate: function(n, t, i) { return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i) }, hover: function(n, t) { return this.mouseenter(n).mouseleave(t || n) } }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) { i.fn[t] = function(n, i) { return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t) } }), re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, i.proxy = function(n, t) { var r, f, e; if ("string" == typeof t && (r = n[t], t = n, n = r), u(n)) return f = k.call(arguments, 2), (e = function() { return n.apply(t || this, f.concat(k.call(arguments))) }).guid = n.guid = n.guid || i.guid++, e }, i.holdReady = function(n) { n ? i.readyWait++ : i.ready(!0) }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = c, i.isFunction = u, i.isWindow = rt, i.camelCase = y, i.type = ut, i.now = Date.now, i.isNumeric = function(n) { var t = i.type(n); return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n)) }, i.trim = function(n) { return null == n ? "" : (n + "").replace(re, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return i }), ue = n.jQuery, fe = n.$, i.noConflict = function(t) { return n.$ === i && (n.$ = fe), t && n.jQuery === i && (n.jQuery = ue), i }, "undefined" == typeof t && (n.jQuery = n.$ = i), i
});
/*! lazysizes - v5.3.0 */
! function(n) {
    var t = function(n, t, i) {
        "use strict";
        var e, r;
        if (function() {
                var t, i = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", fastLoadedClass: "ls-is-cached", iframeLoadMode: 0, srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 };
                r = n.lazySizesConfig || n.lazysizesConfig || {};
                for (t in i) t in r || (r[t] = i[t])
            }(), !t || !t.getElementsByClassName) return { init: function() {}, cfg: r, noSupport: !0 };
        var s = t.documentElement,
            ot = n.HTMLPictureElement,
            h = "addEventListener",
            u = "getAttribute",
            o = n[h].bind(n),
            f = n.setTimeout,
            it = n.requestAnimationFrame || f,
            k = n.requestIdleCallback,
            rt = /^picture$/i,
            st = ["load", "error", "lazyincluded", "_lazyloaded"],
            p = {},
            ht = Array.prototype.forEach,
            c = function(n, t) { return p[t] || (p[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), p[t].test(n[u]("class") || "") && p[t] },
            l = function(n, t) { c(n, t) || n.setAttribute("class", (n[u]("class") || "").trim() + " " + t) },
            d = function(n, t) {
                var i;
                (i = c(n, t)) && n.setAttribute("class", (n[u]("class") || "").replace(i, " "))
            },
            g = function(n, t, i) {
                var r = i ? h : "removeEventListener";
                i && g(n, t);
                st.forEach(function(i) { n[r](i, t) })
            },
            a = function(n, i, r, u, f) { var o = t.createEvent("Event"); return r || (r = {}), r.instance = e, o.initEvent(i, !u, !f), o.detail = r, n.dispatchEvent(o), o },
            nt = function(t, i) { var f;!ot && (f = n.picturefill || r.pf) ? (i && i.src && !t[u]("srcset") && t.setAttribute("srcset", i.src), f({ reevaluate: !0, elements: [t] })) : i && i.src && (t.src = i.src) },
            v = function(n, t) { return (getComputedStyle(n, null) || {})[t] },
            ut = function(n, t, i) { for (i = i || n.offsetWidth; i < r.minSize && t && !n._lazysizesWidth;) i = t.offsetWidth, t = t.parentNode; return i },
            y = function() {
                var n, i, r = [],
                    s = [],
                    u = r,
                    e = function() {
                        var t = u;
                        for (u = r.length ? s : r, n = !0, i = !1; t.length;) t.shift()();
                        n = !1
                    },
                    o = function(r, o) { n && !o ? r.apply(this, arguments) : (u.push(r), i || (i = !0, (t.hidden ? f : it)(e))) };
                return o._lsFlush = e, o
            }(),
            w = function(n, t) {
                return t ? function() { y(n) } : function() {
                    var t = this,
                        i = arguments;
                    y(function() { n.apply(t, i) })
                }
            },
            ct = function(n) {
                var u, e = 0,
                    h = r.throttleDelay,
                    t = r.ricTimeout,
                    o = function() {
                        u = !1;
                        e = i.now();
                        n()
                    },
                    s = k && t > 49 ? function() {
                        k(o, { timeout: t });
                        t !== r.ricTimeout && (t = r.ricTimeout)
                    } : w(function() { f(o) }, !0);
                return function(n) {
                    var r;
                    ((n = n === !0) && (t = 33), u) || (u = !0, r = h - (i.now() - e), r < 0 && (r = 0), n || r < 9 ? s() : f(s, r))
                }
            },
            ft = function(n) {
                var t, u, r = 99,
                    e = function() {
                        t = null;
                        n()
                    },
                    o = function() {
                        var n = i.now() - u;
                        n < r ? f(o, r - n) : (k || e)(e)
                    };
                return function() {
                    u = i.now();
                    t || (t = f(o, r))
                }
            },
            et = function() {
                var pt, ut, kt, et, dt, gt, ni, ot, st, lt, at, wt, oi = /^img$/i,
                    si = /^iframe$/i,
                    hi = "onscroll" in n && !/(gle|ing)bot/.test(navigator.userAgent),
                    ci = 0,
                    vt = 0,
                    b = 0,
                    k = -1,
                    ti = function(n) {
                        b--;
                        (!n || b < 0 || !n.target) && (b = 0)
                    },
                    ii = function(n) { return wt == null && (wt = v(t.body, "visibility") == "hidden"), wt || !(v(n.parentNode, "visibility") == "hidden" && v(n, "visibility") == "hidden") },
                    li = function(n, i) {
                        var u, r = n,
                            f = ii(n);
                        for (ot -= i, at += i, st -= i, lt += i; f && (r = r.offsetParent) && r != t.body && r != s;) f = (v(r, "opacity") || 1) > 0, f && v(r, "overflow") != "visible" && (u = r.getBoundingClientRect(), f = lt > u.left && st < u.right && at > u.top - 1 && ot < u.bottom + 1);
                        return f
                    },
                    ri = function() {
                        var w, n, o, c, a, f, v, l, d, h, y, p, i = e.elements;
                        if ((et = r.loadMode) && b < 8 && (w = i.length)) {
                            for (n = 0, k++; n < w; n++)
                                if (i[n] && !i[n]._lazyRace) { if (!hi || e.prematureUnveil && e.prematureUnveil(i[n])) { yt(i[n]); continue } if ((l = i[n][u]("data-expand")) && (f = l * 1) || (f = vt), h || (h = !r.expand || r.expand < 1 ? s.clientHeight > 500 && s.clientWidth > 500 ? 500 : 370 : r.expand, e._defEx = h, y = h * r.expFactor, p = r.hFac, wt = null, vt < y && b < 1 && k > 2 && et > 2 && !t.hidden ? (vt = y, k = 0) : vt = et > 1 && k > 1 && b < 6 ? h : ci), d !== f && (gt = innerWidth + f * p, ni = innerHeight + f, v = f * -1, d = f), o = i[n].getBoundingClientRect(), (at = o.bottom) >= v && (ot = o.top) <= ni && (lt = o.right) >= v * p && (st = o.left) <= gt && (at || lt || st || ot) && (r.loadHidden || ii(i[n])) && (ut && b < 3 && !l && (et < 3 || k < 4) || li(i[n], f))) { if (yt(i[n]), a = !0, b > 9) break } else !a && ut && !c && b < 4 && k < 4 && et > 2 && (pt[0] || r.preloadAfterLoad) && (pt[0] || !l && (at || lt || st || ot || i[n][u](r.sizesAttr) != "auto")) && (c = pt[0] || i[n]) }
                            c && !a && yt(c)
                        }
                    },
                    p = ct(ri),
                    ui = function(n) {
                        var t = n.target;
                        if (t._lazyCache) { delete t._lazyCache; return }
                        ti(n);
                        l(t, r.loadedClass);
                        d(t, r.loadingClass);
                        g(t, fi);
                        a(t, "lazyloaded")
                    },
                    ai = w(ui),
                    fi = function(n) { ai({ target: n.target }) },
                    vi = function(n, t) {
                        var i = n.getAttribute("data-load-mode") || r.iframeLoadMode;
                        i == 0 ? n.contentWindow.location.replace(t) : i == 1 && (n.src = t)
                    },
                    yi = function(n) {
                        var t, i = n[u](r.srcsetAttr);
                        (t = r.customMedia[n[u]("data-media") || n[u]("media")]) && n.setAttribute("media", t);
                        i && n.setAttribute("srcset", i)
                    },
                    pi = w(function(n, t, i, e, o) {
                        var s, h, v, c, p, w;
                        (p = a(n, "lazybeforeunveil", t)).defaultPrevented || (e && (i ? l(n, r.autosizesClass) : n.setAttribute("sizes", e)), h = n[u](r.srcsetAttr), s = n[u](r.srcAttr), o && (v = n.parentNode, c = v && rt.test(v.nodeName || "")), w = t.firesLoad || "src" in n && (h || s || c), p = { target: n }, l(n, r.loadingClass), w && (clearTimeout(kt), kt = f(ti, 2500), g(n, fi, !0)), c && ht.call(v.getElementsByTagName("source"), yi), h ? n.setAttribute("srcset", h) : s && !c && (si.test(n.nodeName) ? vi(n, s) : n.src = s), o && (h || c) && nt(n, { src: s }));
                        n._lazyRace && delete n._lazyRace;
                        d(n, r.lazyClass);
                        y(function() {
                            var t = n.complete && n.naturalWidth > 1;
                            (!w || t) && (t && l(n, r.fastLoadedClass), ui(p), n._lazyCache = !0, f(function() { "_lazyCache" in n && delete n._lazyCache }, 9));
                            n.loading == "lazy" && b--
                        }, !0)
                    }),
                    yt = function(n) {
                        if (!n._lazyRace) {
                            var f, t = oi.test(n.nodeName),
                                e = t && (n[u](r.sizesAttr) || n[u]("sizes")),
                                i = e == "auto";
                            (i || !ut) && t && (n[u]("src") || n.srcset) && !n.complete && !c(n, r.errorClass) && c(n, r.lazyClass) || (f = a(n, "lazyunveilread").detail, i && tt.updateElem(n, !0, n.offsetWidth), n._lazyRace = !0, b++, pi(n, f, i, e, t))
                        }
                    },
                    wi = ft(function() {
                        r.loadMode = 3;
                        p()
                    }),
                    ei = function() {
                        r.loadMode == 3 && (r.loadMode = 2);
                        wi()
                    },
                    bt = function() {
                        if (!ut) {
                            if (i.now() - dt < 999) { f(bt, 999); return }
                            ut = !0;
                            r.loadMode = 3;
                            p();
                            o("scroll", ei, !0)
                        }
                    };
                return {
                    _: function() {
                        dt = i.now();
                        e.elements = t.getElementsByClassName(r.lazyClass);
                        pt = t.getElementsByClassName(r.lazyClass + " " + r.preloadClass);
                        o("scroll", p, !0);
                        o("resize", p, !0);
                        o("pageshow", function(n) {
                            if (n.persisted) {
                                var i = t.querySelectorAll("." + r.loadingClass);
                                i.length && i.forEach && it(function() { i.forEach(function(n) { n.complete && yt(n) }) })
                            }
                        });
                        n.MutationObserver ? new MutationObserver(p).observe(s, { childList: !0, subtree: !0, attributes: !0 }) : (s[h]("DOMNodeInserted", p, !0), s[h]("DOMAttrModified", p, !0), setInterval(p, 999));
                        o("hashchange", p, !0);
                        ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(n) { t[h](n, p, !0) });
                        /d$|^c/.test(t.readyState) ? bt() : (o("load", bt), t[h]("DOMContentLoaded", p), f(bt, 2e4));
                        e.elements.length ? (ri(), y._lsFlush()) : p()
                    },
                    checkElems: p,
                    unveil: yt,
                    _aLSL: ei
                }
            }(),
            tt = function() {
                var n, f = w(function(n, t, i, r) {
                        var f, u, e;
                        if (n._lazysizesWidth = r, r += "px", n.setAttribute("sizes", r), rt.test(t.nodeName || ""))
                            for (f = t.getElementsByTagName("source"), u = 0, e = f.length; u < e; u++) f[u].setAttribute("sizes", r);
                        i.detail.dataAttr || nt(n, i.detail)
                    }),
                    i = function(n, t, i) {
                        var r, u = n.parentNode;
                        u && (i = ut(n, u, i), r = a(n, "lazybeforesizes", { width: i, dataAttr: !!t }), r.defaultPrevented || (i = r.detail.width, i && i !== n._lazysizesWidth && f(n, u, r, i)))
                    },
                    e = function() {
                        var t, r = n.length;
                        if (r)
                            for (t = 0; t < r; t++) i(n[t])
                    },
                    u = ft(e);
                return {
                    _: function() {
                        n = t.getElementsByClassName(r.autosizesClass);
                        o("resize", u)
                    },
                    checkElems: u,
                    updateElem: i
                }
            }(),
            b = function() {!b.i && t.getElementsByClassName && (b.i = !0, tt._(), et._()) };
        return f(function() { r.init && b() }), e = { cfg: r, autoSizer: tt, loader: et, init: b, uP: nt, aC: l, rC: d, hC: c, fire: a, gW: ut, rAF: y }
    }(n, n.document, Date);
    n.lazySizes = t;
    "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : {});
window.isTopZone = !0;
var timmer, MIN_SSKEYWORD_LENGTH = 2,
    urlRoot = window.location.origin,
    searching = !1,
    inValidChar = /:|;|!|@@|#|\$|%|\^|&|\*|' |"|>|<|,|\?|`|~|\+|=|_|-|\(|\)|{|}|\[|\]|\\|\|/gi,
    isMobile = !1;
$(document).ready(function() {
    if ($(".bg-sg").click(function() {
            $(".form-search").fadeOut(function() {
                $(".form-search").removeClass("active");
                $(".click-search").removeClass("active");
                $(".sg-search").removeClass("active")
            });
            $(".bg-sg").fadeOut();
            $("body").css("overflow", "unset");
            $(".search-cart").fadeIn(function() {
                $(".logo-topzone").fadeIn();
                $(".menu li").removeClass("hidden")
            });
            $(".sg-search").fadeOut()
        }), $(".menu li").click(function() {
            $(".menu li").addClass("active");
            $(".menu li").not(this).removeClass("active")
        }), $(".bg-popup").click(function() {
            $(".slide-popup").removeClass("active");
            $("body").css("overflow", "unset")
        }), $(".dmca-badge").length > 0) {
        var n = $(".dmca-badge").attr("href") + "&refurl=" + location.href;
        $(".dmca-badge").attr("href", n)
    }
    $(".topzone-search").click(function() {
        $(".form-search").fadeIn(function() {
            $(".form-search").addClass("active");
            $(".click-search").addClass("active");
            $(".click-search input").focus()
        });
        $(".bg-sg").fadeIn();
        $("body").css("overflow", "hidden");
        $(".search-cart").fadeOut(function() {
            $(".logo-topzone").fadeOut();
            $(".menu li").addClass("hidden")
        })
    });
    $(".click-search input").focus(function() { $(".history-txt").length == 0 && $(".list-sg-search").length == 0 && $(".text-search").length == 0 && ViewSearchKeywordHistory() });
    $(".click-search input").keyup(function(n) {
        var r;
        n.preventDefault();
        var u = $(".list-sg-search"),
            i = $(".sg-search"),
            t = $(".click-search input").val();
        if (t = t.replace(inValidChar, ""), r = t.trim().toLowerCase(), r.length < MIN_SSKEYWORD_LENGTH) {
            i.hide();
            u.removeClass("active");
            i.html("");
            return
        }
        if (n.which == 40 || n.which == 38) { UpDownSuggest(n.which); return }
        n.type == "submit" || n.which == 13 ? goToSearchPage(t) : searching || (clearTimeout(timmer), timmer = setTimeout(function() { callSuggestSearch(n) }, 600))
    });
    $(".submit-search").click(function(n) {
        var t, i;
        if (n.preventDefault(), t = $(".click-search input").val(), t = t.replace(inValidChar, ""), i = t.trim().toLowerCase(), i.length < MIN_SSKEYWORD_LENGTH) { $(".search-result").html(""); return }
        goToSearchPage(t)
    });
    $(".topzone-delSearch").click(function() {
        $(".form-search").fadeOut(function() {
            $(".form-search").removeClass("active");
            $(".click-search").removeClass("active");
            $(".sg-search").removeClass("active")
        });
        $(".bg-sg").fadeOut();
        $("body").css("overflow", "unset");
        $(".search-cart").fadeIn(function() {
            $(".logo-topzone").fadeIn();
            $(".menu li").removeClass("hidden")
        });
        $(".sg-search").fadeOut(function() { $(".sg-search").html("") });
        $(".click-search input").val("")
    });
    $(window).scroll(function() { $(window).scrollTop() > 200 ? ($("header").addClass("sticky"), $(".theme-lunaNewYear").addClass("fixed-bg")) : ($("header").removeClass("sticky"), $(".theme-lunaNewYear").removeClass("fixed-bg")) });
    GetQuanatyCart();
    $(".boxchat-balloons").click(function() {
        $(".chat-window").toggleClass("active");
        let n = $(".chat-widget-container"),
            t = $(".chat-window ul li").not(":eq(0)");
        n.find(".zalo-chat-widget").length == 0 ? $.ajax({
            url: "/Common/GetChatWidget",
            method: "POST",
            beforeSend: function() { t.addClass("prevent") },
            success: function(t) { n.html(t) },
            complete: function() {
                setTimeout(function() { t.removeClass("prevent") }, 500);
                $(".zalo-chat-widget").addClass("active")
            }
        }) : $(".zalo-chat-widget").toggleClass("active")
    });
    $(".boxchat-closewindow").click(function() {
        $(".chat-window").removeClass("active");
        $(".zalo-chat-widget").removeClass("active")
    })
});

/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
function hasHorizontalScrollBar(n) { return n == undefined || n.length <= 0 ? !1 : n.get(0).scrollWidth > n.innerWidth() }

function callFilterFromHash(n) {
    if (GetValueFromHashKey(n), MapHashToFilter(), n.indexOf("curl") < 0) {
        varFilterObj.isCallTotal = !0;
        var t = $("#paging").length > 0;
        pIdxActive = document.pageIndex;
        pIdxActive > 0 && $("#paging").length == 0 && (isPageIndexLoading = !0, document.pageIndex = 0);
        varFilterObj.isCallTotal = !0;
        varFilterObj.pIndexGoto = t ? pIdxActive : -1;
        varFilterObj.isMore = t ? !0 : !1;
        filterPros(varFilterObj)
    } else filterProsPKGenuine()
}

function gotoPageIndex(n) {
    varFilterObj.isMore = !0;
    varFilterObj.isCallTotal = !0;
    varFilterObj.isViewNow = !1;
    varFilterObj.pIndexGoto = n - 1;
    filterPros(varFilterObj)
}

function closePopup() {
    $(".show-total").removeClass("active");
    $(".filter-show").fadeOut(300);
    $(".jsTitle").removeClass("showing");
    activeOrUnActiveBlock();
    getTextActiveSliderRange();
    $("body").removeClass("bg-black");
    $(".bg-black .bsc-block").removeClass("fix-padding")
}

function filterPros(n) {
    if (1) {
        let i = $(n.e),
            t = n.isMore,
            r = n.isCallTotal;
        n.isViewNow !== !0 && resetProductsObj();
        t == undefined || t == "false" ? t = !1 : (t || t == "true") && (t = !0);
        t || pIdxActive > 0 ? (pIdxActive > 0 && document.pageIndex == 0 && !isIgnorePageIndex ? isIgnorePageIndex = !0 : n.pIndexGoto >= 0 ? document.pageIndex = n.pIndexGoto : document.pageIndex += 1, resetProductsObj()) : document.pageIndex = pIinFor > 0 ? pIinFor : 0;
        BuildLinkHash(!1, t);
        xhrFilter && pIdxActive <= 0 && xhrFilter.abort();
        xhrFilter = $.ajax({
            url: "/Category/FilterProductBox" + linkRedirectHash,
            type: "POST",
            cache: !0,
            data: { IsParentCate: document.isParentCate, SportId: document.SportId },
            "async": document.pageIndex == 0 || pIdxActive == 0,
            beforeSend: function() { t && document.pageIndex > 0 && pIdxActive == 0 ? ($(".view-more a").addClass("prevent"), $(".view-more a").append(appendLoadingViewMoreNew())) : (isPageIndexLoading && $("#preloader").addClass("fixed"), $("#preloader").show(), $(".box-filter.top-box").addClass("disabled"), $(".box-sort").addClass("disabled")) },
            success: function(u) {
                if ($(".box-filter").removeClass("disabled"), $(".box-sort").removeClass("disabled"), $(".view-more a").removeClass("prevent"), productFilterObj = { total: u.total, listproducts: u.listproducts, textResponseApi: u.textResponseApi }, console.log(productFilterObj.textResponseApi), document.TotalCount = u.total, $("#paging").length > 0 && (n.pIndexGoto = n.pIndexGoto < 0 ? 0 : n.pIndexGoto, $("#paging").show(), pIdxActive = 0, genPaging(document.TotalCount, document.pageSize, n.pIndexGoto)), document.TotalCount <= 0 && $("#paging").hide(), pIdxActive > 0) {
                    var f = parseInt(document.TotalCount / document.pageSize);
                    pIdxActive = pIdxActive > f ? f : pIdxActive
                }
                successXhrFilter(i, u, r, t);
                xhrFilter = !1;
                resetVarFilterObj()
            },
            error: function(n) {
                $(".view-more a").removeClass("prevent");
                console.log(n)
            }
        })
    }
}

function totalFilterPros(n = false) {
    CheckRemoveParamChildFilter();
    $(".total-reloading .stage").length <= 0 && $(".total-reloading").html(appendLoading());
    countTotal();
    n || resetProductsObj();
    xhr && xhr.abort();
    previousRequest = linkRedirectHash;
    BuildLinkHash(!0);
    console.log("previousRequest: " + previousRequest);
    previousRequest == linkRedirectHash && xhr && xhr.abort();
    productFilterObj.total >= 0 ? (console.log(productFilterObj.textResponseApi), successXhrTotal(productFilterObj.total, n)) : xhr = $.ajax({
        url: "/Category/FilterProductBox" + linkRedirectHashTotal,
        type: "POST",
        cache: !0,
        data: { IsParentCate: document.isParentCate, SportId: document.SportId },
        "async": !0,
        beforeSend: function() { $(".btn-filter-readmore").addClass("prevent") },
        success: function(t) {
            productFilterObj = { total: t.total, listproducts: t.listproducts, textResponseApi: t.textResponseApi };
            console.log(productFilterObj.textResponseApi);
            successXhrTotal(t.total, n, previousRequest)
        },
        error: function(n) { console.log(n) }
    })
}

function successXhrTotal(n, t = false, i = "") {
    $(".btn-filter-readmore").removeClass("prevent");
    totalAjax = n;
    $(".total-reloading").html(n);
    document.TotalCount = n;
    t && (showHideViewMore(document.TotalCount), $(".sort-total b").html(n));
    totalAjax > 0 && totalAjax < 5 ? $(".sort-select").hasClass("hide") ? console.log("nothing to do") : $(".sort-select").addClass("hide") : $(".sort-select.hide").removeClass("hide");
    parseInt(n) > 0 ? $(".btn-filter-readmore").removeClass("prevent").removeClass("disabled") : $(".btn-filter-readmore").addClass("prevent").addClass("disabled");
    i = linkRedirectHash;
    hideShowListActiveFilter();
    hideShowClrFilter()
}

function successXhrFilter(n, t, i = false, r = false) {
    var e, u, f, s;
    if ($("#empty").remove(), pIdxActive = pIdxActive == undefined ? 0 : parseInt(pIdxActive), (document.pageIndex == 0 || varFilterObj.pIndexGoto >= 0) && (isPageIndexLoading || scrollByTag(".block-scroll-main.box-filter")), n !== undefined && n.parent().hasClass("f-smooth") && window.location.hash.length <= 0) {
        e = $(this).attr("href");
        window.location.href = e;
        return
    }
    if (r || (linkRedirectHashTotal = linkRedirectHash), i && successXhrTotal(t.total, !0), $(".box-quicklink:not(.child-filter-outer)").remove(), $(".box-sort").removeClass("hide-ext"), $(".box-sort .manu-sort").show(), t.listproducts !== "" && t.listproducts !== null && t.total > 0) {
        if ($(".box-sort .sort-total").show(), $(".box-checkbox.extend").removeClass("hide"), document.pageIndex == 0 || varFilterObj.pIndexGoto >= 0) $(".listing-cate").html(t.listproducts), totalAjax = document.TotalCount, isPageIndexLoading && (pIinFor += 1, pIinFor < pIdxActive + 1 ? filterPros(varFilterObj) : pIinFor = 0);
        else {
            $(".listing-cate").append(t.listproducts);
            var o = parseInt(document.TotalCount),
                h = parseInt(document.pageIndex) + 1,
                c = parseInt(document.pageSize);
            totalAjax = o > h * c ? o : 0;
            isPageIndexLoading && (pIinFor += 1, afterDoneActivePageIndex(), pIinFor < pIdxActive + 1 ? filterPros(varFilterObj) : pIinFor = 0);
            linkRedirectHash == linkRedirectHashTotal && $(".btn-filter-readmore.disabled").length > 0 && $(".btn-filter-readmore").removeClass("prevent").removeClass("disabled")
        }
        showHideViewMore(totalAjax);
        manuParams.length == 1 ? (u = $(".filter-list.manu a.check").data("name"), u !== undefined && u !== "" && $(".box-sort .manu-sort").text(u)) : $(".box-sort .manu-sort").hide()
    } else !r || varFilterObj.pIndexGoto >= 0 ? (f = "", s = '<div id="empty"><i class="empty"><\/i>KhĂ´ng cĂ³ sáº£n pháº©m nĂ o phĂ¹ há»£p vá»›i tiĂªu chĂ­ tĂ¬m kiáº¿m!{back-to-category}<\/div>', document.cateName !== undefined && document.cateName !== "" && (f = '<p><a href="javascript:;" onclick="reloadURL()">Xem táº¥t cáº£ ' + document.cateName.toLowerCase() + "<\/a><\/p>"), $(".listing-cate").html(s.replace("{back-to-category}", f)), $(".box-sort").addClass("hide-ext"), endActivePageIndex()) : $(".view-more").hide();
    linkRedirectHash.charAt(0) == "?" && (linkRedirectHash = linkRedirectHash.replace(linkRedirectHash.charAt(0), ""));
    linkRedirectHash[linkRedirectHash.length - 1] == "&" && (linkRedirectHash = linkRedirectHash.substring(0, linkRedirectHash.length - 1));
    location.hash = linkRedirectHash;
    activeOrUnActiveBlock();
    pIdxActive == 0 && $("#preloader").hide();
    $(".view-more .bubblingG").remove();
    $(".props a.check").length > 0 ? $(".props a.check").each(function() { textActiveFilter($(this), "") }) : $(".props a").length > 0 && textActiveFilter($(this), "");
    $(".manu a.check").length > 0 ? $(".manu a.check").each(function() { textActiveFilter($(this), "HĂ£ng") }) : $(".manu a").length > 0 && textActiveFilter($(".manu a"), "HĂ£ng");
    $(".price a.check").length > 0 ? $(".price a.check").each(function() { textActiveFilter($(this), "GiĂ¡") }) : $(".price a").length > 0 && textActiveFilter($(".price a"), "GiĂ¡");
    $(".box-filter").removeClass("wrap");
    $(".btn-right-scroll").show();
    resetProductsObj();
    $(".prop-minmax-input.has-value").length <= 0 && $(".prop-slider-active").remove()
}

function LoadCheckAjax() {
    var n = "",
        u = "",
        f = "",
        i = "",
        e = "?g=",
        r = 0,
        t;
    if (varFilterObj.isMore || varFilterObj.isViewNow == !1) return isLoadAjax = !0, !0;
    if (t = document.isWatch == "True", manuParams != null && manuParams.length > 0)
        if (manuParams.length == 1) $(".manu a").each(function() { if (manuParams.indexOf($(this).data("id") + "") >= 0 && $(this).data("href") !== undefined && $(this).data("href") !== "") return u = "-" + $(this).data("href"), isLoadAjax = !1, r++, !1 });
        else if (isLoadAjax = !0, !t) return !0;
    if (extParams.length > 0 || $(".extend a.active").length > 0) return isLoadAjax = !0, !0;
    if (rangeParams.length > 0)
        if (rangeParams.length == 1) $(".price a").each(function() { if (rangeParams.indexOf($(this).data("id") + "") >= 0 && $(this).data("href") !== undefined && $(this).data("href") !== "") return f = "?p=" + $(this).data("href"), e = "&g=", isLoadAjax = !1, r++, !1 });
        else if (isLoadAjax = !0, !t) return !0;
    if (propsParams != null && propsParams.length > 0)
        if (propsParams.length == 1) $(".props a").each(function() { if (propsParams.indexOf($(this).data("id") + "") >= 0 && $(this).data("href") !== undefined) return i = $(this).data("smooth") == 1 ? "-" + $(this).data("href") : e + $(this).data("href"), isLoadAjax = !1, r++, !1 });
        else if (isLoadAjax = !0, !t) return !0;
    if (!t && GetParamLinkHashMinMax() !== "" && GetParamLinkHashMinMax().indexOf("&") >= 0) return !0;
    if (t || (isLoadAjax = r <= 2 ? !1 : !0), isLoadAjax == !1) {
        if (n = n !== "" ? n : i.includes("&") ? u + f + i : u + i + f, n != "") return reloadURL(n, t), !1;
        reloadURL("")
    }
    if (t) {
        if (n = linkRedirectHashTotal, n.charAt(0) == "?") {
            n = n.replace(n.charAt(0), "#");
            reloadURL(n, t);
            return
        }
    } else return isLoadAjax = !0, !0
}

function LoadCheckAjaxExtend(n) {
    var i = $(n);
    if (i == undefined || i.data("href") == undefined || i.data("href") == "") return !0;
    let t = i.data("href"),
        r = !0;
    return (location.hash == "" && manuParams.length == 0 && rangeParams.length == 0 && propsParams == 0 && (extParams.length == 1 && $(".extend a.active").length == 0 ? r = !1 : extParams.length == 0 && i.data("newv2") == "True" && (r = !1)), r == !1 && (t = t !== "" ? t : urlProp.includes("&") ? urlManu + urlPrice + urlProp : urlManu + urlProp + urlPrice, t != "")) ? (t.charAt(0) == "?" && (t = t.replace(t.charAt(0), "#")), reloadURL(t), !1) : r
}

function reloadURL(n, t = false) {
    if (n == undefined && (n = ""), loadingRedirect(), t == !0 && document.cateUrl.indexOf("dong-ho") >= 0 && (document.cateUrl = "dong-ho-deo-tay"), t) {
        var i = document.cateUrl + n;
        history.pushState({}, "", i);
        reloadPage()
    } else window.location = document.cateUrl + n;
    return
}

function reloadPage() { setTimeout(function() { location.reload() }, 1e3); return }

function callLazy() {}

function appendLoading() { return '<div class="stage-two"><div class="load"><\/div><\/div>' }

function appendLoadingViewMore() { return '<div class="stage"><div class="dot-stretching"><\/div><\/div>' }

function appendLoadingViewMoreNew() { return '<div class="bubblingG"><span id="bubblingG_1"><\/span><span id="bubblingG_2"><\/span><span id="bubblingG_3"><\/span><\/div>' }

function countTotal() {
    var i = 0,
        n;
    $("a.active[data-newv2='True']").length && (i = $(".newyearFilter").eq(0).find("a").length);
    n = 0;
    priceRangeParams !== "" ? n += 1 : 0;
    RangeObj.CapacityRangeParams !== "" ? n += 1 : 0;
    RangeObj.HeightRangeParams !== "" ? n += 1 : 0;
    RangeObj.WidthRangeParams !== "" ? n += 1 : 0;
    RangeObj.DeepRangeParams !== "" ? n += 1 : 0;
    let t = manuParams.length + propsParams.length + rangeParams.length + n;
    t = t - i;
    t > 0 ? ($(".count-total").html(t).show().addClass("active"), $(".filter-button").slideDown()) : $(".count-total").html(0).hide()
}

function unActiveFilter(n) {
    var t = $(n),
        u = !1,
        r, i = "",
        s, f, e, o, h;
    if (t.parents(".filter-show").not(".show-total").find(".filter-list a.check").length > 0 ? r = t.parents(".filter-show").not(".show-total").find(".filter-list a.check") : t.parents(".show-total").find(".filter-list a.check").length > 0 && (r = t.parents(".show-total").find(".filter-list a.check")), t.parents(".filter-show").not(".show-total").find(".prop-minmax").length > 0 ? t.parents(".filter-show").not(".show-total").find(".prop-minmax").each(function(n) {
            n > 0 && (i += ",");
            i += $(this).attr("data-type")
        }) : t.parents(".show-total").find(".prop-minmax").length > 0 && t.parents(".show-total").find(".prop-minmax").each(function(n) {
            n > 0 && (i += ",");
            i += $(this).attr("data-type")
        }), (t.parents(".filter-show").not(".show-total").find(".price-slider").length > 0 || t.parents(".show-total").find(".price-slider").length > 0) && (s = i.split(","), i += (s.length > 1 ? "," : "") + "price"), r != undefined && r.length || i != "") {
        if (f = "", t.parents(".filter-show").not(".show-total").find(".manu").length > 0 ? f = "manu" : t.parents(".filter-show").not(".show-total").find(".props").length > 0 ? f = "prop" : t.parents(".filter-show").not(".show-total").find(".price").length > 0 && (f = "price"), resetTextActiveFilter(f), r != undefined && r.length > 0 && r.each(function() {
                let n = this.dataset.id;
                manuParams.indexOf(n) >= 0 && (u = !0, $(".manu a[data-id=" + n + "]").removeClass("check"), manuParams.splice(manuParams.indexOf(n), 1), autoAddorRemoveFilterActive($(".show-total .manu a[data-id=" + n + "]"), null));
                propsParams.indexOf(n) >= 0 && (u = !0, $(".props a[data-id=" + n + "]").removeClass("check"), propsParams.splice(propsParams.indexOf(n), 1), autoAddorRemoveFilterActive($(".show-total .props a[data-id=" + n + "]"), null));
                rangeParams.indexOf(n) >= 0 && (u = !0, $(".price a[data-id=" + n + "]").removeClass("check"), rangeParams.splice(rangeParams.indexOf(n), 1), autoAddorRemoveFilterActive($(".show-total .price a[data-id=" + n + "]"), null))
            }), i !== "" && i !== undefined)
            if (u = !0, i.indexOf("price") >= 0 && $(".price-slider").find("input").each(function() {
                    $(".price-slider .range-toggle span").removeClass("down");
                    $(".price-slider .container").slideUp();
                    resetPriceRange();
                    callFilterRangeSlider(!0)
                }), e = i.split(","), e.length > 1)
                for (o = 0; o < e.length; o++) $(".prop-minmax." + e[o]).find("input").each(function() { getOrRemoveRangeParamByName($(this), !0) });
            else $(".prop-minmax." + i).find("input").each(function() { getOrRemoveRangeParamByName($(this), !0) });
        if (u) {
            h = priceRangeParams !== "" || RangeObj.CapacityRangeParams !== "" || RangeObj.WidthRangeParams !== "" || RangeObj.HeightRangeParams !== "" || RangeObj.DeepRangeParams !== "";
            manuParams.length + propsParams.length + rangeParams.length + extParams.length == 0 && (h || (location.href = document.cateUrl));
            varFilterObj.isCallTotal = !0;
            varFilterObj.isMore = !1;
            varFilterObj.isViewNow = !1;
            filterPros(varFilterObj);
            return
        }
    }
}

function showHideViewMore(n) {
    if (n > 0) {
        var t = n - $(".listing-cate > li").length;
        t > 0 ? ($(".view-more").removeClass("hide").show(), $(".view-more .remain").html(t)) : $(".view-more").hide()
    } else $(".view-more").hide()
}

function GetValueFromHashKey(n) { var i, r, u, t; if (((n === undefined || n == "") && (n = location.hash.replace("#", "")), n === undefined || n == "") || (i = n.split("&"), i.length == 0)) return null; for (r in i)(u = i[r], t = u.split("="), t.length == 2) && (t[0] == "m" ? manuParams = t[1].split(",") : t[0] == "r" ? rangeParams = t[1].split(",") : t[0] == "p" ? propsParams = t[1].split(",") : t[0] == "ext" ? extParams = t[1].split(",") : t[0] == "o" ? ordersParams = parseInt(t[1]) : t[0] == "add" ? additionFilterParam = parseInt(t[1]) : t[0] == "pi" ? document.pageIndex = parseInt(t[1]) : t[0] == "ps" ? document.pageSize = parseInt(t[1]) : t[0] == "cids" ? cidsParams = t[1].split(",") : t[0] == "priceminmax" ? priceRangeParams = t[1] : t[0] == "capacityminmax" ? RangeObj.CapacityRangeParams = t[1] : t[0] == "widthminmax" ? RangeObj.WidthRangeParams = t[1] : t[0] == "heightminmax" ? RangeObj.HeightRangeParams = t[1] : t[0] == "deepminmax" && (RangeObj.DeepRangeParams = t[1])) }

function MapHashToFilter() {
    var n;
    location.hash != "" && $(".props a.active").removeClass("active");
    propsParams != null && propsParams.length > 0 && $(".props a").each(function() { propsParams.indexOf($(this).data("id") + "") >= 0 ? $(this).addClass("active") : $(this).removeClass("active") });
    ordersParams > 0 && ($(".ft-sort ul li a").removeClass("check"), $(".ft-sort ul li a[data-id=" + ordersParams + "]").addClass("check"), $(".ft-sort > a").text("Xáº¿p theo: " + $(".ft-sort ul li a.check").text()));
    cidsParams != null && cidsParams.length > 0 && $(".box-quicklink.accessories a").each(function() { cidsParams.indexOf($(this).data("id") + "") >= 0 ? $(this).addClass("check") : $(this).removeClass("check") });
    priceRangeParams !== "" && (n = priceRangeParams.split("-"), n.length == 2 && (rangePriceSlider.noUiSlider.set([n[0], n[1]]), rangePriceSliderTotal.noUiSlider.set([n[0], n[1]]), updateValAndAttrValue($("input[name='price-min-value']"), ToNumberFormat(n[0])), updateValAndAttrValue($("input[name='price-max-value']"), ToNumberFormat(n[1])), $(".price-slider .container").slideDown(), $(".price-slider .range-toggle a span").addClass("down")));
    RangeObj.CapacityRangeParams !== "" && (n = RangeObj.CapacityRangeParams.split("-"), autoFillMinMaxFromHash("capacity", n));
    RangeObj.WidthRangeParams !== "" && (n = RangeObj.WidthRangeParams.split("-"), autoFillMinMaxFromHash("width", n));
    RangeObj.HeightRangeParams !== "" && (n = RangeObj.HeightRangeParams.split("-"), autoFillMinMaxFromHash("height", n));
    RangeObj.DeepRangeParams !== "" && (n = RangeObj.DeepRangeParams.split("-"), autoFillMinMaxFromHash("deep", n))
}

function autoFillMinMaxFromHash(n, t) { t !== undefined && t.length == 2 && (updateValAndAttrValue($("input[name=" + n + "-min-value]"), ToNumberFormat(t[0])), updateValAndAttrValue($("input[name=" + n + "-max-value]"), ToNumberFormat(t[1])), $(".prop-minmax." + n).parents(".props").length > 0 && ($(".prop-minmax." + n).parents(".props").find(".container").slideDown(), $(".prop-minmax." + n).parents(".props").find(".range-toggle span").addClass("down"))) }

function BuildLinkHash(n = false, t = false) {
    var i = manuParams.length > 0 ? "m=" + manuParams.toString() + "&" : "",
        r = ordersParams != -1 ? "o=" + ordersParams + "&" : "",
        u = propsParams.length > 0 ? "p=" + propsParams.toString() + "&" : "",
        f = document.cateID !== undefined ? "c=" + document.cateID + "&" : 0,
        e = "",
        o = "pi=" + (document.pageIndex !== undefined ? document.pageIndex : 0);
    if (n) e = "ps=1&", linkRedirectHashTotal = f + i + u + r + e + "pi=0", linkRedirectHashTotal = linkRedirectHashTotal.trim() !== "" ? "?" + linkRedirectHashTotal : "";
    else {
        let n = $("#paging").length > 0;
        t && !n && location.hash.trim() !== "" ? (linkRedirectHash = linkRedirectHash.replace("pi=" + (document.pageIndex - 1), ""), linkRedirectHash = linkRedirectHash + o) : linkRedirectHash = t && !n && linkRedirectHash !== linkRedirectHashTotal ? f + i + u + r + o : f + i + u + r + e + o;
        linkRedirectHash = linkRedirectHash.trim() !== "" ? "?" + linkRedirectHash : ""
    }
}

function GetParamLinkHashMinMax() {
    var n = priceRangeParams !== "" ? "priceminmax=" + priceRangeParams.split(".").join("").toString() + "&" : "",
        t = RangeObj.CapacityRangeParams !== "" ? "capacityminmax=" + RangeObj.CapacityRangeParams.toString() + "&" : "",
        i = RangeObj.HeightRangeParams !== "" ? "heightminmax=" + RangeObj.HeightRangeParams.toString() + "&" : "",
        r = RangeObj.WidthRangeParams !== "" ? "widthminmax=" + RangeObj.WidthRangeParams.toString() + "&" : "",
        u = RangeObj.DeepRangeParams !== "" ? "deepminmax=" + RangeObj.DeepRangeParams.toString() + "&" : "";
    return n + t + i + r + u
}

function resetProductsObj() {
    productFilterObj.total = -1;
    productFilterObj.listproducts = null;
    productFilterObj.textResponseApi = ""
}

function resetVarFilterObj() {
    varFilterObj.e = null;
    varFilterObj.isMore = !1;
    varFilterObj.isCallTotal = !1;
    varFilterObj.isViewNow = !1;
    varFilterObj.pIndexGoto = -1
}

function scrollByHash(n) {
    $(n).on("click", function(n) {
        if (this.hash !== "") {
            n.preventDefault();
            var t = this.hash;
            $("html, body").animate({ scrollTop: $(t).offset().top }, 800, function() { window.location.hash = t })
        }
    })
}

function scrollByTag(n, t = false, i = false) {
    var r = $(n),
        u, f;
    if (r != undefined && !(r.length <= 0)) {
        if (u = 0, t && ($(".jsfix").addClass("fixed"), closePopup(), u = $(".jsfix").innerHeight() + 1), i) { $("html, body").animate({ scrollTop: r.offset().top }, 300); return }
        f = setTimeout(function() {
            if ($(window).scrollTop() == r.offset().top - u) { clearTimeout(f); return }
            $("html, body").animate({ scrollTop: r.offset().top - u }, 800)
        }, 300)
    }
}

function reLoadChildFilter() {
    if (manuParams.length == 1) {
        var n = "?manuId=" + manuParams;
        document.cateID !== undefined && document.cateID > 0 && (n += "&cateId=" + document.cateID.toString());
        $.ajax({ url: "/Category/GetChildFilter" + n, type: "POST", cache: !0, beforeSend: function() {}, success: function(n) { n != "" && ($(".child-filter .props").html(n), $(".child-filter-outer .props").html(n), $(".child-filter").removeClass("hide"), $(".child-filter-outer").removeClass("hide")) }, error: function(n) { console.log(n) } })
    } else $(".child-filter").addClass("hide"), $(".child-filter-outer .single-prop").length <= 0 && $(".child-filter-outer").addClass("hide")
}

function loadingRedirect() {
    $("#progressTop").remove();
    $(".overlay").show();
    $("body").append($("<div><b><\/b><i><\/i><\/div>").attr("id", "progressTop"));
    $("#progressTop").width("105%")
}

function fadeOutBorder(n) {
    setTimeout(function() {
        var t = $("." + n);
        t.addClass("inside");
        $({ alpha: 1 }).animate({ alpha: 0 }, {
            duration: 3e3,
            step: function() {
                t.css("outline", "rgba(73, 183, 255," + this.alpha + ") solid 3px");
                setTimeout(function() { t.css("outline", "none") }, 3e3)
            }
        })
    }, 1e3)
}

function resetTextActiveFilter(n) {
    switch (n) {
        case "manu":
            $(".manu a.check").length > 0 && $(".manu a.check").each(function() { textActiveFilter(this, "HĂ£ng", !0) });
            break;
        case "prop":
            $(".props a.check").length > 0 && $(".props a.check").each(function() { textActiveFilter(this, "", !0) });
            break;
        case "price":
            $(".price a.check").length > 0 && $(".price a.check").each(function() { textActiveFilter(this, "GiĂ¡", !0) });
            break;
        default:
            $(".manu a.check").length > 0 && $(".manu a.check").each(function() { textActiveFilter(this, "HĂ£ng", !0) });
            $(".price a.check").length > 0 && $(".price a.check").each(function() { textActiveFilter(this, "GiĂ¡", !0) });
            $(".props a.check").length > 0 && $(".props a.check").each(function() { textActiveFilter(this, "", !0) })
    }
}

function textActiveFilter(n, t, i = false) {
    var u = $(n),
        r, f, s, o, e;
    if (u.parents(".filter-item").length > 0) r = u.parents(".filter-item");
    else if (u.parents(".show-total-item").length > 0) r = u.parents(".show-total-item");
    else return;
    r.find(".manu").length > 0 && (f = ".manu");
    r.find(".props").length > 0 && (f = ".props");
    r.find(".price").length > 0 && (f = ".price");
    r.find(".c-btnbox.check").length > 0 && !i ? (s = "", r.find(".jsTitle").length > 0 && r.find(".jsTitle").addClass("active"), s = r.find(".c-btnbox.check").find("img").length > 0 ? u.hasClass("check") ? u.find("img").attr("alt") : r.find(".c-btnbox.check img").last().attr("alt") : u.find(".prop-hrd").length > 0 ? u.hasClass("check") ? u.find(".prop-hrd").text() : r.find(".c-btnbox.check").last().find(".prop-hrd").text() : u.hasClass("check") ? u.text() : r.find(".c-btnbox.check").last().text(), f == ".props" ? (o = u.data("id"), $("a[data-id=" + o + "]").parents(".filter-item").find(".jsTitle span").text(s + (r.find(".c-btnbox.check").length > 1 ? ",..." : ""))) : $(f).parents(".filter-item").find(".jsTitle span").text(s + (r.find(".c-btnbox.check").length > 1 ? ",..." : ""))) : f == ".props" ? (o = u.data("id"), e = $("a[data-id=" + o + "]").parents(".filter-item").find(".jsTitle").data("textorg"), e !== undefined && (t = e), $("a[data-id=" + o + "]").parents(".filter-item").find(".jsTitle span").text(t)) : (e = r.find(".jsTitle").data("textorg"), e !== undefined && (t = e), $(f).parents(".filter-item").find(".jsTitle span").text(t));
    getTextActiveSliderRange()
}

function getTextActiveSliderRange() {
    updateTextActiveRangeMinMax();
    $(".text-active").each(function() {
        var n, t;
        $(this).attr("data-activetxt") !== undefined && ($(this).attr("data-activetxt") !== "" ? $(this).parents(".filter-item").length > 0 && $(this).parents(".filter-item").find(".jsTitle").length > 0 && ($(this).parents(".filter-item").find(".jsTitle span").text($(this).attr("data-activetxt")), $(this).parents(".filter-item").find(".jsTitle").addClass("active")) : (n = !1, $(this).parents(".filter-item").find(".text-active").each(function() { $(this).attr("data-activetxt") !== "" && (n = !0) }), $(this).parents(".filter-item").find(".props a.check").length > 0 && (n = !0), n || (t = $(this).parents(".filter-item").find(".jsTitle").data("textorg"), t !== undefined && t !== "" && $(this).parents(".filter-item").find(".jsTitle span").text(t))))
    })
}

function activeOrUnActiveBlock() {
    $(".filter-total .jsTitle.showing").hasClass("active") ? $(".filter-item .jsTitle").removeClass("active") : $(".jsTitle").removeClass("active");
    $(".c-btnbox.check").each(function() { $(this).parents(".filter-item").length > 0 && $(this).parents(".filter-item").find(".jsTitle").addClass("active") })
}

function activeNewFilterV2(n) { if (n > 0 && $("a[data-newv2='True']").length > 0) { var t = $(".filter-item.hide .props a.check[data-id='" + n + "']"); if (t.length > 0) return $("a[data-newv2='True']").addClass("active"), !0 } return !1 }

function showOrOffManuAndPropDescription() {
    document.isShowManuDes == "True" && showOrOffManuDescription();
    showOrOffPropDescription()
}

function showOrOffManuDescription() {
    if (manuParams.length == 1) {
        var n = 0;
        $(".manu a").each(function() { if (manuParams.indexOf($(this).data("id") + "") >= 0) return n = $(this).data("id"), !1 });
        $.ajax({ url: "/Category/GetDescriptionManu", type: "POST", data: { categoryId: document.cateID === undefined ? 0 : document.cateID, manuId: n }, cache: !0, beforeSend: function() {}, success: function(n) { n != "" && n.trim() != "" ? $(".warpper-manuinfo-new").length > 0 ? $(".warpper-manuinfo-new").replaceWith(n) : $(n).insertBefore($(".box-sort")) : $(".warpper-manuinfo-new").addClass("hide") }, error: function(n) { console.log(n) } })
    } else $(".warpper-manuinfo-new").addClass("hide")
}

function showOrOffPropDescription() {
    if (propsParams.length == 1) {
        var n = 0;
        $(".props a").each(function() { if (propsParams.indexOf($(this).data("id") + "") >= 0) return n = $(this).data("id"), !1 });
        $.ajax({ url: "/Category/GetDescriptionProp", type: "POST", data: { categoryId: document.cateID === undefined ? 0 : document.cateID, propId: n }, cache: !0, beforeSend: function() {}, success: function(n) { n != "" && n.trim() != "" ? $(".info:not(.warpper-manuinfo-new)").length > 0 ? $(".info:not(.warpper-manuinfo-new)").replaceWith(n) : $(n).insertAfter($(".block-scroll.filter")) : $(".info:not(.warpper-manuinfo-new)").addClass("hide") }, error: function(n) { console.log(n) } })
    } else $(".info:not(.warpper-manuinfo-new)").addClass("hide")
}

function afterDoneActivePageIndex() {
    var t = pIdxActive * parseInt(document.pageSize),
        n, i;
    pIdxActive > 0 && isPageIndexLoading == !0 && $(".listing-cate li").eq(t).length > 0 && (isPageIndexLoading = !1, n = $(".listing-cate li").eq(t), $("html, body").animate({ scrollTop: n.offset().top }, 0), i = setTimeout(function() {
        if ($(window).scrollTop() == n.offset().top) {
            clearTimeout(i);
            endActivePageIndex();
            return
        }
        $("html, body").animate({ scrollTop: n.offset().top }, 1e3, function() { endActivePageIndex() })
    }, 500))
}

function endActivePageIndex() {
    pIdxActive = 0;
    pIinFor = 0;
    $("#preloader").hide().removeClass("fixed")
}

function getCookie(n) {
    var i = document.cookie,
        u = n + "=",
        t = i.indexOf("; " + u),
        r;
    if (t == -1) { if (t = i.indexOf(u), t != 0) return null } else t += 2, r = document.cookie.indexOf(";", t), r == -1 && (r = i.length);
    return decodeURI(i.substring(t + u.length, r))
}

function genPaging(n, t, i) {
    var r = parseInt(n / t);
    n == 0 || i > r || $.ajax({ url: "/Category/GenPaging", type: "GET", data: { total: n, pageSize: t, pageIndex: i }, cache: !1, beforeSend: function() {}, success: function(n) { $("#paging").html(n) }, error: function() {} })
}

function CheckRemoveParamChildFilter() { manuParams.length > 1 && propsParams.length > 0 && $(".child-filter .props a.check").length > 0 && $(".child-filter .props a.check").each(function() { propsParams.indexOf($(this).data("id") + "") >= 0 && propsParams.splice(propsParams.indexOf($(this).data("id"), 1)) }) }

function showHideManu(n) {
    var t = remove_unicode($(n).val());
    $(".filter-show .manu a").each(function() {
        if (t.trim() == "") $(this).removeClass("hide").css("display", "flex");
        else {
            var n = remove_unicode($(this).data("href"));
            n.indexOf(t) >= 0 ? $(this).removeClass("hide").css("display", "flex") : $(this).addClass("hide").css("display", "none")
        }
    })
}

function remove_unicode(n) { return n === undefined ? "" : (n = n.toLowerCase(), n = n.replace(/Ă |Ă¡|áº¡|áº£|Ă£|Ă¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g, "a"), n = n.replace(/Ă¨|Ă©|áº¹|áº»|áº½|Ăª|á»|áº¿|á»‡|á»ƒ|á»…/g, "e"), n = n.replace(/Ă¬|Ă­|á»‹|á»‰|Ä©/g, "i"), n = n.replace(/Ă²|Ă³|á»|á»|Ăµ|Ă´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g, "o"), n = n.replace(/Ă¹|Ăº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, "u"), n = n.replace(/á»³|Ă½|á»µ|á»·|á»¹/g, "y"), n = n.replace(/Ä‘/g, "d"), n = n.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-"), n = n.replace(/-+-/g, "-"), n.replace(/^\-+|\-+$/g, "")) }

function showBlockGroupCate(n) {
    var i = $(n),
        t;
    $(".navlink-title").removeClass("act");
    $(".navlink-item .c-listcat-fadeIn").hide();
    t = i.data("id");
    setTimeout(function() {
        $(".navlink-title[data-id=" + t + "]").addClass("act");
        $(".navlink-title[data-id=" + t + "]").next(".navlink-item .c-listcat-fadeIn").fadeIn(200)
    }, 400)
}

function showHideGroupCate(n) {
    var t = remove_unicode($(n).val());
    $(".c-listcat li a").each(function() {
        if (t.trim() == "") resetGroupCateSide();
        else {
            var n = remove_unicode($(this).find(".c-listcat__txt").text());
            n.indexOf(t) >= 0 ? ($(".navlink-title").hide(), $(".navlink-item").addClass("border-none"), $(this).parents(".c-listcat").show(), $(this).parents("li").show(), $(this).show()) : ($(this).parents("li").hide(), $(this).hide())
        }
    });
    t.trim() == "" && $(".txtnb-readmore").removeClass("hide").show()
}

function resetGroupCateSide() {
    $(".navlink-title").show();
    $("#scate").val("");
    $(".navlink-title").removeClass("act");
    $(".c-listcat li a").show();
    $(".c-listcat").hide();
    $(".c-listcat li").show();
    $(".navlink-item").removeClass("border-none")
}

function loadMoreProductOther(n) {
    var i = $(n),
        t = i.prev("ul"),
        r;
    t.length > 0 && (r = 10, $(t).find("li.hide").each(function(n, t) { n < r && $(t).removeClass("hide").addClass("show") }), $(t).find("li.hide").length > 0 ? i.find(".remain").text($(t).find("li.hide").length) : i.hide())
}

function showTabIndexOther(n) {
    function f() {
        var n, r;
        $(".stage-two").remove();
        n = $("ul.listing-cate[id=" + t + "]").find("li").length;
        $("a.vm-pros-other").hide();
        n > i && ($("ul.listing-cate[id=" + t + "]").find("li").each(function(n) { n >= i ? $(this).addClass("hide") : $(this).addClass("show") }), r = $("ul.listing-cate[id=" + t + "]").next("a"), r.removeClass("hide").show().find(".remain").text(n - i));
        $("#preloader").hide();
        $("ul.listing-cate[id=" + t + "]").removeClass("hide").show()
    }
    var r = $(n),
        u = r.data("placeid"),
        t = r.data("bannerid"),
        i = 15;
    u > 0 && ($("ul.listing-cate[id=" + t + "]").find("li").length > 0 ? ($("ul.listing-cate").hide(), f()) : $.ajax({
        url: "/Category/GetProductListByHtmlOrBanner",
        data: { htmlId: 0, placeId: parseInt(u), bannerId: parseInt(t), pageSize: 0, pageIndex: 0 },
        cache: !0,
        type: "POST",
        "async": !0,
        beforeSend: function() { $("#preloader").show() },
        success: function(n) {
            if ($("#empty").remove(), $("ul.listing-cate").hide(), $("ul.listing-cate[id=" + t + "]").html(n), n == "" || n.trim() == "") $("ul.listing-cate[id=" + t + "]").append('<div id="empty"><i class="empty"><\/i>KhĂ´ng cĂ³ sáº£n pháº©m nĂ o phĂ¹ há»£p vá»›i tiĂªu chĂ­ tĂ¬m kiáº¿m!<\/div>');
            f()
        },
        error: function(n) { console.log(n) }
    }))
}

function showAllManuAccessories(n) {
    $(n).remove();
    $(".trademark__list").find("a").removeClass("hide")
}

function loadMoreProductAccessories(n) {
    var t = $(n),
        i, r;
    t.find(".bubblingG").length > 0 || (i = parseInt(t.data("pagesize")), r = 0, pageIndexAccessories += 1, $.ajax({
        url: "/Category/ViewMoreProductAccessories",
        data: { cateID: r, pageSize: i, pageIndex: pageIndexAccessories },
        type: "POST",
        cache: !0,
        beforeSend: function() { t.append(appendLoadingViewMoreNew()) },
        success: function(n) {
            var u = n.total,
                r = u - i * (pageIndexAccessories + 1);
            r <= 0 ? t.hide() : ($(".bubblingG").remove(), t.find(".remain").text(r));
            n.listproducts !== "" && n.listproducts !== null && n.total > 0 && $("#pk_discount .listproduct").append(n.listproducts)
        },
        error: function(n) { console.log(n) }
    }))
}

function replaceListProductWatchPage() {
    console.log("replaceListProductWatchPage_");
    $(document).on("click", ".watch-type .tabs-type span", function(n) {
        var l, f, e, h, c, t, o, s, u, r, i;
        (n.preventDefault(), $(this).hasClass("current")) || (l = $(this), f = !1, $(this).hasClass("watch-smart-watch") && (f = !0), e = !1, h = !1, $(this).hasClass("luxury-watch") && (e = !0), $(this).hasClass("monopoly-watch") && (h = !0), c = 0, t = $(this).data("id"), e && (c = t), o = $(this).data("prop"), s = $(this).text(), t !== undefined && t != "" && ($(this).parent().find("span").removeClass("current").removeClass("active-tab"), $(this).addClass("current").addClass("active-tab"), u = $(this).parent().parent().parent().find(".prt-watch .listproduct"), u.length == 1 && (r = $(this).parent().parent().find("a.see-all"), i = { CategoryId: f ? t : document.cateID, PageSize: 15, StrPropID: f == !1 ? t : o !== undefined && o != "" ? o : "", ManuId: c, IsLuxuryWatch: !1, IsWatchPage: document.isWatch }, e && (i.StrPropID = "", i.IsLuxuryWatch = !0), h && (i.StrPropID = "182616", i.ManuId = t), t != null && t === 147889 && (i.CategoryId = "7077"), $.ajax({
            url: "/Category/GetProductList",
            type: "POST",
            data: i,
            cache: !0,
            beforeSend: function() { $("#preloader").show() },
            success: function(n) {
                var c, l;
                $("#preloader").hide();
                n != "" ? (u.html(n), u.owlCarousel("destroy"), InitProductOwlCarousel(u), r !== undefined && r.length > 0 && (c = "/dong-ho-deo-tay", f ? (c = "/dong-ho-thong-minh#p=" + o, r.attr("href", c)) : e == !1 ? (c = c + "#p=" + i.StrPropID, h && i.ManuId != "" && (c = c + "&m=" + i.ManuId), t != null && t === 147889 && (c = $(".propDVTE").attr("data-link")), r.attr("href", c)) : (c = c + "#m=" + i.ManuId + "&r=604", r.attr("href", c)), l = r.data("text"), f ? l = l.replace("thá»i trang", "thĂ´ng minh") : (e == !1 && (s = s.toLowerCase()), s.toLowerCase() != "Ä‘á»“ng há»“ thá»i trang" && (l = l + " " + s)), r.text(l), r.show())) : (u.owlCarousel("destroy"), u.find("li").remove(), r.hide())
            },
            error: function(n) { console.log(n) }
        }))))
    })
}

function replaceTextSeeAllWatchPage() {
    if ($(".watch-type .tabs-type span.current").length > 0) {
        var r = "",
            i = 0,
            n = "",
            t = "";
        $(".watch-type .tabs-type span.current").each(function() {
            n = "/dong-ho-deo-tay";
            var u = $(this).parent().parent().find("a.see-all");
            r = u.data("text");
            t = $(this).text();
            i = $(this).data("id");
            $(this).hasClass("watch-smart-watch") ? (n = "/dong-ho-thong-minh#p=" + i, u.attr("href", n), t = t.toLowerCase()) : $(this).hasClass("luxury-watch") ? (n = n + "#m=" + i + "&r=604", u.attr("href", n)) : $(this).hasClass("monopoly-watch") ? (n = n + "#m=" + i + "&r=604", u.attr("href", n)) : (n = n + "#p=" + i, u.attr("href", n), t = t.toLowerCase());
            t.includes("Ä‘á»“ng há»“ thá»i trang") || u.text(r + " " + t)
        })
    }
}

function filterProsPKGenuine(n = false) {
    xhrPKGenuine && xhrPKGenuine.abort();
    n ? document.pageIndex += 1 : document.pageIndex = 0;
    var t = cidsParams.length > 0 ? "cids=" + cidsParams.toString() + "&" : "",
        i = "pi=" + (document.pageIndex !== undefined ? document.pageIndex : 0),
        r = extParams.length > 0 ? "ext=" + extParams + "&" : "",
        u = ordersParams != -1 ? "o=" + ordersParams + "&" : "",
        f = additionFilterParam > 0 ? "add=" + additionFilterParam + "&" : "",
        e = document.cateUrl !== "" ? "curl=" + document.cateUrl + "&" : "";
    linkHashPKGenuine = e + t + r + u + f + i;
    linkHashPKGenuine = linkHashPKGenuine.trim() !== "" ? "?" + linkHashPKGenuine : "";
    xhrPKGenuine = $.ajax({
        url: "/Category/FilterAccessoryGenuine" + linkHashPKGenuine,
        type: "POST",
        cache: !0,
        beforeSend: function() { n ? ($(".view-more a").addClass("prevent"), $(".view-more a").append(appendLoadingViewMoreNew())) : ($("#preloader").addClass("fixed"), $("#preloader").show()) },
        success: function(n) {
            var t, r;
            if (console.log(n.textResponseApi), $(".box-sort").removeClass("hide-ext"), $(".box-sort .manu-sort").show(), document.TotalCount = n.total, $(".sort-total b").html(n.total), n.listproducts !== "" && n.listproducts !== null && n.total > 0) {
                if (document.pageIndex == 0) $(".listing-cate").html(n.listproducts), totalAjax = document.TotalCount;
                else {
                    $(".listing-cate").append(n.listproducts);
                    var i = parseInt(document.TotalCount),
                        u = parseInt(document.pageIndex) + 1,
                        f = parseInt(document.pageSize);
                    totalAjax = i > u * f ? i : 0
                }
                showHideViewMore(totalAjax);
                totalAjax > 0 && totalAjax < 5 ? $(".sort-select").hasClass("hide") ? console.log("nothing to do") : $(".sort-select").addClass("hide") : $(".sort-select.hide").removeClass("hide")
            } else t = "", r = '<div id="empty"><i class="empty"><\/i>KhĂ´ng cĂ³ sáº£n pháº©m nĂ o phĂ¹ há»£p vá»›i tiĂªu chĂ­ tĂ¬m kiáº¿m!{back-to-category}<\/div>', document.cateName !== undefined && document.cateName !== "" && (t = '<p><a href="javascript:;" onclick="reloadURL()">Xem táº¥t cáº£ ' + document.cateName.toLowerCase() + "<\/a><\/p>"), $(".listing-cate").html(r.replace("{back-to-category}", t)), $(".box-sort").addClass("hide-ext"), $(".view-more").hide();
            linkHashPKGenuine.charAt(0) == "?" && (linkHashPKGenuine = linkHashPKGenuine.replace(linkHashPKGenuine.charAt(0), ""));
            linkHashPKGenuine[linkHashPKGenuine.length - 1] == "&" && (linkHashPKGenuine = linkHashPKGenuine.substring(0, linkHashPKGenuine.length - 1));
            location.hash = linkHashPKGenuine.replace("#?", "#");
            $("#preloader").hide();
            $(".view-more .bubblingG").remove()
        },
        error: function(n) { console.log(n) }
    })
}

function closeBannerCate() {
    $(".warpper-banner").hide();
    sessionStorage.setItem(keyNameSession, 1)
}

function initSuggestAccess() {
    if (!($("#access-keyword").length <= 0)) {
        isInitSuggestAccess = !0;
        var n = AutoComplete.defaults.KeyboardMappings;
        n.Enter.Callback = function() { redirectSearchAccess(".searchacc") };
        AutoComplete({
            Url: "/Category/SuggestAccessories",
            _QueryArg: function() { return "catId=" + document.cateID + "&cateBaseUrl=" + document.cateUrl + "&term" },
            _Pre: function() { return this.Input.value == "" && $(".autocomplete").hide(), this.Input.value },
            _Blur: function(n) { $(n.relatedTarget).parents(".autocomplete") || $(".suggest-accessory .autocomplete").length > 0 && $(".suggest-accessory .autocomplete").hide() },
            _Focus: function() { $(".suggest-accessory .autocomplete ul li").length > 0 && $(".suggest-accessory .autocomplete").show() },
            _Position: function() {
                this.DOMResults.setAttribute("class", "autocomplete");
                this.DOMResults.setAttribute("class", "hide")
            },
            _Post: function(n) { return $(n).find("li").length > 0 && $(".autocomplete").show(), n },
            _Select: function(n) { location.href = n.firstElementChild.href }
        }, "#access-keyword")
    }
}

function redirectSearchAccess(n) {
    var t = $(n),
        i = t.data("cateid");
    goToSearchPage($("#access-keyword").val(), i)
}

function EventPriceRange() {
    function r(t = false) {
        var i = n.from($("input[name='price-min-value']").val()),
            r = n.from($("input[name='price-max-value']").val());
        i > r || i < minval ? (updateValAndAttrValue($("input[name='price-min-value']"), ToNumberFormat(minval)), i = minval) : updateValAndAttrValue($("input[name='price-min-value']"), ToNumberFormat(i));
        rangePriceSlider.noUiSlider.set([i, r]);
        rangePriceSliderTotal.noUiSlider.set([i, r]);
        t || callFilterRangeSlider()
    }

    function u(t = false) {
        var r = n.from($("input[name='price-min-value']").val()),
            i = n.from($("input[name='price-max-value']").val());
        r > i || i > maxval ? (updateValAndAttrValue($("input[name='price-max-value']"), ToNumberFormat(maxval)), i = maxval) : updateValAndAttrValue($("input[name='price-max-value']"), ToNumberFormat(i));
        rangePriceSlider.noUiSlider.set([r, i]);
        rangePriceSliderTotal.noUiSlider.set([r, i]);
        t || callFilterRangeSlider()
    }
    var n, t, i;
    if (minval != 0 || maxval != 0) {
        $(".noUi-handle").on("click", function() { $(this).width(50) });
        n = wNumb({ decimals: 0, thousand: ".", prefix: "", postfix: "" });
        isTivi ? (t = 1e5, i = 1e4, noUiSlider.create(rangePriceSlider, { start: [minval, maxval], step: 1e3, range: { min: [minval], "70%": isTivi ? [t, i] : [1e3, 1e3], max: [maxval] }, format: n, connect: !0 }), noUiSlider.create(rangePriceSliderTotal, { start: [minval, maxval], step: 1e3, range: { min: [minval], "70%": isTivi ? [t, i] : [1e3, 1e3], max: [maxval] }, format: n, connect: !0 })) : (noUiSlider.create(rangePriceSlider, { start: [minval, maxval], step: 1e3, range: { min: [minval], max: [maxval] }, format: n, connect: !0 }), noUiSlider.create(rangePriceSliderTotal, { start: [minval, maxval], step: 1e3, range: { min: [minval], max: [maxval] }, format: n, connect: !0 }));
        rangePriceSlider.noUiSlider.on("update", function(n, t) { t == 0 ? $('input[name="price-min-value"]').val(n[0]) : $('input[name="price-max-value"]').val(n[1]) });
        rangePriceSliderTotal.noUiSlider.on("update", function(n, t) { t == 0 ? $('input[name="price-min-value"]').val(n[0]) : $('input[name="price-max-value"]').val(n[1]) });
        rangePriceSlider.noUiSlider.on("slide", function(n, t) { t == 0 ? ($(".noUi-handle-upper .popup-price").remove(), $(".noUi-handle-lower .popup-price").length <= 0 && $(".noUi-handle-lower").append('<div class="popup-price"><\/div>')) : t == 1 && ($(".noUi-handle-lower .popup-price").remove(), $(".noUi-handle-upper .popup-price").length <= 0 && $(".noUi-handle-upper").append('<div class="popup-price"><\/div>')) });
        rangePriceSliderTotal.noUiSlider.on("slide", function(n, t) { t == 0 ? ($(".noUi-handle-upper .popup-price").remove(), $(".noUi-handle-lower .popup-price").length <= 0 && $(".noUi-handle-lower").append('<div class="popup-price"><\/div>')) : t == 1 && ($(".noUi-handle-lower .popup-price").remove(), $(".noUi-handle-upper .popup-price").length <= 0 && $(".noUi-handle-upper").append('<div class="popup-price"><\/div>')) });
        rangePriceSlider.noUiSlider.on("change", function(n) {
            updateValAndAttrValue($("input[name='price-min-value']"), n[0]);
            updateValAndAttrValue($("input[name='price-max-value']"), n[1]);
            rangePriceSliderTotal.noUiSlider.set([n[0], n[1]]);
            $(".popup-price").fadeOut();
            callFilterRangeSlider()
        });
        rangePriceSliderTotal.noUiSlider.on("change", function(n) {
            updateValAndAttrValue($("input[name='price-min-value']"), n[0]);
            updateValAndAttrValue($("input[name='price-max-value']"), n[1]);
            rangePriceSlider.noUiSlider.set([n[0], n[1]]);
            $(".popup-price").fadeOut();
            callFilterRangeSlider()
        });
        $('input[name="price-min-value"]').keyup(function(n) {
            if (n.keyCode == 13) r();
            else {
                var t = ToNumberFormat(n.currentTarget.value.replaceAll(".", "")).toString();
                $('input[name="price-min-value"]').attr("value", t);
                $('input[name="price-min-value"]').val(t)
            }
        });
        $("input[name='price-max-value']").keyup(function(n) {
            if (n.keyCode == 13) u();
            else {
                var t = ToNumberFormat(n.currentTarget.value.replaceAll(".", "")).toString();
                $("input[name='price-max-value']").attr("value", t);
                $("input[name='price-max-value']").val(t)
            }
        });
        $("input[name='price-min-value']").focus(function() { this.setSelectionRange(0, this.value.length) });
        $("input[name='price-max-value']").focus(function() { this.setSelectionRange(0, this.value.length) });
        $("input[name='price-min-value']").blur(function() { return r(), !1 });
        $("input[name='price-max-value']").blur(function() { return u(), !1 })
    }
}

function EventPropRange() {
    function t(n) {
        var t = $(n),
            i = t.val(),
            u = t.hasClass("min"),
            f = t.hasClass("max"),
            r = !1;
        return u && parseInt(i) < parseInt(t.data("minvalue")) || parseInt(i) > parseInt(t.parents(".prop-minmax").find("input.max").val()) ? r = !0 : (f && parseInt(i) > parseInt(t.data("maxvalue")) || parseInt(i) < parseInt(t.parents(".prop-minmax").find("input.min").val())) && (r = !0), r
    }

    function n(n) {
        var r = $(n).val(),
            u = $(n).hasClass("min"),
            f = $(n).hasClass("max"),
            i = !1;
        (r == "" || t(n)) && (i = !0);
        i && (u ? updateValAndAttrValue($(n), ToNumberFormat($(n).data("minvalue"))) : f && updateValAndAttrValue($(n), ToNumberFormat($(n).data("maxvalue"))));
        getOrRemoveRangeParamByName($(n));
        updateTextActiveRangeMinMax()
    }
    $(".prop-minmax input").keyup(function(t) {
        var i = $(this).val();
        updateValAndAttrValue($(this), ToNumberFormat(i));
        t.keyCode == 13 && (n(this), totalFilterPros())
    });
    $(".prop-minmax input").blur(function(t) {
        n(this);
        $(t.relatedTarget).hasClass("btn-filter-readmore") || totalFilterPros()
    })
}

function ToNumberFormat(n) { return numeral(n).format("0,0").replaceAll(",", ".") }

function resetPriceRange() {
    $(".price-slider-active").remove();
    rangePriceSlider !== null && (rangePriceSlider.noUiSlider.set([minval, maxval]), rangePriceSliderTotal.noUiSlider.set([minval, maxval]), updateValAndAttrValue($("input[name='price-min-value']"), ToNumberFormat(minval)), updateValAndAttrValue($("input[name='price-max-value']"), ToNumberFormat(maxval)), $(".price-slider").attr("data-activetxt", ""))
}

function resetPropRange(n) {
    var t = $(n);
    t.find("input").each(function() {
        updateValAndAttrValue(t.find("input.min"), ToNumberFormat($(this).data("minvalue")));
        updateValAndAttrValue(t.find("input.max"), ToNumberFormat($(this).data("maxvalue")))
    });
    t.find(".text-active").attr("data-activetxt", "")
}

function loadPriceRangeSlider(n) {
    var t = $(n);
    $(".price-slider").find(".range-toggle span").toggleClass("down");
    resetPriceRange();
    $(".price-slider .container").is(":visible") == !1 ? ($(".price-slider .container").slideDown(), $(".price a.check").length > 0 && ($(".price a.check").each(function() {
        var n = this.dataset.id;
        rangeParams.indexOf(n) >= 0 && (rangeParams.splice(rangeParams.indexOf(n), 1), autoAddorRemoveFilterActive(this, null), $(".price a[data-id=" + n + "]").removeClass("check"))
    }), totalFilterPros())) : ($(".price-slider .container").slideUp(), callFilterRangeSlider(!0))
}

function loadRangeInput(n) {
    var i = $(n),
        t;
    resetPropRange(n);
    t = i.parents(".prop-minmax").attr("data-type");
    $(".prop-minmax." + t).find(".range-toggle span").toggleClass("down");
    $(".prop-minmax." + t).find("span.down").length > 0 ? ($(".prop-minmax." + t).find(".container").slideDown(), $(".prop-minmax." + t).parents(".props").find("a.check").length > 0 && ($(".prop-minmax." + t).parents(".props").find("a.check").each(function() {
        var n = this.dataset.id;
        propsParams.indexOf(n) >= 0 && (propsParams.splice(propsParams.indexOf(n), 1), $(".props a[data-id=" + n + "]").removeClass("check"))
    }), totalFilterPros())) : $(".prop-minmax." + t).parents(".props").find(".container").slideUp()
}

function callFilterRangeSlider(n = false) {
    priceRangeParams = n ? "" : $('input[name="price-min-value"]').val().split(".").join("") + "-" + $('input[name="price-max-value"]').val().split(".").join("");
    totalFilterPros();
    updateTextActiveRangeMinMax()
}

function updateValAndAttrValue(n, t) {
    n.each(function() {
        $(this).attr("value", t);
        $(this).val(t)
    })
}

function updateTextActiveRangeMinMax() {
    function n(n) { $(".text-active." + n).attr("data-activetxt", "") }

    function t(n) {
        var r = $("input[name=" + n + "-min-value").val() !== "0" ? $("input[name=" + n + "-min-value").val() : "0",
            u = $("input[name=" + n + "-max-value").val() !== "0" ? $("input[name=" + n + "-max-value").val() : "0",
            t = $(".text-active." + n).attr("data-unit"),
            i, f;
        r == "0" && u == "0" || r == "" && u == "" ? $(".text-active." + n).attr("data-activetxt", "") : t !== undefined && t !== "" && ($(".filter-item .text-active." + n).find(".prop-minmax-input").addClass("has-value"), t = " " + t, i = "Tá»« ", f = !1, $(".text-active." + n).parent().find(".prop-minmax").length > 1 && $(".filter-item .prop-minmax-input.has-value").length > 1 && (f = !0), n == "width" ? i = "Ngang " : n == "height" ? i = "Cao " : n == "deep" && (i = "SĂ¢u "), $(".text-active." + n).attr("data-activetxt", i + r + t + " - " + u + t + (f ? ",..." : "")));
        autoAddorRemoveFilterActive()
    }
    var u, e, f;
    if (priceRangeParams !== "") {
        var i = $('input[name="price-min-value"]').val() !== "0" ? $('input[name="price-min-value"]').val() + ".000" : "0",
            r = $('input[name="price-max-value"]').val() !== "0" ? $('input[name="price-max-value"]').val() + ".000" : "0",
            o = parseInt($('input[name="price-min-value"]').val().replaceAll(".", "")) >= minval && parseInt($('input[name="price-min-value"]').val().replaceAll(".", "")) <= maxval;
        o || (u = ToNumberFormat(minval), updateValAndAttrValue($('input[name="price-min-value"]'), u), i = u);
        e = parseInt($('input[name="price-max-value"]').val().replaceAll(".", "")) <= maxval && parseInt($('input[name="price-max-value"]').val().replaceAll(".", "")) >= minval;
        e || (f = ToNumberFormat(maxval), updateValAndAttrValue($('input[name="price-max-value"]'), f), r = f);
        i == "0" && r == "0" ? $(".price-slider").attr("data-activetxt", "") : $(".price-slider").attr("data-activetxt", "Tá»« " + i + "Ä‘ - " + r + "Ä‘");
        autoAddorRemoveFilterActive()
    }
    RangeObj.CapacityRangeParams !== "" ? t("capacity") : n("capacity");
    RangeObj.HeightRangeParams !== "" ? t("height") : n("height");
    RangeObj.WidthRangeParams !== "" ? t("width") : n("width");
    RangeObj.DeepRangeParams !== "" ? t("deep") : n("deep")
}

function getOrRemoveRangeParamByName(n, t = false) {
    function r(n, t, i = false) {
        var r = n.hasClass("min") ? n.val() : $("input[name=" + t + "-min-value]").val(),
            u = n.hasClass("max") ? n.val() : $("input[name=" + t + "-max-value]").val();
        r = r == "" ? $("input[name=" + t + "-min-value]").attr("data-minvalue") : r;
        u = u == "" ? $("input[name=" + t + "-max-value]").attr("data-maxvalue") : u;
        i ? (n.parents(".prop-minmax-input").removeClass("has-value"), r = "", u = "") : n.parents(".prop-minmax-input").addClass("has-value");
        updateValAndAttrValue($("input[name=" + t + "-min-value]"), r);
        updateValAndAttrValue($("input[name=" + t + "-max-value]"), u)
    }
    var i = $(n);
    if (document.cateID == "1943" || document.cateID == "1944") {
        if (i.attr("name").indexOf("capacity") >= 0) {
            if (r(i, "capacity", t), t) {
                RangeObj.CapacityRangeParams = "";
                i.parents(".props").find(".prop-minmax .container").slideUp();
                i.parents(".props").find(".prop-minmax .range-toggle span").removeClass("down");
                return
            }
            RangeObj.CapacityRangeParams = $("input[name=capacity-min-value]").attr("value") + "-" + $("input[name=capacity-max-value]").attr("value")
        }
        if (i.attr("name").indexOf("height") >= 0) {
            if (r(i, "height", t), t) { RangeObj.HeightRangeParams = ""; return }
            RangeObj.HeightRangeParams = $("input[name=height-min-value]").attr("value") + "-" + $("input[name=height-max-value]").attr("value")
        }
        if (i.attr("name").indexOf("width") >= 0) {
            if (r(i, "width", t), t) { RangeObj.WidthRangeParams = ""; return }
            RangeObj.WidthRangeParams = $("input[name=width-min-value]").attr("value") + "-" + $("input[name=width-max-value]").attr("value")
        }
        if (i.attr("name").indexOf("deep") >= 0) {
            if (r(i, "deep", t), t) { RangeObj.DeepRangeParams = ""; return }
            RangeObj.DeepRangeParams = $("input[name=deep-min-value]").attr("value") + "-" + $("input[name=deep-max-value]").attr("value")
        }
    }
}

function AutoActiveBoxOther() {
    var n = window.location.hash.replace("#", "");
    n !== undefined && n !== "" && $(".ht-sale .ht-sale__tab li").each(function() { var t = $(this).data("activeurl"); if (t !== undefined && t.trim() === n) return $(this).trigger("click"), scrollByTag(".ht-sale"), !1 })
}

function LoadNewProductMergingByID() {
    $(document).on("click", ".prods-group ul li", function(n) {
        var t = $(this);
        if ((n.preventDefault(), !$(this).hasClass("act")) && t.data("id") !== "" && parseInt(t.data("id")) > 0) {
            var i = t.parents(".prods-group").data("lstarranged"),
                r = t.parents(".prods-group").data("mergename"),
                u = $("#preloader")[0].outerHTML;
            $.ajax({
                url: "/Category/LoadNewProductMergingByID",
                type: "POST",
                cache: !0,
                data: { productId: parseInt(t.data("id")), mergeProductName: r, lstProductArranged: i, isFilter: document.IsFilter == "True" },
                "async": !0,
                beforeSend: function() {
                    t.parents("li.item").addClass("loading-merge");
                    t.parents("li.item").append(u);
                    t.parents(".prods-group").find("li").removeClass("act");
                    $(".loading-merge #preloader").show()
                },
                success: function(n) {
                    $(".loading-merge #preloader").remove();
                    t.parents("li.item").removeClass("loading-merge");
                    t.parents("li.item").replaceWith(n)
                },
                error: function(n) { console.log(n) }
            })
        }
    })
}

function autoAddorRemoveFilterActive(n, t) {
    var u;
    if (!($(".list-filter-active").length <= 0)) {
        if (n !== undefined && n !== null && $(n).length > 0) { $(".list-filter-active a[data-id=" + $(n).data("id") + "]").length > 0 && $(".list-filter-active a[data-id=" + $(n).data("id") + "]").remove(); return }
        var f = !1,
            r = 0,
            i = '<a href="javascript:;" onclick="removeFilterActive(this)" data-type="{type}" data-id="{id}"><span>{text}<\/span><i class="iconcate-closess"><\/i><\/a>';
        if (t !== undefined && t !== null && $(t).length > 0 && (f = !0, r = $(t).parents(".manu").length > 0 ? 1 : 0, r = r <= 0 ? $(t).parents(".price").length > 0 ? 2 : 0 : r, r = r <= 0 ? $(t).parents(".props").length > 0 ? 3 : 0 : r), f) {
            i = i.replace("{type}", r);
            switch (r) {
                case 1:
                    if ($(".list-filter-active .manu a[data-id=" + $(t).data("id") + "]").length > 0) break;
                    i = i.replace("{id}", $(t).data("id"));
                    i = i.replace("{text}", $(t).data("name"));
                    $(".list-filter-active .manu").append(i);
                    break;
                case 2:
                    if ($(".list-filter-active .price a[data-id=" + $(t).data("id") + "]").length > 0) break;
                    i = i.replace("{id}", $(t).data("id"));
                    i = i.replace("{text}", $(t).text());
                    $(".list-filter-active .price").append(i);
                    break;
                case 3:
                    if ($(".list-filter-active .props a[data-id=" + $(t).data("id") + "]").length > 0) break;
                    i = i.replace("{id}", $(t).data("id"));
                    i = i.replace("{text}", $(t).text());
                    $(".list-filter-active .props").append(i)
            }
        } else $(".price-slider").length > 0 && $(".price-slider").first()[0].dataset.activetxt !== "" && ($(".price-slider-active").remove(), u = '<a href="javascript:;" class="price-slider-active" onclick="resetPriceRangeOnLstFilterActive()"><span>{text}<\/span><i class="iconcate-closess"><\/i><\/a>', u = u.replace("{text}", $(".price-slider").first()[0].dataset.activetxt), $(".list-filter-active .price").append(u)), $(".prop-minmax-input.has-value").length > 0 && $(".prop-minmax-input.has-value").each(function() {
            let n = $(this).parents(".prop-minmax");
            if ($(n).length > 0 && parseInt($(n).attr("data-type")) !== "") {
                var t = '<a href="javascript:;" class="prop-slider-active" data-type="{type}"><span>{text}<\/span><i class="iconcate-closess"><\/i><\/a>',
                    i = $(n).attr("data-type");
                if ($(".prop-slider-active[data-type=" + i + "]").length > 0 && $(".prop-slider-active[data-type=" + i + "]").remove(), $(n).attr("data-activetxt") == undefined || $(n).attr("data-activetxt") == "") return !1;
                t = t.replaceAll("{type}", $(n).attr("data-type"));
                t = t.replace("{text}", $(n).attr("data-activetxt").replace(",...", ""));
                $(".list-filter-active .props-slider").append(t)
            }
        })
    }
}

function removeFilterActive(n) {
    var t = parseInt($(n).data("type"));
    if (t > 0) $(n).remove();
    else return;
    switch (t) {
        case 1:
            $(".show-total-item .manu a[data-id=" + $(n).data("id") + "]").hasClass("check") && $(".show-total-item .manu a[data-id=" + $(n).data("id") + "]").trigger("click");
            break;
        case 2:
            $(".show-total-item .price a[data-id=" + $(n).data("id") + "]").hasClass("check") && $(".show-total-item .price a[data-id=" + $(n).data("id") + "]").trigger("click");
            break;
        case 3:
            $(".show-total-item .props a[data-id=" + $(n).data("id") + "]").hasClass("check") && $(".show-total-item .props a[data-id=" + $(n).data("id") + "]").trigger("click")
    }
}

function removeAllFilterActive() { $(".show-total-main .btn-filter-close").trigger("click") }

function hideShowClrFilter() { $(".list-filter-active a").not(".clr-filter").length >= 2 ? $(".list-filter-active a.clr-filter").show() : $(".list-filter-active a.clr-filter").hide() }

function hideShowListActiveFilter() { $(".list-filter-active a").not(".clr-filter").length >= 1 ? $(".list-filter-active").show() : $(".list-filter-active").hide() }

function resetPriceRangeOnLstFilterActive() {
    resetPriceRange();
    callFilterRangeSlider(!0)
}

function resetPropRangeLstFilterActive(n) {
    $(".prop-minmax." + n).find("input").each(function() { getOrRemoveRangeParamByName($(this), !0) });
    totalFilterPros();
    $(".prop-minmax." + n).find("input").val("")
}

function LoadProductPromote() {
    var n = !1;
    $(window).scroll(function() {
        !n && $(".banner__promote").length > 0 && $(this).scrollTop() > 1e3 && (n = !0, $(".banner__promote").each(function(n, t) {
            var i = $(t).find("ul"),
                r = i.data("placeid"),
                u = i.data("bannerid");
            $.ajax({
                url: "/Category/GetProductListByHtmlOrBanner",
                data: { htmlId: 0, placeId: parseInt(r), bannerId: parseInt(u), pageSize: 0, pageIndex: 0 },
                cache: !0,
                type: "POST",
                "async": !0,
                beforeSend: function() {},
                success: function(n) {
                    (n != "" || n.trim() != "") && (i.html(n), i.addClass("listproduct listproduct-col4"), i.owlCarousel({ nav: !0, items: 4, slideBy: 4, loop: !1, rewind: !0, dots: !0, lazyLoad: !0 }))
                },
                error: function() {}
            })
        }))
    })
}

function hasScrollBarWhatEver(n) { var t = n.get(0); return { vertical: t.scrollHeight > t.clientHeight, horizontal: t.scrollWidth > t.clientWidth } }

function showPopupSS() {
    $.ajax({
        url: "/Category/ShowPopupSS",
        type: "GET",
        cache: !0,
        data: { cateId: document.cateID, cateParentId: document.cateParentId },
        "async": !0,
        beforeSend: function() {},
        success: function(n) {
            $("body").append(n);
            $("body").css({ "overflow-y": "hidden" });
            $(".slide-image-ss img").length > 1 && $(".slide-image-ss").owlCarousel({ items: 1, loop: !1, rewind: !0, dots: !0, autoplay: !1, lazyLoad: !1, nav: !0, autoplayHoverPause: !0 })
        },
        error: function(n) { console.log(n) }
    })
}

function closePopupSS() {
    $("body").css({ "overflow-y": "auto" });
    $(".model-popup").remove()
}
var xhrFilter, xhr, previousRequest, createCookie, xhrPKGenuine, linkHashPKGenuine, rangePriceSlider, rangePriceSliderTotal;
(function(n, t) {
    "use strict";
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) { if (!n.document) throw new Error("jQuery requires a window with a document"); return t(n) } : t(n)
})(typeof window != "undefined" ? window : this, function(n, t) {
    "use strict";

    function yr(n, t, i) {
        i = i || f;
        var r, e, u = i.createElement("script");
        if (u.text = n, t)
            for (r in re) e = t[r] || t.getAttribute && t.getAttribute(r), e && u.setAttribute(r, e);
        i.head.appendChild(u).parentNode.removeChild(u)
    }

    function rt(n) { return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? ti[ar.call(n)] || "object" : typeof n }

    function ai(n) {
        var t = !!n && "length" in n && n.length,
            i = rt(n);
        return u(n) || it(n) ? !1 : i === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }

    function l(n, t) { return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase() }

    function yi(n, t, r) { return u(t) ? i.grep(n, function(n, i) { return !!t.call(n, i, n) !== r }) : t.nodeType ? i.grep(n, function(n) { return n === t !== r }) : typeof t != "string" ? i.grep(n, function(n) { return ni.call(t, n) > -1 !== r }) : i.filter(t, n, r) }

    function iu(n, t) { while ((n = n[t]) && n.nodeType !== 1); return n }

    function ue(n) { var t = {}; return i.each(n.match(a) || [], function(n, i) { t[i] = !0 }), t }

    function ft(n) { return n }

    function ri(n) { throw n; }

    function ru(n, t, i, r) { var f; try { n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(undefined, [n].slice(r)) } catch (n) { i.apply(undefined, [n]) } }

    function fi() {
        f.removeEventListener("DOMContentLoaded", fi);
        n.removeEventListener("load", fi);
        i.ready()
    }

    function oe(n, t) { return t.toUpperCase() }

    function y(n) { return n.replace(fe, "ms-").replace(ee, oe) }

    function pt() { this.expando = i.expando + pt.uid++ }

    function ce(n) { return n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : n === +n + "" ? +n : se.test(n) ? JSON.parse(n) : n }

    function fu(n, t, i) {
        var r;
        if (i === undefined && n.nodeType === 1)
            if (r = "data-" + t.replace(he, "-$&").toLowerCase(), i = n.getAttribute(r), typeof i == "string") {
                try { i = ce(i) } catch (u) {}
                o.set(n, t, i)
            } else i = undefined;
        return i
    }

    function ou(n, t, r, u) {
        var s, h, c = 20,
            l = u ? function() { return u.cur() } : function() { return i.css(n, t, "") },
            o = l(),
            e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = n.nodeType && (i.cssNumber[t] || e !== "px" && +o) && wt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o = o / 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f = f / h;
            f = f * 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s
    }

    function ae(n) {
        var r, f = n.ownerDocument,
            u = n.nodeName,
            t = pi[u];
        return t ? t : (r = f.body.appendChild(f.createElement(u)), t = i.css(r, "display"), r.parentNode.removeChild(r), t === "none" && (t = "block"), pi[u] = t, t)
    }

    function st(n, t) { for (var e, u, f = [], i = 0, o = n.length; i < o; i++)(u = n[i], u.style) && (e = u.style.display, t ? (e === "none" && (f[i] = r.get(u, "display") || null, f[i] || (u.style.display = "")), u.style.display === "" && bt(u) && (f[i] = ae(u))) : e !== "none" && (f[i] = "none", r.set(u, "display", e))); for (i = 0; i < o; i++) f[i] != null && (n[i].style.display = f[i]); return n }

    function s(n, t) { var r; return (r = typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll(t || "*") : [], t === undefined || t && l(n, t)) ? i.merge([n], r) : r }

    function wi(n, t) { for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval")) }

    function lu(n, t, r, u, f) {
        for (var e, o, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if (e = n[l], e || e === 0)
                if (rt(e) === "object") i.merge(y, e.nodeType ? [e] : e);
                else if (cu.test(e)) {
            for (o = o || h.appendChild(t.createElement("div")), p = (su.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) o = o.lastChild;
            i.merge(y, o.childNodes);
            o = h.firstChild;
            o.textContent = ""
        } else y.push(t.createTextNode(e));
        for (h.textContent = "", l = 0; e = y[l++];) {
            if (u && i.inArray(e, u) > -1) { f && f.push(e); continue }
            if (w = ot(e), o = s(h.appendChild(e), "script"), w && wi(o), r)
                for (v = 0; e = o[v++];) hu.test(e.type || "") && r.push(e)
        }
        return h
    }

    function ht() { return !0 }

    function ct() { return !1 }

    function pe(n, t) { return n === we() == (t === "focus") }

    function we() { try { return f.activeElement } catch (n) {} }

    function bi(n, t, r, u, f, e) {
        var o, s;
        if (typeof t == "object") { typeof r != "string" && (u = u || r, r = undefined); for (s in t) bi(n, s, r, u, t[s], e); return n }
        if (u == null && f == null ? (f = r, u = r = undefined) : f == null && (typeof r == "string" ? (f = u, u = undefined) : (f = u, u = r, r = undefined)), f === !1) f = ct;
        else if (!f) return n;
        return e === 1 && (o = f, f = function(n) { return i().off(n), o.apply(this, arguments) }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function() { i.event.add(this, t, f, u, r) })
    }

    function ei(n, t, u) {
        if (!u) { r.get(n, t) === undefined && i.event.add(n, t, ht); return }
        r.set(n, t, !1);
        i.event.add(n, t, {
            namespace: !1,
            handler: function(n) {
                var o, e, f = r.get(this, t);
                if (n.isTrigger & 1 && this[t]) {
                    if (f.length)(i.event.special[t] || {}).delegateType && n.stopPropagation();
                    else if (f = k.call(arguments), r.set(this, t, f), o = u(this, t), this[t](), e = r.get(this, t), f !== e || o ? r.set(this, t, !1) : e = {}, f !== e) return n.stopImmediatePropagation(), n.preventDefault(), e.value
                } else f.length && (r.set(this, t, { value: i.event.trigger(i.extend(f[0], i.Event.prototype), f.slice(1), this) }), n.stopImmediatePropagation())
            }
        })
    }

    function vu(n, t) { return l(n, "table") && l(t.nodeType !== 11 ? t : t.firstChild, "tr") ? i(n).children("tbody")[0] || n : n }

    function ge(n) { return n.type = (n.getAttribute("type") !== null) + "/" + n.type, n }

    function no(n) { return (n.type || "").slice(0, 5) === "true/" ? n.type = n.type.slice(5) : n.removeAttribute("type"), n }

    function yu(n, t) {
        var f, s, e, h, c, l, u;
        if (t.nodeType === 1) {
            if (r.hasData(n) && (h = r.get(n), u = h.events, u)) {
                r.remove(t, "handle events");
                for (e in u)
                    for (f = 0, s = u[e].length; f < s; f++) i.event.add(t, e, u[e][f])
            }
            o.hasData(n) && (c = o.access(n), l = i.extend({}, c), o.set(t, l))
        }
    }

    function to(n, t) {
        var i = t.nodeName.toLowerCase();
        i === "input" && kt.test(n.type) ? t.checked = n.checked : (i === "input" || i === "textarea") && (t.defaultValue = n.defaultValue)
    }

    function lt(n, t, f, o) {
        t = lr(t);
        var a, b, l, v, h, y, c = 0,
            p = n.length,
            d = p - 1,
            w = t[0],
            k = u(w);
        if (k || p > 1 && typeof w == "string" && !e.checkClone && ke.test(w)) return n.each(function(i) {
            var r = n.eq(i);
            k && (t[0] = w.call(this, i, r.html()));
            lt(r, t, f, o)
        });
        if (p && (a = lu(t, n[0].ownerDocument, !1, n, o), b = a.firstChild, a.childNodes.length === 1 && (a = b), b || o)) {
            for (l = i.map(s(a, "script"), ge), v = l.length; c < p; c++) h = a, c !== d && (h = i.clone(h, !0, !0), v && i.merge(l, s(h, "script"))), f.call(n[c], h, c);
            if (v)
                for (y = l[l.length - 1].ownerDocument, i.map(l, no), c = 0; c < v; c++) h = l[c], hu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(y, h) && (h.src && (h.type || "").toLowerCase() !== "module" ? i._evalUrl && !h.noModule && i._evalUrl(h.src, { nonce: h.nonce || h.getAttribute("nonce") }, y) : yr(h.textContent.replace(de, ""), h, y))
        }
        return n
    }

    function pu(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0;
            (u = e[f]) != null; f++) r || u.nodeType !== 1 || i.cleanData(s(u)), u.parentNode && (r && ot(u) && wi(s(u, "script")), u.parentNode.removeChild(u));
        return n
    }

    function dt(n, t, r) { var o, s, h, u, f = n.style; return r = r || oi(n), r && (u = r.getPropertyValue(t) || r[t], u !== "" || ot(n) || (u = i.style(n, t)), !e.pixelBoxStyles() && ki.test(u) && io.test(t) && (o = f.width, s = f.minWidth, h = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = o, f.minWidth = s, f.maxWidth = h)), u !== undefined ? u + "" : u }

    function bu(n, t) { return { get: function() { if (n()) { delete this.get; return } return (this.get = t).apply(this, arguments) } } }

    function ro(n) {
        for (var i = n[0].toUpperCase() + n.slice(1), t = ku.length; t--;)
            if (n = ku[t] + i, n in du) return n
    }

    function di(n) { var t = i.cssProps[n] || gu[n]; return t ? t : n in du ? n : gu[n] = ro(n) || n }

    function rf(n, t, i) { var r = wt.exec(t); return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t }

    function gi(n, t, r, u, f, e) {
        var o = t === "width" ? 1 : 0,
            h = 0,
            s = 0;
        if (r === (u ? "border" : "content")) return 0;
        for (; o < 4; o += 2) r === "margin" && (s += i.css(n, r + b[o], !0, f)), u ? (r === "content" && (s -= i.css(n, "padding" + b[o], !0, f)), r !== "margin" && (s -= i.css(n, "border" + b[o] + "Width", !0, f))) : (s += i.css(n, "padding" + b[o], !0, f), r !== "padding" ? s += i.css(n, "border" + b[o] + "Width", !0, f) : h += i.css(n, "border" + b[o] + "Width", !0, f));
        return !u && e >= 0 && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0), s
    }

    function uf(n, t, r) {
        var f = oi(n),
            c = !e.boxSizingReliable() || r,
            o = c && i.css(n, "boxSizing", !1, f) === "border-box",
            s = o,
            u = dt(n, t, f),
            h = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ki.test(u)) {
            if (!r) return u;
            u = "auto"
        }
        return (!e.boxSizingReliable() && o || !e.reliableTrDimensions() && l(n, "tr") || u === "auto" || !parseFloat(u) && i.css(n, "display", !1, f) === "inline") && n.getClientRects().length && (o = i.css(n, "boxSizing", !1, f) === "border-box", s = h in n, s && (u = n[h])), u = parseFloat(u) || 0, u + gi(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
    }

    function h(n, t, i, r, u) { return new h.prototype.init(n, t, i, r, u) }

    function nr() { si && (f.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(nr) : n.setTimeout(nr, i.fx.interval), i.fx.tick()) }

    function of() { return n.setTimeout(function() { at = undefined }), at = Date.now() }

    function hi(n, t) {
        var r, u = 0,
            i = { height: n };
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = b[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function sf(n, t, i) {
        for (var u, f = (v.tweeners[t] || []).concat(v.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function eo(n, t, u) {
        var f, y, w, c, b, s, o, l, k = "width" in t || "height" in t,
            v = this,
            p = {},
            h = n.style,
            a = n.nodeType && bt(n),
            e = r.get(n, "fxshow");
        u.queue || (c = i._queueHooks(n, "fx"), c.unqueued == null && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() { c.unqueued || b() }), c.unqueued++, v.always(function() {
            v.always(function() {
                c.unqueued--;
                i.queue(n, "fx").length || c.empty.fire()
            })
        }));
        for (f in t)
            if (y = t[f], ff.test(y)) {
                if (delete t[f], w = w || y === "toggle", y === (a ? "hide" : "show"))
                    if (y === "show" && e && e[f] !== undefined) a = !0;
                    else continue;
                p[f] = e && e[f] || i.style(n, f)
            }
        if (s = !i.isEmptyObject(t), s || !i.isEmptyObject(p)) {
            k && n.nodeType === 1 && (u.overflow = [h.overflow, h.overflowX, h.overflowY], o = e && e.display, o == null && (o = r.get(n, "display")), l = i.css(n, "display"), l === "none" && (o ? l = o : (st([n], !0), o = n.style.display || o, l = i.css(n, "display"), st([n]))), (l === "inline" || l === "inline-block" && o != null) && i.css(n, "float") === "none" && (s || (v.done(function() { h.display = o }), o == null && (l = h.display, o = l === "none" ? "" : l)), h.display = "inline-block"));
            u.overflow && (h.overflow = "hidden", v.always(function() {
                h.overflow = u.overflow[0];
                h.overflowX = u.overflow[1];
                h.overflowY = u.overflow[2]
            }));
            s = !1;
            for (f in p) s || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", { display: o }), w && (e.hidden = !a), a && st([n], !0), v.done(function() {
                a || st([n]);
                r.remove(n, "fxshow");
                for (f in p) i.style(n, f, p[f])
            })), s = sf(a ? e[f] : 0, f, v), f in e || (e[f] = s.start, a && (s.end = s.start, s.start = 0))
        }
    }

    function oo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = y(r), e = t[f], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function v(n, t, r) {
        var o, s, h = 0,
            a = v.prefilters.length,
            e = i.Deferred().always(function() { delete l.elem }),
            l = function() { if (s) return !1; for (var o = at || of(), t = Math.max(0, f.startTime + f.duration - o), h = t / f.duration || 0, i = 1 - h, r = 0, u = f.tweens.length; r < u; r++) f.tweens[r].run(i); return (e.notifyWith(n, [f, i, t]), i < 1 && u) ? t : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1) },
            f = e.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, { specialEasing: {}, easing: i.easing._default }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: at || of(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) { var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing); return f.tweens.push(u), u },
                stop: function(t) {
                    var i = 0,
                        r = t ? f.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < r; i++) f.tweens[i].run(1);
                    return t ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]), this
                }
            }),
            c = f.props;
        for (oo(c, f.opts.specialEasing); h < a; h++)
            if (o = v.prefilters[h].call(f, n, c, f.opts), o) return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)), o;
        return i.map(c, sf, f), u(f.opts.start) && f.opts.start.call(n, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), i.fx.timer(i.extend(l, { elem: n, anim: f, queue: f.opts.queue })), f
    }

    function nt(n) { var t = n.match(a) || []; return t.join(" ") }

    function tt(n) { return n.getAttribute && n.getAttribute("class") || "" }

    function tr(n) { return Array.isArray(n) ? n : typeof n == "string" ? n.match(a) || [] : [] }

    function fr(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function(t, i) { r || so.test(n) ? u(n, i) : fr(n + "[" + (typeof i == "object" && i != null ? t : "") + "]", i, r, u) });
        else if (r || rt(t) !== "object") u(n, t);
        else
            for (f in t) fr(n + "[" + f + "]", t[f], r, u)
    }

    function bf(n) {
        return function(t, i) {
            typeof t != "string" && (i = t, t = "*");
            var r, f = 0,
                e = t.toLowerCase().match(a) || [];
            if (u(i))
                while (r = e[f++]) r[0] === "+" ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }

    function kf(n, t, r, u) {
        function e(s) { var h; return f[s] = !0, i.each(n[s] || [], function(n, i) { var s = i(t, r, u); if (typeof s != "string" || o || f[s]) { if (o) return !(h = s) } else return t.dataTypes.unshift(s), e(s), !1 }), h }
        var f = {},
            o = n === er;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function sr(n, t) { var r, u, f = i.ajaxSettings.flatOptions || {}; for (r in t) t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]); return u && i.extend(!0, n, u), n }

    function bo(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes; r[0] === "*";) r.shift(), e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) { r.unshift(u); break }
        if (r[0] in i) f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) { f = u; break }
                o || (o = u)
            }
            f = f || o
        }
        if (f) return f !== r[0] && r.unshift(f), i[f]
    }

    function ko(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift(), u)
                if (u === "*") u = e;
                else if (e !== "*" && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) { f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1])); break }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try { t = f(t) } catch (l) { return { state: "parsererror", error: f ? l : "No conversion from " + e + " to " + u } }
        }
        return { state: "success", data: t }
    }
    var p = [],
        cr = Object.getPrototypeOf,
        k = p.slice,
        lr = p.flat ? function(n) { return p.flat.call(n) } : function(n) { return p.concat.apply([], n) },
        li = p.push,
        ni = p.indexOf,
        ti = {},
        ar = ti.toString,
        ii = ti.hasOwnProperty,
        vr = ii.toString,
        ie = vr.call(Object),
        e = {},
        u = function(n) { return typeof n == "function" && typeof n.nodeType != "number" },
        it = function(n) { return n != null && n === n.window },
        f = n.document,
        re = { type: !0, src: !0, nonce: !0, noModule: !0 },
        pr = "3.5.1",
        i = function(n, t) { return new i.fn.init(n, t) },
        d, vi, kr, dr, gr, nu, tu, a, uu, ui, et, bt, pi, c, cu, at, si, ff, ef, hf, vt, cf, lf, af, ir, rr, df, yt, hr, ci, gf, ne, te;
    i.fn = i.prototype = {
        jquery: pr,
        constructor: i,
        length: 0,
        toArray: function() { return k.call(this) },
        get: function(n) { return n == null ? k.call(this) : n < 0 ? this[n + this.length] : this[n] },
        pushStack: function(n) { var t = i.merge(this.constructor(), n); return t.prevObject = this, t },
        each: function(n) { return i.each(this, n) },
        map: function(n) { return this.pushStack(i.map(this, function(t, i) { return n.call(t, i, t) })) },
        slice: function() { return this.pushStack(k.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        even: function() { return this.pushStack(i.grep(this, function(n, t) { return (t + 1) % 2 })) },
        odd: function() { return this.pushStack(i.grep(this, function(n, t) { return t % 2 })) },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: li,
        sort: p.sort,
        splice: p.splice
    };
    i.extend = i.fn.extend = function() {
        var s, f, e, t, o, c, n = arguments[0] || {},
            r = 1,
            l = arguments.length,
            h = !1;
        for (typeof n == "boolean" && (h = n, n = arguments[r] || {}, r++), typeof n == "object" || u(n) || (n = {}), r === l && (n = this, r--); r < l; r++)
            if ((s = arguments[r]) != null)
                for (f in s)(t = s[f], f !== "__proto__" && n !== t) && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f], c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {}, o = !1, n[f] = i.extend(h, c, t)) : t !== undefined && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (pr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) { throw new Error(n); },
        noop: function() {},
        isPlainObject: function(n) { var t, i; return !n || ar.call(n) !== "[object Object]" ? !1 : (t = cr(n), !t) ? !0 : (i = ii.call(t, "constructor") && t.constructor, typeof i == "function" && vr.call(i) === ie) },
        isEmptyObject: function(n) { for (var t in n) return !1; return !0 },
        globalEval: function(n, t, i) { yr(n, { nonce: t && t.nonce }, i) },
        each: function(n, t) {
            var r, i = 0;
            if (ai(n)) {
                for (r = n.length; i < r; i++)
                    if (t.call(n[i], i, n[i]) === !1) break
            } else
                for (i in n)
                    if (t.call(n[i], i, n[i]) === !1) break; return n
        },
        makeArray: function(n, t) { var r = t || []; return n != null && (ai(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : li.call(r, n)), r },
        inArray: function(n, t, i) { return t == null ? -1 : ni.call(t, n, i) },
        merge: function(n, t) { for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i]; return n.length = r, n },
        grep: function(n, t, i) { for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]); return f },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (ai(n))
                for (e = n.length; r < e; r++) u = t(n[r], r, i), u != null && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), u != null && f.push(u);
            return lr(f)
        },
        guid: 1,
        support: e
    });
    typeof Symbol == "function" && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) { ti["[object " + t + "]"] = t.toLowerCase() });
    d = function(n) {
        function u(n, t, r, u) {
            var s, p, c, l, w, y, d, v = t && t.ownerDocument,
                a = t ? t.nodeType : 9;
            if (r = r || [], typeof n != "string" || !n || a !== 1 && a !== 9 && a !== 11) return r;
            if (!u && (b(t), t = t || i, h)) {
                if (a !== 11 && (w = ar.exec(n)))
                    if (s = w[1]) {
                        if (a === 9)
                            if (c = t.getElementById(s)) { if (c.id === s) return r.push(c), r } else return r;
                        else if (v && (c = v.getElementById(s)) && et(t, c) && c.id === s) return r.push(c), r
                    } else { if (w[2]) return k.apply(r, t.getElementsByTagName(n)), r; if ((s = w[3]) && f.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r }
                if (f.qsa && !lt[n + " "] && (!o || !o.test(n)) && (a !== 1 || t.nodeName.toLowerCase() !== "object")) {
                    if (d = n, v = t, a === 1 && (er.test(n) || yi.test(n))) {
                        for (v = ti.test(n) && ri(t.parentNode) || t, v === t && f.scope || ((l = t.getAttribute("id")) ? l = l.replace(pi, wi) : t.setAttribute("id", l = e)), y = ft(n), p = y.length; p--;) y[p] = (l ? "#" + l : ":scope") + " " + pt(y[p]);
                        d = y.join(",")
                    }
                    try { return k.apply(r, v.querySelectorAll(d)), r } catch (g) { lt(n, !0) } finally { l === e && t.removeAttribute("id") }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function yt() {
            function n(r, u) { return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u }
            var i = [];
            return n
        }

        function l(n) { return n[e] = !0, n }

        function a(n) {
            var t = i.createElement("fieldset");
            try { return !!n(t) } catch (r) { return !1 } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) { for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i }

        function ki(n, t) {
            var i = t && n,
                r = i && n.nodeType === 1 && t.nodeType === 1 && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function yr(n) { return function(t) { var i = t.nodeName.toLowerCase(); return i === "input" && t.type === n } }

        function pr(n) { return function(t) { var i = t.nodeName.toLowerCase(); return (i === "input" || i === "button") && t.type === n } }

        function di(n) { return function(t) { return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && vr(t) === n : t.disabled === n : "label" in t ? t.disabled === n : !1 } }

        function it(n) { return l(function(t) { return t = +t, l(function(i, r) { for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u])) }) }) }

        function ri(n) { return n && typeof n.getElementsByTagName != "undefined" && n }

        function gi() {}

        function pt(n) { for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value; return i }

        function wt(n, t, i) {
            var r = t.dir,
                u = t.next,
                f = u || r,
                o = i && f === "parentNode",
                s = nr++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (t.nodeType === 1 || o) return n(t, i, u);
                return !1
            } : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((t.nodeType === 1 || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || o)
                            if (a = t[e] || (t[e] = {}), l = a[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else { if ((c = l[f]) && c[0] === v && c[1] === s) return y[2] = c[2]; if (l[f] = y, y[2] = n(t, i, h)) return !0 } return !1
            }
        }

        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function wr(n, t, i) { for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i); return i }

        function bt(n, t, i, r, u) { for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f)); return o }

        function fi(n, t, i, r, u, f) {
            return r && !r[e] && (r = fi(r)), u && !u[e] && (u = fi(u, f)), l(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    b = f || wr(t || "*", o.nodeType ? [o] : o, []),
                    v = n && (f || !t) ? bt(b, p, n, o, s) : b,
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = bt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = bt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = wt(function(n) { return n === o }, c, !0), a = wt(function(n) { return nt(o, n) > -1 }, c, !0), f = [function(n, t, i) { var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i)); return o = null, r }]; i < s; i++)
                if (u = t.relative[n[i].type]) f = [wt(ui(f), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[e]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(f), i > 1 && pt(n.slice(0, i - 1).concat({ value: n[i - 2].type === " " ? "*" : "" })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && pt(n))
                    }
                    f.push(u)
                }
            return ui(f)
        }

        function br(n, r) {
            var f = r.length > 0,
                e = n.length > 0,
                o = function(o, s, c, l, a) {
                    var y, nt, d, g = 0,
                        p = "0",
                        tt = o && [],
                        w = [],
                        it = ht,
                        rt = o || e && t.find.TAG("*", a),
                        ut = v += it == null ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (a && (ht = s == i || s || a); p !== ft && (y = rt[p]) != null; p++) {
                        if (e && y) {
                            for (nt = 0, s || y.ownerDocument == i || (b(y), c = !h); d = n[nt++];)
                                if (d(y, s || i, c)) { l.push(y); break }
                            a && (v = ut)
                        }
                        f && ((y = !d && y) && g--, o && tt.push(y))
                    }
                    if (g += p, f && p !== g) {
                        for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                        if (o) {
                            if (g > 0)
                                while (p--) tt[p] || w[p] || (w[p] = ir.call(l));
                            w = bt(w)
                        }
                        k.apply(l, w);
                        a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                    }
                    return a && (v = ut, ht = it), tt
                };
            return f ? l(o) : o
        }
        var rt, f, t, st, oi, ft, kt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            nr = 0,
            hi = yt(),
            ci = yt(),
            li = yt(),
            lt = yt(),
            dt = function(n, t) { return n === t && (ut = !0), 0 },
            tr = {}.hasOwnProperty,
            g = [],
            ir = g.pop,
            rr = g.push,
            k = g.push,
            ai = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            ni = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
            ur = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            fr = new RegExp("^" + r + "*," + r + "*"),
            yi = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            er = new RegExp(r + "|>"),
            or = new RegExp(ni),
            sr = new RegExp("^" + tt + "$"),
            vt = { ID: new RegExp("^#(" + tt + ")"), CLASS: new RegExp("^\\.(" + tt + ")"), TAG: new RegExp("^(" + tt + "|[*])"), ATTR: new RegExp("^" + vi), PSEUDO: new RegExp("^" + ni), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"), bool: new RegExp("^(?:" + gt + ")$", "i"), needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i") },
            hr = /HTML$/i,
            cr = /^(?:input|select|textarea|button)$/i,
            lr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ti = /[+~]/,
            y = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
            p = function(n, t) { var i = "0x" + n.slice(1) - 65536; return t ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, i & 1023 | 56320) },
            pi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            wi = function(n, t) { return t ? n === "\0" ? "ï¿½" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n },
            bi = function() { b() },
            vr = wt(function(n) { return n.disabled === !0 && n.nodeName.toLowerCase() === "fieldset" }, { dir: "parentNode", next: "legend" });
        try {
            k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (kr) {
            k = {
                apply: g.length ? function(n, t) { rr.apply(n, ai.call(t)) } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        f = u.support = {};
        oi = u.isXML = function(n) {
            var i = n.namespaceURI,
                t = (n.ownerDocument || n).documentElement;
            return !hr.test(i || t && t.nodeName || "HTML")
        };
        b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l == i || l.nodeType !== 9 || !l.documentElement ? i : (i = l, s = i.documentElement, h = !oi(i), c != i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", bi, !1) : u.attachEvent && u.attachEvent("onunload", bi)), f.scope = a(function(n) { return s.appendChild(n).appendChild(i.createElement("div")), typeof n.querySelectorAll != "undefined" && !n.querySelectorAll(":scope fieldset div").length }), f.attributes = a(function(n) { return n.className = "i", !n.getAttribute("className") }), f.getElementsByTagName = a(function(n) { return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length }), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function(n) { return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length }), f.getById ? (t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { return n.getAttribute("id") === t } }, t.find.ID = function(n, t) { if (typeof t.getElementById != "undefined" && h) { var i = t.getElementById(n); return i ? [i] : [] } }) : (t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id"); return i && i.value === t } }, t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                    var i, u, f, r = t.getElementById(n);
                    if (r) {
                        if (i = r.getAttributeNode("id"), i && i.value === n) return [r];
                        for (f = t.getElementsByName(n), u = 0; r = f[u++];)
                            if (i = r.getAttributeNode("id"), i && i.value === n) return [r]
                    }
                    return []
                }
            }), t.find.TAG = f.getElementsByTagName ? function(n, t) { return typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0 } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if (n === "*") { while (i = u[f++]) i.nodeType === 1 && r.push(i); return r }
                return u
            }, t.find.CLASS = f.getElementsByClassName && function(n, t) { if (typeof t.getElementsByClassName != "undefined" && h) return t.getElementsByClassName(n) }, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                var t;
                s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + gt + ")");
                n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                t = i.createElement("input");
                t.setAttribute("name", "");
                n.appendChild(t);
                n.querySelectorAll("[name='']").length || o.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]");
                n.querySelectorAll("\\\f");
                o.push("[\\r\\n\\f]")
            }), a(function(n) {
                n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length !== 2 && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                n.querySelectorAll(":disabled").length !== 2 && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                f.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", ni)
            }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, dt = v ? function(n, t) { if (n === t) return ut = !0, 0; var r = !n.compareDocumentPosition - !t.compareDocumentPosition; return r ? r : (r = (n.ownerDocument || n) == (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, r & 1 || !f.sortDetached && t.compareDocumentPosition(n) === r) ? n == i || n.ownerDocument == c && et(c, n) ? -1 : t == i || t.ownerDocument == c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : r & 4 ? -1 : 1 } : function(n, t) {
                if (n === t) return ut = !0, 0;
                var r, u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                if (o && s) { if (o === s) return ki(n, t) } else return n == i ? -1 : t == i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                for (r = n; r = r.parentNode;) f.unshift(r);
                for (r = t; r = r.parentNode;) e.unshift(r);
                while (f[u] === e[u]) u++;
                return u ? ki(f[u], e[u]) : f[u] == c ? -1 : e[u] == c ? 1 : 0
            }, i)
        };
        u.matches = function(n, t) { return u(n, null, null, t) };
        u.matchesSelector = function(n, t) {
            if (b(n), f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try { var r = ct.call(n, t); if (r || f.disconnectedMatch || n.document && n.document.nodeType !== 11) return r } catch (e) { lt(t, !0) }
            return u(t, i, null, [n]).length > 0
        };
        u.contains = function(n, t) { return (n.ownerDocument || n) != i && b(n), et(n, t) };
        u.attr = function(n, r) {
            (n.ownerDocument || n) != i && b(n);
            var e = t.attrHandle[r.toLowerCase()],
                u = e && tr.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : undefined;
            return u !== undefined ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        };
        u.escape = function(n) { return (n + "").replace(pi, wi) };
        u.error = function(n) { throw new Error("Syntax error, unrecognized expression: " + n); };
        u.uniqueSort = function(n) {
            var r, u = [],
                t = 0,
                i = 0;
            if (ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(dt), ut) { while (r = n[i++]) r === n[i] && (t = u.push(i)); while (t--) n.splice(u[t], 1) }
            return w = null, n
        };
        st = u.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) { if (t === 1 || t === 9 || t === 11) { if (typeof n.textContent == "string") return n.textContent; for (n = n.firstChild; n; n = n.nextSibling) i += st(n) } else if (t === 3 || t === 4) return n.nodeValue } else
                while (r = n[u++]) i += st(r);
            return i
        };
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(n) { return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4) }, CHILD: function(n) { return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && u.error(n[0]), n }, PSEUDO: function(n) { var i, t = !n[6] && n[2]; return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && or.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3)) } },
            filter: {
                TAG: function(n) { var t = n.replace(y, p).toLowerCase(); return n === "*" ? function() { return !0 } : function(n) { return n.nodeName && n.nodeName.toLowerCase() === t } },
                CLASS: function(n) { var t = hi[n + " "]; return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) { return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute != "undefined" && n.getAttribute("class") || "") }) },
                ATTR: function(n, t, i) { return function(r) { var f = u.attr(r, n); return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f.replace(ur, " ") + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0 } },
                CHILD: function(n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth",
                        o = n.slice(-4) !== "last",
                        f = t === "of-type";
                    return r === 1 && u === 0 ? function(n) { return !!n.parentNode } : function(t, i, h) {
                        var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
                            d = t.parentNode,
                            nt = f && t.nodeName.toLowerCase(),
                            g = !h && !f,
                            l = !1;
                        if (d) {
                            if (s) {
                                while (k) {
                                    for (c = t; c = c[k];)
                                        if (f ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) return !1;
                                    b = k = n === "only" && !b && "nextSibling"
                                }
                                return !0
                            }
                            if (b = [o ? d.firstChild : d.lastChild], o && g) {
                                for (c = d, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
                                    if (c.nodeType === 1 && ++l && c === t) { w[n] = [v, a, l]; break }
                            } else if (g && (c = t, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
                                while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                    if ((f ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) && ++l && (g && (y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) { var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n); return r[e] ? r(i) : r.length > 1 ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) { for (var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e]) }) : function(n) { return r(n, 0, f) }) : r }
            },
            pseudos: {
                not: l(function(n) {
                    var t = [],
                        r = [],
                        i = kt(n.replace(at, "$1"));
                    return i[e] ? l(function(n, t, r, u) { for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e)) }) : function(n, u, f) { return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop() }
                }),
                has: l(function(n) { return function(t) { return u(n, t).length > 0 } }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                        function(t) { return (t.textContent || st(t)).indexOf(n) > -1 }
                }),
                lang: l(function(n) {
                    return sr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function(t) { var i = n.location && n.location.hash; return i && i.slice(1) === t.id },
                root: function(n) { return n === s },
                focus: function(n) { return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex) },
                enabled: di(!1),
                disabled: di(!0),
                checked: function(n) { var t = n.nodeName.toLowerCase(); return t === "input" && !!n.checked || t === "option" && !!n.selected },
                selected: function(n) { return n.parentNode && n.parentNode.selectedIndex, n.selected === !0 },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) { return !t.pseudos.empty(n) },
                header: function(n) { return lr.test(n.nodeName) },
                input: function(n) { return cr.test(n.nodeName) },
                button: function(n) { var t = n.nodeName.toLowerCase(); return t === "input" && n.type === "button" || t === "button" },
                text: function(n) { var t; return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text") },
                first: it(function() { return [0] }),
                last: it(function(n, t) { return [t - 1] }),
                eq: it(function(n, t, i) { return [i < 0 ? i + t : i] }),
                even: it(function(n, t) { for (var i = 0; i < t; i += 2) n.push(i); return n }),
                odd: it(function(n, t) { for (var i = 1; i < t; i += 2) n.push(i); return n }),
                lt: it(function(n, t, i) { for (var r = i < 0 ? i + t : i > t ? t : i; --r >= 0;) n.push(r); return n }),
                gt: it(function(n, t, i) { for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r); return n })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (rt in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) t.pseudos[rt] = yr(rt);
        for (rt in { submit: !0, reset: !0 }) t.pseudos[rt] = pr(rt);
        return gi.prototype = t.filters = t.pseudos, t.setFilters = new gi, ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = fr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = yi.exec(r)) && (e = f.shift(), s.push({ value: e, type: f[0].replace(at, " ") }), r = r.slice(e.length));
                for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({ value: e, type: o, matches: f }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }, kt = u.compile = function(n, t) {
            var r, u = [],
                f = [],
                i = li[n + " "];
            if (!i) {
                for (t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[e] ? u.push(i) : f.push(i);
                i = li(n, br(f, u));
                i.selector = n
            }
            return i
        }, si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = typeof n == "function" && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], s.length === 1) {
                if (f = s[0] = s[0].slice(0), f.length > 2 && (e = f[0]).type === "ID" && i.nodeType === 9 && h && t.relative[f[1].type]) {
                    if (i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0], i) c && (i = i.parentNode);
                    else return r;
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) { if (e = f[o], t.relative[l = e.type]) break; if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ti.test(f[0].type) && ri(i.parentNode) || i))) { if (f.splice(o, 1), n = u.length && pt(f), !n) return k.apply(r, u), r; break } }
            }
            return (c || kt(n, s))(u, i, !h, r, !i || ti.test(n) && ri(i.parentNode) || i), r
        }, f.sortStable = e.split("").sort(dt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function(n) { return n.compareDocumentPosition(i.createElement("fieldset")) & 1 }), a(function(n) { return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#" }) || ii("type|href|height|width", function(n, t, i) { if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2) }), f.attributes && a(function(n) { return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === "" }) || ii("value", function(n, t, i) { if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue }), a(function(n) { return n.getAttribute("disabled") == null }) || ii(gt, function(n, t, i) { var r; if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null }), u
    }(n);
    i.find = d;
    i.expr = d.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = d.uniqueSort;
    i.text = d.getText;
    i.isXMLDoc = d.isXML;
    i.contains = d.contains;
    i.escapeSelector = d.escape;
    var ut = function(n, t, r) {
            for (var u = [], f = r !== undefined;
                (n = n[t]) && n.nodeType !== 9;)
                if (n.nodeType === 1) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                }
            return u
        },
        wr = function(n, t) { for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n); return i },
        br = i.expr.match.needsContext;
    vi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) { var u = t[0]; return (r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1) ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) { return n.nodeType === 1 })) };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if (typeof n != "string") return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return u > 1 ? i.uniqueSort(r) : r
        },
        filter: function(n) { return this.pushStack(yi(this, n || [], !1)) },
        not: function(n) { return this.pushStack(yi(this, n || [], !0)) },
        is: function(n) { return !!yi(this, typeof n == "string" && br.test(n) ? i(n) : n || [], !1).length }
    });
    dr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    gr = i.fn.init = function(n, t, r) {
        var e, o;
        if (!n) return this;
        if (r = r || kr, typeof n == "string") {
            if (e = n[0] === "<" && n[n.length - 1] === ">" && n.length >= 3 ? [null, n, null] : dr.exec(n), e && (e[1] || !t)) {
                if (e[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), vi.test(e[1]) && i.isPlainObject(t))
                        for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                    return this
                }
                return o = f.getElementById(e[2]), o && (this[0] = o, this.length = 1), this
            }
            return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n)
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : u(n) ? r.ready !== undefined ? r.ready(n) : n(i) : i.makeArray(n, this)
    };
    gr.prototype = i.fn;
    kr = i(f);
    nu = /^(?:parents|prev(?:Until|All))/;
    tu = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = typeof n != "string" && i(n);
            if (!br.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) { u.push(r); break }
            return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
        },
        index: function(n) { return n ? typeof n == "string" ? ni.call(i(n), this[0]) : ni.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(n, t) { return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t)))) },
        addBack: function(n) { return this.add(n == null ? this.prevObject : this.prevObject.filter(n)) }
    });
    i.each({ parent: function(n) { var t = n.parentNode; return t && t.nodeType !== 11 ? t : null }, parents: function(n) { return ut(n, "parentNode") }, parentsUntil: function(n, t, i) { return ut(n, "parentNode", i) }, next: function(n) { return iu(n, "nextSibling") }, prev: function(n) { return iu(n, "previousSibling") }, nextAll: function(n) { return ut(n, "nextSibling") }, prevAll: function(n) { return ut(n, "previousSibling") }, nextUntil: function(n, t, i) { return ut(n, "nextSibling", i) }, prevUntil: function(n, t, i) { return ut(n, "previousSibling", i) }, siblings: function(n) { return wr((n.parentNode || {}).firstChild, n) }, children: function(n) { return wr(n.firstChild) }, contents: function(n) { return n.contentDocument != null && cr(n.contentDocument) ? n.contentDocument : (l(n, "template") && (n = n.content || n), i.merge([], n.childNodes)) } }, function(n, t) { i.fn[n] = function(r, u) { var f = i.map(this, t, r); return n.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (f = i.filter(u, f)), this.length > 1 && (tu[n] || i.uniqueSort(f), nu.test(n) && f.reverse()), this.pushStack(f) } });
    a = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        n = typeof n == "string" ? ue(n) : i.extend({}, n);
        var o, r, c, f, t = [],
            s = [],
            e = -1,
            l = function() {
                for (f = f || n.once, c = o = !0; s.length; e = -1)
                    for (r = s.shift(); ++e < t.length;) t[e].apply(r[0], r[1]) === !1 && n.stopOnFalse && (e = t.length, r = !1);
                n.memory || (r = !1);
                o = !1;
                f && (t = r ? [] : "")
            },
            h = {
                add: function() { return t && (r && !o && (e = t.length - 1, s.push(r)), function f(r) { i.each(r, function(i, r) { u(r) ? n.unique && h.has(r) || t.push(r) : r && r.length && rt(r) !== "string" && f(r) }) }(arguments), r && !o && l()), this },
                remove: function() {
                    return i.each(arguments, function(n, r) {
                        for (var u;
                            (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), u <= e && e--
                    }), this
                },
                has: function(n) { return n ? i.inArray(n, t) > -1 : t.length > 0 },
                empty: function() { return t && (t = []), this },
                disable: function() { return f = s = [], t = r = "", this },
                disabled: function() { return !t },
                lock: function() { return f = s = [], r || o || (t = r = ""), this },
                locked: function() { return !!f },
                fireWith: function(n, t) { return f || (t = t || [], t = [n, t.slice ? t.slice() : t], s.push(t), o || l()), this },
                fire: function() { return h.fireWith(this, arguments), this },
                fired: function() { return !!c }
            };
        return h
    };
    i.extend({
        Deferred: function(t) {
            var f = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                e = {
                    state: function() { return o },
                    always: function() { return r.done(arguments).fail(arguments), this },
                    "catch": function(n) { return e.then(null, n) },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(f, function(i, f) {
                                var e = u(n[f[4]]) && n[f[4]];
                                r[f[1]](function() {
                                    var n = e && e.apply(this, arguments);
                                    n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, e) {
                        function s(t, r, f, e) {
                            return function() {
                                var h = this,
                                    c = arguments,
                                    a = function() {
                                        var n, i;
                                        if (!(t < o)) {
                                            if (n = f.apply(h, c), n === r.promise()) throw new TypeError("Thenable self-resolution");
                                            i = n && (typeof n == "object" || typeof n == "function") && n.then;
                                            u(i) ? e ? i.call(n, s(o, r, ft, e), s(o, r, ri, e)) : (o++, i.call(n, s(o, r, ft, e), s(o, r, ri, e), s(o, r, ft, r.notifyWith))) : (f !== ft && (h = undefined, c = [n]), (e || r.resolveWith)(h, c))
                                        }
                                    },
                                    l = e ? a : function() {
                                        try { a() } catch (n) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, l.stackTrace);
                                            t + 1 >= o && (f !== ri && (h = undefined, c = [n]), r.rejectWith(h, c))
                                        }
                                    };
                                t ? l() : (i.Deferred.getStackHook && (l.stackTrace = i.Deferred.getStackHook()), n.setTimeout(l))
                            }
                        }
                        var o = 0;
                        return i.Deferred(function(n) {
                            f[0][3].add(s(0, n, u(e) ? e : ft, n.notifyWith));
                            f[1][3].add(s(0, n, u(t) ? t : ft));
                            f[2][3].add(s(0, n, u(r) ? r : ri))
                        }).promise()
                    },
                    promise: function(n) { return n != null ? i.extend(n, e) : e }
                },
                r = {};
            return i.each(f, function(n, t) {
                var i = t[2],
                    u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() { o = u }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() { return r[t[0] + "With"](this === r ? undefined : this, arguments), this };
                r[t[0] + "With"] = i.fireWith
            }), e.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var e = arguments.length,
                t = e,
                o = Array(t),
                f = k.call(arguments),
                r = i.Deferred(),
                s = function(n) {
                    return function(t) {
                        o[n] = this;
                        f[n] = arguments.length > 1 ? k.call(arguments) : t;
                        --e || r.resolveWith(o, f)
                    }
                };
            if (e <= 1 && (ru(n, r.done(s(t)).resolve, r.reject, !e), r.state() === "pending" || u(f[t] && f[t].then))) return r.then();
            while (t--) ru(f[t], s(t), r.reject);
            return r.promise()
        }
    });
    uu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) { n.console && n.console.warn && t && uu.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i) };
    i.readyException = function(t) { n.setTimeout(function() { throw t; }) };
    ui = i.Deferred();
    i.fn.ready = function(n) { return ui.then(n).catch(function(n) { i.readyException(n) }), this };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0) || ui.resolveWith(f, [i])
        }
    });
    i.ready.then = ui.then;
    f.readyState !== "complete" && (f.readyState === "loading" || f.documentElement.doScroll) ? (f.addEventListener("DOMContentLoaded", fi), n.addEventListener("load", fi)) : n.setTimeout(i.ready);
    var w = function(n, t, r, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = r == null;
            if (rt(r) === "object") { e = !0; for (h in r) w(n, t, h, r[h], !0, o, s) } else if (f !== undefined && (e = !0, u(f) || (s = !0), c && (s ? (t.call(n, f), t = null) : (c = t, t = function(n, t, r) { return c.call(i(n), r) })), t))
                for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
            return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
        },
        fe = /^-ms-/,
        ee = /-([a-z])/g;
    et = function(n) { return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType };
    pt.uid = 1;
    pt.prototype = {
        cache: function(n) { var t = n[this.expando]; return t || (t = {}, et(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, { value: t, configurable: !0 }))), t },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if (typeof t == "string") u[y(t)] = i;
            else
                for (r in t) u[y(r)] = t[r];
            return u
        },
        get: function(n, t) { return t === undefined ? this.cache(n) : n[this.expando] && n[this.expando][y(t)] },
        access: function(n, t, i) { return t === undefined || t && typeof t == "string" && i === undefined ? this.get(n, t) : (this.set(n, t, i), i !== undefined ? i : t) },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (r !== undefined) {
                if (t !== undefined)
                    for (Array.isArray(t) ? t = t.map(y) : (t = y(t), t = t in r ? [t] : t.match(a) || []), u = t.length; u--;) delete r[t[u]];
                (t === undefined || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = undefined : delete n[this.expando])
            }
        },
        hasData: function(n) { var t = n[this.expando]; return t !== undefined && !i.isEmptyObject(t) }
    };
    var r = new pt,
        o = new pt,
        se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        he = /[A-Z]/g;
    i.extend({ hasData: function(n) { return o.hasData(n) || r.hasData(n) }, data: function(n, t, i) { return o.access(n, t, i) }, removeData: function(n, t) { o.remove(n, t) }, _data: function(n, t, i) { return r.access(n, t, i) }, _removeData: function(n, t) { r.remove(n, t) } });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0],
                s = i && i.attributes;
            if (n === undefined) {
                if (this.length && (e = o.get(i), i.nodeType === 1 && !r.get(i, "hasDataAttrs"))) {
                    for (f = s.length; f--;) s[f] && (u = s[f].name, u.indexOf("data-") === 0 && (u = y(u.slice(5)), fu(i, u, e[u])));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return typeof n == "object" ? this.each(function() { o.set(this, n) }) : w(this, function(t) {
                var r;
                if (i && t === undefined) return (r = o.get(i, n), r !== undefined) ? r : (r = fu(i, n), r !== undefined) ? r : void 0;
                this.each(function() { o.set(this, n, t) })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(n) { return this.each(function() { o.remove(this, n) }) }
    });
    i.extend({
        queue: function(n, t, u) { var f; if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || [] },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() { i.dequeue(n, t) };
            u === "inprogress" && (u = r.shift(), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) { var u = t + "queueHooks"; return r.get(n, u) || r.access(n, u, { empty: i.Callbacks("once memory").add(function() { r.remove(n, [t + "queue", u]) }) }) }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return (typeof n != "string" && (t = n, n = "fx", r--), arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) { return this.each(function() { i.dequeue(this, n) }) },
        clearQueue: function(n) { return this.queue(n || "fx", []) },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {--e || o.resolveWith(f, [f]) };
            for (typeof n != "string" && (t = n, n = undefined), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var eu = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wt = new RegExp("^(?:([+-])=|)(" + eu + ")([a-z%]*)$", "i"),
        b = ["Top", "Right", "Bottom", "Left"],
        g = f.documentElement,
        ot = function(n) { return i.contains(n.ownerDocument, n) },
        le = { composed: !0 };
    g.getRootNode && (ot = function(n) { return i.contains(n.ownerDocument, n) || n.getRootNode(le) === n.ownerDocument });
    bt = function(n, t) { return n = t || n, n.style.display === "none" || n.style.display === "" && ot(n) && i.css(n, "display") === "none" };
    pi = {};
    i.fn.extend({ show: function() { return st(this, !0) }, hide: function() { return st(this) }, toggle: function(n) { return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() { bt(this) ? i(this).show() : i(this).hide() }) } });
    var kt = /^(?:checkbox|radio)$/i,
        su = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        hu = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
        var i = f.createDocumentFragment(),
            n = i.appendChild(f.createElement("div")),
            t = f.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        e.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
        n.innerHTML = "<option><\/option>";
        e.option = !!n.lastChild
    })();
    c = { thead: [1, "<table>", "<\/table>"], col: [2, "<table><colgroup>", "<\/colgroup><\/table>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"], _default: [0, "", ""] };
    c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
    c.th = c.td;
    e.option || (c.optgroup = c.option = [1, "<select multiple='multiple'>", "<\/select>"]);
    cu = /<|&#?\w+;/;
    var ve = /^key/,
        ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        au = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var l, v, w, y, b, h, s, c, o, k, d, p = r.get(n);
            if (et(n))
                for (u.handler && (l = u, u = l.handler, e = l.selector), e && i.find.matchesSelector(g, e), u.guid || (u.guid = i.guid++), (y = p.events) || (y = p.events = Object.create(null)), (v = p.handle) || (v = p.handle = function(t) { return typeof i != "undefined" && i.event.triggered !== t.type ? i.event.dispatch.apply(n, arguments) : undefined }), t = (t || "").match(a) || [""], b = t.length; b--;)(w = au.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o) && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({ type: o, origType: d, data: f, handler: u, guid: u.guid, selector: e, needsContext: e && i.expr.match.needsContext.test(e), namespace: k.join(".") }, l), (c = y[o]) || (c = y[o] = [], c.delegateCount = 0, s.setup && s.setup.call(n, f, k, v) !== !1 || n.addEventListener && n.addEventListener(o, v)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, h, v, p, s, c, l, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (t = (t || "").match(a) || [""], p = t.length; p--;) {
                    if (h = au.exec(t[p]) || [], o = d = h[1], b = (h[2] || "").split(".").sort(), !o) { for (o in v) i.event.remove(n, o + t[p], u, f, !0); continue }
                    for (c = i.event.special[o] || {}, o = (f ? c.delegateType : c.bindType) || o, l = v[o] || [], h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = l.length; y--;) s = l[y], (e || d === s.origType) && (!u || u.guid === s.guid) && (!h || h.test(s.namespace)) && (!f || f === s.selector || f === "**" && s.selector) && (l.splice(y, 1), s.selector && l.delegateCount--, c.remove && c.remove.call(n, s));
                    k && !l.length && (c.teardown && c.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o])
                }
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var u, c, s, e, f, l, h = new Array(arguments.length),
                t = i.event.fix(n),
                a = (r.get(this, "events") || Object.create(null))[t.type] || [],
                o = i.event.special[t.type] || {};
            for (h[0] = t, u = 1; u < arguments.length; u++) h[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || o.preDispatch.call(this, t) !== !1) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || f.namespace === !1 || t.rnamespace.test(f.namespace)) && (t.handleObj = f, t.data = f.data, s = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), s !== undefined && (t.result = s) === !1 && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, s, c = [],
                h = t.delegateCount,
                r = n.target;
            if (h && r.nodeType && !(n.type === "click" && n.button >= 1))
                for (; r !== this; r = r.parentNode || this)
                    if (r.nodeType === 1 && !(n.type === "click" && r.disabled === !0)) {
                        for (o = [], s = {}, f = 0; f < h; f++) e = t[f], u = e.selector + " ", s[u] === undefined && (s[u] = e.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length), s[u] && o.push(e);
                        o.length && c.push({ elem: r, handlers: o })
                    }
            return r = this, h < t.length && c.push({ elem: r, handlers: t.slice(h) }), c
        },
        addProp: function(n, t) { Object.defineProperty(i.Event.prototype, n, { enumerable: !0, configurable: !0, get: u(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[n] }, set: function(t) { Object.defineProperty(this, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
        fix: function(n) { return n[i.expando] ? n : new i.Event(n) },
        special: { load: { noBubble: !0 }, click: { setup: function(n) { var t = this || n; return kt.test(t.type) && t.click && l(t, "input") && ei(t, "click", ht), !1 }, trigger: function(n) { var t = this || n; return kt.test(t.type) && t.click && l(t, "input") && ei(t, "click"), !0 }, _default: function(n) { var t = n.target; return kt.test(t.type) && t.click && l(t, "input") && r.get(t, "click") || l(t, "a") } }, beforeunload: { postDispatch: function(n) { n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result) } } }
    };
    i.removeEvent = function(n, t, i) { n.removeEventListener && n.removeEventListener(t, i) };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? ht : ct, this.target = n.target && n.target.nodeType === 3 ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: ct,
        isPropagationStopped: ct,
        isImmediatePropagationStopped: ct,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ht;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ht;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ht;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(n) { var t = n.button; return n.which == null && ve.test(n.type) ? n.charCode != null ? n.charCode : n.keyCode : !n.which && t !== undefined && ye.test(n.type) ? t & 1 ? 1 : t & 2 ? 3 : t & 4 ? 2 : 0 : n.which } }, i.event.addProp);
    i.each({ focus: "focusin", blur: "focusout" }, function(n, t) { i.event.special[n] = { setup: function() { return ei(this, n, pe), !1 }, trigger: function() { return ei(this, n), !0 }, delegateType: t } });
    i.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({ on: function(n, t, i, r) { return bi(this, n, t, i, r) }, one: function(n, t, i, r) { return bi(this, n, t, i, r, 1) }, off: function(n, t, r) { var u, f; if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this; if (typeof n == "object") { for (f in n) this.off(f, t, n[f]); return this } return (t === !1 || typeof t == "function") && (r = t, t = undefined), r === !1 && (r = ct), this.each(function() { i.event.remove(this, n, r, t) }) } });
    var be = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) { return n },
        clone: function(n, t, r) {
            var u, c, o, f, h = n.cloneNode(!0),
                l = ot(n);
            if (!e.noCloneChecked && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (f = s(h), o = s(n), u = 0, c = o.length; u < c; u++) to(o[u], f[u]);
            if (t)
                if (r)
                    for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++) yu(o[u], f[u]);
                else yu(n, h);
            return f = s(h, "script"), f.length > 0 && wi(f, !l && s(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, e = 0;
                (t = n[e]) !== undefined; e++)
                if (et(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = undefined
                    }
                    t[o.expando] && (t[o.expando] = undefined)
                }
        }
    });
    i.fn.extend({
        detach: function(n) { return pu(this, n, !0) },
        remove: function(n) { return pu(this, n) },
        text: function(n) {
            return w(this, function(n) {
                return n === undefined ? i.text(this) : this.empty().each(function() {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return lt(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = vu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return lt(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = vu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() { return lt(this, arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this) }) },
        after: function() { return lt(this, arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this.nextSibling) }) },
        empty: function() {
            for (var n, t = 0;
                (n = this[t]) != null; t++) n.nodeType === 1 && (i.cleanData(s(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) { return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() { return i.clone(this, n, t) }) },
        html: function(n) {
            return w(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (n === undefined && t.nodeType === 1) return t.innerHTML;
                if (typeof n == "string" && !be.test(n) && !c[(su.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) t = this[r] || {}, t.nodeType === 1 && (i.cleanData(s(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (f) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return lt(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(s(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(n, t) { i.fn[n] = function(n) { for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), li.apply(f, u.get()); return this.pushStack(f) } });
    var ki = new RegExp("^(" + eu + ")(?!px)[a-z%]+$", "i"),
        oi = function(t) { var i = t.ownerDocument.defaultView; return i && i.opener || (i = n), i.getComputedStyle(t) },
        wu = function(n, t, i) {
            var u, r, f = {};
            for (r in t) f[r] = n.style[r], n.style[r] = t[r];
            u = i.call(n);
            for (r in t) n.style[r] = f[r];
            return u
        },
        io = new RegExp(b.join("|"), "i");
    (function() {
        function r() {
            if (t) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                g.appendChild(s).appendChild(t);
                var i = n.getComputedStyle(t);
                h = i.top !== "1%";
                v = u(i.marginLeft) === 12;
                t.style.right = "60%";
                a = u(i.right) === 36;
                c = u(i.width) === 36;
                t.style.position = "absolute";
                l = u(t.offsetWidth / 3) === 12;
                g.removeChild(s);
                t = null
            }
        }

        function u(n) { return Math.round(parseFloat(n)) }
        var h, c, l, a, o, v, s = f.createElement("div"),
            t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = t.style.backgroundClip === "content-box", i.extend(e, { boxSizingReliable: function() { return r(), c }, pixelBoxStyles: function() { return r(), a }, pixelPosition: function() { return r(), h }, reliableMarginLeft: function() { return r(), v }, scrollboxSize: function() { return r(), l }, reliableTrDimensions: function() { var t, i, r, u; return o == null && (t = f.createElement("table"), i = f.createElement("tr"), r = f.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", i.style.height = "1px", r.style.height = "9px", g.appendChild(t).appendChild(i).appendChild(r), u = n.getComputedStyle(i), o = parseInt(u.height) > 3, g.removeChild(t)), o } }))
    })();
    var ku = ["Webkit", "Moz", "ms"],
        du = f.createElement("div").style,
        gu = {};
    var uo = /^(none|table(?!-c[ea]).+)/,
        nf = /^--/,
        fo = { position: "absolute", visibility: "hidden", display: "block" },
        tf = { letterSpacing: "0", fontWeight: "400" };
    i.extend({
        cssHooks: { opacity: { get: function(n, t) { if (t) { var i = dt(n, "opacity"); return i === "" ? "1" : i } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var f, s, o, c = y(t),
                    l = nf.test(t),
                    h = n.style;
                if (l || (t = di(c)), o = i.cssHooks[t] || i.cssHooks[c], r !== undefined) {
                    if (s = typeof r, s === "string" && (f = wt.exec(r)) && f[1] && (r = ou(n, t, f), s = "number"), r == null || r !== r) return;
                    s !== "number" || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px"));
                    e.clearCloneStyle || r !== "" || t.indexOf("background") !== 0 || (h[t] = "inherit");
                    o && "set" in o && (r = o.set(n, r, u)) === undefined || (l ? h.setProperty(t, r) : h[t] = r)
                } else return o && "get" in o && (f = o.get(n, !1, u)) !== undefined ? f : h[t]
            }
        },
        css: function(n, t, r, u) {
            var f, o, e, s = y(t),
                h = nf.test(t);
            return (h || (t = di(s)), e = i.cssHooks[t] || i.cssHooks[s], e && "get" in e && (f = e.get(n, !0, r)), f === undefined && (f = dt(n, t, u)), f === "normal" && t in tf && (f = tf[t]), r === "" || r) ? (o = parseFloat(f), r === !0 || isFinite(o) ? o || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) { if (r) return uo.test(i.css(n, "display")) && (!n.getClientRects().length || !n.getBoundingClientRect().width) ? wu(n, fo, function() { return uf(n, t, u) }) : uf(n, t, u) },
            set: function(n, r, u) {
                var s, f = oi(n),
                    h = !e.scrollboxSize() && f.position === "absolute",
                    l = h || u,
                    c = l && i.css(n, "boxSizing", !1, f) === "border-box",
                    o = u ? gi(n, t, u, c, f) : 0;
                return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - gi(n, t, "border", !1, f) - .5)), o && (s = wt.exec(r)) && (s[3] || "px") !== "px" && (n.style[t] = r, r = i.css(n, t)), rf(n, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = bu(e.reliableMarginLeft, function(n, t) { if (t) return (parseFloat(dt(n, "marginLeft")) || n.getBoundingClientRect().left - wu(n, { marginLeft: 0 }, function() { return n.getBoundingClientRect().left })) + "px" });
    i.each({ margin: "", padding: "", border: "Width" }, function(n, t) {
        i.cssHooks[n + t] = { expand: function(i) { for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0]; return f } };
        n !== "margin" && (i.cssHooks[n + t].set = rf)
    });
    i.fn.extend({
        css: function(n, t) {
            return w(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (Array.isArray(t)) { for (f = oi(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f); return o }
                return r !== undefined ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        }
    });
    i.Tween = h;
    h.prototype = {
        constructor: h,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() { var n = h.propHooks[this.prop]; return n && n.get ? n.get(this) : h.propHooks._default.get(this) },
        run: function(n) { var t, r = h.propHooks[this.prop]; return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : h.propHooks._default.set(this), this }
    };
    h.prototype.init.prototype = h.prototype;
    h.propHooks = { _default: { get: function(n) { var t; return n.elem.nodeType !== 1 || n.elem[n.prop] != null && n.elem.style[n.prop] == null ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t) }, set: function(n) { i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.nodeType === 1 && (i.cssHooks[n.prop] || n.elem.style[di(n.prop)] != null) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now } } };
    h.propHooks.scrollTop = h.propHooks.scrollLeft = { set: function(n) { n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now) } };
    i.easing = { linear: function(n) { return n }, swing: function(n) { return .5 - Math.cos(n * Math.PI) / 2 }, _default: "swing" };
    i.fx = h.prototype.init;
    i.fx.step = {};
    ff = /^(?:toggle|show|hide)$/;
    ef = /queueHooks$/;
    i.Animation = i.extend(v, { tweeners: { "*": [function(n, t) { var i = this.createTween(n, t); return ou(i.elem, n, wt.exec(t), i), i }] }, tweener: function(n, t) { u(n) ? (t = n, n = ["*"]) : n = n.match(a); for (var i, r = 0, f = n.length; r < f; r++) i = n[r], v.tweeners[i] = v.tweeners[i] || [], v.tweeners[i].unshift(t) }, prefilters: [eo], prefilter: function(n, t) { t ? v.prefilters.unshift(n) : v.prefilters.push(n) } });
    i.speed = function(n, t, r) {
        var f = n && typeof n == "object" ? i.extend({}, n) : { complete: r || !r && t || u(n) && n, duration: n, easing: r && t || t && !u(t) && t };
        return i.fx.off ? f.duration = 0 : typeof f.duration != "number" && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), (f.queue == null || f.queue === !0) && (f.queue = "fx"), f.old = f.complete, f.complete = function() {
            u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }, f
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) { return this.filter(bt).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r) },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = v(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return typeof n != "string" && (u = t, t = n, n = undefined), t && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = n != null && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && ef.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem === this && (n == null || o[t].queue === n) && (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                (s || !u) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) { return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(hi(t, !0), n, i, u) }
    });
    i.each({ slideDown: hi("show"), slideUp: hi("hide"), slideToggle: hi("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(n, t) { i.fn[n] = function(n, i, r) { return this.animate(t, n, i, r) } });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (at = Date.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        at = undefined
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() { si || (si = !0, nr()) };
    i.fx.stop = function() { si = null };
    i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    i.fn.delay = function(t, r) {
            return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) {
                var u = n.setTimeout(i, t);
                r.stop = function() { n.clearTimeout(u) }
            })
        },
        function() {
            var n = f.createElement("input"),
                t = f.createElement("select"),
                i = t.appendChild(f.createElement("option"));
            n.type = "checkbox";
            e.checkOn = n.value !== "";
            e.optSelected = i.selected;
            n = f.createElement("input");
            n.value = "t";
            n.type = "radio";
            e.radioValue = n.value === "t"
        }();
    vt = i.expr.attrHandle;
    i.fn.extend({ attr: function(n, t) { return w(this, i.attr, n, t, arguments.length > 1) }, removeAttr: function(n) { return this.each(function() { i.removeAttr(this, n) }) } });
    i.extend({
        attr: function(n, t, r) { var u, f, e = n.nodeType; if (e !== 3 && e !== 8 && e !== 2) { if (typeof n.getAttribute == "undefined") return i.prop(n, t, r); if (e === 1 && i.isXMLDoc(n) || (f = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? hf : undefined)), r !== undefined) { if (r === null) { i.removeAttr(n, t); return } return f && "set" in f && (u = f.set(n, r, t)) !== undefined ? u : (n.setAttribute(t, r + ""), r) } return f && "get" in f && (u = f.get(n, t)) !== null ? u : (u = i.find.attr(n, t), u == null ? undefined : u) } },
        attrHooks: { type: { set: function(n, t) { if (!e.radioValue && t === "radio" && l(n, "input")) { var i = n.value; return n.setAttribute("type", t), i && (n.value = i), t } } } },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(a);
            if (r && n.nodeType === 1)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    hf = { set: function(n, t, r) { return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r } };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = vt[t] || i.find.attr;
        vt[t] = function(n, t, i) { var f, e, u = t.toLowerCase(); return i || (e = vt[u], vt[u] = f, f = r(n, t, i) != null ? u : null, vt[u] = e), f }
    });
    cf = /^(?:input|select|textarea|button)$/i;
    lf = /^(?:a|area)$/i;
    i.fn.extend({ prop: function(n, t) { return w(this, i.prop, n, t, arguments.length > 1) }, removeProp: function(n) { return this.each(function() { delete this[i.propFix[n] || n] }) } });
    i.extend({ prop: function(n, t, r) { var f, u, e = n.nodeType; if (e !== 3 && e !== 8 && e !== 2) return (e === 1 && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), r !== undefined) ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t] }, propHooks: { tabIndex: { get: function(n) { var t = i.find.attr(n, "tabindex"); return t ? parseInt(t, 10) : cf.test(n.nodeName) || lf.test(n.nodeName) && n.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } });
    e.optSelected || (i.propHooks.selected = {
        get: function(n) { var t = n.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { i.propFix[this.toLowerCase()] = this });
    i.fn.extend({
        addClass: function(n) {
            var f, r, t, e, o, h, s, c = 0;
            if (u(n)) return this.each(function(t) { i(this).addClass(n.call(this, t, tt(this))) });
            if (f = tr(n), f.length)
                while (r = this[c++])
                    if (e = tt(r), t = r.nodeType === 1 && " " + nt(e) + " ", t) {
                        for (h = 0; o = f[h++];) t.indexOf(" " + o + " ") < 0 && (t += o + " ");
                        s = nt(t);
                        e !== s && r.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(n) {
            var f, r, t, e, o, h, s, c = 0;
            if (u(n)) return this.each(function(t) { i(this).removeClass(n.call(this, t, tt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if (f = tr(n), f.length)
                while (r = this[c++])
                    if (e = tt(r), t = r.nodeType === 1 && " " + nt(e) + " ", t) {
                        for (h = 0; o = f[h++];)
                            while (t.indexOf(" " + o + " ") > -1) t = t.replace(" " + o + " ", " ");
                        s = nt(t);
                        e !== s && r.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var f = typeof n,
                e = f === "string" || Array.isArray(n);
            return typeof t == "boolean" && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) { i(this).toggleClass(n.call(this, r, tt(this), t), t) }) : this.each(function() {
                var t, o, u, s;
                if (e)
                    for (o = 0, u = i(this), s = tr(n); t = s[o++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else(n === undefined || f === "boolean") && (t = tt(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (t.nodeType === 1 && (" " + nt(tt(t)) + " ").indexOf(i) > -1) return !0;
            return !1
        }
    });
    af = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, e, f = this[0];
            return arguments.length ? (e = u(n), this.each(function(r) {
                var u;
                this.nodeType === 1 && (u = e ? n.call(this, r, i(this).val()) : n, u == null ? u = "" : typeof u == "number" ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) { return n == null ? "" : n + "" })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, u, "value") !== undefined || (this.value = u))
            })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], t && "get" in t && (r = t.get(f, "value")) !== undefined) ? r : (r = f.value, typeof r == "string") ? r.replace(af, "") : r == null ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: { get: function(n) { var t = i.find.attr(n, "value"); return t != null ? t : nt(i.text(n)) } },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = n.type === "select-one", s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (t = o[r], (t.selected || r === u) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) { for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0); return u || (n.selectedIndex = -1), e }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = { set: function(n, t) { if (Array.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1 } };
        e.checkOn || (i.valHooks[this].get = function(n) { return n.getAttribute("value") === null ? "on" : n.value })
    });
    e.focusin = "onfocusin" in n;
    ir = /^(?:focusinfocus|focusoutblur)$/;
    rr = function(n) { n.stopPropagation() };
    i.extend(i.event, {
        trigger: function(t, e, o, s) {
            var k, c, l, d, v, y, a, w, b = [o || f],
                h = ii.call(t, "type") ? t.type : t,
                p = ii.call(t, "namespace") ? t.namespace.split(".") : [];
            if ((c = w = l = o = o || f, o.nodeType !== 3 && o.nodeType !== 8) && !ir.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), v = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, typeof t == "object" && t), t.isTrigger = s ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = o), e = e == null ? [t] : i.makeArray(e, [t]), a = i.event.special[h] || {}, s || !a.trigger || a.trigger.apply(o, e) !== !1)) {
                if (!s && !a.noBubble && !it(o)) {
                    for (d = a.delegateType || h, ir.test(d + h) || (c = c.parentNode); c; c = c.parentNode) b.push(c), l = c;
                    l === (o.ownerDocument || f) && b.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0;
                    (c = b[k++]) && !t.isPropagationStopped();) w = c, t.type = k > 1 ? d : a.bindType || h, y = (r.get(c, "events") || Object.create(null))[t.type] && r.get(c, "handle"), y && y.apply(c, e), y = v && c[v], y && y.apply && et(c) && (t.result = y.apply(c, e), t.result === !1 && t.preventDefault());
                return t.type = h, s || t.isDefaultPrevented() || (!a._default || a._default.apply(b.pop(), e) === !1) && et(o) && v && u(o[h]) && !it(o) && (l = o[v], l && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && w.addEventListener(h, rr), o[h](), t.isPropagationStopped() && w.removeEventListener(h, rr), i.event.triggered = undefined, l && (o[v] = l)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, { type: n, isSimulated: !0 });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({ trigger: function(n, t) { return this.each(function() { i.event.trigger(n, t, this) }) }, triggerHandler: function(n, t) { var r = this[0]; if (r) return i.event.trigger(n, t, r, !0) } });
    e.focusin || i.each({ focus: "focusin", blur: "focusout" }, function(n, t) {
        var u = function(n) { i.event.simulate(t, n.target, i.event.fix(n)) };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var gt = n.location,
        vf = { guid: Date.now() },
        ur = /\?/;
    i.parseXML = function(t) { var r; if (!t || typeof t != "string") return null; try { r = (new n.DOMParser).parseFromString(t, "text/xml") } catch (u) { r = undefined } return (!r || r.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + t), r };
    var so = /\[\]$/,
        yf = /\r?\n/g,
        ho = /^(?:submit|button|image|reset|file)$/i,
        co = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, f = [],
            e = function(n, t) {
                var i = u(t) ? t() : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(i == null ? "" : i)
            };
        if (n == null) return "";
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() { e(this.name, this.value) });
        else
            for (r in n) fr(r, n[r], t, e);
        return f.join("&")
    };
    i.fn.extend({ serialize: function() { return i.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var n = i.prop(this, "elements"); return n ? i.makeArray(n) : this }).filter(function() { var n = this.type; return this.name && !i(this).is(":disabled") && co.test(this.nodeName) && !ho.test(n) && (this.checked || !kt.test(n)) }).map(function(n, t) { var r = i(this).val(); return r == null ? null : Array.isArray(r) ? i.map(r, function(n) { return { name: t.name, value: n.replace(yf, "\r\n") } }) : { name: t.name, value: r.replace(yf, "\r\n") } }).get() } });
    var lo = /%20/g,
        ao = /#.*$/,
        vo = /([?&])_=[^&]*/,
        yo = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        po = /^(?:GET|HEAD)$/,
        wo = /^\/\//,
        pf = {},
        er = {},
        wf = "*/".concat("*"),
        or = f.createElement("a");
    return or.href = gt.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: gt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol), global: !0, processData: !0, "async": !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": wf, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": i.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(n, t) { return t ? sr(sr(n, i.ajaxSettings), t) : sr(i.ajaxSettings, n) },
        ajaxPrefilter: bf(pf),
        ajaxTransport: bf(er),
        ajax: function(t, r) {
            function b(t, r, f, l) {
                var v, rt, g, p, b, a = r;
                s || (s = !0, d && n.clearTimeout(d), c = undefined, k = l || "", e.readyState = t > 0 ? 4 : 0, v = t >= 200 && t < 300 || t === 304, f && (p = bo(u, e, f)), !v && i.inArray("script", u.dataTypes) > -1 && (u.converters["text script"] = function() {}), p = ko(u, p, e, v), v ? (u.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), t === 204 || u.type === "HEAD" ? a = "nocontent" : t === 304 ? a = "notmodified" : (a = p.state, rt = p.data, g = p.error, v = !g)) : (g = a, (t || !a) && (a = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || a) + "", v ? tt.resolveWith(h, [rt, a, e]) : tt.rejectWith(h, [e, a, g]), e.statusCode(w), w = undefined, y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : g]), it.fireWith(h, [e, a]), y && (nt.trigger("ajaxComplete", [e, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            typeof t == "object" && (r = t, t = undefined);
            r = r || {};
            var c, o, k, v, d, l, s, y, g, p, u = i.ajaxSetup({}, r),
                h = u.context || u,
                nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = u.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!v)
                                for (v = {}; t = yo.exec(k);) v[t[1].toLowerCase() + " "] = (v[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = v[n.toLowerCase() + " "]
                        }
                        return t == null ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() { return s ? k : null },
                    setRequestHeader: function(n, t) { return s == null && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this },
                    overrideMimeType: function(n) { return s == null && (u.mimeType = n), this },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) { var t = n || ft; return c && c.abort(t), b(0, t), this }
                };
            if (tt.promise(e), u.url = ((t || u.url || gt.href) + "").replace(wo, gt.protocol + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(a) || [""], u.crossDomain == null) {
                l = f.createElement("a");
                try {
                    l.href = u.url;
                    l.href = l.href;
                    u.crossDomain = or.protocol + "//" + or.host != l.protocol + "//" + l.host
                } catch (et) { u.crossDomain = !0 }
            }
            if (u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), kf(pf, u, r, e), s) return e;
            y = i.event && u.global;
            y && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !po.test(u.type);
            o = u.url.replace(ao, "");
            u.hasContent ? u.data && u.processData && (u.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (u.data = u.data.replace(lo, "+")) : (p = u.url.slice(o.length), u.data && (u.processData || typeof u.data == "string") && (o += (ur.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (o = o.replace(vo, "$1"), p = (ur.test(o) ? "&" : "?") + "_=" + vf.guid++ + p), u.url = o + p);
            u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", u.contentType);
            e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + wf + "; q=0.01" : "") : u.accepts["*"]);
            for (g in u.headers) e.setRequestHeader(g, u.headers[g]);
            if (u.beforeSend && (u.beforeSend.call(h, e, u) === !1 || s)) return e.abort();
            if (ft = "abort", it.add(u.complete), e.done(u.success), e.fail(u.error), c = kf(er, u, r, e), c) {
                if (e.readyState = 1, y && nt.trigger("ajaxSend", [e, u]), s) return e;
                u.async && u.timeout > 0 && (d = n.setTimeout(function() { e.abort("timeout") }, u.timeout));
                try {
                    s = !1;
                    c.send(rt, b)
                } catch (et) {
                    if (s) throw et;
                    b(-1, et)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) { return i.get(n, t, r, "json") },
        getScript: function(n, t) { return i.get(n, undefined, t, "script") }
    }), i.each(["get", "post"], function(n, t) { i[t] = function(n, r, f, e) { return u(r) && (e = e || f, f = r, r = undefined), i.ajax(i.extend({ url: n, type: t, dataType: e, data: r, success: f }, i.isPlainObject(n) && n)) } }), i.ajaxPrefilter(function(n) { for (var t in n.headers) t.toLowerCase() === "content-type" && (n.contentType = n.headers[t] || "") }), i._evalUrl = function(n, t, r) { return i.ajax({ url: n, type: "GET", dataType: "script", cache: !0, "async": !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(n) { i.globalEval(n, t, r) } }) }, i.fn.extend({
        wrapAll: function(n) { var t; return this[0] && (u(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var n = this; n.firstElementChild;) n = n.firstElementChild; return n }).append(this)), this },
        wrapInner: function(n) {
            return u(n) ? this.each(function(t) { i(this).wrapInner(n.call(this, t)) }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) { var t = u(n); return this.each(function(r) { i(this).wrapAll(t ? n.call(this, r) : n) }) },
        unwrap: function(n) { return this.parent(n).not("body").each(function() { i(this).replaceWith(this.childNodes) }), this }
    }), i.expr.pseudos.hidden = function(n) { return !i.expr.pseudos.visible(n) }, i.expr.pseudos.visible = function(n) { return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length) }, i.ajaxSettings.xhr = function() { try { return new n.XMLHttpRequest } catch (t) {} }, df = { 0: 200, 1223: 204 }, yt = i.ajaxSettings.xhr(), e.cors = !!yt && "withCredentials" in yt, e.ajax = yt = !!yt, i.ajaxTransport(function(t) {
        var i, r;
        if (e.cors || yt && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                for (o in u) e.setRequestHeader(o, u[o]);
                i = function(n) { return function() { i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, n === "abort" ? e.abort() : n === "error" ? typeof e.status != "number" ? f(0, "error") : f(e.status, e.statusText) : f(df[e.status] || e.status, e.statusText, (e.responseType || "text") !== "text" || typeof e.responseText != "string" ? { binary: e.response } : { text: e.responseText }, e.getAllResponseHeaders())) } };
                e.onload = i();
                r = e.onerror = e.ontimeout = i("error");
                e.onabort !== undefined ? e.onabort = r : e.onreadystatechange = function() { e.readyState === 4 && n.setTimeout(function() { i && r() }) };
                i = i("abort");
                try { e.send(t.hasContent && t.data || null) } catch (s) { if (i) throw s; }
            },
            abort: function() { i && i() }
        }
    }), i.ajaxPrefilter(function(n) { n.crossDomain && (n.contents.script = !1) }), i.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(n) { return i.globalEval(n), n } } }), i.ajaxPrefilter("script", function(n) {
        n.cache === undefined && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain || n.scriptAttrs) {
            var r, t;
            return {
                send: function(u, e) {
                    r = i("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e(n.type === "error" ? 404 : 200, n.type)
                    });
                    f.head.appendChild(r[0])
                },
                abort: function() { t && t() }
            }
        }
    }), hr = [], ci = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var n = hr.pop() || i.expando + "_" + vf.guid++; return this[n] = !0, n } }), i.ajaxPrefilter("json jsonp", function(t, r, f) {
        var e, o, s, h = t.jsonp !== !1 && (ci.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ci.test(t.data) && "data");
        if (h || t.dataTypes[0] === "jsonp") return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(ci, "$1" + e) : t.jsonp !== !1 && (t.url += (ur.test(t.url) ? "&" : "?") + t.jsonp + "=" + e), t.converters["script json"] = function() { return s || i.error(e + " was not called"), s[0] }, t.dataTypes[0] = "json", o = n[e], n[e] = function() { s = arguments }, f.always(function() {
            o === undefined ? i(n).removeProp(e) : n[e] = o;
            t[e] && (t.jsonpCallback = r.jsonpCallback, hr.push(e));
            s && u(o) && o(s[0]);
            s = o = undefined
        }), "script"
    }), e.createHTMLDocument = function() { var n = f.implementation.createHTMLDocument("").body; return n.innerHTML = "<form><\/form><form><\/form>", n.childNodes.length === 2 }(), i.parseHTML = function(n, t, r) {
        if (typeof n != "string") return [];
        typeof t == "boolean" && (r = t, t = !1);
        var s, u, o;
        return (t || (e.createHTMLDocument ? (t = f.implementation.createHTMLDocument(""), s = t.createElement("base"), s.href = f.location.href, t.head.appendChild(s)) : t = f), u = vi.exec(n), o = !r && [], u) ? [t.createElement(u[1])] : (u = lu([n], t, o), o && o.length && i(o).remove(), i.merge([], u.childNodes))
    }, i.fn.load = function(n, t, r) {
        var f, s, h, e = this,
            o = n.indexOf(" ");
        return o > -1 && (f = nt(n.slice(o)), n = n.slice(0, o)), u(t) ? (r = t, t = undefined) : t && typeof t == "object" && (s = "POST"), e.length > 0 && i.ajax({ url: n, type: s || "GET", dataType: "html", data: t }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).always(r && function(n, t) { e.each(function() { r.apply(this, h || [n.responseText, t, n]) }) }), this
    }, i.expr.pseudos.animated = function(n) { return i.grep(i.timers, function(t) { return n === t.elem }).length }, i.offset = {
        setOffset: function(n, t, r) {
            var o, s, h, c, e, l, y, a = i.css(n, "position"),
                v = i(n),
                f = {};
            a === "static" && (n.style.position = "relative");
            e = v.offset();
            h = i.css(n, "top");
            l = i.css(n, "left");
            y = (a === "absolute" || a === "fixed") && (h + l).indexOf("auto") > -1;
            y ? (o = v.position(), c = o.top, s = o.left) : (c = parseFloat(h) || 0, s = parseFloat(l) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, e)));
            t.top != null && (f.top = t.top - e.top + c);
            t.left != null && (f.left = t.left - e.left + s);
            "using" in t ? t.using.call(n, f) : (typeof f.top == "number" && (f.top += "px"), typeof f.left == "number" && (f.left += "px"), v.css(f))
        }
    }, i.fn.extend({
        offset: function(n) { if (arguments.length) return n === undefined ? this : this.each(function(t) { i.offset.setOffset(this, n, t) }); var r, u, t = this[0]; if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, { top: r.top + u.pageYOffset, left: r.left + u.pageXOffset }) : { top: 0, left: 0 } },
        position: function() {
            if (this[0]) {
                var n, u, f, t = this[0],
                    r = { top: 0, left: 0 };
                if (i.css(t, "position") === "fixed") u = t.getBoundingClientRect();
                else {
                    for (u = this.offset(), f = t.ownerDocument, n = t.offsetParent || f.documentElement; n && (n === f.body || n === f.documentElement) && i.css(n, "position") === "static";) n = n.parentNode;
                    n && n !== t && n.nodeType === 1 && (r = i(n).offset(), r.top += i.css(n, "borderTopWidth", !0), r.left += i.css(n, "borderLeftWidth", !0))
                }
                return { top: u.top - r.top - i.css(t, "marginTop", !0), left: u.left - r.left - i.css(t, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var n = this.offsetParent; n && i.css(n, "position") === "static";) n = n.offsetParent; return n || g }) }
    }), i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return w(this, function(n, i, u) {
                var f;
                if (it(n) ? f = n : n.nodeType === 9 && (f = n.defaultView), u === undefined) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) { i.cssHooks[t] = bu(e.pixelPosition, function(n, r) { if (r) return r = dt(n, t), ki.test(r) ? i(n).position()[t] + "px" : r }) }), i.each({ Height: "height", Width: "width" }, function(n, t) {
        i.each({ padding: "inner" + n, content: t, "": "outer" + n }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || typeof f != "boolean"),
                    s = r || (f === !0 || e === !0 ? "margin" : "border");
                return w(this, function(t, r, f) { var e; return it(t) ? u.indexOf("outer") === 0 ? t["inner" + n] : t.document.documentElement["client" + n] : t.nodeType === 9 ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : f === undefined ? i.css(t, r, s) : i.style(t, r, f, s) }, t, o ? f : undefined, o)
            }
        })
    }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) { i.fn[t] = function(n) { return this.on(t, n) } }), i.fn.extend({ bind: function(n, t, i) { return this.on(n, null, t, i) }, unbind: function(n, t) { return this.off(n, null, t) }, delegate: function(n, t, i, r) { return this.on(t, n, i, r) }, undelegate: function(n, t, i) { return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i) }, hover: function(n, t) { return this.mouseenter(n).mouseleave(t || n) } }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) { i.fn[t] = function(n, i) { return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t) } }), gf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, i.proxy = function(n, t) { var f, e, r; return (typeof t == "string" && (f = n[t], t = n, n = f), !u(n)) ? undefined : (e = k.call(arguments, 2), r = function() { return n.apply(t || this, e.concat(k.call(arguments))) }, r.guid = n.guid = n.guid || i.guid++, r) }, i.holdReady = function(n) { n ? i.readyWait++ : i.ready(!0) }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = l, i.isFunction = u, i.isWindow = it, i.camelCase = y, i.type = rt, i.now = Date.now, i.isNumeric = function(n) { var t = i.type(n); return (t === "number" || t === "string") && !isNaN(n - parseFloat(n)) }, i.trim = function(n) { return n == null ? "" : (n + "").replace(gf, "") }, typeof define == "function" && define.amd && define("jquery", [], function() { return i }), ne = n.jQuery, te = n.$, i.noConflict = function(t) { return n.$ === i && (n.$ = te), t && n.jQuery === i && (n.jQuery = ne), i }, typeof t == "undefined" && (n.jQuery = n.$ = i), i
});
! function(n, t, i, r) {
    function u(t, i) {
        this.settings = null;
        this.options = n.extend({}, u.Defaults, i);
        this.$element = n(t);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null };
        this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } };
        n.each(["onResize", "onThrottledResize"], n.proxy(function(t, i) { this._handlers[i] = n.proxy(this[i], this) }, this));
        n.each(u.Plugins, n.proxy(function(n, t) { this._plugins[n.charAt(0).toLowerCase() + n.slice(1)] = new t(this) }, this));
        n.each(u.Workers, n.proxy(function(t, i) { this._pipe.push({ filter: i.filter, run: n.proxy(i.run, this) }) }, this));
        this.setup();
        this.initialize()
    }
    u.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, checkVisibility: !0, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: t, fallbackEasing: "swing", slideTransition: "", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" };
    u.Width = { Default: "default", Inner: "inner", Outer: "outer" };
    u.Type = { Event: "event", State: "state" };
    u.Plugins = {};
    u.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(n) { n.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this.settings.margin || "",
                u = !this.settings.autoWidth,
                i = this.settings.rtl,
                r = { width: "auto", "margin-left": i ? t : "", "margin-right": i ? "" : t };
            u || this.$stage.children().css(r);
            n.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var r = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                t = null,
                i = this._items.length,
                f = !this.settings.autoWidth,
                u = [];
            for (n.items = { merge: !1, width: r }; i--;) t = this._mergers[i], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, n.items.merge = t > 1 || n.items.merge, u[i] = f ? r * t : this._items[i].width();
            this._widths = u
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = [],
                i = this._items,
                r = this.settings,
                e = Math.max(2 * r.items, 4),
                s = 2 * Math.ceil(i.length / 2),
                u = r.loop && i.length ? r.rewind ? e : Math.max(e, s) : 0,
                o = "",
                f = "";
            for (u /= 2; u > 0;) t.push(this.normalize(t.length / 2, !0)), o += i[t[t.length - 1]][0].outerHTML, t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), f = i[t[t.length - 1]][0].outerHTML + f, u -= 1;
            this._clones = t;
            n(o).addClass("cloned").appendTo(this.$stage);
            n(f).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var u = this.settings.rtl ? 1 : -1, f = this._clones.length + this._items.length, n = -1, i = 0, r = 0, t = []; ++n < f;) i = t[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, t.push(i + r * u);
            this._coordinates = t
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var n = this.settings.stagePadding,
                t = this._coordinates,
                i = { width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * n, "padding-left": n || "", "padding-right": n || "" };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this._coordinates.length,
                i = !this.settings.autoWidth,
                r = this.$stage.children();
            if (i && n.items.merge)
                for (; t--;) n.css.width = this._widths[this.relative(t)], r.eq(t).css(n.css);
            else i && (n.css.width = n.items.width, r.css(n.css))
        }
    }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = n.current ? this.$stage.children().index(n.current) : 0;
            n.current = Math.max(this.minimum(), Math.min(this.maximum(), n.current));
            this.reset(n.current)
        }
    }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var t, i, f = this.settings.rtl ? 1 : -1, e = 2 * this.settings.stagePadding, r = this.coordinates(this.current()) + e, o = r + this.width() * f, s = [], n = 0, u = this._coordinates.length; n < u; n++) t = this._coordinates[n - 1] || 0, i = Math.abs(this._coordinates[n]) + e * f, (this.op(t, "<=", r) && this.op(t, ">", o) || this.op(i, "<", r) && this.op(i, ">", o)) && s.push(n);
            this.$stage.children(".active").removeClass("active");
            this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active");
            this.$stage.children(".center").removeClass("center");
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }];
    u.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass);
        this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = n("<" + this.settings.stageElement + ">", { "class": this.settings.stageClass }).wrap(n("<div/>", { "class": this.settings.stageOuterClass })), this.$element.append(this.$stage.parent()))
    };
    u.prototype.initializeItems = function() {
        var t = this.$element.find(".owl-item");
        if (t.length) return this._items = t.get().map(function(t) { return n(t) }), this._mergers = this._items.map(function() { return 1 }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent()));
        this.isVisible() ? this.refresh() : this.invalidate("width");
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    };
    u.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var n, t, i;
            n = this.$element.find("img");
            t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r;
            i = this.$element.children(t).width();
            n.length && i <= 0 && this.preloadAutoWidthImages(n)
        }
        this.initializeStage();
        this.initializeItems();
        this.registerEventHandlers();
        this.leave("initializing");
        this.trigger("initialized")
    };
    u.prototype.isVisible = function() { return !this.settings.checkVisibility || this.$element.is(":visible") };
    u.prototype.setup = function() {
        var u = this.viewport(),
            r = this.options.responsive,
            i = -1,
            t = null;
        r ? (n.each(r, function(n) { n <= u && n > i && (i = Number(n)) }), t = n.extend({}, this.options, r[i]), "function" == typeof t.stagePadding && (t.stagePadding = t.stagePadding()), delete t.responsive, t.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : t = n.extend({}, this.options);
        this.trigger("change", { property: { name: "settings", value: t } });
        this._breakpoint = i;
        this.settings = t;
        this.invalidate("settings");
        this.trigger("changed", { property: { name: "settings", value: this.settings } })
    };
    u.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) };
    u.prototype.prepare = function(t) { var i = this.trigger("prepare", { content: t }); return i.data || (i.data = n("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", { content: i.data }), i.data };
    u.prototype.update = function() {
        for (var t = 0, i = this._pipe.length, r = n.proxy(function(n) { return this[n] }, this._invalidated), u = {}; t < i;)(this._invalidated.all || n.grep(this._pipe[t].filter, r).length > 0) && this._pipe[t].run(u), t++;
        this._invalidated = {};
        this.is("valid") || this.enter("valid")
    };
    u.prototype.width = function(n) {
        switch (n = n || u.Width.Default) {
            case u.Width.Inner:
            case u.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    };
    u.prototype.refresh = function() {
        this.enter("refreshing");
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave("refreshing");
        this.trigger("refreshed")
    };
    u.prototype.onThrottledResize = function() {
        t.clearTimeout(this.resizeTimer);
        this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    };
    u.prototype.onResize = function() { return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) };
    u.prototype.registerEventHandlers = function() {
        n.support.transition && this.$stage.on(n.support.transition.end + ".owl.core", n.proxy(this.onTransitionEnd, this));
        !1 !== this.settings.responsive && this.on(t, "resize", this._handlers.onThrottledResize);
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", n.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 }));
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", n.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", n.proxy(this.onDragEnd, this)))
    };
    u.prototype.onDragStart = function(t) {
        var r = null;
        3 !== t.which && (n.support.transform ? (r = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), r = { x: r[16 === r.length ? 12 : 4], y: r[16 === r.length ? 13 : 5] }) : (r = this.$stage.position(), r = { x: this.settings.rtl ? r.left + this.$stage.width() - this.width() + this.settings.margin : r.left, y: r.top }), this.is("animating") && (n.support.transform ? this.animate(r.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = n(t.target), this._drag.stage.start = r, this._drag.stage.current = r, this._drag.pointer = this.pointer(t), n(i).on("mouseup.owl.core touchend.owl.core", n.proxy(this.onDragEnd, this)), n(i).one("mousemove.owl.core touchmove.owl.core", n.proxy(function(t) {
            var r = this.difference(this._drag.pointer, this.pointer(t));
            n(i).on("mousemove.owl.core touchmove.owl.core", n.proxy(this.onDragMove, this));
            Math.abs(r.x) < Math.abs(r.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    };
    u.prototype.onDragMove = function(n) {
        var t = null,
            i = null,
            u = null,
            f = this.difference(this._drag.pointer, this.pointer(n)),
            r = this.difference(this._drag.stage.start, f);
        this.is("dragging") && (n.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - t, r.x = ((r.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), u = this.settings.pullDrag ? f.x / -5 : 0, r.x = Math.max(Math.min(r.x, t + u), i + u)), this._drag.stage.current = r, this.animate(r.x))
    };
    u.prototype.onDragEnd = function(t) {
        var r = this.difference(this._drag.pointer, this.pointer(t)),
            f = this._drag.stage.current,
            u = r.x > 0 ^ this.settings.rtl ? "left" : "right";
        n(i).off(".owl.core");
        this.$element.removeClass(this.options.grabClass);
        (0 !== r.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(f.x, 0 !== r.x ? u : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = u, (Math.abs(r.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 }));
        this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    };
    u.prototype.closest = function(t, i) {
        var u = -1,
            e = 30,
            o = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || n.each(f, n.proxy(function(n, s) { return "left" === i && t > s - e && t < s + e ? u = n : "right" === i && t > s - o - e && t < s - o + e ? u = n + 1 : this.op(t, "<", s) && this.op(t, ">", f[n + 1] !== r ? f[n + 1] : s - o) && (u = "left" === i ? n + 1 : n), -1 === u }, this)), this.settings.loop || (this.op(t, ">", f[this.minimum()]) ? u = t = this.minimum() : this.op(t, "<", f[this.maximum()]) && (u = t = this.maximum())), u
    };
    u.prototype.animate = function(t) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd();
        i && (this.enter("animating"), this.trigger("translate"));
        n.support.transform3d && n.support.transition ? this.$stage.css({ transform: "translate3d(" + t + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") }) : i ? this.$stage.animate({ left: t + "px" }, this.speed(), this.settings.fallbackEasing, n.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: t + "px" })
    };
    u.prototype.is = function(n) { return this._states.current[n] && this._states.current[n] > 0 };
    u.prototype.current = function(n) {
        if (n === r) return this._current;
        if (0 === this._items.length) return r;
        if (n = this.normalize(n), this._current !== n) {
            var t = this.trigger("change", { property: { name: "position", value: n } });
            t.data !== r && (n = this.normalize(t.data));
            this._current = n;
            this.invalidate("position");
            this.trigger("changed", { property: { name: "position", value: this._current } })
        }
        return this._current
    };
    u.prototype.invalidate = function(t) { return "string" === n.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), n.map(this._invalidated, function(n, t) { return t }) };
    u.prototype.reset = function(n) {
        (n = this.normalize(n)) !== r && (this._speed = 0, this._current = n, this.suppress(["translate", "translated"]), this.animate(this.coordinates(n)), this.release(["translate", "translated"]))
    };
    u.prototype.normalize = function(n, t) {
        var i = this._items.length,
            u = t ? 0 : this._clones.length;
        return !this.isNumeric(n) || i < 1 ? n = r : (n < 0 || n >= i + u) && (n = ((n - u / 2) % i + i) % i + u / 2), n
    };
    u.prototype.relative = function(n) { return n -= this._clones.length / 2, this.normalize(n, !0) };
    u.prototype.maximum = function(n) {
        var t, u, f, i = this.settings,
            r = this._coordinates.length;
        if (i.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (i.autoWidth || i.merge) {
            if (t = this._items.length)
                for (u = this._items[--t].width(), f = this.$element.width(); t-- && !((u += this._items[t].width() + this.settings.margin) > f););
            r = t + 1
        } else r = i.center ? this._items.length - 1 : this._items.length - i.items;
        return n && (r -= this._clones.length / 2), Math.max(r, 0)
    };
    u.prototype.minimum = function(n) { return n ? 0 : this._clones.length / 2 };
    u.prototype.items = function(n) { return n === r ? this._items.slice() : (n = this.normalize(n, !0), this._items[n]) };
    u.prototype.mergers = function(n) { return n === r ? this._mergers.slice() : (n = this.normalize(n, !0), this._mergers[n]) };
    u.prototype.clones = function(t) {
        var i = this._clones.length / 2,
            f = i + this._items.length,
            u = function(n) { return n % 2 == 0 ? f + n / 2 : i - (n + 1) / 2 };
        return t === r ? n.map(this._clones, function(n, t) { return u(t) }) : n.map(this._clones, function(n, i) { return n === t ? u(i) : null })
    };
    u.prototype.speed = function(n) { return n !== r && (this._speed = n), this._speed };
    u.prototype.coordinates = function(t) {
        var i, f = 1,
            u = t - 1;
        return t === r ? n.map(this._coordinates, n.proxy(function(n, t) { return this.coordinates(t) }, this)) : (this.settings.center ? (this.settings.rtl && (f = -1, u = t + 1), i = this._coordinates[t], i += (this.width() - i + (this._coordinates[u] || 0)) / 2 * f) : i = this._coordinates[u] || 0, i = Math.ceil(i))
    };
    u.prototype.duration = function(n, t, i) { return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - n), 1), 6) * Math.abs(i || this.settings.smartSpeed) };
    u.prototype.to = function(n, t) {
        var u = this.current(),
            f = null,
            i = n - this.relative(u),
            s = (i > 0) - (i < 0),
            e = this._items.length,
            o = this.minimum(),
            r = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(i) > e / 2 && (i += -1 * s * e), n = u + i, (f = ((n - o) % e + e) % e + o) !== n && f - i <= r && f - i > 0 && (u = f - i, n = f, this.reset(u))) : this.settings.rewind ? (r += 1, n = (n % r + r) % r) : n = Math.max(o, Math.min(r, n));
        this.speed(this.duration(u, n, t));
        this.current(n);
        this.isVisible() && this.update()
    };
    u.prototype.next = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) + 1, n)
    };
    u.prototype.prev = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) - 1, n)
    };
    u.prototype.onTransitionEnd = function(n) {
        if (n !== r && (n.stopPropagation(), (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating");
        this.trigger("translated")
    };
    u.prototype.viewport = function() { var r; return this.options.responsiveBaseElement !== t ? r = n(this.options.responsiveBaseElement).width() : t.innerWidth ? r = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? r = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), r };
    u.prototype.replace = function(t) {
        this.$stage.empty();
        this._items = [];
        t && (t = t instanceof jQuery ? t : n(t));
        this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector));
        t.filter(function() { return 1 === this.nodeType }).each(n.proxy(function(n, t) {
            t = this.prepare(t);
            this.$stage.append(t);
            this._items.push(t);
            this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items")
    };
    u.prototype.add = function(t, i) {
        var u = this.relative(this._current);
        i = i === r ? this._items.length : this.normalize(i, !0);
        t = t instanceof jQuery ? t : n(t);
        this.trigger("add", { content: t, position: i });
        t = this.prepare(t);
        0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[i - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(t), this._items.splice(i, 0, t), this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1));
        this._items[u] && this.reset(this._items[u].index());
        this.invalidate("items");
        this.trigger("added", { content: t, position: i })
    };
    u.prototype.remove = function(n) {
        (n = this.normalize(n, !0)) !== r && (this.trigger("remove", { content: this._items[n], position: n }), this._items[n].remove(), this._items.splice(n, 1), this._mergers.splice(n, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: n }))
    };
    u.prototype.preloadAutoWidthImages = function(t) {
        t.each(n.proxy(function(t, i) {
            this.enter("pre-loading");
            i = n(i);
            n(new Image).one("load", n.proxy(function(n) {
                i.attr("src", n.target.src);
                i.css("opacity", 1);
                this.leave("pre-loading");
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    };
    u.prototype.destroy = function() {
        this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        n(i).off(".owl.core");
        !1 !== this.settings.responsive && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize));
        for (var r in this._plugins) this._plugins[r].destroy();
        this.$stage.children(".cloned").remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.remove();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    };
    u.prototype.op = function(n, t, i) {
        var r = this.settings.rtl;
        switch (t) {
            case "<":
                return r ? n > i : n < i;
            case ">":
                return r ? n < i : n > i;
            case ">=":
                return r ? n <= i : n >= i;
            case "<=":
                return r ? n >= i : n <= i
        }
    };
    u.prototype.on = function(n, t, i, r) { n.addEventListener ? n.addEventListener(t, i, r) : n.attachEvent && n.attachEvent("on" + t, i) };
    u.prototype.off = function(n, t, i, r) { n.removeEventListener ? n.removeEventListener(t, i, r) : n.detachEvent && n.detachEvent("on" + t, i) };
    u.prototype.trigger = function(t, i, r) {
        var o = { item: { count: this._items.length, index: this.current() } },
            e = n.camelCase(n.grep(["on", t, r], function(n) { return n }).join("-").toLowerCase()),
            f = n.Event([t, "owl", r || "carousel"].join(".").toLowerCase(), n.extend({ relatedTarget: this }, o, i));
        return this._supress[t] || (n.each(this._plugins, function(n, t) { t.onTrigger && t.onTrigger(f) }), this.register({ type: u.Type.Event, name: t }), this.$element.trigger(f), this.settings && "function" == typeof this.settings[e] && this.settings[e].call(this, f)), f
    };
    u.prototype.enter = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t] === r && (this._states.current[t] = 0);
            this._states.current[t]++
        }, this))
    };
    u.prototype.leave = function(t) { n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) { this._states.current[t]-- }, this)) };
    u.prototype.register = function(t) {
        if (t.type === u.Type.Event) {
            if (n.event.special[t.name] || (n.event.special[t.name] = {}), !n.event.special[t.name].owl) {
                var i = n.event.special[t.name]._default;
                n.event.special[t.name]._default = function(n) { return !i || !i.apply || n.namespace && -1 !== n.namespace.indexOf("owl") ? n.namespace && n.namespace.indexOf("owl") > -1 : i.apply(this, arguments) };
                n.event.special[t.name].owl = !0
            }
        } else t.type === u.Type.State && (this._states.tags[t.name] = this._states.tags[t.name] ? this._states.tags[t.name].concat(t.tags) : t.tags, this._states.tags[t.name] = n.grep(this._states.tags[t.name], n.proxy(function(i, r) { return n.inArray(i, this._states.tags[t.name]) === r }, this)))
    };
    u.prototype.suppress = function(t) { n.each(t, n.proxy(function(n, t) { this._supress[t] = !0 }, this)) };
    u.prototype.release = function(t) { n.each(t, n.proxy(function(n, t) { delete this._supress[t] }, this)) };
    u.prototype.pointer = function(n) { var i = { x: null, y: null }; return n = n.originalEvent || n || t.event, n = n.touches && n.touches.length ? n.touches[0] : n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, n.pageX ? (i.x = n.pageX, i.y = n.pageY) : (i.x = n.clientX, i.y = n.clientY), i };
    u.prototype.isNumeric = function(n) { return !isNaN(parseFloat(n)) };
    u.prototype.difference = function(n, t) { return { x: n.x - t.x, y: n.y - t.y } };
    n.fn.owlCarousel = function(t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var f = n(this),
                r = f.data("owl.carousel");
            r || (r = new u(this, "object" == typeof t && t), f.data("owl.carousel", r), n.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, i) {
                r.register({ type: u.Type.Event, name: i });
                r.$element.on(i + ".owl.carousel.core", n.proxy(function(n) { n.namespace && n.relatedTarget !== this && (this.suppress([i]), r[i].apply(this, [].slice.call(arguments, 1)), this.release([i])) }, r))
            }));
            "string" == typeof t && "_" !== t.charAt(0) && r[t].apply(r, i)
        })
    };
    n.fn.owlCarousel.Constructor = u
}(window.Zepto || window.jQuery, window, document),
function(n, t) {
    var i = function(t) {
        this._core = t;
        this._interval = null;
        this._visible = null;
        this._handlers = { "initialized.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.autoRefresh && this.watch() }, this) };
        this._core.options = n.extend({}, i.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    i.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 };
    i.prototype.watch = function() { this._interval || (this._visible = this._core.isVisible(), this._interval = t.setInterval(n.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) };
    i.prototype.refresh = function() { this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) };
    i.prototype.destroy = function() {
        var n, i;
        t.clearInterval(this._interval);
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this._core = t;
        this._loaded = [];
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": n.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                    var i = this._core.settings,
                        u = i.center && Math.ceil(i.items / 2) || i.items,
                        e = i.center && -1 * u || 0,
                        f = (t.property && t.property.value !== r ? t.property.value : this._core.current()) + e,
                        o = this._core.clones().length,
                        s = n.proxy(function(n, t) { this.load(t) }, this);
                    for (i.lazyLoadEager > 0 && (u += i.lazyLoadEager, i.loop && (f -= i.lazyLoadEager, u++)); e++ < u;) this.load(o / 2 + this._core.relative(f)), o && n.each(this._core.clones(this._core.relative(f)), s), f++
                }
            }, this)
        };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    u.Defaults = { lazyLoad: !1, lazyLoadEager: 0 };
    u.prototype.load = function(i) {
        var r = this._core.$stage.children().eq(i),
            u = r && r.find(".owl-lazy");
        !u || n.inArray(r.get(0), this._loaded) > -1 || (u.each(n.proxy(function(i, r) {
            var e, u = n(r),
                f = t.devicePixelRatio > 1 && u.attr("data-src-retina") || u.attr("data-src") || u.attr("data-srcset");
            this._core.trigger("load", { element: u, url: f }, "lazy");
            u.is("img") ? u.one("load.owl.lazy", n.proxy(function() {
                u.css("opacity", 1);
                this._core.trigger("loaded", { element: u, url: f }, "lazy")
            }, this)).attr("src", f) : u.is("source") ? u.one("load.owl.lazy", n.proxy(function() { this._core.trigger("loaded", { element: u, url: f }, "lazy") }, this)).attr("srcset", f) : (e = new Image, e.onload = n.proxy(function() {
                u.css({ "background-image": 'url("' + f + '")', opacity: "1" });
                this._core.trigger("loaded", { element: u, url: f }, "lazy")
            }, this), e.src = f)
        }, this)), this._loaded.push(r.get(0)))
    };
    u.prototype.destroy = function() { var n, t; for (n in this.handlers) this._core.$element.off(n, this.handlers[n]); for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null) };
    n.fn.owlCarousel.Constructor.Plugins.Lazy = u
}(window.Zepto || window.jQuery, window, document),
function(n, t) {
    var i = function(r) {
        this._core = r;
        this._previousHeight = null;
        this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.autoHeight && "position" === n.property.name && this.update() }, this), "loaded.owl.lazy": n.proxy(function(n) { n.namespace && this._core.settings.autoHeight && n.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) };
        this._core.options = n.extend({}, i.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._intervalId = null;
        var u = this;
        n(t).on("load", function() { u._core.settings.autoHeight && u.update() });
        n(t).resize(function() { u._core.settings.autoHeight && (null != u._intervalId && clearTimeout(u._intervalId), u._intervalId = setTimeout(function() { u.update() }, 250)) })
    };
    i.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" };
    i.prototype.update = function() {
        var i = this._core._current,
            u = i + this._core.settings.items,
            f = this._core.settings.lazyLoad,
            e = this._core.$stage.children().toArray().slice(i, u),
            r = [],
            t = 0;
        n.each(e, function(t, i) { r.push(n(i).height()) });
        t = Math.max.apply(null, r);
        t <= 1 && f && this._previousHeight && (t = this._previousHeight);
        this._previousHeight = t;
        this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
    };
    i.prototype.destroy = function() { var n, t; for (n in this._handlers) this._core.$element.off(n, this._handlers[n]); for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null) };
    n.fn.owlCarousel.Constructor.Plugins.AutoHeight = i
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._videos = {};
        this._playing = null;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(n) { n.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this),
            "resize.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.video && this.isInFullScreen() && n.preventDefault() }, this),
            "refreshed.owl.carousel": n.proxy(function(n) { n.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this),
            "changed.owl.carousel": n.proxy(function(n) { n.namespace && "position" === n.property.name && this._playing && this.stop() }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                if (t.namespace) {
                    var i = n(t.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, n(t.content)))
                }
            }, this)
        };
        this._core.options = n.extend({}, r.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", n.proxy(function(n) { this.play(n) }, this))
    };
    r.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 };
    r.prototype.fetch = function(n, t) {
        var u = function() { return n.attr("data-vimeo-id") ? "vimeo" : n.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
            i = n.attr("data-vimeo-id") || n.attr("data-youtube-id") || n.attr("data-vzaar-id"),
            f = n.attr("data-width") || this._core.settings.videoWidth,
            e = n.attr("data-height") || this._core.settings.videoHeight,
            r = n.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (i = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) u = "youtube";
        else if (i[3].indexOf("vimeo") > -1) u = "vimeo";
        else {
            if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            u = "vzaar"
        }
        i = i[6];
        this._videos[r] = { type: u, id: i, width: f, height: e };
        t.attr("data-video", r);
        this.thumbnail(n, this._videos[r])
    };
    r.prototype.thumbnail = function(t, i) {
        var e, o, r, c = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
            f = t.find("img"),
            s = "src",
            h = "",
            l = this._core.settings,
            u = function(i) {
                o = '<div class="owl-video-play-icon"><\/div>';
                e = l.lazyLoad ? n("<div/>", { "class": "owl-video-tn " + h, srcType: i }) : n("<div/>", { "class": "owl-video-tn", style: "opacity:1;background-image:url(" + i + ")" });
                t.after(e);
                t.after(o)
            };
        if (t.wrap(n("<div/>", { "class": "owl-video-wrapper", style: c })), this._core.settings.lazyLoad && (s = "data-src", h = "owl-lazy"), f.length) return u(f.attr(s)), f.remove(), !1;
        "youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(r)) : "vimeo" === i.type ? n.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n[0].thumbnail_large;
                u(r)
            }
        }) : "vzaar" === i.type && n.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n.framegrab_url;
                u(r)
            }
        })
    };
    r.prototype.stop = function() {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null;
        this._core.leave("playing");
        this._core.trigger("stopped", null, "video")
    };
    r.prototype.play = function(t) {
        var r, f = n(t.target),
            u = f.closest("." + this._core.settings.itemClass),
            i = this._videos[u.attr("data-video")],
            e = i.width || "100%",
            o = i.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), u = this._core.items(this._core.relative(u.index())), this._core.reset(u.index()), r = n('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ><\/iframe>'), r.attr("height", o), r.attr("width", e), "youtube" === i.type ? r.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id) : "vimeo" === i.type ? r.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1") : "vzaar" === i.type && r.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"), n(r).wrap('<div class="owl-video-frame" />').insertAfter(u.find(".owl-video")), this._playing = u.addClass("owl-video-playing"))
    };
    r.prototype.isInFullScreen = function() { var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement; return t && n(t).parent().hasClass("owl-video-frame") };
    r.prototype.destroy = function() {
        var n, t;
        this._core.$element.off("click.owl.video");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this.core = t;
        this.core.options = n.extend({}, u.Defaults, this.core.options);
        this.swapping = !0;
        this.previous = r;
        this.next = r;
        this.handlers = { "change.owl.carousel": n.proxy(function(n) { n.namespace && "position" == n.property.name && (this.previous = this.core.current(), this.next = n.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": n.proxy(function(n) { n.namespace && (this.swapping = "translated" == n.type) }, this), "translate.owl.carousel": n.proxy(function(n) { n.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) };
        this.core.$element.on(this.handlers)
    };
    u.Defaults = { animateOut: !1, animateIn: !1 };
    u.prototype.swap = function() {
        if (1 === this.core.settings.items && n.support.animation && n.support.transition) {
            this.core.speed(0);
            var t, i = n.proxy(this.clear, this),
                f = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                u = this.core.settings.animateOut;
            this.core.current() !== this.previous && (u && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), f.one(n.support.animation.end, i).css({ left: t + "px" }).addClass("animated owl-animated-out").addClass(u)), r && e.one(n.support.animation.end, i).addClass("animated owl-animated-in").addClass(r))
        }
    };
    u.prototype.clear = function(t) {
        n(t.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd()
    };
    u.prototype.destroy = function() { var n, t; for (n in this.handlers) this.core.$element.off(n, this.handlers[n]); for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null) };
    n.fn.owlCarousel.Constructor.Plugins.Animate = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._call = null;
        this._time = 0;
        this._timeout = 0;
        this._paused = !0;
        this._handlers = { "changed.owl.carousel": n.proxy(function(n) { n.namespace && "settings" === n.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : n.namespace && "position" === n.property.name && this._paused && (this._time = 0) }, this), "initialized.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": n.proxy(function(n, t, i) { n.namespace && this.play(t, i) }, this), "stop.owl.autoplay": n.proxy(function(n) { n.namespace && this.stop() }, this), "mouseover.owl.autoplay": n.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": n.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": n.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": n.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) };
        this._core.$element.on(this._handlers);
        this._core.options = n.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 };
    r.prototype._next = function(r) {
        this._call = t.setTimeout(n.proxy(this._next, this, r), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read());
        this._core.is("interacting") || i.hidden || this._core.next(r || this._core.settings.autoplaySpeed)
    };
    r.prototype.read = function() { return (new Date).getTime() - this._time };
    r.prototype.play = function(i, r) {
        var u;
        this._core.is("rotating") || this._core.enter("rotating");
        i = i || this._core.settings.autoplayTimeout;
        u = Math.min(this._time % (this._timeout || i), i);
        this._paused ? (this._time = this.read(), this._paused = !1) : t.clearTimeout(this._call);
        this._time += this.read() % i - u;
        this._timeout = i;
        this._call = t.setTimeout(n.proxy(this._next, this, r), i - u)
    };
    r.prototype.stop = function() { this._core.is("rotating") && (this._time = 0, this._paused = !0, t.clearTimeout(this._call), this._core.leave("rotating")) };
    r.prototype.pause = function() { this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, t.clearTimeout(this._call)) };
    r.prototype.destroy = function() {
        var n, t;
        this.stop();
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function(n) {
    "use strict";
    var t = function(i) {
        this._core = i;
        this._initialized = !1;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to };
        this._handlers = { "prepared.owl.carousel": n.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "<\/div>") }, this), "added.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 1) }, this), "changed.owl.carousel": n.proxy(function(n) { n.namespace && "position" == n.property.name && this.draw() }, this), "initialized.owl.carousel": n.proxy(function(n) { n.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": n.proxy(function(n) { n.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this.$element.on(this._handlers)
    };
    t.Defaults = { nav: !1, navText: ['<span aria-label="Previous">&#x2039;<\/span>', '<span aria-label="Next">&#x203a;<\/span>'], navSpeed: !1, navElement: 'button type="button" role="presentation"', navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 };
    t.prototype.initialize = function() {
        var i, t = this._core.settings;
        this._controls.$relative = (t.navContainer ? n(t.navContainer) : n("<div>").addClass(t.navContainerClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$previous = n("<" + t.navElement + ">").addClass(t.navClass[0]).html(t.navText[0]).prependTo(this._controls.$relative).on("click", n.proxy(function() { this.prev(t.navSpeed) }, this));
        this._controls.$next = n("<" + t.navElement + ">").addClass(t.navClass[1]).html(t.navText[1]).appendTo(this._controls.$relative).on("click", n.proxy(function() { this.next(t.navSpeed) }, this));
        t.dotsData || (this._templates = [n('<button role="button">').addClass(t.dotClass).append(n("<span>")).prop("outerHTML")]);
        this._controls.$absolute = (t.dotsContainer ? n(t.dotsContainer) : n("<div>").addClass(t.dotsClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$absolute.on("click", "button", n.proxy(function(i) {
            var r = n(i.target).parent().is(this._controls.$absolute) ? n(i.target).index() : n(i.target).parent().index();
            i.preventDefault();
            this.to(r, t.dotsSpeed)
        }, this));
        for (i in this._overrides) this._core[i] = n.proxy(this[i], this)
    };
    t.prototype.destroy = function() { var t, n, i, r, u = this._core.settings; for (t in this._handlers) this.$element.off(t, this._handlers[t]); for (n in this._controls) "$relative" === n && u.navContainer ? this._controls[n].html("") : this._controls[n].remove(); for (r in this.overides) this._core[r] = this._overrides[r]; for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) };
    t.prototype.update = function() {
        var t, i, f, r = this._core.clones().length / 2,
            o = r + this._core.items().length,
            u = this._core.maximum(!0),
            n = this._core.settings,
            e = n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items;
        if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
            for (this._pages = [], t = r, i = 0, f = 0; t < o; t++) {
                if (i >= e || 0 === i) {
                    if (this._pages.push({ start: Math.min(u, t - r), end: t - r + e - 1 }), Math.min(u, t - r) === u) break;
                    i = 0;
                    ++f
                }
                i += this._core.mergers(this._core.relative(t))
            }
    };
    t.prototype.draw = function() {
        var i, t = this._core.settings,
            r = this._core.items().length <= t.items,
            u = this._core.relative(this._core.current()),
            f = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || r);
        t.nav && (this._controls.$previous.toggleClass("disabled", !f && u <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && u >= this._core.maximum(!0)));
        this._controls.$absolute.toggleClass("disabled", !t.dots || r);
        t.dots && (i = this._pages.length - this._controls.$absolute.children().length, t.dotsData && 0 !== i ? this._controls.$absolute.html(this._templates.join("")) : i > 0 ? this._controls.$absolute.append(new Array(i + 1).join(this._templates[0])) : i < 0 && this._controls.$absolute.children().slice(i).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(n.inArray(this.current(), this._pages)).addClass("active"))
    };
    t.prototype.onTrigger = function(t) {
        var i = this._core.settings;
        t.page = { index: n.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items) }
    };
    t.prototype.current = function() { var t = this._core.relative(this._core.current()); return n.grep(this._pages, n.proxy(function(n) { return n.start <= t && n.end >= t }, this)).pop() };
    t.prototype.getPosition = function(t) { var i, r, u = this._core.settings; return "page" == u.slideBy ? (i = n.inArray(this.current(), this._pages), r = this._pages.length, t ? ++i : --i, i = this._pages[(i % r + r) % r].start) : (i = this._core.relative(this._core.current()), r = this._core.items().length, t ? i += u.slideBy : i -= u.slideBy), i };
    t.prototype.next = function(t) { n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t) };
    t.prototype.prev = function(t) { n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t) };
    t.prototype.to = function(t, i, r) { var u;!r && this._pages.length ? (u = this._pages.length, n.proxy(this._overrides.to, this._core)(this._pages[(t % u + u) % u].start, i)) : n.proxy(this._overrides.to, this._core)(t, i) };
    n.fn.owlCarousel.Constructor.Plugins.Navigation = t
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    "use strict";
    var u = function(i) {
        this._core = i;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(i) { i.namespace && "URLHash" === this._core.settings.startPosition && n(t).trigger("hashchange.owl.navigation") }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                if (t.namespace) {
                    var i = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = t.content
                }
            }, this),
            "changed.owl.carousel": n.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var u = this._core.items(this._core.relative(this._core.current())),
                        r = n.map(this._hashes, function(n, t) { return n === u ? t : null }).join();
                    if (!r || t.location.hash.slice(1) === r) return;
                    t.location.hash = r
                }
            }, this)
        };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this.$element.on(this._handlers);
        n(t).on("hashchange.owl.navigation", n.proxy(function() {
            var i = t.location.hash.substring(1),
                u = this._core.$stage.children(),
                n = this._hashes[i] && u.index(this._hashes[i]);
            n !== r && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }, this))
    };
    u.Defaults = { URLhashListener: !1 };
    u.prototype.destroy = function() {
        var i, r;
        n(t).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (r in Object.getOwnPropertyNames(this)) "function" != typeof this[r] && (this[r] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Hash = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    function u(t, i) {
        var u = !1,
            f = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + h.join(f + " ") + f).split(" "), function(n, t) { if (s[t] !== r) return u = !i || t, !1 }), u
    }

    function e(n) { return u(n, !0) }
    var s = n("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        o = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        f = { csstransforms: function() { return !!u("transform") }, csstransforms3d: function() { return !!u("perspective") }, csstransitions: function() { return !!u("transition") }, cssanimations: function() { return !!u("animation") } };
    f.csstransitions() && (n.support.transition = new String(e("transition")), n.support.transition.end = o.transition.end[n.support.transition]);
    f.cssanimations() && (n.support.animation = new String(e("animation")), n.support.animation.end = o.animation.end[n.support.animation]);
    f.csstransforms() && (n.support.transform = new String(e("transform")), n.support.transform3d = f.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
! function(n, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof module && module.exports ? module.exports = t() : n.numeral = t() }(this, function() {
    function e(n, t) {
        this._input = n;
        this._value = t
    }
    var n, i, r = {},
        f = {},
        u = { currentLocale: "en", zeroFormat: null, nullFormat: null, defaultFormat: "0,0", scalePercentBy100: !0 },
        t = { currentLocale: u.currentLocale, zeroFormat: u.zeroFormat, nullFormat: u.nullFormat, defaultFormat: u.defaultFormat, scalePercentBy100: u.scalePercentBy100 };
    return n = function(u) {
            var f, o, s, h;
            if (n.isNumeral(u)) f = u.value();
            else if (0 === u || "undefined" == typeof u) f = 0;
            else if (null === u || i.isNaN(u)) f = null;
            else if ("string" == typeof u)
                if (t.zeroFormat && u === t.zeroFormat) f = 0;
                else if (t.nullFormat && u === t.nullFormat || !u.replace(/[^0-9]+/g, "").length) f = null;
            else {
                for (o in r)
                    if (h = "function" == typeof r[o].regexps.unformat ? r[o].regexps.unformat() : r[o].regexps.unformat, h && u.match(h)) { s = r[o].unformat; break }
                s = s || n._.stringToNumber;
                f = s(u)
            } else f = Number(u) || null;
            return new e(u, f)
        }, n.version = "2.0.6", n.isNumeral = function(n) { return n instanceof e }, n._ = i = {
            numberToFormat: function(t, i, r) {
                var o, a, u, h, p, nt, c, s = f[n.options.currentLocale],
                    y = !1,
                    tt = !1,
                    w = 0,
                    e = "",
                    b = 1e12,
                    k = 1e9,
                    d = 1e6,
                    it = 1e3,
                    l = "",
                    v = !1,
                    g;
                if (t = t || 0, a = Math.abs(t), n._.includes(i, "(") ? (y = !0, i = i.replace(/[\(|\)]/g, "")) : (n._.includes(i, "+") || n._.includes(i, "-")) && (p = n._.includes(i, "+") ? i.indexOf("+") : 0 > t ? i.indexOf("-") : -1, i = i.replace(/[\+|\-]/g, "")), n._.includes(i, "a") && (o = i.match(/a(k|m|b|t)?/), o = o ? o[1] : !1, n._.includes(i, " a") && (e = " "), i = i.replace(new RegExp(e + "a[kmbt]?"), ""), a >= b && !o || "t" === o ? (e += s.abbreviations.trillion, t /= b) : b > a && a >= k && !o || "b" === o ? (e += s.abbreviations.billion, t /= k) : k > a && a >= d && !o || "m" === o ? (e += s.abbreviations.million, t /= d) : (d > a && a >= it && !o || "k" === o) && (e += s.abbreviations.thousand, t /= it)), n._.includes(i, "[.]") && (tt = !0, i = i.replace("[.]", ".")), u = t.toString().split(".")[0], h = i.split(".")[1], nt = i.indexOf(","), w = (i.split(".")[0].split(",")[0].match(/0/g) || []).length, h ? (n._.includes(h, "[") ? (h = h.replace("]", ""), h = h.split("["), l = n._.toFixed(t, h[0].length + h[1].length, r, h[1].length)) : l = n._.toFixed(t, h.length, r), u = l.split(".")[0], l = n._.includes(l, ".") ? s.delimiters.decimal + l.split(".")[1] : "", tt && 0 === Number(l.slice(1)) && (l = "")) : u = n._.toFixed(t, 0, r), e && !o && Number(u) >= 1e3 && e !== s.abbreviations.trillion) switch (u = String(Number(u) / 1e3), e) {
                    case s.abbreviations.thousand:
                        e = s.abbreviations.million;
                        break;
                    case s.abbreviations.million:
                        e = s.abbreviations.billion;
                        break;
                    case s.abbreviations.billion:
                        e = s.abbreviations.trillion
                }
                if (n._.includes(u, "-") && (u = u.slice(1), v = !0), u.length < w)
                    for (g = w - u.length; g > 0; g--) u = "0" + u;
                return nt > -1 && (u = u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + s.delimiters.thousands)), 0 === i.indexOf(".") && (u = ""), c = u + l + (e ? e : ""), y ? c = (y && v ? "(" : "") + c + (y && v ? ")" : "") : p >= 0 ? c = 0 === p ? (v ? "-" : "+") + c : c + (v ? "-" : "+") : v && (c = "-" + c), c
            },
            stringToNumber: function(n) {
                var u, i, e, r = f[t.currentLocale],
                    s = n,
                    o = { thousand: 3, million: 6, billion: 9, trillion: 12 };
                if (t.zeroFormat && n === t.zeroFormat) i = 0;
                else if (t.nullFormat && n === t.nullFormat || !n.replace(/[^0-9]+/g, "").length) i = null;
                else {
                    i = 1;
                    "." !== r.delimiters.decimal && (n = n.replace(/\./g, "").replace(r.delimiters.decimal, "."));
                    for (u in o)
                        if (e = new RegExp("[^a-zA-Z]" + r.abbreviations[u] + "(?:\\)|(\\" + r.currency.symbol + ")?(?:\\))?)?$"), s.match(e)) { i *= Math.pow(10, o[u]); break }
                    i *= (n.split("-").length + Math.min(n.split("(").length - 1, n.split(")").length - 1)) % 2 ? 1 : -1;
                    n = n.replace(/[^0-9\.]+/g, "");
                    i *= Number(n)
                }
                return i
            },
            isNaN: function(n) { return "number" == typeof n && isNaN(n) },
            includes: function(n, t) { return -1 !== n.indexOf(t) },
            insert: function(n, t, i) { return n.slice(0, i) + t + n.slice(i) },
            reduce: function(n, t) {
                if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
                if ("function" != typeof t) throw new TypeError(t + " is not a function");
                var u, r = Object(n),
                    f = r.length >>> 0,
                    i = 0;
                if (3 === arguments.length) u = arguments[2];
                else {
                    for (; f > i && !(i in r);) i++;
                    if (i >= f) throw new TypeError("Reduce of empty array with no initial value");
                    u = r[i++]
                }
                for (; f > i; i++) i in r && (u = t(u, r[i], i, r));
                return u
            },
            multiplier: function(n) { var t = n.toString().split("."); return t.length < 2 ? 1 : Math.pow(10, t[1].length) },
            correctionFactor: function() { var n = Array.prototype.slice.call(arguments); return n.reduce(function(n, t) { var r = i.multiplier(t); return n > r ? n : r }, 1) },
            toFixed: function(n, t, i, r) {
                var u, e, o, f, s = n.toString().split("."),
                    h = t - (r || 0);
                return u = 2 === s.length ? Math.min(Math.max(s[1].length, h), t) : h, o = Math.pow(10, u), f = (i(n + "e+" + u) / o).toFixed(u), r > t - u && (e = new RegExp("\\.?0{1," + (r - (t - u)) + "}$"), f = f.replace(e, "")), f
            }
        }, n.options = t, n.formats = r, n.locales = f, n.locale = function(n) { return n && (t.currentLocale = n.toLowerCase()), t.currentLocale }, n.localeData = function(n) { if (!n) return f[t.currentLocale]; if (n = n.toLowerCase(), !f[n]) throw new Error("Unknown locale : " + n); return f[n] }, n.reset = function() { for (var n in u) t[n] = u[n] }, n.zeroFormat = function(n) { t.zeroFormat = "string" == typeof n ? n : null }, n.nullFormat = function(n) { t.nullFormat = "string" == typeof n ? n : null }, n.defaultFormat = function(n) { t.defaultFormat = "string" == typeof n ? n : "0.0" }, n.register = function(n, t, i) { if (t = t.toLowerCase(), this[n + "s"][t]) throw new TypeError(t + " " + n + " already registered."); return this[n + "s"][t] = i, i }, n.validate = function(t, i) { var s, h, c, r, e, o, f, u; if ("string" != typeof t && (t += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", t)), t = t.trim(), t.match(/^\d+$/)) return !0; if ("" === t) return !1; try { f = n.localeData(i) } catch (l) { f = n.localeData(n.locale()) } return c = f.currency.symbol, e = f.abbreviations, s = f.delimiters.decimal, h = "." === f.delimiters.thousands ? "\\." : f.delimiters.thousands, u = t.match(/^[^\d]+/), null !== u && (t = t.substr(1), u[0] !== c) ? !1 : (u = t.match(/[^\d]+$/), null !== u && (t = t.slice(0, -1), u[0] !== e.thousand && u[0] !== e.million && u[0] !== e.billion && u[0] !== e.trillion) ? !1 : (o = new RegExp(h + "{2}"), t.match(/[^\d.,]/g) ? !1 : (r = t.split(s), r.length > 2 ? !1 : r.length < 2 ? !!r[0].match(/^\d+.*\d$/) && !r[0].match(o) : 1 === r[0].length ? !!r[0].match(/^\d+$/) && !r[0].match(o) && !!r[1].match(/^\d+$/) : !!r[0].match(/^\d+.*\d$/) && !r[0].match(o) && !!r[1].match(/^\d+$/)))) }, n.fn = e.prototype = {
            clone: function() { return n(this) },
            format: function(i, u) {
                var o, f, e, s = this._value,
                    h = i || t.defaultFormat;
                if (u = u || Math.round, 0 === s && null !== t.zeroFormat) f = t.zeroFormat;
                else if (null === s && null !== t.nullFormat) f = t.nullFormat;
                else {
                    for (o in r)
                        if (h.match(r[o].regexps.format)) { e = r[o].format; break }
                    e = e || n._.numberToFormat;
                    f = e(s, h, u)
                }
                return f
            },
            value: function() { return this._value },
            input: function() { return this._input },
            set: function(n) { return this._value = Number(n), this },
            add: function(n) {
                function r(n, i) { return n + Math.round(t * i) }
                var t = i.correctionFactor.call(null, this._value, n);
                return this._value = i.reduce([this._value, n], r, 0) / t, this
            },
            subtract: function(n) {
                function r(n, i) { return n - Math.round(t * i) }
                var t = i.correctionFactor.call(null, this._value, n);
                return this._value = i.reduce([n], r, Math.round(this._value * t)) / t, this
            },
            multiply: function(n) {
                function t(n, t) { var r = i.correctionFactor(n, t); return Math.round(n * r) * Math.round(t * r) / Math.round(r * r) }
                return this._value = i.reduce([this._value, n], t, 1), this
            },
            divide: function(n) {
                function t(n, t) { var r = i.correctionFactor(n, t); return Math.round(n * r) / Math.round(t * r) }
                return this._value = i.reduce([this._value, n], t), this
            },
            difference: function(t) { return Math.abs(n(this._value).subtract(t).value()) }
        }, n.register("locale", "en", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function(n) { var t = n % 10; return 1 == ~~(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th" }, currency: { symbol: "$" } }),
        function() { n.register("format", "bps", { regexps: { format: /(BPS)/, unformat: /(BPS)/ }, format: function(t, i, r) { var u, f = n._.includes(i, " BPS") ? " " : ""; return t = 1e4 * t, i = i.replace(/\s?BPS/, ""), u = n._.numberToFormat(t, i, r), n._.includes(u, ")") ? (u = u.split(""), u.splice(-1, 0, f + "BPS"), u = u.join("")) : u = u + f + "BPS", u }, unformat: function(t) { return +(.0001 * n._.stringToNumber(t)).toFixed(15) } }) }(),
        function() {
            var t = { base: 1e3, suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] },
                i = { base: 1024, suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"] },
                u = t.suffixes.concat(i.suffixes.filter(function(n) { return t.suffixes.indexOf(n) < 0 })),
                r = u.join("|");
            r = "(" + r.replace("B", "B(?!PS)") + ")";
            n.register("format", "bytes", {
                regexps: { format: /([0\s]i?b)/, unformat: new RegExp(r) },
                format: function(r, u, f) {
                    var h, e, o, c, s = n._.includes(u, "ib") ? i : t,
                        l = n._.includes(u, " b") || n._.includes(u, " ib") ? " " : "";
                    for (u = u.replace(/\s?i?b/, ""), e = 0; e <= s.suffixes.length; e++)
                        if (o = Math.pow(s.base, e), c = Math.pow(s.base, e + 1), null === r || 0 === r || r >= o && c > r) {
                            l += s.suffixes[e];
                            o > 0 && (r /= o);
                            break
                        }
                    return h = n._.numberToFormat(r, u, f), h + l
                },
                unformat: function(r) {
                    var u, f, e = n._.stringToNumber(r);
                    if (e) {
                        for (u = t.suffixes.length - 1; u >= 0; u--) { if (n._.includes(r, t.suffixes[u])) { f = Math.pow(t.base, u); break } if (n._.includes(r, i.suffixes[u])) { f = Math.pow(i.base, u); break } }
                        e *= f || 1
                    }
                    return e
                }
            })
        }(),
        function() {
            n.register("format", "currency", {
                regexps: { format: /(\$)/ },
                format: function(t, i, r) {
                    var e, s, f, o = n.locales[n.options.currentLocale],
                        u = { before: i.match(/^([\+|\-|\(|\s|\$]*)/)[0], after: i.match(/([\+|\-|\)|\s|\$]*)$/)[0] };
                    for (i = i.replace(/\s?\$\s?/, ""), e = n._.numberToFormat(t, i, r), t >= 0 ? (u.before = u.before.replace(/[\-\(]/, ""), u.after = u.after.replace(/[\-\)]/, "")) : 0 > t && !n._.includes(u.before, "-") && !n._.includes(u.before, "(") && (u.before = "-" + u.before), f = 0; f < u.before.length; f++) switch (s = u.before[f]) {
                        case "$":
                            e = n._.insert(e, o.currency.symbol, f);
                            break;
                        case " ":
                            e = n._.insert(e, " ", f + o.currency.symbol.length - 1)
                    }
                    for (f = u.after.length - 1; f >= 0; f--) switch (s = u.after[f]) {
                        case "$":
                            e = f === u.after.length - 1 ? e + o.currency.symbol : n._.insert(e, o.currency.symbol, -(u.after.length - (1 + f)));
                            break;
                        case " ":
                            e = f === u.after.length - 1 ? e + " " : n._.insert(e, " ", -(u.after.length - (1 + f) + o.currency.symbol.length - 1))
                    }
                    return e
                }
            })
        }(),
        function() {
            n.register("format", "exponential", {
                regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ },
                format: function(t, i, r) {
                    var u, e = "number" != typeof t || n._.isNaN(t) ? "0e+0" : t.toExponential(),
                        f = e.split("e");
                    return i = i.replace(/e[\+|\-]{1}0/, ""), u = n._.numberToFormat(Number(f[0]), i, r), u + "e" + f[1]
                },
                unformat: function(t) {
                    function u(t, i) { var r = n._.correctionFactor(t, i); return t * r * i * r / (r * r) }
                    var r = n._.includes(t, "e+") ? t.split("e+") : t.split("e-"),
                        f = Number(r[0]),
                        i = Number(r[1]);
                    return i = n._.includes(t, "e-") ? i *= -1 : i, n._.reduce([f, Math.pow(10, i)], u, 1)
                }
            })
        }(),
        function() {
            n.register("format", "ordinal", {
                regexps: { format: /(o)/ },
                format: function(t, i, r) {
                    var u, e = n.locales[n.options.currentLocale],
                        f = n._.includes(i, " o") ? " " : "";
                    return i = i.replace(/\s?o/, ""), f += e.ordinal(t), u = n._.numberToFormat(t, i, r), u + f
                }
            })
        }(),
        function() { n.register("format", "percentage", { regexps: { format: /(%)/, unformat: /(%)/ }, format: function(t, i, r) { var u, f = n._.includes(i, " %") ? " " : ""; return n.options.scalePercentBy100 && (t = 100 * t), i = i.replace(/\s?\%/, ""), u = n._.numberToFormat(t, i, r), n._.includes(u, ")") ? (u = u.split(""), u.splice(-1, 0, f + "%"), u = u.join("")) : u = u + f + "%", u }, unformat: function(t) { var i = n._.stringToNumber(t); return n.options.scalePercentBy100 ? .01 * i : i } }) }(),
        function() {
            n.register("format", "time", {
                regexps: { format: /(:)/, unformat: /(:)/ },
                format: function(n) {
                    var i = Math.floor(n / 3600),
                        t = Math.floor((n - 3600 * i) / 60),
                        r = Math.round(n - 3600 * i - 60 * t);
                    return i + ":" + (10 > t ? "0" + t : t) + ":" + (10 > r ? "0" + r : r)
                },
                unformat: function(n) {
                    var t = n.split(":"),
                        i = 0;
                    return 3 === t.length ? (i += 3600 * Number(t[0]), i += 60 * Number(t[1]), i += Number(t[2])) : 2 === t.length && (i += 60 * Number(t[0]), i += Number(t[1])), Number(i)
                }
            })
        }(), n
});
$(document).ready(function() {}),
    function(n) { typeof define == "function" && define.amd ? define([], n) : typeof exports == "object" ? module.exports = n() : window.noUiSlider = n() }(function() {
        "use strict";

        function p(n) { return n.filter(function(n) { return this[n] ? !1 : this[n] = !0 }, {}) }

        function w(n, t) { return Math.round(n / t) * t }

        function o(n) {
            var i = n.getBoundingClientRect(),
                u = n.ownerDocument,
                r = u.documentElement,
                t = a();
            return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (t.x = 0), { top: i.top + t.y - r.clientTop, left: i.left + t.x - r.clientLeft }
        }

        function r(n) { return typeof n == "number" && !isNaN(n) && isFinite(n) }

        function b(n) { var t = Math.pow(10, 7); return Number((Math.round(n * t) / t).toFixed(7)) }

        function l(t, i, r) {
            n(t, i);
            setTimeout(function() { f(t, i) }, r)
        }

        function s(n) { return Math.max(Math.min(n, 100), 0) }

        function u(n) { return Array.isArray(n) ? n : [n] }

        function k(n) { var t = n.split("."); return t.length > 1 ? t[1].length : 0 }

        function n(n, t) { n.classList ? n.classList.add(t) : n.className += " " + t }

        function f(n, t) { n.classList ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ") }

        function d(n, t) { return n.classList ? n.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(n.className) }

        function a() {
            var n = window.pageXOffset !== undefined,
                t = (document.compatMode || "") === "CSS1Compat",
                i = n ? window.pageXOffset : t ? document.documentElement.scrollLeft : document.body.scrollLeft,
                r = n ? window.pageYOffset : t ? document.documentElement.scrollTop : document.body.scrollTop;
            return { x: i, y: r }
        }

        function g(n) { n.stopPropagation() }

        function nt(n) { return function(t) { return n + t } }

        function h(n, t) { return 100 / (t - n) }

        function c(n, t) { return t * 100 / (n[1] - n[0]) }

        function it(n, t) { return c(n, n[0] < 0 ? t + Math.abs(n[0]) : t - n[0]) }

        function rt(n, t) { return t * (n[1] - n[0]) / 100 + n[0] }

        function e(n, t) { for (var i = 1; n >= t[i];) i += 1; return i }

        function ut(n, t, i) {
            if (i >= n.slice(-1)[0]) return 100;
            var r = e(i, n),
                f, o, u, s;
            return f = n[r - 1], o = n[r], u = t[r - 1], s = t[r], u + it([f, o], i) / h(u, s)
        }

        function ft(n, t, i) {
            if (i >= 100) return n.slice(-1)[0];
            var r = e(i, t),
                f, o, u, s;
            return f = n[r - 1], o = n[r], u = t[r - 1], s = t[r], rt([f, o], (i - u) * h(u, s))
        }

        function et(n, t, i, r) {
            if (r === 100) return r;
            var u = e(r, n),
                f, o;
            return i ? (f = n[u - 1], o = n[u], r - f > (o - f) / 2) ? o : f : t[u - 1] ? n[u - 1] + w(r - n[u - 1], t[u - 1]) : r
        }

        function ot(n, t, i) {
            var u;
            if (typeof t == "number" && (t = [t]), Object.prototype.toString.call(t) !== "[object Array]") throw new Error("noUiSlider: 'range' contains invalid value.");
            if (u = n === "min" ? 0 : n === "max" ? 100 : parseFloat(n), !r(u) || !r(t[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
            i.xPct.push(u);
            i.xVal.push(t[0]);
            u ? i.xSteps.push(isNaN(t[1]) ? !1 : t[1]) : isNaN(t[1]) || (i.xSteps[0] = t[1])
        }

        function st(n, t, i) {
            if (!t) return !0;
            i.xSteps[n] = c([i.xVal[n], i.xVal[n + 1]], t) / h(i.xPct[n], i.xPct[n + 1])
        }

        function i(n, t, i, r) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [r || !1];
            this.xNumSteps = [!1];
            this.snap = t;
            this.direction = i;
            var u, f = [];
            for (u in n) n.hasOwnProperty(u) && f.push([n[u], u]);
            for (f.length && typeof f[0][0] == "object" ? f.sort(function(n, t) { return n[0][0] - t[0][0] }) : f.sort(function(n, t) { return n[0] - t[0] }), u = 0; u < f.length; u++) ot(f[u][1], f[u][0], this);
            for (this.xNumSteps = this.xSteps.slice(0), u = 0; u < this.xNumSteps.length; u++) st(u, this.xNumSteps[u], this)
        }

        function ht(n, t) {
            if (!r(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            n.singleStep = t
        }

        function ct(n, t) {
            if (typeof t != "object" || Array.isArray(t)) throw new Error("noUiSlider: 'range' is not an object.");
            if (t.min === undefined || t.max === undefined) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            if (t.min === t.max) throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
            n.spectrum = new i(t, n.snap, n.dir, n.singleStep)
        }

        function lt(n, t) {
            if (t = u(t), !Array.isArray(t) || !t.length || t.length > 2) throw new Error("noUiSlider: 'start' option is incorrect.");
            n.handles = t.length;
            n.start = t
        }

        function at(n, t) { if (n.snap = t, typeof t != "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean."); }

        function vt(n, t) { if (n.animate = t, typeof t != "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean."); }

        function yt(n, t) {
            if (t === "lower" && n.handles === 1) n.connect = 1;
            else if (t === "upper" && n.handles === 1) n.connect = 2;
            else if (t === !0 && n.handles === 2) n.connect = 3;
            else if (t === !1) n.connect = 0;
            else throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }

        function pt(n, t) {
            switch (t) {
                case "horizontal":
                    n.ort = 0;
                    break;
                case "vertical":
                    n.ort = 1;
                    break;
                default:
                    throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
        }

        function wt(n, t) { if (!r(t)) throw new Error("noUiSlider: 'margin' option must be numeric."); if (t !== 0 && (n.margin = n.spectrum.getMargin(t), !n.margin)) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders."); }

        function bt(n, t) { if (!r(t)) throw new Error("noUiSlider: 'limit' option must be numeric."); if (n.limit = n.spectrum.getMargin(t), !n.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders."); }

        function kt(n, t) {
            switch (t) {
                case "ltr":
                    n.dir = 0;
                    break;
                case "rtl":
                    n.dir = 1;
                    n.connect = [0, 2, 1, 3][n.connect];
                    break;
                default:
                    throw new Error("noUiSlider: 'direction' option was not recognized.");
            }
        }

        function dt(n, t) {
            if (typeof t != "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
            var u = t.indexOf("tap") >= 0,
                i = t.indexOf("drag") >= 0,
                f = t.indexOf("fixed") >= 0,
                r = t.indexOf("snap") >= 0,
                e = t.indexOf("hover") >= 0;
            if (i && !n.connect) throw new Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");
            n.events = { tap: u || r, drag: i, fixed: f, snap: r, hover: e }
        }

        function gt(n, t) {
            var i;
            if (t !== !1)
                if (t === !0)
                    for (n.tooltips = [], i = 0; i < n.handles; i++) n.tooltips.push(!0);
                else {
                    if (n.tooltips = u(t), n.tooltips.length !== n.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                    n.tooltips.forEach(function(n) { if (typeof n != "boolean" && (typeof n != "object" || typeof n.to != "function")) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'."); })
                }
        }

        function ni(n, t) { if (n.format = t, typeof t.to == "function" && typeof t.from == "function") return !0; throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods."); }

        function ti(n, t) {
            if (t !== undefined && typeof t != "string") throw new Error("noUiSlider: 'cssPrefix' must be a string.");
            n.cssPrefix = t
        }

        function y(n) {
            var t = { margin: 0, limit: 0, animate: !0, format: v },
                i, r;
            return i = { step: { r: !1, t: ht }, start: { r: !0, t: lt }, connect: { r: !0, t: yt }, direction: { r: !0, t: kt }, snap: { r: !1, t: at }, animate: { r: !1, t: vt }, range: { r: !0, t: ct }, orientation: { r: !1, t: pt }, margin: { r: !1, t: wt }, limit: { r: !1, t: bt }, behaviour: { r: !0, t: dt }, format: { r: !1, t: ni }, tooltips: { r: !1, t: gt }, cssPrefix: { r: !1, t: ti } }, r = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal" }, Object.keys(i).forEach(function(u) {
                if (n[u] === undefined && r[u] === undefined) { if (i[u].r) throw new Error("noUiSlider: '" + u + "' is required."); return !0 }
                i[u].t(t, n[u] === undefined ? r[u] : n[u])
            }), t.pips = n.pips, t.style = t.ort ? "top" : "left", t
        }

        function ii(i, r) {
            function wt(n, t, i) {
                var r = n + t[0],
                    u = n + t[1];
                return i ? (r < 0 && (u += Math.abs(r)), u > 100 && (r -= u - 100), [s(r), s(u)]) : [r, u]
            }

            function bt(n, t) {
                n.cancelable && n.preventDefault();
                var o = n.type.indexOf("touch") === 0,
                    e = n.type.indexOf("mouse") === 0,
                    r = n.type.indexOf("pointer") === 0,
                    u, f, i = n;
                return n.type.indexOf("MSPointer") === 0 && (r = !0), o && (u = n.changedTouches[0].pageX, f = n.changedTouches[0].pageY), t = t || a(), (e || r) && (u = n.clientX + t.x, f = n.clientY + t.y), i.pageOffset = t, i.points = [u, f], i.cursor = e || r, i
            }

            function kt(t, i) {
                var r = document.createElement("div"),
                    u = document.createElement("div"),
                    f = ["-lower", "-upper"];
                return t && f.reverse(), n(u, h[3]), n(u, h[3] + f[i]), n(r, h[2]), r.appendChild(u), r
            }

            function dt(t, i, r) {
                switch (t) {
                    case 1:
                        n(i, h[7]);
                        n(r[0], h[6]);
                        break;
                    case 3:
                        n(r[1], h[6]);
                    case 2:
                        n(r[0], h[7]);
                    case 0:
                        n(i, h[6])
                }
            }

            function gt(n, t, i) { for (var u = [], r = 0; r < n; r += 1) u.push(i.appendChild(kt(t, r))); return u }

            function ni(t, i, r) {
                n(r, h[0]);
                n(r, h[8 + t]);
                n(r, h[4 + i]);
                var u = document.createElement("div");
                return n(u, h[1]), r.appendChild(u), u
            }

            function ti(n, t) { if (!r.tooltips[t]) return !1; var i = document.createElement("div"); return i.className = h[18], n.firstChild.appendChild(i) }

            function ii() {
                r.dir && r.tooltips.reverse();
                var n = e.map(ti);
                r.dir && (n.reverse(), r.tooltips.reverse());
                pt("update", function(t, i, u) { n[i] && (n[i].innerHTML = r.tooltips[i] === !0 ? t[i] : r.tooltips[i].to(u[i])) })
            }

            function ri(n, t, i) {
                if (n === "range" || n === "steps") return c.xVal;
                if (n === "count") {
                    var u = 100 / (t - 1),
                        r, f = 0;
                    for (t = [];
                        (r = f++ * u) <= 100;) t.push(r);
                    n = "positions"
                }
                return n === "positions" ? t.map(function(n) { return c.fromStepping(i ? c.getStep(n) : n) }) : n === "values" ? i ? t.map(function(n) { return c.fromStepping(c.getStep(c.toStepping(n))) }) : t : void 0
            }

            function ui(n, t, i) {
                function h(n, t) { return (n + t).toFixed(7) / 1 }
                var l = c.direction,
                    r = {},
                    f = c.xVal[0],
                    e = c.xVal[c.xVal.length - 1],
                    o = !1,
                    s = !1,
                    u = 0;
                return c.direction = 0, i = p(i.slice().sort(function(n, t) { return n - t })), i[0] !== f && (i.unshift(f), o = !0), i[i.length - 1] !== e && (i.push(e), s = !0), i.forEach(function(f, e) {
                    var a, l, v, w = f,
                        y = i[e + 1],
                        p, b, g, k, nt, d, tt;
                    if (t === "steps" && (a = c.xNumSteps[e]), a || (a = y - w), w !== !1 && y !== undefined)
                        for (l = w; l <= y; l = h(l, a)) {
                            for (p = c.toStepping(l), b = p - u, nt = b / n, d = Math.round(nt), tt = b / d, v = 1; v <= d; v += 1) g = u + v * tt, r[g.toFixed(5)] = ["x", 0];
                            k = i.indexOf(l) > -1 ? 1 : t === "steps" ? 2 : 0;
                            !e && o && (k = 0);
                            l === y && s || (r[p.toFixed(5)] = [l, k]);
                            u = p
                        }
                }), c.direction = l, r
            }

            function fi(t, i, u) {
                function l(n) { return ["-normal", "-large", "-sub"][n] }

                function s(n, t, i) { return 'class="' + t + " " + t + "-" + o + " " + t + l(i[1]) + '" style="' + r.style + ": " + n + '%"' }

                function a(n, t) {
                    c.direction && (n = 100 - n);
                    t[1] = t[1] && i ? i(t[0], t[1]) : t[1];
                    e += "<div " + s(n, h[21], t) + "><\/div>";
                    t[1] && (e += "<div " + s(n, h[22], t) + ">" + u.to(t[0]) + "<\/div>")
                }
                var o = ["horizontal", "vertical"][r.ort],
                    f = document.createElement("div"),
                    e = "";
                return n(f, h[20]), n(f, h[20] + "-" + o), Object.keys(t).forEach(function(n) { a(n, t[n]) }), f.innerHTML = e, f
            }

            function vt(n) {
                var t = n.mode,
                    i = n.density || 1,
                    r = n.filter || !1,
                    u = n.values || !1,
                    f = n.stepped || !1,
                    e = ri(t, u, f),
                    o = ui(i, t, e),
                    s = n.format || { to: Math.round };
                return v.appendChild(fi(o, r, s))
            }

            function st() {
                var n = it.getBoundingClientRect(),
                    t = "offset" + ["Width", "Height"][r.ort];
                return r.ort === 0 ? n.width || it[t] : n.height || it[t]
            }

            function w(n, t, i) {
                t !== undefined && r.handles !== 1 && (t = Math.abs(t - r.dir));
                Object.keys(rt).forEach(function(r) {
                    var f = r.split(".")[0];
                    n === f && rt[r].forEach(function(n) { n.call(et, u(at()), t, u(ht(Array.prototype.slice.call(ft))), i || !1, b) })
                })
            }

            function ht(n) { return n.length === 1 ? n[0] : r.dir ? n.reverse() : n }

            function ut(n, i, u, f) {
                var e = function(i) {
                        if (v.hasAttribute("disabled") || d(v, h[14]) || (i = bt(i, f.pageOffset), n === t.start && i.buttons !== undefined && i.buttons > 1) || f.hover && i.buttons) return !1;
                        i.calcPoint = i.points[r.ort];
                        u(i, f)
                    },
                    o = [];
                return n.split(" ").forEach(function(n) {
                    i.addEventListener(n, e, !1);
                    o.push([n, e])
                }), o
            }

            function ei(n, t) {
                if (navigator.appVersion.indexOf("MSIE 9") === -1 && n.buttons === 0 && t.buttonsProperty !== 0) return ct(n, t);
                var i = t.handles || e,
                    f, r = !1,
                    s = (n.calcPoint - t.start) * 100 / t.baseSize,
                    o = i[0] === e[0] ? 0 : 1,
                    u;
                if (f = wt(s, t.positions, i.length > 1), r = ot(i[0], f[o], i.length === 1), i.length > 1) {
                    if (r = ot(i[1], f[o ? 0 : 1], !1) || r, r)
                        for (u = 0; u < t.handles.length; u++) w("slide", u)
                } else r && w("slide", o)
            }

            function ct(n, t) {
                var r = it.querySelector("." + h[15]),
                    u = t.handles[0] === e[0] ? 0 : 1,
                    i;
                r !== null && f(r, h[15]);
                n.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener));
                i = document.documentElement;
                i.noUiListeners.forEach(function(n) { i.removeEventListener(n[0], n[1]) });
                f(v, h[12]);
                w("set", u);
                w("change", u);
                t.handleNumber !== undefined && w("end", t.handleNumber)
            }

            function oi(n, t) { n.type === "mouseout" && n.target.nodeName === "HTML" && n.relatedTarget === null && ct(n, t) }

            function lt(i, r) {
                var u = document.documentElement,
                    f;
                if (r.handles.length === 1 && (n(r.handles[0].children[0], h[15]), r.handles[0].hasAttribute("disabled"))) return !1;
                i.cancelable && i.preventDefault();
                i.stopPropagation();
                var o = ut(t.move, u, ei, { start: i.calcPoint, baseSize: st(), pageOffset: i.pageOffset, handles: r.handles, handleNumber: r.handleNumber, buttonsProperty: i.buttons, positions: [b[0], b[e.length - 1]] }),
                    s = ut(t.end, u, ct, { handles: r.handles, handleNumber: r.handleNumber }),
                    c = ut("mouseout", u, oi, { handles: r.handles, handleNumber: r.handleNumber });
                u.noUiListeners = o.concat(s, c);
                i.cursor && (document.body.style.cursor = getComputedStyle(i.target).cursor, e.length > 1 && n(v, h[12]), f = function() { return !1 }, document.body.noUiListener = f, document.body.addEventListener("selectstart", f, !1));
                r.handleNumber !== undefined && w("start", r.handleNumber)
            }

            function si(n) {
                var i = n.calcPoint,
                    u = 0,
                    t, f;
                if (n.stopPropagation(), e.forEach(function(n) { u += o(n)[r.style] }), t = i < u / 2 || e.length === 1 ? 0 : 1, e[t].hasAttribute("disabled") && (t = t ? 0 : 1), i -= o(it)[r.style], f = i * 100 / st(), r.events.snap || l(v, h[14], 300), e[t].hasAttribute("disabled")) return !1;
                ot(e[t], f);
                w("slide", t, !0);
                w("set", t, !0);
                w("change", t, !0);
                r.events.snap && lt(n, { handles: [e[t]] })
            }

            function hi(n) {
                var t = n.calcPoint - o(it)[r.style],
                    i = c.getStep(t * 100 / st()),
                    u = c.fromStepping(i);
                Object.keys(rt).forEach(function(n) { "hover" === n.split(".")[0] && rt[n].forEach(function(n) { n.call(et, u) }) })
            }

            function ci(i) {
                var r, u;
                if (!i.fixed)
                    for (r = 0; r < e.length; r += 1) ut(t.start, e[r].children[0], lt, { handles: [e[r]], handleNumber: r });
                if (i.tap && ut(t.start, it, si, { handles: e }), i.hover)
                    for (ut(t.move, it, hi, { hover: !0 }), r = 0; r < e.length; r += 1)["mousemove MSPointerMove pointermove"].forEach(function(n) { e[r].children[0].addEventListener(n, g, !1) });
                i.drag && (u = [it.querySelector("." + h[7])], n(u[0], h[10]), i.fixed && u.push(e[u[0] === e[0] ? 1 : 0].children[0]), u.forEach(function(n) { ut(t.start, n, lt, { handles: e }) }))
            }

            function ot(t, i, u) {
                var o = t !== e[0] ? 1 : 0,
                    l = b[0] + r.margin,
                    a = b[1] - r.margin,
                    v = b[0] + r.limit,
                    y = b[1] - r.limit;
                return (e.length > 1 && (i = o ? Math.max(i, l) : Math.min(i, a)), u !== !1 && r.limit && e.length > 1 && (i = o ? Math.min(i, v) : Math.max(i, y)), i = c.getStep(i), i = s(parseFloat(i.toFixed(7))), i === b[o]) ? !1 : (window.requestAnimationFrame ? window.requestAnimationFrame(function() { t.style[r.style] = i + "%" }) : t.style[r.style] = i + "%", t.previousSibling || (f(t, h[17]), i > 50 && n(t, h[17])), b[o] = i, ft[o] = c.fromStepping(i), w("update", o), !0)
            }

            function li(n, t) { var u, f, i; for (r.limit && (n += 1), u = 0; u < n; u += 1) f = u % 2, i = t[f], i !== null && i !== !1 && (typeof i == "number" && (i = String(i)), i = r.format.from(i), (i === !1 || isNaN(i) || ot(e[f], c.toStepping(i), u === 3 - r.dir) === !1) && w("update", f)) }

            function yt(n) {
                var f, i = u(n),
                    t;
                for (r.dir && r.handles > 1 && i.reverse(), r.animate && b[0] !== -1 && l(v, h[14], 300), f = e.length > 1 ? 3 : 1, i.length === 1 && (f = 1), li(f, i), t = 0; t < e.length; t++) i[t] !== null && w("set", t)
            }

            function at() { for (var t = [], n = 0; n < r.handles; n += 1) t[n] = r.format.to(ft[n]); return ht(t) }

            function ai() {
                for (h.forEach(function(n) { n && f(v, n) }); v.firstChild;) v.removeChild(v.firstChild);
                delete v.noUiSlider
            }

            function vi() {
                var n = b.map(function(n, t) {
                    var i = c.getApplicableStep(n),
                        r = k(String(i[2])),
                        u = ft[t],
                        f = n === 100 ? null : i[2],
                        e = Number((u - i[2]).toFixed(r)),
                        o = n === 0 ? null : e >= i[1] ? i[2] : i[0] || !1;
                    return [o, f]
                });
                return ht(n)
            }

            function pt(n, t) {
                rt[n] = rt[n] || [];
                rt[n].push(t);
                n.split(".")[0] === "update" && e.forEach(function(n, t) { w("update", t) })
            }

            function yi(n) {
                var t = n.split(".")[0],
                    i = n.substring(t.length);
                Object.keys(rt).forEach(function(n) {
                    var r = n.split(".")[0],
                        u = n.substring(r.length);
                    t && t !== r || i && i !== u || delete rt[n]
                })
            }

            function pi(n) {
                var u = at(),
                    t, i = y({ start: [0, 0], margin: n.margin, limit: n.limit, step: n.step, range: n.range, animate: n.animate, snap: n.snap === undefined ? r.snap : n.snap });
                for (["margin", "limit", "step", "range", "animate"].forEach(function(t) { n[t] !== undefined && (r[t] = n[t]) }), i.spectrum.direction = c.direction, c = i.spectrum, b = [-1, -1], yt(u), t = 0; t < e.length; t++) w("update", t)
            }
            var v = i,
                b = [-1, -1],
                it, e, c = r.spectrum,
                ft = [],
                rt = {},
                et, h = ["target", "base", "origin", "handle", "horizontal", "vertical", "background", "connect", "ltr", "rtl", "draggable", "", "state-drag", "", "state-tap", "active", "", "stacking", "tooltip", "", "pips", "marker", "value"].map(nt(r.cssPrefix || tt));
            if (v.noUiSlider) throw new Error("Slider was already initialized.");
            return it = ni(r.dir, r.ort, v), e = gt(r.handles, r.dir, it), dt(r.connect, v, e), r.pips && vt(r.pips), r.tooltips && ii(), et = { destroy: ai, steps: vi, on: pt, off: yi, get: at, set: yt, updateOptions: pi, options: r, target: v, pips: vt }, ci(r.events), et
        }

        function ri(n, t) {
            if (!n.nodeName) throw new Error("noUiSlider.create requires a single element.");
            var r = y(t, n),
                i = ii(n, r);
            return i.set(r.start), n.noUiSlider = i, i
        }
        var t = window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" },
            tt = "noUi-",
            v;
        return i.prototype.getMargin = function(n) { return this.xPct.length === 2 ? c(this.xVal, n) : !1 }, i.prototype.toStepping = function(n) { return n = ut(this.xVal, this.xPct, n), this.direction && (n = 100 - n), n }, i.prototype.fromStepping = function(n) { return this.direction && (n = 100 - n), b(ft(this.xVal, this.xPct, n)) }, i.prototype.getStep = function(n) { return this.direction && (n = 100 - n), n = et(this.xPct, this.xSteps, this.snap, n), this.direction && (n = 100 - n), n }, i.prototype.getApplicableStep = function(n) {
            var t = e(n, this.xPct),
                i = n === 100 ? 2 : 1;
            return [this.xNumSteps[t - 2], this.xVal[t - i], this.xNumSteps[t - i]]
        }, i.prototype.convert = function(n) { return this.getStep(this.toStepping(n)) }, v = { to: function(n) { return n !== undefined && n.toFixed(2) }, from: Number }, { create: ri }
    }),
    function() {
        "use strict";

        function t(n) { return n.split("").reverse().join("") }

        function i(n, t) { return n.substring(0, t.length) === t }

        function o(n, t) { return n.slice(-1 * t.length) === t }

        function r(n, t, i) { if ((n[t] || n[i]) && n[t] === n[i]) throw new Error(t); }

        function f(n) { return typeof n == "number" && isFinite(n) }

        function s(n, t) { var i = Math.pow(10, t); return (Math.round(n * i) / i).toFixed(t) }

        function h(n, i, r, u, e, o, h, c, l, a, v, y) {
            var g = y,
                b, k, w, d = "",
                p = "";
            return (o && (y = o(y)), !f(y)) ? !1 : (n !== !1 && parseFloat(y.toFixed(n)) === 0 && (y = 0), y < 0 && (b = !0, y = Math.abs(y)), n !== !1 && (y = s(y, n)), y = y.toString(), y.indexOf(".") !== -1 ? (k = y.split("."), w = k[0], r && (d = r + k[1])) : w = y, i && (w = t(w).match(/.{1,3}/g), w = t(w.join(t(i)))), b && c && (p += c), u && (p += u), b && l && (p += l), p += w, p += d, e && (p += e), a && (p = a(p, g)), p)
        }

        function c(n, t, r, u, e, s, h, c, l, a, v, y) {
            var b = y,
                w, p = "";
            return (v && (y = v(y)), !y || typeof y != "string") ? !1 : (c && i(y, c) && (y = y.replace(c, ""), w = !0), u && i(y, u) && (y = y.replace(u, "")), l && i(y, l) && (y = y.replace(l, ""), w = !0), e && o(y, e) && (y = y.slice(0, -1 * e.length)), t && (y = y.split(t).join("")), r && (y = y.replace(r, ".")), w && (p += "-"), p += y, p = p.replace(/[^0-9\.\-.]/g, ""), p === "") ? !1 : (p = Number(p), h && (p = h(p)), !f(p)) ? !1 : p
        }

        function l(t) {
            for (var i, f, u = {}, e = 0; e < n.length; e += 1)
                if (i = n[e], f = t[i], f === undefined) u[i] = i !== "negative" || u.negativeBefore ? i === "mark" && u.thousand !== "." ? "." : !1 : "-";
                else if (i === "decimals")
                if (f >= 0 && f < 8) u[i] = f;
                else throw new Error(i);
            else if (i === "encoder" || i === "decoder" || i === "edit" || i === "undo")
                if (typeof f == "function") u[i] = f;
                else throw new Error(i);
            else if (typeof f == "string") u[i] = f;
            else throw new Error(i);
            return r(u, "mark", "thousand"), r(u, "prefix", "negative"), r(u, "prefix", "negativeBefore"), u
        }

        function e(t, i, r) { for (var f = [], u = 0; u < n.length; u += 1) f.push(t[n[u]]); return f.push(r), i.apply("", f) }

        function u(n) {
            if (!(this instanceof u)) return new u(n);
            typeof n == "object" && (n = l(n), this.to = function(t) { return e(n, h, t) }, this.from = function(t) { return e(n, c, t) })
        }
        var n = ["decimals", "thousand", "mark", "prefix", "postfix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
        window.wNumb = u
    }();
/*!
 * Fotorama 4.6.2 | http://fotorama.io/license/
 */
fotoramaVersion = "4.6.2",
    function(n, t, i, r, u) {
        "use strict";

        function tf(n) {
            var t = "bez_" + r.makeArray(arguments).join("_").replace(".", "p"),
                i;
            return "function" != typeof r.easing[t] && (i = function(n, t) {
                var u = [null, null],
                    r = [null, null],
                    i = [null, null],
                    f = function(f, e) { return i[e] = 3 * n[e], r[e] = 3 * (t[e] - n[e]) - i[e], u[e] = 1 - i[e] - r[e], f * (i[e] + f * (r[e] + f * u[e])) },
                    e = function(n) { return i[0] + n * (2 * r[0] + 3 * u[0] * n) },
                    o = function(n) { for (var i, t = n, r = 0; ++r < 14 && (i = f(t, 0) - n, !(Math.abs(i) < .001));) t -= i / e(t); return t };
                return function(n) { return f(o(n), 1) }
            }, r.easing[t] = function(t, r, u, f, e) { return f * i([n[0], n[1]], [n[2], n[3]])(r / e) + u }), t
        }

        function c() {}

        function v(n, t, i) { return Math.max(isNaN(t) ? -1 / 0 : t, Math.min(isNaN(i) ? 1 / 0 : i, n)) }

        function rf(n) { return n.match(/ma/) && n.match(/-?\d+(?!d)/g)[n.match(/3d/) ? 12 : 4] }

        function uf(n) { return nt ? +rf(n.css("transform")) : +n.css("left").replace("px", "") }

        function ct(n) { var t = {}; return nt ? t.transform = "translate3d(" + n + "px,0,0)" : t.left = n, t }

        function ii(n) { return { "transition-duration": n + "ms" } }

        function gi(n, t) { return isNaN(n) ? t : n }

        function y(n, t) { return gi(+String(n).replace(t || "px", "")) }

        function ff(n) { return /%$/.test(n) ? y(n, "%") : u }

        function b(n, t) { return gi(ff(n) / 100 * t, y(n)) }

        function k(n) { return (!isNaN(y(n)) || !isNaN(y(n, "%"))) && n }

        function lt(n, t, i, r) { return (n - (r || 0)) * (t + (i || 0)) }

        function ef(n, t, i, r) { return -Math.round(n / (t + (i || 0)) - (r || 0)) }

        function of(n) {
            var t = n.data(),
                i, r;
            t.tEnd || (i = n[0], r = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", msTransition: "MSTransitionEnd", transition: "transitionend" }, l(i, r[lu.prefixed("transition")], function(n) { t.tProp && n.propertyName.match(t.tProp) && t.onEndFn() }), t.tEnd = !0)
        }

        function sf(n, t, i, r) {
            var f, u = n.data();
            u && (u.onEndFn = function() { f || (f = !0, clearTimeout(u.tT), i()) }, u.tProp = t, clearTimeout(u.tT), u.tT = setTimeout(function() { u.onEndFn() }, 1.5 * r), of(n))
        }

        function ri(n, t) { var i, r; if (n.length) return i = n.data(), nt ? (n.css(ii(0)), i.onEndFn = c, clearTimeout(i.tT)) : n.stop(), r = nr(t, function() { return uf(n) }), n.css(ct(r)), r }

        function nr() { for (var t, n = 0, i = arguments.length; i > n && (t = n ? arguments[n]() : arguments[n], "number" != typeof t); n++); return t }

        function tr(n, t) { return Math.round(n + (t - n) / 1.5) }

        function d() { return d.p = d.p || ("https:" === i.protocol ? "https://" : "http://"), d.p }

        function hf(n) { var i = t.createElement("a"); return i.href = n, i }

        function ir(n, t) { var i, r, u; return "string" != typeof n ? n : (n = hf(n), n.host.match(/youtube\.com/) && n.search ? (i = n.search.split("v=")[1]) && (u = i.indexOf("&"), -1 !== u && (i = i.substring(0, u)), r = "youtube") : n.host.match(/youtube\.com|youtu\.be/) ? (i = n.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), r = "youtube") : n.host.match(/vimeo\.com/) && (r = "vimeo", i = n.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, "")), i && r || !t || (i = n.href, r = "custom"), i ? { id: i, type: r, s: n.search.replace(/^\?/, ""), p: d() } : !1) }

        function cf(n, t, i) {
            var e, f, u = n.video;
            return "youtube" === u.type ? (f = d() + "img.youtube.com/vi/" + u.id + "/default.jpg", e = f.replace(/\/default.jpg$/, "/hqdefault.jpg"), n.thumbsReady = !0) : "vimeo" === u.type ? r.ajax({
                url: d() + "vimeo.com/api/v2/video/" + u.id + ".json",
                dataType: "jsonp",
                success: function(r) {
                    n.thumbsReady = !0;
                    rr(t, { img: r[0].thumbnail_large, thumb: r[0].thumbnail_small }, n.i, i)
                }
            }) : n.thumbsReady = !0, { img: e, thumb: f }
        }

        function rr(n, t, i, u) {
            for (var o, e, f = 0, s = n.length; s > f; f++)
                if (o = n[f], o.i === i && o.thumbsReady) {
                    e = { videoReady: !0 };
                    e[h] = e[ni] = e[gt] = !1;
                    u.splice(f, 1, r.extend({}, o, e, t));
                    break
                }
        }

        function lf(n) {
            function u(n, i, u) {
                var o = n.children("img").eq(0),
                    f = n.attr("href"),
                    s = n.attr("src"),
                    h = o.attr("src"),
                    c = i.video,
                    e = u ? ir(f, c === !0) : !1;
                e ? f = !1 : e = c;
                t(n, o, r.extend(i, { video: e, img: i.img || f || s || h, thumb: i.thumb || h || s || f }))
            }

            function t(n, t, i) {
                var u = i.thumb && i.img !== i.thumb,
                    f = y(i.width || n.attr("width")),
                    e = y(i.height || n.attr("height"));
                r.extend(i, { width: f, height: e, thumbratio: sr(i.thumbratio || y(i.thumbwidth || t && t.attr("width") || u || f) / y(i.thumbheight || t && t.attr("height") || u || e)) })
            }
            var i = [];
            return n.children().each(function() {
                var n = r(this),
                    f = ui(r.extend(n.data(), { id: n.attr("id") }));
                if (n.is("a, img")) u(n, f, !0);
                else {
                    if (n.is(":empty")) return;
                    t(n, null, r.extend(f, { html: this, _html: n.html() }))
                }
                i.push(f)
            }), i
        }

        function af(n) { return 0 === n.offsetWidth && 0 === n.offsetHeight }

        function vf(n) { return !r.contains(t.documentElement, n) }

        function o(n, t, i, r) { return o.i || (o.i = 1, o.ii = [!0]), r = r || o.i, "undefined" == typeof o.ii[r] && (o.ii[r] = !0), n() ? t() : o.ii[r] && setTimeout(function() { o.ii[r] && o(n, t, i, r) }, i || 100), o.i++ }

        function yf(n) { i.replace(i.protocol + "//" + i.host + i.pathname.replace(/^\/?/, "/") + i.search + "#" + n) }

        function ur(n, t, i, r) {
            var f = n.data(),
                u = f.measures;
            if (u && (!f.l || f.l.W !== u.width || f.l.H !== u.height || f.l.r !== u.ratio || f.l.w !== t.w || f.l.h !== t.h || f.l.m !== i || f.l.p !== r)) {
                var e = u.width,
                    o = u.height,
                    y = t.w / t.h,
                    s = u.ratio >= y,
                    h = "scaledown" === i,
                    c = "contain" === i,
                    l = "cover" === i,
                    a = kf(r);
                s && (h || c) || !s && l ? (e = v(t.w, 0, h ? e : 1 / 0), o = e / u.ratio) : (s && l || !s && (h || c)) && (o = v(t.h, 0, h ? o : 1 / 0), e = o * u.ratio);
                n.css({ width: Math.ceil(e), height: Math.ceil(o), left: Math.floor(b(a.x, t.w - e)), top: Math.floor(b(a.y, t.h - o)) });
                f.l = { W: u.width, H: u.height, r: u.ratio, w: t.w, h: t.h, m: i, p: r }
            }
            return !0
        }

        function pf(n, t) {
            var i = n[0];
            i.styleSheet ? i.styleSheet.cssText = t : n.html(t)
        }

        function at(n, t, i) { return t === i ? !1 : t >= n ? "left" : n >= i ? "right" : "left right" }

        function fr(n, t, i, r) {
            var f, u, e, o;
            if (!i) return !1;
            if (!isNaN(n)) return n - (r ? 0 : 1);
            for (u = 0, e = t.length; e > u; u++)
                if (o = t[u], o.id === n) { f = u; break }
            return f
        }

        function wf(n, t, i) {
            i = i || {};
            n.each(function() {
                var n, u = r(this),
                    f = u.data();
                f.clickOn || (f.clickOn = !0, r.extend(ar(u, {
                    onStart: function(t) {
                        n = t;
                        (i.onStart || c).call(this, t)
                    },
                    onMove: i.onMove || c,
                    onTouchEnd: i.onTouchEnd || c,
                    onEnd: function(i) { i.moved || t.call(this, n) }
                }), { noMove: !0 }))
            })
        }

        function e(n, t) { return '<div class="' + n + '">' + (t || "") + "<\/div>" }

        function er(n) { for (var i, r, t = n.length; t;) i = Math.floor(Math.random() * t--), r = n[t], n[t] = n[i], n[i] = r; return n }

        function or(n) { return "[object Array]" == Object.prototype.toString.call(n) && r.map(n, function(n) { return r.extend({}, n) }) }

        function rt(n, t, i) { n.scrollLeft(t || 0).scrollTop(i || 0) }

        function ui(n) { if (n) { var t = {}; return r.each(n, function(n, i) { t[n.toLowerCase()] = i }), t } }

        function sr(n) { if (n) { var t = +n; return isNaN(t) ? (t = n.split("/"), +t[0] / +t[1] || u) : t } }

        function l(n, t, i, r) { t && (n.addEventListener ? n.addEventListener(t, i, !!r) : n.attachEvent("on" + t, i)) }

        function bf(n) { return !!n.getAttribute("disabled") }

        function hr(n) { return { tabindex: -1 * n + "", disabled: n } }

        function fi(n, t) { l(n, "keyup", function(i) { bf(n) || 13 == i.keyCode && t.call(n, i) }) }

        function ei(n, t) { l(n, "focus", n.onfocusin = function(i) { t.call(n, i) }, !0) }

        function p(n, t) {
            n.preventDefault ? n.preventDefault() : n.returnValue = !1;
            t && n.stopPropagation && n.stopPropagation()
        }

        function oi(n) { return n ? ">" : "<" }

        function kf(n) { return n = (n + "").split(/\s+/), { x: k(n[0]) || ti, y: k(n[1]) || ti } }

        function ut(n, t) {
            var f = n.data(),
                e = Math.round(t.pos),
                i = function() {
                    f.sliding = !1;
                    (t.onEnd || c)()
                },
                u;
            "undefined" != typeof t.overPos && t.overPos !== t.pos && (e = t.overPos, i = function() { ut(n, r.extend({}, t, { overPos: t.pos, time: Math.max(ht, t.time / 2) })) });
            u = r.extend(ct(e), t.width && { width: t.width });
            f.sliding = !0;
            nt ? (n.css(r.extend(ii(t.time), u)), t.time > 10 ? sf(n, "transform", i, t.time) : i()) : n.stop().animate(u, t.time, ns, i)
        }

        function cr(n, t, i, u, f, e) {
            var h = "undefined" != typeof e;
            if (h || (f.push(arguments), Array.prototype.push.call(arguments, f.length), !(f.length > 1))) {
                n = n || r(n);
                t = t || r(t);
                var v = n[0],
                    l = t[0],
                    s = "crossfade" === u.method,
                    o = function() {
                        if (!o.done) {
                            o.done = !0;
                            var n = (h || f.shift()) && f.shift();
                            n && cr.apply(this, n);
                            (u.onEnd || c)(!!n)
                        }
                    },
                    a = u.time / (e || 1);
                i.removeClass(ru + " " + iu);
                n.stop().addClass(ru);
                t.stop().addClass(iu);
                s && l && n.fadeTo(0, 0);
                n.fadeTo(s ? a : 0, 1, s && o);
                t.fadeTo(a, 0, o);
                v && s || l || o()
            }
        }

        function lr(n) {
            var t = (n.touches || [])[0] || n;
            n._x = t.pageX;
            n._y = t.clientY;
            n._now = r.now()
        }

        function ar(n, i) {
            function b(n) { return s = r(n.target), u.checked = g = nt = y = !1, e || u.flow || n.touches && n.touches.length > 1 || n.which > 1 || ki && ki.type !== n.type && di || (g = i.select && s.is(i.select, f)) ? g : (h = "touchstart" === n.type, nt = s.is("a, a *", f), v = u.control, rt = u.noMove || u.noSwipe || v ? 16 : u.snap ? 0 : 4, lr(n), a = ki = n, gu = n.type.replace(/down|start/, "move").replace(/Down/, "Move"), (i.onStart || c).call(f, n, { control: v, $target: s }), e = u.flow = !0, void((!h || u.go) && p(n))) }

            function k(n) {
                if (n.touches && n.touches.length > 1 || tt && !n.isPrimary || gu !== n.type || !e) return e && o(), void(i.onTouchEnd || c)();
                lr(n);
                var t = Math.abs(n._x - a._x),
                    r = Math.abs(n._y - a._y),
                    s = t - r,
                    l = (u.go || u.x || s >= 0) && !u.noSwipe,
                    v = 0 > s;
                h && !u.checked ? (e = l) && p(n) : (p(n), (i.onMove || c).call(f, n, { touch: h }));
                !y && Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) > rt && (y = !0);
                u.checked = u.checked || l || v
            }

            function o(n) {
                (i.onTouchEnd || c)();
                var t = e;
                u.control = e = !1;
                t && (u.flow = !1);
                !t || nt && !u.checked || (n && p(n), di = !0, clearTimeout(nf), nf = setTimeout(function() { di = !1 }, 1e3), (i.onEnd || c).call(f, { moved: y, $target: s, control: v, touch: h, startEvent: a, aborted: !n || "MSPointerCancel" === n.type }))
            }

            function ut() { u.flow || setTimeout(function() { u.flow = !0 }, 10) }

            function d() { u.flow && setTimeout(function() { u.flow = !1 }, it) }
            var e, a, s, v, h, g, nt, rt, y, f = n[0],
                u = {};
            return tt ? (l(f, "MSPointerDown", b), l(t, "MSPointerMove", k), l(t, "MSPointerCancel", o), l(t, "MSPointerUp", o)) : (l(f, "touchstart", b), l(f, "touchmove", k), l(f, "touchend", o), l(t, "touchstart", ut), l(t, "touchend", d), l(t, "touchcancel", d), w.on("scroll", d), n.on("mousedown", b), bt.on("mousemove", k).on("mouseup", o)), n.on("click", "a", function(n) { u.checked && p(n) }), u
        }

        function vr(n, t) {
            function a(r, u) {
                l = !0;
                y = s = r._x;
                g = r._now;
                h = [
                    [g, y]
                ];
                p = i = e.noMove || u ? 0 : ri(n, (t.getPos || c)());
                (t.onStart || c).call(k, r)
            }

            function ut(n, t) {
                u = e.min;
                f = e.max;
                o = e.snap;
                nt = n.altKey;
                l = b = !1;
                rt = t.control;
                rt || ot.sliding || a(n)
            }

            function ft(r, o) { e.noSwipe || (l || a(r), s = r._x, h.push([r._now, s]), i = p - (y - s), d = at(i, u, f), u >= i ? i = tr(i, u) : i >= f && (i = tr(i, f)), e.noMove || (n.css(ct(i)), b || (b = !0, o.touch || tt || n.addClass(fu)), (t.onMove || c).call(k, r, { pos: i, edge: d }))) }

            function et(y) {
                if (!e.noSwipe || !y.moved) {
                    l || a(y.startEvent, !0);
                    y.touch || tt || n.removeClass(fu);
                    w = r.now();
                    for (var lt, ft, at, vt, d, g, b, rt, et, yt = w - it, ot = null, ut = ht, pt = t.friction, st = h.length - 1; st >= 0; st--) {
                        if (lt = h[st][0], ft = Math.abs(lt - yt), null === ot || at > ft) ot = lt, vt = h[st][1];
                        else if (ot === yt || ft > at) break;
                        at = ft
                    }
                    b = v(i, u, f);
                    var wt = vt - s,
                        ct = wt >= 0,
                        bt = w - ot,
                        kt = bt > it,
                        dt = !kt && i !== p && b === i;
                    o && (b = v(Math[dt ? ct ? "floor" : "ceil" : "round"](i / o) * o, u, f), u = f = b);
                    dt && (o || b === i) && (et = -(wt / bt), ut *= v(Math.abs(et), t.timeLow, t.timeHigh), d = Math.round(i + et * ut / pt), o || (b = d), (!ct && d > f || ct && u > d) && (g = ct ? u : f, rt = d - g, o || (b = g), rt = v(b + .03 * rt, g - 50, g + 50), ut = Math.abs((i - rt) / (et / pt))));
                    ut *= nt ? 10 : 1;
                    (t.onEnd || c).call(k, r.extend(y, { moved: y.moved || kt && o, pos: i, newPos: b, overPos: rt, time: ut }))
                }
            }
            var y, s, p, i, d, h, g, w, u, f, o, nt, rt, b, l, k = n[0],
                ot = n.data(),
                e = {};
            return e = r.extend(ar(t.$wrap, r.extend({}, t, { onStart: ut, onMove: ft, onEnd: et })), e)
        }

        function yr(n, t) {
            var u, f, e, o = n[0],
                i = { prevent: {} };
            return l(o, po, function(n) {
                var l = n.wheelDeltaY || -1 * n.deltaY || 0,
                    s = n.wheelDeltaX || -1 * n.deltaX || 0,
                    a = Math.abs(s) && !Math.abs(l),
                    o = oi(0 > s),
                    v = f === o,
                    h = r.now(),
                    y = it > h - e;
                f = o;
                e = h;
                a && i.ok && (!i.prevent[o] || u) && (p(n, !0), u && v && y || (t.shift && (u = !0, clearTimeout(i.t), i.t = setTimeout(function() { u = !1 }, wo)), (t.onEnd || c)(n, t.shift ? o : s)))
            }), i
        }

        function pr() { r.each(r.Fotorama.instances, function(n, t) { t.index = n }) }

        function df(n) {
            r.Fotorama.instances.push(n);
            pr()
        }

        function gf(n) {
            r.Fotorama.instances.splice(n.index, 1);
            pr()
        }
        var f = "fotorama",
            ft = "fullscreen",
            a = f + "__wrap",
            ne = a + "--css2",
            te = a + "--css3",
            wr = a + "--video",
            ie = a + "--fade",
            re = a + "--slide",
            br = a + "--no-controls",
            ue = a + "--no-shadows",
            fe = a + "--pan-y",
            ee = a + "--rtl",
            kr = a + "--only-active",
            oe = a + "--no-captions",
            se = a + "--toggle-arrows",
            si = f + "__stage",
            dr = si + "__frame",
            he = dr + "--video",
            ce = si + "__shaft",
            gr = f + "__grab",
            le = f + "__pointer",
            et = f + "__arr",
            nu = et + "--disabled",
            ae = et + "--prev",
            ve = et + "--next",
            g = f + "__nav",
            ye = g + "-wrap",
            pe = g + "__shaft",
            hi = g + "--dots",
            ci = g + "--thumbs",
            ot = g + "__frame",
            we = ot + "--dot",
            be = ot + "--thumb",
            tu = f + "__fade",
            iu = tu + "-front",
            ru = tu + "-rear",
            ke = f + "__shadow",
            li = ke + "s",
            de = li + "--left",
            ge = li + "--right",
            ai = f + "__active",
            vi = f + "__select",
            no = f + "--hidden",
            uu = f + "--fullscreen",
            to = f + "__fullscreen-icon",
            yi = f + "__error",
            pi = f + "__loading",
            vt = f + "__loaded",
            io = vt + "--full",
            ro = vt + "--img",
            fu = f + "__grabbing",
            eu = f + "__img",
            uo = eu + "--full",
            fo = f + "__dot",
            ou = f + "__thumb",
            eo = ou + "-border",
            oo = f + "__html",
            su = f + "__video",
            hu = su + "-play",
            so = su + "-close",
            ho = f + "__caption",
            co = f + "__caption__wrap",
            lo = f + "__spinner",
            st = '" tabindex="0" role="button',
            yt = r && r.fn.jquery.split("."),
            pt, vu, yu, pu, wu, ki, gu, di, nf;
        if (!yt || yt[0] < 1 || 1 == yt[0] && yt[1] < 8) throw "Fotorama requires jQuery 1.8 or later and will not run without it.";
        var cu = {},
            lu = function(n, t, i) {
                function nt(n) { w.cssText = n }

                function u(n, t) { return typeof n === t }

                function tt(n, t) { return !!~("" + n).indexOf(t) }

                function y(n, t) {
                    var u, r;
                    for (u in n)
                        if (r = n[u], !tt(r, "-") && w[r] !== i) return "pfx" == t ? r : !0;
                    return !1
                }

                function it(n, t, r) {
                    var e, f;
                    for (e in n)
                        if (f = t[n[e]], f !== i) return r === !1 ? n[e] : u(f, "function") ? f.bind(r || t) : f;
                    return !1
                }

                function e(n, t, i) {
                    var r = n.charAt(0).toUpperCase() + n.slice(1),
                        f = (n + " " + k.join(r + " ") + r).split(" ");
                    return u(t, "string") || u(t, "undefined") ? y(f, t) : (f = (n + " " + d.join(r + " ") + r).split(" "), it(f, t, i))
                }
                var rt, o, l, r = {},
                    f = t.documentElement,
                    s = "modernizr",
                    p = t.createElement(s),
                    w = p.style,
                    ut = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
                    b = "Webkit Moz O ms",
                    k = b.split(" "),
                    d = b.toLowerCase().split(" "),
                    h = {},
                    g = [],
                    a = g.slice,
                    ft = function(n, i, r, u) {
                        var l, a, c, v, e = t.createElement("div"),
                            h = t.body,
                            o = h || t.createElement("body");
                        if (parseInt(r, 10))
                            for (; r--;) c = t.createElement("div"), c.id = u ? u[r] : s + (r + 1), e.appendChild(c);
                        return l = ["&#173;", '<style id="s', s, '">', n, "<\/style>"].join(""), e.id = s, (h ? e : o).innerHTML += l, o.appendChild(e), h || (o.style.background = "", o.style.overflow = "hidden", v = f.style.overflow, f.style.overflow = "hidden", f.appendChild(o)), a = i(e, n), h ? e.parentNode.removeChild(e) : (o.parentNode.removeChild(o), f.style.overflow = v), !!a
                    },
                    v = {}.hasOwnProperty,
                    c;
                l = u(v, "undefined") || u(v.call, "undefined") ? function(n, t) { return t in n && u(n.constructor.prototype[t], "undefined") } : function(n, t) { return v.call(n, t) };
                Function.prototype.bind || (Function.prototype.bind = function(n) {
                    var t = this,
                        i, r;
                    if ("function" != typeof t) throw new TypeError;
                    return i = a.call(arguments, 1), r = function() { var f, e, u; return this instanceof r ? (f = function() {}, f.prototype = t.prototype, e = new f, u = t.apply(e, i.concat(a.call(arguments))), Object(u) === u ? u : e) : t.apply(n, i.concat(a.call(arguments))) }, r
                });
                h.csstransforms3d = function() { return !!e("perspective") };
                for (c in h) l(h, c) && (o = c.toLowerCase(), r[o] = h[c](), g.push((r[o] ? "" : "no-") + o));
                return r.addTest = function(n, t) {
                    if ("object" == typeof n)
                        for (var u in n) l(n, u) && r.addTest(u, n[u]);
                    else {
                        if (n = n.toLowerCase(), r[n] !== i) return r;
                        t = "function" == typeof t ? t() : t;
                        "undefined" != typeof enableClasses && enableClasses && (f.className += " " + (t ? "" : "no-") + n);
                        r[n] = t
                    }
                    return r
                }, nt(""), p = rt = null, r._version = "2.6.2", r._prefixes = ut, r._domPrefixes = d, r._cssomPrefixes = k, r.testProp = function(n) { return y([n]) }, r.testAllProps = e, r.testStyles = ft, r.prefixed = function(n, t, i) { return t ? e(n, t, i) : e(n, "pfx") }, r
            }(n, t),
            s = { ok: !1, is: function() { return !1 }, request: function() {}, cancel: function() {}, event: "", prefix: "" },
            au = "webkit moz o ms khtml".split(" ");
        if ("undefined" != typeof t.cancelFullScreen) s.ok = !0;
        else
            for (pt = 0, vu = au.length; vu > pt; pt++)
                if (s.prefix = au[pt], "undefined" != typeof t[s.prefix + "CancelFullScreen"]) { s.ok = !0; break }
        s.ok && (s.event = s.prefix + "fullscreenchange", s.is = function() {
            switch (this.prefix) {
                case "":
                    return t.fullScreen;
                case "webkit":
                    return t.webkitIsFullScreen;
                default:
                    return t[this.prefix + "FullScreen"]
            }
        }, s.request = function(n) { return "" === this.prefix ? n.requestFullScreen() : n[this.prefix + "RequestFullScreen"]() }, s.cancel = function() { return "" === this.prefix ? t.cancelFullScreen() : t[this.prefix + "CancelFullScreen"]() });
        pu = { lines: 12, length: 5, width: 2, radius: 7, corners: 1, rotate: 15, color: "rgba(128, 128, 128, .75)", hwaccel: !0 };
        wu = { top: "auto", left: "auto", className: "" };
        ! function(n, t) { yu = t() }(this, function() {
            function f(n, i) { var r, u = t.createElement(n || "div"); for (r in i) u[r] = i[r]; return u }

            function i(n) { for (var t = 1, i = arguments.length; i > t; t++) n.appendChild(arguments[t]); return n }

            function p(n, t, i, r) {
                var u = ["opacity", t, ~~(100 * n), i, r].join("-"),
                    f = .01 + i / r * 100,
                    o = Math.max(1 - (1 - n) / t * (100 - f), n),
                    s = e.substring(0, e.indexOf("Animation")).toLowerCase(),
                    c = s && "-" + s + "-" || "";
                return y[u] || (h.insertRule("@" + c + "keyframes " + u + "{0%{opacity:" + o + "}" + f + "%{opacity:" + n + "}" + (f + .01) + "%{opacity:1}" + (f + t) % 100 + "%{opacity:" + n + "}100%{opacity:" + o + "}}", h.cssRules.length), y[u] = 1), u
            }

            function s(n, t) {
                var r, i, f = n.style;
                for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < v.length; i++)
                    if (r = v[i] + t, f[r] !== u) return r;
                if (f[t] !== u) return t
            }

            function n(n, t) { for (var i in t) n.style[s(n, i) || i] = t[i]; return n }

            function c(n) { for (var r, i, t = 1; t < arguments.length; t++) { r = arguments[t]; for (i in r) n[i] === u && (n[i] = r[i]) } return n }

            function l(n) { for (var t = { x: n.offsetLeft, y: n.offsetTop }; n = n.offsetParent;) t.x += n.offsetLeft, t.y += n.offsetTop; return t }

            function a(n, t) { return "string" == typeof n ? n : n[t % n.length] }

            function r(n) { return "undefined" == typeof this ? new r(n) : void(this.opts = c(n || {}, r.defaults, b)) }

            function w() {
                function t(n, t) { return f("<" + n + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t) }
                h.addRule(".spin-vml", "behavior:url(#default#VML)");
                r.prototype.lines = function(r, u) {
                    function s() { return n(t("group", { coordsize: o + " " + o, coordorigin: -e + " " + -e }), { width: o, height: o }) }

                    function h(r, f, o) { i(l, i(n(s(), { rotation: 360 / u.lines * r + "deg", left: ~~f }), i(n(t("roundrect", { arcsize: u.corners }), { width: e, height: u.width, left: u.radius, top: -u.width >> 1, filter: o }), t("fill", { color: a(u.color, r), opacity: u.opacity }), t("stroke", { opacity: 0 })))) }
                    var f, e = u.length + u.width,
                        o = 2 * e,
                        c = 2 * -(u.width + u.length) + "px",
                        l = n(s(), { position: "absolute", top: c, left: c });
                    if (u.shadow)
                        for (f = 1; f <= u.lines; f++) h(f, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                    for (f = 1; f <= u.lines; f++) h(f);
                    return i(r, l)
                };
                r.prototype.opacity = function(n, t, i, r) {
                    var u = n.firstChild;
                    r = r.shadow && r.lines || 0;
                    u && t + r < u.childNodes.length && (u = u.childNodes[t + r], u = u && u.firstChild, u = u && u.firstChild, u && (u.opacity = i))
                }
            }
            var e, v = ["webkit", "Moz", "ms", "O"],
                y = {},
                h = function() { var n = f("style", { type: "text/css" }); return i(t.getElementsByTagName("head")[0], n), n.sheet || n.styleSheet }(),
                b = { lines: 12, length: 7, width: 5, radius: 10, rotate: 0, corners: 1, color: "#000", direction: 1, speed: 1, trail: 100, opacity: .25, fps: 20, zIndex: 2e9, className: "spinner", top: "auto", left: "auto", position: "relative" },
                o;
            return r.defaults = {}, c(r.prototype, {
                spin: function(t) {
                    this.stop();
                    var o, s, r = this,
                        i = r.opts,
                        u = r.el = n(f(0, { className: i.className }), { position: i.position, width: 0, zIndex: i.zIndex }),
                        c = i.radius + i.length + i.width;
                    if (t && (t.insertBefore(u, t.firstChild || null), s = l(t), o = l(u), n(u, { left: ("auto" == i.left ? s.x - o.x + (t.offsetWidth >> 1) : parseInt(i.left, 10) + c) + "px", top: ("auto" == i.top ? s.y - o.y + (t.offsetHeight >> 1) : parseInt(i.top, 10) + c) + "px" })), u.setAttribute("role", "progressbar"), r.lines(u, r.opts), !e) {
                        var a, v = 0,
                            p = (i.lines - 1) * (1 - i.direction) / 2,
                            y = i.fps,
                            h = y / i.speed,
                            w = (1 - i.opacity) / (h * i.trail / 100),
                            b = h / i.lines;
                        ! function k() {
                            v++;
                            for (var n = 0; n < i.lines; n++) a = Math.max(1 - (v + (i.lines - n) * b) % h * w, i.opacity), r.opacity(u, n * i.direction + p, a, i);
                            r.timeout = r.el && setTimeout(k, ~~(1e3 / y))
                        }()
                    }
                    return r
                },
                stop: function() { var n = this.el; return n && (clearTimeout(this.timeout), n.parentNode && n.parentNode.removeChild(n), this.el = u), this },
                lines: function(t, r) {
                    function s(t, i) { return n(f(), { position: "absolute", width: r.length + r.width + "px", height: r.width + "px", background: t, boxShadow: i, transformOrigin: "left", transform: "rotate(" + ~~(360 / r.lines * u + r.rotate) + "deg) translate(" + r.radius + "px,0)", borderRadius: (r.corners * r.width >> 1) + "px" }) }
                    for (var o, u = 0, h = (r.lines - 1) * (1 - r.direction) / 2; u < r.lines; u++) o = n(f(), { position: "absolute", top: 1 + ~(r.width / 2) + "px", transform: r.hwaccel ? "translate3d(0,0,0)" : "", opacity: r.opacity, animation: e && p(r.opacity, r.trail, h + u * r.direction, r.lines) + " " + 1 / r.speed + "s linear infinite" }), r.shadow && i(o, n(s("#000", "0 0 4px #000"), { top: "2px" })), i(t, i(o, s(a(r.color, u), "0 0 1px rgba(0,0,0,.1)")));
                    return t
                },
                opacity: function(n, t, i) { t < n.childNodes.length && (n.childNodes[t].style.opacity = i) }
            }), o = n(f("group"), { behavior: "url(#default#VML)" }), !s(o, "transform") && o.adj ? w() : e = s(o, "animation"), r
        });
        var wi, wt, w = r(n),
            bt = r(t),
            ao = "quirks" === i.hash.replace("#", ""),
            bu = lu.csstransforms3d,
            nt = bu && !ao,
            vo = bu || "CSS1Compat" === t.compatMode,
            ku = s.ok,
            yo = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
            kt = !nt || yo,
            tt = navigator.msPointerEnabled,
            po = "onwheel" in t.createElement("div") ? "wheel" : t.onmousewheel !== u ? "mousewheel" : "DOMMouseScroll",
            it = 250,
            ht = 300,
            wo = 1400,
            bo = 5e3,
            bi = 2,
            dt = 64,
            ko = 500,
            go = 333,
            h = "$stageFrame",
            gt = "$navDotFrame",
            ni = "$navThumbFrame",
            du = "auto",
            ns = tf([.1, 0, .25, 1]),
            ts = 99999,
            ti = "50%",
            is = { width: null, minwidth: null, maxwidth: "100%", height: null, minheight: null, maxheight: null, ratio: null, margin: bi, glimpse: 0, fit: "contain", position: ti, thumbposition: ti, nav: "dots", navposition: "bottom", navwidth: null, thumbwidth: dt, thumbheight: dt, thumbmargin: bi, thumbborderwidth: bi, thumbfit: "cover", allowfullscreen: !1, transition: "slide", clicktransition: null, transitionduration: ht, captions: !0, hash: !1, startindex: 0, loop: !1, autoplay: !1, stopautoplayontouch: !0, keyboard: !1, arrows: !0, click: !0, swipe: !0, trackpad: !1, enableifsingleframe: !1, controlsonstart: !0, shuffle: !1, direction: "ltr", shadows: !0, spinner: null },
            rs = { left: !0, right: !0, down: !1, up: !1, space: !1, home: !1, end: !1 };
        o.stop = function(n) { o.ii[n] = !1 };
        jQuery.Fotorama = function(n, u) {
            function kl() {
                r.each(pt, function(n, t) {
                    var r, i;
                    t.i || (t.i = ea++, r = ir(t.video, !0), r && (i = {}, t.video = r, t.img || t.thumb ? t.thumbsReady = !0 : i = cf(t, pt, c), rr(pt, { img: i.img, thumb: i.thumb }, t.i, c)))
                })
            }

            function bu(n) { return fl[n] || c.fullScreen }

            function dl(n) {
                var i = "keydown." + f,
                    t = f + ph,
                    r = "keydown." + t,
                    e = "resize." + t + " orientationchange." + t;
                n ? (bt.on(r, function(n) {
                    var i, t;
                    ki && 27 === n.keyCode ? (i = !0, nf(ki, !0, !0)) : (c.fullScreen || u.keyboard && !c.index) && (27 === n.keyCode ? (i = !0, c.cancelFullScreen()) : n.shiftKey && 32 === n.keyCode && bu("space") || 37 === n.keyCode && bu("left") || 38 === n.keyCode && bu("up") ? t = "<" : 32 === n.keyCode && bu("space") || 39 === n.keyCode && bu("right") || 40 === n.keyCode && bu("down") ? t = ">" : 36 === n.keyCode && bu("home") ? t = "<<" : 35 === n.keyCode && bu("end") && (t = ">>"));
                    (i || t) && p(n);
                    t && c.show({ index: t, slow: n.altKey, user: !0 })
                }), c.index || bt.off(i).on(i, "textarea, input, select", function(n) { wt.hasClass(ft) || n.stopPropagation() }), w.on(e, c.resize)) : (bt.off(r), w.off(e))
            }

            function as(t) { t !== as.f && (t ? (n.html("").addClass(f + " " + cl).append(di).before(wh).before(bh), df(c)) : (di.detach(), wh.detach(), bh.detach(), n.html(al.urtext).removeClass(cl), gf(c)), dl(t), as.f = t) }

            function gl() {
                pt = c.data = pt || or(u.data) || lf(n);
                bi = c.size = pt.length;
                !ws.ok && u.shuffle && er(pt);
                kl();
                yt = fh(yt);
                bi && as(!0)
            }

            function uh() {
                var n = 2 > bi && !u.enableifsingleframe || ki;
                pr.noMove = n || au;
                pr.noSwipe = n || !u.swipe;
                !uf && af.toggleClass(gr, !u.click && !pr.noMove && !pr.noSwipe);
                tt && di.toggleClass(fe, !pr.noSwipe)
            }

            function ic(n) {
                n === !0 && (n = "");
                u.autoplay = Math.max(+n || bo, 1.5 * yo)
            }

            function na() {
                function n(n, i) { t[n ? "add" : "remove"].push(i) }
                c.options = u = ui(u);
                au = "crossfade" === u.transition || "dissolve" === u.transition;
                lu = u.loop && (bi > 2 || au && (!uf || "slide" !== uf));
                yo = +u.transitionduration || ht;
                hf = "rtl" === u.direction;
                fl = r.extend({}, u.keyboard && rs, u.keyboard);
                var t = { add: [], remove: [] };
                bi > 1 || u.enableifsingleframe ? (iu = u.nav, ul = "top" === u.navposition, t.remove.push(vi), po.toggle(!!u.arrows)) : (iu = !1, po.hide());
                oc();
                bs = new yu(r.extend(pu, u.spinner, wu, { direction: hf ? -1 : 1 }));
                ac();
                vc();
                u.autoplay && ic(u.autoplay);
                ah = y(u.thumbwidth) || dt;
                ds = y(u.thumbheight) || dt;
                rh.ok = ls.ok = u.trackpad && !kt;
                uh();
                kc(u, [d]);
                ao = "thumbs" === iu;
                ao ? (oh(bi, "navThumb"), lh = th, ff = ni, pf(wh, r.Fotorama.jst.style({ w: ah, h: ds, b: u.thumbborderwidth, m: u.thumbmargin, s: ph, q: !vo })), tr.addClass(ci).removeClass(hi)) : "dots" === iu ? (oh(bi, "navDot"), lh = gh, ff = gt, tr.addClass(hi).removeClass(ci)) : (iu = !1, tr.removeClass(ci + " " + hi));
                iu && (ul ? dh.insertBefore(gi) : dh.insertAfter(gi), us.nav = !1, us(lh, ru, "nav"));
                ks = u.allowfullscreen;
                ks ? (ih.prependTo(gi), hs = ku && "native" === ks) : (ih.detach(), hs = !1);
                n(au, ie);
                n(!au, re);
                n(!u.captions, oe);
                n(hf, ee);
                n("always" !== u.arrows, se);
                cs = u.shadows && !kt;
                n(!cs, ue);
                di.addClass(t.add.join(" ")).removeClass(t.remove.join(" "));
                ca = r.extend({}, u)
            }

            function of(n) { return 0 > n ? (bi + n % bi) % bi : n >= bi ? n % bi : n }

            function fh(n) { return v(n, 0, bi - 1) }

            function rc(n) { return lu ? of(n) : fh(n) }

            function uc(n) { return n > 0 || lu ? n - 1 : !1 }

            function fc(n) { return bi - 1 > n || lu ? n + 1 : !1 }

            function ta() {
                pr.min = lu ? -1 / 0 : -lt(bi - 1, d.w, u.margin, tf);
                pr.max = lu ? 1 / 0 : -lt(0, d.w, u.margin, tf);
                pr.snap = d.w + u.margin
            }

            function ia() {
                ti.min = Math.min(0, d.nw - ru.width());
                ti.max = 0;
                ru.toggleClass(gr, !(ti.noMove = ti.min === ti.max))
            }

            function eh(n, t, i) {
                if ("number" == typeof n) { n = new Array(n); var u = !0 }
                return r.each(n, function(n, r) {
                    var f, o, e;
                    (u && (r = n), "number" == typeof r) && (f = pt[of(r)], f && (o = "$" + t + "Frame", e = f[o], i.call(this, n, r, f, e, o, e && e.data())))
                })
            }

            function ec(n, t, i, r) { vh && ("*" !== vh || r !== ss) || (n = k(u.width) || k(n) || ko, t = k(u.height) || k(t) || go, c.resize({ width: n, ratio: u.ratio || i || n / t }, 0, r !== ss && "*")) }

            function ns(n, t, i, f, e, s) {
                eh(n, t, function(n, h, l, a, v, y) {
                    function nt(n) {
                        var t = of(h);
                        fu(n, { index: t, src: p, frame: pt[t] })
                    }

                    function tt() {
                        k.remove();
                        r.Fotorama.cache[p] = "error";
                        l.html && "stage" === t || !it || it === p ? (!p || l.html || w ? "stage" === t && (a.trigger("f:load").removeClass(pi + " " + yi).addClass(vt), nt("load"), ec()) : (a.trigger("f:error").removeClass(pi).addClass(yi), nt("error")), y.state = "error", !(bi > 1 && pt[h] === l) || l.html || l.deleted || l.video || w || (l.deleted = !0, c.splice(h, 1))) : (l[ut] = p = it, ns([h], t, i, f, e, !0))
                    }

                    function ft() {
                        r.Fotorama.measures[p] = g.measures = r.Fotorama.measures[p] || { width: b.width, height: b.height, ratio: b.width / b.height };
                        ec(g.measures.width, g.measures.height, g.measures.ratio, h);
                        k.off("load error").addClass(eu + (w ? " " + uo : "")).prependTo(a);
                        ur(k, (r.isFunction(i) ? i() : i) || d, f || l.fit || u.fit, e || l.position || u.position);
                        r.Fotorama.cache[p] = y.state = "loaded";
                        setTimeout(function() { a.trigger("f:load").removeClass(pi + " " + yi).addClass(vt + " " + (w ? io : ro)); "stage" === t ? nt("load") : (l.thumbratio === du || !l.thumbratio && u.thumbratio === du) && (l.thumbratio = g.measures.ratio, su()) }, 0)
                    }

                    function rt() {
                        var n = 10;
                        o(function() { return !gs || !n-- && !kt }, function() { ft() })
                    }
                    var w;
                    if (a && (w = c.fullScreen && l.full && l.full !== l.img && !y.$full && "stage" === t, !y.$img || s || w)) {
                        var b = new Image,
                            k = r(b),
                            g = k.data();
                        y[w ? "$full" : "$img"] = k;
                        var ut = "stage" === t ? w ? "full" : "img" : "thumb",
                            p = l[ut],
                            it = w ? null : l["stage" === t ? "thumb" : "img"];
                        if ("navThumb" === t && (a = y.$wrap), !p) return void tt();
                        r.Fotorama.cache[p] ? ! function et() { "error" === r.Fotorama.cache[p] ? tt() : "loaded" === r.Fotorama.cache[p] ? setTimeout(rt, 0) : setTimeout(et, 100) }() : (r.Fotorama.cache[p] = "*", k.on("load", rt).on("error", tt));
                        y.state = "";
                        b.src = p
                    }
                })
            }

            function ra(n) { wl.append(bs.spin().el).appendTo(n) }

            function oc() {
                wl.detach();
                bs && bs.stop()
            }

            function sc() {
                var n = lr[h];
                n && !n.data().state && (ra(n), n.on("f:load f:error", function() {
                    n.off("f:load f:error");
                    oc()
                }))
            }

            function hc(n) {
                fi(n, gc);
                ei(n, function() {
                    setTimeout(function() { rt(tr) }, 0);
                    gu({ time: yo, guessIndex: r(this).data().eq, minMax: ti })
                })
            }

            function oh(n, t) {
                eh(n, t, function(n, i, u, f, o, s) {
                    if (!f) {
                        f = u[o] = di[o].clone();
                        s = f.data();
                        s.data = u;
                        var h = f[0];
                        "stage" === t ? (u.html && r('<div class="' + oo + '"><\/div>').append(u._html ? r(u.html).removeAttr("id").html(u._html) : u.html).appendTo(f), u.caption && r(e(ho, e(co, u.caption))).appendTo(f), u.video && f.addClass(he).append(pl.clone()), ei(h, function() {
                            setTimeout(function() { rt(gi) }, 0);
                            ke({ index: s.eq, user: !0 })
                        }), kh = kh.add(f)) : "navDot" === t ? (hc(h), gh = gh.add(f)) : "navThumb" === t && (hc(h), s.$wrap = f.children(":first"), th = th.add(f), u.video && s.$wrap.append(pl.clone()))
                    }
                })
            }

            function sh(n, t, i, r) { return n && n.length && ur(n, t, i, r) }

            function cc(n) {
                eh(n, "stage", function(n, t, i, f, e, o) {
                    if (f) {
                        var s = of(t),
                            c = i.fit || u.fit,
                            l = i.position || u.position;
                        o.eq = s;
                        tc[h][s] = f.css(r.extend({ left: au ? 0 : lt(t, d.w, u.margin, tf) }, au && ii(0)));
                        vf(f[0]) && (f.appendTo(af), nf(i.$video));
                        sh(o.$img, d, c, l);
                        sh(o.$full, d, c, l)
                    }
                })
            }

            function is(n, t) {
                if ("thumbs" === iu && !isNaN(n)) {
                    var i = -n,
                        f = -n + d.nw;
                    th.each(function() {
                        var a = r(this),
                            n = a.data(),
                            e = n.eq,
                            o = function() { return { h: ds, w: n.w } },
                            s = o(),
                            h = pt[e] || {},
                            c = h.thumbfit || u.thumbfit,
                            l = h.thumbposition || u.thumbposition;
                        s.w = n.w;
                        n.l + n.w < i || n.l > f || sh(n.$img, s, c, l) || t && ns([e], "navThumb", o, c, l)
                    })
                }
            }

            function us(n, t, i) {
                if (!us[i]) {
                    var e = "nav" === i && ao,
                        f = 0;
                    t.append(n.filter(function() {
                        for (var t, i = r(this), u = i.data(), n = 0, f = pt.length; f > n; n++)
                            if (u.data === pt[n]) {
                                t = !0;
                                u.eq = n;
                                break
                            }
                        return t || i.remove() && !1
                    }).sort(function(n, t) { return r(n).data().eq - r(t).data().eq }).each(function() {
                        if (e) {
                            var i = r(this),
                                n = i.data(),
                                t = Math.round(ds * n.data.thumbratio) || ah;
                            n.l = f;
                            n.w = t;
                            i.css({ width: t });
                            f += t + u.thumbmargin
                        }
                    }));
                    us[i] = !0
                }
            }

            function lc(n) { return n - bl > d.w / 3 }

            function fs(n) { return !(lu || yt + n && yt - bi + n || ki) }

            function ac() {
                var n = fs(0),
                    t = fs(1);
                vl.toggleClass(nu, n).attr(hr(n));
                yl.toggleClass(nu, t).attr(hr(t))
            }

            function vc() { rh.ok && (rh.prevent = { "<": fs(0), ">": fs(1) }) }

            function yc(n) { var t, i, r = n.data(); return ao ? (t = r.l, i = r.w) : (t = n.position().left, i = n.width()), { c: t + i / 2, min: -t + 10 * u.thumbmargin, max: -t + d.w - i - 10 * u.thumbmargin } }

            function pc(n) {
                var t = lr[ff].data();
                ut(oa, { time: 1.2 * n, pos: t.l, width: t.w - 2 * u.thumbborderwidth })
            }

            function gu(n) {
                var r = pt[n.guessIndex][ff];
                if (r) {
                    var t = ti.min !== ti.max,
                        u = n.minMax || t && yc(lr[ff]),
                        f = t && (n.keep && gu.l ? gu.l : v((n.coo || d.nw / 2) - yc(r).c, u.min, u.max)),
                        i = t && v(f, ti.min, ti.max),
                        e = 1.1 * n.time;
                    ut(ru, { time: e, pos: i || 0, onEnd: function() { is(i, !0) } });
                    bf(tr, at(i, ti.min, ti.max));
                    gu.l = f
                }
            }

            function ua() {
                wc(ff);
                wo[ff].push(lr[ff].addClass(ai))
            }

            function wc(n) { for (var t = wo[n]; t.length;) t.shift().removeClass(ai) }

            function hh(n) {
                var t = tc[n];
                r.each(cu, function(n, i) { delete t[of(i)] });
                r.each(t, function(n, i) {
                    delete t[n];
                    i.detach()
                })
            }

            function bc(n) {
                tf = ar = yt;
                var t = lr[h];
                t && (wc(h), wo[h].push(t.addClass(ai)), n || c.show.onEnd(!0), ri(af, 0, !0), hh(h), cc(cu), ta(), ia())
            }

            function kc(n, t) { n && r.each(t, function(t, i) { i && r.extend(i, { width: n.width || i.width, height: n.height, minwidth: n.minwidth, maxwidth: n.maxwidth, minheight: n.minheight, maxheight: n.maxheight, ratio: sr(n.ratio) }) }) }

            function fu(t, i) { n.trigger(f + ":" + t, [c, i]) }

            function es() {
                clearTimeout(sf.t);
                gs = 1;
                u.stopautoplayontouch ? c.stopAutoplay() : vu = !0
            }

            function sf() {
                u.stopautoplayontouch || (vs(), tu());
                sf.t = setTimeout(function() { gs = 0 }, ht + it)
            }

            function vs() { vu = !(!ki && !yh) }

            function tu() {
                if (clearTimeout(tu.t), o.stop(tu.w), !u.autoplay || vu) return void(c.autoplay && (c.autoplay = !1, fu("stopautoplay")));
                c.autoplay || (c.autoplay = !0, fu("startautoplay"));
                var n = yt,
                    t = lr[h].data();
                tu.w = o(function() { return t.state || n !== yt }, function() {
                    tu.t = setTimeout(function() {
                        if (!vu && n === yt) {
                            var t = os,
                                i = pt[t][h].data();
                            tu.w = o(function() { return i.state || t !== os }, function() { vu || t !== os || c.show(lu ? oi(!hf) : os) })
                        }
                    }, u.autoplay)
                })
            }

            function dc() { c.fullScreen && (c.fullScreen = !1, ku && s.cancel(ll), wt.removeClass(ft), wi.removeClass(ft), n.removeClass(uu).insertAfter(bh), d = r.extend({}, hl), nf(ki, !0, !0), ps("x", !1), c.resize(), ns(cu, "stage"), rt(w, ol, el), fu("fullscreenexit")) }

            function bf(n, t) { cs && (n.removeClass(de + " " + ge), t && !ki && n.addClass(t.replace(/^|\s/g, " " + li + "--"))) }

            function nf(n, t, i) {
                t && (di.removeClass(wr), ki = !1, uh());
                n && n !== ki && (n.remove(), fu("unloadvideo"));
                i && (vs(), tu())
            }

            function ys(n) { di.toggleClass(br, n) }

            function kf(n) {
                if (!pr.flow) {
                    var t = n ? n.pageX : kf.x,
                        i = t && !fs(lc(t)) && u.click;
                    kf.p !== i && gi.toggleClass(le, i) && (kf.p = i, kf.x = t)
                }
            }

            function ke(n) {
                clearTimeout(ke.t);
                u.clicktransition && u.clicktransition !== u.transition ? setTimeout(function() {
                    var t = u.transition;
                    c.setOptions({ transition: u.clicktransition });
                    uf = t;
                    ke.t = setTimeout(function() { c.show(n) }, 10)
                }, 0) : c.show(n)
            }

            function fa(n, t) {
                var i = n.target,
                    f = r(i);
                f.hasClass(hu) ? c.playVideo() : i === nc ? c.toggleFullScreen() : ki ? i === ha && nf(ki, !0, !0) : t ? ys() : u.click && ke({ index: n.shiftKey || oi(lc(n._x)), slow: n.altKey, user: !0 })
            }

            function ps(n, t) { pr[n] = ti[n] = t }

            function gc(n) {
                var t = r(this).data().eq;
                ke({ index: t, slow: n.altKey, user: !0, coo: n._x - tr.offset().left })
            }

            function nl(n) { ke({ index: po.index(this) ? ">" : "<", slow: n.altKey, user: !0 }) }

            function tl(n) {
                ei(n, function() {
                    setTimeout(function() { rt(gi) }, 0);
                    ys(!1)
                })
            }

            function su() {
                if (gl(), na(), !su.i) {
                    su.i = !0;
                    var n = u.startindex;
                    (n || u.hash && i.hash) && (ss = fr(n || i.hash.replace(/^#/, ""), pt, 0 === c.index || n, n));
                    yt = tf = ar = rf = ss = rc(ss) || 0
                }
                if (bi) {
                    if (ch()) return;
                    ki && nf(ki, !0);
                    cu = [];
                    hh(h);
                    su.ok = !0;
                    c.show({ index: yt, time: 0 });
                    c.resize()
                } else c.destroy()
            }

            function ch() { if (!ch.f === hf) return (ch.f = hf, yt = bi - 1 - yt, c.reverse(), !0) }

            function ws() { ws.ok || (ws.ok = !0, fu("ready")) }
            wi = r("html");
            wt = r("body");
            var pt, bi, lh, bs, ki, lr, cu, tf, ar, rf, il, rl, os, ss, lu, iu, ao, ul, ks, hs, au, ah, ds, yo, uf, cs, hf, fl, vh, el, ol, sl, vu, yh, hl, gs, nh, ff, c = this,
                ph = r.now(),
                cl = f + ph,
                ll = n[0],
                ea = 1,
                al = n.data(),
                wh = r("<style><\/style>"),
                bh = r(e(no)),
                di = r(e(a)),
                gi = r(e(si)).appendTo(di),
                af = (gi[0], r(e(ce)).appendTo(gi)),
                kh = r(),
                vl = r(e(et + " " + ae + st)),
                yl = r(e(et + " " + ve + st)),
                po = vl.add(yl).appendTo(gi),
                dh = r(e(ye)),
                tr = r(e(g)).appendTo(dh),
                ru = r(e(pe)).appendTo(tr),
                gh = r(),
                th = r(),
                oa = (af.data(), ru.data(), r(e(eo)).appendTo(ru)),
                ih = r(e(to + st)),
                nc = ih[0],
                pl = r(e(hu)),
                sa = r(e(so)).appendTo(gi),
                ha = sa[0],
                wl = r(e(lo)),
                yt = !1,
                ca = {},
                d = {},
                pr = {},
                rh = {},
                ti = {},
                ls = {},
                wo = {},
                tc = {},
                bl = 0,
                la = [];
            di[h] = r(e(dr));
            di[ni] = r(e(ot + " " + be + st, e(ou)));
            di[gt] = r(e(ot + " " + we + st, e(fo)));
            wo[h] = [];
            wo[ni] = [];
            wo[gt] = [];
            tc[h] = {};
            di.addClass(nt ? te : ne).toggleClass(br, !u.controlsonstart);
            al.fotorama = this;
            c.startAutoplay = function(n) { return c.autoplay ? this : (vu = yh = !1, ic(n || u.autoplay), tu(), this) };
            c.stopAutoplay = function() { return c.autoplay && (vu = yh = !0, tu()), this };
            c.show = function(n) {
                var t, o, f, r, s, l, e;
                "object" != typeof n ? (t = n, n = {}) : t = n.index;
                t = ">" === t ? ar + 1 : "<" === t ? ar - 1 : "<<" === t ? 0 : ">>" === t ? bi - 1 : t;
                t = isNaN(t) ? fr(t, pt, !0) : t;
                t = "undefined" == typeof t ? yt || 0 : t;
                c.activeIndex = yt = rc(t);
                il = uc(yt);
                rl = fc(yt);
                os = of(yt + (hf ? -1 : 1));
                cu = [yt, il, rl];
                ar = lu ? t : yt;
                var a = Math.abs(rf - ar),
                    i = nr(n.time, function() { return Math.min(yo * (1 + (a - 1) / 12), 2 * yo) }),
                    y = n.overPos;
                return n.slow && (i *= 10), o = lr, c.activeFrame = lr = pt[yt], f = o === lr && !n.user, nf(ki, lr.i !== pt[of(tf)].i), oh(cu, "stage"), cc(kt ? [ar] : [ar, uc(ar), fc(ar)]), ps("go", !0), f || fu("show", { user: n.user, time: i }), vu = !0, r = c.show.onEnd = function(t) {
                    if (!r.ok) {
                        if (r.ok = !0, t || bc(!0), f || fu("showend", { user: n.user }), !t && uf && uf !== u.transition) return c.setOptions({ transition: uf }), void(uf = !1);
                        sc();
                        ns(cu, "stage");
                        ps("go", !1);
                        vc();
                        kf();
                        vs();
                        tu()
                    }
                }, au ? (s = lr[h], l = yt !== rf ? pt[rf][h] : null, cr(s, l, kh, { time: i, method: u.transition, onEnd: r }, la)) : ut(af, { pos: -lt(ar, d.w, u.margin, tf), overPos: y, time: i, onEnd: r }), (ac(), iu) && (ua(), e = fh(yt + v(ar - rf, -1, 1)), gu({ time: i, coo: e !== yt && n.coo, guessIndex: "undefined" != typeof n.coo ? e : yt, keep: f }), ao && pc(i)), sl = "undefined" != typeof rf && rf !== yt, rf = yt, u.hash && sl && !c.eq && yf(lr.id || yt + 1), this
            };
            c.requestFullScreen = function() { return ks && !c.fullScreen && (el = w.scrollTop(), ol = w.scrollLeft(), rt(w), ps("x", !0), hl = r.extend({}, d), n.addClass(uu).appendTo(wt.addClass(ft)), wi.addClass(ft), nf(ki, !0, !0), c.fullScreen = !0, hs && s.request(ll), c.resize(), ns(cu, "stage"), sc(), fu("fullscreenenter")), this };
            c.cancelFullScreen = function() { return hs && s.is() ? s.cancel(t) : dc(), this };
            c.toggleFullScreen = function() { return c[(c.fullScreen ? "cancel" : "request") + "FullScreen"]() };
            l(t, s.event, function() {!pt || s.is() || ki || dc() });
            c.resize = function(n) {
                var r, f;
                if (!pt) return this;
                r = arguments[1] || 0;
                f = arguments[2];
                kc(c.fullScreen ? { width: "100%", maxwidth: null, minwidth: null, height: "100%", maxheight: null, minheight: null } : ui(n), [d, f || c.fullScreen || u]);
                var t = d.width,
                    i = d.height,
                    o = d.ratio,
                    e = w.height() - (iu ? tr.height() : 0);
                return k(t) && (di.addClass(kr).css({ width: t, minWidth: d.minwidth || 0, maxWidth: d.maxwidth || ts }), t = d.W = d.w = di.width(), d.nw = iu && b(u.navwidth, t) || t, u.glimpse && (d.w -= Math.round(2 * (b(u.glimpse, t) || 0))), af.css({ width: d.w, marginLeft: (d.W - d.w) / 2 }), i = b(i, e), i = i || o && t / o, i && (t = Math.round(t), i = d.h = Math.round(v(i, b(d.minheight, e), b(d.maxheight, e))), gi.stop().animate({ width: t, height: i }, r, function() { di.removeClass(kr) }), bc(), iu && (tr.stop().animate({ width: d.nw }, r), gu({ guessIndex: yt, time: r, keep: !0 }), ao && us.nav && pc(r)), vh = f || !0, ws())), bl = gi.offset().left, this
            };
            c.setOptions = function(n) { return r.extend(u, n), su(), this };
            c.shuffle = function() { return pt && er(pt) && su(), this };
            c.destroy = function() { return c.cancelFullScreen(), c.stopAutoplay(), pt = c.data = null, as(), cu = [], hh(h), su.ok = !1, this };
            c.playVideo = function() {
                var n = lr,
                    t = n.video,
                    i = yt;
                return "object" == typeof t && n.videoReady && (hs && c.fullScreen && c.cancelFullScreen(), o(function() { return !s.is() || i !== yt }, function() { i === yt && (n.$video = n.$video || r(r.Fotorama.jst.video(t)), n.$video.appendTo(n[h]), di.addClass(wr), ki = n.$video, uh(), po.blur(), ih.blur(), fu("loadvideo")) })), this
            };
            c.stopVideo = function() { return nf(ki, !0, !0), this };
            gi.on("mousemove", kf);
            pr = vr(af, {
                onStart: es,
                onMove: function(n, t) { bf(gi, t.edge) },
                onTouchEnd: sf,
                onEnd: function(n) {
                    var t, i;
                    bf(gi);
                    t = (tt && !nh || n.touch) && u.arrows && "always" !== u.arrows;
                    n.moved || t && n.pos !== n.newPos && !n.control ? (i = ef(n.newPos, d.w, u.margin, tf), c.show({ index: i, time: au ? yo : n.time, overPos: n.overPos, user: !0 })) : n.aborted || n.control || fa(n.startEvent, t)
                },
                timeLow: 1,
                timeHigh: 1,
                friction: 2,
                select: "." + vi + ", ." + vi + " *",
                $wrap: gi
            });
            ti = vr(ru, {
                onStart: es,
                onMove: function(n, t) { bf(tr, t.edge) },
                onTouchEnd: sf,
                onEnd: function(n) {
                    function t() {
                        gu.l = n.newPos;
                        vs();
                        tu();
                        is(n.newPos, !0)
                    }
                    if (n.moved) n.pos !== n.newPos ? (vu = !0, ut(ru, { time: n.time, pos: n.newPos, overPos: n.overPos, onEnd: t }), is(n.newPos), cs && bf(tr, at(n.newPos, ti.min, ti.max))) : t();
                    else {
                        var i = n.$target.closest("." + ot, ru)[0];
                        i && gc.call(i, n.startEvent)
                    }
                },
                timeLow: .5,
                timeHigh: 2,
                friction: 5,
                $wrap: tr
            });
            rh = yr(gi, {
                shift: !0,
                onEnd: function(n, t) {
                    es();
                    sf();
                    c.show({ index: t, slow: n.altKey })
                }
            });
            ls = yr(tr, {
                onEnd: function(n, t) {
                    es();
                    sf();
                    var i = ri(ru) + .25 * t;
                    ru.css(ct(v(i, ti.min, ti.max)));
                    cs && bf(tr, at(i, ti.min, ti.max));
                    ls.prevent = { "<": i >= ti.max, ">": i <= ti.min };
                    clearTimeout(ls.t);
                    ls.t = setTimeout(function() {
                        gu.l = i;
                        is(i, !0)
                    }, it);
                    is(i)
                }
            });
            di.hover(function() { setTimeout(function() { gs || ys(!(nh = !0)) }, 0) }, function() { nh && ys(!(nh = !1)) });
            wf(po, function(n) {
                p(n);
                nl.call(this, n)
            }, {
                onStart: function() {
                    es();
                    pr.control = !0
                },
                onTouchEnd: sf
            });
            po.each(function() {
                fi(this, function(n) { nl.call(this, n) });
                tl(this)
            });
            fi(nc, c.toggleFullScreen);
            tl(nc);
            r.each("load push pop shift unshift reverse sort splice".split(" "), function(n, t) { c[t] = function() { return pt = pt || [], "load" !== t ? Array.prototype[t].apply(pt, arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (pt = or(arguments[0])), su(), c } });
            su()
        };
        r.fn.fotorama = function(t) {
            return this.each(function() {
                var e = this,
                    i = r(this),
                    u = i.data(),
                    f = u.fotorama;
                f ? f.setOptions(t, !0) : o(function() { return !af(e) }, function() {
                    u.urtext = i.html();
                    new r.Fotorama(i, r.extend({}, is, n.fotoramaDefaults, t, u))
                })
            })
        };
        r.Fotorama.instances = [];
        r.Fotorama.cache = {};
        r.Fotorama.measures = {};
        r = r || {};
        r.Fotorama = r.Fotorama || {};
        r.Fotorama.jst = r.Fotorama.jst || {};
        r.Fotorama.jst.style = function(n) { var t; return cu.escape, "" + (".fotorama" + (null == (t = n.s) ? "" : t) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (t = n.m) ? "" : t) + "px;\nheight:" + (null == (t = n.h) ? "" : t) + "px}\n.fotorama" + (null == (t = n.s) ? "" : t) + " .fotorama__thumb-border{\nheight:" + (null == (t = n.h - n.b * (n.q ? 0 : 2)) ? "" : t) + "px;\nborder-width:" + (null == (t = n.b) ? "" : t) + "px;\nmargin-top:" + (null == (t = n.m) ? "" : t) + "px}") };
        r.Fotorama.jst.video = function(n) {
            function i() { t += r.call(arguments, "") }
            var t = "",
                r = (cu.escape, Array.prototype.join);
            return t += '<div class="fotorama__video"><iframe src="', i(("youtube" == n.type ? n.p + "youtube.com/embed/" + n.id + "?autoplay=1" : "vimeo" == n.type ? n.p + "player.vimeo.com/video/" + n.id + "?autoplay=1&badge=0" : n.id) + (n.s && "custom" != n.type ? "&" + n.s : "")), t += '" frameborder="0" allowfullscreen><\/iframe><\/div>\n'
        };
        r(function() { r("." + f + ':not([data-auto="false"])').fotorama(); "http://" === d() && i.host.match(/\./) && !n.blockFotoramaData && r("body").append('<iframe src="http://data.fotorama.io/?version=' + fotoramaVersion + '" style="display: none;"><\/iframe>') })
    }(window, document, location, "undefined" != typeof jQuery && jQuery);
var linkRedirectHash = "",
    linkRedirectHashTotal = "",
    linkHashRangeSlider = "",
    manuParams = [],
    propsParams = [],
    extParams = [],
    rangeParams = [],
    cidsParams = [],
    ordersParams = -1,
    additionFilterParam = 0,
    isLoadAjax = !1,
    isIgnorePageIndex = !1,
    isInitSuggestAccess = !1,
    totalAjax = 0,
    pIdxActive = 0,
    pIinFor = 0,
    isPageIndexLoading = !1,
    rootUrlDMX = "https://newstaging.dienmayxanh.com",
    keyNameSession = "closed-banner" + document.cateID + document.isWatch,
    varFilterObj = { e: null, isMore: !1, isCallTotal: !1, isViewNow: !1, pIndexGoto: -1 },
    productFilterObj = { total: -1, listproducts: null, textResponseApi: "" },
    priceRangeParams = "",
    RangeObj = { WidthRangeParams: "", HeightRangeParams: "", CapacityRangeParams: "", DeepRangeParams: "" };
$(document).ready(function() {
    var i, n, t;
    $("#progressTop").remove();
    $(".overlay").hide();
    $(".slide-cate a").length > 1 && $(".slide-cate").owlCarousel({ items: 1, loop: !1, rewind: !0, dots: !0, autoplay: !1, lazyLoad: !0, nav: !0, autoplayTimeout: 2e3, autoplayHoverPause: !0 });
    $(".ft-sort > a").click(function(n) {
        (n.preventDefault(), $("#preloader").is(":visible")) || $(".ft-sort ul").fadeToggle(300)
    });
    $(".btn-filter-close").click(function() {
        closePopup();
        unActiveFilter(this)
    });
    $(".btn-filter-readmore").click(function(n) {
        (n.preventDefault(), $(".sort-select-main").fadeOut(0), $(this).hasClass("prevent")) || (closePopup(), varFilterObj.isMore = !1, varFilterObj.isCallTotal = !0, varFilterObj.isViewNow = !0, filterPros(varFilterObj))
    });
    $(".filter-total").click(function() {
        $(".jsfix.fixed").length > 0 && $("html, body").animate({ scrollTop: $(".box-filter").offset().top }, 0);
        $(".show-total").addClass("active");
        $(".menu").hide();
        $("#gb-top-page").hide();
        scrollByTag(".box-filter", !1, !0);
        $(".stickcompare").length > 0 && clearCompare();
        $(".price-slider .range-toggle span.down").length > 0 && $(".bg-whitefix").remove()
    });
    $(".btn-closefilter").click(function() {
        $(".show-total").removeClass("active");
        $(".menu").show();
        $("#gb-top-page").show()
    });
    $(".item-ss").click(function() { $(".content-ss").toggleClass("active") });
    $(".btn-ss--close").click(function() { $(".content-ss").removeClass("active") });
    i = $(".jsfix").length > 0 ? $(".jsfix").offset().top + 30 : 0;
    $(window).scroll(function() { $(".jsfix").length > 0 && $(".onlymanu").length <= 0 && ($(this).scrollTop() > i ? ($(".jsfix").addClass("fixed"), closePopup(), $(".fixed .box-filter").length > 0 && (hasHorizontalScrollBar($(".fixed .box-filter")) == !1 ? $(".fixed .scroll-btn").hide() : $(".fixed .scroll-btn").show())) : ($(".jsfix").removeClass("fixed"), $(".fixed .scroll-btn").hide())) });
    setTimeout(function() {
        callLazy();
        countTotal();
        $(".total-reloading").html(document.TotalCount)
    }, 1e3);
    $(".txtnb-readmore").click(function(n) {
        n.preventDefault();
        $(".txtnb-readmore").fadeOut(100);
        $(".filter-list--hang .c-btnbox").hide().removeClass("hide").slideToggle();
        return
    });
    $(document).on("click", ".props a", function(n) {
        var i, t;
        (n.preventDefault(), $(this).hasClass("prevent")) || ($(this).parents(".props").find(".prop-minmax").length > 0 && ($(this).parents(".props").find(".prop-minmax input").each(function() { getOrRemoveRangeParamByName($(this), !0) }), i = $(this).parents(".props").find(".prop-minmax").attr("data-type"), $(".prop-minmax." + i).find(".container").slideUp(), $(".prop-minmax." + i).find(".range-toggle span").removeClass("down")), t = this.dataset.id, propsParams.indexOf(t) >= 0 ? (propsParams.splice(propsParams.indexOf(t), 1), $(".props a[data-id=" + t + "]").removeClass("check"), autoAddorRemoveFilterActive(this, null)) : (propsParams.push(t), $.unique(propsParams), $(".props a[data-id=" + t + "]").addClass("check"), autoAddorRemoveFilterActive(null, this)), $(this).parent().hasClass("props-child") ? ($(".sort-select-main").fadeOut(0), closePopup(), varFilterObj.isMore = !1, varFilterObj.isCallTotal = !0, varFilterObj.isViewNow = !0, filterPros(varFilterObj)) : (activeOrUnActiveBlock(), totalFilterPros()))
    });
    $(".price a").length > 0 && $(".price-slider").length > 0 && EventPriceRange();
    $(".props a").length > 0 && EventPropRange();
    $(".price a").click(function(n) {
        n.preventDefault();
        var t = this.dataset.id;
        $(".price-slider .container").slideUp();
        $(".price-slider .range-toggle span").removeClass("down");
        priceRangeParams !== "" && (priceRangeParams = "", resetPriceRange(), totalFilterPros());
        rangeParams.indexOf(t) >= 0 ? (rangeParams.splice(rangeParams.indexOf(t), 1), $(".price a[data-id=" + t + "]").removeClass("check"), autoAddorRemoveFilterActive(this, null)) : (rangeParams.push(t), $.unique(rangeParams), $(".price a[data-id=" + t + "]").addClass("check"), autoAddorRemoveFilterActive(null, this));
        activeOrUnActiveBlock();
        totalFilterPros()
    });
    $(".ft-sort ul li a.check").length > 0 && (ordersParams = parseInt($(".ft-sort ul li a.check").data("id")));
    $(".ft-sort ul li a").click(function(n) {
        var t, i;
        (n.preventDefault(), $("#preloader").is(":visible")) || (scrollByTag(".filter-cate"), t = this.dataset.id, $(".ft-sort ul li > a").removeClass("check"), $(this).addClass("check"), ordersParams = t, $(".ft-sort ul").hide(), i = $(this).find("span").text(), $(".ft-sort > a").text("Xáº¿p theo: " + i), varFilterObj.isCallTotal = !1, filterPros(varFilterObj))
    });
    $(".view-more a").click(function(n) {
        (n.preventDefault(), $(this).find(".bubblingG").length > 0) || (varFilterObj.e = this, varFilterObj.isMore = !0, filterPros(varFilterObj))
    });
    location.hash != "" && document.cateID !== undefined ? (n = location.hash.replace("#", ""), n != "" && callFilterFromHash(n), manuParams.length == 1 ? ($(".child-filter.hide").removeClass("hide"), $(".child-filter-outer.hide").removeClass("hide")) : ($(".child-filter").hasClass("hide") ? console.log("Ä‘Ă£ áº©n filter theo dĂ²ng") : $(".child-filter").addClass("hide"), $(".child-filter-outer").hasClass("hide") ? console.log("Ä‘Ă£ áº©n filter theo dĂ²ng á»Ÿ quicklink") : $(".child-filter-outer .single-prop").length <= 0 && $(".child-filter-outer").addClass("hide"))) : ($(".ft-cate a.active").each(function() { propsParams != null && propsParams.indexOf($(this).data("id").toString()) >= 0 || parseInt($(this).data("id")) > 0 && (propsParams.push($(this).data("id").toString()), $.unique(propsParams)) }), parseInt(document.manuActiveId) > 0 && manuParams.push(document.manuActiveId.toString()), hideShowClrFilter(), hideShowListActiveFilter());
    $("#paging").length > 0 && genPaging(document.TotalCount, document.pageSize, document.pageIndex);
    $(document).on("click", "#access-keyword", function() { isInitSuggestAccess || initSuggestAccess() });
    $(".searchacc").submit(function(n) {
        n.preventDefault();
        redirectSearchAccess(".searchacc")
    });
    $(".count-item").length > 0 ? $(".count-item").each(function(n, t) {
        $(".count-item").length <= 3 && $(".show-total-main .bg-whitefix").remove();
        (n + 1 + $(".show-full").length) % 3 == 0 && $(".count-item").length > 3 && $(t).after('<div class="filter-border"><\/div>')
    }) : $(".show-total-main .filter-border").remove();
    t = $("section[data-template]").data("template");
    t != null && LoadViewedHistory(t);
    AutoActiveBoxOther();
    LoadNewProductMergingByID();
    $(document).on("click", ".props-slider a", function() {
        $(this).remove();
        resetPropRangeLstFilterActive($(this).data("type"));
        return
    });
    $(document).on("click", ".another a[data-href=none]", function() { showPopupSS() });
    $(document).on("click", ".model-popup", function(n) { n.currentTarget == n.target && closePopupSS() });
    $(document).on("click", ".listing-cate .item a.main-contain", function() {
        var r = $(this).data("name"),
            u = $(this).data("id"),
            f = $(this).data("price"),
            e = $(this).data("brand"),
            o = $(this).data("cate"),
            t = "List product in category",
            n = $(this).parent().parent().parent().parent().parent().data("block"),
            i;
        n !== undefined && n != null && n != "" && (t = n);
        i = $(this).parent().data("pos");
        gtm_ProductClick(r, u, f, e, o, t, i)
    });
    $(".prods-group ul").each(function() { hasScrollBarWhatEver($(this)).horizontal && $(this).addClass("hasScroll") })
});
window.onpageshow = function(n) {
    console.log("onpageshow is calling...");
    n.persisted && (console.log("onpageshow is called"), $("#progressTop").remove(), $(".overlay").hide())
};
$(window).scroll(function() {
    $(".item img.lazy").length > 0 && callLazy();
    typeof idcompare != "undefined" && idcompare.length >= 2 && $(window).scrollTop() > 100 && ($(".compare-box").show("slow"), $("#notifychatmsg").length > 0 && $("#notifychatmsg").hide());
    $(".cate li .tip-abs").length > 0 && $(window).scrollTop() > 150 && showTipCompare()
});
previousRequest = "";
createCookie = function(n, t, i) {
    var u, r;
    i ? (r = new Date, r.setTime(r.getTime() + i * 864e5), u = "; expires=" + r.toGMTString()) : u = "";
    document.cookie = n + "=" + t + u + "; path=/"
};
let pageIndexAccessories = 0;
linkHashPKGenuine = "";
rangePriceSlider = document.getElementById("slider-range");
rangePriceSliderTotal = document.getElementById("slider-range-total");
const minval = $("input[name='price-min-value']").length > 0 ? parseInt($("input[name='price-min-value']").attr("data-minvalue")) / 1e3 : 0,
    maxval = $("input[name='price-max-value']").length > 0 ? parseInt($("input[name='price-max-value']").attr("data-maxvalue")) / 1e3 : 0,
    isTivi = document.cateID == "1942";
$(window).on("hashchange", function() {
    (location.pathname.replace("/", "") == "gia-dung" || location.pathname.replace("/", "") == "do-dung-gia-dinh") && AutoActiveBoxOther()
});
jQuery.fn.hasScrollBarDoc = function() { return this.get(0) === undefined || this.get(0) == null ? !1 : this.get(0).scrollHeight > this.innerHeight() };