import { FormControl } from "@angular/forms/forms";
export declare class NgxCustomValidator {
    static cpf(control: FormControl) : any
    static cnpj(control: FormControl) : any
    private static calc_digitos_posicoes(digitos:string, posicoes:number, soma_digitos:number) : string
}