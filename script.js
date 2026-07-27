// ===========================
// PASSCODE
// ===========================

// ⚠️ Yahan apni birthday date ka PIN likhein.
// Example: 28 July 2010 = 28072010

const CORRECT_PIN = "28072010";

// ===========================
// ELEMENTS
// ===========================

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const pin = document.getElementById("pin");
const unlockBtn = document.getElementById("unlockBtn");

const wrongBox = document.getElementById("wrongBox");
const error = document.getElementById("error");
const tryAgain = document.getElementById("tryAgain");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const sadBox = document.getElementById("sadBox");
const againBtn = document.getElementById("againBtn");

const startBtn = document.getElementById("startBtn");

// ===========================
// CHANGE PAGE
// ===========================

function showPage(page){

document
.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"));

page.classList.add("active");

}

// ===========================
// UNLOCK
// ===========================

unlockBtn.onclick=function(){

if(pin.value===CORRECT_PIN){

showPage(page2);

}else{

error.innerHTML="❌ Wrong Passcode";

wrongBox.style.display="block";

}

}

// ===========================
// TRY AGAIN
// ===========================

tryAgain.onclick=function(){

pin.value="";

wrongBox.style.display="none";

error.innerHTML="";

pin.focus();

}

// ===========================
// YES
// ===========================

yesBtn.onclick=function(){

showPage(page3);

}

// ===========================
// NO
// ===========================

noBtn.onclick=function(){

sadBox.style.display="block";

}

// ===========================
// AGAIN
// ===========================

againBtn.onclick=function(){

sadBox.style.display="none";

}

// ===========================
// START
// ===========================

startBtn.onclick=function(){

alert("🎉 Part 2 mein Birthday Page open hoga.");

}
// =====================================
// PART 2 - SECTION 3
// Birthday + Memories
// =====================================

// New Elements
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");

const nextBtn = document.getElementById("nextBtn");
const messageBtn = document.getElementById("messageBtn");

// ===========================
// START BUTTON
// Page 3 -> Page 4
// ===========================

startBtn.onclick = function () {
    showPage(page4);
};

// ===========================
// NEXT BUTTON
// Page 4 -> Page 5
// ===========================

nextBtn.onclick = function () {
    showPage(page5);
};

// ===========================
// PHOTO SLIDER
// ===========================

const slides = document.querySelectorAll(".slide");

let current = 0;

function changeSlide() {

    slides[current].classList.remove("activeSlide");

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    slides[current].classList.add("activeSlide");
}

// Change photo every 3 seconds
setInterval(changeSlide, 3000);

// ===========================
// MESSAGE BUTTON
// ===========================
const page6 = document.getElementById("page6");
const page7 = document.getElementById("page7");

const heartBtn = document.getElementById("heartBtn");
const envelope = document.querySelector(".envelope");

// PAGE 5 -> PAGE 6
messageBtn.onclick = function () {
    showPage(page6);
};

// PAGE 6 -> PAGE 7
// PAGE 6 → PAGE 7
heartBtn.onclick = function () {

    showPage(page7);

    setTimeout(() => {

        envelope.classList.add("open");

    },500);

};


// PAGE 7 → PAGE 8
const letterNextBtn = document.getElementById("letterNextBtn");

letterNextBtn.onclick = function () {

    showPage(page8);

};


// =====================================
// PART 3 - FINAL
// =====================================

// Elements
const page8 = document.getElementById("page8");
const celebrateBtn = document.getElementById("celebrateBtn");

const balloons = document.getElementById("balloons");
const confetti = document.getElementById("confetti");
const music = document.getElementById("music");

// ===============================
// PAGE 7 -> PAGE 8
// ===============================

// Purane messageBtn function ki jagah,
// Page 7 se Page 8 ka button yahan add karein
// (Agar aap Page 7 me "Next" button add karte hain.)

// Agar envelope khulne ke baad final page dikhana ho:
setTimeout(() => {
    // Zarurat ke hisaab se is line ko call karein:
    // showPage(page8);
}, 5000);

// ===============================
// CELEBRATE BUTTON
// ===============================

celebrateBtn.onclick = function () {

    // Show balloons
    balloons.style.display = "block";

    // Show confetti
    confetti.style.display = "block";

    // Play music
    if (music) {
        music.play().catch(() => {
            console.log("Music autoplay browser ne block kar diya.");
        });
    }

    // Create Confetti
    for (let i = 0; i < 120; i++) {

        let piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "%";

        piece.style.animationDelay = Math.random() * 3 + "s";

        piece.style.background =
            `hsl(${Math.random() * 360},100%,60%)`;

        confetti.appendChild(piece);

    }

    // alert("🎉 Happy Birthday Nubaisha ❤️");
};
