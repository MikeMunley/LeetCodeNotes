var removeDuplicates = function(nums) {
    if (nums.length === 0){
        return 0;
    };
    let pointer1 = 0;
    for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
        if (nums[pointer1] !== nums[pointer2]) {
                pointer1++;
                nums[pointer1] = nums[pointer2]; 
        }
        
    }
         return pointer1 + 1;

};


//If pointer one doesnt equal pointer 2s value, the for loop moves pointer 1 to the next index.
//if pointer ones value does equal pointer 2, pointer 2 moves to the next index.
//Once pointer 2 reaches a new unique value. it moves pointer one up and changes the value.

