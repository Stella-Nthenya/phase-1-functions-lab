// The headquartes are on 42nd street
const scuberHeadquarters = 42;

// This function returns the number of blocks from Scuber headquarters
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(scuberHeadquarters - pickupLocation);
}

// This function translates the number of blocks from headquarters to the distance in feet
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

// This function returns the number of feet travelled
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination) * 264;
}

// This function calculates the cost
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0;

    }else if (distance >= 400 && distance < 2000) {
        return ((distance - 400) * 0.02);

    }else if (distance >= 2000 && distance <= 2500) {
        return 25;

    }else {
        return 'cannot travel that far';
    }
};

