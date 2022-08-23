
let input=process.argv.slice(2);
let comand=input[0];
let  helpcommand=require("./commands/help");
let orgfunc=require("./commands/organize");

switch(comand)
{
    case "help":{
        helpcommand.help();
        break;
    }
    case "organize":{
        orgfunc.organize(input[1]);
        break;
    }
    case "tree":{
        console.log("Sorry this Function is under process :/" );
        break;
    }

    default:{
        console.log("Command Not Recognized");
        
    }
}