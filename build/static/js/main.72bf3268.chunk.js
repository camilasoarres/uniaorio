(this.webpackJsonpuniaorio=this.webpackJsonpuniaorio||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/check.32d24ad4.svg"},29:function(e,a,t){e.exports=t.p+"static/media/logo.3f9b1271.png"},30:function(e,a,t){e.exports=t.p+"static/media/dropdownWhite.1f90e964.svg"},31:function(e,a,t){e.exports=t.p+"static/media/dropUp.a971af96.svg"},32:function(e,a,t){e.exports=t.p+"static/media/densHorizontal.23396a5d.svg"},33:function(e,a,t){e.exports=t.p+"static/media/densVertical.1cac0dbe.svg"},34:function(e,a,t){e.exports=t.p+"static/media/densDiagonal.22c16143.svg"},38:function(e,a,t){e.exports=t.p+"static/media/dropdownBlack.4603df69.svg"},39:function(e,a,t){e.exports=t.p+"static/media/loading.00169747.svg"},41:function(e,a,t){e.exports=t(70)},46:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(27),r=t.n(o),c=(t(46),t(11)),i=t(4),d=t(6),l=t(7),u=t(8),m=t(9),p=t(5),_=t.n(p),h=t(28),g=t.n(h),f=t(29),b=t.n(f),v=t(30),E=t.n(v),N=t(31),D=t.n(N),C=t(32),y=t.n(C),x=t(33),S=t.n(x),k=t(34),M=t.n(k),w=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={buttonList:[{label:"Mapeamento",route:"/"},{label:"Estat\xedsticas por Bairro",route:"/statistics"}],mappingList:["S\xf3cio-Econ\xf4mico","Densidade Demogr\xe1fica","Demandas e Entregas","ONG's Parceiras"],averageIncome:[{text:"At\xe9 R$1.254,00",color:"#FF6600"},{text:"R$1.255,00 - R$2.004,00",color:"#FCA446"},{text:"R$2.005,00 - R$8.640,00",color:"#F2FC36"},{text:"R$8.641,00 - R$11.261,00",color:"#6bfc36"},{text:"Al\xe9m de R$11.261,00",color:"#267300"}],demographicDensity:[{text:"100 - 500 hab."},{text:"100 - 500 hab.",img:M.a,imgDesc:"Hachura Vertical"},{text:"1.001 - 5.000 hab.",img:S.a,imgDesc:"Hachura Horizontal"},{text:"Acima de 5.001",img:y.a,imgDesc:"Hachura Diagonal"}],demandsandDeliveries:[{color:"#A3218E",text:"10.000 cestas demandadas"},{color:"#592F93",text:"1.000 cestas demandadas"},{color:"#0465B2",text:"100 cestas demandadas"},{color:"#00ACAC",text:"10 cestas demandadas"}],isMapping:!1,isSelectedButton:"",isSelectedCheck:["S\xf3cio-Econ\xf4mico","Densidade Demogr\xe1fica"],isSelected:"",isSocioEconomic:!1,DemographicDensity:!1,isDemandsandDeliveries:!1},e.handleIsMappingOpen=function(a){e.setState({isSelectedButton:a,isMapping:!e.state.isMapping})},e.handleSelected=function(a){e.setState({isSelectedButton:a})},e.renderDemandsandDeliveries=function(){return s.a.createElement("div",{className:"container_infos"},e.state.demandsandDeliveries.map((function(e){var a=e.color,t=e.text;return s.a.createElement("div",{className:"container_infos-item"},s.a.createElement("span",{className:"container_infos-item--box infos_item-demand",style:{background:a}}),t)})))},e.renderDemographicDensity=function(){return s.a.createElement("div",{className:"container_infos"},e.state.demographicDensity.map((function(e){var a=e.text,t=e.img,n=e.imgDesc;return s.a.createElement("div",{className:"container_infos-item"},s.a.createElement("span",{className:"container_infos-item--box"},s.a.createElement("img",{src:t,alt:n,className:"density_img"})),a)})))},e.renderSocioEconomic=function(){return s.a.createElement("div",{className:"container_infos"},e.state.averageIncome.map((function(e){var a=e.text,t=e.color;return s.a.createElement("div",{className:"container_infos-item"},s.a.createElement("span",{className:"container_infos-item--box",style:{backgroundColor:t}}),a)})))},e.handleMappingCheck=function(a){var t=e.state.isSelectedCheck;t.find((function(e){return e===a}))?t.splice(t.indexOf(a),1):t=t.concat(a),e.setState({isSelectedCheck:t})},e.renderCheckIcon=function(a){return e.state.isSelectedCheck.find((function(e){return e===a}))?s.a.createElement("img",{src:g.a,alt:"check",className:"mapping_item-checkbox--check"}):null},e.renderDataItem=function(a){var t=e.state.isSelectedCheck.find((function(e){return e===a}));switch(a&&t){case"S\xf3cio-Econ\xf4mico":return e.renderSocioEconomic();case"Densidade Demogr\xe1fica":return e.renderDemographicDensity();case"Demandas e Entregas":return e.renderDemandsandDeliveries();case"ONG's Parceiras":return console.log("ongs");default:return null}},e.renderMapping=function(){return s.a.createElement("div",{className:"container_mapping"},e.state.mappingList.map((function(a){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{key:a,className:"container_mapping-item"},s.a.createElement("div",{className:"mapping_item-checkbox",onClick:function(){return e.handleMappingCheck(a)}},e.renderCheckIcon(a)),s.a.createElement("p",{className:"mapping_item-text"},a)),e.renderDataItem(a))})))},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("aside",{className:"container_menu",style:this.props.styles},s.a.createElement("figure",{className:"container_menu-logo"},s.a.createElement("img",{src:b.a,alt:"logo",className:"menu_logo"})),s.a.createElement("div",{className:"container_menu-wrapper"},this.state.buttonList.map((function(a){var t=a.label,n=a.route;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.b,{key:t,className:"container_menu-button",exact:!0,to:n,activeClassName:"menu_button-active",style:{backgroundColor:e.state.isSelectedButton===t&&"#CC2E00",justifyContent:"Mapeamento"===t&&"space-between"},onClick:"Mapeamento"===t?function(){return e.handleIsMappingOpen(t)}:function(){return e.handleSelected(t)}},t,"Mapeamento"===t&&!1===e.state.isMapping?s.a.createElement("img",{src:E.a,alt:"dropdown",className:"menu_drop"}):"Mapeamento"===t&&s.a.createElement("img",{src:D.a,alt:"dropUp",className:"menu_drop"})),"Mapeamento"===t?e.state.isMapping&&e.renderMapping():null)}))))}}]),t}(n.Component);_.a.accessToken="pk.eyJ1IjoiaWdvcmNvdXRvIiwiYSI6ImNrOWZudjNtcTAyd3EzbHI3a2ppbnpnemUifQ.D--CSyWyEk70oULTVok7vg";var O=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={lng:-43.2096,lat:-22.9035,zoom:10},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=new _.a.Map({container:this.mapContainer,style:"mapbox://styles/igorcouto/ck9mtp0zx384s1jwau5diy2w4/draft",center:[this.state.lng,this.state.lat],zoom:this.state.zoom});a.on("move",(function(){e.setState({lng:a.getCenter().lng.toFixed(4),lat:a.getCenter().lat.toFixed(4),zoom:a.getZoom().toFixed(2)})}));var t=new _.a.Marker({draggable:!0}).setLngLat([0,0]).addTo(a);t.on("dragend",(function(){var e=t.getLngLat(),a="longitude ".concat(e.lng,", latitude ").concat(e.lat);return console.log("teste",a),a})),a.on("load",(function(){a.addSource("earthquakes",{type:"geojson",data:"https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",cluster:!0,clusterMaxZoom:14,clusterRadius:50}),a.addLayer({id:"clusters",type:"circle",source:"earthquakes",filter:["has","point_count"],paint:{"circle-color":["step",["get","point_count"],"#51bbd6",100,"#f1f075",750,"#f28cb1"],"circle-radius":["step",["get","point_count"],20,100,30,750,40]}}),a.addLayer({id:"cluster-count",type:"symbol",source:"earthquakes",filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}}),a.addLayer({id:"unclustered-point",type:"circle",source:"earthquakes",filter:["!",["has","point_count"]],paint:{"circle-color":"#11b4da","circle-radius":4,"circle-stroke-width":1,"circle-stroke-color":"#fff"}}),a.on("click","clusters",(function(e){var t=a.queryRenderedFeatures(e.point,{layers:["clusters"]}),n=t[0].properties.cluster_id;a.getSource("earthquakes").getClusterExpansionZoom(n,(function(e,n){e||a.easeTo({center:t[0].geometry.coordinates,zoom:n})}))})),a.on("click","unclustered-point",(function(e){console.log("e",e.features);var t,n=e.features[0].geometry.coordinates.slice(),s=e.features[0].properties.mag;for(t=1===e.features[0].properties.tsunami?"yes":"no";Math.abs(e.lngLat.lng-n[0])>180;)n[0]+=e.lngLat.lng>n[0]?360:-360;(new _.a.Popup).setLngLat(n).setHTML("magnitude: "+s+"<br>Was there a tsunami?: "+t).addTo(a)})),a.on("mouseenter","clusters",(function(){a.getCanvas().style.cursor="pointer"})),a.on("mouseleave","clusters",(function(){a.getCanvas().style.cursor=""}))})),a.addControl(new _.a.NavigationControl)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",{className:"container_map-rio"},s.a.createElement("p",{className:"map_rio-text"},"riocontra"),s.a.createElement("p",{className:"map_rio-text",style:{color:"#F05123"}},"corona")),s.a.createElement(w,{styles:{position:"absolute",top:0,left:0,zIndex:3}})),s.a.createElement("div",{ref:function(a){return e.mapContainer=a},className:"mapContainer"}))}}]),t}(n.Component),B=t(15),I=t.n(B),j=t(16),R=t(37),F=t(38),L=t.n(F),A=t(39),z=t.n(A),T=t(40),W=t.n(T),$=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={tableTitles:["Bairro","Renda M\xe9dia","N\xba de Casos","N\xba de \xd3bitos","Demandas de Cestas","Cestas Entregues","%"],selectedValue:"Selecionar",selectedItems:["Selecionar","Bairros A-Z","Bairros Z-A","Maior Renda M\xe9dia","Menor Renda M\xe9dia","Maior N\xba de Casos","Menor N\xba de Casos","Maior Ocorr\xeancia de \xd3bitos","Menor Ocorr\xeancia de \xd3bitos","Maior Demanda de Cestas","Menor Demanda de Cestas","Maior N\xba de Cestas Entregues","Menor N\xba de Cestas Entregues"],isDropdownSelected:!1,neighborhoodData:[],isFetching:!1},e.handleSelectedValue=function(a){if(e.setState({selectedValue:a,isDropdownSelected:!1}),"Bairros A-Z"===a){var t=e.state.neighborhoodData.sort((function(e,a){return e._source.Bairro.localeCompare(a._source.Bairro)}));e.setState({neighborhoodData:t})}if("Bairros Z-A"===a){var n=e.state.neighborhoodData.sort((function(e,a){return e._source.Bairro.localeCompare(a._source.Bairro)})).reverse();e.setState({neighborhoodData:n})}if("Maior Renda M\xe9dia"===a){var s=e.state.neighborhoodData.sort((function(e,a){return e._source.Renda_per_capita_sal_min-a._source.Renda_per_capita_sal_min})).reverse();e.setState({neighborhoodData:s})}if("Menor Renda M\xe9dia"===a){var o=e.state.neighborhoodData.sort((function(e,a){return e._source.Renda_per_capita_sal_min-a._source.Renda_per_capita_sal_min}));e.setState({neighborhoodData:o})}if("Maior N\xba de Casos"===a){var r=e.state.neighborhoodData.sort((function(e,a){return e._source.CasosConfirmados-a._source.CasosConfirmados})).reverse();e.setState({neighborhoodData:r})}if("Menor N\xba de Casos"===a){var c=e.state.neighborhoodData.sort((function(e,a){return e._source.CasosConfirmados-a._source.CasosConfirmados}));e.setState({neighborhoodData:c})}if("Maior Ocorr\xeancia de \xd3bitos"===a){var i=e.state.neighborhoodData.sort((function(e,a){return e._source.Obitos-a._source.Obitos})).reverse();e.setState({neighborhoodData:i})}if("Menor Ocorr\xeancia de \xd3bitos"===a){var d=e.state.neighborhoodData.sort((function(e,a){return e._source.Obitos-a._source.Obitos}));e.setState({neighborhoodData:d})}if("Maior Demanda de Cestas"===a){var l=e.state.neighborhoodData.sort((function(e,a){return e._source.cestas_demandadas===a._source.cestas_demandadas?0:e._source.cestas_demandadas<a._source.cestas_demandadas?-1:e._source.cestas_demandadas>a._source.cestas_demandadas?1:void 0})).reverse();e.setState({neighborhoodData:l})}if("Menor Demanda de Cestas"===a){var u=e.state.neighborhoodData.sort((function(e,a){return e._source.cestas_demandadas===a._source.cestas_demandadas?0:e._source.cestas_demandadas<a._source.cestas_demandadas?-1:e._source.cestas_demandadas>a._source.cestas_demandadas?1:void 0}));e.setState({neighborhoodData:u})}if("Maior N\xba de Cestas Entregues"===a){var m=e.state.neighborhoodData.sort((function(e,a){return e._source.cestas_doadas===a._source.cestas_doadas?0:e._source.cestas_doadas<a._source.cestas_doadas?-1:e._source.cestas_doadas>a._source.cestas_doadas?1:void 0})).reverse();e.setState({neighborhoodData:m})}if("Menor N\xba de Cestas Entregues"===a){var p=e.state.neighborhoodData.sort((function(e,a){return e._source.cestas_doadas===a._source.cestas_doadas?0:e._source.cestas_doadas<a._source.cestas_doadas?-1:e._source.cestas_doadas>a._source.cestas_doadas?1:void 0}));e.setState({neighborhoodData:p})}},e.handleSelectOpen=function(){e.setState({isDropdownSelected:!e.state.isDropdownSelected})},e.handleSelectClose=function(){e.state.isDropdownSelected&&e.setState({isDropdownSelected:!1})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchNeighborhood()}},{key:"fetchNeighborhood",value:function(){var e=Object(R.a)(I.a.mark((function e(){var a,t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isFetching:!0}),e.next=4,W()({url:"".concat("https://uniao-rio.now.sh","/bairros"),method:"get"});case 4:a=e.sent,t=a.data.data.map((function(e){return Object(j.a)({},e,{_source:Object(j.a)({},e._source,{cestas_doadas:e._source["Quantidade de cestas doadas"]?parseInt(e._source["Quantidade de cestas doadas"]):0,cestas_demandadas:e._source["Quantidade de cestas demandadas"]?parseInt(e._source["Quantidade de cestas demandadas"]):0,Renda_per_capita_sal_min:parseFloat(e._source.Renda_per_capita_sal_min.split(",").join("."))})})})),this.setState({neighborhoodData:t,isFetching:!1}),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),console.log(e.t0.response),this.setState({isFetching:!1});case 14:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.selectedValue,n=a.isDropdownSelected,o=a.selectedItems,r=a.tableTitles,c=a.neighborhoodData;return s.a.createElement("div",{className:"Grid"},s.a.createElement(w,null),s.a.createElement("div",{className:"container_grid"},s.a.createElement("div",{className:"container_map-rio"},s.a.createElement("p",{className:"map_rio-text"},"riocontra"),s.a.createElement("p",{className:"map_rio-text",style:{color:"#F05123"}},"corona")),s.a.createElement("div",{className:"container_grid-content",onClick:this.handleSelectClose},s.a.createElement("div",{className:"container_grid-content--header"},s.a.createElement("h2",{className:"header_title"},"Estat\xedsticas por Bairro"),s.a.createElement("div",{className:"container_header-sortBy"},s.a.createElement("p",{className:"container_header-sortBy--title"},"Classificar por:"),s.a.createElement("div",{className:"container_header-sortBy--input"},s.a.createElement("div",{className:"header_sortBy-input",onClick:this.handleSelectOpen},s.a.createElement("p",{className:"sortBy_textSeleted"},t),s.a.createElement("img",{src:L.a,alt:"dropdown"})),n&&s.a.createElement("div",{className:"sortBy_selectedItem"},o.map((function(a,t){return s.a.createElement("p",{className:"sortBy_selectedItem-text",onClick:function(){return e.handleSelectedValue(a)},key:t},a)})))))),s.a.createElement("div",{className:"table"},s.a.createElement("table",{className:"container_table"},s.a.createElement("thead",{className:"container_table-head"},s.a.createElement("tr",{className:"container_table-tr"},r.map((function(e,a){return s.a.createElement("th",{key:a,className:"container_table-title",style:{textAlign:"Bairro"===e?"left":"center"}},e)})))),s.a.createElement("tbody",null,c.map((function(e,a){return s.a.createElement("tr",{key:a,className:"container_table-tr"},s.a.createElement("td",{className:"container_table-text container_table-text--neighborhood"},e._source.Bairro),s.a.createElement("td",{className:"container_table-text"},"R$ ",1e3*e._source.Renda_per_capita_sal_min,",00"),s.a.createElement("td",{className:"container_table-text"},e._source.CasosConfirmados),s.a.createElement("td",{className:"container_table-text"},e._source.Obitos),s.a.createElement("td",{className:"container_table-text"},e._source.cestas_demandadas),s.a.createElement("td",{className:"container_table-text"},e._source.cestas_doadas),e&&e._source.cestas_demandadas&&e._source.cestas_doadas?s.a.createElement("td",{className:"container_table-text"},(100*e._source.cestas_doadas/e._source.cestas_demandadas).toFixed(0),"%"):s.a.createElement("td",{className:"container_table-text"},"0"))})))),this.state.isFetching&&s.a.createElement("figure",{className:"container_table-loader"},s.a.createElement("img",{src:z.a,alt:"Carregando...",className:"table-loader"}))))))}}]),t}(n.Component),V=function(){return s.a.createElement(c.a,null,s.a.createElement(i.c,null,s.a.createElement(i.a,{exact:!0,path:"/",component:O}),s.a.createElement(i.a,{path:"/statistics",component:$})))},Z=function(){return s.a.createElement(V,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));_.a.accessToken="pk.eyJ1IjoiaWdvcmNvdXRvIiwiYSI6ImNrOWZudjNtcTAyd3EzbHI3a2ppbnpnemUifQ.D--CSyWyEk70oULTVok7vg",r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.72bf3268.chunk.js.map