from geopy.geocoders import Nominatim

def get_coordinates(address):
    geolocator = Nominatim(user_agent="my_geocoder")
    location = geolocator.geocode(address)
    
    if location:
        return location.latitude, location.longitude
    else:
        return None

# Usage
address = 'khopoli bus stand'
coordinates = get_coordinates(address)
print(coordinates)