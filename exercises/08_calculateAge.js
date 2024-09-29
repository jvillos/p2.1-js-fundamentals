const calculateAge = (birthdayStr) => {
    const now = new Date();
    const birthday = new Date(birthdayStr);
    
    let age = now.getFullYear() - birthday.getFullYear();
    const monthDifference = now.getMonth() - birthday.getMonth();

    if (monthDifference < 0 || (monthDifference == 0 && now.getDate() < birthday.getDate())) {
        age-1;
    }

    return age;
};

console.log(calculateAge("1995-06-14"));