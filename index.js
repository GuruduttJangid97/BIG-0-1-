// Exercise Big O(1);

const everyone = ['dory','bruce','marlin','gil','bloar','nigel','squirt','darla','hank','nemo']; //Array Initialization


function findNemo(array){
    for(let i=0; i<array.length; i++){
        console.log('running');
        if(array[i]=== 'nemo'){
            console.log('found nemo');
            break;
        }
    }
}

findNemo(everyone); 
// Whenver function execute it checks the value and find out where the element exist, 
//If value exist at first place of array it execute only one times so we can say that Big O(1);
