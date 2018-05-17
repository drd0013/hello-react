class Thing {
  constructor() {
    this._data = {
      initial: "foo"
    };
    this._subscribers = [];

    this.updateData = function(key, newValue) {
      if (this._data[key] === newValue) {
        return;
      }
      var newData = Object.assign(this._data);
      newData[key] = newValue;
      this._data = newData;
      this._subscribers.forEach((callbackList) => {
        if (!callbackList[1] || callbackList[1] === key) {
            callbackList[0](key, newValue);
        }
      });
    };

    this.subscribe = function(callback, value=null) {
      this._subscribers.push([callback, value]);
    };
  }

  get data() {
    return this._data;
  }
}

class OtherComponent {
  constructor(thing) {
    console.log(thing);
    thing.subscribe(this.updateWhenThingChanges);
    thing.subscribe(this.updateWhenThingChanges, 'foo');
  }

  updateWhenThingChanges(changedKey, changedValue) {
    console.log("thing changed!", changedKey, changedValue);
  }
}
