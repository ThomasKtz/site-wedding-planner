$(document).ready(() =>{
   const firstP = $('.left-one');
   const secondP = $('.right-one');
   const thirdP = $('.left-two');
   const fourthP = $('.right-two');

   firstP.hide().delay(1000).fadeIn(1000);
   secondP.hide().delay(1500).fadeIn(1000);
   thirdP.hide().delay(2000).fadeIn(1000);
   fourthP.hide().delay(2500).fadeIn(1000);


    const services = $('.services-container');
    services.hide().delay(3000).fadeIn(2000); 
    
    
});