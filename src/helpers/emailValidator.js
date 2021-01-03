export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email || email.length <= 0) return "Votre adresse e-mail ne peut pas eêtre vide."
  if (!re.test(email)) return 'Ooops! Il nous faut une adresse e-mail valide.'
  return ''
}
