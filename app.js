const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
function findUserByUsername(array,username){
    return array.find(function(name){
        return name['username'] === username;
    });
}
// function deeds to identify the username like abouve but if the user name exits needs to remove it 
//will need the index of the username to remove
//Issues! if specific username isn't found just removes next in array
//doesn't return undefined if name isn't found
function removeUser(array,username){
    let removeIndex = array.findIndex(function(name){
        return name['username'] === username;
    });
    return array.splice(removeIndex,1);
}