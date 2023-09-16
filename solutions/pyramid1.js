let rows = 10
for (let x  = 0; x < rows; x ++){
    str = " ".repeat(rows -x)
    str += "*".repeat(x * 2 + 1)
    console.log(str);  
}