const arrayName = ["Dani", "Danu", "Dono", "Dini", "Rifky", "Rizky", "Rizieq", "Ridwan"];
function filteredName(name, string) {
    filter = name.filter(
        function (filtered) {
            if (filtered.includes(string)) {
                return filtered;
            }
        }
    );
    if (filter.length == 0) {
        return 'Not found';
    }
    return filter;
}
console.log(filteredName(arrayName, "L"));