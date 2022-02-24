export default function isValid(letter) {
    let a = letter.trim().split(' ');
    let s =  a.reduce(function(result, item, index){
        if( item.includes('[') || item.includes(']')){
            result ++;
        }
        else{ 
            if( item.includes('(') || item.includes(')')) {

                if( item.startsWith('(') && item.endsWith(')') && item.length >=3 && item.substr(1,item.length-1).includes('(') && item.substr(1,item.length-1).includes('(')) {
                  result ++;
                }
                else{
                    
                    if( !(item.startsWith('(') && item.endsWith(')')  && item.length >=3)){
                        result ++;       
                    }
                }
            }
        }
      return result;
    },0);

    if (s === 0){
      return true;
    }
    else{
      return false;
    }
}