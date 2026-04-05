(function () {
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function (event) {
      const isClickInsideNav = primaryNav.contains(event.target);
      const isClickOnToggle = navToggle.contains(event.target);

      if (!isClickInsideNav && !isClickOnToggle && primaryNav.classList.contains("open")) {
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const currentPage = document.body.getAttribute("data-page");

  if (currentPage === "kamus") {
    setupDictionaryPage();
  }

  if (currentPage === "latihan") {
    setupQuizPage();
  }

  function setupDictionaryPage() {
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const dictionaryGrid = document.getElementById("dictionaryGrid");
    const emptyState = document.getElementById("emptyState");
    const data = window.S2S_DATA?.dictionary || [];

    function render(items) {
      dictionaryGrid.innerHTML = "";

      if (!items.length) {
        emptyState.classList.remove("hidden");
        return;
      }

      emptyState.classList.add("hidden");

      items.forEach(function (item) {
        const card = document.createElement("article");
        card.className = "card kamus-card";

        card.innerHTML = `
          <div class="kamus-image-wrap">
            <img
              class="kamus-image"
              src="${item.image}"
              alt="${item.alt || item.kata}"
              loading="lazy"
              onerror="this.src='../assets/img/kamus/no-image.png';"
            />
          </div>
          <span class="badge">${item.kategori}</span>
          <h3>${item.kata}</h3>
          <p>${item.deskripsi}</p>
        `;

        dictionaryGrid.appendChild(card);
      });
    }

    function filterData() {
      const keyword = searchInput.value.trim().toLowerCase();
      const category = categoryFilter.value;

      const filtered = data.filter(function (item) {
        const matchKeyword =
          item.kata.toLowerCase().includes(keyword) ||
          item.deskripsi.toLowerCase().includes(keyword);
        const matchCategory = category === "all" || item.kategori === category;

        return matchKeyword && matchCategory;
      });

      render(filtered);
    }

    searchInput.addEventListener("input", filterData);
    categoryFilter.addEventListener("change", filterData);

    render(data);
  }

  function setupQuizPage() {
    const STORAGE_KEY = "s2s_best_score_v1";
    const quizData = window.S2S_DATA?.quiz || [];
    const questionEl = document.getElementById("quizQuestion");
    const optionsEl = document.getElementById("quizOptions");
    const progressEl = document.getElementById("quizProgress");
    const scoreEl = document.getElementById("quizScore");
    const feedbackEl = document.getElementById("quizFeedback");
    const nextBtn = document.getElementById("nextQuestionBtn");
    const restartBtn = document.getElementById("restartQuizBtn");

    let currentIndex = 0;
    let score = 0;
    let answered = false;
    let bestScore = getBestScore();

    function getBestScore() {
      const value = localStorage.getItem(STORAGE_KEY);
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : 0;
    }

    function saveBestScore(value) {
      localStorage.setItem(STORAGE_KEY, String(value));
    }

    function setScoreText() {
      scoreEl.textContent = `Skor: ${score} | Best: ${bestScore}`;
    }

    function renderQuestion() {
      answered = false;
      feedbackEl.textContent = "";
      nextBtn.disabled = true;

      const item = quizData[currentIndex];
      progressEl.textContent = `Soal ${currentIndex + 1}/${quizData.length}`;
      setScoreText();
      questionEl.textContent = item.question;
      optionsEl.innerHTML = "";

      item.options.forEach(function (option) {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.type = "button";
        btn.textContent = option;

        btn.addEventListener("click", function () {
          if (answered) return;
          answered = true;

          const correct = option === item.answer;

          if (correct) {
            score += 10;
            btn.classList.add("correct");
            feedbackEl.textContent = "Benar. Bagus, lanjutkan.";
          } else {
            btn.classList.add("wrong");
            feedbackEl.textContent = `Kurang tepat. Jawaban benar: ${item.answer}`;
          }

          Array.from(optionsEl.children).forEach(function (child) {
            child.disabled = true;
            if (child.textContent === item.answer) {
              child.classList.add("correct");
            }
          });

          setScoreText();
          nextBtn.disabled = false;
        });

        optionsEl.appendChild(btn);
      });
    }

    function finishQuiz() {
      if (score > bestScore) {
        bestScore = score;
        saveBestScore(bestScore);
      }

      questionEl.textContent = "Kuis selesai.";
      optionsEl.innerHTML = "";
      progressEl.textContent = `Soal ${quizData.length}/${quizData.length}`;
      feedbackEl.textContent = `Skor akhir kamu: ${score}. Skor terbaik: ${bestScore}.`;
      nextBtn.classList.add("hidden");
      restartBtn.classList.remove("hidden");
      setScoreText();
    }

    nextBtn.addEventListener("click", function () {
      if (currentIndex < quizData.length - 1) {
        currentIndex += 1;
        renderQuestion();
      } else {
        finishQuiz();
      }
    });

    restartBtn.addEventListener("click", function () {
      currentIndex = 0;
      score = 0;
      nextBtn.classList.remove("hidden");
      restartBtn.classList.add("hidden");
      renderQuestion();
    });

    if (quizData.length) {
      renderQuestion();
    } else {
      questionEl.textContent = "Data kuis belum tersedia.";
    }
  }
})();
