import { LightningElement } from 'lwc';

export default class BillCalculatorComponent extends LightningElement 
{
  quantityValue;
  priceValue;
  discountValue;
  totalBillAmt;
  discountAmt;
  netBillAmt;

  onHandler(event)
  {
    const componentValue= event.target.value;
    const componentName = event.target.name;

    if(componentName == 'txtQuantity')
    {
      this.quantityValue = componentValue;
    }
    else if(componentName == 'txtPrice')
    {
      this.priceValue = componentValue;
    }
    else
    {
      this.discountValue = componentValue;
    }
  }

  billHandler()
  {
    this.totalBillAmt = parseInt(this.quantityValue) * parseInt(this.priceValue);

    this.discountAmt = (parseInt(this.totalBillAmt) * parseInt(this.discountValue)) / 100;

    this.netBillAmt = parseInt(this.totalBillAmt) - parseInt(this.discountAmt);
  }

}