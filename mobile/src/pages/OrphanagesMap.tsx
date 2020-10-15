import React from 'react';
import { Feather} from '@expo/vector-icons'
import mapMarker from '../images/map-marker.png';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMao() {
  const navigation = useNavigation();

  function handleNavigateToOrphanageDetails() {
    navigation.navigate('OrphanageDetails');
  }

  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude: -26.2655779,
          longitude: -48.8296814,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} 
      > 
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -26.2655779,
            longitude: -48.8296814,
          }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar brabíssimo!</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
          <Text style={styles.footerText}>2 Orfanatos encontrados</Text>
          <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
            <Feather name="plus" size={20} color="#FFFFFF" />
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },
  footerText: {
    color: "#8fa7b3",
    fontFamily: "Nunito_700Bold",
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: "#15c3d6",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
