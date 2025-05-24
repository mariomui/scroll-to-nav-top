# -

## About

* @ Context
	* Obsidian note taking
* @ Problem/Value/Solution [PVS]
	* I don't use folders to organize notes. This creates situations where I am 300 files deep into my vault--scrolling up to check on some of the folders is arduous. This plugin scrolls to the top of the [file explorer](https://help.obsidian.md/plugins/file-explorer).

## Reference

# =

![#About|Simply scrolls up to the top of the file browser]

* @ For Users
	* Open Up Command Pallette and use the `Scroll To Nav Top`
	* 〽️ Click on the ![circle-fading-arrow-up](https://github.com/lucide-icons/lucide/blob/main/icons/circle-fading-arrow-up.svg)
* @ For Developers
	* @ # Testing
		* 📝 <https://github.com/ophidian-lib/build>
		* [Workflow]
			* # 10 Set The ENV
				* You may have to do this manually.
				* `export $OBSIDIAN_TEST_VAULT="PATH"`
			* # 20 Install Dependencies
				* `pnpm install`
			* # 30 Test
				* `pnpm dev`

# ---Transient

* ## Readme Log
* v0.0.1 2025-05-24
	* vscode doesn't support native mac text replacmeents feature. Use "memo" instead of regular heuristics for now.
		* 💁 [The vscode has no plans to support this issue](https://github.com/microsoft/vscode/issues/163134#issuecomment-1407543177)
