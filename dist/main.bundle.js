webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/acidentes/acidentes.component.css":
/***/ (function(module, exports) {

module.exports = ".acordion {\n    padding: 0 15px;\n}\n\n.head-card {\n    position: absolute;\n    bottom: 1rem;\n    margin: 0;\n}\n\n.card-header {\n    position: relative !important;\n    min-height: 3.5rem;\n}\n\n.card-header>h5 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: .75rem 1.25rem;\n}\n\n.input-label {\n    max-height: 36.5px !important;\n}\n\ninput {\n    max-height: 36.5px;\n}\n\n.text-center {\n    margin: auto 0;\n}\n\n.h1 {\n    font-size: 4em;\n    color: #5d5d5d;\n    margin-top: -3em;\n}\n\n.frow {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    padding: 5em 0 0;\n}\n\n.card {\n    border: none;\n}\n\n.card .col-md-6,\n.card .col-md-4 {\n    padding: 0;\n}\n\n.card-img-top img {\n    height: 15em;\n}\n\n.card .list-group-item {\n    padding: .5em;\n}\n\n#btnAlterar {\n    float: right;\n    margin: 20px;\n}\n\n#photoUser {\n    padding: 20px;\n}\n\n#tipo {\n    height: 41.5px;\n}\n\n@media only screen and (max-width: 767px) {\n    .input-group,\n    .col-12,\n    .col-lg-6 {\n        padding-left: 0!important;\n        padding-right: 0!important;\n    }\n    .form-row,\n    .btn-success {\n        margin-right: 0!important;\n        margin-left: 0!important;\n    }\n}"

/***/ }),

/***/ "./src/app/acidentes/acidentes.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu class=\"col-sm-2\"></app-menu>\r\n<div class=\"router\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 pb-3 pl-0\">\r\n\r\n            <div id=\"accordion\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" id=\"headingOne\">\r\n                        <h5 title=\"Novo acidente\" class=\"\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                            Novo Acidente\r\n                        </h5>\r\n                    </div>\r\n\r\n                    <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n                        <div class=\"card-body\">\r\n\r\n                            <form (ngSubmit)=\"onSubmit()\" #CriarAcidenteForm=\"ngForm\" class=\"was-validated\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <label class=\"input-group-text mb-0\" for=\"na_tipo\" title=\"Tipo de acidente\">\r\n                      <i class=\"material-icons\">assignment_late</i>\r\n                    </label>\r\n                                    </div>\r\n                                    <select class=\"custom-select\" id=\"tipo\" [(ngModel)]=\"model.tipo\" name=\"na_tipo\" required>\r\n                    <option *ngFor=\"let t of tipos\" [value]=\"t\">{{t}}</option>\r\n                  </select>\r\n                                    <div title=\"É necessário um tipo\" class=\"invalid-feedback\">É necessário um Tipo</div>\r\n                                </div>\r\n                                <div *ngIf=\"model.tipo == 'Outro'\" class=\"text-danger pt-1\">\r\n                                    Indicar na descrição o tipo de acidente.\r\n                                </div>\r\n\r\n                                <div class=\"form-row pt-3\">\r\n                                    <div class=\"input-group col-4 pb-3\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <label class=\"input-group-text mb-0\" for=\"na_espaco\" title=\"Edificio\">\r\n                        <i class=\"material-icons\">business</i>\r\n                      </label>\r\n                                        </div>\r\n\r\n                                        <select class=\"custom-select\" id=\"edifico\" (change)=\"edificioChanged()\" [(ngModel)]=\"model.edificio\" name=\"na_edificio\" required>\r\n                      <option *ngFor=\"let ed of edificios\" [value]=\"ed['bloco']\">C{{ed['bloco']}}</option>\r\n                    </select>\r\n                                    </div>\r\n                                    <div class=\"input-group col-4 pb-3\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <label class=\"input-group-text mb-0\" for=\"na_espaco\" title=\"Piso\">\r\n                        <i class=\"material-icons\">trending_up</i>\r\n                      </label>\r\n                                        </div>\r\n\r\n                                        <select class=\"custom-select\" id=\"piso\" (change)=\"pisoChanged()\" [(ngModel)]=\"model.piso\" name=\"na_piso\" required>\r\n                      <option *ngFor=\"let p of pisos\" [value]=\"p['piso']\">{{p['piso']}}</option>\r\n                    </select>\r\n                                    </div>\r\n\r\n                                    <div class=\"input-group col-4 pb-3\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <label class=\"input-group-text mb-0\" for=\"na_espaco\" title=\"sala\">\r\n                        <i class=\"material-icons\">room</i>\r\n                      </label>\r\n                                        </div>\r\n\r\n                                        <select class=\"custom-select\" id=\"sala\" [(ngModel)]=\"model.sala\" name=\"na_sala\" required>\r\n                      <option *ngFor=\"let p of salas\" [value]=\"p['sala']\">{{p['sala']}}</option>\r\n                    </select>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"input-group pb-3\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <label class=\"input-group-text mb-0\" for=\"na_data\" title=\"Data do acidente\">\r\n                      <i class=\"material-icons\">date_range</i>\r\n                    </label>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Data\" id=\"na_data\" (click)=\"dataChanged()\" [(ngModel)]=\"model.data\" name=\"na_data\" data-toggle=\"datepicker\" required>\r\n                                    <div title=\"É necessário uma data\" class=\"invalid-feedback\">É necessário uma Data</div>\r\n                                </div>\r\n\r\n                                <div class=\"input-group pb-3\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <label class=\"input-group-text mb-0\" for=\"na_descricao\" title=\"Descrição do acidente\">\r\n                      <i class=\"material-icons\">description</i>\r\n                    </label>\r\n                                    </div>\r\n                                    <textarea class=\"form-control\" placeholder=\"Descrição\" rows=\"5\" id=\"na_descricao\" [(ngModel)]=\"model.descricao\" (keyup)=\"verify([model.tipo, model.data, model.descricao])\" name=\"na_descricao\" required></textarea>\r\n                                    <div title=\"É necessário uma descrição\" class=\"invalid-feedback\">É necessário uma Descrição</div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <button type=\"button\" id=\"limpar\" class=\"btn btn-default mr-3\" (click)=\"newModel(); CriarAcidenteForm.reset()\">Limpar</button>\r\n                                    <button title=\"Criar acidente\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"!active || loader\"> Criar Acidente </button>\r\n                                </div>\r\n\r\n                                <div title=\"Ao criar um acidente aceita a política de utilização responsável do serviço\" class=\"text-info pt-3\">\r\n                                    Ao criar um acidente aceita a política de utilização responsável do serviço.\r\n                                </div>\r\n\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-lg-6 pb-3 pr-0\">\r\n\r\n            <div id=\"accordion\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" id=\"headingTwo\">\r\n                        <h5 title=\"Consultar acidente\" class=\"\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n                            Consultar Acidente\r\n                        </h5>\r\n                    </div>\r\n\r\n                    <div id=\"collapseTwo\" class=\"collapse show\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n                        <div class=\"card-body\">\r\n                            <form (ngSubmit)=\"onSubmit1()\" id=\"find_accident_form\" class=\"was-validated\">\r\n                                <div class=\"input-group pb-3\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <label class=\"input-group-text mb-0\" for=\"ca_tipo\" title=\"Tipo de acidente\">\r\n                      <i class=\"material-icons\">assignment_late</i>\r\n                    </label>\r\n                                    </div>\r\n                                    <select class=\"custom-select\" id=\"tipo\" [(ngModel)]=\"model1.tipo\" name=\"na_tipo\" required>\r\n                    <option [value]=\"null\">Todos os tipos</option>\r\n                    <option *ngFor=\"let t of tipos\" [value]=\"t\">{{t}}</option>\r\n                  </select>\r\n                                </div>\r\n                                <div class=\"form-row\">\r\n                                    <div class=\"input-group col-4 pb-3\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <label class=\"input-group-text mb-0\" for=\"na_espaco\" title=\"Edifício\">\r\n                        <i class=\"material-icons\">business</i>\r\n                      </label>\r\n                                        </div>\r\n\r\n                                        <select class=\"custom-select\" id=\"edifico\" (change)=\"edificioChanged()\" [(ngModel)]=\"model1.edificio\" name=\"na_edificio\" required>\r\n                      <option [value]=\"null\">Todos</option>\r\n                      <option *ngFor=\"let ed of edificios\" [value]=\"ed['bloco']\">C{{ed['bloco']}}</option>\r\n                    </select>\r\n                                    </div>\r\n                                    <div class=\"input-group col-4 pb-3\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <label class=\"input-group-text mb-0\" for=\"na_espaco\" title=\"Piso\">\r\n                        <i class=\"material-icons\">trending_up</i>\r\n                      </label>\r\n                                        </div>\r\n\r\n                                        <select class=\"custom-select\" id=\"piso\" (change)=\"pisoChanged()\" [(ngModel)]=\"model1.piso\" name=\"na_piso\" required>\r\n                      <option [value]=\"null\">Todos</option>\r\n                      <option *ngFor=\"let p of pisos\" [value]=\"p['piso']\">{{p['piso']}}</option>\r\n                    </select>\r\n                                    </div>\r\n\r\n                                    <div class=\"input-group col-4 pb-3\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <label class=\"input-group-text mb-0\" for=\"na_espaco\" title=\"Sala\">\r\n                        <i class=\"material-icons\">room</i>\r\n                      </label>\r\n                                        </div>\r\n\r\n                                        <select class=\"custom-select\" id=\"sala\" [(ngModel)]=\"model1.sala\" name=\"na_sala\" required>\r\n                      <option [value]=\"null\">Todas</option>\r\n                      <option *ngFor=\"let p of salas\" [value]=\"p['sala']\">{{p['sala']}}</option>\r\n                    </select>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-12\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"input-group col-sm-6 pb-3 pl-0\">\r\n                                                <div class=\"input-label input-group-prepend\">\r\n                                                    <label class=\"input-group-text mb-0\" for=\"ca_data_i\" title=\"Data de início do acidente\">\r\n                            <i class=\"material-icons\">date_range</i>\r\n                          </label>\r\n                                                </div>\r\n                                                <input type=\"text\" class=\"form-control\" placeholder=\"Data Início\" id=\"na_data_ini\" (click)=\"dataIniChanged()\" [(ngModel)]=\"model1.data_ini\" name=\"na_data_ini\" data-toggle=\"datepicker\" required>\r\n                                                <div title=\"É necessário uma data de Início\" class=\"invalid-feedback\">É necessário uma Data de Início</div>\r\n                                            </div>\r\n                                            <div class=\"input-group col-sm-6 pb-3 pr-0\">\r\n                                                <div class=\"input-label input-group-prepend\">\r\n                                                    <label class=\"input-group-text mb-0\" for=\"ca_data_f\" title=\"Data de fim do acidente\">\r\n                            <i class=\"material-icons\">date_range</i>\r\n                          </label>\r\n                                                </div>\r\n                                                <input type=\"text\" class=\"form-control\" placeholder=\"Data Fim\" id=\"na_data_fim\" (click)=\"dataFimChanged()\" [(ngModel)]=\"model1.data_fim\" name=\"na_data_fim\" data-toggle=\"datepicker\" required>\r\n                                                <div title=\"É necessário uma data de Fim\" class=\"invalid-feedback\">É necessário uma Data de Fim</div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <button type=\"submit\" class=\"btn btn-success ml-1\" [disabled]=\"!active1\">Consultar</button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Data Fim\" id=\"na_data_fim\" (click)=\"dataFimChanged()\" [(ngModel)]=\"model1.data_fim\" name=\"na_data_fim\" data-toggle=\"datepicker\" required>\r\n                        <div title=\"É necessário uma data de Fim\" class=\"invalid-feedback\">É necessário uma Data de Fim</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"semAcidentes\" class=\"card\">\r\n    <div class=\"card-header\">\r\n        <h5 title=\"Novo acidente\" class=\"\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n            Sem Acidentes\r\n        </h5>\r\n    </div>\r\n\r\n    <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n        <div class=\"card-body\">\r\n            <p>Não existem acidentes para esses critérios.</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"acordion\" *ngIf=\"showAcidentes\">\r\n\r\n    <div class=\"card\" style=\"margin-bottom: 0.3rem\" *ngFor=\"let acid of acidentes; let i = index\">\r\n        <div class=\"card-header\" [attr.id]=\"'heading' + acid.id\">\r\n            <h5 class=\"head-card\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse' + acid.id\" aria-expanded=\"true\" [attr.aria-controls]=\"'collapse' + acid.id\">\r\n                Acidente {{acid.date_open}}\r\n            </h5>\r\n            <!-- <button type=\"button\" class=\"btn btn-primary float-right\">\r\n          <h5 class=\"float-left pr-3\" >Estado</h5>\r\n          <span class=\"badge badge-success\">\r\n            <i class=\"material-icons\" title=\"Acidente fechado\">\r\n              check\r\n            </i>\r\n          </span>\r\n          <span class=\"badge badge-warning\" (click)=\"closeAccident()\">\r\n            <i class=\"material-icons\" title=\"Fechar Acidente\" >\r\n              close\r\n            </i>\r\n          </span>\r\n        </button> -->\r\n        </div>\r\n\r\n        <div [attr.id]=\"'collapse' + acid.id\" class=\"collapse\" [ngClass]=\"{'show': i == 0}\" [attr.aria-labelledby]=\"'heading' + acid.id\" data-parent=\"#accordion\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"input-group col-4 pb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <label class=\"input-group-text mb-0\" for=\"na_tipo\">\r\n                  <i class=\"material-icons\">assignment_late</i>\r\n                </label>\r\n                        </div>\r\n                        <input type=\"text \" readonly class=\"form-control\" id=\"uid \" value=\"{{acid.name}}\">\r\n                    </div>\r\n\r\n                    <div class=\"input-group col-4 pb-3\">\r\n                        <div title=\"sala\" class=\"input-group-prepend\">\r\n                            <label class=\"input-group-text mb-0\" for=\"na_tipo\">\r\n                  <i class=\"material-icons\">room</i>\r\n                </label>\r\n                        </div>\r\n                        <input type=\"text \" readonly class=\"form-control \" id=\"email \" value=\"C{{acid.espaco}}\">\r\n                    </div>\r\n\r\n                    <div class=\"input-group col-4 pb-3\">\r\n                        <div title=\"data\" class=\"input-group-prepend\">\r\n                            <label class=\"input-group-text mb-0\" for=\"na_tipo\">\r\n                  <i class=\"material-icons\">date_range</i>\r\n                </label>\r\n                        </div>\r\n                        <input type=\"text \" readonly class=\"form-control \" id=\"email \" value=\"{{acid.date_open}}\">\r\n                    </div>\r\n\r\n                    <div class=\"input-group mx-auto col-12 pb-3\">\r\n                        <div title=\"descrição\" class=\"input-group-prepend\">\r\n                            <label class=\"input-group-text mb-0\" for=\"na_descricao\">\r\n                  <i class=\"material-icons\">description</i>\r\n                </label>\r\n                        </div>\r\n                        <div type=\"text\" readonly class=\"form-control col-sm-12\" id=\"uid \">{{acid.description}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/acidentes/acidentes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcidentesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_apiconnector_service__ = __webpack_require__("./src/app/service/apiconnector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_response_status_validator_service__ = __webpack_require__("./src/app/service/response-status-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alerts_alert_service__ = __webpack_require__("./src/app/alerts/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fengyuanchen_datepicker__ = __webpack_require__("./node_modules/@fengyuanchen/datepicker/dist/datepicker.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { CookieService } from 'angular2-cookie/core';

var Acidente = /** @class */ (function () {
    function Acidente() {
    }
    return Acidente;
}());
var ConsularAcidente = /** @class */ (function () {
    function ConsularAcidente() {
    }
    return ConsularAcidente;
}());
var AcidentesComponent = /** @class */ (function () {
    function AcidentesComponent(apiconnector, respVal, _cookieService, loaderService, alertService) {
        this.apiconnector = apiconnector;
        this.respVal = respVal;
        this._cookieService = _cookieService;
        this.loaderService = loaderService;
        this.alertService = alertService;
        this.model = new Acidente();
        this.model1 = new ConsularAcidente();
        this.tipos = ['Perda', 'Furto', 'Incêndio', 'Inundação', 'Outro'];
        this.a = 'T';
        this.edificios = [];
        this.pisos = [];
        this.salas = [];
        this.loader = false;
        this.active = false;
        this.showAcidentes = false;
        this.active1 = false;
        this.semAcidentes = false;
        this.acidentes = [];
        this.acidentes1 = [{
                id: '1',
                tipo: 'Incendio',
                edificio: '6',
                sala: '3',
                piso: '38',
                data: '09-05-2018',
                descricao: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon offici' +
                    'aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqu' +
                    'put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes ' +
                    'anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table'
            }, {
                id: '2',
                tipo: 'Incendio',
                edificio: '3',
                sala: '2',
                piso: '14',
                data: '10-04-2018',
                descricao: 'Cenas que aconteceram'
            }];
    }
    AcidentesComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__().on('hide.datepicker', function (e) {
                console.log('eventdate', e.date);
                this.model.data = e.date;
            });
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#na_data').datepicker({
                endDate: new Date(),
                format: 'yyyy-mm-dd',
            });
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#na_data_ini').datepicker({
                endDate: new Date(),
                format: 'yyyy-mm-dd',
            });
            __WEBPACK_IMPORTED_MODULE_1_jquery__('#na_data_fim').datepicker({
                endDate: new Date(),
                format: 'yyyy-mm-dd',
            });
        });
        this.model.tipo = '';
        this.model.descricao = '';
        this.model.data = '';
        this.model.tipo = 'Perda';
        this.model1.tipo = 'null';
        this.model1.edificio = 'null';
        this.model1.piso = 'null';
        this.model1.sala = 'null';
        this.model1.data_ini = '';
        this.model1.data_fim = '';
        var url = this.apiconnector.getEdificios;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_2__service_apiconnector_service__["b" /* options */]);
            _this.edificios = res['data']['blocks']['data'];
            _this.model.edificio = res['data']['blocks']['data'][0]['bloco'];
            _this.edificioChanged();
        });
    };
    AcidentesComponent.prototype.edificioChanged = function () {
        var _this = this;
        var url = this.apiconnector.getPisosEdificio;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('block', this.model.edificio);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_2__service_apiconnector_service__["b" /* options */]);
            _this.pisos = res['data']['floors']['data'];
            _this.model.piso = res['data']['floors']['data'][0]['piso'];
            _this.pisoChanged();
        });
    };
    AcidentesComponent.prototype.pisoChanged = function () {
        var _this = this;
        var url = this.apiconnector.getSalasPisos;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('block', this.model.edificio);
        data.append('floor', this.model.piso);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_2__service_apiconnector_service__["b" /* options */]);
            _this.salas = res['data']['rooms']['data'];
            console.log('cenas', res['data']['rooms']['data']);
            _this.model.sala = res['data']['rooms']['data'][0]['sala'];
        });
    };
    AcidentesComponent.prototype.dataChanged = function () {
        this.model.data = __WEBPACK_IMPORTED_MODULE_1_jquery__('#na_data').datepicker('getDate', true);
    };
    AcidentesComponent.prototype.dataIniChanged = function () {
        this.model1.data_ini = __WEBPACK_IMPORTED_MODULE_1_jquery__('#na_data_ini').datepicker('getDate', true);
        this.active1 = this.model1.data_ini.length > 5 && this.model1.data_fim.length > 5;
    };
    AcidentesComponent.prototype.dataFimChanged = function () {
        this.model1.data_fim = __WEBPACK_IMPORTED_MODULE_1_jquery__('#na_data_fim').datepicker('getDate', true);
        this.active1 = this.model1.data_ini.length > 5 && this.model1.data_fim.length > 5;
    };
    AcidentesComponent.prototype.newModel = function () {
        this.model.tipo = '';
        this.model.data = '';
        this.model.descricao = '';
        this.verify([this.model.data, this.model.tipo, this.model.descricao]);
        console.log('Modelo', this.model);
    };
    AcidentesComponent.prototype.closeAccident = function () {
        console.log('cliclou');
    };
    AcidentesComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Modelo', this.model);
        this.loaderService.show();
        this.model.data = __WEBPACK_IMPORTED_MODULE_1_jquery__('#na_data').datepicker('getDate', true);
        var url = this.apiconnector.newAcidente;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('type', this.model.tipo);
        data.append('block', this.model.edificio);
        data.append('floor', this.model.piso);
        data.append('room', this.model.sala);
        data.append('date', this.model.data);
        data.append('description', this.model.descricao);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            _this.alertService.show('Acidente criado com sucesso!', 'success');
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_2__service_apiconnector_service__["b" /* options */]);
            _this.loaderService.hide();
        });
    };
    AcidentesComponent.prototype.onSubmit1 = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#collapseOne').removeClass('show');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#collapseTwo').removeClass('show');
        this.showAcidentes = true;
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#collapse1').addClass('show');
        console.log('Modelo1', this.model1);
        this.loaderService.show();
        this.model1.data_ini = __WEBPACK_IMPORTED_MODULE_1_jquery__('#na_data_ini').datepicker('getDate', true);
        this.model1.data_fim = __WEBPACK_IMPORTED_MODULE_1_jquery__('#na_data_fim').datepicker('getDate', true);
        var url;
        if (this._cookieService.get('tipo') === '10' || this._cookieService.get('tipo') === '3') {
            url = this.apiconnector.getAcidenteAll;
        }
        else {
            url = this.apiconnector.getAcidenteOthers;
        }
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('type', this.model1.tipo);
        data.append('block', this.model1.edificio);
        data.append('floor', this.model1.piso);
        data.append('room', this.model1.sala);
        data.append('data_ini', this.model1.data_ini);
        data.append('data_fim', this.model1.data_fim);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_2__service_apiconnector_service__["b" /* options */]);
            _this.semAcidentes = (res['data']['accidents']['data'] === 0);
            _this.acidentes = res['data']['accidents']['data'];
            _this.loaderService.hide();
            // this.model1.tipo = 'null';
            // this.model1.edificio = 'null';
            // this.model1.piso = 'null';
            // this.model1.sala = 'null';
            // this.model1.data_ini = '';
            // this.model1.data_fim = '';
            _this.active1 = false;
        });
    };
    AcidentesComponent.prototype.verify = function (field) {
        console.log('model', this.model);
        var act = false;
        for (var f in field) {
            if (field[f].length === 0 && field[f] === '') {
                act = true;
            }
        }
        act ? this.active = !1 : this.active = !0;
    };
    AcidentesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-acidentes',
            template: __webpack_require__("./src/app/acidentes/acidentes.component.html"),
            styles: [__webpack_require__("./src/app/acidentes/acidentes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_apiconnector_service__["a" /* APIConnectorService */], __WEBPACK_IMPORTED_MODULE_3__service_response_status_validator_service__["a" /* ResponseStatusValidatorService */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_cookie__["b" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_5__alerts_alert_service__["a" /* AlertService */]])
    ], AcidentesComponent);
    return AcidentesComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ".text-center {\r\n    margin: auto 0;\r\n}\r\n\r\n.h1 {\r\n    font-size: 4em;\r\n    color: #5d5d5d;\r\n    margin-top: -3em;\r\n}\r\n\r\n.frow {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    padding: 5em 0 0;\r\n}\r\n\r\n.card {\r\n    border: none;\r\n}\r\n\r\n.card .col-md-6,\r\n.card .col-md-4 {\r\n    padding: 0;\r\n}\r\n\r\n.card-img-top img {\r\n    height: 15em;\r\n}\r\n\r\n.card .list-group-item {\r\n    padding: .5em;\r\n}\r\n\r\n.btn-warning {\r\n    color: #ffffff;\r\n}\r\n\r\n#photoUser {\r\n    padding: 0 0 1.5em;\r\n    width: 14em;\r\n}\r\n\r\n#user_row {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.col-form-label {\r\n    padding-left: 0;\r\n}\r\n\r\n.col-md-3 {\r\n    text-align: center;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .btn-success {\r\n        margin-top: 1em;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu class=\"col-sm-2\"></app-menu>\n<div class=\"router\">\n\n    <div class=\"card\">\n        <h5 class=\"card-header\">Alterar Tipo de Utilizador</h5>\n\n        <app-loader></app-loader>\n\n        <div class=\"card-body\">\n\n            <form (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-row\" id='user_row'>\n                    <div class=\"input-group col-sm-5\">\n                        <div class=\"input-group-prepend\">\n                            <label class=\"input-group-text mb-0\" for=\"na_email\" title=\"Email da pessoa para pesquisar\">\n                <i class=\"material-icons\">person</i>\n              </label>\n                        </div>\n                        <input type=\"email\" class=\"form-control\" (keyup)=\"emailChanged()\" placeholder=\"Email do utilizador\" id=\"email\" [(ngModel)]=\"email\" name=\"email\" required>\n                        <div title=\"É necessário um email válido\" class=\"invalid-feedback\">É necessário um Email válido</div>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"loader\" title=\"Pesquisar email\">Pesquisar</button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div *ngIf=\"userNotFound\" class=\"card\">\n      <div class=\"card-header\">\n        <h5 title=\"Novo acidente\" class=\"\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n          Utilizador não encontrado\n        </h5>\n      </div>\n\n      <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n        <div class=\"card-body\">\n          <p>Não existe um utilizador com esse email.</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card mt-3\" *ngIf='user'>\n        <div class=\"row mainInfo py-3\">\n            <div class=\"col-md-9 \">\n                <div class=\"card-block \">\n                    <h3>{{user_name}}</h3>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <label for=\"uid \" class=\"col col-form-label\" title=\"ID interno do utilizador\">ID</label>\n                            <input type=\"text \" readonly class=\"form-control col-sm-11 \" id=\"uid \" value=\"{{user_id}}\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label for=\"email \" class=\"col col-form-label\" title=\"Utilizador activo na aplicação\">Active Now</label>\n                            <input type=\"text \" readonly class=\"form-control col-sm-11 \" id=\"email \" value=\"{{user_active === '1' ? 'True' : 'False'}}\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label for=\"uid \" class=\"col col-form-label\" title=\"ID da google / faculdade do utilizador\">UID</label>\n                            <input type=\"text \" readonly class=\"form-control col-sm-11 \" id=\"uid \" value=\"{{user_uid}}\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label for=\"uid \" class=\"col col-form-label\" title=\"Último login na aplicação\">Last Login</label>\n                            <input type=\"text \" readonly class=\"form-control col-sm-11\" id=\"uid \" value=\"{{user_lastLogin}}\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label for=\"user_type \" class=\"col-sm-3 col-form-label\" title=\"Tipo de utilizador\">Tipo</label>\n                            <div class=\"input-group col-sm-11 p-0\">\n                                <select id=\"user_type \" class=\"custom-select\" [(ngModel)]=\"user_type\">\n                  <option *ngFor=\"let user of users \" [ngValue]=\"user.type \">{{user.type}}</option>\n                </select>\n                                <div class=\"input-group-append\">\n                                    <button title=\"Alterar\" class=\"btn btn-warning\" (click)=\"submitChange()\">Alterar</button>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"col-md-3 py-3\">\n                <div class=\"card-img-middle\">\n                    <img src={{user_avatar}} class=\"rounded-circle\" id='photoUser'>\n                </div>\n                <a href=\"mailto:{{user_email}}\">\n                    <div class=\"input-group justify-content-center\">\n                        <div class=\"input-group-prepend\">\n                            <div class=\"input-group-text btn btn-cafcul\" id=\"btnGroupAddon\">@</div>\n                        </div>\n                        <input type=\"button\" class=\"form-control btn btn-cafcul\" id=\"btnCont\" value=\"Contactar\">\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__ = __webpack_require__("./src/app/service/apiconnector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__("./src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alerts_alert_service__ = __webpack_require__("./src/app/alerts/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_response_status_validator_service__ = __webpack_require__("./src/app/service/response-status-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { CookieService } from 'angular2-cookie/core';

var AdminComponent = /** @class */ (function () {
    function AdminComponent(authService, _cookieService, apiconnector, loaderService, respVal, alertService) {
        this.authService = authService;
        this._cookieService = _cookieService;
        this.apiconnector = apiconnector;
        this.loaderService = loaderService;
        this.respVal = respVal;
        this.alertService = alertService;
        this.loader = true;
        this.userNotFound = false;
        this.types = {
            'student': 0,
            'teacher': 1,
            'staff member': 2,
            'security': 3,
            'admin': 10
        };
        this.users = [{
                'id': 0,
                'type': 'student'
            }, {
                'id': 1,
                'type': 'teacher'
            },
            {
                'id': 2,
                'type': 'staff member'
            },
            {
                'id': 3,
                'type': 'security'
            }, {
                'id': 10,
                'type': 'admin'
            }];
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loaderService.show();
        var url = this.apiconnector.retriveprofilePOST;
        var data = new FormData();
        data.append('userTokenId', this._cookieService.get('token'));
        data.append('userEmail', this.email);
        this.apiconnector.postData(url, data)
            .subscribe(function (res) {
            _this.respVal.validate(res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["b" /* options */]);
            console.log('user', res);
            _this.user = res['data']['user'];
            if (_this.user.found === 1) {
                _this.user_name = _this.user.name;
                _this.user_email = _this.user.email;
                _this.user_uid = _this.user.uid;
                _this.user_id = _this.user.id;
                _this.user_type = _this.user.user_type;
                _this.user_avatar = _this.user.avatar;
                _this.user_active = _this.user.active;
                _this.user_lastLogin = _this.user.last_login;
            }
            else {
                _this.userNotFound = true;
            }
            _this.loaderService.hide();
        });
    };
    AdminComponent.prototype.emailChanged = function () {
        if (this.email.length > 0 && this.email.search('@') > 0) {
            this.loader = false;
        }
        else {
            this.loader = true;
        }
    };
    AdminComponent.prototype.submitChange = function () {
        var _this = this;
        var url = this.apiconnector.changeType;
        var data = new FormData();
        data.append('userTokenId', this._cookieService.get('token'));
        data.append('uid', this.user_uid);
        data.append('type', this.types[this.user_type]);
        this.apiconnector.postData(url, data)
            .subscribe(function (res) {
            _this.respVal.validate(res);
            _this.alertService.show('Tipo de utilizador trocado', 'success');
            console.log('cenas', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["b" /* options */]);
        });
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__["b" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["a" /* APIConnectorService */], __WEBPACK_IMPORTED_MODULE_2__loader_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__service_response_status_validator_service__["a" /* ResponseStatusValidatorService */], __WEBPACK_IMPORTED_MODULE_4__alerts_alert_service__["a" /* AlertService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/alerts/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = /** @class */ (function () {
    function AlertService() {
        this.loaderSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.alertState = this.loaderSubject.asObservable();
    }
    AlertService.prototype.show = function (msg, type) {
        this.loaderSubject.next({ show: true, msg: msg, type: type });
    };
    AlertService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/alerts/alerts.component.css":
/***/ (function(module, exports) {

module.exports = ".cont{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.container.alert{\n  position: fixed;\n  top: 2rem;\n  opacity: 0.9;\n}\n.animated{\n  -webkit-animation-duration:0.75s;\n          animation-duration:0.75s;\n  -webkit-animation-fill-mode:both;\n          animation-fill-mode:both\n}\n.fadeInDown{\n  -webkit-animation-name:fadeInDown;\n          animation-name:fadeInDown\n}\n@-webkit-keyframes fadeInDown{\n  0%{\n      opacity:0;\n      -webkit-transform:translate3d(0,-100%,0);\n              transform:translate3d(0,-100%,0)\n  }\n  to{\n      opacity:1;\n      -webkit-transform:none;\n              transform:none\n  }\n}\n@keyframes fadeInDown{\n  0%{\n      opacity:0;\n      -webkit-transform:translate3d(0,-100%,0);\n              transform:translate3d(0,-100%,0)\n  }\n  to{\n      opacity:1;\n      -webkit-transform:none;\n              transform:none\n  }\n}\n"

/***/ }),

/***/ "./src/app/alerts/alerts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\n  <div *ngIf=\"show\" class=\"container alert alert-dismissible fadeInDown\"\n   [ngClass]=\"{'animated': show, 'alert-danger': type==='danger', 'alert-success': type ==='success'}\" role=\"alert\">\n    <strong>Alerta!</strong> {{msg}}\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"showFalse();\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/alerts/alerts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_service__ = __webpack_require__("./src/app/alerts/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertsComponent = /** @class */ (function () {
    function AlertsComponent(alertService) {
        this.alertService = alertService;
        this.show = false;
    }
    AlertsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.alertState
            .subscribe(function (state) {
            _this.show = state.show;
            _this.msg = state.msg;
            _this.type = state.type;
        });
    };
    AlertsComponent.prototype.ngOnDestroy = function () {
        this.show = false;
        this.subscription.unsubscribe();
    };
    AlertsComponent.prototype.showFalse = function () {
        this.show = false;
    };
    AlertsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__("./src/app/alerts/alerts.component.html"),
            styles: [__webpack_require__("./src/app/alerts/alerts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__alert_service__["a" /* AlertService */]])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/alt-presencas/alt-presencas.component.css":
/***/ (function(module, exports) {

module.exports = "div.datatable {\n  padding: 5.5em 1em 0!important;\n}\n\n.progress-bar {\n  width: 100%;\n  height: 0.4rem;\n}\n\n.form-row {\n  width: 100%;\n}\n\n#changeAttendance .input-group {\n  height: 3.5rem;\n}\n\n#changeAttendance select {\n  height: 100%;\n}\n\n.card {\n  margin-bottom: 10px;\n}\n\n.card-body{margin:0;}\n\n.input-group>.custom-select:not(:last-child), .input-group>.form-control:not(:last-child) {\nborder-top-right-radius: revert;\nborder-bottom-right-radius: revert;\n}\n\n@media only screen and (max-width: 767px) {\n  div.datatable {\n      padding: 1.5em 0 0!important;\n  }\n}\n"

/***/ }),

/***/ "./src/app/alt-presencas/alt-presencas.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu class=\"col-sm-2\"></app-menu>\n<div class=\"router\">\n  <div class=\"card\">\n    <h5 class=\"card-header\">Alterar Presenças dos Alunos</h5>\n\n    <app-loader></app-loader>\n\n    <div class=\"card-body\">\n      <form class=\"was-validated\" id=\"changeAttendance\" (ngSubmit)=\"onSubmit()\" #searchForm=\"ngForm\">\n        <div class=\"form-row\">\n          <div class=\"input-group col-lg-4 pb-3\">\n            <div class=\"input-group-prepend\">\n              <label class=\"input-group-text mb-0\" for=\"na_aula\">\n                <i class=\"material-icons\" title=\"Aula\">class</i>\n              </label>\n            </div>\n            <select class=\"custom-select form-control\" id=\"na_aula\" (change)=\"aulaChange(); verify([model.aula, model.data, model.aluno])\"\n              [(ngModel)]=\"model.aula\" name=\"na_aula\" required>\n              <option *ngFor=\"let a of todasAulas\" [value]=\"a['id']\">{{a['name']}}</option>\n            </select>\n            <div title=\"É necessário uma aula\" class=\"invalid-feedback vi\">É necessário uma Aula</div>\n          </div>\n\n          <div class=\"input-group col-lg-4 pb-3\">\n            <div class=\"input-group-prepend\">\n              <label class=\"input-group-text mb-0\" for=\"na_data\">\n                <i class=\"material-icons\" title=\"Data da aula\">date_range</i>\n              </label>\n            </div>\n            <select class=\"custom-select form-control\" id=\"na_data\" [(ngModel)]=\"model.data\" (change)=\"verify([model.aula, model.data, model.aluno])\"\n              name=\"na_data\" required>\n              <option value=\"null\">Todas as Aulas</option>\n              <option *ngFor=\"let a of todasDatas\" [value]=\"a['id']\">{{a['d_init']}}</option>\n            </select>\n          </div>\n\n          <div class=\"input-group col-lg-3 pb-3\">\n            <div class=\"input-group-prepend\">\n              <label class=\"input-group-text mb-0\" for=\"na_aluno\">\n                <i class=\"material-icons\" title=\"Nome do aluno\">person</i>\n              </label>\n            </div>\n            <input class=\"form-control\" id=\"na_aluno\" [(ngModel)]=\"model.aluno\" (keyup)=\"verify([model.aula, model.data, model.aluno])\"\n              placeholder=\"# Aluno\" name=\"na_aluno\" required>\n          </div>\n\n          <div class=\"input-group col-lg-1 pb-3\">\n            <button title=\"Procurar\" type=\"submit\" class=\"btn btn-success\" (click)=\"verify([model.aula, model.data, model.aluno])\" [disabled]=\"!active || loader\">Procurar</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped table-bordered dataTable no-footer\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Aluno</th>\n            <th>Data</th>\n            <th>Aula Id</th>\n            <th>Presente</th>\n            <th>Presente</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pos of presencas\" role=\"row\" class=\"odd\">\n            <td>{{ pos.student_id }}</td>\n            <td>{{ pos.name }}</td>\n            <td>{{ pos.date_ini }}</td>\n            <td>{{ pos.aula_id }}</td>\n            <td>{{ pos.attended === '1' ? 'Presente' : 'Ausente' }}</td>\n            <td>\n              <button type=\"button\" class=\"btn\" [ngClass]=\"{'active btn-success' : pos.attended === '1', 'btn-warning': pos.attended === '0'}\"\n                data-toggle=\"modal\" data-target=\"#exampleModal\" (click)=\"clickModal(pos.student_id, pos.date_ini, pos.aula_id, pos.attended)\"\n                title=\"{{pos.attended === '1' ? 'Presente' : 'Ausente'}}\">\n                <i class=\"material-icons\">done</i>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n    </div>\n  </div>\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 title=\"Pretende alterar a presença do aluno?\" class=\"modal-title\" id=\"exampleModalLabel\">Pretende alterar a presença do aluno?</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <!-- -->\n        <div class=\"modal-body\">\n          <div *ngIf=\"!ErroAlterar && ErroAlterar != null\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n            <strong>Upsy Daisy!</strong> Ocorreu um erro a alterar a presença, por favor tente mais tarde.\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div *ngIf=\"ErroAlterar && ErroAlterar != null\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n            <strong>Yay!</strong> Presença alterada com sucesso.\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"form-row\">\n            <div title=\"Aluno\" class=\"form-group col-md-6\">\n              <label for=\"student \" class=\"col-sm-3 col-form-label \">Aluno</label>\n              <input type=\"text \" readonly class=\"form-control col-sm-11 \" id=\"student \" value=\"{{student_id}} \">\n            </div>\n            <div title=\"Aula\" class=\"form-group col-md-6\">\n              <label for=\"date_class \" class=\"col-sm-3 col-form-label \">Aula</label>\n              <input type=\"text \" readonly class=\"form-control col-sm-11 \" id=\"date_class \" value=\"{{date_id}} \">\n            </div>\n          </div>\n        </div>\n        <div title=\"Fechar\" class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"alterarPresenca()\" [disabled]=\"!active || alterarLoader\">Alterar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/alt-presencas/alt-presencas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltPresencasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__ = __webpack_require__("./src/app/service/apiconnector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_response_status_validator_service__ = __webpack_require__("./src/app/service/response-status-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { CookieService } from 'angular2-cookie/core';

var AltPresenca = /** @class */ (function () {
    function AltPresenca() {
    }
    return AltPresenca;
}());
var Presencas = /** @class */ (function () {
    function Presencas() {
    }
    return Presencas;
}());
var AltPresencasComponent = /** @class */ (function () {
    function AltPresencasComponent(_cookieService, apiconnector, loaderService, respVal) {
        this._cookieService = _cookieService;
        this.apiconnector = apiconnector;
        this.loaderService = loaderService;
        this.respVal = respVal;
        this.loader = false;
        this.active = false;
        this.model = new AltPresenca();
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.dtOptions = {};
        this.presencas = new Presencas();
        this.alterarLoader = false;
    }
    AltPresencasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.apiconnector.getAulas;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        this.dtOptions = {
            pagingType: 'full_numbers',
            dom: 'Bfrtip',
            buttons: [
                { extend: 'copy', exportOptions: { columns: [0, 1, 2, 4] } },
                { extend: 'csv', exportOptions: { columns: [0, 1, 2, 4] } },
                { extend: 'print', exportOptions: { columns: [0, 1, 2, 4] } }
            ],
            columnDefs: [
                { 'width': '50px', 'targets': -1 },
                { 'orderable': false, 'targets': -1 },
                { 'visible': false, 'targets': -2 },
                { 'visible': false, 'targets': -3 }
            ]
        };
        this.dtTrigger.next();
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["b" /* options */]);
            _this.todasAulas = res['data']['teacherSubjects']['data'];
            _this.model.aula = _this.todasAulas[0]['id'];
            _this.aulaChange();
        });
    };
    AltPresencasComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AltPresencasComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loaderService.show();
        var url = this.apiconnector.getAulasDeUmAluno;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('course_id', this.model.aula);
        data.append('student_id', this.model.aluno);
        data.append('class_id', this.model.data);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["b" /* options */]);
            console.log('studant', res['data']['studentAttendance']);
            _this.extractData(res['data']['studentAttendance']);
            _this.loaderService.hide();
        });
    };
    AltPresencasComponent.prototype.extractData = function (myDataArray) {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.presencas = myDataArray.data || {};
            _this.dtTrigger.next();
        });
    };
    AltPresencasComponent.prototype.aulaChange = function () {
        var _this = this;
        console.log('aula id', this.model.aula);
        var url = this.apiconnector.getDatasAulas + this.model.aula;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["b" /* options */]);
            _this.todasDatas = res['data']['classDates']['data'];
            _this.model.data = 'null';
        });
    };
    AltPresencasComponent.prototype.alterarPresenca = function () {
        var _this = this;
        var url = this.apiconnector.changeAulasDeUmAluno;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('student_id', this.student_id);
        data.append('class_id', this.aula_id);
        data.append('state_now', this.state_now);
        this.alterarLoader = true;
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["b" /* options */]);
            _this.ErroAlterar = (res['data']['changeStudentAttendance']);
            _this.onSubmit();
            _this.alterarLoader = false;
        });
    };
    AltPresencasComponent.prototype.clickModal = function (student, date, aula, state) {
        this.student_id = student;
        this.aula_id = aula;
        this.date_id = date;
        this.state_now = state;
    };
    AltPresencasComponent.prototype.verify = function (field) {
        var act = false;
        for (var f in field) {
            if (field[f].length === 0 && field[f] === '') {
                act = true;
            }
        }
        act ? this.active = !1 : this.active = !0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTableDirective */])
    ], AltPresencasComponent.prototype, "dtElement", void 0);
    AltPresencasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alt-presencas',
            template: __webpack_require__("./src/app/alt-presencas/alt-presencas.component.html"),
            styles: [__webpack_require__("./src/app/alt-presencas/alt-presencas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ngx_cookie__["b" /* CookieService */], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["a" /* APIConnectorService */],
            __WEBPACK_IMPORTED_MODULE_2__loader_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_5__service_response_status_validator_service__["a" /* ResponseStatusValidatorService */]])
    ], AltPresencasComponent);
    return AltPresencasComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div ng-controller=\"menu\" class='body h-max'>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__("./src/app/providers/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.user = authService.getUser();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getUser();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service__ = __webpack_require__("./src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_apiconnector_service__ = __webpack_require__("./src/app/service/apiconnector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__ = __webpack_require__("./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_admin_service__ = __webpack_require__("./src/app/providers/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_security_service__ = __webpack_require__("./src/app/providers/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_professor_service__ = __webpack_require__("./src/app/providers/professor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_all_service__ = __webpack_require__("./src/app/providers/all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_aluno_service__ = __webpack_require__("./src/app/providers/aluno.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__alerts_alert_service__ = __webpack_require__("./src/app/alerts/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_response_status_validator_service__ = __webpack_require__("./src/app/service/response-status-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__menu_menu_component__ = __webpack_require__("./src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__login_page_login_page_component__ = __webpack_require__("./src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__historico_historico_component__ = __webpack_require__("./src/app/historico/historico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__presencas_presencas_component__ = __webpack_require__("./src/app/presencas/presencas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__espacos_espacos_component__ = __webpack_require__("./src/app/espacos/espacos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__alt_presencas_alt_presencas_component__ = __webpack_require__("./src/app/alt-presencas/alt-presencas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__criar_acessos_criar_acessos_component__ = __webpack_require__("./src/app/criar-acessos/criar-acessos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__acidentes_acidentes_component__ = __webpack_require__("./src/app/acidentes/acidentes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__salas_salas_component__ = __webpack_require__("./src/app/salas/salas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__loader_loader_component__ = __webpack_require__("./src/app/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__alerts_alerts_component__ = __webpack_require__("./src/app/alerts/alerts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__presencas_aluno_presencas_aluno_component__ = __webpack_require__("./src/app/presencas-aluno/presencas-aluno.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core




// Modules




// OAuth



// Services



// Routes

// Services








// Components
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_24__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_25__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_27__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_28__historico_historico_component__["a" /* HistoricoComponent */],
                __WEBPACK_IMPORTED_MODULE_29__presencas_presencas_component__["a" /* PresencasComponent */],
                __WEBPACK_IMPORTED_MODULE_30__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_31__espacos_espacos_component__["a" /* EspacosComponent */],
                __WEBPACK_IMPORTED_MODULE_32__alt_presencas_alt_presencas_component__["a" /* AltPresencasComponent */],
                __WEBPACK_IMPORTED_MODULE_33__criar_acessos_criar_acessos_component__["a" /* CriarAcessosComponent */],
                __WEBPACK_IMPORTED_MODULE_34__acidentes_acidentes_component__["a" /* AcidentesComponent */],
                __WEBPACK_IMPORTED_MODULE_35__salas_salas_component__["a" /* SalasComponent */],
                __WEBPACK_IMPORTED_MODULE_36__loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_37__alerts_alerts_component__["a" /* AlertsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__presencas_aluno_presencas_aluno_component__["a" /* PresencasAlunoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__app_routes__["a" /* routes */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_cookie__["a" /* CookieModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__service_apiconnector_service__["a" /* APIConnectorService */],
                __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_15__providers_admin_service__["a" /* AdminService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_security_service__["a" /* SecurityService */],
                __WEBPACK_IMPORTED_MODULE_17__providers_professor_service__["a" /* ProfessorService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_aluno_service__["a" /* AlunoService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_all_service__["a" /* AllService */],
                __WEBPACK_IMPORTED_MODULE_20__loader_loader_service__["a" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_22__service_response_status_validator_service__["a" /* ResponseStatusValidatorService */],
                __WEBPACK_IMPORTED_MODULE_21__alerts_alert_service__["a" /* AlertService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_page_login_page_component__ = __webpack_require__("./src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__historico_historico_component__ = __webpack_require__("./src/app/historico/historico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presencas_presencas_component__ = __webpack_require__("./src/app/presencas/presencas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__espacos_espacos_component__ = __webpack_require__("./src/app/espacos/espacos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alt_presencas_alt_presencas_component__ = __webpack_require__("./src/app/alt-presencas/alt-presencas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__criar_acessos_criar_acessos_component__ = __webpack_require__("./src/app/criar-acessos/criar-acessos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__acidentes_acidentes_component__ = __webpack_require__("./src/app/acidentes/acidentes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__salas_salas_component__ = __webpack_require__("./src/app/salas/salas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__presencas_aluno_presencas_aluno_component__ = __webpack_require__("./src/app/presencas-aluno/presencas-aluno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service__ = __webpack_require__("./src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_admin_service__ = __webpack_require__("./src/app/providers/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_professor_service__ = __webpack_require__("./src/app/providers/professor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_aluno_service__ = __webpack_require__("./src/app/providers/aluno.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_security_service__ = __webpack_require__("./src/app/providers/security.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_all_service__ = __webpack_require__("./src/app/providers/all.service.ts");


















/*
    0     student default     AllService
    1     professor           ProfessorService
    2     funcionario
    3     seguranca           SecuritySerice
    10    admin               AdminService
*/
var router = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__providers_auth_service__["a" /* AuthService */]]
        // canActivate: [AdminService]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__login_page_login_page_component__["a" /* LoginPageComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__providers_all_service__["a" /* AllService */]]
    },
    {
        path: 'historico',
        component: __WEBPACK_IMPORTED_MODULE_3__historico_historico_component__["a" /* HistoricoComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__providers_all_service__["a" /* AllService */]]
    },
    {
        path: 'salas',
        component: __WEBPACK_IMPORTED_MODULE_10__salas_salas_component__["a" /* SalasComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__providers_all_service__["a" /* AllService */]]
    },
    {
        path: 'presencas-aulas',
        component: __WEBPACK_IMPORTED_MODULE_11__presencas_aluno_presencas_aluno_component__["a" /* PresencasAlunoComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__providers_aluno_service__["a" /* AlunoService */]]
    },
    {
        path: 'presencas',
        component: __WEBPACK_IMPORTED_MODULE_4__presencas_presencas_component__["a" /* PresencasComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__providers_professor_service__["a" /* ProfessorService */]]
    },
    {
        path: 'alt-presencas',
        component: __WEBPACK_IMPORTED_MODULE_7__alt_presencas_alt_presencas_component__["a" /* AltPresencasComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__providers_professor_service__["a" /* ProfessorService */]]
    },
    {
        path: 'espacos',
        component: __WEBPACK_IMPORTED_MODULE_6__espacos_espacos_component__["a" /* EspacosComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_16__providers_security_service__["a" /* SecurityService */]]
    },
    {
        path: 'criar-acessos',
        component: __WEBPACK_IMPORTED_MODULE_8__criar_acessos_criar_acessos_component__["a" /* CriarAcessosComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_16__providers_security_service__["a" /* SecurityService */]]
    },
    {
        path: 'acidentes',
        component: __WEBPACK_IMPORTED_MODULE_9__acidentes_acidentes_component__["a" /* AcidentesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__providers_all_service__["a" /* AllService */]]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_5__admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__providers_admin_service__["a" /* AdminService */]]
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__providers_auth_service__["a" /* AuthService */]]
    }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "./src/app/criar-acessos/criar-acessos.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-success {\n    float: right;\n}\n\n.card-body {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/criar-acessos/criar-acessos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu class=\"col-sm-2\"></app-menu>\r\n<div class=\"router\">\r\n    <div class=\"pb-3 mx-auto\">\r\n        <div class=\"card\">\r\n            <h5 title=\"Novo acesso\" class=\"card-header\">Novo Acesso</h5>\r\n            <div class=\"p-2\">\r\n                <nav class=\"nav-fill\">\r\n                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                        <a title=\"Responsável\" class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Responsável</a>\r\n                        <a title=\"Visitante\" class=\"nav-item nav-link\" id=\"nav-visitor-tab\" data-toggle=\"tab\" href=\"#nav-visitor\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Visitante</a>\r\n                        <a title=\"Dados\" class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#nav-contact\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Dados</a>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n\r\n            <div class=\"card-body mx-auto\">\r\n                <form (ngSubmit)=\"onSubmit()\" class=\"tab-content\" id=\"nav-tabContent\">\r\n\r\n                    <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n                        <div class=\"row\">\r\n                            <div title=\"Nome do responsável\" class=\"input-group pb-3 col-sm-6\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"tipo\">\r\n                                        <i class=\"material-icons\">assignment_late</i>\r\n                                    </label>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Nome do Responsável\" id=\"nome_responsavel\" [(ngModel)]=\"model.nome_responsavel\" name=\"nome_responsavel\" required>\r\n                            </div>\r\n\r\n                            <div title=\"Número do responsável\" class=\"input-group pb-3 col-sm-6\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"tipo\">\r\n                                        <i class=\"material-icons\">assignment_late</i>\r\n                                    </label>\r\n                                </div>\r\n                                <input type=\"number\" class=\"form-control\" placeholder=\"Número do Responsável\" id=\"numero_responsavel\" [(ngModel)]=\"model.numero_responsavel\" name=\"numero_responsavel\" required>\r\n                            </div>\r\n\r\n                            <div title=\"contacto responsável\" class=\"input-group pb-3 col-sm-6\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"tipo\">\r\n                                        <i class=\"material-icons\">assignment_late</i>\r\n                                    </label>\r\n                                </div>\r\n                                <input type=\"tel\" maxlength=\"9\" size=\"9\" class=\"form-control\" placeholder=\"Contacto do Responsável\" id=\"contacto_responsavel\" [(ngModel)]=\"model.contacto_responsavel\" name=\"contacto_responsavel\" required>\r\n                            </div>\r\n\r\n                            <div title=\"Email do responsável\" class=\"input-group pb-3 col-sm-6\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"tipo\">\r\n                                        <i class=\"material-icons\">assignment_late</i>\r\n                                    </label>\r\n                                </div>\r\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Email do Responsável\" id=\"email_responsavel\" [(ngModel)]=\"model.email_responsavel\" name=\"email_responsavel\" required>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <button class=\"btn btn-success\" (click)=\"next1()\">Continuar</button>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                    <div class=\"tab-pane fade\" id=\"nav-visitor\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\r\n                        <div class=\"row\">\r\n                            <div title=\"Nome do visitante\" class=\"input-group pb-3 col-sm-6\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"tipo\">\r\n                                        <i class=\"material-icons\">assignment_late</i>\r\n                                    </label>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Nome do Visitante\" id=\"nome_visitante\" [(ngModel)]=\"model.nome_visitante\" name=\"nome_visitante\" required>\r\n                            </div>\r\n\r\n                            <div title=\"BI / CC / Passaporte do Visitante\" class=\"input-group pb-3 col-sm-6\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"tipo\">\r\n                                        <i class=\"material-icons\">assignment_late</i>\r\n                                    </label>\r\n                                </div>\r\n                                <input type=\"tel\" class=\"form-control\" placeholder=\"BI / CC / Passaporte do Visitante\" id=\"cc_visitante\" [(ngModel)]=\"model.cc_visitante\" name=\"cc_visitante\" required>\r\n                            </div>\r\n\r\n                            <div title=\"Contacto do Visitante\" class=\"input-group pb-3 col-sm-6\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"tipo\">\r\n                                        <i class=\"material-icons\">assignment_late</i>\r\n                                    </label>\r\n                                </div>\r\n                                <input type=\"number\" class=\"form-control\" placeholder=\"Contacto do Visitante\" id=\"contacto_visitante\" [(ngModel)]=\"model.contacto_visitante\" name=\"contacto_visitante\" required>\r\n                            </div>\r\n\r\n                            <div title=\"Email do Visitante\" class=\"input-group pb-3 col-sm-6\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"tipo\">\r\n                                        <i class=\"material-icons\">assignment_late</i>\r\n                                    </label>\r\n                                </div>\r\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Email do Visitante\" id=\"email_visitante\" [(ngModel)]=\"model.email_visitante\" name=\"email_visitante\" required>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <a class=\"btn btn-success\" (click)=\"next2()\">Continuar</a>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                    <div class=\"tab-pane fade\" id=\"nav-contact\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\r\n                        <div class=\"row\">\r\n                            <div class=\"input-group pb-3 col-sm-6\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"tipo\">\r\n                                        <i class=\"material-icons\">assignment_late</i>\r\n                                    </label>\r\n                                </div>\r\n                                <input type=\"number\" class=\"form-control\" placeholder=\"Número de Pessoas\" id=\"num_pessoas\" [(ngModel)]=\"model.num_pessoas\" name=\"num_pessoas\" required>\r\n                            </div>\r\n\r\n                            <div class=\"input-group pb-3 col-sm-6\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"tipo\">\r\n                                        <i class=\"material-icons\">assignment_late</i>\r\n                                    </label>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Data de Entrada\" id=\"data\" [(ngModel)]=\"model.data_entrada\" name=\"data\" required>\r\n                            </div>\r\n\r\n                            <div class=\"input-group pb-3 col-sm-6\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"tipo\">\r\n                                        <i class=\"material-icons\">assignment_late</i>\r\n                                    </label>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Data de Saída\" id=\"data_saida\" [(ngModel)]=\"model.data_saida\" name=\"data_saida\" required>\r\n                            </div>\r\n\r\n                            <div class=\"input-group pb-3 col-sm-6\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"tipo\">\r\n                                        <i class=\"material-icons\">assignment_late</i>\r\n                                    </label>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Motivo\" id=\"motivo\" [(ngModel)]=\"model.motivo\" name=\"motivo\" required>\r\n                            </div>\r\n\r\n                            <div class=\"input-group col-12 pb-3\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <label class=\"input-group-text mb-0\" for=\"descricao\">\r\n                                        <i class=\"material-icons\">description</i>\r\n                                    </label>\r\n                                </div>\r\n                                <textarea class=\"form-control\" placeholder=\"Descrição\" rows=\"5\" id=\"descricao\" [(ngModel)]=\"model.descricao\" name=\"descricao\" required></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-success mr-3\"> Criar Acesso </button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/criar-acessos/criar-acessos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarAcessosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap__ = __webpack_require__("./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_response_status_validator_service__ = __webpack_require__("./src/app/service/response-status-validator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Acesso = /** @class */ (function () {
    function Acesso() {
    }
    return Acesso;
}());
var CriarAcessosComponent = /** @class */ (function () {
    function CriarAcessosComponent(respVal) {
        this.respVal = respVal;
        this.model = new Acesso;
    }
    CriarAcessosComponent.prototype.ngOnInit = function () {
    };
    CriarAcessosComponent.prototype.onSubmit = function () {
        console.log('modelo', this.model);
    };
    CriarAcessosComponent.prototype.next1 = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_1_jquery__('#nav-visitor-tab'));
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#nav-visitor-tab').tab('show');
    };
    CriarAcessosComponent.prototype.next2 = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#nav-contact-tab').tab('show');
    };
    CriarAcessosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-criar-acessos',
            template: __webpack_require__("./src/app/criar-acessos/criar-acessos.component.html"),
            styles: [__webpack_require__("./src/app/criar-acessos/criar-acessos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_response_status_validator_service__["a" /* ResponseStatusValidatorService */]])
    ], CriarAcessosComponent);
    return CriarAcessosComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "#photoUser {\n    padding: 1em;\n}\n\n.card-user {\n    margin-bottom: 1em;\n}\n\n.card-img-middle {\n    margin: auto;\n}\n\n.drow {\n    height: 100%;\n}\n\n#pad {\n    padding: 2em;\n}\n\n.col-md-6 {\n    padding: 0;\n}\n\n#padBottom {\n    padding-left: 1em;\n}\n\n.btn {\n    border-color: #303F9F !important;\n    background-color: #303F9F !important;\n    color: white;\n}\n\n@media (max-width: 600px) {\n    #padBottom,\n    #padTop {\n        padding-bottom: 1em;\n        padding-left: 0;\n    }\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu class=\"col-sm-2\"></app-menu>\r\n<div class=\"router\">\r\n\r\n    <div class=\"card card-user\">\r\n        <h5 class=\"card-header\">Perfil</h5>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 card-img-middle\">\r\n                <img src={{user_avatar}} id='photoUser' class=\"rounded-circle\" alt=\"Foto do utilizador\">\r\n            </div>\r\n\r\n            <div class=\"col-md-9\" id=\"pad\">\r\n                <h5 title=\"Nome do utilizador\" class=\"card-title\">{{user_name}}</h5>\r\n                <p title=\"Email do utilizador\" class=\"card-text\">Email: {{user_email}}</p>\r\n                <p title=\"ID do utilizador\" class=\"card-text\">UID: {{user_uid}}</p>\r\n                <p title=\"Tipo de utilizador\" class=\"card-text\">Tipo: {{user_type}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\" col-md-6\" id=\"padTop\">\r\n            <div class=\"card\">\r\n                <h5 title=\"Histórico de acessos\" class=\"card-header\">Histórico de Acessos</h5>\r\n                <div class=\"p-3\">\r\n                    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped dataTable no-footer p-0\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th title=\"Sala\">Sala</th>\r\n                                <th title=\"Hora de Entrada\">Hora de Entrada</th>\r\n                                <th title=\"Hora de Saida\">Hora de Saida</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let pos of histAc\" role=\"row\" class=\"odd\">\r\n                                <td>{{ pos.sala }}</td>\r\n                                <td>{{ pos.inicio }}</td>\r\n                                <td>{{ pos.fim }}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <a title=\"Mais informação\" routerLink=\"/historico\" class=\"btn mt-3 float-right\">Mais informação</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\" col-md-6\" id=\"padBottom\">\r\n            <div class=\"card\">\r\n                <h5 title=\"Presenças\" class=\"card-header\">Presenças</h5>\r\n                <div class=\"p-3\">\r\n                    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped dataTable no-footer\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th title=\"Sala\">Sala</th>\r\n                                <th title=\"Hora de Entrada\">Hora de Entrada</th>\r\n                                <th title=\"Hora de Saida\">Hora de Saida</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let pos of histAc\" role=\"row\" class=\"odd\">\r\n                                <td>{{ pos.sala }}</td>\r\n                                <td>{{ pos.inicio }}</td>\r\n                                <td>{{ pos.fim }}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <a title=\"Mais informação\" routerLink=\"/presencas\" class=\"btn mt-3 float-right\">Mais informação</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__("./src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_apiconnector_service__ = __webpack_require__("./src/app/service/apiconnector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__historico_historico_component__ = __webpack_require__("./src/app/historico/historico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_response_status_validator_service__ = __webpack_require__("./src/app/service/response-status-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { CookieService } from 'angular2-cookie/core';

var HistAc = /** @class */ (function () {
    function HistAc() {
    }
    return HistAc;
}());
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router, _cookieService, apiconnector, historico, respVal) {
        this.authService = authService;
        this.router = router;
        this._cookieService = _cookieService;
        this.apiconnector = apiconnector;
        this.historico = historico;
        this.respVal = respVal;
        this.histAc = [];
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.dtOptions = {};
        this.types = {
            '0': 'student',
            '1': 'teacher',
            '2': 'staff member',
            '3': 'security',
            '10': 'admin'
        };
        this.user = authService.getUser();
        this.user_info = this.user.providerData[0];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log(this.user.providerData[0]);
        this.user_name = this.user_info.displayName;
        this.user_email = this.user_info.email;
        this.user_uid = this.user_info.uid;
        this.user_avatar = this.user_info.photoURL;
        this.user_type = this.types[this._cookieService.get('tipo')];
        this.user_type = this.user_type.substring(0, 1).toUpperCase() + this.user_type.substring(1);
        this.createTable();
    };
    DashboardComponent.prototype.createTable = function () {
        var _this = this;
        this.dtOptions = {
            // pagingType: 'full_numbers',
            paging: false,
            searching: false,
            lengthChange: false,
            ordering: false,
            info: false
        };
        var url = this.apiconnector.historico;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('block', 'null');
        data.append('floor', 'null');
        data.append('room', 'null');
        this.apiconnector.postData(url + '/5', data)
            .subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_3__service_apiconnector_service__["b" /* options */]);
            _this.extractData(res['data']['accessHist']);
        });
    };
    DashboardComponent.prototype.extractData = function (myDataArray) {
        this.histAc = myDataArray.data || {};
        this.dtTrigger.next();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            providers: [__WEBPACK_IMPORTED_MODULE_5__historico_historico_component__["a" /* HistoricoComponent */]],
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_7_ngx_cookie__["b" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_3__service_apiconnector_service__["a" /* APIConnectorService */], __WEBPACK_IMPORTED_MODULE_5__historico_historico_component__["a" /* HistoricoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__service_response_status_validator_service__["a" /* ResponseStatusValidatorService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/espacos/espacos.component.css":
/***/ (function(module, exports) {

module.exports = "div.datatable {\n    padding: 5.5em 1em 0!important;\n}\n\nform {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.form-row {\n    width: 100%;\n}\n\n@media only screen and (max-width: 767px) {\n    div.datatable {\n        padding: 1.5em 0 0!important;\n    }\n    .btn-success {\n        margin-top: 1em;\n    }\n}"

/***/ }),

/***/ "./src/app/espacos/espacos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu class=\"col-sm-2\"></app-menu>\r\n<div class=\"router\">\r\n\r\n    <div class=\"card mb-3\">\r\n        <h5 title=\"Consultar espaços\" class=\"card-header\">Consultar Espaços</h5>\r\n\r\n        <app-loader></app-loader>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <form class=\"form-inline\" (ngSubmit)=\"onSubmit()\" #searchForm=\"ngForm\">\r\n                <div class=\"form-row justify-content-center\">\r\n                    <div class=\"input-group col-sm-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <label for=\"edifico\" class=\"input-group-text\" title=\"Edifício\">\r\n                            <i class=\"material-icons\">business</i>\r\n                            </label>\r\n                        </div>\r\n                        <select class=\"custom-select\" id=\"edifico\" (change)=\"edificioChanged()\" [(ngModel)]=\"model.edificio\" name=\"na_edificio\" required>\r\n                            <option value=\"null\">Todas os Edifícios</option>\r\n                            <option *ngFor=\"let ed of edificios\" [value]=\"ed['bloco']\">C{{ed['bloco']}}</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"input-group col-sm-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <label for=\"piso\" class=\"input-group-text\" title=\"Piso\">\r\n                            <i class=\"material-icons\">trending_up</i>\r\n                            </label>\r\n                        </div>\r\n                        <select class=\"custom-select\" id=\"piso\" (change)=\"pisoChanged()\" [(ngModel)]=\"model.piso\" name=\"na_piso\" required>\r\n                            <option value=\"null\">Todos os Pisos</option>\r\n                            <option *ngFor=\"let p of pisos\" [value]=\"p['piso']\">{{p['piso']}}</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"input-group col-sm-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <label for=\"sala\" class=\"input-group-text\" title=\"Sala\">\r\n                            <i class=\"material-icons\">room</i>\r\n                            </label>\r\n                        </div>\r\n                        <select class=\"custom-select\" id=\"sala\" (change)=\"salaChanged()\" [(ngModel)]=\"model.sala\" name=\"na_sala\" required>\r\n                            <option value=\"null\">Todas as Salas</option>\r\n                            <option *ngFor=\"let p of salas\" [value]=\"p['sala']\">{{p['sala']}}</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"loader\">Procurar</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n\r\n            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped table-bordered dataTable no-footer\">\r\n                <thead>\r\n                    <tr>\r\n                        <th title=\"Sala\">Sala</th>\r\n                        <th title=\"Número de Pessoas\">Número de Pessoas</th>\r\n                        <th title=\"Lotação\">Lotação</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let pos of si\" role=\"row\" class=\"odd\">\r\n                        <td>{{ pos.space }}</td>\r\n                        <td>{{ pos.people }}</td>\r\n                        <td>{{ pos.max }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/espacos/espacos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspacosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__("./src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_apiconnector_service__ = __webpack_require__("./src/app/service/apiconnector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_response_status_validator_service__ = __webpack_require__("./src/app/service/response-status-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { CookieService } from 'angular2-cookie/core';

var SpaceInfo = /** @class */ (function () {
    function SpaceInfo() {
    }
    return SpaceInfo;
}());
var SearchOptions = /** @class */ (function () {
    function SearchOptions() {
    }
    return SearchOptions;
}());
var EspacosComponent = /** @class */ (function () {
    function EspacosComponent(authService, router, _cookieService, apiconnector, loaderService, respVal) {
        this.authService = authService;
        this.router = router;
        this._cookieService = _cookieService;
        this.apiconnector = apiconnector;
        this.loaderService = loaderService;
        this.respVal = respVal;
        this.dtOptions = {};
        this.si = [];
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.pisos = [];
        this.salas = [];
        this.loader = true;
        this.model = new SearchOptions();
    }
    EspacosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 8,
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        };
        this.dtTrigger.next();
        var url = this.apiconnector.getEdificios;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_4__service_apiconnector_service__["b" /* options */]);
            _this.edificios = res['data']['blocks']['data'];
            _this.model.edificio = 'null';
            _this.edificioChanged();
        });
    };
    EspacosComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    EspacosComponent.prototype.edificioChanged = function () {
        var _this = this;
        this.loaderService.show();
        this.loader = true;
        var url = this.apiconnector.getPisosEdificio;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('block', this.model.edificio);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_4__service_apiconnector_service__["b" /* options */]);
            _this.pisos = res['data']['floors']['data'];
            _this.model.piso = 'null';
            _this.pisoChanged();
            _this.loaderService.hide();
        });
    };
    EspacosComponent.prototype.pisoChanged = function () {
        var _this = this;
        this.loaderService.show();
        this.loader = true;
        var url = this.apiconnector.getSalasPisos;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('block', this.model.edificio);
        data.append('floor', this.model.piso);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_4__service_apiconnector_service__["b" /* options */]);
            _this.salas = res['data']['rooms']['data'];
            _this.model.sala = 'null';
            _this.loader = false;
            _this.loaderService.hide();
        });
    };
    EspacosComponent.prototype.extractData = function (myDataArray) {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.si = myDataArray.data || {};
            _this.dtTrigger.next();
        });
    };
    EspacosComponent.prototype.salaChanged = function () {
        console.log('cenas', this.model);
    };
    EspacosComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loaderService.show();
        var url = this.apiconnector.getPessoasEspaco;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('block', this.model.edificio);
        data.append('floor', this.model.piso);
        data.append('room', this.model.sala);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_4__service_apiconnector_service__["b" /* options */]);
            _this.extractData(res['data']['accessHist']);
            _this.loaderService.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_angular_datatables__["a" /* DataTableDirective */])
    ], EspacosComponent.prototype, "dtElement", void 0);
    EspacosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-espacos',
            template: __webpack_require__("./src/app/espacos/espacos.component.html"),
            styles: [__webpack_require__("./src/app/espacos/espacos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_8_ngx_cookie__["b" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_4__service_apiconnector_service__["a" /* APIConnectorService */], __WEBPACK_IMPORTED_MODULE_5__loader_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_7__service_response_status_validator_service__["a" /* ResponseStatusValidatorService */]])
    ], EspacosComponent);
    return EspacosComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/historico/historico.component.css":
/***/ (function(module, exports) {

module.exports = "div.datatable {\r\n    padding: 5.5em 1em 0!important;\r\n}\r\n\r\nform {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.form-row {\r\n    width: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    div.datatable {\r\n        padding: 1.5em 0 0!important;\r\n    }\r\n    .btn-success {\r\n        margin-top: 1em;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/historico/historico.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu class=\"col-sm-2\"></app-menu>\r\n<div class=\" router\">\r\n  <div class=\"card mb-3\">\r\n    <h5 title=\"Consultar Histórico\" class=\"card-header\">Consultar Histórico</h5>\r\n\r\n    <app-loader></app-loader>\r\n\r\n    <div class=\"card-body\">\r\n\r\n      <form class=\"form-inline\" (ngSubmit)=\"onSubmit()\" #searchForm=\"ngForm\">\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"input-group col-sm-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <label for=\"edifico\" class=\"input-group-text\" title=\"Edifício\">\r\n                <i class=\"material-icons\">business</i>\r\n              </label>\r\n            </div>\r\n            <select class=\"custom-select\" id=\"edifico\" (change)=\"edificioChanged()\" [(ngModel)]=\"model.edificio\" name=\"na_edificio\" required>\r\n              <option value=\"null\">Todas os Edifícios</option>\r\n              <option *ngFor=\"let ed of edificios\" [value]=\"ed['bloco']\">C{{ed['bloco']}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"input-group col-sm-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <label for=\"piso\" class=\"input-group-text\" title=\"Piso\">\r\n                <i class=\"material-icons\">trending_up</i>\r\n              </label>\r\n            </div>\r\n            <select class=\"custom-select\" id=\"piso\" (change)=\"pisoChanged()\" [(ngModel)]=\"model.piso\" name=\"na_piso\" required>\r\n                <option value=\"null\">Todos os Pisos</option>\r\n              <option *ngFor=\"let p of pisos\" [value]=\"p['piso']\">{{p['piso']}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"input-group col-sm-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <label for=\"sala\" class=\"input-group-text\" title=\"Sala\">\r\n                <i class=\"material-icons\">room</i>\r\n              </label>\r\n            </div>\r\n            <select class=\"custom-select\" id=\"sala\" (change)=\"salaChanged()\" [(ngModel)]=\"model.sala\" name=\"na_sala\" required>\r\n              <option value=\"null\">Todas as Salas</option>\r\n              <option *ngFor=\"let p of salas\" [value]=\"p['sala']\">{{p['sala']}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"loader\">Procurar</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped table-bordered dataTable no-footer\">\r\n        <thead>\r\n          <tr>\r\n            <th title=\"Sala\">Sala</th>\r\n            <th title=\"Hora de Entrada\">Hora de Entrada</th>\r\n            <th title=\"Hora de Saida\">Hora de Saida</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let pos of histAc\" role=\"row\" class=\"odd\">\r\n            <td>{{ pos.sala }}</td>\r\n            <td>{{ pos.inicio }}</td>\r\n            <td>{{ pos.fim }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/historico/historico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__("./src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_apiconnector_service__ = __webpack_require__("./src/app/service/apiconnector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_response_status_validator_service__ = __webpack_require__("./src/app/service/response-status-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { CookieService } from 'angular2-cookie/core';

var SearchOptions = /** @class */ (function () {
    function SearchOptions() {
    }
    return SearchOptions;
}());
var HistAc = /** @class */ (function () {
    function HistAc() {
    }
    return HistAc;
}());
var HistoricoComponent = /** @class */ (function () {
    function HistoricoComponent(authService, router, _cookieService, apiconnector, loaderService, respVal) {
        this.authService = authService;
        this.router = router;
        this._cookieService = _cookieService;
        this.apiconnector = apiconnector;
        this.loaderService = loaderService;
        this.respVal = respVal;
        this.dtOptions = {};
        this.histAc = [];
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.pisos = [];
        this.salas = [];
        this.model = new SearchOptions();
        this.loader = true;
    }
    HistoricoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 8,
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        };
        this.dtTrigger.next();
        var url = this.apiconnector.getEdificios;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_4__service_apiconnector_service__["b" /* options */]);
            _this.edificios = res['data']['blocks']['data'];
            _this.model.edificio = 'null';
            _this.edificioChanged();
        });
    };
    HistoricoComponent.prototype.edificioChanged = function () {
        var _this = this;
        this.loaderService.show();
        this.loader = true;
        var url = this.apiconnector.getPisosEdificio;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('block', this.model.edificio);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_4__service_apiconnector_service__["b" /* options */]);
            _this.pisos = res['data']['floors']['data'];
            _this.model.piso = 'null';
            _this.pisoChanged();
            _this.loaderService.hide();
        });
    };
    HistoricoComponent.prototype.pisoChanged = function () {
        var _this = this;
        this.loaderService.show();
        this.loader = true;
        var url = this.apiconnector.getSalasPisos;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('block', this.model.edificio);
        data.append('floor', this.model.piso);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_4__service_apiconnector_service__["b" /* options */]);
            _this.salas = res['data']['rooms']['data'];
            _this.model.sala = 'null';
            _this.loader = false;
            _this.loaderService.hide();
        });
    };
    HistoricoComponent.prototype.salaChanged = function () {
        console.log('cenas', this.model);
    };
    HistoricoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loaderService.show();
        var url = this.apiconnector.historico;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('block', this.model.edificio);
        data.append('floor', this.model.piso);
        data.append('room', this.model.sala);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_4__service_apiconnector_service__["b" /* options */]);
            _this.extractData(res['data']['accessHist']);
            _this.loaderService.hide();
        });
    };
    HistoricoComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    HistoricoComponent.prototype.extractData = function (myDataArray) {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.histAc = myDataArray.data || {};
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_angular_datatables__["a" /* DataTableDirective */])
    ], HistoricoComponent.prototype, "dtElement", void 0);
    HistoricoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-historico',
            template: __webpack_require__("./src/app/historico/historico.component.html"),
            styles: [__webpack_require__("./src/app/historico/historico.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_9_ngx_cookie__["b" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_4__service_apiconnector_service__["a" /* APIConnectorService */], __WEBPACK_IMPORTED_MODULE_5__loader_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_7__service_response_status_validator_service__["a" /* ResponseStatusValidatorService */]])
    ], HistoricoComponent);
    return HistoricoComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/***/ (function(module, exports) {

module.exports = ".loader-hidden {\n  visibility: hidden;\n}\n.loader-overlay {\n  position: absolute;\n  width:100%;\n  height: 0.4rem;\n  margin-top: -.4rem;\n  /* z-index: 500000; */\n}\n.loader-overlay > div{\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"show\">\n  <div title=\"loader\" class=\"loader-overlay\">\n    <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\"\n      aria-valuemax=\"100\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n    margin: 0 auto auto;\n}\n\n.container-logIn,\n#backgroudBlackFilter {\n    position: fixed;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n    margin: 0;\n}\n\n.container-logIn {\n    /* background: url(https://firebasestorage.googleapis.com/v0/b/fcul-projetofinal-1718.appspot.com/o/people-woman-coffee-meeting.jpg?alt=media&token=a2c5228c-3a9b-4f89-9d22-50147cec4881) no-repeat center center fixed;  */\n    background: url('backgroudLogin.1b5f8df120d75653660a.jpg') no-repeat center center fixed;\n    background-size: cover;\n    padding-top: 8%;\n}\n\n#backgroudBlackFilter {\n    background: rgba(0, 0, 0, 0.3);\n}\n\n.container-logIn .card {\n    border-radius: 0;\n    opacity: 0.9;\n}\n\n.container-logIn #image-cont {\n    margin: 20px auto;\n}\n\n.container-logIn #logIn-btn-contaier button {\n    width: 100%;\n    border-radius: 0;\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n\n.container-logIn .card-footer {\n    font-size: 0.8rem;\n}"

/***/ }),

/***/ "./src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-logIn\">\n    <div id=\"backgroudBlackFilter\"></div>\n    <div class=\"row\">\n        <div class=\"card col-11 col-sm-8 col-md-6 col-lg-4\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 margin-auto\" id=\"image-cont\">\n                        <!-- <img src=\"https://firebasestorage.googleapis.com/v0/b/fcul-projetofinal-1718.appspot.com/o/ciencias_ul_azul_h.png?alt=media&token=c12a91b6-fd8a-4214-93b7-8c33ef2efee2\" alt=\"Logotipo FCUL\"> -->\n                        <img src=\"assets/ciencias_ul_azul_h.png\" alt=\"Logotipo FCUL\">\n                    </div>\n                </div>\n                <h5 title=\"Sistema de Autenticação\" class=\"card-title\">Sistema de Autenticação</h5>\n                <div class=\"text-align-center\" id=\"logIn-btn-contaier\">\n                    <button title=\"Login campus\" class=\"btn btn-primary\" (click)=\"login()\">Login Campus</button>\n                </div>\n                <p>Ao autenticar-se, está a aceitar as normas do serviço prestado.</p>\n            </div>\n            <div class=\"card-footer bg-transparent\">\n                <a title=\"Suporte\" target=\"_blank\" href=\"https://hfsvbc.github.io/projetofinal_1718/#/\">Suporte</a>\n                &#8192; | &#8192;\n                <a title=\"Politica de Privacidade\" target=\"_blak\" href=\"https://ciencias.ulisboa.pt/pt/portal-de-ciências\">Politica de Privacidade</a>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div *ngIf='errorLogin==\"true\"' class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n    <strong>Error</strong> Your request could not be fulfilled at the moment. Please try again later.\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__("./src/app/providers/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authService) {
        this.authService = authService;
        this.errorLogin = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.login = function () {
        this.authService.signInWithGoogle();
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__("./src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__("./src/app/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = "#menu {\r\n    display: block;\r\n    -webkit-box-shadow: 0 0 2em black;\r\n            box-shadow: 0 0 2em black;\r\n}\r\n\r\n#dashboard {\r\n    position: fixed;\r\n    left: 0;\r\n}\r\n\r\n.toggleMenuStyle {\r\n    display: block!important;\r\n}\r\n\r\n.toggleDropdownStyle {\r\n    display: block;\r\n}\r\n\r\n.router {\r\n    position: absolute !important;\r\n    right: 0 !important;\r\n}\r\n\r\n.bg-primary {\r\n    background-color: #303F9F !important;\r\n}\r\n\r\n.navbar {\r\n    padding: .5rem 0;\r\n}\r\n\r\n.navbar-brand {\r\n    padding: 0 .5em;\r\n    font-size: 1.55rem;\r\n    float: left;\r\n}\r\n\r\n#togglerUser {\r\n    border-radius: 50%;\r\n    border: none;\r\n    display: block;\r\n    padding: 0;\r\n    outline: none;\r\n    cursor: pointer;\r\n    background: transparent;\r\n}\r\n\r\n#togglerUser::after {\r\n    vertical-align: middle;\r\n    border-top: .4em solid white;\r\n    border-right: .35em solid transparent;\r\n    border-left: .35em solid transparent;\r\n}\r\n\r\n#photoUser {\r\n    border-radius: 50%;\r\n    height: 2.5em;\r\n}\r\n\r\n.user {\r\n    float: right;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.brand {\r\n    float: left;\r\n}\r\n\r\n#dashToggle {\r\n    display: none;\r\n    margin-left: 1rem;\r\n}\r\n\r\n.user .dropdown-menu {\r\n    right: 0;\r\n    left: auto;\r\n    text-align: right;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .navbar-brand {\r\n        position: absolute;\r\n        width: 50%;\r\n        left: 25%;\r\n        float: none;\r\n        text-align: center;\r\n        top: .5rem;\r\n    }\r\n    #dashToggle {\r\n        display: block;\r\n    }\r\n}\r\n\r\n/* dashboard */\r\n\r\n.outlet {\r\n    padding: 1.5em 1em;\r\n}\r\n\r\n.nav-tabs .nav-link {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.nav-link {\r\n    color: white!important;\r\n}\r\n\r\n.nav-tabs .nav-link:focus,\r\n.nav-tabs .nav-link:hover {\r\n    border-color: transparent;\r\n}\r\n\r\n.nav-link.active {\r\n    background-color: #c5cae980;\r\n    border-color: transparent;\r\n}\r\n\r\n.nav-tabs {\r\n    border-bottom: 0;\r\n}\r\n\r\n.sidebar {\r\n    height: 100%!important;\r\n    padding: 5em 0 0;\r\n    -webkit-box-shadow: 0 0 2.5em 0.1em grey;\r\n    box-shadow: 0 0 2.5em 0.1em grey;\r\n    /* transform: translateZ(10px) */\r\n    background-color: #1a2358 !important;\r\n    float: left;\r\n    width: 15em;\r\n    z-index: 1;\r\n}\r\n\r\n.container-fluid {\r\n    padding-top: 2.8em;\r\n    height: 100%;\r\n}\r\n\r\n#mobileLogo {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    #dashboard {\r\n        position: fixed;\r\n        z-index: 1031;\r\n        padding: 0;\r\n        width: 100%;\r\n        display: none;\r\n    }\r\n    .fadein {\r\n        -webkit-animation: fadein .5s;\r\n                animation: fadein .5s;\r\n        display: block;\r\n    }\r\n    .fadeout {\r\n        -webkit-animation: fadeout .5s;\r\n                animation: fadeout .5s;\r\n        display: none;\r\n    }\r\n    @-webkit-keyframes fadein {\r\n        from {\r\n            opacity: 0;\r\n        }\r\n        to {\r\n            opacity: 1;\r\n        }\r\n    }\r\n    @keyframes fadein {\r\n        from {\r\n            opacity: 0;\r\n        }\r\n        to {\r\n            opacity: 1;\r\n        }\r\n    }\r\n    @-webkit-keyframes fadeout {\r\n        from {\r\n            opacity: 1;\r\n        }\r\n        to {\r\n            opacity: 0;\r\n        }\r\n    }\r\n    @keyframes fadeout {\r\n        from {\r\n            opacity: 1;\r\n        }\r\n        to {\r\n            opacity: 0;\r\n        }\r\n    }\r\n    #mobileLogo {\r\n        display: block;\r\n    }\r\n    #mobileLogo .navbar-brand {\r\n        color: white;\r\n    }\r\n    .close:focus,\r\n    .close:hover {\r\n        color: white;\r\n    }\r\n    .close {\r\n        position: absolute;\r\n        right: .5em;\r\n        top: .1em;\r\n        font-size: 2.5rem;\r\n        color: white;\r\n        outline: none;\r\n    }\r\n    .sidebar ul {\r\n        padding: 3.5em 0 0;\r\n    }\r\n    #accordion li {\r\n        opacity: 0;\r\n    }\r\n    @-webkit-keyframes slide {\r\n        0% {\r\n            opacity: 0;\r\n            -webkit-transform: scale(1.1) translateY(-24px);\r\n                    transform: scale(1.1) translateY(-24px);\r\n        }\r\n        100% {\r\n            opacity: 1;\r\n            -webkit-transform: none;\r\n                    transform: none;\r\n        }\r\n    }\r\n    @keyframes slide {\r\n        0% {\r\n            opacity: 0;\r\n            -webkit-transform: scale(1.1) translateY(-24px);\r\n                    transform: scale(1.1) translateY(-24px);\r\n        }\r\n        100% {\r\n            opacity: 1;\r\n            -webkit-transform: none;\r\n                    transform: none;\r\n        }\r\n    }\r\n    .slide {\r\n        -webkit-animation: slide .25s;\r\n                animation: slide .25s;\r\n        -webkit-animation-fill-mode: forwards;\r\n                animation-fill-mode: forwards;\r\n    }\r\n    #accordion li:nth-child(1) {\r\n        -webkit-animation-delay: .3s;\r\n                animation-delay: .3s;\r\n    }\r\n    #accordion li:nth-child(2) {\r\n        -webkit-animation-delay: .5s;\r\n                animation-delay: .5s;\r\n    }\r\n    #accordion li:nth-child(3) {\r\n        -webkit-animation-delay: .7s;\r\n                animation-delay: .7s;\r\n    }\r\n    #accordion li:nth-child(4) {\r\n        -webkit-animation-delay: .9s;\r\n                animation-delay: .9s;\r\n    }\r\n    #accordion li:nth-child(5) {\r\n        -webkit-animation-delay: 1.1s;\r\n                animation-delay: 1.1s;\r\n    }\r\n    #accordion li:nth-child(6) {\r\n        -webkit-animation-delay: 1.3s;\r\n                animation-delay: 1.3s;\r\n    }\r\n    #accordion li:nth-child(7) {\r\n        -webkit-animation-delay: 1.5s;\r\n                animation-delay: 1.5s;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-sm-12 navbar fixed-top navbar-expand-lg navbar-dark bg-primary\" id=\"menu\">\n    <div class=\"brand\">\n        <button class=\"navbar-toggler\" type=\"button\" aria-controls=\"dashboard\" aria-expanded=\"false\" id=\"dashToggle\" (click)=\"onToggleMenu()\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n        <a title=\"Controle de acessos da FCUL\" class=\"navbar-brand\" href=\"#\">CA FCUL</a>\n    </div>\n\n    <div class=\"user dropdown\">\n        <button id='togglerUser' (click)=\"onToggleDropdown()\" class=\"dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img src={{this.photo}} id='photoUser'>\n        </button>\n        <div [ngClass]=\"{'toggleDropdownStyle':toggleDropdown === true}\" class='dropdown-menu' aria-labelledby=\"togglerUser\">\n            <span title=\"Bem vindo\" class=\"dropdown-item\">Bem vindo, {{this.name}}</span>\n            <button title=\"Sair\" type=\"button\" class=\"dropdown-item btn btn-sm btn-outline-light\" (click)=\"logout()\"> Sair </button>\n        </div>\n    </div>\n\n    <app-alerts></app-alerts>\n</nav>\n\n<nav [ngClass]=\"{'toggleMenuStyle':toggleMenu === true}\" class=\"d-md-block bg-dark sidebar\" id='dashboard' aria-labelledby=\"dashToggle\">\n    <li class=\"nav-item\" id=\"mobileLogo\">\n        <a title=\"Controle de Acessos da FCUL\" class=\"navbar-brand\" href=\"#\">CA FCUL</a>\n        <button (click)=\"onToggleMenu()\" class=\"close\" type=\"button\" aria-controls=\"dashboard\" aria-expanded=\"false\" id=\"dashToggle\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </li>\n    <div id=\"sidenav-sticky\">\n        <ul class=\"nav nav-tabs flex-column\" id=\"accordion\">\n            <li class=\"nav-item slide\">\n                <a title=\"Dashboard\" class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n            </li>\n            <li class=\"nav-item slide\">\n                <a title=\"Consultar Histórico\" class=\"nav-link\" routerLink=\"/historico\" routerLinkActive=\"active\">Consultar Histórico</a>\n            </li>\n            <li *ngIf=\"tipo=='0'\" class=\"nav-item slide\">\n                <a title=\"Consultar Presenças\" class=\"nav-link\" routerLink=\"/presencas-aulas\" routerLinkActive=\"active\">Consultar Presenças</a>\n            </li>\n            <li class=\"nav-item slide\">\n                <a title=\"Salas Disponíveis\" class=\"nav-link\" routerLink=\"/salas\" routerLinkActive=\"active\">Salas Disponíveis</a>\n            </li>\n            <li *ngIf=\"tipo=='1'\" class=\"nav-item slide\">\n                <a title=\"Consultar Presenças\" class=\"nav-link\" routerLink=\"/presencas\" routerLinkActive=\"active\">Consultar Presenças</a>\n            </li>\n            <li *ngIf=\"tipo=='1'\" class=\"nav-item slide\">\n                <a title=\"Alterar Presenças\" class=\"nav-link\" routerLink=\"/alt-presencas\" routerLinkActive=\"active\">Alterar Presenças</a>\n            </li>\n            <li *ngIf=\"tipo=='3' || tipo=='10'\" class=\"nav-item slide\">\n                <a title=\"Consultar Espaços\" class=\"nav-link\" routerLink=\"/espacos\" routerLinkActive=\"active\">Consultar Espaços</a>\n            </li>\n            <li *ngIf=\"tipo=='3' || tipo=='10'\" class=\"nav-item slide\">\n                <a title=\"Criar Novo Acesso\" class=\"nav-link\" routerLink=\"/criar-acessos\" routerLinkActive=\"active\">Criar Novo Acesso</a>\n            </li>\n            <li class=\"nav-item slide\">\n                <a title=\"Acidentes\" class=\"nav-link\" routerLink=\"/acidentes\" routerLinkActive=\"active\">Acidentes</a>\n            </li>\n            <li *ngIf=\"tipo=='10'\" class=\"nav-item slide\">\n                <a title=\"Admin\" class=\"nav-link\" routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__("./src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { CookieService } from 'angular2-cookie/core';


var MenuComponent = /** @class */ (function () {
    function MenuComponent(authService, angularAuth, router, _cookieService) {
        this.authService = authService;
        this.angularAuth = angularAuth;
        this.router = router;
        this._cookieService = _cookieService;
        this.toggleMenu = false;
        this.toggleDropdown = false;
        this.user = authService.getUser();
        this.tipo = _cookieService.get('tipo');
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.name = this.user.displayName;
        this.photo = this.user.photoURL;
    };
    MenuComponent.prototype.logout = function () {
        this.authService.logout();
    };
    MenuComponent.prototype.onToggleMenu = function () {
        if (this.toggleMenu === true) {
            this.toggleMenu = false;
        }
        else {
            this.toggleMenu = true;
        }
    };
    MenuComponent.prototype.onToggleDropdown = function () {
        if (this.toggleDropdown === true) {
            this.toggleDropdown = false;
        }
        else {
            this.toggleDropdown = true;
        }
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie__["b" /* CookieService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/presencas-aluno/presencas-aluno.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/presencas-aluno/presencas-aluno.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu class=\"col-sm-2\"></app-menu>\n<div class=\"router\">\n\n  <div class=\"card mb-1\">\n    <h5 title=\"Consultar Presenças nas Aulas\" class=\"card-header\">Consultar Presenças nas Aulas</h5>\n\n    <app-loader></app-loader>\n\n    <div class=\"card-body\">\n      <form class=\"was-validated\" id=\"searchAttendance\" (ngSubmit)=\"onSubmit()\" #searchForm=\"ngForm\">\n        <div class=\"form-row justify-content-center\">\n          <div class=\"input-group col-lg-4 pb-3\">\n            <div class=\"input-group-prepend\">\n              <label class=\"input-group-text mb-0\" for=\"na_aula\">\n                <i class=\"material-icons\">class</i>\n              </label>\n            </div>\n            <select class=\"custom-select form-control\" id=\"na_aula\" (change)=\"aulaChange()\" [(ngModel)]=\"model.aula\" name=\"na_aula\" required>\n              <option *ngFor=\"let a of todasAulas\" [value]=\"a['id']\">{{a['name']}}</option>\n            </select>\n          </div>\n\n          <div class=\"input-group col-lg-4 pb-3\">\n            <div class=\"input-group-prepend\">\n              <label class=\"input-group-text mb-0\" for=\"na_data\">\n                <i class=\"material-icons\">date_range</i>\n              </label>\n            </div>\n            <select class=\"custom-select form-control\" id=\"na_data\" [(ngModel)]=\"model.data\" name=\"na_data\" required>\n              <option value=\"null\">Todas as Datas</option>\n              <option *ngFor=\"let a of todasDatas\" [value]=\"a['id']\">{{a['d_init']}}</option>\n            </select>\n          </div>\n\n          <div class=\"input-group col-lg-1 pb-3\">\n            <button title=\"Procurar\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"loader\">Procurar</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"card-body\">\n\n      <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped table-bordered dataTable no-footer\">\n        <thead>\n          <tr>\n            <th title=\"Aula\">Aula</th>\n            <th title=\"Presença\">Presença</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pos of presencas\" role=\"row\" class=\"odd\">\n            <td>{{ pos.date }}</td>\n            <td>\n              <button type=\"button\" class=\"btn\" [ngClass]=\"{'active btn-success' : pos.attended === '1', 'btn-warning': pos.attended === '0'}\"\n                data-toggle=\"modal\" data-target=\"#exampleModal\" title=\"{{pos.attended === '1' ? 'Presente' : 'Ausente'}}\">\n                <i class=\"material-icons\">done</i>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/presencas-aluno/presencas-aluno.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresencasAlunoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__ = __webpack_require__("./src/app/service/apiconnector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_response_status_validator_service__ = __webpack_require__("./src/app/service/response-status-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { CookieService } from 'angular2-cookie/core';

var SearchOptions = /** @class */ (function () {
    function SearchOptions() {
    }
    return SearchOptions;
}());
var Presencas = /** @class */ (function () {
    function Presencas() {
    }
    return Presencas;
}());
var PresencasAlunoComponent = /** @class */ (function () {
    function PresencasAlunoComponent(_cookieService, apiconnector, loaderService, respVal) {
        this._cookieService = _cookieService;
        this.apiconnector = apiconnector;
        this.loaderService = loaderService;
        this.respVal = respVal;
        this.model = new SearchOptions();
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.dtOptions = {};
        this.presencas = [];
        this.loader = true;
    }
    PresencasAlunoComponent.prototype.ngOnInit = function () {
        this.loaderService.show();
        var url = this.apiconnector.getAulas;
        var data = new FormData();
        this.dtOptions = {
            pagingType: 'full_numbers',
            dom: 'Bfrtip',
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
        };
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        this.dtTrigger.next();
        // this.apiconnector.postData(url, data).subscribe(res => {
        //   this.respVal.validate(res);
        //   console.log('res', res);
        //   this._cookieService.put('token', res['data']['token']);
        //   this.todasAulas = res['data']['teacherSubjects']['data'];
        //   this.model.aula = this.todasAulas[0]['id'];
        //   this.aulaChange();
        //   console.log('data no pedido', this.model.aula, this.model.aluno, this.model.data);
        // });
    };
    PresencasAlunoComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    PresencasAlunoComponent.prototype.aulaChange = function () {
        this.loader = true;
        var url = this.apiconnector.getDatasAulas + this.model.aula;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        // this.apiconnector.postData(url, data).subscribe(res => {
        //   this.respVal.validate(res);
        //   console.log('res', res);
        //   this.model.data = 'null';
        //   this._cookieService.put('token', res['data']['token']);
        //   this.todasDatas = res['data']['classDates']['data'];
        //   this.loadStudents();
        // });
    };
    PresencasAlunoComponent.prototype.loadStudents = function () {
        var url = this.apiconnector.getAlunosNomesAulas + this.model.aula;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        // this.apiconnector.postData(url, data).subscribe(res => {
        //   this.respVal.validate(res);
        //   console.log('res', res);
        //   this.model.aluno = 'null';
        //   this._cookieService.put('token', res['data']['token']);
        //   this.todosAlunos = res['data']['classStudents']['data'];
        //   this.loader = false;
        //   this.loaderService.hide();
        // });
    };
    PresencasAlunoComponent.prototype.onSubmit = function () {
        this.loaderService.show();
        var url = this.apiconnector.getAlunosAulas;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('course_id', this.model.aula);
        data.append('student_id', this.model.aluno);
        data.append('class_id', this.model.data);
        console.log('data', this.model.aula, this.model.aluno, this.model.data);
        // this.apiconnector.postData(url, data).subscribe(res => {
        //   this.respVal.validate(res);
        //   console.log('res', res);
        //   this._cookieService.put('token', res['data']['token']);
        //   this.extractData(res['data']['studentAttendance']);
        //   this.loaderService.hide();
        // });
    };
    PresencasAlunoComponent.prototype.extractData = function (myDataArray) {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.presencas = myDataArray.data || {};
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], PresencasAlunoComponent.prototype, "dtElement", void 0);
    PresencasAlunoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-presencas-aluno',
            template: __webpack_require__("./src/app/presencas-aluno/presencas-aluno.component.html"),
            styles: [__webpack_require__("./src/app/presencas-aluno/presencas-aluno.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ngx_cookie__["b" /* CookieService */], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["a" /* APIConnectorService */], __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__service_response_status_validator_service__["a" /* ResponseStatusValidatorService */]])
    ], PresencasAlunoComponent);
    return PresencasAlunoComponent;
}());



/***/ }),

/***/ "./src/app/presencas/presencas.component.css":
/***/ (function(module, exports) {

module.exports = "div.datatable {\n    padding: 5.5em 1em 0!important;\n}\n\n.progress-bar {\n    width: 100%;\n    height: 0.4rem;\n}\n\n.form-row {\n    width: 100%;\n}\n\n#searchAttendance .input-group {\n    height: 3.5rem;\n}\n\n#searchAttendance select {\n    height: 100%;\n}\n\n.card {\n    margin-bottom: 10px;\n}\n\n.card-body{margin:0;}\n\n.input-group>.custom-select:not(:last-child), .input-group>.form-control:not(:last-child) {\n  border-top-right-radius: revert;\n  border-bottom-right-radius: revert;\n}\n\n@media only screen and (max-width: 767px) {\n    div.datatable {\n        padding: 1.5em 0 0!important;\n    }\n}\n"

/***/ }),

/***/ "./src/app/presencas/presencas.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu class=\"col-sm-2\"></app-menu>\r\n<div class=\"router\">\r\n\r\n  <div class=\"card mb-1\">\r\n    <h5 title=\"Consultar Presenças nas Aulas\" class=\"card-header\">Consultar Presenças nas Aulas</h5>\r\n\r\n    <app-loader></app-loader>\r\n\r\n    <div class=\"card-body\">\r\n      <form class=\"was-validated\" id=\"searchAttendance\" (ngSubmit)=\"onSubmit()\" #searchForm=\"ngForm\">\r\n        <div class=\"form-row\">\r\n          <div class=\"input-group col-lg-4 pb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <label class=\"input-group-text mb-0\" for=\"na_aula\" title=\"Aula a pesquisar\">\r\n                <i class=\"material-icons\">class</i>\r\n              </label>\r\n            </div>\r\n            <select class=\"custom-select form-control\" id=\"na_aula\" (change)=\"aulaChange()\" [(ngModel)]=\"model.aula\" name=\"na_aula\" required>\r\n              <option *ngFor=\"let a of todasAulas\" [value]=\"a['id']\">{{a['name']}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"input-group col-lg-4 pb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <label class=\"input-group-text mb-0\" for=\"na_data\" title=\"Data da aula\">\r\n                <i class=\"material-icons\">date_range</i>\r\n              </label>\r\n            </div>\r\n            <select class=\"custom-select form-control\" id=\"na_data\" [(ngModel)]=\"model.data\" name=\"na_data\" required>\r\n              <option value=\"null\">Todas as Datas</option>\r\n              <option *ngFor=\"let a of todasDatas\" [value]=\"a['id']\">{{a['d_init']}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"input-group col-lg-3 pb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <label class=\"input-group-text mb-0\" for=\"na_aluno\" title=\"Aluno a pesquisar\">\r\n                <i class=\"material-icons\">person</i>\r\n              </label>\r\n            </div>\r\n            <select class=\"custom-select form-control\" id=\"na_aluno\" [(ngModel)]=\"model.aluno\" name=\"na_aluno\" required>\r\n              <option value=\"null\">Todos os Alunos</option>\r\n              <option *ngFor=\"let a of todosAlunos\" [value]=\"a['id']\">{{a['id']}} - {{a['aluno']}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"input-group col-lg-1 pb-3\">\r\n            <button title=\"Procurar\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"loader\">Procurar</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n\r\n      <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped table-bordered dataTable no-footer\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th title=\"Aluno\">Aluno</th>\r\n            <th title=\"Data\">Data</th>\r\n            <th title=\"Presenças\">Presenças</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let pos of presencas\" role=\"row\" class=\"odd\">\r\n            <td>{{ pos.student_id }}</td>\r\n            <td>{{ pos.student_name }}</td>\r\n            <td>{{ pos.date_ini }}</td>\r\n            <td>{{ pos.attended_classes }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/presencas/presencas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresencasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__ = __webpack_require__("./src/app/service/apiconnector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_response_status_validator_service__ = __webpack_require__("./src/app/service/response-status-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { CookieService } from 'angular2-cookie/core';

var SearchOptions = /** @class */ (function () {
    function SearchOptions() {
    }
    return SearchOptions;
}());
var Presencas = /** @class */ (function () {
    function Presencas() {
    }
    return Presencas;
}());
var PresencasComponent = /** @class */ (function () {
    function PresencasComponent(_cookieService, apiconnector, loaderService, respVal) {
        this._cookieService = _cookieService;
        this.apiconnector = apiconnector;
        this.loaderService = loaderService;
        this.respVal = respVal;
        this.model = new SearchOptions();
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.dtOptions = {};
        this.presencas = [];
        this.loader = true;
        this.countPresencas = false;
    }
    PresencasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.show();
        var url = this.apiconnector.getAulas;
        var data = new FormData();
        this.dtOptions = {
            pagingType: 'full_numbers',
            dom: 'Bfrtip',
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
        };
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        this.dtTrigger.next();
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token']);
            _this.todasAulas = res['data']['teacherSubjects']['data'];
            _this.model.aula = _this.todasAulas[0]['id'];
            _this.aulaChange();
            console.log('data no pedido', _this.model.aula, _this.model.aluno, _this.model.data);
        });
    };
    PresencasComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    PresencasComponent.prototype.aulaChange = function () {
        var _this = this;
        this.loader = true;
        var url = this.apiconnector.getDatasAulas + this.model.aula;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this.model.data = 'null';
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["b" /* options */]);
            _this.todasDatas = res['data']['classDates']['data'];
            _this.loadStudents();
        });
    };
    PresencasComponent.prototype.loadStudents = function () {
        var _this = this;
        var url = this.apiconnector.getAlunosNomesAulas + this.model.aula;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this.model.aluno = 'null';
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["b" /* options */]);
            _this.todosAlunos = res['data']['classStudents']['data'];
            _this.loader = false;
            _this.loaderService.hide();
        });
    };
    PresencasComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loaderService.show();
        var url = this.apiconnector.getAlunosAulas;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('course_id', this.model.aula);
        data.append('student_id', this.model.aluno);
        data.append('class_id', this.model.data);
        console.log('data', this.model.aula, this.model.aluno, this.model.data);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["b" /* options */]);
            if (_this.model.data === 'null' && _this.model.aluno === 'null') {
                _this.dtOptions['aoColumnDefs'] = [{ 'visible': false, 'targets': -2 }, { 'visible': true, 'targets': -1 }];
                _this.dtOptions['columnDefs'] = [{ 'visible': false, 'targets': -2 }, { 'visible': true, 'targets': -1 }];
                console.log('dtOpt', _this.dtOptions);
            }
            else {
                _this.dtOptions['aoColumnDefs'] = [{ 'visible': true, 'targets': -2 }, { 'visible': false, 'targets': -1 }];
                _this.dtOptions['columnDefs'] = [{ 'visible': true, 'targets': -2 }, { 'visible': false, 'targets': -1 }];
                console.log('dtOpt', _this.dtOptions);
            }
            _this.extractData(res['data']['studentAttendance']);
            _this.loaderService.hide();
        });
    };
    PresencasComponent.prototype.extractData = function (myDataArray) {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.presencas = myDataArray.data || {};
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], PresencasComponent.prototype, "dtElement", void 0);
    PresencasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-presencas',
            template: __webpack_require__("./src/app/presencas/presencas.component.html"),
            styles: [__webpack_require__("./src/app/presencas/presencas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ngx_cookie__["b" /* CookieService */], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["a" /* APIConnectorService */], __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__service_response_status_validator_service__["a" /* ResponseStatusValidatorService */]])
    ], PresencasComponent);
    return PresencasComponent;
}());



/***/ }),

/***/ "./src/app/providers/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { CookieService } from 'angular2-cookie/core';

var AdminService = /** @class */ (function () {
    function AdminService(router, _cookieService, _firebaseAuth) {
        this.router = router;
        this._cookieService = _cookieService;
        this._firebaseAuth = _firebaseAuth;
    }
    AdminService.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].from(this._firebaseAuth.authState)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
            var tipo = _this._cookieService.get('tipo');
            if (tipo !== '10') {
                _this.router.navigate(['/dashboard']);
                return false;
            }
            return true;
        });
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_8_ngx_cookie__["b" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/providers/all.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AllService = /** @class */ (function () {
    function AllService(router, _firebaseAuth) {
        this.router = router;
        this._firebaseAuth = _firebaseAuth;
    }
    AllService.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].from(this._firebaseAuth.authState)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
        });
    };
    AllService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AllService);
    return AllService;
}());



/***/ }),

/***/ "./src/app/providers/aluno.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { CookieService } from 'angular2-cookie/core';

var AlunoService = /** @class */ (function () {
    function AlunoService(router, _cookieService, _firebaseAuth) {
        this.router = router;
        this._cookieService = _cookieService;
        this._firebaseAuth = _firebaseAuth;
    }
    AlunoService.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].from(this._firebaseAuth.authState)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
            var tipo = _this._cookieService.get('tipo');
            if (tipo === '0') {
                return true;
            }
            else {
                _this.router.navigate(['/dashboard']);
                return false;
            }
        });
    };
    AlunoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_8_ngx_cookie__["b" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AlunoService);
    return AlunoService;
}());



/***/ }),

/***/ "./src/app/providers/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_apiconnector_service__ = __webpack_require__("./src/app/service/apiconnector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { CookieService } from 'angular2-cookie/core';

var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router, http, apiconnector, _cookieService) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.http = http;
        this.apiconnector = apiconnector;
        this._cookieService = _cookieService;
        this.user = _firebaseAuth.authState;
        console.log('Auth state', _firebaseAuth.authState);
        this.user.subscribe(function (user) {
            if (user) {
                _this.current = user;
                console.log('User logged in');
            }
            else {
                console.log('User has to register');
                _this.current = false;
            }
        });
    }
    AuthService.prototype.signInWithGoogle = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().setPersistence(__WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"].Auth.Persistence.SESSION);
        var provider = new __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"].GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().useDeviceLanguage();
        __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().signInWithPopup(provider)
            .then(function (result) {
            _this.current = result.user;
            // console.log('result', firebase.auth().currentUser);
            // console.log('New user just signin', this.current);
            // Send info to backend that user just login
            var user_info = _this.current.providerData[0];
            var idToken = _this.current.qa;
            _this.apiconnector.loginPost(idToken)
                .subscribe(function (res) {
                // Process code
                var code = res['code'];
                console.log(res);
                if (code !== 200) {
                    _this._cookieService.put('error', 'true', __WEBPACK_IMPORTED_MODULE_9__service_apiconnector_service__["b" /* options */]);
                    _this.logout();
                    alert('Something went wrong! Try again later.');
                }
                else {
                    var tipo = _this.getTipo(res['data']['user_type']);
                    _this._cookieService.put('tipo', tipo, __WEBPACK_IMPORTED_MODULE_9__service_apiconnector_service__["b" /* options */]);
                    _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_9__service_apiconnector_service__["b" /* options */]);
                    _this.router.navigateByUrl('/dashboard');
                }
            });
        })
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Something went wrong: ' + errorMessage + ' code ' + errorCode);
        });
    };
    AuthService.prototype.getTipo = function (t) {
        if (t === 'student') {
            return '0';
        }
        else if (t === 'teacher') {
            return '1';
        }
        else if (t === 'staff member') {
            return '2';
        }
        else if (t === 'security guard') {
            return '3';
        }
        else if (t === 'admin') {
            return '10';
        }
    };
    AuthService.prototype.isLoggedIn = function () {
        return __WEBPACK_IMPORTED_MODULE_8_firebase_app__["auth"]().currentUser !== null;
    };
    AuthService.prototype.logout = function () {
        var url = this.apiconnector.logoutPOST;
        console.log('current', this.current.email);
        var data = new FormData();
        data.append('userTokenId', this._cookieService.get('token'));
        this.apiconnector.postData(url, data).subscribe(function (res) {
            console.log('res', res);
        });
        this.current = null;
        this._firebaseAuth.auth.signOut();
        this._cookieService.removeAll();
        this.router.navigateByUrl('/login');
    };
    AuthService.prototype.getUser = function () {
        return this.current;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_9__service_apiconnector_service__["a" /* APIConnectorService */], __WEBPACK_IMPORTED_MODULE_10_ngx_cookie__["b" /* CookieService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/providers/professor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { CookieService } from 'angular2-cookie/core';

var ProfessorService = /** @class */ (function () {
    function ProfessorService(router, _cookieService, _firebaseAuth) {
        this.router = router;
        this._cookieService = _cookieService;
        this._firebaseAuth = _firebaseAuth;
    }
    ProfessorService.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].from(this._firebaseAuth.authState)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
            var tipo = _this._cookieService.get('tipo');
            if (tipo === '1') {
                return true;
            }
            else {
                _this.router.navigate(['/dashboard']);
                return false;
            }
        });
    };
    ProfessorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_8_ngx_cookie__["b" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ProfessorService);
    return ProfessorService;
}());



/***/ }),

/***/ "./src/app/providers/security.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { CookieService } from 'angular2-cookie/core';

var SecurityService = /** @class */ (function () {
    function SecurityService(router, _cookieService, _firebaseAuth) {
        this.router = router;
        this._cookieService = _cookieService;
        this._firebaseAuth = _firebaseAuth;
    }
    SecurityService.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].from(this._firebaseAuth.authState)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
            var tipo = _this._cookieService.get('tipo');
            if (tipo === '3' || tipo === '10') {
                return true;
            }
            else {
                _this.router.navigate(['/dashboard']);
                return false;
            }
        });
    };
    SecurityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_8_ngx_cookie__["b" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], SecurityService);
    return SecurityService;
}());



/***/ }),

/***/ "./src/app/salas/salas.component.css":
/***/ (function(module, exports) {

module.exports = "div.datatable {\n    padding: 5.5em 1em 0!important;\n}\n\nform {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.form-row {\n    width: 100%;\n}\n\n@media only screen and (max-width: 767px) {\n    div.datatable {\n        padding: 1.5em 0 0!important;\n    }\n    .btn-success {\n        margin-top: 1em;\n    }\n}"

/***/ }),

/***/ "./src/app/salas/salas.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu class=\"col-sm-2\"></app-menu>\r\n<div class=\"router\">\r\n  <div class=\"card mb-3\">\r\n    <h5 title=\"Consultar Salas Disponíveis\" class=\"card-header\">Consultar Salas Disponíveis</h5>\r\n\r\n    <app-loader></app-loader>\r\n\r\n    <div class=\"card-body\">\r\n\r\n      <form class=\"was-validated\" id=\"searchRooms\" (ngSubmit)=\"onSubmit()\" #searchForm=\"ngForm\">\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"input-group col-sm-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <label for=\"edifico\" class=\"input-group-text\" title=\"Edifício\">\r\n                <i class=\"material-icons\">business</i>\r\n              </label>\r\n            </div>\r\n            <select class=\"custom-select\" id=\"edifico\" (change)=\"edificioChanged()\" [(ngModel)]=\"model.edificio\" name=\"na_edificio\" required>\r\n              <option *ngFor=\"let ed of edificios\" [value]=\"ed['bloco']\">C{{ed['bloco']}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"input-group col-sm-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <label for=\"piso\" class=\"input-group-text\" title=\"Piso\">\r\n                <i class=\"material-icons\">trending_up</i>\r\n              </label>\r\n            </div>\r\n            <select class=\"custom-select\" id=\"piso\" [(ngModel)]=\"model.piso\" name=\"na_piso\" required>\r\n              <option value=\"null\">Todas os Pisos</option>\r\n              <option *ngFor=\"let p of pisos\" [value]=\"p['piso']\">{{p['piso']}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <button title=\"Procurar\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"loader\">Procurar</button>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n\r\n      <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped table-bordered dataTable no-footer\">\r\n        <thead>\r\n          <tr>\r\n            <th title=\"Espaço\">Espaco</th>\r\n            <th title=\"Lugares Disponíveis\">Lugares Disponíveis</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let pos of salasDisponiveis\" role=\"row\" class=\"odd\">\r\n            <td>{{ pos.space }}</td>\r\n            <td>{{ pos.seats }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/salas/salas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__ = __webpack_require__("./src/app/service/apiconnector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_response_status_validator_service__ = __webpack_require__("./src/app/service/response-status-validator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { CookieService } from 'angular2-cookie/core';

var SalasDisp = /** @class */ (function () {
    function SalasDisp() {
    }
    return SalasDisp;
}());
var SalasDisponiveis = /** @class */ (function () {
    function SalasDisponiveis() {
    }
    return SalasDisponiveis;
}());
var SalasComponent = /** @class */ (function () {
    function SalasComponent(_cookieService, apiconnector, loaderService, respVal) {
        this._cookieService = _cookieService;
        this.apiconnector = apiconnector;
        this.loaderService = loaderService;
        this.respVal = respVal;
        this.pisos = [];
        this.salas = [];
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.dtOptions = {};
        this.model = new SalasDisp();
        this.salasDisponiveis = new SalasDisponiveis();
        this.loader = true;
        this.model.piso = '';
    }
    SalasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.show();
        var url = this.apiconnector.getEdificios;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        this.dtOptions = {
            pagingType: 'full_numbers',
            dom: 'Bfrtip'
        };
        this.dtTrigger.next();
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["b" /* options */]);
            _this.edificios = res['data']['blocks']['data'];
            _this.model.edificio = '1';
            _this.edificioChanged();
        });
    };
    SalasComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    SalasComponent.prototype.edificioChanged = function () {
        var _this = this;
        var url = this.apiconnector.getPisosEdificio;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('block', this.model.edificio);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["b" /* options */]);
            _this.pisos = res['data']['floors']['data'];
            _this.model.piso = 'null';
            _this.loader = false;
            _this.loaderService.hide();
        });
    };
    SalasComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loaderService.show();
        var url = this.apiconnector.getLugaresDisponiveis;
        var data = new FormData();
        this.token = data.append('userTokenId', this._cookieService.get('token'));
        data.append('block', this.model.edificio);
        data.append('floor', this.model.piso);
        this.apiconnector.postData(url, data).subscribe(function (res) {
            _this.respVal.validate(res);
            console.log('res', res);
            _this._cookieService.put('token', res['data']['token'], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["b" /* options */]);
            console.log('cenas', res['data']['availableRooms']['data']);
            _this.extractData(res['data']['availableRooms']);
            _this.loaderService.hide();
        });
    };
    SalasComponent.prototype.extractData = function (myDataArray) {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.salasDisponiveis = myDataArray.data || {};
            _this.dtTrigger.next();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], SalasComponent.prototype, "dtElement", void 0);
    SalasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-salas',
            template: __webpack_require__("./src/app/salas/salas.component.html"),
            styles: [__webpack_require__("./src/app/salas/salas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ngx_cookie__["b" /* CookieService */], __WEBPACK_IMPORTED_MODULE_1__service_apiconnector_service__["a" /* APIConnectorService */], __WEBPACK_IMPORTED_MODULE_4__loader_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__service_response_status_validator_service__["a" /* ResponseStatusValidatorService */]])
    ], SalasComponent);
    return SalasComponent;
}());



/***/ }),

/***/ "./src/app/service/apiconnector.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIConnectorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return options; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var APIConnectorService = /** @class */ (function () {
    function APIConnectorService(http) {
        this.http = http;
        this.baseURL = 'https://api.cafcul.hugocurado.info/';
        // USER Routes
        this.loginPOST = this.baseURL + 'user/login';
        this.logoutPOST = this.baseURL + 'user/logout';
        this.isloggedinPOST = this.baseURL + 'user/isloggedin';
        this.existsPOST = this.baseURL + 'user/exists';
        this.retriveprofilePOST = this.baseURL + 'user/retriveprofile';
        // ADMIN Routes
        this.changeType = this.baseURL + 'user/changeType';
        this.getPessoasEspaco = this.baseURL + 'spaces/getPeopleNumerInSpace';
        this.getLugaresDisponiveis = this.baseURL + 'general/availableSpaces';
        this.getEdificios = this.baseURL + 'general/getFacultyBlocks';
        this.getPisosEdificio = this.baseURL + 'general/getBlockFloors';
        this.getSalasPisos = this.baseURL + 'general/getFloorsRooms';
        this.getAulas = this.baseURL + 'teacher/classes';
        this.getDatasAulas = this.baseURL + 'teacher/class/dates/';
        this.getAlunosNomesAulas = this.baseURL + 'teacher/class/students/';
        this.getAlunosAulas = this.baseURL + 'teacher/course/getStudentsAttendance';
        this.getAulasDeUmAluno = this.baseURL + 'teacher/individual/getStudentsAttendance';
        this.changeAulasDeUmAluno = this.baseURL + 'teacher/individual/changeStudentsAttendance';
        this.newAcidente = this.baseURL + 'accident/new';
        this.getAcidenteAll = this.baseURL + 'accident/getAll';
        this.getAcidenteOthers = this.baseURL + 'accident/getOthers';
        this.historico = this.baseURL + 'history/user';
        this.presencas = this.baseURL + 'presencas';
    }
    APIConnectorService.prototype.getDATA = function (URL) { };
    APIConnectorService.prototype.loginPost = function (idToken) {
        var url = this.loginPOST;
        var data = new FormData();
        data.append('idToken', idToken);
        return this.http.post(url, data)
            .map(function (res) { return res; }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    };
    APIConnectorService.prototype.postData = function (url, data) {
        return this.http.post(url, data)
            .map(function (res) { return res; }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
        /*}).subscribe(res => {
          console.log('resposta', res);
        });*/
    };
    APIConnectorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], APIConnectorService);
    return APIConnectorService;
}());

var options = {
    path: '/',
    domain: 'cafcul.hugocurado.info',
    // domain: 'localhost',
    expires: new Date('2018-06-27'),
    secure: false,
    httpOnly: true,
    storeUnencoded: false
};


/***/ }),

/***/ "./src/app/service/response-status-validator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseStatusValidatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__("./src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts_alert_service__ = __webpack_require__("./src/app/alerts/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponseStatusValidatorService = /** @class */ (function () {
    function ResponseStatusValidatorService(authService, alertService) {
        this.authService = authService;
        this.alertService = alertService;
    }
    ResponseStatusValidatorService.prototype.validate = function (Resp) {
        var _this = this;
        var code = Resp['code'];
        switch (code) {
            case 401: {
                // alert('Sessao expirada 401');
                this.alertService.show('Sessao expirada, vai ser redirecionado para login.', 'danger');
                setTimeout(function () { _this.authService.logout(); }, 3500);
                break;
            }
            case 403: {
                // alert('Sem Permissão 403');
                this.alertService.show('Erro 403', 'danger');
                // setTimeout(() => { this.authService.logout(); }, 3500);
                break;
            }
            case 405: {
                // alert('Post informção errada 405');
                this.alertService.show('Informação errada 405', 'danger');
                break;
            }
            case 500: {
                // alert('Erro 500');
                this.alertService.show('Erro 500', 'danger');
                // setTimeout(() => { this.authService.logout(); }, 3500);
                break;
            }
        }
    };
    ResponseStatusValidatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__alerts_alert_service__["a" /* AlertService */]])
    ], ResponseStatusValidatorService);
    return ResponseStatusValidatorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCzEvV1EmMZaQNWn71tT0dXyrLBRIID4_Y",
        authDomain: "fcul-projetofinal-1718.firebaseapp.com",
        databaseURL: "https://fcul-projetofinal-1718.firebaseio.com",
        projectId: "fcul-projetofinal-1718",
        storageBucket: "fcul-projetofinal-1718.appspot.com",
        messagingSenderId: "810810282216"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map