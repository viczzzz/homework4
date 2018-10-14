const TriangleStars=function(height) {
    let width=1+2*(height-1);
    let space='';
    while (height>0) {
     let width=1+2*(height-1);
     let str='';
         while (width>0) {
             str=str+'*';
             width=width-1;
         }
    
    str = space+str;
    console.log(str);
    height=height-1;
    space=space +' ';
    }
};
TriangleStars(4);

//*3. Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.
//Example: multiToSingle([[1, 2, 3], [4, 5, 6]]); will return [1, 2, 3, 4, 5, 6] 

const TakeMultiDimensionalArray=function(arr) {
    let newarr=[ ];
    let ParentIndex=0;
    while (ParentIndex<arr.length) {
        const childArray =arr[ParentIndex]
        ParentIndex=ParentIndex+1;
        let ChildIndex=0;
        while (ChildIndex<childArray.length) {
        
            newarr[newarr.length]=childArray[ChildIndex];
            ChildIndex=ChildIndex+1;
        }
       
    }
    return newarr+"";
}
console.log(TakeMultiDimensionalArray([[1,2,3,4,5],[2,89,90]]));


//Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true. It returns the smallest number in the given array if the second argument is false.


const FindMinMax=function(arr,bool) {
    let index=0;
    let result;
    if (bool){
     while (index<arr.length) {
        if (arr[index] > arr[index + 1]) {
            result = arr[index];
        }
        index = index+1;   
     }
    } else { 
        while (index<arr.length) {
            if (arr[index] < arr[index + 1]) {
               result = arr[index];
            }
         index = index+1;   
        }   
    }
    
    return result; 
};


console.log(FindMinMax([22,1,44,6,7,88,1,8],false));





//Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.

debugger;
const forEach=function(arr,func){
    let index=0;
    
    while(index<arr.length) {
        func(arr[index]);
        index=index+1;
    }
    
};

const funcInfunc = function(numb){
    console.log(numb+5);
};

console.log(forEach([1,2,3],funcInfunc));


//Create a function 'sum' that takes an array of numbers and returns their sum.
//Example: sum([4, 3, 2]); // should return 9



const Sum=function (arr) {
    let index=0;
    let sumOfInt=0;
    while (index<arr.length) {
        sumOfInt = sumOfInt + arr[index];
        index = index + 1; 
    }
    return sumOfInt;   
};
console.log(Sum([1,2,3]));




//Write a function 'reverse' that reverses the given string

const Reverse = function(str) {
    let index=str.length-1;
    let space='';
    while(index>=0){
        space=space+str[index];
        index=index-1;
    }
    return space;
};
console.log(Reverse('abcd'));




//Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.  Example: checkerboard(5)

const CheckerBoard = function(height){
    let helper=1;
    let str='-';
    while (height>helper) {
        if (helper%2===0) {
        console.log(' '+'*'.repeat(height));
        } else {
            str='*';
            console.log('*'.repeat(height));
        }
        helper=helper+1;
    }
}
CheckerBoard(4);



























