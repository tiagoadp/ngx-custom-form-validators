import { NgModule, ModuleWithProviders  }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxCustomValidator } from './validator/custom-validator';

export * from './validator/custom-validator'

@NgModule({
    imports: [
        CommonModule
    ]
})
export class NgxCustomValidatorModule {}