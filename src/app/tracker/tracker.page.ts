import { Component, OnInit } from '@angular/core';
import { Plugins, HapticsImpactStyle, HapticsNotificationType } from '@capacitor/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { RouteService } from 'src/services/route.service';
import { Point } from 'src/classes/point';
const { Haptics } = Plugins;
const { Geolocation } = Plugins;

@Component({
  selector: 'app-tracker',
  templateUrl: 'tracker.page.html',
  styleUrls: ['tracker.page.scss']
})
export class TrackerPage implements OnInit {

  points: Point[] = [];
  lastPoint: Point;
  didStartTracking = false;

  constructor(
    private loadingController: LoadingController,
    private routeService: RouteService,
    private alertController: AlertController) { }

  ngOnInit() {
    // this.presentLoading('Calibrando GPS');
    // this.calibrateGPS((response) => {
    //   this.loadingController.dismiss();
    // }, (error) => {
    //   this.loadingController.dismiss();
    // }, () => {
    //   this.loadingController.dismiss();
    // }, {});
  }

  /**
   * Presenta una vista con un spinner.
   */
  private async presentLoading(message) {
    const loading = await this.loadingController.create({
      message
    });
    await loading.present();
  }

  hapticsImpact(style = HapticsImpactStyle.Heavy) {
    Haptics.impact({
      style
    });
  }

  async saveLocation() {
    if (!this.didStartTracking) {
      this.didStartTracking = true;
    }
    const options = {
      timeout: 10000,
      enableHighAccuracy: true
    };
    try {
      this.presentLoading('Obteniendo Coordenada');
      let coordinates = await Geolocation.getCurrentPosition(options);
      this.loadingController.dismiss();
      console.log(coordinates)

        // if (coordinates.coords.accuracy > 20) {
        //   this.presentLoading('Calibrando GPS');
        //   this.calibrateGPS((position) => {
        //     console.log('Save location after calibration');
        //     this.saveCoordinate(position.coords);
        //     this.loadingController.dismiss();
        //   }, () => {
        //     this.loadingController.dismiss();
        //   }, {}, {});
        // } else {
        this.saveCoordinate(coordinates.coords);
        this.hapticsImpact(HapticsImpactStyle.Medium);
        // }
    } catch (error) {
      this.presentErrorAlert(`${error}`);
      console.log(error);
    }
  }

  private saveCoordinate(coordinate) {
    const point = new Point(coordinate.longitude, coordinate.latitude, coordinate.accuracy);
    this.lastPoint = point;
    this.points.push(point);
  }

  endTracking() {
    this.createRoute();
  }

  // calibrateGPS(geolocationSuccess, geolocationError, geoprogress, options) {
  //   let lastCheckedPosition,
  //     locationEventCount = 0,
  //     watch,
  //     timerID;

  //   options = options || {};

  //   const foundPosition = (position) => {
  //     console.log('Should dismiss');
  //     geolocationSuccess(position);
  //   };

  //   const checkLocation = (position) => {
  //     console.log(position.coords.accuracy);
  //     lastCheckedPosition = position;
  //     locationEventCount = locationEventCount + 1;
  //     // We ignore the first event unless it's the only one received because some devices seem to send a cached
  //     // location even when maxaimumAge is set to zero
  //     console.log(locationEventCount);
  //     console.log((position.coords.accuracy <= options.desiredAccuracy) && (locationEventCount > 1));
  //     console.log( `(${position.coords.accuracy} <= ${options.desiredAccuracy}) && (${locationEventCount} > 1)`)
  //     if ((position.coords.accuracy <= options.desiredAccuracy) && (locationEventCount > 1)) {
  //       clearTimeout(timerID);
  //       watch.unsubscribe();
  //       foundPosition(position);
  //     } else {
  //       geoprogress(position);
  //     }
  //   };

  //   const stopTrying = () => {
  //     watch.unsubscribe();
  //     foundPosition(lastCheckedPosition);
  //   };

  //   const onError = (error) => {
  //     clearTimeout(timerID);
  //     watch.unsubscribe();
  //     geolocationError(error);
  //   };

  //   if (!options.maxWait) {
  //     options.maxWait = 20000;
  //   }
  //   if (!options.desiredAccuracy) {
  //     options.desiredAccuracy = 15;
  //   }
  //   if (!options.timeout) {
  //     options.timeout = options.maxWait;
  //   }

  //   options.maximumAge = 0;
  //   options.enableHighAccuracy = true;

  //   watch = Geolocation.watchPosition(options, (position, error) => {
  //     if (error) {
  //       this.presentErrorAlert(`${error}`);
  //       onError(error);
  //       return;
  //     }
  //     checkLocation(position);
  //   });
  //   timerID = setTimeout(stopTrying, options.maxWait); // Set a timeout that will abandon the location loop
  // }

  private createRoute() {
    const route = {
      name: 'Ruta 1',
      points: []
    };
    this.points.forEach(point => {
      const jsonPoint = {
        latitude: point.latitude,
        longitude: point.longitude,
        precision: point.precision
      };
      route.points.push(jsonPoint);
    });

    this.presentLoading('Creando Ruta');
    this.routeService.createRoute(route).subscribe(response => {
      this.loadingController.dismiss();
      this.didStartTracking = false;
      this.points = [];
      Haptics.notification({ type: HapticsNotificationType.SUCCESS });
    }, error => {
      console.log(error);
      Haptics.notification({ type: HapticsNotificationType.ERROR });
      this.loadingController.dismiss();
      this.presentErrorAlert('Hubo un error al crear la ruta.');
    });
  }

  /**
   * Presenta una alerta de error
   */
  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}
