// Libs
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

// Components
import Menu from '../components/Menu';
import Subtitle from '../components/ModalSubtitle';
import filterIcon1 from '../assets/filter-icon-1.svg';
import filterSelectedIcon1 from '../assets/filter-selected-icon-1.svg';
// Images
// import MarkerIcon from '../assets/marker.svg';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvcmNvdXRvIiwiYSI6ImNrOWZudjNtcTAyd3EzbHI3a2ppbnpnemUifQ.D--CSyWyEk70oULTVok7vg';

class HumanitarianMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -43.2096,
      lat:  -22.9035,
      zoom: 12,
      currentOng: '',
      selectedMenuItem: '',
      showSubtitle: false,
    };

    this.map = undefined;
  }

  choosePopup = (layer, feature) => {
    const formatRenda = feature.renda && feature.renda.toLocaleString('pt-BR');
    const bairro = `<h2>${feature.NM_BAIRRO}</h2>`;
    const district = `<h2>${feature.district || feature.title}</h2>`;
    const ongName = `<h2>${feature.title}</h2>`;
    const casosConf = `<p id='covid-color_confirm'>${feature.confirmed_cases}</p>`;
    const adress = `<small>${feature.address_original}</small>`;
    const mortes = `<p id='covid-color'>${feature.deaths}</p>`;
    const demanda = `<p id='solidariedade-color'>${feature.demands || 0}</p>`;
    const ongDemand = `<p id='ong-demand-color'>${feature.demands || 0}</p>`;
    const entrega = `<p id='ong-delivered-color'>${feature.delivered || 0}</p>`;
    const densidade = `<p id='densidade-color'>${feature.dens_ha && feature.dens_ha.toFixed(0)}</p>`;
    const renda = `<p id='renda-color'>R$ ${formatRenda}</p>`;

    if (layer === 'ibge-renda') {
      return `${bairro}${renda}<small>Renda média</small>`
    }
    else if (layer === 'ibge-populacao') {
      return`${bairro}${densidade}<small>Densidade Populacional</small>`
    }
    else if (layer === 'layer-bairro-solidariedade') {
      return`${district}<div><span>${demanda}<small>Cestas entregues</small></div>`
    }
    else if (layer === 'layer-bairro-covid') {
      return `${district}<div><span>${casosConf}<small>Confirmados</small></span><span>${mortes}<small>Óbitos</small></span></div>`
    }
    else if (layer === 'ongs-icons') {
      return `${ongName}${adress}<div><span>${ongDemand}<small>Demanda</small></span><span>${entrega}<small>Entrega</small></span></div>`
    }
  }

  handlePopup = (layer) => {
    let popup;
    const type = (window.innerWidth > 975) ? 'mouseenter' : 'click';

    this.map.on(type, layer.layerName, (e) => {

      const isIcon = layer.layerName === 'ongs-icons' || layer.layerName === 'layer-bairro-covid' || layer.layerName === 'layer-bairro-solidariedade';
      let coord = undefined;

      if (isIcon) {
        coord = e.features[0].geometry.coordinates.slice();

        while (Math.abs(e.lngLat.lng - coord[0]) > 180) {
          coord[0] += e.lngLat.lng > coord[0] ? 360 : -360;
        }
      }

      const popupMarkup = this.choosePopup(layer.layerName, e.features[0].properties)

      popup = new mapboxgl.Popup()
        .setLngLat(isIcon ? coord : e.lngLat)
        .setHTML(popupMarkup)
        .addTo(this.map);

      return popup;
    });

    if(type === 'mouseenter') {
      this.map.on('mouseleave', layer.layerName, () => {
        this.map.getCanvas().style.cursor = '';
        popup.remove();
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedMenuItem } = this.state;

    if (prevState.selectedMenuItem !== selectedMenuItem) {
      if (prevState.selectedMenuItem.layerName){
        this.map.setLayoutProperty(prevState.selectedMenuItem.layerName, 'visibility', 'none');
      }
      this.map.setLayoutProperty(selectedMenuItem.layerName, 'visibility', 'visible');
      this.handlePopup(selectedMenuItem);
    } 
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/igorcouto/ck9mtp0zx384s1jwau5diy2w4/',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      minZoom: 7,
      maxZoom: 14,
      maxBounds: [
        [-45.858984, -23.553521],
        [-40.50585, -20.715985]]
    });

    this.map.on('load', () => {
      // console.log('map.getStyle().layers', this.map.getStyle().layers)

      this.handleMenuItem({
        image: filterIcon1,
        selectedImage: filterSelectedIcon1,
        title: 'Socio-econômico',
        layerName: 'ibge-renda',
        color: '#F05123',
        text: 'socio',
      })
    })

    this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
  }

  handleClose = () => {
    this.setState({
      currentOng: '',
    })
  }

  handleMenuItem = (item) => {
    this.setState({
      selectedMenuItem: item,
    });
  }

  handleModalSubtitle = () => {
    this.setState({
      showSubtitle: !this.state.showSubtitle,
    });
  }

  render() {
    return (
      <div id="map">
        <Menu
          selectMenuItem={this.handleMenuItem}
          selectedMenuItem={this.state.selectedMenuItem} />
        <Subtitle
          handleModalSubtitle={this.handleModalSubtitle}
          showSubtitle={this.state.showSubtitle}
          selectedItem={this.state.selectedMenuItem}/>
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
      </div>
    );
  }
}

export default HumanitarianMap;