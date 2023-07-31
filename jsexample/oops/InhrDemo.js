class Admin
{
     accept(id,name)
     {
        this.id=id;
        this.name=name;
     }
     display()
     {
        console.log("Id is ",this.id," Name is ",this.name)
     }
}

class Employee extends Admin
{
    accept1(salary)
    {
        this.salary=salary;
    }
    display1()
    {
        console.log("Salary is ",this.salary);
    }

}
const obj = new Employee();
obj.accept(1001,"EMP1");
obj.accept1(14000);
obj.display();
obj.display1();