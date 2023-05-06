// npx create-reat-app :

/// biz bu buyruq bilan rreac papka ochib olamiz .

/// va (--npx create-reat-app--)-dan kegin papkaa nimini yozib olishimiz kerak ;
//// papkani nomlashnixam o'zini qonunlari bor :
///// 1. papka nomi (--react--) bo'lmasligi kerak
///// 2. papka nomini bosh xarifi katta xarif bo'lmasligi kerak

// npm start :

/// (--npm start--) huddi html-daggi (--live server--)-ga o'xshaydi ;
/// uni terminalda yozganda reat papkamiz browserda ochib beradi ;
/// uni biz ochmoxchi bo'lgan papkaga kirib kegin yoziladi ;

// (--ReactJS--)-ni serveri 3000-localhost yuradi

// README.md :

/// proect qanday yurishi haqida malumot beradi ;
/// uni ichidagi malumotlarni istaganimizcha o'zgartirsag bo'ladi ;
/// biz uni o'chirib yuborsagxam umuman farqi yo'q. U faqat git hub-da umumiy malumot berish uchun ishlatiladi ;

// package.json :

/// mashinani tex pasportiga o'xshatsag bo'ladi ;

/// yani proect xaqida malumot, terminalda qanday kod yozish :
//// (--npm start--)-ni (--npm boshla--)-ga o'zgartirib qo'ysag bo'ladi ;

/// biz bilishimiz kerak bo'ladiganlari :

//// 1. dependencies :
///// proectga qaysi kutubxonalar o'rnatilgani ;

//// 2. scripts :
///// terminalda yoziladigan codelar : qanday yurg'izish, test qilish

// node_modules - bu kampyuter kanfiguratsiyasiga asoslangan papka :                                                                                   |

/// bu degani menni kapyuterimdagi node_modules boshqa odamni kapyuterimdagi node_modules-ga to'g'ri kelmasligini bildiradi ;                          |------node_modules-ni kamdan-kam xolatda o'zgartiriladi ;
/// @babel-react-da yozilgan kodlarini brauzer o'qiydigan ko'rinishga olib kelib beradi ;                                                              |

// src : ichida bir-nehta fayllar bor
/// birinchi proekt yurganida src-papka ichiga kiradi .
//// yani src-papka ichidan index.js-faylini qidiradi. Yani asosiy fayl bu index.js


// public :

/// biz src-da qilgan ishlarimizni yig'ib ketamiz ;
/// public-da juda-juda kam ishlatamiz. xamma qilinadigon ish (--src--)-da
/// uni ichida HTML-da fayl joylashgan ;

// nega react-ni (--single-page-application--) - deyiladi :
///chunki butun boshli react papkasida bitta HTML-fayl bo'ladi ;

// .gitignore :

/// .gitignore-da git hubga yuklashini mumkun bo'lmagan papka/fayllar yoziladi ;

/// ular :
//// 1. node_modules
//// 2. build

// virtual ReactDOM :

/// virtual ReactDOM : diffing alggaritimidan foidalanadi yani :
//// diffing alggaritimi :
//// ekranni qaysi malumot o'zgarganligini aniqlab-turib usha malumot turgan joyni o'zini update qilib beradi ;

// ReactDOM.render() :

/// bu metod ikkita qiymat qabul qiladi :

//// 1. HTML-element :
///// ReactDOM.render(<h1>Hi ReactJS</h1>)

//// 2. manzil :
///// yani pirinchi parametr qayerga bori joylashishi kerakligini aytadi ;

// jsx :

/// kengaymasi : javascript xml bo'lib :
//// HTML-da JavaScriptni, JavaScriptda HTML-ni ishlatishga yordam beradi ;

/// agar biz HTML-ichida JavaScript ko'dini ishlatmoxchi bo'lsag doim gullig qavs (--{ JavaScript code }--) ishlatishimiz kerak ;
