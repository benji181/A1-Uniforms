function initMap() {
    const maps = document.querySelectorAll('.location-map');
    
    maps.forEach(mapElement => {
        const lat = parseFloat(mapElement.getAttribute('data-lat'));
        const lng = parseFloat(mapElement.getAttribute('data-lng'));
        
        const map = new google.maps.Map(mapElement, {
            center: { lat, lng },
            zoom: 15 
        });

        
        new google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: 'A1'
        });
    });
}