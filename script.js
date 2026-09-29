const team1Questions = [

    {
        question: "Muzning erishi qaysi agregat holat o‘zgarishiga kiradi?",
        answers: [
            "Qattiq → suyuq",
            "Suyuq → gaz",
            "Gaz → suyuq",
            "Gaz → qattiq"
        ],
        correct: 0
    },

    {
        question: "Kinetik modelga ko‘ra modda nimadan tashkil topgan?",
        answers: [
            "Faqat issiqlikdan",
            "Mayda zarrachalardan",
            "Faqat elektrdan",
            "Faqat yadrolardan"
        ],
        correct: 1
    },

    {
        question: "Temperatura oshganda zarrachalar harakati qanday o‘zgaradi?",
        answers: [
            "Sekinlashadi",
            "To‘xtaydi",
            "Tezlashadi",
            "O‘zgarmaydi"
        ],
        correct: 2
    },

    {
        question: "Broun harakati nimaga dalil bo‘la oladi?",
        answers: [
            "Zarrachalar mavjudligiga",
            "Jismning og‘irligiga",
            "Elektr tokiga",
            "Yorug‘likka"
        ],
        correct: 0
    },

    {
        question: "Gaz zarrachalari orasidagi masofa qanday?",
        answers: [
            "Juda kichik",
            "Juda katta",
            "Nol",
            "Har doim bir xil"
        ],
        correct: 1
    },

    {
        question: "Suvning muzlash temperaturasi necha °C?",
        answers: [
            "100 °C",
            "-100 °C",
            "0 °C",
            "50 °C"
        ],
        correct: 2
    },

    {
        question: "Jism qizdirilganda ichki energiyasi odatda qanday o‘zgaradi?",
        answers: [
            "Ortadi",
            "Kamayadi",
            "Yo‘qoladi",
            "O‘zgarmaydi"
        ],
        correct: 0
    },

    {
        question: "Temperatura o‘zgarmasa, gaz hajmi oshirilsa bosim qanday o‘zgaradi?",
        answers: [
            "Ortadi",
            "Kamayadi",
            "O‘zgarmaydi",
            "Nol bo‘ladi"
        ],
        correct: 1
    },

    {
        question: "Issiqlikdan kengayish nima?",
        answers: [
            "Jismning sovishi",
            "Qizdirilganda o‘lchamining ortishi",
            "Jismning yo‘qolishi",
            "Jismning muzlashi"
        ],
        correct: 1
    },

    {
        question: "Bug‘lanish qaysi jarayon?",
        answers: [
            "Gaz → suyuq",
            "Suyuq → gaz",
            "Qattiq → suyuq",
            "Suyuq → qattiq"
        ],
        correct: 1
    }

];


const team2Questions = [

    {
        question: "Suv bug‘ining tomchiga aylanishi qanday jarayon?",
        answers: [
            "Bug‘lanish",
            "Sublimatsiya",
            "Kondensatsiya",
            "Erish"
        ],
        correct: 2
    },

    {
        question: "Kinetik modelning asosiy fikrlaridan biri qaysi?",
        answers: [
            "Zarrachalar harakatda bo‘ladi",
            "Zarrachalar harakatsiz",
            "Modda bitta zarrachadan iborat",
            "Temperatura mavjud emas"
        ],
        correct: 0
    },

    {
        question: "Qaysi holatda zarrachalar eng erkin harakat qiladi?",
        answers: [
            "Qattiq",
            "Suyuq",
            "Gaz",
            "Kristall"
        ],
        correct: 2
    },

    {
        question: "Broun harakati qanday harakat?",
        answers: [
            "Mayda zarrachalarning tartibsiz harakati",
            "Faqat aylanish",
            "Sayyoralar harakati",
            "Muzlash jarayoni"
        ],
        correct: 0
    },

    {
        question: "Suyuqlik zarrachalari qanday joylashadi?",
        answers: [
            "Juda uzoqda",
            "Bir-biriga yaqin, lekin siljiy oladi",
            "Harakatsiz",
            "Faqat bitta qatorda"
        ],
        correct: 1
    },

    {
        question: "Suvning qaynash temperaturasi odatda necha °C?",
        answers: [
            "0 °C",
            "50 °C",
            "100 °C",
            "-100 °C"
        ],
        correct: 2
    },

    {
        question: "Jismni qizdirganda zarrachalarning kinetik energiyasi odatda...",
        answers: [
            "Ortadi",
            "Kamayadi",
            "Yo‘qoladi",
            "Nol bo‘ladi"
        ],
        correct: 0
    },

    {
        question: "Boyl-Mariott qonunida temperatura o‘zgarmasa bosim va hajm qanday bog‘langan?",
        answers: [
            "To‘g‘ri proporsional",
            "Teskari proporsional",
            "Bog‘lanmagan",
            "Ikkalasi ham nol"
        ],
        correct: 1
    },

    {
        question: "Metall sim qizdirilganda odatda nima bo‘ladi?",
        answers: [
            "Uzunligi ortadi",
            "Massasi yo‘qoladi",
            "Temperaturasi tushadi",
            "Zarrachalari yo‘qoladi"
        ],
        correct: 0
    },

    {
        question: "Qattiq moddaning bevosita gazga aylanishi nima deyiladi?",
        answers: [
            "Kondensatsiya",
            "Sublimatsiya",
            "Erish",
            "Qotish"
        ],
        correct: 1
    }

];


let score1 = 0;
let score2 = 0;

let index1 = 0;
let index2 = 0;

let time = 60;

let gameOver = false;

let timer;


/* SAVOLNI CHIQARISH */

function showQuestion(team) {

    let questions;
    let index;

    if (team === 1) {
        questions = team1Questions;
        index = index1;
    } else {
        questions = team2Questions;
        index = index2;
    }

    const question = questions[index];

    document.getElementById(
        "question" + team
    ).textContent = question.question;

    document.getElementById(
        "number" + team
    ).textContent =
        `${index + 1} / ${questions.length}`;


    const answersBox =
        document.getElementById(
            "answers" + team
        );

    answersBox.innerHTML = "";


    question.answers.forEach(
        (answer, i) => {

            const button =
                document.createElement("button");

            button.className = "answer";

            button.textContent =
                `${String.fromCharCode(65 + i)}. ${answer}`;

            button.onclick = function () {

                checkAnswer(
                    team,
                    i
                );

            };

            answersBox.appendChild(button);
        }
    );


    document.getElementById(
        "progress" + team
    ).style.width =
        ((index + 1) /
            questions.length *
            100) + "%";
}


/* JAVOBNI TEKSHIRISH */

function checkAnswer(team, selected) {

    if (gameOver) return;


    let questions;
    let index;

    if (team === 1) {
        questions = team1Questions;
        index = index1;
    } else {
        questions = team2Questions;
        index = index2;
    }


    const question =
        questions[index];

    const buttons =
        document.querySelectorAll(
            "#answers" + team + " .answer"
        );


    buttons.forEach(
        button => {
            button.disabled = true;
        }
    );


    buttons[
        question.correct
    ].classList.add("correct");


    const result =
        document.getElementById(
            "result" + team
        );


    if (selected === question.correct) {

        if (team === 1) {
            score1++;
            document.getElementById(
                "score1"
            ).textContent = score1;
        } else {
            score2++;
            document.getElementById(
                "score2"
            ).textContent = score2;
        }

        result.textContent =
            "✓ To‘g‘ri! +1 ball";

        result.className =
            "result correct-text";

    } else {

        buttons[
            selected
        ].classList.add("wrong");

        result.textContent =
            "✕ Noto‘g‘ri";

        result.className =
            "result wrong-text";
    }


    setTimeout(() => {

        if (team === 1) {

            index1++;

            if (
                index1 >=
                team1Questions.length
            ) {
                index1 = 0;
            }

        } else {

            index2++;

            if (
                index2 >=
                team2Questions.length
            ) {
                index2 = 0;
            }
        }


        if (!gameOver) {
            showQuestion(team);
        }

    }, 700);
}


/* 60 SEKUNDLIK TIMER */

function startTimer() {

    clearInterval(timer);

    timer = setInterval(() => {

        time--;

        document.getElementById(
            "time"
        ).textContent = time;


        if (time <= 0) {

            clearInterval(timer);

            endGame();
        }

    }, 1000);
}


/* O‘YINNI TUGATISH */

function endGame() {

    gameOver = true;

    document.getElementById(
        "final1"
    ).textContent = score1;

    document.getElementById(
        "final2"
    ).textContent = score2;


    const winner =
        document.getElementById(
            "winner"
        );


    if (score1 > score2) {

        winner.textContent =
            "🎉 1-KOMANDA G‘OLIB!";

    } else if (score2 > score1) {

        winner.textContent =
            "🎉 2-KOMANDA G‘OLIB!";

    } else {

        winner.textContent =
            "🤝 Natija durang!";
    }


    document.getElementById(
        "modal"
    ).classList.remove("hidden");
}


/* QAYTA BOSHLASH */

function restartGame() {

    clearInterval(timer);

    score1 = 0;
    score2 = 0;

    index1 = 0;
    index2 = 0;

    time = 60;

    gameOver = false;


    document.getElementById(
        "score1"
    ).textContent = "0";

    document.getElementById(
        "score2"
    ).textContent = "0";

    document.getElementById(
        "time"
    ).textContent = "60";


    document.getElementById(
        "modal"
    ).classList.add("hidden");


    showQuestion(1);
    showQuestion(2);

    startTimer();
}


/* O‘YINNI BOSHLASH */

restartGame();