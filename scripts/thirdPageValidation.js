const inputTeamName = document.getElementById('team-name');
const inputInstitution = document.getElementById('institution');
const inputGraduation = document.getElementById('graduation');
const spanCertificates = document.querySelectorAll('.form__efect--certificates')

const maskValidation = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/

function validationTeamName() {

    if (inputTeamName.value.length > 4) {
        correctEfect(inputTeamName)
        correctEfect(spanCertificates[0])
        spanCertificates[0].innerHTML = 'Campo Correto!'
    }

    if (inputTeamName.value == '' || inputTeamName.value.length < 4) {
        incorrectEfect(inputTeamName)
        incorrectEfect(spanCertificates[0])
        spanCertificates[0].innerHTML = 'Campo incorreto!'
    }
}

function validationInstituition() {

    if (maskValidation.test(inputInstitution.value)) {
        correctEfect(inputInstitution)
        correctEfect(spanCertificates[1])
        spanCertificates[1].innerHTML = 'Campo Correto!'
    } else {
        incorrectEfect(inputInstitution)
        incorrectEfect(spanCertificates[1])
        spanCertificates[1].innerHTML = 'Campo incorreto!'
    }
}

function validationGraduation() {
    if (maskValidation.test(inputGraduation.value)) {
        correctEfect(inputGraduation)
        correctEfect(spanCertificates[2])
        spanCertificates[2].innerHTML = 'Campo Correto!'
    } else {
        incorrectEfect(inputGraduation)
        incorrectEfect(spanCertificates[2])
        spanCertificates[2].innerHTML = 'Campo incorreto!'
    }
}


