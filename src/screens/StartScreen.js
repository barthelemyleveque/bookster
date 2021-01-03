import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Bienvenue</Header>
    <Paragraph>
      Rejoignez Bookster et retrouvez tous vos meilleurs moments de lecture, au même endroit.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
  </Background>
)

export default StartScreen
