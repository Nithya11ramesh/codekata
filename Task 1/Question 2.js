/*
QUESTION:

 Write a blog about Object and its internal represenation in javascript.Object

ANSWER:

 Object in javascript may be defined as an unordered collection of primitive datatypes(ie:string,number,boolean,null,undefined).
 Object in javascript is respresented in the form of "key:value" pairs.
 
 Method:1
 //create a object with an object literal.

   const vehicle={
     make:"hyundai",
     model:"i 20",        keys:make,model,year
     year:2015             values:hyundai,i 20,2015
      }
 console.log(vehicle.model);

 Method:2
 //create a object using function.

 const vehicle={
     make:"hyundai",
     model:"i20",
     year:2015,
     features:function()
     {
       return this.make+ "  " +this.model;
     }
    };

    console.log(vehicle.features()); */