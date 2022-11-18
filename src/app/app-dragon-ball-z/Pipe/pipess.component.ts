import {Pipe, PipeTransform} from '@angular/core'
@Pipe({
    name:"cut",
})

export class Pipeescut implements PipeTransform {
    transform(value: string) {
        console.log(value)
        return value.split(' ').slice(0, 2).join(' ') + '...';
      }
}

@Pipe({
    name:"nuevenueve",
})
export class PipeeNine implements PipeTransform {
    transform(value:string) {
        return `Messi ${value} XD`
    }
}