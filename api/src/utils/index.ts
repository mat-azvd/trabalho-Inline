export function validarCNPJ(value) {
  if (!value) return false

  // Aceita receber o valor como string, número ou array com todos os dígitos
  const isString = typeof value === 'string'
  const validTypes = isString || Number.isInteger(value) || Array.isArray(value)

  // Elimina valor em formato inválido
  if (!validTypes) return false

  // Filtro inicial para entradas do tipo string
  if (isString) {
    // Limita ao máximo de 18 caracteres, para CNPJ formatado
    if (value.length > 18) return false

    // Teste Regex para veificar se é uma string apenas dígitos válida
    const digitsOnly = /^\d{14}$/.test(value)
    // Teste Regex para verificar se é uma string formatada válida
    const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(value)

    // Se o formato é válido, usa um truque para seguir o fluxo da validação
    if (digitsOnly || validFormat) return true
    // Se não, retorna inválido
    return false
  }

  return false
}

export function validarCPF(value) {
  if (!value) return false

  const isString = typeof value === 'string'
  const validTypes = isString || Number.isInteger(value) || Array.isArray(value)

  // Elimina valor em formato inválido
  if (!validTypes) return false

  // Filtro inicial para entradas do tipo string
  if (isString) {
    // Limita ao máximo de 18 caracteres, para CNPJ formatado
    if (value.length > 14) return false

    // Teste Regex para veificar se é uma string apenas dígitos válida
    const digitsOnly = /^\d{11}$/.test(value)
    // Teste Regex para verificar se é uma string formatada válida
    const validFormat = /^\d{3}.\d{3}.\d{3}-\d{2}$/.test(value)

    // Se o formato é válido, usa um truque para seguir o fluxo da validação
    if (digitsOnly || validFormat) return true
    // Se não, retorna inválido
    return false
  }

  return false
}