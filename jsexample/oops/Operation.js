class Addition
{
    accept(a,b)
    {
        this.a=a;
        this.b=b;
    }
    add()
    {
        this.c=this.a+this.b;
    }
    display(s)
    {
        console.log("result of"+ s+ "=",this.c);
    }
}
class Sub extends Addition
{
    sub()
    {
        this.c=this.a-this.b;
    }
}
class Multi extends Addition
{
    multi()
    {
        this.c=this.a*this.b;
    }
}
class Div extends Addition
{
    div()
    {
        this.c=this.a/this.b;
    }
}

const obj = new Addition();
obj.accept(100,2);
obj.add();
obj.display("addition ");

const obj1 = new Div();
obj1.accept(100,2);
obj1.div();
obj1.display("Division ");
