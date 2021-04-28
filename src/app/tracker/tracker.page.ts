import { Component, OnInit } from '@angular/core';
import { Plugins, HapticsImpactStyle, HapticsNotificationType } from '@capacitor/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { RouteService } from 'src/services/route.service';
import { Point } from 'src/classes/point';
import { SheetState } from 'ion-bottom-sheet';
const { Haptics } = Plugins;
const { Geolocation } = Plugins;
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tracker',
  templateUrl: 'tracker.page.html',
  styleUrls: ['tracker.page.scss']
})
export class TrackerPage implements OnInit {

  currentPosition: Point = null;
  points: Point[] = [];
  didStartTracking = false;
  watchId: string;
  distance: number = 0;

  // Sheet Variables
  sheetState: SheetState = SheetState.Bottom
  sheetMinHeight: number = 220;

  constructor(
    private loadingController: LoadingController,
    private routeService: RouteService,
    private alertController: AlertController,
    private platform: Platform) { }

  ngOnInit() {
    // this.presentLoading('Calibrando GPS');
    // this.calibrateGPS((response) => {
    //   this.loadingController.dismiss();
    // }, (error) => {
    //   this.loadingController.dismiss();
    // }, () => {
    //   this.loadingController.dismiss();
    // }, {});
    this.startTracking();
    this.didStartTracking = true;
    this.calculateBottomSheetMinHeight();
  }

  calculateBottomSheetMinHeight() {
    if (this.platform.is("iphone")) {
      this.sheetMinHeight = 220;
    } else if (this.platform.is("desktop")) {
      this.sheetMinHeight = 110;
    }
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

  startTracking() {
    const options = {
      timeout: 10000,
      enableHighAccuracy: true
    };
    this.watchId = Geolocation.watchPosition(options, (position, error) => {
      if (error) {
        console.log(error);
        if (error.code == 1) {
          this.presentErrorAlert("Permiso para utilizar Ubicación Denegado", "Ve a Configuraciones > Privacidad > Localización > Sitios web de Safari y asegúrate que el acceso está permitido al usar la app.");
        } else {
          this.presentErrorAlert(null, error.message);
        }
        return;
      }
      console.log(position);
      this.currentPosition = new Point(position.coords.longitude, position.coords.latitude, position.coords.accuracy);

      if (this.points.length > 0) {
        let lastPoint = this.points[this.points.length - 1];
        let distance = lastPoint.distancePythagoras(this.currentPosition);
        console.log(distance);
        this.distance = distance;
        if (distance > 10) {
          // Vibrate
          console.log('Aviso de guardar coordenada');
        }
      }
    });
  }

  async saveLocation() {
    const options = {
      timeout: 10000,
      enableHighAccuracy: true
    };
    this.saveCoordinate(this.currentPosition);
    this.hapticsImpact(HapticsImpactStyle.Medium);
    // try {
    //   // this.presentLoading('Obteniendo Coordenada');
    //   let coordinates = await Geolocation.getCurrentPosition(options);
    //   // this.loadingController.dismiss();
    //   console.log(coordinates)

    //     // if (coordinates.coords.accuracy > 20) {
    //     //   this.presentLoading('Calibrando GPS');
    //     //   this.calibrateGPS((position) => {
    //     //     console.log('Save location after calibration');
    //     //     this.saveCoordinate(position.coords);
    //     //     this.loadingController.dismiss();
    //     //   }, () => {
    //     //     this.loadingController.dismiss();
    //     //   }, {}, {});
    //     // } else {
    //     this.saveCoordinate(coordinates.coords);
    //     this.hapticsImpact(HapticsImpactStyle.Medium);
    //     // }
    // } catch (error) {
    //   this.presentErrorAlert(error.message);
    //   console.log(error);
    // }
  }

  private saveCoordinate(coordinate: Point) {
    // const point = new Point(coordinate.longitude, coordinate.latitude, coordinate.accuracy);
    this.points.push(coordinate);
  }

  endTracking() {
    this.createRoute();
    Geolocation.clearWatch({ id: this.watchId });
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
      this.presentErrorAlert(null, 'Hubo un error al crear la ruta.');
    });
  }

  /**
   * Presenta una alerta de error
   */
  async presentErrorAlert(title: string = null, message: string) {
    let header = "Error"
    if (title != null) {
      header = title
    }
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  saveButtonIsDisabled(): boolean {
    return this.points.length < 2
  }

}
