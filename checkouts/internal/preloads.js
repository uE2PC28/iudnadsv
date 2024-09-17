
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/polyfills-legacy.5dyzc7HC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/app-legacy.DrjQ5KAW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedContact-legacy.DT77xsMD.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DeliveryMethodSelectorSection-legacy.Ddh0SOVx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PurchaseOptionsAgreement-legacy.CU_D-cjy.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedDeliveryAddress-legacy.vK0bQee6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Rollup-legacy.QJQgFjNq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useUnauthenticatedErrorModal-legacy.B7Om7jLY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShopPayLogo-legacy.DdcAgqOl.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Option-legacy.uFYWn_JL.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PickupPointCarrierLogo-legacy.BjRAjeBv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/hooks-legacy.C71z6dpp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/LegacyVaultedShippingMethods-legacy.Bo4bUWyx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/OnePageModal-legacy.Bk6no7kC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useSessionExchange-legacy.CXMyANr9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useGetUlcFrameUri-legacy.ClEo2kVU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useShowShopPayOptin-legacy.BTdU1su_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Section-legacy.k85XV9yN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/google-pay-legacy.BBCRoXry.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PayButtonSection-legacy.BpW6NlxG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/context-legacy.CFJfAqbn.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/constants-legacy.BASWIkGN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ButtonWithRegisterWebPixel-legacy.BLF8MIOd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/NoAddressLocationFullDetour-legacy.D8_JgRsX.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DutyOptions-legacy.DtMlqvkT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/SubscriptionPriceBreakdown-legacy.CNvG0CUC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/StockProblemsLineItemList-legacy.CMLh8_I0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/component-ShopPayVerificationSwitch-legacy.JWfEPx3u.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  