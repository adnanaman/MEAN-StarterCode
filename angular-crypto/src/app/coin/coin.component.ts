import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { CoinService } from "../shared/coin.service";
import { Coin } from "../shared/coin.model";

@Component({
  selector: "app-coin",
  templateUrl: "./coin.component.html",
  styleUrls: ["./coin.component.less"],
  providers: [CoinService]
})
export class CoinComponent implements OnInit {
  constructor(private coinService: CoinService) {}

  ngOnInit() {
    this.coinService.selectedCoin = {
      _id: "",
      name: "",
      code: "",
      supply: "",
      price: 0
    };

    this.refreshList();
  }

  onSubmit(form: NgForm) {
    console.log(form.value._id);
    if (form.value._id == "") {
      this.coinService.addCoin(form.value).subscribe(res => {
        this.coinService.selectedCoin = {
          _id: "",
          name: "",
          code: "",
          supply: "",
          price: 0
        };

        this.refreshList();
      });
    } else {
      this.coinService.updateCoin(form.value).subscribe(res => {
        this.coinService.selectedCoin = {
          _id: "",
          name: "",
          code: "",
          supply: "",
          price: 0
        };
        this.refreshList();
      });
    }
  }

  refreshList() {
    this.coinService.getCoins().subscribe(res => {
      this.coinService.coins = res as Coin[];
    });
  }

  editCoin(coin: Coin) {
    console.log(coin._id);
    this.coinService.selectedCoin = coin;
  }

  delCoin(coin: Coin) {
    if (confirm("are you sure, you wants to delete") == true) {
      this.coinService.deleteCoin(coin).subscribe(res => {
        this.refreshList();
        this.coinService.selectedCoin = {
          _id: "",
          name: "",
          code: "",
          supply: "",
          price: 0
        };
      });
    }
  }
}
