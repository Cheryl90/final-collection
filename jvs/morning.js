function showInfo(month) {
    const info = {
        'May': 'Morning Glories begin to show significant growth and development, making it an exciting time for enthusiasts of these flowers.',
        'June': 'Morning Glories are typically in their peak blooming phase. This is especially true in temperate regions where summer is just beginning.',
        'July': 'In July, Morning Glories continue to display their characteristic vibrant blooms and rapid growth, especially in temperate climates where summer is in full swing.',
        'August': 'In August, Morning Glory plants are usually at the height of their growth and flowering, especially in temperate climates. This is a period of continued blooming and lush vine development.',
        'September': 'As September arrives, Morning Glory plants often continue to show vibrant growth and blooming.',
        // Add similar info for other months
    };

    document.getElementById('month-info').textContent = info[month] || 'No specific info for this month.';
}

function displayInfo(imgId) {
    var info = {
        'img1': 'Ipomoea nil: Ipomoea nil is a species of Ipomoea morning glory known by several common names, including picotee morning glory, ivy morning glory, ivy-leaf morning glory, and Japanese morning glory. It is native to the tropical Americas, and has been introduced widely across the world.',
        'img2': 'Ipomoea: Ipomoea is the largest genus in the plant family Convolvulaceae, with over 600 species. It is a large and diverse group, with common names including morning glory, water convolvulus or water spinach, sweet potato, bindweed, moonflower, etc.',
        // more info
    };
    document.getElementById('image-info').textContent = info[imgId];
}