require 'bst_node'

# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.

class BinarySearchTree
  attr_reader :root

  def initialize
    @root = nil
  end

  def insert(value)
    @root = insert_into_tree(@root, value)
  end

  def find(value, tree_node = @root)
    return nil if tree_node.nil?

    return tree_node if tree_node.value == value

    if value <= tree_node.value
      find(value, tree_node.left)
    else
      find(value, tree_node.right)
    end
  end

  def delete(value)
    @root = delete_from_tree(@root, value)
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    return nil if tree_node.nil?
    maximum(tree_node.right) if tree_node.right
    return tree_node
  end

  def depth(tree_node = @root)
    return -1 if tree_node.nil?

    left_depth = depth(tree_node.left)
    right_depth = depth(tree_node.right)
    [left_depth, right_depth].max + 1
  end

  def is_balanced?(tree_node = @root)
    return true if tree_node.nil?

    left_balanced = is_balanced?(tree_node.left)
    right_balanced = is_balanced?(tree_node.right)
    this_balanced = (depth(tree_node.left) - depth(tree_node.right)).abs <= 1
    left_balanced && right_balanced && this_balanced
  end

  def in_order_traversal(tree_node = @root, arr = [])
    return [] if tree_node.nil?
    left_solved = in_order_traversal(tree_node.left)
    right_solved = in_order_traversal(tree_node.right)
    left_solved + [tree_node.value] + right_solved
  end

  private
  # optional helper methods go here:
  def insert_into_tree(root_node, value)
    return BSTNode.new(value) if root_node.nil?

    if value <= root_node.value
      root_node.left = insert_into_tree(root_node.left, value)
    else
      root_node.right = insert_into_tree(root_node.right, value)
    end

    root_node
  end

  def delete_from_tree(root_node, value)
    if value == root_node.value
      root_node = remove(root_node)
    elsif value <= root_node.value
      root_node.left = delete_from_tree(root_node.left, value)
    else
      root_node.right = delete_from_tree(root_node.right, value)
    end

    root_node
  end

  def remove(node)
    if node.left.nil? && node.right.nil?
      node = nil
    elsif node.left && node.right.nil?
      node = node.left
    elsif node.left.nil? && node.right
      node = node.right
    else
      node = replace_parent(node)
    end

    node
  end

  def replace_parent(node)
    replacement_node = maximum(node.left)

    if replacement_node == node.left
      replacement_node.right = node.right
      return replacement_node
    end

    if replacement_node.left
      promote_child(node.left)
    end

    replacement_node.left = node.left
    replacement_node.right = node.right

    replacement_node
  end

  def promote_child(node)
    parent = node
    child = node.right

    while child.right
      parent = parent.right
      child = child.right
    end

    parent.right = child.left
  end
end
