import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarMiles'
})
export class MostrarMilesPipe implements PipeTransform {

  transform(value:any, ...args: any[]): any {
    console.log(value)
    return (value<100) ? 'Menos de 100 visitas' : 'Mas de 100';
  }

}
