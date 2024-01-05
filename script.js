let currentIndex = 0;

        function showSlide(index) {
            const carousel = document.getElementById("carousel");
            const totalSlides = document.querySelectorAll(".carousel-item").length;

            if (index < 0) {
                currentIndex = totalSlides - 1;
            } else if (index >= totalSlides) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }

            const transformValue = -currentIndex * 100 + "%";
            carousel.style.transform = `translateX(${transformValue})`;
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        setInterval(nextSlide, 3000);