const a = 178;
const b = 170;
const c = 180;

if (a > b && a > c) {
    console.log('A Lebih tinggi dari B dan C');
    if (b > c) {
        console.log('B Lebih tinggi dari C');
        console.log('A, B, C');
    } else {
        console.log('C Lebih tinggi dari B');
        console.log('A, C, B ')
    }
} else if(b > a && b > c) {
    console.log('B Lebih tinggi dari A dan C');
    if (a > c) {
        console.log('A Lebih tinggi dari C');
        console.log('B, A, C');
    } else {
        console.log('C Lebih tinggi dari B');
        console.log('B, C, A ')
    }
} else {
    console.log('C Lebih tinggi dari A dan B');
    if (a > b) {
        console.log('b Lebih tinggi dari C');
        console.log('C, A, B');
    } else {
        console.log('C Lebih tinggi dari B');
        console.log('C, B, A ')
    }
}