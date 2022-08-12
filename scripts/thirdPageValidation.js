const inputTeamName = document.getElementById('team-name');
const inputInstitution = document.getElementById('institution');
const inputGraduation = document.getElementById('graduation');
const spanCertificates = document.querySelectorAll('.form__efect--certificates')

const maskValidation = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/

function validationTeamName() {

    if (inputTeamName.value.length > 4) {
        correctEfect(inputTeamName)
        correctEfect(spanCertificates[0])
        spanCertificates[0].innerHTML = 'Valid data!!'
    }

    if (inputTeamName.value == '' || inputTeamName.value.length < 4) {
        incorrectEfect(inputTeamName)
        incorrectEfect(spanCertificates[0])
        spanCertificates[0].innerHTML = 'Invalid data!!'
    }
}

function validationInstituition() {

    if (maskValidation.test(inputInstitution.value)) {
        correctEfect(inputInstitution)
        correctEfect(spanCertificates[1])
        spanCertificates[1].innerHTML = 'Valid data!!'
    } else {
        incorrectEfect(inputInstitution)
        incorrectEfect(spanCertificates[1])
        spanCertificates[1].innerHTML = 'Invalid data!!'
    }
}

function validationGraduation() {
    if (maskValidation.test(inputGraduation.value)) {
        correctEfect(inputGraduation)
        correctEfect(spanCertificates[2])
        spanCertificates[2].innerHTML = 'Valid data!!'
    } else {
        incorrectEfect(inputGraduation)
        incorrectEfect(spanCertificates[2])
        spanCertificates[2].innerHTML = 'Invalid data!!'
    }
}


