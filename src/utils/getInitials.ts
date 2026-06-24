export const getInitials = (fullName: string) => {
  return fullName
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((name) => name[0])
    .join('')
    .toUpperCase()
}
