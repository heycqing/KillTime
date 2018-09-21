Object.prototype.$emit = function(name) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (this._events && this._events[name])
      this._events[name].forEach(function(cb) { cb.apply(this, args) }.bind(this));
    return this;
  };
  Object.prototype.$off = function(name, cb) {
    if (!this._events) return this;
    if (!cb) delete this._events[name];
    if (this._events[name]) this._events[name] = this._events[name].filter(function(i) { return i != cb });
    return this;
  };
  Object.prototype.$on = function(name, cb) {
    if (!this._events) this._events = {};
    if (!this._events[name]) this._events[name] = [];
    this._events[name].push(cb);
    return cb;
  };
  Object.prototype.$once = function(name, cb) {
    var wrapper, self = this;
    wrapper = function() { 
        self.$off(name, wrapper); 
        cb.apply(this, arguments); 
    };
    this.$on(name, wrapper);
    return wrapper;
  };


  var a = new Object();
  a.$on('click',(a)=>console.log(a+'1'))
  a.$emit('click',4)