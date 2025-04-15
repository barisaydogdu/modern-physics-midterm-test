const questions = [{
    'question': 'A star is moving towards the earth with a speed at 90% the speed of light. It emits light, which moves away from the star at the speed of light. Relative to us on earth, what is the speed of the light moving toward us from the star?',
    'options': ['1.9c', '0.90c', 'c', '1.1c', '1.20c'],
    'answer': 'c'
}, {
    'question': "As measured in Earth's rest frame, a spaceship traveling at 0.964c takes 12.2 y to travel between planets. How long does the trip take as measured by someone on the spaceship?",
    'options': ['7.93 y', '33.4 y', '3.24 y', '45.9 y'],
    'answer': '3.24 y'
}, {
    'question': 'An astronaut on a spaceship moving at 0.927c says that the trip between two stationary stars took 8.04 y. How long does this journey take as measured by someone at rest relative to the two stars?',
    'options': ['21.4 y', '4.35 y', '3.02 y', '23.7 y'],
    'answer': '21.4 y'
}, {
    'question': 'Relative to the frame of the observer making the measurement, at what speed parallel to its length is the length of a meterstick 60 cm?',
    'options': ['0.70c', '0.80c', '0.90c', '0.60c', '0.50c'],
    'answer': '0.80c'
}, {
    'question': 'A particle in a 748 m-long linear particle accelerator is moving at 0.875c. How long does the particle accelerator appear to the particle?',
    'options': ['972 m', '1545 m', '362 m', '172 m'],
    'answer': '362 m'
}, {
    'question': 'System S has a velocity u = +0.45c relative to system S. An event is observed at x = 600 m and t = 1.9 s in S. What is the x-coordinate of the event in S?',
    'options': ['380 m', '310 m', '360 m', '350 m', '340 m'],
    'answer': '380 m'
}, {
    'question': 'A navigational beacon in deep space broadcasts at 50 MHz. A spaceship approaches with velocity 0.40c. What frequency is detected on the ship?',
    'options': ['60 MHz', '55 MHz', '66 MHz', '76 MHz', '71 MHz'],
    'answer': '76 MHz'
}, {
    'question': 'In a particle accelerator, a proton has kinetic energy equal to its rest energy. What is its speed?',
    'options': ['0.87c', '0.71c', '0.75c', '0.25c', '0.50c'],
    'answer': '0.87c'
}, {
    'question': 'A relativistic proton has a momentum of 1.00 × 10⁻¹⁹ kg·m/s and a rest energy of 0.150 nJ. What is its speed?',
    'options': ['0.196c', '0.911c', '0.951c', '0.170c', '0.930c'],
    'answer': '0.196c'
}, {
    question: "How many joules of energy are required to accelerate a 1.0-kg mass from rest to a speed of 86.6% the speed of light? (c = 3.00 × 10⁸ m/s)",
    'options': ['1.8 × 10¹⁷ J', '4.5 × 10⁹ J', '3.0 × 10³ J', '9.0 × 10¹⁶ J', '2.7 × 10¹² J'],
    'answer': '9.0 × 10¹⁶ J'
}, {
    question: "During a nuclear reaction, 1.7 × 10⁻⁴ J of energy is released. What is the resulting change in mass of the particles involved? (c = 3.00 × 10⁸ m/s)",
    'options': ['1.5 × 10⁻¹³ kg', '4.8 × 10⁻¹⁸ kg', '5.1 × 10⁻⁴ kg', '1.9 × 10⁻²¹ kg', '4.3 × 10⁻¹¹ kg'],
    'answer': '1.9 × 10⁻²¹ kg'
}, {
    question: "A relativistic proton has a momentum of 1.0 × 10⁻¹⁷ kg • m/s and a rest energy of 0.15 nJ. What is the kinetic energy of this proton? (c = 3.00 × 10⁸ m/s, mproton = 1.67 × 10⁻²⁷ kg)",
    'options': ['1.3 pJ', '2.5 pJ', '3.0 pJ', '2.2 pJ', '1.6 pJ'],
    'answer': '3.0 pJ'
}, {
    'question': 'If the accuracy in measuring the velocity of a particle increases, the accuracy in measuring its position will',
    'options': ['increase', 'remain the same', 'decrease', 'independent'],
    'answer': 'decrease'
}, {
    question: 'Light of wavelength 400 nm falls on a metal surface having a work function 1.70 eV. What is the maximum kinetic energy of the photoelectrons emitted from the metal?',
    'options': ['2.82 eV', '4.52 eV', '1.41 eV', '1.70 eV', '3.11 eV'],
    'answer': '1.41 eV'
}, {
    'question': 'When a certain metal is illuminated by light, photoelectrons are observed provided that the wavelength of the light is less than 473 nm. What is the work function?',
    'options': ['2.8 eV', '2.6 eV', '3.1 eV', '3.3 eV'],
    'answer': '2.6 eV'
}, {
    'question': 'A metal with work function 2.4 eV is illuminated with 4.1 eV photons. What is the maximum kinetic energy of the photoelectrons?',
    'options': ['2.7×10⁻¹⁹ J', '4.7×10⁻¹⁹ J', '3.8×10⁻¹⁹ J', '6.6×10⁻¹⁹ J', '5.6×10⁻¹⁹ J'],
    'answer': '2.7×10⁻¹⁹ J'
}, {
    'question': 'Electrons emerge from copper with a max KE of 2.70 eV and work function of 4.65 eV. What is the wavelength of the incident light?',
    'options': ['460 nm', '250 nm', '130 nm', '170 nm'],
    'answer': '170 nm'
}, {
    'question': 'Laser emits 359 nm light in a 25 ms pulse with 1.0 J energy. How many photons are emitted?',
    'options': ['2.2×10¹⁹', '1.4×10¹⁷', '7.2×10¹⁶', '1.8×10¹⁸', '4.5×10¹⁹'],
    'answer': '1.8×10¹⁸'
}, {
    'question': 'A 3.7-mW He-Ne laser at 633 nm. How many photons per second?',
    'options': ['1.9×10¹⁶', '2.3×10¹⁶', '1.2×10¹⁶', '1.5×10¹⁶'],
    'answer': '1.2×10¹⁶'
}, {
    'question': 'Photon 18.0 pm is scattered by 120°. What is the new wavelength?',
    'options': ['22.9 pm', '19.2 pm', '20.4 pm', '24.1 pm', '21.6 pm'],
    'answer': '21.6 pm'
}, {
    'question': 'A nonrelativistic electron and proton have the same de Broglie wavelength. Which is true?',
    'options': ['electron has more p', 'electron has more KE', 'same p', 'same KE', 'same speed'],
    'answer': 'electron has more KE'
}, {
    'question': 'At temp T, black body peak at λ. At 2T, peak is at?',
    'options': ['λ/2', 'λ', 'λ/16', 'λ×16'],
    'answer': 'λ/2'
}, {
    'question': 'Photoelectrons ejected when light strikes metal. Intensity increased. What changes?',
    'options': ['more ejection, more energy', 'same rate, more energy', 'same rate, same energy', 'more ejection, same energy'],
    'answer': 'more ejection, same energy'
}, {
    'question': 'Hydrogen atom transitions from n=2 to n=4. What energy change?',
    'options': ['0.85 eV absorbed', '2.55 eV emitted', '3.40 eV emitted', '3.40 eV absorbed', '2.55 eV absorbed'],
    'answer': '2.55 eV absorbed'
}, {
    'question': 'Hydrogen atom from n=4 to n=2 emits photon. What is the wavelength?',
    'options': ['95.0 nm', '486 nm', '1880 nm', '97.3 nm'],
    'answer': '486 nm'
}, {
    'question': 'Photon energy for λ = de Broglie of 7.0×10⁴ m/s proton?',
    'options': ['360 keV', '430 keV', '220 keV', '290 keV', '150 keV'],
    'answer': '220 keV'
}, {
    'question': 'Frequency of H atom light from m=8 to n=12?',
    'options': ['7.46×10¹³ Hz', '2.86×10¹³ Hz', '1.05×10¹³ Hz', '8.82×10¹³ Hz', '1.43×10¹³ Hz'],
    'answer': '2.86×10¹³ Hz'
}, {
    'question': 'Orbital radius of n=3 hydrogen state?',
    'options': ['0.477 nm', '0.549 nm', '0.159 nm', '0.382 nm'],
    'answer': '0.477 nm'
}, {
    'question': 'Peak emission wavelength of black body at 37°C?',
    'options': ['94 µm', '29 µm', '9.4 µm', '7.8 µm', '78 µm'],
    'answer': '9.4 µm'
}, {
    'question': 'Electron confined to 500 pm. KE with min uncertainty?',
    'options': ['0.38 eV', '3.8 eV', '0.038 eV', '0.0038 eV', '0.00038 eV'],
    'answer': '0.038 eV'
}];

function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

const app = document.getElementById("app");

function renderQuestions() {
    const shuffledQuestions = shuffleArray(questions).map(q => ({
        ...q,
        options: shuffleArray(q.options)
    }));

    app.innerHTML = "";
    shuffledQuestions.forEach((q, idx) => {
        const box = document.createElement("div");
        box.className = "question-box";

        const title = document.createElement("p");
        title.innerHTML = `<strong>${idx + 1})</strong> ${q.question}`;
        box.appendChild(title);

        q.options.forEach((opt) => {
            const label = document.createElement("label");
            label.style.display = "block";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q-${idx}`;
            input.value = opt;

            input.onclick = () => {
                const existing = box.querySelector(".feedback");
                if (existing) existing.remove();

                const result = document.createElement("span");
                result.className = "feedback " + (opt === q.answer ? "correct" : "wrong");
                result.textContent = opt === q.answer ? "Correct!" : `Wrong Answer`;
                label.appendChild(result);
            };

            label.appendChild(input);
            label.append(` ${opt}`);
            box.appendChild(label);
        });

        app.appendChild(box);
    });

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Testi Yenile";
    restartBtn.style = "padding: 8px 16px; margin-top: 20px;";
    restartBtn.onclick = () => renderQuestions();
    app.appendChild(restartBtn);
}

renderQuestions();