const testCallback = () => {
    console.log("Callback Working");
  };
  
  class Events {
    constructor(){
      this.allEvents = new Map();
    }
    
    // Register an event handler
    on(eventName, callback) {
      if (!this.allEvents.get(eventName)){
        this.allEvents.set(eventName,[callback]);
      }
      else{
        this.allEvents.get(eventName).push(callback);
      }
    }
  
    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {
      if(this.allEvents.get(eventName))
      {    
        this.allEvents.get(eventName).forEach(callback => {
        callback();
      })
      }
    }
  
    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
      if(this.allEvents.get(eventName)) {
        this.allEvents.delete(eventName);
      }
    }
  }
  
   let events = new Events();
  
  // console.log("Working");
      
  $('.on').on('click', () => {
    console.log("On Click");
    events.on('TestEvent', testCallback);
  });
  
  $('.trigger').on('click', () => {
    console.log("Trigger Click")
    events.trigger('TestEvent');
  });
  
  $('.off').on('click', () => {
    console.log("Off Click")
    events.off('TestEvent');
  });