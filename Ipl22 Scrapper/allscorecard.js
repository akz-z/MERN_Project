

let request =require("request");
let cheerio=require("cheerio");
let details=require("./getdetails");

function getscorecardlink(url){
    
    //console.log(url);
    request(url,cb);
}

function cb(err,res,body)
{
     if(err) console.log("error");

     else{
        handlehtml(body);
     }
}

function handlehtml(html)
{   
    let selecTool=cheerio.load(html);

    let link=selecTool(".ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent>a");
    //let score=selecTool(".ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent");
    
    for(let i=0;i<link.length;i++)
    {
        let fullLink="https://www.espncricinfo.com/" + selecTool(link[i]).attr('href');
       // console.log(fullLink);
        details.details(fullLink);
        break
    }
}

module.exports={
    getscorecardlink:getscorecardlink,
    
};