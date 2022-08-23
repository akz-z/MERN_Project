

let fs=require("fs");
let path=require("path");

// let dirPath="C:/Users/Akash/Desktop/course/Web/MERN_Projects/FileOrganiser/commands";
// tree(dirPath);
function tree(dirPath){

    if(dirPath==undefined) 
    {
        console.log("Path Doesnt Exist");
        return
    }
    let fileExist=fs.existsSync(dirPath);
    
    if(fileExist)
    {
        printpath(dirPath," ");
    }
    else
    {
        console.log("Doesnt exist");
        return;
    }
}

function printpath(dirPath,sign){

    let isFile=fs.lstatSync(dirPath).isFile();

    if(isFile)
    {
        let baseFile=path.basename(dirPath);
        console.log(sign+"├──"+baseFile);
        return;
    }

    let folderName=path.basename(dirPath);
    console.log(sign+"└──"+folderName);

    let foldercontent=fs.readdirSync(dirPath);

    for(let i=0;i<foldercontent.length;i++)
    {
        let childpath=path.join(dirPath,foldercontent[i]);
        printpath(childpath,sign+"\t");
    }

}

module.exports={
    tree:tree
}