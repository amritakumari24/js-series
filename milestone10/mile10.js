// arr = [1,2,3,4,5]
// const a = arr.map(i=>{ 
//     return i*2})
// console.log(a)

// arr = [1,2,3,4,5]
// const a = arr.filter(i=>{ return i%2==0})
// console.log(a)

// arr = [1,2,3,4,5]
// const a = arr.reduce((total, num)=>{
//     return total*num
// }, 1)
// console.log(a)

// Q3. Find the maximum number
// const arr = [10, 25, 3, 89, 42];
// const maxx = arr.reduce((m, i)=>{
//     return i>m? i:m
// },arr[0])
// console.log(maxx)



// const arr = [1,2,3,4,5,6]
// const minn = arr.reduce((m, i)=>{
//     return i<m? i:m
// }, arr[0])
// console.log(minn)

// Q5. Count the number of elements
// const arr = [10, 20, 30, 40, 50];
// const count = arr.reduce((c, i )=>{
//     return  c+1
// },0)
// console.log(count)

// const prices = [100, 250, 50, 300];
// const a = prices.reduce((acc, curr)=>{
//     return acc+curr
// }, 0)
// console.log(a)


// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// // Expected: 4

// const a = arr.reduce((c,i)=>{
//     return i%2==0? c+1:c
// }, 0)
// console.log(a)