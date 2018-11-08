/* 
    Deixa a primeira palavra em maiusculo
    ex: exemplo -> Exemplo
*/

const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter;