
let input=process.argv.slice(2);
let comand=input[0];
let  helpcommand=require("./commands/help");

switch(comand)
{
    case "help":{
        helpcommand;
        break;
    }
    case "organise":{
        break;
    }
    case "tree":{
        break;
    }

    default:{
        console.log("Command Not Recognized");
        
    }
}