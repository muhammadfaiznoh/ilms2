import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ItemService } from '../../services/item-service';

/**
 * Generated class for the ModalQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-qr',
  templateUrl: 'modal-qr.html',
})
export class ModalQrPage {

  createdCode = null;
 
  public item: any;
  constructor(public nav: NavController, public viewCtrl: ViewController,public itemService: ItemService, public navParams: NavParams) {
    this.item= navParams.get('item'); 
 
    this.createdCode = "ID123456";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalQrPage');
  }
  closeModal() {
    this.viewCtrl.dismiss(true);
  }

}
