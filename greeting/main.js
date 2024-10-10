const greetUser = (name) => {
    return `Ciao, ${name}! Benvenuti!`;
};

const userName = prompt("Please enter your name:");

if (userName) {
    console.log(greetUser(userName));
}
else {
    console.log("You didn't enter a name.");
}