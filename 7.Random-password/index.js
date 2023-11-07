const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b",
    "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

const passwordLength = 16

function generatePassword() {
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// Функция для обработки клика на кнопку
function handleGeneratePassword() {
    const password1 = generatePassword();
    const password2 = generatePassword();

    // Вывод паролей в элементы .screen-first и .screen-second
    document.querySelector(".screen-first").textContent = password1;
    document.querySelector(".screen-second").textContent = password2;
}

// Добавление обработчика события на кнопку
document.querySelector(".btn").addEventListener("click", handleGeneratePassword);

// Добавьте следующий код после предыдущего JavaScript кода

// Функция для копирования текста в буфер обмена
function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    navigator.clipboard.writeText(text);

    document.body.removeChild(textArea);
}

// Функция для обработки клика на пароль
function handleCopyOnClick(event) {
    const clickedPassword = event.target.textContent;
    if (clickedPassword) {
        copyToClipboard(clickedPassword);
        alert("Password copied to clipboard!");
    }
}

// Добавление обработчика события 'click' на .screen-first и .screen-second
document.querySelector(".screen-first").addEventListener("click", handleCopyOnClick);
document.querySelector(".screen-second").addEventListener("click", handleCopyOnClick);