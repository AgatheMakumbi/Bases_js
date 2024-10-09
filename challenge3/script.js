"use strict";
const register = [
    {
      tableID: 0,
      orders: [
        {
          item: "coffee",
          qty: 3,
          price: 3.5
        },
        {
          item: "salad", 
          qty: 3,
          price: 8
        },
        {
          item: "steak",
          qty: 3,
          price: 28
        },
        {
          item: "ice cream",
          qty: 3,
          price: 5
        }
      ]
    },
    {
      tableID: 1,
      orders: [
        {
          item: "coffee",
          qty: 2,
          price: 3.5
        },
        {
          item: "salad",
          qty: 2,
          price: 8
        },
        {
          item: "steak",
          qty: 2,
          price: 28
        },
        {
          item: "ice cream",
          qty: 2,
          price: 5
        }
      ]
    }
  ];

  /* cette fonction va me retourner le total de la table. Pour chaque order (index courante du tableau order) elle va multiplier la quantité (order.qty)* le prix (order.price) et va mettre ça dans la varible total (l'accumulateur). La variable total va accumuler le résultat de chaque order et ainsi me donner le total que la table va payer. */
  function getSubtotal(table){
   
   return table.orders.reduce(function(total,order){
    return total+ (order.qty * order.price);
   }, 0); // le zéro est la valeurInitiale
    
  }
  function calcPercentage( tableTotal, percentage){
    return parseFloat((tableTotal * percentage/100).toFixed(2));
  }
  function createBill(restaurant, nbpersonne){
    let bill= [];
    for (const table of restaurant) {
        let ntable = table.tableID;
        let subtotal= getSubtotal(table);
        let tax= calcPercentage(getSubtotal(table),8.1);
        let tip= calcPercentage(getSubtotal(table),10);
        let total=  (subtotal+tax+tip);
        let amountEach = (total/nbpersonne).toFixed(2);

       
        bill.push( {
        tableID: ntable,
        subtotal: subtotal,
        tax: tax,
        tip: tip,
        total: "CHF " +total,
        amountEach: amountEach,

       });
       
       
       
    }
     return bill;
   
  }

  

  
  console.log(createBill(register,7));