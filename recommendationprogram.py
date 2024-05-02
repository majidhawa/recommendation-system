

users = {
    "user1": ["item1", "item2", "item3"],
    "user2": ["item4", "item5", "item6"],
}

items = {
    "item1": {"name": "Item One", "category": "Electronics"},
    "item2": {"name": "Item Two", "category": "Clothing"},
    "item3": {"name": "Item Three", "category": "Home"},
    "item4": {"name": "Item Four", "category": "Electronics"},
    "item5": {"name": "Item Five", "category": "Clothing"},
    "item6": {"name": "Item Six", "category": "Home"},
}

def get_user_preferences(user_id):
    return users.get(user_id, [])

def recommend_items(user_id):
    preferences = get_user_preferences(user_id)
    recommended_items = []
    
    for preference in preferences:
        if preference in items:
            recommended_items.append(items[preference])
    
    return recommended_items


print(recommend_items("user1"))
