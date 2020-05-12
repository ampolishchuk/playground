import { Model } from '../../services/js/mvc/Model';
import { View } from '../../services/js/mvc/View';
import { Controller } from '../../services/js/mvc/Controller';

export class Slider {
	constructor(state) {
		state = {
			min: 0,
			max: 100,
			step: 1,
			showInfo: true,
		};

		this.model = new SliderModel(state);
		this.view = new SliderView(state);
		this.controller = new SliderController();
	}
}

class SliderModel extends Model {
	constructor(state) {
		super(state);
	}
}
class SliderView extends View {
	constructor(state) {
		require('./slider.sass');

		super({ template: require('./slider.pug'), state });
	}
}
class SliderController extends Controller {}
