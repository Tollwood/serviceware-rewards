import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (value === 'rating_completed') {
            return 'Rated an article in Serviceware Knowledge';
        }
        if (value === 'ticket_completed') {
            return 'Solved a ticket in Serviceware Processes';
        }
        if (value === 'appointment_created') {
            return 'Created an appointment in Serviceware Resources';
        }
        return `### ${value} ###`;
    }
}
