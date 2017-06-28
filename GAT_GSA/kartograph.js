! function() {
    function t() {
        var t = {},
            e = [],
            n = 1,
            o = 1;
        return t.size = function(r) {
            return arguments.length ? (o = r, t) : o
        }, t.iterations = function(r) {
            return arguments.length ? (n = r, t) : n
        }, t.add = function(r) {
            return e.push(r), t
        }, t.means = function() {
            for (var t = [], a = {}, i = Math.min(o, e.length), s = 0, l = 2 * i; l > s; s++) {
                var u = e[~~(Math.random() * e.length)],
                    p = u.x + "/" + u.y;
                if (!(p in a) && (a[p] = 1, t.push({
                        x: u.x,
                        y: u.y
                    }) >= i)) break
            }
            i = t.length;
            for (var h = 0; n > h; h++) {
                for (var c = r().points(t), s = 0; i > s; s++) {
                    var f = t[s];
                    f.sumX = 0, f.sumY = 0, f.size = 0, f.points = [], f.indices = []
                }
                for (var s = 0; s < e.length; s++) {
                    var d = e[s],
                        f = c.find(d);
                    f.sumX += d.x, f.sumY += d.y, f.size++, f.points.push(d), f.indices.push(s)
                }
                for (var s = 0; i > s; s++) {
                    var f = t[s];
                    f.size && (f.x = f.sumX / f.size, f.y = f.sumY / f.size)
                }
            }
            return t
        }, t
    }

    function r() {
        function t(r, n) {
            if (r.length) {
                var o = i[n % i.length],
                    a = r.length >> 1;
                return r.sort(e(o)), {
                    axis: o,
                    point: r[a],
                    left: t(r.slice(0, a), n + 1),
                    right: t(r.slice(a + 1), n + 1)
                }
            }
        }

        function r(t, r) {
            for (var e = 0, n = 0; n < i.length; n++) {
                var o = i[n],
                    a = t[o] - r[o];
                e += a * a
            }
            return e
        }

        function e(t) {
            return function(r, e) {
                return r = r[t], e = e[t], e > r ? -1 : r > e ? 1 : 0
            }
        }

        function n(t, e, o) {
            if (r(t.point, e) < r(o.point, e) && (o = t), t.left && (o = n(t.left, e, o)), t.right) {
                var a = t.point[t.axis] - e[t.axis];
                a * a < r(o.point, e) && (o = n(t.right, e, o))
            }
            return o
        }
        var o, a = {},
            i = ["x", "y"],
            s = [];
        return a.axes = function(t) {
            return arguments.length ? (i = t, a) : i
        }, a.points = function(t) {
            return arguments.length ? (s = t, o = null, a) : s
        }, a.find = function(t) {
            return n(a.root(), t, o).point
        }, a.root = function() {
            return o || (o = t(s, 0))
        }, a
    }
    var e, n, o, a, i, l, u, p, h, c, f, d, y, v, g, _, b, x, w, M, P, j, C, A, k, S, L, B, I, N, G, z, E, T, R, F, V, O, H, q, X, D, U, Q, Y, W, Z, $, K, J, tr, rr, er, nr, or, ar, ir, sr, lr, ur, pr, hr, cr, fr, dr, yr, vr, mr, gr, _r, br, xr, wr, Mr, Pr, jr, Cr, Ar, kr, Sr, Lr, Br, Ir, Nr, Gr, zr, Er, Tr, Rr, Fr, Vr, Or, Hr, qr, Xr, Dr, Ur, Qr, Yr, Wr, Zr, $r, Kr, Jr, te, re, ee, ne, oe, ae, ie, se, le, ue, pe = {}.hasOwnProperty,
        he = function(t, r) {
            function e() {
                this.constructor = t
            }
            for (var n in r) pe.call(r, n) && (t[n] = r[n]);
            return e.prototype = r.prototype, t.prototype = new e, t.__super__ = r.prototype, t
        },
        ce = function(t, r) {
            return function() {
                return t.apply(r, arguments)
            }
        },
        fe = [].indexOf || function(t) {
            for (var r = 0, e = this.length; e > r; r++)
                if (r in this && this[r] === t) return r;
            return -1
        };
    Nr = "undefined" != typeof exports && null !== exports ? exports : this, Pr = Nr.$K = null != (qr = Nr.kartograph) ? qr : Nr.kartograph = {}, Pr.version = "0.8.7", e = Nr.jQuery, Pr.__verbose = !1, Er = function() {
        var t;
        try {
            return console.warn.apply(console, arguments)
        } catch (r) {
            t = r;
            try {
                return opera.postError.apply(opera, arguments)
            } catch (r) {
                return t = r, alert(Array.prototype.join.call(arguments, " "))
            }
        }
    }, jr = function() {
        var t;
        if (Pr.__verbose) try {
            return console.debug.apply(console, arguments)
        } catch (r) {
            t = r;
            try {
                return opera.postError.apply(opera, arguments)
            } catch (r) {
                return t = r, alert(Array.prototype.join.call(arguments, " "))
            }
        }
    }, null == (Xr = (Or = String.prototype).trim) && (Or.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
        "use strict";
        if (null == this) throw new TypeError;
        var r = Object(this),
            e = r.length >>> 0;
        if (0 === e) return -1;
        var n = 0;
        if (arguments.length > 0 && (n = Number(arguments[1]), n != n ? n = 0 : 0 != n && 1 / 0 != n && n != -1 / 0 && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= e) return -1;
        for (var o = n >= 0 ? n : Math.max(e - Math.abs(n), 0); e > o; o++)
            if (o in r && r[o] === t) return o;
        return -1
    }), Vr = function() {
        var t, r, e, n, o;
        for (t = {}, o = "Boolean Number String Function Array Date RegExp Undefined Null".split(" "), e = 0, n = o.length; n > e; e++) r = o[e], t["[object " + r + "]"] = r.toLowerCase();
        return function(r) {
            var e;
            return e = Object.prototype.toString.call(r), t[e] || "object"
        }
    }(), a = function() {
        function t(t, r, e, n) {
            var o;
            null == t && (t = 0), null == r && (r = 0), null == e && (e = null), null == n && (n = null), o = this, null === e ? (o.xmin = Number.MAX_VALUE, o.xmax = -1 * Number.MAX_VALUE) : (o.xmin = o.left = t, o.xmax = o.right = t + e, o.width = e), null === n ? (o.ymin = Number.MAX_VALUE, o.ymax = -1 * Number.MAX_VALUE) : (o.ymin = o.top = r, o.ymax = o.bottom = n + r, o.height = n)
        }
        return t.prototype.update = function(t, r) {
            var e;
            return null == r && (r = t[1], t = t[0]), e = this, e.xmin = Math.min(e.xmin, t), e.ymin = Math.min(e.ymin, r), e.xmax = Math.max(e.xmax, t), e.ymax = Math.max(e.ymax, r), e.left = e.xmin, e.top = e.ymin, e.right = e.xmax, e.bottom = e.ymax, e.width = e.xmax - e.xmin, e.height = e.ymax - e.ymin, this
        }, t.prototype.intersects = function(t) {
            return t.left < s.right && t.right > s.left && t.top < s.bottom && t.bottom > s.top
        }, t.prototype.inside = function(t, r) {
            var e;
            return e = this, t >= e.left && t <= e.right && r >= e.top && r <= e.bottom
        }, t.prototype.join = function(t) {
            var r;
            return r = this, r.update(t.left, t.top), r.update(t.right, t.bottom), this
        }, t
    }(), a.fromXML = function(t) {
        var r, e, n, o;
        return n = Number(t.getAttribute("x")), o = Number(t.getAttribute("y")), e = Number(t.getAttribute("w")), r = Number(t.getAttribute("h")), new a(n, o, e, r)
    }, Pr.BBox = a, null == (re = Pr.geom) && (Pr.geom = {}), null == (ne = (Hr = Pr.geom).clipping) && (Hr.clipping = {}), d = function() {
        function t() {}
        var r, e, n, o, a;
        return e = 0, n = 1, o = 2, r = 4, a = 8, t.prototype.compute_out_code = function(t, r, e) {
            var n, o;
            return o = this, n = o.INSIDE, r < t.left ? n |= o.LEFT : r > t.right && (n |= o.RIGHT), e < t.top ? n |= o.TOP : e > t.bottom && (n |= o.BOTTOM), n
        }, t.prototype.clip = function(t, r, e, n, o) {
            var a, i, s, l, u, p, h;
            for (u = this, i = u.compute_out_code(t, r, e), s = u.compute_out_code(t, n, o), a = False; True;) {
                if (!(i | s)) {
                    a = True;
                    break
                }
                if (i & s) break;
                l = 0 === code ? s : i, l & u.TOP ? (p = r + (n - r) * (t.top - e) / (o - e), h = t.top) : l & u.BOTTOM ? (p = r + (n - r) * (t.bottom - e) / (o - e), h = t.bottom) : l & u.RIGHT ? (h = e + (o - e) * (t.right - r) / (n - r), p = t.right) : l & u.LEFT && (h = e + (o - e) * (t.left - r) / (n - r), p = t.left), l === i ? (r = p, e = h, i = u.compute_out_code(t, r, e)) : (n = p, o = h, s = u.compute_out_code(t, n, o))
            }
            return a ? [r, e, n, o] : null
        }, t
    }(), Pr.geom.clipping.CohenSutherland = d, L = function() {
        function t(t, r, n) {
            var o, a;
            a = this, a.container = o = e(t), null == r && (r = o.width()), null == n && (n = o.height()), 0 === n && (n = "auto"), a.size = {
                h: n,
                w: r
            }, a.markers = [], a.pathById = {}, a.container.addClass("kartograph")
        }
        return t.prototype.createSVGLayer = function(t) {
            var r, n, o, a, i, s, l, u;
            return a = this, null == (u = a._layerCnt) && (a._layerCnt = 0), o = a._layerCnt++, l = a.viewport, n = a.container, i = Raphael(n[0], l.width, l.height), s = e(i.canvas), s.css({
                position: "absolute",
                top: "0px",
                left: "0px",
                "z-index": o + 5
            }), "static" === n.css("position") && n.css({
                position: "relative",
                height: l.height + "px"
            }), s.addClass(t), r = e("desc", i.canvas).text(), e("desc", i.canvas).text(r.replace("with ", "with kartograph " + Pr.version + " and ")), i
        }, t.prototype.createHTMLLayer = function(t) {
            var r, n, o, a, i, s;
            return a = this, i = a.viewport, r = a.container, null == (s = a._layerCnt) && (a._layerCnt = 0), o = a._layerCnt++, n = e('<div class="layer ' + t + '" />'), n.css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: i.width + "px",
                height: i.height + "px",
                "z-index": o + 5
            }), r.append(n), n
        }, t.prototype.load = function(t, r, n) {
            var o, a, i, s;
            return a = this, o = e.Deferred(), a.clear(), a.opts = null != n ? n : {}, null == (s = (i = a.opts).zoom) && (i.zoom = 1), a.mapLoadCallback = r, a._loadMapDeferred = o, a._lastMapUrl = t, a.cacheMaps && null != Pr.__mapCache[t] ? a._mapLoaded(Pr.__mapCache[t]) : e.ajax({
                url: t,
                dataType: "text",
                success: a._mapLoaded,
                context: a,
                error: function(t, r, e) {
                    return Er(t, r, e)
                }
            }), o.promise()
        }, t.prototype.loadMap = function() {
            return this.load.apply(this, arguments)
        }, t.prototype.setMap = function(t, r) {
            var e, n, o;
            e = this, e.opts = null != r ? r : {}, null == (o = (n = e.opts).zoom) && (n.zoom = 1), e._lastMapUrl = "string", e._mapLoaded(t)
        }, t.prototype._mapLoaded = function(t) {
            var r, n, o, i, s, l, u, p, h, c, f, d, y, v, m, g, _;
            l = this, l.cacheMaps && (null == (y = Pr.__mapCache) && (Pr.__mapCache = {}), Pr.__mapCache[l._lastMapUrl] = t);
            try {
                t = e(t)
            } catch (b) {
                return o = b, Er("something went horribly wrong while parsing svg"), l._loadMapDeferred.reject("could not parse svg"), void 0
            }
            l.svgSrc = t, r = e("view", t), null == l.paper && (f = l.size.w, i = l.size.h, "auto" === i && (p = r.attr("w") / r.attr("h"), i = f / p), l.viewport = new a(0, 0, f, i)), c = l.viewport, l.viewAB = n = vr.fromXML(r[0]), u = null != (v = l.opts.padding) ? v : 0, s = null != (m = l.opts.halign) ? m : "center", h = null != (g = l.opts.valign) ? g : "center", d = null != (_ = l.opts.zoom) ? _ : 1, l.viewBC = new vr(l.viewAB.asBBox(), c.width * d, c.height * d, u, s, h), l.proj = Pr.Proj.fromXML(e("proj", r)[0]), null != l.mapLoadCallback && l.mapLoadCallback(l), null != l._loadMapDeferred && l._loadMapDeferred.resolve(l)
        }, t.prototype.addLayer = function(t, r) {
            var n, o, a, i, s, l, u, p, h, c, f, d, y, v, m, g, _;
            return null == r && (r = {}), u = this, null == (m = u.layerIds) && (u.layerIds = []), null == (g = u.layers) && (u.layers = {}), null == u.paper && (u.paper = u.createSVGLayer()), d = t, "object" === Vr(r) ? (s = r.name, c = r.key, v = r.title) : r = {}, l = u.paper, r.add_svg_layer && (l = u.createSVGLayer()), null == s && (s = d), y = e("#" + d, u.svgSrc), 0 !== y.length ? (i = new q(s, c, u, r.filter, l), n = e("*", y[0]), f = n.length, o = null != (_ = r.chunks) ? _ : f, a = 0, h = function() {
                var t, e, s, l, u, c;
                for (t = o * a, e = u = 0; o >= 0 ? o > u : u > o; e = o >= 0 ? ++u : --u) f > t + e && i.addPath(n.get(t + e), v);
                if (null != r.styles) {
                    c = r.styles;
                    for (s in c) l = c[s], i.style(s, l)
                }
                return a++, f > a * o ? setTimeout(h, 0) : p()
            }, p = function() {
                var t, e, n, o;
                for (i.paths.length > 0 && (u.layers[s] = i, u.layerIds.push(s)), t = ["click", "mouseenter", "mouseleave", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout"], n = 0, o = t.length; o > n; n++) e = t[n], "function" === Vr(r[e]) && i.on(e, r[e]);
                return null != r.tooltips && i.tooltips(r.tooltips), null != r.done ? r.done() : void 0
            }, null != r.chunks ? setTimeout(h, 0) : h(), u) : void 0
        }, t.prototype.getLayer = function(t) {
            var r;
            return r = this, null == r.layers[t] ? (Er("could not find layer " + t), null) : r.layers[t]
        }, t.prototype.getLayerPath = function(t, r) {
            var e, n;
            return n = this, e = n.getLayer(t), null != e ? "object" === Vr(r) ? e.getPaths(r)[0] : e.getPath(r) : null
        }, t.prototype.onLayerEvent = function(t, r, e) {
            var n;
            return n = this, n.getLayer(e).on(t, r), n
        }, t.prototype.addMarker = function(t) {
            var r, e;
            return r = this, r.markers.push(t), e = r.viewBC.project(r.viewAB.project(r.proj.project(t.lonlat.lon, t.lonlat.lat))), t.render(e[0], e[1], r.container, r.paper)
        }, t.prototype.clearMarkers = function() {
            var t, r, e, n, o;
            for (r = this, o = r.markers, e = 0, n = o.length; n > e; e++) t = o[e], t.clear();
            return r.markers = []
        }, t.prototype.fadeIn = function(t) {
            var r, e, n, o, a, i, s, l, u, p, h;
            null == t && (t = {}), a = this, o = null != (l = t.layer) ? l : a.layerIds[a.layerIds.length - 1], e = null != (u = t.duration) ? u : 500, p = a.layers[o].pathsById, h = [];
            for (n in p) s = p[n], h.push(function() {
                var t, n, o;
                for (o = [], t = 0, n = s.length; n > t; t++) i = s[t], r = "function" === Vr(e) ? e(i.data) : e, i.svgPath.attr("opacity", 0), o.push(i.svgPath.animate({
                    opacity: 1
                }, r));
                return o
            }());
            return h
        }, t.prototype.loadCoastline = function() {
            var t;
            return t = this, e.ajax({
                url: "coastline.json",
                success: t.renderCoastline,
                context: t
            })
        }, t.prototype.resize = function(t, r) {
            var e, n, o, i, s, l, u, p, h, c, f, d, y, v, m, g, _, b;
            s = this, e = s.container, null == t && (t = e.width()), null == r && (r = e.height()), s.viewport = h = new a(0, 0, t, r), null != s.paper && s.paper.setSize(h.width, h.height), y = s.layers;
            for (o in y) i = y[o], null != i.paper && i.paper !== s.paper && i.paper.setSize(h.width, h.height);
            l = null != (v = s.opts.padding) ? v : 0, n = null != (m = s.opts.halign) ? m : "center", p = null != (g = s.opts.valign) ? g : "center", c = s.opts.zoom, s.viewBC = new vr(s.viewAB.asBBox(), h.width * c, h.height * c, l, n, p), _ = s.layers;
            for (o in _) i = _[o], i.setView(s.viewBC);
            if (null != s.symbolGroups)
                for (b = s.symbolGroups, f = 0, d = b.length; d > f; f++) u = b[f], u.onResize()
        }, t.prototype.lonlat2xy = function(t) {
            var r, e;
            return e = this, 2 === t.length && (t = new O(t[0], t[1])), 3 === t.length && (t = new O(t[0], t[1], t[2])), r = e.proj.project(t.lon, t.lat, t.alt), e.viewBC.project(e.viewAB.project(r))
        }, t.prototype.addSymbolGroup = function(t) {
            var r, e;
            return r = this, null == (e = r.symbolGroups) && (r.symbolGroups = []), r.symbolGroups.push(t)
        }, t.prototype.removeSymbols = function(t) {
            var r, e, n, o, a, i;
            if (r = this, null != t) return r.symbolGroups[t].remove();
            for (a = r.symbolGroups, i = [], n = 0, o = a.length; o > n; n++) e = a[n], i.push(e.remove());
            return i
        }, t.prototype.clear = function() {
            var t, r, n, o, a, i;
            if (r = this, null != r.layers) {
                for (t in r.layers) r.layers[t].remove();
                r.layers = {}, r.layerIds = []
            }
            if (null != r.symbolGroups) {
                for (i = r.symbolGroups, o = 0, a = i.length; a > o; o++) n = i[o], n.remove();
                r.symbolGroups = []
            }
            return null != r.paper ? (e(r.paper.canvas).remove(), r.paper = void 0) : void 0
        }, t.prototype.loadCSS = function(t, r) {
            var n;
            return n = this, Raphael.svg ? (e("body").append('<link rel="stylesheet" href="' + t + '" />'), r()) : e.ajax({
                url: t,
                dataType: "text",
                success: function(t) {
                    return n.styles = Pr.parsecss(t), r()
                },
                error: function(r, e, n) {
                    return Er("error while loading " + t, r, e, n)
                }
            })
        }, t.prototype.applyCSS = function(t, r) {
            var e, n, o, a, i, s, l, u, p, h, c, f, d, y, v;
            if (o = this, null == o.styles) return t;
            null == (f = o._pathTypes) && (o._pathTypes = ["path", "circle", "rectangle", "ellipse"]), null == (d = o._regardStyles) && (o._regardStyles = ["fill", "stroke", "fill-opacity", "stroke-width", "stroke-opacity"]);
            for (s in o.styles)
                for (a = s, y = a.split(","), u = 0, h = y.length; h > u; u++)
                    if (l = y[u], a = l.split(" "), a = a[a.length - 1], a = a.split(":"), !(a.length > 1 || (a = a[0].split("."), e = a.slice(1), e.length > 0 && e.indexOf(r) < 0 || (a = a[0], o._pathTypes.indexOf(a) >= 0 && a !== t.type))))
                        for (i = o.styles[s], v = o._regardStyles, p = 0, c = v.length; c > p; p++) n = v[p], null != i[n] && t.attr(n, i[n]);
            return t
        }, t.prototype.style = function(t, r, e, n, o) {
            var a;
            return a = this, t = a.getLayer(t), null != t ? t.style(r, e, n, o) : void 0
        }, t
    }(), S = Pr, Nr.kartograph = function(t, r, e) {
        return new L(t, r, e)
    }, Pr.map = function(t, r, e) {
        return new L(t, r, e)
    }, Pr.__mapCache = {}, e.extend(Nr.kartograph, S), O = function() {
        function t(t, r, e) {
            null == e && (e = 0), this.lon = Number(t), this.lat = Number(r), this.alt = Number(e)
        }
        return t.prototype.distance = function(t) {
            var r, e, n, o, a, i, s, l, u;
            return u = this, r = 6371, i = Math.PI / 180, o = (t.lat - u.lat) * i, a = (t.lon - u.lon) * i, s = u.lat * i, l = t.lat * i, e = Math.sin(o / 2) * Math.sin(o / 2) + Math.sin(a / 2) * Math.sin(a / 2) * Math.cos(s) * Math.cos(l), n = 2 * Math.atan2(Math.sqrt(e), Math.sqrt(1 - e)), r * n
        }, t
    }(), T = function(t) {
        function r(t, e, n) {
            null == n && (n = 0), r.__super__.constructor.call(this, e, t, n)
        }
        return he(r, t), r
    }(O), Nr.kartograph.LonLat = O, Nr.kartograph.LatLon = T, q = function() {
        function t(t, r, e, n, o) {
            var a;
            a = this, a.id = t, a.path_id = r, a.paper = null != o ? o : e.paper, a.view = e.viewBC, a.map = e, a.filter = n
        }
        return t.prototype.addPath = function(t, r) {
            var e, n, o, a, i, s, l;
            return n = this, null == (i = n.paths) && (n.paths = []), e = new X(t, n.id, n, r), "function" === Vr(n.filter) && n.filter(e.data) === !1 ? (e.remove(), void 0) : (n.paths.push(e), null != n.path_id ? (null == (s = n.pathsById) && (n.pathsById = {}), null == (l = (o = n.pathsById)[a = e.data[n.path_id]]) && (o[a] = []), n.pathsById[e.data[n.path_id]].push(e)) : void 0)
        }, t.prototype.hasPath = function(t) {
            var r;
            return r = this, null != r.pathsById && null != r.pathsById[t]
        }, t.prototype.getPathsData = function() {
            var t, r, e, n, o, a;
            for (t = this, e = [], a = t.paths, n = 0, o = a.length; o > n; n++) r = a[n], e.push(r.data);
            return e
        }, t.prototype.getPath = function(t) {
            var r;
            return r = this, r.hasPath(t) ? r.pathsById[t][0] : null
        }, t.prototype.getPaths = function(t) {
            var r, e, n, o, a, i, s, l;
            if (o = this, n = [], "object" === Vr(t))
                for (l = o.paths, i = 0, s = l.length; s > i; i++) {
                    a = l[i], e = !0;
                    for (r in t) e = e && a.data[r] === t[r];
                    e && n.push(a)
                }
            return n
        }, t.prototype.setView = function(t) {
            var r, e, n, o, a;
            for (r = this, a = r.paths, n = 0, o = a.length; o > n; n++) e = a[n], e.setView(t);
            return r
        }, t.prototype.remove = function() {
            var t, r, e, n, o, a;
            for (t = this, o = t.paths, a = [], e = 0, n = o.length; n > e; e++) r = o[e], a.push(r.remove());
            return a
        }, t.prototype.style = function(t, r, n, o) {
            var a, i;
            return i = this, "string" === Vr(t) ? (a = t, t = {}, t[a] = r) : "object" === Vr(t) && (o = n, n = r), null == n && (n = 0), e.each(i.paths, function(r, e) {
                var a, i, s, l, u, p;
                i = {};
                for (u in t) p = t[u], i[u] = Br(p, e.data);
                return l = Br(n, e.data), s = Br(o, e.data), null == s && (s = 0), l > 0 ? (a = Raphael.animation(i, 1e3 * l), e.svgPath.animate(a.delay(1e3 * s))) : 0 === o ? setTimeout(function() {
                    return e.svgPath.attr(i)
                }, 0) : e.svgPath.attr(i)
            }), i
        }, t.prototype.on = function(t, r) {
            var n, o, a, i, s, l, u;
            for (a = this, n = function() {
                    function t(t, r, e) {
                        this.type = t, this.cb = r, this.layer = e, this.handle = ce(this.handle, this)
                    }
                    return t.prototype.handle = function(t) {
                        var r;
                        return a = this, r = a.layer.map.pathById[t.target.getAttribute("id")], a.cb(r.data, r.svgPath, t)
                    }, t
                }(), o = new n(t, r, a), u = a.paths, s = 0, l = u.length; l > s; s++) i = u[s], e(i.svgPath.node).bind(t, o.handle);
            return a
        }, t.prototype.tooltips = function(t, r) {
            var n, o, a, i, s, l, u;
            for (n = this, a = function(t, n) {
                    var o;
                    return o = {
                        position: {
                            target: "mouse",
                            viewport: e(window),
                            adjust: {
                                x: 7,
                                y: 7
                            }
                        },
                        show: {
                            delay: null != r ? r : 20
                        },
                        events: {
                            show: function(t, r) {
                                return e(".qtip").filter(function() {
                                    return this !== r.elements.tooltip.get(0)
                                }).hide()
                            }
                        },
                        content: {}
                    }, null != n ? "string" == typeof n ? o.content.text = n : e.isArray(n) && (o.content.title = n[0], o.content.text = n[1]) : o.content.text = "n/a", e(t.svgPath.node).qtip(o)
                }, u = n.paths, s = 0, l = u.length; l > s; s++) o = u[s], i = Br(t, o.data), a(o, i);
            return n
        }, t.prototype.sort = function(t) {
            var r, e, n, o, a, i;
            for (e = this, e.paths.sort(function(r, e) {
                    var n, o, a;
                    return n = t(r.data), o = t(e.data), n === o ? 0 : null != (a = n > o) ? a : {
                        1: -1
                    }
                }), r = !1, i = e.paths, o = 0, a = i.length; a > o; o++) n = i[o], r && n.svgPath.insertAfter(r.svgPath), r = n;
            return e
        }, t
    }(), Br = function(t, r) {
        return "function" === Vr(t) ? t(r) : t
    }, Cr = 0, X = function() {
        function t(t, r, e, n) {
            var o, a, i, s, l, u, p, h, c, f, d, y, v, m;
            for (l = this, u = e.paper, s = e.map, d = s.viewBC, l.path = p = Pr.geom.Path.fromSVG(t), l.vpath = d.projectPath(p), l.svgPath = l.vpath.toSVG(u), l.svgPath.data("path", l), null == s.styles ? Raphael.svg && l.svgPath.node.setAttribute("class", r) : s.applyCSS(l.svgPath, r), c = "path_" + Cr++, l.svgPath.node.setAttribute("id", c), s.pathById[c] = l, a = {}, i = v = 0, m = t.attributes.length - 1; m >= 0 ? m >= v : v >= m; i = m >= 0 ? ++v : --v) o = t.attributes[i], "data-" === o.name.substr(0, 5) && (f = o.value, y = Number(f), "" === f.trim() || y !== f || isNaN(y) || (f = y), a[o.name.substr(5)] = f);
            l.data = a, "string" === Vr(n) ? h = n : "function" === Vr(n) && (h = n(a)), null != h && l.svgPath.attr("title", h)
        }
        return t.prototype.setView = function(t) {
            var r, e, n;
            return r = this, e = t.projectPath(r.path), r.vpath = e, "path" === r.path.type ? (n = e.svgString(), r.svgPath.attr({
                path: n
            })) : "circle" === r.path.type ? r.svgPath.attr({
                cx: e.x,
                cy: e.y,
                r: e.r
            }) : void 0
        }, t.prototype.remove = function() {
            var t;
            return t = this, t.svgPath.remove()
        }, t
    }(), Pr.parsecss = function(t, r) {
        var e, n, o, a, i, s, l, u;
        for (a = {}, t = Ar(t), u = t.split("`b%"), s = 0, l = u.length; l > s; s++)
            if (e = u[s], e = e.split("%b`"), !(e.length < 2))
                if (e[0] = Ir(e[0]), o = Sr(e[1]), null != a[e[0]])
                    for (n in o) i = o[n], a[e[0]][n] = i;
                else a[e[0]] = o;
        return "function" !== Vr(r) ? a : (r(a), void 0)
    }, kr = {}, Sr = function(t) {
        var r, e, n, o, a, i;
        for (n = kr[t].replace(/^{|}$/g, ""), n = Ar(n), e = {}, i = n.split(";"), o = 0, a = i.length; a > o; o++) r = i[o], r = r.split(":"), r.length < 2 || (e[Ir(r[0])] = Ir(r.slice(1).join(":")));
        return e
    }, er = /{[^{}]*}/, or = /\[[^\[\]]*\]|{[^{}]*}|\([^()]*\)|function(\s+\w+)?(\s*%b`\d+`b%){2}/, nr = /(?:\/\*(?:[^\*]|\*[^\/])*\*\/)|(\\.|"(?:[^\\\"]|\\.|\\\n)*"|'(?:[^\\\']|\\.|\\\n)*')/g, ar = /%\w`(\d+)`\w%/, zr = 0, Ar = function(t, r) {
        var e, n, o;
        for (t = t.replace(nr, function(t, r) {
                var e;
                return r ? (e = "%s`" + ++zr + "`s%", kr[zr] = r.replace(/^\\/, ""), e) : ""
            }), e = r ? or : er; n = e.exec(t);) o = "%b`" + ++zr + "`b%", kr[zr] = n[0], t = t.replace(e, o);
        return t
    }, Ir = function(t) {
        var r;
        if (null == t) return t;
        for (; r = ar.exec(t);) t = t.replace(ar, kr[r[1]]);
        return t.trim()
    }, wr = null != (oe = Pr.geom) ? oe : Pr.geom = {}, Z = function() {
        function t(t, r, e) {
            var n, o, a, i;
            for (null == e && (e = !0), o = this, o.type = t, o.contours = [], a = 0, i = r.length; i > a; a++) n = r[a], Rr(n) || n.reverse(), o.contours.push(n);
            o.closed = e
        }
        return t.prototype.clipToBBox = function() {
            throw "path clipping is not implemented yet"
        }, t.prototype.toSVG = function(t) {
            var r;
            return r = this.svgString(), t.path(r)
        }, t.prototype.svgString = function() {
            var t, r, e, n, o, a, i, s, l, u, p, h, c;
            for (n = this, o = "", e = n.closed ? "Z M" : "M", h = n.contours, s = 0, u = h.length; u > s; s++)
                for (t = h[s], r = !0, o += "" === o ? "M" : e, l = 0, p = t.length; p > l; l++) c = t[l], a = c[0], i = c[1], r || (o += "L"), o += a + "," + i, r = !1;
            return n.closed && (o += "Z"), o
        }, t.prototype.area = function() {
            var t, r, e, n, o, a;
            if (e = this, null != e.areas) return e._area;
            for (e.areas = [], e._area = 0, a = e.contours, n = 0, o = a.length; o > n; n++) r = a[n], t = Tr(r), e.areas.push(t), e._area += t;
            return e._area
        }, t.prototype.centroid = function() {
            var t, r, e, n, o, a, i, s, l, u, p, h, c, f, d, y, v, m, g, _, b, x, w, M, P, j, C, A, k, S, L, B, I, N, G, z, E;
            if (y = this, null != y._centroid) return y._centroid;
            for (e = y.area(), a = i = 0, p = C = 0, I = y.contours.length - 1; I >= 0 ? I >= C : C >= I; p = I >= 0 ? ++C : --C)
                if (o = y.contours[p], n = [], f = o.length, r = y.areas[p], c = r / e, 0 !== c) {
                    for (h = A = 0, N = f - 1; N >= 0 ? N >= A : A >= N; h = N >= 0 ? ++A : --A)
                        if (v = o[h], m = o[(h + 1) % f], s = 0, n.push(v), v[0] === m[0] && (s = Math.abs(v[1] - m[1])), v[1] === m[1] && (s = Math.abs(v[0] - m[0])), s > 10)
                            for (t = Math.floor(2 * s), g = k = 1, G = t - 1; G >= 1 ? G >= k : k >= G; g = G >= 1 ? ++k : --k) _ = [v[0] + g / t * (m[0] - v[0]), v[1] + g / t * (m[1] - v[1])], n.push(_);
                    for (w = P = M = j = 0, f = n.length, L = [], b = 0, h = S = 0, z = f - 1; z >= 0 ? z >= S : S >= z; h = z >= 0 ? ++S : --S) v = n[h], m = n[(h + 1) % f], l = m[0] - v[0], u = m[1] - v[1], d = Math.sqrt(l * l + u * u), L.push(d), b += d;
                    for (h = B = 0, E = f - 1; E >= 0 ? E >= B : B >= E; h = E >= 0 ? ++B : --B) v = n[h], x = L[h] / b, w += x * v[0], P += x * v[1];
                    a += w * c, i += P * c
                }
            return y._centroid = [a, i], y._centroid
        }, t.prototype.isInside = function(t, r) {
            var e, n, o, a, i, s;
            if (a = this, e = a._bbox, t < e[0] || t > e[2] || r < e[1] || r > e[3]) return !1;
            for (o = i = 0, s = a.contours.length - 1; s >= 0 ? s >= i : i >= s; o = s >= 0 ? ++i : --i)
                if (n = a.contours[o], Fr(n, [t, r])) return !0;
            return !1
        }, t
    }(), Pr.geom.Path = Z, f = function(t) {
        function r(t, e, n) {
            this.x = t, this.y = e, this.r = n, r.__super__.constructor.call(this, "circle", null, !0)
        }
        return he(r, t), r.prototype.toSVG = function(t) {
            var r;
            return r = this, t.circle(r.x, r.y, r.r)
        }, r.prototype.centroid = function() {
            var t;
            return t = this, [t.x, t.y]
        }, r.prototype.area = function() {
            var t;
            return t = this, Math.PI * t.r * m.r
        }, r
    }(Z), Pr.geom.Circle = f, Z.fromSVG = function(t) {
        var r, e, n, o, a, i, s, l, u, p, h, c, f, d;
        if (o = [], c = t.nodeName, p = null, "path" === c) {
            for (l = t.getAttribute("d").trim(), s = Raphael.parsePathString(l), r = "Z" === s[s.length - 1], h = r ? "Z M" : "M", n = [], f = 0, d = s.length; d > f; f++) e = s[f], 0 !== e.length && ("M" === e[0] ? (n.length > 2 && (o.push(n), n = []), n.push([e[1], e[2]])) : "L" === e[0] ? n.push([e[1], e[2]]) : "Z" === e[0] && n.length > 2 && (o.push(n), n = []));
            n.length >= 2 && (o.push(n), n = []), p = new wr.Path(c, o, r)
        } else "circle" === c && (a = t.getAttribute("cx"), i = t.getAttribute("cy"), u = t.getAttribute("r"), p = new wr.Circle(a, i, u));
        return p
    }, R = function() {
        function t(t) {
            this.points = t
        }
        return t.prototype.clipToBBox = function(r) {
            var e, n, o, a, i, s, l, u, p, h, c, f, d, y, v, m, g, _, b, x;
            for (c = this, e = (new wr.clipping.CohenSutherland).clip, h = [], i = [], a = !1, o = m = 0, g = c.points.length - 2; g >= 0 ? g >= m : m >= g; o = g >= 0 ? ++m : --m) {
                _ = c.points[o], s = _[0], l = _[1], b = c.points[o + 1], u = b[0], p = b[1];
                try {
                    x = e(r, s, l, u, p), f = x[0], y = x[1], d = x[2], v = x[3], a = !0, h.push([f, y]), (u !== d || p !== y || o === len(c.points) - 2) && h.push([d, v])
                } catch (w) {
                    n = w, a && h.length > 1 && (i.push(new t(h)), h = []), a = !1
                }
            }
            return h.length > 1 && i.push(new t(h)), i
        }, t.prototype.toSVG = function() {
            var t, r, e, n, o, a, i, s;
            for (r = this, t = [], i = r.points, o = 0, a = i.length; a > o; o++) s = i[o], e = s[0], n = s[1], t.push(e + "," + n);
            return "M" + t.join("L")
        }, t
    }(), Pr.geom.Line = R, Fr = function(t, r) {
        var e, n, o, a, i, s, l, u, p, h, c, f, d, y, v;
        for (s = Math.PI, n = Math.atan2, p = 2 * s, i = t.length, e = 0, a = y = 0, v = i - 1; v >= 0 ? v >= y : y >= v; a = v >= 0 ? ++y : --y) {
            for (h = t[a][0] - r[0], f = t[a][1] - r[1], c = t[(a + 1) % i][0] - r[0], d = t[(a + 1) % i][1] - r[1], l = n(f, h), u = n(d, c), o = u - l; o > s;) o -= p;
            for (; - s > o;) o += p;
            e += o
        }
        return Math.abs(e) >= s
    }, Rr = function(t) {
        return Tr(t) > 0
    }, Tr = function(t) {
        var r, e, n, o, a, i, s, l;
        for (n = 0, e = t.length, r = l = 0; e >= 0 ? e > l : l > e; r = e >= 0 ? ++l : --l) o = t[r][0], i = t[r][1], a = t[(r + 1) % e][0], s = t[(r + 1) % e][1], n += o * s - a * i;
        return n *= .5
    }, Lr = Pr.proj = Nr.kartograph.proj = {}, Function.prototype.bind = function(t) {
        var r;
        return r = this,
            function() {
                return r.apply(t, arguments)
            }
    }, K = function() {
        function t(t) {
            var r, e, n;
            r = this, r.lon0 = null != (e = t.lon0) ? e : 0, r.lat0 = null != (n = t.lat0) ? n : 0, r.PI = Math.PI, r.HALFPI = .5 * r.PI, r.QUARTERPI = .25 * r.PI, r.RAD = r.PI / 180, r.DEG = 180 / r.PI, r.lam0 = r.rad(this.lon0), r.phi0 = r.rad(this.lat0), r.minLat = -90, r.maxLat = 90
        }
        return t.parameters = [], t.title = "Projection", t.prototype.rad = function(t) {
            return t * this.RAD
        }, t.prototype.deg = function(t) {
            return t * this.DEG
        }, t.prototype.plot = function(t, r) {
            var e, n, o, a, i, s, l, u, p, h, c;
            for (null == r && (r = !0), a = [], e = !0, u = 0, p = t.length; p > u; u++) h = t[u], o = h[0], n = h[1], i = this._visible(o, n), i && (e = !1), c = this.project(o, n), s = c[0], l = c[1], !i && r ? a.push(this._truncate(s, l)) : a.push([s, l]);
            return e ? null : [a]
        }, t.prototype.sea = function() {
            var t, r, e, n, o, a, i, s, l, u, p, h, c, f;
            for (a = this, o = a.project.bind(this), n = [], t = a.lon0, a.lon0 = 0, e = i = -180; 180 >= i; e = ++i) n.push(o(e, a.maxLat));
            for (r = s = p = a.maxLat, h = a.minLat; h >= p ? h >= s : s >= h; r = h >= p ? ++s : --s) n.push(o(180, r));
            for (e = l = 180; l >= -180; e = --l) n.push(o(e, a.minLat));
            for (r = u = c = a.minLat, f = a.maxLat; f >= c ? f >= u : u >= f; r = f >= c ? ++u : --u) n.push(o(-180, r));
            return a.lon0 = t, n
        }, t.prototype.world_bbox = function() {
            var t, r, e, n, o, i;
            for (r = this.project.bind(this), n = this.sea(), t = new a, o = 0, i = n.length; i > o; o++) e = n[o], t.update(e[0], e[1]);
            return t
        }, t.prototype.toString = function() {
            var t;
            return t = this, "[Proj: " + t.name + "]"
        }, t
    }(), K.fromXML = function(t) {
        var r, e, n, o, a, i, s;
        for (n = t.getAttribute("id"), o = {}, e = i = 0, s = t.attributes.length - 1; s >= 0 ? s >= i : i >= s; e = s >= 0 ? ++i : --i) r = t.attributes[e], "id" !== r.name && (o[r.name] = r.value);
        if (null == Lr[n]) throw "unknown projection " + n;
        return a = new Lr[n](o), a.name = n, a
    }, Pr.Proj = K, v = function(t) {
        function r(t) {
            var e, n, o;
            null == t && (t = {}), e = this, e.flip = Number(null != (n = t.flip) ? n : 0), 1 === e.flip && (t.lon0 = null != (o = -t.lon0) ? o : 0), r.__super__.constructor.call(this, t)
        }
        return he(r, t), r.parameters = ["lon0", "flip"], r.title = "Cylindrical Projection", r.prototype._visible = function() {
            return !0
        }, r.prototype.clon = function(t) {
            return t -= this.lon0, -180 > t ? t += 360 : t > 180 && (t -= 360), t
        }, r.prototype.ll = function(t, r) {
            return 1 === this.flip ? [-t, -r] : [t, r]
        }, r
    }(K), b = function(t) {
        function r() {
            return ae = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r.title = "Equirectangular Projection", r.prototype.project = function(t, r) {
            var e;
            return e = this.ll(t, r), t = e[0], r = e[1], t = this.clon(t), [1e3 * t * Math.cos(this.phi0), 1e3 * -1 * r]
        }, r
    }(v), Lr.lonlat = b, h = function(t) {
        function r(t) {
            var e;
            r.__super__.constructor.call(this, t), this.lat1 = null != (e = t.lat1) ? e : 0, this.phi1 = this.rad(this.lat1)
        }
        return he(r, t), r.parameters = ["lon0", "lat1", "flip"], r.title = "Cylindrical Equal Area", r.prototype.project = function(t, r) {
            var e, n, o, a, i;
            return i = this.ll(t, r), t = i[0], r = i[1], e = this.rad(this.clon(t)), n = this.rad(-1 * r), o = e * Math.cos(this.phi1), a = Math.sin(n) / Math.cos(this.phi1), [1e3 * o, 1e3 * a]
        }, r
    }(v), Lr.cea = h, w = function(t) {
        function r(t) {
            t.lat1 = 45, r.__super__.constructor.call(this, t)
        }
        return he(r, t), r.title = "Gall-Peters Projection", r.parameters = ["lon0", "flip"], r
    }(h), Lr.gallpeters = w, C = function(t) {
        function r(t) {
            t.lat1 = 37.7, r.__super__.constructor.call(this, t)
        }
        return he(r, t), r.title = "Hobo-Dyer Projection", r.parameters = ["lon0", "flip"], r
    }(h), Lr.hobodyer = C, l = function(t) {
        function r(t) {
            t.lat1 = 30, r.__super__.constructor.call(this, t)
        }
        return he(r, t), r.title = "Behrmann Projection", r.parameters = ["lon0", "flip"], r
    }(h), Lr.behrmann = l, i = function(t) {
        function r(t) {
            t.lat1 = 50, r.__super__.constructor.call(this, t)
        }
        return he(r, t), r.title = "Balthasart Projection", r.parameters = ["lon0", "flip"], r
    }(h), Lr.balthasart = i, D = function(t) {
        function r(t) {
            r.__super__.constructor.call(this, t), this.minLat = -85, this.maxLat = 85
        }
        return he(r, t), r.title = "Mercator Projection", r.prototype.project = function(t, r) {
            var e, n, o, a, i, s, l;
            return a = this, l = a.ll(t, r), t = l[0], r = l[1], n = Math, e = a.rad(a.clon(t)), o = a.rad(-1 * r), i = 1e3 * e, s = 1e3 * n.log((1 + n.sin(o)) / n.cos(o)), [i, s]
        }, r
    }(v), Lr.mercator = D, tr = function(t) {
        function r() {
            return ie = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r.title = "Pseudo-Cylindrical Projection", r
    }(v), Q = function(t) {
        function r(t) {
            var e;
            r.__super__.constructor.call(this, t), e = this, e.A0 = .8707, e.A1 = -.131979, e.A2 = -.013791, e.A3 = .003971, e.A4 = -.001529, e.B0 = 1.007226, e.B1 = .015085, e.B2 = -.044475, e.B3 = .028874, e.B4 = -.005916, e.C0 = e.B0, e.C1 = 3 * e.B1, e.C2 = 7 * e.B2, e.C3 = 9 * e.B3, e.C4 = 11 * e.B4, e.EPS = 1e-11, e.MAX_Y = .8707 * .52 * Math.PI
        }
        return he(r, t), r.title = "Natural Earth Projection", r.prototype.project = function(t, r) {
            var e, n, o, a, i, s, l, u;
            return i = this, u = i.ll(t, r), t = u[0], r = u[1], e = i.rad(i.clon(t)), n = i.rad(-1 * r), o = n * n, a = o * o, s = 180 * e * (i.A0 + o * (i.A1 + o * (i.A2 + a * o * (i.A3 + o * i.A4)))) + 500, l = 180 * n * (i.B0 + o * (i.B1 + a * (i.B2 + i.B3 * o + i.B4 * a))) + 270, [s, l]
        }, r
    }(tr), Lr.naturalearth = Q, ir = function(t) {
        function r(t) {
            var e;
            r.__super__.constructor.call(this, t), e = this, e.X = [1, -5.67239e-12, -715511e-10, 311028e-11, .9986, -482241e-9, -24897e-9, -133094e-11, .9954, -831031e-9, -44861e-9, -9.86588e-7, .99, -.00135363, -596598e-10, 367749e-11, .9822, -.00167442, -44975e-10, -572394e-11, .973, -.00214869, -903565e-10, 1.88767e-8, .96, -.00305084, -900732e-10, 164869e-11, .9427, -.00382792, -653428e-10, -261493e-11, .9216, -.00467747, -104566e-9, 48122e-10, .8962, -.00536222, -323834e-10, -543445e-11, .8679, -.00609364, -1139e-7, 332521e-11, .835, -.00698325, -640219e-10, 9.34582e-7, .7986, -.00755337, -500038e-10, 9.35532e-7, .7597, -.00798325, -359716e-10, -227604e-11, .7186, -.00851366, -70112e-9, -863072e-11, .6732, -.00986209, -199572e-9, 191978e-10, .6213, -.010418, 883948e-10, 624031e-11, .5722, -.00906601, 181999e-9, 624033e-11, .5322, 0, 0, 0], e.Y = [0, .0124, 3.72529e-10, 1.15484e-9, .062, .0124001, 1.76951e-8, -5.92321e-9, .124, .0123998, -7.09668e-8, 2.25753e-8, .186, .0124008, 2.66917e-7, -8.44523e-8, .248, .0123971, -9.99682e-7, 3.15569e-7, .31, .0124108, 373349e-11, -11779e-10, .372, .0123598, -13935e-9, 439588e-11, .434, .0125501, 520034e-10, -100051e-10, .4968, .0123198, -980735e-10, 922397e-11, .5571, .0120308, 402857e-10, -52901e-10, .6176, .0120369, -390662e-10, 7.36117e-7, .6769, .0117015, -280246e-10, -8.54283e-7, .7346, .0113572, -408389e-10, -5.18524e-7, .7903, .0109099, -486169e-10, -10718e-10, .8435, .0103433, -646934e-10, 5.36384e-9, .8936, .00969679, -646129e-10, -854894e-11, .9394, .00840949, -192847e-9, -421023e-11, .9761, .00616525, -256001e-9, -421021e-11, 1, 0, 0, 0], e.NODES = 18, e.FXC = .8487, e.FYC = 1.3523, e.C1 = 11.459155902616464, e.RC1 = .08726646259971647, e.ONEEPS = 1.000001, e.EPS = 1e-8
        }
        return he(r, t), r.title = "Robinson Projection", r.prototype._poly = function(t, r, e) {
            return t[r] + e * (t[r + 1] + e * (t[r + 2] + e * t[r + 3]))
        }, r.prototype.project = function(t, r) {
            var e, n, o, a, i, s, l, u;
            return i = this, u = i.ll(t, r), t = u[0], r = u[1], t = i.clon(t), n = i.rad(t), o = i.rad(-1 * r), a = Math.abs(o), e = Math.floor(a * i.C1), e >= i.NODES && (e = i.NODES - 1), a = i.deg(a - i.RC1 * e), e *= 4, s = 1e3 * i._poly(i.X, e, a) * i.FXC * n, l = 1e3 * i._poly(i.Y, e, a) * i.FYC, 0 > o && (l = -l), [s, l]
        }, r
    }(tr), Lr.robinson = ir, g = function(t) {
        function r(t) {
            var e;
            r.__super__.constructor.call(this, t), e = this, e.C_x = .4222382003157712, e.C_y = 1.3265004281770023, e.RC_y = .7538633073600218, e.C_p = 3.5707963267948966, e.RC_p = .2800495767557787, e.EPS = 1e-7, e.NITER = 6
        }
        return he(r, t), r.title = "Eckert IV Projection", r.prototype.project = function(t, r) {
            var e, n, o, a, i, s, l, u, p, h, c;
            for (s = this, c = s.ll(t, r), t = c[0], r = c[1], a = s.rad(s.clon(t)), i = s.rad(-1 * r), l = s.C_p * Math.sin(i), e = i * i, i *= .895168 + e * (.0218849 + .00826809 * e), o = s.NITER; o > 0 && (n = Math.cos(i), u = Math.sin(i), e = (i + u * (n + 2) - l) / (1 + n * (n + 2) - u * u), i -= e, !(Math.abs(e) < s.EPS));) o -= 1;
            return 0 === o ? (p = s.C_x * a, h = 0 > i ? -s.C_y : s.C_y) : (p = s.C_x * a * (1 + Math.cos(i)), h = s.C_y * Math.sin(i)), [p, h]
        }, r
    }(tr), Lr.eckert4 = g, ur = function(t) {
        function r() {
            return se = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r.title = "Sinusoidal Projection", r.prototype.project = function(t, r) {
            var e, n, o, a, i, s;
            return n = this, s = n.ll(t, r), t = s[0], r = s[1], e = n.rad(n.clon(t)), o = n.rad(-1 * r), a = 1032 * e * Math.cos(o), i = 1032 * o, [a, i]
        }, r
    }(tr), Lr.sinusoidal = ur, U = function(t) {
        function r(t, e, n, o, a) {
            var i, s, l, u;
            null == e && (e = 1.5707963267948966), null == n && (n = null), null == o && (o = null), null == a && (a = null), r.__super__.constructor.call(this, t), i = this, i.MAX_ITER = 10, i.TOLERANCE = 1e-7, null != e ? (s = e + e, u = Math.sin(e), l = Math.sqrt(2 * Math.PI * u / (s + Math.sin(s))), i.cx = 2 * l / Math.PI, i.cy = l / u, i.cp = s + Math.sin(s)) : null != n && null != o && "undefined" != typeof cz && null !== cz ? (i.cx = n, i.cy = o, i.cp = a) : Er("kartograph.proj.Mollweide: either p or cx,cy,cp must be defined")
        }
        return he(r, t), r.title = "Mollweide Projection", r.prototype.project = function(t, r) {
            var e, n, o, a, i, s, l, u, p, h, c;
            for (s = this, c = s.ll(t, r), t = c[0], r = c[1], i = Math, e = i.abs, a = s.rad(s.clon(t)), l = s.rad(r), o = s.cp * i.sin(l), n = s.MAX_ITER; 0 !== n && (u = (l + i.sin(l) - o) / (1 + i.cos(l)), l -= u, !(e(u) < s.TOLERANCE));) n -= 1;
            return 0 === n ? l = l >= 0 ? s.HALFPI : -s.HALFPI : l *= .5, p = 1e3 * s.cx * a * i.cos(l), h = 1e3 * s.cy * i.sin(l), [p, -1 * h]
        }, r
    }(tr), Lr.mollweide = U, mr = function(t) {
        function r(t) {
            r.__super__.constructor.call(this, t, 1.0471975511965976)
        }
        return he(r, t), r.title = "Wagner IV Projection", r
    }(U), Lr.wagner4 = mr, gr = function(t) {
        function r(t) {
            r.__super__.constructor.call(this, t, null, .90977, 1.65014, 3.00896)
        }
        return he(r, t), r.title = "Wagner V Projection", r
    }(U), Lr.wagner5 = gr, H = function(t) {
        function r() {
            return le = r.__super__.constructor.apply(this, arguments)
        }
        var e, n;
        return he(r, t), n = -89, e = 89, r.parameters = ["lon0", "lat0", "flip"], r.title = "Loximuthal Projection (equidistant)", r.prototype.project = function(t, r) {
            var e, n, o, a, i, s, l;
            return o = this, l = o.ll(t, r), t = l[0], r = l[1], n = Math, e = o.rad(o.clon(t)), a = o.rad(r), i = a === o.phi0 ? e * n.cos(o.phi0) : e * (a - o.phi0) / (n.log(n.tan(o.QUARTERPI + .5 * a)) - n.log(n.tan(o.QUARTERPI + .5 * o.phi0))), i *= 1e3, s = 1e3 * (a - o.phi0), [i, -1 * s]
        }, r
    }(tr), Lr.loximuthal = H, c = function(t) {
        function r() {
            return ue = r.__super__.constructor.apply(this, arguments)
        }
        var e, n, o, a, i;
        return he(r, t), r.title = "Canters Modified Sinusoidal I", r.parameters = ["lon0"], e = 1.1966, n = -.129, o = 3 * n, a = -.0076, i = 5 * a, r.prototype.project = function(t, r) {
            var s, l, u, p, h, c;
            return s = this, c = s.ll(t, r), t = c[0], r = c[1], t = s.rad(s.clon(t)), r = s.rad(r), p = r * r, h = p * p, l = 1e3 * t * Math.cos(r) / (e + o * p + i * h), u = 1e3 * r * (e + n * p + a * h), [l, -1 * u]
        }, r
    }(tr), Lr.canters1 = c, j = function(t) {
        function r(t) {
            r.__super__.constructor.call(this, t)
        }
        var e, n, o, a, i, s, l, u, p, h, c, f, d;
        return he(r, t), r.title = "Hatano Projection", l = 20, o = 1e-7, u = 1.000001, e = 2.67595, n = 2.43763, p = .3736990601468637, h = .4102345310814193, i = 1.75859, s = 1.93052, f = .5686373742600607, d = .5179951515653813, a = .85, c = 1.1764705882352942, r.prototype.project = function(t, r) {
            var u, p, h, c, f, d, y, v, m, g;
            for (c = this, g = c.ll(t, r), t = g[0], r = g[1], h = c.rad(c.clon(t)), f = c.rad(r), u = Math.sin(f) * (0 > f ? n : e), p = m = l; m >= 1 && (d = (f + Math.sin(f) - u) / (1 + Math.cos(f)), f -= d, !(Math.abs(d) < o)); p = m += -1);
            return y = 1e3 * a * h * Math.cos(f *= .5), v = 1e3 * Math.sin(f) * (0 > f ? s : i), [y, -1 * v]
        }, r
    }(tr), Lr.hatano = j, P = function(t) {
        function r(t) {
            var e;
            r.__super__.constructor.call(this, t), e = this, e.lat1 = 41.737, e.p1 = new U, e.p0 = new ur
        }
        return he(r, t), r.title = "Goode Homolosine Projection", r.parameters = ["lon0"], r.prototype.project = function(t, r) {
            var e, n;
            return e = this, n = e.ll(t, r), t = n[0], r = n[1], t = e.clon(t), Math.abs(r) > e.lat1 ? e.p1.project(t, r) : e.p0.project(t, r)
        }, r
    }(tr), Lr.goodehomolosine = P, Y = function(t) {
        function r(t) {
            r.__super__.constructor.call(this, t), this.r = 100 * this.HALFPI
        }
        var e;
        return he(r, t), r.title = "Nicolosi Globular Projection", r.parameters = ["lon0"], e = 1e-10, r.prototype._visible = function(t) {
            var r;
            return r = this, t = r.clon(t), t > -90 && 90 > t
        }, r.prototype.project = function(t, r) {
            var n, o, a, i, s, l, u, p, h, c, f, d, y;
            return s = this, y = s.ll(t, r), t = y[0], r = y[1], a = s.rad(s.clon(t)), u = s.rad(r), Math.abs(a) < e ? (f = 0, d = u) : Math.abs(u) < e ? (f = a, d = 0) : Math.abs(Math.abs(a) - s.HALFPI) < e ? (f = a * Math.cos(u), d = s.HALFPI * Math.sin(u)) : Math.abs(Math.abs(u) - s.HALFPI) < e ? (f = 0, d = u) : (c = s.HALFPI / a - a / s.HALFPI, n = u / s.HALFPI, h = Math.sin(u), o = (1 - n * n) / (h - n), p = c / o, p *= p, i = (c * h / o - .5 * c) / (1 + p), l = (h / p + .5 * o) / (1 + 1 / p), f = Math.cos(u), f = Math.sqrt(i * i + f * f / (1 + p)), f = s.HALFPI * (i + (0 > a ? -f : f)), d = Math.sqrt(l * l - (h * h / p + o * h - 1) / (1 + 1 / p)), d = s.HALFPI * (l + (0 > u ? d : -d))), [100 * f, -100 * d]
        }, r.prototype.sea = function() {
            var t, r, e, n, o;
            for (r = [], n = this.r, t = Math, e = o = 0; 360 >= o; e = ++o) r.push([t.cos(this.rad(e)) * n, t.sin(this.rad(e)) * n]);
            return r
        }, r.prototype.world_bbox = function() {
            var t;
            return t = this.r, new a(-t, -t, 2 * t, 2 * t)
        }, r
    }(tr), Lr.nicolosi = Y, o = function(t) {
        function r(t, e) {
            var n;
            null == e && (e = 1e3), r.__super__.constructor.call(this, t), n = this, n.r = e, n.elevation0 = n.to_elevation(n.lat0), n.azimuth0 = n.to_azimuth(n.lon0)
        }
        return he(r, t), r.parameters = ["lon0", "lat0"], r.title = "Azimuthal Projection", r.prototype.to_elevation = function(t) {
            var r;
            return r = this, (t + 90) / 180 * r.PI - r.HALFPI
        }, r.prototype.to_azimuth = function(t) {
            var r;
            return r = this, 2 * (t + 180) / 360 * r.PI - r.PI
        }, r.prototype._visible = function(t, r) {
            var e, n, o, a, i;
            return i = this, a = Math, o = i.to_elevation(r), e = i.to_azimuth(t), n = a.sin(o) * a.sin(i.elevation0) + a.cos(i.elevation0) * a.cos(o) * a.cos(e - i.azimuth0), n >= 0
        }, r.prototype._truncate = function(t, r) {
            var e, n, o, a, i;
            return e = Math, n = this.r, o = e.atan2(r - n, t - n), a = n + n * e.cos(o), i = n + n * e.sin(o), [a, i]
        }, r.prototype.sea = function() {
            var t, r, e, n, o;
            for (r = [], n = this.r, t = Math, e = o = 0; 360 >= o; e = ++o) r.push([n + t.cos(this.rad(e)) * n, n + t.sin(this.rad(e)) * n]);
            return r
        }, r.prototype.world_bbox = function() {
            var t;
            return t = this.r, new a(0, 0, 2 * t, 2 * t)
        }, r
    }(K), W = function(t) {
        function r() {
            return Dr = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r.title = "Orthographic Projection", r.prototype.project = function(t, r) {
            var e, n, o, a, i, s, l, u;
            return a = this, o = Math, n = a.to_elevation(r), e = a.to_azimuth(t), s = a.r * o.cos(n) * o.sin(e - a.azimuth0), u = -a.r * (o.cos(a.elevation0) * o.sin(n) - o.sin(a.elevation0) * o.cos(n) * o.cos(e - a.azimuth0)), i = a.r + s, l = a.r + u, [i, l]
        }, r
    }(o), Lr.ortho = W, B = function(t) {
        function r(t) {
            r.__super__.constructor.call(this, t), this.scale = .5 * Math.sqrt(2)
        }
        return he(r, t), r.title = "Lambert Azimuthal Equal-Area Projection", r.prototype.project = function(t, r) {
            var e, n, o, a, i, s, l, u, p, h;
            return i = this.rad(r), o = this.rad(t), a = Math, s = a.sin, e = a.cos, n = a.pow(2 / (1 + s(this.phi0) * s(i) + e(this.phi0) * e(i) * e(o - this.lam0)), .5), n *= this.scale, u = this.r * n * e(i) * s(o - this.lam0), h = -this.r * n * (e(this.phi0) * s(i) - s(this.phi0) * e(i) * e(o - this.lam0)), l = this.r + u, p = this.r + h, [l, p]
        }, r
    }(o), Lr.laea = B, I = function(t) {
        function r() {
            var t;
            t = {
                lon0: -150,
                lat0: 90
            }, r.__super__.constructor.call(this, t), this.scale = .33 * .5 * Math.sqrt(2)
        }
        return he(r, t), r
    }(B), N = function(t) {
        function r(t) {
            t = {
                lon0: -157,
                lat0: 20
            }, r.__super__.constructor.call(this, t)
        }
        return he(r, t), r
    }(B), G = function(t) {
        function r(t) {
            t.lon0 = -100, t.lat0 = 45, r.__super__.constructor.call(this, t), this.laea_alaska = new I, this.laea_hawaii = new N
        }
        return he(r, t), r.prototype.project = function(t, e) {
            var n, o, a, i, s, l, u;
            return n = e > 44 && (-127 > t || t > 170), o = -127 > t && 44 > e, n ? (t > 170 && (t -= 380), s = this.laea_alaska.project(t, e), a = s[0], i = s[1]) : o ? (l = this.laea_hawaii.project(t, e), a = l[0], i = l[1]) : (u = r.__super__.project.call(this, t, e), a = u[0], i = u[1]), n && (a += -180, i += 100), o && (i += 220, a += -80), [a, i]
        }, r
    }(B), Lr["laea-usa"] = G, cr = function(t) {
        function r() {
            return Ur = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r.title = "Stereographic Projection", r.prototype.project = function(t, r) {
            var e, n, o, a, i, s, l, u, p, h, c;
            return s = this.rad(r), a = this.rad(t), i = Math, l = i.sin, e = i.cos, o = .5, n = 2 * o / (1 + l(this.phi0) * l(s) + e(this.phi0) * e(s) * e(a - this.lam0)), p = this.r * n * e(s) * l(a - this.lam0), c = -this.r * n * (e(this.phi0) * l(s) - l(this.phi0) * e(s) * e(a - this.lam0)), u = this.r + p, h = this.r + c, [u, h]
        }, r
    }(o), Lr.stereo = cr, sr = function(t) {
        function r(t) {
            var e, n, o, a, i, s, l, u, p, h;
            for (r.__super__.constructor.call(this, {
                    lon0: 0,
                    lat0: 0
                }), this.dist = null != (u = t.dist) ? u : 3, this.up = this.rad(null != (p = t.up) ? p : 0), this.tilt = this.rad(null != (h = t.tilt) ? h : 0), this.scale = 1, a = Number.MAX_VALUE, o = -1 * Number.MAX_VALUE, e = s = 0; 179 >= s; e = ++s)
                for (n = l = 0; 360 >= l; n = ++l) i = this.project(n - 180, e - 90), a = Math.min(i[0], a), o = Math.max(i[0], o);
            this.scale = 2 * this.r / (o - a), r.__super__.constructor.call(this, t)
        }
        return he(r, t), r.parameters = ["lon0", "lat0", "tilt", "dist", "up"], r.title = "Satellite Projection", r.prototype.project = function(t, r, e) {
            var n, o, a, i, s, l, u, p, h, c, f, d, y, v, m, g, _, b, x, w, M;
            return null == e && (e = 0), c = this.rad(r), p = this.rad(t), h = Math, y = h.sin, a = h.cos, f = this.r, d = f * (e + 6371) / 3671, i = y(this.phi0) * y(c) + a(this.phi0) * a(c) * a(p - this.lam0), u = (this.dist - 1) / (this.dist - i), u = (this.dist - 1) / (this.dist - i), u *= this.scale, _ = d * u * a(c) * y(p - this.lam0), w = -d * u * (a(this.phi0) * y(c) - y(this.phi0) * a(c) * a(p - this.lam0)), l = a(this.up), m = y(this.up), s = a(this.tilt), v = y(this.tilt), o = d * (this.dist - 1), n = (w * l + _ * m) * y(this.tilt) / o + s, b = (_ * l - w * m) * a(this.tilt) / n, M = (w * l + _ * m) / n, g = f + b, x = f + M, [g, x]
        }, r.prototype._visible = function(t, r) {
            var e, n, o, a;
            return o = this.to_elevation(r), e = this.to_azimuth(t), a = Math, n = a.sin(o) * a.sin(this.elevation0) + a.cos(this.elevation0) * a.cos(o) * a.cos(e - this.azimuth0), n >= 1 / this.dist
        }, r.prototype.sea = function() {
            var t, r, e, n, o;
            for (r = [], n = this.r, t = Math, e = o = 0; 360 >= o; e = ++o) r.push([n + t.cos(this.rad(e)) * n, n + t.sin(this.rad(e)) * n]);
            return r
        }, r
    }(o), Lr.satellite = sr, _ = function(t) {
        function r() {
            return Qr = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r.title = "Equidistant Azimuthal Projection", r.prototype.project = function(t, r) {
            var e, n, o, a, i, s, l, u, p, h, c, f, d;
            return l = this, u = l.rad(r), i = l.rad(t), s = Math, p = s.sin, n = s.cos, o = p(this.phi0) * p(u) + n(this.phi0) * n(u) * n(i - this.lam0), e = s.acos(o), a = .325 * e / p(e), c = this.r * a * n(u) * p(i - this.lam0), d = -this.r * a * (n(this.phi0) * p(u) - p(this.phi0) * n(u) * n(i - this.lam0)), h = this.r + c, f = this.r + d, [h, f]
        }, r.prototype._visible = function() {
            return !0
        }, r
    }(o), Lr.equi = _, n = function(t) {
        function r(t) {
            var e;
            e = this, t.lat0 = 0, r.__super__.constructor.call(this, t), e.lam0 = 0
        }
        var e;
        return he(r, t), r.title = "Aitoff Projection", r.parameters = ["lon0"], e = .6366197723675814, r.prototype.project = function(t, r) {
            var n, o, a, i, s, l, u, p;
            return i = this, p = i.ll(t, r), t = p[0], r = p[1], t = i.clon(t), a = i.rad(t), s = i.rad(r), n = .5 * a, o = Math.acos(Math.cos(s) * Math.cos(n)), 0 !== o ? (u = 1 / Math.sin(o), l = 2 * o * Math.cos(s) * Math.sin(n) * u, u *= o * Math.sin(s)) : l = u = 0, i.winkel && (l = .5 * (l + a * e), u = .5 * (u + s)), [1e3 * l, -1e3 * u]
        }, r.prototype._visible = function() {
            return !0
        }, r
    }(tr), Lr.aitoff = n, _r = function(t) {
        function r(t) {
            r.__super__.constructor.call(this, t), this.winkel = !0
        }
        return he(r, t), r.title = "Winkel Tripel Projection", r
    }(n), Lr.winkel3 = _r, y = function(t) {
        function r(t) {
            var e, n, o;
            e = this, r.__super__.constructor.call(this, t), e.lat1 = null != (n = t.lat1) ? n : 30, e.phi1 = e.rad(e.lat1), e.lat2 = null != (o = t.lat2) ? o : 50, e.phi2 = e.rad(e.lat2)
        }
        return he(r, t), r.title = "Conic Projection", r.parameters = ["lon0", "lat0", "lat1", "lat2"], r.prototype._visible = function(t, r) {
            var e;
            return e = this, r > e.minLat && r < e.maxLat
        }, r.prototype._truncate = function(t, r) {
            return [t, r]
        }, r.prototype.clon = function(t) {
            return t -= this.lon0, -180 > t ? t += 360 : t > 180 && (t -= 360), t
        }, r
    }(K), z = function(t) {
        function r(t) {
            var e, n, o, a, i, s, l, u, p, h, c, f, d;
            p = this, r.__super__.constructor.call(this, t), i = Math, d = [i.sin, i.cos, i.abs, i.log, i.tan, i.pow], h = d[0], o = d[1], e = d[2], jr = d[3], f = d[4], l = d[5], p.n = s = c = h(p.phi1), a = o(p.phi1), u = e(p.phi1 - p.phi2) >= 1e-10, u && (s = jr(a / o(p.phi2)) / jr(f(p.QUARTERPI + .5 * p.phi2) / f(p.QUARTERPI + .5 * p.phi1))), p.c = n = a * l(f(p.QUARTERPI + .5 * p.phi1), s) / s, p.rho0 = e(e(p.phi0) - p.HALFPI) < 1e-10 ? 0 : n * l(f(p.QUARTERPI + .5 * p.phi0), -s), p.minLat = -60, p.maxLat = 85
        }
        return he(r, t), r.title = "Lambert Conformal Conic Projection", r.prototype.project = function(t, r) {
            var e, n, o, a, i, s, l, u, p, h, c, f, d, y, v;
            return h = this, l = h.rad(r), o = h.rad(h.clon(t)), i = Math, v = [i.sin, i.cos, i.abs, i.log, i.tan, i.pow], c = v[0], n = v[1], e = v[2], jr = v[3], f = v[4], u = v[5], s = h.n, p = e(e(l) - h.HALFPI) < 1e-10 ? 0 : h.c * u(f(h.QUARTERPI + .5 * l), -s), a = o * s, d = 1e3 * p * c(a), y = 1e3 * (h.rho0 - p * n(a)), [d, -1 * y]
        }, r
    }(y), Lr.lcc = z, J = function(t) {
        function r() {
            return Yr = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r
    }(y), vr = function() {
        function t(t, r, e, n, o, a) {
            var i;
            i = this, i.bbox = t, i.width = r, i.padding = null != n ? n : 0, i.halign = null != o ? o : "center", i.valign = null != a ? a : "center", i.height = e, i.scale = Math.min((r - 2 * n) / t.width, (e - 2 * n) / t.height)
        }
        return t.prototype.project = function(t, r) {
            var e, n, o, a, i, s, l;
            return null == r && (r = t[1], t = t[0]), o = this, a = o.scale, e = o.bbox, n = o.height, i = o.width, s = "center" === o.halign ? .5 * (i - e.width * a) : "left" === o.halign ? o.padding * a : i - (e.width - o.padding) * a, l = "center" === o.valign ? .5 * (n - e.height * a) : "top" === o.valign ? o.padding * a : 0, t = (t - e.left) * a + s, r = (r - e.top) * a + l, [t, r]
        }, t.prototype.projectPath = function(t) {
            var r, e, n, o, a, i, s, l, u, p, h, c, f, d, y, v, m;
            if (o = this, "path" === t.type) {
                for (n = [], r = [99999, 99999, -99999, -99999], d = t.contours, p = 0, c = d.length; c > p; p++) {
                    for (i = d[p], e = [], h = 0, f = i.length; f > h; h++) y = i[h], l = y[0], u = y[1], v = o.project(l, u), l = v[0], u = v[1], e.push([l, u]), r[0] = Math.min(r[0], l), r[1] = Math.min(r[1], u), r[2] = Math.max(r[2], l), r[3] = Math.max(r[3], u);
                    n.push(e)
                }
                return a = new wr.Path(t.type, n, t.closed), a._bbox = r, a
            }
            return "circle" === t.type ? (m = o.project(t.x, t.y), l = m[0], u = m[1], s = t.r * o.scale, new wr.Circle(l, u, s)) : void 0
        }, t.prototype.asBBox = function() {
            var t;
            return t = this, new a(0, 0, t.width, t.height)
        }, t
    }(), vr.fromXML = function(t) {
        var r, e, n, o, i;
        return i = Number(t.getAttribute("w")), n = Number(t.getAttribute("h")), o = Number(t.getAttribute("padding")), e = t.getElementsByTagName("bbox")[0], r = a.fromXML(e), new vr(r, i, n, o)
    }, Nr.kartograph.View = vr, L.prototype.dotgrid = function(t) {
        var r, e, n, o, a, i, s, l, u, p, h, c, f, d, y, v, m, g, _, b, x, w, M, P, j, C, A, k, S, L, B, I, N, G, z, E, T, R, F, V, O, H, q, X, D, U, Q, Y, W;
        if (m = this, v = null != (T = t.layer) ? T : m.layerIds[m.layerIds.length - 1], !m.layers.hasOwnProperty(v)) return Er('dotgrid error: layer "' + v + '" not found'), void 0;
        if (y = m.layers[v], e = t.data, n = t.value, o = t.key, _ = {}, null != o && "array" === Vr(e))
            for (A = 0, B = e.length; B > A; A++) w = e[A], d = w[o], _[String(d)] = w;
        else
            for (d in e) w = e[d], _[String(d)] = w;
        if (l = null != (R = t.style) ? R : {
                fill: "black",
                stroke: "none"
            }, P = t.size, f = null != (F = t.gridsize) ? F : 15, s = null != (V = y.dotgrid) ? V : y.dotgrid = {
                gridsize: f,
                grid: []
            }, s.gridsize !== f)
            for (O = s.grid, k = 0, I = O.length; I > k; k++) c = O[k], null != c.shape && (c.shape.remove(), c.shape = null);
        if (f > 0) {
            if (0 === s.grid.length)
                for (j = S = 0, H = m.viewport.width; f > 0 ? H >= S : S >= H; j = S += f)
                    for (C = L = 0, q = m.viewport.height; f > 0 ? q >= L : L >= q; C = L += f) {
                        c = {
                            x: j + .2 * (Math.random() - .5) * f,
                            y: C + .2 * (Math.random() - .5) * f,
                            pathid: !1
                        }, h = !1, X = y.pathsById;
                        for (d in X) {
                            for (b = X[d], z = 0, N = b.length; N > z; z++)
                                if (g = b[z], g.vpath.isInside(c.x, c.y)) {
                                    h = !0, x = null != (D = _[d]) ? D : null, M = P(x), c.pathid = d, c.shape = y.paper.circle(c.x, c.y, 1);
                                    break
                                }
                            if (h) break
                        }
                        s.grid.push(c)
                    }
            for (U = s.grid, E = 0, G = U.length; G > E; E++) c = U[E], c.pathid && (x = null != (Q = _[c.pathid]) ? Q : null, M = P(x), p = null != (Y = t.duration) ? Y : 0, a = null != (W = t.delay) ? W : 0, i = "function" === Vr(a) ? a(x) : a, p > 0 && Raphael.svg ? (r = Raphael.animation({
                r: .5 * M
            }, p), c.shape.animate(r.delay(i))) : c.shape.attr({
                r: .5 * M
            }), u = "function" === Vr(l) ? l(x) : l, c.shape.attr(u))
        }
    }, xr = null != (Wr = Pr.filter) ? Wr : Pr.filter = {}, xr.__knownFilter = {}, xr.__patternFills = 0, q.prototype.SVG = function(t, r) {
        var e, n;
        if ("string" == typeof t && (t = window.document.createElementNS("http://www.w3.org/2000/svg", t)), r)
            for (e in r) n = r[e], t.setAttribute(e, n);
        return t
    }, L.prototype.addFilter = function(t, r, e) {
        var n, o, a;
        if (null == e && (e = {}), a = this, n = window.document, null == Pr.filter[r]) throw "unknown filter type " + r;
        return o = new xr[r](e).getFilter(t), a.paper.defs.appendChild(o)
    }, q.prototype.applyFilter = function(t) {
        var r;
        return r = this, e("." + r.id, r.paper.canvas).attr({
            filter: "url(#" + t + ")"
        })
    }, q.prototype.applyTexture = function(t, r, e) {
        var n, o, a, i, s, l;
        for (null == r && (r = !1), null == e && (e = "#000"), o = this, xr.__patternFills += 1, s = o.paths, l = [], a = 0, i = s.length; i > a; a++) n = s[a], !r || r(n.data) ? l.push(n.svgPath.attr({
            fill: "url(" + t + ")"
        })) : l.push(n.svgPath.attr("fill", e));
        return l
    }, x = function() {
        function t(t) {
            this.params = null != t ? t : {}
        }
        return t.prototype.getFilter = function(t) {
            var r, e;
            return e = this, r = e.SVG("filter", {
                id: t
            }), e.buildFilter(r), r
        }, t.prototype._getFilter = function() {
            throw "not implemented"
        }, t.prototype.SVG = function(t, r) {
            var e, n;
            if ("string" == typeof t && (t = window.document.createElementNS("http://www.w3.org/2000/svg", t)), r)
                for (e in r) n = r[e], t.setAttribute(e, n);
            return t
        }, t
    }(), u = function(t) {
        function r() {
            return Zr = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r.prototype.buildFilter = function(t) {
            var r, e, n;
            return n = this, r = n.SVG, e = r("feGaussianBlur", {
                stdDeviation: n.params.size || 4,
                result: "blur"
            }), t.appendChild(e)
        }, r
    }(x), xr.blur = u, Mr = function(t) {
        var r, e, n, o;
        if (t.trim().match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) return (4 === t.length || 7 === t.length) && (t = t.substr(1)), 3 === t.length && (t = t.split(""), t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), o = parseInt(t, 16), n = o >> 16, e = 255 & o >> 8, r = 255 & o, [n, e, r];
        throw 'unknown color format: "' + t + '"'
    }, M = function(t) {
        function r() {
            return $r = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r.prototype.buildFilter = function(t) {
            var r, e, n, o, a, i, s, l, u, p, h, c, f;
            a = this, e = null != (l = a.params.blur) ? l : 4, s = null != (u = a.params.strength) ? u : 1, i = null != (p = a.params.color) ? p : "#D1BEB0", "string" === Vr(i) && (i = Mr(i)), n = null != (h = a.params.inner) ? h : !1, o = null != (c = a.params.knockout) ? c : !1, r = null != (f = a.params.alpha) ? f : 1, n ? a.innerGlow(t, e, s, i, r, o) : a.outerGlow(t, e, s, i, r, o)
        }, r.prototype.outerGlow = function(t, r, e, n, o, a) {
            var i, s, l, u, p, h, c;
            return p = this, i = p.SVG, u = i("feColorMatrix", {
                "in": "SourceGraphic",
                type: "matrix",
                values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 1 0",
                result: "mask"
            }), t.appendChild(u), e > 0 && (c = i("feMorphology", {
                "in": "mask",
                radius: e,
                operator: "dilate",
                result: "mask"
            }), t.appendChild(c)), u = i("feColorMatrix", {
                "in": "mask",
                type: "matrix",
                values: "0 0 0 0 " + n[0] / 255 + " 0 0 0 0 " + n[1] / 255 + " 0 0 0 0 " + n[2] / 255 + "  0 0 0 1 0",
                result: "r0"
            }), t.appendChild(u), s = i("feGaussianBlur", {
                "in": "r0",
                stdDeviation: r,
                result: "r1"
            }), t.appendChild(s), l = i("feComposite", {
                operator: "out",
                "in": "r1",
                in2: "mask",
                result: "comp"
            }), t.appendChild(l), h = i("feMerge"), a || h.appendChild(i("feMergeNode", {
                "in": "SourceGraphic"
            })), h.appendChild(i("feMergeNode", {
                "in": "r1"
            })), t.appendChild(h)
        }, r.prototype.innerGlow = function(t, r, e, n, o, a) {
            var i, s, l, u, p, h, c;
            return p = this, i = p.SVG, jr("innerglow"), u = i("feColorMatrix", {
                "in": "SourceGraphic",
                type: "matrix",
                values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 500 0",
                result: "mask"
            }), t.appendChild(u), c = i("feMorphology", {
                "in": "mask",
                radius: e,
                operator: "erode",
                result: "r1"
            }), t.appendChild(c), s = i("feGaussianBlur", {
                "in": "r1",
                stdDeviation: r,
                result: "r2"
            }), t.appendChild(s), u = i("feColorMatrix", {
                type: "matrix",
                "in": "r2",
                values: "1 0 0 0 " + n[0] / 255 + " 0 1 0 0 " + n[1] / 255 + " 0 0 1 0 " + n[2] / 255 + " 0 0 0 -1 1",
                result: "r3"
            }), t.appendChild(u), l = i("feComposite", {
                operator: "in",
                "in": "r3",
                in2: "mask",
                result: "comp"
            }), t.appendChild(l), h = i("feMerge"), a || h.appendChild(i("feMergeNode", {
                "in": "SourceGraphic"
            })), h.appendChild(i("feMergeNode", {
                "in": "comp"
            })), t.appendChild(h)
        }, r
    }(x), xr.glow = M, L.prototype.addGeoPath = function(t, r, e) {
        var n, o, a;
        return null == r && (r = []), null == e && (e = ""), n = this, a = n.getGeoPathStr(t, r), o = n.paper.path(a), "" !== e && o.node.setAttribute("class", e), o
    }, L.prototype.getGeoPathStr = function(t, r) {
        var e, n, o, a, i, s, l;
        null == r && (r = []), o = this, "string" === Vr(r) && (r = r.split("")), 0 === r.length && r.push("M"), a = "";
        for (n in t) i = t[n], e = null != (l = r[n]) ? l : "L", s = o.lonlat2xy(i), isNaN(s[0]) || isNaN(s[1]) || (a += e + s[0] + "," + s[1]);
        return a
    }, L.prototype.addGeoPolygon = function(t, r) {
        var e, n, o;
        o = this, e = ["M"];
        for (n in t) e.push("L");
        return e.push("Z"), o.addGeoPath(t, e, r)
    }, lr = function() {
        function t(t, r, e) {
            var n, o, a, i;
            null == t && (t = [0, 1]), null == r && (r = null), null == e && (e = null), this.rangedScale = ce(this.rangedScale, this), this.scale = ce(this.scale, this), o = this, i = [];
            for (n in t)("function" !== Vr(e) || e(t[n]) !== !1) && (a = null != r ? "function" === Vr(r) ? r(t[n]) : t[n][r] : t[n], isNaN(a) || i.push(a));
            i = i.sort(function(t, r) {
                return t - r
            }), o.values = i, o._range = [0, 1], o.rangedScale.range = function(t) {
                return o._range = t, o.rangedScale
            }
        }
        return t.prototype.scale = function(t) {
            return t
        }, t.prototype.rangedScale = function(t) {
            var r, e;
            return r = this, t = r.scale(t), e = r._range, t * (e[1] - e[0]) + e[0]
        }, t
    }(), F = function(t) {
        function r() {
            return this.scale = ce(this.scale, this), Kr = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r.prototype.scale = function(t) {
            var r, e;
            return r = this, e = r.values, (t - e[0]) / (e[e.length - 1] - e[0])
        }, r
    }(lr), V = function(t) {
        function r() {
            return this.scale = ce(this.scale, this), Jr = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r.prototype.scale = function(t) {
            var r, e;
            return r = this, e = r.values, jr = Math.log, (jr(t) - jr(e[0])) / (jr(e[e.length - 1]) - jr(e[0]))
        }, r
    }(lr), pr = function(t) {
        function r() {
            return this.scale = ce(this.scale, this), te = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r.prototype.scale = function(t) {
            var r, e;
            return r = this, e = r.values, Math.sqrt((t - e[0]) / (e[e.length - 1] - e[0]))
        }, r
    }(lr), rr = function(t) {
        function r() {
            return this.scale = ce(this.scale, this), ee = r.__super__.constructor.apply(this, arguments)
        }
        return he(r, t), r.prototype.scale = function(t) {
            var r, e, n, o, a, i;
            n = this, i = n.values, e = i.length - 1;
            for (r in i) {
                if (a = i[Number(r)], o = i[Number(r) + 1], t === a) return r / e;
                if (e > r && t > a && o > t) return r / e + (t - a) / (o - a)
            }
        }, r
    }(lr), Gr = Nr.kartograph.scale = {}, Gr.identity = function() {
        return new lr(domain, prop, xr).rangedScale
    }, Gr.linear = function(t, r, e) {
        return new F(t, r, e).rangedScale
    }, Gr.log = function(t, r, e) {
        return new V(t, r, e).rangedScale
    }, Gr.sqrt = function(t, r, e) {
        return new pr(t, r, e).rangedScale
    }, Gr.quantile = function(t, r, e) {
        return new rr(t, r, e).rangedScale
    }, dr = function() {
        function t(t) {
            r = this, r.location = t.location, r.data = t.data, r.map = t.map, r.layers = t.layers, r.key = t.key, r.x = t.x, r.y = t.y
        }
        var r;
        return r = null, t.prototype.init = function() {
            return r
        }, t.prototype.overlaps = function() {
            return !1
        }, t.prototype.update = function() {
            return r
        }, t.prototype.nodes = function() {
            return []
        }, t.prototype.clear = function() {
            return r
        }, t
    }(), Pr.Symbol = dr, yr = function() {
        function r(t) {
            this._initTooltips = ce(this._initTooltips, this), this._noverlap = ce(this._noverlap, this), this._kMeans = ce(this._kMeans, this);
            var e, o, a, i, s, l, u, p, h, c, f, d, y, v, m, g, _, b, x, w;
            for (n = this, c = ["data", "location", "type", "map"], p = ["filter", "tooltip", "click", "delay", "sortBy", "clustering", "aggregate", "clusteringOpts", "mouseenter", "mouseleave"], f = 0, m = c.length; m > f; f++) {
                if (h = c[f], null == t[h]) throw "SymbolGroup: missing argument '" + h + "'";
                n[h] = t[h]
            }
            for (d = 0, g = p.length; g > d; d++) h = p[d], null != t[h] && (n[h] = t[h]);
            if (e = n.type, null == e) return Er("could not resolve symbol type", n.type), void 0;
            for (x = e.props, y = 0, _ = x.length; _ > y; y++) h = x[y], null != t[h] && (n[h] = t[h]);
            for (n.layers = {
                    mapcanvas: n.map.paper
                }, w = e.layers, v = 0, b = w.length; b > v; v++) s = w[v], u = r._layerid++, i = "sl_" + u, "svg" === s.type ? l = n.map.createSVGLayer(i) : "html" === s.type && (l = n.map.createHTMLLayer(i)), n.layers[s.id] = l;
            n.symbols = [];
            for (a in n.data) o = n.data[a], "function" === Vr(n.filter) ? n.filter(o, a) && n.add(o, a) : n.add(o, a);
            n.layout(), n.render(), n.map.addSymbolGroup(n)
        }
        var n;
        return n = null, r.prototype.add = function(t, r) {
            var e, o, a, i, s, l, u, p;
            for (n = this, e = n.type, o = n._evaluate(n.location, t, r), "array" === Vr(o) && (o = new O(o[0], o[1])), i = {
                    layers: n.layers,
                    location: o,
                    data: t,
                    key: null != r ? r : n.symbols.length,
                    map: n.map
                }, p = e.props, l = 0, u = p.length; u > l; l++) a = p[l], null != n[a] && (i[a] = n._evaluate(n[a], t, r));
            return s = new e(i), n.symbols.push(s), s
        }, r.prototype.layout = function() {
            var t, r, e, o, a, i, s, l, u, p;
            for (u = n.symbols, s = 0, l = u.length; l > s; s++) {
                if (a = u[s], r = a.location, "string" === Vr(r)) {
                    if (p = r.split("."), t = p[0], o = p[1], e = n.map.getLayerPath(t, o), null == e) {
                        Er("could not find layer path " + t + "." + o);
                        continue
                    }
                    i = n.map.viewBC.project(e.path.centroid())
                } else i = n.map.lonlat2xy(r);
                a.x = i[0], a.y = i[1]
            }
            return "k-means" === n.clustering ? n._kMeans() : "noverlap" === n.clustering && n._noverlap(), n
        }, r.prototype.render = function() {
            var t, r, o, a, i, s, l, u, p, h, c;
            for (n = this, n.sortBy && (a = "asc", "string" === Vr(n.sortBy) && (n.sortBy = n.sortBy.split(" ", 2), o = n.sortBy[0], a = null != (p = n.sortBy[1]) ? p : "asc"), n.symbols = n.symbols.sort(function(t, r) {
                    var e, i, s;
                    return "function" === Vr(n.sortBy) ? (i = n.sortBy(t.data, t), s = n.sortBy(r.data, r)) : (i = t[o], s = r[o]), i === s ? 0 : (e = "asc" === a ? 1 : -1, i > s ? 1 * e : -1 * e)
                })), h = n.symbols, i = 0, l = h.length; l > i; i++)
                for (r = h[i], r.render(), c = r.nodes(), s = 0, u = c.length; u > s; s++) t = c[s], t.symbol = r;
            return "function" === Vr(n.tooltip) && n._initTooltips(), e.each(["click", "mouseenter", "mouseleave"], function(o, a) {
                var i, s, l, u;
                if ("function" === Vr(n[a])) {
                    for (l = n.symbols, u = [], i = 0, s = l.length; s > i; i++) r = l[i], u.push(function() {
                        var o, i, s, l;
                        for (s = r.nodes(), l = [], o = 0, i = s.length; i > o; o++) t = s[o], l.push(e(t)[a](function(t) {
                            var r;
                            for (r = t.target; !r.symbol;) r = e(r).parent().get(0);
                            return t.stopPropagation(), n[a](r.symbol.data, r.symbol, t)
                        }));
                        return l
                    }.call(this));
                    return u
                }
            }), n
        }, r.prototype.tooltips = function(t) {
            return n = this, n.tooltips = t, n._initTooltips(), n
        }, r.prototype.remove = function(t) {
            var r, e, o, a, i, s, l, u, p, h;
            for (n = this, o = [], u = n.symbols, s = 0, l = u.length; l > s; s++)
                if (i = u[s], null == t || t(i.data)) try {
                    i.clear()
                } catch (c) {
                    r = c, Er("error: symbolgroup.remove")
                } else o.push(i);
            if (null == t) {
                p = n.layers, h = [];
                for (e in p) a = p[e], "mapcanvas" !== e ? h.push(a.remove()) : h.push(void 0);
                return h
            }
            return n.symbols = o
        }, r.prototype._evaluate = function(t, r, e) {
            var n;
            return n = "function" === Vr(t) ? t(r, e) : t
        }, r.prototype._kMeans = function() {
            var r, e, o, a, i, s, l, u, p, h, c, f, d, y, v, m, g, _, b, x, w, M, P;
            for (n = this, null == (x = n.osymbols) && (n.osymbols = n.symbols), r = n.type, null != n.clusteringOpts && (h = n.clusteringOpts.size), null == h && (h = 64), e = t().iterations(16).size(h), w = n.osymbols, f = 0, m = w.length; m > f; f++) p = w[f], e.add({
                x: p.x,
                y: p.y
            });
            for (s = e.means(), l = [], d = 0, g = s.length; g > d; d++)
                if (i = s[d], 0 !== i.size) {
                    for (o = [], M = i.indices, y = 0, _ = M.length; _ > y; y++) a = M[y], o.push(n.osymbols[a].data);
                    for (o = n.aggregate(o), c = {
                            layers: n.layers,
                            location: !1,
                            data: o,
                            map: n.map
                        }, P = r.props, v = 0, b = P.length; b > v; v++) u = P[v], null != n[u] && (c[u] = n._evaluate(n[u], o));
                    p = new r(c), p.x = i.x, p.y = i.y, l.push(p)
                }
            return n.symbols = l
        }, r.prototype._noverlap = function() {
            var t, r, e, o, a, i, s, l, u, p, h, c, f, d, y, v, m, g, _, b, x, w, M, P, j, C, A, k, S, L, B, I, N, G, z, E, T, R, F, V, O, H, q, X, D, U, Q;
            if (n = this, null == (H = n.osymbols) && (n.osymbols = n.symbols), u = 3, t = n.type, fe.call(t.props, "radius") < 0) return Er('noverlap layout only available for symbols with property "radius"'), void 0;
            for (C = n.osymbols.slice(), null != n.clusteringOpts && (S = n.clusteringOpts.tolerance, f = n.clusteringOpts.maxRatio), null == S && (S = .05), null == f && (f = .8), s = N = 0, q = u - 1; q >= 0 ? q >= N : N >= q; s = q >= 0 ? ++N : --N) {
                for (C.sort(function(t, r) {
                        return r.radius - t.radius
                    }), p = C.length, d = [], y = G = 0, X = p - 3; X >= 0 ? X >= G : G >= X; y = X >= 0 ? ++G : --G)
                    if (M = C[y]) {
                        for (b = M.radius * (1 - S), h = M.x - b, g = M.x + b, A = M.y - b, r = M.y + b, l = [], v = z = D = y + 1, U = p - 2; U >= D ? U >= z : z >= U; v = U >= D ? ++z : --z) P = C[v], P && (x = P.radius, c = P.x - x, _ = P.x + x, k = P.y - x, e = P.y + x, x / M.radius < f && (c > g || h > _ || k > r || A > e || (a = P.x - M.x, i = P.y - M.y, (b + x) * (b + x) > a * a + i * i && l.push(v))));
                        if (l.length > 0) {
                            for (o = [M.data], m = M.radius * M.radius, E = 0, T = l.length; T > E; E++) s = l[E], o.push(C[s].data), m += C[s].radius * C[s].radius;
                            for (o = n.aggregate(o), j = {
                                    layers: n.layers,
                                    location: !1,
                                    data: o,
                                    map: n.map
                                }, Q = t.props, V = 0, R = Q.length; R > V; V++) y = Q[V], null != n[y] && (j[y] = n._evaluate(n[y], o));
                            for (w = new t(j), L = M.radius * M.radius / m, B = M.x * L, I = M.y * L, O = 0, F = l.length; F > O; O++) s = l[O], P = C[s], L = P.radius * P.radius / m, B += P.x * L, I += P.y * L, C[s] = void 0;
                            w.x = B, w.y = I, C[y] = void 0, d.push(w)
                        } else d.push(M)
                    }
                C = d
            }
            return n.symbols = C
        }, r.prototype._initTooltips = function() {
            var t, r, o, a, i, s, l, u, p, h, c;
            for (n = this, a = n.tooltip, h = n.symbols, s = 0, u = h.length; u > s; s++)
                for (o = h[s], t = {
                        position: {
                            target: "mouse",
                            viewport: e(window),
                            adjust: {
                                x: 7,
                                y: 7
                            }
                        },
                        show: {
                            delay: 20
                        },
                        content: {},
                        events: {
                            show: function(t, r) {
                                return e(".qtip").filter(function() {
                                    return this !== r.elements.tooltip.get(0)
                                }).hide()
                            }
                        }
                    }, i = a(o.data, o.key), "string" === Vr(i) ? t.content.text = i : "array" === Vr(i) && (t.content.title = i[0], t.content.text = i[1]), c = o.nodes(), l = 0, p = c.length; p > l; l++) r = c[l], e(r).qtip(t)
        }, r.prototype.onResize = function() {
            var t, r, e, o;
            for (n = this, n.layout(), o = n.symbols, r = 0, e = o.length; e > r; r++) t = o[r], t.update()
        }, r.prototype.update = function(t, r, e) {
            var o, a, i, s, l, u, p, h;
            for (n = this, null == t && (t = {}), p = n.symbols, i = 0, l = p.length; l > i; i++) {
                for (a = p[i], h = n.type.props, s = 0, u = h.length; u > s; s++) o = h[s], null != t[o] ? a[o] = n._evaluate(t[o], a.data) : null != n[o] && (a[o] = n._evaluate(n[o], a.data));
                a.update(r, e)
            }
            return n
        }, r
    }(), yr._layerid = 0, Pr.SymbolGroup = yr, L.prototype.addSymbols = function(t) {
        return t.map = this, new yr(t)
    }, Pr.dorlingLayout = function(t, r) {
        var n, o, a, i, s, l, u, p, h, c, f, d, y, v, m;
        for (null == r && (r = 40), f = [], e.each(t.symbols, function(t, r) {
                return f.push({
                    i: t,
                    x: r.path.attrs.cx,
                    y: r.path.attrs.cy,
                    r: r.path.attrs.r
                })
            }), f.sort(function(t, r) {
                return r.r - t.r
            }), a = function() {
                var r, e, n;
                for (e = 0, n = f.length; n > e; e++) r = f[e], t.symbols[r.i].path.attr({
                    cx: r.x,
                    cy: r.y
                })
            }, d = m = 1; r >= 1 ? r >= m : m >= r; d = r >= 1 ? ++m : --m)
            for (h in f)
                for (c in f)
                    if (c > h) {
                        if (n = f[h], o = f[c], n.x + n.r < o.x - o.r || n.x - n.r > o.x + o.r) continue;
                        if (n.y + n.r < o.y - o.r || n.y - n.r > o.y + o.r) continue;
                        l = n.x - o.x, u = n.y - o.y, s = l * l + u * u, y = n.r + o.r, v = y * y, v > s && (i = Math.sqrt(s), p = 10 / i, n.x += l * p * (1 - n.r / y), n.y += u * p * (1 - n.r / y), o.x -= l * p * (1 - o.r / y), o.y -= u * p * (1 - o.r / y))
                    }
        return a()
    }, p = function(t) {
        function r(t) {
            this.nodes = ce(this.nodes, this), this.clear = ce(this.clear, this), this.update = ce(this.update, this), this.render = ce(this.render, this), this.overlaps = ce(this.overlaps, this);
            var e, n, o;
            e = this, r.__super__.constructor.call(this, t), e.radius = null != (n = t.radius) ? n : 4, e.style = t.style, e.attrs = t.attrs, e.title = t.title, e["class"] = null != (o = t["class"]) ? o : "bubble"
        }
        return he(r, t), r.prototype.overlaps = function(t) {
            var r, e, n, o, a, i, s, l, u, p, h;
            return n = this, p = [n.x, n.y, n.radius], i = p[0], l = p[1], o = p[2], h = [t.x, t.y, t.radius], s = h[0], u = h[1], a = h[2], i - o > s + a || s - a > i + o || l - o > u + a || u - a > l + o ? !1 : (r = i - s, e = l - u, r * r + e * e > (o + a) * (o + a) ? !1 : !0)
        }, r.prototype.render = function() {
            var t;
            return t = this, null == t.path && (t.path = t.layers.mapcanvas.circle(t.x, t.y, t.radius)), t.update(), t.map.applyCSS(t.path), t
        }, r.prototype.update = function(t, r) {
            var n, o, a;
            return null == t && (t = !1), null == r && (r = "expo-out"), o = this, a = o.path, n = {
                cx: o.x,
                cy: o.y,
                r: o.radius
            }, null != o.attrs && (n = e.extend(n, o.attrs)), t ? a.animate(n, t, r) : a.attr(n), null != a.node && (null != o.style && a.node.setAttribute("style", o.style), null != o["class"] && a.node.setAttribute("class", o["class"])), null != o.title && a.attr("title", o.title), o
        }, r.prototype.clear = function() {
            var t;
            return t = this, t.path.remove(), t
        }, r.prototype.nodes = function() {
            var t;
            return t = this, [t.path.node]
        }, r
    }(dr), p.props = ["radius", "style", "class", "title", "attrs"], p.layers = [], Nr.kartograph.Bubble = p, k = function(t) {
        function r(t) {
            var e, n, o, a, i, s;
            e = this, r.__super__.constructor.call(this, t), e.icon = null != (n = t.icon) ? n : "", e.offset = null != (o = t.offset) ? o : [0, 0], e.iconsize = null != (a = t.iconsize) ? a : [10, 10], e["class"] = null != (i = t["class"]) ? i : "", e.title = null != (s = t.title) ? s : ""
        }
        return he(r, t), r.prototype.render = function() {
            var t, r;
            return r = this, t = r.map.container, r.img = e("<img />"), r.img.attr({
                src: r.icon,
                title: r.title,
                alt: r.title,
                width: r.iconsize[0],
                height: r.iconsize[1]
            }), r.img.addClass(r["class"]), r.img.css({
                position: "absolute",
                "z-index": 1e3,
                cursor: "pointer"
            }), r.img[0].symbol = r, t.append(r.img), r.update()
        }, r.prototype.update = function() {
            var t;
            return t = this, t.img.css({
                left: t.x + t.offset[0] + "px",
                top: t.y + t.offset[1] + "px"
            })
        }, r.prototype.clear = function() {
            var t;
            return t = this, t.img.remove(), t
        }, r.prototype.nodes = function() {
            var t;
            return t = this, [t.img]
        }, r
    }(Pr.Symbol), k.props = ["icon", "offset", "class", "title", "iconsize"], k.layers = [], Nr.kartograph.Icon = k, fr = function(t) {
        function r(t) {
            var e, n, o, a, i;
            e = this, r.__super__.constructor.call(this, t), e.text = null != (n = t.text) ? n : "", e.style = null != (o = t.style) ? o : "", e["class"] = null != (a = t["class"]) ? a : "", e.offset = null != (i = t.offset) ? i : [0, 0]
        }
        return he(r, t), r.prototype.render = function() {
            var t, r;
            return r = this, r.lbl = t = r.layers.mapcanvas.text(r.x, r.y, r.text), r.update(), r
        }, r.prototype.update = function() {
            var t;
            return t = this, t.lbl.attr({
                x: t.x + t.offset[0],
                y: t.y + t.offset[1]
            }), t.lbl.node.setAttribute("style", t.style), t.lbl.node.setAttribute("class", t["class"])
        }, r.prototype.clear = function() {
            var t;
            return t = this, t.lbl.remove(), t
        }, r.prototype.nodes = function() {
            var t;
            return t = this, [t.lbl.node]
        }, r
    }(Pr.Symbol), fr.props = ["text", "style", "class", "offset"], fr.layers = [], Nr.kartograph.Label = fr, A = function(t) {
        function r(t) {
            var e, n, o, a;
            e = this, r.__super__.constructor.call(this, t), e.text = null != (n = t.text) ? n : "", e.css = null != (o = t.css) ? o : "", e["class"] = null != (a = t["class"]) ? a : ""
        }
        return he(r, t), r.prototype.render = function() {
            var t, r, n;
            return n = this, t = e("<div>" + n.text + "</div>"), t.css({
                width: "80px",
                position: "absolute",
                left: "-40px",
                "text-align": "center"
            }), n.lbl = r = e('<div class="label" />'), r.append(t), n.layers.lbl.append(r), t.css({
                height: t.height() + "px",
                top: t.height() * -.4 + "px"
            }), n.update(), n
        }, r.prototype.update = function() {
            var t;
            return t = this, t.lbl.css({
                position: "absolute",
                left: t.x + "px",
                top: t.y + "px"
            }), t.lbl.css(t.css)
        }, r.prototype.clear = function() {
            var t;
            return t = this, t.lbl.remove(), t
        }, r.prototype.nodes = function() {
            var t;
            return t = this, [t.lbl[0]]
        }, r
    }(Pr.Symbol), A.props = ["text", "css", "class"], A.layers = [{
        id: "lbl",
        type: "html"
    }], Nr.kartograph.HtmlLabel = A, E = function(t) {
        function r(t) {
            this.nodes = ce(this.nodes, this), this.clear = ce(this.clear, this), this.update = ce(this.update, this), this.render = ce(this.render, this);
            var e, n, o;
            e = this, r.__super__.constructor.call(this, t), e.labelattrs = null != (n = t.labelattrs) ? n : {}, e.buffer = t.buffer, e.center = null != (o = t.center) ? o : !0
        }
        return he(r, t), r.prototype.render = function(t) {
            var e;
            return e = this, null != e.title && "" !== String(e.title).trim() && (e.buffer && (e.bufferlabel = e.layers.mapcanvas.text(e.x, e.y, e.title)), e.label = e.layers.mapcanvas.text(e.x, e.y, e.title)), r.__super__.render.call(this, t), e
        }, r.prototype.update = function(t, n) {
            var o, a, i, s, l;
            return null == t && (t = !1), null == n && (n = "expo-out"), a = this, r.__super__.update.call(this, t, n), null != a.label && (i = a.map.viewport, o = e.extend({}, a.labelattrs), s = a.x, l = a.y, a.center ? l -= 0 : s > .5 * i.width ? (o["text-anchor"] = "end", s -= a.radius + 5) : s < .5 * i.width && (o["text-anchor"] = "start", s += a.radius + 5), o.x = s, o.y = l, a.buffer && (a.bufferlabel.attr(o), a.bufferlabel.attr({
                stroke: "#fff",
                fill: "#fff",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": 6
            })), a.label.attr(o), a.label.toFront()), a
        }, r.prototype.clear = function() {
            var t;
            return t = this, r.__super__.clear.apply(this, arguments)
        }, r.prototype.nodes = function() {
            var t, e;
            return t = this, e = r.__super__.nodes.apply(this, arguments), t.label && e.push(t.label.node), t.bufferlabel && e.push(t.bufferlabel.node), e
        }, r
    }(p), E.props = ["radius", "style", "class", "title", "labelattrs", "buffer", "center", "attrs"], E.layers = [], Nr.kartograph.LabeledBubble = E, $ = function(t) {
        function r(t) {
            var n, o, a, i, s, l, u, p, h, c;
            e = this, r.__super__.constructor.call(this, t), e.radius = null != (o = t.radius) ? o : 4, e.styles = null != (a = t.styles) ? a : "", e.colors = null != (i = t.colors) ? i : ["#3cc", "#c3c", "#33c", "#cc3"], e.titles = null != (s = t.titles) ? s : ["", "", "", "", ""], e.values = null != (l = t.values) ? l : [], e.border = null != (u = t.border) ? u : !1, e.borderWidth = null != (p = t.borderWidth) ? p : 2, e["class"] = null != (h = t["class"]) ? h : "piechart", null == (c = (n = Raphael.fn).pieChart) && (n.pieChart = br)
        }
        var e;
        return he(r, t), e = null, r.prototype.overlaps = function(t) {
            var r, n, o, a, i, s, l, u, p, h;
            return p = [e.x, e.y, e.radius], i = p[0], l = p[1], o = p[2], h = [t.x, t.y, t.radius], s = h[0], u = h[1], a = h[2], i - o > s + a || s - a > i + o || l - o > u + a || u - a > l + o ? !1 : (r = i - s, n = l - u, r * r + n * n > (o + a) * (o + a) ? !1 : !0)
        }, r.prototype.render = function() {
            var t;
            return e = this, null != e.border && (t = e.layers.mapcanvas.circle(e.x, e.y, e.radius + e.borderWidth).attr({
                stroke: "none",
                fill: e.border
            })), e.chart = e.layers.mapcanvas.pieChart(e.x, e.y, e.radius, e.values, e.titles, e.colors, "none"), e.chart.push(t), e
        }, r.prototype.update = function() {}, r.prototype.clear = function() {
            var t, r, n, o;
            for (e = this, o = e.chart, r = 0, n = o.length; n > r; r++) t = o[r], t.remove();
            return e
        }, r.prototype.nodes = function() {
            var t, r, n, o, a;
            for (o = e.chart, a = [], r = 0, n = o.length; n > r; r++) t = o[r], a.push(t.node);
            return a
        }, r
    }(dr), $.props = ["radius", "values", "styles", "class", "titles", "colors", "border", "borderWidth"], $.layers = [], Nr.kartograph.PieChart = $, br = function(t, r, e, n, o, a, i) {
        var s, l, u, p, h, c, f, d, y, v, m;
        if (isNaN(t) || isNaN(r) || isNaN(e)) return [];
        for (p = this, c = Math.PI / 180, l = p.set(), f = function(t, r, e, n, o, a) {
                var i, s, l, u;
                return i = t + e * Math.cos(-n * c), s = t + e * Math.cos(-o * c), l = r + e * Math.sin(-n * c), u = r + e * Math.sin(-o * c), p.path(["M", t, r, "L", i, l, "A", e, e, 0, +(o - n > 180), 0, s, u, "z"]).attr(a)
            }, s = -270, d = 0, h = function(o) {
                var u, p, h, c, y, v, m;
                m = n[o], u = 360 * m / d, v = s + .5 * u, p = a[o], c = 500, h = 30, y = f(t, r, e, s, s + u, {
                    fill: p,
                    stroke: i,
                    "stroke-width": 1
                }), y.mouseover(function() {
                    y.stop().animate({
                        transform: "s1.1 1.1 " + t + " " + r
                    }, c, "elastic")
                }), y.mouseout(function() {
                    y.stop().animate({
                        transform: ""
                    }, c, "elastic")
                }), s += u, l.push(y)
            }, v = 0, m = n.length; m > v; v++) y = n[v], d += y;
        for (u in n) h(u);
        return l
    }, drawStackedBars = function(t, r, e, n, o, a, i, s) {
        function l(t, r, e, n, o) {
            return u.rect(t, r, e, n).attr(o)
        }
        for (var u = this, p = this.set(), h = 0, c = 0, f = function(a) {
                var u = o[a],
                    f = n * u / c,
                    d = t - .5 * e,
                    y = r + .5 * n - h,
                    v = e,
                    m = i[a],
                    g = 500,
                    _ = l(d, y - f, v, f, {
                        fill: m,
                        stroke: s,
                        "stroke-width": 1
                    });
                h += f, _.mouseover(function() {
                    _.stop().animate({
                        transform: "s1.1 1.1 " + t + " " + r
                    }, g, "elastic")
                }).mouseout(function() {
                    _.stop().animate({
                        transform: ""
                    }, g, "elastic")
                }), p.push(_)
            }, d = 0, y = o.length; y > d; d++) c += o[d];
        for (d = 0; y > d; d++) f(d);
        return p
    }, hr = function(t) {
        function r(t) {
            var e, n, o, a, i, s, l, u, p, h;
            e = this, r.__super__.constructor.call(this, t), e.styles = null != (o = t.styles) ? o : "", e.colors = null != (a = t.colors) ? a : [], e.titles = null != (i = t.titles) ? i : ["", "", "", "", ""], e.values = null != (s = t.values) ? s : [], e.width = null != (l = t.width) ? l : 17, e.height = null != (u = t.height) ? u : 30, e["class"] = null != (p = t["class"]) ? p : "barchart", null == (h = (n = Raphael.fn).drawStackedBarChart) && (n.drawStackedBarChart = drawStackedBars)
        }
        return he(r, t), r.prototype.overlaps = function(t) {
            var r, e, n, o, a, i, s, l, u, p, h;
            return n = this, p = [n.x, n.y, n.radius], i = p[0], l = p[1], o = p[2], h = [t.x, t.y, t.radius], s = h[0], u = h[1], a = h[2], i - o > s + a || s - a > i + o || l - o > u + a || u - a > l + o ? !1 : (r = i - s, e = l - u, r * r + e * e > (o + a) * (o + a) ? !1 : !0)
        }, r.prototype.render = function() {
            var t, r, e, n, o, a;
            return e = this, n = e.width, r = e.height, o = e.x, a = e.y, t = e.layers.mapcanvas.rect(o - .5 * n - 2, a - .5 * r - 2, n + 4, r + 4).attr({
                stroke: "none",
                fill: "#fff"
            }), e.chart = e.layers.mapcanvas.drawStackedBarChart(e.x, e.y, e.width, e.height, e.values, e.titles, e.colors, "none"), e.chart.push(t), e
        }, r.prototype.update = function() {
            var t;
            t = this
        }, r.prototype.clear = function() {
            var t, r, e, n, o;
            for (t = this, o = t.chart, e = 0, n = o.length; n > e; e++) r = o[e], r.remove();
            return t.chart = [], t
        }, r.prototype.nodes = function() {
            var t, r, e, n, o, a;
            for (r = this, o = r.chart, a = [], e = 0, n = o.length; n > e; e++) t = o[e], a.push(t.node);
            return a
        }, r
    }(Pr.Symbol), hr.props = ["values", "styles", "class", "titles", "colors", "width", "height"], hr.layers = [], Nr.kartograph.StackedBarChart = hr
}.call(this);