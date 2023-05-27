document.addEventListener("DOMContentLoaded", function () {
  // -------------------- CONTADOR ------------------------

  let timer;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let tiempoInicial = null;

  inicioContador = document.getElementById("start");
  // pausaContador = document.getElementById("pause");
  finalizarContador = document.getElementById("reset");

  inicioContador.addEventListener("click", startTimer);
  // pausaContador.addEventListener('click', pauseTimer);
  finalizarContador.addEventListener("click", resetTimer);

  function startTimer() {
    const hora = new Date();
    tiempoInicial = {
      hora: hora.getHours(),
      minutos: hora.getMinutes(),
      segundos: hora.getSeconds(),
    };

    console.log(tiempoInicial);

    inicioContador.disabled = true;
    inicioContador.style.opacity = 0.5;
    //   pausaContador.disabled = false;
    //   pausaContador.style.opacity = 1;
    finalizarContador.disabled = false;
    finalizarContador.style.opacity = 1;
    timer = setInterval(updateTimer, 1000);
    if (!document.getElementById("start-time").textContent) {
      let horaInicio = document.createElement("P");
      horaInicio.innerHTML = "Iniciado el " + hora.toLocaleString();
      document.getElementById("start-time").appendChild(horaInicio);
    }
  }

  // function pauseTimer() {
  //   inicioContador.disabled = false;
  //   inicioContador.style.opacity = 1;
  //   pausaContador.disabled = true;
  //   pausaContador.style.opacity = 0.5;
  //   if (confirm("¿Desea pausar el contador?")) {
  //     clearInterval(timer);
  //   }
  //   else{
  //     inicioContador.disabled = true;
  //     inicioContador.style.opacity = 0.5;
  //     pausaContador.disabled = false;
  //     pausaContador.style.opacity = 1;
  //   }
  // }

  function resetTimer() {
    if (confirm("¿Desea finalizar el contador?")) {
      clearInterval(timer);
      hours = 0;
      minutes = 0;
      seconds = 0;
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      document.getElementById("start-time").textContent = "";
      inicioContador.disabled = false;
      inicioContador.style.opacity = 1;
      // pausaContador.disabled = true;
      // pausaContador.style.opacity = 0.5;
      finalizarContador.disabled = true;
      finalizarContador.style.opacity = 0.5;
      ingresos = "";
      tiempoInicial = null;
    } else {
      inicioContador.disabled = true;
      inicioContador.style.opacity = 0.5;
    }
  }

  function updateTimer() {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    document.getElementById("hours").textContent = padZero(hours);
    document.getElementById("minutes").textContent = padZero(minutes);
    document.getElementById("seconds").textContent = padZero(seconds);
  }

  function padZero(num) {
    return num.toString().padStart(2, "0");
  }

  // -------------------- DATOS ------------------------

  const tabla = document.getElementById("tabla-corredores");

  let fila = tabla.rows;

  let dorsal = 0,
    nombre = 1,
    apellido = 2,
    edad = 3,
    genero = 4,
    runinngTeam = 5,
    distancia = 6;

  datos = [];
  competidor = [];

  for (y = 1; y < fila.length; y++) {
    competidores = fila[y].cells;
    for (dato of competidores) {
      datos = [...datos, dato.innerHTML];
      objeto = {
        dorsal: datos[dorsal],
        nombre: datos[nombre],
        apellido: datos[apellido],
        edad: datos[edad],
        genero: datos[genero],
        runningTeam: datos[runinngTeam],
        competencia: datos[distancia],
        tiempoHora: 0,
        tiempoMinutos: 0,
        tiempoSegundos: 0,
        difTiempoG: 0,
        difTiempoS: 0,
        difTiempoE: 0,
        posGeneral: 0,
        posSexo: 0,
        posEdad: 0,
      };
    }
    competidor.push(objeto);
    dorsal += 7;
    nombre += 7;
    apellido += 7;
    edad += 7;
    genero += 7;
    runinngTeam += 7;
    distancia += 7;
  }

  let general = competidor;

  console.log("Todos Los Competidores: ", general);

  const form = document.getElementById("myForm");
  const inputDorsal = document.getElementById("input-dorsal");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    dorsalCompetidor = inputDorsal.value;
    console.log("Dorsal ingresado:", dorsalCompetidor);
    inputDorsal.value = "";
    inputDorsal.focus();
    tiempoDorsal();
  });

  let dorsalCompetidor;

  inputDorsal.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      dorsalCompetidor = inputDorsal.value;
      console.log("Dorsal ingresado:", dorsalCompetidor);
      inputDorsal.value = "";
      inputDorsal.focus();
      tiempoDorsal();
    }
  });

  let ingresos = [];

  let general21k = [];

  let caballeros21k = [];
  let cab21kh19 = [];
  let cab21k2024 = [];
  let cab21k2529 = [];
  let cab21k3034 = [];
  let cab21k3539 = [];
  let cab21k4044 = [];
  let cab21k4549 = [];
  let cab21k5054 = [];
  let cab21k5559 = [];
  let cab21k6064 = [];
  let cab21k6569 = [];
  let cab21km70 = [];

  let damas21k = [];
  let dam21kh19 = [];
  let dam21k2024 = [];
  let dam21k2529 = [];
  let dam21k3034 = [];
  let dam21k3539 = [];
  let dam21k4044 = [];
  let dam21k4549 = [];
  let dam21k5054 = [];
  let dam21k5559 = [];
  let dam21k6064 = [];
  let dam21k6569 = [];
  let dam21km70 = [];

  let general10k = [];

  let caballeros10k = [];
  let cab10kh19 = [];
  let cab10k2024 = [];
  let cab10k2529 = [];
  let cab10k3034 = [];
  let cab10k3539 = [];
  let cab10k4044 = [];
  let cab10k4549 = [];
  let cab10k5054 = [];
  let cab10k5559 = [];
  let cab10k6064 = [];
  let cab10k6569 = [];
  let cab10km70 = [];

  let damas10k = [];
  let dam10kh19 = [];
  let dam10k2024 = [];
  let dam10k2529 = [];
  let dam10k3034 = [];
  let dam10k3539 = [];
  let dam10k4044 = [];
  let dam10k4549 = [];
  let dam10k5054 = [];
  let dam10k5559 = [];
  let dam10k6064 = [];
  let dam10k6569 = [];
  let dam10km70 = [];

  
  let revision = [];
  let duplicados = [];

  let llegadaCompetidor;

  function tiempoDorsal() {
    const tiempo = new Date();
    tiempoCompetidor = {
      hora: tiempo.getHours(),
      minutos: tiempo.getMinutes(),
      segundos: tiempo.getSeconds(),
    };
    let encontrado = false;

    for (let competidor of general) {
      let dorsales = competidor.dorsal.toString();
      if (dorsales === dorsalCompetidor) {
        encontrado = true;
        if (tiempoInicial === null) {
          // Establecer el tiempo inicial solo la primera vez
          tiempoInicial = {
            hora: tiempoCompetidor.hora,
            minutos: tiempoCompetidor.minutos,
            segundos: tiempoCompetidor.segundos,
          };
        }

        llegadaCompetidor = Object.assign({}, competidor); // Clonar el objeto competidor
        console.log(llegadaCompetidor)

        //Calcular la diferencia de tiempo en segundos
        const tiempoInicialSegundos =
          tiempoInicial.hora * 3600 +
          tiempoInicial.minutos * 60 +
          tiempoInicial.segundos;
        const tiempoCompetidorSegundos =
          tiempoCompetidor.hora * 3600 +
          tiempoCompetidor.minutos * 60 +
          tiempoCompetidor.segundos;

        let diferenciaSegundos =
          tiempoCompetidorSegundos - tiempoInicialSegundos;

        // Asegurarse de que la diferencia de tiempo sea positiva
        if (diferenciaSegundos < 0) {
          diferenciaSegundos += 24 * 3600; // Sumar un día en segundos (24 horas * 60 minutos * 60 segundos)
        }

        // Convertir la diferencia de tiempo a formato hh:mm:ss
        const difHoras = Math.floor(diferenciaSegundos / 3600);
        const difMinutos = Math.floor((diferenciaSegundos % 3600) / 60);
        const difSegundos = diferenciaSegundos % 60;

        llegadaCompetidor.tiempo = `${padZero(difHoras)}:${padZero(
          difMinutos
        )}:${padZero(difSegundos)}`;
        if (difHoras === 0) {
          llegadaCompetidor.tiempo = `${padZero(difMinutos)}:${padZero(
            difSegundos
          )}`;
        }

        llegadaCompetidor.tiempoHora = difHoras;
        llegadaCompetidor.tiempoMinutos = difMinutos;
        llegadaCompetidor.tiempoSegundos = difSegundos;

        ingresos.push(llegadaCompetidor);
        if (llegadaCompetidor.competencia === "21") {
          general21k.push(llegadaCompetidor);
          llegadaCompetidor.posGeneral = general21k.length;
          calculosCompetidores(general21k);
          if (llegadaCompetidor.genero === "Masc") {
            caballeros21k.push(llegadaCompetidor);
            llegadaCompetidor.posSexo = caballeros21k.length;
            calculosCompetidores(caballeros21k);

            if (llegadaCompetidor.edad < 20) {
              cab21kh19.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab21kh19.length;
              calculosCompetidores(cab21kh19);
            } else if (
              llegadaCompetidor.edad >= 20 &&
              llegadaCompetidor.edad <= 24
            ) {
              cab21k2024.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab21k2024.length;
              calculosCompetidores(cab21k2024);
            } else if (
              llegadaCompetidor.edad >= 25 &&
              llegadaCompetidor.edad <= 29
            ) {
              cab21k2529.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab21k2529.length;
              calculosCompetidores(cab21k2529);
            } else if (
              llegadaCompetidor.edad >= 30 &&
              llegadaCompetidor.edad <= 34
            ) {
              cab21k3034.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab21k3034.length;
              calculosCompetidores(cab21k3034);
            } else if (
              llegadaCompetidor.edad >= 35 &&
              llegadaCompetidor.edad <= 39
            ) {
              cab21k3539.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab21k3539.length;
              calculosCompetidores(cab21k3539);
            } else if (
              llegadaCompetidor.edad >= 40 &&
              llegadaCompetidor.edad <= 44
            ) {
              cab21k4044.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab21k4044.length;
              calculosCompetidores(cab21k4044);
            } else if (
              llegadaCompetidor.edad >= 45 &&
              llegadaCompetidor.edad <= 49
            ) {
              cab21k4549.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab21k4549.length;
              calculosCompetidores(cab21k4549);
            } else if (
              llegadaCompetidor.edad >= 50 &&
              llegadaCompetidor.edad <= 54
            ) {
              cab21k5054.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab21k5054.length;
              calculosCompetidores(cab21k5054);
            } else if (
              llegadaCompetidor.edad >= 55 &&
              llegadaCompetidor.edad <= 59
            ) {
              cab21k5559.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab21k5559.length;
              calculosCompetidores(cab21k5559);
            } else if (
              llegadaCompetidor.edad >= 60 &&
              llegadaCompetidor.edad <= 64
            ) {
              cab21k6064.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab21k6064.length;
              calculosCompetidores(cab21k6064);
            } else if (
              llegadaCompetidor.edad >= 65 &&
              llegadaCompetidor.edad <= 69
            ) {
              cab21k6569.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab21k6569.length;
              calculosCompetidores(cab21k6569);
            } else if (llegadaCompetidor.edad >= 70) {
              cab21km70.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab21km70.length;
              calculosCompetidores(cab21km70);
            }
          }
          if (llegadaCompetidor.genero === "Fem") {
            damas21k.push(llegadaCompetidor);
            llegadaCompetidor.posSexo = damas21k.length;
            calculosCompetidores(damas21k);

            if (llegadaCompetidor.edad < 20) {
              dam21kh19.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam21kh19.length;
              calculosCompetidores(dam21kh19);
            } else if (
              llegadaCompetidor.edad >= 20 &&
              llegadaCompetidor.edad <= 24
            ) {
              dam21k2024.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam21k2024.length;
              calculosCompetidores(dam21k2024);
            } else if (
              llegadaCompetidor.edad >= 25 &&
              llegadaCompetidor.edad <= 29
            ) {
              dam21k2529.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam21k2529.length;
              calculosCompetidores(dam21k2529);
            } else if (
              llegadaCompetidor.edad >= 30 &&
              llegadaCompetidor.edad <= 34
            ) {
              dam21k3034.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam21k3034.length;
              calculosCompetidores(dam21k3034);
            } else if (
              llegadaCompetidor.edad >= 35 &&
              llegadaCompetidor.edad <= 39
            ) {
              dam21k3539.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam21k3539.length;
              calculosCompetidores(dam21k3539);
            } else if (
              llegadaCompetidor.edad >= 40 &&
              llegadaCompetidor.edad <= 44
            ) {
              dam21k4044.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam21k4044.length;
              calculosCompetidores(dam21k4044);
            } else if (
              llegadaCompetidor.edad >= 45 &&
              llegadaCompetidor.edad <= 49
            ) {
              dam21k4549.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam21k4549.length;
              calculosCompetidores(dam21k4549);
            } else if (
              llegadaCompetidor.edad >= 50 &&
              llegadaCompetidor.edad <= 54
            ) {
              dam21k5054.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam21k5054.length;
              calculosCompetidores(dam21k5054);
            } else if (
              llegadaCompetidor.edad >= 55 &&
              llegadaCompetidor.edad <= 59
            ) {
              dam21k5559.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam21k5559.length;
              calculosCompetidores(dam21k5559);
            } else if (
              llegadaCompetidor.edad >= 60 &&
              llegadaCompetidor.edad <= 64
            ) {
              dam21k6064.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam21k6064.length;
              calculosCompetidores(dam21k6064);
            } else if (
              llegadaCompetidor.edad >= 65 &&
              llegadaCompetidor.edad <= 69
            ) {
              dam21k6569.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam21k6569.length;
              calculosCompetidores(dam21k6569);
            } else if (llegadaCompetidor.edad >= 70) {
              dam21km70.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam21km70.length;
              calculosCompetidores(dam21km70);
            }
          }
        }
        if (llegadaCompetidor.competencia === "10") {
          general10k.push(llegadaCompetidor);
          llegadaCompetidor.posGeneral = general10k.length;
          calculosCompetidores(general10k);

          if (llegadaCompetidor.genero === "Masc") {
            caballeros10k.push(llegadaCompetidor);
            llegadaCompetidor.posSexo = caballeros10k.length;
            calculosCompetidores(caballeros10k);

            if (llegadaCompetidor.edad < 20) {
              cab10kh19.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab10kh19.length;
              calculosCompetidores(cab10kh19);
            } else if (
              llegadaCompetidor.edad >= 20 &&
              llegadaCompetidor.edad <= 24
            ) {
              cab10k2024.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab10k2024.length;
              calculosCompetidores(cab10k2024);
            } else if (
              llegadaCompetidor.edad >= 25 &&
              llegadaCompetidor.edad <= 29
            ) {
              cab10k2529.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab10k2529.length;
              calculosCompetidores(cab10k2529);
            } else if (
              llegadaCompetidor.edad >= 30 &&
              llegadaCompetidor.edad <= 34
            ) {
              cab10k3034.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab10k3034.length;
              calculosCompetidores(cab10k3034);
            } else if (
              llegadaCompetidor.edad >= 35 &&
              llegadaCompetidor.edad <= 39
            ) {
              cab10k3539.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab10k3539.length;
              calculosCompetidores(cab10k3539);
            } else if (
              llegadaCompetidor.edad >= 40 &&
              llegadaCompetidor.edad <= 44
            ) {
              cab10k4044.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab10k4044.length;
              calculosCompetidores(cab10k4044);
            } else if (
              llegadaCompetidor.edad >= 45 &&
              llegadaCompetidor.edad <= 49
            ) {
              cab10k4549.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab10k4549.length;
              calculosCompetidores(cab10k4549);
            } else if (
              llegadaCompetidor.edad >= 50 &&
              llegadaCompetidor.edad <= 54
            ) {
              cab10k5054.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab10k5054.length;
              calculosCompetidores(cab10k5054);
            } else if (
              llegadaCompetidor.edad >= 55 &&
              llegadaCompetidor.edad <= 59
            ) {
              cab10k5559.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab10k5559.length;
              calculosCompetidores(cab10k5559);
            } else if (
              llegadaCompetidor.edad >= 60 &&
              llegadaCompetidor.edad <= 64
            ) {
              cab10k6064.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab10k6064.length;
              calculosCompetidores(cab10k6064);
            } else if (
              llegadaCompetidor.edad >= 65 &&
              llegadaCompetidor.edad <= 69
            ) {
              cab10k6569.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab10k6569.length;
              calculosCompetidores(cab10k6569);
            } else if (llegadaCompetidor.edad >= 70) {
              cab10km70.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = cab10km70.length;
              calculosCompetidores(cab10km70);
            }
          }
          if (llegadaCompetidor.genero === "Fem") {
            damas10k.push(llegadaCompetidor);
            llegadaCompetidor.posSexo = damas10k.length;
            calculosCompetidores(damas10k);

            if (llegadaCompetidor.edad < 20) {
              dam10kh19.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam10kh19.length;
              calculosCompetidores(dam10kh19);
            } else if (
              llegadaCompetidor.edad >= 20 &&
              llegadaCompetidor.edad <= 24
            ) {
              dam10k2024.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam10k2024.length;
              calculosCompetidores(dam10k2024);
            } else if (
              llegadaCompetidor.edad >= 25 &&
              llegadaCompetidor.edad <= 29
            ) {
              dam10k2529.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam10k2529.length;
              calculosCompetidores(dam10k2529);
            } else if (
              llegadaCompetidor.edad >= 30 &&
              llegadaCompetidor.edad <= 34
            ) {
              dam10k3034.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam10k3034.length;
              calculosCompetidores(dam10k3034);
            } else if (
              llegadaCompetidor.edad >= 35 &&
              llegadaCompetidor.edad <= 39
            ) {
              dam10k3539.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam10k3539.length;
              calculosCompetidores(dam10k3539);
            } else if (
              llegadaCompetidor.edad >= 40 &&
              llegadaCompetidor.edad <= 44
            ) {
              dam10k4044.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam10k4044.length;
              calculosCompetidores(dam10k4044);
            } else if (
              llegadaCompetidor.edad >= 45 &&
              llegadaCompetidor.edad <= 49
            ) {
              dam10k4549.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam10k4549.length;
              calculosCompetidores(dam10k4549);
            } else if (
              llegadaCompetidor.edad >= 50 &&
              llegadaCompetidor.edad <= 54
            ) {
              dam10k5054.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam10k5054.length;
              calculosCompetidores(dam10k5054);
            } else if (
              llegadaCompetidor.edad >= 55 &&
              llegadaCompetidor.edad <= 59
            ) {
              dam10k5559.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam10k5559.length;
              calculosCompetidores(dam10k5559);
            } else if (
              llegadaCompetidor.edad >= 60 &&
              llegadaCompetidor.edad <= 64
            ) {
              dam10k6064.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam10k6064.length;
              calculosCompetidores(dam10k6064);
            } else if (
              llegadaCompetidor.edad >= 65 &&
              llegadaCompetidor.edad <= 69
            ) {
              dam10k6569.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam10k6569.length;
              calculosCompetidores(dam10k6569);
            } else if (llegadaCompetidor.edad >= 70) {
              dam10km70.push(llegadaCompetidor);
              llegadaCompetidor.posEdad = dam10km70.length;
              calculosCompetidores(dam10km70);
            }
          }
        }
      }
      
      break;
    }
    if (!encontrado) {
      let llegadaCompetidor = {
        dorsal: dorsalCompetidor,
        tiempo: tiempoCompetidor,
      };
    
      if (tiempoInicial === null) {
        // Establecer el tiempo inicial solo la primera vez
        tiempoInicial = {
          hora: llegadaCompetidor.tiempoHora,
          minutos: llegadaCompetidor.tiempoMinutos,
          segundos: llegadaCompetidor.tiempoSegundos,
        };
      }
    
      const controlExistenciaGeneral = general.findIndex(item => item.dorsal === llegadaCompetidor.dorsal);
      if (controlExistenciaGeneral === -1) {
        // La dorsal no existe en el array 'general', agregarla
    
        // Calcular la diferencia de tiempo en segundos
        const tiempoInicialSegundos =
          tiempoInicial.hora * 3600 +
          tiempoInicial.minutos * 60 +
          tiempoInicial.segundos;
        const tiempoCompetidorSegundos =
          tiempoCompetidor.hora * 3600 +
          tiempoCompetidor.minutos * 60 +
          tiempoCompetidor.segundos;
    
        let diferenciaSegundos =
          tiempoCompetidorSegundos - tiempoInicialSegundos;
    
        // Asegurarse de que la diferencia de tiempo sea positiva
        if (diferenciaSegundos < 0) {
          diferenciaSegundos += 24 * 3600; // Sumar un día en segundos (24 horas * 60 minutos * 60 segundos)
        }
    
        // Convertir la diferencia de tiempo a formato hh:mm:ss
        const difHoras = Math.floor(diferenciaSegundos / 3600);
        const difMinutos = Math.floor((diferenciaSegundos % 3600) / 60);
        const difSegundos = diferenciaSegundos % 60;
    
        llegadaCompetidor.tiempo = `${padZero(difHoras)}:${padZero(
          difMinutos
        )}:${padZero(difSegundos)}`;
        if (difHoras === 0) {
          llegadaCompetidor.tiempo = `${padZero(difMinutos)}:${padZero(
            difSegundos
          )}`;
        }
    
        llegadaCompetidor.tiempoHora = difHoras;
        llegadaCompetidor.tiempoMinutos = difMinutos;
        llegadaCompetidor.tiempoSegundos = difSegundos;
    
        revision.push(llegadaCompetidor);
      }
      
    }
  

    console.clear();
    console.log("ingresados: ", ingresos);
    console.log("general21K: ", general21k);
    console.log("caballeros21K: ", caballeros21k);
    console.log(cab21kh19);
    console.log(cab21k2024);
    console.log(cab21k2529);
    console.log(cab21k3034);
    console.log(cab21k3539);
    console.log(cab21k4044);
    console.log(cab21k4549);
    console.log(cab21k5054);
    console.log(cab21k5559);
    console.log(cab21k6064);
    console.log(cab21k6569);
    console.log(cab21km70);

    console.log("damas21K: ", damas21k);
    console.log(damas21k);
    console.log(dam21kh19);
    console.log(dam21k2024);
    console.log(dam21k2529);
    console.log(dam21k3034);
    console.log(dam21k3539);
    console.log(dam21k4044);
    console.log(dam21k4549);
    console.log(dam21k5054);
    console.log(dam21k5559);
    console.log(dam21k6064);
    console.log(dam21k6569);
    console.log(dam21km70);

    console.log("general10K: ", general10k);
    console.log("caballeros10K: ", caballeros10k);
    console.log(cab10kh19);
    console.log(cab10k2024);
    console.log(cab10k2529);
    console.log(cab10k3034);
    console.log(cab10k3539);
    console.log(cab10k4044);
    console.log(cab10k4549);
    console.log(cab10k5054);
    console.log(cab10k5559);
    console.log(cab10k6064);
    console.log(cab10k6569);
    console.log(cab10km70);
    console.log("damas10K: ", damas10k);
    console.log(dam10kh19);
    console.log(dam10k2024);
    console.log(dam10k2529);
    console.log(dam10k3034);
    console.log(dam10k3539);
    console.log(dam10k4044);
    console.log(dam10k4549);
    console.log(dam10k5054);
    console.log(dam10k5559);
    console.log(dam10k6064);
    console.log(dam10k6569);
    console.log(dam10km70);
    console.log("revision: ",revision);
    console.log("duplicados: ",duplicados);
  }

  const competencia21k = "21.097";
  const competencia10k = "10.500";

  function calculosCompetidores(competidores) {
    const tiempoInicialSegundos =
      competidores[0].tiempoHora * 3600 +
      competidores[0].tiempoMinutos * 60 +
      competidores[0].tiempoSegundos;

    for (let j = 0; j < competidores.length; j++) {
      const llegadaCompetidor = competidores[j];
      const llegadaCompetidorSegundos =
        llegadaCompetidor.tiempoHora * 3600 +
        llegadaCompetidor.tiempoMinutos * 60 +
        llegadaCompetidor.tiempoSegundos;

      let diferenciaSegundos =
        llegadaCompetidorSegundos - tiempoInicialSegundos;

      // Asegurarse de que la diferencia de tiempo sea positiva
      if (diferenciaSegundos < 0) {
        diferenciaSegundos += 24 * 3600; // Sumar un día en segundos (24 horas * 60 minutos * 60 segundos)
      }

      // Convertir la diferencia de tiempo a formato hh:mm:ss
      const difHoras = Math.floor(diferenciaSegundos / 3600);
      const difMinutos = Math.floor((diferenciaSegundos % 3600) / 60);
      const difSegundos = diferenciaSegundos % 60;

      // Asignar los valores de difTiempoG, difTiempoS y difTiempoE según corresponda
      if (competidores === general21k || competidores === general10k) {
        llegadaCompetidor.difTiempoG = formatDifTiempo(
          difHoras,
          difMinutos,
          difSegundos
        );
        llegadaCompetidor.totalCorredores = competidores.length;
        velocidadCalculoHorasCompetidor = llegadaCompetidor.tiempoHora;
        velocidadCalculoMinutosCompetidor =
          llegadaCompetidor.tiempoMinutos / 60;
        velocidadCalculoSegundosCompetidor =
          llegadaCompetidor.tiempoSegundos / 3600;
        ritmoCalculoHorasCompetidor = llegadaCompetidor.tiempoHora * 3600;
        ritmoCalculoMinutoCompetidor = llegadaCompetidor.tiempoMinutos * 60;
        ritmoCalculoSegundosCompetidor = llegadaCompetidor.tiempoSegundos;
        if (llegadaCompetidor.competencia === "21") {
          velocidadCompetidor = (
            competencia21k /
            (velocidadCalculoHorasCompetidor +
              velocidadCalculoMinutosCompetidor +
              velocidadCalculoSegundosCompetidor)
          ).toFixed(2);
          llegadaCompetidor.velocidad = velocidadCompetidor + " Km/h";
          ritmoMinutoCompetidor =
            (ritmoCalculoHorasCompetidor +
              ritmoCalculoMinutoCompetidor +
              ritmoCalculoSegundosCompetidor) /
            60 /
            competencia21k;
        } else {
          velocidadCompetidor = (
            competencia10k /
            (velocidadCalculoHorasCompetidor +
              velocidadCalculoMinutosCompetidor +
              velocidadCalculoSegundosCompetidor)
          ).toFixed(2);
          llegadaCompetidor.velocidad = velocidadCompetidor + " Km/h";
          ritmoMinutoCompetidor =
            (ritmoCalculoHorasCompetidor +
              ritmoCalculoMinutoCompetidor +
              ritmoCalculoSegundosCompetidor) /
            60 /
            competencia10k;
        }
        ritmoSegundosCompetidor = Math.trunc((ritmoMinutoCompetidor % 1) * 60);
        ritmoMinutosCompetidor = Math.trunc(ritmoMinutoCompetidor);
        if (ritmoSegundosCompetidor < 10) {
          ritmoSegundosCompetidor = "0" + ritmoSegundosCompetidor;
        }
        if (ritmoMinutosCompetidor < 10) {
          ritmoMinutosCompetidor = "0" + ritmoMinutosCompetidor;
        }
        llegadaCompetidor.ritmo =
          ritmoMinutosCompetidor + " : " + ritmoSegundosCompetidor + " min/km";
      } else if (competidores === damas10k || competidores === damas21k) {
        llegadaCompetidor.difTiempoS = formatDifTiempo(
          difHoras,
          difMinutos,
          difSegundos
        );
        llegadaCompetidor.totalPorSexo = competidores.length;
      } else if (
        competidores === caballeros10k ||
        competidores === caballeros21k
      ) {
        llegadaCompetidor.difTiempoS = formatDifTiempo(
          difHoras,
          difMinutos,
          difSegundos
        );
        llegadaCompetidor.totalPorSexo = competidores.length;
      } else {
        llegadaCompetidor.totalPorEdad = competidores.length;
        if (difHoras === 0) {
          llegadaCompetidor.difTiempoE = `+${padZero(difMinutos)}:${padZero(
            difSegundos
          )}`;
        } else {
          llegadaCompetidor.difTiempoE = `+${padZero(difHoras)}:${padZero(
            difMinutos
          )}:${padZero(difSegundos)}`;
        }
      }
    }
  }

  function formatDifTiempo(difHoras, difMinutos, difSegundos) {
    if (difHoras === 0) {
      return `+${padZero(difMinutos)}:${padZero(difSegundos)}`;
    } else {
      return `+${padZero(difHoras)}:${padZero(difMinutos)}:${padZero(
        difSegundos
      )}`;
    }
  }
});
