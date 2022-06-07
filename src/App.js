import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const bgButtonCollor = 'white';
const githubPage = 'https://github.com/DiogoVilela12';
const imageProfile =
  'https://avatars.githubusercontent.com/u/90631238?s=400&u=b3e3735fff75ba3261c44695adf341e56fd1b41e&v=4';

const App = () => {
  const handlePressOpenGithub = async () => {
    const res = await Linking.canOpenURL(githubPage);
    if (res) {
      Linking.openURL(githubPage);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle={'light-content'} />
      <View style={style.content}>
        <Text style={style.text} accessibilityLabel={'nome: Diogo Vilela'}>
          Diogo Vilela
        </Text>
        <Image style={style.imageAvatar} source={{uri: imageProfile}} />
        <Text
          style={style.imageContact}
          accessibilityLabel={'Nickname: DiogoVilela12'}>
          @DiogoVilela12
        </Text>
        <Text
          style={style.imageDescription}
          accessibilityLabel={
            'Descrição: DEV Fullstack, Extremamente motivado e em constante aprendizado para expandir minhas habilidades e conhecimentos.'
          }>
          DEV. Fullstack. Extremamente motivado e em constante aprendizado para
          expandir minhas habilidades e conhecimentos.
        </Text>
      </View>
      <Pressable onPress={handlePressOpenGithub}>
        <View style={style.buttonGitHubPage}>
          <Text style={style.textButtonGitHubPage}>Open GitHub</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  imageAvatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  imageContact: {
    color: 'gray',
    fontWeight: 'bold',
    padding: 5,
  },
  imageDescription: {
    padding: 5,
    marginLeft: 50,
    marginRight: 50,
    color: 'white',
  },
  buttonGitHubPage: {
    backgroundColor: bgButtonCollor,
    padding: 20,
    borderRadius: 20,
    margin: 10,
  },
  textButtonGitHubPage: {
    color: 'black',
    fontWeight: 'bold',
  },
});
