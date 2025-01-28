AOS.init();

const dataEvento = new Date("Apr 26, 2025 16:00");
const timeStampEvento = dataEvento.getTime();

const contaHora = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diaMS = 1000 * 60 * 60 * 24;
    const horaMS = 1000 * 60 * 60;
    const minMS = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaEvento/diaMS);
    const horasAteEvento = Math.floor((distanciaEvento%diaMS) / horaMS);
    const minutosAteEvento = Math.floor((distanciaEvento % horaMS) / minMS);
    const segundoAteEvento = Math.floor((distanciaEvento%minMS)/1000);

    // console.log(diasAteEvento);
    // console.log(horasAteEvento);
    // console.log(minutosAteEvento);
    // console.log(segundoAteEvento);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundoAteEvento}s`
    if(distanciaEvento <0){
        clearInterval(contaHora);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }
},1000);