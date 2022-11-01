// function initPayPalButton() {
//     paypal.Buttons({
//       style: {
//         shape: 'rect',
//         color: 'gold',
//         layout: 'vertical',
//         // label: 'buynow',
        
//       },

//       createOrder: function(data, actions) {
//         return actions.order.create({
//           purchase_units: [{"amount":{"currency_code":"CAD","value":25}}]
//         });
//       },

//       onApprove: function(data, actions) {
//         return actions.order.capture().then(function(orderData) {
          
//           // Full available details
//           console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

//           // Show a success message within this page, e.g.
//           const element = document.getElementById('paypal-button-container');
//           element.innerHTML = '';
//           element.innerHTML = '<h3>Thank you for your payment!</h3>';

//           // Or go to another URL:  actions.redirect('thank_you.html');
          
//         });
//       },

//       onError: function(err) {
//         console.log(err);
//       }
//     }).render('#paypal-button-container');
//   }
//   initPayPalButton();

paypal.Buttons({
    createOrder: (data, actions) => {
        return actions.order.create({
           "purchase_units": [{
              "amount": {
                "currency_code": "CAD",
                "value": "25",
                "breakdown": {
                  "item_total": {  /* Required when including the items array */
                    "currency_code": "CAD",
                    "value": "25"
                  }
                }
              },
              "items": [
                {
                  "name": "First Product Name", /* Shows within upper-right dropdown during payment approval */
                  "description": "Optional descriptive text..", /* Item details will also be in the completed paypal.com transaction view */
                  "unit_amount": {
                    "currency_code": "CAD",
                    "value": "50"
                  },
                  "quantity": "2"
                },
              ]
            }]
        });
      },
      onApprove: (data, actions) => {

        return actions.order.capture().then(function(orderData) {

          // Successful capture! For dev/demo purposes:

          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          const transaction = orderData.purchase_units[0].payments.captures[0];

          alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);

          // When ready to go live, remove the alert and show a success message within this page. For example:

          // const element = document.getElementById('paypal-button-container');

          // element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('thank_you.html');

        });

      }
}).render('#paypal-button-container');