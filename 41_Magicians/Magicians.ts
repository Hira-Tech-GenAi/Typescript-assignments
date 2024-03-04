//Written by: Hira Khalid

// Array magicians
const magicians: string[] = ["Mariyam", "Hira", "Iqra", "Zainab"];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);
