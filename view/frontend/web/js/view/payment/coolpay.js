define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'coolpay',
                component: 'CoolPay_Payment/js/view/payment/method-renderer/coolpay'
            }
        );
        return Component.extend({});
    }
);