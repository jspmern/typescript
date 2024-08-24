let role1:"admin" | "user" | "hospital";


//union
let id1:string | number;
id1=1;
id1='zuufioufiodfsdiuoio'

//intersection
 type obj3={name:string}
 type obj4={add:string}
 let details:obj3 & obj4;
 details={name:'utsav',add:'delhi'}
 console.log(details)