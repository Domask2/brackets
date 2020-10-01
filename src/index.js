module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  let result = [];
  
 for(let i=0;i<str.length; i++) {
    
   for(let j=0;j<bracketsConfig.length; j++) {
    
     if(str[i] === bracketsConfig[j][0]) {
        result.push(str[i]);
     } else if (str[i] === bracketsConfig[j][1]) {
       if(result[result.length-1] === bracketsConfig[j][0])
       result.pop();
     }
     
     if(bracketsConfig[j][0] === bracketsConfig[j][1] && str[i] === bracketsConfig[j][0]) {
       if(result[result.length-2] === str[i] && result[result.length-2]!=undefined){
         console.log(result)
          result.pop();    
          result.pop();
       }
     }
   }
 }
  return !result.length
}
