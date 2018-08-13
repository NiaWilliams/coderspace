//item 1 - backpack
/*<![CDATA[*/
(function() {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    }
    else {
      loadScript();
    }
  }
  else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  /* global ShopifyBuy */
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

//t shirt
/*<![CDATA[*/
(function() {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    }
    else {
      loadScript();
    }
  }
  else {
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

// tote bag
/*<![CDATA[*/
(function() {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    }
    else {
      loadScript();
    }
  }
  else {
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

var myVar;

function myFunction() {
   myVar = setTimeout(showPage, 1300);
}

function showPage() {
 document.getElementById("Loader").style.display = "none";
 document.getElementById("myDiv").style.display = "block";
}