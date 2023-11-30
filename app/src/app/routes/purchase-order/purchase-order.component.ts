import { Component } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal/public_api';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrl: './purchase-order.component.css'
})

export class PurchaseOrderComponent {

  
  public payPalConfig ?: IPayPalConfig;


  ngOnInit(): void {
    this.initConfig();
  }
    
  private initConfig(): void {
    this.payPalConfig = {
        currency: 'MXN',
        clientId: 'AY9Z7sVPUJzoVfLkqXgLfKIbxZ3iGEs7Ehr3ukOKOOOYEho19__rLoY4FZjxAhMUk19C7Bdqvwwhn4Rf',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'MXN',
                    value: '9.99',
                    breakdown: {
                        item_total: {
                            currency_code: 'MXN',
                            value: '9.99'
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'MXN',
                        value: '9.99',
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
        },
        onError: err => {
            console.log('OnError', err);
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        }
    };
}

}
