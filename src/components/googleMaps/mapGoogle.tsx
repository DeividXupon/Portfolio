import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

function MapGoogle() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBZqqoC5MsJgBJdkytbZM6k2Hkj8J93fOM'
  })

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{
            lat: -23.667596,
            lng: -46.751802
          }}
          zoom={17}
        >
          <Marker
            position={{
              lat: -23.667596,
              lng: -46.751802
            }}
            options={{ label: { text: 'Estou aqui', fontWeight: '600' } }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  )
}

export default MapGoogle
