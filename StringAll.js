function printAll(text1,char){
    var count=0;
 
 var textAr= text1.split(" ")
 for(let i=0;i<textAr.length;i++){
     console.log(textAr[i])
     if(textAr[i]===char){
         count++;
     }

 }
 console.log(char +' occurs '+count+' times')
}
printAll('India is my country and my mother tongue is Teleugu, my favourite actor is Balaya','my')