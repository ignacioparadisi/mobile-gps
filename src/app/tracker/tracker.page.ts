import { Component, OnInit } from '@angular/core';
import { Plugins, HapticsImpactStyle, HapticsNotificationType } from '@capacitor/core';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { Point } from 'src/classes/point';
import { RouteService } from 'src/services/route.service';
const { Haptics } = Plugins;

@Component({
  selector: 'app-tracker',
  templateUrl: 'tracker.page.html',
  styleUrls: ['tracker.page.scss']
})
export class TrackerPage implements OnInit {

  private currentCoordinate: Point;
  distance: number;
  lastPoint: Point;
  points: Point[] = [];
  didStartTracking = false;

  constructor(private backgroundGeolocation: BackgroundGeolocation,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private routeService: RouteService) {}

  ngOnInit() {
  }

  didTapTrackButton() {
    if (this.didStartTracking) {
      this.saveCoordinate(this.currentCoordinate);
    } else {
      this.startTracking();
    }
  }

  startTracking() {
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 1,
      distanceFilter: 1,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
      startForeground: false
    };

    this.backgroundGeolocation.configure(config).then(() => {
      this.backgroundGeolocation
        .on(BackgroundGeolocationEvents.location)
        .subscribe((location: BackgroundGeolocationResponse) => {
          // No guardar la coordenada en este momento porque esto se ejecuta cada vez que la ubiucación cambia. Hay que calcular
          // cuando han pasado 10 metros y luego avisar al usuario para que de tap para guardar la coordenada.
          this.currentCoordinate = new Point(location.longitude, location.latitude, location.accuracy);
          this.distance = this.currentCoordinate.distance(this.lastPoint);
          console.log(location);
          this.loadingController.dismiss();
          // this.sendGPS(location);

          // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
          // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
          // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
          this.backgroundGeolocation.finish();
        });
    });

    // start recording location
    this.didStartTracking = true;
    this.presentLoading('Calibrando GPS');
    this.backgroundGeolocation.start();
  }

  stopTracking() {
    this.backgroundGeolocation.stop();
    this.createRoute();
  }

  hapticsImpact(style = HapticsImpactStyle.Heavy) {
    Haptics.impact({
      style
    });
  }

  private saveCoordinate(coordinate) {
    const point = new Point(coordinate.longitude, coordinate.latitude, coordinate.accuracy);
    this.lastPoint = point;
    this.points.push(point);
    this.hapticsImpact();
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
      this.presentErrorAlert();
    });
    
  }

    /**
   * Presenta una alerta de error
   */
  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Hubo un error al crear la ruta.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}
