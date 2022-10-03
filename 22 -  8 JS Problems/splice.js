const friends = [12,45,22,44,62,69,87];


/* 

1. SPLICE(কত নাম্বার index, কয়টা delete করবে)

2. SPLICE(কত নাম্বার index, কয়টা delete করবে, ...তুমার যত মন চাই add করতে পারবে)


*/
// const partial = friends.splice(2,3);
const partial = friends.splice(2,3, 98565,85,621);

console.log(partial,friends);