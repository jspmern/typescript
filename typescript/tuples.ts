let our_tuple:[number,string,boolean];
our_tuple=[2,'utsav',true]
//if you are giving any other order than it throw error
// our_tuple=['u',3,true,]
our_tuple.push('hello how are you')

// you can use type   (check type alias topic)
type details={name:string,roll:number}
type tuple_type=[number,string,details]


let our_tuple2:tuple_type;
our_tuple2=[2,'utsav',{name:'utsav',roll:3}]