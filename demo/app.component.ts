import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { NgxCustomValidator } from '../app/custom-validator';

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <h1>Custom Validation Example</h1>
            <form [formGroup]="teste" novalidate>
                <div class="ui-g form-group">
                    <div class="ui-g-4 ui-input-container">
                        <span class="md-inputfield">
                            <input formControlName="cpf" pInputText>
                            <label>CPF*</label>
                            <small class="ui-message ui-messages-error" *ngIf="!cadastro.controls.cpf.valid && cadastro.controls.cpf.touched || !cadastro.controls.cpf.valid && submitted">
                                O campo 'CPF' é obrigatório
                            </small>
                        </span>
                    </div>

                    <div class="ui-g-4 ui-input-container">
                    <span class="md-inputfield">
                        <input formControlName="cnpj" pInputText>
                        <label>CNPJ*</label>
                        <small class="ui-message ui-messages-error" *ngIf="!cadastro.controls.cnpj.valid && cadastro.controls.cnpj.touched || !cadastro.controls.cnpj.valid && submitted">
                            O campo 'CNPJ' é obrigatório
                        </small>
                    </span>
                </div>
                </div>
            </form>
        </div>
    `
})
export class AppComponent implements OnInit {
    teste: FormGroup;

    constructor(public formBuilder: FormBuilder){}

    ngOnInit() {
        this.teste = this.formBuilder.group({
            cpf : [null, [NgxCustomValidator.cpf]],
            cnpj : [null, [NgxCustomValidator.cnpj]]
        });
    }
}