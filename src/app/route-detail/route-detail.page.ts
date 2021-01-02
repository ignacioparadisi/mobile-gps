import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from 'src/classes/route';
import { RouteService } from 'src/services/route.service';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.page.html',
  styleUrls: ['./route-detail.page.scss'],
})
export class RouteDetailPage implements OnInit, AfterViewInit {
  @ViewChild('mapCanvas') canvas: ElementRef;
  route: Route;

  constructor(private activatedRoute: ActivatedRoute,
    private routeService: RouteService) { }

  ngOnInit() {
    const routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.fetchRoute(routeId);
  }

  ngAfterViewInit() {
    
  }

  private fetchRoute(id: number) {
    this.routeService.getRouteById(id).subscribe((route) => {
      this.route = route;
      var gameValuesX = route.points.map((point) => point.latitude);
      for(var i=0;i<gameValuesX.length;i++){
        // where canvas.width is the width of the canvas in pixels
        console.log( this.mapRange( gameValuesX[i], 0, this.canvas.nativeElement.width, 0, this.canvas.nativeElement.width ) );
      }
    })
  }

  private mapRange(value, gameLow, gameHigh, canvasLow, canvasHigh) {
    console.log('value ' + value)
    console.log('gameLow ' + gameLow)
    console.log('gameHigh ' + gameHigh)
    console.log('canvasLow ' + canvasLow)
    console.log('canvasHigh ' + canvasHigh)
    return ( canvasLow + 
        (canvasHigh - canvasLow) * (value - gameLow) / (gameHigh - gameLow) );
  }

  calcgameMinMax(a) {
    var min=100000000;
    var max=-100000000;
    for(var i=0;i<a.length;i++){
        var value=a[i];
        if(value<min){min=value;}
        if(value>max){max=value;}
    }
    return({min:min,max:max});
}

}
