require 'binary_search_tree'
require 'bst_node'

def kth_largest(tree_node, k)
  tree = BinarySearchTree.new
  result = tree.in_order_traversal(tree_node)
  tree.find(result.reverse[k - 1], tree_node)
end