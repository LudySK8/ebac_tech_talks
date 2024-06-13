AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const dataDoEvento = new Date("December 12, 2024 00:00:00").getTime();

    const contaAsHoras = setInterval(function() {
        const agora = new Date().getTime();
        const distanciaAteOEvento = dataDoEvento - agora;

        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;
        const segundoEmMs = 1000;

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / segundoEmMs);

        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

        if (distanciaAteOEvento < 0) {
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = 'Evento expirado';
        }
    }, 1000);
});