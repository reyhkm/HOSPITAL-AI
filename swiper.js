// swiper-init.js

// Services Swiper
var swiperServices = new Swiper(".mySwiperservices", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// Team Swiper
var swiperTeam = new Swiper(".mySwiperteam", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    560: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1250: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// Testimonials Swiper
var swiperTesti = new Swiper(".mySwipertesti", {
  pagination: {
    el: ".swiper-pagination",
  },
});


document.addEventListener('DOMContentLoaded', () => {
    // ... kode Swiper dan Search Dummy Anda di sini ...

    // --- Fungsionalitas Modal Layanan ---
    const serviceModal = document.getElementById('service-modal');
    const closeModalBtn = serviceModal.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    // Data lengkap untuk setiap layanan (sesuaikan deskripsi ini)
    const serviceDetails = {
      "Perawatan Gigi": {
        title: "Detail Layanan Perawatan Gigi",
        description:
          "MentaCare menyediakan perawatan gigi komprehensif mulai dari pembersihan karang gigi (scaling), penambalan gigi berlubang, pencabutan gigi, hingga pemasangan kawat gigi (ortodontik). Tim dokter gigi kami berdedikasi untuk menjaga kesehatan mulut dan senyum indah Anda dengan peralatan modern dan standar kebersihan tinggi.",
      },
      "Kesehatan Mata": {
        title: "Detail Layanan Kesehatan Mata",
        description:
          "Layanan kesehatan mata di MentaCare meliputi pemeriksaan mata rutin, tes ketajaman penglihatan, diagnosa dan penanganan katarak, glaukoma, serta kelainan refraksi (minus/plus/silinder). Kami juga menyediakan resep kacamata dan lensa kontak yang akurat. Jaga kesehatan mata Anda bersama kami.",
      },
      Kardiologi: {
        title: "Detail Layanan Kardiologi (Jantung)",
        description:
          "Departemen kardiologi MentaCare fokus pada pencegahan, diagnosis, dan pengobatan penyakit jantung dan pembuluh darah. Layanan kami meliputi EKG, Ekokardiografi, tes treadmill, hingga konsultasi gaya hidup sehat untuk menjaga kesehatan jantung Anda.",
      },
      "Pemeriksaan Umum": {
        title: "Detail Layanan Pemeriksaan Umum",
        description:
          "Pemeriksaan umum adalah fondasi kesehatan Anda. MentaCare menyediakan konsultasi dokter umum, pemeriksaan fisik menyeluruh, imunisasi (vaksinasi) untuk segala usia, serta pemeriksaan kesehatan berkala (medical check-up) untuk deteksi dini masalah kesehatan dan pencegahan penyakit.",
      },
      // Tambahkan detail untuk layanan lain jika ada
    };

    // Tangani klik pada setiap tombol "Pelajari Lebih Lanjut"
    document.querySelectorAll('#our-services .service-box a').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Mencegah default link behavior (misalnya scroll ke atas)

            const serviceBox = event.target.closest('.service-box');
            const serviceName = serviceBox.querySelector('strong').textContent; // Ambil nama layanan

            const detail = serviceDetails[serviceName];

            if (detail) {
                modalTitle.textContent = detail.title;
                modalDescription.textContent = detail.description;
                serviceModal.style.display = 'flex'; // Tampilkan modal
            } else {
                alert('Detail untuk layanan ini belum tersedia.'); // Fallback jika detail tidak ditemukan
            }
        });
    });

    // Tutup modal saat tombol silang diklik
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            serviceModal.style.display = 'none';
        });
    }

    // Tutup modal saat mengklik di luar konten modal
    if (serviceModal) {
        serviceModal.addEventListener('click', (event) => {
            if (event.target === serviceModal) {
                serviceModal.style.display = 'none';
            }
        });
    }

    // ... kode Subscribe Dummy Anda di sini ...

});

