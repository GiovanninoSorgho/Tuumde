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
         purchase_units: [{
            amount: {
              // "currency_code": "CAD",
              // var tot = 32 * document.getElementsByClassName('unitaire');
              value: '32',
              // "breakdown": {
              //   "item_total": {  /* Required when including the items array */
              //     "currency_code": "CAD",
              //     "value": "25"
              //   }
              // }
            },
            // "items": [
            //   {
            //     "name": "First Product Name", /* Shows within upper-right dropdown during payment approval */
            //     "description": "Optional descriptive text..", /* Item details will also be in the completed paypal.com transaction view */
            //     "unit_amount": {
            //       "currency_code": "CAD",
            //       "value": "50"
            //     },
            //     "quantity": "2"
            //   },
            


            // ]
          }]
      });
    },
    onApprove: (data, actions) => {

      return actions.order.capture().then(function(details) {

        // Successful capture! For dev/demo purposes:

        // console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // const transaction = orderData.purchase_units[0].payments.captures[0];

        // alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
        // alert('Transaction effectuer avec succes par ' + details.payer.name.given_name);
        // alert(window.location.replace = "https://fr.w3docs.com/snippets/javascript/comment-rediriger-une-page-web-avec-javascript.html");

        // When ready to go live, remove the alert and show a success message within this page. For example:

        const element = document.getElementById('paypal-button-container');

        // element.innerHTML = '<h3>Thank you for your payment!</h3>';

        // Or go to another URL:  actions.redirect('thank_you.html');

        actions.redirect();
        window.location.replace("https://tuumde.com/thanks.html") ;

       
        // const element = document.getElementById('paypal-button-container');
        // element.window.location.replace = "https://fr.w3docs.com/snippets/javascript/comment-rediriger-une-page-web-avec-javascript.html";
        // element.innerHTML = '<h3>Thank you for your payment!</h3>';

      });

    }
}).render('#paypal-button-container');


  var incrementButton = document.getElementsByClassName('inc');
        var decrementButton = document.getElementsByClassName('dec');
        // console.log(incrementButton);
        // console.log(decrementButton);

        //INCREMENTATION
        for(var i = 0; i < incrementButton.length; i++)
        {
            var button = incrementButton[i];
            button.addEventListener('click', function(event){
                var buttonClicked = event.target;
                var input = buttonClicked.parentElement.children[2];
                var inputValue = input.value;
                var newValue = parseInt(inputValue) + 1;
                input.value = newValue;
            })        
        }

        //DECREMENTATION
        for(var i = 0; i < decrementButton.length; i++)
        {
            var button = decrementButton[i];
            button.addEventListener('click', function(event){
                var buttonClicked = event.target;
                var input = buttonClicked.parentElement.children[2];
                var inputValue = input.value;
                var newValue = parseInt(inputValue) - 1;

                if(newValue >= 0)
                {
                    input.value = newValue;
                }else{
                    input.value = 0;
                    // alert('Le nombre de ticket de peut-être inférieur à 0')
                }
                
            })        
        }

        var tot = 32 * inputValue;




// paypal.Buttons().render('paypal-button-container');