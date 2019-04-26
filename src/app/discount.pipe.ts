import {Pipe,PipeTransform} from '@angular/core'


@Pipe({
    name: 'discount'
})
export class DiscountPipe implements PipeTransform{

    transform(value,disc){
        if(disc)
        {
        value=value-(value*disc/100);
         }
        return value;
    }
}