const getImagesByOrientation = (images) => {
    return {
        landscapes: images.filter(img => img.src.width >= img.src.height),
        portraits: images.filter(img => img.src.height > img.src.width)
    }
}

const classifyImages = (images) => {
    const { landscapes, portraits } = getImagesByOrientation(images);
    if (landscapes.length >= portraits.length) {
        for (let i = 0; i < landscapes.length; i++) {
            if (i % 2 == 0 && portraits.length > 0) {
                landscapes.splice(i, 0, portraits.shift())
            }
        }
        return landscapes;
    } else {
        for (let i = 0; i < portraits.length; i++) {
            if (i % 2 == 0 && landscapes.length > 0) {
                portraits.splice(i, 0, landscapes.shift())
            }
        }
        return portraits;
    }
}

export const getImagesPerColumn = (images = [], columns = 1) => {
    const classifiedImages = classifyImages(images);
    const items = [];
    const imagesPerColumn = Math.round(images.length / columns);
    let rest = (columns * imagesPerColumn) > images.length ? 1 : 0;
    for (let i = 0; i < columns; i++) {
        items.push(classifiedImages.splice(0, imagesPerColumn + rest));
        rest = 0;
    }
    return items;
}