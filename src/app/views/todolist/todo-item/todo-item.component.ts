import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Todo} from '../../../models/Todo';
import {TodoService} from '../../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  // Set Dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

  // something happens when toggled
  onToggle(todo) {
    console.log('Toggled');
    // toggle in UI
    todo.completed = !todo.completed;
    // toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));
  }

  // something happens when deleted
  onDelete(todo) {
    console.log('Deleted');
    this.deleteTodo.emit(todo);
  }
}
