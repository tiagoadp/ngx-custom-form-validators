import { FormControl } from "@angular/forms/forms";

export class NgxCustomValidator {

    static cpf(control: FormControl) : any{
        // Garante que o valor é uma string
        let valor : string = control.value.toString();
        
        // Remove caracteres inválidos do valor
        valor = valor.replace(/[^0-9]/g, '');
        
        // Captura os 9 primeiros dígitos do CPF
        // Ex.: 02546288423 = 025462884
        let digitos : string = valor.substr(0, 9);
        
        // Faz o cálculo dos 9 primeiros dígitos do CPF para obter o primeiro dígito
        let novo_cpf : string = this.calc_digitos_posicoes( digitos );
        
        // Faz o cálculo dos 10 dígitos do CPF para obter o último dígito
        novo_cpf = this.calc_digitos_posicoes( novo_cpf, 11 );
        
        // Verifica se o novo CPF gerado é idêntico ao CPF enviado
        if ( novo_cpf === valor ) {
            // CPF válido
            return null;
        }
        return { cpf: false }
    }

    static cnpj(control: FormControl) : any{
        // Garante que o valor é uma string
        let valor : string = control.value.toString();
        
        // Remove caracteres inválidos do valor
        valor = valor.replace(/[^0-9]/g, '');
        
        // Captura os primeiros 12 números do CNPJ
        let primeiros_numeros_cnpj : string = valor.substr( 0, 12 );
        
        // Faz o primeiro cálculo
        let primeiro_calculo : string = this.calc_digitos_posicoes( primeiros_numeros_cnpj, 5 );
    
        // O segundo cálculo é a mesma coisa do primeiro, porém, começa na posição 6
        let segundo_calculo : string = this.calc_digitos_posicoes( primeiro_calculo, 6 );
    
        // Concatena o segundo dígito ao CNPJ
        let novo_cnpj : string = segundo_calculo;
    
        // Verifica se o CNPJ gerado é idêntico ao enviado
        if ( novo_cnpj === valor ) {
            return null;
        }
        return { cpf: false }
    }

    /*
    calc_digitos_posicoes
    
    Multiplica dígitos vezes posições
    
    @param string digitos Os digitos desejados
    @param string posicoes A posição que vai iniciar a regressão
    @param string soma_digitos A soma das multiplicações entre posições e dígitos
    @return string Os dígitos enviados concatenados com o último dígito
   */
   private static calc_digitos_posicoes( digitos:string, posicoes:number = 10, soma_digitos:number = 0 ) : string{
       let i : number;
   
       // Faz a soma dos dígitos com a posição
       // Ex. para 10 posições:
       //   0    2    5    4    6    2    8    8   4
       // x10   x9   x8   x7   x6   x5   x4   x3  x2
       //   0 + 18 + 40 + 28 + 36 + 10 + 32 + 24 + 8 = 196
       for ( i = 0; i < digitos.length; i++  ) {
           // Preenche a soma com o dígito vezes a posição
           soma_digitos = soma_digitos + ( Number(digitos[i]) * posicoes );
   
           // Subtrai 1 da posição
           posicoes--;
   
           // Parte específica para CNPJ
           // Ex.: 5-4-3-2-9-8-7-6-5-4-3-2
           if ( posicoes < 2 ) {
               // Retorno a posição para 9
               posicoes = 9;
           }
       }
   
       // Captura o resto da divisão entre soma_digitos dividido por 11
       // Ex.: 196 % 11 = 9
       soma_digitos = soma_digitos % 11;
   
       // Verifica se soma_digitos é menor que 2
       if ( soma_digitos < 2 ) {
           // soma_digitos agora será zero
           soma_digitos = 0;
       } else {
           // Se for maior que 2, o resultado é 11 menos soma_digitos
           // Ex.: 11 - 9 = 2
           // Nosso dígito procurado é 2
           soma_digitos = 11 - soma_digitos;
       }
   
       // Concatena mais um dígito aos primeiro nove dígitos e retorna o mesmo
       // Ex.: 025462884 + 2 = 0254628842
       return digitos + soma_digitos;
       
   } // calc_digitos_posicoes
}