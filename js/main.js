var btn = document.getElementById("btn");
btn.onclick = function () {
	var text = document.querySelector(".header-text");
	text.classList.add("red");
	var img = document.querySelector(".logo");
	img.style.display = "none";
	var img = document.querySelector(".content-bg");
	img.style.display = "none";
}
$(function () {
	$(window).scroll(function () {
		$('.cont-future').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
	$(window).scroll(function () {
		$('.cont-order').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
	$(window).scroll(function () {
		$('.footer-p').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 850) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
})
