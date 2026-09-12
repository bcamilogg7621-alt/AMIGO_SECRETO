/* =========================================================
   OPERACIÓN AMIGO SECRETO
   JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTOS
========================================================= */

const introScreen =
    document.getElementById("introScreen");

const securityScreen =
    document.getElementById("securityScreen");

const mainContent =
    document.getElementById("mainContent");

const startBtn =
    document.getElementById("startBtn");

const acceptSecret =
    document.getElementById("acceptSecret");

const missionBtn =
    document.getElementById("missionBtn");

const successMessage =
    document.getElementById("successMessage");

const audioPlayer =
    document.getElementById("audioPlayer");



/* =========================================================
   CREAR PARTÍCULAS
========================================================= */

const particles =
    document.getElementById("particles");


for (let i = 0; i < 45; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDuration =
        (Math.random() * 10 + 8) + "s";


    particle.style.animationDelay =
        Math.random() * 8 + "s";


    particle.style.opacity =
        Math.random() * 0.6;


    particles.appendChild(particle);

}



/* =========================================================
   🔐 TRANSICIÓN DE ACCESO
========================================================= */

const accessTransition =
    document.getElementById("accessTransition");

const accessStatus =
    document.getElementById("accessStatus");

const accessProgressBar =
    document.getElementById("accessProgressBar");

const accessPercentage =
    document.getElementById("accessPercentage");

const accessLogs =
    document.getElementById("accessLogs");


startBtn.addEventListener("click", () => {

       /* =====================================================
       🎵 INICIAR MÚSICA
    ===================================================== */

    audioPlayer.volume = 0.5;

    audioPlayer.play().catch(error => {

        console.log(
            "La reproducción automática fue bloqueada:",
            error
        );

    });


    /* Ocultar intro */

    introScreen.classList.add("hidden");

    /* Mostrar transición */

    accessTransition.classList.remove("hidden");

    let progress = 0;

    const logs = [
        "Conexión segura establecida...",
        "Identificando dispositivo...",
        "Verificando autorización...",
        "Analizando protocolo familiar...",
        "Acceso potencialmente autorizado...",
        "Cifrado de seguridad confirmado...",
        "Verificación completada ✓"
    ];

    const statuses = [
        "INICIANDO PROTOCOLO...",
        "IDENTIFICANDO USUARIO...",
        "VERIFICANDO CREDENCIALES...",
        "ANALIZANDO AUTORIZACIÓN...",
        "VALIDANDO ACCESO...",
        "FINALIZANDO VERIFICACIÓN...",
        "ACCESO CONCEDIDO ✓"
    ];

    let logIndex = 0;

    /* Primer log */

    accessLogs.innerHTML =
        `<div>> ${logs[0]}</div>`;


    const interval = setInterval(() => {

        progress += 1;

        accessProgressBar.style.width =
            `${progress}%`;

        accessPercentage.textContent =
            `${progress}%`;


        /* Cambiar mensajes */

        if (
            progress % 14 === 0 &&
            logIndex < logs.length - 1
        ) {

            logIndex++;

            const newLog =
                document.createElement("div");

            newLog.textContent =
                `> ${logs[logIndex]}`;

            accessLogs.appendChild(newLog);

            accessStatus.textContent =
                statuses[logIndex];

        }


        /* Final */

        if (progress >= 100) {

            clearInterval(interval);

            accessStatus.textContent =
                "ACCESO CONCEDIDO ✓";

            accessPercentage.textContent =
                "100%";

            setTimeout(() => {

                accessTransition.style.opacity = "0";

                setTimeout(() => {

                    accessTransition.classList.add("hidden");

                    securityScreen.classList.remove("hidden");

                    securityScreen.scrollIntoView({
                        behavior: "auto",
                        block: "start"
                    });

                }, 700);

            }, 700);

        }

    }, 25);

});


/* =========================================================
   ACEPTAR CONFIDENCIALIDAD
========================================================= */

acceptSecret.addEventListener(
    "click",
    () => {

        securityScreen.classList.add("hidden");

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        startCountdown();

    }
);



/* =========================================================
   CUENTA REGRESIVA
========================================================= */

function startCountdown() {

    /*
        26 de septiembre de 2026
        7:00 PM

        Hora local del dispositivo.
    */

    const targetDate =
        new Date(
            "September 26, 2026 19:00:00"
        ).getTime();


    const countdownInterval =
        setInterval(() => {

            const now =
                new Date().getTime();


            const distance =
                targetDate - now;


            if (distance <= 0) {

                clearInterval(
                    countdownInterval
                );


                document.getElementById("days")
                    .textContent = "00";

                document.getElementById("hours")
                    .textContent = "00";

                document.getElementById("minutes")
                    .textContent = "00";

                document.getElementById("seconds")
                    .textContent = "00";

                return;

            }


            const days =
                Math.floor(
                    distance /
                    (1000 * 60 * 60 * 24)
                );


            const hours =
                Math.floor(
                    (distance %
                    (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60)
                );


            const minutes =
                Math.floor(
                    (distance %
                    (1000 * 60 * 60)) /
                    (1000 * 60)
                );


            const seconds =
                Math.floor(
                    (distance %
                    (1000 * 60)) /
                    1000
                );


            document.getElementById("days")
                .textContent =
                String(days).padStart(2, "0");


            document.getElementById("hours")
                .textContent =
                String(hours).padStart(2, "0");


            document.getElementById("minutes")
                .textContent =
                String(minutes).padStart(2, "0");


            document.getElementById("seconds")
                .textContent =
                String(seconds).padStart(2, "0");


        }, 1000);

}



/* =========================================================
   ACEPTAR MISIÓN
========================================================= */

missionBtn.addEventListener(
    "click",
    () => {

        missionBtn.style.display =
            "none";


        successMessage.classList.remove(
            "hidden"
        );


        createConfetti();


        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);



/* =========================================================
   CONFETI
========================================================= */

function createConfetti() {

    const pieces = 120;


    for (let i = 0; i < pieces; i++) {

        const confetti =
            document.createElement("div");


        confetti.style.position =
            "fixed";


        confetti.style.width =
            Math.random() * 8 + 4 + "px";


        confetti.style.height =
            Math.random() * 14 + 6 + "px";


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.top =
            "-20px";


        confetti.style.background =
            getRandomColor();


        confetti.style.zIndex =
            "9999";


        confetti.style.pointerEvents =
            "none";


        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        document.body.appendChild(
            confetti
        );


        const duration =
            Math.random() * 2500 + 2000;


        confetti.animate(

            [
                {
                    transform:
                        `translateY(0) rotate(0deg)`,
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],

            {
                duration: duration,
                easing: "cubic-bezier(.2,.8,.3,1)"
            }

        );


        setTimeout(
            () => {

                confetti.remove();

            },
            duration
        );

    }

}



/* =========================================================
   COLORES DEL CONFETI
========================================================= */

function getRandomColor() {

    const colors = [

        "#00ff9d",
        "#36a9ff",
        "#ffd166",
        "#ff304f",
        "#ffffff"

    ];


    return colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];

}



/* =========================================================
   REVEAL AL HACER SCROLL
========================================================= */

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


document
    .querySelectorAll(
        ".event-card, .rule, .message-card, .suspect-message"
    )
    .forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

    /* =========================================================
   SISTEMA DE ARCHIVOS
========================================================= */

const lockedFiles =
    document.querySelectorAll(".locked-file");

const filesCount =
    document.getElementById("filesCount");

const progressFill =
    document.getElementById("progressFill");


let unlockedFiles = 0;


lockedFiles.forEach(file => {

    const button =
        file.querySelector(".unlock-btn");


    button.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();


            if (
                file.classList.contains("unlocked")
            ) {
                return;
            }


            /*
                Pequeña simulación de acceso
            */

            button.textContent =
                "VERIFICANDO...";


            button.disabled = true;


            setTimeout(() => {

                file.classList.add(
                    "unlocked"
                );


                file.querySelector(
                    ".file-status"
                ).textContent = "✓";


                unlockedFiles++;


                updateFileProgress();


                /*
                    Efecto visual
                */

                file.animate(

                    [
                        {
                            transform:
                                "scale(1)"
                        },

                        {
                            transform:
                                "scale(1.03)"
                        },

                        {
                            transform:
                                "scale(1)"
                        }
                    ],

                    {
                        duration: 500
                    }

                );


            }, 900);

        }
    );

});



/* =========================================================
   ACTUALIZAR PROGRESO
========================================================= */

function updateFileProgress() {

    filesCount.textContent =
        `${unlockedFiles} / 4`;


    const percentage =
        (unlockedFiles / 4) * 100;


    progressFill.style.width =
        percentage + "%";


    /*
        Cuando todos están desbloqueados
    */

    if (
        unlockedFiles === 4
    ) {

        showAllFilesMessage();

    }

}



/* =========================================================
   TODOS LOS ARCHIVOS
========================================================= */

function showAllFilesMessage() {

    setTimeout(() => {

        const message =
            document.createElement("p");


        message.textContent =
            "✓ TODOS LOS ARCHIVOS HAN SIDO DESBLOQUEADOS";


        message.style.textAlign =
            "center";


        message.style.color =
            "var(--green)";


        message.style.marginTop =
            "20px";


        message.style.fontSize =
            "11px";


        message.style.letterSpacing =
            "2px";


        document
            .querySelector(".files-progress")
            .appendChild(message);


    }, 500);

}



/* =========================================================
   EXPEDIENTE SECRETO
========================================================= */

const openSecretFile =
    document.getElementById(
        "openSecretFile"
    );


const secretFileContent =
    document.getElementById(
        "secretFileContent"
    );


openSecretFile.addEventListener(
    "click",
    () => {

        openSecretFile.textContent =
            "🔓 ACCEDIENDO...";


        openSecretFile.disabled =
            true;


        setTimeout(() => {

            openSecretFile.style.display =
                "none";


            secretFileContent.classList.remove(
                "hidden"
            );


            secretFileContent.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


        }, 1200);

    }
);

/* =========================================================
   🕵️ TERMINAL DE SEGURIDAD
========================================================= */

const securityLogs =
    document.querySelectorAll(".terminal-line");

securityLogs.forEach((line, index) => {

    line.style.animationDelay =
        `${0.4 + (index * 0.45)}s`;

});