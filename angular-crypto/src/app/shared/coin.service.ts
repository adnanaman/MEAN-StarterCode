import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import { Coin } from "./coin.model";

@Injectable()
export class CoinService {
  selectedCoin: Coin;
  coins: Coin[];
  baseUrl = "http://localhost:3100/coins";
  constructor(private http: HttpClient) {}

  addCoin(coin: Coin) {
    return this.http.post(this.baseUrl, coin);
  }
  getCoins() {
    return this.http.get(this.baseUrl + "/list");
  }

  updateCoin(coin: Coin) {
    return this.http.put(this.baseUrl + "/" + coin._id, coin);
  }

  deleteCoin(coin: Coin) {
    return this.http.delete(this.baseUrl + "/" + coin._id);
  }
}
