import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  form!: FormGroup;
  inputValue: string = '';
  loader:boolean= false
  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: [''],
    });

    this.form
      .get('search')
      ?.valueChanges.pipe(debounceTime(1000))
      .subscribe((res) => {
        this.inputValue = res;
        console.log(res);

       
      });
  }
}
