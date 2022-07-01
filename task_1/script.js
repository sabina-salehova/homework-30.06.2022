var nowDate=new Date().getHours();
console.log(nowDate);
if(nowDate>22 || nowDate<6)
{
    alert('gecedir');
    document.body.style.backgroundColor="black";
    
}
else
{
    alert('gunduzdur');
}
