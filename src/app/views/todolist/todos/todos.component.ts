import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../../services/todo.service';
import {Todo} from '../../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodohaha(todo: Todo) {
    console.log('delete me');
    // for the UI, to remove the list that has the same title
    // using filter
    // Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // for the server side
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodohaha(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
