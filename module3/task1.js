arr = [
    {
        "id":1,
        "name":"Amit Kumar",
        "age":25
    },
    {
        "id":2,
        "name":"Rahul Dixit",
        "age":20
    },
    {
        "id":3,
        "name":"Ravi Joshi",
        "age":55
    },
    {
        "id":4,
        "name":"Rohit Verma",
        "age":37
    },
    {
        "id":5,
        "name":"Ajay Jain",
        "age":17
    }


];
console.log(Object.values(arr));


// a.
let len=arr.length,youngest=100;
for(i=0;i<len;i++){
    youngest=Math.min(arr[i].age,youngest);
}
console.log(youngest);


let l=arr.length,oldest=0;
for(i=0;i<l;i++){
    oldest=Math.max(arr[i].age,oldest);
}
console.log(oldest);



// b.
let new_list=arr.filter(list=>list.age>18);
console.log(new_list);

//c.
let sum=0;
for(i=0;i<l;i++){
    sum+=arr[i].age;
}
console.log(sum/l);


// d.
let list1=arr.filter(names=>names.name[0]=='A');
console.log(list1);
let list2=arr.filter(names=>names.name[0]=='R');
console.log(list2);
