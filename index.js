// Code your solution in this file!
const num = 42
function distanceFromHqInBlocks (someValue) {
    switch (someValue) {
        case someValue = 43:
            return someValue - num;
        case someValue = 50:
            return someValue - num;
        case someValue = 34:
            return num - someValue;
    }
}

const block = 264
function distanceFromHqInFeet (someValue) {
    switch (someValue) {
        case 43:
            return (someValue - num) * block;
        case 50:
            return (someValue - num) * block;
        case 34:
            return (num - someValue) * block;
    }
}

function distanceTravelledInFeet (start, destination) {
    switch (start, destination) {
        case (43,48):
            return (destination - start) * block;
        case (50,60):
            return (destination - start) * block;
        case (34,28):
            return (start - destination) * block;
    }
}

function calculatesFarePrice (start, destination) {
    switch (start, destination) {
        case (43, 44):
            return ((destination - start) * block) * 0;
        case (34, 32):
            return (((start - destination) * block) - 400) * 0.02;
        case (50,58):
            return 25
        case (34, 24):
            return 'cannot travel that far'
    }
}