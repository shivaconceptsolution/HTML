class Hello
{
     constructor()
     {
          if(this.constructor=="Hello")
          {
               throw new Error("Can not be insstanciated");
          }
     }
     display()
    {
         throw new Error("this is abstract method");
    }
}

class Welcome extends Hello
{
    display()
    {
       console.log("fun");
    }
}

const obj = new Hello();
obj.display();