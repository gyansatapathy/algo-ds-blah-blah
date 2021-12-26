const stringPermutation = (perm = '', word) => {
    if(word === ''){
        console.log(perm+word);
    }

    for(let i =0; i < word.length; i++){
        stringPermutation(perm+word.substr(i,1), word.substr(0,i)+word.substr(i+1));
    }
}

stringPermutation('', '123')