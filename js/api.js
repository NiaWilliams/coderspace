// //stripe
// 'use strict';
// var stripe = Stripe('pk_test_1mUYabOqDa27wuLOlWVWKt5x');

// function registerElements(elements, exampleName) {
//   var formClass = '.' + exampleName;
//   var example = document.querySelector(formClass);

//   var form = example.querySelector('form');
//   var resetButton = example.querySelector('a.reset');
//   var error = form.querySelector('.error');
//   var errorMessage = error.querySelector('.message');

//   function enableInputs() {
//     Array.prototype.forEach.call(
//       form.querySelectorAll(
//         "input[type='text'], input[type='email'], input[type='tel']"
//       ),
//       function(input) {
//         input.removeAttribute('disabled');
//       }
//     );
//   }

//   function disableInputs() {
//     Array.prototype.forEach.call(
//       form.querySelectorAll(
//         "input[type='text'], input[type='email'], input[type='tel']"
//       ),
//       function(input) {
//         input.setAttribute('disabled', 'true');
//       }
//     );
//   }

//   function triggerBrowserValidation() {
//     // The only way to trigger HTML5 form validation UI is to fake a user submit
//     // event.
//     var submit = document.createElement('input');
//     submit.type = 'submit';
//     submit.style.display = 'none';
//     form.appendChild(submit);
//     submit.click();
//     submit.remove();
//   }

//   // Listen for errors from each Element, and show error messages in the UI.
//   var savedErrors = {};
//   elements.forEach(function(element, idx) {
//     element.on('change', function(event) {
//       if (event.error) {
//         error.classList.add('visible');
//         savedErrors[idx] = event.error.message;
//         errorMessage.innerText = event.error.message;
//       } else {
//         savedErrors[idx] = null;

//         // Loop over the saved errors and find the first one, if any.
//         var nextError = Object.keys(savedErrors)
//           .sort()
//           .reduce(function(maybeFoundError, key) {
//             return maybeFoundError || savedErrors[key];
//           }, null);

//         if (nextError) {
//           // Now that they've fixed the current error, show another one.
//           errorMessage.innerText = nextError;
//         } else {
//           // The user fixed the last error; no more errors.
//           error.classList.remove('visible');
//         }
//       }
//     });
//   });

//   // Listen on the form's 'submit' handler...
//   form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     // Trigger HTML5 validation UI on the form if any of the inputs fail
//     // validation.
//     var plainInputsValid = true;
//     Array.prototype.forEach.call(form.querySelectorAll('input'), function(
//       input
//     ) {
//       if (input.checkValidity && !input.checkValidity()) {
//         plainInputsValid = false;
//         return;
//       }
//     });
//     if (!plainInputsValid) {
//       triggerBrowserValidation();
//       return;
//     }

//     // Show a loading screen...
//     example.classList.add('submitting');

//     // Disable all inputs.
//     disableInputs();

//     // Gather additional customer data we may have collected in our form.
//     var name = form.querySelector('#' + exampleName + '-name');
//     var address1 = form.querySelector('#' + exampleName + '-address');
//     var city = form.querySelector('#' + exampleName + '-city');
//     var state = form.querySelector('#' + exampleName + '-state');
//     var zip = form.querySelector('#' + exampleName + '-zip');
//     var additionalData = {
//       name: name ? name.value : undefined,
//       address_line1: address1 ? address1.value : undefined,
//       address_city: city ? city.value : undefined,
//       address_state: state ? state.value : undefined,
//       address_zip: zip ? zip.value : undefined,
//     };

//     // Use Stripe.js to create a token. We only need to pass in one Element
//     // from the Element group in order to create a token. We can also pass
//     // in the additional customer data we collected in our form.
//     stripe.createToken(elements[0], additionalData).then(function(result) {
//       // Stop loading!
//       example.classList.remove('submitting');

//       if (result.token) {
//         // If we received a token, show the token ID.
//         example.querySelector('.token').innerText = result.token.id;
//         example.classList.add('submitted');
//       } else {
//         // Otherwise, un-disable inputs.
//         enableInputs();
//       }
//     });
//   });

//   resetButton.addEventListener('click', function(e) {
//     e.preventDefault();
//     // Resetting the form (instead of setting the value to `''` for each input)
//     // helps us clear webkit autofill styles.
//     form.reset();

//     // Clear each Element.
//     elements.forEach(function(element) {
//       element.clear();
//     });

//     // Reset error state as well.
//     error.classList.remove('visible');

//     // Resetting the form does not un-disable inputs, so we need to do it separately:
//     enableInputs();
//     example.classList.remove('submitted');
//   });
// }
// (function() {
//   "use strict";

//   var elements = stripe.elements({
//     // Stripe's examples are localized to specific languages, but if
//     // you wish to have Elements automatically detect your user's locale,
//     // use `locale: 'auto'` instead.
//     locale: window.__exampleLocale
//   });

//   /**
//   * Card Element
//   */
//   var card = elements.create("card", {
//     iconStyle: "solid",
//     style: {
//       base: {
//         iconColor: "#fff",
//         color: "#fff",
//         fontWeight: 400,
//         fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
//         fontSize: "16px",
//         fontSmoothing: "antialiased",

//         "::placeholder": {
//           color: "#676868"
//         },
//         ":-webkit-autofill": {
//           color: "#fce883"
//         }
//       },
//       invalid: {
//         iconColor: "#FFC7EE",
//         color: "#FFC7EE"
//       }
//     }
//   });
//   card.mount("#example5-card");

//   /**
//   * Payment Request Element---how much they pay
//   */
//   var paymentRequest = stripe.paymentRequest({
//     country: "US",
//     currency: "usd",
//     total: {
//       amount: 2500,
//       label: "Total"
//     },
//     requestShipping: true,
//     shippingOptions: [
//       {
//         id: "free-shipping",
//         label: "Free shipping",
//         detail: "Arrives in 5 to 7 days",
//         amount: 0
//       }
//     ]
//   });
//   paymentRequest.on("token", function(result) {
//     var example = document.querySelector(".example5");
//     example.querySelector(".token").innerText = result.token.id;
//     example.classList.add("submitted");
//     result.complete("success");
//   });

//   var paymentRequestElement = elements.create("paymentRequestButton", {
//     paymentRequest: paymentRequest,
//     style: {
//       paymentRequestButton: {
//         theme: "light"
//       }
//     }
//   });

//   paymentRequest.canMakePayment().then(function(result) {
//     if (result) {
//       document.querySelector(".example5 .card-only").style.display = "none";
//       document.querySelector(
//         ".example5 .payment-request-available"
//       ).style.display =
//         "block";
//       paymentRequestElement.mount("#example5-paymentRequest");
//     }
//   });

//   registerElements([card], "example5");
// })();

//item 1
  /*<![CDATA[*/
  (function() {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'coderspace-org.myshopify.com',
        apiKey: 'd9de0ac53831dce8421ceff79f16b854',
        appId: '6',
      });
      ShopifyBuy.UI.onReady(client).then(function(ui) {
        ui.createComponent('product', {
          id: [1321650323527],
          node: document.getElementById('product-component-1533060389415'),
          moneyFormat: '${{amount}}',
          options: {
            "product": {
              "variantId": "all",
              "width": "240px",
              "contents": {
                "imgWithCarousel": false,
                "variantTitle": false,
                "description": false,
                "buttonWithQuantity": false,
                "quantity": false
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  "background-color": "#74c8c0",
                  "font-family": "Roboto, sans-serif",
                  ":hover": {
                    "background-color": "#68b4ad"
                  },
                  ":focus": {
                    "background-color": "#68b4ad"
                  },
                  "font-weight": "normal"
                },
                "variantTitle": {
                  "font-family": "Roboto, sans-serif",
                  "color": "#ffffff",
                  "font-weight": "normal"
                },
                "title": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal",
                  "color": "#ffffff"
                },
                "description": {
                  "color": "#ffffff",
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "price": {
                  "font-family": "Roboto, sans-serif",
                  "color": "#ffffff",
                  "font-weight": "normal"
                },
                "compareAt": {
                  "font-size": "12px",
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal",
                  "color": "#ffffff"
                }
              },
              "googleFonts": ["Roboto", "Roboto", "Roboto", "Roboto", "Roboto", "Roboto"]
            },
            "cart": {
              "contents": {
                "button": true
              },
              "styles": {
                "cart": {
                  "background-color": "#e5e5e5"
                },
                "button": {
                  "background-color": "#74c8c0",
                  "font-family": "Roboto, sans-serif",
                  ":hover": {
                    "background-color": "#68b4ad"
                  },
                  ":focus": {
                    "background-color": "#68b4ad"
                  },
                  "font-weight": "normal"
                },
                "title": {
                  "color": "#000000"
                },
                "footer": {
                  "background-color": "#e5e5e5"
                },
                "header": {
                  "color": "#000000"
                },
                "lineItems": {
                  "color": "#000000"
                },
                "subtotalText": {
                  "color": "#000000"
                },
                "subtotal": {
                  "color": "#000000"
                },
                "notice": {
                  "color": "#000000"
                },
                "currency": {
                  "color": "#000000"
                },
                "close": {
                  ":hover": {
                    "color": "#000000"
                  },
                  "color": "#000000"
                },
                "emptyCart": {
                  "color": "#000000"
                }
              },
              "googleFonts": ["Roboto"]
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "variantTitle": false,
                "buttonWithQuantity": true,
                "button": false,
                "quantity": false
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "background-color": "#74c8c0",
                  "font-family": "Roboto, sans-serif",
                  ":hover": {
                    "background-color": "#68b4ad"
                  },
                  ":focus": {
                    "background-color": "#68b4ad"
                  },
                  "font-weight": "normal"
                },
                "variantTitle": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "title": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "description": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "price": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "compareAt": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                }
              },
              "googleFonts": ["Roboto", "Roboto", "Roboto", "Roboto", "Roboto", "Roboto"]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Roboto, sans-serif",
                  "background-color": "#74c8c0",
                  ":hover": {
                    "background-color": "#68b4ad"
                  },
                  ":focus": {
                    "background-color": "#68b4ad"
                  },
                  "font-weight": "normal"
                }
              },
              "googleFonts": ["Roboto"]
            },
            "option": {
              "styles": {
                "label": {
                  "font-family": "Roboto, sans-serif"
                },
                "select": {
                  "font-family": "Roboto, sans-serif"
                }
              },
              "googleFonts": ["Roboto", "Roboto"]
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "lineItem": {
              "styles": {
                "variantTitle": {
                  "color": "#000000"
                },
                "title": {
                  "color": "#000000"
                },
                "price": {
                  "color": "#000000"
                },
                "quantity": {
                  "color": "#000000"
                },
                "quantityIncrement": {
                  "color": "#000000",
                  "border-color": "#000000"
                },
                "quantityDecrement": {
                  "color": "#000000",
                  "border-color": "#000000"
                },
                "quantityInput": {
                  "color": "#000000",
                  "border-color": "#000000"
                }
              }
            }
          },
        });
      });
    }
  })();
  /*]]>*/
  
//item 2
  /*<![CDATA[*/
  (function() {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'coderspace-org.myshopify.com',
        apiKey: 'd9de0ac53831dce8421ceff79f16b854',
        appId: '6',
      });
      ShopifyBuy.UI.onReady(client).then(function(ui) {
        ui.createComponent('product', {
          id: [1318375325767],
          node: document.getElementById('product-component-1533060464974'),
          moneyFormat: '${{amount}}',
          options: {
            "product": {
              "variantId": "all",
              "width": "240px",
              "contents": {
                "imgWithCarousel": false,
                "variantTitle": false,
                "description": false,
                "buttonWithQuantity": false,
                "quantity": false
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  "background-color": "#74c8c0",
                  "font-family": "Roboto, sans-serif",
                  ":hover": {
                    "background-color": "#68b4ad"
                  },
                  ":focus": {
                    "background-color": "#68b4ad"
                  },
                  "font-weight": "normal"
                },
                "variantTitle": {
                  "font-family": "Roboto, sans-serif",
                  "color": "#ffffff",
                  "font-weight": "normal"
                },
                "title": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal",
                  "color": "#ffffff"
                },
                "description": {
                  "color": "#ffffff",
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "price": {
                  "font-family": "Roboto, sans-serif",
                  "color": "#ffffff",
                  "font-weight": "normal"
                },
                "compareAt": {
                  "font-size": "12px",
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal",
                  "color": "#ffffff"
                }
              },
              "googleFonts": ["Roboto", "Roboto", "Roboto", "Roboto", "Roboto", "Roboto"]
            },
            "cart": {
              "contents": {
                "button": true
              },
              "styles": {
                "cart": {
                  "background-color": "#e5e5e5"
                },
                "button": {
                  "background-color": "#74c8c0",
                  "font-family": "Roboto, sans-serif",
                  ":hover": {
                    "background-color": "#68b4ad"
                  },
                  ":focus": {
                    "background-color": "#68b4ad"
                  },
                  "font-weight": "normal"
                },
                "title": {
                  "color": "#000000"
                },
                "footer": {
                  "background-color": "#e5e5e5"
                },
                "header": {
                  "color": "#000000"
                },
                "lineItems": {
                  "color": "#000000"
                },
                "subtotalText": {
                  "color": "#000000"
                },
                "subtotal": {
                  "color": "#000000"
                },
                "notice": {
                  "color": "#000000"
                },
                "currency": {
                  "color": "#000000"
                },
                "close": {
                  ":hover": {
                    "color": "#000000"
                  },
                  "color": "#000000"
                },
                "emptyCart": {
                  "color": "#000000"
                }
              },
              "googleFonts": ["Roboto"]
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "variantTitle": false,
                "buttonWithQuantity": true,
                "button": false,
                "quantity": false
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "background-color": "#74c8c0",
                  "font-family": "Roboto, sans-serif",
                  ":hover": {
                    "background-color": "#68b4ad"
                  },
                  ":focus": {
                    "background-color": "#68b4ad"
                  },
                  "font-weight": "normal"
                },
                "variantTitle": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "title": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "description": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "price": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "compareAt": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                }
              },
              "googleFonts": ["Roboto", "Roboto", "Roboto", "Roboto", "Roboto", "Roboto"]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Roboto, sans-serif",
                  "background-color": "#74c8c0",
                  ":hover": {
                    "background-color": "#68b4ad"
                  },
                  ":focus": {
                    "background-color": "#68b4ad"
                  },
                  "font-weight": "normal"
                }
              },
              "googleFonts": ["Roboto"]
            },
            "option": {
              "styles": {
                "label": {
                  "font-family": "Roboto, sans-serif"
                },
                "select": {
                  "font-family": "Roboto, sans-serif"
                }
              },
              "googleFonts": ["Roboto", "Roboto"]
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "lineItem": {
              "styles": {
                "variantTitle": {
                  "color": "#000000"
                },
                "title": {
                  "color": "#000000"
                },
                "price": {
                  "color": "#000000"
                },
                "quantity": {
                  "color": "#000000"
                },
                "quantityIncrement": {
                  "color": "#000000",
                  "border-color": "#000000"
                },
                "quantityDecrement": {
                  "color": "#000000",
                  "border-color": "#000000"
                },
                "quantityInput": {
                  "color": "#000000",
                  "border-color": "#000000"
                }
              }
            }
          },
        });
      });
    }
  })();
  /*]]>*/
  
// item 3
/*<![CDATA[*/
    (function() {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'coderspace-org.myshopify.com',
          apiKey: 'd9de0ac53831dce8421ceff79f16b854',
          appId: '6',
        });
        ShopifyBuy.UI.onReady(client).then(function(ui) {
          ui.createComponent('product', {
            id: [1321691709511],
            node: document.getElementById('product-component-1533060495762'),
            moneyFormat: '${{amount}}',
            options: {
              "product": {
                "variantId": "all",
                "width": "240px",
                "contents": {
                  "imgWithCarousel": false,
                  "variantTitle": false,
                  "description": false,
                  "buttonWithQuantity": false,
                  "quantity": false
                },
                "styles": {
                  "product": {
                    "@media (min-width: 601px)": {
                      "max-width": "100%",
                      "margin-left": "0",
                      "margin-bottom": "50px"
                    }
                  },
                  "button": {
                    "background-color": "#74c8c0",
                    "font-family": "Roboto, sans-serif",
                    ":hover": {
                      "background-color": "#68b4ad"
                    },
                    ":focus": {
                      "background-color": "#68b4ad"
                    },
                    "font-weight": "normal"
                  },
                  "variantTitle": {
                    "font-family": "Roboto, sans-serif",
                    "color": "#ffffff",
                    "font-weight": "normal"
                  },
                  "title": {
                    "font-family": "Roboto, sans-serif",
                    "font-weight": "normal",
                    "color": "#ffffff"
                  },
                  "description": {
                    "color": "#ffffff",
                    "font-family": "Roboto, sans-serif",
                    "font-weight": "normal"
                  },
                  "price": {
                    "font-family": "Roboto, sans-serif",
                    "color": "#ffffff",
                    "font-weight": "normal"
                  },
                  "compareAt": {
                    "font-size": "12px",
                    "font-family": "Roboto, sans-serif",
                    "font-weight": "normal",
                    "color": "#ffffff"
                  }
                },
                "googleFonts": ["Roboto", "Roboto", "Roboto", "Roboto", "Roboto", "Roboto"]
              },
              "cart": {
                "contents": {
                  "button": true
                },
                "styles": {
                  "cart": {
                    "background-color": "#e5e5e5"
                  },
                  "button": {
                    "background-color": "#74c8c0",
                    "font-family": "Roboto, sans-serif",
                    ":hover": {
                      "background-color": "#68b4ad"
                    },
                    ":focus": {
                      "background-color": "#68b4ad"
                    },
                    "font-weight": "normal"
                  },
                  "title": {
                    "color": "#000000"
                  },
                  "footer": {
                    "background-color": "#e5e5e5"
                  },
                  "header": {
                    "color": "#000000"
                  },
                  "lineItems": {
                    "color": "#000000"
                  },
                  "subtotalText": {
                    "color": "orange"
                },
                "subtotal": {
                  "color": "#000000"
                },
                "notice": {
                  "color": "#000000"
                },
                "currency": {
                  "color": "#000000"
                },
                "close": {
                  ":hover": {
                    "color": "#000000"
                  },
                  "color": "#000000"
                },
                "emptyCart": {
                  "color": "#000000"
                }
              },
              "googleFonts": ["Roboto"]
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "variantTitle": false,
                "buttonWithQuantity": true,
                "button": false,
                "quantity": false
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "background-color": "#74c8c0",
                  "font-family": "Roboto, sans-serif",
                  ":hover": {
                    "background-color": "#68b4ad"
                  },
                  ":focus": {
                    "background-color": "#68b4ad"
                  },
                  "font-weight": "normal"
                },
                "variantTitle": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "title": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "description": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "price": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                },
                "compareAt": {
                  "font-family": "Roboto, sans-serif",
                  "font-weight": "normal"
                }
              },
              "googleFonts": ["Roboto", "Roboto", "Roboto", "Roboto", "Roboto", "Roboto"]
            },
            "toggle": {
                "styles": {
                  "toggle": {
                    "font-family": "Roboto, sans-serif",
                    "background-color": "#74c8c0",
                    ":hover": {
                      "background-color": "#68b4ad"
                    },
                    ":focus": {
                      "background-color": "#68b4ad"
                    },
                    "font-weight": "normal"
                  }
                },
                "googleFonts": ["Roboto"]
              },
              "option": {
                "styles": {
                  "label": {
                    "font-family": "Roboto, sans-serif"
                  },
                  "select": {
                    "font-family": "Roboto, sans-serif"
                  }
                },
                  "googleFonts": ["Roboto", "Roboto"]
              },
              "productSet": {
                "styles": {
                  "products": {
                    "@media (min-width: 601px)": {
                      "margin-left": "-20px"
                    }
                  }
                }
              },
              "lineItem": {
                "styles": {
                  "variantTitle": {
                    "color": "#000000"
                  },
                  "title": {
                    "color": "#000000"
                  },
                  "price": {
                    "color": "#000000"
                  },
                  "quantity": {
                    "color": "#000000"
                  },
                    "quantityIncrement": {
                    "color": "#000000",
                    "border-color": "#000000"
                  },
                  "quantityDecrement": {
                    "color": "#000000",
                    "border-color": "#000000"
                  },
                  "quantityInput": {
                    "color": "#000000",
                    "border-color": "#000000"
                  }
                }
              }
            },
          });
        });
      }
    })();
    /*]]>*/