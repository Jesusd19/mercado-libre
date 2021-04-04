export function formatNumber(num) {
    return new Intl.NumberFormat("ES-AR", {style: 'currency', currency:'ARS'}).format(num)
}