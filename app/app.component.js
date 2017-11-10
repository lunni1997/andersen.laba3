"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Todo = (function () {
    function Todo(name, surname, patronymic, date, email, position, tel, adress, numbere) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.date = date;
        this.email = email;
        this.position = position;
        this.tel = tel;
        this.adress = adress;
        this.numbere = numbere;
    }
    return Todo;
}());
var todos = [];
var AppComponent = (function () {
    function AppComponent() {
        this.todos = todos;
        this.newName = '';
        this.newSurname = '';
        this.newPatronymic = '';
        this.newDate = '';
        this.newEmail = '';
        this.newPosition = '';
        this.newTel = '';
        this.newAdress = '';
        this.newNumber = '';
        this.visibility = true;
        this.index = 0;
        this.fix = false;
        this.change = true;
        this.tableEvent = 'auto';
    }
    AppComponent.prototype.del = function () {
        //alert(this.index);
        this.fix = !this.fix;
        //this.visibility=!this.visibility;
        this.todos.splice(this.index, 1);
    };
    AppComponent.prototype.exit = function () {
        this.fix = !this.fix;
    };
    AppComponent.prototype.toggle = function (todo) {
        this.fix = !this.fix;
        this.index = this.todos.indexOf(todo);
    };
    AppComponent.prototype.create = function () {
        var todo = new Todo(this.newName, this.newSurname, this.newPatronymic, this.newDate, this.newEmail, this.newPosition, this.newTel, this.newAdress, this.newNumber);
        this.todos.push(todo);
    };
    AppComponent.prototype.edit = function (todo) {
        this.index = this.todos.indexOf(todo);
        this.newName = this.todos[this.index].name;
        this.newSurname = this.todos[this.index].surname;
        this.newPatronymic = this.todos[this.index].patronymic;
        this.newDate = this.todos[this.index].date;
        this.newEmail = this.todos[this.index].email;
        this.newPosition = this.todos[this.index].position;
        this.newTel = this.todos[this.index].tel;
        this.newAdress = this.todos[this.index].adress;
        this.newNumber = this.todos[this.index].numbere;
        this.change = false;
        this.tableEvent = 'none';
    };
    AppComponent.prototype.save = function () {
        this.todos[this.index].name = this.newName;
        this.todos[this.index].surname = this.newSurname;
        this.todos[this.index].patronymic = this.newPatronymic;
        this.todos[this.index].date = this.newDate;
        this.todos[this.index].email = this.newEmail;
        this.todos[this.index].position = this.newPosition;
        this.todos[this.index].tel = this.newTel;
        this.todos[this.index].adress = this.newAdress;
        this.todos[this.index].numbere = this.newNumber;
        this.change = true;
        this.tableEvent = 'auto';
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: 'app.component.html',
            styleUrls: ['../app/styles/css/style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map