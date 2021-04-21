// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

//return FirstTwo Drivers

const returnFirstTwoDrivers = (arrayToSlice) => arrayToSlice.slice(0,2)


console.log(returnFirstTwoDrivers(drivers));

//return LastTwo Drivers

const returnLastTwoDrivers = (arrayToSlice) => arrayToSlice.slice(2,4)

console.log(returnLastTwoDrivers(drivers));

//selectingDrivers function

selectingDriversArray = [['Sally', 'Bob'],['Freddy', 'Claudia']];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[1](drivers));

//createFareMultiplier function

const createFareMultiplier = (multiplier) => {
    const fareMutiplier = (numberToMultiply) => numberToMultiply*multiplier;

    return fareMutiplier;
}

// fareDoubler

const fareDoubler = createFareMultiplier(2)

const fareDoubled = fareDoubler(100);

console.log(fareDoubled);

//fareTripler

const fareTripler = createFareMultiplier(3)

const fareTripled = fareTripler(100);

console.log(fareTripled);

//selectDifferentDrivers

const driverArray = [returnFirstTwoDrivers, returnLastTwoDrivers];

const selectDifferentDrivers = (driverArray, driverFunction) => {
    return driverFunction(driverArray);
}

console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

//   describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
//     it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
//       expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Sally', 'Bob']);
//     });

//     it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
//       expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Freddy', 'Claudia']);
//     });
//   });
// });
