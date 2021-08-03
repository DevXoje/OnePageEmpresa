export default class Counts {
	private items: NodeListOf<HTMLElement>;
	private values: Array<{ number: number; title: string }>;
	constructor() {
		this.items = document.querySelectorAll(
			'.count'
		) as NodeListOf<HTMLElement>;
		console.log(document.querySelectorAll('count'));

		this.values = [
			{ number: 2500, title: 'Happy clients' },
			{ number: 300, title: 'Full notebooks' },
			{ number: 120, title: 'Teammates' },
			{ number: 30, title: 'Stores' },
		];
	}
	setNumbers() {
		for (let i = 0; i < this.items.length; i++) {
			const item = this.items[i];
			const num = item.querySelector('span') as HTMLElement;
			const title = item.querySelector('h4') as HTMLElement;
			num.innerHTML = this.values[i].number.toString();
			title.innerHTML = this.values[i].title;
		}
	}
}
