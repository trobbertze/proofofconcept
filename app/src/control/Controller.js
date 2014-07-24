define(
function(){
  if ( arguments.callee._singletonInstance ) {
    return arguments.callee._singletonInstance;
  }
  // ---------------------------------------------------------------------------
  Controller = function() {
    this.views = [];
  };
  // ---------------------------------------------------------------------------
  Controller.prototype.constructor = Controller;
  // ---------------------------------------------------------------------------
  Controller.prototype.register = function(view) {
    console.log('Registering view');
    this.views.push(view);
  };
  arguments.callee._singletonInstance = new Controller();
  return arguments.callee._singletonInstance;
});
