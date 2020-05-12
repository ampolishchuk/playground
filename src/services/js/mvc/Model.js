export class Model {
	_state = {};
	constructor(state) {
		this._state = state;
	}
	set state(state) {
		this._state = { ...this._state, ...state };

		this._observerList.length &&
			this._observerList.forEach((callback) => callback(this.state));
	}
	get state() {
		return this._state;
	}
	addObserver(callback) {
		this._observerList.push(callback);
	}
}
