import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Book,q_libros} from '../types';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {
  libros: Observable<Book[]>;
  constructor(private apollo: Apollo) { }
  ngOnInit() {
    this.libros = this.apollo.watchQuery<q_libros>({
      query: gql`
        query q_libros{
          libros{
            id
            titulo
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => result.data.libros)
      );
  }
}
