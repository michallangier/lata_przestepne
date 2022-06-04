let year = -8;

try {
    if (Number.isInteger(year)) { 
        console.log(`${year} - correct value (integer).`)
    } else {
        console.log(`${year} is not an integer, type in correct value.`)
        process.exit(1)
    }
} catch {
    throw console.log("Unexpected error.")
}


if ((year % 4) === 0) console.log(`Year: ${year} is a leap year`)
else console.log(`Year: ${year} is not a leap year`)