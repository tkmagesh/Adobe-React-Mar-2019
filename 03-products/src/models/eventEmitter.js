class EventEmitter{
	_listeners = [];

	subscribe =(listenerFn) => {
		this._listeners.push(listenerFn);
	}

	triggerChange = () => {
		this._listeners.forEach(listenerFn => listenerFn());
	}
}

export default EventEmitter;