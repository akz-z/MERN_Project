
let fs=require("fs");
let path=require("path");
const { cwd } = require("process");

let types = {

    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath)
{
    if(srcPath==undefined) srcPath=process.cwd();
    
    let organizeFile=path.join(srcPath,"Organize_Files");
    //console.log(organizeFile);
    if(fs.existsSync(organizeFile)){ 
        console.log("File already Exist!!!");
    }    
    else{
        fs.mkdirSync(organizeFile);
    }   
}
let srcPath="C:/Users/Akash/Desktop/course/Web/MERN_Projects/FileOrganiser/download";
organize(srcPath);

let files=fs.readdirSync(srcPath);

for(let i=0;i<files.length;i++)
{
   
    let filePath=path.join(srcPath,files[i]);
    
    let isFile=fs.lstatSync(filePath).isFile();
    //console.log(isFile);
    if(isFile)
    {
        let extfile=files[i].split(".")[1];
        
        let folderName=getfolderName(extfile);
        console.log(folderName);
        let fileDest=movefile(srcPath,filePath,folderName);
    }
}    

function getfolderName(extfile)
{
    
    for(let key in types)
    {
        for(let i=0;i<key.length;i++)
        {
            if(types[key][i]==extfile)
                return key;
        }
    }
    
}

function movefile(srcPath,filepath,folderName)
{
    let destnpath=path.join(srcPath,"Organize_Files",folderName);
    //console.log(destnpath);

    if(!fs.existsSync(destnpath))
    {
        fs.mkdirSync(destnpath);
    }
    let filename=path.basename(filepath);
    //console.log(destnpath);
    let finaldes=path.join(destnpath,filename);
    fs.copyFileSync(filepath,finaldes);

}