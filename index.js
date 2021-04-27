// Code your solution in this file!


const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

//return first two drivers function

const returnFirstTwoDrivers = (arrayToSlice) =>  arrayToSlice.slice(0,2) 

console.log(returnFirstTwoDrivers(drivers));

// should return an array of the last two drivers', function () {
//     expect(returnLastTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'])).to.eql(['Freddy', 'Claudia']);
//   });
// });


//return last two drivers function

const returnLastTwoDrivers = (arrayToSlice) => arrayToSlice.slice(2,4)

console.log(returnLastTwoDrivers(drivers));



//selecting drivers function


const selectingDriversArray = [['Sally', 'Bob'], ['Freddy', 'Claudia']];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[1](drivers));



//createFareMultiplier function

const createFareMultiplier = (multiplier) => {
    const fareMultiplier = (numberToMultiply) => numberToMultiply*multiplier;

    return fareMultiplier;
}

//fareDoubler function

const fareDoubler = createFareMultiplier(2);

const fareDoubled = fareDoubler(100);

console.log(fareDoubled);

//fareTripler function

const fareTripler = createFareMultiplier(3)

const fareTripled = fareTripler(100)

console.log(fareTripled);

//selectDifferentDrivers function

const driverArray = [returnFirstTwoDrivers, returnLastTwoDrivers]

const selectDifferentDrivers = (driverArray, driverFunction) => {

    return driverFunction(driverArray);

}

console.log(selectDifferentDrivers(returnLastTwoDrivers, drivers));






// describe('createFareMultiplier()', function () {
//     it('returns a function', function () {
//       const fareMultiplier = createFareMultiplier(2);

//       expect(fareMultiplier).to.be.a('function');
//     });

//     it('should multiply a given value using the created multiplier', function () {
//       const fareQuintupler = createFareMultiplier(5);

//       expect(fareQuintupler(5)).to.eql(25);
//     });
//   });

//   describe('fareDoubler()', function () {
//     it('is a function', function () {
//       expect(fareDoubler).to.be.a('function');
//     });

//     it('doubles fares', function () {
//       expect(fareDoubler(10)).to.eql(20);
//     });
//   });

//   describe('fareTripler()', function () {
//     it('is a function', function () {
//       expect(fareTripler).to.be.a('function');
//     });

//     it('triples fares', function() {
//       expect(fareTripler(12)).to.eql(36);
//     });
//   });

//   describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
//     it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
//       expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Sally', 'Bob']);
//     });

//     it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
//       expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Freddy', 'Claudia']);
//     });
//   });
// });




