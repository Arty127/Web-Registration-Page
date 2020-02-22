function main1()
{
    if(validatepass(document.getElementById("name1").value,document.getElementById("name2").value))
    {
        if(phonenumber(document.getElementById("phone").value))
        {
            return true;
        }
    }
    return false;
}

function validatepass(x,y)
{
    if(x!=y)
    {
        alert("Passwords Donot Match!!")
        return false;
    }
    return true;
}
function phonenumber(i)
{
  if(i>100000000 && i<9999999999)
  {
      return true;
  }
  else{
      alert("Invalid Phone Number!!");
      return false;
  }
}
