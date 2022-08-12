function save() {
    localStorage.setItem('info_fN', document.getElementById('full__name').value)
    localStorage.setItem('info_nN', document.getElementById('basic__nickname').value)
    localStorage.setItem('info_ema', document.getElementById('basic__email').value)
    localStorage.setItem('info_phone', document.getElementById('basic__phone').value)
    localStorage.setItem('info_birt_day', document.getElementById('date__day').value)
    localStorage.setItem('info_birt_month', document.getElementById('date__month').value)
    localStorage.setItem('info_birt_year', document.getElementById('date__year').value)
    localStorage.setItem('info_age', document.getElementById('date__age').value)
    localStorage.setItem('info_lin', document.getElementById('get__linkedln').value)
    localStorage.setItem('info_git', document.getElementById('social__input--github').value)
    localStorage.setItem('info_team', document.getElementById('team-name').value)
    localStorage.setItem('info_inst', document.getElementById('institution').value)
    localStorage.setItem('info_grad', document.getElementById('graduation').value)
    localStorage.setItem('info_cert', document.getElementById('certi').value)
}

function show() {
    let fN = localStorage.getItem('info_fN')
    document.getElementById('p_name').innerHTML = fN

    let nN = localStorage.getItem('info_nN')
    document.getElementById('p_nickname').innerHTML = nN

    let email = localStorage.getItem('info_ema')
    document.getElementById('p_email').innerHTML = email

    let phone = localStorage.getItem('info_phone')
    document.getElementById('p_phone').innerHTML = phone

    let day = localStorage.getItem('info_birt_day')
    let month = localStorage.getItem('info_birt_month')
    let year = localStorage.getItem('info_birt_year')
    document.getElementById('p_birthday').innerHTML = `${day} / ${month} / ${year}`

    let age = localStorage.getItem('info_age')
    document.getElementById('p_age').innerHTML = age

    let linkedln = localStorage.getItem('info_lin')
    document.getElementById('p_linkedln').innerHTML = linkedln

    let github = localStorage.getItem('info_git')
    document.getElementById('p_github').innerHTML = github

    let team = localStorage.getItem('info_team')
    document.getElementById('p_team').innerHTML = team

    let inst = localStorage.getItem('info_inst')
    document.getElementById('p_inst').innerHTML = inst

    let grad = localStorage.getItem('info_grad')
    document.getElementById('p_grad').innerHTML = grad

    let cert = localStorage.getItem('info_cert')
    document.getElementById('p_cert').innerHTML = cert


    if (localStorage.info_nN === null || localStorage.info_nN === undefined || localStorage.info_nN === "") {
        document.getElementById('p_nickname').innerHTML = '-';
    }

    if (localStorage.info_ema === null || localStorage.info_ema === undefined || localStorage.info_ema === "") {
        document.getElementById('p_email').innerHTML = '-';
    }

    if (localStorage.info_phone === null || localStorage.info_phone === undefined || localStorage.info_phone === "") {
        document.getElementById('p_phone').innerHTML = '-';
    }

    if (localStorage.info_lin === null || localStorage.info_lin === undefined || localStorage.info_lin === "") {
        document.getElementById('p_linkedln').innerHTML = '-';
    }

    if (localStorage.info_cert === null || localStorage.info_cert === undefined || localStorage.info_cert === "") {
        document.getElementById('p_cert').innerHTML = '-';
    }
}