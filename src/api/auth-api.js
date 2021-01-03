import firebase from 'firebase/app'
import 'firebase/auth'
import { createUserDb } from './fireQueries'

export const logoutUser = () => {
  firebase.auth().signOut()
}

export const signInUser = async ({ name, email, password, userName }) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    firebase.auth().currentUser.updateProfile({
      displayName: name,
    })
    try {
      await createUserDb(name, email, userName)
    } catch (error) {
      return {
        error: error.message,
      }
    }

    return { user }

  } catch (error) {
    return {
      error: error.message,
    }
  }

}

export const loginUser = async ({ email, password }) => {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const sendEmailWithPassword = async (email) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email)
    return {}
  } catch (error) {
    return {
      error: error.message,
    }
  }
}
