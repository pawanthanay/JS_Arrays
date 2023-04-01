// Get the current date and time
const now = new Date();

// Format the date and time as "YYYY-MM-DD HH:mm"
const formattedDateTime1 = now.getFullYear() + '-' + 
                           (now.getMonth() + 1).toString().padStart(2, '0') + '-' + 
                           now.getDate().toString().padStart(2, '0') + ' ' + 
                           now.getHours().toString().padStart(2, '0') + ':' + 
                           now.getMinutes().toString().padStart(2, '0');
console.log("Formatted date and time as 'YYYY-MM-DD HH:mm': " + formattedDateTime1);

// Format the date and time as "DD-MM-YYYY HH:mm"
const formattedDateTime2 = now.getDate().toString().padStart(2, '0') + '-' + 
                           (now.getMonth() + 1).toString().padStart(2, '0') + '-' + 
                           now.getFullYear() + ' ' + 
                           now.getHours().toString().padStart(2, '0') + ':' + 
                           now.getMinutes().toString().padStart(2, '0');
console.log("Formatted date and time as 'DD-MM-YYYY HH:mm': " + formattedDateTime2);

// Format the date and time as "DD/MM/YYYY HH:mm"
const formattedDateTime3 = now.getDate().toString().padStart(2, '0') + '/' + 
                           (now.getMonth() + 1).toString().padStart(2, '0') + '/' + 
                           now.getFullYear() + ' ' + 
                           now.getHours().toString().padStart(2, '0') + ':' + 
                           now.getMinutes().toString().padStart(2, '0');
console.log("Formatted date and time as 'DD/MM/YYYY HH:mm': " + formattedDateTime3);
