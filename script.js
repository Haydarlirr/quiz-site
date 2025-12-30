const questions = [
    {
        question: "Kalabalık ortamlarda genelde nasılsın?",
        answers: [
            { text: "Enerji toplarım", score: 2 },
            { text: "Fark etmez", score: 1 },
            { text: "Çabuk yorulurum", score: 0 }
        ]
    },
    {
        question: "Bir problemle karşılaştığında ilk tepkin ne olur?",
        answers: [
            { text: "Hemen çözüm ararım", score: 2 },
            { text: "Düşünürüm", score: 1 },
            { text: "Stres olurum", score: 0 }
        ]
    },
    {
        question: "Yeni insanlarla tanışmak senin için?",
        answers: [
            { text: "Çok kolay", score: 2 },
            { text: "Orta", score: 1 },
            { text: "Zor", score: 0 }
        ]
    },
    {
        question: "Boş zamanında ne yapmayı seversin?",
        answers: [
            { text: "Üretken aktiviteler", score: 2 },
            { text: "Dizi/film", score: 1 },
            { text: "Uyumak", score: 0 }
        ]
    },
    {
        question: "Karar verirken hangisi daha baskın?",
        answers: [
            { text: "Mantık", score: 2 },
            { text: "Denge", score: 1 },
            { text: "Duygular", score: 0 }
        ]
    },
    {
        question: "Eleştiri aldığında nasıl hissedersin?",
        answers: [
            { text: "Kendimi geliştiririm", score: 2 },
            { text: "Biraz etkilenirim", score: 1 },
            { text: "Çok üzülürüm", score: 0 }
        ]
    },
    {
        question: "Risk almayı sever misin?",
        answers: [
            { text: "Evet", score: 2 },
            { text: "Bazen", score: 1 },
            { text: "Hayır", score: 0 }
        ]
    },
    {
        question: "Plan mı, anlık karar mı?",
        answers: [
            { text: "Planlıyım", score: 2 },
            { text: "Karışık", score: 1 },
            { text: "Anlık yaşarım", score: 0 }
        ]
    },
    {
        question: "Stresli durumlarda nasılsın?",
        answers: [
            { text: "Soğukkanlı", score: 2 },
            { text: "Orta", score: 1 },
            { text: "Çabuk paniklerim", score: 0 }
        ]
    },
    {
        question: "Bir hedef koyduğunda?",
        answers: [
            { text: "Sonuna kadar giderim", score: 2 },
            { text: "Çoğu zaman giderim", score: 1 },
            { text: "Yarı yolda bırakırım", score: 0 }
        ]
    },
    {
        question: "Yalnız kalmak senin için?",
        answers: [
            { text: "Gereklidir", score: 2 },
            { text: "Ara sıra", score: 1 },
            { text: "Sevmem", score: 0 }
        ]
    },
    {
        question: "İnsanlara güvenmek senin için?",
        answers: [
            { text: "Kolay", score: 2 },
            { text: "Zamanla", score: 1 },
            { text: "Zor", score: 0 }
        ]
    },
    {
        question: "Hayatta seni motive eden şey?",
        answers: [
            { text: "Başarı", score: 2 },
            { text: "Mutluluk", score: 1 },
            { text: "Huzur", score: 0 }
        ]
    },
    {
        question: "Bir hata yaptığında?",
        answers: [
            { text: "Ders çıkarırım", score: 2 },
            { text: "Kendime kızarım", score: 1 },
            { text: "Üzerimde kalır", score: 0 }
        ]
    },
    {
        question: "Kendini nasıl tanımlarsın?",
        answers: [
            { text: "Güçlü ve kararlı", score: 2 },
            { text: "Dengeli", score: 1 },
            { text: "Duygusal", score: 0 }
        ]
    }
];

let currentQuestion = 0;
let totalScore = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const resultText = document.getElementById("result-text");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
    answersEl.innerHTML = "";

    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer.text;
        btn.onclick = () => {
            totalScore += answer.score;
            currentQuestion++;
            currentQuestion < questions.length ? loadQuestion() : showResult();
        };
        answersEl.appendChild(btn);
    });
}

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    if (totalScore >= 24) {
        resultText.textContent = "🔥 Güçlü, lider ruhlu ve analitik bir kişiliğin var.";
    } else if (totalScore >= 15) {
        resultText.textContent = "🙂 Dengeli, uyumlu ve mantıklı bir kişiliğe sahipsin.";
    } else {
        resultText.textContent = "💙 Duygusal, empatik ve içe dönük bir yapın var.";
    }
}

loadQuestion();
