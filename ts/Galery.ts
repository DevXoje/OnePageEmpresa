export default class Galery {
	private controls: { prev: HTMLElement; next: HTMLElement };
	private items: NodeListOf<HTMLElement>;
	constructor() {
		this.controls = {
			prev: document.querySelector('.fa-chevron-left') as HTMLElement,
			next: document.querySelector('.fa-chevron-right') as HTMLElement,
		};
		this.items = document.querySelectorAll('.project');
	}
	setConfig() {
		this.configPrev();
		this.configNext();
	}
	configPrev() {
		this.controls.prev.onclick = () => {
			const output: Array<string> = [];
			this.items.forEach(item => output.push(item.innerHTML));
			for (let i = 0; i < this.items.length; i++) {
				const item = this.items[i];
				item.innerHTML = output[i == this.items.length - 1 ? 0 : i + 1];
			}
		};
	}
	configNext() {
		this.controls.next.onclick = () => {
			const output: Array<string> = [];
			this.items.forEach(item => output.push(item.innerHTML));
			for (let i = 0; i < this.items.length; i++) {
				const item = this.items[i];
				item.innerHTML = output[i == 0 ? this.items.length - 1 : i - 1];
			}
		};
	}
}
