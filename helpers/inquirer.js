import inquirer from "inquirer";
import colors from 'colors';

const Home = async () => {
    console.clear();
    console.log('============================'.green);
    console.log('   Life Game   '.white);
    console.log('============================\n'.green);

};

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'input',
            message: message,
        }
    ];

    const { input } = await inquirer.prompt(question);
    
    return parseInt(input);
};


export {
    readInput,
    Home,
    
}