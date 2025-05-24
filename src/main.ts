import { Plugin } from "obsidian";

export default class MyPlugin extends Plugin {
	scrollToTop() {
		document?.querySelector(".nav-files-container")?.scroll(0, 0);
	}

	async onload() {
		this.addCommand({
			id: "scroll-to-nav-top",
			name: "Scroll To Nav Top",
			callback: this.scrollToTop,
		});
	}
}
