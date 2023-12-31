import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "./Menu";

const Home = (props) => {

return (
    <View style={styles.dashboard}>
      <View style={styles.div}>
        <Text style={styles['welcome-back']}>
          <Text style={styles['text-wrapper']}>Welcome Back,</Text>
          <Text style={styles.span}>{'\n'}akil!</Text>
        </Text>
        <View style={styles['overlap-group']}>
          <Text style={styles['text-wrapper-2']}>your groups</Text>
          <Text style={styles['text-wrapper-3']}>your classes</Text>
          <Text style={styles['text-wrapper-4']}>your friends</Text>
          <View style={styles['menu-bar']}>
            <Menu />
          </View>
          <View style={styles.overlap}>
            <Text style={styles['bigNum']}>1</Text>
            <Text style={styles['group-members']}>
              {'\n'}
              biology{'\n'}
              visual{'\n'}
              next meeting
            </Text>
          </View>
          <View style={styles['overlap-2']}>
          <Text style={styles['bigNum']}>2</Text>
            <Text style={styles['group-members']}>
              {'\n'}
              calculus{'\n'}
              auditory{'\n'}
              next meeting
            </Text></View>
            <View style={[styles['overlap-3'], { top: 259  + 10 /* Adjust position as needed */ }]}>
            <Text style={styles['text-wrapper-7']}>Biology</Text>
            <Text style={styles['text-wrapper-8']}>taught by Dr. A</Text>
            <View style={styles['overlap-4']}>
              <Text style={styles['text-wrapper-9']}>4</Text>
              <Text style={styles['study-groups']}>
                Study{'\n'}
                Groups
              </Text>
            </View>
          </View>
          <View style={[styles['overlap-3'], { top: 259 + 24 * 2 + 20 /* Adjust position as needed */ }]}>
            <Text style={styles['text-wrapper-7']}>calculus</Text>
            <Text style={styles['text-wrapper-8']}>taught by Dr. C</Text>
            <View style={styles['overlap-4']}>
              <Text style={styles['text-wrapper-9']}>1</Text>
              <Text style={styles['study-groups']}>
                Study{'\n'}
                Group
              </Text>
            </View>
          </View>
          <Image
            style={styles['female-profile']}
            source={require("../Assets/female-profile.png")}
          />
          <Image
            style={styles['male-user']}
            source={require("../Assets/male-user.png")}
          />
          <Image
            style={styles.img}
            source={require("../Assets/female-profile.png")}
          />
          <Image
            style={styles['female-profile-2']}
            source={require("../Assets/female-profile.png")}
          />
          <Image
            style={styles['male-user-2']}
            source={require("../Assets/male-user.png")}
          />
          <View style={styles.rectangle-2} />
        </View>
        <Image
          style={styles.notification}
          source={{ uri: 'https://c.animaapp.com/Rl7tNbDQ/img/notification@2x.png' }}
        />
        <Image style = {styles.logoTop}
        source={require('../Assets/LearnLink_Logo_White.png')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    backgroundColor: '#4e75eb',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  bigNum: {
    top: 15,
    left: 23,
    color: '#4e75eb',
    fontSize: '40px',
  },
  div: {
    backgroundColor: '#4e75eb',
    height: 844,
    position: 'relative',
    width: 390,
  },
  'welcome-back': {
    color: 'transparent',
    fontFamily: 'Helvetica',
    fontSize: 30,
    fontWeight: '500',
    left: 37,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 220,
  },
  'text-wrapper': {
    color: '#fbfdff',
  },
  span: {
    color: '#fafdff',
    fontSize: 50,
  },
  'overlap-group': {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    height: 600,
    width: 430,
    marginLeft: -20,
    position: 'absolute',
    top: 330,
  },
  'text-wrapper-2': {
    color: '#9b9b9b',
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: '500',
    left: 32,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 22,
    whiteSpace: 'nowrap',
  },
  'text-wrapper-3': {
    color: '#9b9b9b',
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: '500',
    left: 32,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 224,
    whiteSpace: 'nowrap',
  },
  'text-wrapper-4': {
    color: '#9b9b9b',
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: '500',
    left: 32,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 420,
    whiteSpace: 'nowrap',
  },
  'menu-bar': {
    color: '#9b9b9b',
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'center',
    top: 530,
    whiteSpace: 'nowrap',
  },
  overlap: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    height: 148,
    left: 32,
    position: 'absolute',
    top: 58,
    width: 155,
  },
  'group-members': {
    color: '#5d5d5d',
    fontFamily: 'Helvetica',
    fontSize: 15,
    fontWeight: '500',
    left: 25,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 50,
    width: 109,
  },
  'overlap-2': {
    borderRadius: 10,
    height: 148,
    left: 202,
    position: 'absolute',
    top: 58,
    width: 155,
    backgroundColor: '#f4f4f4',

  },
  'text-wrapper-5': {
    color: '#5d5d5d',
    fontFamily: 'Helvetica',
    fontSize: 15,
    fontWeight: '500',
    left: 36,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 59,
    whiteSpace: 'nowrap',
    width: 46,
  },
  rectangle: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    height: 148,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 155,
  },
  'text-wrapper-6': {
    color: '#5d5d5d',
    fontFamily: ' Helvetica',
    fontSize: 15,
    fontWeight: '500',
    left: 53,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 59,
    whiteSpace: 'nowrap',
    width: 50,
  },
  'overlap-3': {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    height: 44,
    left: 32,
    position: 'absolute',
    top: 259,
    width: 325,
  },
  
  'text-wrapper-7': {
    color: '#5d5d5d',
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: '500',
    left: 55,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 8,
    width: 50,
  },
  'text-wrapper-8': {
    color: '#b3b3b3',
    fontFamily: 'Helvetica',
    fontSize: 8,
    fontWeight: '500',
    left: 55,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 23,
    width: 126,
  },
  'overlap-4': {
    height: 24,
    left: 217,
    position: 'absolute',
    top: 9,
    width: 62,
  },
  'text-wrapper-9': {
    color: '#4E75EB',
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: '500',
    left: 0,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    width: 35,
  },
  'study-groups': {
    color: '#b3b3b3',
    fontFamily: 'Helvetica',
    fontSize: 8,
    fontWeight: '500',
    left: 31,
    letterSpacing: 0,
    position: 'absolute',
    top: 2,
    width: 31,
  },
  'female-profile': {
    height: 50,
    left: 32,
    position: 'absolute',
    top: 455,
    width: 55,
  },
  'male-user': {
    height: 50,
    left: 99,
    position: 'absolute',
    top: 455,
    width: 56,
  },
  img: {
    height: 50,
    left: 167,
    position: 'absolute',
    top: 455,
    width: 55,
  },
  'female-profile-2': {
    height: 50,
    left: 302,
    position: 'absolute',
    top: 455,
    width: 55,
  },
  'male-user-2': {
    height: 50,
    left: 233,
    position: 'absolute',
    top: 455,
    width: 55,
  },
  'rectangle-2': {
    backgroundColor: '#f4f4f4',
    height: 38,
    left: 37,
    position: 'absolute',
    top: 546,
    width: 320,
  },
  notification: {
    height: 40,
    left: 322,
    position: 'absolute',
    top: 50,
    width: 40,
  },
  logoTop: {
    height: 40,
    left: 10,
    position: 'absolute',
    top: 50,
    width: 40,
  },
});

export default Home;