class EventEmitter {
    constructor() {
      this._events = {};
    }
    on(event, callback) {
      let callbacks = this._events[event] || [];
      callbacks.push(callback);
      this._events[event] = callbacks;
    }
    once(event,callback){
        
    }
    off(event) {
      delete this._events[event]
    }
    emit(event) {
      let callbacks = this._events[event];
      let marker = this._events[event].once;
      if (!callbacks || callbacks.length === 0) {
        throw new Error('You should register listener for event ' + event);
      }
      else if(marker === true ){
        let args_marker = [].slice.call(arguments, 0);
        callbacks.forEach(fn => fn.apply(this, args_marker));
      }
        let args = [].slice.call(arguments, 1);
        callbacks.forEach(fn => fn.apply(this, args));
    }
  }
