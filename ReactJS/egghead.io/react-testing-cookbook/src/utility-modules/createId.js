/**
 * Utility Module used to create a kebab style id based of:
 * uniqueNumber and first 2 words of description
 */

export default function(uniqueNumber, description) {
    const shortKebabDescription = description
        .toLowerCase()
        .split(' ')
        .slice(0, 2)
        .join('-');
    return `${uniqueNumber}-${shortKebabDescription}`;
}