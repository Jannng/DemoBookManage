let insertion = function (arr){
    for (let i = 0;i < arr.length; i ++){
        for(let j = i;j < arr.length;j++){
            if(arr[i] > arr[j]){
                exch(arr,i,j);
            }
        }
    }
}

let print = function(arr){
    for(let i = 0;i < arr.length; i++){
        console.log(arr[i]);
    }
}

let exch = function(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [5,2,4,8];


insertion(arr);
print(arr);

