import { Plugin } from "obsidian";

export default class ScrollToNavTop extends Plugin {
	scrollToTop() {
		document?.querySelector(".nav-files-container")?.scroll(0, 0);
	}

	async onload() {
		// https://lucide.dev/icons/circle-fading-arrow-up
		this.addRibbonIcon(
			"circle-fading-arrow-up",
			"Scroll to nav top",
			() => {
				this.scrollToTop();
			}
		);

		this.addCommand({
			id: "scroll-to-nav-top",
			name: "Scroll to nav top",
			callback: this.scrollToTop,
		});
	}
}
