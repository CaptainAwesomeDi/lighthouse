var myArgs = process.argv.slice(2).toString();
 const obfuscate =(password)=>{
    return password
        .replace(/a/gi,'4')
        .replace(/e/gi,'3')
        .replace(/o/gi, '0')
        .replace(/l/gi,'1');
}

console.log(obfuscate(myArgs));