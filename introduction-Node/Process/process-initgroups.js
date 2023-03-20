// Reads /etc/group and initialize
// s the group access 
// list, using all groups of which 
// the user is a member. This is a privileged 
// operation, meaning you need to be root or have the
//  CAP_SETGID capability.

console.log(process.getgroups());
process.initgroups('bnoordhuis', 1000);
console.log(process.getgroups());
process.setgid(1000);
console.log(process.getgroups())