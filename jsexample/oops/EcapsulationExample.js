class EncapsulationExample
{
      constructor()
      {
        var name;
        var email;
      }
      getName()
      {
        return this.name;
      }

      setName(name)
      {
        this.name=name;
      }
      getEmail()
      {
        return this.email;
      }

      setEmail(email)
      {
        this.email=email;
      }

}

const obj = new EncapsulationExample();
obj.setName("ABCD");
console.log(obj.getName());