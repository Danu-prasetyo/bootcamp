let array = [
    ['P', 'Z', 'W', 'Q', 'I'],
    ['R', 'S', 'F', 'K', 'D'],
    ['O', 'I', 'D', 'W', 'A'],
    ['N', 'N', 'V', 'A', 'N'],
    ['Z', 'T', 'A', 'N', 'U'],
]

def cari_nama(array):
    nama = "IVAN"
    for i in range(len(array)):
        for j in range(len(array[i])):
            if array[i][j] == nama[0]:
                k = 1
                while k < len(nama) and j+k < len(array[i]) and array[i][j+k] == nama[k]:
                    k += 1
                if k == len(nama):
                    return (i, j)
                k = 1
                while k < len(nama) and i+k < len(array) and array[i+k][j] == nama[k]:
                    k += 1
                if k == len(nama):
                    return (i, j)
    return "Nama IVAN tidak ditemukan dalam array."

array = [
    ['P', 'Z', 'W', 'Q', 'I'],
    ['R', 'S', 'F', 'K', 'D'],
    ['O', 'I', 'D', 'W', 'A'],
    ['N', 'N', 'V', 'A', 'N'],
    ['Z', 'T', 'A', 'N', 'U'],
]

print(cari_nama(array)) 