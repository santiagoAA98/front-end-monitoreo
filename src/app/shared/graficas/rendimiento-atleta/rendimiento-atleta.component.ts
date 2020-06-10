import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

import { EventoService } from 'src/app/core/services/evento.service';

@Component({
  selector: 'app-rendimiento-atleta',
  templateUrl: './rendimiento-atleta.component.html',
  styleUrls: ['./rendimiento-atleta.component.css']
})
export class RendimientoAtletaComponent implements OnInit, OnChanges {

  @Input()
  cedulaAtleta: any;

  mejoresResultados: any[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Mejor marca por mes' }
  ];

  constructor(private eventoService: EventoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.obtenerResultadosDeportivos();
  }

  ngOnInit() {
    this.obtenerResultadosDeportivos();
  }

  cargarDatos() {
    this.barChartLabels = [];
    this.barChartData = [];
    this.barChartData.push({ data: [], label: 'Mejor marca por mes'});

    // tslint:disable-next-line: forin
    for (const key in this.mejoresResultados) {
      this.barChartLabels.push(`${this.mejoresResultados[key].anio} - ${this.mejoresResultados[key].mes}`);
      this.barChartData[0].data.push(this.mejoresResultados[key].marca);
    }
  }

  obtenerResultadosDeportivos() {
    const data = {
      cedulaAtleta: this.cedulaAtleta
    };

    this.eventoService.consultarMejoresResultadosAtleta(data).subscribe((resp: any) => {
        this.mejoresResultados = [...resp];
        this.cargarDatos();
    });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
