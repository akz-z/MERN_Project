let request=require("request");
let cheerio=require("cheerio");
let getdetails=require("./allscorecard");

function details(url){
    
    request(url,cb);
}

function cb(err,res,body)
{
    if(err) console.log(err);
    else{
        handlehtml(body);
    }
}
function handlehtml(body)
{
    
    let selecTool=cheerio.load(body);
    
    let link=selecTool(".ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid");
    let infoarr =link.text().split(",");
    console.log(infoarr[0]);
    console.log(infoarr[2]+infoarr[3]);
    console.log(infoarr[1]);
}
//date

// venue


//team vs team


//result

module.exports={
    details:details,
}