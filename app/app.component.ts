import {
    Component
} from '@angular/core';

class Todo {
    constructor(
        public name: string,
        public surname: string,
        public patronymic: string,
        public date: string,
        public email: string,
        public position: string,
        public tel: string,
        public adress: string,
        public numbere: string) {}
}
const todos:Todo[] = [];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['../app/styles/css/style.css']

})
export class AppComponent {
    todos:Todo[] = todos;
    newName: string = '';
    newSurname: string = '';
    newPatronymic: string = '';
    newDate: string = '';
    newEmail: string = '';
    newPosition: string = '';
    newTel: string = '';
    newAdress: string = '';
    newNumber: string = '';
    visibility: boolean = true;
    index: number = 0;
    fix: boolean = false;
    change: boolean = true;
    tableEvent = 'auto';
    del() {
        //alert(this.index);
        this.fix = !this.fix;

        //this.visibility=!this.visibility;

        this.todos.splice(this.index, 1);


    }
    exit() {

        this.fix = !this.fix;

    }
    toggle(todo: Todo) {
        this.fix = !this.fix;

        this.index = this.todos.indexOf(todo);

    }
    create() {
        let todo: Todo = new Todo(this.newName, this.newSurname, this.newPatronymic, this.newDate, this.newEmail, this.newPosition, this.newTel, this.newAdress, this.newNumber);
        this.todos.push(todo);

    }
    edit(todo:any) {
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

    }
    save() {
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

    }

}
