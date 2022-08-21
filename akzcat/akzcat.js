
 const { clear } = require("console");
let fs=require("fs");
 
 let input=process.argv.slice(2);
// console.log(input);

 let filesArr=[];
 let optionArray=[];

 for(let i=0;i<input.length;i++)
 {
   if(input[i].charAt(0)=='-')
   {
      optionArray.push(input[i]);
   }
   else{
      filesArr.push(input[i]);
   }   
 }
 //console.log(optionArray);
 for(let i=0;i<filesArr.length;i++)
 {
     let fileExist=fs.existsSync(filesArr[i]);

     if(fileExist==false){
        console.log("File doesnt exist");
        return;
     }
 }


// reading and appending
let content="";
 
for(let i=0;i<filesArr.length;i++)
{
   let file=fs.readFileSync(filesArr[i]);
   content+=file+ "\r\n";
}
 let contentArray=content.split("\r\n");
 //console.log(content);
 if(optionArray.includes("-s"))
 {
    for(let i=1;i<contentArray.length;i++)
    {
         if(contentArray[i]=="" && contentArray[i-1]=="")
         {
             contentArray[i]=null;
         }
         else if(contentArray[i]== "" && contentArray[i-1]==null)
         {
            contentArray[i]=null;
         }
    } 
       
 }
 let actual=[];
 for(let i=0;i<contentArray.length;i++)
    {
         if(contentArray[i]!=null)
         {
            actual.push(contentArray[i]);
         }
    }  
//console.table(actual);

let iob=optionArray.indexOf("-b");
let ion=optionArray.indexOf("-n");
let newoption=[];

if(iob!=-1 && ion!=-1)
{
    if(iob<ion) newoption.push("-b");
    else
         newoption.push("-n");
}

else {

   if(iob!=-1)
   {
      newoption.push("-b");
   }
   else if(ion!=-1)
   {
      newoption.push("-n");
   }
}

if(newoption[0]=="-b"){

   operationb();
}
else if(newoption[0]=="-n"){
   operationn();
}

function operationn(){
   let count=1;

   for(let i=0;i<actual.length;i++)
   {
      actual[i]=count+" "+actual[i];
      count++;
   }
}

function operationb(){
   let count=1;

   for(let i=0;i<actual.length;i++)
   {
      if(actual[i]!=""){
         actual[i]=count+" "+actual[i];
         count++;
      }   
   }
}

let finalcontent="";

for(let i=0;i<actual.length;i++)
{
   finalcontent+=actual[i]+"\r\n";
}

console.log(finalcontent);