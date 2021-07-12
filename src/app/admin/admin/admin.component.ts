import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from "../../models/book.model";
import {BookService} from "../../services/book.service";
import {BookComponent} from "../book/book.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  bookList: Array<Book> = [];
  selectedBook: Book = new Book();
  errorMessage: string = "";

  @ViewChild(BookComponent) child: BookComponent | undefined;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.bookList = data;
    });
  }

  createBookRequest() {
    this.selectedBook = new Book();
    this.child?.showBookModal();
  }

  editBookRequest(item: Book) {
    this.selectedBook = Object.assign({}, item);
    this.child?.showBookModal();
  }

  saveBookWatcher(book: Book) {
    let itemIndex = this.bookList.findIndex(item => item.id === book.id);
    if (itemIndex !== -1) {
      this.bookList[itemIndex] = book;
    } else {
      this.bookList.push(book);
    }
  }

  deleteBook(item: Book, ind: number) {
    this.bookService.deleteBook(item).subscribe(data => {
      this.bookList.splice(ind, 1);
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }

}
