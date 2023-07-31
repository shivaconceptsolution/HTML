class Addition
{
   
   add(a1,b1)
    {
        this.a=a1;
        this.b=b1;
        this.c = this.a + this.b;
        console.log('result is '+ this.c)
    }

}

var obj = new Addition();
obj.add(10,2); //call by value