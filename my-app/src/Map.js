import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken='pk.eyJ1IjoibGl6YXBzaGVubmEiLCJhIjoiY2tyNGY5OGZnMnV1eTJvcXBpeHJ0enB2OSJ9.LnVqxw5pNFvOHrRMFaXLug';

const data = [
    {
        "location": "Khreshchatyk Street, 13",
        "city": "Kiev",
        "type": "Fire",
        "date": "24.07.21",
        "coordinates": [30.52348126460361, 50.448345223544344],
    },
    {
        "location": "Pyrogovsky Slyah Street, 154",
        "city": "Kiev",
        "type": "Fire",
        "date": "19.07.21",
        "coordinates": [30.532468868003765, 50.343476623390025],
    },
    {
        "location": "Palace of Sports, Sportyvna Square, 1",
        "city": "Kiev",
        "type": "Shooting",
        "date": "24.07.21",
        "coordinates": [30.521138274253317, 50.43807380959281],
    },
    {
        "location": "Khreshchatyk Street, 32",
        "city": "Kiev",
        "type": "Fight",
        "date": "21.07.21",
        "coordinates": [30.5217754, 50.4471976],
    }
]


class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 30.5241361,
            lat: 50.4500336,
            zoom: 12
        }
    }


    componentDidMount(){
        
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/lizapshenna/ckrmui1ce2xzz17mveypc4oiw',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })

        
        data.forEach((location) => {
                console.log(location)
                var marker = new mapboxgl.Marker()
                                                .setLngLat(location.coordinates)
                                                .setPopup(new mapboxgl.Popup({ offset: 30 })
                                                .setHTML('<h4>' + location.city + '</h4>' + location.location))
                                                .addTo(map);

        })


    }

    render(){
        return(
            <div>
                <div ref={el => this.mapContainer = el} style={{width: '100vw', height: '100vh' }}/>
            </div>
        )
    }
}
export default Map;
