## CoolPay_Magento2

Module CoolPay\Payment implements integration with the CoolPay payment service provider.

Currently in beta release, use at your own risk. Pull requests welcome!

Coded and tested in Magento 2.1.2, compatibility with other versions has not been tested yet.

Implemented so far:
* Authorize
* Capture 
* Partial Capture
* Refund
* Partial Refund
* Cancel
* Payment Fees

### Installation
```
composer require coolpay/magento2
php bin/magento module:enable CoolPay_Payment
php bin/magento setup:upgrade
php bin/magento setup:di:compile
``` 

**Please note that FTP installation will not work as this module has requirements that will be auto installed when using composer**
