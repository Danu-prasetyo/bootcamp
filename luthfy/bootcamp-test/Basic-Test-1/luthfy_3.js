class Siswa {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getData() {
        return ([
            "Name: " + this.name,
            "Age: " + this.age,
            'Gender: ' + this.gender
        ].toString())
    }
};

class NomorId extends Siswa {
    constructor(name, age, gender, id) {
        super(name, age, gender);
        this.id = id;
    }
    getStudentInfo() {
        return ([
            "Name: " + this.name,
            "Age: " + this.age,
            'Gender: ' + this.gender,
            "ID: " + this.id
        ].toString())
    }
};

const getSiswa = new Siswa("Luthfy", 20, "Male");
console.log(getSiswa.getData());

const getStudentID = new NomorId("Luthfy", 20, "Male", "12345");
console.log(getStudentID.getStudentInfo());