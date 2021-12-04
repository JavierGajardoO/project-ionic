import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  public zoom=1;
  public opcionesdeMapa : google.maps.MapOptions={
    maxZoom: 20,
    minZoom: 7,


  };
  public marcas = [];
  public miPosicion: google.maps.LatLngLiteral={
    lat: 0,
    lng: 0,
  };
  

  constructor() { }


  public crearMarca(evento: google.maps.MapMouseEvent){
    console.log(evento);
    const posicion: google.maps.LatLngLiteral=evento.latLng.toJSON();
    this.marcas.push({
      posicion: posicion,
      titulo: "Marca "+this.marcas.length+1,
      etiqueta: {
        color:"BLUE",
        text: "etiqueta de la marca "+this.marcas.length+1
      },

      opciones:{
        animation: google.maps.Animation.BOUNCE
      }
    })
  }



  ngOnInit(): void {
    if(window.navigator !== undefined){
      window.navigator.geolocation.getCurrentPosition((posicion) =>{
        this.miPosicion={
          lat: posicion.coords.latitude,
          lng: posicion.coords.longitude,
        };
      })
    }
  }

}
