// ITERATION 1

// Suspects

const mrGreen = {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green "
};

const drOrchid = {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
};

const profPlum = {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
};

const missScarlet = {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"
};

const mrsPeacock = {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue"
};

const mrMustard = {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow"
};


// Suspects Collection

const suspectsArray = [
    mrGreen,
    drOrchid,
    profPlum,
    missScarlet,
    mrsPeacock,
    mrMustard
];

//Rooms

const diningRoom = {
    name: "Dining Room"
};
const conservatory = {
    name: "Conservatory"
};
const kitchen = {
    name: "Kitchen"
};
const study = {
    name: "Study"
};
const library = {
    name: "Library"
};
const billiardRoom = {
    name: "Billiard Room"
};
const lounge = {
    name: "Lounge"
};
const ballroom = {
    name: "Ballroom"
};
const hall = {
    name: "Hall"
};
const spa = {
    name: "Spa"
};
const livingRoom = {
    name: "Living Room"
};
const observatory = {
    name: "Observatory"
};
const theater = {
    name: "Theater"
};
const guestHouse = {
    name: "Guest House"
};
const patio = {
    name: "Patio"
};

// Rooms Collection
const roomsArray = [
    diningRoom,
    conservatory,
    kitchen,
    hall,
    study,
    library,
    billiardRoom,
    spa,
    observatory,
    theater,
    guestHouse,
    patio
];


//Weapons 
const rope = {
    name: "rope",
    weight: 10
};

const knife = {
    name: "knife",
    weight: 8
};

const candlestick = {
    name: "candlestick",
    weight: 2
};

const dumbbell = {
    name: "dumbbell",
    weight: 30
};

const poison = {
    name: "poison",
    weight: 2
};

const axe = {
    name: "axe",
    weight: 15
};

const bat = {
    name: "bat",
    weight: 13
};

const trophy = {
    name: "trophy",
    weight: 25
};

const pistol = {
    name: "pistol",
    weight: 20
};

// Weapons Collection
const weaponsArray = [
    rope,
    knife,
    candlestick,
    dumbbell,
    poison,
    axe,
    bat,
    trophy,
    pistol
];

// ITERATION 2

// Random Selectior:

function selectRandom(arr) {
    if (arr === 0) {
        return undefined;
    }
    // console.log(arr[Math.floor(Math.random() * arr.length)]);   
    return arr[Math.floor(Math.random() * arr.length)];
}

selectRandom(weaponsArray);


// Pick Mistery:

function pickMystery() {
    // Random Suspect
    const mysterySuspect = selectRandom(suspectsArray);

    //Random Weapon
    const mysteryWeapon = selectRandom(weaponsArray);

    // Random Room
    const mysteryRoom = selectRandom(roomsArray);

    const mystery = {
        suspect: mysterySuspect, //.firstName, |
        weapon: mysteryWeapon, //.name,        | ---> not needed!
        room: mysteryRoom, //.name             |
    };

    // console.log(mystery);
    return mystery;
}

pickMystery();

// ITERATION 3

// function revealMystery() {
//     // Random Suspect
//     const mysterySuspect = selectRandom(suspectsArray);

//     //Random Weapon
//     const mysteryWeapon = selectRandom(weaponsArray);

//     // Random Room
//     const mysteryRoom = selectRandom(roomsArray);

//     const mysteryRevealed = `${mysterySuspect.firstName} ${mysterySuspect.lastName} killed Mr. Boddy using the ${mysteryWeapon.name} 
//     in the ${mysteryRoom.name}!`;

//     console.log(mysteryRevealed);
//     return mysteryRevealed;
// }

function revealMystery(mystery) {
    // Random Suspect
    /* const mysterySuspect = selectRandom(suspectsArray);

    //Random Weapon
    const mysteryWeapon = selectRandom(weaponsArray);

    // Random Room
    const mysteryRoom = selectRandom(roomsArray);

    const mysteryRevealed = {
        firstName: mysterySuspect.firstName,
        lastName: mysterySuspect.lastName,
        weapon: mysteryWeapon.name,
        room: mysteryRoom.name
    };
 */
    // console.log(mysteryRevealed.firstName + ' ' + mysteryRevealed.lastName + ' killed Mr. Boddy using the ' + mysteryRevealed.weapon + ' in the ' + mysteryRevealed.room);
    return mystery.suspect.firstName + ' ' + mystery.suspect.lastName + ' killed Mr. Boddy using the ' +
        mystery.weapon.name + ' in the ' + mystery.room.name + '!';
}




revealMystery();