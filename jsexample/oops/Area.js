class Circle
{

     accept(a)
     {
        this.a=a;
        this.area=0;
     }
     carea()
     {
        this.area=3.14*this.a*this.a;
     }
     display(s)
     {
        console.log("area of "+s + "= "+this.area);
     }

}
class Triangle extends Circle
{
    accept1(b)
    {
        this.b=b;
    }
    tarea()
    {
        this.area = (this.a*this.b)/2;
    }


}

class Rectangle extends Triangle
{
   rarea()
   {
    this.area = (this.a*this.b);
   }
}


const obj = new Circle();
obj.accept(5);
obj.carea();
obj.display("circle");

const obj1 = new Triangle();
obj1.accept(5);
obj1.accept1(2)
obj1.tarea();
obj1.display("triangle");

const obj2 = new Rectangle();
obj2.accept(5);
obj2.accept1(2)
obj2.rarea();
obj2.display("rectangle");