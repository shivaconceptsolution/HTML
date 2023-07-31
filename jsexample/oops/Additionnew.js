class Additionnew
{
    
    constructor(a,b)
    {
       this.z=[[],[]]
       this.a=x;
       this.b=y;
    }
    add()
    {
      for(var i=0;i<2;i++)
      {
         for(var j=0;j<2;j++)
         {
            this.z[i][j] = this.a[i][j] + this.b[i][j]
         }
      }
    }
    display()
    {
      for(var i=0;i<2;i++)
      {
         for(var j=0;j<2;j++)
         {
            console.log(this.z[i][j])
         }
      }
    }
}
var x = [[1,2],[3,4]]
var y = [[1,2],[3,4]]
const obj = new Additionnew(x,y)
obj.add();
obj.display();
