import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { SearchResultsGridComponent } from './components/search-results-grid/search-results-grid.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';


@NgModule({
  declarations: [SearchPageComponent, SearchFormComponent, SearchResultsGridComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class SearchModule { }
