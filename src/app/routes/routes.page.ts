import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Route } from 'src/classes/route';
import { RouteService } from 'src/services/route.service';

@Component({
  selector: 'app-routes',
  templateUrl: 'routes.page.html',
  styleUrls: ['routes.page.scss']
})
export class RoutesPage implements OnInit {

  routes: Route[] = [];

  constructor(private router: Router, private routeService: RouteService, private alertController: AlertController) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(event?) {
    this.routeService.getRoutesForUser().subscribe(response => {
      this.routes = response;
      if (event) {
        event.target.complete();
      }
    }, error => {
      if (event) {
        event.target.complete();
      }
      this.presentErrorAlert();
    });
  }

  /**
   * Presenta una alerta de error
   */
  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Hubo al obtener las rutas.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  delete(index) {
    this.routes.splice(index, 1);
  }

  log(message) {
    console.log(message);
  }

  goToDetail(route) {
    console.log(route);
    this.router.navigate(['tabs/routes/detail', { route: JSON.stringify(route) }])
  }

}
