function num_target (num,target) {
    let num_length = num.length; // num adlı fonksiyon girdisinin uzunlugunu aldık. num sayı listesi olacak.
    for ( let a=0;a<num_length; a++) 
    {
      for (let b=a+1; b<num_length; b++) {
        if (( num [a] + num [b])==target) { // iki sayının toplamı girilen hedef değerine eşitse;
            console.log (` [${a},${b}]`) //a ve b index numaralarını yazdır
        }
    
      }
    }
  }
  num_target ([0,1,2,3,5,6] , 5);

