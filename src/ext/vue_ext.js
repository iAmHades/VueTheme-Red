exports.install = function(Vue, options) {

    Object.defineProperties(Vue.prototype, {

        $prefixedEvent: {
            get: function() {
                return prefixedEvent.bind(this)
            }
        },

        $h5setValue: {
            get: function() {
                return h5setValue
            }
        },

        $h5getValue: {
            get: function() {
                return h5getValue
            }
        },

        $h5remove: {
            get: function() {
                return h5remove
            }
        },

        $getCookie: {
            get: function() {
                return getCookie
            }
        },

        $setHeaders: {
            get: function() {
                return setHeaders
            }
        },

        $formate: {
            get: function() {
                return dateFormate
            }
        },

        $listen: {
            get: function() {
                return eventListener
            }
        },

        $coerceBoolean: {
            get: function() {
                return coerceBoolean
            }
        }

    })

    // localstorage的存储
    var h5setValue = function(key, value) {
        window.localStorage.setItem(key, value)
    }

    // localstorage的查询
    var h5getValue = function(key) {
        return window.localStorage.getItem(key)
    }

    var h5remove = function(key) {
        window.localStorage.removeItem(key)
    }

    // 获取cookie的值
    var getCookie = function(key) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(key + '=')
            if (c_start !== -1) {
                c_start = c_start + key.length + 1
                var c_end = document.cookie.indexOf('', c_start)
                if (c_end === -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ''
    }

    // request中设置header
    var setHeaders = function(json) {
        Object.keys(json).forEach(function(key) {
            Vue.http.headers.common[key] = json[key]
        })
    }

    // 监听各浏览器动画状态，以便回调 type为：animationstart animationiteration animationend
    var prefixedEvent = function(element, type, callback) {
        callback.bind(this)
        var pfx = ['webkit', 'moz', '']
        for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) type = type.toLowerCase()
            element.addEventListener(pfx[p] + type, callback, false)
        }
    }

    // 为了兼容safari中的日期格式转换,而统一做的在月前加上0
    var dateFormate = function(date) {
        var dates = date.split('-')
        var year = dates[0]
        var month = dates[1]
        var day = dates[2]
        if (parseInt(month) < 10) {
            month = '0' + month
        }
        if (parseInt(day) < 10) {
            day = '0' + day
        }
        return year + '-' + month + '-' + day
    }

    // 事件监听
    var eventListener = function(target, eventType, callback) {
        if (target.addEventListener) {
            target.addEventListener(eventType, callback, false)
            return {
                remove() {
                    target.removeEventListener(eventType, callback, false)
                }
            }
        } else if (target.attachEvent) {
            target.attachEvent('on' + eventType, callback)
            return {
                remove() {
                    target.detachEvent('on' + eventType, callback)
                }
            }
        }
    }

    // 判断boolean值
    var coerceBoolean = function(val) {
        return (typeof val !== 'string' ? val
           : val === 'true' ? true
           : val === 'false' ? false
           : val === 'null' ? false
           : val === 'undefined' ? false : val)
    }

    // 拦截器
    Vue.http.interceptors.push({
        request: function(request) {
            // TODO
            return request
        },
        response: function(response) {
            // TODO
            return response
        }
    })

}