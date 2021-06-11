const testNum = num => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num + " is groter als 10");
        } else {
            reject(num + " is kleiner als 10")
        }
    });
};

//testen

// testNum(9)
//     .then(result => log(result))
//     .catch(error => log(error));

// testNum(11)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));



// Exercise 2

const makeAllCaps = (list) => {
    return new Promise((resolve, reject) => {
        if (check(list)) {
            resolve(list.map((item) => item.toUpperCase()));
        } else {
            reject("Niet ok");
        }
    });
};

const sortWords = (list) => {
    return new Promise((resolve, reject) => {
        if (check(list)) {
            resolve(list.sort());
        } else {
            reject("Niet ok");
        }
    });
};

function check(list) {
    return list.every((element) => typeof element === "string");
}

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const doItAll = (list) => {
    console.log("original input: " + list);
    sortWords(list)
        .then((message) => {
            console.log("after first step: " + message);
            makeAllCaps(message).then((message) => {
                console.log("after second step: " + message);
            });
        })
        .catch((message) => {
            console.log("wrong input: " + message);
        });
};

doItAll(arrayOfWords);
doItAll(complicatedArray);