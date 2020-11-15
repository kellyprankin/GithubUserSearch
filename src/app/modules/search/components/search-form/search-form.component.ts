import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent implements OnInit {

  @Output() searchOccurred = new EventEmitter<string>();
  
  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['', Validators.required]
    });
  
  }

  onSubmit(): void {
    if(this.searchForm.valid) {
      this.searchOccurred.emit(this.searchForm.controls.searchTerm.value);
    }
  }
}
