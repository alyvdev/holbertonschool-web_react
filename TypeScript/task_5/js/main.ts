// Interface for MajorCredits with brand property for unique identification
interface MajorCredits {
  credits: number;
  brand: 'major';
}

// Interface for MinorCredits with brand property for unique identification
interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major'
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor'
  };
}

// Example usage and testing
const majorSubject1: MajorCredits = { credits: 3, brand: 'major' };
const majorSubject2: MajorCredits = { credits: 4, brand: 'major' };

const minorSubject1: MinorCredits = { credits: 1, brand: 'minor' };
const minorSubject2: MinorCredits = { credits: 2, brand: 'minor' };

// Test the functions
const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Total Major Credits:', totalMajorCredits);
console.log('Total Minor Credits:', totalMinorCredits);
