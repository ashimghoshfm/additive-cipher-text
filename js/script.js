// Ashim created 'additive-cipher=text' js program:
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let pt = [];
pt = prompt("Enter your text:  ");
document.write("Your entered text is: "+pt+"<br>");

let ek = Number(prompt("Enter Encryption key: "));

let ct = [];
let total = '';

for(var i=0; i<pt.length; i++){
        
    for(var j=0; j<alphabet.length; j++){
            if(pt[i]==alphabet[j]){
            j = alphabet.indexOf(alphabet[j]);
            ct = (j+ek)%26;
            // document.write(alphabet[ct]);
            
            total = total + alphabet[ct];
            break;
            }
        }
    
}

document.write("Encrypted text:  "+total);


// Alamin Program:
// const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// let pt = prompt("Enter your text: ");
// let ek = Number(prompt("Enter Encryption key: "));

// for(var i=0; i<pt.length; i++){
//     var ct=[];
//     var total = "";
//     for(var j=0; j<alphabet.length; j++){
//         if(pt[i]==alphabet[j]){
//             j=(j+ek)%26;
//             ct= ct + alphabet[j];
//             // document.write(ct);
//             total = total + ct;
//             break;
//         }
//     }
    
//     document.write(total);
// }