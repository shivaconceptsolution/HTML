class A
{
    fun()
    {
        console.log("A");
    }
}

class B extends A
{
    fun()
    {
        super.fun();
        console.log("B");
    }
}

class C extends B
{
    fun()
    {
        super.fun();
        console.log("C");
    }
}

const obj = new B();
obj.fun();
const obj1 = new C();
obj1.fun();