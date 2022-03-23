export default function countDecorations(bigTree) {
  let decorations = bigTree.value;
  let leftDecorations = bigTree.left ? countDecorations(bigTree.left) : 0
  let rightDecorations = bigTree.right ? countDecorations(bigTree.right) : 0
  return decorations + leftDecorations + rightDecorations;
}