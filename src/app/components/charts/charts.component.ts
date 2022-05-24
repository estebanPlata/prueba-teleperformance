import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IOptions } from 'src/app/share/interface/chart.interface';
import { DataService } from 'src/app/share/services/data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChartsComponent implements OnInit {
  @Input() user:any=''
  userLogin:string = this.user.login

  single:IOptions[]=[];

  constructor(private dataService:DataService) { }
  ngOnChanges():void{
    this.getFollwers(this.user.login);/* mandamos el nombre del usuario para aceder a las props del item followers_url */
  }
  ngOnInit()  {
  }

  getFollwers(value:string){
    this.dataService.getFollowers(value).subscribe((res=>{
      this.single=[];
      res.forEach(r=> this.single.push({/* pushamos value que es la longitud del array para graficar */
        name:'seguidores',
        value:this.single.length+1
    }))
      /* this.dataDad = res.length */
      /* console.log(this.user) */
    }))
  }



     /*  {
        "name": "Seguidores",
        "value":this.numOne.length
      },
      {
        "name": "repositorios",
        "value":67
      },
      {
        "name": "siguiendo",
        "value": 50
      },
      {
        "name": "suscriptores",
        "value": 72
      } */




  view: [number,number] = [300, 300];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}
