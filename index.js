const osekaiMedals = "https://inex.osekai.net/medals/";

const observer = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		if (!mutation.addedNodes.length) return;

		const medals = document?.getElementsByClassName(
			"badge-achievement__image"
		);
		if (!medals) return;

		for (let i = 0; i < medals.length; i++) {
			const alt = medals[i]?.getAttribute("alt");
			if (!alt) continue;

			medals[i].style.cursor = "pointer";
			medals[i].onclick = () => {
				window.open(osekaiMedals + alt, "_blank");
			};
		}
	});
});

observer.observe(document.body, { childList: true, subtree: true });
