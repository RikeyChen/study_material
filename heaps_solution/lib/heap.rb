class BinaryMinHeap

  def initialize(&prc)
    self.store = []
    self.prc = Proc.new {|a, b| a <=> b}
  end

  def count
    store.length
  end

  def extract
    raise 'no element to extract' if count == 0
    val = store[0]

    if count > 1
      store[0] = store.pop
      self.class.heapify_down(store, 0, &prc)
    else
      store.pop
    end

    val
  end

  def peek
    raise 'no element to peek' if count == 0
    store[0]
  end

  def push(val)
    store << val
    self.class.heapify_up(store, count - 1, &prc)
  end

  private
    attr_accessor :store, :prc

  def self.child_indices(len, parent_index)
    [2 * parent_index + 1, 2 * parent_index + 2].select do |idx|
      idx < len
    end
  end

  def self.parent_index(child_index)
    raise 'root has no parent' if child_index == 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new {|a, b| a <=> b}

    left_idx, right_idx = child_indices(len, parent_idx)

    parent_val = array[parent_idx]
    children = []
    children << array[left_idx] if left_idx
    children << array[right_idx] if right_idx

    if children.all? {|child| prc.call(parent_val, child) <= 0}
      return array
    end

    swap_idx = nil

    if children.length == 1
      swap_idx = left_idx
    else
      swap_idx = prc.call(children[0], children[1]) == -1 ? left_idx : right_idx
    end

    array[swap_idx], array[parent_idx] = array[parent_idx], array[swap_idx]
    heapify_down(array, swap_idx, len, &prc)
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc ||= Proc.new {|a, b| a <=> b}

    return array if child_idx == 0

    parent_idx = parent_index(child_idx)

    child_val, parent_val = array[child_idx], array[parent_idx]

    if prc.call(child_val, parent_val) >= 0
      return array
    end

    array[child_idx], array[parent_idx] = array[parent_idx], array[child_idx]
    heapify_up(array, parent_idx, len, &prc)
  end
end
