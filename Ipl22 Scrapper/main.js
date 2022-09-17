
let url="https://www.espncricinfo.com/series/indian-premier-league-2022-1298423";
let fs=require("fs");
let request=require("request");
let cheerio=require("cheerio");
let scorelink=require("./allscorecard");

request(url,cb);

function cb(err,res,body)
{
    if(err) console.log("Error 404 : " ,err);
    else{
       
        handleHTML(body);
    }
}

function handleHTML(html)
{
    if(!fs.existsSync("C:/Users/Akash/Desktop/course/Web/MERN_Projects/Ipl22 Scrapper/IPL-22"))
    {
         fs.mkdirSync("C:/Users/Akash/Desktop/course/Web/MERN_Projects/Ipl22 Scrapper/IPL-22");
    }

    let selecTool=cheerio.load(html);
    let a= selecTool('a[class="ds-inline-flex ds-items-start ds-leading-none"]');
    
    let fullLink=url+"/match-schedule-fixtures-and-results";

    scorelink.getscorecardlink(fullLink);
    //console.log(fullLink);
}    

