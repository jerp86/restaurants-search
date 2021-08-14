import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurant, setRestaurants } from '../../redux/modules/restaurants';

export const MapContainer = ({ google, query, placeId, ...rest }) => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);
  const [map, setMap] = useState(null);

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  useEffect(() => {
    const searchByQuery = (query) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurants([]));

      const request = {
        location: map.center,
        radius: '200',
        type: ['restaurant'],
        query,
      };

      service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurants(results));
        }
      });
    };

    if (query) {
      searchByQuery(query);
    }
  }, [
    dispatch,
    google.maps.places.PlacesService,
    google.maps.places.PlacesServiceStatus.OK,
    map,
    query,
  ]);

  useEffect(() => {
    const getRestaurantById = (placeId) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurant(null));

      const request = {
        placeId,
        fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
      };

      service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurant(place));
        }
      });
    };

    if (placeId) {
      getRestaurantById(placeId);
    }
  }, [
    dispatch,
    google.maps.places.PlacesService,
    google.maps.places.PlacesServiceStatus.OK,
    map,
    placeId,
  ]);

  return (
    <Map
      google={google}
      onReady={onMapReady}
      onRecenter={onMapReady}
      containerStyle={{ width: '72.5%', height: '100vh' }}
      centerAroundCurrentLocation
      {...rest}>
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
