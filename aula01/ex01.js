/**Calcular consumo médio de combustível de uma viagem
 * ter 3 variáveis
 * preço do combustível
 * consumo médio por km
 * distância percorrida
 */

const precoCombustivel = 3.15;
const kmPorLitro = 12;
const distanciaPercorrida = 235;

const litrosConsumidos = distanciaPercorrida / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log("Valor gasto: R$ " + valorGasto.toFixed(2));
console.log("Litros consumidos: ".concat(litrosConsumidos.toFixed(2)));