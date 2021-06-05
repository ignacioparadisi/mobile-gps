import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from 'src/classes/route';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.page.html',
  styleUrls: ['./route-detail.page.scss'],
})
export class RouteDetailPage implements OnInit {
  // @ViewChild('googleMap') googleMap: ElementRef;
  // map: google.maps.Map;
  route: Route;

  // windowSize = {
  //   width: 500,
  //   height: 500
  // }

  // showError = false;
  // isLoading = false;

  // title = '';
  // mapPoints: google.maps.LatLng[] = [];
  // origin: any;
  // destination: any;

  // private directionsService = new google.maps.DirectionsService;
  // private directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(private activatedRoute: ActivatedRoute, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    const route = this.activatedRoute.snapshot.paramMap.get('route');
    console.log(JSON.parse(route));
    this.route = JSON.parse(route);
    //this.fetchRoute();
  }

  // ngOnChanges(): void {
  //   this.fetchRoute();
  // }

  // fetchRoute() {
  //   if (!this.route) { return }
  //   this.showError = false;
  //   this.title = this.route.name;
  //   const origin = {
  //     lat: Number(this.route.points[0].latitude),
  //     lng: Number(this.route.points[0].longitude),
  //   };
  //   this.origin = origin;
  //   const destination = {
  //     lat: Number(this.route.points[this.route.points.length - 1].latitude),
  //     lng: Number(this.route.points[this.route.points.length - 1].longitude),
  //   };
  //   let points = this.route.points.slice(1, -1);
  //   const waypoints = points.map(point => {
  //     this.mapPoints.push(new google.maps.LatLng(point.latitude, point.longitude))
  //     return {
  //       location: new google.maps.LatLng(point.latitude, point.longitude),
  //       stopover: false
  //     }
  //   });

  //   console.log(origin);
  //   console.log(destination);
  //   console.log(waypoints);
  //   this.createMap(origin, destination, waypoints);
  // }

  // createMap(origin, destination, waypoints) {
  //   this.map = new google.maps.Map(this.googleMap.nativeElement, {
  //     center: origin
  //   })
  //   this.directionsDisplay.setMap(this.map);
  //   this.directionsService.route({
  //     origin: new google.maps.LatLng(origin.lat, origin.lng),
  //     destination: new google.maps.LatLng(destination.lat, destination.lng),
  //     waypoints: waypoints,
  //     travelMode: google.maps.TravelMode.WALKING,
  //     unitSystem: google.maps.UnitSystem.METRIC
  //   }, (response, status) => {
  //     if (String(status) == "OK") {
  //       this.directionsDisplay.setDirections(response);
  //       this.ref.detectChanges();
  //     } else {
  //       this.showError = true;
  //     }
  //   });
  // }

}
