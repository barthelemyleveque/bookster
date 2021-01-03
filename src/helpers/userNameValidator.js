import { userExists } from '../api/fireQueries';

export function userNameValidator(userName) {
    if (!userName || userName.length <= 0) {
        return "Votre nom d'utilisateur ne peut être vide."
    } 
    let verif = userExists(userName).then(function(result){
        return result
    });
    return verif
  }