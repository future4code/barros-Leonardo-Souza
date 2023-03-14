// O mock utilizado deve ser feito na função que determina se um personagem é valido. Dessa forma, fazemos a inversão de dependencias e podemos testar a aplicação sem depender da função real.

export const caseValid = jest.fn(()=>{
    return true
})

export const caseInvalid = jest.fn(()=>{
    return false
})