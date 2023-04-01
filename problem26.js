const countries = ['India', 'USA', 'Japan', 'China'];

if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
  console.log(countries);
}
