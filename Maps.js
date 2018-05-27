import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.705330,
          longitude: 115.181595
        },
        title: 'Pantai Kuta',
        subtitle: 'Berlokasi di Jl. Pantai Kuta,Kuta, Kabupaten Badung'
      },
      {
        key:2,
        latlng: {
          latitude:-8.844492,
          longitude:  115.112862
        },
        title: 'Pantai Nyang Nyang',
        subtitle: 'Berlokasi di JL. Pecatu, Kuta Selatan, Kabupaten Badung '
      },
      {
        key:3,
        latlng: {
          latitude: -8.555792,
          longitude: 115.142754
        },
        title: 'Pantai Lovina',
        subtitle: 'Berlokasi di Anturan, Kec Buleleng, Kabupaten Buleleng'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.781404,
          longitude: 115.141222
        },
        title: 'Pantai Tegal Wangi',
        subtitle: 'Berlokasi di jl Tegal Wangi, Jimbaran, Kuta Selatan, Kabupaten Badung'
      },
      {
        key:5,
        latlng: {
          latitude:-8.711970,
          longitude: 115.252022
        },
        title: 'Pantai Mertasari',
        subtitle: 'Berlokasi di JL Danau Poso, Saanur'
      },
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Pantai di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}>pratamac2@gmail.com </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
