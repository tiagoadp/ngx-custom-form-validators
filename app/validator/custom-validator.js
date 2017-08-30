"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NgxCustomValidator = (function () {
    function NgxCustomValidator() {
    }
    NgxCustomValidator.cpf = function (control) {
        var valor = control.value.toString();
        valor = valor.replace(/[^0-9]/g, '');
        var digitos = valor.substr(0, 9);
        var novo_cpf = this.calc_digitos_posicoes(digitos);
        novo_cpf = this.calc_digitos_posicoes(novo_cpf, 11);
        if (novo_cpf === valor) {
            return null;
        }
        return { cpf: false };
    };
    NgxCustomValidator.cnpj = function (control) {
        var valor = control.value.toString();
        valor = valor.replace(/[^0-9]/g, '');
        var primeiros_numeros_cnpj = valor.substr(0, 12);
        var primeiro_calculo = this.calc_digitos_posicoes(primeiros_numeros_cnpj, 5);
        var segundo_calculo = this.calc_digitos_posicoes(primeiro_calculo, 6);
        var novo_cnpj = segundo_calculo;
        if (novo_cnpj === valor) {
            return null;
        }
        return { cpf: false };
    };
    NgxCustomValidator.calc_digitos_posicoes = function (digitos, posicoes, soma_digitos) {
        if (posicoes === void 0) { posicoes = 10; }
        if (soma_digitos === void 0) { soma_digitos = 0; }
        var i;
        for (i = 0; i < digitos.length; i++) {
            soma_digitos = soma_digitos + (Number(digitos[i]) * posicoes);
            posicoes--;
            if (posicoes < 2) {
                posicoes = 9;
            }
        }
        soma_digitos = soma_digitos % 11;
        if (soma_digitos < 2) {
            soma_digitos = 0;
        }
        else {
            soma_digitos = 11 - soma_digitos;
        }
        return digitos + soma_digitos;
    };
    return NgxCustomValidator;
}());
exports.NgxCustomValidator = NgxCustomValidator;
//# sourceMappingURL=custom-validator.js.map