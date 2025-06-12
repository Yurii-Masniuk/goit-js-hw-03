function slugify(title) {
    const titleLowerCase = title.toLowerCase();
    const words = titleLowerCase.split(' ');
    const args = Array.from(words);
    return args.join('-');
}
console.log(slugify('Arrays for beginners'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));