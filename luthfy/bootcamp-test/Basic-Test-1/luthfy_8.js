const laptop = [
    {id: 1, nama: "Acer Aspire", harga: 15000000},
    {id: 2, nama: "Macbook Pro", harga: 50000000},
    {id: 3, nama: "Dell Inspire", harga: 10000000},
    {id: 4, nama: "MSI", harga: 30000000}
]

function filteredPrice(laptop, min, max) {
    filter = laptop.filter(
        function (filtered) {
            if (filtered.harga >= min && filtered.harga <= max) {
                return filtered;
            }
        }
    )
    for (let i = 0; i < filter.length; i++) {
        delete filter[i].id
    }
    if (filter == 0) {
        return 'Not Found'
    }
    return filter;
}

console.log(filteredPrice(laptop, 1000000, 10000000));