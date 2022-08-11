function save() {
//   localStorage.info_fN = document.getElementById("").value;
//   localStorage.info_nN = document.getElementById("").value;
//   localStorage.info_ema = document.getElementById("").value;
//   localStorage.info_phone = document.getElementById("").value;
//   localStorage.info_birt = document.getElementById("").value;
//   localStorage.info_age = document.getElementById("").value;
  localStorage.info_lin = document.getElementById("get__linkedln").value;
  localStorage.info_git = document.getElementById("social__input--github").value;
  // localStorage.info_team = document.getElementById("").value;
  // localStorage.info_inst = document.getElementById("").value;
  // localStorage.info_grad = document.getElementById("").value;
  // localStorage.info_cert = document.getElementById("").value;
}

function show() {
  // document.getElementById("p_name").innerHTML = localStorage.info_fN;
  // document.getElementById("p_nickname").innerHTML = localStorage.info_nN;
  // document.getElementById("p_email").innerHTML = localStorage.info_ema;
  // document.getElementById("p_phone").innerHTML = localStorage.info_phone;
  // document.getElementById("p_birthday").innerHTML = localStorage.info_birt;
  // document.getElementById("p_age").innerHTML = localStorage.info_age;
  document.getElementById("p_linkedln").innerHTML = localStorage.info_lin;
  document.getElementById("p_github").innerHTML = localStorage.info_git;
  // document.getElementById("p_team").innerHTML = localStorage.info_team;
  // document.getElementById("p_inst").innerHTML = localStorage.info_inst;
  // document.getElementById("p_grad").innerHTML = localStorage.info_grad;
  // document.getElementById("p_cert").innerHTML = localStorage.info_cert;
}