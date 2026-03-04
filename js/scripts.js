// --- Data Dummy ---
const alphabets = [
    { letter: "A", image: "images/abjad/A.png", description: "Gerakan tangan untuk huruf A. (Buka tangan, ibu jari di samping)" },
    { letter: "B", image: "images/abjad/B.png", description: "Gerakan tangan untuk huruf B. (Empat jari tegak, ibu jari di depan telapak tangan)" },
    { letter: "C", image: "images/abjad/C.png", description: "Gerakan tangan untuk huruf C. (Tangan membentuk huruf C)" },
    { letter: "D", image: "images/abjad/D.png", description: "Gerakan tangan untuk huruf D. (Jari telunjuk tegak, jari lain melingkar)" },
    { letter: "E", image: "images/abjad/E.png", description: "Gerakan tangan untuk huruf E. (Jari-jari ditekuk ke dalam telapak tangan)" },
    { letter: "F", image: "images/abjad/F.png", description: "Gerakan tangan untuk huruf F. (Tiga jari tegak, ibu jari dan telunjuk bersentuhan)" },
    { letter: "G", image: "images/abjad/G.png", description: "Gerakan tangan untuk huruf G. (Kepalan tangan, telunjuk lurus ke samping)" },
    { letter: "H", image: "images/abjad/H.png", description: "Gerakan tangan untuk huruf H. (Telunjuk dan jari tengah lurus ke samping)" },
    { letter: "I", image: "images/abjad/I.png", description: "Gerakan tangan untuk huruf I. (Kelingking tegak)" },
    { letter: "J", image: "images/abjad/J.png", description: "Gerakan tangan untuk huruf J. (Kelingking tegak lalu melengkung ke bawah)" },
    { letter: "K", image: "images/abjad/K.png", description: "Gerakan tangan untuk huruf K. (Telunjuk dan jari tengah tegak, ibu jari di antara)" },
    { letter: "L", image: "images/abjad/L.png", description: "Gerakan tangan untuk huruf L. (Tangan membentuk huruf L)" },
    { letter: "M", image: "images/abjad/M.png", description: "Gerakan tangan untuk huruf M. (Tiga jari di atas ibu jari)" },
    { letter: "N", image: "images/abjad/N.png", description: "Gerakan tangan untuk huruf N. (Dua jari di atas ibu jari)" },
    { letter: "O", image: "images/abjad/O.png", description: "Gerakan tangan untuk huruf O. (Jari membentuk lingkaran)" },
    { letter: "P", image: "images/abjad/P.png", description: "Gerakan tangan untuk huruf P. (Mirip K, tapi telunjuk dan tengah menunjuk ke bawah)" },
    { letter: "Q", image: "images/abjad/Q.png", description: "Gerakan tangan untuk huruf Q. (Mirip G, tapi telunjuk menunjuk ke bawah)" },
    { letter: "R", image: "images/abjad/R.png", description: "Gerakan tangan untuk huruf R. (Jari tengah silang dengan telunjuk)" },
    { letter: "S", image: "images/abjad/S.png", description: "Gerakan tangan untuk huruf S. (Kepalan tangan, ibu jari di depan)" },
    { letter: "T", image: "images/abjad/T.png", description: "Gerakan tangan untuk huruf T. (Telunjuk di atas ibu jari, jari lain ditekuk)" },
    { letter: "U", image: "images/abjad/U.png", description: "Gerakan tangan untuk huruf U. (Jari telunjuk dan tengah tegak lurus)" },
    { letter: "V", image: "images/abjad/V.png", description: "Gerakan tangan untuk huruf V. (Jari telunjuk dan tengah membentuk V)" },
    { letter: "W", image: "images/abjad/W.png", description: "Gerakan tangan untuk huruf W. (Tiga jari tegak seperti W)" },
    { letter: "X", image: "images/abjad/X.png", description: "Gerakan tangan untuk huruf X. (Telunjuk ditekuk seperti kait)" },
    { letter: "Y", image: "images/abjad/Y.png", description: "Gerakan tangan untuk huruf Y. (Ibu jari dan kelingking tegak)" },
    { letter: "Z", image: "images/abjad/Z.png", description: "Gerakan tangan untuk huruf Z. (Telunjuk melengkung seperti Z)" }
];

const words = [
    { word: "Halo", image: "", description: "Sapaan umum: Angkat tangan dan lambaikan jari-jari." },
    { word: "Terima Kasih", image: "", description: "Ungkapan syukur: Letakkan ujung jari di dagu lalu gerakkan ke depan." },
    { word: "Tolong", image: "", description: "Meminta bantuan: Letakkan tangan terbuka di dada dan gerakkan ke depan." },
    { word: "Maaf", image: "", description: "Meminta maaf: Gosokkan kepalan tangan di dada." },
    { word: "Nama", image: "", description: "Menanyakan/menyebut nama: Jari telunjuk dan tengah menyentuh dahi lalu bergerak ke samping." },
    { word: "Saya", image: "", description: "Menunjuk diri sendiri: Tunjuk dada dengan jari telunjuk." },
    { word: "Tidak", image: "", description: "Penolakan: Ayunkan tangan ke samping dari arah bahu." },
    { word: "Ya", image: "", description: "Perserujuan: Kepalan tangan mengangguk dari pergelangan tangan." }
];

const numbers = [
    { number: "1", image: "images/angka/1.png", description: "Satu jari tegak." },
    { number: "2", image: "images/angka/2.png", description: "Dua jari tegak." },
    { number: "3", image: "images/angka/2.png", description: "Tiga jari tegak (ibu jari juga ikut)." },
    { number: "4", image: "images/angka/4.png", description: "Empat jari tegak." },
    { number: "5", image: "images/angka/5.png", description: "Lima jari tegak (tangan terbuka)." },
    { number: "6", image: "images/angka/6.png", description: "Kelingking dan ibu jari terbuka, jari lain ditekuk." },
    { number: "7", image: "images/angka/7.png", description: "Ibu jari dan kelingking terbuka, jari lain melingkar." },
    { number: "8", image: "images/angka/8.png", description: "Ibu jari dan telunjuk bersentuhan, jari lain terbuka. (Seperti yang di gambar referensi)" },
    { number: "9", image: "images/angka/9.png", description: "Telunjuk melengkung menyentuh ibu jari, jari lain ditekuk." },
    { number: "10", image: "images/angka/10.png", description: "Tangan mengepal, ibu jari tegak dan digoyangkan." }
];

const videos = [
    { title: "Pengenalan Bahasa Isyarat (BISINDO)", youtubeId: "NaafQwd0XEY?si=6l-xaRDGV7PdWpbB", description: "Memahami dasar-dasar BISINDO." },
    { title: "Abjad Bahasa Isyarat A-Z", youtubeId: "IIfLZ86xOzY?si=chfxviadso5TaCl1", description: "Panduan lengkap abjad tangan." },
    { title: "Frasa Sehari-hari BISINDO", youtubeId: "QKdpvwKkgk4?si=Ja4rSdTE9ovO4rW4", description: "Belajar percakapan dasar." },
    { title: "Frasa Sehari-hari BISINDO", youtubeId: "50oEnzX2GtE?si=q4m-E48A-7VwkZws", description: "Belajar percakapan dasar." }

    // Tambahkan lebih banyak video di sini
];

// --- Fungsi untuk memuat konten ke halaman ---

function loadAlphabetContent() {
    const alphabetButtonsContainer = document.getElementById('alphabet-buttons-container');
    const currentAlphabetImage = document.getElementById('current-alphabet-image');
    const currentAlphabetLetter = document.getElementById('current-alphabet-letter');
    const currentAlphabetDescription = document.getElementById('current-alphabet-description');

    if (alphabetButtonsContainer) {
        alphabetButtonsContainer.innerHTML = ''; // Kosongkan kontainer sebelum mengisi
        alphabets.forEach((alpha, index) => {
            const button = document.createElement('button');
            button.className = 'btn btn-outline-primary btn-sign-letter';
            button.textContent = alpha.letter;
            button.setAttribute('data-index', index); // Simpan index data

            button.addEventListener('click', function() {
                // Hapus kelas 'active' dari semua tombol
                document.querySelectorAll('.btn-sign-letter').forEach(btn => btn.classList.remove('active'));
                // Tambahkan kelas 'active' ke tombol yang diklik
                this.classList.add('active');

                // Tampilkan detail
                currentAlphabetImage.src = alpha.image;
                currentAlphabetImage.alt = `Isyarat untuk huruf ${alpha.letter}`;
                currentAlphabetLetter.textContent = alpha.letter;
                currentAlphabetDescription.textContent = alpha.description;
            });
            alphabetButtonsContainer.appendChild(button);

            // Set default tampilan awal ke huruf pertama (opsional, bisa dihapus)
            if (index === 0) {
                button.click(); // Otomatis klik tombol pertama saat halaman dimuat
            }
        });
    }
}

function loadWordContent() {
    const wordButtonsContainer = document.getElementById('word-buttons-container');
    const currentWordImage = document.getElementById('current-word-image');
    const currentWordText = document.getElementById('current-word-text');
    const currentWordDescription = document.getElementById('current-word-description');

    if (wordButtonsContainer) {
        wordButtonsContainer.innerHTML = '';
        words.forEach((word, index) => {
            const button = document.createElement('button');
            button.className = 'btn btn-outline-success btn-sign-word'; // Warna hijau untuk kata
            button.textContent = word.word;
            button.setAttribute('data-index', index);

            button.addEventListener('click', function() {
                document.querySelectorAll('.btn-sign-word').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                currentWordImage.src = word.image;
                currentWordImage.alt = `Isyarat untuk kata ${word.word}`;
                currentWordText.textContent = word.word;
                currentWordDescription.textContent = word.description;
            });
            wordButtonsContainer.appendChild(button);

            // Set default tampilan awal ke kata pertama (opsional)
            if (index === 0) {
                button.click();
            }
        });
    }
}

// Catatan: Jika ingin halaman 'angka.html' terpisah, buat fungsi serupa 'loadNumberContent'
// dan duplikasi struktur HTML dari abjad.html/kata.html.
// Jika ingin digabung di 'kata.html', tambahkan bagian baru di HTML dan panggil fungsi di bawah.

// Fungsi untuk Belajar Angka (Jika ingin digabung di kata.html atau halaman baru)
function loadNumberContent() {
    const numberButtonsContainer = document.getElementById('number-buttons-container'); // Pastikan ID ini ada di HTML
    const currentNumberImage = document.getElementById('current-number-image'); // Pastikan ID ini ada
    const currentNumberText = document.getElementById('current-number-text'); // Pastikan ID ini ada
    const currentNumberDescription = document.getElementById('current-number-description'); // Pastikan ID ini ada

    if (numberButtonsContainer) {
        // ... Logika serupa dengan alphabet/word, tapi menggunakan data 'numbers' ...
        numbers.forEach((num, index) => {
            const button = document.createElement('button');
            button.className = 'btn btn-outline-info btn-sign-number'; // Warna info untuk angka
            button.textContent = num.number;
            button.setAttribute('data-index', index);

            button.addEventListener('click', function() {
                document.querySelectorAll('.btn-sign-number').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                currentNumberImage.src = num.image;
                currentNumberImage.alt = `Isyarat untuk angka ${num.number}`;
                currentNumberText.textContent = num.number;
                currentNumberDescription.textContent = num.description;
            });
            numberButtonsContainer.appendChild(button);

            if (index === 0) {
                button.click();
            }
        });
    }
}


function loadVideoContent() {
    const videoContainer = document.getElementById('video-container');
    if (videoContainer) {
        videoContainer.innerHTML = '';
        videos.forEach(video => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col'; // Gunakan col, Bootstrap akan mengatur grid otomatis

            colDiv.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <div class="card-body p-3">
                        <h5 class="card-title mb-3">${video.title}</h5>
                        <div class="ratio ratio-16x9 mb-3"> <iframe 
                                src="https://www.youtube.com/embed/${video.youtubeId}" 
                                title="${video.title}"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <p class="card-text">${video.description}</p>
                    </div>
                </div>
            `;
            videoContainer.appendChild(colDiv);
        });
    }
}

// --- Panggil fungsi saat DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', function() {
    // Panggil fungsi yang sesuai dengan halaman yang sedang dibuka
    if (document.getElementById('alphabet-buttons-container')) {
        loadAlphabetContent();
    }
    if (document.getElementById('word-buttons-container')) {
        loadWordContent();
    }
    // Jika kalian punya halaman untuk angka, panggil di sini
    if (document.getElementById('number-buttons-container')) {
        loadNumberContent();
    }
    if (document.getElementById('video-container')) {
        loadVideoContent();
    }
});