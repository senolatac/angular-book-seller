export class Purchase {
  id: number | undefined;
  userId: number | undefined;
  bookId: number | undefined;
  price: number | undefined;
  purchaseTime: Date = new Date();

  constructor(userId?: number, bookId?: number, price?: number) {
    this.userId = userId;
    this.bookId = bookId;
    this.price = price;
  }
}
