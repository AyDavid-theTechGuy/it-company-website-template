const navbarResponsive = document.querySelector(".navbar-responsive");
navbarResponsive.innerHTML = ``;

const adjNav = function () {
	if (window.innerWidth <= 976) {
		navbarResponsive.innerHTML = `
        <button
            class="btn btn-primary menu"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#menu"
            aria-controls="menu"
        >
            <i class="fa fa-bars text-white"></i>
        </button>
        <div
            class="offcanvas offcanvas-start offcanvas-view"
            tabindex="-1"
            id="menu"
            aria-labelledby="menuLabel"
        >
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="menuLabel">
                    NexaTech Solutions
                </h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div class="offcanvas-body">
                <div class="menu-sect">
                    <a class="nav-link" href="#">HOME</a>
                </div>
                <div class="menu-sect submenu">
                    <a class="nav-link dropdown-btn" href="#"
                        >SERVICES <i class="fa fa-chevron-down"></i
                    ></a>
                    <ul class="dropdown-content m-auto">
                        <li>
                            <a class="submenu-item" href="#">Ecommerce Solutions</a>
                        </li>
                        <li><a class="submenu-item" href="#">Data Analytics</a></li>
                        <li><a class="submenu-item" href="#">IT Consulting</a></li>
                        <li><a class="submenu-item" href="#">More</a></li>
                    </ul>
                </div>
                <div class="menu-sect submenu">
                    <a class="nav-link dropdown-btn" href="#"
                        >PRODUCTS <i class="fa fa-chevron-down"></i
                    ></a>
                    <ul class="dropdown-content m-auto">
                        <li>
                            <a class="submenu-item" href="#">Applications</a>
                        </li>
                        <li>
                            <a class="submenu-item" href="#">Analytics Tools</a>
                        </li>
                    </ul>
                </div>
                <div class="menu-sect">
                    <a class="nav-link" href="#">ABOUT US</a>
                </div>
                <div class="g-i-t">
                    <a class="btn btn-getintouch" href="#">GET IN TOUCH</a>
                </div>
            </div>
        </div>`;
	} else {
		navbarResponsive.innerHTML = `
            <ul class="navbar-nav ms-auto">
                <li class="nav-item pe-4">
                    <a class="nav-link tex" href="#">HOME</a>
                </li>
                <li class="nav-item pe-4 submenu">
                    <a class="nav-link dropdown-btn" href="#"
                        >SERVICES <i class="fa fa-chevron-down"></i
                    ></a>
                    <ul class="dropdown-content m-auto">
                        <li>
                            <a class="submenu-item" href="#">Ecommerce Solutions</a>
                        </li>
                        <li><a class="submenu-item" href="#">Data Analytics</a></li>
                        <li><a class="submenu-item" href="#">IT Consulting</a></li>
                        <li><a class="submenu-item" href="#">More</a></li>
                    </ul>
                </li>
                <li class="nav-item pe-4 submenu">
                    <a class="nav-link dropdown-btn" href="#"
                        >PRODUCTS <i class="fa fa-chevron-down"></i
                    ></a>
                    <ul class="dropdown-content m-auto">
                        <li>
                            <a class="submenu-item" href="#">Applications</a>
                        </li>
                        <li>
                            <a class="submenu-item" href="#">Analytics Tools</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item pe-4">
                    <a class="nav-link" href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                    <a class="btn btn-getintouch" href="#">GET IN TOUCH</a>
                </li>
	        </ul>`;
	}
};
adjNav();

window.addEventListener("resize", function () {
	location.reload();
	adjNav();
});
