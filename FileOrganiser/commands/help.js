

function help(){

        console.log(`
            These are some myCLI commands used in various situations:
                    
                    1) node main.js help 
                    2) node main.js tree <Path>
                    3) node main.js organize <Path>
        `);
}

module.exports={
    help:help,
};