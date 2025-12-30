const LINK = "https://inex.osekai.net/medals/";
const BADGE_CLASS = "badge-achievement__image";

/** for badges that have broken links (usually due to special characters).
 * an ideal solution would be to convert all badge names (alt) to their respective ids,
 * but there is only one known broken badge at the moment.
 * all osekai medal ids can be found here: https://inex.osekai.net/api/medals/get_all
 */
const BROKEN_BADGES = {
	"Any%": "194"
};

const isBadge = (element) => {
	return element.classList.contains(BADGE_CLASS);
};

// set cursor to pointer
document.addEventListener("mouseover", (event) => {
	const target = event.target;
	if (isBadge(target)) {
		target.style.cursor = "pointer";
	}
});

// parse and open medal page on click
document.addEventListener("click", (event) => {
	const target = event.target;
	if (!isBadge(target)) return;

	let alt = target.getAttribute("alt");
	if (!alt) return;

	// fix special broken badges (see BROKEN_BADGES)
	if (BROKEN_BADGES[alt]) alt = BROKEN_BADGES[alt];

	const encodedAlt = encodeURIComponent(alt); // converts special characters
	window.open(LINK + encodedAlt, "_blank");
});
