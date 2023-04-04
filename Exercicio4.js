let saopaulo = 67836.43
let riojaneiro = 36678.66
let minasgerais = 29229.88
let espsanto = 27165.48
let outros = 19849.53
total = saopaulo+riojaneiro+minasgerais+espsanto+outros

percentual_SP = (saopaulo / total) * 100
percentual_RJ = (riojaneiro / total) * 100
percentual_MG = (minasgerais / total) * 100
percentual_ES = (espsanto / total) * 100
percentual_Outros = (outros / total) * 100

console.log("São Paulo: "+percentual_SP+" %")
console.log("Rio de Janeiro: "+percentual_RJ+" %")
console.log("Minas Gerais: "+percentual_MG+" %")
console.log("Espirito Santo: "+percentual_ES+" %")
console.log("Outros: "+percentual_Outros+" %")
