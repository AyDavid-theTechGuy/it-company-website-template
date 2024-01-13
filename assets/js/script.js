const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const brand = document.querySelector(".navbar-brand");
const navHeight = navbar.getBoundingClientRect().height;
const navlink = document.querySelectorAll(".navbar-nav .nav-link");
const dropdown = document.querySelectorAll(".submenu .dropdown-btn");
const dropdownIcon = document.querySelectorAll(".submenu .dropdown-btn i");
const dropdownContent = document.querySelectorAll(".submenu .dropdown-content");

const stickyNav = (entries, observer) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			navbar.classList.add("fixed-top", "bg-white");
			brand.classList.remove("text-white");
			navbar.style.boxShadow = "0 0 15px #d1d1d1";
			for (let i = 0; i < navlink.length; i++) {
				navlink[i].classList.remove("text-white");
			}
		} else {
			navbar.classList.remove("fixed-top", "bg-white");
			brand.classList.add("text-white");
			navbar.style.boxShadow = "none";
			for (let i = 0; i < navlink.length; i++) {
				navlink[i].classList.add("text-white");
			}
		}
	});
};

const options = {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(stickyNav, options);

headerObserver.observe(header);

// Submenus - Dropdowns

for (let i = 0; i < dropdown.length; i++) {
	dropdown[i].parentElement.addEventListener("mouseenter", () => {
		for (let j = 0; j < dropdownContent.length; j++) {
			if (i == j) {
				dropdownContent[j].classList.add("show");
			}
		}

		for (let k = 0; k < dropdownIcon.length; k++) {
			if (i == k) {
				dropdownIcon[k].classList.toggle("fa-chevron-down");
				dropdownIcon[k].classList.toggle("fa-chevron-up");
			}
		}
	});

	dropdown[i].parentElement.addEventListener("mouseleave", () => {
		for (let j = 0; j < dropdownContent.length; j++) {
			if (i == j) {
				dropdownContent[j].classList.remove("show");
			}
		}

		for (let k = 0; k < dropdownIcon.length; k++) {
			if (i == k) {
				dropdownIcon[k].classList.toggle("fa-chevron-down");
				dropdownIcon[k].classList.toggle("fa-chevron-up");
			}
		}
	});
}
