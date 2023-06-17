const ar= [[0,1,2],[4,3],[5,6,7,8,]];
function printArray(xx)
{ let f = [];
    for (var i=0; i<xx.length; i++)
{
    for(var j = 0; j<xx[i].length; j++)
    {
        f =console.log(xx[i][j]) ;
    }
}
return f;
}
console.log(printArray(ar));
