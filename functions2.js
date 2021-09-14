const friends = [ {
    name: "Wes",
    year: 1988
}, {
    name: "Kait",
    year: 1986
}, {
    name: "Irv",
    year: 1970
}, {
    name: "Lux",
    year: 2015
} ];
const comments = [ {
    text: "Love this!",
    id: 523423
}, {
    text: "Super good",
    id: 823423
}, {
    text: "You are the best",
    id: 2039842
}, {
    text: "Ramen is my fav food ever",
    id: 123523
}, {
    text: "Nice Nice Nice!",
    id: 542328
} ];

function overNighteen() {
    return friends.some(f => {
        if (f.year <= 2001) {
            return true;
        }
        return false;
    })
}

console.info(overNighteen());

function everyoneOverNighteen() {
    return friends.every(f => {
        if (f.year <= 2001) {
            return true;
        }
        return false;
    })
}

console.info(everyoneOverNighteen());

function findID() {
    const element = comments.find(e => e.id === 823423)
    return element;
}
console.info(findID());

function findAndDelete() {
    const number = comments.findIndex(c => c.id === 823423)
    comments.splice(number, 1);
    return comments;
}

console.info(findAndDelete());


