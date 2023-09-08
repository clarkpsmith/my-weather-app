export function getWindDirection(degrees) {
  // Define the cardinal and ordinal directions and their corresponding degree ranges
  const directions = [
    { label: 'North', min: 0, max: 11.25 },
    { label: 'North-Northeast', min: 11.25, max: 33.75 },
    { label: 'Northeast', min: 33.75, max: 56.25 },
    { label: 'East-Northeast', min: 56.25, max: 78.75 },
    { label: 'East', min: 78.75, max: 101.25 },
    { label: 'East-Southeast', min: 101.25, max: 123.75 },
    { label: 'Southeast', min: 123.75, max: 146.25 },
    { label: 'South-Southeast', min: 146.25, max: 168.75 },
    { label: 'South', min: 168.75, max: 191.25 },
    { label: 'South-Southwest', min: 191.25, max: 213.75 },
    { label: 'Southwest', min: 213.75, max: 236.25 },
    { label: 'West-Southwest', min: 236.25, max: 258.75 },
    { label: 'West', min: 258.75, max: 281.25 },
    { label: 'West-Northwest', min: 281.25, max: 303.75 },
    { label: 'Northwest', min: 303.75, max: 326.25 },
    { label: 'North-Northwest', min: 326.25, max: 348.75 },
    { label: 'North', min: 348.75, max: 360 },
  ];

  // Find the direction that matches the provided degrees
  for (const direction of directions) {
    if (degrees >= direction.min && degrees < direction.max) {
      return direction.label;
    }
  }

  // Handle edge case: 360 degrees is also 'North'
  if (degrees === 360) {
    return 'North';
  }

  // Handle invalid degrees
  return 'Invalid';
}
