// Generated by IcedCoffeeScript 1.7.1-b
(function() {
  var Base, Thread, iced, make_esc, __iced_k, __iced_k_noop,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  iced = require('iced-coffee-script').iced;
  __iced_k = __iced_k_noop = function() {};

  Base = require('./base').Base;

  make_esc = require('iced-error').make_esc;

  Thread = (function(_super) {
    __extends(Thread, _super);

    function Thread(opts) {
      Thread.__super__.constructor.call(this, opts);
    }

    Thread.prototype.init_thread = function(cb) {
      var body, esc, res, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "Thread::init_thread");
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/home/max/src/keybase/messenger-client/src/thread.iced",
            funcname: "Thread.init_thread"
          });
          _this.request({
            endpoint: "challenge",
            method: "GET"
          }, esc(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                res = arguments[0];
                return body = arguments[1];
              };
            })(),
            lineno: 18
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          console.log(body);
          return cb(null);
        };
      })(this));
    };

    return Thread;

  })(Base);

}).call(this);