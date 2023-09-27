let now = new Date();
let n = now.toLocaleTimeString();
actual_hour = (n.slice(0,5))
let minutes = Math.floor(Math.random() * 601) + 300;
[hour,minute] = actual_hour.split(":")
hour = parseInt(hour)
minute = parseInt(minute)
hour += Math.floor(minutes/60)
minute += minutes%60
console.log("Hora Actual: ", actual_hour)
console.log("Valor Aleatorio Generado en Minutos: ", minutes)
console.log("Hora Final : " + hour + ":" + minute)