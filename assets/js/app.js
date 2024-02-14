const validazionePassword1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-.*])[a-zA-Z\d-_*.]+$/;
const validazioneEsadecimale = /\b[0-9a-fA-F]{6}\b/;
const validazioneData = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
const validazioneNome = /^[a-zA-Z]{3, 30}(?: [a-zA.Z]{3, 30})?$/;
const validazioneIP = /\b(?:192\.168|10|172\.(?:1[6-9]|2[0-9]|3[01]))\.\d{1,3}\.\d{1,3}\b/;
const validazioneMAC = /\b([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})\b/;
const validazioneEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
const validazionePassword2 = /^(?=(?:.*\d){2})(?=.*[a-zA-Z])[a-zA-Z\d]{6}$/;
const validazioneSegnoPuneggiatura = /\w+[,.:;!?]/;
const validazioneInizio = /\b[A-Za-z]\w*\b/;
const validazioneVocali = /[aeiouAEIOU]/;

function verificaPassword() {
    let password = document.modulo.password.value;

    if (validazionePassword1.test(password)) {
        return true;
    } else {
        return false;
    }
}

function verificaEsadecimale() {
    let numeroEsadecimale = document.modulo.numeroEsadecimale.value;

    if (validazioneEsadecimale.test(numeroEsadecimale)) {
        return true;
    } else {
        return false;
    }
}

function verificaData() {
    let data = document.modulo.data.value;

    if (validazioneData.test(data)) {
        return true;
    } else {
        return false;
    }
}

function verificaNome() {
    let nome = document.modulo.nome.value;

    if (validazioneNome.test(nome)) {
        return true;
    } else {
        return false;
    }
}

function verificaIP() {
    let ip = document.modulo.ip.value;

    if (validazioneIP.test(ip)) {
        return true;
    } else {
        return false;
    }
}

function verificaMAC() {
    let mac = document.modulo.mac.value;

    if (validazioneMAC.test(mac)) {
        return true;
    } else {
        return false;
    }
}

function verificaEmail() {
    let email = document.modulo.email.value;

    if (validazioneEmail.test(email)) {
        return true;
    } else {
        return false;
    }
}

function verificaPassword2() {
    let password = document.modulo.password2.value;

    if (validazionePassword2.test(password)) {
        return true;
    } else {
        return false;
    }
}

function verificaSegnoPunteggiatura() {
    let testo = document.modulo.parolaSegnoPunteggiatura.value;

    if (validazioneSegnoPuneggiatura.test(testo)) {
        return true;
    } else {
        return false;
    }
}

function verificaInizio() {
    let testo = document.modulo.parolaInizia.value;

    if (validazioneInizio.test(testo)) {
        return true;
    } else {
        return false;
    }
}

function verificaVocali() {
    let testo = document.modulo.vocali.value;

    if (validazioneVocali.test(testo)) {
        return true;
    } else {
        return false;
    }
}

function verificaNumero() {
    let numero = document.modulo.numero.value;

    if (numero > 0) {
        return true;
    } else {
        return false;
    }
}



function validazione(event) {
    event.preventDefault();
    let risultato = document.getElementById("risultato");

    if (verificaPassword() && verificaEsadecimale() && verificaData() && verificaNome() && verificaIP() && verificaMAC() && verificaEmail()
        && verificaPassword2() && verificaSegnoPunteggiatura() && verificaInizio() && verificaVocali() && verificaNumero()) {
        risultato.innerHTML = "Valido";
        document.modulo.reset();
    } else {
        risultato.innerHTML = "Non valido";
    }
}