// components :

/// components - JavaScriptdagi (--function--)-ga o'hshaydi ;
//// misol uchun bitta (--Nav-bar--)-nomli components yasb olsag o'sha Nav-bar - niboshqa joyda ishlatishimiz mumkun bo'ladi

/// components-ni class-orqalig yoziladi ;

/// function-da (--parametr--)-degan tusshuncha bo'lgani kabi components-daxam bor faqat uni nomi (--props--)

/// Syntax of components :

// keyword
//   |
//   |          keyword
//   |             |
//   | element for |    location of
//   |   export    |    information
//   |     |       |         |
//   |     |       |         |
//   |     |       |         |
//   |     |       |         |         1.render
//   |     |       |         |             |
//   |     |       |         |             |
// class eshmat extends React.Component {  |
//     render(){___________________________|
//         return
//     }
// }

//// 1.render : qayerda render-ni ko'rsag ekranga chiqarish deb xissoplayveramiz 
///// va xardoyim return qilgan elementini ekranga chiqaradi
///// xozircha returnga faqay bitta element qo'ya olamiz 
///// agar ko'proq element qo'yish kerak bo'lsa bu usullardan foidalansa bo'ladi :

////// 1. barcha elementlarni bitta divga solib qo'ysa bo'ladi ;
////// 2. <>...ELEMENTS...</> va shunnda qilib belgilar ichiga yozib qo'ysag bo'ladi ;
////// 3. <React.Forgament>...ELEMENTS...</React.Forgament> va shunnda qilib belgilar ichiga yozib qo'ysag bo'ladi ;

// props :

/// components-da props degan qiymat bo'ladi :
//// u bizga paramettr vazifasini bajaradi. chunki uni ichida yozgan argumentlarimiz bo'ladi

/// props bilan parametr-ni farqi :

/// propsda nomi bilan parametr bir xil bo'lishi kerak ;
/// parametrda esa ketmaketligi ;

// children :

/// biz (--index.js--)-da yozadiganimiz (--single tag--) agar uni (--closing tag)-ga o'zgartirsag ;
/// agar uni ichidagi children-larini chiqarmohchi bo'lsag (--props.children--) desag chiqadi ;

// state :

///