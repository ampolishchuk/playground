export class View {
	constructor({ template, state }) {
		this.node = this.createNode(template, state);
	}
	createNode(template, state) {
		try {
			const div = document.createElement('div');
			div.innerHTML = template ? template(this.state) : '';
			return div.firstChild || div;
		} catch (e) {
			console.error('Creating node error: ' + e);
		}
	}
	render() {
		const currentNode = this.node ? this.node : null;

		this.node = this.createNode();

		currentNode && currentNode.replaceWith(this.node);
	}
}
