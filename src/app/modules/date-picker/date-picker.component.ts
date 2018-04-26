import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  @Input('group') group: FormGroup;
}
