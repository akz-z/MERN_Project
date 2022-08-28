let request=require("request");
let cheerio=require("cheerio");
let getdetails=require("./allscorecard");

function details(url){
    //console.log(url);
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
    let name=selecTool(".ds-text-tight-l.ds-font-bold.ds-text-ui-typo");
    let link=selecTool(".ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid");
    let infoarr =link.text().split(",");

    console.log(" "+infoarr[0] );
    console.log(" "+selecTool(name[0]).text() + " VS " +selecTool(name[1]).text());
    console.log(infoarr[2]+infoarr[3]);
    console.log(infoarr[1]);

    let result=selecTool(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title");
    console.log(" "+ result.text());
    console.log("---------------------------------------------------------------");
    console.log("\n");
}
//date

// venue 


//team vs team


//result

module.exports={
    details:details,
}