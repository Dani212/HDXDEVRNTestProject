import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const pImage = require('../../assets/profileImage.jpg');
const bImage = require('../../assets/bgImage.jpg');
const fontFamily = 'nunito';

export default function AppComponet() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" />

      <ImageBackground source={bImage} resizeMode="cover" style={styles.bImage}>
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', flex: 1 }}>
          {/* This is for the back button */}
          <Pressable
            android_ripple={{ color: '#222', borderless: true }}
            style={{ ...styles.backButton }}
          >
            <AntDesign name="left" size={28} color="#ffffff" />
          </Pressable>

          {/* This is for the profile image */}
          <Image source={pImage} style={{ ...styles.pImage }} />

          {/* This is for the name text */}
          <Text style={{ ...styles.name }}>Louis Adjetey Annan</Text>

          <View style={{ ...styles.section }}>
            <View style={{ ...styles.subSection }}>
              <Text style={{ ...styles.sectionText }}>137</Text>
              <Text style={{ ...styles.subSectionText }}>Projects</Text>
            </View>

            <View
              style={{
                ...styles.subSection,
                borderRightWidth: 1,
                borderLeftWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              <Text style={{ ...styles.sectionText }}>124</Text>
              <Text
                style={{
                  ...styles.subSectionText,
                }}
              >
                Followers
              </Text>
            </View>

            <View style={{ ...styles.subSection }}>
              <Pressable
                android_ripple={{
                  color: '#222',
                  borderless: false,
                  radius: 42,
                }}
                style={{ ...styles.followBtn }}
              >
                <Text style={{ ...styles.subSectionText }}>Follow</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View
        style={{
          ...styles.curveEdge,
        }}
      />
      <View style={{ ...styles.sectionTwo }}>
        <Text style={{ ...styles.hText }}>Discover model or Be</Text>
        <Pressable style={{ ...styles.discoverBtn }}>
          <Text style={{ ...styles.discoverBtnText }}>Discovered</Text>
        </Pressable>

        <Text style={{ ...styles.secTwoText }}>
          A Platform that provides many kinds of the best and most trusted
          fashion
        </Text>

        <Pressable
          android_ripple={{
            color: '#222',
            borderless: false,
            radius: 42,
          }}
          style={{ ...styles.roundBtn }}
        >
          <Ionicons name="arrow-forward" size={24} color="#ffffff" />
        </Pressable>

        <View
          style={{
            ...styles.dovView,
          }}
        >
          <View style={{ ...styles.dot }} />
          <View style={{ ...styles.dot }} />
          <View style={{ ...styles.dotDash }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  bImage: {
    width,
    height: height * 0.85,
  },
  backButton: {
    borderRadius: 360,
    padding: 10,
    position: 'absolute',
    top: height * 0.06,
    left: 18,
  },
  pImage: {
    width: hp(12.3),
    height: hp(12.3),
    borderWidth: 1,
    borderRadius: 360,
    alignSelf: 'center',
    borderColor: '#ffffff',
    marginTop: height * 0.15,
  },
  name: {
    fontFamily,
    marginTop: 18,
    fontSize: hp(2.5), // 20,
    color: '#ffffff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  section: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 16,
  },
  subSection: {
    width: '33.33%',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionText: {
    fontSize: hp(3),
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subSectionText: {
    fontFamily,
    fontSize: hp(1.8), //14,
    // fontWeight: 'bold',
    color: '#ffffff',
  },
  followBtn: {
    backgroundColor: '#ffba02',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    paddingBottom: 10,
    paddingTop: 10,
    height: hp(3.5),
    width: hp(11),
  },
  hText: {
    fontFamily,
    alignSelf: 'center',
    fontSize: hp(2.75),
    color: '#ffba02',
    textTransform: 'capitalize',
  },
  curveEdge: {
    height: hp(44), // 380,
    width: wp(107.5),
    left: hp(-1.6),
    bottom: wp(-6), // -25,
    position: 'absolute',
    borderTopRightRadius: 35,
    transform: [{ rotate: `350deg` }],
    backgroundColor: '#1a202c',
  },
  sectionTwo: {
    bottom: 0,
    paddingTop: 18,
    paddingBottom: 18,
    position: 'absolute',
    width,
    height: height * 0.37,
    // backgroundColor: '#1a202c',
  },
  discoverBtn: {
    transform: [{ rotate: '359deg' }],
    backgroundColor: '#24b6ad',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 1,
    padding: 5,
    height: 30,
    width: hp(17), //135,
  },
  discoverBtnText: {
    fontFamily,
    color: '#fff',
    fontSize: hp(2.78),
    fontWeight: 'bold',
  },
  secTwoText: {
    fontFamily,
    width: '90%',
    color: '#fff',
    fontSize: hp(2.1),
    alignSelf: 'center',
    textAlign: 'center',
  },
  roundBtn: {
    height: hp(8.5),
    width: hp(8.5),
    marginTop: 24,
    borderRadius: 360,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcb41',
  },
  dovView: {
    marginTop: 18,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    marginEnd: 10,
    width: hp(1.9),
    height: hp(1.9),
    borderRadius: 360,
    backgroundColor: '#fff',
  },
  dotDash: {
    width: wp(12),
    height: hp(1.9),
    borderRadius: 360,
    backgroundColor: '#ffcb41',
  },
});
