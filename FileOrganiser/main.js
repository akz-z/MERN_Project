
let input=process.argv.slice(2);
let comand=input[0];
let  helpcommand=require("./commands/help");
let orgfunc=require("./commands/organize");
let treefunc=require("./commands/tree");

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
        
        treefunc.tree(input[1]);
        break;
    }

    default:{
        console.log("Command Not Recognized");
        
    }
}