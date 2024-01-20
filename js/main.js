// SCROLL
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
	"scroll",
	_.throttle(function () {
		if (window.scrollY > 500) {
			// 배지 숨기기
			// gsap.to(요소, 지속시간, 옵션);
			gsap.to(badgeEl, 0.6, {
				opacity: 0,
				display: "none",
			});
			// TO TOP
			gsap.to(toTopEl, 0.2, {
				x: 0,
			});
		} else {
			// 배지 보이기
			gsap.to(badgeEl, 0.6, {
				opacity: 100,
				display: "block",
			});
			// TO TOP
			gsap.to(toTopEl, 0.2, {
				x: 100,
			});
		}
	}, 300)
);
// _.throttle(함수, 시간)

toTopEl.addEventListener("click", function () {
	gsap.to(window, 0.7, {
		scrollTo: 0,
	});
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
	gsap.to(fadeEl, 1, {
		delay: (index + 1) * 0.7,
		opacity: 1,
	});
});

// SWIPER
// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper", {
	direction: "vertical",
	autoplay: true,
	loop: true,
});
new Swiper(".promotion .swiper", {
	autoplay: {
		delay: 5000,
	},
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	loop: true,
	pagination: {
		el: ".promotion .swiper-pagination",
		clickable: true,
	},
	navigation: {
		prevEl: ".promotion .swiper-prev",
		nextEl: ".promotion .swiper-next",
	},
});
new Swiper(".awards .swiper", {
	autoplay: true,
	loop: true,
	spaceBetween: 30,
	slidesPerView: 5,
	navigation: {
		prevEl: ".awards .swiper-prev",
		nextEl: ".awards .swiper-next",
	},
});

const promotionEl = document.querySelector(".promotion");
const paginationToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
paginationToggleBtn.addEventListener("click", function () {
	isHidePromotion = !isHidePromotion;
	if (isHidePromotion) {
		promotionEl.classList.add("hide");
	} else {
		promotionEl.classList.remove("hide");
	}
});

function random(min, max) {
	// `.toFixed()`를 통해 반환된 문자 데이터를,
	// `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
	return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
	gsap.to(selector, random(1.5, 2.5), {
		y: size,
		repeat: -1,
		yoyo: true,
		ease: Power1.easeInOut,
		delay: random(0, delay),
	});
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
	new ScrollMagic.Scene({
		triggerElement: spyEl,
		triggerHook: 0.8,
	})
		.setClassToggle(spyEl, "show")
		.addTo(new ScrollMagic.Controller());
});
