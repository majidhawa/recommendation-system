
const users = {
    "user1": ["item1", "item2", "item3"],
    "user2": ["item4", "item5", "item6"],
};

const items = {
    "item1": { name: "Item One", category: "Electronics" },
    "item2": { name: "Item Two", category: "Clothing" },
    "item3": { name: "Item Three", category: "Home" },
    "item4": { name: "Item Four", category: "Electronics" },
    "item5": { name: "Item Five", category: "Clothing" },
    "item6": { name: "Item Six", category: "Home" },
};

function getUserPreferences(userId) {
    return users[userId] || [];
}

function recommendItems(userId) {
    const preferences = getUserPreferences(userId);
    let recommendedItems = [];

    preferences.forEach(preference => {
        if (items[preference]) {
            recommendedItems.push(items[preference]);
        }
    });

    return recommendedItems;
}


console.log(recommendItems("user1"));
