define(
    [
        'Magento_Checkout/js/view/payment/default',
        'CoolPay_Payment/js/action/redirect-on-success'
    ],
    function (Component, coolpayRedirect) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'CoolPay_Payment/payment/form',
                paymentReady: false
            },
            redirectAfterPlaceOrder: false,

            /**
             * @return {exports}
             */
            initObservable: function () {
                this._super()
                    .observe('paymentReady');

                return this;
            },

            /**
             * @return {*}
             */
            isPaymentReady: function () {
                return this.paymentReady();
            },

            getCode: function() {
                return 'coolpay';
            },
            getData: function() {
                return {
                    'method': this.item.method,
                };
            },
            afterPlaceOrder: function() {
                coolpayRedirect.execute();
            }
        });
    }
);