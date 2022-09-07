---------------- Today learning common js -----------------

39.1 - JS types 
    /**
    * 
    * @params JS সবসময় dynamic types variable নেয়
    * @read জাভাস্ক্রিপ্ট এ আমরা দুই ধরনের data দেখতে পায় 
    * @like 1. Primitive and 2. non-primitive
    * 
    * 
    */

    // JS primitive
    const a = 5; // Number data types
    const b = 'Robiul Islam'; // strings data types
    const c = true || false; // boolean types 
    const d = null; // null data types
    const e = undefined; // undefined

    // JS Non-Primitive 
    const array = [2,5,3,56,89]; // by default show as object bcz JS এর সবকিছুই একটা Object 
    const obj = {
        id: 23,
        name: 'Robiul Islam'
    }

    // Difference between Primitive and non-primitive
    /*
    Primitive ডাটা types a Reference value পরিবর্তন করলে, আগের value পরিবর্তন হয় নাহ, কিন্তু non-primitive এর সময় পরিবর্তন হয়ে যায়.
    */

    /**
    * @run const a = 5;
    * @run const b = a;
    * @output b = 5;
    * 
    * @if_change_the_value_of_b b = 9
    * @output b = 9 but a = 5
    * 
    * 
    */

    let x = 4;
    let y = x;

    console.log(x,y); // output 4 4
    y = 9

    console.log(x,y); // output 4 9

    /* 
    Non-primitive
    */
    let p ={job: 'Web developer'};
    let q = p;

    console.log(p,q); // output -> { job: 'Web developer' } { job: 'Web developer' }
    p.job = 'front-end developer';

    console.log(p,q); // Output -> { job: 'front-end developer' } { job: 'front-end developer' }