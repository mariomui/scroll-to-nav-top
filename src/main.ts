import { Plugin } from "obsidian";

export default class MyPlugin extends Plugin {
	scrollToTop() {
		document?.querySelector(".nav-files-container")?.scroll(0, 0);
	}

	async onload() {
		// https://lucide.dev/icons/circle-fading-arrow-up
		this.addRibbonIcon(
			"circle-fading-arrow-up",
			"Scroll To Nav Top",
			() => {
				this.scrollToTop();
			}
		);

		this.addCommand({
			id: "scroll-to-nav-top",
			name: "Scroll To Nav Top",
			callback: this.scrollToTop,
		});
	}
}
