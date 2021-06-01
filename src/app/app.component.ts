import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'api';

  constructor(private api: ApiService) {}
  movieName: any;
  movies: any = [];
  search: any = [];
  response;

  ngOnInit(): void {
    this.onClickSearch();
  }

  onClickSearch() {
    this.movies = this.api.getMovie(this.movieName).subscribe((res) => {
      console.log(res);
      this.movies = res;
      this.search = this.movies.Search;
      console.log(this.search);
      this.response = this.movies.Response;
    });
  }
}
