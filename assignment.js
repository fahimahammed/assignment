// https://github.com/fahimahammed/assignment

// KiloMeter to meter Conversion
function kilometerToMeter(distanceInKilometer) {
    if (distanceInKilometer < 0) {
        return "Not accessable! You must input a positive number.";
    }
    var distanceInMeter = distanceInKilometer * 1000; // 1 km = 1000 m.
    return distanceInMeter;
}

//Budget Calculator
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    if (watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0) {
        return "Not accessable! You must input positive number.";
    }
    else if(watchQuantity == 0 && phoneQuantity == 0 && laptopQuantity == 0){
        return "You have no cost for Watch, Phone & Laptop.";
    }
    else {
        var totalWatchPrice = watchQuantity * 50; // Per watch price = 50$
        var totalPhonePrice = phoneQuantity * 100; // Per phone price = 100$
        var totalLaptopPrice = laptopQuantity * 500; // Per Laptop Price = 500$
        return totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    }
}

// Hotel Cost Calculation
function hotelCost(day){
    if(day < 0){
        return "Not accessable! You must input a positive number.";
    }
    else if(day == 0){
        return "You have no Hotel Cost.";
    }
    else if(day <= 10){
        var cost = day * 100; // Per day 100$ for first 10 days.
        return cost;
    }
    else if(day <= 20){
        var cost = (10 * 100) + ( ( day - 10 ) * 80 ); // First 10 Days hotel cost = (100 * 10)= 1000.
        return cost;
    }
    else{
        var cost = (10 * 100) + (10 * 80) + ( ( day - 20 ) * 50 ); // First 10 days hotel cost = (100 * 10) = 1000 and 11th to 20th day hotel cost = (10 * 80) = 800.
        return cost;
    }
}

// To find name Which contain maximum char (maga friend)
function megaFriend(friendList) {
    if (friendList == 0) {
        return "Not Accessable! Your Frind List is empty.";
    }
    else {
        var strLength = 0;
        for (var i = 0; i < friendList.length; i++) {
            var element = friendList[i];
            var elementLength = element.length;

            if (strLength < elementLength) {
                strLength = elementLength;
                var max = friendList[i];
            }
        }
        return max;
    }
}


