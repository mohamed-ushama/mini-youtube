function validate() {
    let username1 = document.getElementById('username1').
    values;
    let pswd = document.getElementById('pswd').
    values;

    if(username1 ==='webdev'&& pswd ==='learn')
    {
        alert('login successfully ');
    } else{
        alert('Login failed');
    }


}