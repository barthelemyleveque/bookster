import firebase from 'firebase/app'
import 'firebase/firestore'


export const userExists = async ( userName ) => {
    try {
        // As each userName is unique, we check them this way :
        const userDocument = await firebase
        .firestore()
        .collection('Users')
        .doc(userName)
        .get();

        if (userDocument.exists){
            return "Ce nom d'utilisateur existe déjà"
        };

        return ""

    } catch (error) {
        return ""
    }
}

export const createUserDb = async ( name, email, userName ) => {
    try {
        const userDocument = await firebase
        .firestore()
        .collection('Users')
        .doc(userName)
        .set({
            fullName: name,
            email: email,
            userName: userName,
        })
        .then(() => console.log('User added !'))
    } catch (error) {
        console.log(error.message)
        return {
            error: error.message,
        }
    }
}