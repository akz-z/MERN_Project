let request=require("request");
let cheerio=require("cheerio");
let getdetails=require("./allscorecard");
let fs=require("fs");
let xlsx=require("xlsx");
const path = require("path");

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

    // console.log(" "+infoarr[0] );
    // console.log(" "+selecTool(name[0]).text() + " VS " +selecTool(name[1]).text());
    // console.log(infoarr[2]+infoarr[3]);
    // console.log(infoarr[1]);
    let Match=infoarr[0];
    let Date=infoarr[2];
    let Teams=" "+selecTool(name[0]).text() + " VS " +selecTool(name[1]).text();
    let Venue=infoarr[1];
    let Result=selecTool(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title").text();
    let xlfPath = path.join(__dirname,"IPL-22","details.xlsx");
    //console.log(playerPath);
    // console.log(" "+ result.text());
    // console.log("---------------------------------------------------------------");
    // console.log("\n");
    let content=xlReader(xlfPath);
    let jsobj={Match,Date,Teams,Venue,Result};
    content.push(jsobj);
    processXl(xlfPath,content);
}
//date

// venue 


//team vs team


//result

function xlReader(xlfPath)
{
    if(!fs.existsSync(xlfPath))
    {
        return [];
    }
    let wb=xlsx.readFile(xlfPath);
    let sheet=wb.Sheets["info"];
    let sheettoobj=xlsx.utils.sheet_to_json(sheet);

    return sheettoobj;
}

function processXl(xlfPath,content)
{
   
        let workBook=xlsx.utils.book_new();
        let worksheet=xlsx.utils.json_to_sheet(content);  
        xlsx.utils.book_append_sheet(workBook,worksheet,"info");
        xlsx.writeFile(workBook,xlfPath);
    
}
module.exports={
    details:details,
}